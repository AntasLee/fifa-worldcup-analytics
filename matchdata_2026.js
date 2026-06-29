// matchdata_2026.js — 2026世界杯比赛数据层 | V1.81
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
//   阶段: A~L(小组) / R32 / R16 / QF / SF / TP / FINAL
//   V1.81: R32 淘汰赛 16 场全部写入，基于 FIFA 官方确认对阵 (2026-06-28)
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
      { min: 66,    side: "home", scorer: "姆巴佩",   type: "shot", assist: "迈克尔·奥利塞" },
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

  "2026|I|FRA|IRQ": {
    score: { sh: 3, sa: 0 },
    date: "2026-06-23",
    time: "05:00",
    venue: "林肯金融球场",
    stage: "group",
    round: 2,
    goals: [
      { min: 15, side: "home", scorer: "姆巴佩", type: "shot", assist: "迈克尔·奥利塞" },
      { min: 55, side: "home", scorer: "姆巴佩", type: "shot", assist: "登贝莱" },
      { min: 66, side: "home", scorer: "登贝莱", type: "shot", assist: "迈克尔·奥利塞" }
    ],
    stats: {
      possession:      { h: 56, a: 44 },
      shots:           { h: 15, a: 3 },
      shotsOnTarget:   { h: 5,  a: 0 },
      corners:         { h: 4,  a: 2 },
      fouls:           { h: 8,  a: 4 },
      yellowCards:     { h: 0,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 123,a: 94 },
      dangerousAttacks:{ h: 99, a: 29 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "基利安·姆巴佩",
      sources: ["FIFA", "ESPN", "L'Équipe"],
      home: {score: 9, quotes: "法国以一场3-0完胜提前锁定出线。姆巴佩梅开二度展现超级巨星风采，迈克尔·奥利塞两记精妙助攻串联全场，登贝莱锦上添花。伊拉克全场零射正毫无还手之力。"},
      away: {score: 2, quotes: "伊拉克面对卫冕亚军的凌厉攻势完全无法抵挡。全场零射正、仅29%控球，实力差距一览无余。两连败后出线仅存理论可能。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|I|NOR|SEN": {
    score: { sh: 3, sa: 2 },
    date: "2026-06-23",
    time: "00:00",
    venue: "MetLife体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 43,    side: "home", scorer: "马库斯·彼得森", type: "shot" },
      { min: 48,    side: "home", scorer: "哈兰德", type: "shot", assist: "厄德高" },
      { min: 53,    side: "away", scorer: "伊斯梅拉·萨尔", type: "shot", assist: "萨迪奥·马内" },
      { min: 58,    side: "home", scorer: "哈兰德", type: "shot", assist: "帕特里克·贝格" },
      { min: "90+3",side: "away", scorer: "伊斯梅拉·萨尔", type: "shot", assist: "尼古拉斯·杰克逊" }
    ],
    stats: {
      possession:      { h: 42, a: 58 },
      shots:           { h: 10, a: 11 },
      shotsOnTarget:   { h: 7,  a: 4 },
      corners:         { h: 5,  a: 4 },
      fouls:           { h: 13, a: 5 },
      yellowCards:     { h: 0,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      offsides:        { h: 0,  a: 4 },
      attacks:         { h: 87, a: 100 },
      dangerousAttacks:{ h: 32, a: 60 }
    },
    attendance: null,
    referee: "Wilton Sampaio (BRA)",
    xg: null,
    mediaRating: {
      motm: "哈兰德",
      sources: ["Al Jazeera", "FotMob", "bulinews", "FIFA"],
      home: {score: 8, quotes: "哈兰德连续两场梅开二度，52场国家队狂轰59球，挪威自1998年来首进世界杯淘汰赛。厄德高精妙直塞助攻展现双核威力，替补彼得森世界杯首秀即破门。下半场一度掌控局面，但最后时刻防守松懈险些葬送胜局。"},
      away: {score: 5, quotes: "萨尔梅开二度成为首位在两届世界杯进球的塞内加尔球员，但防线失误代价惨重。门将门迪让彼得森的射门从身下漏过，此后因伤退场；队长库利巴利解围失误直接导致首粒失球。两连败后出线仅存理论可能，末轮必须击败伊拉克。"}
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

  "2026|J|ARG|AUT": {
    score: { sh: 2, sa: 0 },
    date: "2026-06-23",
    time: "01:00",
    venue: "AT&T体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 38,    side: "home", scorer: "梅西",   type: "shot",   assist: "梅迪纳" },
      { min: "90+5",side: "home", scorer: "梅西",   type: "shot" }
    ],
    stats: {
      possession:      { h: 54, a: 46 },
      shots:           { h: 9,  a: 5 },
      shotsOnTarget:   { h: 5,  a: 1 },
      corners:         { h: 1,  a: 3 },
      fouls:           { h: 13, a: 13 },
      yellowCards:     { h: 2,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 82, a: 114 },
      dangerousAttacks:{ h: 33, a: 59 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "利昂内尔·梅西",
      sources: ["FIFA", "The Guardian", "ESPN"],
      home: {score: 9, quotes: "梅西以第17和第18粒世界杯进球超越克洛泽成为男足世界杯历史射手王。虽射失一粒点球，但梅开二度率阿根廷提前晋级淘汰赛，卫冕冠军霸气尽显。"},
      away: {score: 5, quotes: "奥地利顽强抵抗了38分钟，但面对梅西的魔力无力回天。全场仅1次射正，朗尼克的弟子们虽展现战术纪律但缺乏致命一击。末轮对阵约旦将是出线关键战。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|J|JOR|ALG": {
    score: { sh: 1, sa: 2 },
    date: "2026-06-23",
    time: "03:00",
    venue: "李维斯体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 36, side: "home", scorer: "纳扎尔·拉什丹", type: "shot", assist: "穆萨·塔迈里" },
      { min: 69, side: "away", scorer: "纳迪尔·本布阿利", type: "header", assist: "里亚德·马赫雷斯" },
      { min: 82, side: "away", scorer: "阿明·古伊里", type: "shot" }
    ],
    stats: {
      possession:      { h: 28, a: 72 },
      shots:           { h: 8,  a: 12 },
      shotsOnTarget:   { h: 4,  a: 8 },
      corners:         { h: 1,  a: 10 },
      fouls:           { h: 11, a: 6 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 66, a: 152 },
      dangerousAttacks:{ h: 24, a: 75 }
    },
    attendance: null,
    referee: "Slavko Vinčić (SVN)",
    xg: null,
    mediaRating: {
      motm: "阿明·古伊里",
      sources: ["BBC Sport", "AP News", "Sky Sports", "FIFA"],
      home: {score: 6, quotes: "世界杯新军约旦展现了令人动容的斗志。拉什丹精彩外脚背射门带来队史首次世界杯领先，塔迈里的助攻尽显技术功底。下半场体力下降后在定位球防守中两次失守，提前一轮无缘淘汰赛，但配得上掌声。"},
      away: {score: 7, quotes: "阿尔及利亚半场调整后完成逆转，取得自2014年以来首场世界杯胜利。替补本布阿利头球扳平、古伊里乱战中制胜，两粒进球均来自角球。马赫雷斯的关键传中展现队长价值，但上半场低迷是不容忽视的隐患。末轮对阵奥地利决定出线命运。"}
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

  "2026|K|POR|UZB": {
    score: { sh: 5, sa: 0 },
    date: "2026-06-23",
    time: "17:00",
    venue: "NRG体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 6,  side: "home", scorer: "C罗",       type: "shot", assist: "坎塞洛" },
      { min: 17, side: "home", scorer: "努诺·门德斯", type: "free_kick" },
      { min: 39, side: "home", scorer: "C罗",       type: "shot", assist: "B.费尔南德斯" },
      { min: 60, side: "away", scorer: "内马托夫",    type: "own_goal" },
      { min: 87, side: "home", scorer: "拉斐尔·莱奥", type: "shot" }
    ],
    stats: {
      possession:      { h: 66, a: 34 },
      shots:           { h: 14, a: 4 },
      shotsOnTarget:   { h: 9,  a: 2 },
      corners:         { h: 3,  a: 2 },
      fouls:           { h: 14, a: 15 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 144,a: 79 },
      dangerousAttacks:{ h: 60, a: 25 }
    },
    attendance: null,
    referee: "Jalal Jayed (MAR)",
    xg: null,
    mediaRating: {
      motm: "C罗",
      sources: ["AP News", "ESPN", "France 24", "FIFA"],
      home: {score: 9, quotes: "C罗成为史上首位在六届世界杯进球球员，6分钟闪击、39分钟梅开二度超越尤西比奥加冕葡萄牙世界杯射手王。努诺·门德斯任意球诡计惊艳、莱奥替补爆射锦上添花。首轮平局后强势反弹，5-0剑指出线。"},
      away: {score: 2, quotes: "全场仅4次射门、34%控球，乌兹别克斯坦毫无还手之力。门将内马托夫乌龙雪上加霜，两战丢8球净胜球恶化至谷底。世界杯新军的童话正在褪色，出线仅存数学上的可能。"}
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

  "2026|L|ENG|GHA": {
    score: { sh: 0, sa: 0 },
    date: "2026-06-24",
    time: "04:00",
    venue: "吉列体育场",
    stage: "group",
    round: 2,
    goals: [],
    stats: {
      possession:      { h: 79, a: 21 },
      shots:           { h: 13, a: 1 },
      shotsOnTarget:   { h: 3,  a: 1 },
      corners:         { h: 9,  a: 2 },
      fouls:           { h: 14, a: 15 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 131,a: 40 },
      dangerousAttacks:{ h: 78, a: 10 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "本杰明·阿萨雷",
      sources: ["The Standard", "NBC Sports", "The Mirror", "FIFA"],
      home: {score: 4, quotes: "全场79%控球却颗粒无收，与首轮4-2大胜克罗地亚判若两队。凯恩被加纳防线锁死终场错失良机，戈登和马杜埃凯边路传中质量低下，贝林厄姆过于粘球。奥赖利击中横梁、格希头球被门线解围，图赫尔变阵未能撕破低位防守，两战积4分出线悬念留至末轮。"},
      away: {score: 8, quotes: "加纳以教科书级别的低位防守从热门英格兰手中抢下宝贵1分。全队众志成城执行奎罗斯战术部署，直到第50分钟才完成首次射门。门将阿萨雷做出关键扑救力保零封，黑星军团的防守纪律堪称本届赛事典范。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|L|PAN|CRO": {
    score: { sh: 0, sa: 1 },
    date: "2026-06-24",
    time: "07:00",
    venue: "BMO球场",
    stage: "group",
    round: 2,
    goals: [
      { min: 54, side: "away", scorer: "安特·布迪米尔", type: "shot", assist: "约瑟普·斯塔尼希奇" }
    ],
    stats: {
      possession:      { h: 42, a: 58 },
      shots:           { h: 6,  a: 5 },
      shotsOnTarget:   { h: 1,  a: 2 },
      corners:         { h: 7,  a: 2 },
      fouls:           { h: 19, a: 12 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 96, a: 110 },
      dangerousAttacks:{ h: 59, a: 43 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "安特·布迪米尔",
      sources: ["ESPN", "FIFA", "Yahoo Sports", "Fox Sports"],
      home: {score: 5, quotes: "连续两场0-1惜败，巴拿马的世界杯处子季提前一轮结束。穆里略右路突破制造威胁，防守纪律值得肯定，但两战零进球暴露了进攻端缺乏致命一击的现实。球队展现了令人尊敬的竞争力，虽败犹荣。"},
      away: {score: 6, quotes: "布迪米尔第54分钟一击制胜，克罗地亚收获本届首胜保住出线希望。莫德里奇状态回暖掌控中场节奏，斯塔尼希奇的助攻展现边路威胁。末轮对阵加纳将是生死战，若无胜则将面临小组出局。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|K|COL|COD": {
    score: { sh: 1, sa: 0 },
    date: "2026-06-24",
    time: "10:00",
    venue: "瓜达拉哈拉体育场",
    stage: "group",
    round: 2,
    goals: [
      { min: 76, side: "home", scorer: "丹尼尔·穆尼奥斯", type: "shot", assist: "胡安·金特罗" }
    ],
    stats: {
      possession:      { h: 64, a: 36 },
      shots:           { h: 15, a: 5 },
      shotsOnTarget:   { h: 9,  a: 2 },
      corners:         { h: 5,  a: 4 },
      fouls:           { h: 12, a: 16 },
      yellowCards:     { h: 2,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 102,a: 68 },
      dangerousAttacks:{ h: 31, a: 22 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "丹尼尔·穆尼奥斯",
      sources: ["BBC Sport", "AP News", "Sky Sports", "FIFA"],
      home: {score: 7, quotes: "穆尼奥斯连续两场进球助哥伦比亚提前锁定32强席位。面对刚果门将姆帕西的多次神扑，哥伦比亚狂轰15射9正，迪亚斯两粒进球被吹越位。金特罗的精准传球终破铁桶，两连胜稳居K组头名。"},
      away: {score: 6, quotes: "门将姆帕西前20分钟5次神扑堪称英勇，第76分钟终被折射击败。刚果全场仅2次射正进攻威胁有限，首轮逼平葡萄牙后未能延续黑马奇迹。末轮必须击败乌兹别克斯坦方可保留出线希望。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|B|BIH|QAT": {
    score: { sh: 3, sa: 1 },
    date: "2026-06-25",
    time: "03:00",
    venue: "西雅图体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 29, side: "home", scorer: "阿拉伊贝格维奇", type: "shot", assist: "伊万·巴希奇" },
      { min: 34, side: "away", scorer: "阿布纳达", type: "own_goal" },
      { min: 42, side: "away", scorer: "海多斯", type: "shot", assist: "埃德米尔松" },
      { min: 80, side: "home", scorer: "爱尔明·马赫米奇", type: "shot", assist: "哈季卡度尼奇" }
    ],
    stats: {
      possession:      { h: 54, a: 46 },
      shots:           { h: 9,  a: 9 },
      shotsOnTarget:   { h: 5,  a: 3 },
      corners:         { h: 5,  a: 5 },
      fouls:           { h: 9,  a: 14 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 96, a: 75 },
      dangerousAttacks:{ h: 46, a: 33 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "阿拉伊贝格维奇",
      sources: ["ESPN", "FIFA", "Marca", "FotMob"],
      home: {score: 7, quotes: "波黑以一场3-1大胜结束小组征程，4分有望竞争最佳小组第三晋级。阿拉伊贝格维奇远射世界波首开纪录，海多斯短暂扳回后马赫米奇终场锁定胜局。卡塔尔的乌龙送礼让波黑半场确立优势，巴尔干雄鹰展现了技术足球的底蕴。"},
      away: {score: 3, quotes: "三战仅积1分提前出局，东道主卡塔尔的世界杯之旅以失望告终。阿布纳达的乌龙球雪上加霜，虽海多斯一度扳回一球展现斗志，但整体实力与对手差距明显。继惨败加拿大后再次失利，亚洲冠军的世界杯噩梦继续。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|B|SUI|CAN": {
    score: { sh: 2, sa: 1 },
    date: "2026-06-25",
    time: "03:00",
    venue: "BC Place球场",
    stage: "group",
    round: 3,
    goals: [
      { min: 46, side: "home", scorer: "鲁文·巴尔加斯", type: "shot", assist: "约翰·曼赞比" },
      { min: 57, side: "home", scorer: "约翰·曼赞比", type: "shot", assist: "布雷尔·恩博洛" },
      { min: 76, side: "away", scorer: "普罗米斯·戴维", type: "shot", assist: "萨利巴" }
    ],
    stats: {
      possession:      { h: 48, a: 52 },
      shots:           { h: 5,  a: 10 },
      shotsOnTarget:   { h: 4,  a: 7 },
      corners:         { h: 2,  a: 7 },
      fouls:           { h: 19, a: 13 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 74, a: 96 },
      dangerousAttacks:{ h: 24, a: 51 }
    },
    attendance: null,
    referee: "Ramon Abatti (BRA)",
    xg: null,
    mediaRating: {
      motm: "约翰·曼赞比",
      sources: ["ESPN", "Sky Sports", "FIFA", "FotMob"],
      home: {score: 8, quotes: "瑞士下半场闪电逆转锁定B组头名，继续保持淘汰赛主场优势。曼赞比一传一射闪耀BC Place，恩博洛策动两粒进球展现核心价值。巴尔加斯下半场仅39秒即破门彻底改变战局，瑞士三战不败2胜1平延续大赛稳健传统。"},
      away: {score: 5, quotes: "加拿大虽败仍以小组第二历史性晋级淘汰赛。普罗米斯·戴维扳回一球保留希望，但上半场过于保守（仅30.5%控球）埋下祸根。失去温哥华主场优势令人遗憾，但队史首次晋级淘汰赛已创造历史。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|C|SCO|BRA": {
    score: { sh: 0, sa: 3 },
    date: "2026-06-25",
    time: "06:00",
    venue: "迈阿密体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 7,     side: "away", scorer: "维尼修斯",   type: "shot", assist: "拉扬" },
      { min: "45+4",side: "away", scorer: "维尼修斯",   type: "header", assist: "布鲁诺·吉马良斯" },
      { min: 60,    side: "away", scorer: "马特乌斯·库尼亚", type: "shot", assist: "布鲁诺·吉马良斯" }
    ],
    stats: {
      possession:      { h: 46, a: 54 },
      shots:           { h: 11, a: 16 },
      shotsOnTarget:   { h: 5,  a: 9 },
      corners:         { h: 7,  a: 7 },
      fouls:           { h: 10, a: 11 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 96, a: 103 },
      dangerousAttacks:{ h: 37, a: 41 }
    },
    attendance: null,
    referee: "César Ramos (MEX)",
    xg: null,
    mediaRating: {
      motm: "维尼修斯",
      sources: ["The Athletic", "Yahoo Sports", "Fox Sports", "FIFA"],
      home: {score: 4, quotes: "苏格兰面对五星巴西毫无招架之力。麦肯纳第7分钟致命失误让维尼修斯早早破门，半场补时布鲁诺·吉马良斯精准传中助其头球梅开二度。库尼亚下半场再下一城锁定0-3。全场11射仅5正，两粒净负球让晋级前景悬于一线。"},
      away: {score: 9, quotes: "维尼修斯梅开二度闪耀迈阿密，布鲁诺·吉马良斯两记助攻展现中场大师风范。库尼亚锦上添花助巴西3-0完胜锁定C组头名。首轮平局后两连胜强势反弹，桑巴军团正式切换淘汰赛模式。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|C|MAR|HAI": {
    score: { sh: 4, sa: 2 },
    date: "2026-06-25",
    time: "06:00",
    venue: "亚特兰大体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 10,    side: "away", scorer: "亚辛·布努",   type: "own_goal" },
      { min: 39,    side: "home", scorer: "阿什拉夫·哈基米", type: "shot" },
      { min: 43,    side: "away", scorer: "威尔逊·伊西多尔", type: "shot", assist: "迪韦纳" },
      { min: "45+1",side: "home", scorer: "伊斯梅尔·赛巴里", type: "shot", assist: "阿什拉夫·哈基米" },
      { min: 78,    side: "home", scorer: "苏菲安·拉希米", type: "shot", assist: "沙迪·里亚德" },
      { min: 89,    side: "home", scorer: "贾西姆·亚辛",   type: "shot", assist: "苏菲安·拉希米" }
    ],
    stats: {
      possession:      { h: 69, a: 31 },
      shots:           { h: 17, a: 6 },
      shotsOnTarget:   { h: 11, a: 2 },
      corners:         { h: 9,  a: 1 },
      fouls:           { h: 10, a: 18 },
      yellowCards:     { h: 0,  a: 3 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 109,a: 73 },
      dangerousAttacks:{ h: 62, a: 13 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "阿什拉夫·哈基米",
      sources: ["USA Today", "ESPN", "Morocco World News", "FIFA"],
      home: {score: 8, quotes: "摩洛哥在这场进球大战中4-2力克海地，7分锁定C组第二强势出线。布努罕见乌龙送礼后，哈基米世界波扳平并助攻赛巴里得分展现领袖风范。下半场拉希米和亚辛终结悬念，阿特拉斯雄狮延续2022黑马传奇。"},
      away: {score: 5, quotes: "已提前出局的海地展现了令人动容的斗志。伊西多尔连续两场进球无愧加勒比锋线旗帜，全队面对摩洛哥毫不退缩。虽三战皆墨，但世界杯处子秀每个进球都值得铭记，海地足球在世界舞台留下了印记。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|A|CZE|MEX": {
    score: { sh: 0, sa: 3 },
    date: "2026-06-25",
    time: "09:00",
    venue: "阿兹台克球场",
    stage: "group",
    round: 3,
    goals: [
      { min: 55,    side: "away", scorer: "马特奥·查韦斯",   type: "shot", assist: "路易斯·罗莫" },
      { min: 61,    side: "away", scorer: "胡利安·基尼奥内斯", type: "shot", assist: "豪尔赫·桑切斯" },
      { min: "90+4",side: "away", scorer: "阿尔瓦罗·菲达尔戈", type: "shot", assist: "罗伯托·阿尔瓦拉多" }
    ],
    stats: {
      possession:      { h: 52, a: 48 },
      shots:           { h: 9,  a: 9 },
      shotsOnTarget:   { h: 1,  a: 5 },
      corners:         { h: 5,  a: 1 },
      fouls:           { h: 9,  a: 13 },
      yellowCards:     { h: 0,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 93, a: 86 },
      dangerousAttacks:{ h: 28, a: 31 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "马特奥·查韦斯",
      sources: ["Sky Sports", "ESPN", "Fox Sports", "FIFA"],
      home: {score: 3, quotes: "捷克三战仅积1分沦为A组副班长提前出局。上半场尚能与墨西哥周旋，但下半场防线崩盘连丢三球。全场仅1次射正、9次犯规暴露了攻防两端的全面劣势，10年前的历史荣光已渐行渐远。"},
      away: {score: 8, quotes: "墨西哥9分完美收官创造队史首次小组全胜。查韦斯下半场打破僵局，基尼奥内斯和菲达尔戈相继锦上添花。奥乔亚第6届世界杯替补登场点燃阿兹台克，三战零失球展现东道主霸气。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|A|RSA|KOR": {
    score: { sh: 1, sa: 0 },
    date: "2026-06-25",
    time: "09:00",
    venue: "蒙特雷体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 63, side: "home", scorer: "塔佩洛·马塞科", type: "shot", assist: "采庞·莫雷米" }
    ],
    stats: {
      possession:      { h: 32, a: 68 },
      shots:           { h: 9,  a: 7 },
      shotsOnTarget:   { h: 4,  a: 3 },
      corners:         { h: 4,  a: 6 },
      fouls:           { h: 7,  a: 9 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 80, a: 138 },
      dangerousAttacks:{ h: 22, a: 92 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "塔佩洛·马塞科",
      sources: ["Sky Sports", "The Guardian", "ESPN", "FIFA"],
      home: {score: 9, quotes: "南非创造历史！马塞科第63分钟制胜球将巴法纳巴法纳首次送入世界杯淘汰赛。全场仅32%控球却以高效反击致命一击，莫雷米的助攻展现默契。从首轮9人惨败墨西哥到两场不败逆袭，布鲁斯的球队书写了非洲足球的励志传奇。"},
      away: {score: 4, quotes: "韩国虽68%控球却无法转化为进球。主帅洪明甫将孙兴慜放在替补席引发争议，下半场换上后仍未能改变战局。3分仍可竞争最佳小组第三，但进攻端效率低下是不容忽视的致命短板。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|E|ECU|GER": {
    score: { sh: 2, sa: 1 },
    date: "2026-06-26",
    time: "04:00",
    venue: "MetLife体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 2,  side: "away", scorer: "勒鲁瓦·萨内",   type: "shot", assist: "佛洛里安·维尔茨" },
      { min: 9,  side: "home", scorer: "尼尔松·安古洛",   type: "shot", assist: "佩德罗·比特" },
      { min: 77, side: "home", scorer: "贡萨洛·普拉塔",   type: "shot", assist: "凯文·罗德里克斯" }
    ],
    stats: {
      possession:      { h: 39, a: 61 },
      shots:           { h: 5,  a: 6 },
      shotsOnTarget:   { h: 3,  a: 3 },
      corners:         { h: 3,  a: 2 },
      fouls:           { h: 15, a: 10 },
      yellowCards:     { h: 3,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 102,a: 113 },
      dangerousAttacks:{ h: 40, a: 56 }
    },
    attendance: null,
    referee: "Tori Penso (USA)",
    xg: null,
    mediaRating: {
      motm: "贡萨洛·普拉塔",
      sources: ["FOX Sports", "ABC News", "ESPN", "FIFA"],
      home: {score: 9, quotes: "厄瓜多尔爆出本届最大冷门逆转德国！萨内2分钟闪电破门后，安古洛7分钟后即扳平。普拉塔第77分钟打入制胜球，全场39%控球却以高效反击三度射正两度破门。这场胜利让4分的厄瓜多尔强势竞逐最佳小组第三。"},
      away: {score: 4, quotes: "德国虽已提前出线但冷负敲响警钟。萨内闪击后全队松懈，防线被厄瓜多尔两次反击击溃。61%控球仅3次射正，纳格尔斯曼轮换策略适得其反，终结此前11连胜纪录。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|E|CUW|CIV": {
    score: { sh: 0, sa: 2 },
    date: "2026-06-26",
    time: "04:00",
    venue: "费城体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 7,  side: "away", scorer: "尼古拉·佩佩", type: "shot", assist: "杨·迪奥曼德" },
      { min: 64, side: "away", scorer: "尼古拉·佩佩", type: "shot", assist: "易卜拉欣·桑加雷" }
    ],
    stats: {
      possession:      { h: 37, a: 63 },
      shots:           { h: 9,  a: 6 },
      shotsOnTarget:   { h: 2,  a: 3 },
      corners:         { h: 4,  a: 6 },
      fouls:           { h: 11, a: 6 },
      yellowCards:     { h: 2,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 86, a: 114 },
      dangerousAttacks:{ h: 37, a: 54 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "尼古拉·佩佩",
      sources: ["FOX Sports", "VAVEL", "FIFA", "Yahoo Sports"],
      home: {score: 4, quotes: "库拉索的世界杯童话到此结束。门将鲁姆再献英勇表现但面对佩佩的梅开二度无力回天。三战积1分虽已淘汰，这支加勒比小国零封厄瓜多尔已赢得世界尊重。"},
      away: {score: 8, quotes: "佩佩梅开二度助科特迪瓦锁定E组第二出线。迪奥曼德开场抢断助攻首球，桑加雷下半场再送妙传。三战6分延续非洲足球强势表现，大象军团从首轮绝杀到末轮完胜展现了令人敬畏的战斗力。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|F|TUN|NED": {
    score: { sh: 1, sa: 3 },
    date: "2026-06-26",
    time: "07:00",
    venue: "箭头体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 3,  side: "away", scorer: "埃利亚斯·斯希里",   type: "own_goal" },
      { min: 7,  side: "away", scorer: "布莱恩·布罗比",   type: "shot", assist: "维吉尔·范戴克" },
      { min: 54, side: "home", scorer: "哈奇姆·马斯图里",   type: "header", assist: "汉尼拔·梅布里" },
      { min: 62, side: "away", scorer: "扬·保罗·范黑克",   type: "header", assist: "蒂贾尼·赖茵德斯" }
    ],
    stats: {
      possession:      { h: 28, a: 72 },
      shots:           { h: 9,  a: 15 },
      shotsOnTarget:   { h: 4,  a: 7 },
      corners:         { h: 4,  a: 6 },
      fouls:           { h: 11, a: 10 },
      yellowCards:     { h: 0,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 55, a: 140 },
      dangerousAttacks:{ h: 23, a: 82 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "布莱恩·布罗比",
      sources: ["AP News", "Opta Analyst", "AS USA", "FIFA"],
      home: {score: 2, quotes: "突尼斯三战全败丢12球告别世界杯。斯希里3分钟乌龙锁定败局，虽马斯图里一度扳回一球但无力回天。解雇主帅拉穆希后仍无起色，锋线三战仅入1球，非洲雄鹰的噩梦终于结束。"},
      away: {score: 8, quotes: "荷兰9分全胜锁定F组头名创Opta控球纪录(71.7%)。布罗比延续火热状态三战三球全部来自首次射门，范迪克头球助攻展现队长价值。小组赛狂轰10球火力全开，16强将迎战摩洛哥。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|F|JPN|SWE": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-26",
    time: "07:00",
    venue: "达拉斯体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 56, side: "home", scorer: "前田大然",   type: "shot", assist: "堂安律" },
      { min: 62, side: "away", scorer: "安东尼·埃兰加", type: "shot", assist: "维克托·哲凯赖什" }
    ],
    stats: {
      possession:      { h: 52, a: 48 },
      shots:           { h: 6,  a: 8 },
      shotsOnTarget:   { h: 3,  a: 5 },
      corners:         { h: 2,  a: 8 },
      fouls:           { h: 20, a: 11 },
      yellowCards:     { h: 1,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 78, a: 92 },
      dangerousAttacks:{ h: 32, a: 68 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "安东尼·埃兰加",
      sources: ["Sky Sports", "BBC Sport", "ESPN", "FIFA"],
      home: {score: 7, quotes: "前田大然接堂安律妙传巧射破门助日本连续三届晋级淘汰赛。蓝武士以5分锁定小组第二创队史单届7球纪录。下半场控球占优但瑞典反击更具威胁，16强对阵巴西将是历史性考验。"},
      away: {score: 7, quotes: "埃兰加接哲凯赖什助攻内切世界波拯救瑞典。从1-5惨败荷兰中重整旗鼓，4分锁定最佳小组第三。8次角球制造持续威胁，波特治下北欧劲旅展现韧性，16强极可能对阵法国。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|D|TUR|USA": {
    score: { sh: 3, sa: 2 },
    date: "2026-06-26",
    time: "10:00",
    venue: "洛杉矶体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 3,     side: "away", scorer: "奥斯顿·特拉斯蒂",   type: "shot", assist: "塞巴斯蒂安·贝尔哈特" },
      { min: 10,    side: "home", scorer: "阿尔达·居莱尔",     type: "shot", assist: "巴勒什·伊尔马兹" },
      { min: 31,    side: "home", scorer: "巴勒什·伊尔马兹",   type: "shot", assist: "奥尔昆·柯克曲" },
      { min: 49,    side: "away", scorer: "塞巴斯蒂安·贝尔哈特", type: "shot" },
      { min: "90+8",side: "home", scorer: "卡恩·艾汉",        type: "shot", assist: "詹·乌尊" }
    ],
    stats: {
      possession:      { h: 47, a: 53 },
      shots:           { h: 6,  a: 13 },
      shotsOnTarget:   { h: 4,  a: 7 },
      corners:         { h: 2,  a: 9 },
      fouls:           { h: 13, a: 13 },
      yellowCards:     { h: 0,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 97, a: 91 },
      dangerousAttacks:{ h: 46, a: 41 }
    },
    attendance: null,
    referee: "Mustapha Ghorbal (ALG)",
    xg: null,
    mediaRating: {
      motm: "卡恩·艾汉",
      sources: ["Sky Sports", "ESPN", "Yahoo Sports", "FIFA"],
      home: {score: 8, quotes: "土耳其虽已淘汰但用一场荡气回肠的3-2告别世界杯。艾汉第98分钟绝杀为疯狂比赛画上句号，居莱尔和伊尔马兹上半场逆转展现新月军团血性。此前两战62射零进球后终破球荒，昂首离开洛杉矶。"},
      away: {score: 5, quotes: "美国轮换阵容遭遇首败但无碍头名出线。特拉斯蒂3分钟闪击、贝尔哈特下半场扳平展现深度，普利西奇替补复出中柱是最大利好。波切蒂诺需警惕防守端连丢三球的问题，16强对阵波黑不容有失。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|D|PAR|AUS": {
    score: { sh: 0, sa: 0 },
    date: "2026-06-26",
    time: "10:00",
    venue: "旧金山湾区体育场",
    stage: "group",
    round: 3,
    goals: [],
    stats: {
      possession:      { h: 44, a: 56 },
      shots:           { h: 6,  a: 9 },
      shotsOnTarget:   { h: 2,  a: 5 },
      corners:         { h: 1,  a: 3 },
      fouls:           { h: 9,  a: 6 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 95, a: 116 },
      dangerousAttacks:{ h: 21, a: 45 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "杰克逊·欧文",
      sources: ["ESPN", "Opta Analyst", "BBC Sport", "FIFA"],
      home: {score: 5, quotes: "巴拉圭以一场谨慎的0-0锁定4分，极大概率作为最佳小组第三晋级。全场仅0.25xG创赛事新低，直到第37分钟才完成首次射门。阿尔法罗的务实策略奏效，迭戈·戈麦斯累计黄牌将缺席16强。"},
      away: {score: 6, quotes: "澳大利亚第三次晋级世界杯淘汰赛。波波维奇的球队56%控球占据主动，12射5正压制对手但未能破门。欧文中场掌控力突出，16强将对阵G组第二。连续两届世界杯进入淘汰赛创造历史。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|I|SEN|IRQ": {
    score: { sh: 5, sa: 0 },
    date: "2026-06-27",
    time: "03:00",
    venue: "BMO球场",
    stage: "group",
    round: 3,
    goals: [
      { min: 4,  side: "home", scorer: "哈比卜·迪亚拉",   type: "shot", assist: "阿卜杜拉耶·赛克" },
      { min: 56, side: "home", scorer: "伊斯梅拉·萨尔",   type: "shot", assist: "拉明·卡马拉" },
      { min: 59, side: "home", scorer: "帕普·盖耶",      type: "shot", assist: "伊斯梅拉·萨尔" },
      { min: 71, side: "home", scorer: "帕普·盖耶",      type: "shot", assist: "伊利曼·恩迪亚耶" },
      { min: 82, side: "home", scorer: "伊利曼·恩迪亚耶",  type: "shot", assist: "帕普·盖耶" }
    ],
    stats: {
      possession:      { h: 68, a: 32 },
      shots:           { h: 23, a: 2 },
      shotsOnTarget:   { h: 12, a: 1 },
      corners:         { h: 12, a: 3 },
      fouls:           { h: 10, a: 11 },
      yellowCards:     { h: 2,  a: 2 },
      redCards:        { h: 0,  a: 1 },
      attacks:         { h: 129,a: 54 },
      dangerousAttacks:{ h: 90, a: 15 }
    },
    attendance: null,
    referee: "Anthony Taylor (ENG)",
    xg: null,
    mediaRating: {
      motm: "帕普·盖耶",
      sources: ["BBC Sport", "Al Jazeera", "Fox Sports", "FIFA"],
      home: {score: 8, quotes: "塞内加尔5-0大胜十人伊拉克强势竞逐最佳小组第三。盖耶替补登场梅开二度（弧线球+半凌空），萨尔一传一射建功。迪亚拉开场4分钟折射首开纪录，苏拉卡13分钟红牌后伊拉克彻底崩盘。"},
      away: {score: 1, quotes: "三战全败零分出局。苏拉卡13分钟拉倒马内被VAR红牌罚下成转折点，伊克巴尔失误直接导致第二球。1986年以来首次世界杯之旅以惨淡收场，亚洲球队集体低迷。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|I|NOR|FRA": {
    score: { sh: 1, sa: 4 },
    date: "2026-06-27",
    time: "03:00",
    venue: "吉列体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 7,     side: "away", scorer: "奥斯曼·登贝莱",   type: "shot", assist: "基利安·姆巴佩" },
      { min: 20,    side: "away", scorer: "奥斯曼·登贝莱",   type: "shot", assist: "基利安·姆巴佩" },
      { min: 21,    side: "home", scorer: "特洛·奥斯高",     type: "shot", assist: "安德烈亚斯·谢尔德鲁普" },
      { min: 32,    side: "away", scorer: "奥斯曼·登贝莱",   type: "shot", assist: "奥雷利安·楚阿梅尼" },
      { min: "90+4",side: "away", scorer: "德西雷·杜埃",     type: "header", assist: "布拉德利·巴尔科拉" }
    ],
    stats: {
      possession:      { h: 44, a: 56 },
      shots:           { h: 7,  a: 15 },
      shotsOnTarget:   { h: 4,  a: 9 },
      corners:         { h: 4,  a: 5 },
      fouls:           { h: 9,  a: 11 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 89, a: 103 },
      dangerousAttacks:{ h: 39, a: 64 }
    },
    attendance: null,
    referee: "Michael Oliver (ENG)",
    xg: null,
    mediaRating: {
      motm: "奥斯曼·登贝莱",
      sources: ["Sporting News", "NBC Sports", "Yahoo Sports", "FIFA"],
      home: {score: 5, quotes: "挪威轮换阵容1-4不敌法国但6分锁定小组第二。哈兰德全场替补未登场，奥斯高一度扳回2-1点燃希望。斯特兰德·拉尔森点球被扑错失追分良机，替补防线难以招架法国三叉戟。"},
      away: {score: 9, quotes: "登贝莱25分钟帽子戏法创世界杯历史第二快纪录，姆巴佩无私两记助攻。杜埃补时头球锁定4-1。法国三战全胜狂轰11球头名出线，卫冕亚军状态火热剑指冠军。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|H|CPV|KSA": {
    score: { sh: 0, sa: 0 },
    date: "2026-06-27",
    time: "08:00",
    venue: "TBD",
    stage: "group",
    round: 3,
    goals: [],
    stats: {
      possession:      { h: 51, a: 49 },
      shots:           { h: 10, a: 4 },
      shotsOnTarget:   { h: 2,  a: 3 },
      corners:         { h: 4,  a: 2 },
      fouls:           { h: 10, a: 16 },
      yellowCards:     { h: 1,  a: 3 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 112,a: 103 },
      dangerousAttacks:{ h: 50, a: 41 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "沃济尼亚",
      sources: ["ABC News", "FIFA", "ESPN", "BBC Sport"],
      home: {score: 9, quotes: "佛得角0-0逼平沙特历史性晋级世界杯淘汰赛！门将沃济尼亚再献神级表现力保零封，蓝鲨从首轮逼平西班牙的冷门到末轮锁定出线，非洲小国的足球童话仍在继续。瓜达拉哈拉的这场平局将载入佛得角体育史册。"},
      away: {score: 4, quotes: "沙特三战仅积2分遗憾出局。全场49%控球与佛得角不相上下但进攻效率低下。首轮战平乌拉圭的惊喜未能延续，多尼斯的球队虽有进步但仍未跻身非洲球队的竞争力水平。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|H|URU|ESP": {
    score: { sh: 0, sa: 1 },
    date: "2026-06-27",
    time: "08:00",
    venue: "瓜达拉哈拉体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 42, side: "away", scorer: "阿莱克斯·巴埃纳", type: "shot", assist: "马科斯·略伦特" }
    ],
    stats: {
      possession:      { h: 33, a: 67 },
      shots:           { h: 4,  a: 5 },
      shotsOnTarget:   { h: 1,  a: 1 },
      corners:         { h: 1,  a: 6 },
      fouls:           { h: 14, a: 14 },
      yellowCards:     { h: 3,  a: 1 },
      redCards:        { h: 1,  a: 0 },
      attacks:         { h: 94, a: 107 },
      dangerousAttacks:{ h: 42, a: 37 }
    },
    attendance: null,
    referee: "Ismail Elfath (USA)",
    xg: null,
    mediaRating: {
      motm: "阿莱克斯·巴埃纳",
      sources: ["Yahoo Sports", "FotMob", "Transfermarkt", "FIFA"],
      home: {score: 4, quotes: "乌拉圭0-1负于西班牙惨遭淘汰。贝尔萨的高压体系全场仅1次射正，穆斯莱拉失误导致巴埃纳破门。卡诺比奥补时红牌雪上加霜，两届世界杯冠军自2002年以来首次小组出局。"},
      away: {score: 7, quotes: "德拉富恩特的西班牙以三连胜零失球完美收官。巴埃纳第42分钟接略伦特传中打入制胜球，全场67%控球掌控节奏。小组赛7分头名出线，三场零封展现冠军级防守。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|G|NZL|BEL": {
    score: { sh: 1, sa: 5 },
    date: "2026-06-27",
    time: "11:00",
    venue: "BC Place球场",
    stage: "group",
    round: 3,
    goals: [
      { min: 28,    side: "away", scorer: "莱安德罗·特罗萨德",   type: "shot" },
      { min: 50,    side: "away", scorer: "莱安德罗·特罗萨德",   type: "shot", assist: "汉斯·范纳肯" },
      { min: 66,    side: "away", scorer: "凯文·德布劳内",       type: "shot" },
      { min: 84,    side: "home", scorer: "以利亚·贾斯特",       type: "shot" },
      { min: 86,    side: "away", scorer: "罗梅卢·卢卡库",       type: "header", assist: "尼古拉·拉斯坎" },
      { min: "90+4",side: "away", scorer: "亚历克西斯·萨勒马科尔斯", type: "shot", assist: "罗梅卢·卢卡库" }
    ],
    stats: {
      possession:      { h: 45, a: 55 },
      shots:           { h: 5,  a: 23 },
      shotsOnTarget:   { h: 2,  a: 10 },
      corners:         { h: 5,  a: 8 },
      fouls:           { h: 10, a: 7 },
      yellowCards:     { h: 2,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 74, a: 111 },
      dangerousAttacks:{ h: 32, a: 69 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "莱安德罗·特罗萨德",
      sources: ["Opta Analyst", "FotMob", "FIFA", "OFC"],
      home: {score: 3, quotes: "新西兰三战仅积1分结束第三次世界杯之旅。贾斯特打入队史第5粒世界杯进球成为唯一亮点，面对比利时35次射门的狂轰滥炸防线完全崩溃。虽以淘汰告终但代表大洋洲的拼搏精神值得尊敬。"},
      away: {score: 9, quotes: "特罗萨德梅开二度+策动第三球闪耀BC Place，德布劳内远射破门，卢卡库替补头球超越威尔莫茨加冕队史世界杯射手王。全场35射+3.65xG的恐怖数据宣告欧洲红魔强势归来，锁定G组头名。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|G|EGY|IRN": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-27",
    time: "11:00",
    venue: "西雅图体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 5,  side: "home", scorer: "马哈茂德·萨贝尔",  type: "shot", assist: "马哈茂德·特雷泽盖" },
      { min: 14, side: "away", scorer: "拉明·雷扎扬",     type: "shot" }
    ],
    stats: {
      possession:      { h: 61, a: 39 },
      shots:           { h: 9,  a: 10 },
      shotsOnTarget:   { h: 3,  a: 4 },
      corners:         { h: 8,  a: 2 },
      fouls:           { h: 11, a: 16 },
      yellowCards:     { h: 3,  a: 4 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 118,a: 100 },
      dangerousAttacks:{ h: 47, a: 38 }
    },
    attendance: null,
    referee: "Szymon Marciniak (POL)",
    xg: null,
    mediaRating: {
      motm: "马哈茂德·萨贝尔",
      sources: ["Sky Sports", "ESPN", "AP News", "FIFA"],
      home: {score: 7, quotes: "埃及5分锁定G组第二首度晋级淘汰赛。萨贝尔第5分钟接特雷泽盖助攻穿裆破门闪击，舒贝尔扑出塔雷米点球功不可没。萨拉赫57分钟伤退引发担忧，但法老王仍创造历史。16强将对阵澳大利亚。"},
      away: {score: 6, quotes: "伊朗3分有望竞争最佳小组第三。雷扎扬第14分钟补射扳平展现顽强斗志，哈利勒扎德93分钟绝杀被VAR吹越位令人心碎。埃扎托拉希97分钟头球中柱，球队距离历史性晋级仅差毫米。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|L|PAN|ENG": {
    score: { sh: 0, sa: 2 },
    date: "2026-06-28",
    time: "05:00",
    venue: "大都会人寿球场",
    stage: "group",
    round: 3,
    goals: [
      { min: 62, side: "away", scorer: "祖德·贝林厄姆", type: "shot", assist: "布卡约·萨卡" },
      { min: 67, side: "away", scorer: "哈里·凯恩",       type: "header", assist: "祖德·贝林厄姆" }
    ],
    stats: {
      possession:      { h: 32, a: 68 },
      shots:           { h: 10, a: 14 },
      shotsOnTarget:   { h: 2,  a: 6 },
      corners:         { h: 3,  a: 7 },
      fouls:           { h: 16, a: 13 },
      yellowCards:     { h: 2,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 54, a: 129 },
      dangerousAttacks:{ h: 21, a: 67 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "祖德·贝林厄姆",
      sources: ["BBC Sport", "FIFA", "Sofascore", "ESPN"],
      home: {score: 5, quotes: "巴拿马三战零分零进球告别世界杯。上半场5-4-1低位防守成功零封英格兰令人尊敬，法哈尔多进球被吹越位。但下半场贝林厄姆角球破门后防线崩盘，世界杯处子季虽未取得积分但展现了中北美足球的坚韧。"},
      away: {score: 7, quotes: "贝林厄姆一传一射（9.2分全场最佳）终结巴拿马铁桶，凯恩头球超越莱因克尔加冕英格兰世界杯射手王(11球)。图赫尔轮换阵容下半场发力，三战7分头名出线，16强将迎战小组第三。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|L|CRO|GHA": {
    score: { sh: 2, sa: 1 },
    date: "2026-06-28",
    time: "05:00",
    venue: "费城体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 31, side: "home", scorer: "佩尔塔·苏契奇",   type: "shot", assist: "马特奥·科瓦契奇" },
      { min: 73, side: "away", scorer: "德里克·卢卡森埃",  type: "shot", assist: "内斯特·努瓦马" },
      { min: 83, side: "home", scorer: "尼古拉·弗拉西奇",   type: "header", assist: "卢卡·莫德里奇" }
    ],
    stats: {
      possession:      { h: 54, a: 46 },
      shots:           { h: 6,  a: 4 },
      shotsOnTarget:   { h: 4,  a: 1 },
      corners:         { h: 3,  a: 2 },
      fouls:           { h: 9,  a: 13 },
      yellowCards:     { h: 1,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 89, a: 103 },
      dangerousAttacks:{ h: 35, a: 25 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "尼古拉·弗拉西奇",
      sources: ["ESPN", "Yahoo Sports", "FIFA", "AP News"],
      home: {score: 7, quotes: "弗拉西奇头球绝杀助克罗地亚力压加纳锁定小组第二。苏契奇31分钟接科瓦契奇传球抽射破门技惊四座，莫德里奇角球精准助攻展现大师风范。6分出线16强将迎战葡萄牙，格子军团延续大赛韧性。"},
      away: {score: 6, quotes: "加纳虽败仍以4分锁定最佳小组第三历史性晋级淘汰赛。卢卡森埃任意球头球一度扳平展现斗志。塞梅尼约三场零进球成为遗憾，但黑星军团自2010年以来首度进入世界杯淘汰赛。16强将战哥伦比亚。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|K|COL|POR": {
    score: { sh: 0, sa: 0 },
    date: "2026-06-28",
    time: "07:30",
    venue: "迈阿密体育场",
    stage: "group",
    round: 3,
    goals: [],
    stats: {
      possession:      { h: 54, a: 46 },
      shots:           { h: 17, a: 9 },
      shotsOnTarget:   { h: 6,  a: 2 },
      corners:         { h: 5,  a: 2 },
      fouls:           { h: 12, a: 6 },
      yellowCards:     { h: 1,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 88, a: 83 },
      dangerousAttacks:{ h: 67, a: 38 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "迪奥戈·科斯塔",
      sources: ["ESPN", "Fox Sports", "FIFA", "Yahoo Sports"],
      home: {score: 7, quotes: "哥伦比亚7分锁定K组头名。全场17射6正碾压葡萄牙，桑切斯补时头球破门被VAR吹越位毫厘之差。迪亚斯突破制造持续威胁，安切洛蒂的球队三战仅失1球展现冠军级防守。"},
      away: {score: 6, quotes: "迪奥戈·科斯塔6次神扑力保葡萄牙不败出线。C罗全场低迷延续对阵强队进球荒，进攻端仅2次射正暴露问题。5分出线的葡萄牙16强将对阵克罗地亚，马丁内斯亟需解决进攻哑火。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|K|COD|UZB": {
    score: { sh: 3, sa: 1 },
    date: "2026-06-28",
    time: "07:30",
    venue: "亚特兰大体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 10,    side: "away", scorer: "埃尔多·肖穆罗多夫", type: "shot", assist: "阿克玛·莫兹戈沃伊" },
      { min: 68,    side: "home", scorer: "约内·维萨",       type: "penalty" },
      { min: 78,    side: "home", scorer: "菲斯顿·马耶莱",    type: "shot" },
      { min: "90+1",side: "home", scorer: "约内·维萨",       type: "shot", assist: "梅沙克·埃利亚" }
    ],
    stats: {
      possession:      { h: 58, a: 42 },
      shots:           { h: 18, a: 3 },
      shotsOnTarget:   { h: 4,  a: 1 },
      corners:         { h: 2,  a: 4 },
      fouls:           { h: 6,  a: 16 },
      yellowCards:     { h: 3,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 145,a: 90 },
      dangerousAttacks:{ h: 54, a: 45 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "约内·维萨",
      sources: ["ESPN", "Sofascore", "FIFA", "Yahoo Sports"],
      home: {score: 8, quotes: "刚果民主共和国4分历史性晋级淘汰赛！肖穆罗多夫10分钟吊射破门后，维萨点球扳平+补时远射锁定3-1。马耶莱替补78分钟制胜球展现板凳深度。16强将对阵英格兰，非洲豹子继续书写奇迹。"},
      away: {score: 2, quotes: "乌兹别克斯坦三战全败0分出局。肖穆罗多夫惊艳吊射是唯一亮点，但全场仅3次射门的进攻乏力无法支撑更高目标。世界杯新军成长之路刚刚开始，卡纳瓦罗的执教任期或将终结。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|J|JOR|ARG": {
    score: { sh: 1, sa: 3 },
    date: "2026-06-28",
    time: "10:00",
    venue: "达拉斯体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 19, side: "away", scorer: "乔瓦尼·洛塞尔索",   type: "free_kick" },
      { min: 31, side: "away", scorer: "劳塔罗·马丁内斯",   type: "penalty" },
      { min: 55, side: "home", scorer: "穆萨·塔迈里",       type: "shot", assist: "伊赫桑·哈达德" },
      { min: 80, side: "away", scorer: "利昂内尔·梅西",     type: "free_kick" }
    ],
    stats: {
      possession:      { h: 27, a: 73 },
      shots:           { h: 3,  a: 11 },
      shotsOnTarget:   { h: 1,  a: 4 },
      corners:         { h: 2,  a: 6 },
      fouls:           { h: 13, a: 7 },
      yellowCards:     { h: 3,  a: 0 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 61, a: 122 },
      dangerousAttacks:{ h: 23, a: 46 }
    },
    attendance: null,
    referee: "István Kovács (ROU)",
    xg: null,
    mediaRating: {
      motm: "利昂内尔·梅西",
      sources: ["ESPN", "FIFA", "FotMob", "Sportstar"],
      home: {score: 6, quotes: "世界杯新军约旦以三战皆墨告别首次世界杯之旅。塔迈里下半场一度扳成1-2展现不屈斗志，但面对阿根廷巨星组合终究力不从心。首次参赛即面对阿根廷、奥地利、阿尔及利亚，这段经历将永载约旦足球史册。"},
      away: {score: 8, quotes: "阿根廷9分全胜完美收官。洛塞尔索19分钟任意球破门、劳塔罗点球扩大优势，梅西替补登场后80分钟任意球锁定胜局——6粒世界杯进球超越马拉多纳。卫冕冠军16强将迎战佛得角。"}
    },
    aiPreMatch: null,
    aiPostReview: null
  },

  "2026|J|ALG|AUT": {
    score: { sh: 3, sa: 3 },
    date: "2026-06-28",
    time: "10:00",
    venue: "堪萨斯城体育场",
    stage: "group",
    round: 3,
    goals: [
      { min: 28,    side: "away", scorer: "马尔科·阿瑙托维奇", type: "shot", assist: "大卫·阿拉巴" },
      { min: 45,    side: "home", scorer: "拉菲克·贝尔加利",   type: "shot" },
      { min: 55,    side: "away", scorer: "马塞尔·萨比策",     type: "shot", assist: "康拉德·莱默" },
      { min: 60,    side: "home", scorer: "里亚德·马赫雷斯",   type: "shot", assist: "胡萨姆·阿瓦尔" },
      { min: "90+3",side: "home", scorer: "里亚德·马赫雷斯",   type: "shot", assist: "胡萨姆·阿瓦尔" },
      { min: "90+6",side: "away", scorer: "萨沙·卡莱季奇",     type: "header", assist: "米夏埃尔·格雷戈里奇" }
    ],
    stats: {
      possession:      { h: 65, a: 35 },
      shots:           { h: 10, a: 9 },
      shotsOnTarget:   { h: 5,  a: 3 },
      corners:         { h: 0,  a: 3 },
      fouls:           { h: 3,  a: 7 },
      yellowCards:     { h: 0,  a: 1 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 139,a: 81 },
      dangerousAttacks:{ h: 43, a: 39 }
    },
    attendance: null,
    referee: "TBD",
    xg: null,
    mediaRating: {
      motm: "里亚德·马赫雷斯",
      sources: ["BBC Sport", "ESPN", "FIFA", "FotMob"],
      home: {score: 8, quotes: "马赫雷斯梅开二度+阿瓦尔两记助攻险些创造奇迹。阿尔及利亚65%控球碾压对手，90+3'马赫雷斯的准绝杀令全场沸腾，但卡莱季奇96分钟头球将比分定格为3-3。沙漠之狐4分锁定小组第三，等待最佳第三排名确认晋级。"},
      away: {score: 7, quotes: "卡莱季奇96分钟替补头球绝平拯救奥地利！阿瑙托维奇和萨比策进球建立两度领先，但防线被马赫雷斯+阿瓦尔组合反复撕破。4分锁定J组第二出线，16强将迎战西班牙——朗尼克的高压足球将面临终极考验。"}
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

  // ========= 淘汰赛 R32 (16场) — FIFA 官方确认对阵 | 北京时间 =========
  // 数据来源: FIFA.com / Wikipedia / FOX Sports / worldcupwiki.com
  // 更新时间: 2026-06-28 小组赛全部结束

  // M73 · 6月29日 03:00 · SoFi体育场 (洛杉矶)
  "2026|R32|RSA|CAN": {
    score: { sh: 0, sa: 1 }, date: "2026-06-29", time: "03:00", venue: "SoFi体育场", stage: "R32",
    goals: [
      { min: "90+2", side: "away", scorer: "斯蒂芬·欧斯塔基奥", type: "shot" }
    ],
    stats: {
      possession:      { h: 58, a: 42 },
      shots:           { h: 5,  a: 12 },
      shotsOnTarget:   { h: 1,  a: 7 },
      corners:         { h: 1,  a: 4 },
      fouls:           { h: 10, a: 16 },
      yellowCards:     { h: 0,  a: 2 },
      redCards:        { h: 0,  a: 0 },
      attacks:         { h: 85, a: 124 },
      dangerousAttacks:{ h: 20, a: 50 }
    },
    attendance: null, referee: null,
    xg: null,
    mediaRating: {
      motm: "斯蒂芬·欧斯塔基奥",
      sources: ["ESPN", "FIFA", "Al Jazeera", "FotMob"],
      home: {score: 6, quotes: "巴法纳巴法纳的世界杯童话在92分钟戛然而止。威廉斯多次神扑力保球门不失，防守端展现了非凡纪律。但进攻端全场仅1次射正难以制造威胁，首场淘汰赛虽败犹荣。"},
      away: {score: 8, quotes: "欧斯塔基奥禁区外凌空抽射绝杀缔造加拿大历史首场世界杯淘汰赛胜利！全场12射7正碾压对手，阿方索·戴维斯75分钟替补登场改变战局。16强将迎战荷兰vs摩洛哥胜者。"}
    },
    aiPreMatch: null, aiPostReview: null
  },
  // M76 · 6月30日 01:00 · NRG体育场 (休斯顿)
  "2026|R32|BRA|JPN": {
    score: null, date: "2026-06-30", time: "01:00", venue: "NRG体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M74 · 6月30日 04:30 · 吉列体育场 (波士顿)
  "2026|R32|GER|PAR": {
    score: null, date: "2026-06-30", time: "04:30", venue: "吉列体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M75 · 6月30日 09:00 · BBVA球场 (蒙特雷)
  "2026|R32|NED|MAR": {
    score: null, date: "2026-06-30", time: "09:00", venue: "BBVA球场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M78 · 7月1日 01:00 · AT&T体育场 (达拉斯)
  "2026|R32|CIV|NOR": {
    score: null, date: "2026-07-01", time: "01:00", venue: "AT&T体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M77 · 7月1日 05:00 · 大都会人寿体育场 (纽约)
  "2026|R32|FRA|SWE": {
    score: null, date: "2026-07-01", time: "05:00", venue: "大都会人寿体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M79 · 7月1日 09:00 · 阿兹特克球场 (墨西哥城)
  "2026|R32|MEX|ECU": {
    score: null, date: "2026-07-01", time: "09:00", venue: "阿兹特克球场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M80 · 7月2日 00:00 · 梅赛德斯-奔驰体育场 (亚特兰大)
  "2026|R32|ENG|COD": {
    score: null, date: "2026-07-02", time: "00:00", venue: "梅赛德斯-奔驰体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M82 · 7月2日 04:00 · 流明球场 (西雅图)
  "2026|R32|BEL|SEN": {
    score: null, date: "2026-07-02", time: "04:00", venue: "流明球场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M81 · 7月2日 08:00 · 李维斯体育场 (旧金山)
  "2026|R32|USA|BIH": {
    score: null, date: "2026-07-02", time: "08:00", venue: "李维斯体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M84 · 7月3日 03:00 · SoFi体育场 (洛杉矶)
  "2026|R32|ESP|AUT": {
    score: null, date: "2026-07-03", time: "03:00", venue: "SoFi体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M83 · 7月3日 07:00 · BMO球场 (多伦多)
  "2026|R32|POR|CRO": {
    score: null, date: "2026-07-03", time: "07:00", venue: "BMO球场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M85 · 7月3日 11:00 · BC Place体育场 (温哥华)
  "2026|R32|SUI|ALG": {
    score: null, date: "2026-07-03", time: "11:00", venue: "BC Place体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M88 · 7月4日 02:00 · AT&T体育场 (达拉斯)
  "2026|R32|AUS|EGY": {
    score: null, date: "2026-07-04", time: "02:00", venue: "AT&T体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M86 · 7月4日 06:00 · 硬石体育场 (迈阿密)
  "2026|R32|ARG|CPV": {
    score: null, date: "2026-07-04", time: "06:00", venue: "硬石体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  },
  // M87 · 7月4日 09:30 · 箭头体育场 (堪萨斯城)
  "2026|R32|COL|GHA": {
    score: null, date: "2026-07-04", time: "09:30", venue: "箭头体育场", stage: "R32",
    goals: null, stats: null, attendance: null, referee: null,
    xg: null, mediaRating: null, aiPreMatch: null, aiPostReview: null
  }

  // ========= R16 / QF / SF / TP / FINAL 预留框架 =========
  // 赛后将动态填充格式: "2026|R16|???|???"
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
