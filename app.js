// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
// ===== 世界杯数据分析 - 渲染逻辑 & 全局状态 =====
// 依赖: teamdata.js (pastFlagMap, pastTeamNames, pastFlag)
// 依赖: matchdata.js (wc20xxData, koLabels, koStages, wcMatchDetails, matchStats)
// 依赖: playerdata_core.js / playerdata_media.js / playerdata_career.js / playerdata_meta.js (playerDB)

// FIFA World Cup Data Analysis - Player & Match Database
// Auto-generated from HTML data section. Update this file to modify data.
// Version: V1.82 | Generated: 2026-06-28
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
// switchPastWCStage → 已委托给 switchPastWCStageMain（V1.74 统一入口）
window.switchPastWCStage=function(stage){
  switchPastWCStageMain(stage);
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
    if(g2026){g2026.style.display='block';g2026.style.visibility='visible';}
    if(tabContainer){tabContainer.style.display='flex';tabContainer.style.visibility='visible';}
    if(mainToolbar){mainToolbar.style.display='flex';mainToolbar.style.visibility='visible';}
    if(pastMain) pastMain.classList.remove('visible');
    if(typeof mTab!=='undefined'&&mTab==='knockout'){
      if(ko2026) ko2026.classList.add('visible');
    }
    if(typeof rGM==='function') rGM();
    if(typeof mTab!=='undefined'&&mTab==='knockout'){ if(typeof autoFillKO==='function') autoFillKO(); if(typeof propagateAllKnockout==='function') propagateAllKnockout(); if(typeof rKP==='function') rKP(); }
    // Sync tab visibility after render (covers all call sites)
    if(typeof switchMainTab==='function'&&typeof mTab!=='undefined') switchMainTab(mTab);
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


// Override showPastWorldCupModal to switch to past edition view
window.showPastWorldCupModal=function(){
  // Legacy: now switches to 2022 edition in main view
  switchEdition('2022');
};

// Override closePastWCModal (no-op since modal is removed)

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
    var es = detail.score120 || detail.score;
    var keyParts = key.split('|');
    var dataHome = keyParts[2]; // matchdata key 中的第一队
    if (dataHome === h) {
      matchFound = { h: h, a: a, sh: es.sh, sa: es.sa };
    } else {
      matchFound = { h: h, a: a, sh: es.sa, sa: es.sh };
    }
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
  html += '<span class="ko-stage-marker">'+(isKnockout ? {'R32':'32强','R16':'16强','QF':'8强','SF':'4强','TP':'季军赛','FINAL':'决赛'}[stage]||stage : data.groups[stage]?data.groups[stage].name:stage)+'</span>';
  html += '</div>';
  
  if (detail) {
    // Goal Timeline
    html += '<div class="detail-section"><div class="detail-section-title">⚽ 进球时间轴</div>';
    if (detail.goals && detail.goals.length > 0) {
      html += '<div class="goal-timeline">';
      detail.goals.forEach(function(g) {
        var sideClass = g.side === 'home' ? 'goal-home' : 'goal-away';
        var typeLabel = g.type === 'penalty' ? '点球' : g.type === 'header' ? '头球' : g.type === 'free_kick' ? '任意球' : g.type === 'own_goal' ? '乌龙球' : '射门';
        var typeClass = g.type === 'header' ? 'headed' : g.type;
        var minDisplay = g.min > 90 ? '90+'+(g.min-90)+"'": g.min+"'";
        if (g.min > 105 && g.min <= 120) minDisplay = '105+'+(g.min-105)+"' (加时)";
        html += '<div class="goal-event '+sideClass+'"><span class="goal-min">'+minDisplay+'</span><span class="goal-scorer">'+makePlayerClickable(g.scorer)+'</span><span class="goal-type '+typeClass+'">'+typeLabel+'</span></div>';
      });
      html += '</div>';
    } else {
      html += '<div class="detail-no-data">⚽ 本场比赛无进球 (0:0)</div>';
    }
    html += '</div>';
    // Penalty Shootout Timeline
    if (detail && detail.penaltyShootout && detail.penaltyShootout.length > 0) {
      var psHome = 0, psAway = 0;
      detail.penaltyShootout.forEach(function(ps) {
        if (ps.result === 'scored') { if (ps.side === 'home') psHome++; else psAway++; }
      });
      html += '<div class="detail-section"><div class="detail-section-title">🎯 点球大战 (' + psHome + '-' + psAway + ')</div>';
      html += '<div class="penalty-timeline">';
      detail.penaltyShootout.forEach(function(ps, idx) {
        if (ps.result === 'not_taken') return;
        var flagUrl = ps.side === 'home' ? pastFlag(h) : pastFlag(a);
        var flagCountry = ps.side === 'home' ? h : a;
        var resultIcon = ps.result === 'scored' ? '✅' : (ps.result === 'saved' ? '🧤' : '❌');
        var resultLabel = ps.result === 'scored' ? '命中' : (ps.result === 'saved' ? '被扑' : '罚丢');
        var resultClass = ps.result === 'scored' ? 'ps-scored' : 'ps-missed';
        var isWinner = ps.winner ? ' ps-winner' : '';
        html += '<div class="penalty-event' + isWinner + '"><img class="ps-flag" src="' + flagUrl + '" onerror="this.style.display=\'none\'"><span class="ps-order">#' + (idx+1) + '</span><span class="ps-scorer">' + makePlayerClickable(ps.scorer) + '</span><span class="ps-result ' + resultClass + '">' + resultIcon + ' ' + resultLabel + '</span></div>';
      });
      html += '</div></div>';
    }


    
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
  
  // V1.79: 2026 已完赛比赛增加表现评价入口
  if (year === '2026' && matchFound && matchFound.sh !== '?' && matchFound.sa !== '?') {
    var evalKey = year + '|' + stage + '|' + h + '|' + a;
    html += '<div class="eval-btn-wrap"><button class="eval-btn-eval" onclick="event.stopPropagation();showMatchEval(\''+evalKey+'\')">🎮 本场表现评价</button></div>';
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
