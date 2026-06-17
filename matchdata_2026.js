// matchdata_2026.js — 2026世界杯比赛数据层 | V1.72
// ===== matchdata_2026.js — 2026世界杯完整比赛数据层 =====
// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
//
// 设计原则:
//   1. 统一扁平化Key → 高效O(1)查询
//   2. 扩展字段预留（赛后评论、AI复盘对比等）
//   3. 不依赖赔率数据，保持AI推算独立性
//   4. 渐进填充：赛前score=null，赛后动态更新
//
// Key格式: "2026|阶段|主队|客队"
//   阶段: A~P(小组) / R32 / R16 / QF / SF / TP / FINAL
// ================================================================

const wc2026AllMatches = {

  // ========== 小组赛 (12组×4队=72场) ==========
  // A组
  "2026|A|MEX|RSA": {
    score: { sh: 2, sa: 0 },
    date: "2026-06-11",
    venue: "阿兹台克球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 9,  side: "home", scorer: "基尼奥内斯", type: "shot" },
      { min: 67, side: "home", scorer: "R.希门尼斯", type: "header" }
    ],
    stats: {
      possession:      { h: 60, a: 40 },
      shots:           { h: 11, a: 3 },
      shotsOnTarget:   { h: 4,  a: 2 },
      corners:         { h: 3,  a: 1 },
      fouls:           { h: 10, a: 18 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 1,  a: 2 },
      attacks:         { h: 98, a: 69 },
      dangerousAttacks:{ h: 48, a: 27 }
    },
    attendance: 87523,
    referee: "Wilton Sampaio (BRA)",
    // 预留扩展
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|A|KOR|CZE": {
    score: { sh: 2, sa: 1 },
    date: "2026-06-11",
    venue: "阿克伦球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 23, side: "home", scorer: "孙兴慜", type: "shot" },
      { min: 45, side: "away", scorer: "希克", type: "header" },
      { min: 78, side: "home", scorer: "黄喜灿", type: "shot" }
    ],
    stats: {
      possession:      { h: 62, a: 38 },
      shots:           { h: 11, a: 7 },
      shotsOnTarget:   { h: 5,  a: 4 },
      corners:         { h: 4,  a: 2 },
      fouls:           { h: 7,  a: 10 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 92, a: 65 },
      dangerousAttacks:{ h: 44, a: 30 }
    },
    attendance: 48071,
    referee: "Facundo Tello (ARG)",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },
  "2026|H|KSA|URU": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-16",
    time: "06:00",
    venue: "大都会人寿球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 41, side: "home", scorer: "阿姆里", type: "shot" },
      { min: 80, side: "away", scorer: "阿劳霍", type: "shot" }
    ],
    stats: {
      possession:      { h: 33, a: 67 },
      shots:           { h: 6,  a: 20 },
      shotsOnTarget:   { h: 3,  a: 10 },
      corners:         { h: 4,  a: 14 },
      fouls:           { h: 11, a: 6 },
      yellowCards:     { h: 1,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 75, a: 145 },
      dangerousAttacks:{ h: 27, a: 79 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|G|BEL|EGY": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-16",
    time: "03:00",
    venue: "BMO球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 19, side: "away", scorer: "伊玛姆·阿舒尔", type: "shot" },
      { min: 66, side: "home", scorer: "穆罕穆德·哈尼", type: "own_goal" }
    ],
    stats: {
      possession:      { h: 53, a: 47 },
      shots:           { h: 9,  a: 6 },
      shotsOnTarget:   { h: 3,  a: 3 },
      corners:         { h: 2,  a: 7 },
      fouls:           { h: 15, a: 15 },
      yellowCards:     { h: 2,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 119,a: 76 },
      dangerousAttacks:{ h: 64, a: 32 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|G|IRN|NZL": {
    score: { sh: 2, sa: 2 },
    date: "2026-06-16",
    time: "09:00",
    venue: "AT&T体育场",
    stage: "group",
    round: 1,
    goals: [
      { min: 7, side: "away", scorer: "贾斯特", type: "shot" },
      { min: 32, side: "home", scorer: "雷扎伊安", type: "shot" },
      { min: 54, side: "away", scorer: "贾斯特", type: "shot" },
      { min: 64, side: "home", scorer: "莫赫比", type: "header" }
    ],
    stats: {
      possession:      { h: 48, a: 52 },
      shots:           { h: 12, a: 12 },
      shotsOnTarget:   { h: 4,  a: 8 },
      corners:         { h: 4,  a: 1 },
      fouls:           { h: 10, a: 8 },
      yellowCards:     { h: 1,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 96, a: 101 },
      dangerousAttacks:{ h: 56, a: 44 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|I|FRA|SEN": {
    score: { sh: 3, sa: 1 },
    date: "2026-06-17",
    time: "03:00",
    venue: "SoFi体育场",
    stage: "group",
    round: 1,
    goals: [
      { min: 66,    side: "home", scorer: "姆巴佩",   type: "shot" },
      { min: 82,    side: "home", scorer: "巴尔科拉", type: "shot" },
      { min: "90+5",side: "away", scorer: "姆巴耶",   type: "shot" },
      { min: "90+6",side: "home", scorer: "姆巴佩",   type: "shot" }
    ],
    stats: {
      possession:      { h: 54, a: 46 },
      shots:           { h: 9,  a: 5 },
      shotsOnTarget:   { h: 8,  a: 2 },
      corners:         { h: 6,  a: 4 },
      fouls:           { h: 5,  a: 9 },
      yellowCards:     { h: 0,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 113,a: 99 },
      dangerousAttacks:{ h: 32, a: 27 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|I|IRQ|NOR": {
    score: { sh: 1, sa: 4 },
    date: "2026-06-17",
    time: "06:00",
    venue: "吉列体育场",
    stage: "group",
    round: 1,
    goals: [
      { min: 29,    side: "away", scorer: "哈兰德",   type: "shot" },
      { min: 39,    side: "home", scorer: "侯赛因",   type: "header" },
      { min: 43,    side: "away", scorer: "哈兰德",   type: "shot" },
      { min: 76,    side: "away", scorer: "厄斯蒂高", type: "header" },
      { min: "90+6",side: "away", scorer: "艾曼·侯赛因", type: "own_goal" }
    ],
    stats: {
      possession:      { h: 39, a: 61 },
      shots:           { h: 9,  a: 10 },
      shotsOnTarget:   { h: 1,  a: 5 },
      corners:         { h: 2,  a: 5 },
      fouls:           { h: 12, a: 13 },
      yellowCards:     { h: 1,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 79, a: 89 },
      dangerousAttacks:{ h: 27, a: 39 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|J|ARG|ALG": {
    score: { sh: 3, sa: 0 },
    date: "2026-06-17",
    time: "09:00",
    venue: "BMO球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 17, side: "home", scorer: "梅西", type: "shot" },
      { min: 60, side: "home", scorer: "梅西", type: "shot" },
      { min: 76, side: "home", scorer: "梅西", type: "shot" }
    ],
    stats: {
      possession:      { h: 48, a: 52 },
      shots:           { h: 10, a: 4 },
      shotsOnTarget:   { h: 6,  a: 0 },
      corners:         { h: 2,  a: 2 },
      fouls:           { h: 13, a: 8 },
      yellowCards:     { h: 0,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 85, a: 119 },
      dangerousAttacks:{ h: 24, a: 45 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|J|AUT|JOR": {
    score: { sh: 3, sa: 1 },
    date: "2026-06-18",
    time: "00:00",
    venue: "大都会人寿球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 21,     side: "home", scorer: "施密德",     type: "shot" },
      { min: 50,     side: "away", scorer: "乌勒万",     type: "shot" },
      { min: 76,     side: "home", scorer: "亚赞",       type: "own_goal" },
      { min: "90+12",side: "home", scorer: "阿瑙托维奇", type: "penalty" }
    ],
    stats: {
      possession:      { h: 63, a: 37 },
      shots:           { h: 10, a: 9 },
      shotsOnTarget:   { h: 4,  a: 4 },
      corners:         { h: 4,  a: 3 },
      fouls:           { h: 12, a: 7 },
      yellowCards:     { h: 1,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 132,a: 86 },
      dangerousAttacks:{ h: 55, a: 45 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: null,
    aiPreMatch: null,
    aiPostReview: null
  },

  // ---- 未赛预留框架（示例，随赛程推进动态填充）----
  // "2026|A|RSA|KOR": {
  //   score: null, date: "2026-06-15", venue: "...", stage: "group", round: 2,
  //   goals: null, stats: null, attendance: null, referee: null,
  //   xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  // },

  // ========= 淘汰赛预留框架 =========
  // R32: 16场, R16: 8场, QF: 4场, SF: 2场, TP: 1场, FINAL: 1场
  // 格式: "2026|R16|???|???"
};

// ================================================================
//  历史世界杯战绩索引 (从 matchdata.js 提炼，用于历史底蕴快速计算)
//  每届得分: 冠军7 / 亚军6 / 四强5 / 八强4 / 十六强3 / 小组1 / 未参赛0
// ================================================================
const HISTORY_INDEX = {
  // ---- 南美洲 ----
  "ARG": [
    { year: 2022, stage: "W",  win: 4, draw: 2, loss: 1, gf: 15, ga: 8 },
    { year: 2018, stage: "R16", win: 1, draw: 1, loss: 2, gf: 6,  ga: 9 },
    { year: 2014, stage: "F",  win: 5, draw: 1, loss: 1, gf: 8,  ga: 4 },
    { year: 2010, stage: "QF", win: 4, draw: 0, loss: 1, gf: 10, ga: 6 },
    { year: 2006, stage: "QF", win: 3, draw: 2, loss: 0, gf: 11, ga: 3 },
    { year: 2002, stage: "GS", win: 1, draw: 1, loss: 1, gf: 2,  ga: 2 }
  ],
  "BRA": [
    { year: 2022, stage: "QF", win: 3, draw: 0, loss: 1, gf: 8,  ga: 3 },
    { year: 2018, stage: "QF", win: 2, draw: 1, loss: 1, gf: 7,  ga: 3 },
    { year: 2014, stage: "SF", win: 3, draw: 1, loss: 1, gf: 11, ga: 4 },
    { year: 2010, stage: "QF", win: 3, draw: 1, loss: 1, gf: 9,  ga: 4 },
    { year: 2006, stage: "QF", win: 4, draw: 0, loss: 1, gf: 10, ga: 2 },
    { year: 2002, stage: "W",  win: 7, draw: 0, loss: 0, gf: 18, ga: 4 }
  ],
  "URU": [
    { year: 2022, stage: "GS", win: 1, draw: 1, loss: 1, gf: 2,  ga: 2 },
    { year: 2018, stage: "QF", win: 4, draw: 0, loss: 1, gf: 7,  ga: 3 },
    { year: 2014, stage: "R16", win: 2, draw: 0, loss: 2, gf: 4,  ga: 6 },
    { year: 2010, stage: "SF", win: 3, draw: 2, loss: 2, gf: 11, ga: 8 },
    { year: 2002, stage: "GS", win: 0, draw: 2, loss: 1, gf: 4,  ga: 5 }
  ],
  "COL": [
    { year: 2018, stage: "R16", win: 2, draw: 0, loss: 2, gf: 6,  ga: 4 },
    { year: 2014, stage: "QF", win: 4, draw: 0, loss: 1, gf: 12, ga: 4 }
  ],
  "ECU": [
    { year: 2022, stage: "GS", win: 1, draw: 1, loss: 1, gf: 4,  ga: 3 },
    { year: 2014, stage: "GS", win: 1, draw: 1, loss: 1, gf: 3,  ga: 3 },
    { year: 2006, stage: "R16", win: 2, draw: 0, loss: 2, gf: 5,  ga: 4 },
    { year: 2002, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 4 }
  ],
  "CHI": [
    { year: 2014, stage: "R16", win: 2, draw: 0, loss: 2, gf: 6,  ga: 4 },
    { year: 2010, stage: "R16", win: 2, draw: 0, loss: 2, gf: 3,  ga: 5 }
  ],
  "PAR": [
    { year: 2010, stage: "QF", win: 1, draw: 2, loss: 2, gf: 3,  ga: 5 },
    { year: 2006, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 3 },
    { year: 2002, stage: "R16", win: 1, draw: 1, loss: 2, gf: 6,  ga: 7 }
  ],
  "PER": [
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 2 }
  ],

  // ---- 欧洲 ----
  "FRA": [
    { year: 2022, stage: "F",  win: 5, draw: 1, loss: 1, gf: 16, ga: 8 },
    { year: 2018, stage: "W",  win: 6, draw: 1, loss: 0, gf: 14, ga: 5 },
    { year: 2014, stage: "QF", win: 3, draw: 1, loss: 1, gf: 10, ga: 3 },
    { year: 2010, stage: "GS", win: 0, draw: 1, loss: 2, gf: 1,  ga: 4 },
    { year: 2006, stage: "F",  win: 4, draw: 3, loss: 0, gf: 9,  ga: 3 },
    { year: 2002, stage: "GS", win: 0, draw: 1, loss: 2, gf: 0,  ga: 3 }
  ],
  "GER": [
    { year: 2022, stage: "GS", win: 1, draw: 1, loss: 1, gf: 6,  ga: 5 },
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 4 },
    { year: 2014, stage: "W",  win: 6, draw: 1, loss: 0, gf: 18, ga: 4 },
    { year: 2010, stage: "SF", win: 5, draw: 0, loss: 2, gf: 16, ga: 5 },
    { year: 2006, stage: "SF", win: 5, draw: 1, loss: 1, gf: 14, ga: 6 },
    { year: 2002, stage: "F",  win: 5, draw: 1, loss: 1, gf: 14, ga: 3 }
  ],
  "ESP": [
    { year: 2022, stage: "R16", win: 1, draw: 2, loss: 1, gf: 9,  ga: 3 },
    { year: 2018, stage: "R16", win: 1, draw: 3, loss: 0, gf: 7,  ga: 6 },
    { year: 2014, stage: "GS", win: 1, draw: 0, loss: 2, gf: 4,  ga: 7 },
    { year: 2010, stage: "W",  win: 6, draw: 1, loss: 0, gf: 8,  ga: 1 },
    { year: 2006, stage: "R16", win: 3, draw: 0, loss: 1, gf: 9,  ga: 4 },
    { year: 2002, stage: "QF", win: 3, draw: 2, loss: 0, gf: 10, ga: 5 }
  ],
  "ENG": [
    { year: 2022, stage: "QF", win: 3, draw: 1, loss: 1, gf: 13, ga: 4 },
    { year: 2018, stage: "SF", win: 4, draw: 1, loss: 2, gf: 12, ga: 8 },
    { year: 2014, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 4 },
    { year: 2010, stage: "R16", win: 1, draw: 2, loss: 1, gf: 3,  ga: 5 },
    { year: 2006, stage: "QF", win: 3, draw: 2, loss: 0, gf: 6,  ga: 2 },
    { year: 2002, stage: "QF", win: 2, draw: 1, loss: 2, gf: 6,  ga: 3 }
  ],
  "ITA": [
    { year: 2014, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 3 },
    { year: 2010, stage: "GS", win: 0, draw: 2, loss: 1, gf: 4,  ga: 5 },
    { year: 2006, stage: "W",  win: 5, draw: 2, loss: 0, gf: 12, ga: 2 },
    { year: 2002, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 5 }
  ],
  "NED": [
    { year: 2022, stage: "QF", win: 3, draw: 2, loss: 0, gf: 10, ga: 4 },
    { year: 2014, stage: "SF", win: 5, draw: 2, loss: 0, gf: 15, ga: 4 },
    { year: 2010, stage: "F",  win: 6, draw: 0, loss: 1, gf: 12, ga: 4 },
    { year: 2006, stage: "R16", win: 2, draw: 1, loss: 1, gf: 3,  ga: 2 }
  ],
  "POR": [
    { year: 2022, stage: "QF", win: 3, draw: 0, loss: 2, gf: 12, ga: 6 },
    { year: 2018, stage: "R16", win: 1, draw: 2, loss: 1, gf: 6,  ga: 6 },
    { year: 2014, stage: "GS", win: 1, draw: 1, loss: 1, gf: 4,  ga: 7 },
    { year: 2010, stage: "R16", win: 1, draw: 1, loss: 2, gf: 7,  ga: 2 },
    { year: 2006, stage: "SF", win: 3, draw: 0, loss: 2, gf: 5,  ga: 3 },
    { year: 2002, stage: "GS", win: 1, draw: 1, loss: 1, gf: 6,  ga: 4 }
  ],
  "BEL": [
    { year: 2022, stage: "GS", win: 1, draw: 1, loss: 1, gf: 1,  ga: 2 },
    { year: 2018, stage: "SF", win: 6, draw: 0, loss: 1, gf: 16, ga: 6 },
    { year: 2014, stage: "QF", win: 4, draw: 0, loss: 1, gf: 6,  ga: 3 },
    { year: 2002, stage: "R16", win: 1, draw: 1, loss: 2, gf: 6,  ga: 7 }
  ],
  "CRO": [
    { year: 2022, stage: "SF", win: 2, draw: 4, loss: 1, gf: 8,  ga: 7 },
    { year: 2018, stage: "F",  win: 4, draw: 2, loss: 1, gf: 13, ga: 7 },
    { year: 2014, stage: "GS", win: 1, draw: 0, loss: 2, gf: 6,  ga: 6 },
    { year: 2006, stage: "GS", win: 0, draw: 2, loss: 1, gf: 2,  ga: 3 },
    { year: 2002, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 3 }
  ],
  "SUI": [
    { year: 2022, stage: "R16", win: 2, draw: 0, loss: 2, gf: 5,  ga: 9 },
    { year: 2018, stage: "R16", win: 1, draw: 2, loss: 1, gf: 5,  ga: 5 },
    { year: 2014, stage: "R16", win: 2, draw: 0, loss: 2, gf: 7,  ga: 7 },
    { year: 2010, stage: "GS", win: 1, draw: 1, loss: 1, gf: 1,  ga: 1 },
    { year: 2006, stage: "R16", win: 2, draw: 1, loss: 1, gf: 4,  ga: 1 }
  ],
  "DEN": [
    { year: 2022, stage: "GS", win: 0, draw: 1, loss: 2, gf: 1,  ga: 3 },
    { year: 2018, stage: "R16", win: 1, draw: 2, loss: 1, gf: 3,  ga: 3 },
    { year: 2010, stage: "GS", win: 1, draw: 0, loss: 2, gf: 3,  ga: 6 },
    { year: 2002, stage: "R16", win: 2, draw: 0, loss: 2, gf: 5,  ga: 7 }
  ],
  "SWE": [
    { year: 2018, stage: "QF", win: 3, draw: 0, loss: 2, gf: 6,  ga: 4 },
    { year: 2006, stage: "R16", win: 1, draw: 2, loss: 1, gf: 3,  ga: 4 },
    { year: 2002, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 6 }
  ],
  "POL": [
    { year: 2022, stage: "R16", win: 1, draw: 1, loss: 2, gf: 3,  ga: 5 },
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 5 },
    { year: 2006, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 4 },
    { year: 2002, stage: "GS", win: 1, draw: 0, loss: 2, gf: 3,  ga: 7 }
  ],
  "SRB": [
    { year: 2022, stage: "GS", win: 0, draw: 1, loss: 2, gf: 5,  ga: 8 },
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 4 },
    { year: 2010, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 3 },
    { year: 2006, stage: "GS", win: 0, draw: 0, loss: 3, gf: 2,  ga: 10 }
  ],
  "CZE": [
    { year: 2006, stage: "GS", win: 1, draw: 0, loss: 2, gf: 3,  ga: 4 }
  ],
  "SVK": [
    { year: 2010, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 7 }
  ],
  "SVN": [
    { year: 2010, stage: "GS", win: 1, draw: 1, loss: 1, gf: 3,  ga: 3 },
    { year: 2002, stage: "GS", win: 0, draw: 0, loss: 3, gf: 2,  ga: 7 }
  ],
  "UKR": [
    { year: 2006, stage: "QF", win: 2, draw: 1, loss: 1, gf: 5,  ga: 4 }
  ],
  "GRE": [
    { year: 2014, stage: "R16", win: 1, draw: 1, loss: 2, gf: 3,  ga: 5 },
    { year: 2010, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 5 }
  ],
  "RUS": [
    { year: 2018, stage: "QF", win: 2, draw: 1, loss: 2, gf: 11, ga: 7 },
    { year: 2014, stage: "GS", win: 0, draw: 2, loss: 1, gf: 2,  ga: 3 },
    { year: 2002, stage: "GS", win: 1, draw: 0, loss: 2, gf: 4,  ga: 4 }
  ],
  "WAL": [
    { year: 2022, stage: "GS", win: 0, draw: 1, loss: 2, gf: 1,  ga: 6 }
  ],
  "ISL": [
    { year: 2018, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 5 }
  ],
  "BIH": [
    { year: 2014, stage: "GS", win: 1, draw: 0, loss: 2, gf: 4,  ga: 4 }
  ],
  "SCG": [
    { year: 2006, stage: "GS", win: 0, draw: 0, loss: 3, gf: 2,  ga: 10 }
  ],

  // ---- 非洲 ----
  "MAR": [
    { year: 2022, stage: "SF", win: 3, draw: 2, loss: 2, gf: 6,  ga: 5 },
    { year: 2018, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 4 }
  ],
  "SEN": [
    { year: 2022, stage: "R16", win: 2, draw: 0, loss: 2, gf: 5,  ga: 7 },
    { year: 2018, stage: "GS", win: 1, draw: 1, loss: 1, gf: 4,  ga: 5 },
    { year: 2002, stage: "QF", win: 1, draw: 2, loss: 2, gf: 5,  ga: 6 }
  ],
  "GHA": [
    { year: 2022, stage: "GS", win: 1, draw: 0, loss: 2, gf: 5,  ga: 7 },
    { year: 2014, stage: "GS", win: 0, draw: 1, loss: 2, gf: 4,  ga: 6 },
    { year: 2010, stage: "QF", win: 2, draw: 2, loss: 1, gf: 5,  ga: 4 },
    { year: 2006, stage: "R16", win: 2, draw: 0, loss: 2, gf: 4,  ga: 6 }
  ],
  "CMR": [
    { year: 2022, stage: "GS", win: 1, draw: 1, loss: 1, gf: 4,  ga: 4 },
    { year: 2014, stage: "GS", win: 0, draw: 0, loss: 3, gf: 1,  ga: 9 },
    { year: 2010, stage: "GS", win: 0, draw: 0, loss: 3, gf: 2,  ga: 5 },
    { year: 2002, stage: "GS", win: 1, draw: 1, loss: 1, gf: 3,  ga: 5 }
  ],
  "NGA": [
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 3,  ga: 5 },
    { year: 2014, stage: "R16", win: 1, draw: 1, loss: 2, gf: 3,  ga: 5 },
    { year: 2010, stage: "GS", win: 0, draw: 1, loss: 2, gf: 3,  ga: 5 },
    { year: 2002, stage: "GS", win: 0, draw: 1, loss: 2, gf: 1,  ga: 3 }
  ],
  "TUN": [
    { year: 2022, stage: "GS", win: 1, draw: 1, loss: 1, gf: 1,  ga: 1 },
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 5,  ga: 8 },
    { year: 2006, stage: "GS", win: 0, draw: 2, loss: 1, gf: 3,  ga: 5 },
    { year: 2002, stage: "GS", win: 0, draw: 1, loss: 2, gf: 1,  ga: 4 }
  ],
  "ALG": [
    { year: 2014, stage: "R16", win: 1, draw: 1, loss: 2, gf: 7,  ga: 7 },
    { year: 2010, stage: "GS", win: 0, draw: 1, loss: 2, gf: 0,  ga: 2 }
  ],
  "CIV": [
    { year: 2014, stage: "GS", win: 1, draw: 0, loss: 2, gf: 4,  ga: 5 },
    { year: 2010, stage: "GS", win: 1, draw: 1, loss: 1, gf: 4,  ga: 3 },
    { year: 2006, stage: "GS", win: 1, draw: 0, loss: 2, gf: 5,  ga: 6 }
  ],
  "RSA": [
    { year: 2010, stage: "GS", win: 1, draw: 1, loss: 1, gf: 3,  ga: 5 },
    { year: 2002, stage: "GS", win: 1, draw: 1, loss: 1, gf: 5,  ga: 5 }
  ],
  "EGY": [
    { year: 2018, stage: "GS", win: 0, draw: 0, loss: 3, gf: 2,  ga: 6 }
  ],
  "TOG": [
    { year: 2006, stage: "GS", win: 0, draw: 0, loss: 3, gf: 1,  ga: 6 }
  ],
  "ANG": [
    { year: 2006, stage: "GS", win: 0, draw: 2, loss: 1, gf: 1,  ga: 2 }
  ],

  // ---- 亚洲 ----
  "JPN": [
    { year: 2022, stage: "R16", win: 2, draw: 1, loss: 1, gf: 5,  ga: 4 },
    { year: 2018, stage: "R16", win: 1, draw: 1, loss: 2, gf: 6,  ga: 7 },
    { year: 2014, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 6 },
    { year: 2010, stage: "R16", win: 2, draw: 0, loss: 2, gf: 5,  ga: 4 },
    { year: 2006, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 7 },
    { year: 2002, stage: "R16", win: 2, draw: 0, loss: 2, gf: 5,  ga: 5 }
  ],
  "KOR": [
    { year: 2022, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 8 },
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 3,  ga: 4 },
    { year: 2014, stage: "GS", win: 0, draw: 1, loss: 2, gf: 3,  ga: 6 },
    { year: 2010, stage: "R16", win: 1, draw: 1, loss: 2, gf: 6,  ga: 8 },
    { year: 2006, stage: "GS", win: 1, draw: 1, loss: 1, gf: 3,  ga: 4 },
    { year: 2002, stage: "SF", win: 3, draw: 2, loss: 2, gf: 7,  ga: 6 }
  ],
  "KSA": [
    { year: 2022, stage: "GS", win: 1, draw: 0, loss: 2, gf: 3,  ga: 5 },
    { year: 2018, stage: "GS", win: 1, draw: 0, loss: 2, gf: 2,  ga: 7 },
    { year: 2006, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 7 },
    { year: 2002, stage: "GS", win: 0, draw: 0, loss: 3, gf: 0,  ga: 12 }
  ],
  "IRN": [
    { year: 2022, stage: "GS", win: 1, draw: 0, loss: 2, gf: 4,  ga: 7 },
    { year: 2018, stage: "GS", win: 1, draw: 1, loss: 1, gf: 2,  ga: 2 },
    { year: 2014, stage: "GS", win: 0, draw: 1, loss: 2, gf: 1,  ga: 4 },
    { year: 2006, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 6 }
  ],
  "AUS": [
    { year: 2022, stage: "R16", win: 1, draw: 0, loss: 3, gf: 4,  ga: 7 },
    { year: 2018, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 5 },
    { year: 2014, stage: "GS", win: 0, draw: 0, loss: 3, gf: 3,  ga: 9 },
    { year: 2010, stage: "GS", win: 1, draw: 1, loss: 1, gf: 3,  ga: 6 },
    { year: 2006, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 6 }
  ],
  "QAT": [
    { year: 2022, stage: "GS", win: 0, draw: 0, loss: 3, gf: 1,  ga: 7 }
  ],
  "PRK": [
    { year: 2010, stage: "GS", win: 0, draw: 0, loss: 3, gf: 1,  ga: 12 }
  ],
  "CHN": [
    { year: 2002, stage: "GS", win: 0, draw: 0, loss: 3, gf: 0,  ga: 9 }
  ],

  // ---- 中北美 ----
  "MEX": [
    { year: 2022, stage: "GS", win: 1, draw: 1, loss: 1, gf: 2,  ga: 3 },
    { year: 2018, stage: "R16", win: 2, draw: 0, loss: 2, gf: 3,  ga: 6 },
    { year: 2014, stage: "R16", win: 2, draw: 1, loss: 1, gf: 5,  ga: 3 },
    { year: 2010, stage: "R16", win: 1, draw: 1, loss: 2, gf: 1,  ga: 5 },
    { year: 2006, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 5 },
    { year: 2002, stage: "R16", win: 2, draw: 1, loss: 1, gf: 4,  ga: 4 }
  ],
  "USA": [
    { year: 2022, stage: "R16", win: 1, draw: 2, loss: 1, gf: 3,  ga: 4 },
    { year: 2014, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 6 },
    { year: 2010, stage: "R16", win: 1, draw: 1, loss: 2, gf: 5,  ga: 5 },
    { year: 2006, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 6 },
    { year: 2002, stage: "QF", win: 2, draw: 1, loss: 2, gf: 7,  ga: 6 }
  ],
  "CRC": [
    { year: 2022, stage: "GS", win: 1, draw: 0, loss: 2, gf: 3,  ga: 11 },
    { year: 2018, stage: "GS", win: 0, draw: 1, loss: 2, gf: 2,  ga: 5 },
    { year: 2014, stage: "QF", win: 2, draw: 2, loss: 1, gf: 5,  ga: 3 },
    { year: 2006, stage: "GS", win: 0, draw: 0, loss: 3, gf: 3,  ga: 11 },
    { year: 2002, stage: "GS", win: 1, draw: 1, loss: 1, gf: 5,  ga: 6 }
  ],
  "CAN": [
    { year: 2022, stage: "GS", win: 0, draw: 0, loss: 3, gf: 2,  ga: 7 }
  ],
  "HON": [
    { year: 2014, stage: "GS", win: 0, draw: 0, loss: 3, gf: 1,  ga: 8 },
    { year: 2010, stage: "GS", win: 0, draw: 1, loss: 2, gf: 0,  ga: 3 }
  ],
  "PAN": [
    { year: 2018, stage: "GS", win: 0, draw: 0, loss: 3, gf: 2,  ga: 11 }
  ],
  "TRI": [
    { year: 2006, stage: "GS", win: 0, draw: 1, loss: 2, gf: 0,  ga: 4 }
  ],
  "JAM": [],

  // ---- 大洋洲 ----
  "NZL": [
    { year: 2010, stage: "GS", win: 0, draw: 3, loss: 0, gf: 2, ga: 2 }
  ]
};

// ================================================================
//  赛场因素配置 (Venue Factor)
// ================================================================
const VENUE_FACTOR_CONFIG = {
  // 海拔影响 (米 → λ调整)
  altitudeEffect: {
    0:     { adj: 0.00, desc: "海平面" },
    500:   { adj: 0.02, desc: "低海拔" },
    1000:  { adj: 0.04, desc: "中低海拔" },
    1500:  { adj: 0.07, desc: "中等海拔" },
    2000:  { adj: 0.12, desc: "高海拔·显著影响" },
    2500:  { adj: 0.18, desc: "高海拔·明显缺氧" },
    3000:  { adj: 0.25, desc: "极端海拔" }
  },
  // 草皮类型影响
  surfaceEffect: {
    "天然草":  { adj: 0.00, desc: "标准" },
    "混合草":  { adj: -0.01, desc: "较快球速" },
    "人工草":  { adj: 0.02, desc: "球速偏慢" }
  },
  // 时区差异影响 (小时)
  timezoneEffect: {
    0: { adj: 0.00 },
    3: { adj: 0.02 },
    6: { adj: 0.05 },
    9: { adj: 0.09 },
    12:{ adj: 0.12 }
  },
  // 驻地距离影响 (km)
  baseDistanceEffect: {
    50:  { adj: 0.00 },
    200: { adj: 0.02 },
    500: { adj: 0.04 },
    1000:{ adj: 0.07 }
  }
};

// ================================================================
//  本届表现 · 渐进权重配置
// ================================================================
const FORM_WEIGHT_SCHEDULE = {
  0: 0.00,   // 赛前：不激活
  1: 0.08,   // 第一轮后：谨慎启用
  2: 0.15,   // 第二轮后：统计意义增强
  3: 0.20,   // 第三轮后：小组赛完整，权重峰值
  4: 0.22,   // R32后
  5: 0.22,   // R16后
  6: 0.22,   // QF后
  7: 0.22    // SF后
};

// ================================================================
//  对手强度系数（基于FIFA排名区间）
// ================================================================
function getOpponentStrength(rank) {
  if (rank <= 5)  return 1.50;
  if (rank <= 10) return 1.35;
  if (rank <= 20) return 1.20;
  if (rank <= 35) return 1.05;
  if (rank <= 50) return 0.95;
  if (rank <= 70) return 0.80;
  return 0.65;
}

// ================================================================
//  比赛阶段系数
// ================================================================
function getStageMultiplier(round, isKnockout) {
  if (isKnockout === 'FINAL') return 1.50;
  if (isKnockout === 'SF')   return 1.40;
  if (isKnockout === 'QF')   return 1.30;
  if (isKnockout === 'R16' || isKnockout === 'R32') return 1.20;
  if (round === 3)  return 1.10;
  if (round === 2)  return 1.05;
  return 1.00;
}

// ================================================================
//  导出到全局
// ================================================================
window.wc2026AllMatches = wc2026AllMatches;
window.HISTORY_INDEX = HISTORY_INDEX;
window.FORM_WEIGHT_SCHEDULE = FORM_WEIGHT_SCHEDULE;
window.VENUE_FACTOR_CONFIG = VENUE_FACTOR_CONFIG;
window.getOpponentStrength = getOpponentStrength;
window.getStageMultiplier = getStageMultiplier;

console.log('✅ matchdata_2026.js 加载完成 — 2026比赛数据层 + 历史索引 + 赛场配置');
console.log('   wc2026AllMatches | HISTORY_INDEX(' + Object.keys(HISTORY_INDEX).length + '队) | FORM_WEIGHT_SCHEDULE');
