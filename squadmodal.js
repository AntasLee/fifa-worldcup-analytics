// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
// ===== 阵容名单弹窗 V1.79 (V3a 杂志排版 + 中文名修复) =====
// 依赖: squaddata.js (squadDB), playerdata_*.js (playerDB), teamdata.js (teamMap/pastFlag/pastTeamNames), engine.js (translate/formatStandardName/showUnifiedPlayerDetail/formatValueWan)
// 更新时间: 2026-07-19 (V1.79 - V3a杂志排版Hero+浮动卡片+下划线Tab+页脚)

(function() {
  'use strict';

  // ===== 完整阵容按钮流光效果包装函数 =====
  window.showSquadWithShimmer = function(teamCode, btnEl) {
    // 防止流光期间重复点击
    if (btnEl && btnEl.classList.contains('btn-shimmer-active')) return;
    var _clickTime = Date.now();
    if (btnEl) {
      btnEl.classList.add('btn-shimmer-active');
      void btnEl.offsetWidth; // 强制样式提交，确保动画在合成器线程启动
      // 流光动画1秒后自动移除class（与数据加载并行）
      setTimeout(function() {
        btnEl.classList.remove('btn-shimmer-active');
      }, 1050);
    }
    // 双rAF确保浏览器至少渲染一帧后动画已在合成器线程启动，再开始数据加载
    if (typeof showSquadModal === 'function') {
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          showSquadModal(teamCode, btnEl, _clickTime);
        });
      });
    }
  };

  // ===== V3a 杂志排版: 全局样式修正 =====
  (function injectV3aStyles() {
    if (document.getElementById('v3a-squad-styles')) return;
    var style = document.createElement('style');
    style.id = 'v3a-squad-styles';
    style.textContent = 
      '#squadModalTitle { margin:0 !important; padding:0 !important; display:block; }' +
      /* Desktop-only: V3a magazine layout with overflow:visible */
      '@media (min-width: 481px) { #squadModal .modal-box.squad-modal { padding:0 !important; overflow:visible; } }' +
      /* Mobile: restore flex scrolling, counter desktop overflow:visible */
      '@media (max-width: 480px) { #squadModal .modal-box.squad-modal { padding:10px 6px !important; overflow-y:auto !important; overflow-x:hidden !important; } }' +
      '#squadContent { padding:0; }' +
      '.v3a-hero { border-radius:12px 12px 0 0; }' +
      '.squad-all-row:hover { background:rgba(255,255,255,0.025) !important; }' +
      '#squadTable tbody tr:hover td { background:rgba(255,255,255,0.015); }' +
      '.v3a-tab:hover { color:#ccc !important; }';
    document.head.appendChild(style);
  })();

  // ===== FIFA世界排名数据 V1.74 (基于2025年11月FIFA官方排名) =====
  // V1.74 基于FIFA官方2026年4月排名 (联网核对修正)
  window.fifaWorldRanking = {
    'FRA':1,'ESP':2,'ARG':3,'ENG':4,'POR':5,'BRA':6,'NED':7,'MAR':8,'BEL':9,'GER':10,
    'CRO':11,'COL':13,'SEN':14,'MEX':15,'USA':16,'URU':17,'JPN':18,'SUI':19,'IRN':21,'TUR':22,
    'ECU':23,'AUT':24,'KOR':25,'AUS':27,'ALG':28,'EGY':29,'CAN':30,'NOR':31,
    'PAN':33,'CIV':34,'SWE':38,'PAR':40,'CZE':41,'SCO':43,'TUN':44,'COD':46,
    'UZB':50,'QAT':55,'IRQ':57,'RSA':60,'KSA':61,'JOR':63,'BIH':65,
    'CPV':69,'GHA':74,'CUW':82,'HAI':83,'NZL':85
  };
  var fifaWorldRanking = window.fifaWorldRanking;

  // 计算所有48队总身价并缓存 (用于排名)
  function computeAllTeamTotalValues() {
    if (window._allTeamTotalValues) return window._allTeamTotalValues;
    var totals = {};
    if (typeof squadDB !== 'undefined') {
      for (var teamCode in squadDB) {
        if (!squadDB.hasOwnProperty(teamCode)) continue;
        var squad = squadDB[teamCode];
        var total = 0;
        var cats = ['gk','df','mf','fw'];
        for (var ci = 0; ci < cats.length; ci++) {
          var players = squad[cats[ci]] || [];
          for (var pi = 0; pi < players.length; pi++) {
            var v = parseFloat(players[pi].v);
            if (!isNaN(v)) total += v;
          }
        }
        totals[teamCode] = Math.round(total);
      }
    }
    window._allTeamTotalValues = totals;
    return totals;
  }


  // ===== 统一球员名称解析 V1.74: 优先从 playerDB 获取准确中文名 =====
  // 确保阵容列表显示的名称与球员详情弹窗一致
  // 查找策略: playerDB直接key → __playerSearchIndex → getPlayerKey → 算法翻译
  function resolveSquadPlayerName(engName, squadPlayer) {
    // V1.74: 优先使用 squaddata 中的 cn 字段（来自官方CSV）
    if (squadPlayer && squadPlayer.cn && /[\u4e00-\u9fff]/.test(squadPlayer.cn)) {
      return squadPlayer.cn + ' (' + (engName || '') + ')';
    }
    if (!engName) return '—';
    
    // 辅助: 去除重音并小写 (用于模糊匹配，如 Vinícius→vinicius)
    function normAccent(s) {
      return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    
    var pd = null;
    var foundKey = null;
    
    // 1. 使用 getPlayerKey (与球员详情弹窗一致的查找逻辑)
    if (typeof getPlayerKey === 'function') {
      foundKey = getPlayerKey(engName);
      if (foundKey && typeof playerDB !== 'undefined' && playerDB[foundKey]) {
        pd = playerDB[foundKey];
      }
    }
    
    // 2. 使用 __playerSearchIndex 索引查找 (O(1))
    if (!pd && typeof __playerSearchIndex !== 'undefined') {
      var lowerName = engName.toLowerCase().trim();
      var normName = normAccent(engName);
      var indexKey = __playerSearchIndex[lowerName] || __playerSearchIndex[normName];
      if (indexKey && typeof playerDB !== 'undefined' && playerDB[indexKey]) {
        pd = playerDB[indexKey];
      }
      // 也尝试用英文名中的单词查找（如 "Tomoki Hayakawa" → 尝试 "hayakawa"）
      if (!pd) {
        var nameWords = normName.split(/\s+/);
        for (var wi = nameWords.length - 1; wi >= 0; wi--) {
          var w = nameWords[wi];
          if (w.length >= 3 && __playerSearchIndex[w]) {
            var maybeKey = __playerSearchIndex[w];
            if (typeof playerDB !== 'undefined' && playerDB[maybeKey]) {
              pd = playerDB[maybeKey];
              break;
            }
          }
        }
      }
    }
    
    // 3. 遍历 playerDB 进行重音不敏感匹配
    if (!pd && typeof playerDB !== 'undefined') {
      var lcName = engName.toLowerCase();
      var normNameFull = normAccent(engName);
      for (var k in playerDB) {
        if (!playerDB.hasOwnProperty(k)) continue;
        if (k.toLowerCase() === lcName || normAccent(k) === normNameFull) {
          pd = playerDB[k]; break;
        }
      }
    }
    
    // 如果找到 playerDB 数据，使用统一的中文名获取逻辑
    if (pd) {
      // 优先使用 playerToCN (引擎函数) 获取准确中文名
      var cnName = '';
      if (typeof playerToCN === 'function') {
        cnName = playerToCN(pd);
      }
      if (!cnName && pd.nn && /[\u4e00-\u9fff]/.test(pd.nn)) cnName = pd.nn;
      if (!cnName && pd.cn) cnName = pd.cn;
      
      // 获取英文显示名
      var enDisplay = pd.en || pd.n || engName;
      if (cnName && cnName !== enDisplay) {
        return cnName + '(' + enDisplay + ')';
      }
      if (cnName) return cnName;
    }
    
    // 4. 回退到 formatStandardName 算法翻译
    if (typeof formatStandardName === 'function') {
      return formatStandardName('player', engName);
    }
    return engName;
  }
  
  // ===== Show Squad Modal =====
  
// V1.74: 修复中文队名显示 — 使用 window.groupsData/teamMap (HTML已暴露全局)
var _zhNameMap = {};
(function _buildZhMap() {
    try {
        var _gd = window.groupsData;
        if (_gd && _gd.length) {
            for (var _g = 0; _g < _gd.length; _g++) {
                var _tms = _gd[_g].teams;
                if (!_tms) continue;
                for (var _t = 0; _t < _tms.length; _t++) {
                    var _tm = _tms[_t];
                    if (_tm.code && _tm.zh) { _zhNameMap[_tm.code] = _tm.zh; }
                }
            }
        }
    } catch(e) { console.warn('_buildZhMap failed:', e); }
})();
window.showSquadModal = function(code, btnEl, clickTime) {
    // V1.74: 流光效果 — 仅当直接从外部调用（非 wrapper）时才查找/添加动画
    if (!btnEl) {
        var visibleBtns = document.querySelectorAll('.btn-squad-gold');
        for (var _bi = 0; _bi < visibleBtns.length; _bi++) {
            if (visibleBtns[_bi].offsetParent !== null) {
                btnEl = visibleBtns[_bi];
                break;
            }
        }
        if (btnEl) {
            btnEl.classList.add('btn-shimmer-active');
            // 动画结束后自动清理
            setTimeout(function() {
                if (btnEl) btnEl.classList.remove('btn-shimmer-active');
            }, 1050);
        }
    }
    var _shimmerStart = clickTime || Date.now();
    // V1.74: 重置球员数据数组，避免多次打开阵容时索引错乱
    window._squadPlayerData = [];
    var squad = typeof squadDB !== 'undefined' ? squadDB[code] : null;
    // Use teamMap as global (defined with const, accessible via closure)
    var teamMapRef = window.teamMap || {};
    var team = teamMapRef[code];
    window._currentSquadTeamCode = code;
    // V1.74: 从 groupsData 获取 en 名称（teamMap 来自 allTeams 无 en 字段）
    var _enNat = '';
    var _zhNat = '';
    if (window.groupsData) {
      for (var _gi = 0; _gi < window.groupsData.length; _gi++) {
        var _gt = window.groupsData[_gi].teams;
        for (var _ti = 0; _ti < _gt.length; _ti++) {
          if (_gt[_ti].code === code) { _enNat = _gt[_ti].en || ''; _zhNat = _gt[_ti].zh || ''; break; }
        }
        if (_enNat) break;
      }
    }
    // V1.74: 回退链增强 — pastTeamNames 确保有 en 字段
    var _ptnEn = (typeof pastTeamNames !== 'undefined' && pastTeamNames[code]) ? pastTeamNames[code].en : '';
    window._currentSquadTeamNat = _enNat || _ptnEn || (team ? team.en : '') || (team ? team.flag : '');
    window._currentSquadTeamFlag = team ? team.flag : '';
    var teamName = _zhNameMap[code] || _zhNat || (teamMapRef[code] && teamMapRef[code].zh) || code;
    var flagUrl = typeof pastFlag === 'function' ? pastFlag(code) : '';
    
    var titleEl = document.getElementById('squadModalTitle');
    var contentEl = document.getElementById('squadContent');
    var modalEl = document.getElementById('squadModal');
    
    if (!titleEl || !contentEl || !modalEl) {
      console.error('squadModal: missing DOM elements');
      return;
    }
    
    // V1.74: 标题栏重新布局 — 左侧队名，右侧关闭+导出按钮，数据来源置于导出按钮下方
    // V3a 杂志排版: 先处理无数据情况
    if (!squad) {
      titleEl.innerHTML = 
        '<div class="v3a-hero" style="position:relative;padding:36px 28px 28px;display:flex;align-items:center;gap:24px;border-bottom:1px solid rgba(255,255,255,0.05);background:radial-gradient(ellipse at 75% 25%,rgba(232,168,48,0.07) 0%,transparent 55%);overflow:visible;">' +
        '<div class="v3a-hero-flag-wrap" style="flex-shrink:0;">' + (flagUrl ? '<img class="v3a-hero-flag" src="'+flagUrl+'" style="width:68px;height:44px;border-radius:6px;object-fit:cover;box-shadow:0 8px 28px rgba(0,0,0,0.45);" onerror="this.style.display=\'none\'">' : '') + '</div>' +
        '<div>' +
        '<div class="v3a-hero-team" style="font-size:1.7rem;font-weight:800;color:#f5f5f5;letter-spacing:0.03em;line-height:1.2;">' + teamName + '</div>' +
        '<div class="v3a-hero-code" style="font-size:0.78rem;color:#888;margin-top:3px;font-style:italic;letter-spacing:0.02em;">' + code + '</div>' +
        '</div>' +
        '<div class="v3a-actions" style="position:absolute;top:16px;right:20px;display:flex;align-items:center;gap:14px;z-index:3;">' +
        '<span class="v3a-close" onclick="closeSquadModal()" style="font-size:1.3rem;color:#777;cursor:pointer;">✕</span>' +
        '</div>' +
        '</div>';
      contentEl.innerHTML = '<div style="padding:60px;text-align:center;color:var(--text-secondary);"><p style="font-size:3rem;margin-bottom:12px;">📭</p><p style="font-size:1.2rem;margin-bottom:8px;">暂无阵容数据</p><p>该球队的完整阵容名单尚未收录，请稍后再试。</p></div>';
      modalEl.classList.add('visible');
      return;
    }

    var categories = [
      { id: 'gk', label: '🧤 门将', cls: 'badge-gk' },
      { id: 'df', label: '🛡️ 后卫', cls: 'badge-df' },
      { id: 'mf', label: '🎯 中场', cls: 'badge-mf' },
      { id: 'fw', label: '⚽ 前锋', cls: 'badge-fw' }
    ];

    var counts = {};
    var allPlayers = [];

    categories.forEach(function(cat) {
      var players = squad[cat.id] || [];
      counts[cat.id] = players.length;
      players.forEach(function(p, idx) {
        allPlayers.push({
          n: p.n || '',
          cn: p.cn || '',
          nick: p.nick || '',
          c: p.c || '',
          h: p.h || 0,
          v: p.v || '',
          p: p.p || '',
          dob: p.dob || '',
          cat: cat.id,
          idx: idx
        });
      });
    });

    var totalPlayers = allPlayers.length;

    // V1.74: 计算总身价、总身价排名、FIFA世界排名
    var totalValue = 0;
    allPlayers.forEach(function(p) {
      var v = parseFloat(p.v);
      if (!isNaN(v)) totalValue += v;
    });
    totalValue = Math.round(totalValue);

    // 总身价排名 (在所有48队中)
    var allTotals = computeAllTeamTotalValues();
    var sortedCodes = Object.keys(allTotals).sort(function(a,b) { return allTotals[b] - allTotals[a]; });
    var totalValueRank = sortedCodes.indexOf(code) + 1;
    var totalTeamsCount = sortedCodes.length;

    // FIFA世界排名
    var fifaRank = fifaWorldRanking[code] || '—';

    // 格式化总身价 (>=1亿€显示为亿€，否则万€)
    function formatTotalValue(v) {
      if (v >= 10000) {
        return (v / 10000).toFixed(2).replace(/\.?0+$/, '') + '亿€';
      }
      return v.toString() + '万€';
    }

    // ===== V3a 杂志排版 Hero 区 =====
    var natEn = window._currentSquadTeamNat || '';
    titleEl.innerHTML = 
      '<div class="v3a-hero" style="position:relative;padding:36px 28px 28px;display:flex;align-items:center;gap:24px;border-bottom:1px solid rgba(255,255,255,0.05);background:radial-gradient(ellipse at 75% 25%,rgba(232,168,48,0.07) 0%,transparent 55%);overflow:visible;">' +
      '<div class="v3a-hero-flag-wrap" style="flex-shrink:0;position:relative;">' + (flagUrl ? '<img class="v3a-hero-flag" src="'+flagUrl+'" style="width:68px;height:44px;border-radius:6px;object-fit:cover;box-shadow:0 8px 28px rgba(0,0,0,0.45);" onerror="this.style.display=\'none\'">' : '') + '</div>' +
      '<div class="v3a-hero-info">' +
      '<div class="v3a-hero-team" style="font-size:1.7rem;font-weight:800;color:#f5f5f5;letter-spacing:0.03em;line-height:1.2;">' + teamName + '</div>' +
      '<div class="v3a-hero-code" style="font-size:0.78rem;color:#888;margin-top:3px;font-style:italic;letter-spacing:0.02em;">' + code + (natEn ? ' · ' + natEn : '') + '</div>' +
      '<div class="v3a-hero-count" style="font-size:0.85rem;color:#bbb;margin-top:10px;">共 <b style="color:#e8a830;font-size:1.35rem;font-weight:800;">' + totalPlayers + '</b> 名球员入选本届世界杯大名单</div>' +
      '</div>' +
      // 浮动统计卡片
      '<div class="v3a-floating" style="display:flex;gap:10px;position:absolute;bottom:-18px;right:24px;z-index:2;">' +
      '<div class="v3a-float featured" style="padding:11px 20px;border-radius:10px;background:linear-gradient(135deg,#241f10,#2a2315);border:1px solid rgba(232,168,48,0.35);text-align:center;box-shadow:0 6px 22px rgba(0,0,0,0.38);min-width:84px;">' +
      '<div class="v3a-float-icon" style="font-size:1.05rem;margin-bottom:3px;">💰</div>' +
      '<div class="v3a-float-value" style="font-size:0.92rem;font-weight:700;color:#e8a830;">' + formatTotalValue(totalValue) + '</div>' +
      '<div class="v3a-float-label" style="font-size:0.56rem;color:#777;text-transform:uppercase;letter-spacing:0.07em;">总身价</div>' +
      '</div>' +
      '<div class="v3a-float" style="padding:11px 20px;border-radius:10px;background:#1e1e2a;border:1px solid rgba(255,255,255,0.08);text-align:center;box-shadow:0 6px 22px rgba(0,0,0,0.38);min-width:84px;">' +
      '<div class="v3a-float-icon" style="font-size:1.05rem;margin-bottom:3px;">📊</div>' +
      '<div class="v3a-float-value" style="font-size:0.92rem;font-weight:700;color:#f0f0f0;">#' + totalValueRank + '/' + totalTeamsCount + '</div>' +
      '<div class="v3a-float-label" style="font-size:0.56rem;color:#777;text-transform:uppercase;letter-spacing:0.07em;">身价排名</div>' +
      '</div>' +
      '<div class="v3a-float" style="padding:11px 20px;border-radius:10px;background:#1e1e2a;border:1px solid rgba(255,255,255,0.08);text-align:center;box-shadow:0 6px 22px rgba(0,0,0,0.38);min-width:84px;">' +
      '<div class="v3a-float-icon" style="font-size:1.05rem;margin-bottom:3px;">🏆</div>' +
      '<div class="v3a-float-value" style="font-size:0.92rem;font-weight:700;color:#f0f0f0;">#' + fifaRank + '</div>' +
      '<div class="v3a-float-label" style="font-size:0.56rem;color:#777;text-transform:uppercase;letter-spacing:0.07em;">FIFA排名</div>' +
      '</div>' +
      '</div>' +
      // 右上操作区
      '<div class="v3a-actions" style="position:absolute;top:16px;right:20px;display:flex;align-items:center;gap:14px;z-index:3;">' +
      '<a class="v3a-export" onclick="exportQuestListCSV()" style="font-size:0.65rem;color:#999;cursor:pointer;text-decoration:none;border-bottom:1px dotted #555;transition:color 0.2s;" onmouseover="this.style.color=\'#ddd\'" onmouseout="this.style.color=\'#999\'">📋 导出QuestList</a>' +
      '<span class="v3a-close" onclick="closeSquadModal()" style="font-size:1.3rem;color:#777;cursor:pointer;transition:color 0.2s;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#777\'">✕</span>' +
      '</div>' +
      '</div>';

    // ===== V3a 杂志排版 Body 区 =====
    var html = '';

    // Tabs — 下划线风格
    html += '<div id="squadTabs" style="display:flex;gap:0;margin:22px 0 16px 0;border-bottom:2px solid rgba(255,255,255,0.05);padding:0 24px;">';
    html += '<div class="v3a-tab active" data-squadtab="all" onclick="switchSquadTabV3(\'all\',this)" style="padding:9px 18px;font-size:0.75rem;font-weight:600;cursor:pointer;border:none;background:none;color:#e8a830;border-bottom:2px solid #e8a830;margin-bottom:-2px;transition:all 0.2s;">📋 全部 (' + totalPlayers + ')</div>';
    categories.forEach(function(cat) {
      html += '<div class="v3a-tab" data-squadtab="' + cat.id + '" onclick="switchSquadTabV3(\'' + cat.id + '\',this)" style="padding:9px 18px;font-size:0.75rem;font-weight:600;cursor:pointer;border:none;background:none;color:#888;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all 0.2s;" onmouseover="this.style.color=\'#ccc\'" onmouseout="if(!this.classList.contains(\'active\')){this.style.color=\'#888\'}">' + cat.label + ' (' + counts[cat.id] + ')</div>';
    });
    html += '</div>';

    // Table
    html += '<div class="v3a-table-wrap" style="border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,0.04);margin:0 24px;max-height:50vh;overflow-y:auto;">';
    html += '<table id="squadTable" class="v3a-table" style="width:100%;border-collapse:collapse;font-size:0.73rem;">';
    html += '<thead><tr style="background:rgba(22,22,24,0.95);position:sticky;top:0;z-index:1;backdrop-filter:blur(6px);border-bottom:1px solid rgba(255,255,255,0.08);">';
    html += '<th style="padding:11px 14px;text-align:left;font-size:0.78rem;font-weight:700;color:#ddd;letter-spacing:0.05em;text-transform:uppercase;width:32px;">#</th>';
    html += '<th style="padding:11px 14px;text-align:left;font-size:0.78rem;font-weight:700;color:#ddd;letter-spacing:0.05em;text-transform:uppercase;">球员</th>';
    html += '<th style="padding:11px 14px;text-align:left;font-size:0.78rem;font-weight:700;color:#ddd;letter-spacing:0.05em;text-transform:uppercase;">位置</th>';
    html += '<th style="padding:11px 14px;text-align:left;font-size:0.78rem;font-weight:700;color:#ddd;letter-spacing:0.05em;text-transform:uppercase;">身高</th>';
    html += '<th style="padding:11px 14px;text-align:left;font-size:0.78rem;font-weight:700;color:#ddd;letter-spacing:0.05em;text-transform:uppercase;">俱乐部</th>';
    html += '<th style="padding:11px 14px;text-align:left;font-size:0.78rem;font-weight:700;color:#ddd;letter-spacing:0.05em;text-transform:uppercase;">出生日期</th>';
    html += '<th style="padding:11px 14px;text-align:right;font-size:0.78rem;font-weight:700;color:#ddd;letter-spacing:0.05em;text-transform:uppercase;">当前身价</th>';
    html += '</tr></thead><tbody>';

    allPlayers.forEach(function(p, i) {
      var playerName = resolveSquadPlayerName(p.n, p);
      var posFull = p.p || '—';
      var posShort = posFull.split(' - ').pop() || posFull;
      var posCN = (typeof formatStandardName === 'function') ? formatStandardName('position', posShort) : (typeof translate !== 'undefined' && translate.position ? translate.position(posShort) : posFull);
      var heightDisplay = p.h && p.h > 0 ? p.h + ' cm' : '—';
      var clubDisplay = (typeof formatStandardName === 'function') ? formatStandardName('club', p.c) : (p.c || '—');
      var dobDisplay = '—';
      if (p.dob && p.dob.length >= 10) {
        var dobDate = new Date(p.dob);
        if (!isNaN(dobDate.getTime())) {
          var today = new Date();
          var age = today.getFullYear() - dobDate.getFullYear();
          var monthDiff = today.getMonth() - dobDate.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) age--;
          dobDisplay = p.dob.substring(0, 10) + ' (' + age + '岁)';
        } else {
          dobDisplay = p.dob.substring(0, 10);
        }
      }
      var valueDisplay = (typeof formatValueWan === 'function') ? formatValueWan(p.v) : (p.v || '—');

      // V1.74: 加权多因素评分 _dbKey — 名称门槛+DOB(20)+国籍(10)+位置(5)，兼容双Schema
      if (!window._squadPlayerData) window._squadPlayerData = [];
    if (!window._squadPlayerQuestList) window._squadPlayerQuestList = [];
    if (!window._playerQuestList) window._playerQuestList = (function(){try{var v=sessionStorage.getItem('_playerQuestList');return v?JSON.parse(v):[];}catch(e){return[];}})();
      var playerIndex = window._squadPlayerData.length;
      var _dbKey = null;
      var _origName = p.n || '';
      if (_origName && typeof playerDB !== 'undefined') {
        var _sn = window._currentSquadTeamNat || '';
        var _sf = window._currentSquadTeamFlag || '';
        var _sd = (p.dob || '').trim();
        var _sp = (p.p || '').trim();
        var _qn = _origName.trim();
        // ★ V1.74: 剥离后缀避免 "JR"/"JUNIOR" 被当作独立单词导致名称阈值失败
        var _qnClean = _qn.replace(/\s+(Jr|Sr|II|III|IV|Júnior|Junior|Senior)\.?$/i, '').trim();
        var _qnn = _qnClean.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        var _qw = _qnn.split(/\s+/).filter(function(w){return w.length>0;});
        // DOB标准化: 兼容 YYYY-MM-DD 和 "YYYY年MM月DD日"
        var _normDob = function(bd){if(!bd)return'';var m=bd.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(m)return m[1]+'-'+('0'+m[2]).slice(-2)+'-'+('0'+m[3]).slice(-2);var cm=bd.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);if(cm)return cm[1]+'-'+('0'+cm[2]).slice(-2)+'-'+('0'+cm[3]).slice(-2);return'';};
        var _sdNorm = _normDob(_sd);
        var _cands = [];
        for (var _k in playerDB) {
          if (!playerDB.hasOwnProperty(_k)) continue;
          var _pl = playerDB[_k];
          // ★ V1.74: 多源名称匹配 — 保证 key(常用名) 与 nn(法定全名) 都参与匹配
          // 修复: "RAPHINHA" vs key="Raphinha" 因 nn="Raphael Lourenço Santos" 被跳过
          // 修复: "VINICIUS JUNIOR" 去后缀后错匹配守门员 "Vinícius"
          var _stripSpecial = function(s){return s.toLowerCase().replace(/[-'`.·]/g,'').replace(/\s+/g,'').normalize('NFD').replace(/[\u0300-\u036f]/g,'');};
          var _computeNameScore = function(_pSrc, _qSrc){
            var _ps = _stripSpecial(_pSrc);
            var _qs = _stripSpecial(_qSrc);
            var _pw = _pSrc.toLowerCase().replace(/[-'`.·]/g,' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(/\s+/).filter(function(w){return w.length>0;});
            var _qw = _qSrc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(/\s+/).filter(function(w){return w.length>0;});
            var _s = 0;
            if (_ps === _qs) _s = 100;
            else if (_pw.join(' ') === _qw.join(' ')) _s = 100;
            else if (_qw.length>0 && _pw.length>0 && _qw.join('') === _pw.join('')) _s = 95;
            else if (_qw.length>0 && _pw.length>0 && _qw.every(function(w){return _pw.indexOf(w)>=0;}) && _pw.every(function(w){return _qw.indexOf(w)>=0;})) _s = 95;
            else if (_qw.length>0 && _qw.every(function(w){return _pw.indexOf(w)>=0;})) _s = 80;
            else if (_qw.length>0 && _qw.some(function(w){return _pw.some(function(p){return p.indexOf(w)>=0||w.indexOf(p)>=0;});})) _s = 50;
            return _s;
          };
          var _pnSrc = _pl.nn || _pl.n || _k;
          // 名称源: nn(法定全名) + key(常用名) + n(简称) 全部参与
          var _nameSources = [_pnSrc];
          if (_k !== _pnSrc) _nameSources.push(_k);
          if (_pl.n && _pl.n !== _pnSrc && _pl.n !== _k) _nameSources.push(_pl.n);
          // 查询名: 去后缀版本 与 原始版本 都尝试
          var _queryNames = [_qnClean];
          if (_qnClean !== _qn) _queryNames.push(_qn);
          var _ns = 0;
          for (var _si=0; _si<_nameSources.length; _si++) {
            for (var _qi=0; _qi<_queryNames.length; _qi++) {
              var _sc = _computeNameScore(_nameSources[_si], _queryNames[_qi]);
              if (_sc > _ns) _ns = _sc;
            }
          }
          // 向后兼容变量 (后续 DOB/位置 代码仍引用)
          var _qnStripped = _stripSpecial(_qnClean);
          var _pn = _pnSrc.toLowerCase().replace(/[-'`.·]/g,' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
          var _pw = _pn.split(/\s+/).filter(function(w){return w.length>0;});
          var _qnn = _qnClean.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
          if (_ns < 50) continue; // 名称门槛淘汰
          // Phase 2: 加分项
          var _ts = _ns * 0.50;
          // DOB (+20): 标准化后比较
          var _dobHit = false; if (_sdNorm && _normDob(_pl.bd||'') === _sdNorm) { _ts += 20; _dobHit = true; }
          // 国籍 (+10): Schema1 nt(完整英文), Schema2 nat(FIFA缩写)
          var _plNat = (_pl.nt||'').toLowerCase().trim();
          var _plNatCode = (_pl.nat||'').toUpperCase().trim();
          var _teamCode = (window._currentSquadTeamCode||'').toUpperCase().trim();
          // V1.74: 国籍匹配增强 — 拆分逗号分隔格式 (如 "Korea, South")
          var _natMatch = false;
          if (_sn && _plNat) {
            var _snLower = _sn.toLowerCase().trim();
            var _plNatParts = _plNat.split(',');
            for (var _npi=0; _npi<_plNatParts.length; _npi++) {
              var _part = _plNatParts[_npi].trim();
              if (_part && (_part.indexOf(_snLower)>=0 || _snLower.indexOf(_part)>=0)) { _natMatch = true; break; }
            }
            if (!_natMatch) { _natMatch = _plNat.indexOf(_snLower)>=0 || _snLower.indexOf(_plNat)>=0; }
          }
          if (_natMatch) _ts += 10;
          else if (_plNatCode && ((_sf && _plNatCode === _sf.toUpperCase().trim()) || (_teamCode && _plNatCode === _teamCode))) _ts += 10;
          // 位置 (+5): Schema1 ps(英文详细), Schema2 pos(中文)
          // ★ V1.74: 大小写不敏感 + 英文首字母大写变体，修复 squad "Forward" vs map "forward" 不匹配
          var _pm = {'守门员':'goalkeeper','后卫':'defender','中场':'midfield','前锋':'forward','goalkeeper':'goalkeeper','defender':'defender','midfield':'midfield','forward':'forward','Goalkeeper':'goalkeeper','Defender':'defender','Midfield':'midfield','Forward':'forward','gk':'goalkeeper','df':'defender','mf':'midfield','fw':'forward'};
          var _spLower = _sp.toLowerCase(); var _mp = ''; for (var _pk in _pm) { if (_sp.indexOf(_pk)>=0 || _spLower.indexOf(_pk)>=0) { _mp = _pm[_pk]; break; } }
          var _posHit = false; if (_mp) {
            var _psLow = (_pl.ps||'').toLowerCase();
            var _mpLow = (_pl.mp||'').toLowerCase();
            // ★ V1.74: 语义位置匹配 — "Attack"≈"Forward" (修复 squad "Forward" vs playerDB "Attack-Left Winger" / "Midfield-Attacking Midfield")
            if (_psLow.indexOf(_mp)>=0) { _ts += 5; _posHit = true; }
            else if (_mpLow.indexOf(_mp)>=0) { _ts += 5; _posHit = true; }
            else if (_mp === 'forward' && (_psLow.indexOf('attack')>=0 || _mpLow === 'attack')) { _ts += 5; _posHit = true; }
            else if (_mp === 'midfield' && (_psLow.indexOf('midfield')>=0 || _mpLow === 'midfield')) { _ts += 5; _posHit = true; }
            else if (_pl.pos && _sp && _pl.pos.indexOf(_sp)>=0) { _ts += 5; _posHit = true; }
          }
          _cands.push({k:_k, ns:_ns, ts:_ts, _dobHit:_dobHit, _posHit:_posHit});
        }
        if (_cands.length > 0) {
          _cands.sort(function(a,b){return b.ts-a.ts;});
          var _best = _cands[0];
          // ★ V1.74: 动态阈值 — DOB+位置双失配时提高门槛，防止同名不同人误匹配
          var _minTs = 55;
          if (!_best._dobHit && !_best._posHit && _best.ns >= 100) _minTs = 70;
          if (_best.ts >= _minTs) _dbKey = _best.k;
          else if (_best.ts >= 55) { /* 低于动态门槛但高于55，记录为低置信度 */
            if (window._squadPlayerQuestList) window._squadPlayerQuestList.push({sq:_origName,tm:_sn,dob:_sd,pos:_sp,best:_best.k,score:Math.round(_best.ts*10)/10,reason:"同名但DOB/位置双失配"});
          }
          // V1.74: 记录低置信度匹配到questlist
          else if (window._squadPlayerQuestList) window._squadPlayerQuestList.push({sq:_origName,tm:_sn,dob:_sd,pos:_sp,best:_best.k,score:Math.round(_best.ts*10)/10});
        } else if (window._squadPlayerQuestList) {
          window._squadPlayerQuestList.push({sq:_origName,tm:_sn,dob:_sd,pos:_sp,best:'(无匹配)',score:0});
        }
      }
      window._squadPlayerData.push({
        n: playerName,
        orig: _origName,
        cn: p.cn || '',
        nick: p.nick || '',
        c: clubDisplay,
        h: heightDisplay,
        v: valueDisplay,
        p: posFull,
        pcn: posCN,
        dob: p.dob || '',
        _squadDob: p.dob || '',
        _dbKey: _dbKey
      });

      html += '<tr data-squadcat="' + p.cat + '" class="squad-all-row" style="border-top:1px solid rgba(255,255,255,0.03);transition:background 0.15s;cursor:default;">';
      html += '<td style="padding:10px 14px;text-align:left;color:#666;font-size:0.7rem;width:32px;">' + (i + 1) + '</td>';
      html += '<td style="padding:10px 14px;text-align:left;font-weight:600;color:#ccc;">';
      html += '<span onclick="showSquadPlayerDetail(' + playerIndex + ')" style="cursor:pointer;border-bottom:1px dotted #e8a830;transition:color 0.2s;" onmouseover="this.style.color=\'#e8a830\'" onmouseout="this.style.color=\'#ccc\'" title="点击查看球员详情">' + playerName + '</span>';
      html += '</td>';
      html += '<td style="padding:10px 14px;text-align:left;color:#ccc;">' + posCN + '</td>';
      html += '<td style="padding:10px 14px;text-align:left;color:#999;">' + heightDisplay + '</td>';
      html += '<td style="padding:10px 14px;text-align:left;color:#999;">' + clubDisplay + '</td>';
      html += '<td style="padding:10px 14px;text-align:left;color:#999;font-size:0.7rem;">' + dobDisplay + '</td>';
      html += '<td style="padding:10px 14px;text-align:right;font-weight:700;color:#e8a830;">' + valueDisplay + '</td>';
      html += '</tr>';
    });

    html += '</tbody></table></div>';

    // Footer
    html += '<div class="v3a-footer" style="display:flex;justify-content:space-between;align-items:center;padding:10px 24px;border-top:1px solid rgba(255,255,255,0.04);font-size:0.61rem;color:#555;margin:2px 24px 0;">';
    html += '<span>数据来源: FIFA Official Squad Lists 2026</span>';
    html += '<span>' + teamName + ' National Team</span>';
    html += '</div>';

    contentEl.innerHTML = html;
    // V1.74: 确保流光动画至少播放1秒后再显示弹窗
    var _shimmerElapsed = Date.now() - _shimmerStart;
    var _shimmerDelay = Math.max(0, 1000 - _shimmerElapsed);
    var _showModal = function() { modalEl.classList.add('visible'); };
    if (_shimmerDelay > 0) {
        setTimeout(_showModal, _shimmerDelay);
    } else {
        _showModal();
    }
  };

  // ===== V3a Tab Switch (下划线风格) =====
  window.switchSquadTabV3 = function(tabId, el) {
    var tabs = document.querySelectorAll('#squadTabs .v3a-tab');
    tabs.forEach(function(t) {
      t.classList.remove('active');
      t.style.color = '#888';
      t.style.borderBottomColor = 'transparent';
    });
    el.classList.add('active');
    el.style.color = '#e8a830';
    el.style.borderBottomColor = '#e8a830';

    var rows = document.querySelectorAll('#squadTable tbody tr');
    rows.forEach(function(row) {
      if (tabId === 'all') {
        row.style.display = '';
      } else {
        row.style.display = row.getAttribute('data-squadcat') === tabId ? '' : 'none';
      }
    });
  };

  // 兼容旧版 switchSquadTab 调用
  window.switchSquadTab = function(tabId) {
    var el = document.querySelector('#squadTabs .v3a-tab[data-squadtab="' + tabId + '"]');
    if (el) window.switchSquadTabV3(tabId, el);
  };  // ===== Close Squad Modal =====
  window.closeSquadModal = function() {
    var modal = document.getElementById('squadModal');
    if (modal) modal.classList.remove('visible');
    // Also close any player detail overlay
    var overlay = document.querySelector('.player-detail-overlay');
    if (overlay) overlay.remove();
  };
  
  // ===== Switch Tab (V3a 下划线风格) =====
  // 已由 showSquadModal 中的 switchSquadTabV3 接管，此处保留兼容
  window.switchSquadTab = function(tabId) {
    var el = document.querySelector('#squadTabs .v3a-tab[data-squadtab="' + tabId + '"]');
    if (el && typeof window.switchSquadTabV3 === 'function') {
      window.switchSquadTabV3(tabId, el);
    }
  };  // ===== Player Detail Popup (V1.74 — 出生日期/国籍交叉验证 + 精准匹配 + QuestList) =====
  // QuestList: 收集无法精确匹配的球员，供后续核对和补全数据
  window._playerQuestList = window._playerQuestList || [];
  
  window.showSquadPlayerDetail = function(index) {
    var data = (window._squadPlayerData && window._squadPlayerData[index]) ? window._squadPlayerData[index] : null;
    if (!data) { console.error('Player data not found for index:', index); return; }
    
    window._squadDetailData = data;
    
    var teamNat = window._currentSquadTeamNat || '';
    var teamCode = window._currentSquadTeamCode || '';
    
    // 辅助: 格式化出生日期
    function normDob(d) {
      if (!d) return '';
      // ISO格式: YYYY-MM-DD 或 YYYY/M/D
      var parts = d.split(/[\-\/\.]/);
      if (parts.length === 3) {
        var y = parseInt(parts[0]), m = parseInt(parts[1]), day = parseInt(parts[2]);
        if (y > 1900 && m >= 1 && m <= 12 && day >= 1 && day <= 31)
          return y + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
      }
      // 中文格式: YYYY年MM月DD日
      var cm = d.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
      if (cm) return cm[1] + '-' + ('0'+cm[2]).slice(-2) + '-' + ('0'+cm[3]).slice(-2);
      return '';
    }
    
    // 辅助: 用dob + nat查找
    function findByDobAndNat(dobStr, natStr, teamFlag) {
      if (!dobStr || typeof playerDB === 'undefined') return null;
      var nd = normDob(dobStr);
      if (!nd) return null;
      var candidates = [];
      for (var k in playerDB) {
        if (!playerDB.hasOwnProperty(k)) continue;
        var pbd = normDob(playerDB[k].bd || '');
        if (pbd === nd) { candidates.push(k); }
      }
      if (candidates.length === 0) return null;
      // V1.74: 必须验证国籍，不再盲目返回唯一DOB匹配
      var nl = natStr ? natStr.toLowerCase().trim() : '';
      var fl = teamFlag ? teamFlag.toUpperCase().trim() : '';
      var tc = (window._currentSquadTeamCode || '').toUpperCase().trim();
      var verified = [];
      for (var ci = 0; ci < candidates.length; ci++) {
        var pk = candidates[ci];
        var pl = playerDB[pk];
        var pnat = (pl.nt || '').toLowerCase().trim();
        var pnatCode = (pl.nat || '').toUpperCase().trim();
        // Schema1: nt完整英文名包含natStr, Schema2: nat FIFA缩写匹配flag或code
        if ((nl && pnat && (pnat === nl || pnat.indexOf(nl) >= 0 || nl.indexOf(pnat) >= 0)) ||
            (pnatCode && ((fl && pnatCode === fl) || (tc && pnatCode === tc)))) {
          verified.push(pk);
        }
      }
      if (verified.length > 0) return verified[0];
      // 无国籍验证通过的候选，不返回（避免错误匹配）
      return null;
    }
    
    // 辅助: 保存到 QuestList
    function addToQuestList(reason, extraInfo) {
      var entry = {
        time: new Date().toISOString(),
        team: teamCode || '?',
        teamNat: teamNat || '?',
        displayName: data.n || '?',
        origName: data.orig || '',
        cn: data.cn || '',
        dob: data._squadDob || data.dob || '',
        pos: data.p || '',
        club: data.c || '',
        reason: reason,
        extra: extraInfo || ''
      };
      window._playerQuestList.push(entry);
      try { sessionStorage.setItem('_playerQuestList', JSON.stringify(window._playerQuestList)); } catch(e) {}
    }
    
    // ===== 匹配策略管线 =====
    var origName = data.orig || '';
    if (!origName) {
      var m1 = (data.n || '').match(/\(([^)]+)\)/);
      origName = m1 ? m1[1] : (data.n || '');
    }
    var squadDob = data._squadDob || data.dob || '';
    
    // 策略1: 加权评分预解析的 playerDB key (名称+DOB+国籍+位置 综合评分≥60)
    if (data._dbKey && typeof playerDB !== 'undefined' && playerDB[data._dbKey]) {
      if (typeof showUnifiedPlayerDetail === 'function') {
        
      // V1.74: Store squad market value for engine fallback
      if (data.v && data.v !== '?' && data.v !== '—') {
        window._squadValueMap = window._squadValueMap || {};
        window._squadValueMap[data._dbKey] = data.v;
      }
      showUnifiedPlayerDetail(data._dbKey);
        return;
      }
    }
    
    // ★ V2.0 策略1.5: 统一匹配引擎 + 上下文消歧 (DOB/国籍/位置 加权评分)
    if (origName && typeof window.__playerMatcher !== 'undefined') {
      var _ctx = {};
      if (squadDob) _ctx.dob = squadDob;
      if (teamNat) _ctx.nationality = teamNat;
      if (data.p) _ctx.position = data.p;
      var _mr = window.__playerMatcher.match(origName, _ctx);
      if (_mr && _mr.autoSelect && _mr.confidence >= 85) {
        if (typeof showUnifiedPlayerDetail === 'function') {
          if (data.v && data.v !== '?' && data.v !== '—') {
            window._squadValueMap = window._squadValueMap || {};
            window._squadValueMap[_mr.key] = data.v;
          }
          showUnifiedPlayerDetail(_mr.key);
          return;
        }
      }
    }

    // 策略2: 出生日期匹配（最可靠）
    // ★ V1.74: 添加名称重叠验证，防止DOB碰撞导致错误匹配（如Vinícius Júnior→Ronaldo, 同DOB同国籍）
    if (squadDob && typeof playerDB !== 'undefined') {
      var dobKey = findByDobAndNat(squadDob, teamNat, window._currentSquadTeamFlag);
      if (dobKey && playerDB[dobKey]) {
        // V1.74: 验证名称重叠 — 至少一个单词匹配（避免DOB碰撞）
        var _dobPd = playerDB[dobKey];
        var _dobNameStr = ((_dobPd.nn||'') + ' ' + (_dobPd.n||'') + ' ' + dobKey + ' ' + (_dobPd.en||'')).toLowerCase();
        var _squadNameCheck = (origName || data.n || '').toLowerCase().replace(/\s+(jr|sr|ii|iii|iv|júnior|junior|senior)\.?$/i, '');
        var _nameWords = _squadNameCheck.split(/[\s\-]+/).filter(function(w){return w.length>=2;});
        var _nameOverlap = _nameWords.length === 0 || _nameWords.some(function(w){return _dobNameStr.indexOf(w) >= 0;});
        if (_nameOverlap) {
          if (typeof showUnifiedPlayerDetail === 'function') {
            
          // V1.74: Store squad market value for engine fallback
          if (data.v && data.v !== '?' && data.v !== '—') {
            window._squadValueMap = window._squadValueMap || {};
            window._squadValueMap[dobKey] = data.v;
          }
          showUnifiedPlayerDetail(dobKey);
            return;
          }
        } else {
          console.warn('[squadmodal] DOB匹配 ' + dobKey + ' 但名称无重叠: squad=' + _squadNameCheck + ' player=' + _dobNameStr.substring(0,60));
        }
      }
      if (!dobKey && squadDob.length >= 10) {
        addToQuestList('dob未找到匹配 (dob=' + normDob(squadDob) + ')', 'nat=' + teamNat);
      }
    }
    
    // 策略3: 原始英文名精确匹配 + 国籍验证 (V1.74: 大小写不敏感回退)
    var _s3Key = null;
    if (origName && typeof playerDB !== 'undefined') {
      if (playerDB[origName]) { _s3Key = origName; }
      else {
        // V1.74: 大小写不敏感查找 ("VINICIUS JUNIOR" → "Vinicius Junior")
        var _s3Lower = origName.toLowerCase();
        for (var _s3k in playerDB) {
          if (playerDB.hasOwnProperty(_s3k) && _s3k.toLowerCase() === _s3Lower) { _s3Key = _s3k; break; }
        }
      }
    }
    if (_s3Key && playerDB[_s3Key]) {
      var _s3pl = playerDB[_s3Key];
      var pnat1 = (_s3pl.nt || '').toLowerCase().trim();
      var tnat1 = teamNat.toLowerCase().trim();
      if (!tnat1 || pnat1 === tnat1 || pnat1.indexOf(tnat1) >= 0 || tnat1.indexOf(pnat1) >= 0) {
        // ★ V1.74: 名称匹配后验证 DOB/位置兼容性，防止同名不同人误匹配
        // (如 squad RAPHINHA Forward 1996 vs playerDB Raphinha Defender 1999)
        var _s3DobYear = ''; var _s3PlDobYear = '';
        if (squadDob) { var _m3 = squadDob.match(/^(\d{4})/); if (_m3) _s3DobYear = _m3[1]; }
        if (_s3pl.bd) { var _m3b = _s3pl.bd.match(/^(\d{4})/); if (_m3b) _s3PlDobYear = _m3b[1]; }
        var _s3PosCompat = true;
        if (data.p && _s3pl.mp) {
          var _s3sPos = (data.p || '').toLowerCase();
          var _s3pMp = (_s3pl.mp || '').toLowerCase();
          // 位置大类映射
          var _posGroups = {forward:['forward','attack','striker','winger'],midfield:['midfield','midfielder'],defender:['defender','defence','back'],goalkeeper:['goalkeeper','goalie','gk']};
          var _s3sGroup = ''; for (var _g in _posGroups) { if (_posGroups[_g].some(function(x){return _s3sPos.indexOf(x)>=0;})) { _s3sGroup = _g; break; } }
          var _s3pGroup = ''; for (var _g in _posGroups) { if (_posGroups[_g].some(function(x){return _s3pMp.indexOf(x)>=0;})) { _s3pGroup = _g; break; } }
          if (_s3sGroup && _s3pGroup && _s3sGroup !== _s3pGroup) _s3PosCompat = false;
        }
        if (!_s3PosCompat || (_s3DobYear && _s3PlDobYear && Math.abs(parseInt(_s3DobYear)-parseInt(_s3PlDobYear)) > 3)) {
          console.warn('[squadmodal] 策略3 名称匹配 ' + _s3Key + ' 但DOB/位置不兼容: squadDOB=' + _s3DobYear + ' playerDOB=' + _s3PlDobYear + ' squadPos=' + (data.p||'') + ' playerMp=' + (_s3pl.mp||''));
          addToQuestList('名称匹配但DOB/位置不兼容', 'key=' + _s3Key + ' squadDOB=' + squadDob + ' playerDOB=' + (_s3pl.bd||'') + ' squadPos=' + (data.p||'') + ' playerMp=' + (_s3pl.mp||''));
          // 不返回，继续后续策略
        } else {
          if (typeof showUnifiedPlayerDetail === 'function') {
            
          // V1.74: Store squad market value for engine fallback
          if (data.v && data.v !== '?' && data.v !== '—') {
            window._squadValueMap = window._squadValueMap || {};
            window._squadValueMap[_s3Key] = data.v;
          }
          showUnifiedPlayerDetail(_s3Key);
            return;
          }
        }
      }
    }
    
    // 策略4: getPlayerKey + 国籍交叉验证
    if (origName && typeof getPlayerKey === 'function') {
      var gk = getPlayerKey(origName);
      if (gk && typeof playerDB !== 'undefined' && playerDB[gk]) {
        var pnat2 = (playerDB[gk].nt || '').toLowerCase().trim();
        var tnat2 = teamNat.toLowerCase().trim();
        if (!tnat2 || pnat2 === tnat2 || pnat2.indexOf(tnat2) >= 0 || tnat2.indexOf(pnat2) >= 0) {
          if (typeof showUnifiedPlayerDetail === 'function') {
            
              // V1.74: Store squad market value for engine fallback
              if (data.v && data.v !== '?' && data.v !== '—') {
                window._squadValueMap = window._squadValueMap || {};
                window._squadValueMap[gk] = data.v;
              }
              showUnifiedPlayerDetail(gk);
            return;
          }
        } else {
          console.warn('[squadmodal] getPlayerKey returned "' + gk + '" (nat=' + pnat2 + ') but team=' + teamNat);
        }
      }
    }
    
    // 策略5: 遍历playerDB按dob + 国籍查找 (V1.74: 添加名称重叠验证防DOB碰撞，如 Vinícius Júnior→Ronaldo)
    if (squadDob && typeof playerDB !== 'undefined') {
      var nd2 = normDob(squadDob);
      if (nd2) {
        var nl5 = teamNat.toLowerCase().trim();
        var fl5 = (window._currentSquadTeamFlag || '').toUpperCase().trim();
        var tc5 = (window._currentSquadTeamCode || '').toUpperCase().trim();
        var _s5NameCheck = (origName || data.n || '').toLowerCase().replace(/\s+(jr|sr|ii|iii|iv|júnior|junior|senior)\.?$/i, '').trim();
        for (var k in playerDB) {
          if (!playerDB.hasOwnProperty(k)) continue;
          if (normDob(playerDB[k].bd || '') === nd2) {
            var pn5 = (playerDB[k].nt || '').toLowerCase().trim();
            var pc5 = (playerDB[k].nat || '').toUpperCase().trim();
            if ((nl5 && pn5 && (pn5 === nl5 || pn5.indexOf(nl5) >= 0 || nl5.indexOf(pn5) >= 0)) ||
                (pc5 && ((fl5 && pc5 === fl5) || (tc5 && pc5 === tc5)))) {
              // V1.74: 名称重叠验证 — 至少一个单词匹配，防止同DOB同国籍错误匹配
              var _s5NameStr = ((playerDB[k].nn||'') + ' ' + (playerDB[k].n||'') + ' ' + k + ' ' + (playerDB[k].en||'')).toLowerCase();
              var _s5Words = _s5NameCheck.split(/[\s\-]+/).filter(function(w){return w.length>=2;});
              var _s5Overlap = _s5Words.length === 0 || _s5Words.some(function(w){return _s5NameStr.indexOf(w) >= 0;});
              if (!_s5Overlap) { console.warn('[squadmodal] 策略5 DOB匹配 ' + k + ' 但名称无重叠: squad=' + _s5NameCheck + ' player=' + _s5NameStr.substring(0,60)); continue; }
              if (typeof showUnifiedPlayerDetail === 'function') {
                
              // V1.74: Store squad market value for engine fallback
              if (data.v && data.v !== '?' && data.v !== '—') {
                window._squadValueMap = window._squadValueMap || {};
                window._squadValueMap[k] = data.v;
              }
              showUnifiedPlayerDetail(k);
                return;
              }
            }
          }
        }
        addToQuestList('dob匹配但无国籍验证通过 (dob=' + nd2 + ')', 'nat=' + teamNat + ' flag=' + (window._currentSquadTeamFlag||'') + ' code=' + (window._currentSquadTeamCode||''));
      }

                                }
    
    // 策略6: 回退 — 构建格式化名传给引擎
    var cnName = data.cn || '';
    var formattedName = cnName ? cnName + ' (' + origName + ')' : origName;
    if (!formattedName || formattedName === ' ()') {
      addToQuestList('无法构建有效的球员名称', '');
      if (typeof showUnifiedPlayerDetail === 'function') {
        
                
        // V1.74: Store squad market value for engine fallback
        if (data.v && data.v !== '?' && data.v !== '—') {
          window._squadValueMap = window._squadValueMap || {};
          window._squadValueMap[formattedName || origName || 'Unknown'] = data.v;
        }
        showUnifiedPlayerDetail(formattedName || origName || 'Unknown');
      }
      return;
    }
    
    // V1.74: 所有策略失败 — 不再回退到不可靠的引擎查询，弹窗提示用户
    addToQuestList('所有策略未匹配(含DOB+国籍验证)', 'orig=' + origName + ' dob=' + squadDob + ' nat=' + teamNat);
    console.warn('[squadmodal] 球员未在playerDB中精确匹配: ' + formattedName + ' | DOB=' + squadDob + ' | 国籍=' + teamNat);
    if (typeof showToast === 'function') {
      showToast('⚠️ 未在数据库中找到: ' + (data.cn || origName) + ' — 已记录到核查列表');
    }
    // 不再调用 showUnifiedPlayerDetail（避免显示错误球员）
  };

  // ===== QuestList CSV Export V1.74 =====
  window.exportQuestListCSV = function() {
    var ql = window._playerQuestList || [];
    if (ql.length === 0) { alert('QuestList 为空 — 没有未匹配球员。'); return; }
    var BOM = '\uFEFF';
    var csv = BOM + '时间,队伍,队伍国籍,显示名,原始英文名,中文名,DOB,位置,俱乐部,原因,额外信息\n';
    ql.forEach(function(e) {
      var row = [e.time||'', e.team||'', e.teamNat||'', e.displayName||'', e.origName||'', e.cn||'', e.dob||'', e.pos||'', e.club||'', e.reason||'', e.extra||''];
      csv += row.map(function(c) { return '"' + String(c||'').replace(/"/g, '""') + '"'; }).join(',') + '\n';
    });
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'player_questlist.csv';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
    console.log('📋 QuestList CSV exported: ' + ql.length + ' entries');
  };
  
  // ===== Event Listeners =====
  setTimeout(function() {
    var sm = document.getElementById('squadModal');
    if (sm) {
      sm.addEventListener('click', function(e) {
        if (e.target === sm) window.closeSquadModal();
      });
    }
  }, 300);
  
  // ESC key — squadmodal 仅处理阵容弹窗
  // 球员详情和其他弹窗由 HTML 全局 ESC 处理器统一管理（已包含完整层叠关闭逻辑）
  // 此处作为安全网：当 HTML 处理器未拦截时，确保 squadModal 可被关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var sm = document.getElementById('squadModal');
      if (sm && sm.classList.contains('visible')) {
        // 检查是否有更上层的弹窗（应由 HTML 处理器关闭）
        var hasOverlay = document.querySelector('.player-detail-overlay');
        var pdm = document.getElementById('playerDetailModal');
        var hasPlayerDetail = pdm && pdm.classList.contains('visible');
        if (!hasOverlay && !hasPlayerDetail) {
          window.closeSquadModal();
          e.stopImmediatePropagation();
          return;
        }
        // 有更上层弹窗 → 不处理，让 HTML 处理器按层叠顺序关闭
        return;
      }
    }
  });
  
  // Table row hover
  setTimeout(function() {
    var style = document.createElement('style');
    style.textContent = '.squad-all-row:hover{background:rgba(255,255,255,0.04)!important;}';
    document.head.appendChild(style);
  }, 300);
  
  console.log('✅ squadmodal.js V1.74 — V3a杂志排版: Hero大区+浮动统计卡片+下划线标签+数据来源页脚');
})();
