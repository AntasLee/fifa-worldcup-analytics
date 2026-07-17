// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
/**
 * ============================================================
 *  prob_engine.js — 增强概率计算引擎 (V1.82)
 *  Phase 3: AI融合推算(8因子) + 历史底蕴 + 本届表现(淘汰赛权重上调) + 综合推算
 *  依赖: oddsdata.js, groupsdata_v2.js, matchdata_2026.js
 *        squaddata.js, coachdata.js, venuedata.js
 * ============================================================
 */
(function() {
  'use strict';

  // ========== 桥接外部数据 ==========
  const teamDB = window.teamDB || {};
  const matchOdds = window.matchOdds || {};
  const knockoutOdds = window.knockoutOdds || {};
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
    return td ? td.r : 50;
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
    return null;
  }

  /** 获取教练姓名 */
  function getCoachName(code) {
    try {
      if (typeof window.coachDB !== 'undefined' && window.coachDB[code] && window.coachDB[code].n) {
        return window.coachDB[code].n;
      }
    } catch (e) { }
    const td = teamDB[code];
    if (td && td.c && td.c.n) return td.c.n;
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

  // ========== 🆕 新增：球队阵容分析辅助函数 ==========

  /** 计算球队平均年龄 (从 squadDB 动态计算, 优先 a 字段, 回退 dob 推算) */
  function computeAvgAge(code) {
    try {
      if (typeof window.squadDB === 'undefined' || !window.squadDB[code]) return null;
      const team = window.squadDB[code];
      let totalAge = 0, count = 0;
      const now = new Date();
      ['gk', 'df', 'mf', 'fw'].forEach(pos => {
        if (team[pos]) {
          team[pos].forEach(p => {
            let age = parseFloat(p.a);
            if ((isNaN(age) || age <= 0) && p.dob) {
              const dob = new Date(p.dob);
              age = now.getFullYear() - dob.getFullYear();
              const m = now.getMonth() - dob.getMonth();
              if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
            }
            if (!isNaN(age) && age > 0) { totalAge += age; count++; }
          });
        }
      });
      return count > 0 ? +(totalAge / count).toFixed(1) : null;
    } catch (e) { return null; }
  }

  /** 计算五大联赛占比 (%) */
  function computeTop5LeaguePct(code) {
    try {
      if (typeof window.squadDB === 'undefined' || !window.squadDB[code]) return null;
      const team = window.squadDB[code];
      const top5Codes = ['ENG', 'ESP', 'GER', 'ITA', 'FRA'];
      let total = 0, top5 = 0;
      ['gk', 'df', 'mf', 'fw'].forEach(pos => {
        if (team[pos]) {
          team[pos].forEach(p => {
            total++;
            const club = (p.c || '').toUpperCase();
            if (top5Codes.some(lc => club.includes(lc))) top5++;
          });
        }
      });
      return total > 0 ? Math.round(top5 / total * 100) : null;
    } catch (e) { return null; }
  }

  /** 计算球队平均身高 (cm) */
  function computeAvgHeight(code) {
    try {
      if (typeof window.squadDB === 'undefined' || !window.squadDB[code]) return null;
      const team = window.squadDB[code];
      let totalH = 0, count = 0;
      ['gk', 'df', 'mf', 'fw'].forEach(pos => {
        if (team[pos]) {
          team[pos].forEach(p => {
            const h = parseFloat(p.h);
            if (!isNaN(h) && h > 150) { totalH += h; count++; }
          });
        }
      });
      return count > 0 ? +(totalH / count).toFixed(1) : null;
    } catch (e) { return null; }
  }

  /** 计算赛场因素综合分 (海拔/草皮/时区/驻地距离) */
  // V1.74 修复: 通过 venueMatchMapping → venues2026 正确链路获取场馆数据
  function computeVenueFactor(homeCode, awayCode, mid) {
    let score = 0;
    try {
      const VFC = window.VENUE_FACTOR_CONFIG;
      if (!VFC) return 0;
      
      // ── 步骤1: 通过 venueMatchMapping 获取比赛对应场馆 ──
      // 注意: venueMatchMapping 是 var 声明 (在 window 上), venues2026/teamBaseCamps2026 是 const 声明 (全局作用域但不在 window 上)
      const mapping = (typeof window.venueMatchMapping !== 'undefined') ? window.venueMatchMapping : null;
      const venues  = (typeof venues2026 !== 'undefined') ? venues2026 : null;
      if (!mapping || !venues) return 0;
      
      // 优先 match.id 精确匹配，回退到其他 key 格式
      let venueEntry = null;
      if (mid && mapping[mid]) {
        venueEntry = mapping[mid];
      }
      if (!venueEntry && mid) {
        // 尝试从 allGM 获取 group 信息
        const m = allGM.find(function(x) { return x.id === mid; });
        if (m && m.gid && mapping[m.gid]) {
          venueEntry = mapping[m.gid];
        }
      }
      if (!venueEntry) return 0;
      
      const venueId = venueEntry.id;
      const vData = venues[venueId];
      if (!vData) return 0;
      
      // ── 步骤2: 海拔影响 ──
      const elev = vData.elevation || 0;
      const altKeys = Object.keys(VFC.altitudeEffect).map(Number).sort((a,b) => a-b);
      let altAdj = 0;
      for (const k of altKeys) {
        if (elev >= k) altAdj = VFC.altitudeEffect[k].adj;
      }
      score += altAdj;
      
      // ── 步骤3: 草皮影响 (英→中转译) ──
      const grassMap = { 'natural': '天然草', 'hybrid': '混合草', 'artificial': '人工草' };
      const surface = grassMap[vData.grass] || '天然草';
      if (VFC.surfaceEffect[surface]) {
        score += VFC.surfaceEffect[surface].adj;
      }
      
      // ── 步骤4: 时区差异影响 ──
      const teamBaseCamps = (typeof teamBaseCamps2026 !== 'undefined') ? teamBaseCamps2026 : null;
      if (teamBaseCamps) {
        const campH = teamBaseCamps[homeCode];
        const campA = teamBaseCamps[awayCode];
        const venueTzOffset = (typeof getTimezoneOffset === 'function') 
          ? getTimezoneOffset(vData.timezone) : 0;
        if (campH && campA) {
          const baseTzOffsetH = Math.round(campH.coord.lng / 15);
          const baseTzOffsetA = Math.round(campA.coord.lng / 15);
          const tzDiffH = Math.abs(venueTzOffset - baseTzOffsetH);
          const tzDiffA = Math.abs(venueTzOffset - baseTzOffsetA);
          const tzKeys = Object.keys(VFC.timezoneEffect).map(Number).sort((a,b) => a-b);
          let tzAdjH = 0, tzAdjA = 0;
          for (const k of tzKeys) {
            if (tzDiffH >= k) tzAdjH = VFC.timezoneEffect[k].adj;
            if (tzDiffA >= k) tzAdjA = VFC.timezoneEffect[k].adj;
          }
          score += (tzAdjH - tzAdjA) * 0.5; // 时区差异净影响
        }
      }
      
      // ── 步骤5: 驻地距离影响 ──
      if (teamBaseCamps && typeof haversineKm === 'function') {
        const campH = teamBaseCamps[homeCode];
        const campA = teamBaseCamps[awayCode];
        if (campH && campA) {
          const distH = haversineKm(campH.coord.lat, campH.coord.lng, vData.coord.lat, vData.coord.lng);
          const distA = haversineKm(campA.coord.lat, campA.coord.lng, vData.coord.lat, vData.coord.lng);
          const distKeys = Object.keys(VFC.baseDistanceEffect).map(Number).sort((a,b) => a-b);
          let distAdjH = 0, distAdjA = 0;
          for (const k of distKeys) {
            if (distH >= k) distAdjH = VFC.baseDistanceEffect[k].adj;
            if (distA >= k) distAdjA = VFC.baseDistanceEffect[k].adj;
          }
          score += (distAdjH - distAdjA) * 0.7; // 距离差异净影响
        }
      }
      
    } catch (e) { /* 静默回退 */ }
    return score;
  }

  // ========== 🆕 历史底蕴因子 (Historical Pedigree) ==========

  /**
   * calcHistoryPedigree — 计算球队的"世界杯血统"分数
   * 数据源: window.HISTORY_INDEX (来自 matchdata_2026.js)
   * 半衰期: 8年，越久远的成绩影响越小
   * @returns {number} 归一化到 [-0.12, +0.12] 的调整值 (V1.74 扩大)
   */
  function calcHistoryPedigree(code) {
    const HI = window.HISTORY_INDEX;
    if (!HI || !HI[code] || HI[code].length === 0) return 0;
    
    const records = HI[code];
    const HALF_LIFE = 8; // 年
    const LAMBDA = Math.log(2) / HALF_LIFE;
    const CURRENT_YEAR = 2026;
    
    // 阶段得分映射
    const STAGE_SCORE = { W: 7, F: 6, SF: 5, QF: 4, R16: 3, GS: 1 };
    
    let totalScore = 0;
    records.forEach(rec => {
      const yearsAgo = CURRENT_YEAR - rec.year;
      const decay = Math.exp(-LAMBDA * yearsAgo);
      const stageScore = STAGE_SCORE[rec.stage] || 1;
      // 小组赛胜率微调
      const gamesPlayed = rec.win + rec.draw + rec.loss;
      const winRate = gamesPlayed > 0 ? rec.win / gamesPlayed : 0;
      const winBonus = Math.max(0, (winRate - 0.33)) * 0.5;
      totalScore += (stageScore + winBonus) * decay;
    });
    
    // 归一化: 理论最大值约为 7*1.0 + 7*0.71 + ... ≈ 14
    // 输出范围 [-0.12, +0.12]  V1.74: 扩大范围以增强差距感知
    const normalized = (totalScore / 10) * 0.10;
    return Math.max(-0.12, Math.min(0.12, normalized - 0.03));
  }

  // ========== 🆕 本届表现因子 (Tournament Form) ==========

  /**
   * calcTournamentForm — 计算球队在本届世界杯中的动态表现分
   * 数据源: window.wc2026AllMatches (来自 matchdata_2026.js)
   * 渐进激活: 赛前0% → 1场8% → 2场15% → 3场24% → 4+场26%
   * 淘汰赛额外激活: roundPressure 1.50-1.80 替代小组赛 1.0-1.40
   * @returns {{ delta: number, completedMatches: number, formWeight: number }}
   */
  function calcTournamentForm(code, matchKey) {
    // V1.82: 淘汰赛阶段3场样本充足，上调权重；FWS 支持覆盖
    const allMatches = window.wc2026AllMatches;
    const FWS = window.FORM_WEIGHT_SCHEDULE || { 0:0, 1:0.08, 2:0.15, 3:0.24, 4:0.26, 5:0.26, 6:0.26, 7:0.26 };
    
    if (!allMatches) return { delta: 0, completedMatches: 0, formWeight: 0, details: [] };
    
    // 查找该球队的所有已完赛比赛
    const completedMatches = [];
    Object.keys(allMatches).forEach(key => {
      const match = allMatches[key];
      if (!match.score || match.score.sh === null || match.score.sa === null) return; // 未赛
      const parts = key.split('|');
      if (parts.length < 4) return;
      const home = parts[2], away = parts[3];
      if (home !== code && away !== code) return;
      if (key === matchKey) return; // 排除当前比赛自身，防止自循环
      
      const isHome = (home === code);
      const opponentCode = isHome ? away : home;
      const opponentRank = getFifaRank(opponentCode);
      const opponentStrength = typeof window.getOpponentStrength === 'function' 
        ? window.getOpponentStrength(opponentRank) : 1.0;
      
      const gf = isHome ? match.score.sh : match.score.sa;
      const ga = isHome ? match.score.sa : match.score.sh;
      
      // 基础分 — 胜3/平1/负0
      let baseScore = gf > ga ? 3 : (gf === ga ? 1 : 0);

      // 净胜球修正 (±0.6)：大胜加分，惜败少扣
      const gd = gf - ga;
      const gdSign = gd > 0 ? 1 : (gd < 0 ? -1 : 0);
      const gdBonus = Math.tanh(Math.abs(gd) * 0.3) * 0.6 * gdSign;

      // 媒体评分修正 (±0.3)：表现好坏体现为连续值
      let mediaBonus = 0;
      if (match.mediaRating) {
        const mr = isHome ? match.mediaRating.home : match.mediaRating.away;
        if (mr && typeof mr.score === 'number') mediaBonus = (mr.score - 5) * 0.06;
      }

      baseScore = baseScore + gdBonus + mediaBonus;
      
      // 阶段系数
      const stage = match.stage === 'group' ? null : match.stage;
      const stageMult = typeof window.getStageMultiplier === 'function'
        ? window.getStageMultiplier(match.round || 1, stage) : 1.0;
      
      const perfScore = baseScore * opponentStrength * stageMult;
      
      completedMatches.push({
        key, isHome, opponentCode, gf, ga,
        baseScore, opponentStrength, stageMult,
        perfScore, round: match.round || 1
      });
    });
    
    const n = completedMatches.length;
    if (n === 0) return { delta: 0, completedMatches: 0, formWeight: 0, details: [] };
    
    // 趋势加权: 最近一场 ×1.5, 倒数第二场 ×1.2, 更早 ×1.0
    const sorted = completedMatches.sort((a, b) => {
      const aKey = a.key, bKey = b.key;
      return bKey.localeCompare(aKey); // 按key排序近似时间顺序
    });
    
    let weightedSum = 0, weightTotal = 0;
    const recencyWeights = [1.5, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0];
    sorted.forEach((m, i) => {
      const w = recencyWeights[Math.min(i, recencyWeights.length - 1)];
      weightedSum += m.perfScore * w;
      weightTotal += w;
    });
    
    const avgPerf = weightTotal > 0 ? weightedSum / weightTotal : 0;
    
    // 进球效率加分
    const totalGF = completedMatches.reduce((s, m) => s + m.gf, 0);
    const totalGA = completedMatches.reduce((s, m) => s + m.ga, 0);
    const gfBonus = (totalGF / n - 1.5) * 0.02;
    const gaBonus = (1.5 - totalGA / n) * 0.02;
    
    const rawDelta = (avgPerf - 1.5) * 0.08 + gfBonus + gaBonus;
    const formWeight = FWS[Math.min(n, 7)] || 0.22;
    
    return {
      delta: Math.max(-0.25, Math.min(0.25, rawDelta)),
      completedMatches: n,
      formWeight: formWeight,
      details: sorted
    };
  }

  // ========== 赔率反推概率 (1X2) ==========

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

  function calcAsianHandicapPbs(ahLine, ahHome, ahAway) {
    if (!ahHome || !ahAway) return null;
    const rHome = 1 / ahHome;
    const rAway = 1 / ahAway;
    const total = rHome + rAway;
    return {
      probCover: (rHome / total * 100).toFixed(1),
      probNotCover: (rAway / total * 100).toFixed(1)
    };
  }

  // ========== 大小球概率反推 ==========

  function calcOUPbs(ouLine, ouOver, ouUnder) {
    if (!ouOver || !ouUnder) return null;
    const rOver = 1 / ouOver;
    const rUnder = 1 / ouUnder;
    const total = rOver + rUnder;
    const probOver = rOver / total;
    const line = Math.abs(parseFloat(ouLine) || 2.5);
    let lambda = line;
    for (let iter = 0; iter < 20; iter++) {
      let cumProb = 0;
      for (let k = 0; k <= Math.floor(line); k++) cumProb += poisson(lambda, k);
      const frac = line - Math.floor(line);
      const probAtLine = cumProb + frac * poisson(lambda, Math.floor(line) + 1);
      const error = probAtLine - (1 - probOver);
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

  // ========== 赔率 → λ 推算 ==========

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

  // ========== 进球分布计算 ==========

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
   //  🔥 AI 融合概率推算 (V1.82: 8因子 + 历史底蕴 + 本届表现·淘汰赛加压)
  // ================================================================

  /**
   * calcAIPbs — AI多参数融合概率计算 (V1.82)
   * 
   * 8大因子:
   *   1. FIFA排名差 → 实力基础分
   *   2. 球员身价比 → 阵容深度
   *   3. 战术风格匹配度 → 克制关系
   *   4. 教练经验 → 大赛指挥能力
   *   5. 平均年龄 → 体能/经验平衡
   *   6. 五大联赛占比 → 竞技水平
   *   7. 身高对抗 → 定位球/空中优势
   *   8. 赛场因素 → 海拔/草皮/时区
   * 
   * 附加因子:
   *   A. 历史底蕴 → 世界杯血统 (固定权重3~5%)
   *   B. 本届表现 → 动态激活 (渐进权重0%~22%)
   */
  function calcAIPbs(homeCode, awayCode, mid, round, matchKey) {
    // ===== 1. FIFA排名因子 =====
    const rankH = getFifaRank(homeCode);
    const rankA = getFifaRank(awayCode);
    const rankDiff = rankA - rankH;
    const rankFactor = Math.tanh(rankDiff / 60) * 0.35;

    // ===== 2. 球员身价因子 =====
    const valH = computeTeamValue(homeCode);
    const valA = computeTeamValue(awayCode);
    let valueFactor = 0;
    if (valH && valA && valH > 0 && valA > 0) {
      const ratio = valH / (valA + 0.01);
      valueFactor = Math.tanh(Math.log(ratio) * 0.7) * 0.22;
    }

    // ===== 3. 战术风格因子 =====
    const styleH = getTeamStyle(homeCode);
    const styleA = getTeamStyle(awayCode);
    let styleBonus = 0;
    const attackKeywords = ['进攻', '边路', '爆破', '冲击', '速度', '压迫', '逼抢', '高位'];
    const defenseKeywords = ['防守', '铁血', '反击', '低位', '紧凑', '链式'];
    const controlKeywords = ['传控', '控球', '渗透', '技术', '短传'];
    
    const hAtt = styleH.some(s => attackKeywords.some(k => s.includes(k)));
    const hDef = styleH.some(s => defenseKeywords.some(k => s.includes(k)));
    const hCtrl = styleH.some(s => controlKeywords.some(k => s.includes(k)));
    const aAtt = styleA.some(s => attackKeywords.some(k => s.includes(k)));
    const aDef = styleA.some(s => defenseKeywords.some(k => s.includes(k)));
    const aCtrl = styleA.some(s => controlKeywords.some(k => s.includes(k)));
    
    // 攻对防优势
    if (hAtt && !aDef) styleBonus += 0.07;
    if (aAtt && !hDef) styleBonus -= 0.07;
    // 反击克制传控
    if (hDef && aCtrl) styleBonus += 0.05;
    if (aDef && hCtrl) styleBonus -= 0.05;
    // 高位逼抢克制慢速控球
    if (hAtt && aCtrl) styleBonus += 0.04;
    if (aAtt && hCtrl) styleBonus -= 0.04;

    // ===== 4. 教练经验因子 =====
    const coachAgeH = getCoachAge(homeCode);
    const coachAgeA = getCoachAge(awayCode);
    let coachFactor = 0;
    if (coachAgeH !== null && coachAgeA !== null) {
      // 最优教练年龄区间: 48-58岁 (经验与活力的平衡点)
      const optimalMin = 48, optimalMax = 58;
      const scoreCoach = function(age) {
        if (age >= optimalMin && age <= optimalMax) return 1.0;
        if (age < optimalMin) return Math.max(0.4, 1 - (optimalMin - age) * 0.03);
        return Math.max(0.4, 1 - (age - optimalMax) * 0.02);
      };
      const cScoreH = scoreCoach(coachAgeH);
      const cScoreA = scoreCoach(coachAgeA);
      coachFactor = (cScoreH - cScoreA) * 0.08;
    }

    // ===== 5. 平均年龄因子 =====
    const avgAgeH = computeAvgAge(homeCode);
    const avgAgeA = computeAvgAge(awayCode);
    let ageFactor = 0;
    if (avgAgeH !== null && avgAgeA !== null) {
      // 最优平均年龄: 26-29岁
      const scoreAge = function(age) {
        if (age >= 26 && age <= 29) return 1.0;
        if (age < 26) return Math.max(0.5, 1 - (26 - age) * 0.1);
        return Math.max(0.5, 1 - (age - 29) * 0.08);
      };
      ageFactor = (scoreAge(avgAgeH) - scoreAge(avgAgeA)) * 0.06;
    }

    // ===== 6. 五大联赛占比因子 =====
    const top5H = computeTop5LeaguePct(homeCode);
    const top5A = computeTop5LeaguePct(awayCode);
    let leagueFactor = 0;
    if (top5H !== null && top5A !== null) {
      const diff = top5H - top5A;
      leagueFactor = Math.tanh(diff / 40) * 0.10;
    }

    // ===== 7. 身高对抗因子 =====
    const heightH = computeAvgHeight(homeCode);
    const heightA = computeAvgHeight(awayCode);
    let heightFactor = 0;
    if (heightH !== null && heightA !== null) {
      const diff = heightH - heightA;
      heightFactor = Math.tanh(diff / 10) * 0.05;
    }

    // ===== 8. 赛场因素 =====
    const venueFactor = mid ? computeVenueFactor(homeCode, awayCode, mid) : 0;

    // ===== A. 历史底蕴因子 =====
    const histH = calcHistoryPedigree(homeCode);
    const histA = calcHistoryPedigree(awayCode);
    // V1.74: 非线性映射 — 小差距温和，大差距加速放大（巴西vs新军 > 德vs荷）
    const rawHistDiff = histH - histA;
    const historyDelta = Math.sign(rawHistDiff) * Math.pow(Math.abs(rawHistDiff) * 8, 1.5) * 0.06;

    // ===== B. 本届表现因子 =====
    const formH = calcTournamentForm(homeCode, matchKey);
    const formA = calcTournamentForm(awayCode, matchKey);
    // 晋级压力系数: 淘汰赛>小组R3>R2>R1
    var roundPressure = 1.0;
    if (matchKey) {
      var koStage = matchKey.split('|')[1];
      if (koStage === 'FINAL') roundPressure = 1.80;
      else if (koStage === 'SF' || koStage === 'TP') roundPressure = 1.65;
      else if (koStage === 'QF') roundPressure = 1.55;
      else if (koStage === 'R16' || koStage === 'R32') roundPressure = 1.50;
      else if (round === 3) roundPressure = 1.40;
      else if (round === 2) roundPressure = 1.20;
    } else {
      if (round === 3) roundPressure = 1.40;
      else if (round === 2) roundPressure = 1.20;
    }
    const formDeltaHome = formH.delta * formH.formWeight * roundPressure;
    const formDeltaAway = formA.delta * formA.formWeight * roundPressure;

    // ===== 综合 λ 计算 =====
    const baseLambda = 1.35;
    
    const staticFactors = rankFactor + valueFactor + styleBonus 
                        + coachFactor + ageFactor + leagueFactor 
                        + heightFactor + venueFactor;
    
    const totalAdjust = staticFactors + historyDelta + formDeltaHome - formDeltaAway;
    
    const hLambda = Math.max(0.3, Math.min(5.0, baseLambda + totalAdjust * 1.15));
    const aLambda = Math.max(0.3, Math.min(5.0, baseLambda - totalAdjust * 0.85));

    // ===== 泊松分布计算胜平负 =====
    const maxGoals = 10;
    let phTotal = 0, pdTotal = 0, paTotal = 0;
    const scoreProbs = [];

    for (let h = 0; h <= maxGoals; h++) {
      for (let a = 0; a <= maxGoals; a++) {
        const p = poisson(hLambda, h) * poisson(aLambda, a);
        if (h > a) phTotal += p;
        else if (h === a) pdTotal += p;
        else paTotal += p;
        if (p > 0.005) {
          scoreProbs.push({ h, a, p });
        }
      }
    }

    const totalP = phTotal + pdTotal + paTotal;
    const ph = totalP > 0 ? (phTotal / totalP * 100) : 33.3;
    const pd = totalP > 0 ? (pdTotal / totalP * 100) : 33.3;
    const pa = totalP > 0 ? (paTotal / totalP * 100) : 33.3;

    // 比分排序 (取前15)
    scoreProbs.sort((a, b) => b.p - a.p);
    const topScores = scoreProbs.slice(0, 15).map(s => ({
      score: s.h + ':' + s.a,
      prob: +(s.p * 100).toFixed(1)
    }));

    // ===== 生成推演总结 =====
    const winner = ph > pa ? 'home' : (pa > ph ? 'away' : 'draw');
    const favName = winner === 'home' ? (teamMap[homeCode] ? teamMap[homeCode].zh : homeCode) :
                    winner === 'away' ? (teamMap[awayCode] ? teamMap[awayCode].zh : awayCode) : '双方';
    const confLevel = Math.max(ph, pd, pa) > 55 ? '较高' :
                      Math.max(ph, pd, pa) > 45 ? '中等' : '较低';

    const factors = {
      rankDiff, rankFactor,
      valueH: valH, valueA: valA, valueFactor,
      styleBonus,
      coachAgeH, coachAgeA, coachFactor,
      avgAgeH, avgAgeA, ageFactor,
      top5H, top5A, leagueFactor,
      heightH, heightA, heightFactor,
      venueFactor,
      historyDelta,
      formH, formA
    };

    const summary = '【AI推演总结】\n' +
      '📊 模型：泊松分布 + 8参数加权融合\n' +
      '🏆 FIFA排名：#' + rankH + ' vs #' + rankA + ' (差' + Math.abs(rankDiff) + '位)\n' +
      '💰 身价：' + (valH ? (valH>10000?(valH/10000).toFixed(1)+'亿' : valH+'万') : '?') + ' vs ' +
                    (valA ? (valA>10000?(valA/10000).toFixed(1)+'亿' : valA+'万') : '?') + '\n' +
      '⚽ 预期进球：主队 λ=' + hLambda.toFixed(2) + ' / 客队 λ=' + aLambda.toFixed(2) + '\n' +
      '📈 胜平负概率：主胜 ' + ph.toFixed(1) + '% | 平局 ' + pd.toFixed(1) + '% | 客胜 ' + pa.toFixed(1) + '%\n' +
      '🎯 倾向：' + favName + (winner !== 'draw' ? '稍占优势' : '势均力敌') + ' (置信度：' + confLevel + ')\n' +
      '💡 考量因子：FIFA排名 · 阵容身价 · 战术风格 · 教练经验 · 平均年龄 · 五大联赛占比 · 身高对抗 · 赛场因素';

    return {
      ph: ph.toFixed(1),
      pd: pd.toFixed(1),
      pa: pa.toFixed(1),
      hLambda, aLambda,
      summary,
      factors,
      topScores,
      confLevel
    };
  }

  // ================================================================
  //  🆕 综合推算分析 (Composite Analysis)
  // ================================================================

  /**
   * computeCompositeAnalysis — 对比AI推算与赔率推算，生成综合分析
   */
  
  /**
   * calcBlendedScores — 融合赔率推算与智能推算的比分概率
   * 当两者高度统一时，赔率推算权重略微增大（55:45）
   * 存在分歧时，AI模型权重提升
   */
  function calcBlendedScores(aiResult, ho, ao, comp, hasRealOdds) {
    // 1. 赔率推算 λ（无真实赔率时回退到中立值，权重归零）
    const oddsLambda = oddsToLambda(ho.w || 2.50, ao.w || 2.80);
    
    // 2. AI推算 λ
    const aiHL = aiResult.hLambda;
    const aiAL = aiResult.aLambda;
    
    // 3. 根据一致性判定确定融合权重（无赔率时100%AI）
    let oddsW, aiW;
    if (!hasRealOdds) {
      oddsW = 0; aiW = 1.0;
    } else {
      const vl = comp.verdictLevel;
      if (vl === '高度统一')      { oddsW = 0.55; aiW = 0.45; }
      else if (vl === '基本一致')  { oddsW = 0.50; aiW = 0.50; }
      else if (vl === '存在分歧')  { oddsW = 0.35; aiW = 0.65; }
      else                        { oddsW = 0.25; aiW = 0.75; }
    }
    
    // 4. 双λ分别泊松展开 → 融合
    const MG = 10, all = [];
    let wT = 0, dT = 0, lT = 0;
    for (let h = 0; h <= MG; h++) {
      for (let a = 0; a <= MG; a++) {
        const pO = poisson(oddsLambda.hl, h) * poisson(oddsLambda.al, a);
        const pA = poisson(aiHL, h) * poisson(aiAL, a);
        const pB = pO * oddsW + pA * aiW;
        if (h > a) wT += pB; else if (h === a) dT += pB; else lT += pB;
        if (pB > 0.0001) all.push({ h, a, p: pB });
      }
    }
    const tP = wT + dT + lT;
    
    // 5. 分类排序
    const fmt = (arr) => arr.sort((x, y) => y.p - x.p).slice(0, 6)
      .map(s => ({ score: s.h + ':' + s.a, prob: +(s.p / tP * 100).toFixed(1) }));
    
    const winS  = fmt(all.filter(s => s.h > s.a));
    const drawS = fmt(all.filter(s => s.h === s.a));
    const lossS = fmt(all.filter(s => s.h < s.a));
    
    // 6. 各类型总概率 & 其他
    const winTP  = +(wT / tP * 100).toFixed(1);
    const drawTP = +(dT / tP * 100).toFixed(1);
    const lossTP = +(lT / tP * 100).toFixed(1);
    
    const sum = (arr) => arr.reduce((s, x) => s + x.prob, 0);
    const winO  = +(winTP  - sum(winS)).toFixed(1);
    const drawO = +(drawTP - sum(drawS)).toFixed(1);
    const lossO = +(lossTP - sum(lossS)).toFixed(1);
    
    return {
      winScores: winS, drawScores: drawS, lossScores: lossS,
      winTotalPct: winTP, drawTotalPct: drawTP, lossTotalPct: lossTP,
      winOther: winO, drawOther: drawO, lossOther: lossO,
      oddsWeight: oddsW, aiWeight: aiW
    };
  }

function computeCompositeAnalysis(aiResult, oddsPbs, homeCode, awayCode, factors) {
    const aiPH = parseFloat(aiResult.ph);
    const aiPD = parseFloat(aiResult.pd);
    const aiPA = parseFloat(aiResult.pa);
    const odPH = parseFloat(oddsPbs.ph);
    const odPD = parseFloat(oddsPbs.pd);
    const odPA = parseFloat(oddsPbs.pa);

    // 计算各结果偏差
    const deltaH = Math.abs(aiPH - odPH);
    const deltaD = Math.abs(aiPD - odPD);
    const deltaA = Math.abs(aiPA - odPA);
    const maxDelta = Math.max(deltaH, deltaD, deltaA);
    const avgDelta = (deltaH + deltaD + deltaA) / 3;

    // AI倾向 vs 赔率倾向
    const aiFav = aiPH > aiPA ? 'home' : (aiPA > aiPH ? 'away' : 'draw');
    const odFav = odPH > odPA ? 'home' : (odPA > odPH ? 'away' : 'draw');

    // 一致性判定
    let verdictLevel, verdictCls, verdictIcon, verdictBadge;
    if (maxDelta < 8 && aiFav === odFav) {
      verdictLevel = '高度统一';
      verdictCls = 'vb-high';
      verdictIcon = '🟢';
      verdictBadge = 'Δ ' + maxDelta.toFixed(1) + '%';
    } else if (maxDelta < 18 && aiFav === odFav) {
      verdictLevel = '基本一致';
      verdictCls = 'vb-consist';
      verdictIcon = '🔵';
      verdictBadge = 'Δ ' + maxDelta.toFixed(1) + '%';
    } else if (maxDelta < 30) {
      verdictLevel = '存在分歧';
      verdictCls = 'vb-diverge';
      verdictIcon = '🟠';
      verdictBadge = 'Δ ' + maxDelta.toFixed(1) + '%';
    } else {
      verdictLevel = '完全背离';
      verdictCls = 'vb-oppose';
      verdictIcon = '🔴';
      verdictBadge = 'Δ ' + maxDelta.toFixed(1) + '%';
    }

    // 市场效率评估
    const effPct = Math.max(20, Math.min(95, 100 - avgDelta * 1.8));
    
    // 分歧分析文本生成
    let analysisText = '';
    const hName = teamMap[homeCode] ? teamMap[homeCode].zh : homeCode;
    const aName = teamMap[awayCode] ? teamMap[awayCode].zh : awayCode;
    
    if (verdictLevel === '高度统一') {
      analysisText = '市场与AI模型对两队实力评估<span class="highlight">高度趋同</span>。';
      if (aiFav === 'home') analysisText += '多项因子一致指向' + hName + '占据优势，赔率市场充分消化了相关信息，AI的泊松λ值与赔率推算结果几乎重叠。';
      else if (aiFav === 'away') analysisText += '多项因子一致指向' + aName + '占据优势，赔率市场充分消化了相关信息。';
      else analysisText += '双方实力接近，市场定价与AI评估高度一致。';
    } else if (verdictLevel === '基本一致') {
      analysisText = '赔率与AI方向一致，但<span class="highlight">幅度有差异</span>。';
      if (odPH > aiPH && aiFav === 'home') {
        analysisText += '市场对' + hName + '的优势评估更为乐观（' + odPH.toFixed(1) + '% vs AI ' + aiPH.toFixed(1) + '%），AI模型考虑了更多隐性因素。';
      } else if (aiPH > odPH && aiFav === 'home') {
        analysisText += 'AI模型对' + hName + '的评估更为积极（' + aiPH.toFixed(1) + '% vs 市场 ' + odPH.toFixed(1) + '%），可能检测到市场未充分定价的优势因子。';
      } else {
        analysisText += '建议关注具体因子差异，寻找市场可能的误判空间。';
      }
    } else if (verdictLevel === '存在分歧') {
      analysisText = '市场与AI存在<span class="highlight">明显分歧</span>。';
      if (aiFav !== odFav) {
        analysisText += '市场倾向' + (odFav === 'home' ? hName : aName) + '，而AI模型综合8项因子后倾向' + (aiFav === 'home' ? hName : aName) + '。';
      }
      analysisText += '分歧核心可能来自：市场过度聚焦于部分显性因子（身价/排名），而AI模型考虑了风格克制、教练经验、赛场因素等隐性变量。';
    } else {
      analysisText = '赔率与AI模型<span class="highlight">方向完全相反</span>，这是最值得关注的信号。';
      analysisText += '市场可能基于历史声望和身价进行定价，而AI模型检测到了风格克制、年轻阵容冲击力或赛场适应性等方面的重大偏差。这类比赛中往往蕴含最大的价值投注机会，同时也伴随更高不确定性。';
    }

    // 建议关注
    let suggestion = '';
    if (verdictLevel === '高度统一') {
      suggestion = '本场预测置信度较高，市场信息充分。建议参考综合比分概率分布，重点关注最可能比分区间。';
    } else if (verdictLevel === '基本一致') {
      suggestion = '方向一致但幅度有差异，建议结合具体因子分析。若投注，可等待更优赔率出现。平局概率需特别关注。';
    } else if (verdictLevel === '存在分歧') {
      suggestion = '⚠️ 存在分歧信号，需谨慎对待。建议深入分析AI因子的具体影响，特别是风格克制和赛场因素。可考虑等待临场信息后再做判断。';
    } else {
      suggestion = '🔥 完全背离信号，潜在价值与风险并存。AI模型可能存在未被市场定价的洞察，但也需警惕AI模型的盲区。建议小注试探或观望。';
    }

    // V1.74: 四维度子卡片数据
    var subDims = {
      wdl: {
        aiPh: aiPH, oddsPh: odPH,
        delta: deltaH,
        level: deltaH < 5 ? 'high' : deltaH < 12 ? 'medium' : deltaH < 20 ? 'low' : 'none'
      },
      ah: {
        aiVal: 0, oddsVal: 0, delta: 0, level: 'none'
      },
      ou: {
        aiVal: 0, oddsVal: 0, delta: 0, level: 'none'
      },
      score: {
        delta: maxDelta,
        level: maxDelta < 5 ? 'high' : maxDelta < 12 ? 'medium' : maxDelta < 20 ? 'low' : 'none'
      }
    };

    return {
      verdictLevel, verdictCls, verdictIcon, verdictBadge,
      maxDelta, avgDelta, effPct,
      analysisText, suggestion,
      aiFav, odFav,
      deltaH, deltaD, deltaA,
      subDims
    };
  }

  // ================================================================
   //  📊 V1.74 概率弹窗渲染 (匹配 preview_composite_v3.html)
  // ================================================================

  function renderProbModalV4(mid) {
    // ===== 内嵌完整 CSS =====
    var styleId = 'prob-v5-inline-style';
    if (!document.getElementById(styleId)) {
      var st = document.createElement('style');
      st.id = styleId;
      st.textContent = 
        // 弹窗头部
        '#probContent .mf-h{background:linear-gradient(135deg,#111827,#141a2e);border-bottom:2px solid #c350ff;padding:20px 22px 16px;display:flex;align-items:center;justify-content:center}' +
        '#probContent .mf-t{font-size:18px;font-weight:800;letter-spacing:.8px;color:#fff}' +
        '#probContent .mf-b{padding:16px 18px 20px}' +
        // 上栏双列
        '#probContent .cg{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}' +
        '#probContent .hc{background:#111827;border-radius:12px;padding:14px 14px 12px;border-top:3px solid transparent}' +
        '#probContent .hc.od{border-top-color:#ff6b35}' +
        '#probContent .hc.ai{border-top-color:#4fc3f7}' +
        '#probContent .cl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px}' +
        '#probContent .hc.od .cl{color:#ff6b35}' +
        '#probContent .hc.ai .cl{color:#4fc3f7}' +
        '#probContent .pr{display:flex;gap:6px}' +
        '#probContent .pi{flex:1;text-align:center;padding:8px 6px;border-radius:8px;background:rgba(0,0,0,.25);position:relative}' +
        '#probContent .pv{font-size:26px;font-weight:800;letter-spacing:-1px}' +
        '#probContent .pi.w .pv{color:#4caf50}' +
        '#probContent .pi.d .pv{color:#ffb74d}' +
        '#probContent .pi.l .pv{color:#ef5350}' +
        '#probContent .pb{height:4px;border-radius:2px;margin:5px auto 3px;max-width:110px;overflow:hidden;background:rgba(255,255,255,.08)}' +
        '#probContent .pbf{height:100%;border-radius:2px}' +
        '#probContent .pi.w .pbf{background:#4caf50}' +
        '#probContent .pi.d .pbf{background:#ffb74d}' +
        '#probContent .pi.l .pbf{background:#ef5350}' +
        '#probContent .pl{font-size:11px;font-weight:500;margin-top:2px;color:#8899bb}' +
        '#probContent .ps{font-size:13px;font-weight:700;margin-top:4px;letter-spacing:.2px;color:#e8ecf4}' +
        // 下栏双列
        '#probContent .dr{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}' +
        '#probContent .db{background:#111827;border-radius:12px;padding:12px 14px 10px;display:flex;flex-direction:column}' +
        '#probContent .db.odds-detail{border-top:3px solid #ff6b35}' +
        '#probContent .db.ai-params{border-top:3px solid #4fc3f7}' +
        '#probContent .btr{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px}' +
        '#probContent .bt{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#8899bb}' +
        '#probContent .dsi{font-size:9px;color:#5a6888;letter-spacing:.5px}' +
        // 赔率详情内部
        '#probContent .os{display:flex;flex-direction:column;gap:10px;flex:1;justify-content:space-around}' +
        '#probContent .osi{background:rgba(0,0,0,.22);border-radius:10px;padding:12px 14px}' +
        '#probContent .htr{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:8px}' +
        '#probContent .hdl{font-size:11px;font-weight:600;color:#8899bb}' +
        '#probContent .hdt{font-size:12px;font-weight:700;color:#ffb74d}' +
        '#probContent .hrr{display:flex;gap:8px}' +
        '#probContent .hci{flex:1;text-align:center;padding:8px 6px;border-radius:8px;background:rgba(255,255,255,.04);position:relative}' +
        '#probContent .hci.hm .hcn{color:#4caf50;font-weight:800;font-size:22px}' +
        '#probContent .hci.aw .hcn{color:#ef5350;font-weight:800;font-size:22px}' +
        '#probContent .hcg{font-size:10px;color:#5a6888;margin-top:2px}' +
        '#probContent .our{display:flex;gap:8px}' +
        '#probContent .oui{flex:1;text-align:center;padding:8px 6px;border-radius:8px;background:rgba(255,255,255,.04);position:relative}' +
        '#probContent .oui.ov .oun{color:#4caf50;font-weight:800;font-size:22px}' +
        '#probContent .oui.un .oun{color:#ef5350;font-weight:800;font-size:22px}' +
        '#probContent .oug{font-size:10px;color:#5a6888;margin-top:2px}' +
        // 影响参数内部
        '#probContent .aip{display:flex;flex-direction:column;gap:7px;flex:1;justify-content:space-around}' +
        '#probContent .di{display:flex;justify-content:space-between;align-items:baseline;padding:6px 10px;background:rgba(0,0,0,.18);border-radius:6px;gap:10px}' +
        '#probContent .di .k{font-size:11px;color:#5a6888;white-space:nowrap}' +
        '#probContent .di .v{font-size:11px;color:#c8d4e8;text-align:right;line-height:1.4}' +
        // 综合推算区域
        '#probContent .section-label{display:flex;align-items:center;gap:10px;margin:8px 0 6px}' +
        '#probContent .section-label span{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#4a5878}' +
        '#probContent .section-label::after{content:"";flex:1;height:1px;background:rgba(255,255,255,.04)}' +
        '#probContent .composite-section{margin-top:4px;border-radius:14px;overflow:hidden;border:1px solid rgba(195,80,255,.2);background:linear-gradient(135deg,rgba(195,80,255,.04),rgba(79,195,247,.04))}' +
        '#probContent .composite-header{background:linear-gradient(135deg,rgba(195,80,255,.15),rgba(79,195,247,.1));padding:14px 20px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(195,80,255,.15)}' +
        '#probContent .composite-header .ch-icon{font-size:20px}' +
        '#probContent .composite-header .ch-title{font-size:15px;font-weight:800;letter-spacing:.5px;color:#fff}' +
        '#probContent .composite-body{display:grid;grid-template-columns:1fr 1fr;gap:0;min-height:300px}' +
        '#probContent .cb-left{padding:18px 18px 16px;display:flex;flex-direction:column;gap:14px;border-right:1px solid rgba(255,255,255,.05)}' +
        // 一致性判定
        '#probContent .verdict-banner{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;font-weight:700;font-size:13px;margin-bottom:10px}' +
        '#probContent .verdict-banner .v-icon{font-size:20px}' +
        '#probContent .verdict-banner .v-text{flex:1}' +
        '#probContent .verdict-banner .v-badge{padding:4px 10px;border-radius:12px;font-size:10px;font-weight:700;letter-spacing:.4px;white-space:nowrap}' +
        '#probContent .vb-high{background:rgba(76,175,80,.12);border:1px solid rgba(76,175,80,.25);color:#81c784}' +
        '#probContent .vb-high .v-badge{background:#4caf50;color:#000}' +
        '#probContent .vb-consist{background:rgba(79,195,247,.10);border:1px solid rgba(79,195,247,.22);color:#4fc3f7}' +
        '#probContent .vb-consist .v-badge{background:#4fc3f7;color:#000}' +
        '#probContent .vb-diverge{background:rgba(255,183,77,.10);border:1px solid rgba(255,183,77,.25);color:#ffb74d}' +
        '#probContent .vb-diverge .v-badge{background:#ffb74d;color:#000}' +
        '#probContent .vb-oppose{background:rgba(239,83,80,.10);border:1px solid rgba(239,83,80,.25);color:#ef5350}' +
        '#probContent .vb-oppose .v-badge{background:#ef5350;color:#fff}' +
        // Delta 偏差条
        '#probContent .delta-row{display:flex;align-items:center;gap:8px;font-size:11px;color:#8899bb}' +
        '#probContent .delta-bar-outer{flex:1;height:5px;border-radius:3px;background:rgba(255,255,255,.06);overflow:hidden}' +
        '#probContent .delta-bar-inner{height:100%;border-radius:3px;transition:width .6s}' +
        // 分歧分析
        '#probContent .analysis-block h4{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8899bb;margin-bottom:6px}' +
        '#probContent .analysis-block p{font-size:12px;line-height:1.65;color:#bcc8e0}' +
        '#probContent .analysis-block .highlight{color:#ffb74d;font-weight:600}' +
        // 市场效率
        '#probContent .efficiency-block h4{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8899bb;margin-bottom:6px}' +
        '#probContent .eff-row{display:flex;align-items:center;gap:10px}' +
        '#probContent .eff-bar-outer{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.06);overflow:hidden}' +
        '#probContent .eff-bar-inner{height:100%;border-radius:4px;transition:width .6s}' +
        '#probContent .eff-pct{font-size:15px;font-weight:800;min-width:48px;text-align:right}' +
        // 建议关注
        '#probContent .suggest-block{background:rgba(255,183,77,.06);border:1px solid rgba(255,183,77,.12);border-radius:8px;padding:10px 12px;font-size:11px;color:#ffcc80;line-height:1.5}' +
        '#probContent .suggest-block .s-icon{margin-right:4px}' +
        // V3 三列瀑布比分
        '#probContent .cb-right{padding:14px 14px 12px;display:flex;flex-direction:column}' +
        '#probContent .cb-right .sr-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8899bb;margin-bottom:8px}' +
        '#probContent .score-columns{display:flex;gap:8px;flex:1;min-height:0}' +
        '#probContent .score-col{flex:1;min-width:0;border-radius:10px;padding:10px 8px 8px;display:flex;flex-direction:column}' +
        '#probContent .score-col.win-col{background:rgba(76,175,80,.06);border:1px solid rgba(76,175,80,.12)}' +
        '#probContent .score-col.draw-col{background:rgba(79,195,247,.06);border:1px solid rgba(79,195,247,.12)}' +
        '#probContent .score-col.loss-col{background:rgba(239,83,80,.06);border:1px solid rgba(239,83,80,.12)}' +
        '#probContent .score-col-header{display:flex;align-items:center;gap:4px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.06)}' +
        '#probContent .score-col-header .col-emoji{font-size:13px;line-height:1}' +
        '#probContent .score-col-header .col-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#8899bb;flex:1}' +
        '#probContent .score-col-header .col-pct{font-size:13px;font-weight:800;font-variant-numeric:tabular-nums}' +
        '#probContent .win-col .col-pct{color:#66bb6a}' +
        '#probContent .draw-col .col-pct{color:#4fc3f7}' +
        '#probContent .loss-col .col-pct{color:#ef5350}' +
        '#probContent .score-col-items{flex:1;display:flex;flex-direction:column;gap:3px;min-height:0}' +
        '#probContent .score-item{display:flex;align-items:center;justify-content:space-between;padding:3px 6px;border-radius:5px;font-size:11px;transition:background .15s}' +
        '#probContent .score-item:hover{background:rgba(255,255,255,.04)}' +
        '#probContent .score-item .si-score{font-weight:700;color:#d0d8ec;font-variant-numeric:tabular-nums;letter-spacing:.3px;font-size:11px}' +
        '#probContent .score-item .si-pct{font-weight:700;color:#8899bb;font-variant-numeric:tabular-nums;font-size:11px}' +
        '#probContent .score-other{display:flex;align-items:center;justify-content:space-between;margin-top:6px;padding:3px 6px;border-top:1px dashed rgba(255,255,255,.08);font-size:11px;color:#8899bb;font-weight:700;font-variant-numeric:tabular-nums;border-radius:5px}' +
        '#probContent .win-col .score-other{border-top-color:rgba(76,175,80,.15)}' +
        '#probContent .draw-col .score-other{border-top-color:rgba(79,195,247,.15)}' +
        '#probContent .loss-col .score-other{border-top-color:rgba(239,83,80,.15)}' +
        '#probContent .no-scores{flex:1;display:flex;align-items:center;justify-content:center;color:#5a6888;font-size:12px}' +
        // 命中高亮（熔岩核心 · 霓虹替换风格）
        '#probContent .pi .hit-badge{display:none;position:absolute;top:-7px;right:-4px;font-size:8px;font-weight:900;padding:2px 7px;border-radius:10px;letter-spacing:.8px;z-index:2}' +
        '#probContent .pi.hit .hit-badge{display:block;background:#ff6d3a;color:#000}' +
        '#probContent .hci .hit-badge{display:none;position:absolute;top:-7px;right:-4px;font-size:8px;font-weight:900;padding:2px 7px;border-radius:10px;letter-spacing:.8px;z-index:2}' +
        '#probContent .hci.hit .hit-badge{display:block;background:#ff6d3a;color:#000}' +
        '#probContent .oui .hit-badge{display:none;position:absolute;top:-7px;right:-4px;font-size:8px;font-weight:900;padding:2px 7px;border-radius:10px;letter-spacing:.8px;z-index:2}' +
        '#probContent .oui.hit .hit-badge{display:block;background:#ff6d3a;color:#000}' +
        '#probContent .pi.hit{background:linear-gradient(180deg,#2a0a00,#0d0200)!important;border:1.5px solid #ff6d3a!important;box-shadow:0 0 14px rgba(255,109,58,.22),inset 0 1px 0 rgba(255,140,80,.1)}' +
        '#probContent .pi.hit .pv{color:#ff8a50!important;text-shadow:0 0 10px rgba(255,109,58,.6)}' +
        '#probContent .pi.hit .pbf{background:linear-gradient(90deg,#ff6d3a,#ff9a60)!important;box-shadow:0 0 8px rgba(255,109,58,.5)}' +
        '#probContent .pi.hit .pl{color:#b85a3a!important}' +
        '#probContent .pi.hit .ps{color:#ffb899!important}' +
        '#probContent .hci.hit{background:linear-gradient(180deg,#2a0a00,#0d0200)!important;border:1.5px solid #ff6d3a!important;box-shadow:0 0 14px rgba(255,109,58,.22),inset 0 1px 0 rgba(255,140,80,.1)}' +
        '#probContent .hci.hit .hcn{color:#ff8a50!important;text-shadow:0 0 6px rgba(255,109,58,.5)}' +
        '#probContent .hci.hit .hcg{color:#b85a3a!important}' +
        '#probContent .oui.hit{background:linear-gradient(180deg,#2a0a00,#0d0200)!important;border:1.5px solid #ff6d3a!important;box-shadow:0 0 14px rgba(255,109,58,.22),inset 0 1px 0 rgba(255,140,80,.1)}' +
        '#probContent .oui.hit .oun{color:#ff8a50!important;text-shadow:0 0 6px rgba(255,109,58,.5)}' +
        '#probContent .oui.hit .oug{color:#b85a3a!important}' +
        '#probContent .score-item.hit{background:linear-gradient(180deg,#1f0800,#0a0100)!important;border:1px solid #ff6d3a!important;box-shadow:0 0 6px rgba(255,109,58,.2)}' +
        '#probContent .score-item.hit .si-score,#probContent .score-item.hit .si-pct{color:#ff8a50!important}' +
        '#probContent .score-other.hit{background:linear-gradient(180deg,#1f0800,#0a0100)!important;border:1px solid #ff6d3a!important;box-shadow:0 0 6px rgba(255,109,58,.2)}' +
        '#probContent .score-other.hit span{color:#ff8a50!important}' +
        // // 免责声明 + 响应式
        '#probContent .ds{text-align:center;padding:16px 0 4px;font-size:10px;color:#5a6888;letter-spacing:.8px}' +
        '#probContent .na{font-size:.65rem;color:#5a6888;text-align:center;padding:10px 0;font-style:italic}' +
        '@media(max-width:700px){#probContent .cg,#probContent .dr{grid-template-columns:1fr}#probContent .pr{flex-wrap:wrap}#probContent .pi{min-width:80px}#probContent .composite-body{grid-template-columns:1fr}#probContent .cb-left{border-right:none;border-bottom:1px solid rgba(255,255,255,.05)}}';
      document.head.appendChild(st);
    }

    var m = allGM.find(function(x) { return x.id === mid; });
    if (!m) return;

    var homeCode = m.home.code, awayCode = m.away.code;
    var homeName = m.home.zh, awayName = m.away.zh;

    // 赔率数据 - 优先使用当场比赛赔率(matchOdds→knockoutOdds)，回退至球队平均赔率(liveOdds)
    var md = matchOdds[mid] || knockoutOdds[mid] || (window.knockoutOddsR16||{})[mid] || (window.knockoutOddsQF||{})[mid] || (window.knockoutOddsSF||{})[mid] || (window.knockoutOddsTP||{})[mid] || (window.knockoutOddsFINAL||{})[mid] || null;
    var ho, ao;
    if (md) {
        ho = { w: md.hw, d: md.d, l: md.aw };
        ao = { w: md.aw, d: md.d, l: md.hw };
    } else {
        ho = liveOdds[homeCode] || { w: 2.50, d: 3.20, l: 2.80 };
        ao = liveOdds[awayCode] || { w: 2.80, d: 3.20, l: 2.50 };
    }
    var hasRealOdds = !!md; // 仅当场比赛级赔率，不含球队历史均值
    // 无真实赔率时回退到 AI-only 模式
    if (!hasRealOdds) {
      ho = { w: 0, d: 0, l: 0 };
      ao = { w: 0, d: 0, l: 0 };
    }
    var oddsPbs = calcOddsPbs(ho, ao);

    // 让球/大小球数据
    var ahData = null, ouData = null;
    if (md) {
      if (md.ahLine !== undefined) ahData = calcAsianHandicapPbs(md.ahLine, md.ahHome, md.ahAway);
      if (md.ouLine !== undefined) ouData = calcOUPbs(md.ouLine, md.ouOver, md.ouUnder);
    }

    // 获取当前比赛轮次 (用于本届表现因子第1轮冻结)
    var matchKey = '2026|' + m.gid + '|' + m.home.code + '|' + m.away.code;
    var matchData = window.wc2026AllMatches && window.wc2026AllMatches[matchKey];
    var round = matchData ? matchData.round : null;

    // 完赛命中判定 — score为90分钟常规时间+补时赛果（赌盘结算标准）
    var isCompleted = matchData && matchData.score && matchData.score.sh !== null && matchData.score.sa !== null;
    var actualSh = isCompleted ? matchData.score.sh : null;
    var actualSa = isCompleted ? matchData.score.sa : null;
    var actualResult = isCompleted ? (actualSh > actualSa ? 'home' : actualSh === actualSa ? 'draw' : 'away') : null;
    var totalGoals = isCompleted ? actualSh + actualSa : null;
    // 让球盘命中 (ahLine>0=主受让)
    var ahHit = null; // 'home'|'away'|'push'
    if (isCompleted && md && md.ahLine !== undefined) {
      var homeEff = actualSh + md.ahLine;
      ahHit = homeEff > actualSa ? 'home' : homeEff < actualSa ? 'away' : 'push';
    }
    // 大小球命中
    var ouHit = null; // 'over'|'under'|'push'
    if (isCompleted && md && md.ouLine !== undefined) {
      ouHit = totalGoals > md.ouLine ? 'over' : totalGoals < md.ouLine ? 'under' : 'push';
    }
    var actualScoreStr = isCompleted ? actualSh + ':' + actualSa : null;

    // AI推算 (传入 mid + round + matchKey 以支持赛场因素 + 本届表现自循环排除)
    var aiResult = calcAIPbs(homeCode, awayCode, mid, round, matchKey);
    var f = aiResult.factors;

    // 综合推算分析
    var comp = computeCompositeAnalysis(aiResult, oddsPbs, homeCode, awayCode, f);

    // 参数格式化
    var rankH = f.rankDiff ? getFifaRank(homeCode) : getFifaRank(homeCode);
    var rankA = getFifaRank(awayCode);
    var rankDiffAbs = Math.abs(rankH - rankA);
    var valH = f.valueH, valA = f.valueA;
    var valHDesc = valH ? (valH > 10000 ? (valH/10000).toFixed(1)+'亿€' : valH+'万€') : '—';
    var valADesc = valA ? (valA > 10000 ? (valA/10000).toFixed(1)+'亿€' : valA+'万€') : '—';
    var valRatio = (valH && valA && valA > 0) ? (valH/valA).toFixed(1) : '?';
    var styleH = getTeamStyle(homeCode);
    var styleA = getTeamStyle(awayCode);
    var coachNameH = getCoachName(homeCode);
    var coachNameA = getCoachName(awayCode);

    var h = '';

    // === 头部 ===
    var flagH = typeof getFlag === 'function' ? getFlag(homeCode) : ('https://flagcdn.com/w80/' + (homeCode.toLowerCase()) + '.png');
    var flagA = typeof getFlag === 'function' ? getFlag(awayCode) : ('https://flagcdn.com/w80/' + (awayCode.toLowerCase()) + '.png');
    h += '<div class="mf-h"><img src="' + flagH + '" style="width:32px;height:21px;border-radius:3px;object-fit:cover;box-shadow:0 2px 6px rgba(0,0,0,0.4);margin:0 10px" onerror="this.style.display=\'none\'" loading="lazy"><span class="mf-t">' + homeName + ' vs ' + awayName + '</span><img src="' + flagA + '" style="width:32px;height:21px;border-radius:3px;object-fit:cover;box-shadow:0 2px 6px rgba(0,0,0,0.4);margin:0 10px" onerror="this.style.display=\'none\'" loading="lazy"></div>';
    h += '<div class="mf-b">';

    // === 上栏：赔率推算 + 智能推算 ===
    h += '<div class="cg">';
    // 赔率推算
    h += '<div class="hc od"><div class="cl">📊 赔率推算 <span style="font-weight:400;font-size:10px;color:#5a6888;margin-left:4px">William Hill</span></div>';
    if (!hasRealOdds) {
      h += '<div class="pr"><div class="pi w"><div class="pv" style="font-size:14px;color:#5a6888">暂无</div><div class="pl">主胜</div><div class="ps" style="color:#5a6888">—</div></div>';
      h += '<div class="pi d"><div class="pv" style="font-size:14px;color:#5a6888">暂无</div><div class="pl">平局</div><div class="ps" style="color:#5a6888">—</div></div>';
      h += '<div class="pi l"><div class="pv" style="font-size:14px;color:#5a6888">暂无</div><div class="pl">客胜</div><div class="ps" style="color:#5a6888">—</div></div></div>';
      h += '<div style="font-size:10px;color:#5a6888;text-align:center;padding:4px 0">William Hill 赔率暂未收录该比赛</div>';
    } else {
      h += '<div class="pr">';
      h += '<div class="pi w' + (actualResult==='home'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="pv">' + oddsPbs.ph + '%</div><div class="pb"><div class="pbf" style="width:' + oddsPbs.ph + '%"></div></div><div class="pl">主胜</div><div class="ps">' + ho.w.toFixed(2) + '</div></div>';
      h += '<div class="pi d' + (actualResult==='draw'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="pv">' + oddsPbs.pd + '%</div><div class="pb"><div class="pbf" style="width:' + oddsPbs.pd + '%"></div></div><div class="pl">平局</div><div class="ps">' + ((ho.d + (ao.d || 3.2)) / 2).toFixed(2) + '</div></div>';
      h += '<div class="pi l' + (actualResult==='away'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="pv">' + oddsPbs.pa + '%</div><div class="pb"><div class="pbf" style="width:' + oddsPbs.pa + '%"></div></div><div class="pl">客胜</div><div class="ps">' + ao.w.toFixed(2) + '</div></div>';
      h += '</div>';
    }
    h += '</div>';
    // 智能推算
    h += '<div class="hc ai"><div class="cl">🤖 智能推算 <span style="font-weight:400;font-size:10px;color:#5a6888;margin-left:4px">泊松 λ</span></div><div class="pr">';
    h += '<div class="pi w' + (actualResult==='home'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="pv">' + aiResult.ph + '%</div><div class="pb"><div class="pbf" style="width:' + aiResult.ph + '%"></div></div><div class="pl">主胜</div><div class="ps">λ=' + aiResult.hLambda.toFixed(2) + '</div></div>';
    h += '<div class="pi d' + (actualResult==='draw'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="pv">' + aiResult.pd + '%</div><div class="pb"><div class="pbf" style="width:' + aiResult.pd + '%"></div></div><div class="pl">平局</div><div class="ps">—</div></div>';
    h += '<div class="pi l' + (actualResult==='away'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="pv">' + aiResult.pa + '%</div><div class="pb"><div class="pbf" style="width:' + aiResult.pa + '%"></div></div><div class="pl">客胜</div><div class="ps">λ=' + aiResult.aLambda.toFixed(2) + '</div></div>';
    h += '</div></div>';
    h += '</div>'; // .cg

    // === 下栏：赔率详情 + 影响参数 ===
    h += '<div class="dr">';
    // 赔率详情
    h += '<div class="db odds-detail"><div class="btr"><span class="bt">赔率详情</span><span class="dsi">William Hill · ' + (hasRealOdds ? '盘前赔率' : '暂无数据') + '</span></div><div class="os">';
    // 胜平负 (1X2)
    if (hasRealOdds) {
      h += '<div class="osi"><div class="htr"><span class="hdl">胜平负 (1X2)</span></div><div class="hrr">';
      h += '<div class="hci hm"><div class="hcn">' + ho.w.toFixed(2) + '</div><div class="hcg">主胜</div></div>';
      h += '<div class="hci aw"><div class="hcn" style="color:#ffb74d">' + ((ho.d + (ao.d || 3.2)) / 2).toFixed(2) + '</div><div class="hcg">平局</div></div>';
      h += '<div class="hci aw"><div class="hcn">' + ao.w.toFixed(2) + '</div><div class="hcg">客胜</div></div>';
      h += '</div></div>';
    } else {
      h += '<div class="osi"><div class="htr"><span class="hdl">胜平负 (1X2)</span></div><div class="na">暂无赔率数据</div></div>';
    }
    if (ahData && md) {
      h += '<div class="osi"><div class="htr"><span class="hdl">让球盘</span><span class="hdt">' + (md.ahLine > 0 ? '主+' + md.ahLine.toFixed(2) : '主' + md.ahLine.toFixed(2)) + '</span></div><div class="hrr">';
      h += '<div class="hci hm' + (ahHit==='home'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="hcn">' + md.ahHome.toFixed(2) + '</div><div class="hcg">主队</div></div>';
      h += '<div class="hci aw' + (ahHit==='away'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="hcn">' + md.ahAway.toFixed(2) + '</div><div class="hcg">客队</div></div>';
      h += '</div></div>';
    } else {
      h += '<div class="osi"><div class="htr"><span class="hdl">让球盘</span></div><div class="na">暂无让球盘数据</div></div>';
    }
    if (ouData && md) {
      h += '<div class="osi"><div class="htr"><span class="hdl">大小球</span><span class="hdt">O/U ' + md.ouLine.toFixed(1) + '</span></div><div class="our">';
      h += '<div class="oui ov' + (ouHit==='over'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="oun">' + md.ouOver.toFixed(2) + '</div><div class="oug">大</div></div>';
      h += '<div class="oui un' + (ouHit==='under'?' hit':'') + '"><span class="hit-badge">HIT</span><div class="oun">' + md.ouUnder.toFixed(2) + '</div><div class="oug">小</div></div>';
      h += '</div></div>';
    } else {
      h += '<div class="osi"><div class="htr"><span class="hdl">大小球</span></div><div class="na">暂无大小球数据</div></div>';
    }
    h += '</div></div>';

    // 影响参数 (8参数 — 匹配preview_composite_v3)
    h += '<div class="db ai-params"><div class="btr"><span class="bt">影响参数</span><span class="dsi">AI 8因子融合 · 历史底蕴 · 本届表现</span></div><div class="aip">';
    h += '<div class="di"><span class="k">FIFA世界排名</span><span class="v">#' + rankH + ' · #' + rankA + ' (差' + rankDiffAbs + '位)</span></div>';
    h += '<div class="di"><span class="k">阵容总身价</span><span class="v">' + valHDesc + ' · ' + valADesc + ' (倍率 ' + valRatio + 'x)</span></div>';
    h += '<div class="di"><span class="k">战术风格</span><span class="v">' + (styleH.length ? styleH.slice(0,2).join('/') : '—') + ' vs ' + (styleA.length ? styleA.slice(0,2).join('/') : '—') + '</span></div>';
    h += '<div class="di"><span class="k">教练经验</span><span class="v">' + coachNameH + '(' + (f.coachAgeH||50) + '岁) · ' + coachNameA + '(' + (f.coachAgeA||50) + '岁)</span></div>';
    h += '<div class="di"><span class="k">平均年龄</span><span class="v">主 ' + (f.avgAgeH||27) + '岁 · 客 ' + (f.avgAgeA||27) + '岁</span></div>';
    h += '<div class="di"><span class="k">五大联赛占比</span><span class="v">主 ' + (f.top5H!==null?f.top5H:0) + '% · 客 ' + (f.top5A!==null?f.top5A:0) + '%</span></div>';
    h += '<div class="di"><span class="k">身高对抗</span><span class="v">主 ' + (f.heightH||180) + 'cm · 客 ' + (f.heightA||180) + 'cm</span></div>';
    h += '<div class="di"><span class="k">赛场因素</span><span class="v">综合评分 ' + ((f.venueFactor||0)>=0?'+':'') + ((f.venueFactor||0)*100).toFixed(1) + '%</span></div>';
    h += '<div class="di"><span class="k">历史底蕴</span><span class="v">' + ((f.historyDelta||0)>=0?'+':'') + ((f.historyDelta||0)*100).toFixed(1) + '% (六届世界杯·非线性)</span></div>';
    if (f.formH && f.formH.completedMatches > 0) {
      var rp = (round === 3) ? 1.40 : (round === 2) ? 1.20 : 1.0;
      var fdH = f.formH.delta * f.formH.formWeight * rp * 100;
      var fdA = f.formA.delta * f.formA.formWeight * rp * 100;
      var trendH = f.formH.delta > 0.03 ? '↑' : (f.formH.delta < -0.03 ? '↓' : '→');
      var trendA = f.formA.delta > 0.03 ? '↑' : (f.formA.delta < -0.03 ? '↓' : '→');
      h += '<div class="di"><span class="k">本届表现</span><span class="v">主 ' + (fdH>=0?'+':'') + fdH.toFixed(1) + '% (' + f.formH.completedMatches + '场' + trendH + ') · 客 ' + (fdA>=0?'+':'') + fdA.toFixed(1) + '% (' + f.formA.completedMatches + '场' + trendA + ')</span></div>';
    } else {
      h += '<div class="di"><span class="k">本届表现</span><span class="v">暂无数据 (首轮比赛后自动激活)</span></div>';
    }    h += '</div></div>';
    h += '</div>'; // .dr

    // === 🆕 综合推算 ===
    h += '<div class="section-label"><span>▼ 综合推算</span></div>';
    h += '<div class="composite-section">';
    h += '<div class="composite-header"><span class="ch-icon">📊</span><span class="ch-title">综合推算</span></div>';
    h += '<div class="composite-body">';

    // 左栏
    h += '<div class="cb-left">';
    // 一致性判定 Banner (匹配preview_composite_v3)
    h += '<div class="verdict-banner ' + comp.verdictCls + '"><span class="v-icon">' + comp.verdictIcon + '</span><span class="v-text">' + comp.verdictLevel + '</span><span class="v-badge">' + comp.verdictBadge + '</span></div>';
    // Delta 偏差条
    var deltaColor = comp.maxDelta < 8 ? '#4caf50' : comp.maxDelta < 18 ? '#4fc3f7' : comp.maxDelta < 30 ? '#ffb74d' : '#ef5350';
    h += '<div class="delta-row"><span>偏差度</span><div class="delta-bar-outer"><div class="delta-bar-inner" style="width:' + Math.min(100, comp.maxDelta) + '%;background:' + deltaColor + '"></div></div><span style="font-weight:700;min-width:44px;text-align:right">Δ ' + comp.maxDelta.toFixed(1) + '%</span></div>';
    // 分歧分析
    h += '<div class="analysis-block"><h4>📋 分歧分析</h4><p>' + comp.analysisText + '</p></div>';
    // 市场效率
    var effColor = comp.effPct > 85 ? '#4caf50' : comp.effPct > 70 ? '#4fc3f7' : comp.effPct > 50 ? '#ffb74d' : '#ef5350';
    h += '<div class="efficiency-block"><h4>⚡ 市场效率评估</h4><div class="eff-row"><div class="eff-bar-outer"><div class="eff-bar-inner" style="width:' + comp.effPct + '%;background:' + effColor + '"></div></div><span class="eff-pct" style="color:' + effColor + '">' + comp.effPct.toFixed(0) + '%</span></div></div>';
    // 建议关注
    h += '<div class="suggest-block"><span class="s-icon">💡</span><strong>建议关注：</strong>' + comp.suggestion + '</div>';
    h += '</div>'; // .cb-left

    // 右栏：V3 三列瀑布比分（融合赔率+AI）
    var blended = calcBlendedScores(aiResult, ho, ao, comp, hasRealOdds);
    // 其他命中判定：真实比分未在枚举列表中时，高亮对应列的"其他"行
    var winExact = blended.winScores.some(function(s){return s.score===actualScoreStr;});
    var drawExact = blended.drawScores.some(function(s){return s.score===actualScoreStr;});
    var lossExact = blended.lossScores.some(function(s){return s.score===actualScoreStr;});
    // 综合推算内部权重（赔率+(blended.oddsWeight*100).toFixed(0)+'% / AI'+(blended.aiWeight*100).toFixed(0)+'%）——仅作代码批注，不向用户展示
    h += '<div class=\"cb-right\"><div class=\"sr-title\">🎯 可能比分（综合推算）</div>';
    h += '<div class="score-columns">';
    
    // 主胜列
    h += '<div class="score-col win-col">';
    h += '<div class="score-col-header"><span class="col-emoji">🟢</span><span class="col-label">主胜</span><span class="col-pct">' + blended.winTotalPct + '%</span></div>';
    h += '<div class="score-col-items">';
    blended.winScores.forEach(function(s) {
      h += '<div class="score-item' + (s.score===actualScoreStr?' hit':'') + '"><span class="si-score">' + s.score + '</span><span class="si-pct">' + s.prob.toFixed(1) + '%</span></div>';
    });
    h += '</div>';
    h += '<div class=\"score-other' + (actualResult==='home'&&!winExact?' hit':'') + '\"><span>主胜其他</span><span>' + blended.winOther + '%</span></div>';
    h += '</div>';
    
    // 平局列
    h += '<div class="score-col draw-col">';
    h += '<div class="score-col-header"><span class="col-emoji">🔵</span><span class="col-label">平局</span><span class="col-pct">' + blended.drawTotalPct + '%</span></div>';
    h += '<div class="score-col-items">';
    blended.drawScores.forEach(function(s) {
      h += '<div class="score-item' + (s.score===actualScoreStr?' hit':'') + '"><span class="si-score">' + s.score + '</span><span class="si-pct">' + s.prob.toFixed(1) + '%</span></div>';
    });
    h += '</div>';
    h += '<div class=\"score-other' + (actualResult==='draw'&&!drawExact?' hit':'') + '\"><span>平局其他</span><span>' + blended.drawOther + '%</span></div>';
    h += '</div>';
    
    // 客胜列
    h += '<div class="score-col loss-col">';
    h += '<div class="score-col-header"><span class="col-emoji">🔴</span><span class="col-label">客胜</span><span class="col-pct">' + blended.lossTotalPct + '%</span></div>';
    h += '<div class="score-col-items">';
    blended.lossScores.forEach(function(s) {
      h += '<div class="score-item' + (s.score===actualScoreStr?' hit':'') + '"><span class="si-score">' + s.score + '</span><span class="si-pct">' + s.prob.toFixed(1) + '%</span></div>';
    });
    h += '</div>';
    h += '<div class=\"score-other' + (actualResult==='away'&&!lossExact?' hit':'') + '\"><span>客胜其他</span><span>' + blended.lossOther + '%</span></div>';
    h += '</div>';
    
    h += '</div>'; // .score-columns
    h += '</div>'; // .cb-right



    h += '</div>'; // .composite-body
    h += '</div>'; // .composite-section


    // 免责声明
    h += '<div class="ds">◆ 仅用作数据分析 不构成投资建议 ◆</div>';
    h += '</div>'; // .mf-b

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
  // 新增导出
  window.computeAvgAge = computeAvgAge;
  window.computeTop5LeaguePct = computeTop5LeaguePct;
  window.computeAvgHeight = computeAvgHeight;
  window.calcHistoryPedigree = calcHistoryPedigree;
  window.calcTournamentForm = calcTournamentForm;
  window.computeCompositeAnalysis = computeCompositeAnalysis;

  console.log('✅ prob_engine.js 加载完成 — AI融合概率引擎 V1.82 (淘汰赛本届表现权重上调) + 综合推算');
  console.log('   calcAIPbs(8因子) | calcHistoryPedigree | calcTournamentForm | renderProbModalV4');

  // ================================================================
  //  🔗 V1.82 桥接
  // ================================================================
  (function installV161Bridge() {
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
      console.log('🔗 V1.82 桥接已安装 — calcP → renderProbModalV4 (综合推算版)');
    }
  })();

})();