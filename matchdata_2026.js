// matchdata_2026.js — 2026世界杯比赛数据层 | V1.73
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
    mediaRating: {
      motm: "黄仁范",
      sources: ["FIFA", "ESPN"],
      home: {score: 7, quotes: "韩国在先失一球的情况下展现韧性完成逆转。黄仁范一射一传主导翻盘，吴贤揆锁定胜局。韩国连续第三届世界杯战胜欧洲对手。"},
      away: {score: 5, quotes: "捷克依靠克雷伊奇的头球意外领先，但未能守住优势。门将科瓦日多次神扑才避免更大比分失利，球队整体创造力不足。"}
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
    mediaRating: {
      motm: "阿姆里",
      sources: ["Yahoo Sports", "ESPN", "PA"],
      home: {score: 9, quotes: "沙特以弱旅之姿打出钢铁防守，阿姆里的进球让世界震惊。门将阿尔-奥瓦斯全场9次扑救，堪称本届世界杯最佳门将表现之一。这是一场载入亚洲足球史册的平局。"},
      away: {score: 3, quotes: "乌拉圭控球67%、20次射门10次射正却仅入1球。进攻终结严重乏力，阿劳霍直到第80分钟才勉强扳平。这远低于人们对南美劲旅的期待。"}
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

  // B组
  "2026|B|CAN|BIH": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-12", time: "07:00", venue: "BMO球场", stage: "group", round: 1,
    goals: [{ min: 54, side: "away", scorer: "德米罗维奇", type: "shot" },{ min: 78, side: "home", scorer: "拉林", type: "shot" }],
    stats: { possession:{h:55,a:45}, shots:{h:8,a:7}, shotsOnTarget:{h:4,a:3}, corners:{h:5,a:2}, fouls:{h:11,a:13}, yellowCards:{h:1,a:2}, redCards:{h:0,a:0}, attacks:{h:92,a:76}, dangerousAttacks:{h:42,a:28} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "拉林", sources: ["ESPN", "AP News"], home: {score: 7, quotes: "加拿大在主场球迷面前展现了顽强斗志，拉林的替补扳平球为球队赢得历史性的首个世界杯积分。戴维斯全场活跃但未能破门。"}, away: {score: 6, quotes: "波黑凭借德米罗维奇的进球一度看到胜利希望，但未能守住领先。球队整体防守组织尚可，进攻端创造力不足是最大问题。"} },
    aiPreMatch: null, aiPostReview: null
  },
  "2026|B|QAT|SUI": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-13", time: "07:00", venue: "李维斯体育场", stage: "group", round: 1,
    goals: [{ min: 62, side: "away", scorer: "恩博洛", type: "header" },{ min: "90+4", side: "home", scorer: "胡赫", type: "header" }],
    stats: { possession:{h:35,a:65}, shots:{h:5,a:16}, shotsOnTarget:{h:2,a:8}, corners:{h:2,a:7}, fouls:{h:13,a:6}, yellowCards:{h:3,a:0}, redCards:{h:0,a:0}, attacks:{h:58,a:128}, dangerousAttacks:{h:18,a:63} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "胡赫", sources: ["FIFA", "ESPN"], home: {score: 8, quotes: "卡塔尔在伤停补时阶段戏剧性扳平，收获了队史首个世界杯积分。胡赫的头球让整个海湾国家为之沸腾，这是属于卡塔尔足球的历史性时刻。"}, away: {score: 4, quotes: "瑞士控制了整场比赛却未能锁定胜局，恩博洛的进球本应足够。最后时刻的防守松懈让到手的三分变成一分，这可能是小组出线的致命失误。"} },
    aiPreMatch: null, aiPostReview: null
  },

  // C组
  "2026|C|BRA|MAR": {
    score: { sh: 1, sa: 1 },
    date: "2026-06-13", time: "10:00", venue: "大都会人寿球场", stage: "group", round: 1,
    goals: [{ min: 19, side: "away", scorer: "赛巴里", type: "shot" },{ min: 32, side: "home", scorer: "维尼修斯", type: "shot" }],
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

  // D组
  "2026|D|USA|PAR": {
    score: { sh: 4, sa: 1 },
    date: "2026-06-12", time: "10:00", venue: "SoFi体育场", stage: "group", round: 1,
    goals: [{ min: 15, side: "home", scorer: "普利西奇", type: "penalty" },{ min: 38, side: "home", scorer: "巴洛贡", type: "shot" },{ min: 58, side: "home", scorer: "麦肯尼", type: "header" },{ min: 72, side: "away", scorer: "阿尔米隆", type: "shot" },{ min: 84, side: "home", scorer: "雷纳", type: "shot" }],
    stats: { possession:{h:57,a:43}, shots:{h:16,a:6}, shotsOnTarget:{h:9,a:2}, corners:{h:7,a:3}, fouls:{h:8,a:12}, yellowCards:{h:0,a:2}, redCards:{h:0,a:0}, attacks:{h:104,a:72}, dangerousAttacks:{h:52,a:25} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "普利西奇", sources: ["ESPN", "Olympics.com"], home: {score: 9, quotes: "美国队以一场酣畅淋漓的4-1大胜开启主场世界杯征程。普利西奇点球首开纪录，巴洛贡、麦肯尼和雷纳各入一球，进攻端多点开花展现了东道主的雄心。"}, away: {score: 4, quotes: "巴拉圭面对东道主的凌厉攻势难以招架。阿尔米隆的进球是唯一的亮点，球队整体防守漏洞百出，需要在后续比赛中迅速调整。"} },
    aiPreMatch: null, aiPostReview: null
  },
  "2026|D|AUS|TUR": {
    score: { sh: 2, sa: 0 },
    date: "2026-06-14", time: "03:00", venue: "BC体育馆", stage: "group", round: 1,
    goals: [{ min: 41, side: "home", scorer: "伊兰昆达", type: "shot" },{ min: 68, side: "home", scorer: "梅特卡夫", type: "shot" }],
    stats: { possession:{h:42,a:58}, shots:{h:9,a:12}, shotsOnTarget:{h:5,a:3}, corners:{h:4,a:8}, fouls:{h:12,a:10}, yellowCards:{h:2,a:3}, redCards:{h:0,a:1}, attacks:{h:71,a:98}, dangerousAttacks:{h:30,a:45} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "伊兰昆达", sources: ["ESPN", "NYT"], home: {score: 8, quotes: "澳大利亚以一场令人印象深刻的胜利爆冷击败土耳其。伊兰昆达和梅特卡夫的进球展现了澳洲足球的新生力量，防守端零封对手同样值得称赞。"}, away: {score: 3, quotes: "土耳其时隔24年重返世界杯却遭遇当头棒喝。控球率占优却无法转化为进球，一张红牌更是雪上加霜。球队需要重新审视战术布置。"} },
    aiPreMatch: null, aiPostReview: null
  },

  // E组
  "2026|E|GER|CUW": {
    score: { sh: 7, sa: 1 },
    date: "2026-06-14", time: "06:00", venue: "NRG体育场", stage: "group", round: 1,
    goals: [{ min: 8, side: "home", scorer: "哈弗茨", type: "shot" },{ min: 22, side: "home", scorer: "穆西亚拉", type: "shot" },{ min: 35, side: "home", scorer: "萨内", type: "shot" },{ min: 42, side: "home", scorer: "哈弗茨", type: "header" },{ min: 56, side: "away", scorer: "巴库纳", type: "shot" },{ min: 67, side: "home", scorer: "维尔茨", type: "shot" },{ min: 81, side: "home", scorer: "菲尔克鲁格", type: "header" },{ min: 88, side: "home", scorer: "穆勒", type: "shot" }],
    stats: { possession:{h:72,a:28}, shots:{h:24,a:3}, shotsOnTarget:{h:14,a:1}, corners:{h:11,a:0}, fouls:{h:4,a:8}, yellowCards:{h:0,a:1}, redCards:{h:0,a:0}, attacks:{h:145,a:35}, dangerousAttacks:{h:78,a:8} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "哈弗茨", sources: ["FIFA", "ESPN"], home: {score: 10, quotes: "德国以一场摧枯拉朽的7-1大胜宣告王者归来。哈弗茨梅开二度，穆西亚拉、萨内、维尔茨、菲尔克鲁格和穆勒各入一球，全方位碾压式的表现让世界为之侧目。"}, away: {score: 2, quotes: "库拉索的世界杯首秀遭遇噩梦般的洗礼。巴库纳的进球挽回些许颜面，但全场仅3次射门的数据如实反映了巨大的实力鸿沟。"} },
    aiPreMatch: null, aiPostReview: null
  },
  "2026|E|CIV|ECU": {
    score: { sh: 1, sa: 0 },
    date: "2026-06-14", time: "09:00", venue: "AT&T体育场", stage: "group", round: 1,
    goals: [{ min: 87, side: "home", scorer: "阿马德·迪亚洛", type: "shot" }],
    stats: { possession:{h:46,a:54}, shots:{h:10,a:8}, shotsOnTarget:{h:4,a:2}, corners:{h:5,a:6}, fouls:{h:11,a:12}, yellowCards:{h:2,a:2}, redCards:{h:0,a:0}, attacks:{h:83,a:91}, dangerousAttacks:{h:35,a:32} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "阿马德·迪亚洛", sources: ["ESPN", "Fox Sports"], home: {score: 8, quotes: "科特迪瓦凭借迪亚洛第87分钟的绝杀取得开门红。比赛大部分时间势均力敌，但科特迪瓦在关键时刻展现了更强的把握能力。"}, away: {score: 5, quotes: "厄瓜多尔掌控了场面却未能转化为进球。球队在比赛末段的防守松懈付出了惨痛代价，首战失利让小组出线形势变得严峻。"} },
    aiPreMatch: null, aiPostReview: null
  },

  // F组
  "2026|F|NED|JPN": {
    score: { sh: 2, sa: 2 },
    date: "2026-06-14", time: "12:00", venue: "SoFi体育场", stage: "group", round: 1,
    goals: [{ min: 18, side: "home", scorer: "加克波", type: "shot" },{ min: 35, side: "away", scorer: "三笘薰", type: "shot" },{ min: 55, side: "home", scorer: "德佩", type: "penalty" },{ min: 78, side: "away", scorer: "久保建英", type: "shot" }],
    stats: { possession:{h:55,a:45}, shots:{h:13,a:9}, shotsOnTarget:{h:7,a:5}, corners:{h:6,a:3}, fouls:{h:9,a:10}, yellowCards:{h:1,a:1}, redCards:{h:0,a:0}, attacks:{h:102,a:88}, dangerousAttacks:{h:48,a:39} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "久保建英", sources: ["ESPN", "NYT"], home: {score: 6, quotes: "荷兰两度领先却两度被追平，防守端的松懈让到手的三分溜走。加克波和德佩的进球展现了攻击力，但整体缺乏杀死比赛的决心。"}, away: {score: 8, quotes: "日本展现了惊人的韧性，两度落后两度扳平。三笘薰和久保建英的进球让亚洲足球再次闪耀世界舞台，这场平局堪比一场胜利。"} },
    aiPreMatch: null, aiPostReview: null
  },
  "2026|F|SWE|TUN": {
    score: { sh: 5, sa: 1 },
    date: "2026-06-14", time: "15:00", venue: "BMO球场", stage: "group", round: 1,
    goals: [{ min: 12, side: "home", scorer: "伊萨克", type: "shot" },{ min: 31, side: "home", scorer: "阿亚里", type: "shot" },{ min: 44, side: "home", scorer: "哲凯赖什", type: "header" },{ min: 53, side: "away", scorer: "姆萨克尼", type: "shot" },{ min: 72, side: "home", scorer: "阿亚里", type: "shot" },{ min: 85, side: "home", scorer: "库卢塞夫斯基", type: "shot" }],
    stats: { possession:{h:60,a:40}, shots:{h:18,a:5}, shotsOnTarget:{h:10,a:2}, corners:{h:7,a:2}, fouls:{h:7,a:14}, yellowCards:{h:0,a:2}, redCards:{h:0,a:0}, attacks:{h:122,a:58}, dangerousAttacks:{h:64,a:18} },
    attendance: null, referee: "TBD", xg: null,
    mediaRating: { motm: "阿亚里", sources: ["ESPN", "BBC"], home: {score: 9, quotes: "瑞典以一场摧枯拉朽的5-1大胜开启世界杯。阿亚里梅开二度，伊萨克、哲凯赖什和库卢塞夫斯基各入一球，进攻端全面开花展现了北欧劲旅的强大实力。"}, away: {score: 3, quotes: "突尼斯面对瑞典的凌厉攻势毫无还手之力。姆萨克尼的进球是唯一的亮点，但防线漏洞百出让球队遭遇了惨痛失利。"} },
    aiPreMatch: null, aiPostReview: null
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
