// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
// ===== 世界杯数据分析 - 渲染逻辑 & 全局状态 =====
// 依赖: teamdata.js (pastFlagMap, pastTeamNames, pastFlag)
// 依赖: matchdata.js (wc20xxData, koLabels, koStages, wcMatchDetails, matchStats)
// 依赖: playerdata_core.js / playerdata_media.js / playerdata_career.js / playerdata_meta.js (playerDB)

// FIFA World Cup Data Analysis - Player & Match Database
// Auto-generated from HTML data section. Update this file to modify data.
// Version: V1.67 | Generated: 2026-07-19
// These variables are at global scope and accessible from the main application.

// ===== Global shared state (used by both data & UI) =====
var pastWCYear = '2022';
var pastWCStage = 'all';
var currentEdition = null;


// ========== 渲染函数 ==========
window.fmtOdds=function(v){
  if(v===undefined||v===null||v==='-')return'-';
  if(typeof v==='number')return v.toFixed(2);
  return String(v);
}

window.switchPastWCYear=function(year){
  pastWCYear=year;
  pastWCStage='all';
  // Update main view if in past mode
  if(currentEdition!=='2026'){
    renderPastWCMatchesMain();
  }
};

// ========== PK切换 & 回测弹窗 ==========
window.togglePKDisplay=function(el,fullScore,pkDetail){
  var parent=el.parentElement;
  var displayEl=parent.querySelector('.past-score-display');
  if(!displayEl)return;
  if(el.textContent==='🔍PK'){
    displayEl.textContent=fullScore+' (PK'+pkDetail.replace('点球决胜 ','')+')';
    displayEl.style.fontSize='0.78rem';
    el.textContent='收起';
    el.style.color='var(--accent2)';
  }else{
    displayEl.textContent=fullScore;
    displayEl.style.fontSize='0.92rem';
    el.textContent='🔍PK';
    el.style.color='var(--gold-light)';
  }
}
window.closeBacktestModal=function(){
  document.getElementById('backtestModal').classList.remove('visible');
};
// Add click-to-close for backtest modal overlay
setTimeout(function(){var bm=document.getElementById('backtestModal');if(bm)bm.addEventListener('click',function(e){
  if(e.target===this)closeBacktestModal();
});},100);

// switchPastWCStage → 已委托给 switchPastWCStageMain（V1.67 统一入口）
window.switchPastWCStage=function(stage){
  switchPastWCStageMain(stage);
};
function collectAllMatches(data) {
  var allMatches = [];
  Object.keys(data.groups).sort().forEach(function(gid) {
    var g = data.groups[gid];
    g.matches.forEach(function(m, mi) {
      allMatches.push({
        m: m, stage: g.name, stageId: gid, matchIdx: mi,
        isGroup: true, date: m.date || '', venue: m.venue || ''
      });
    });
  });
  var koOrder = ['R16','QF','SF','TP','FINAL'];
  koOrder.forEach(function(ks) {
    var kr = data.knockout.find(function(k) { return k.stage === ks; });
    if (!kr) return;
    kr.matches.forEach(function(m, mi) {
      var sn = {'R16':'16强','QF':'8强','SF':'4强','TP':'季军赛','FINAL':'决赛'}[ks]||ks;
      allMatches.push({
        m: m, stage: sn, stageId: ks, matchIdx: mi,
        isGroup: false, date: m.date || '', venue: m.venue || ''
      });
    });
  });
  return allMatches;
}

window.runBacktest=function(){
  var data=pastWCYear==='2022'?wc2022Data:pastWCYear==='2018'?wc2018Data:pastWCYear==='2014'?wc2014Data:pastWCYear==='2010'?wc2010Data:pastWCYear==='2006'?wc2006Data:wc2002Data;
  var yearLabel={'2022':'🇶🇦 2022 卡塔尔','2018':'🇷🇺 2018 俄罗斯','2014':'🇧🇷 2014 巴西','2010':'🇿🇦 2010 南非','2006':'🇩🇪 2006 德国','2002':'🇰🇷🇯🇵 2002 韩日'}[pastWCYear]||pastWCYear;
  var bl = document.getElementById('backtestYearLabel');
  if (bl) bl.textContent = '— ' + yearLabel;
  
  var allMatches = collectAllMatches(data);
  
  // Sort group matches by matchIdx within each group (already in order)
  // Knockout matches are already in order
  
  // ===== DEFINE THREE STRATEGIES =====
  var strategies = [
    {
      id: 'conservative',
      name: '🛡️ 稳健型',
      desc: '仅投赔率1.30~2.00的明显热门，每注8%本金',
      capital: 10000,
      initialCapital: 10000,
      bets: [], totalBets: 0, wins: 0, losses: 0,
      peakCapital: 10000, peakMatchIdx: null, maxDrawdown: 0,
      stageStats: {},
      shouldBet: function(odds) {
        var favOdds = Math.min(odds.hw, odds.aw);
        return favOdds >= 1.30 && favOdds <= 2.00;
      },
      getStake: function() { return Math.floor(this.capital * 0.08); },
      getTarget: function(odds) {
        return odds.hw < odds.aw ? 'home' : 'away';
      }
    },
    {
      id: 'aggressive',
      name: '⚡ 激进型',
      desc: '投赔率1.20~2.80的热门+接近对决的平局，每注15%本金',
      capital: 10000,
      initialCapital: 10000,
      bets: [], totalBets: 0, wins: 0, losses: 0,
      peakCapital: 10000, peakMatchIdx: null, maxDrawdown: 0,
      stageStats: {},
      shouldBet: function(odds) {
        var favOdds = Math.min(odds.hw, odds.aw);
        var dogOdds = Math.max(odds.hw, odds.aw);
        // Bet if there's a clear favorite OR if teams are close (bet draw)
        if (favOdds >= 1.20 && favOdds <= 2.80) return true;
        if (Math.abs(odds.hw - odds.aw) < 0.5) return true; // close match
        return false;
      },
      getStake: function() { return Math.floor(this.capital * 0.15); },
      getTarget: function(odds) {
        var diff = Math.abs(odds.hw - odds.aw);
        if (diff < 0.5) return 'draw'; // close match → bet draw
        return odds.hw < odds.aw ? 'home' : 'away';
      }
    },
    {
      id: 'upset',
      name: '🎯 以小博大',
      desc: '仅投赔率≥4.00的大冷门，每注2%本金，小注博大奖',
      capital: 10000,
      initialCapital: 10000,
      bets: [], totalBets: 0, wins: 0, losses: 0,
      peakCapital: 10000, peakMatchIdx: null, maxDrawdown: 0,
      stageStats: {},
      shouldBet: function(odds) {
        var dogOdds = Math.max(odds.hw, odds.aw);
        return dogOdds >= 4.00;
      },
      getStake: function() { return Math.floor(this.capital * 0.02); },
      getTarget: function(odds) {
        return odds.hw > odds.aw ? 'home' : 'away'; // bet on underdog
      }
    }
  ];
  
  // ===== RUN BACKTEST =====
  allMatches.forEach(function(item, globalIdx) {
    var m = item.m;
    var od = m.odds || {hw: 2.50, d: 3.20, aw: 2.80};
    var outcome = m.sh > m.sa ? 'home' : (m.sa > m.sh ? 'away' : 'draw');
    var stageKey = item.stage;
    
    strategies.forEach(function(strat) {
      if (!strat.stageStats[stageKey]) {
        strat.stageStats[stageKey] = {bets: 0, stakes: 0, returns: 0, wins: 0};
      }
      
      if (!strat.shouldBet(od)) return;
      
      var target = strat.getTarget(od);
      var stake = strat.getStake();
      if (stake <= 0) return;
      
      // Place bet
      strat.totalBets++;
      strat.stageStats[stageKey].bets++;
      strat.stageStats[stageKey].stakes += stake;
      
      var returnAmount = 0;
      var won = false;
      if (target === 'draw' && outcome === 'draw') {
        returnAmount = Math.floor(stake * (od.d || 3.2));
        won = true;
      } else if (target === 'home' && outcome === 'home') {
        returnAmount = Math.floor(stake * od.hw);
        won = true;
      } else if (target === 'away' && outcome === 'away') {
        returnAmount = Math.floor(stake * od.aw);
        won = true;
      }
      
      if (won) {
        strat.wins++;
        strat.stageStats[stageKey].wins++;
        strat.stageStats[stageKey].returns += returnAmount;
        strat.capital += returnAmount - stake;
      } else {
        strat.losses++;
        strat.capital -= stake;
      }
      
      strat.bets.push({
        stage: stageKey,
        match: (getPastTeamName(m.h).zh || m.h) + ' vs ' + (getPastTeamName(m.a).zh || m.a),
        target: target === 'home' ? (getPastTeamName(m.h).zh || m.h) + '胜' : (target === 'away' ? (getPastTeamName(m.a).zh || m.a) + '胜' : '平局'),
        odds: target === 'home' ? od.hw : (target === 'away' ? od.aw : (od.d || 3.2)),
        stake: stake,
        outcome: outcome === 'home' ? (getPastTeamName(m.h).zh || m.h) + '胜' : (outcome === 'away' ? (getPastTeamName(m.a).zh || m.a) + '胜' : '平局'),
        result: won ? '✅' : '❌',
        returnAmount: returnAmount,
        capitalAfter: strat.capital
      });
      
      // Track drawdown
      if (strat.capital > strat.peakCapital) { strat.peakCapital = strat.capital; strat.peakMatchIdx = globalIdx; }
      var dd = (strat.peakCapital - strat.capital) / strat.peakCapital * 100;
      if (dd > strat.maxDrawdown) strat.maxDrawdown = dd;
    });
  });
  
  // ===== RENDER RESULTS =====
  var html = '';
  
  // Summary cards
  html += '<div class="backtest-summary-grid">';
  strategies.forEach(function(s) {
    var profit = s.capital - s.initialCapital;
    var roi = ((s.capital / s.initialCapital) - 1) * 100;
    var hitRate = s.totalBets > 0 ? (s.wins / s.totalBets * 100) : 0;
    var cls = profit >= 0 ? 'backtest-positive' : (roi < -20 ? 'backtest-negative' : 'backtest-neutral');
    var badge = profit >= 500 ? '🏆 优异' : (profit >= 0 ? '✅ 正收益' : (roi < -20 ? '⚠️ 严重亏损' : '📉 亏损'));
    var badgeBg = profit >= 500 ? 'rgba(46,204,113,0.2)' : (profit >= 0 ? 'rgba(46,204,113,0.12)' : 'rgba(231,76,60,0.12)');
    var badgeColor = profit >= 0 ? '#2ecc71' : '#e74c3c';
    html += '<div class="backtest-summary-card">';
    html += '<div class="card-label">' + s.name + '</div>';
    html += '<div class="card-value ' + cls + '">' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + '</div>';
    html += '<div class="card-sub">起始本金 ¥' + s.initialCapital.toLocaleString() + ' | 最终金额 ¥' + s.capital.toLocaleString() + '</div>';
    html += '<div class="card-sub">净盈亏 ' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + ' | ROI ' + (roi >= 0 ? '+' : '') + roi.toFixed(2) + '%</div>';
    html += '<div class="card-sub">命中 ' + s.wins + '/' + s.totalBets + ' (' + hitRate.toFixed(1) + '%) | 最大回撤 ' + s.maxDrawdown.toFixed(1) + '%</div>';
    if (s.peakMatchIdx !== null) {
      var pkProfit = s.peakCapital - s.initialCapital;
      html += '<div class="card-sub" style="color:#f0d070;">📈 峰值 ¥' + s.peakCapital.toLocaleString() + '（第' + (s.peakMatchIdx + 1) + '场）| 峰值盈利 ' + (pkProfit >= 0 ? '+' : '') + '¥' + pkProfit.toLocaleString() + '</div>';
    }
    html += '<div style="margin-top:6px;"><span style="display:inline-block;padding:3px 10px;border-radius:12px;font-size:0.65rem;font-weight:700;background:' + badgeBg + ';color:' + badgeColor + ';">' + badge + '</span></div>';
    html += '</div>';
  });
  html += '</div>';
  
  // Strategy descriptions
  html += '<div class="backtest-insight"><strong>📋 策略说明：</strong><br>';
  html += '<strong>🛡️ 稳健型：</strong>' + strategies[0].desc + ' — 追求稳定正收益，低波动。<br>';
  html += '<strong>⚡ 激进型：</strong>' + strategies[1].desc + ' — 扩大投注范围，提高仓位。<br>';
  html += '<strong>🎯 以小博大：</strong>' + strategies[2].desc + ' — 专抓大冷门，极端波动。<br>';
  html += '<strong>初始本金：</strong>每策略 ¥10,000 | <strong>投注顺序：</strong>小组赛→淘汰赛（按比赛时间顺序）</div>';
  
  // Stage-by-stage breakdown table
  html += '<div class="backtest-section-title">📊 分阶段明细 — 小组赛</div>';
  html += '<div style="overflow-x:auto;"><table class="backtest-detail-table"><thead><tr><th>阶段</th>';
  strategies.forEach(function(s) { html += '<th>' + s.name + ' 投注/命中/盈亏</th>'; });
  html += '</tr></thead><tbody>';
  
  // Group stages
  Object.keys(data.groups).sort().forEach(function(gid) {
    var g = data.groups[gid];
    html += '<tr><td style="font-weight:700;">' + g.name + '</td>';
    strategies.forEach(function(s) {
      var ss = s.stageStats[g.name] || {bets: 0, stakes: 0, returns: 0, wins: 0};
      var profit = ss.returns - ss.stakes;
      var cls = profit > 0 ? 'backtest-positive' : (profit < 0 ? 'backtest-negative' : '');
      html += '<td class="' + cls + '">' + ss.bets + '注 | 中' + ss.wins + ' | ' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + '</td>';
    });
    html += '</tr>';
  });
  
  // Knockout stages
  html += '</tbody></table></div>';
  html += '<div class="backtest-section-title">📊 分阶段明细 — 淘汰赛</div>';
  html += '<div style="overflow-x:auto;"><table class="backtest-detail-table"><thead><tr><th>阶段</th>';
  strategies.forEach(function(s) { html += '<th>' + s.name + ' 投注/命中/盈亏</th>'; });
  html += '</tr></thead><tbody>';
  
  var koOrder = ['R16','QF','SF','TP','FINAL'];
  koOrder.forEach(function(ks) {
    var sn = {'R16':'16强','QF':'8强','SF':'4强','TP':'季军赛','FINAL':'决赛'}[ks]||ks;
    html += '<tr><td style="font-weight:700;">' + sn + '</td>';
    strategies.forEach(function(s) {
      var ss = s.stageStats[sn] || {bets: 0, stakes: 0, returns: 0, wins: 0};
      var profit = ss.returns - ss.stakes;
      var cls = profit > 0 ? 'backtest-positive' : (profit < 0 ? 'backtest-negative' : '');
      html += '<td class="' + cls + '">' + ss.bets + '注 | 中' + ss.wins + ' | ' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + '</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  
  // Recent bet history (last 15 bets per strategy)
  html += '<div class="backtest-section-title">📋 最近投注记录</div>';
  strategies.forEach(function(s) {
    html += '<div style="margin-bottom:8px;"><strong>' + s.name + '</strong> (共' + s.totalBets + '注)</div>';
    html += '<div style="overflow-x:auto;"><table class="backtest-detail-table"><thead><tr><th>阶段</th><th>比赛</th><th>投注选项</th><th>赔率</th><th>金额</th><th>赛果</th><th>结果</th><th>余额</th></tr></thead><tbody>';
    var recentBets = s.bets.slice(-15);
    recentBets.forEach(function(b) {
      html += '<tr><td>' + b.stage + '</td><td style="font-size:0.68rem;">' + b.match + '</td><td>' + b.target + '</td><td>' + (typeof b.odds === 'number' ? b.odds.toFixed(2) : b.odds) + '</td><td>¥' + b.stake.toLocaleString() + '</td><td>' + b.outcome + '</td><td>' + b.result + '</td><td>¥' + b.capitalAfter.toLocaleString() + '</td></tr>';
    });
    html += '</tbody></table></div>';
  });
  
  // Key insights
  html += '<div class="backtest-section-title">💡 关键洞察</div>';
  var bestStrat = strategies.reduce(function(a, b) {
    return (a.capital - a.initialCapital) > (b.capital - b.initialCapital) ? a : b;
  });
  html += '<div class="backtest-insight">';
  html += '<strong>🏆 最佳策略：</strong>' + bestStrat.name + ' — 最终资金 ¥' + bestStrat.capital.toLocaleString() + '（' + (bestStrat.capital >= bestStrat.initialCapital ? '+' : '') + '¥' + (bestStrat.capital - bestStrat.initialCapital).toLocaleString() + '）<br>';
  html += '<strong>⚠️ 风险提示：</strong>以上回测基于 ' + yearLabel + ' 历史数据，过去表现不代表未来收益。2026年世界杯扩军至48队，竞争格局将发生显著变化。<br>';
  html += '<strong>📌 策略逻辑：</strong>按比赛时间顺序模拟投注（先小组赛后淘汰赛），初始本金¥10,000。稳健型仅投明显热门，激进型扩大范围+抓平局，以小博大专投大冷门。</div>';
  html += '<div style="text-align:center;padding:16px 0 8px;color:var(--text-secondary);font-size:0.75rem;opacity:0.8;">◆ 仅用作数据分析 不构成投资建议 ◆</div>';
  
  // Set content
  var bc = document.getElementById('backtestContent');
  if (bc) bc.innerHTML = html;
  var bm = document.getElementById('backtestModal');
  if (bm) bm.classList.add('visible');
};

window.switchEdition=function(edition){
  currentEdition=edition;
  document.querySelectorAll('#wcEditionBar .wc-edition-tab').forEach(function(t){
    t.classList.remove('active');
    if(t.getAttribute('data-edition')===edition) t.classList.add('active');
  });
  var is2026=(edition==='2026');
  var isPast=(edition!=='2026' && edition!==null);
  var g2026=document.getElementById('groupsContainer');
  var ko2026=document.getElementById('knockoutPanel');
  var tabContainer=document.getElementById('tabContainer');
  var mainToolbar=document.getElementById('mainToolbar');
  var searchToolbar=document.getElementById('searchToolbar');
  var pastMain=document.getElementById('pastWCMainContainer');
  // Always keep search toolbar visible
  if(searchToolbar) searchToolbar.style.display='flex';
  if(is2026){
    if(g2026) g2026.style.display='block';
    if(tabContainer) tabContainer.style.display='flex';
    if(mainToolbar) mainToolbar.style.display='flex';
    if(pastMain) pastMain.classList.remove('visible');
    if(typeof mTab!=='undefined'&&mTab==='knockout'){
      if(ko2026) ko2026.classList.add('visible');
    }
    if(typeof rGM==='function') rGM(); else console.warn('rGM not available yet, will retry on next switchEdition call');
    if(typeof mTab!=='undefined'&&mTab==='knockout'){ if(typeof autoFillKO==='function') autoFillKO(); if(typeof rKP==='function') rKP(); }
  } else if(isPast){
    if(g2026) g2026.style.display='none';
    if(ko2026) ko2026.classList.remove('visible');
    if(tabContainer) tabContainer.style.display='none';
    if(mainToolbar) mainToolbar.style.display='none';
    if(pastMain) pastMain.classList.add('visible');
    pastWCYear=edition;
    pastWCStage='all';
    renderPastWCMatchesMain();
  }
};


// V20: 往届球队完整显示（中文·缩写·英文）- 与2026格式统一
function pastTeamBlockFull(code, side){
  var tn = getPastTeamName(code) || {zh:code, en:code};
  var flagUrl = pastFlag(code);
  var sideClass = 'past-team-full ' + (side === 'home' ? 'home' : 'away');
  var infoHtml = '<div class="past-team-finfo"><span class="past-team-fname">' + tn.zh + '</span><span class="past-team-fcode">' + code + ' · ' + tn.en + '</span></div>';
  if (side === 'home') {
    return '<span class="' + sideClass + '">' + infoHtml + '<img src="' + flagUrl + '" onerror="this.style.display=\'none\'"></span>';
  } else {
    return '<span class="' + sideClass + '"><img src="' + flagUrl + '" onerror="this.style.display=\'none\'">' + infoHtml + '</span>';
  }
}
window.renderPastWCMatchesMain=function(){
  var data=pastWCYear==='2022'?wc2022Data:pastWCYear==='2018'?wc2018Data:pastWCYear==='2014'?wc2014Data:pastWCYear==='2010'?wc2010Data:pastWCYear==='2006'?wc2006Data:wc2002Data;
  var search=(document.getElementById('searchInput')&&document.getElementById('searchInput').value||'').trim().toLowerCase()||'';
  var container=document.getElementById('pastWCContentMain');
  var infoDiv=document.getElementById('pastWCInfoMain');
  if(infoDiv)infoDiv.textContent=data.info;
  var stage=pastWCStage;
  var stageTabs=document.getElementById('pastWCStageTabsMain');
  var tabsHtml='<div class="past-wc-subtab'+(stage==='all'?' active':'')+'" data-stage="all" onclick="switchPastWCStageMain(\'all\')">全部</div>';
  Object.keys(data.groups).forEach(function(g){
    tabsHtml+='<div class="past-wc-subtab'+(stage===g?' active':'')+'" data-stage="'+g+'" onclick="switchPastWCStageMain(\''+g+'\')">'+data.groups[g].name+'</div>';
  });
  koStages.forEach(function(ks){
    tabsHtml+='<div class="past-wc-subtab'+(stage===ks?' active':'')+'" data-stage="'+ks+'" onclick="switchPastWCStageMain(\''+ks+'\')">'+koLabels[ks]+'</div>';
  });
  if(stageTabs)stageTabs.innerHTML=tabsHtml;

  var html='';
  var groupIds=stage==='all'?Object.keys(data.groups):(data.groups[stage]?[stage]:[]);
  groupIds.forEach(function(gid){
    var g=data.groups[gid];
    html+='<div class="past-group-header-mini">'+g.name+'</div>';
    g.matches.forEach(function(m){
      if(search){var hnz=getPastTeamName(m.h).zh,anz=getPastTeamName(m.a).zh;if(hnz.indexOf(search)===-1&&anz.indexOf(search)===-1&&m.h.toLowerCase().indexOf(search)===-1&&m.a.toLowerCase().indexOf(search)===-1)return;}
      var rc=getMatchResultClass(m);
      var hn=getPastTeamName(m.h),an=getPastTeamName(m.a);
      var od=m.odds||{hw:'-',d:'-',aw:'-'};
      var scoreDisplay=m.sh+' : '+m.sa;
      var pkInfo=m.ps?'点球决胜 '+m.ps:'';
      html+='<div class="past-match-card '+rc+'" onclick="showMatchDetail(\''+pastWCYear+'\',\''+gid+'\',\''+m.h+'\',\''+m.a+'\',false)">';
      html+='<div class="past-match-row">';
      html+='<span class="past-stage-badge">'+g.name+'</span>';
      html+=pastTeamBlockFull(m.h,'home');
      html+='<span class="past-score-real past-score-clickable" onclick="event.stopPropagation();"><span class="past-score-display">'+scoreDisplay+'</span>'+(pkInfo?'<span class="past-pk-toggle" onclick="event.stopPropagation();togglePKDisplay(this,\''+m.sh+':'+m.sa+'\',\''+pkInfo+'\')">🔍PK</span>':'')+'</span>';
      html+=pastTeamBlockFull(m.a,'away');
      html+=getMatchBadge(m);
      html+='<span class="past-odds-mini"><span>主'+fmtOdds(od.hw)+'</span><span>平'+fmtOdds(od.d)+'</span><span>客'+fmtOdds(od.aw)+'</span></span>';
      html+='<span class="past-venue">'+(m.venue||'')+'</span>';
      html+='<span class="past-date">'+formatPastDate(m.date)+'</span>';
      html+='</div></div>';
    });
  });

  var ksFilter=stage==='all'?koStages:(koStages.indexOf(stage)>=0?[stage]:[]);
  ksFilter.forEach(function(ks){
    var koRound=data.knockout.find(function(k){return k.stage===ks;});
    if(!koRound)return;
    html+='<div class="past-group-header-mini">'+koLabels[ks]+'</div>';
    koRound.matches.forEach(function(m){
      if(search){var hnz=getPastTeamName(m.h).zh,anz=getPastTeamName(m.a).zh;if(hnz.indexOf(search)===-1&&anz.indexOf(search)===-1)return;}
      var rc=getMatchResultClass(m);
      var hn=getPastTeamName(m.h),an=getPastTeamName(m.a);
      var od=m.odds||{hw:'-',d:'-',aw:'-'};
      var scoreDisplay=m.sh+' : '+m.sa;
      var pkInfo=m.ps?'点球决胜 '+m.ps:'';
      html+='<div class="past-match-card '+rc+'" onclick="showMatchDetail(\''+pastWCYear+'\',\''+ks+'\',\''+m.h+'\',\''+m.a+'\',true)">';
      html+='<div class="past-match-row">';
      html+='<span class="past-stage-badge">'+koLabels[ks]+'</span>';
      html+=pastTeamBlockFull(m.h,'home');
      html+='<span class="past-score-real past-score-clickable" onclick="event.stopPropagation();"><span class="past-score-display">'+scoreDisplay+'</span>'+(pkInfo?'<span class="past-pk-toggle" onclick="event.stopPropagation();togglePKDisplay(this,\''+m.sh+':'+m.sa+'\',\''+pkInfo+'\')">🔍PK</span>':'')+'</span>';
      html+=pastTeamBlockFull(m.a,'away');
      html+=getMatchBadge(m);
      html+='<span class="past-odds-mini"><span>主'+fmtOdds(od.hw)+'</span><span>平'+fmtOdds(od.d)+'</span><span>客'+fmtOdds(od.aw)+'</span></span>';
      html+='<span class="past-venue">-</span>';
      html+='<span class="past-date">'+formatPastDate(m.date)+'</span>';
      html+='</div></div>';
    });
  });

  container.innerHTML=html||'<div style="padding:20px;text-align:center;color:var(--text-secondary);">未找到匹配数据</div>';
};

window.switchPastWCStageMain=function(stage){
  pastWCStage=stage;
  document.querySelectorAll('#pastWCStageTabsMain .past-wc-subtab').forEach(function(t){t.classList.remove('active');});
  var tab=document.querySelector('#pastWCStageTabsMain .past-wc-subtab[data-stage="'+stage+'"]');
  if(tab)tab.classList.add('active');
  renderPastWCMatchesMain();
};


// ========== 均注策略回测 (Flat Betting) ==========
window.runFlatBacktestMain=function(){
  try{
  var data=pastWCYear==='2022'?wc2022Data:pastWCYear==='2018'?wc2018Data:pastWCYear==='2014'?wc2014Data:pastWCYear==='2010'?wc2010Data:pastWCYear==='2006'?wc2006Data:wc2002Data;
  if(!data||!data.groups){showToast('⚠️ 暂无 '+pastWCYear+' 年世界杯数据');return;}
  var yearLabel={'2022':'🇶🇦 2022 卡塔尔','2018':'🇷🇺 2018 俄罗斯','2014':'🇧🇷 2014 巴西','2010':'🇿🇦 2010 南非','2006':'🇩🇪 2006 德国','2002':'🇰🇷🇯🇵 2002 韩日'}[pastWCYear]||pastWCYear;
  var bl=document.getElementById('backtestYearLabel');
  if(bl)bl.textContent='— '+yearLabel+' · 均注策略（预算本金 ¥10,000，每场 ¥1,000，耗尽后追加）';
  
  var allMatches=collectAllMatches(data);
  
  var totalMatches=allMatches.length;
  var INITIAL_CAPITAL=10000;
  var STAKE_PER_BET=1000;
  
  var strategies=[
    {id:'all_fav',name:'🟢 全投预期（押热门）',desc:'每场¥1,000押赔率最低方（热门），共'+totalMatches+'场',
     capital:INITIAL_CAPITAL,initialCapital:INITIAL_CAPITAL,additionalCapital:0,injectionCount:0,
     totalBets:0,wins:0,totalStake:0,totalReturn:0,bankruptAt:null,peakCapital:INITIAL_CAPITAL,peakMatchIdx:null,
     getTarget:function(od){return od.hw<od.aw?'home':'away';},
     getOdds:function(od){return Math.min(od.hw,od.aw);}},
    {id:'all_draw',name:'🟠 全投平局',desc:'每场¥1,000押平局，共'+totalMatches+'场',
     capital:INITIAL_CAPITAL,initialCapital:INITIAL_CAPITAL,additionalCapital:0,injectionCount:0,
     totalBets:0,wins:0,totalStake:0,totalReturn:0,bankruptAt:null,peakCapital:INITIAL_CAPITAL,peakMatchIdx:null,
     getTarget:function(od){return 'draw';},
     getOdds:function(od){return od.d||3.2;}},
    {id:'all_dog',name:'🔴 全投爆冷（押冷门）',desc:'每场¥1,000押赔率最高方（冷门），共'+totalMatches+'场',
     capital:INITIAL_CAPITAL,initialCapital:INITIAL_CAPITAL,additionalCapital:0,injectionCount:0,
     totalBets:0,wins:0,totalStake:0,totalReturn:0,bankruptAt:null,peakCapital:INITIAL_CAPITAL,peakMatchIdx:null,
     getTarget:function(od){return od.hw>od.aw?'home':'away';},
     getOdds:function(od){return Math.max(od.hw,od.aw);}}
  ];
  
  strategies.forEach(function(s){
    s.stageStats={};
    s.classStats={expected:{bets:0,wins:0,stake:0,ret:0},above:{bets:0,wins:0,stake:0,ret:0},upset:{bets:0,wins:0,stake:0,ret:0}};
  });
  
  allMatches.forEach(function(item,globalIdx){
    var m=item.m;
    var od=m.odds||{hw:2.50,d:3.20,aw:2.80};
    var outcome=m.sh>m.sa?'home':(m.sa>m.sh?'away':'draw');
    var matchClass=getMatchResultClass(m);
    var classKey=matchClass.replace('result-','')||'expected';
    var stageKey=item.stage;
    
    strategies.forEach(function(s){
      if(!s.stageStats[stageKey])s.stageStats[stageKey]={bets:0,wins:0,stake:0,ret:0};
      
      var target=s.getTarget(od);
      var odds=s.getOdds(od);
      var stake=STAKE_PER_BET;
      
      // ★ NEW: 资金不足时自动追加 ¥1,000 ★
      while(s.capital < stake){
        if(s.bankruptAt === null) s.bankruptAt = globalIdx;
        s.capital += 1000;
        s.additionalCapital += 1000;
        s.injectionCount++;
      }
      
      s.capital -= stake;
      if(s.capital > s.peakCapital){s.peakCapital = s.capital; s.peakMatchIdx = globalIdx;}
      s.totalBets++;
      s.totalStake += stake;
      s.stageStats[stageKey].bets++;
      s.stageStats[stageKey].stake += stake;
      s.classStats[classKey].bets++;
      s.classStats[classKey].stake += stake;
      
      var won=false,returnAmount=0;
      if(target==='draw'&&outcome==='draw'){returnAmount=Math.round(stake*odds);won=true;}
      else if(target==='home'&&outcome==='home'){returnAmount=Math.round(stake*odds);won=true;}
      else if(target==='away'&&outcome==='away'){returnAmount=Math.round(stake*odds);won=true;}
      
      if(won){
        s.wins++;
        s.capital += returnAmount;
        if(s.capital > s.peakCapital){s.peakCapital = s.capital; s.peakMatchIdx = globalIdx;}
        s.totalReturn += returnAmount;
        s.stageStats[stageKey].wins++;
        s.stageStats[stageKey].ret += returnAmount;
        s.classStats[classKey].wins++;
        s.classStats[classKey].ret += returnAmount;
      }
    });
  });
  
  var html='';
  
  // ★ 汇总卡片：双重ROI + 追加详情 ★
  html+='<div class="backtest-summary-grid">';
  strategies.forEach(function(s){
    var actualTotal=s.initialCapital+s.additionalCapital;
    var totalInvested=s.initialCapital+s.additionalCapital;
    var profit=s.capital-totalInvested;
    var roiBudget=s.initialCapital>0?(profit/s.initialCapital*100):0;
    var roiActual=totalInvested>0?(profit/totalInvested*100):0;
    var hitRate=s.totalBets>0?(s.wins/s.totalBets*100):0;
    var cls=profit>=0?'backtest-positive':'backtest-negative';
    var badge=profit>=0?'✅ 正收益(预算)':'📉 亏损(预算)';
    html+='<div class="backtest-summary-card">';
    html+='<div class="card-label">'+s.name+'</div>';
    html+='<div class="card-value '+cls+'">'+(profit>=0?'+':'')+'¥'+profit.toLocaleString()+'</div>';
    html+='<div class="card-sub">实际投入 ¥'+totalInvested.toLocaleString()+'（预算 ¥'+s.initialCapital.toLocaleString()+'+ 追加 ¥'+s.additionalCapital.toLocaleString()+'）</div>';
    html+='<div class="card-sub">最终金额 ¥'+s.capital.toLocaleString()+'</div>';
    html+='<div class="card-sub">ROI(预算) '+(roiBudget>=0?'+':'')+roiBudget.toFixed(2)+'% | ROI(实际) '+(roiActual>=0?'+':'')+roiActual.toFixed(2)+'%'
    html+=' | 命中 '+s.wins+'/'+s.totalBets+' ('+hitRate.toFixed(1)+'%)</div>';
    if(s.bankruptAt!==null){
      html+='<div class="card-sub" style="color:#f39c12;">⚠️ 第'+(s.bankruptAt+1)+'场首次耗尽 | 累计追加 '+s.injectionCount+'次 共¥'+s.additionalCapital.toLocaleString()+'</div>';
      if(s.peakMatchIdx !== null && s.peakCapital > totalInvested){
        var peakProfit1=s.peakCapital-totalInvested;
      html+='<div class="card-sub" style="color:#f0d070;">📈 峰值 ¥'+s.peakCapital.toLocaleString()+'（第'+(s.peakMatchIdx+1)+'场）| 峰值盈利 '+(peakProfit1>=0?'+':'')+'¥'+peakProfit1.toLocaleString()+'</div>';
      } else {
        html+='<div class="card-sub" style="color:var(--text-secondary);">📉 资金始终未超过实际投入 ¥'+totalInvested.toLocaleString()+'</div>';
      }
    }else{
      html+='<div class="card-sub" style="color:#2ecc71;">✅ 本金始终充足，无需追加</div>';
    var peakProfit2=s.peakCapital-totalInvested;
    if(s.peakMatchIdx !== null && s.peakCapital > totalInvested){
      html+='<div class="card-sub" style="color:#f0d070;">📈 峰值 ¥'+s.peakCapital.toLocaleString()+'（第'+(s.peakMatchIdx+1)+'场）| 峰值盈利 '+(peakProfit2>=0?'+':'')+'¥'+peakProfit2.toLocaleString()+'</div>';
    } else {
      html+='<div class="card-sub" style="color:var(--text-secondary);">📉 资金始终未超过实际投入 ¥'+totalInvested.toLocaleString()+'</div>';
    }
    }
    html+='<div style="margin-top:4px;"><span style="display:inline-block;padding:3px 10px;border-radius:12px;font-size:0.65rem;font-weight:700;background:'+(profit>=0?'rgba(46,204,113,0.15)':'rgba(231,76,60,0.12)')+';color:'+(profit>=0?'#2ecc71':'#e74c3c')+';">'+badge+'</span></div>';
    html+='</div>';
  });
  html+='</div>';
  
  // ★ 策略说明 ★
  html+='<div class="backtest-insight"><strong>📋 策略说明（新规则）：</strong>预算本金 <strong>¥'+INITIAL_CAPITAL.toLocaleString()+'</strong>，每场固定投注 <strong>¥1,000</strong>，按比赛时间顺序（小组赛→淘汰赛）模拟真实资金流动。<strong>当资金不足¥1,000时，自动追加¥1,000额外本金继续投注</strong>，每次追加扩大实际投入本金。全投预期=每场押赔率最低的热门方；全投平局=每场押平局；全投爆冷=每场押赔率最高的冷门方。共 <strong>'+totalMatches+'</strong> 场比赛。<br><strong>📌 双重ROI：</strong>ROI(预算)=净盈亏÷预算本金¥10,000；ROI(实际)=净盈亏÷实际总投入（预算+追加）。</div>';
  
  // ★ 策略汇总表：10列 ★
  html+='<div class="backtest-section-title">📊 策略汇总表</div>';
  html+='<div style="overflow-x:auto;"><table class="backtest-table"><thead><tr><th>策略</th><th>预算本金</th><th>追加本金</th><th>实际投入</th><th>最终资金</th><th>净盈亏</th><th>ROI(预算)</th><th>ROI(实际)</th><th>命中率</th><th>首次耗尽</th></tr></thead><tbody>';
  strategies.forEach(function(s){
    var actualTotal=s.initialCapital+s.additionalCapital;
    var totalInvested2=s.initialCapital+s.additionalCapital;
    var profit2=s.capital-totalInvested2;
    var roiBudget=s.initialCapital>0?(profit2/s.initialCapital*100):0;
    var roiActual=totalInvested2>0?(profit2/totalInvested2*100):0;
    var hitRate=s.totalBets>0?(s.wins/s.totalBets*100):0;
    var cls=profit2>=0?'backtest-positive':'backtest-negative';
    var bankruptInfo=s.bankruptAt!==null?'第'+(s.bankruptAt+1)+'场('+s.injectionCount+'次追加)':'✅ 无需追加';
    html+='<tr><td style="text-align:left;font-weight:600;">'+s.name+'</td><td>¥'+s.initialCapital.toLocaleString()+'</td><td>'+(s.additionalCapital>0?'¥'+s.additionalCapital.toLocaleString()+' ('+s.injectionCount+'次)':'¥0')+'</td><td>¥'+actualTotal.toLocaleString()+'</td><td>¥'+s.capital.toLocaleString()+'</td><td class="'+cls+'">'+(profit2>=0?'+':'')+'¥'+profit2.toLocaleString()+'</td><td class="'+cls+'">'+(roiBudget>=0?'+':'')+roiBudget.toFixed(2)+'%</td><td class="'+(profit2>=0?'backtest-positive':'backtest-negative')+'">'+(roiActual>=0?'+':'')+roiActual.toFixed(2)+'%</td><td>'+hitRate.toFixed(2)+'%</td><td style="font-size:0.68rem;">'+bankruptInfo+'</td></tr>';
  });
  html+='</tbody></table></div>';
  
  // ★ 按比赛分类明细 ★
  html+='<div class="backtest-section-title">📊 按比赛分类明细（预期 / 超常 / 爆冷）</div>';
  html+='<div style="overflow-x:auto;"><table class="backtest-detail-table"><thead><tr><th>分类</th><th>场次</th>';
  strategies.forEach(function(s){html+='<th>'+s.name.replace(/[🟢🟠🔴]/g,'').split('（')[0]+' 命中</th><th>'+s.name.replace(/[🟢🟠🔴]/g,'').split('（')[0]+' 盈亏</th>';});
  html+='</tr></thead><tbody>';
  ['expected','above','upset'].forEach(function(cls){
    var labels={expected:'✓ 预期',above:'⚡ 超常',upset:'⚠ 爆冷'};
    var totalInClass=strategies[0].classStats[cls]?strategies[0].classStats[cls].bets:0;
    html+='<tr><td class="col-stage">'+labels[cls]+'</td><td>'+totalInClass+'场</td>';
    strategies.forEach(function(s){
      var cd=s.classStats[cls]||{bets:0,wins:0,stake:0,ret:0};
      var profit=cd.ret-cd.stake;
      var cls2=profit>0?'backtest-positive':(profit<0?'backtest-negative':'');
      html+='<td>'+cd.wins+'/'+cd.bets+'</td><td class="'+cls2+'">'+(profit>=0?'+':'')+'¥'+profit.toLocaleString()+'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody></table></div>';
  
  // ★ 分阶段明细 — 小组赛 ★
  html+='<div class="backtest-section-title">📊 分阶段明细 — 小组赛</div>';
  html+='<div style="overflow-x:auto;"><table class="backtest-detail-table"><thead><tr><th>阶段</th>';
  strategies.forEach(function(s){html+='<th>'+s.name.replace(/[🟢🟠🔴]/g,'').split('（')[0]+' 命中/投注</th><th>'+s.name.replace(/[🟢🟠🔴]/g,'').split('（')[0]+' 盈亏</th>';});
  html+='</tr></thead><tbody>';
  Object.keys(data.groups).sort().forEach(function(gid){
    var g=data.groups[gid];
    html+='<tr><td class="col-stage">'+g.name+'</td>';
    strategies.forEach(function(s){
      var ss=s.stageStats[g.name]||{bets:0,wins:0,stake:0,ret:0};
      var profit=ss.ret-ss.stake;
      var cls=profit>0?'backtest-positive':(profit<0?'backtest-negative':'');
      html+='<td>'+(ss.bets>0?ss.wins+'/'+ss.bets:'—')+'</td><td class="'+cls+'">'+(ss.bets>0?((profit>=0?'+':'')+'¥'+profit.toLocaleString()):'—')+'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody></table></div>';
  
  // ★ 分阶段明细 — 淘汰赛 ★
  html+='<div class="backtest-section-title">📊 分阶段明细 — 淘汰赛</div>';
  html+='<div style="overflow-x:auto;"><table class="backtest-detail-table"><thead><tr><th>阶段</th>';
  strategies.forEach(function(s){html+='<th>'+s.name.replace(/[🟢🟠🔴]/g,'').split('（')[0]+' 命中/投注</th><th>'+s.name.replace(/[🟢🟠🔴]/g,'').split('（')[0]+' 盈亏</th>';});
  html+='</tr></thead><tbody>';
  var koOrder = ['R16','QF','SF','TP','FINAL'];
  koOrder.forEach(function(ks){
    var sn={'R16':'16强','QF':'8强','SF':'4强','TP':'季军赛','FINAL':'决赛'}[ks]||ks;
    html+='<tr><td class="col-stage">'+sn+'</td>';
    strategies.forEach(function(s){
      var ss=s.stageStats[sn]||{bets:0,wins:0,stake:0,ret:0};
      var profit=ss.ret-ss.stake;
      var cls=profit>0?'backtest-positive':(profit<0?'backtest-negative':'');
      html+='<td>'+(ss.bets>0?ss.wins+'/'+ss.bets:'—')+'</td><td class="'+cls+'">'+(ss.bets>0?((profit>=0?'+':'')+'¥'+profit.toLocaleString()):'—')+'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody></table></div>';
  
  // ★ 关键洞察 ★
  html+='<div class="backtest-section-title">💡 关键洞察</div>';
  var best=strategies.reduce(function(a,b){return (a.capital-(a.initialCapital+a.additionalCapital))>(b.capital-(b.initialCapital+b.additionalCapital))?a:b;});
  var bestTotalInvested=best.initialCapital+best.additionalCapital;
  var bestProfit=best.capital-bestTotalInvested;
  var bestActualTotal=best.initialCapital+best.additionalCapital;
  html+='<div class="backtest-insight">';
  html+='<strong>🏆 '+yearLabel+' 最佳均注策略（预算基准）：</strong>'+best.name+' — 净盈亏 '+(bestProfit>=0?'+':'')+'¥'+bestProfit.toLocaleString()+'（ROI预算 '+(bestProfit/best.initialCapital*100).toFixed(2)+'%）<br>';
  if(best.additionalCapital>0){
    html+='<strong>⚠️ 该策略在第'+(best.bankruptAt+1)+'场首次耗尽预算本金，累计追加 ¥'+best.additionalCapital.toLocaleString()+'（'+best.injectionCount+'次），实际投入 ¥'+bestActualTotal.toLocaleString()+'</strong><br>';
  }
  html+='<strong>📌 新规则说明：</strong>当资金低于¥1,000时，自动追加¥1,000额外本金继续投注。ROI(预算)=净盈亏÷¥10,000（衡量相对原始预算的回报）；ROI(实际)=净盈亏÷实际总投入（衡量真实资金回报率）。<br>';
  html+='<strong>⚠️ 风险提示：</strong>以上回测基于'+yearLabel+'历史数据，过去表现不代表未来收益。追加本金策略可能放大亏损，请谨慎使用。</div>';
  html+='<div style="text-align:center;padding:16px 0 8px;color:var(--text-secondary);font-size:0.75rem;opacity:0.8;">◆ 仅用作数据分析 不构成投资建议 ◆</div>';
  
  var bc=document.getElementById('backtestContent');
  if(bc)bc.innerHTML=html;
  var bm=document.getElementById('backtestModal');
  if(bm)bm.classList.add('visible');
  }catch(e){
    console.error('均注策略回测出错:',e);
    showToast('⚠️ 均注策略回测出错: '+e.message);
    var bc=document.getElementById('backtestContent');
    if(bc)bc.innerHTML='<div style="padding:40px;text-align:center;color:var(--accent2);"><p>⚠️ 回测计算时发生错误</p><p style="font-size:0.75rem;color:var(--text-secondary);">'+e.message+'</p><p style="font-size:0.7rem;color:var(--text-secondary);">请检查数据完整性后重试</p></div>';
    var bm=document.getElementById('backtestModal');
    if(bm)bm.classList.add('visible');
  }
};


// Override showPastWorldCupModal to switch to past edition view
window.showPastWorldCupModal=function(){
  // Legacy: now switches to 2022 edition in main view
  switchEdition('2022');
};

// Override closePastWCModal (no-op since modal is removed)

// Ensure closeBacktestModal exists

// ========== V18: Match Detail Functions ==========
window.getMatchDetailKey=function(year, stage, h, a) {
  // Try multiple key formats
  var keys = [year+'|'+stage+'|'+h+'|'+a, year+'|'+stage+'|'+a+'|'+h];
  for (var i=0; i<keys.length; i++) {
    if (wcMatchDetails[keys[i]]) return keys[i];
    // Also check 2026 match details
    if (typeof wc2026MatchDetails !== 'undefined' && wc2026MatchDetails[keys[i]]) return keys[i];
  }
  return null;
}

window.showMatchDetail=function(year, stage, h, a, isKnockout) {
  try {
  var key = window.getMatchDetailKey(year, stage, h, a);
  var detail = key ? (wcMatchDetails[key] || (typeof wc2026MatchDetails !== 'undefined' && wc2026MatchDetails[key]) || null) : null;
  var hn = getPastTeamName(h), an = getPastTeamName(a);
  
  document.getElementById('matchDetailSubtitle').textContent = '— ' + hn.zh + ' vs ' + an.zh;
  
  var html = '';
  // Score header
  html += '<div class="match-detail-header">';
  html += '<div class="team-block-detail"><img src="'+pastFlag(h)+'" onerror="this.style.display=\'none\'"><span class="tname">'+hn.zh+'</span><span class="tcode">'+h+'</span></div>';
  html += '<div class="match-detail-score-big">';
  // Find score from data
  var data = year==='2022'?wc2022Data:year==='2018'?wc2018Data:year==='2014'?wc2014Data:year==='2010'?wc2010Data:year==='2006'?wc2006Data:wc2002Data;
  var matchFound = null;
  // 2026: look up score from wc2026MatchDetails
  if (year === '2026' && detail && detail.score) {
    matchFound = { h: h, a: a, sh: detail.score.sh, sa: detail.score.sa };
  }
  if (isKnockout && data.knockout) {
    data.knockout.forEach(function(kr) {
      if (kr.stage === stage) {
        kr.matches.forEach(function(m) {
          if ((m.h===h && m.a===a) || (m.h===a && m.a===h)) matchFound = m;
        });
      }
    });
  } else {
    var g = data.groups[stage];
    if (g) {
      g.matches.forEach(function(m) {
        if ((m.h===h && m.a===a) || (m.h===a && m.a===h)) matchFound = m;
      });
    }
  }
  var scoreH = matchFound ? (matchFound.h===h ? matchFound.sh : matchFound.sa) : '?';
  var scoreA = matchFound ? (matchFound.h===h ? matchFound.sa : matchFound.sh) : '?';
  var pkInfo = matchFound && matchFound.ps ? ' (PK '+matchFound.ps+')' : '';
  html += '<span class="score-num">'+scoreH+'</span><span class="score-divider">:</span><span class="score-num">'+scoreA+'</span>';
  if (pkInfo) html += '<span style="font-size:0.7rem;color:var(--accent2);">'+pkInfo+'</span>';
  html += '</div>';
  html += '<div class="team-block-detail"><img src="'+pastFlag(a)+'" onerror="this.style.display=\'none\'"><span class="tname">'+an.zh+'</span><span class="tcode">'+a+'</span></div>';
  html += '</div>';
  
  // Info bar
  html += '<div class="match-detail-info-bar">';
  if (matchFound && matchFound.venue) html += '<span>📍 '+matchFound.venue+'</span>';
  if (matchFound && matchFound.date) html += '<span>📅 '+formatPastDate(matchFound.date)+'</span>';
  html += '<span class="ko-stage-marker">'+(isKnockout ? {'R16':'16强','QF':'8强','SF':'4强','TP':'季军赛','FINAL':'决赛'}[stage]||stage : data.groups[stage]?data.groups[stage].name:stage)+'</span>';
  html += '</div>';
  
  if (detail) {
    // Goal Timeline
    html += '<div class="detail-section"><div class="detail-section-title">⚽ 进球时间轴</div>';
    if (detail.goals && detail.goals.length > 0) {
      html += '<div class="goal-timeline">';
      detail.goals.forEach(function(g) {
        var sideClass = g.side === 'home' ? 'goal-home' : 'goal-away';
        var typeLabel = g.type === 'penalty' ? '点球' : g.type === 'header' ? '头球' : g.type === 'free_kick' ? '任意球' : g.type === 'own_goal' ? '乌龙球' : '射门';
        var typeClass = g.type;
        var minDisplay = g.min > 90 ? '90+'+(g.min-90)+"'": g.min+"'";
        if (g.min > 105 && g.min <= 120) minDisplay = '105+'+(g.min-105)+"' (加时)";
        html += '<div class="goal-event '+sideClass+'"><span class="goal-min">'+minDisplay+'</span><span class="goal-scorer">'+makePlayerClickable(g.scorer)+'</span><span class="goal-type '+typeClass+'">'+typeLabel+'</span></div>';
      });
      html += '</div>';
    } else {
      html += '<div class="detail-no-data">⚽ 本场比赛无进球 (0:0)</div>';
    }
    html += '</div>';
    
    // Additional info
    
    // Match statistics from matchStats
    var statsHtml = '';
    if (key && matchStats && matchStats[key]) {
      var ms = matchStats[key];
      var homeName = hn.zh, awayName = an.zh;
      if (matchFound && matchFound.h !== h) { var tmp = homeName; homeName = awayName; awayName = tmp; }
      statsHtml += '<div class="detail-section"><div class="detail-section-title">📊 比赛统计</div>';
      statsHtml += '<table class="backtest-table"><thead><tr><th>统计项</th><th style="color:#5b9bd5;">' + homeName + '</th><th style="color:#e74c3c;">' + awayName + '</th></tr></thead><tbody>';
      statsHtml += '<tr><td>控球率</td><td>' + ms.p1 + '</td><td>' + ms.p2 + '</td></tr>';
      // 2026: 新增进攻/危险进攻字段
      if (ms.at1 !== undefined) statsHtml += '<tr><td>进攻</td><td>' + ms.at1 + '</td><td>' + ms.at2 + '</td></tr>';
      if (ms.da1 !== undefined) statsHtml += '<tr><td>危险进攻</td><td>' + ms.da1 + '</td><td>' + ms.da2 + '</td></tr>';
      statsHtml += '<tr><td>射正</td><td>' + ms.so1 + '</td><td>' + ms.so2 + '</td></tr>';
      if (ms.sb1 !== undefined) statsHtml += '<tr><td>射偏</td><td>' + ms.sb1 + '</td><td>' + ms.sb2 + '</td></tr>';
      statsHtml += '<tr><td>角球</td><td>' + ms.co1 + '</td><td>' + ms.co2 + '</td></tr>';
      if (ms.pk1 !== undefined) statsHtml += '<tr><td>点球</td><td>' + ms.pk1 + '</td><td>' + ms.pk2 + '</td></tr>';
      statsHtml += '<tr><td>越位</td><td>' + ms.os1 + '</td><td>' + ms.os2 + '</td></tr>';
      statsHtml += '<tr><td>犯规</td><td>' + ms.fo1 + '</td><td>' + ms.fo2 + '</td></tr>';
      statsHtml += '<tr><td>🟨 黄牌</td><td>' + ms.yc1 + '</td><td>' + ms.yc2 + '</td></tr>';
      statsHtml += '<tr><td>🟥 红牌</td><td>' + (ms.rc1||0) + '</td><td>' + (ms.rc2||0) + '</td></tr>';
      statsHtml += '</tbody></table></div>';
    }
    html += statsHtml;
    
    // Cards section
    if (detail) {
    html += '<div class="detail-section"><div class="detail-section-title">🟨 纪律记录（详情）</div>';
    html += '<div class="cards-row">';
    html += '<div class="cards-box"><div style="font-weight:700;margin-bottom:4px;">'+hn.zh+'</div>';
    html += '<div class="cards-count cards-yellow">'+detail.cards.home.yellow+'</div><div class="cards-label">黄牌</div>';
    if (detail.cards.home.red > 0) html += '<div class="cards-count cards-red" style="margin-top:4px;">'+detail.cards.home.red+'</div><div class="cards-label" style="color:#e74c3c;">红牌</div>';
    html += '</div>';
    html += '<div class="cards-box"><div style="font-weight:700;margin-bottom:4px;">'+an.zh+'</div>';
    html += '<div class="cards-count cards-yellow">'+detail.cards.away.yellow+'</div><div class="cards-label">黄牌</div>';
    if (detail.cards.away.red > 0) html += '<div class="cards-count cards-red" style="margin-top:4px;">'+detail.cards.away.red+'</div><div class="cards-label" style="color:#e74c3c;">红牌</div>';
    html += '</div>';
    html += '</div></div>';
    }
    
    // Match info section
    html += '<div class="detail-section"><div class="detail-section-title">📊 比赛信息</div>';
    html += '<div class="detail-stats-grid">';
    html += '<div class="detail-stat-item"><div class="stat-val">'+(detail.attendance ? detail.attendance.toLocaleString() : '—')+'</div><div class="stat-lbl">现场观众</div></div>';
    html += '<div class="detail-stat-item"><div class="stat-val">'+(detail.referee || '—')+'</div><div class="stat-lbl">主裁判</div></div>';
    var totalYellows = detail.cards.home.yellow + detail.cards.away.yellow;
    var totalReds = detail.cards.home.red + detail.cards.away.red;
    html += '<div class="detail-stat-item"><div class="stat-val">🟨'+totalYellows+' 🟥'+totalReds+'</div><div class="stat-lbl">总纪律牌</div></div>';
    html += '</div></div>';
  } else {
    html += '<div class="detail-no-data">📭 暂无该场比赛的详细数据（进球时间轴、纪律记录等）。<br><small style="color:var(--text-secondary);">数据持续补充中，目前覆盖：2022卡塔尔世界杯全部64场 + 2018/2014/2010/2006/2002 关键场次。</small></div>';
  }
  
  var mdc = document.getElementById('matchDetailContent');
  if (mdc) mdc.innerHTML = html;
  var mdm = document.getElementById('matchDetailModal');
  if (mdm) mdm.classList.add('visible');
  } catch(e) { console.error('showMatchDetail error:', e); }
};

window.closeMatchDetail=function() {
  try {
  var mdm = document.getElementById('matchDetailModal');
  if (mdm) mdm.classList.remove('visible');
  } catch(e) {}
};

// Add click-to-close for match detail modal
setTimeout(function() {
  var md = document.getElementById('matchDetailModal');
  if (md) md.addEventListener('click', function(e) { if (e.target === this) closeMatchDetail(); });
}, 100);








// ========== VENUE ANALYSIS (赛场分析) ==========
// Dependencies: venuedata.js (venues2026, teamBaseCamps2026, weatherConfig, getVenueAnalysis)

// getVenueFor2026Match 已委托给 venuedata.js 全局版本（返回标准化格式）
// 标准化格式：{ nameZh, nameEn, city, country, coordinates:[lat,lng], elevation, capacity, grassType, timezone, indoor }

window.showVenueAnalysis = function(mid) {
    if (!mid) return;
    window._vaMid = mid;
    var m = (typeof allGM !== 'undefined') ? allGM.find(function(x) { return x.id === mid; }) : null;
    if (!m) { showToast('⚠️ 未找到比赛数据'); return; }
    var ct = document.getElementById('venueAnalysisContent');
    if (!ct) return;
    ct.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary)"><span class="spinner"></span> 正在加载赛场数据...</div>';
    document.getElementById('venueAnalysisModal').classList.add('visible');
    
    var venue = getVenueFor2026Match(m);
    window._vaVenue = venue;
    var homeCode = m.home.code, awayCode = m.away.code;
    var homeName = m.home.zh, awayName = m.away.zh;
    var hCampRaw = (typeof teamBaseCamps2026 !== 'undefined') ? teamBaseCamps2026[homeCode] : null;
    var aCampRaw = (typeof teamBaseCamps2026 !== 'undefined') ? teamBaseCamps2026[awayCode] : null;
    var hCamp = (typeof normalizeBaseCamp === 'function') ? normalizeBaseCamp(hCampRaw) : null;
    var aCamp = (typeof normalizeBaseCamp === 'function') ? normalizeBaseCamp(aCampRaw) : null;
    
    renderVenueDashboard(ct, m, venue, hCamp, aCamp, homeName, awayName);
    if (venue && venue.coordinates && window._vaWeatherLoaded !== mid) fetchWeatherForVenue(ct, venue);
};

function renderVenueDashboard(ct, m, venue, hCamp, aCamp, homeName, awayName) {
    if (!venue) {
        ct.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary)">🏟️ 暂无该比赛的场地数据<br><small>2026年世界杯赛程及场地信息将在FIFA官方公布后更新</small></div>';
        return;
    }
    var v = venue;
    var dateStr = (m.time || '').replace('月','/').replace('日','');
    
    function calcDist(camp) {
        if (!camp || !camp.coordinates || !v.coordinates) return null;
        var lat1 = camp.coordinates[0] * Math.PI / 180;
        var lat2 = v.coordinates[0] * Math.PI / 180;
        var dlat = (v.coordinates[0] - camp.coordinates[0]) * Math.PI / 180;
        var dlon = (v.coordinates[1] - camp.coordinates[1]) * Math.PI / 180;
        var a = Math.sin(dlat/2)*Math.sin(dlat/2) + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dlon/2)*Math.sin(dlon/2);
        return Math.round(6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
    }
    
    var hDist = hCamp ? calcDist(hCamp) : null;
    var aDist = aCamp ? calcDist(aCamp) : null;
    
    var elevLabel = '低海拔', elevColor = '#2ecc71';
    if (v.elevation > 2000) { elevLabel = '极高海拔 ⛰️'; elevColor = '#e74c3c'; }
    else if (v.elevation > 1000) { elevLabel = '中高海拔 🏔️'; elevColor = '#f39c12'; }
    
    var estTemp = v.indoor ? 22 : (v.coordinates[0] > 35 ? 28 : v.coordinates[0] > 30 ? 30 : 25);
    
    var html = '';
    // Hero
    html += '<div style="background:linear-gradient(135deg,#1a2a3a,#0d1b2a);border-radius:10px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">';
    html += '<div style="flex:1;min-width:200px">';
    html += '<div style="font-size:1.05rem;font-weight:700;color:var(--gold-light);margin-bottom:4px">🏟️ ' + v.nameZh + '</div>';
    html += '<div style="font-size:0.72rem;color:var(--text-secondary)">' + v.nameEn + ' · ' + v.city + ', ' + v.country + '</div>';
    html += '<div style="display:flex;gap:12px;margin-top:8px;flex-wrap:wrap">';
    html += '<span style="font-size:0.7rem;color:var(--text-secondary)">📍 ' + v.coordinates[0].toFixed(2) + '°N, ' + Math.abs(v.coordinates[1]).toFixed(2) + '°W</span>';
    html += '<span style="font-size:0.7rem;color:' + elevColor + '">⛰️ 海拔 ' + v.elevation + 'm (' + elevLabel + ')</span>';
    html += '<span style="font-size:0.7rem;color:var(--text-secondary)">🌿 ' + v.grassType + '</span>';
    html += '<span style="font-size:0.7rem;color:var(--text-secondary)">🪑 ' + (v.capacity/1000).toFixed(0) + 'k座</span>';
    html += '</div></div>';
    html += '<div style="text-align:center;min-width:80px">';
    html += '<div style="font-size:0.75rem;color:var(--gold-light);font-weight:700">' + homeName + ' vs ' + awayName + '</div>';
    html += '<div style="font-size:0.65rem;color:var(--text-secondary);margin-top:4px">' + dateStr + '</div>';
    if (v.indoor) html += '<div style="font-size:0.6rem;color:#87ceeb;margin-top:4px">🏠 室内/顶棚球场</div>';
    html += '</div></div>';
    
    // 8 Gauge Cards
    html += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px">';
    
    var elevPct = Math.min(100, v.elevation / 25);
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">⛰️ 海拔</div><div style="font-size:1.35rem;font-weight:800;color:' + elevColor + '">' + v.elevation + 'm</div><div style="margin-top:4px;height:3px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden"><div style="width:' + elevPct + '%;height:100%;background:' + elevColor + ';border-radius:2px"></div></div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px">' + elevLabel + '</div></div>';
    
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">🌡️ 预计温度</div><div style="font-size:1.35rem;font-weight:800;color:#f39c12" id="vaTemp">' + estTemp + '°C</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px" id="vaTempLabel">6月均值</div></div>';
    
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">💧 湿度</div><div style="font-size:1.2rem;font-weight:800;color:#5b9bd5" id="vaHumidity">--</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px" id="vaHumidityLabel">加载中...</div></div>';
    
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">🌬️ 风速</div><div style="font-size:1.2rem;font-weight:800;color:#aaa" id="vaWind">--</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px" id="vaWindLabel">加载中...</div></div>';
    
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">🏕️ ' + homeName + ' 驻地</div><div style="font-size:1.2rem;font-weight:800;color:#87ceeb">' + (hDist ? hDist + 'km' : '--') + '</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px">' + (hCamp ? hCamp.city : '待确认') + '</div></div>';
    
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">🏕️ ' + awayName + ' 驻地</div><div style="font-size:1.2rem;font-weight:800;color:#e74c3c">' + (aDist ? aDist + 'km' : '--') + '</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px">' + (aCamp ? aCamp.city : '待确认') + '</div></div>';
    
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">🕐 时区</div><div style="font-size:1.2rem;font-weight:800;color:#ba55d3">' + (v.timezone || 'UTC') + '</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px">本地时间</div></div>';
    
    html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:4px;line-height:1.4;min-height:1.1em">🌿 草皮</div><div style="font-size:1.2rem;font-weight:800;color:#2ecc71">' + v.grassType + '</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:2px">' + (v.indoor ? '室内恒温' : '天然草坪') + '</div></div>';
    
    html += '</div>';
    
    // === DUAL COMPARISON (Style 5.1) ===
    var isHostHome = (v.country === 'Mexico' && homeCode === 'MEX') || (v.country === 'USA' && homeCode === 'USA') || (v.country === 'Canada' && homeCode === 'CAN');
    var isHostAway = (v.country === 'Mexico' && awayCode === 'MEX') || (v.country === 'USA' && awayCode === 'USA') || (v.country === 'Canada' && awayCode === 'CAN');
    
    var factors = [
        {label:'海拔适应', icon:'⛰️', home:(hDist && hDist<500)?'neutral':(v.elevation>1500?'disadv':'neutral'), away:(aDist && aDist<500)?'neutral':(v.elevation>1500?'disadv':'neutral'), homeNote:v.elevation+'m', awayNote:v.elevation+'m'},
        {label:'驻地距离', icon:'📌', home:(hDist===null)?'neutral':(hDist<300?'adv':hDist<800?'neutral':'disadv'), away:(aDist===null)?'neutral':(aDist<300?'adv':aDist<800?'neutral':'disadv'), homeNote:hDist?hDist+'km':'待确认', awayNote:aDist?aDist+'km':'待确认'},
        {label:'草皮适应', icon:'🌿', home:'neutral', away:'neutral', homeNote:v.grassType, awayNote:v.grassType},
        {label:'室内条件', icon:'🏠', home:v.indoor?'adv':'neutral', away:v.indoor?'adv':'neutral', homeNote:v.indoor?'无风/恒温':'露天', awayNote:v.indoor?'无风/恒温':'露天'},
        {label:'时差影响', icon:'🕐', home:'neutral', away:'neutral', homeNote:v.timezone||'UTC', awayNote:v.timezone||'UTC'},
        {label:'东道主', icon:'🏟️', home:isHostHome?'adv':'neutral', away:isHostAway?'adv':'neutral', homeNote:isHostHome?'主场作战':'中立', awayNote:isHostAway?'主场作战':'中立'}
    ];
    
    var hAdv=0, hDis=0, aAdv=0, aDis=0;
    
    html += '<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;margin-top:8px;background:var(--surface);border-radius:10px;overflow:hidden;border:1px solid var(--border)">';
    
    // Left - Home
    html += '<div style="padding:12px;border-right:1px solid var(--border)"><div style="font-weight:700;font-size:0.85rem;color:var(--gold-light);margin-bottom:10px;text-align:center">' + homeName + '</div>';
    factors.forEach(function(f) {
        var icon = f.home==='adv'?'✓':f.home==='disadv'?'✗':'△';
        var color = f.home==='adv'?'#2ecc71':f.home==='disadv'?'#e74c3c':'#888';
        if(f.home==='adv')hAdv++; if(f.home==='disadv')hDis++;
        html += '<div style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:4px;margin-bottom:2px;font-size:0.7rem"><span style="color:'+color+';font-weight:700;width:16px">'+icon+'</span><span style="flex:1;color:var(--text)">'+f.icon+' '+f.label+'</span><span style="color:var(--text-secondary);font-size:0.6rem">'+f.homeNote+'</span></div>';
    });
    var hNet = hAdv - hDis;
    html += '<div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--border)"><div style="display:flex;align-items:center;gap:6px"><span style="font-size:0.6rem;color:var(--text-secondary)">客观影响</span><div style="flex:1;height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;display:flex"><div style="width:'+Math.max(0,hAdv*14)+'px;background:#2ecc71;height:100%"></div><div style="width:'+Math.max(0,hDis*14)+'px;background:#e74c3c;height:100%"></div></div><span style="font-size:0.65rem;font-weight:700;color:'+(hNet>=0?'#2ecc71':'#e74c3c')+'">'+(hNet>=0?'+':'')+hNet+'</span></div></div></div>';
    
    // Center VS
    html += '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 12px;background:rgba(212,168,67,0.05);min-width:52px"><div style="font-weight:900;font-size:0.85rem;color:var(--gold-light);white-space:nowrap">VS</div><div style="font-size:0.55rem;color:var(--text-secondary);margin-top:8px">'+v.city+'</div></div>';
    
    // Right - Away
    html += '<div style="padding:12px;border-left:1px solid var(--border)"><div style="font-weight:700;font-size:0.85rem;color:var(--gold-light);margin-bottom:10px;text-align:center">' + awayName + '</div>';
    factors.forEach(function(f) {
        var icon = f.away==='adv'?'✓':f.away==='disadv'?'✗':'△';
        var color = f.away==='adv'?'#2ecc71':f.away==='disadv'?'#e74c3c':'#888';
        if(f.away==='adv')aAdv++; if(f.away==='disadv')aDis++;
        html += '<div style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:4px;margin-bottom:2px;font-size:0.7rem"><span style="color:'+color+';font-weight:700;width:16px">'+icon+'</span><span style="flex:1;color:var(--text)">'+f.icon+' '+f.label+'</span><span style="color:var(--text-secondary);font-size:0.6rem">'+f.awayNote+'</span></div>';
    });
    var aNet = aAdv - aDis;
    html += '<div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--border)"><div style="display:flex;align-items:center;gap:6px"><span style="font-size:0.6rem;color:var(--text-secondary)">客观影响</span><div style="flex:1;height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;display:flex"><div style="width:'+Math.max(0,aAdv*14)+'px;background:#2ecc71;height:100%"></div><div style="width:'+Math.max(0,aDis*14)+'px;background:#e74c3c;height:100%"></div></div><span style="font-size:0.65rem;font-weight:700;color:'+(aNet>=0?'#2ecc71':'#e74c3c')+'">'+(aNet>=0?'+':'')+aNet+'</span></div></div></div>';
    
    html += '</div>';
    
    // === FINAL VERDICT ===
    html += '<div style="margin-top:14px;padding:16px;background:linear-gradient(135deg,rgba(212,168,67,0.08),rgba(212,168,67,0.02));border:1px solid var(--gold);border-radius:10px">';
    html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span style="font-size:1.2rem">⚖️</span><span style="font-weight:700;color:var(--gold-light);font-size:0.85rem">赛场客观因素 · 最终判读</span></div>';
    html += '<div style="font-size:0.72rem;color:var(--text);line-height:1.7">';
    
    if (v.elevation > 1500)
        html += '<p style="margin-bottom:6px">🏔️ <b>海拔因素</b>：' + v.nameZh + '位于海拔 <b>' + v.elevation + 'm</b> 的中高海拔地区，空气含氧量约为海平面的' + (100 - Math.round(v.elevation/1000*7)) + '%。对于未提前进行高原适应性训练的球队，这将导致球员血氧饱和度下降，影响耐力表现。建议赛前至少3-5天抵达适应。</p>';
    if (hDist && aDist)
        html += '<p style="margin-bottom:6px">📍 <b>驻地距离</b>：' + homeName + '大本营距球场 <b>' + hDist + 'km</b>（约' + (hDist/800).toFixed(1) + '小时车程），' + awayName + '大本营距球场 <b>' + aDist + 'km</b>（约' + (aDist/800).toFixed(1) + '小时车程）。' + (hDist < aDist ? homeName : awayName) + '在旅途消耗方面略占优势。</p>';
    if (v.indoor)
        html += '<p style="margin-bottom:6px">🏠 <b>室内条件</b>：' + v.nameZh + '为室内/可伸缩顶棚球场，比赛环境不受风雨影响，温度和湿度恒定，有利于技术型球队发挥传控风格。</p>';
    if (isHostHome)
        html += '<p style="margin-bottom:6px">🏟️ <b>东道主优势</b>：' + homeName + '作为东道主之一，在本土球迷面前作战将获得巨大的心理优势和士气加成，这是不可忽视的场外因素。</p>';
    if (isHostAway)
        html += '<p style="margin-bottom:6px">🏟️ <b>东道主优势</b>：' + awayName + '作为东道主之一，在本土球迷面前作战将获得巨大的心理优势和士气加成。</p>';
    
    html += '<p style="margin-bottom:6px">💡 <b>X因素</b>：比赛日实际天气状况为实时数据，请点击「🔄 更新天气」获取最新气象信息。比赛日接近时，天气数据的参考价值将显著提升。赛前24小时内的预报准确率可达85%以上。</p>';
    html += '</div>';
    html += '<div style="margin-top:10px;font-size:0.6rem;color:var(--text-secondary);border-top:1px solid rgba(255,255,255,0.06);padding-top:8px">📡 天气数据源：OpenMeteo | 场馆数据：FIFA Official | 分析仅供参考</div>';
    html += '</div>';
    
    ct.innerHTML = html;
}

function fetchWeatherForVenue(ct, venue) {
    if (!venue || !venue.coordinates) return;
    var lat = venue.coordinates[0], lon = venue.coordinates[1];
    var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto';
    
    fetch(url).then(function(r){return r.json();}).then(function(data){
        if (data && data.current) {
            var temp = data.current.temperature_2m;
            var humidity = data.current.relative_humidity_2m;
            var wind = data.current.wind_speed_10m;
            var weatherCode = data.current.weather_code;
            
            var tempEl = document.getElementById('vaTemp');
            var tempLabel = document.getElementById('vaTempLabel');
            var humEl = document.getElementById('vaHumidity');
            var windEl = document.getElementById('vaWind');
            
            if (tempEl) tempEl.textContent = temp + '°C';
            if (tempLabel) {
                var tl = temp > 32 ? '🔥 酷热' : temp > 26 ? '☀️ 温暖' : temp > 18 ? '🌤️ 舒适' : temp > 10 ? '🌥️ 凉爽' : '❄️ 寒冷';
                tempLabel.textContent = tl;
            }
            if (humEl) humEl.textContent = humidity + '%';
            if (windEl) windEl.textContent = wind + ' km/h';
            var hlEl = document.getElementById('vaHumidityLabel');
            if (hlEl) { var hlT = humidity < 30 ? '💧 干燥' : humidity < 50 ? '💧 适中偏干' : humidity < 65 ? '💧 舒适适中' : humidity < 80 ? '💧 偏高湿润' : '💧 非常潮湿'; hlEl.textContent = hlT; }
            var wlEl = document.getElementById('vaWindLabel');
            if (wlEl) { var wlT = wind < 5 ? '🌬️ 影响极小' : wind < 12 ? '🌬️ 微风略影响' : wind < 20 ? '🌬️ 影响明显' : '🌬️ 大风显著'; wlEl.textContent = wlT; }
            window._vaWeatherLoaded = window._vaMid || true;
            
            var weatherIcons = {0:'☀️ 晴',1:'🌤️ 大部晴',2:'⛅ 多云',3:'☁️ 阴',45:'🌫️ 雾',51:'🌦️ 小雨',61:'🌧️ 雨',71:'🌨️ 雪',95:'⛈️ 雷暴'};
            var weatherLabel = weatherIcons[weatherCode] || ('🌡️ 码'+weatherCode);
            
            var gaugeGrid = ct.querySelector('div[style]');
            if (gaugeGrid) {
                var oldUp = ct.querySelector('.weather-update');
                if (oldUp) oldUp.remove();
                var upd = document.createElement('div');
                upd.className = 'weather-update';
                upd.style.cssText = 'font-size:0.58rem;color:var(--accent);text-align:center;margin-top:8px';
                upd.textContent = '✅ 天气已更新：' + weatherLabel + ' | ' + new Date().toLocaleTimeString('zh-CN');
                ct.appendChild(upd);
            }
        }
    }).catch(function(err){
        console.warn('Weather fetch failed:', err);
        var oldUp = ct.querySelector('.weather-update');
        if (oldUp) oldUp.remove();
        var upd = document.createElement('div');
        upd.className = 'weather-update';
        upd.style.cssText = 'font-size:0.58rem;color:#e74c3c;text-align:center;margin-top:8px';
        upd.textContent = '⚠️ 天气数据获取失败 | 请检查网络后点击「🔄 更新天气」';
        ct.appendChild(upd);
    });
}

window.closeVenueAnalysis = function() {
    document.getElementById('venueAnalysisModal').classList.remove('visible');
};
