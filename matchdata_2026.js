// matchdata_2026.js — 2026世界杯比赛数据层 | V1.74
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
    date: "2026-06-12",
    time: "03:00",
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
    xg: null,
    mediaRating: {
      motm: "基尼奥内斯",
      sources: ["Bundesliga", "Reuters", "ESPN"],
      home: {score: 9, quotes: "墨西哥从第一分钟起就掌控了比赛，基尼奥内斯的闪击为世界杯揭幕定调。即使少一人仍牢牢控制中场，希门尼斯头球锁定胜局。"},
      away: {score: 2, quotes: "南非全场零射正（上半场），两张红牌让球队彻底丧失竞争力。进攻端毫无威胁，这是南非自2010年以来最差的世界杯表现。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|A|KOR|CZE": {
    score: { sh: 2, sa: 1 },
    date: "2026-06-12",
    time: "10:00",
    venue: "阿克伦球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 59, side: "away", scorer: "拉吉斯拉夫·克雷伊奇", type: "header" },
      { min: 67, side: "home", scorer: "黄仁范", type: "shot" },
      { min: 80, side: "home", scorer: "吴贤揆", type: "shot" }
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
    mediaRating: {
      motm: "黄仁范",
      sources: ["FIFA", "ESPN"],
      home: {score: 7, quotes: "韩国在先失一球的情况下展现韧性完成逆转。黄仁范一射一传主导翻盘，吴贤揆锁定胜局。韩国连续第三届世界杯战胜欧洲对手。"},
      away: {score: 5, quotes: "捷克依靠克雷伊奇的头球意外领先，但未能守住优势。门将科瓦日多次神扑才避免更大比分失利，球队整体创造力不足。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|A|CZE|RSA": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-19",
    time: "00:00",
    venue: "阿兹台克球场",
    stage: "group",
    round: 2,
    goals: [
      { min: 6,  side: "home", scorer: "萨迪莱克", type: "shot" },
      { min: 83, side: "away", scorer: "莫科纳",   type: "penalty" }
    ],
    stats: {
      possession:      { h: 38, a: 62 },
      shots:           { h: 11, a: 9 },
      shotsOnTarget:   { h: 3,  a: 4 },
      corners:         { h: 5,  a: 5 },
      fouls:           { h: 12, a: 10 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 69, a: 119 },
      dangerousAttacks:{ h: 31, a: 40 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "拉吉斯拉夫·克雷伊奇",
      sources: ["FIFA", "BBC Sport", "France24"],
      home: {score: 6, quotes: "捷克开局闪电破门——萨迪莱克5分08秒的进球成本届最快。克雷伊奇统领防线几乎守住胜利，但苏尔克的手球让三分变一分。两轮仅积1分出线形势严峻。"},
      away: {score: 6, quotes: "南非连续两场早早落后但展现了顽强韧性。莫科纳点球一蹴而就，巴法纳巴法纳拒绝连败。雨果·布鲁斯的换人调整注入活力，球队仍保有出线希望。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|A|MEX|KOR": {
    score: { sh: 1, sa: 0 },
    date: "2026-06-19",
    time: "09:00",
    venue: "阿克伦球场",
    stage: "group",
    round: 2,
    goals: [
      { min: 50, side: "home", scorer: "罗莫", type: "shot" }
    ],
    stats: {
      possession:      { h: 43, a: 57 },
      shots:           { h: 7,  a: 6 },
      shotsOnTarget:   { h: 4,  a: 2 },
      corners:         { h: 0,  a: 2 },
      fouls:           { h: 9,  a: 7 },
      yellowCards:     { h: 0,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 96, a: 101 },
      dangerousAttacks:{ h: 17, a: 40 }
    },
    attendance: 45522,
    referee: "Gustavo Tejera (URU)",
    xg: null,
    mediaRating: {
      motm: "路易斯·罗莫",
      sources: ["FIFA", "CBS Sports", "ESPN"],
      home: {score: 7, quotes: "墨西哥以一场务实丑陋的胜利成为首支晋级淘汰赛的球队。罗莫抓住金承奎的失误攻入制胜球，门将兰格尔下半场多次神扑力保零封。两连胜零失球锁定A组头名。"},
      away: {score: 5, quotes: "韩国控球率占优但缺乏致命一击。孙兴慜57分钟即被换下，全场2次射正未能转化为进球。末轮对阵南非将成为出线生死战，xG 0.91:0.53 的数据说明韩国值得更好的结果。"}
    },
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
      { min: 79, side: "away", scorer: "马克西·阿劳霍", type: "shot" }
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
    mediaRating: {
      motm: "阿姆里",
      sources: ["Yahoo Sports", "ESPN", "PA"],
      home: {score: 9, quotes: "沙特以弱旅之姿打出钢铁防守，阿姆里的进球让世界震惊。门将阿尔-奥瓦斯全场9次扑救，堪称本届世界杯最佳门将表现之一。这是一场载入亚洲足球史册的平局。"},
      away: {score: 3, quotes: "乌拉圭控球67%、20次射门10次射正却仅入1球。进攻终结严重乏力，阿劳霍直到第80分钟才勉强扳平。这远低于人们对南美劲旅的期待。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|H|ESP|KSA": {
    score: { sh: 4, sa: 0 },
    date: "2026-06-22",
    time: "00:00",
    venue: "梅赛德斯-奔驰体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 10, side: "home", scorer: "亚马尔",     type: "shot",     assist: "奥亚萨尔瓦" },
      { min: 21, side: "home", scorer: "奥亚萨尔瓦", type: "shot",     assist: "拉波尔特" },
      { min: 24, side: "home", scorer: "奥亚萨尔瓦", type: "shot",     assist: "奥尔默" },
      { min: 49, side: "home", scorer: "坦巴蒂",     type: "own_goal" }
    ],
    stats: {
      possession:      { h: 67, a: 33 },
      shots:           { h: 20, a: 2 },
      shotsOnTarget:   { h: 8,  a: 1 },
      corners:         { h: 6,  a: 1 },
      fouls:           { h: 10, a: 2 },
      yellowCards:     { h: 0,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 158,a: 77 },
      dangerousAttacks:{ h: 85, a: 24 }
    },
    attendance: 68239,
    referee: "Raphael Claus (BRA)",
    xg: null,
    mediaRating: {
      motm: "米克尔·奥亚萨尔瓦",
      sources: ["FIFA", "Sky Sports", "BBC Sport"],
      home: {score: 9, quotes: "西班牙在首轮被佛得角逼平后强势反弹。亚马尔首次世界杯首发10分钟即破门，奥亚萨尔瓦21分钟梅开二度创造世界杯最快双响纪录之一，坦巴蒂乌龙锦上添花。斗牛士宣告回归。"},
      away: {score: 2, quotes: "沙特阿拉伯遭遇队史第三大世界杯失利。防线在西班牙的传控体系面前土崩瓦解，全场仅1次射正。两轮仅积1分，出线形势岌岌可危。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|H|URU|CPV": {
    score: { sh: 2, sa: 2 },
    date: "2026-06-22",
    time: "06:00",
    venue: "硬石体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 21,    side: "away", scorer: "皮纳",      type: "free_kick" },
      { min: 44,    side: "home", scorer: "阿劳霍",    type: "header" },
      { min: "45+6",side: "home", scorer: "卡诺比奥",  type: "shot",   assist: "阿劳霍" },
      { min: 61,    side: "away", scorer: "瓦雷拉",    type: "shot" }
    ],
    stats: {
      possession:      { h: 65, a: 35 },
      shots:           { h: 10, a: 8 },
      shotsOnTarget:   { h: 2,  a: 4 },
      corners:         { h: 11, a: 4 },
      fouls:           { h: 11, a: 4 },
      yellowCards:     { h: 2,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 119,a: 82 },
      dangerousAttacks:{ h: 81, a: 190 }
    },
    attendance: 64003,
    referee: "Espen Eskås (NOR)",
    xg: null,
    mediaRating: {
      motm: "凯文·皮纳",
      sources: ["FIFA", "Reuters", "The Guardian"],
      home: {score: 5, quotes: "乌拉圭两度领先却两度被追平。阿劳霍和卡诺比奥的进球一度逆转比分，但防线两次低级失误葬送胜局。贝尔萨的球队两连平，出线主动权已不在自己手中。"},
      away: {score: 8, quotes: "佛得角再次震撼世界！继逼平西班牙后，皮纳的任意球和瓦雷拉的反击进球逼平南美劲旅乌拉圭。两战零胜却已斩获两分，非洲新军距离淘汰赛仅一步之遥。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|G|NZL|EGY": {
    score: { sh: 1, sa: 3 },
    date: "2026-06-22",
    time: "09:00",
    venue: "BC体育馆",
    stage: "group",
    round: 2,
    goals: [
      { min: 15, side: "home", scorer: "苏尔曼",     type: "header", assist: "佩恩" },
      { min: 58, side: "away", scorer: "济科",       type: "header", assist: "哈尼" },
      { min: 67, side: "away", scorer: "萨拉赫",     type: "shot",   assist: "济科" },
      { min: 82, side: "away", scorer: "特雷泽盖",   type: "header", assist: "萨拉赫" }
    ],
    stats: {
      possession:      { h: 44, a: 56 },
      shots:           { h: 8,  a: 13 },
      shotsOnTarget:   { h: 5,  a: 7 },
      corners:         { h: 4,  a: 3 },
      fouls:           { h: 14, a: 8 },
      yellowCards:     { h: 2,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 91, a: 118 },
      dangerousAttacks:{ h: 43, a: 51 }
    },
    attendance: 52497,
    referee: "Omar Al Ali (UAE)",
    xg: null,
    mediaRating: {
      motm: "穆罕默德·萨拉赫",
      sources: ["FIFA", "BBC Sport", "ESPN"],
      home: {score: 5, quotes: "新西兰凭借苏尔曼的头球取得梦幻开局，但下半场防线崩盘。面对埃及的强力反扑无力抵挡，两轮仅积1分出线形势严峻。"},
      away: {score: 9, quotes: "埃及收获队史世界杯首胜！萨拉赫一射一传主导逆转，济科和特雷泽盖锦上添花。法老军团下半场连入三球，两轮不败登顶G组。"}
    },
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
    mediaRating: {
      motm: "伊玛姆·阿舒尔",
      sources: ["Sky Sports", "FIFA", "ESPN"],
      home: {score: 4, quotes: "比利时黄金一代名存实亡。上半场零射正，靠卢卡库替补上场22秒制造的乌龙球才避免失利。德布劳内孤掌难鸣，整体表现令人失望。"},
      away: {score: 8, quotes: "埃及距离队史首场世界杯胜利仅差24分钟。阿舒尔的世界波是非洲足球的骄傲，萨拉赫的10号位新角色大放异彩。这支埃及队完全有能力从G组突围。"}
    },
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
    mediaRating: {
      motm: "贾斯特",
      sources: ["The Guardian", "ESPN", "NYT"],
      home: {score: 7, quotes: "伊朗两度落后两度扳平，展现了亚洲足球的顽强韧性。雷扎伊安和莫赫比的进球帮助球队在这场对攻战中拿到宝贵一分。"},
      away: {score: 7, quotes: "新西兰前锋贾斯特梅开二度令人惊艳，但球队两度领先均未能守住。整体表现已远超赛前预期，展现了大洋洲足球的进步。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|G|BEL|IRN": {
    score: { sh: 0, sa: 0 },
    date: "2026-06-22",
    time: "03:00",
    venue: "SoFi体育场",
    stage: "group",
    round: 2,
    goals: [],
    stats: {
      possession:      { h: 70, a: 30 },
      shots:           { h: 17, a: 6 },
      shotsOnTarget:   { h: 7,  a: 3 },
      corners:         { h: 4,  a: 2 },
      fouls:           { h: 7,  a: 9 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 1,  a: 0 },
      attacks:         { h: 154,a: 63 },
      dangerousAttacks:{ h: 96, a: 25 }
    },
    attendance: null,
    referee: "Darío Herrera (ARG)",
    xg: null,
    mediaRating: {
      motm: "阿里雷扎·贝兰万德",
      sources: ["FIFA", "The Guardian", "NYT Athletic"],
      home: {score: 3, quotes: "比利时黄金一代彻底崩塌。70%控球率17次射门却颗粒无收，纳坦·恩戈伊的红牌更是雪上加霜。继首轮被埃及逼平后，红魔两轮零胜垫底G组，面临小组出局危机。"},
      away: {score: 8, quotes: "伊朗用钢铁意志从比利时手中抢走一分。门将贝兰万德多次神扑力保球门不失，塔雷米的进球虽被吹越位但球队整体防守堪称完美。波斯铁骑两轮不败保留出线希望。"}
    },
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
    mediaRating: {
      motm: "姆巴佩",
      sources: ["BBC Sport", "Yahoo Sports", "FIFA"],
      home: {score: 8, quotes: "法国上半场仅0.02预期进球表现低迷，但姆巴佩下半场接管比赛。独中两元成为队史射手王，巴尔科拉的进球锁定胜局。卫冕亚军展现了冠军底蕴。"},
      away: {score: 6, quotes: "塞内加尔上半场表现令人印象深刻，杰克逊击中门柱险些破门。下半场体能下降后被姆巴佩的个人能力击溃，但18岁小将姆巴耶的进球展现了非洲足球的未来。"}
    },
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
    mediaRating: {
      motm: "哈兰德",
      sources: ["FIFA", "ESPN", "Sky Sports"],
      home: {score: 3, quotes: "侯赛因的头球一度扳平比分给球队希望，但后防失误频出导致溃败。全场仅1次射正，最终乌龙球雪上加霜，1-4如实反映了实力差距。"},
      away: {score: 9, quotes: "哈兰德世界杯首秀堪称完美，梅开二度展现超级前锋本色。挪威自1998年以来首场世界杯胜利，14脚传递后的团队进球堪称教科书级别。"}
    },
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
    mediaRating: {
      motm: "梅西",
      sources: ["ESPN", "NYT Athletic", "Fox Sports"],
      home: {score: 10, quotes: "梅西以职业生涯首个世界杯帽子戏法追平克洛泽16球纪录。阿根廷卫冕之旅以完美胜利开局，全场掌控比赛节奏，对手零射正。"},
      away: {score: 3, quotes: "阿尔及利亚面对卫冕冠军毫无还手之力。全场零射正，被梅西的个人能力完全击溃。球队需要在对阵约旦的比赛中迅速反弹。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|J|AUT|JOR": {
    score: { sh: 3, sa: 1 },
    date: "2026-06-17",
    time: "12:00",
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
    mediaRating: {
      motm: "施密德",
      sources: ["ESPN", "The Guardian", "NYT"],
      home: {score: 7, quotes: "奥地利时隔36年再获世界杯胜利。施密德的世界波为比赛定调，替补上场的阿瑙托维奇点球锁定比分。整体表现稳健但仍有提升空间。"},
      away: {score: 5, quotes: "世界杯新军约旦展现了令人尊敬的斗志。奥尔万的反击进球一度将比分扳平，全场11次射门4次射正证明了他们的竞争力。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|K|POR|COD": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-18",
    time: "01:00",
    venue: "BMO球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 6,       side: "home", scorer: "内维斯",   type: "header" },
      { min: "45+5",  side: "away", scorer: "维萨",     type: "header" }
    ],
    stats: {
      possession:      { h: 75, a: 25 },
      shots:           { h: 5,  a: 5 },
      shotsOnTarget:   { h: 1,  a: 2 },
      corners:         { h: 5,  a: 4 },
      fouls:           { h: 9,  a: 10 },
      yellowCards:     { h: 3,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 135,a: 56 },
      dangerousAttacks:{ h: 75, a: 28 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "维萨",
      sources: ["BBC Sport", "Sky Sports"],
      home: {score: 4, quotes: "葡萄牙全场75%控球率却仅1次射正，进攻端严重哑火。C罗打满全场未能破门，内维斯的闪击进球被挥霍。这是一场令人失望的平局。"},
      away: {score: 8, quotes: "刚果民主共和国收获了队史首个世界杯积分。维萨的头球将载入非洲足球史册，五后卫防线完美遏制了葡萄牙的豪华攻击群。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|K|UZB|COL": {
    score: { sh: 1, sa: 3 },
    date: "2026-06-18",
    time: "10:00",
    venue: "NRG体育场",
    stage: "group",
    round: 1,
    goals: [
      { min: 41,      side: "away", scorer: "穆尼奥斯",     type: "shot" },
      { min: 61,      side: "home", scorer: "法伊祖拉耶夫", type: "header" },
      { min: 66,      side: "away", scorer: "迪亚斯",        type: "shot" },
      { min: "90+11", side: "away", scorer: "坎帕斯",        type: "header" }
    ],
    stats: {
      possession:      { h: 40, a: 60 },
      shots:           { h: 6,  a: 11 },
      shotsOnTarget:   { h: 2,  a: 4 },
      corners:         { h: 3,  a: 4 },
      fouls:           { h: 14, a: 11 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 67, a: 98 },
      dangerousAttacks:{ h: 28, a: 41 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "路易斯·迪亚斯",
      sources: ["FIFA", "ESPN", "BBC Sport"],
      home: {score: 6, quotes: "世界杯新军乌兹别克斯坦收获了队史首球。法伊祖拉耶夫的头球一度扳平振奋全场，但面对迪亚斯领衔的南美攻势，中亚劲旅最终难以抵挡哥伦比亚的持续施压。"},
      away: {score: 8, quotes: "路易斯·迪亚斯一传一射统治比赛，穆尼奥斯首开纪录、坎帕斯补时锁定胜局。哥伦比亚在阔别世界杯一届后强势回归，开局即占据K组主动。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|L|ENG|CRO": {
    score: { sh: 4, sa: 2 },
    date: "2026-06-18",
    time: "04:00",
    venue: "大都会人寿球场",
    stage: "group",
    round: 1,
    goals: [
      { min: 12,      side: "home", scorer: "凯恩",       type: "penalty" },
      { min: 36,      side: "away", scorer: "巴图里纳",   type: "shot" },
      { min: 42,      side: "home", scorer: "凯恩",       type: "header" },
      { min: "45+6",  side: "away", scorer: "穆萨",       type: "shot" },
      { min: 47,      side: "home", scorer: "贝林厄姆",   type: "shot" },
      { min: 85,      side: "home", scorer: "拉什福德",   type: "shot" }
    ],
    stats: {
      possession:      { h: 52, a: 48 },
      shots:           { h: 17, a: 8 },
      shotsOnTarget:   { h: 11, a: 5 },
      corners:         { h: 8,  a: 2 },
      fouls:           { h: 10, a: 12 },
      yellowCards:     { h: 0,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 87, a: 81 },
      dangerousAttacks:{ h: 33, a: 38 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "凯恩",
      sources: ["England Football", "NYT Athletic"],
      home: {score: 9, quotes: "英格兰以一场酣畅淋漓的4-2开启世界杯征程。凯恩梅开二度主导进攻，贝林厄姆和拉什福德各入一球，17次射门11次射正展现了强大的攻击火力。"},
      away: {score: 6, quotes: "克罗地亚展现了顽强斗志，巴图里纳和穆萨的进球两度将比分追平。但防线最终无法抵挡英格兰的持续施压，首战失利但仍展现了竞争力。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|L|GHA|PAN": {
    score: { sh: 1, sa: 0 },
    date: "2026-06-18",
    time: "07:00",
    venue: "流明球场",
    stage: "group",
    round: 1,
    goals: [
      { min: "90+5", side: "home", scorer: "伊伦基", type: "shot" }
    ],
    stats: {
      possession:      { h: 38, a: 62 },
      shots:           { h: 6,  a: 9 },
      shotsOnTarget:   { h: 2,  a: 4 },
      corners:         { h: 2,  a: 2 },
      fouls:           { h: 9,  a: 11 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 93, a: 101 },
      dangerousAttacks:{ h: 35, a: 60 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "安托万·塞梅尼奥",
      sources: ["FIFA", "ESPN", "BBC Sport"],
      home: {score: 7, quotes: "加纳在缺少托马斯·帕尔特伊且门将阿蒂-齐吉半场伤退的困境下坚持到了最后。伊伦基第95分钟绝杀让黑色之星在艰难条件下拿到宝贵三分，奎罗斯创纪录连续五届世界杯执教。"},
      away: {score: 5, quotes: "巴拿马距离队史首个世界杯积分仅差几秒。沃特曼和拉莫斯上半场均错失良机，防线在最后时刻的松懈代价沉重，但球队整体展现了难得的竞争力。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  // B组
  "2026|B|CAN|BIH": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-12", time: "07:00", venue: "BMO球场", stage: "group", round: 1,
    goals: [{ min: 21, side: "away", scorer: "约沃·卢基奇", type: "header" },{ min: 78, side: "home", scorer: "赛尔·拉林", type: "shot" }],
    stats: { possession:{h:55,a:45}, shots:{h:8,a:7}, shotsOnTarget:{h:4,a:3}, corners:{h:5,a:2}, fouls:{h:11,a:13}, yellowCards:{h:1,a:2}, redCards:{h:0,a:0}, attacks:{h:92,a:76}, dangerousAttacks:{h:42,a:28} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "拉林", sources: ["ESPN", "AP News"], home: {score: 7, quotes: "加拿大在主场球迷面前展现了顽强斗志，拉林的替补扳平球为球队赢得历史性的首个世界杯积分。戴维斯全场活跃但未能破门。"}, away: {score: 6, quotes: "波黑凭借卢基奇的头球破门一度看到胜利希望，但未能守住领先。球队整体防守组织尚可，进攻端创造力不足是最大问题。"} },
    aiPreMatch: null, aiPostReview: null
  },

  "2026|B|SUI|BIH": {
    score: { sh: 4, sa: 1 },
    date: "2026-06-19",
    time: "03:00",
    venue: "SoFi体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 74,    side: "home", scorer: "曼赞比",   type: "shot" },
      { min: 84,    side: "home", scorer: "巴尔加斯", type: "shot" },
      { min: 90,    side: "home", scorer: "曼赞比",   type: "shot" },
      { min: "90+3",side: "away", scorer: "马赫米奇", type: "shot" },
      { min: "90+7",side: "home", scorer: "扎卡",     type: "penalty" }
    ],
    stats: {
      possession:      { h: 62, a: 38 },
      shots:           { h: 10, a: 4 },
      shotsOnTarget:   { h: 7,  a: 3 },
      corners:         { h: 7,  a: 3 },
      fouls:           { h: 7,  a: 18 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 0,  a: 1 },
      attacks:         { h: 115,a: 65 },
      dangerousAttacks:{ h: 60, a: 21 }
    },
    attendance: 70026,
    referee: "João Pinheiro (POR)",
    xg: null,
    mediaRating: {
      motm: "曼赞比",
      sources: ["FIFA", "BBC Sport", "Wikipedia"],
      home: {score: 9, quotes: "瑞士替补奇兵曼赞比梅开二度导演大逆转，第72分钟上场后彻底改写战局。扎卡全场统治中场并罚入点球，巴尔加斯锦上添花。瑞士4-1大胜后积4分领跑B组。"},
      away: {score: 3, quotes: "波黑在前74分钟顽强守住平局，但瑞士换上三名替补后防线瞬间崩盘。哲科仅踢63分钟便被换下，全场18次犯规暴露了球队的无奈与失控。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|B|CAN|QAT": {
    score: { sh: 6, sa: 0 },
    date: "2026-06-19",
    time: "06:00",
    venue: "BC体育馆",
    stage: "group",
    round: 2,
    goals: [
      { min: 16,    side: "home", scorer: "拉林",   type: "shot" },
      { min: 29,    side: "home", scorer: "戴维",   type: "shot" },
      { min: "45+3",side: "home", scorer: "戴维",   type: "shot" },
      { min: 64,    side: "home", scorer: "萨利巴", type: "free_kick" },
      { min: 75,    side: "home", scorer: "马纳伊", type: "own_goal" },
      { min: "90+2",side: "home", scorer: "戴维",   type: "shot" }
    ],
    stats: {
      possession:      { h: 67, a: 33 },
      shots:           { h: 18, a: 1 },
      shotsOnTarget:   { h: 10, a: 0 },
      corners:         { h: 19, a: 1 },
      fouls:           { h: 9,  a: 10 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 2 },
      attacks:         { h: 165,a: 35 },
      dangerousAttacks:{ h: 154,a: 3 }
    },
    attendance: 52497,
    referee: "Cristián Garay (CHI)",
    xg: null,
    mediaRating: {
      motm: "乔纳森·戴维",
      sources: ["FIFA", "Wikipedia", "Sportsnet"],
      home: {score: 10, quotes: "加拿大以一场6-0的史诗级大胜创造了中北美及加勒比地区世界杯最大分差纪录，这也是加拿大男足世界杯历史首胜。戴维帽子戏法、拉林和萨利巴锦上添花，东道主全面碾压。"},
      away: {score: 1, quotes: "卡塔尔遭遇世界杯史上最惨痛失利之一，全场零射正、两张红牌的灾难表现令人震惊。防线在加拿大持续高压下彻底崩溃，阿费夫完全隐身。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },
  "2026|B|QAT|SUI": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-13", time: "07:00", venue: "李维斯体育场", stage: "group", round: 1,
    goals: [{ min: 17, side: "away", scorer: "恩博洛", type: "penalty" },{ min: "90+5", side: "home", scorer: "胡希", type: "header" }],
    stats: { possession:{h:35,a:65}, shots:{h:5,a:16}, shotsOnTarget:{h:2,a:8}, corners:{h:2,a:7}, fouls:{h:13,a:6}, yellowCards:{h:3,a:0}, redCards:{h:0,a:0}, attacks:{h:58,a:128}, dangerousAttacks:{h:18,a:63} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "胡希", sources: ["FIFA", "ESPN"], home: {score: 8, quotes: "卡塔尔在伤停补时阶段戏剧性扳平，收获了队史首个世界杯积分。胡希的头球让整个海湾国家为之沸腾，这是属于卡塔尔足球的历史性时刻。"}, away: {score: 4, quotes: "瑞士控制了整场比赛却未能锁定胜局，恩博洛的点球本应足够。最后时刻的防守松懈让到手的三分变成一分，这可能是小组出线的致命失误。"} },
    aiPreMatch: null, aiPostReview: null
  },

  // C组
  "2026|C|BRA|MAR": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-13", time: "10:00", venue: "大都会人寿球场", stage: "group", round: 1,
    goals: [{ min: 21, side: "away", scorer: "赛巴里", type: "shot" },{ min: 32, side: "home", scorer: "维尼修斯", type: "shot" }],
    stats: { possession:{h:58,a:42}, shots:{h:14,a:6}, shotsOnTarget:{h:6,a:3}, corners:{h:8,a:1}, fouls:{h:8,a:15}, yellowCards:{h:1,a:3}, redCards:{h:0,a:0}, attacks:{h:118,a:62}, dangerousAttacks:{h:56,a:24} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "维尼修斯", sources: ["NYT", "ESPN"], home: {score: 6, quotes: "巴西占据场面优势但未能转化为胜利。维尼修斯的扳平球展现了个人能力，但整体创造力和终结效率远低于人们对夺冠热门的期待。"}, away: {score: 8, quotes: "摩洛哥再次证明了他们在世界杯舞台上的竞争力。赛巴里的闪电进球让世界震惊，全队纪律严明的防守成功遏制了巴西的豪华攻击群。"} },
    aiPreMatch: null, aiPostReview: null
  },
  "2026|C|HAI|SCO": {
    score: { sh: 0, sa: 1 },
    date: "2026-06-13", time: "12:00", venue: "吉列体育场", stage: "group", round: 1,
    goals: [{ min: 28, side: "away", scorer: "麦金", type: "deflected" }],
    stats: { possession:{h:38,a:62}, shots:{h:4,a:13}, shotsOnTarget:{h:1,a:5}, corners:{h:2,a:9}, fouls:{h:15,a:8}, yellowCards:{h:2,a:1}, redCards:{h:0,a:0}, attacks:{h:55,a:106}, dangerousAttacks:{h:19,a:48} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "麦金", sources: ["ESPN", "NYT"], home: {score: 4, quotes: "海地首次世界杯之旅以失利开局，全场仅4次射门1次射正。球队展现了斗志但技战术层面与对手存在明显差距。"}, away: {score: 7, quotes: "苏格兰凭借麦金折射入网的进球取得开门红。球队掌控了比赛节奏，创造了大量机会但仅入一球，进攻效率有待提高。"} },
    aiPreMatch: null, aiPostReview: null
  },

  "2026|C|SCO|MAR": {
    score: { sh: 0, sa: 1 },
    date: "2026-06-20",
    time: "06:00",
    venue: "吉列体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 2, side: "away", scorer: "赛巴里", type: "shot" }
    ],
    stats: {
      possession:      { h: 41, a: 59 },
      shots:           { h: 3,  a: 8 },
      shotsOnTarget:   { h: 0,  a: 2 },
      corners:         { h: 2,  a: 5 },
      fouls:           { h: 11, a: 8 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 78, a: 97 },
      dangerousAttacks:{ h: 41, a: 42 }
    },
    attendance: null,
    referee: "Ilgiz Tantashev (UZB)",
    xg: null,
    mediaRating: {
      motm: "伊斯梅尔·赛巴里",
      sources: ["FIFA", "NYT Athletic", "BBC Sport"],
      home: {score: 4, quotes: "苏格兰开场70秒即丢球惨遭噩梦开局。全场零射正、控球率仅41%，麦金和麦克托米奈未能复制首轮表现，球队末轮需死磕巴西才能保住出线希望。"},
      away: {score: 7, quotes: "赛巴里以本届世界杯最快进球（70秒）一击制胜，延续了首轮对巴西时的火热状态。摩洛哥全场59%控球掌控节奏，阿什拉夫领衔的防线零封对手，两轮不败领跑C组。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|C|BRA|HAI": {
    score: { sh: 3, sa: 0 },
    date: "2026-06-20",
    time: "08:30",
    venue: "林肯金融球场",
    stage: "group",
    round: 2,
    goals: [
      { min: 23,    side: "home", scorer: "库尼亚",     type: "shot" },
      { min: 36,    side: "home", scorer: "库尼亚",     type: "shot" },
      { min: "45+3",side: "home", scorer: "维尼修斯",   type: "shot" }
    ],
    stats: {
      possession:      { h: 56, a: 44 },
      shots:           { h: 7,  a: 6 },
      shotsOnTarget:   { h: 5,  a: 3 },
      corners:         { h: 4,  a: 4 },
      fouls:           { h: 13, a: 14 },
      yellowCards:     { h: 1,  a: 3 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 102,a: 94 },
      dangerousAttacks:{ h: 40, a: 32 }
    },
    attendance: 68324,
    referee: "Alejandro Hernández Hernández (ESP)",
    xg: null,
    mediaRating: {
      motm: "维尼修斯·儒尼奥尔",
      sources: ["FIFA", "ESPN", "AP News"],
      home: {score: 8, quotes: "巴西三球完胜海地，库尼亚回归首发即梅开二度，维尼修斯一射一传锁定胜局。五星巴西以一场稳健表现升至C组头名，海地提前一轮出局。"},
      away: {score: 3, quotes: "海地面对巴西的强大火力毫无还手之力。全场仅3次射正，两连败提前出局，但球队在世界杯舞台上展现的斗志仍值得尊敬。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  // D组
  "2026|D|USA|PAR": {
    score: { sh: 4, sa: 1 },
    date: "2026-06-12", time: "10:00", venue: "SoFi体育场", stage: "group", round: 1,
    goals: [{ min: 8, side: "home", scorer: "达米安·博瓦迪利亚", type: "own_goal" },{ min: 31, side: "home", scorer: "巴洛贡", type: "shot" },{ min: 50, side: "home", scorer: "巴洛贡", type: "shot" },{ min: 74, side: "away", scorer: "毛里西奥·普拉多", type: "shot" },{ min: "90+8", side: "home", scorer: "雷纳", type: "shot" }],
    stats: { possession:{h:57,a:43}, shots:{h:16,a:6}, shotsOnTarget:{h:9,a:2}, corners:{h:7,a:3}, fouls:{h:8,a:12}, yellowCards:{h:0,a:2}, redCards:{h:0,a:0}, attacks:{h:104,a:72}, dangerousAttacks:{h:52,a:25} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "巴洛贡", sources: ["ESPN", "Olympics.com", "BBC Sport"], home: {score: 9, quotes: "美国队以一场酣畅淋漓的4-1大胜开启主场世界杯征程。博瓦迪利亚的乌龙球早早打破僵局，巴洛贡梅开二度主导进攻，雷纳补时锦上添花，东道主展现了强大火力。"}, away: {score: 4, quotes: "巴拉圭面对东道主的凌厉攻势难以招架。毛里西奥的进球是唯一的亮点，恩西索的助攻展现了个人能力，但球队防线漏洞百出，需要在后续比赛中迅速调整。"} },
    aiPreMatch: null, aiPostReview: null
  },
  "2026|D|AUS|TUR": {
    score: { sh: 2, sa: 0 },
    date: "2026-06-14", time: "03:00", venue: "BC体育馆", stage: "group", round: 1,
    goals: [{ min: 27, side: "home", scorer: "伊兰昆达", type: "shot" },{ min: 75, side: "home", scorer: "梅特卡夫", type: "shot" }],
    stats: { possession:{h:42,a:58}, shots:{h:9,a:12}, shotsOnTarget:{h:5,a:3}, corners:{h:4,a:8}, fouls:{h:12,a:10}, yellowCards:{h:2,a:3}, redCards:{h:0,a:1}, attacks:{h:71,a:98}, dangerousAttacks:{h:30,a:45} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "伊兰昆达", sources: ["ESPN", "NYT"], home: {score: 8, quotes: "澳大利亚以一场令人印象深刻的胜利爆冷击败土耳其。伊兰昆达和梅特卡夫的进球展现了澳洲足球的新生力量，防守端零封对手同样值得称赞。"}, away: {score: 3, quotes: "土耳其时隔24年重返世界杯却遭遇当头棒喝。控球率占优却无法转化为进球，一张红牌更是雪上加霜。球队需要重新审视战术布置。"} },
    aiPreMatch: null, aiPostReview: null
  },

  // E组
  "2026|E|GER|CUW": {
    score: { sh: 7, sa: 1 },
    date: "2026-06-14", time: "06:00", venue: "NRG体育场", stage: "group", round: 1,
    goals: [{ min: 6, side: "home", scorer: "费利克斯·恩梅查", type: "shot" },{ min: 21, side: "away", scorer: "利瓦诺·科梅内西亚", type: "shot" },{ min: 38, side: "home", scorer: "尼科·施洛特贝克", type: "header" },{ min: 50, side: "home", scorer: "凯·哈弗茨", type: "penalty" },{ min: 47, side: "home", scorer: "贾马尔·穆西亚拉", type: "shot" },{ min: 68, side: "home", scorer: "纳撒尼尔·布朗", type: "shot" },{ min: 78, side: "home", scorer: "德尼茨·翁达夫", type: "shot" },{ min: 88, side: "home", scorer: "凯·哈弗茨", type: "shot" }],
    stats: { possession:{h:72,a:28}, shots:{h:24,a:3}, shotsOnTarget:{h:14,a:1}, corners:{h:11,a:0}, fouls:{h:4,a:8}, yellowCards:{h:0,a:1}, redCards:{h:0,a:0}, attacks:{h:145,a:35}, dangerousAttacks:{h:78,a:8} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "哈弗茨", sources: ["FIFA", "ESPN", "BBC Sport"], home: {score: 10, quotes: "德国以一场摧枯拉朽的7-1大胜宣告王者归来。恩梅查闪击破门，施洛特贝克头球建功，哈弗茨梅开二度，穆西亚拉、布朗和翁达夫各入一球。全方位碾压式的表现让世界为之侧目，德国成为世界杯历史总进球最多球队。"}, away: {score: 2, quotes: "库拉索的世界杯首秀遭遇噩梦般的洗礼。科梅内西亚打入队史世界杯首球挽回些许颜面，但全场仅3次射门的数据如实反映了巨大的实力鸿沟。"} },
    aiPreMatch: null, aiPostReview: null
  },

  "2026|D|USA|AUS": {
    score: { sh: 2, sa: 0 },
    date: "2026-06-20",
    time: "03:00",
    venue: "流明球场",
    stage: "group",
    round: 2,
    goals: [
      { min: 11, side: "home", scorer: "伯吉斯", type: "own_goal" },
      { min: 43, side: "home", scorer: "弗里曼", type: "header" }
    ],
    stats: {
      possession:      { h: 62, a: 38 },
      shots:           { h: 4,  a: 5 },
      shotsOnTarget:   { h: 2,  a: 2 },
      corners:         { h: 7,  a: 4 },
      fouls:           { h: 12, a: 16 },
      yellowCards:     { h: 3,  a: 4 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 124,a: 78 },
      dangerousAttacks:{ h: 60, a: 40 }
    },
    attendance: 66925,
    referee: "Felix Zwayer (GER)",
    xg: null,
    mediaRating: {
      motm: "福拉林·巴洛贡",
      sources: ["FIFA", "BBC Sport", "NYT Athletic"],
      home: {score: 8, quotes: "美国在普利西奇缺阵下依然全面碾压对手。伯吉斯的乌龙球早早打破僵局，弗里曼头球锁定胜局。巴洛贡全场串联进攻荣获全场最佳，美国成为第三支提前晋级淘汰赛的球队。"},
      away: {score: 4, quotes: "澳大利亚全场难以应对东道主的高压逼抢，上半场仅一次射门。波波维奇半场连换三人试图扭转局势但收效甚微，球队末轮需击败巴拉圭才能确保出线。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|D|TUR|PAR": {
    score: { sh: 0, sa: 1 },
    date: "2026-06-20",
    time: "11:00",
    venue: "李维斯体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 2, side: "away", scorer: "加拉尔塞", type: "shot" }
    ],
    stats: {
      possession:      { h: 72, a: 28 },
      shots:           { h: 20, a: 5 },
      shotsOnTarget:   { h: 5,  a: 2 },
      corners:         { h: 12, a: 0 },
      fouls:           { h: 14, a: 15 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 1 },
      attacks:         { h: 161,a: 80 },
      dangerousAttacks:{ h: 125,a: 20 }
    },
    attendance: 68827,
    referee: "Iván Barton (SLV)",
    xg: null,
    mediaRating: {
      motm: "马蒂亚斯·加拉尔塞",
      sources: ["FIFA", "AP News", "RTE"],
      home: {score: 3, quotes: "土耳其控球72%、狂轰20脚射门却颗粒无收。加拉尔塞65秒闪电破门后十人应战的巴拉圭反而守住胜果，土耳其两连败提前出局，暴殄天物的进攻效率令人震惊。"},
      away: {score: 8, quotes: "十人巴拉圭用钢铁意志守住了加拉尔塞65秒闪电进球创造的领先。全场仅28%控球却完成世界杯史上最顽强的胜利之一，重燃出线希望。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },
  "2026|E|CIV|ECU": {
    score: { sh: 1, sa: 0 },
    date: "2026-06-14", time: "09:00", venue: "AT&T体育场", stage: "group", round: 1,
    goals: [{ min: 90, side: "home", scorer: "阿马德·迪亚洛", type: "shot" }],
    stats: { possession:{h:46,a:54}, shots:{h:10,a:8}, shotsOnTarget:{h:4,a:2}, corners:{h:5,a:6}, fouls:{h:11,a:12}, yellowCards:{h:2,a:2}, redCards:{h:0,a:0}, attacks:{h:83,a:91}, dangerousAttacks:{h:35,a:32} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "阿马德·迪亚洛", sources: ["ESPN", "Fox Sports"], home: {score: 8, quotes: "科特迪瓦凭借迪亚洛第90分钟的绝杀取得开门红。比赛大部分时间势均力敌，但科特迪瓦在关键时刻展现了更强的把握能力。"}, away: {score: 5, quotes: "厄瓜多尔掌控了场面却未能转化为进球。球队在比赛末段的防守松懈付出了惨痛代价，首战失利让小组出线形势变得严峻。"} },
    aiPreMatch: null, aiPostReview: null
  },

  "2026|E|GER|CIV": {
    score: { sh: 2, sa: 1 },
    date: "2026-06-21",
    time: "04:00",
    venue: "BMO球场",
    stage: "group",
    round: 2,
    goals: [
      { min: 30,    side: "away", scorer: "凯西",    type: "shot" },
      { min: 68,    side: "home", scorer: "翁达夫",  type: "shot" },
      { min: "90+4",side: "home", scorer: "翁达夫",  type: "shot" }
    ],
    stats: {
      possession:      { h: 59, a: 41 },
      shots:           { h: 12, a: 4 },
      shotsOnTarget:   { h: 7,  a: 2 },
      corners:         { h: 8,  a: 3 },
      fouls:           { h: 5,  a: 7 },
      yellowCards:     { h: 0,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 134,a: 98 },
      dangerousAttacks:{ h: 73, a: 51 }
    },
    attendance: 43036,
    referee: "Juan Gabriel Benítez (PAR)",
    xg: null,
    mediaRating: {
      motm: "德尼兹·翁达夫",
      sources: ["FIFA", "NYT Athletic", "ESPN"],
      home: {score: 7, quotes: "德国在先失一球的情况下展现冠军底蕴。替补登场的翁达夫梅开二度完成逆转绝杀，两连胜提前锁定淘汰赛席位。凯西的世界波曾让科特迪瓦看到希望。"},
      away: {score: 6, quotes: "科特迪瓦凭借凯西的个人能力率先破门，防守端顽强抵抗了68分钟。但面对德国的持续施压最终未能守住领先，末轮对阵库拉索将是出线关键战。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|E|ECU|CUW": {
    score: { sh: 0, sa: 0 },
    date: "2026-06-21",
    time: "08:00",
    venue: "箭头体育场",
    stage: "group",
    round: 2,
    goals: [],
    stats: {
      possession:      { h: 75, a: 25 },
      shots:           { h: 26, a: 8 },
      shotsOnTarget:   { h: 15, a: 3 },
      corners:         { h: 9,  a: 0 },
      fouls:           { h: 7,  a: 10 },
      yellowCards:     { h: 1,  a: 5 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 156,a: 68 },
      dangerousAttacks:{ h: 95, a: 20 }
    },
    attendance: 68598,
    referee: "Ma Ning (CHN)",
    xg: null,
    mediaRating: {
      motm: "埃洛伊·鲁姆",
      sources: ["FIFA", "Sky Sports", "BBC Sport"],
      home: {score: 2, quotes: "厄瓜多尔75%控球率、26次射门15次射正却颗粒无收，堪称世界杯史上最令人沮丧的进攻表现之一。面对库拉索门将鲁姆的15次神扑，南美劲旅完全束手无策。"},
      away: {score: 9, quotes: "库拉索收获了队史首个世界杯积分！门将鲁姆以15次扑救刷新世界杯单场纪录，全队用血肉之躯筑起钢铁防线，这场0-0堪比一场史诗级胜利。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  // F组
  "2026|F|NED|JPN": {
    score: { sh: 2, sa: 2 },
    date: "2026-06-14", time: "12:00", venue: "SoFi体育场", stage: "group", round: 1,
    goals: [{ min: 51, side: "home", scorer: "维吉尔·范戴克", type: "header" },{ min: 57, side: "away", scorer: "中村敬斗", type: "shot" },{ min: 64, side: "home", scorer: "克莱森西奥·萨默维尔", type: "shot" },{ min: 88, side: "away", scorer: "镰田大地", type: "header" }],
    stats: { possession:{h:55,a:45}, shots:{h:13,a:9}, shotsOnTarget:{h:7,a:5}, corners:{h:6,a:3}, fouls:{h:9,a:10}, yellowCards:{h:1,a:1}, redCards:{h:0,a:0}, attacks:{h:102,a:88}, dangerousAttacks:{h:48,a:39} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "镰田大地", sources: ["ESPN", "NYT", "The Guardian"], home: {score: 6, quotes: "荷兰两度领先却两度被追平，防守端的松懈让到手的三分溜走。范戴克和萨默维尔的进球展现了攻击力，但整体缺乏杀死比赛的决心。"}, away: {score: 8, quotes: "日本展现了惊人的韧性，两度落后两度扳平。中村敬斗和镰田大地的进球让亚洲足球再次闪耀世界舞台，小川航基的助攻同样关键，这场平局堪比一场胜利。"} },
    aiPreMatch: null, aiPostReview: null
  },
  "2026|F|SWE|TUN": {
    score: { sh: 5, sa: 1 },
    date: "2026-06-14", time: "15:00", venue: "BMO球场", stage: "group", round: 1,
    goals: [{ min: 7, side: "home", scorer: "阿亚里", type: "shot" },{ min: 30, side: "home", scorer: "伊萨克", type: "shot" },{ min: 43, side: "away", scorer: "雷基克", type: "header" },{ min: 60, side: "home", scorer: "哲凯赖什", type: "shot" },{ min: 86, side: "home", scorer: "斯万贝里", type: "shot" },{ min: "90+6", side: "home", scorer: "阿亚里", type: "shot" }],
    stats: { possession:{h:60,a:40}, shots:{h:18,a:5}, shotsOnTarget:{h:10,a:2}, corners:{h:7,a:2}, fouls:{h:7,a:14}, yellowCards:{h:0,a:2}, redCards:{h:0,a:0}, attacks:{h:122,a:58}, dangerousAttacks:{h:64,a:18} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "阿亚里", sources: ["ESPN", "BBC"], home: {score: 9, quotes: "瑞典以一场摧枯拉朽的5-1大胜开启世界杯。阿亚里梅开二度，伊萨克、哲凯赖什和斯万贝里各入一球，进攻端全面开花展现了北欧劲旅的强大实力。"}, away: {score: 3, quotes: "突尼斯面对瑞典的凌厉攻势毫无还手之力。雷基克的头球是唯一的亮点，但防线漏洞百出让球队遭遇了惨痛失利。"} },
    aiPreMatch: null, aiPostReview: null
  },

  "2026|F|NED|SWE": {
    score: { sh: 5, sa: 1 },
    date: "2026-06-21",
    time: "01:00",
    venue: "NRG体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 5,  side: "home", scorer: "布比罗", type: "shot" },
      { min: 17, side: "home", scorer: "布比罗", type: "shot" },
      { min: 47, side: "home", scorer: "加克波", type: "shot" },
      { min: 54, side: "home", scorer: "加克波", type: "shot" },
      { min: 59, side: "away", scorer: "安东尼", type: "shot" },
      { min: 89, side: "home", scorer: "孟菲斯", type: "shot" }
    ],
    stats: {
      possession:      { h: 51, a: 49 },
      shots:           { h: 9,  a: 13 },
      shotsOnTarget:   { h: 7,  a: 8 },
      corners:         { h: 2,  a: 5 },
      fouls:           { h: 9,  a: 12 },
      yellowCards:     { h: 0,  a: 3 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 109,a: 65 },
      dangerousAttacks:{ h: 50, a: 49 }
    },
    attendance: 68777,
    referee: "Michael Oliver (ENG)",
    xg: null,
    mediaRating: {
      motm: "科迪·加克波",
      sources: ["FIFA", "BBC Sport", "ESPN"],
      home: {score: 9, quotes: "荷兰以一场5-1大胜扫除首轮阴霾。布比罗和加克波双双梅开二度，孟菲斯锦上添花。瑞典遭遇自1950年以来世界杯最大失利，荷兰几乎锁定出线。"},
      away: {score: 3, quotes: "瑞典遭遇队史第二大世界杯惨败。埃兰加的进球是唯一亮点，防线面对荷兰的速度冲击完全崩盘，末轮需击败日本确保晋级。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|F|TUN|JPN": {
    score: { sh: 0, sa: 4 },
    date: "2026-06-21",
    time: "12:00",
    venue: "BBVA体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 4,  side: "away", scorer: "镰田大地", type: "shot",   assist: "中村敬斗" },
      { min: 31, side: "away", scorer: "上田绮世", type: "shot",   assist: "板仓晃" },
      { min: 69, side: "away", scorer: "伊东纯也", type: "shot",   assist: "上田绮世" },
      { min: 83, side: "away", scorer: "上田绮世", type: "header", assist: "佐野海舟" }
    ],
    stats: {
      possession:      { h: 38, a: 62 },
      shots:           { h: 2,  a: 8 },
      shotsOnTarget:   { h: 0,  a: 5 },
      corners:         { h: 3,  a: 5 },
      fouls:           { h: 8,  a: 15 },
      yellowCards:     { h: 0,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 78, a: 112 },
      dangerousAttacks:{ h: 21, a: 36 }
    },
    attendance: 51243,
    referee: "István Kovács (ROU)",
    xg: null,
    mediaRating: {
      motm: "上田绮世",
      sources: ["FIFA", "The Guardian", "ESPN"],
      home: {score: 2, quotes: "突尼斯以一场惨败告别世界杯。两连败、失9球仅入1球，新任主帅勒纳尔无力回天。全场零射正是球队攻击力匮乏的真实写照。"},
      away: {score: 9, quotes: "日本以一场4-0大胜在世界杯第1000场里程碑之战中创造历史。上田绮世两射一传闪耀全场，镰田大地和伊东纯也锦上添花，蓝武士两轮不败紧追荷兰。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  // H组
  "2026|H|ESP|CPV": {
    score: { sh: 0, sa: 0 },
    date: "2026-06-15", time: "03:00", venue: "梅赛德斯-奔驰体育场", stage: "group", round: 1,
    goals: [],
    stats: { possession:{h:72,a:28}, shots:{h:18,a:2}, shotsOnTarget:{h:7,a:1}, corners:{h:12,a:0}, fouls:{h:6,a:14}, yellowCards:{h:0,a:3}, redCards:{h:0,a:0}, attacks:{h:152,a:38}, dangerousAttacks:{h:72,a:9} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "沃济尼亚", sources: ["BBC", "NYT"], home: {score: 4, quotes: "西班牙全场72%控球率、18次射门却颗粒无收。这是本届世界杯迄今最大冷门，豪华攻击群在面对佛得角的铁桶阵时完全哑火。"}, away: {score: 10, quotes: "佛得角以一场史诗级的0-0逼平创造了世界杯历史。门将沃济尼亚多次神扑力保球门不失，全队的防守纪律和牺牲精神堪称教科书级别。这是属于非洲足球的骄傲时刻。"} },
    aiPreMatch: null, aiPostReview: null
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
  1: 0.25,   // 第一轮后：单场即有统计信号
  2: 0.35,   // 第二轮后：信号增强
  3: 0.42,   // 第三轮后：小组赛完整
  4: 0.47,   // R32后
  5: 0.50,   // R16后
  6: 0.50,   // QF后
  7: 0.50    // SF后
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
