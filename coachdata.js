// ===== 2026世界杯主教练数据 =====
// 数据来源: CoachLists_Official_Complete.csv (FIFA Official)
// 更新时间: 2026-07-11
// 队伍数: 48
// 字段: en=英文名, cn=中文名, nat=国籍, dob=出生日期, a=年龄(2026世界杯时)

var coachDB = {
  "ALG": {"en":"PETKOVIC Vladimir","cn":"弗拉迪米尔·佩特科维奇","nat":"Switzerland","dob":"1963-08-15","a":62},
  "ARG": {"en":"SCALONI Lionel","cn":"利昂内尔·斯卡洛尼","nat":"Argentina","dob":"1978-05-16","a":48},
  "AUS": {"en":"POPOVIC Tony","cn":"托尼·波波维奇","nat":"Australia","dob":"1973-07-04","a":52},
  "AUT": {"en":"RANGNICK Ralf","cn":"拉尔夫·朗尼克","nat":"Germany","dob":"1958-06-29","a":67},
  "BEL": {"en":"GARCIA Rudi","cn":"鲁迪·加西亚","nat":"France","dob":"1964-02-20","a":62},
  "BIH": {"en":"BARBAREZ Sergej","cn":"谢尔盖·巴巴雷茨","nat":"Bosnia And Herzegovina","dob":"1971-09-17","a":54},
  "BRA": {"en":"ANCELOTTI Carlo","cn":"卡洛·安切洛蒂","nat":"Italy","dob":"1959-06-10","a":67},
  "CPV": {"en":"BUBISTA","cn":"佩德罗·布比斯塔","nat":"Cabo Verde","dob":"1970-01-08","a":56},
  "CAN": {"en":"MARSCH Jesse","cn":"杰西·马希","nat":"USA","dob":"1973-11-08","a":52},
  "COL": {"en":"LORENZO Nestor","cn":"内斯托尔·洛伦佐","nat":"Argentina","dob":"1966-02-28","a":60},
  "COD": {"en":"DESABRE Sebastien","cn":"塞巴斯蒂安·德萨布雷","nat":"France","dob":"1976-08-02","a":49},
  "CIV": {"en":"FAE Emerse","cn":"埃梅尔斯·法埃","nat":"Côte D'Ivoire","dob":"1984-01-24","a":42},
  "CRO": {"en":"DALIC Zlatko","cn":"兹拉特科·达利奇","nat":"Croatia","dob":"1966-10-26","a":59},
  "CUW": {"en":"ADVOCAAT Dick","cn":"迪克·艾德沃卡特","nat":"Netherlands","dob":"1947-09-27","a":78},
  "CZE": {"en":"KOUBEK Miroslav","cn":"米罗斯拉夫·库贝克","nat":"Czech Republic","dob":"1951-09-03","a":74},
  "ECU": {"en":"BECCACECE Sebastian","cn":"塞巴斯蒂安·贝卡切切","nat":"Argentina","dob":"1980-12-17","a":45},
  "EGY": {"en":"HOSSAM HASSAN","cn":"霍萨姆·哈桑","nat":"Egypt","dob":"1966-08-10","a":59},
  "ENG": {"en":"TUCHEL Thomas","cn":"托马斯·图赫尔","nat":"Germany","dob":"1973-08-29","a":52},
  "FRA": {"en":"DESCHAMPS Didier","cn":"迪迪埃·德尚","nat":"France","dob":"1968-10-15","a":57},
  "GER": {"en":"NAGELSMANN Julian","cn":"朱利安·纳格尔斯曼","nat":"Germany","dob":"1987-07-23","a":38},
  "GHA": {"en":"CARLOS QUEIROZ","cn":"卡洛斯·奎罗斯","nat":"Portugal","dob":"1953-03-01","a":73},
  "HAI": {"en":"MIGNE Sebastien","cn":"塞巴斯蒂安·米涅","nat":"France","dob":"1972-11-30","a":53},
  "IRN": {"en":"GHALEHNOY Amir","cn":"阿米尔·加莱诺伊","nat":"IR Iran","dob":"1963-11-22","a":62},
  "IRQ": {"en":"ARNOLD Graham","cn":"格雷厄姆·阿诺德","nat":"Australia","dob":"1963-08-03","a":62},
  "JPN": {"en":"MORIYASU Hajime","cn":"森保一","nat":"Japan","dob":"1968-08-23","a":57},
  "JOR": {"en":"SELLAMI Jamal","cn":"贾马尔·塞拉米","nat":"Morocco","dob":"1970-10-06","a":55},
  "KOR": {"en":"HONG Myungbo","cn":"洪明甫","nat":"Korea Republic","dob":"1969-02-12","a":57},
  "MEX": {"en":"AGUIRRE Javier","cn":"哈维尔·阿吉雷","nat":"Mexico","dob":"1958-12-01","a":67},
  "MAR": {"en":"OUAHBI Mohamed","cn":"穆罕默德·瓦赫比","nat":"Morocco","dob":"1968-11-15","a":57},
  "NED": {"en":"KOEMAN Ronald","cn":"罗纳德·科曼","nat":"Netherlands","dob":"1963-03-21","a":63},
  "NZL": {"en":"BAZELEY Darren","cn":"达伦·贝兹利","nat":"New Zealand","dob":"1972-10-05","a":53},
  "NOR": {"en":"SOLBAKKEN Stale","cn":"斯托莱·索尔巴肯","nat":"Norway","dob":"1968-02-27","a":58},
  "PAN": {"en":"CHRISTIANSEN Thomas","cn":"托马斯·克里斯蒂安森","nat":"Spain","dob":"1973-03-11","a":53},
  "PAR": {"en":"ALFARO Gustavo","cn":"古斯塔沃·阿尔法罗","nat":"Argentina","dob":"1962-08-14","a":63},
  "POR": {"en":"MARTINEZ Roberto","cn":"罗伯托·马丁内斯","nat":"Spain","dob":"1973-07-13","a":52},
  "QAT": {"en":"LOPETEGUI Julen","cn":"尤伦·洛佩特吉","nat":"Spain","dob":"1966-08-28","a":59},
  "KSA": {"en":"DONIS Georgios","cn":"乔治斯·多尼斯","nat":"Greece","dob":"1969-10-22","a":56},
  "SCO": {"en":"CLARKE Steve","cn":"史蒂夫·克拉克","nat":"Scotland","dob":"1963-08-29","a":62},
  "SEN": {"en":"THIAW Pape","cn":"帕普·蒂亚乌","nat":"Senegal","dob":"1981-03-31","a":45},
  "RSA": {"en":"BROOS Hugo","cn":"雨果·布鲁斯","nat":"Belgium","dob":"1952-04-10","a":74},
  "ESP": {"en":"DE LA FUENTE Luis","cn":"路易斯·德拉富恩特","nat":"Spain","dob":"1961-06-21","a":64},
  "SWE": {"en":"POTTER Graham","cn":"格雷厄姆·波特","nat":"England","dob":"1975-05-20","a":51},
  "SUI": {"en":"YAKIN Murat","cn":"穆拉特·雅金","nat":"Switzerland","dob":"1974-09-15","a":51},
  "TUN": {"en":"LAMOUCHI Sabri","cn":"萨布里·拉穆希","nat":"France","dob":"1971-11-09","a":54},
  "TUR": {"en":"MONTELLA Vincenzo","cn":"文森佐·蒙特拉","nat":"Italy","dob":"1974-06-18","a":51},
  "URU": {"en":"BIELSA Marcelo","cn":"马塞洛·贝尔萨","nat":"Argentina","dob":"1955-07-21","a":70},
  "USA": {"en":"POCHETTINO Mauricio","cn":"毛里西奥·波切蒂诺","nat":"Argentina","dob":"1972-03-02","a":54},
  "UZB": {"en":"CANNAVARO Fabio","cn":"法比奥·卡纳瓦罗","nat":"Italy","dob":"1973-09-13","a":52}
};

// 辅助函数
function getCoach(code) { return coachDB[code] || null; }
function hasCoachData(code) { return !!coachDB[code]; }
function getCoachAge(code) { 
    const c = coachDB[code];
    if (c && c.a) return c.a;
    if (c && c.dob) {
        const [y, m, d] = c.dob.split('-').map(Number);
        let age = 2026 - y;
        if (m > 6 || (m === 6 && d > 15)) age--;
        return age;
    }
    return '?';
}
