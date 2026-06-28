// perfboard_engine.js — 表现榜引擎 | V1.79
// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
//
// 算法依据见: 表现榜算法说明.md
// 依赖: match_eval_engine.js, prob_engine.js, matchdata_2026.js, groupsdata.js, teamdata.js
// ================================================================
(function(){
'use strict';

// ===== 桥接 =====
var wcData = window.wc2026AllMatches || {};
var teamMap = window.teamMap || {};
var groupsData = window.groupsData || [];
var getFifaRank = window.getFifaRank || function(){ return 24; };
var getOpponentStrength = window.getOpponentStrength || function(){ return 1.0; };

// R32 配对映射 (与 bracket_overlay.js R32_PAIRINGS 一致)
var R32_PAIRINGS = [
  {a:{g:'A',p:1},b:{g:'B',p:2}},{a:{g:'C',p:1},b:{g:'D',p:2}},{a:{g:'E',p:1},b:{g:'F',p:2}},{a:{g:'G',p:1},b:{g:'H',p:2}},
  {a:{g:'I',p:1},b:{g:'J',p:2}},{a:{g:'K',p:1},b:{g:'L',p:2}},{a:{g:'B',p:1},b:{g:'A',p:2}},{a:{g:'D',p:1},b:{g:'C',p:2}},
  {a:{g:'F',p:1},b:{g:'E',p:2}},{a:{g:'H',p:1},b:{g:'G',p:2}},{a:{g:'J',p:1},b:{g:'I',p:2}},{a:{g:'L',p:1},b:{g:'K',p:2}},
  {a:{g:'A',p:1},b:{g:'C',p:2}},{a:{g:'E',p:1},b:{g:'G',p:2}},{a:{g:'I',p:1},b:{g:'K',p:2}},{a:{g:'B',p:1},b:{g:'D',p:2}}
];

// ===== 辅助 =====
function getFlag(code){
  if(typeof window.pastFlag==='function') return window.pastFlag(code);
  return 'https://flagcdn.com/w80/'+(code.toLowerCase())+'.png';
}
function getZh(code){ var m=teamMap[code]; return m?m.zh:code; }
function getEn(code){ var m=teamMap[code]; return m?m.en:code; }

function findGroupForCode(code){
  for(var i=0;i<groupsData.length;i++){
    var g=groupsData[i];
    for(var j=0;j<g.teams.length;j++){ if(g.teams[j].code===code) return g.id; }
  }
  return null;
}

// ===== 小组排名计算 (从 wc2026AllMatches 实际比分) =====
function computeGroupStandings(gid){
  var grp = null;
  for(var i=0;i<groupsData.length;i++){ if(groupsData[i].id===gid){ grp=groupsData[i]; break; } }
  if(!grp) return [];
  var st={};
  grp.teams.forEach(function(t){ st[t.code]={code:t.code,zh:t.zh,pts:0,gf:0,ga:0,gd:0,played:0}; });
  Object.keys(wcData).forEach(function(key){
    var m=wcData[key];
    if(!m||!m.score||m.score.sh===null||m.score.sa===null) return;
    var parts=key.split('|');
    if(parts.length<4||parts[1]!==gid) return;
    var h=parts[2], a=parts[3];
    var sh=m.score.sh, sa=m.score.sa;
    if(st[h]){
      st[h].gf+=sh; st[h].ga+=sa; st[h].played++;
      if(sh>sa) st[h].pts+=3; else if(sh===sa) st[h].pts+=1;
    }
    if(st[a]){
      st[a].gf+=sa; st[a].ga+=sh; st[a].played++;
      if(sa>sh) st[a].pts+=3; else if(sa===sh) st[a].pts+=1;
    }
  });
  Object.values(st).forEach(function(s){ s.gd=s.gf-s.ga; });
  return Object.values(st).sort(function(a,b){ return b.pts-a.pts||b.gd-a.gd||b.gf-a.gf; });
}

// ===== 收集某队所有已完赛比赛 =====
function collectTeamMatches(code){
  var list=[];
  Object.keys(wcData).forEach(function(key){
    var m=wcData[key];
    if(!m||!m.score||m.score.sh===null||m.score.sa===null) return;
    var parts=key.split('|');
    if(parts.length<4) return;
    if(parts[2]!==code&&parts[3]!==code) return;
    var isHome=(parts[2]===code);
    list.push({
      key:key,
      isHome:isHome,
      opponent:isHome?parts[3]:parts[2],
      stage:parts[1],
      round:m.round||1,
      gf:isHome?m.score.sh:m.score.sa,
      ga:isHome?m.score.sa:m.score.sh,
      score:m.score,
      date:m.date
    });
  });
  return list;
}

// 比赛阶段权重
function getCompositeWeight(stage, round){
  if(stage==='group') return 0.6 + (round||1)*0.2;  // R1:0.8 R2:1.0 R3:1.2
  if(stage==='R32'||stage==='R16') return 1.4;
  if(stage==='QF') return 1.6;
  if(stage==='FINAL') return 2.0;
  if(stage==='SF'||stage==='TP') return 1.8;
  return 1.0;
}

// ===== 本届综合分 =====
function computeCompositeScore(code){
  var matches=collectTeamMatches(code);
  if(matches.length===0) return null;
  var w=0,d=0,l=0;
  matches.forEach(function(m){ if(m.gf>m.ga) w++; else if(m.gf===m.ga) d++; else l++; });

  var weightedSum=0, weightTotal=0, bestScore=0, worstScore=100;
  matches.forEach(function(m){
    var evalResult=null;
    try{
      if(typeof window.MatchEval!=='undefined'&&typeof window.MatchEval.compute==='function'){
        evalResult=window.MatchEval.compute(m.key);
      }
    }catch(e){}
    var sideScore=null;
    if(evalResult){
      sideScore=m.isHome?evalResult.totalH:evalResult.totalA;
    }
    if(typeof sideScore!=='number'||isNaN(sideScore)) sideScore=null;
    if(sideScore===null){
      // 回退：基于赛果推算 (胜=70, 平=55, 负=30) + 对手强度修正
      var oppRank=getFifaRank(m.opponent);
      var oppStr=typeof getOpponentStrength==='function'?getOpponentStrength(oppRank):1.0;
      sideScore=m.gf>m.ga?65+oppStr*5:(m.gf===m.ga?55:35-oppStr*5);
      sideScore=Math.max(20,Math.min(90,sideScore));
    }
    var wt=getCompositeWeight(m.stage,m.round);
    weightedSum+=sideScore*wt;
    weightTotal+=wt;
    if(sideScore>bestScore) bestScore=sideScore;
    if(sideScore<worstScore) worstScore=sideScore;
  });
  var composite=weightTotal>0?weightedSum/weightTotal:null;
  return {
    score:composite!==null?+composite.toFixed(1):null,
    w:w,d:d,l:l,
    total:w+d+l,
    bestMatch:bestScore,
    worstMatch:worstScore
  };
}

// ===== 晋级路线分 =====
function computePathScore(code){
  var gid=findGroupForCode(code);
  if(!gid) return null;
  var standings=computeGroupStandings(gid);
  var pos=-1;
  for(var i=0;i<standings.length;i++){ if(standings[i].code===code){ pos=i+1; break; } }
  if(pos===-1) return null;

  // 检查是否已晋级淘汰赛 (在 R32~FINAL 的 wcData key 中出现)
  var deepestRound=null;
  var koRounds=['FINAL','TP','SF','QF','R16','R32'];
  Object.keys(wcData).forEach(function(key){
    var m=wcData[key];
    if(!m||!m.score) return;
    var parts=key.split('|');
    if(parts.length<4) return;
    if(parts[2]!==code&&parts[3]!==code) return;
    var stage=parts[1];
    if(koRounds.indexOf(stage)===-1) return;
    if(!deepestRound||koRounds.indexOf(stage)<koRounds.indexOf(deepestRound)){
      deepestRound=stage;
    }
  });

  // 检查是否被淘汰 (淘汰赛比分存在且该队输了)
  var eliminated=false;
  if(deepestRound){
    Object.keys(wcData).forEach(function(key){
      var m=wcData[key];
      if(!m||!m.score||m.score.sh===null) return;
      var parts=key.split('|');
      if(parts.length<4||parts[1]!==deepestRound) return;
      var isHome=(parts[2]===code), isAway=(parts[3]===code);
      if(!isHome&&!isAway) return;
      var sh=m.score.sh, sa=m.score.sa;
      if((isHome&&sh<sa)||(isAway&&sa<sh)) eliminated=true;
    });
  }

  var pathScore;
  if(deepestRound){
    // 已进入淘汰赛
    var baseMap={FINAL:95,TP:90,SF:85,QF:70,R16:52,R32:38};
    pathScore=baseMap[deepestRound]||50;
    if(eliminated&&deepestRound==='R32') pathScore-=8;
  } else {
    // 仍在小组赛阶段
    var groupDone=standings.every(function(s){ return s.played>=3; });
    if(pos<=2){
      // 晋级区
      var r32Opp=getPotentialR32Opponent(gid,pos);
      var oppRank=typeof getFifaRank==='function'?getFifaRank(r32Opp):24;
      var oppStr=typeof getOpponentStrength==='function'?getOpponentStrength(oppRank):1.0;
      pathScore=52+(pos===1?15:0)+(oppStr-1.0)*25;
    } else {
      pathScore=Math.max(10,28-(pos-2)*10);
      if(groupDone&&pos===3) pathScore=12;
      if(groupDone&&pos===4) pathScore=5;
    }
  }
  return +Math.max(0,Math.min(100,pathScore)).toFixed(1);
}

// 根据小组和位次获取潜在R32对手
function getPotentialR32Opponent(gid, pos){
  for(var i=0;i<R32_PAIRINGS.length;i++){
    var p=R32_PAIRINGS[i];
    if(p.a.g===gid&&p.a.p===pos){
      // 对手来自 p.b 组，取该组当前排名 p.b.p 的队伍
      var oppStands=computeGroupStandings(p.b.g);
      var oppIdx=p.b.p-1;
      if(oppStands.length>oppIdx) return oppStands[oppIdx].code;
    }
    if(p.b.g===gid&&p.b.p===pos){
      var oppStands2=computeGroupStandings(p.a.g);
      var oppIdx2=p.a.p-1;
      if(oppStands2.length>oppIdx2) return oppStands2[oppIdx2].code;
    }
  }
  return null;
}

// ===== 期望分 (基于FIFA排名) =====
function computeExpectedScore(code){
  var rank=typeof getFifaRank==='function'?getFifaRank(code):24;
  return +(85-rank*0.9).toFixed(1);
}

// ===== 主入口: 计算全部球队表现 =====
function computePerformanceBoard(){
  var allTeams=[];
  groupsData.forEach(function(g){
    g.teams.forEach(function(t){ allTeams.push(t.code); });
  });

  var results=[];
  allTeams.forEach(function(code){
    var composite=computeCompositeScore(code);
    if(!composite||composite.score===null) return; // 无已完赛数据

    var pathScore=computePathScore(code);
    var expectedScore=computeExpectedScore(code);
    var perfGap=composite.score!==null ? +(composite.score-expectedScore).toFixed(1) : null;

    results.push({
      code:code,
      flag:getFlag(code),
      nameZh:getZh(code),
      nameEn:getEn(code),
      w:composite.w, d:composite.d, l:composite.l,
      total:composite.w+composite.d+composite.l,
      compositeScore:composite.score,
      pathScore:pathScore,
      expectedScore:expectedScore,
      perfGap:perfGap,
      rank:typeof getFifaRank==='function'?getFifaRank(code):null
    });
  });

  // 分类
  var champ=[], dark=[], over=[];
  results.forEach(function(r){
    var cs=r.compositeScore, es=r.expectedScore;
    if(cs===null) return;
    var gap=cs-es;
    var hasWin=(r.w>=1);
    var inContention=(function(){
      // 查找该队所在小组排名，pos≤2 即为仍在晋级竞争
      var gid=findGroupForCode(r.code);
      if(!gid) return false;
      var st=computeGroupStandings(gid);
      for(var i=0;i<st.length;i++){ if(st[i].code===r.code) return (i<=1); }
      return false;
    })();

    // ── 冠军相: 资格过滤 + 加权评分 ──
    // 资格: 纸面实力≥50, 当前表现≥58, 仍在竞争
    // gap阈值用比例制: 预期越高允许的负差值越大 (顶级强队天然高预期)
    var gapFloor = Math.max(-10, -es * 0.12);
    if(es>=50&&cs>=58&&gap>=gapFloor&&inContention){
      // 纸面实力 (45%): expectedScore归一化
      var paper = es / 85;
      // 当前表现 (35%): compositeScore + 胜率
      var winRate = r.total > 0 ? r.w / r.total : 0;
      var form = (cs / 100) * 0.85 + winRate * 0.15;
      // 对手背景 (20%): 路径分
      var context = (r.pathScore || 50) / 100;
      r.championIndex = +(paper * 0.45 + form * 0.35 + context * 0.20).toFixed(4);
      champ.push(r);
    }
    // ── 黑马: 三层过滤 ──
    //   1) 表现出色: 综合分≥60, 至少1胜
    //   2) 赛前不被看好: 预期<60
    //   3) 仍在竞争: pos≤2 或 已进淘汰赛
    if(cs>=58&&hasWin&&es<65&&inContention){
      dark.push(r);
    }
    // ── 失望: 差值≤-12, 预期≥55 ──
    if(gap<=-8&&es>=50){
      var myRank=r.rank||(typeof getFifaRank==='function'?getFifaRank(r.code):50);
      var teamMatches=collectTeamMatches(r.code);
      var matchDisapp=0;
      teamMatches.forEach(function(m){
        var or2=typeof getFifaRank==='function'?getFifaRank(m.opponent):50;
        var pg=or2-myRank;
        if(m.gf<m.ga){
          if(pg>=15) matchDisapp+=0.45;
          else if(pg>=8) matchDisapp+=0.30;
          else if(pg>=3) matchDisapp+=0.15;
          else if(pg>=-5) matchDisapp+=0.05;
        }else if(m.gf===m.ga){
          if(pg>=20) matchDisapp+=0.35;
          else if(pg>=10) matchDisapp+=0.20;
          else if(pg>=3) matchDisapp+=0.10;
          else if(pg>=-5) matchDisapp+=0.03;
        }
        if(m.gf>m.ga&&pg<-10) matchDisapp-=0.10;
      });
      var eliminated=!inContention&&r.total>=2;
      var certainty=Math.min(1, 0.5+r.total*0.15);
      r.overratedIndex=+((matchDisapp+(eliminated?0.40:0)+Math.abs(gap)*0.002)*certainty).toFixed(4);
      over.push(r);
    }
  });

  // 冠军相按加权指数降序 (纸面实力为王)
  champ.sort(function(a,b){ return b.championIndex-a.championIndex; });
  // 黑马按综合分降序 (绝对表现才是黑马成色的核心)
  dark.sort(function(a,b){ return b.compositeScore-a.compositeScore; });
  // 失望: 综合赛果质量 + 淘汰状态 + 确定性缩放
  over.sort(function(a,b){ return b.overratedIndex-a.overratedIndex; });

  return { champion:champ, darkhorse:dark, overrated:over, all:results };
}

// ===== 渲染 HTML =====
function buildRow(r, colType, rank){
  var h='';
  h+='<div class="pb-row pb-row-'+colType+'">';
  h+='<span class="pb-rank">'+(rank||'')+'</span>';
  h+='<img class="pb-flag" src="'+r.flag+'" onerror="this.style.display=\'none\'" loading="lazy">';
  h+='<span class="pb-name" title="'+r.nameEn+'">'+r.nameZh+'</span>';
  h+='<span class="pb-record"><span class="w">'+r.w+'W</span> <span class="d">'+r.d+'D</span> <span class="l">'+r.l+'L</span></span>';
  h+='<span class="pb-val pb-val-composite">'+r.compositeScore+'</span>';
  h+='<span class="pb-val pb-val-path">'+r.pathScore+'</span>';
  h+='</div>';
  return h;
}

// 渲染单个榜单面板
function buildPanel(list, colType, emptyText){
  var h='';
  var topRows=list.slice(0,13);
  if(topRows.length===0){
    h+='<div class="pb-empty">'+emptyText+'</div>';
  } else {
    topRows.forEach(function(r,i){ h+=buildRow(r,colType,i+1); });
  }
  return h;
}

function buildBoardHTML(data){
  // 标签切换按钮
  var h='';
  h+='<div class="pb-tabs">';
  h+='<button class="pb-tab pb-tab-champion active" onclick="PerfBoard.switchTab(\'champion\')">👑 冠军相</button>';
  h+='<button class="pb-tab pb-tab-darkhorse" onclick="PerfBoard.switchTab(\'darkhorse\')">🐎 黑马</button>';
  h+='<button class="pb-tab pb-tab-overrated" onclick="PerfBoard.switchTab(\'overrated\')">📉 失望</button>';
  h+='</div>';

  // 表头
  h+='<div class="pb-headers">';
  h+='<span class="pb-hdr-rank">#</span>';
  h+='<span class="pb-hdr-name">球队</span>';
  h+='<span class="pb-hdr-record">战绩</span>';
  h+='<span class="pb-hdr-composite">本届表现</span>';
  h+='<span class="pb-hdr-path">晋级路线</span>';
  h+='</div>';

  // 三个面板，默认显示冠军相
  h+='<div class="pb-panels">';
  h+='<div class="pb-panel active" id="pbPanelChampion">'+buildPanel(data.champion,'champion','暂无符合条件的冠军相球队')+'</div>';
  h+='<div class="pb-panel" id="pbPanelDarkhorse">'+buildPanel(data.darkhorse,'darkhorse','暂无符合条件的黑马球队')+'</div>';
  h+='<div class="pb-panel" id="pbPanelOverrated">'+buildPanel(data.overrated,'overrated','暂无符合条件的失望球队')+'</div>';
  h+='</div>';

  // 底部说明
  h+='<div class="ov-note pb-note">';
  h+='榜单随比赛每日更新，指标在<strong>"小组赛阶段"</strong>变动较大，在<strong>"淘汰赛阶段"</strong>趋于稳定。';
  h+='</div>';
  return h;
}

// 标签切换
function switchTab(type){
  var tabs=document.querySelectorAll('.pb-tab');
  tabs.forEach(function(t){ t.classList.remove('active'); });
  var activeTab=document.querySelector('.pb-tab-'+type);
  if(activeTab) activeTab.classList.add('active');

  var panels=document.querySelectorAll('.pb-panel');
  panels.forEach(function(p){ p.classList.remove('active'); });
  var activePanel=document.getElementById(type==='champion'?'pbPanelChampion':type==='darkhorse'?'pbPanelDarkhorse':'pbPanelOverrated');
  if(activePanel) activePanel.classList.add('active');
}

// ===== 公开接口 =====
window.PerfBoard = {
  compute: computePerformanceBoard,
  buildHTML: buildBoardHTML,
  switchTab: switchTab,
  show: function(){
    var data=computePerformanceBoard();
    var el=document.getElementById('ovPerfBoardContent');
    if(el) el.innerHTML=buildBoardHTML(data);
    var modal=document.getElementById('ovPerfBoardModal');
    if(modal) modal.classList.add('visible');
  }
};

console.log('✅ perfboard_engine.js 加载完成 — 表现榜引擎 V1.79 (逐场落差算法)');

})();
