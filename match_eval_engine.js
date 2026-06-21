// match_eval_engine.js — 本场表现评价引擎 | V1.77
// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
//
// 六维评价模型 (100分制) — 职责完全分离:
//   SD  统计统治力 Statistical Dominance    16分  衡量场面控制: 控球率·射门占比·射正率·危险进攻·角球·总攻
//   EvR 预实对比差 Expectation vs Reality    20分  衡量实力兑现: 盘口概率差·让球盘击穿·赛果是否匹配纸面预期
//   CE  进攻效率   Clinical Efficiency       18分  衡量终结质量: 射门转化率·射正率·关键时段进球·点球/运动战区分
//   DR  防守韧性   Defensive Resilience      18分  衡量防守品质: 纪律控制(4)+防守成就·零封·扑救·对手转化率抑制(8)
//   GS  出线前景   Group Situation            18分  衡量赛程接受度: 纸面实力差+赛果→对出线是否有利(与EvR解耦)
//   EC  外部评论   External Commentary        10分  媒体共识校验: 多家媒体评分映射
//
// 依赖: prob_engine.js, matchdata_2026.js, groupsdata.js
// ================================================================
(function(){
'use strict';

// ========== 桥接 ==========
const wcData = window.wc2026AllMatches || {};
const teamDB = window.teamDB || {};
const teamMap = window.teamMap || {};
const allGM = window.allGM || [];
const HISTORY_INDEX = window.HISTORY_INDEX || {};
const FORM_WEIGHT_SCHEDULE = window.FORM_WEIGHT_SCHEDULE || {};

// calcAIPbs from prob_engine (will be set after prob_engine loads)
let calcAIPbsFn = null;
function ensureAIPbs(){ if(!calcAIPbsFn && typeof window.calcAIPbs==='function') calcAIPbsFn=window.calcAIPbs; }

// ========== 辅助 ==========
function getFlag(code){
  if(typeof pastFlag==='function') return pastFlag(code);
  return 'https://flagcdn.com/w80/'+code.toLowerCase()+'.png';
}
function getZh(code){ var m=teamMap[code]; return m?m.zh:code; }

function parseMatchKey(key){
  var parts=key.split('|'); // "2026|A|MEX|RSA"
  return { edition:parts[0], stage:parts[1], home:parts[2], away:parts[3] };
}

function getMatchData(key){ return wcData[key]||null; }

// ========== 维度一：统计统治力 (25分) ==========
function calcStatisticalDominance(stats, redH, redA, side){
  if(!stats) return {score:12.5, summary:'暂无统计数据'};
  var h=stats, sideKey=side==='home'?'h':'a', oppKey=side==='home'?'a':'h';
  var possession=h.possession[sideKey]/100;
  var shots=h.shots[sideKey], oppShots=h.shots[oppKey];
  var totalShots=shots+oppShots||1;
  var shotRatio=shots/totalShots;
  var sot=h.shotsOnTarget[sideKey], totalSot=(h.shotsOnTarget[sideKey]+h.shotsOnTarget[oppKey])||1;
  var sotRatio=sot/totalSot;
  var danger=h.dangerousAttacks[sideKey], totalDanger=(h.dangerousAttacks[sideKey]+h.dangerousAttacks[oppKey])||1;
  var dangerRatio=danger/totalDanger;
  var corner=h.corners[sideKey], totalCorner=(h.corners[sideKey]+h.corners[oppKey])||1;
  var cornerRatio=corner/totalCorner;
  var attack=h.attacks[sideKey], totalAttack=(h.attacks[sideKey]+h.attacks[oppKey])||1;
  var attackRatio=attack/totalAttack;

  var raw=possession*20+shotRatio*30+sotRatio*20+dangerRatio*15+cornerRatio*5+attackRatio*10;

  // 红牌修正
  var myRed=side==='home'?redH:redA, oppRed=side==='home'?redA:redH;
  if(oppRed>0) raw=Math.min(100,raw*1.08);
  if(myRed>0) raw=Math.max(5,raw*0.88);

  var score=Math.round(Math.min(16,Math.max(2,raw*0.25)));
  var summary='';
  if(score>=20) summary='全场数据碾压对手，掌控比赛节奏';
  else if(score>=15) summary='数据占优，场面处于主动';
  else if(score>=10) summary='数据与对手接近，势均力敌';
  else if(score>=5) summary='数据处于下风，场面被动';
  else summary='数据被对手碾压，全面处于劣势';
  return {score:score, summary:summary, raw:raw.toFixed(1)};
}

// ========== 盘前赔率查找 ==========
var _oddsMap=null;
function buildOddsMap(){
  if(_oddsMap) return _oddsMap;
  _oddsMap={};
  var mo=window.matchOdds||{};
  Object.keys(mo).forEach(function(k){
    var m=mo[k]; if(m.h&&m.a) _oddsMap[m.h+'|'+m.a]=m;
  });
  return _oddsMap;
}
function getMatchOdds(homeCode, awayCode){
  var map=buildOddsMap();
  return map[homeCode+'|'+awayCode]||map[awayCode+'|'+homeCode]||null;
}
// 赔率反推去水概率
function oddsToImpliedProb(hw, d, aw){
  var rw=1/(hw||2.5), rd=1/(d||3.2), ra=1/(aw||2.8);
  var total=rw+rd+ra;
  return {ph:(rw/total*100), pd:(rd/total*100), pa:(ra/total*100)};
}

// ========== 维度二：预实对比 (30分) — 盘前赔率核心 ==========
var ZONE={BIG_FAV:'大热', NORMAL:'预期', MINOR_COLD:'超常', MAJOR_COLD:'爆冷'};

function calcExpectationVsReality(homeCode, awayCode, actualScore, side){
  var odds=getMatchOdds(homeCode, awayCode);
  if(!odds){ return {score:15, summary:'无盘前赔率数据', resultType:ZONE.NORMAL}; }
  var imp=oddsToImpliedProb(odds.hw, odds.d, odds.aw);
  var pH=imp.ph, pD=imp.pd, pA=imp.pa;
  var favSide=pH>=pA?'home':'away';
  var favProb=Math.max(pH, pA), undProb=Math.min(pH, pA);
  var probGap=favProb-undProb; // 概率差，表征强弱分明程度
  var sh=actualScore.sh, sa=actualScore.sa;
  var isHomeWin=sh>sa, isDraw=sh===sa, isAwayWin=sa>sh;
  var actualWinSide=isHomeWin?'home':(isAwayWin?'away':'draw');
  var isFavWin=actualWinSide===favSide;
  var isDraw1=isDraw;
  var score, summary, rType;

  // 让球盘检查：热门方净胜球必须大于让球线绝对值才算击穿
  var ahLine=Math.abs(odds.ahLine||0);
  var goalDiff=Math.abs(sh-sa);
  var favCovered=goalDiff > ahLine; // 净胜球 > 让球线（走水不算击穿）

  // probGap分级: ≥40 深度倾向, ≥20 中等倾向, <20 盘口均衡
  var isDeepGap=probGap>=40, isMidGap=probGap>=20&&probGap<40, isTight=probGap<20;

  if(isFavWin){ // 热门方获胜 — 基分统一为18, 让球盘击穿+3, probGap加成体现对手质量
    if(!isDraw1&&isDeepGap&&favCovered){ score=Math.round(18+3+probGap*0.08); rType=ZONE.BIG_FAV; summary='盘口深度兑现，热门方碾压取胜';}
    else if(!isDraw1&&isDeepGap){ score=Math.round(18+probGap*0.06); rType=ZONE.NORMAL; summary='盘口倾向大热但净胜球未击穿让球线，正常取胜';}
    else if(!isDraw1&&isMidGap){ score=Math.round(18+probGap*0.06); rType=ZONE.NORMAL; summary='盘口倾向明显，热门方正常取胜';}
    else if(!isDraw1&&isTight){ score=Math.round(19+probGap*0.06); rType=ZONE.NORMAL; summary='均势对话中取胜，实力经受考验';}
    else { score=Math.round(10+probGap*0.05); rType=ZONE.NORMAL; summary='平局与盘口方向基本吻合';}
  }else if(isDraw1){ // 平局
    if(isDeepGap){ score=Math.round(4+pD*0.06); rType=ZONE.MAJOR_COLD; summary='盘口深度倾向一方，平局属重大意外';}
    else if(isMidGap){ score=Math.round(8+pD*0.06); rType=ZONE.MINOR_COLD; summary='盘口倾向一方但平局收场，小有意外';}
    else { score=Math.round(14+pD*0.05); rType=ZONE.NORMAL; summary='盘口均衡，平局在预期范围';}
  }else{ // 冷门方获胜
    if(isDeepGap){ score=Math.round(22+probGap*0.1); rType=ZONE.MAJOR_COLD; summary='盘口深度看低却爆冷取胜，重大冷门';}
    else if(isMidGap){ score=Math.round(18+probGap*0.08); rType=ZONE.MINOR_COLD; summary='盘口略看低但逆袭成功，小冷门';}
    else { score=Math.round(17+probGap*0.05); rType=ZONE.NORMAL; summary='盘口均衡，任一方取胜均在预期内';}
  }
  // 己方得分调整
  var myIsFav=(side===favSide);
  var myWin=(side==='home'&&isHomeWin)||(side==='away'&&isAwayWin);
  var myDraw=isDraw1, myLose=!myWin&&!myDraw;

  var myGA=side==='home'?sa:sh;
  if(myDraw&&myIsFav&&probGap>=15) score=Math.max(1,score-5);       // 热门被逼平罚分
  if(myDraw&&!myIsFav&&probGap>=15){ score=Math.min(20,score+8); if(myGA===0) score=Math.min(20,score+4); } // 冷门逼平加分, 零封额外
  if(myLose&&myIsFav) score=Math.max(1,score-10);                    // 热门输球重罚
  if(myWin&&!myIsFav) score=Math.min(20,score+8);                    // 冷门取胜加分
  // 冷门方败北: 净胜球越大 EvR 越低 (避免 0-3 输球与赢家同分)
  if(myLose&&!myIsFav&&goalDiff>=1) score=Math.max(6,score-Math.min(12,goalDiff*4));

  // 侧级结果类型（己方视角）
  var sideType;
  if(myWin&&myIsFav&&probGap>=40&&favCovered) sideType=ZONE.BIG_FAV;  // 大热碾压+击穿
  else if(myWin&&myIsFav) sideType=ZONE.NORMAL;                       // 预期取胜（含大热未击穿）
  else if(myWin&&!myIsFav) sideType=ZONE.MINOR_COLD;                   // 以弱胜强→超常
  else if(myDraw&&myIsFav) sideType=ZONE.MAJOR_COLD;                  // 热门被逼平→爆冷
  else if(myDraw&&!myIsFav) sideType=ZONE.MINOR_COLD;                 // 冷门逼平→超常
  else if(myLose&&myIsFav) sideType=ZONE.MAJOR_COLD;                  // 大热输球→爆冷
  else sideType=ZONE.NORMAL;                                          // 不被看好·输球正常→预期

  score=Math.min(20,Math.max(1,Math.round(score)));
  return {score:score, summary:summary, resultType:rType, sideType:sideType, impliedProb:imp, probGap:probGap, favSide:favSide};
}

// ========== 维度三：进攻效率 (12分) ==========
function calcClinicalEfficiency(stats, goals, side){
  if(!stats) return {score:6, summary:'暂无统计数据'};
  var sideKey=side==='home'?'h':'a';
  var sideGoals=goals?goals.filter(function(x){return x.side===side;}):[];
  var g=sideGoals.length;
  var shots=stats.shots[sideKey]||1, sot=stats.shotsOnTarget[sideKey]||1;
  // 点球进球对转化率贡献打折 (点球是"送"的机会, 非运动战创造)
  var penGoals=0, openGoals=0;
  sideGoals.forEach(function(x){ if(x.type==='penalty') penGoals++; else openGoals++; });
  var effGoals=openGoals+penGoals*0.5; // 点球权重×0.5
  var convRate=effGoals/Math.max(sot,1);
  var shotAcc=sot/Math.max(shots,1);

  // 关键时段进球加分 (75'+ 权重提升)
  var clutchBonus=0;
  sideGoals.forEach(function(x){
    var m=parseInt(x.min)||0;
    if(m>=75) clutchBonus+=4;
    else if(m<=15) clutchBonus+=1;
  });

  var raw=convRate*50+shotAcc*30+effGoals*3+Math.min(clutchBonus,8);
  var score=Math.round(Math.min(18,Math.max(1,raw*0.18)));
  var summary='';
  if(score>=13) summary='终结能力出色，射门转化率极高';
  else if(score>=9) summary='进攻效率良好，创造并把握了机会';
  else if(score>=5) summary='进攻效率一般，门前把握能力待提升';
  else summary='进攻哑火，未能有效转化为进球';
  return {score:score, summary:summary};
}

// ========== 维度四：防守韧性 (12分) ==========
// 职责: 衡量防守品质 — 纪律控制(4分) + 防守成就(8分, 按对手强度缩放)
function calcDefensiveResilience(stats, goals, matchData, side, teamCode, oppCode){
  if(!stats) return {score:6, summary:'暂无统计数据'};
  var sideKey=side==='home'?'h':'a', oppKey=side==='home'?'a':'h';

  // ── 纪律控制 (4分) ──
  var fouls=stats.fouls[sideKey]||0;
  var yellows=stats.yellowCards[sideKey]||0;
  var reds=stats.redCards[sideKey]||0;
  var foulScore=Math.max(0,1-fouls/20)*2.5;
  var cardScore=Math.max(0,2-yellows*0.5-reds*1.5);

  // ── 防守成就 (8分, 对手强度加权) ──
  var defScore=0;
  var oppRank=50;
  if(typeof teamDB!=='undefined'&&teamDB[oppCode]) oppRank=teamDB[oppCode].r||50;
  var oppSt=typeof getOpponentStrength==='function'?getOpponentStrength(oppRank):1.0;
  // oppSt: 0.65(弱)~1.5(顶级), 防守强敌才值得高分

  var sh=matchData?matchData.score.sh:0, sa=matchData?matchData.score.sa:0;
  var ga=side==='home'?sa:sh;
  var oppSOT=stats.shotsOnTarget[oppKey]||0;

  // 零封
  if(ga===0) defScore+=3;

  // 对手转化率抑制 (射正≥4才纳入, 避免样本过小)
  if(oppSOT>=4){
    var oppGoals=ga;
    var oppConvRate=oppGoals/Math.max(oppSOT,1);
    if(oppConvRate<0.1) defScore+=3;       // 几乎封死
    else if(oppConvRate<0.25) defScore+=2;  // 出色限制
    else if(oppConvRate<0.4) defScore+=1;   // 有效干扰
  }

  // 扑救隐含分 (对手射正-进球)
  var savesImplied=oppSOT-ga;
  if(savesImplied>=6) defScore+=3;
  else if(savesImplied>=4) defScore+=2;
  else if(savesImplied>=2) defScore+=1;

  // 对手强度缩放: 防住强队=英雄, 防住弱队=本分 (无硬上限, 由DR总分18兜底)
  defScore=Math.round(defScore*oppSt);

  // ── 韧性加分 (先失球后扳平/反超) ──
  var resilienceBonus=0;
  if(goals&&goals.length>0){
    var firstGoal=goals[0];
    if(firstGoal.side!==side){
      var myGoals=goals.filter(function(x){return x.side===side;});
      if(myGoals.length>0) resilienceBonus=1;
    }
  }

  var score=Math.round(Math.min(18,Math.max(1,foulScore+cardScore+defScore+resilienceBonus)));
  var summary='';
  if(defScore>=8) summary='防守固若金汤，对手进攻被全面压制';
  else if(defScore>=5) summary='防守表现出色，有效限制了对手的终结';
  else if(score>=10) summary='防守稳健，整体纪律和韧性良好';
  else if(score>=6) summary='防守有漏洞，犯规或失球偏多';
  else summary='防线崩溃，犯规失控或失球过多';
  return {score:score, summary:summary};
}

// ========== 维度五：出线前景 (20分) ==========
// 职责: 衡量"以该队纸面实力为基准，这个赛果对出线是否有利"
// 与 EvR 解耦: GS 只看 paperGap(排名差) + 赛果 + 积分形势，不看盘口
function calcGroupSituation(teamCode, matchKey, matchData){
  var parsed=parseMatchKey(matchKey);
  var stage=parsed.stage, round=matchData?matchData.round:1;
  if(stage==='R32'||stage==='R16'||stage==='QF'||stage==='SF'||stage==='TP'||stage==='FINAL'){
    var koBase={R32:14,R16:16,QF:18,SF:19,TP:19,FINAL:20};
    return {score:koBase[stage]||14, summary:'淘汰赛阶段，双方战意均处峰值'};
  }

  // 小组赛: paperGap = 对手排名 - 己方排名 (FIFA排名数字越小越强, 正=对手弱我强)
  var myRank=50, oppRank=50;
  if(teamDB[teamCode]) myRank=teamDB[teamCode].r||50;
  var oppCode=parsed.home===teamCode?parsed.away:parsed.home;
  if(teamDB[oppCode]) oppRank=teamDB[oppCode].r||50;
  var paperGap=oppRank-myRank;

  var sh=matchData?matchData.score.sh:0, sa=matchData?matchData.score.sa:0;
  var isHome=parsed.home===teamCode;
  var gf=isHome?sh:sa, ga=isHome?sa:sh;
  var gd=gf-ga;
  var isWin=gf>ga, isDraw=gf===ga, isLoss=gf<ga;

  var score=0, summary='';

  if(isWin){
    if(paperGap>=10)      { score=14; summary='强胜弱，兑现纸面预期，出线基础稳固'; }
    else if(paperGap<=-10){ score=19; summary='以弱胜强！出线主动权大增，提振小组前景'; }
    else if(paperGap>=3)  { score=16; summary='稍强取胜，出线形势向好'; }
    else if(paperGap<=-3) { score=18; summary='稍弱抢下胜利，出线前景显著改善'; }
    else                  { score=16; summary='均势取胜，出线竞争占得先机'; }
  }else if(isDraw){
    if(paperGap>=10)      { score=6;  summary='强被弱逼平，出线蒙阴影，急需后续追分'; }
    else if(paperGap>=3)  { score=9;  summary='稍强被逼平，出线形势略紧'; }
    else if(paperGap<=-10){ score=18; summary='以弱逼平强敌，重大成功，出线希望大增'; }
    else if(paperGap<=-3) { score=15; summary='稍弱抢下1分，出线前景可接受'; }
    else                  { score=12; summary='均势平局，各取所需，出线形势尚不明朗'; }
  }else{ // 负
    if(paperGap>=10)      { score=2;  summary='强输弱，出线前景亮红灯，灾难性结果'; }
    else if(paperGap>=3)  { score=5;  summary='该赢的比赛输了，出线形势受挫'; }
    else if(paperGap<=-10){ score=gd>=-1?12:11; summary=gd>=-1?'小负强敌净胜球未崩，出线仍有希望':'负于强敌，需尽快调整以保留出线希望'; }
    else if(paperGap<=-3) { score=8;  summary='稍弱输球不理想但符合预期，出线需后续发力'; }
    else                  { score=6;  summary='均势输球，出线形势被动'; }
  }

  // 轮次系数: R1宽松(试探), R2标准, R3紧张(生死战)
  var roundMult={1:0.85, 2:1.0, 3:1.15};
  score=Math.round(score*(roundMult[round]||1.0));

  // 当前小组排名修正 (基于已完赛积分)
  var posBonus=0, posLabel='';
  try{
    var gid=parsed.stage; // 小组赛时 stage = 组字母
    var stands=computeStandingsForGS(gid);
    for(var i=0;i<stands.length;i++){
      if(stands[i].code===teamCode){
        if(i===0){ posBonus=1.5; posLabel='，当前小组第1'; }
        else if(i===1){ posBonus=0.5; posLabel='，当前小组第2'; }
        else if(i===2){ posBonus=-0.5; posLabel='，当前小组第3'; }
        else { posBonus=-1.5; posLabel='，当前小组第4'; }
        break;
      }
    }
  }catch(e){}
  score=Math.round(Math.min(18,Math.max(1,score+posBonus)));
  summary+=posLabel;

  return {score:score, summary:summary};
}

// 小组排名辅助 (GS专用, 仅基于已完赛比分)
function computeStandingsForGS(gid){
  var st={};
  try{
    var grp=null;
    if(typeof groupsData!=='undefined'){
      for(var i=0;i<groupsData.length;i++){ if(groupsData[i].id===gid){ grp=groupsData[i]; break; } }
    }
    if(!grp) return [];
    grp.teams.forEach(function(t){ st[t.code]={code:t.code,pts:0,gf:0,ga:0,gd:0}; });
    Object.keys(wcData).forEach(function(key){
      var m=wcData[key]; if(!m||!m.score||m.score.sh===null) return;
      var parts=key.split('|'); if(parts.length<4||parts[1]!==gid) return;
      var h=parts[2], a=parts[3], sh=m.score.sh, sa=m.score.sa;
      if(st[h]){ st[h].gf+=sh; st[h].ga+=sa; if(sh>sa)st[h].pts+=3; else if(sh===sa)st[h].pts+=1; }
      if(st[a]){ st[a].gf+=sa; st[a].ga+=sh; if(sa>sh)st[a].pts+=3; else if(sa===sh)st[a].pts+=1; }
    });
    Object.values(st).forEach(function(s){ s.gd=s.gf-s.ga; });
  }catch(e){ return []; }
  return Object.values(st).sort(function(a,b){ return b.pts-a.pts||b.gd-a.gd||b.gf-a.gf; });
}

// ========== 结果类型判定 (四区间) ==========
function determineResultType(homeEvR, awayEvR){
  var tH=homeEvR.resultType, tA=awayEvR.resultType;
  if(tH===ZONE.MAJOR_COLD||tA===ZONE.MAJOR_COLD) return ZONE.MAJOR_COLD;
  if(tH===ZONE.MINOR_COLD||tA===ZONE.MINOR_COLD) return ZONE.MINOR_COLD;
  if(tH===ZONE.BIG_FAV||tA===ZONE.BIG_FAV) return ZONE.BIG_FAV;
  return ZONE.NORMAL;
}
// 四区间标签映射
var ZONE_LABEL={};
ZONE_LABEL[ZONE.BIG_FAV]='🔥 大热';
ZONE_LABEL[ZONE.NORMAL]='✅ 预期';
ZONE_LABEL[ZONE.MINOR_COLD]='⚡ 超常';
ZONE_LABEL[ZONE.MAJOR_COLD]='❄️ 爆冷';

// ========== 综合等级 (100分制·非线性分布) ==========
function getGrade(score){
  if(score>=75) return {grade:'🏆 S级', label:'统治级', cls:'gold'};
  if(score>=60) return {grade:'💎 A级', label:'表现出色', cls:'gold'};
  if(score>=50) return {grade:'⭐ B级', label:'稳定发挥', cls:'silver'};
  if(score>=40) return {grade:'📋 C级', label:'表现一般', cls:'silver'};
  if(score>=30) return {grade:'⚠️ D级', label:'需重大改善', cls:'bronze'};
  return {grade:'💀 E级', label:'严重失准', cls:'bronze'};
}

function getAchievements(score, grade, evrType, stats, side){
  var list=[];
  if(grade.cls==='gold'&&score>=80) list.push({cls:'gold', text:'🏆 完美表现'});
  else if(grade.cls==='gold') list.push({cls:'gold', text:'✅ 表现出色'});
  if(evrType===ZONE.MAJOR_COLD) list.push({cls:'bronze', text:'❄️ 爆冷失准'});
  if(evrType===ZONE.MINOR_COLD) list.push({cls:'gold', text:'⚡ 超常发挥'});
  if(evrType===ZONE.BIG_FAV) list.push({cls:'gold', text:'🔥 大热碾压'});
  if(stats){
    var sideKey=side==='home'?'h':'a', oppKey=side==='home'?'a':'h';
    if(stats.redCards[sideKey]===0&&stats.redCards[oppKey]===0&&stats.yellowCards[sideKey]<=1)
      list.push({cls:'silver', text:'🛡️ 纪律良好'});
    if(stats.possession&&stats.possession[sideKey]>=60)
      list.push({cls:'silver', text:'🎯 控场主导'});
  }
  if(list.length===0) list.push({cls:'silver', text:'📋 常规表现'});
  return list.slice(0,2);
}

// ========== 主入口 ==========
function computeMatchEvaluation(matchKey){
  ensureAIPbs();
  var match=getMatchData(matchKey);
  if(!match||!match.score) return null; // 未赛

  var parsed=parseMatchKey(matchKey);
  var homeCode=parsed.home, awayCode=parsed.away;
  var stats=match.stats||null;
  var goals=match.goals||null;
  var redH=stats?stats.redCards.h:0, redA=stats?stats.redCards.a:0;

  // 1. 获取或计算 AI 预推算
  var aiPreMatch=match.aiPreMatch;
  if(!aiPreMatch&&calcAIPbsFn){
    try{
      aiPreMatch=calcAIPbsFn(homeCode, awayCode, null, 0, matchKey);
      if(aiPreMatch&&!match.aiPreMatch){
        match.aiPreMatch={ph:aiPreMatch.ph, pd:aiPreMatch.pd, pa:aiPreMatch.pa};
      }
    }catch(e){}
  }

  // 2. 六维计算
  var sdH=calcStatisticalDominance(stats, redH, redA, 'home');
  var sdA=calcStatisticalDominance(stats, redH, redA, 'away');
  // 进球锚定: 0进球时统计统治虚高——空有控球射门无终结不应满分
  var hGoals=(goals||[]).filter(function(g){return g.side==='home';}).length;
  var aGoals=(goals||[]).filter(function(g){return g.side==='away';}).length;
  if(hGoals===0) sdH.score=Math.min(sdH.score,12);
  else if(hGoals===1) sdH.score=Math.min(sdH.score,14);
  if(aGoals===0) sdA.score=Math.min(sdA.score,12);
  else if(aGoals===1) sdA.score=Math.min(sdA.score,14);
  var evrH=calcExpectationVsReality(homeCode, awayCode, match.score, 'home');
  var evrA=calcExpectationVsReality(homeCode, awayCode, match.score, 'away');
  var ceH=calcClinicalEfficiency(stats, goals, 'home');
  var ceA=calcClinicalEfficiency(stats, goals, 'away');
  var drH=calcDefensiveResilience(stats, goals, match, 'home', homeCode, awayCode);
  var drA=calcDefensiveResilience(stats, goals, match, 'away', awayCode, homeCode);
  var gsH=calcGroupSituation(homeCode, matchKey, match);
  var gsA=calcGroupSituation(awayCode, matchKey, match);

  // ========== 维度六：外部评论 (10分) ==========
  function calcExternalCommentary(match, side){
    var mr=match&&match.mediaRating;
    if(!mr) return {score:5, summary:'外部评论数据待接入 (Phase 2)'};
    var data=side==='home'?mr.home:mr.away;
    if(!data||data.score===undefined) return {score:5, summary:'该侧暂无媒体评分'};
    var score=Math.round(data.score*1.0);
    score=Math.min(10,Math.max(1,score));
    var summary='';
    if(score>=8) summary='媒体一致盛赞，将其视为全场最佳之一';
    else if(score>=6) summary='媒体评价正面，认可其场上表现';
    else if(score>=4) summary='媒体评价中性，表现中规中矩';
    else if(score>=2) summary='媒体评价偏负面，指出明显不足';
    else summary='媒体评价严厉批评，表现严重低于预期';
    return {score:score, summary:summary};
  }
  var ecH=calcExternalCommentary(match, 'home');
  var ecA=calcExternalCommentary(match, 'away');

  // 3. 综合总分 (六维满额=100分制, 无需归一化)
  var totalH=sdH.score+evrH.score+ceH.score+drH.score+gsH.score+ecH.score;
  var totalA=sdA.score+evrA.score+ceA.score+drA.score+gsA.score+ecA.score;

  // CE 策略地板: 弱队达成赛果目标(平/胜)时, 不因0进球被CE打到谷底
  try{
    var homeRank=teamDB[homeCode]?teamDB[homeCode].r:50, awayRank=teamDB[awayCode]?teamDB[awayCode].r:50;
    var hPaperGap=awayRank-homeRank, aPaperGap=homeRank-awayRank;
    var hGA=sa, aGA=sh, isHDraw=(sh===sa), isAWin=(sa>sh);
    if(hPaperGap<=-10&&isHDraw) totalH+=Math.max(0,3-ceH.score);  // 弱队逼平→CE至少贡献3分
    if(hPaperGap<=-10&&sh>sa)  totalH+=Math.max(0,4-ceH.score);  // 弱队取胜→CE至少贡献4分
    if(aPaperGap<=-10&&isHDraw) totalA+=Math.max(0,3-ceA.score);
    if(aPaperGap<=-10&&isAWin)  totalA+=Math.max(0,4-ceA.score);
  }catch(e){}

  // 防守杰作加成: 弱队零封强敌 (paperGap≤-15, oppSOT≥5, ga=0)
  try{
    var hOppSOT=stats.shotsOnTarget['a']||0, aOppSOT=stats.shotsOnTarget['h']||0;
    if(hGA===0&&hPaperGap<=-15&&hOppSOT>=5) totalH+=3;
    if(aGA===0&&aPaperGap<=-15&&aOppSOT>=5) totalA+=3;
  }catch(e){}

  // 4. 等级 & 成就
  var gradeH=getGrade(totalH), gradeA=getGrade(totalA);
  var resultType=determineResultType(evrH, evrA);
  var achH=getAchievements(totalH, gradeH, evrH.sideType, stats, 'home');
  var achA=getAchievements(totalA, gradeA, evrA.sideType, stats, 'away');

  // 5. MOTM（优先 FIFA 官方记录，回退首球得分者）
  var motm=(match.mediaRating&&match.mediaRating.motm)||'';
  if(!motm&&goals&&goals.length>0){
    if(totalH>=totalA) motm=goals.filter(function(g){return g.side==='home';}).map(function(g){return g.scorer;})[0]||'';
    else motm=goals.filter(function(g){return g.side==='away';}).map(function(g){return g.scorer;})[0]||'';
  }

  // 6. 构建返回
  var evalResult={
    matchKey:matchKey,
    homeCode:homeCode, awayCode:awayCode,
    homeFlag:getFlag(homeCode), awayFlag:getFlag(awayCode),
    homeName:getZh(homeCode), awayName:getZh(awayCode),
    score:match.score,
    stage:match.stage, round:match.round,
    date:match.date, venue:match.venue,
    motm:motm,
    resultType:resultType,
    zoneLabel:ZONE_LABEL[resultType]||'',
    probGap:evrH.probGap||0, favSide:evrH.favSide||'home',
    totalH:totalH, totalA:totalA,
    gradeH:gradeH, gradeA:gradeA,
    achH:achH, achA:achA,
    dimensions:[
      {emoji:'📊', label:'统计统治', h:Math.round(sdH.score/16*100), a:Math.round(sdA.score/16*100), hSummary:sdH.summary, aSummary:sdA.summary},
      {emoji:'🎯', label:'预实对比', h:Math.round(evrH.score/20*100), a:Math.round(evrA.score/20*100), hSummary:evrH.summary, aSummary:evrA.summary},
      {emoji:'⚡', label:'进攻效率', h:Math.round(ceH.score/18*100), a:Math.round(ceA.score/18*100), hSummary:ceH.summary, aSummary:ceA.summary},
      {emoji:'🛡️', label:'防守韧性', h:Math.round(drH.score/18*100), a:Math.round(drA.score/18*100), hSummary:drH.summary, aSummary:drA.summary},
      {emoji:'🗺️', label:'出线形势', h:Math.round(gsH.score/18*100), a:Math.round(gsA.score/18*100), hSummary:gsH.summary, aSummary:gsA.summary},
      {emoji:'💬', label:'外部评论', h:Math.round(ecH.score/10*100), a:Math.round(ecA.score/10*100), hSummary:ecH.summary, aSummary:ecA.summary}
    ],
    aiPreMatch:aiPreMatch,
    mediaRating:match.mediaRating||null,
    aiPostReview:match.aiPostReview||null
  };

  // 7. 缓存到 matchdata
  if(!match.aiPostReview) match.aiPostReview=evalResult;

  return evalResult;
}

// ========== 暴露 ==========
window.MatchEval={
  ZONE:ZONE, ZONE_LABEL:ZONE_LABEL,
  compute:computeMatchEvaluation,
  getMatchData:getMatchData,
  parseMatchKey:parseMatchKey
};

console.log('✅ match_eval_engine.js 加载完成 — 六维评价引擎 V1.74');

})();
