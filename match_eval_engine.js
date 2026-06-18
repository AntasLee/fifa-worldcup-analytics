// match_eval_engine.js — 本场表现评价引擎 | V1.73
// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
//
// 六维评价模型 (100分制):
//   SD  统计统治力 Statistical Dominance    25分
//   EvR 预实对比差 Expectation vs Reality    30分
//   CE  进攻效率   Clinical Efficiency       12分
//   DR  纪律韧性   Discipline & Resilience   8分
//   GS  出线形势   Group Situation            15分
//   EC  外部评论   External Commentary        10分 (Phase 2)
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

  var score=Math.round(Math.min(25,Math.max(2,raw*0.25)));
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

  if(isFavWin){ // 热门方获胜
    if(!isDraw1&&probGap>=40&&favCovered){ score=Math.round(20+probGap*0.08); rType=ZONE.BIG_FAV; summary='盘口深度兑现，热门方碾压取胜';}
    else if(!isDraw1&&probGap>=40){ score=Math.round(17+probGap*0.06); rType=ZONE.NORMAL; summary='盘口倾向大热但净胜球未击穿让球线，正常取胜';}
    else if(!isDraw1){ score=Math.round(17+probGap*0.06); rType=ZONE.NORMAL; summary='盘口判断准确，热门方正常取胜';}
    else { score=Math.round(10+probGap*0.05); rType=ZONE.NORMAL; summary='平局与盘口方向基本吻合';}
  }else if(isDraw1){ // 平局
    if(probGap>=40){ score=Math.round(4+pD*0.06); rType=ZONE.MAJOR_COLD; summary='盘口深度倾向一方，平局属重大意外';}
    else if(probGap>=15){ score=Math.round(8+pD*0.06); rType=ZONE.MINOR_COLD; summary='盘口倾向一方但平局收场，小有意外';}
    else { score=Math.round(12+pD*0.05); rType=ZONE.NORMAL; summary='盘口均衡，平局在预期范围';}
  }else{ // 冷门方获胜
    if(probGap>=40){ score=Math.round(22+probGap*0.1); rType=ZONE.MAJOR_COLD; summary='盘口深度看低却爆冷取胜，重大冷门';}
    else if(probGap>=15){ score=Math.round(18+probGap*0.08); rType=ZONE.MINOR_COLD; summary='盘口略看低但逆袭成功，小冷门';}
    else { score=Math.round(15+probGap*0.05); rType=ZONE.NORMAL; summary='盘口均衡，任一方取胜均在预期内';}
  }
  // 己方得分调整
  var myIsFav=(side===favSide);
  var myWin=(side==='home'&&isHomeWin)||(side==='away'&&isAwayWin);
  var myDraw=isDraw1, myLose=!myWin&&!myDraw;

  if(myDraw&&myIsFav&&probGap>=15) score=Math.max(1,score-8);
  if(myDraw&&!myIsFav&&probGap>=15) score=Math.min(30,score+8);
  if(myLose&&myIsFav) score=Math.max(1,score-10);
  if(myWin&&!myIsFav) score=Math.min(30,score+8);

  // 侧级结果类型（己方视角）
  var sideType;
  if(myWin&&myIsFav&&probGap>=40&&favCovered) sideType=ZONE.BIG_FAV;  // 大热碾压+击穿
  else if(myWin&&myIsFav) sideType=ZONE.NORMAL;                       // 预期取胜（含大热未击穿）
  else if(myWin&&!myIsFav) sideType=ZONE.MINOR_COLD;                   // 以弱胜强→超常
  else if(myDraw&&myIsFav) sideType=ZONE.MAJOR_COLD;                  // 热门被逼平→爆冷
  else if(myDraw&&!myIsFav) sideType=ZONE.MINOR_COLD;                 // 冷门逼平→超常
  else if(myLose&&myIsFav) sideType=ZONE.MAJOR_COLD;                  // 大热输球→爆冷
  else sideType=ZONE.NORMAL;                                          // 不被看好·输球正常→预期

  score=Math.min(30,Math.max(1,Math.round(score)));
  return {score:score, summary:summary, resultType:rType, sideType:sideType, impliedProb:imp, probGap:probGap, favSide:favSide};
}

// ========== 维度三：进攻效率 (12分) ==========
function calcClinicalEfficiency(stats, goals, side){
  if(!stats) return {score:6, summary:'暂无统计数据'};
  var sideKey=side==='home'?'h':'a';
  var g=goals?goals.filter(function(x){return x.side===side;}).length:0;
  var shots=stats.shots[sideKey]||1, sot=stats.shotsOnTarget[sideKey]||1;
  var convRate=g/Math.max(sot,1);
  var shotAcc=sot/Math.max(shots,1);

  // 关键时段进球加分
  var clutchBonus=0;
  if(goals){
    goals.forEach(function(x){
      if(x.side===side){
        var m=parseInt(x.min)||0;
        if(m>=75) clutchBonus+=3;
        else if(m<=15) clutchBonus+=1;
      }
    });
  }

  var raw=convRate*50+shotAcc*30+g*3+Math.min(clutchBonus,8);
  var score=Math.round(Math.min(12,Math.max(1,raw*0.16)));
  var summary='';
  if(score>=10) summary='终结能力出色，射门转化率极高';
  else if(score>=7) summary='进攻效率良好，创造并把握了机会';
  else if(score>=4) summary='进攻效率一般，门前把握能力待提升';
  else summary='进攻哑火，未能有效转化为进球';
  return {score:score, summary:summary};
}

// ========== 维度四：纪律韧性 (8分) ==========
function calcDisciplineResilience(stats, goals, side){
  if(!stats) return {score:4, summary:'暂无统计数据'};
  var sideKey=side==='home'?'h':'a';
  var fouls=stats.fouls[sideKey]||0;
  var yellows=stats.yellowCards[sideKey]||0;
  var reds=stats.redCards[sideKey]||0;

  var foulScore=Math.max(0,1-fouls/25)*5;
  var cardScore=Math.max(0,5-yellows*1.0-reds*2.0);

  // 韧性加分：先失球后扳平或反超
  var resilienceBonus=0;
  if(goals&&goals.length>0){
    var concededFirst=false, equalizedOrWon=false;
    var firstGoal=goals[0];
    if(firstGoal.side!==side) concededFirst=true;
    if(concededFirst){
      var myGoals=goals.filter(function(x){return x.side===side;});
      if(myGoals.length>0) resilienceBonus=1;
    }
  }

  var score=Math.round(Math.min(8,Math.max(1,foulScore+cardScore+resilienceBonus)));
  var summary='';
  if(score>=7) summary='纪律严明，防守干净且展现韧性';
  else if(score>=5) summary='纪律控制尚可，偶有犯规但未失控';
  else if(score>=3) summary='犯规较多或出现红牌，纪律性欠佳';
  else summary='红黄牌失控，纪律严重失守';
  return {score:score, summary:summary};
}

// ========== 维度五：出线形势 (15分) ==========
function calcGroupSituation(teamCode, matchKey, matchData){
  var parsed=parseMatchKey(matchKey);
  var stage=parsed.stage, round=matchData?matchData.round:1;
  if(stage==='R32'||stage==='R16'||stage==='QF'||stage==='SF'||stage==='TP'||stage==='FINAL'){
    // 淘汰赛：战意直接拉满
    return {score:Math.round(stage==='FINAL'?15:stage==='SF'?13:11), summary:'淘汰赛阶段，双方战意均处峰值'};
  }

  // 小组赛：基于轮次和相对实力判断
  var myRank=50, oppRank=50;
  if(teamDB[teamCode]) myRank=teamDB[teamCode].r||50;
  var oppCode=parsed.home===teamCode?parsed.away:parsed.home;
  if(teamDB[oppCode]) oppRank=teamDB[oppCode].r||50;

  var rankDiff=oppRank-myRank; // 正=对手比我弱，负=对手比我强
  var score=8, summary='';

  if(round===1){
    if(rankDiff>10){ score=11; summary='首轮面对弱旅，必须拿分建立优势';}
    else if(rankDiff<-10){ score=10; summary='首轮挑战强敌，可接受小负但需展现斗志';}
    else { score=10; summary='首轮遭遇实力相当对手，力争不败';}
  }else if(round===2){
    if(rankDiff>10){ score=12; summary='次轮面对弱旅，取胜即可占据出线主动';}
    else if(rankDiff<-10){ score=8; summary='次轮挑战强敌，需全力抢分保留希望';}
    else { score=10; summary='次轮关键战，结果将直接影响出线形势';}
  }else if(round===3){
    score=13; summary='小组末轮生死战，出线形势取决于本场结果';
  }

  // 根据实际结果微调
  var sh=matchData?matchData.score.sh:0, sa=matchData?matchData.score.sa:0;
  var isHome=parsed.home===teamCode;
  var gf=isHome?sh:sa, ga=isHome?sa:sh;
  if(gf>ga) score=Math.min(15,score+2);
  else if(gf===ga) score=Math.min(15,score+0);
  else score=Math.max(3,score-2);

  return {score:score, summary:summary};
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

// ========== 综合等级 ==========
function getGrade(score){
  if(score>=80) return {grade:'🏆 S级', label:'统治级', cls:'gold'};
  if(score>=65) return {grade:'💎 A级', label:'表现出色', cls:'gold'};
  if(score>=50) return {grade:'⭐ B级', label:'稳定发挥', cls:'silver'};
  if(score>=35) return {grade:'📋 C级', label:'表现一般', cls:'silver'};
  if(score>=20) return {grade:'⚠️ D级', label:'需重大改善', cls:'bronze'};
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
      aiPreMatch=calcAIPbsFn(homeCode, awayCode, matchKey, 0);
      if(aiPreMatch&&!match.aiPreMatch){
        match.aiPreMatch={ph:aiPreMatch.ph, pd:aiPreMatch.pd, pa:aiPreMatch.pa};
      }
    }catch(e){}
  }

  // 2. 六维计算
  var sdH=calcStatisticalDominance(stats, redH, redA, 'home');
  var sdA=calcStatisticalDominance(stats, redH, redA, 'away');
  var evrH=calcExpectationVsReality(homeCode, awayCode, match.score, 'home');
  var evrA=calcExpectationVsReality(homeCode, awayCode, match.score, 'away');
  var ceH=calcClinicalEfficiency(stats, goals, 'home');
  var ceA=calcClinicalEfficiency(stats, goals, 'away');
  var drH=calcDisciplineResilience(stats, goals, 'home');
  var drA=calcDisciplineResilience(stats, goals, 'away');
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

  // 3. 综合总分
  var totalH=sdH.score+evrH.score+ceH.score+drH.score+gsH.score+ecH.score;
  var totalA=sdA.score+evrA.score+ceA.score+drA.score+gsA.score+ecA.score;

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
      {emoji:'📊', label:'统计统治', h:Math.round(sdH.score/25*100), a:Math.round(sdA.score/25*100), hSummary:sdH.summary, aSummary:sdA.summary},
      {emoji:'🎯', label:'预实对比', h:Math.round(evrH.score/30*100), a:Math.round(evrA.score/30*100), hSummary:evrH.summary, aSummary:evrA.summary},
      {emoji:'⚡', label:'进攻效率', h:Math.round(ceH.score/12*100), a:Math.round(ceA.score/12*100), hSummary:ceH.summary, aSummary:ceA.summary},
      {emoji:'🛡️', label:'纪律韧性', h:Math.round(drH.score/8*100),  a:Math.round(drA.score/8*100),  hSummary:drH.summary, aSummary:drA.summary},
      {emoji:'🗺️', label:'出线形势', h:Math.round(gsH.score/15*100), a:Math.round(gsA.score/15*100), hSummary:gsH.summary, aSummary:gsA.summary},
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

console.log('✅ match_eval_engine.js 加载完成 — 六维评价引擎 V1.73');

})();
