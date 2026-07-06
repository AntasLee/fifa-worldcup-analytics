// oddsboard_engine.js — 赔率榜动态聚合引擎 | V1.82
// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
//
// 依赖: oddsdata.js, matchdata_2026.js, groupsdata.js, teamdata.js
// 两榜: 胜平负榜 + 让球盘榜, 数据随比赛录入动态更新
// ================================================================
(function(){
'use strict';

// ===== 桥接 =====
var matchOdds = window.matchOdds || {};
var teamMap = window.teamMap || {};
var groupsData = window.groupsData || [];
function is2026(){ return (typeof currentEdition!=='undefined'&&currentEdition==='2026'); }

function getFlag(code){
  if(typeof window.pastFlag==='function') return window.pastFlag(code);
  return 'https://flagcdn.com/w80/'+(code.toLowerCase())+'.png';
}
function getZh(code){ var m=teamMap[code]; if(m) return m.zh; if(typeof getPastTeamName==='function'){ var p=getPastTeamName(code); if(p&&p.zh!==code) return p.zh; } return code; }
function getEn(code){ var m=teamMap[code]; if(m) return m.en; if(typeof getPastTeamName==='function'){ var p=getPastTeamName(code); if(p&&p.en!==code) return p.en; } return code; }

// ===== 查找已完赛比赛 =====
function getCompletedMatches(){
  if(is2026()) return getCompletedMatches2026();
  return getCompletedMatchesPast();
}

function getCompletedMatches2026(){
  var list=[];
  var wcData=window.wc2026AllMatches||{};
  Object.keys(wcData).forEach(function(key){
    var m=wcData[key];
    if(!m||!m.score||m.score.sh===null||m.score.sa===null) return;
    var parts=key.split('|');
    if(parts.length<4) return;
    var home=parts[2], away=parts[3];
    var odds=findMatchOdds2026(home,away);
    if(!odds) return;
    list.push({
      home:home, away:away,
      sh:m.score.sh, sa:m.score.sa,
      odds:normalizeOdds(odds,home,away)
    });
  });
  return list;
}

function getCompletedMatchesPast(){
  var list=[];
  var pastYear=(typeof pastWCYear!=='undefined')?pastWCYear:'2022';
  // const 声明的全局变量不挂载 window，必须直接引用
  var pastData=pastYear==='2022'?wc2022Data:pastYear==='2018'?wc2018Data:pastYear==='2014'?wc2014Data:pastYear==='2010'?wc2010Data:pastYear==='2006'?wc2006Data:wc2002Data;
  if(!pastData) return list;

  function collectMatch(m){
    if(m.sh===null||m.sa===null||m.sh===undefined||m.sa===undefined) return;
    var odds=m.odds;
    if(!odds||(!odds.hw&&!odds.d&&!odds.aw)) return;
    list.push({
      home:m.h, away:m.a,
      sh:m.sh, sa:m.sa,
      odds:{h:m.h, a:m.a, hw:odds.hw||2.5, d:odds.d||3.2, aw:odds.aw||2.8,
            ahLine:0, ahHome:0, ahAway:0, ouLine:0, ouOver:0, ouUnder:0}
    });
  }

  // 小组赛
  if(pastData.groups){
    Object.keys(pastData.groups).forEach(function(gid){
      var g=pastData.groups[gid];
      if(g.matches) g.matches.forEach(collectMatch);
    });
  }
  // 淘汰赛
  if(pastData.knockout){
    pastData.knockout.forEach(function(ko){
      if(ko.matches) ko.matches.forEach(collectMatch);
    });
  }
  return list;
}

function findMatchOdds2026(home,away){
  var keys=Object.keys(matchOdds);
  for(var i=0;i<keys.length;i++){
    var mo=matchOdds[keys[i]];
    if((mo.h===home&&mo.a===away)||(mo.h===away&&mo.a===home)) return mo;
  }
  return null;
}

function normalizeOdds(odds,home,away){
  if(odds.h===away&&odds.a===home){
    return {
      h:home, a:away,
      hw:odds.aw, d:odds.d, aw:odds.hw,
      ahLine:-(odds.ahLine||0), ahHome:odds.ahAway, ahAway:odds.ahHome,
      ouLine:odds.ouLine, ouOver:odds.ouOver, ouUnder:odds.ouUnder
    };
  }
  return odds;
}

// ===== 去水概率 =====
function dewaterProbs(hw,d,aw){
  var rh=1/(hw||2.5), rd=1/(d||3.2), ra=1/(aw||2.8);
  var total=rh+rd+ra;
  return {ph:rh/total, pd:rd/total, pa:ra/total, overround:total-1};
}

// ===== 模拟双胜赔率(含抽水) =====
function deriveDoubleChanceOdds(hw,d,aw,isHome){
  var probs=dewaterProbs(hw,d,aw);
  var pNotLose=isHome ? (probs.ph+probs.pd) : (probs.pa+probs.pd);
  // 2向市场抽水略低于3向
  var overroundDC=probs.overround*0.67;
  return 1/(pNotLose*(1+overroundDC));
}

// ===== 胜平负榜: 单场结算 =====
function settleNotLoseMatch(teamCode, match){
  var odds=match.odds;
  var isHome=(match.home===teamCode);
  var isAway=(match.away===teamCode);
  if(!isHome&&!isAway) return null;

  var notLoseOdds=deriveDoubleChanceOdds(odds.hw,odds.d,odds.aw,isHome);

  // 实际结果: 该队是否不输?
  var teamGoals=isHome?match.sh:match.sa;
  var oppGoals=isHome?match.sa:match.sh;
  var actuallyNotLose=(teamGoals>=oppGoals);

  // 单场回报: 押中了得 odds-1, 没押中亏1
  var singleReturn=actuallyNotLose ? (notLoseOdds-1) : -1;

  var probs=dewaterProbs(odds.hw,odds.d,odds.aw);
  var pNotLose=isHome ? (probs.ph+probs.pd) : (probs.pa+probs.pd);

  return {
    odds:notLoseOdds,
    pNotLose:pNotLose,
    actuallyNotLose:actuallyNotLose,
    singleReturn:singleReturn,
    direction:isHome?'1X':'X2'
  };
}

// ===== 让球盘榜: 单场结算 =====
function settleHandicapMatch(teamCode, match){
  var odds=match.odds;
  var isHome=(match.home===teamCode);
  var isAway=(match.away===teamCode);
  if(!isHome&&!isAway) return null;

  var teamGoals=isHome?match.sh:match.sa;
  var oppGoals=isHome?match.sa:match.sh;

  // ahLine 是从主队视角: 主队让球数为 ahLine
  // 从该队视角:
  var ahLine=odds.ahLine||0;
  var teamAhLine=isHome ? ahLine : -ahLine;
  // 调整差 = 该队进球 + 让球修正 - 对手进球
  var adj=(teamGoals+teamAhLine)-oppGoals;

  // 该队是让球方还是受让方?
  var isUpper=(teamAhLine<0); // 负值=让球方(上盘)

  var betOdds;
  if(isHome){
    // 主队视角: 上盘用 ahHome, 下盘用 ahAway
    betOdds=(teamAhLine<0) ? odds.ahHome : odds.ahAway;
  } else {
    // 客队视角: 上盘用 ahAway(客让), 下盘用 ahHome(客受)
    betOdds=(teamAhLine<0) ? odds.ahAway : odds.ahHome;
  }
  betOdds=betOdds||1.85;

  // 四态结算 (使用容差避免浮点精度问题)
  var eps=0.001;
  var multiplier=0, settlement='';
  if(adj>0.25+eps)            { multiplier=betOdds; settlement='全赢'; }
  else if(adj>0.25-eps)       { multiplier=(betOdds+1)/2; settlement='半赢'; }
  else if(adj>-0.25+eps)      { multiplier=1; settlement='走水'; }
  else if(adj>-0.25-eps)      { multiplier=0.5; settlement='半输'; }
  else                         { multiplier=0; settlement='全输'; }

  var singleReturn=multiplier-1;

  return {
    ahLine:teamAhLine,
    adj:adj,
    isUpper:isUpper,
    betOdds:betOdds,
    settlement:settlement,
    singleReturn:singleReturn,
    direction:isUpper?'上盘':'下盘'
  };
}

// ===== 归一化到 0-100 =====
function normalizeTo100(values){
  if(values.length===0) return [];
  // 使用线性映射: 将 [-1, max] 映射到 [20, 95]
  var avg=values.reduce(function(a,b){return a+b;},0)/values.length;
  var min=Math.min.apply(null,values);
  var max=Math.max.apply(null,values);
  var range=max-min||1;
  return values.map(function(v){
    var raw=(v-min)/range;
    return Math.round(20+raw*75);
  });
}

// ===== 主计算入口 =====
function computeOddsBoard(){
  var matches=getCompletedMatches();
  if(matches.length===0) return { notLose:[], handicap:[] };

  // 收集每队数据
  var teamNL={}; // {code: {returns:[], details:[]}}
  var teamHC={};

  matches.forEach(function(m){
    [m.home, m.away].forEach(function(tc){
      // 不负收益
      var nl=settleNotLoseMatch(tc,m);
      if(nl){
        if(!teamNL[tc]) teamNL[tc]={returns:[],details:[]};
        teamNL[tc].returns.push(nl.singleReturn);
        teamNL[tc].details.push(nl);
      }
      // 让球盘
      var hc=settleHandicapMatch(tc,m);
      if(hc){
        if(!teamHC[tc]) teamHC[tc]={returns:[],details:[]};
        teamHC[tc].returns.push(hc.singleReturn);
        teamHC[tc].details.push(hc);
      }
    });
  });

  // 胜平负榜: 按平均回报排序
  var nlScores={};
  Object.keys(teamNL).forEach(function(tc){
    var d=teamNL[tc];
    var avgReturn=d.returns.reduce(function(a,b){return a+b;},0)/d.returns.length;
    nlScores[tc]=avgReturn;
  });

  // 归一化
  var nlValues=Object.keys(nlScores).map(function(k){return nlScores[k];});
  var nlNorm=normalizeTo100(nlValues);
  var nlMap={};
  Object.keys(nlScores).forEach(function(k,i){ nlMap[k]=nlNorm[i]; });

  // 构建胜平负榜
  var nlList=[];
  Object.keys(teamNL).forEach(function(tc){
    var d=teamNL[tc];
    var avgP=0; d.details.forEach(function(dd){ avgP+=dd.pNotLose; }); avgP/=d.details.length;
    nlList.push({
      code:tc, flag:getFlag(tc), nameZh:getZh(tc), nameEn:getEn(tc),
      score:nlMap[tc],
      avgReturn:nlScores[tc].toFixed(3),
      pNotLose:Math.round(avgP*100),
      matches:d.details.length,
      sortVal:nlMap[tc]
    });
  });
  nlList.sort(function(a,b){ return b.sortVal-a.sortVal; });

  // 让球盘榜: 按平均回报排序
  var hcScores={};
  Object.keys(teamHC).forEach(function(tc){
    var d=teamHC[tc];
    var avgReturn=d.returns.reduce(function(a,b){return a+b;},0)/d.returns.length;
    hcScores[tc]=avgReturn;
  });

  var hcValues=Object.keys(hcScores).map(function(k){return hcScores[k];});
  var hcNorm=normalizeTo100(hcValues);
  var hcMap={};
  Object.keys(hcScores).forEach(function(k,i){ hcMap[k]=hcNorm[i]; });

  var hcList=[];
  Object.keys(teamHC).forEach(function(tc){
    var d=teamHC[tc];
    var wins=0; d.details.forEach(function(dd){ if(dd.settlement==='全赢'||dd.settlement==='半赢') wins++; });
    // 确定主要方向
    var upperCount=0; d.details.forEach(function(dd){ if(dd.isUpper) upperCount++; });
    var mainDir=(upperCount>=d.details.length/2)?'上盘':'下盘';
    hcList.push({
      code:tc, flag:getFlag(tc), nameZh:getZh(tc), nameEn:getEn(tc),
      score:hcMap[tc],
      avgReturn:hcScores[tc].toFixed(3),
      winRate:Math.round(wins/d.details.length*100),
      matches:d.details.length,
      direction:mainDir,
      sortVal:hcMap[tc]
    });
  });
  hcList.sort(function(a,b){ return b.sortVal-a.sortVal; });

  return { notLose:nlList, handicap:hcList };
}

// ===== 渲染 =====
function buildNLRow(r, rank){
  var h='';
  h+='<div class="ob-row">';
  h+='<span class="ob-rank">'+rank+'</span>';
  h+='<img class="ob-flag" src="'+r.flag+'" onerror="this.style.display=\'none\'" loading="lazy">';
  h+='<span class="ob-name" title="'+r.nameEn+'">'+r.nameZh+'</span>';
  h+='<span class="ob-score">'+r.score+'</span>';
  h+='<span class="ob-sub">'+r.pNotLose+'%<br>1X/X2</span>';
  h+='<span class="ob-matches">'+r.matches+'</span>';
  h+='</div>';
  return h;
}

function buildHCRow(r, rank){
  var h='';
  h+='<div class="ob-row">';
  h+='<span class="ob-rank">'+rank+'</span>';
  h+='<img class="ob-flag" src="'+r.flag+'" onerror="this.style.display=\'none\'" loading="lazy">';
  h+='<span class="ob-name" title="'+r.nameEn+'">'+r.nameZh+'</span>';
  h+='<span class="ob-score">'+r.score+'</span>';
  h+='<span class="ob-sub">'+r.winRate+'%<br>'+r.direction+'</span>';
  h+='<span class="ob-matches">'+r.matches+'</span>';
  h+='</div>';
  return h;
}

function buildPanel(list, buildFn, emptyText, topN){
  if(!topN) topN=15;
  var h='';
  if(list.length===0){
    h+='<div class="ob-empty">'+emptyText+'</div>';
    return h;
  }
  var currentRank=0;
  for(var i=0;i<Math.min(list.length,topN);i++){
    var r=list[i];
    var sameAsPrev=(i>0&&r.sortVal===list[i-1].sortVal);
    if(!sameAsPrev) currentRank=i+1;
    h+=buildFn(r,''+currentRank);
  }
  return h;
}

function buildBoardHTML(data){
  var h='';

  // 主Tab
  h+='<div class="ob-tabs" id="obMainTabs">';
  h+='<button class="ob-tab active" data-ob-panel="nl">⚽ 胜平负榜</button>';
  if(is2026()){
    h+='<button class="ob-tab" data-ob-panel="hc">⚖️ 让球盘榜</button>';
  } else {
    h+='<button class="ob-tab ob-tab-disabled" disabled title="往届世界杯无让球盘数据">⚖️ 让球盘榜</button>';
  }
  h+='</div>';

  // 胜平负榜 解释框
  h+='<div class="ob-explain" id="obExplainNL">';
  h+='<div class="ob-explain-toggle" onclick="this.parentElement.classList.toggle(\'open\')">';
  h+='<span>📖 什么是胜平负榜？点击展开说明</span>';
  h+='<span class="arrow">▼</span></div>';
  h+='<div class="ob-explain-body">';
  h+='<strong>"不输"是什么？</strong>一支球队在比赛中<strong>不输球</strong>，就是它<strong>赢球或打平</strong>。<br>';
  h+='如果你是主队球迷，投"主队不输"就是赌它<strong>要么赢、要么平</strong>；<br>';
  h+='如果你是客队球迷，投"客队不输"就是同样道理。<br>';
  h+='<strong>收益分</strong>综合了每场比赛中"不输"的实际赔率回报，按百分制换算。<br>';
  h+='分数越高，说明这支球队在本届比赛中<strong>让投注"不输"的人获得了更稳定的回报</strong>。';
  h+='</div></div>';

  // 让球盘榜 解释框
  h+='<div class="ob-explain" id="obExplainHC" style="display:none;">';
  h+='<div class="ob-explain-toggle" onclick="this.parentElement.classList.toggle(\'open\')">';
  h+='<span>📖 什么是让球盘榜？点击展开说明</span>';
  h+='<span class="arrow">▼</span></div>';
  h+='<div class="ob-explain-body">';
  h+='<strong>让球盘怎么看？</strong>实力强的一方"让球"，弱的一方"受让"。<br>';
  h+='比如巴西让沙特 1.5 球，意味着巴西<strong>净胜至少 2 球才算赢盘</strong>。<br>';
  h+='结算时分为四种情况：<strong>击穿盘口（全赢）</strong>、<strong>赢半（只赢一半赔率）</strong>、<br>';
  h+='<strong>返还本金（俗称走水）</strong>、<strong>未中（全输）</strong>。<br>';
  h+='收益分综合了这四种结算结果，<strong>按每场比赛的实际回报换算为百分制</strong>。<br>';
  h+='上盘 = 让球方、下盘 = 受让方。';
  h+='</div></div>';

  // 表头
  h+='<div class="ob-headers" id="obHeadersNL">';
  h+='<span class="ob-hdr-rank">#</span>';
  h+='<span class="ob-hdr-name">球队</span>';
  h+='<span class="ob-hdr-score">收益分</span>';
  h+='<span class="ob-hdr-sub">不输概率</span>';
  h+='<span class="ob-hdr-matches">场次</span>';
  h+='</div>';

  h+='<div class="ob-headers" id="obHeadersHC" style="display:none;">';
  h+='<span class="ob-hdr-rank">#</span>';
  h+='<span class="ob-hdr-name">球队</span>';
  h+='<span class="ob-hdr-score">收益分</span>';
  h+='<span class="ob-hdr-sub">赢盘率</span>';
  h+='<span class="ob-hdr-matches">场次</span>';
  h+='</div>';

  // 面板
  h+='<div class="ob-panels">';
  h+='<div class="ob-panel active" id="obPanelNL">'+buildPanel(data.notLose,buildNLRow,'暂无已完赛数据，榜单将在比赛完成后动态生成',15)+'</div>';
  h+='<div class="ob-panel" id="obPanelHC">'+buildPanel(data.handicap,buildHCRow,'暂无已完赛数据，榜单将在比赛完成后动态生成',15)+'</div>';
  h+='</div>';

  // 底部
  h+='<div class="ob-note">';
  h+='榜单随比赛每日更新，指标在<strong>"小组赛阶段"</strong>变动较大，在<strong>"淘汰赛阶段"</strong>趋于稳定。';
  h+='</div>';

  return h;
}

// ===== 暴露到全局 =====
window.OddsBoard = {
  show: function(){
    var data=computeOddsBoard();
    var el=document.getElementById('ovOddsBoardContent');
    if(el) el.innerHTML=buildBoardHTML(data);
    var modal=document.getElementById('ovOddsBoardModal');
    if(modal) modal.classList.add('visible');

    // Tab 切换
    setTimeout(function(){
      var tabs=document.getElementById('obMainTabs');
      if(!tabs) return;
      tabs.addEventListener('click',function(e){
        var btn=e.target.closest('.ob-tab');
        if(!btn) return;
        var panelId=btn.getAttribute('data-ob-panel');
        // 切换按钮
        tabs.querySelectorAll('.ob-tab').forEach(function(b){b.classList.remove('active');});
        btn.classList.add('active');
        // 切换面板
        var isNL=(panelId==='nl');
        document.getElementById('obPanelNL').classList.toggle('active',isNL);
        document.getElementById('obPanelHC').classList.toggle('active',!isNL);
        document.getElementById('obHeadersNL').style.display=isNL?'':'none';
        document.getElementById('obHeadersHC').style.display=isNL?'none':'';
        document.getElementById('obExplainNL').style.display=isNL?'':'none';
        document.getElementById('obExplainHC').style.display=isNL?'none':'';
      });
    },50);
  },

  refresh: function(){
    var modal=document.getElementById('ovOddsBoardModal');
    if(!modal||!modal.classList.contains('visible')) return;
    this.show();
  }
};

console.log('✅ V1.82 赔率榜引擎已安装（胜平负榜 + 让球盘榜 · 动态聚合）');

})();
