// player_stats_2026.js — 2026世界杯球员个人统计（助攻榜 & 扑救榜）
// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
//
// 数据来源（交叉验证）:
//   主源: Mungomash (per-match verified records, through 32 matches as of 2026-06-20)
//   辅源: Squawka, Wikipedia/FIFA, topscorersfootball.com, footballtoday.net
//   中文名映射: Wikipedia 中文版 / 懂球帝
//
// ⚠️ 赛事进行中 — 数据截至2026-06-20（小组赛第二轮进行中）
// ⚠️ 不同来源间偶有1-2个统计差异（助攻判定标准/门将替换场次），以Mungomash为准
//
// 结构说明:
//   assistData:  { playerKey: { nameEn, nameZh, team, teamCode, assists, matches } }
//   saveData:    { gkKey:      { nameEn, nameZh, team, teamCode, saves, savePct, cleanSheets, goalsConceded } }
//
// 后续注入方案:
//   理想状态 → 在 matchdata_2026.js 每场 goals[] 中补充 assist 字段，
//             在 stats 中补充 saves 字段，排行榜实时计算。
//   过渡方案 → 使用本文件的预聚合数据直接渲染榜单。
// ================================================================

// ===== 助攻榜数据 =====
var assistStats2026 = {
  // —— 2次助攻 ——
  "Alexander Isak": {
    nameEn: "Alexander Isak", nameZh: "亚历山大·伊萨克",
    team: "Sweden", teamCode: "SWE", assists: 2
  },
  "Michael Olise": {
    nameEn: "Michael Olise", nameZh: "迈克尔·奥利塞",
    team: "France", teamCode: "FRA", assists: 2
  },
  // —— 注：以下球员在 Wikipedia/FIFA 和 topscorersfootball 也列为2助，
  //         但 Mungomash 将其列入1助（判定标准差异），以 Mungomash 为准暂列1助 ——
  //         待比赛数据完整录入助攻字段后自动汇总修正。

  // —— 1次助攻（Mungomash 完整列表 36人）——
  "Roberto Alvarado":       { nameEn:"Roberto Alvarado",       nameZh:"罗伯托·阿尔瓦拉多",   team:"Mexico",            teamCode:"MEX", assists:1 },
  "Lee Kang-in":            { nameEn:"Lee Kang-in",            nameZh:"李刚仁",               team:"Korea Republic",    teamCode:"KOR", assists:1 },
  "Hwang In-beom":          { nameEn:"Hwang In-beom",          nameZh:"黄仁范",               team:"Korea Republic",    teamCode:"KOR", assists:1 },
  "Sead Kolašinac":         { nameEn:"Sead Kolašinac",         nameZh:"塞亚德·科拉希纳茨",   team:"Bosnia & Herz.",    teamCode:"BIH", assists:1 },
  "Christian Pulisic":      { nameEn:"Christian Pulisic",      nameZh:"克里斯蒂安·普利希奇", team:"United States",     teamCode:"USA", assists:1 },
  "Julio Enciso":           { nameEn:"Julio Enciso",           nameZh:"胡利奥·恩西索",       team:"Paraguay",          teamCode:"PAR", assists:1 },
  "Malik Tillman":          { nameEn:"Malik Tillman",          nameZh:"马利克·蒂尔曼",       team:"United States",     teamCode:"USA", assists:1 },
  "Bruno Guimarães":        { nameEn:"Bruno Guimarães",        nameZh:"布鲁诺·吉马良斯",     team:"Brazil",            teamCode:"BRA", assists:1 },
  "Deniz Undav":            { nameEn:"Deniz Undav",            nameZh:"德尼兹·温达夫",       team:"Germany",           teamCode:"GER", assists:1 },
  "Ryan Gravenberch":       { nameEn:"Ryan Gravenberch",       nameZh:"瑞安·赫拉芬贝赫",     team:"Netherlands",       teamCode:"NED", assists:1 },
  "Koki Ogawa":             { nameEn:"Koki Ogawa",             nameZh:"小川航基",             team:"Japan",             teamCode:"JPN", assists:1 },
  "Wilfried Singo":         { nameEn:"Wilfried Singo",         nameZh:"威尔弗里德·辛戈",     team:"Côte d'Ivoire",     teamCode:"CIV", assists:1 },
  "Viktor Gyökeres":        { nameEn:"Viktor Gyökeres",        nameZh:"维克托·哲凯赖什",     team:"Sweden",            teamCode:"SWE", assists:1 },
  "Lucas Bergvall":         { nameEn:"Lucas Bergvall",         nameZh:"卢卡斯·贝里瓦尔",     team:"Sweden",            teamCode:"SWE", assists:1 },
  "Adrien Rabiot":          { nameEn:"Adrien Rabiot",          nameZh:"阿德里安·拉比奥",     team:"France",            teamCode:"FRA", assists:1 },
  "Iliman Ndiaye":          { nameEn:"Iliman Ndiaye",          nameZh:"伊利曼·恩迪亚耶",     team:"Senegal",           teamCode:"SEN", assists:1 },
  "David Møller Wolfe":     { nameEn:"David Møller Wolfe",     nameZh:"达维德·默勒·沃尔费", team:"Norway",            teamCode:"NOR", assists:1 },
  "Amir Al-Ammari":         { nameEn:"Amir Al-Ammari",         nameZh:"阿米尔·阿马里",       team:"Iraq",              teamCode:"IRQ", assists:1 },
  "Xaver Schlager":         { nameEn:"Xaver Schlager",         nameZh:"克萨韦尔·施拉格尔",   team:"Austria",           teamCode:"AUT", assists:1 },
  "Noor Al-Rawabdeh":       { nameEn:"Noor Al-Rawabdeh",       nameZh:"努尔·拉瓦比德",       team:"Jordan",            teamCode:"JOR", assists:1 },
  "Pedro Neto":             { nameEn:"Pedro Neto",             nameZh:"佩德罗·内托",         team:"Portugal",          teamCode:"POR", assists:1 },
  "Arthur Masuaku":         { nameEn:"Arthur Masuaku",         nameZh:"阿蒂尔·马苏阿库",     team:"Congo DR",          teamCode:"COD", assists:1 },
  "Luka Sučić":             { nameEn:"Luka Sučić",             nameZh:"卢卡·苏契奇",         team:"Croatia",           teamCode:"CRO", assists:1 },
  "Declan Rice":            { nameEn:"Declan Rice",            nameZh:"德克兰·赖斯",         team:"England",           teamCode:"ENG", assists:1 },
  "Ivan Perišić":           { nameEn:"Ivan Perišić",           nameZh:"伊万·佩里西奇",       team:"Croatia",           teamCode:"CRO", assists:1 },
  "Elliot Anderson":        { nameEn:"Elliot Anderson",        nameZh:"埃利奥特·安德森",     team:"England",           teamCode:"ENG", assists:1 },
  "Bukayo Saka":            { nameEn:"Bukayo Saka",            nameZh:"布卡约·萨卡",         team:"England",           teamCode:"ENG", assists:1 },
  "Brandon Thomas-Asante":  { nameEn:"Brandon Thomas-Asante",  nameZh:"布兰登·托马斯-阿桑特",team:"Ghana",            teamCode:"GHA", assists:1 },
  "Luis Díaz":              { nameEn:"Luis Díaz",              nameZh:"路易斯·迪亚斯",       team:"Colombia",          teamCode:"COL", assists:1 },
  "Gustavo Puerta":         { nameEn:"Gustavo Puerta",         nameZh:"古斯塔沃·普埃尔塔",   team:"Colombia",          teamCode:"COL", assists:1 },
  "Cucho Hernández":        { nameEn:"Cucho Hernández",        nameZh:"库乔·埃尔南德斯",     team:"Colombia",          teamCode:"COL", assists:1 },
  "Alexandr Sojka":         { nameEn:"Alexandr Sojka",         nameZh:"亚历山大·索伊卡",     team:"Czechia",           teamCode:"CZE", assists:1 },
  "Rubén Vargas":           { nameEn:"Rubén Vargas",           nameZh:"鲁本·巴尔加斯",       team:"Switzerland",       teamCode:"SUI", assists:1 },
  "Breel Embolo":           { nameEn:"Breel Embolo",           nameZh:"布雷尔·恩博洛",       team:"Switzerland",       teamCode:"SUI", assists:1 },
  "Granit Xhaka":           { nameEn:"Granit Xhaka",           nameZh:"格拉尼特·扎卡",       team:"Switzerland",       teamCode:"SUI", assists:1 },
  "Nathan Saliba":          { nameEn:"Nathan Saliba",          nameZh:"纳撒·萨利巴",         team:"Canada",            teamCode:"CAN", assists:1 },

  // —— Wikipedia/FIFA 额外列出但 Mungomash 未列的球员（判定差异，保留参考）——
  "_extraFromWikipedia": {
    "Rodrigo De Paul":        { nameEn:"Rodrigo De Paul",       nameZh:"罗德里戈·德保罗",     team:"Argentina",   teamCode:"ARG", assists:1, note:"Wikipedia listed" },
    "Nicolás González":       { nameEn:"Nicolás González",      nameZh:"尼古拉斯·冈萨雷斯",   team:"Argentina",   teamCode:"ARG", assists:1, note:"Wikipedia listed" },
    "Paul Okon-Engstler":     { nameEn:"Paul Okon-Engstler",    nameZh:"保罗·奥孔-恩斯特勒",  team:"Australia",   teamCode:"AUS", assists:1, note:"Wikipedia listed" },
    "Promise David":          { nameEn:"Promise David",         nameZh:"普罗米斯·戴维",       team:"Canada",      teamCode:"CAN", assists:1, note:"Wikipedia listed" },
    "Vladimír Coufal":        { nameEn:"Vladimír Coufal",       nameZh:"弗拉迪米尔·曹法尔",   team:"Czechia",     teamCode:"CZE", assists:1, note:"Wikipedia listed" },
    "Mohamed Salah":          { nameEn:"Mohamed Salah",         nameZh:"穆罕默德·萨拉赫",     team:"Egypt",       teamCode:"EGY", assists:1, note:"Wikipedia listed" },
    "Nathaniel Brown":        { nameEn:"Nathaniel Brown",       nameZh:"纳撒尼尔·布朗",       team:"Germany",     teamCode:"GER", assists:1, note:"Wikipedia listed" },
    "Florian Wirtz":          { nameEn:"Florian Wirtz",         nameZh:"弗洛里安·维尔茨",     team:"Germany",     teamCode:"GER", assists:1, note:"Wikipedia listed" },
    "Ramin Rezaeian":         { nameEn:"Ramin Rezaeian",        nameZh:"拉明·雷扎伊安",       team:"Iran",        teamCode:"IRN", assists:1, note:"Wikipedia listed" },
    "Takefusa Kubo":          { nameEn:"Takefusa Kubo",         nameZh:"久保建英",             team:"Japan",       teamCode:"JPN", assists:1, note:"Wikipedia listed" },
    "Brahim Díaz":            { nameEn:"Brahim Díaz",           nameZh:"卜拉欣·迪亚斯",       team:"Morocco",     teamCode:"MAR", assists:1, note:"Wikipedia listed" },
    "Martin Ødegaard":        { nameEn:"Martin Ødegaard",       nameZh:"马丁·厄德高",         team:"Norway",      teamCode:"NOR", assists:1, note:"Wikipedia listed" },
    "Homam Elamin":           { nameEn:"Homam Elamin",          nameZh:"霍马姆·艾哈迈德",     team:"Qatar",       teamCode:"QAT", assists:1, note:"Wikipedia listed" },
    "Hannibal Mejbri":        { nameEn:"Hannibal Mejbri",       nameZh:"汉尼拔·马吉卜里",     team:"Tunisia",     teamCode:"TUN", assists:1, note:"Wikipedia listed" },
    "Alex Freeman":           { nameEn:"Alex Freeman",          nameZh:"亚历克斯·弗里曼",     team:"United States",teamCode:"USA", assists:1, note:"Wikipedia listed" },
    "Érik Lira":              { nameEn:"Érik Lira",             nameZh:"埃里克·利拉",         team:"Mexico",      teamCode:"MEX", assists:1, note:"Wikipedia listed" }
  }
};

// ===== 扑救榜数据 =====
var saveStats2026 = {
  // 排序: 按 saves 降序
  "Mohammed Al-Owais": {
    nameEn: "Mohammed Al-Owais", nameZh: "穆罕默德·奥韦斯",
    team: "Saudi Arabia", teamCode: "KSA",
    saves: 9, savePct: 90, cleanSheets: 0, goalsConceded: 1
  },
  "Patrick Beach": {
    nameEn: "Patrick Beach", nameZh: "帕特里克·比奇",
    team: "Australia", teamCode: "AUS",
    saves: 9, savePct: 100, cleanSheets: 1, goalsConceded: 0
  },
  "Mahmoud Abunada": {
    nameEn: "Mahmoud Abunada", nameZh: "马哈茂德·阿布纳达",
    team: "Qatar", teamCode: "QAT",
    saves: 9, savePct: 83, cleanSheets: 0, goalsConceded: 1
  },
  "Matej Kovář": {
    nameEn: "Matej Kovář", nameZh: "马泰·科瓦日",
    team: "Czechia", teamCode: "CZE",
    saves: 7, savePct: 67, cleanSheets: 0, goalsConceded: 3
  },
  "Vozinha": {
    nameEn: "Vozinha (Josimar Dias)", nameZh: "沃济尼亚",
    team: "Cabo Verde", teamCode: "CPV",
    saves: 7, savePct: 100, cleanSheets: 1, goalsConceded: 0
  },
  "Dominik Livaković": {
    nameEn: "Dominik Livaković", nameZh: "多米尼克·利瓦科维奇",
    team: "Croatia", teamCode: "CRO",
    saves: 7, savePct: 64, cleanSheets: 0, goalsConceded: 4
  },
  "Kim Seung-gyu": {
    nameEn: "Kim Seung-gyu", nameZh: "金承奎",
    team: "Korea Republic", teamCode: "KOR",
    saves: 6, savePct: 75, cleanSheets: 0, goalsConceded: 2
  },
  "Alireza Beiranvand": {
    nameEn: "Alireza Beiranvand", nameZh: "阿里雷扎·贝兰万德",
    team: "Iran", teamCode: "IRN",
    saves: 6, savePct: 75, cleanSheets: 0, goalsConceded: 2
  },
  "Gregor Kobel": {
    nameEn: "Gregor Kobel", nameZh: "格雷戈·科贝尔",
    team: "Switzerland", teamCode: "SUI",
    saves: 5, savePct: 71, cleanSheets: 0, goalsConceded: 2
  },
  "Alisson Becker": {
    nameEn: "Alisson Becker", nameZh: "阿利松·贝克尔",
    team: "Brazil", teamCode: "BRA",
    saves: 5, savePct: 83, cleanSheets: 1, goalsConceded: 1
  },
  "Édouard Mendy": {
    nameEn: "Édouard Mendy", nameZh: "爱德华·门迪",
    team: "Senegal", teamCode: "SEN",
    saves: 5, savePct: 56, cleanSheets: 0, goalsConceded: 3
  },
  "Raúl Rangel": {
    nameEn: "Raúl Rangel", nameZh: "劳尔·兰赫尔",
    team: "Mexico", teamCode: "MEX",
    saves: 4, savePct: 100, cleanSheets: 1, goalsConceded: 0
  },
  "Ronwen Williams": {
    nameEn: "Ronwen Williams", nameZh: "龙文·威廉姆斯",
    team: "South Africa", teamCode: "RSA",
    saves: 4, savePct: 57, cleanSheets: 0, goalsConceded: 3
  },
  "Nikola Vasilj": {
    nameEn: "Nikola Vasilj", nameZh: "尼古拉·瓦西利",
    team: "Bosnia & Herz.", teamCode: "BIH",
    saves: 4, savePct: 44, cleanSheets: 0, goalsConceded: 5
  },
  "Yassine Bounou": {
    nameEn: "Yassine Bounou", nameZh: "亚辛·布努",
    team: "Morocco", teamCode: "MAR",
    saves: 4, savePct: 80, cleanSheets: 0, goalsConceded: 1
  },
  "Eloy Room": {
    nameEn: "Eloy Room", nameZh: "埃洛伊·罗姆",
    team: "Curaçao", teamCode: "CUW",
    saves: 4, savePct: 36, cleanSheets: 0, goalsConceded: 7
  },
  "Zion Suzuki": {
    nameEn: "Zion Suzuki", nameZh: "铃木彩艳",
    team: "Japan", teamCode: "JPN",
    saves: 4, savePct: 67, cleanSheets: 0, goalsConceded: 2
  },
  "Lawrence Ati Zigi": {
    nameEn: "Lawrence Ati Zigi", nameZh: "劳伦斯·阿蒂-齐吉",
    team: "Ghana", teamCode: "GHA",
    saves: 4, savePct: 100, cleanSheets: 1, goalsConceded: 0
  },
  "Matt Freese": {
    nameEn: "Matt Freese", nameZh: "马特·弗里斯",
    team: "United States", teamCode: "USA",
    saves: 3, savePct: 75, cleanSheets: 0, goalsConceded: 1
  },
  "Johny Placide": {
    nameEn: "Johny Placide", nameZh: "约翰尼·普拉西德",
    team: "Haiti", teamCode: "HAI",
    saves: 3, savePct: 43, cleanSheets: 0, goalsConceded: 4
  },
  "Angus Gunn": {
    nameEn: "Angus Gunn", nameZh: "安格斯·冈恩",
    team: "Scotland", teamCode: "SCO",
    saves: 3, savePct: 75, cleanSheets: 1, goalsConceded: 1
  },
  "Uğurcan Çakır": {
    nameEn: "Uğurcan Çakır", nameZh: "乌乌尔詹·恰克尔",
    team: "Türkiye", teamCode: "TUR",
    saves: 3, savePct: 50, cleanSheets: 0, goalsConceded: 2
  },
  "Hernán Galíndez": {
    nameEn: "Hernán Galíndez", nameZh: "埃尔南·加林德斯",
    team: "Ecuador", teamCode: "ECU",
    saves: 3, savePct: 75, cleanSheets: 0, goalsConceded: 1
  },
  "Mostafa Shoubir": {
    nameEn: "Mostafa Shoubir", nameZh: "穆斯塔法·舒贝尔",
    team: "Egypt", teamCode: "EGY",
    saves: 3, savePct: 75, cleanSheets: 0, goalsConceded: 1
  },
  "Luca Zidane": {
    nameEn: "Luca Zidane", nameZh: "卢卡·齐达内",
    team: "Algeria", teamCode: "ALG",
    saves: 3, savePct: 75, cleanSheets: 0, goalsConceded: 1
  },
  "Alexander Schlager": {
    nameEn: "Alexander Schlager", nameZh: "亚历山大·施拉格尔",
    team: "Austria", teamCode: "AUT",
    saves: 3, savePct: 75, cleanSheets: 0, goalsConceded: 1
  },
  "Jordan Pickford": {
    nameEn: "Jordan Pickford", nameZh: "乔丹·皮克福德",
    team: "England", teamCode: "ENG",
    saves: 3, savePct: 60, cleanSheets: 0, goalsConceded: 2
  },
  "Maxime Crépeau": {
    nameEn: "Maxime Crépeau", nameZh: "马克西姆·克雷波",
    team: "Canada", teamCode: "CAN",
    saves: 2, savePct: 67, cleanSheets: 1, goalsConceded: 1
  },
  "Thibaut Courtois": {
    nameEn: "Thibaut Courtois", nameZh: "蒂博·库尔图瓦",
    team: "Belgium", teamCode: "BEL",
    saves: 2, savePct: 67, cleanSheets: 0, goalsConceded: 1
  },
  "Fernando Muslera": {
    nameEn: "Fernando Muslera", nameZh: "费尔南多·穆斯莱拉",
    team: "Uruguay", teamCode: "URU",
    saves: 2, savePct: 67, cleanSheets: 0, goalsConceded: 1
  },
  "Max Crocombe": {
    nameEn: "Max Crocombe", nameZh: "马克斯·克罗科姆",
    team: "New Zealand", teamCode: "NZL",
    saves: 2, savePct: 50, cleanSheets: 0, goalsConceded: 2
  },
  "Mike Maignan": {
    nameEn: "Mike Maignan", nameZh: "迈克·迈尼昂",
    team: "France", teamCode: "FRA",
    saves: 2, savePct: 67, cleanSheets: 0, goalsConceded: 1
  },
  "Jalal Hassan": {
    nameEn: "Jalal Hassan", nameZh: "贾拉勒·哈桑",
    team: "Iraq", teamCode: "IRQ",
    saves: 2, savePct: 33, cleanSheets: 0, goalsConceded: 4
  },
  "Orlando Mosquera": {
    nameEn: "Orlando Mosquera", nameZh: "奥兰多·莫斯克拉",
    team: "Panama", teamCode: "PAN",
    saves: 2, savePct: 67, cleanSheets: 0, goalsConceded: 1
  },
  // —— 1次扑救 ——
  "Manuel Neuer": {
    nameEn: "Manuel Neuer", nameZh: "曼努埃尔·诺伊尔",
    team: "Germany", teamCode: "GER",
    saves: 1, savePct: 50, cleanSheets: 0, goalsConceded: 1
  },
  "Bart Verbruggen": {
    nameEn: "Bart Verbruggen", nameZh: "巴特·费布吕亨",
    team: "Netherlands", teamCode: "NED",
    saves: 1, savePct: 33, cleanSheets: 0, goalsConceded: 2
  },
  "Yahia Fofana": {
    nameEn: "Yahia Fofana", nameZh: "叶海亚·福法纳",
    team: "Côte d'Ivoire", teamCode: "CIV",
    saves: 1, savePct: 100, cleanSheets: 1, goalsConceded: 0
  },
  "Kristoffer Nordfeldt": {
    nameEn: "Kristoffer Nordfeldt", nameZh: "克里斯托弗·诺德费尔特",
    team: "Sweden", teamCode: "SWE",
    saves: 1, savePct: 50, cleanSheets: 0, goalsConceded: 1
  },
  "Mouhib Chamakh": {
    nameEn: "Mouhib Chamakh", nameZh: "穆希卜·沙马赫",
    team: "Tunisia", teamCode: "TUN",
    saves: 1, savePct: 17, cleanSheets: 0, goalsConceded: 5
  },
  "Unai Simón": {
    nameEn: "Unai Simón", nameZh: "乌奈·西蒙",
    team: "Spain", teamCode: "ESP",
    saves: 1, savePct: 100, cleanSheets: 1, goalsConceded: 0
  },
  "Yazeed Abulaila": {
    nameEn: "Yazeed Abulaila", nameZh: "亚齐德·阿布拉伊拉",
    team: "Jordan", teamCode: "JOR",
    saves: 1, savePct: 25, cleanSheets: 0, goalsConceded: 3
  },
  "Diogo Costa": {
    nameEn: "Diogo Costa", nameZh: "迪奥戈·科斯塔",
    team: "Portugal", teamCode: "POR",
    saves: 1, savePct: 50, cleanSheets: 0, goalsConceded: 1
  },
  "Utkir Yusupov": {
    nameEn: "Utkir Yusupov", nameZh: "乌特基尔·尤苏波夫",
    team: "Uzbekistan", teamCode: "UZB",
    saves: 1, savePct: 25, cleanSheets: 0, goalsConceded: 3
  },
  "Camilo Vargas": {
    nameEn: "Camilo Vargas", nameZh: "卡米洛·巴尔加斯",
    team: "Colombia", teamCode: "COL",
    saves: 1, savePct: 50, cleanSheets: 0, goalsConceded: 1
  },
  // —— 零扑救（出场但未面对射正/或射正全进）——
  "Emiliano Martínez": {
    nameEn: "Emiliano Martínez", nameZh: "埃米利亚诺·马丁内斯",
    team: "Argentina", teamCode: "ARG",
    saves: 0, savePct: 0, cleanSheets: 1, goalsConceded: 0,
    note: "对方零射正，零封获胜"
  },
  "Ørjan Nyland": {
    nameEn: "Ørjan Nyland", nameZh: "厄尔扬·尼兰",
    team: "Norway", teamCode: "NOR",
    saves: 0, savePct: 0, cleanSheets: 0, goalsConceded: 1
  },
  "Lionel Mpasi": {
    nameEn: "Lionel Mpasi", nameZh: "利昂内尔·姆帕西",
    team: "Congo DR", teamCode: "COD",
    saves: 0, savePct: 0, cleanSheets: 0, goalsConceded: 1
  }
};

// ===== 辅助函数: 获取助攻榜排序列表 =====
function getAssistRanking() {
  var list = [];
  for (var key in assistStats2026) {
    if (key.indexOf('_') === 0) continue; // skip _extraFromWikipedia etc
    list.push(assistStats2026[key]);
  }
  list.sort(function(a, b) { return b.assists - a.assists; });
  return list;
}

// ===== 辅助函数: 获取扑救榜排序列表 =====
function getSaveRanking() {
  var list = [];
  for (var key in saveStats2026) {
    list.push(saveStats2026[key]);
  }
  list.sort(function(a, b) { return b.saves - a.saves; });
  return list;
}

// ===== 辅助函数: 获取扑救率榜排序列表（至少面对3次射正） =====
function getSavePctRanking(minSaves) {
  minSaves = minSaves || 0;
  var list = [];
  for (var key in saveStats2026) {
    var gk = saveStats2026[key];
    if (gk.saves >= minSaves || gk.cleanSheets >= 1) {
      list.push(gk);
    }
  }
  list.sort(function(a, b) { return b.savePct - a.savePct || b.saves - a.saves; });
  return list;
}

console.log('✅ player_stats_2026.js 加载完成 — 助攻榜 ' +
  Object.keys(assistStats2026).filter(function(k){return k.indexOf('_')!==0;}).length + '人 | 扑救榜 ' +
  Object.keys(saveStats2026).length + '人');
