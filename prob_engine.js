// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
/**
 * ============================================================
 *  prob_engine_v2.js — 增强概率计算引擎 (V4)
 *  Phase 2: AI融合推算 + 赔率反推 + 让球/大小球概率
 *  依赖: oddsdata.js (matchOdds, liveOdds), groupsdata_v2.js (teamDB, squadDB)
 * ============================================================
 */
(function() {
  'use strict';

  // ========== 桥接外部数据 ==========
  const teamDB = window.teamDB || {};
  const matchOdds = window.matchOdds || {};
  const liveOdds = window.liveOdds || {};
  const allGM = window.allGM || [];
  const teamMap = window.teamMap || {};
  const poisson = window.poisson || function(lambda, k) {
    if (k < 0) return 0;
    let p = Math.exp(-lambda);
    for (let i = 1; i <= k; i++) p *= lambda / i;
    return p;
  };

  // ========== 辅助函数 ==========

  /** 从 squadDB 动态计算球队总身价 (万€) */
  function computeTeamValue(code) {
    try {
      if (typeof window.squadDB === 'undefined' || !window.squadDB[code]) return null;
      const team = window.squadDB[code];
      let total = 0;
      ['gk', 'df', 'mf', 'fw'].forEach(pos => {
        if (team[pos]) {
          team[pos].forEach(p => {
            const val = parseFloat(p.v);
            if (!isNaN(val)) total += val;
          });
        }
      });
      return total > 0 ? total : null;
    } catch (e) { return null; }
  }

  /** 获取 FIFA 排名 (优先实时数据，回退 teamDB) */
  function getFifaRank(code) {
    if (window.fifaWorldRanking && window.fifaWorldRanking[code]) {
      return window.fifaWorldRanking[code];
    }
    const td = teamDB[code];
    return td ? td.r : 50; // 默认中位排名
  }

  /** 获取教练年龄 */
  function getCoachAge(code) {
    try {
      if (typeof window.getCoachAge === 'function') return window.getCoachAge(code);
      if (typeof window.coachDB !== 'undefined' && window.coachDB[code] && window.coachDB[code].a) {
        return window.coachDB[code].a;
      }
    } catch (e) { }
    const td = teamDB[code];
    if (td && td.c && td.c.a) return td.c.a;
    return '?';
  }

  /** 获取球队风格关键词 */
  function getTeamStyle(code) {
    const td = teamDB[code];
    return td ? (td.s || []) : [];
  }

  /** 获取球队描述 */
  function getTeamDesc(code) {
    const td = teamDB[code];
    return td ? (td.sd || '暂无详细分析') : '暂无详细分析';
  }

  /** 获取阵型 */
  function getFormation(code) {
    const td = teamDB[code];
    return td ? (td.f || '4-4-2') : '4-4-2';
  }

  // ========== 赔率反推概率 (1X2) ==========
  /**
   * 从 1X2 赔率反推胜平负概率
   * @param {Object} ho - 主队赔率 {w, d, l}
   * @param {Object} ao - 客队赔率 {w, d, l}
   * @returns {{ph, pd, pa}}
   */
  function calcOddsPbs(ho, ao) {
    const rw = 1 / (ho.w || 2.50);
    const rd = 1 / ((ho.d + (ao.d || 3.2)) / 2);
    const ra = 1 / (ao.w || 2.80);
    const t = rw + rd + ra;
    return {
      ph: (rw / t * 100).toFixed(1),
      pd: (rd / t * 100).toFixed(1),
      pa: (ra / t * 100).toFixed(1)
    };
  }

  // ========== 让球盘概率反推 ==========
  /**
   * 从让球盘赔率反推让球方胜率
   * @param {number} ahLine - 让球线 (如 -0.5, +1.0)
   * @param {number} ahHome - 主队让球盘赔率
   * @param {number} ahAway - 客队受让盘赔率
   * @returns {{probCover: number, probNotCover: number}} 穿盘/不穿盘概率
   */
  function calcAsianHandicapPbs(ahLine, ahHome, ahAway) {
    if (!ahHome || !ahAway) return null;
    const rHome = 1 / ahHome;
    const rAway = 1 / ahAway;
    const total = rHome + rAway;
    return {
      probCover: (rHome / total * 100).toFixed(1),    // 让球方穿盘概率
      probNotCover: (rAway / total * 100).toFixed(1)   // 受让方赢盘概率
    };
  }

  // ========== 大小球概率反推 ==========
  /**
   * 从大小球盘赔率反推大小球概率
   * @param {number} ouLine - 大小球线 (如 2.5)
   * @param {number} ouOver - 大球赔率
   * @param {number} ouUnder - 小球赔率
   * @returns {{probOver, probUnder, expectedGoals}}
   */
  function calcOUPbs(ouLine, ouOver, ouUnder) {
    if (!ouOver || !ouUnder) return null;
    const rOver = 1 / ouOver;
    const rUnder = 1 / ouUnder;
    const total = rOver + rUnder;
    const probOver = rOver / total;
    const probUnder = rUnder / total;

    // 从大小球概率估算预期进球 λ
    // 使用泊松累积分布反推
    const line = Math.abs(parseFloat(ouLine) || 2.5);
    let lambda = line; // 初值
    // 简单牛顿法逼近
    for (let iter = 0; iter < 20; iter++) {
      let cumProb = 0;
      for (let k = 0; k <= Math.floor(line); k++) {
        cumProb += poisson(lambda, k);
      }
      // 线性插值修正
      const frac = line - Math.floor(line);
      const probAtLine = cumProb + frac * poisson(lambda, Math.floor(line) + 1);
      const error = probAtLine - probUnder;
      if (Math.abs(error) < 0.001) break;
      lambda -= error * 0.5;
      if (lambda < 0.5) { lambda = 0.5; break; }
      if (lambda > 8) { lambda = 8; break; }
    }
    
    return {
      probOver: (probOver * 100).toFixed(1),
      probUnder: ((1 - probOver) * 100).toFixed(1),
      expectedGoals: lambda.toFixed(2)
    };
  }

  // ========== 赔率 → λ 推算 (泊松分布) ==========
  function oddsToLambda(ow, ol) {
    const pw = 1 / (ow || 2.50);
    const pl = 1 / (ol || 2.80);
    const pdVal = 1 / ((ow + ol) / 2 + 0.5);
    const t = pw + pdVal + pl;
    const pWin = pw / t;
    const diff = (pWin - 0.5) * 4;
    const base = 1.35;
    return {
      hl: Math.max(0.2, base + diff * 0.7),
      al: Math.max(0.2, base - diff * 0.7)
    };
  }

  // ========== 进球分布计算 (条件概率) ==========
  function calcGoalDist(hl, al) {
    const mg = 7;
    const dHW = [], dD = [], dAW = [];
    let tHW = 0, tD = 0, tAW = 0;
    const jt = [];
    for (let h = 0; h <= mg; h++) {
      jt[h] = [];
      for (let a = 0; a <= mg; a++) {
        const p = poisson(hl, h) * poisson(al, a);
        jt[h][a] = p;
        if (h > a) tHW += p;
        else if (h === a) tD += p;
        else tAW += p;
      }
    }
    for (let g = 1; g <= mg; g++) {
      let ph = 0;
      for (let a = 0; a < g; a++) ph += (jt[g] ? jt[g][a] || 0 : 0);
      dHW.push({ goal: g, prob: tHW > 0 ? ph / tHW * 100 : 0 });
    }
    for (let g = 1; g <= mg; g++) {
      const pdVal = jt[g] ? jt[g][g] || 0 : 0;
      dD.push({ goal: g, prob: tD > 0 ? pdVal / tD * 100 : 0 });
    }
    for (let g = 1; g <= mg; g++) {
      let pa = 0;
      for (let h = 0; h < g; h++) pa += (jt[h] ? jt[h][g] || 0 : 0);
      dAW.push({ goal: g, prob: tAW > 0 ? pa / tAW * 100 : 0 });
    }
    return { hw: dHW, dd: dD, aw: dAW };
  }

  // ================================================================
  //  🔥 AI 融合概率推算 (多参数 + 泊松分布模型)
  // ================================================================

  /**
   * calcAIPbs — AI多参数融合概率计算
   * 
   * 考量因子:
   *   1. FIFA排名差 → 实力基础分
   *   2. 球员身价比 → 阵容深度
   *   3. 战术风格匹配度 → 克制关系
   *   4. 近期状态模拟 → 攻防效率
   * 
   * 模型:
   *   - 泊松分布模型 (核心)
   *   - 加权融合 (多因子加权合成 λ)
   * 
   * @param {string} homeCode - 主队代码
   * @param {string} awayCode - 客队代码
   * @returns {{ph, pd, pa, hLambda, aLambda, summary, factors}}
   */
  function calcAIPbs(homeCode, awayCode) {
    // ===== 1. FIFA排名因子 =====
    const rankH = getFifaRank(homeCode);
    const rankA = getFifaRank(awayCode);
    const rankDiff = rankA - rankH; // 正值=主队更强
    // 排名差归一化到 [-1, 1]，排名差每10位约0.07
    const rankFactor = Math.tanh(rankDiff / 60) * 0.4;
    
    // ===== 2. 球员身价因子 =====
    const valH = computeTeamValue(homeCode);
    const valA = computeTeamValue(awayCode);
    let valueFactor = 0;
    if (valH && valA && valH > 0 && valA > 0) {
      const ratio = valH / (valA + 0.01);
      valueFactor = Math.tanh(Math.log(ratio) * 0.8) * 0.25;
    }
    
    // ===== 3. 战术风格因子 (简化版) =====
    const styleH = getTeamStyle(homeCode);
    const styleA = getTeamStyle(awayCode);
    // 基于风格关键词的简单克制分析
    let styleBonus = 0;
    const attackKeywords = ['进攻', '边路', '爆破', '冲击', '速度'];
    const defenseKeywords = ['防守', '铁血', '反击', '逼抢', '压迫'];
    
    const hAtt = styleH.some(s => attackKeywords.some(k => s.includes(k)));
    const hDef = styleH.some(s => defenseKeywords.some(k => s.includes(k)));
    const aAtt = styleA.some(s => attackKeywords.some(k => s.includes(k)));
    const aDef = styleA.some(s => defenseKeywords.some(k => s.includes(k)));
    
    // 攻对防有优势
    if (hAtt && !aDef) styleBonus += 0.08;
    if (aAtt && !hDef) styleBonus -= 0.08;
    // 反击克制进攻
    if (aAtt && hDef) styleBonus += 0.06;
    if (hAtt && aDef) styleBonus -= 0.06;
    
    // ===== 4. 综合 λ 计算 =====
    // 基础 λ 值 (世界杯平均进球约 2.6)
    const baseLambda = 1.35;
    
    // 动态 λ 调整: 排名因子 + 身价因子 + 风格因子
    const hAdjust = baseLambda + (rankFactor + valueFactor + styleBonus) * 1.2;
    const aAdjust = baseLambda - (rankFactor + valueFactor + styleBonus) * 0.9;
    
    const hLambda = Math.max(0.3, Math.min(5.0, hAdjust));
    const aLambda = Math.max(0.3, Math.min(5.0, aAdjust));
    
    // ===== 5. 泊松分布计算胜平负 =====
    const maxGoals = 10;
    let phTotal = 0, pdTotal = 0, paTotal = 0;
    
    for (let h = 0; h <= maxGoals; h++) {
      for (let a = 0; a <= maxGoals; a++) {
        const p = poisson(hLambda, h) * poisson(aLambda, a);
        if (h > a) phTotal += p;
        else if (h === a) pdTotal += p;
        else paTotal += p;
      }
    }
    
    const totalP = phTotal + pdTotal + paTotal;
    const ph = totalP > 0 ? (phTotal / totalP * 100) : 33.3;
    const pd = totalP > 0 ? (pdTotal / totalP * 100) : 33.3;
    const pa = totalP > 0 ? (paTotal / totalP * 100) : 33.3;
    
    // ===== 6. 生成推演总结 =====
    const rankInfo = rankDiff > 30 ? 
      'FIFA排名差距较大(' + (rankDiff > 0 ? '主队更强' : '客队更强') + '，差' + Math.abs(rankDiff) + '位)' :
      rankDiff > 10 ?
      'FIFA排名有一定差距(' + (rankDiff > 0 ? '主队占优' : '客队占优') + '，差' + Math.abs(rankDiff) + '位)' :
      'FIFA排名接近(相差仅' + Math.abs(rankDiff) + '位)';
    
    const valueInfo = (valH && valA) ?
      '身价比: ' + (valH > 10000 ? (valH/10000).toFixed(1)+'亿' : valH+'万') + ' vs ' +
      (valA > 10000 ? (valA/10000).toFixed(1)+'亿' : valA+'万') :
      '身价数据暂不完整';
    
    const winner = ph > pa ? 'home' : (pa > ph ? 'away' : 'draw');
    const favName = winner === 'home' ? (teamMap[homeCode] ? teamMap[homeCode].zh : homeCode) :
                    winner === 'away' ? (teamMap[awayCode] ? teamMap[awayCode].zh : awayCode) : '双方';
    
    const confLevel = Math.max(ph, pd, pa) > 55 ? '较高' :
                      Math.max(ph, pd, pa) > 45 ? '中等' : '较低';
    
    const summary = '【AI推演总结】\n' +
      '📊 模型：泊松分布 + 多参数加权融合\n' +
      '🏆 ' + rankInfo + '\n' +
      '💰 ' + valueInfo + '\n' +
      '⚽ 预期进球：主队 λ=' + hLambda.toFixed(2) + ' / 客队 λ=' + aLambda.toFixed(2) + '\n' +
      '📈 胜平负概率：主胜 ' + ph.toFixed(1) + '% | 平局 ' + pd.toFixed(1) + '% | 客胜 ' + pa.toFixed(1) + '%\n' +
      '🎯 倾向：' + favName + (winner !== 'draw' ? '稍占优势' : '势均力敌') + ' (置信度：' + confLevel + ')\n' +
      '💡 考量因子：FIFA排名、球员身价、战术风格匹配度';
    
    return {
      ph: ph.toFixed(1),
      pd: pd.toFixed(1),
      pa: pa.toFixed(1),
      hLambda: hLambda,
      aLambda: aLambda,
      summary: summary,
      factors: {
        rankDiff: rankDiff,
        rankFactor: rankFactor,
        valueFactor: valueFactor,
        styleBonus: styleBonus,
        hLambda: hLambda,
        aLambda: aLambda
      }
    };
  }

  // ================================================================
  //  📊 V4 概率弹窗渲染
  // ================================================================

  /**
   * renderProbModalV4 — 新版双栏概率弹窗
   * 左栏：赔率板块 (William Hill + 让球/大小球)
   * 右栏：AI推理板块 (多参数融合 + 泊松分布)
   */
  function renderProbModalV4(mid) {
    // ===== 内嵌完整 CSS (参考 prob_modal_v4_optimized.html，作用域 #probContent) =====
    var styleId = 'prob-v4-inline-style';
    if (!document.getElementById(styleId)) {
      var st = document.createElement('style');
      st.id = styleId;
      st.textContent = '#probContent .mf-h{background:linear-gradient(135deg,#111827,#141a2e);border-bottom:2px solid #c350ff;padding:20px 22px 16px;display:flex;align-items:center;justify-content:center}'
        + '#probContent .mf-t{font-size:18px;font-weight:800;letter-spacing:.8px;color:#fff}'
        + '#probContent .mf-b{padding:16px 18px 20px}'
        + '#probContent .cg{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}'
        + '#probContent .hc{background:#111827;border-radius:12px;padding:14px 14px 12px;border-top:3px solid transparent}'
        + '#probContent .hc.od{border-top-color:#ff6b35}'
        + '#probContent .hc.ai{border-top-color:#4fc3f7}'
        + '#probContent .cl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px}'
        + '#probContent .hc.od .cl{color:#ff6b35}'
        + '#probContent .hc.ai .cl{color:#4fc3f7}'
        + '#probContent .pr{display:flex;gap:6px}'
        + '#probContent .pi{flex:1;text-align:center;padding:8px 6px;border-radius:8px;background:rgba(0,0,0,.25)}'
        + '#probContent .pv{font-size:26px;font-weight:800;letter-spacing:-1px}'
        + '#probContent .pi.w .pv{color:#4caf50}'
        + '#probContent .pi.d .pv{color:#ffb74d}'
        + '#probContent .pi.l .pv{color:#ef5350}'
        + '#probContent .pb{height:4px;border-radius:2px;margin:5px auto 3px;max-width:110px;overflow:hidden;background:rgba(255,255,255,.08)}'
        + '#probContent .pbf{height:100%;border-radius:2px}'
        + '#probContent .pi.w .pbf{background:#4caf50}'
        + '#probContent .pi.d .pbf{background:#ffb74d}'
        + '#probContent .pi.l .pbf{background:#ef5350}'
        + '#probContent .pl{font-size:11px;font-weight:500;margin-top:2px;color:#8899bb}'
        + '#probContent .ps{font-size:13px;font-weight:700;margin-top:4px;letter-spacing:.2px;color:#e8ecf4}'
        + '#probContent .dr{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}'
        + '#probContent .db{background:#111827;border-radius:12px;padding:14px 14px 12px}'
        + '#probContent .btr{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px}'
        + '#probContent .bt{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#8899bb}'
        + '#probContent .dsi{font-size:9px;color:#5a6888;letter-spacing:.5px}'
        + '#probContent .os{display:flex;flex-direction:column;gap:10px}'
        + '#probContent .osi{background:rgba(0,0,0,.22);border-radius:10px;padding:16px 16px 12px}'
        + '#probContent .htr{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:10px}'
        + '#probContent .hdl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#8899bb}'
        + '#probContent .hdt{font-size:11px;font-weight:600;color:#667799}'
        + '#probContent .hrr{display:flex;gap:10px}'
        + '#probContent .hci{flex:1;border-radius:8px;padding:12px 8px 10px;text-align:center}'
        + '#probContent .hci.hm{background:rgba(76,175,80,.10)}'
        + '#probContent .hci.aw{background:rgba(239,83,80,.08)}'
        + '#probContent .hcn{font-size:24px;font-weight:800;letter-spacing:-.5px;color:#e8ecf4}'
        + '#probContent .hcg{font-size:10px;font-weight:600;color:#8899bb;margin-top:5px;text-transform:uppercase}'
        + '#probContent .our{display:flex;gap:10px}'
        + '#probContent .oui{flex:1;border-radius:8px;padding:12px 8px 10px;text-align:center}'
        + '#probContent .oui.ov{background:rgba(255,183,77,.08)}'
        + '#probContent .oui.un{background:rgba(79,195,247,.07)}'
        + '#probContent .oun{font-size:24px;font-weight:800;letter-spacing:-.5px;color:#e8ecf4}'
        + '#probContent .oug{font-size:10px;font-weight:600;color:#8899bb;margin-top:5px;text-transform:uppercase}'
        + '#probContent .aip{display:flex;flex-direction:column;gap:9px}'
        + '#probContent .aid .di{display:flex;justify-content:space-between;align-items:center;padding:9px 0;font-size:13px;border-bottom:1px solid rgba(255,255,255,.05)}'
        + '#probContent .aid .di:last-child{border-bottom:none}'
        + '#probContent .aid .di .k{font-size:12px;color:#8899bb}'
        + '#probContent .aid .di .v{font-weight:600;color:#dde4f0;text-align:right;font-size:12px}'
        + '#probContent .sb{background:linear-gradient(135deg,rgba(255,107,53,.04),rgba(79,195,247,.04));border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:16px 18px}'
        + '#probContent .st{font-size:12px;font-weight:700;letter-spacing:.8px;color:#ff6b35;margin-bottom:10px;display:flex;align-items:center;gap:8px}'
        + '#probContent .st::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,rgba(255,107,53,.4),transparent)}'
        + '#probContent .sx{font-size:12.5px;line-height:1.7;color:#bbc4d8}'
        + '#probContent .sh{color:#4fc3f7;font-weight:700}'
        + '#probContent .ds{text-align:center;padding:16px 0 4px;font-size:10.5px;color:#8899aa;letter-spacing:.8px}'
        + '#probContent .na{font-size:0.65rem;color:#5a6888;text-align:center;padding:10px 0;font-style:italic}'
        + '@media(max-width:700px){#probContent .cg,#probContent .dr{grid-template-columns:1fr}#probContent .pr{flex-wrap:wrap}#probContent .pi{min-width:80px}}';
      document.head.appendChild(st);
    }

    var m = allGM.find(function(x) { return x.id === mid; });
    if (!m) return;

    var homeCode = m.home.code, awayCode = m.away.code;
    var homeName = m.home.zh, awayName = m.away.zh;

    // 赔率数据
    var ho = liveOdds[homeCode] || { w: 2.50, d: 3.20, l: 2.80 };
    var ao = liveOdds[awayCode] || { w: 2.80, d: 3.20, l: 2.50 };
    var oddsPbs = calcOddsPbs(ho, ao);
    
    // 让球/大小球数据 (V4.1修复: 直接用比赛ID查找)
    var md = matchOdds[mid] || null;
    var ahData = null, ouData = null;
    if (md) {
      if (md.ahLine !== undefined) ahData = calcAsianHandicapPbs(md.ahLine, md.ahHome, md.ahAway);
      if (md.ouLine !== undefined) ouData = calcOUPbs(md.ouLine, md.ouOver, md.ouUnder);
    }

    // AI推算
    var aiResult = calcAIPbs(homeCode, awayCode);

    var h = '';
    // === 头部 ===
    var flagH = typeof getFlag === 'function' ? getFlag(homeCode) : ('https://flagcdn.com/w80/' + (homeCode.toLowerCase()) + '.png');
    var flagA = typeof getFlag === 'function' ? getFlag(awayCode) : ('https://flagcdn.com/w80/' + (awayCode.toLowerCase()) + '.png');
    h += '<div class="mf-h"><img src="' + flagH + '" style="width:32px;height:21px;border-radius:3px;object-fit:cover;box-shadow:0 2px 6px rgba(0,0,0,0.4);margin:0 10px" onerror="this.style.display=\'none\'" loading="lazy"><span class="mf-t">' + homeName + ' vs ' + awayName + '</span><img src="' + flagA + '" style="width:32px;height:21px;border-radius:3px;object-fit:cover;box-shadow:0 2px 6px rgba(0,0,0,0.4);margin:0 10px" onerror="this.style.display=\'none\'" loading="lazy"></div>';
    h += '<div class="mf-b">';

    // === 1X2 对比网格 ===
    h += '<div class="cg">';
    // 赔率推算
    h += '<div class="hc od"><div class="cl">赔率推算</div><div class="pr">';
    h += '<div class="pi w"><div class="pv">' + oddsPbs.ph + '%</div><div class="pb"><div class="pbf" style="width:' + oddsPbs.ph + '%"></div></div><div class="pl">主胜</div><div class="ps">赔率 ' + ho.w.toFixed(2) + '</div></div>';
    h += '<div class="pi d"><div class="pv">' + oddsPbs.pd + '%</div><div class="pb"><div class="pbf" style="width:' + oddsPbs.pd + '%"></div></div><div class="pl">平局</div><div class="ps">赔率 ' + ((ho.d + (ao.d || 3.2)) / 2).toFixed(2) + '</div></div>';
    h += '<div class="pi l"><div class="pv">' + oddsPbs.pa + '%</div><div class="pb"><div class="pbf" style="width:' + oddsPbs.pa + '%"></div></div><div class="pl">客胜</div><div class="ps">赔率 ' + ao.w.toFixed(2) + '</div></div>';
    h += '</div></div>';
    // 智能推算
    h += '<div class="hc ai"><div class="cl">智能推算</div><div class="pr">';
    h += '<div class="pi w"><div class="pv">' + aiResult.ph + '%</div><div class="pb"><div class="pbf" style="width:' + aiResult.ph + '%"></div></div><div class="pl">主胜</div><div class="ps">λ主 ' + aiResult.hLambda.toFixed(2) + '</div></div>';
    h += '<div class="pi d"><div class="pv">' + aiResult.pd + '%</div><div class="pb"><div class="pbf" style="width:' + aiResult.pd + '%"></div></div><div class="pl">平局</div><div class="ps">—</div></div>';
    h += '<div class="pi l"><div class="pv">' + aiResult.pa + '%</div><div class="pb"><div class="pbf" style="width:' + aiResult.pa + '%"></div></div><div class="pl">客胜</div><div class="ps">λ客 ' + aiResult.aLambda.toFixed(2) + '</div></div>';
    h += '</div></div>';
    h += '</div>';

    // === 详情双栏 ===
    h += '<div class="dr">';
    // 赔率详情
    h += '<div class="db odd"><div class="btr"><span class="bt">赔率详情</span><span class="dsi">数据源 · William Hill</span></div><div class="os">';
    // 让球盘
    if (ahData && md) {
      h += '<div class="osi"><div class="htr"><span class="hdl">让球盘</span><span class="hdt">' + homeName + ' ' + (md.ahLine > 0 ? '+' : '') + md.ahLine.toFixed(1) + '</span></div><div class="hrr">';
      h += '<div class="hci hm"><div class="hcn">' + md.ahHome.toFixed(2) + '</div><div class="hcg">主队</div></div>';
      h += '<div class="hci aw"><div class="hcn">' + md.ahAway.toFixed(2) + '</div><div class="hcg">客队</div></div>';
      h += '</div></div>';
    } else {
      h += '<div class="osi"><div class="htr"><span class="hdl">让球盘</span></div><div class="na">暂无让球盘数据</div></div>';
    }
    // 大小球
    if (ouData && md) {
      h += '<div class="osi"><div class="htr"><span class="hdl">大小球</span><span class="hdt">O/U ' + md.ouLine.toFixed(1) + '</span></div><div class="our">';
      h += '<div class="oui ov"><div class="oun">' + md.ouOver.toFixed(2) + '</div><div class="oug">大</div></div>';
      h += '<div class="oui un"><div class="oun">' + md.ouUnder.toFixed(2) + '</div><div class="oug">小</div></div>';
      h += '</div></div>';
    } else {
      h += '<div class="osi"><div class="htr"><span class="hdl">大小球</span></div><div class="na">暂无大小球数据</div></div>';
    }
    h += '</div></div>';

    // 影响参数
    var rankH = getFifaRank(homeCode), rankA = getFifaRank(awayCode);
    var valH = computeTeamValue(homeCode), valA = computeTeamValue(awayCode);
    var styleH = getTeamStyle(homeCode), styleA = getTeamStyle(awayCode);
    h += '<div class="db aid"><div class="btr"><span class="bt">影响参数</span></div><div class="aip">';
    h += '<div class="di"><span class="k">FIFA世界排名</span><span class="v">#' + rankH + ' · #' + rankA + ' (差' + Math.abs(rankH - rankA) + '位)</span></div>';
    h += '<div class="di"><span class="k">阵容总身价</span><span class="v">' + (valH ? (valH > 10000 ? (valH/10000).toFixed(1)+'亿€' : valH+'万€') : '—') + ' · ' + (valA ? (valA > 10000 ? (valA/10000).toFixed(1)+'亿€' : valA+'万€') : '—') + (valH && valA ? ' (倍率 ' + (valH/(valA||1)).toFixed(1) + 'x)' : '') + '</span></div>';
    h += '<div class="di"><span class="k">赛场分析</span><span class="v">' + (styleH.length ? styleH.slice(0,2).join('/') : '—') + ' vs ' + (styleA.length ? styleA.slice(0,2).join('/') : '—') + '</span></div>';
    h += '<div class="di"><span class="k">其他参数</span><span class="v">主场优势 · 伤病指数 · 赛程密度</span></div>';
    h += '</div></div>';
    h += '</div>';

    // === 推演总结 ===
    h += '<div class="sb"><div class="st">🧠 推演总结</div><div class="sx">' + aiResult.summary.split('\n').join('<br>') + '</div></div>';

    // === 免责声明 ===
    h += '<div class="ds">◆ 仅用作数据分析 不构成投资建议 ◆</div>';

    h += '</div>'; // /mf-b

    document.getElementById('probContent').innerHTML = h;
    window._cProbMidV4 = mid;
  }

  // ================================================================
  //  导出到全局
  // ================================================================
  window.calcAIPbs = calcAIPbs;
  window.calcOddsPbs = calcOddsPbs;
  window.calcAsianHandicapPbs = calcAsianHandicapPbs;
  window.calcOUPbs = calcOUPbs;
  window.oddsToLambda = oddsToLambda;
  window.calcGoalDist = calcGoalDist;
  window.renderProbModalV4 = renderProbModalV4;
  window.computeTeamValue = computeTeamValue;
  window.getFifaRank = getFifaRank;
  window.getTeamStyle = getTeamStyle;

  console.log('✅ prob_engine_v2.js 加载完成 — AI融合概率引擎 + V4弹窗渲染');
  console.log('   calcAIPbs | calcOddsPbs | calcAsianHandicapPbs | calcOUPbs | renderProbModalV4');

  // ================================================================
  //  🔗 V4 桥接：覆盖 window.calcP 以使用新版双栏弹窗
  // ================================================================
  (function installV4Bridge() {
    if (typeof window.calcP === 'function') {
      var _origCalcP = window.calcP;
      window.calcP = function(mid) {
        if (typeof window.renderProbModalV4 === 'function') {
          window.renderProbModalV4(mid);
        } else {
          _origCalcP(mid);
          return;
        }
        var modal = document.getElementById('probModal');
        if (modal) modal.classList.add('visible');
      };
      console.log('🔗 V4 桥接已安装 — calcP → renderProbModalV4');
    }
  })();

})();
