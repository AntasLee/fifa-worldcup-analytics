// ===== 2026世界杯阵容名单 =====
// 数据来源: SquadLists_Official_Complete.csv (FIFA Official)
// 更新时间: 2026-07-11
// 队伍数: 48 | 球员总数: 1248 (每队26人)
// 字段: n=英文名, cn=中文名, nick=球衣名, c=俱乐部, h=身高cm, dob=出生日期, v=当前身价(待更新), p=位置

var squadDB = {
  "ALG": {
    "gk": [
      {"n":"MASTIL Melvin","cn":"梅尔文·马斯蒂尔","nick":"MASTIL","c":"FC Stade Nyonnais (SUI)","h":194,"dob":"2000-02-19","v":"20","p":"Goalkeeper"},
      {"n":"BENBOT Oussama","cn":"乌萨马·本博特","nick":"BENBOT","c":"USM Alger (ALG)","h":188,"dob":"1994-11-10","v":"30","p":"Goalkeeper"},
      {"n":"ZIDANE Luca","cn":"卢卡·齐达内","nick":"ZIDANE","c":"Granada CF (ESP)","h":183,"dob":"1998-05-13","v":"150","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"MANDI Aissa","cn":"艾萨·曼迪","nick":"MANDI","c":"Lille OSC (FRA)","h":184,"dob":"1991-10-22","v":"120","p":"Defender"},
      {"n":"ABADA Achraf","cn":"阿什拉夫·阿巴达","nick":"ABADA","c":"USM Alger (ALG)","h":185,"dob":"1999-06-15","v":"40","p":"Defender"},
      {"n":"TOUGAI Mohamed Amine","cn":"穆罕默德·阿明·图盖","nick":"TOUGAI","c":"Espérance De Tunisie (TUN)","h":186,"dob":"2000-01-22","v":"80","p":"Defender"},
      {"n":"BELAID Zineddine","cn":"齐内丁·贝莱德","nick":"BELAID","c":"JS Kabylie (ALG)","h":186,"dob":"1999-03-20","v":"150","p":"Defender"},
      {"n":"HADJAM Jaouen","cn":"贾文·哈贾姆","nick":"HADJAM","c":"BSC Young Boys (SUI)","h":185,"dob":"2003-03-26","v":"900","p":"Defender"},
      {"n":"AIT-NOURI Rayan","cn":"拉扬·艾特-努里","nick":"AÏT NOURI","c":"Manchester City FC (ENG)","h":180,"dob":"2001-06-06","v":"3500","p":"Defender"},
      {"n":"BELGHALI Rafik","cn":"拉菲克·贝尔加利","nick":"BELGHALI","c":"Hellas Verona FC (ITA)","h":180,"dob":"2002-07-06","v":"100","p":"Defender"},
      {"n":"BENSEBAINI Ramy","cn":"拉米·本塞拜尼","nick":"BENSEBAINI","c":"Borussia Dortmund (GER)","h":187,"dob":"1995-04-16","v":"700","p":"Defender"},
      {"n":"CHERGUI Samir","cn":"萨米尔·谢尔吉","nick":"CHRGUI","c":"Paris FC (FRA)","h":185,"dob":"1999-06-02","v":"70","p":"Defender"}
    ],
    "mf": [
      {"n":"ZERROUKI Ramiz","cn":"拉米兹·泽鲁基","nick":"ZERROUKI","c":"FC Twente (NED)","h":183,"dob":"1998-05-26","v":"500","p":"Midfield"},
      {"n":"AOUAR Houssem","cn":"侯赛姆·奥亚尔","nick":"AOUAR","c":"Al Ittihad (KSA)","h":175,"dob":"1998-06-30","v":"850","p":"Midfield"},
      {"n":"CHAIBI Fares","cn":"法雷斯·沙伊比","nick":"CHAIBI","c":"Eintracht Frankfurt (GER)","h":183,"dob":"2002-11-28","v":"900","p":"Midfield"},
      {"n":"BOUDAOUI Hicham","cn":"希沙姆·布达维","nick":"BOUDAOUI","c":"OGC Nice (FRA)","h":175,"dob":"1999-09-23","v":"1500","p":"Midfield"},
      {"n":"BENTALEB Nabil","cn":"纳比尔·本塔莱布","nick":"BENTALEB","c":"Lille OSC (FRA)","h":189,"dob":"1994-11-24","v":"600","p":"Midfield"},
      {"n":"MAZA Ibrahim","cn":"易卜拉欣·马扎","nick":"MAZA","c":"Bayer Leverkusen (GER)","h":180,"dob":"2005-11-24","v":"1200","p":"Midfield"},
      {"n":"TITRAOUI Yassine","cn":"亚辛·蒂特拉维","nick":"TITRAOUI","c":"Sporting Charleroi (BEL)","h":180,"dob":"2003-08-26","v":"60","p":"Midfield"}
    ],
    "fw": [
      {"n":"MAHREZ Riyad","cn":"里亚德·马赫雷斯","nick":"MAHREZ","c":"Al Ahli FC (KSA)","h":179,"dob":"1991-02-21","v":"800","p":"Forward"},
      {"n":"GOUIRI Amine","cn":"阿明·古伊里","nick":"GOUIRI","c":"Olympique Marseille (FRA)","h":180,"dob":"2000-02-16","v":"3000","p":"Forward"},
      {"n":"HADJ MOUSSA Anis","cn":"阿尼斯·哈吉·穆萨","nick":"HADJ MOUSSA","c":"Feyenoord Rotterdam (NED)","h":176,"dob":"2002-11-02","v":"1400","p":"Forward"},
      {"n":"BENBOUALI Nadhir","cn":"纳迪尔·本布阿利","nick":"BENBOUALI","c":"Györi ETO FC (HUN)","h":190,"dob":"2000-04-17","v":"40","p":"Forward"},
      {"n":"AMOURA Mohamed","cn":"穆罕默德·阿穆拉","nick":"AMOURA","c":"VfL Wolfsburg (GER)","h":170,"dob":"2000-09-05","v":"3200","p":"Forward"},
      {"n":"BOULBINA Adil","cn":"阿迪勒·布尔比纳","nick":"BOULBINA","c":"Al Duhail SC (QAT)","h":183,"dob":"2003-02-05","v":"80","p":"Forward"},
      {"n":"GHEDJEMIS Fares","cn":"法雷斯·格杰米斯","nick":"GHEDJEMIS","c":"Frosinone (ITA)","h":183,"dob":"2002-06-09","v":"45","p":"Forward"}
    ]
  },
  "ARG": {
    "gk": [
      {"n":"MUSSO Juan","cn":"胡安·穆索","nick":"MUSSO","c":"Atlético De Madrid (ESP)","h":193,"dob":"1994-06-05","v":"350","p":"Goalkeeper"},
      {"n":"RULLI Geronimo","cn":"赫罗尼莫·鲁利","nick":"RULLI","c":"Olympique Marseille (FRA)","h":189,"dob":"1992-05-20","v":"800","p":"Goalkeeper"},
      {"n":"MARTINEZ Emiliano","cn":"埃米利亚诺·马丁内斯","nick":"E. MARTINEZ","c":"Aston Villa FC (ENG)","h":195,"dob":"1992-02-09","v":"2000","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"BALERDI Leonardo","cn":"莱昂纳多·巴莱尔迪","nick":"BALERDI","c":"Olympique Marseille (FRA)","h":188,"dob":"1999-01-26","v":"2000","p":"Defender"},
      {"n":"TAGLIAFICO Nicolas","cn":"尼古拉斯·塔利亚菲科","nick":"TAGLIAFICO","c":"Olympique Lyonnais (FRA)","h":172,"dob":"1992-08-31","v":"600","p":"Defender"},
      {"n":"MONTIEL Gonzalo","cn":"贡萨洛·蒙铁尔","nick":"MONTIEL","c":"CA River Plate (ARG)","h":175,"dob":"1997-01-01","v":"500","p":"Defender"},
      {"n":"MARTINEZ Lisandro","cn":"利桑德罗·马丁内斯","nick":"MARTÍNEZ","c":"Manchester United FC (ENG)","h":175,"dob":"1998-01-18","v":"4000","p":"Defender"},
      {"n":"ROMERO Cristian","cn":"克里斯蒂安·罗梅罗","nick":"ROMERO","c":"Tottenham Hotspur FC (ENG)","h":185,"dob":"1998-04-27","v":"5000","p":"Defender"},
      {"n":"OTAMENDI Nicolas","cn":"尼古拉斯·奥塔门迪","nick":"OTAMENDI","c":"SL Ben«ca (POR)","h":182,"dob":"1988-12-02","v":"100","p":"Defender"},
      {"n":"MEDINA Facundo","cn":"法昆多·梅迪纳","nick":"MEDINA","c":"Olympique Marseille (FRA)","h":184,"dob":"1999-05-28","v":"2500","p":"Defender"},
      {"n":"MOLINA Nahuel","cn":"纳韦尔·莫利纳","nick":"MOLINA","c":"Atlético De Madrid (ESP)","h":179,"dob":"1998-06-04","v":"2000","p":"Defender"}
    ],
    "mf": [
      {"n":"PAREDES Leandro","cn":"莱安德罗·帕雷德斯","nick":"PAREDES","c":"CA Boca Juniors (ARG)","h":182,"dob":"1994-06-29","v":"500","p":"Midfield"},
      {"n":"DE PAUL Rodrigo","cn":"罗德里戈·德保罗","nick":"DE PAUL","c":"Inter Miami CF (USA)","h":178,"dob":"1994-05-24","v":"2000","p":"Midfield"},
      {"n":"BARCO Valentin","cn":"瓦伦丁·巴尔科","nick":"BARCO","c":"RC Strasbourg (FRA)","h":172,"dob":"2004-07-23","v":"1200","p":"Midfield"},
      {"n":"LO CELSO Giovani","cn":"吉奥瓦尼·洛塞尔索","nick":"LO CELSO","c":"Real Betis (ESP)","h":177,"dob":"1996-09-04","v":"1500","p":"Midfield"},
      {"n":"PALACIOS Exequiel","cn":"埃克塞基耶尔·帕拉西奥斯","nick":"PALACIOS","c":"Bayer Leverkusen (GER)","h":177,"dob":"1998-05-10","v":"4000","p":"Midfield"},
      {"n":"GONZALEZ Nico","cn":"尼科·冈萨雷斯","nick":"N. GONZALEZ","c":"Atlético De Madrid (ESP)","h":180,"dob":"1998-06-04","v":"2400","p":"Midfield"},
      {"n":"MAC ALLISTER Alexis","cn":"亚历克西斯·麦卡利斯特","nick":"MAC ALLISTER","c":"Liverpool FC (ENG)","h":176,"dob":"1998-12-24","v":"10000","p":"Midfield"},
      {"n":"FERNANDEZ Enzo","cn":"恩佐·费尔南德斯","nick":"E. FERNANDEZ","c":"Chelsea FC (ENG)","h":178,"dob":"2001-01-17","v":"7500","p":"Midfield"}
    ],
    "fw": [
      {"n":"ALVAREZ Julian","cn":"胡利安·阿尔瓦雷斯","nick":"J. ALVAREZ","c":"Atlético De Madrid (ESP)","h":170,"dob":"2000-01-31","v":"10000","p":"Forward"},
      {"n":"MESSI Lionel","cn":"利昂内尔·梅西","nick":"MESSI","c":"Inter Miami CF (USA)","h":170,"dob":"1987-06-24","v":"1800","p":"Forward"},
      {"n":"ALMADA Thiago","cn":"蒂亚戈·阿尔马达","nick":"ALMADA","c":"Atlético De Madrid (ESP)","h":171,"dob":"2001-04-26","v":"2500","p":"Forward"},
      {"n":"SIMEONE Giuliano","cn":"朱利亚诺·西蒙尼","nick":"SIMEONE","c":"Atlético De Madrid (ESP)","h":174,"dob":"2002-12-18","v":"3500","p":"Forward"},
      {"n":"PAZ Nico","cn":"尼科·帕斯","nick":"NICO PAZ","c":"Como (ITA)","h":185,"dob":"2004-08-09","v":"3500","p":"Forward"},
      {"n":"LOPEZ Jose Manuel","cn":"何塞·曼努埃尔·洛佩斯","nick":"LOPEZ","c":"SE Palmeiras (BRA)","h":190,"dob":"2000-06-12","v":"1200","p":"Forward"},
      {"n":"MARTINEZ Lautaro","cn":"劳塔罗·马丁内斯","nick":"L. MARTINEZ","c":"FC Internazionale Milano (ITA)","h":175,"dob":"1997-08-22","v":"9500","p":"Forward"}
    ]
  },
  "AUS": {
    "gk": [
      {"n":"RYAN Mathew","cn":"马修·瑞安","nick":"RYAN","c":"Levante UD (ESP)","h":184,"dob":"1992-08-04","v":"250","p":"Goalkeeper"},
      {"n":"IZZO Paul","cn":"保罗·伊佐","nick":"IZZO","c":"Randers FC (DEN)","h":184,"dob":"1995-06-01","v":"60","p":"Goalkeeper"},
      {"n":"BEACH Patrick","cn":"帕特里克·比奇","nick":"BEACH","c":"Melbourne City FC (AUS)","h":189,"dob":"2003-06-08","v":"50","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"DEGENEK Milos","cn":"米洛斯·德格内克","nick":"DEGENEK","c":"APOEL FC (CYP)","h":187,"dob":"1994-04-28","v":"50","p":"Defender"},
      {"n":"CIRCATI Alessandro","cn":"亚历山德罗·奇尔卡蒂","nick":"CIRCATI","c":"Parma (ITA)","h":191,"dob":"2003-10-10","v":"800","p":"Defender"},
      {"n":"ITALIANO Jacob","cn":"雅各布·意大利诺","nick":"ITALIANO","c":"Grazer AK (AUT)","h":177,"dob":"2001-07-30","v":"50","p":"Defender"},
      {"n":"BOS Jordan","cn":"乔丹·博斯","nick":"BOS","c":"Feyenoord Rotterdam (NED)","h":180,"dob":"2002-10-29","v":"270","p":"Defender"},
      {"n":"GERIA Jason","cn":"杰森·格里亚","nick":"GERIA","c":"Albirex Niigata (JPN)","h":181,"dob":"1993-10-05","v":"45","p":"Defender"},
      {"n":"TREWIN Kai","cn":"凯·特里温","nick":"TREWIN","c":"New York City FC (USA)","h":183,"dob":"2001-05-18","v":"75","p":"Defender"},
      {"n":"BEHICH Aziz","cn":"阿齐兹·贝希奇","nick":"BEHICH","c":"Melbourne City FC (AUS)","h":170,"dob":"1990-12-16","v":"30","p":"Defender"},
      {"n":"SOUTTAR Harry","cn":"哈里·苏塔尔","nick":"SOUTTAR","c":"Leicester City FC (ENG)","h":198,"dob":"1998-10-22","v":"600","p":"Defender"},
      {"n":"BURGESS Cameron","cn":"卡梅伦·伯吉斯","nick":"BURGESS","c":"Swansea City AFC (WAL)","h":194,"dob":"1995-10-21","v":"200","p":"Defender"},
      {"n":"HERRINGTON Lucas","cn":"卢卡斯·赫林顿","nick":"HERRINGTON","c":"Colorado Rapids (USA)","h":193,"dob":"2007-05-09","v":"30","p":"Defender"}
    ],
    "mf": [
      {"n":"METCALFE Connor","cn":"康纳·梅特卡夫","nick":"METCALFE","c":"FC St. Pauli (GER)","h":183,"dob":"1999-05-11","v":"250","p":"Midfield"},
      {"n":"ONEILL Aiden","cn":"艾登·奥尼尔","nick":"O'NEILL","c":"New York City FC (USA)","h":180,"dob":"1998-04-07","v":"300","p":"Midfield"},
      {"n":"DEVLIN Cameron","cn":"卡梅伦·德夫林","nick":"DEVLIN","c":"Heart Of Midlothian FC (SCO)","h":170,"dob":"1998-07-06","v":"100","p":"Midfield"},
      {"n":"IRVINE Jackson","cn":"杰克逊·欧文","nick":"IRVINE","c":"FC St. Pauli (GER)","h":189,"dob":"1993-07-03","v":"200","p":"Midfield"},
      {"n":"OKON-ENGSTLER Paul","cn":"保罗·奥孔-恩斯特勒","nick":"OKON-ENGSTLER","c":"Sydney FC (AUS)","h":185,"dob":"2005-01-24","v":"20","p":"Midfield"}
    ],
    "fw": [
      {"n":"LECKIE Mathew","cn":"马修·莱基","nick":"LECKIE","c":"Melbourne City FC (AUS)","h":181,"dob":"1991-04-02","v":"40","p":"Forward"},
      {"n":"TOURE Mohamed","cn":"穆罕默德·图雷","nick":"TOURE","c":"Norwich City FC (ENG)","h":186,"dob":"2004-03-26","v":"90","p":"Forward"},
      {"n":"HRUSTIC Ajdin","cn":"艾丁·赫鲁斯蒂奇","nick":"HRUSTIC","c":"SC Heracles Almelo (NED)","h":180,"dob":"1996-05-07","v":"40","p":"Forward"},
      {"n":"MABIL Awer","cn":"阿维尔·马比尔","nick":"MABIL","c":"CD Castellón (ESP)","h":178,"dob":"1995-09-15","v":"30","p":"Forward"},
      {"n":"IRANKUNDA Nestory","cn":"内斯托里·伊兰昆达","nick":"IRANKUNDA","c":"Watford FC (ENG)","h":165,"dob":"2006-09-02","v":"400","p":"Forward"},
      {"n":"VOLPATO Cristian","cn":"克里斯蒂安·沃尔帕托","nick":"VOLPATO","c":"US Sassuolo (ITA)","h":187,"dob":"2003-11-15","v":"650","p":"Forward"},
      {"n":"VELUPILLAY Nishan","cn":"尼尚·韦卢皮莱","nick":"VELUPILLAY","c":"Melbourne Victory FC (AUS)","h":181,"dob":"2001-07-05","v":"50","p":"Forward"},
      {"n":"YENGI Tete","cn":"泰特·延吉","nick":"YENGI","c":"FC Machida Zelvia (JPN)","h":197,"dob":"2000-11-28","v":"15","p":"Forward"}
    ]
  },
  "AUT": {
    "gk": [
      {"n":"SCHLAGER Alexander","cn":"亚历山大·施拉格尔","nick":"SCHLAGER","c":"FC Red Bull Salzburg (AUT)","h":188,"dob":"1996-01-02","v":"250","p":"Goalkeeper"},
      {"n":"WIEGELE Florian","cn":"弗洛里安·维格勒","nick":"WIEGELE","c":"FC Viktoria Plzeň (CZE)","h":205,"dob":"2001-03-21","v":"70","p":"Goalkeeper"},
      {"n":"PENTZ Patrick","cn":"帕特里克·彭茨","nick":"PENTZ","c":"Brøndby IF (DEN)","h":183,"dob":"1997-02-01","v":"250","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"AFFENGRUBER David","cn":"大卫·阿芬格鲁伯","nick":"AFFENGRUBER","c":"Elche CF (ESP)","h":185,"dob":"2001-03-19","v":"500","p":"Defender"},
      {"n":"DANSO Kevin","cn":"凯文·丹索","nick":"DANSO","c":"Tottenham Hotspur FC (ENG)","h":190,"dob":"1998-09-19","v":"2500","p":"Defender"},
      {"n":"POSCH Stefan","cn":"斯特凡·波施","nick":"POSCH","c":"1. FSV Mainz 05 (GER)","h":188,"dob":"1997-05-14","v":"800","p":"Defender"},
      {"n":"ALABA David","cn":"大卫·阿拉巴","nick":"ALABA","c":"Real Madrid C. F. (ESP)","h":180,"dob":"1992-06-24","v":"600","p":"Defender"},
      {"n":"LIENHART Philipp","cn":"菲利普·林哈特","nick":"LIENHART","c":"SC Freiburg (GER)","h":189,"dob":"1996-11-07","v":"1200","p":"Defender"},
      {"n":"MWENE Phillip","cn":"菲利普·姆韦内","nick":"MWENE","c":"1. FSV Mainz 05 (GER)","h":170,"dob":"1994-01-29","v":"180","p":"Defender"},
      {"n":"FRIEDL Marco","cn":"马尔科·弗里德尔","nick":"FRIEDL","c":"SV Werder Bremen (GER)","h":187,"dob":"1998-03-16","v":"1200","p":"Defender"},
      {"n":"SVOBODA Michael","cn":"米夏埃尔·斯沃博达","nick":"SVOBODA","c":"Venezia FC (ITA)","h":195,"dob":"1998-10-15","v":"250","p":"Defender"}
    ],
    "mf": [
      {"n":"SCHLAGER Xaver","cn":"克萨维尔·施拉格尔","nick":"XAVER","c":"RB Leipzig (GER)","h":174,"dob":"1997-09-28","v":"1000","p":"Midfield"},
      {"n":"SEIWALD Nicolas","cn":"尼古拉斯·塞瓦尔德","nick":"SEIWALD","c":"RB Leipzig (GER)","h":179,"dob":"2001-04-05","v":"1800","p":"Midfield"},
      {"n":"SABITZER Marcel","cn":"马塞尔·萨比策","nick":"SABITZER","c":"Borussia Dortmund (GER)","h":178,"dob":"1994-03-17","v":"800","p":"Midfield"},
      {"n":"GRILLITSCH Florian","cn":"弗洛里安·格里利奇","nick":"GRILLITSCH","c":"SC Braga (POR)","h":186,"dob":"1995-07-08","v":"200","p":"Midfield"},
      {"n":"CHUKWUEMEKA Carney","cn":"卡尼·丘库埃梅卡","nick":"CHUKWUEMEKA","c":"Borussia Dortmund (GER)","h":187,"dob":"2003-10-20","v":"1800","p":"Midfield"},
      {"n":"SCHMID Romano","cn":"罗马诺·施密德","nick":"SCHMID","c":"SV Werder Bremen (GER)","h":168,"dob":"2000-01-27","v":"1700","p":"Midfield"},
      {"n":"BAUMGARTNER Christoph","cn":"克里斯托夫·鲍姆加特纳","nick":"BAUMGARTNER","c":"RB Leipzig (GER)","h":180,"dob":"1999-01-08","v":"1200","p":"Midfield"},
      {"n":"LAIMER Konrad","cn":"康拉德·莱默尔","nick":"LAIMER","c":"FC Bayern München (GER)","h":180,"dob":"1997-05-27","v":"2500","p":"Midfield"},
      {"n":"PRASS Alexander","cn":"亚历山大·普拉斯","nick":"PRASS","c":"TSG Hoffenheim (GER)","h":180,"dob":"2001-05-26","v":"500","p":"Midfield"},
      {"n":"WANNER Paul","cn":"保罗·万纳","nick":"WANNER","c":"PSV Eindhoven (NED)","h":185,"dob":"2005-12-23","v":"1800","p":"Midfield"},
      {"n":"SCHOEPF Alessandro","cn":"亚历山德罗·舍普夫","nick":"SCHÖPF","c":"Wolfsberger AC (AUT)","h":178,"dob":"1994-07-02","v":"70","p":"Midfield"}
    ],
    "fw": [
      {"n":"ARNAUTOVIC Marko","cn":"马尔科·阿瑙托维奇","nick":"ARNAUTOVIC","c":"FK Crvena Zvezda (SRB)","h":192,"dob":"1989-04-19","v":"300","p":"Forward"},
      {"n":"GREGORITSCH Michael","cn":"米夏埃尔·格雷戈里奇","nick":"GREGORITSCH","c":"FC Augsburg (GER)","h":193,"dob":"1994-04-18","v":"300","p":"Forward"},
      {"n":"KALAJDZIC Sasa","cn":"萨沙·卡拉季奇","nick":"KALAJDZIC","c":"LASK Linz (AUT)","h":200,"dob":"1997-07-07","v":"400","p":"Forward"},
      {"n":"WIMMER Patrick","cn":"帕特里克·维默尔","nick":"WIMMER","c":"VfL Wolfsburg (GER)","h":182,"dob":"2001-05-30","v":"1500","p":"Forward"}
    ]
  },
  "BEL": {
    "gk": [
      {"n":"COURTOIS Thibaut","cn":"蒂博·库尔图瓦","nick":"COURTOIS","c":"Real Madrid C. F. (ESP)","h":199,"dob":"1992-11-05","v":"2000","p":"Goalkeeper"},
      {"n":"LAMMENS Senne","cn":"森内·拉门斯","nick":"LAMMENS","c":"Manchester United FC (ENG)","h":193,"dob":"2002-07-07","v":"900","p":"Goalkeeper"},
      {"n":"PENDERS Mike","cn":"迈克·彭德斯","nick":"PENDERS","c":"RC Strasbourg (FRA)","h":200,"dob":"2005-07-31","v":"1200","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"DEBAST Zeno","cn":"泽诺·德巴斯特","nick":"DEBAST","c":"Sporting CP (POR)","h":189,"dob":"2003-10-24","v":"900","p":"Defender"},
      {"n":"THEATE Arthur","cn":"阿蒂尔·泰亚特","nick":"THEATE","c":"Eintracht Frankfurt (GER)","h":185,"dob":"2000-05-25","v":"2400","p":"Defender"},
      {"n":"MECHELE Brandon","cn":"布兰登·梅赫勒","nick":"MECHELE","c":"Club Brugge (BEL)","h":190,"dob":"1993-01-28","v":"350","p":"Defender"},
      {"n":"DE CUYPER Maxim","cn":"马克西姆·德克伊珀","nick":"DE CUYPER","c":"Brighton & Hove Albion FC (ENG)","h":182,"dob":"2000-12-22","v":"1600","p":"Defender"},
      {"n":"MEUNIER Thomas","cn":"托马斯·默尼耶","nick":"MEUNIER","c":"Lille OSC (FRA)","h":190,"dob":"1991-12-09","v":"200","p":"Defender"},
      {"n":"DE WINTER Koni","cn":"科尼·德温特","nick":"DE WINTER","c":"AC Milan (ITA)","h":191,"dob":"2002-12-06","v":"2200","p":"Defender"},
      {"n":"SEYS Joaquin","cn":"华金·塞斯","nick":"SEYS","c":"Club Brugge (BEL)","h":178,"dob":"2005-03-28","v":"800","p":"Defender"},
      {"n":"CASTAGNE Timothy","cn":"蒂莫西·卡斯塔涅","nick":"CASTAGNE","c":"Fulham FC (ENG)","h":185,"dob":"1995-05-12","v":"1300","p":"Defender"},
      {"n":"NGOY Nathan","cn":"纳坦·恩戈伊","nick":"NGOY","c":"Lille OSC (FRA)","h":183,"dob":"2003-10-06","v":"350","p":"Defender"}
    ],
    "mf": [
      {"n":"WITSEL Axel","cn":"阿克塞尔·维特塞尔","nick":"WITSEL","c":"Girona FC (ESP)","h":186,"dob":"1989-12-01","v":"200","p":"Midfield"},
      {"n":"DE BRUYNE Kevin","cn":"凯文·德布劳内","nick":"DE BRUYNE","c":"SSC Napoli (ITA)","h":181,"dob":"1991-06-28","v":"2000","p":"Midfield"},
      {"n":"TIELEMANS Youri","cn":"尤里·蒂勒曼斯","nick":"TIELEMANS","c":"Aston Villa FC (ENG)","h":176,"dob":"1997-07-05","v":"3800","p":"Midfield"},
      {"n":"MOREIRA Diego","cn":"迭戈·莫雷拉","nick":"MOREIRA","c":"RC Strasbourg (FRA)","h":179,"dob":"2004-06-08","v":"1800","p":"Midfield"},
      {"n":"VANAKEN Hans","cn":"汉斯·瓦纳肯","nick":"VANAKEN","c":"Club Brugge (BEL)","h":195,"dob":"1992-08-24","v":"700","p":"Midfield"},
      {"n":"SAELEMAEKERS Alexis","cn":"亚历克西斯·萨勒马克尔斯","nick":"SAELEMAEKERS","c":"AC Milan (ITA)","h":180,"dob":"1999-06-27","v":"1700","p":"Midfield"},
      {"n":"RASKIN Nicolas","cn":"尼古拉斯·拉斯金","nick":"RASKIN","c":"Rangers FC (SCO)","h":178,"dob":"2001-02-23","v":"1000","p":"Midfield"},
      {"n":"ONANA Amadou","cn":"阿马杜·奥纳纳","nick":"ONANA","c":"Aston Villa FC (ENG)","h":192,"dob":"2001-08-16","v":"5000","p":"Midfield"}
    ],
    "fw": [
      {"n":"LUKAKU Romelu","cn":"罗梅卢·卢卡库","nick":"LUKAKU","c":"SSC Napoli (ITA)","h":190,"dob":"1993-05-13","v":"2200","p":"Forward"},
      {"n":"TROSSARD Leandro","cn":"莱安德罗·特罗萨德","nick":"TROSSARD","c":"Arsenal FC (ENG)","h":172,"dob":"1994-04-12","v":"2200","p":"Forward"},
      {"n":"DOKU Jeremy","cn":"热雷米·多库","nick":"DOKU","c":"Manchester City FC (ENG)","h":173,"dob":"2002-05-27","v":"5000","p":"Forward"},
      {"n":"LUKEBAKIO Dodi","cn":"多迪·卢克巴基奥","nick":"LUKEBAKIO","c":"SL Ben«ca (POR)","h":184,"dob":"1997-09-24","v":"2000","p":"Forward"},
      {"n":"DE KETELAERE Charles","cn":"夏尔·德凯特拉雷","nick":"DE KETELAERE","c":"Atalanta Bergamo (ITA)","h":192,"dob":"2001-10-03","v":"3500","p":"Forward"},
      {"n":"FERNANDEZ-PARDO Matias","cn":"马蒂亚斯·费尔南德斯-帕尔多","nick":"FERNANDEZ-PARDO","c":"Lille OSC (FRA)","h":188,"dob":"2005-03-02","v":"1500","p":"Forward"}
    ]
  },
  "BIH": {
    "gk": [
      {"n":"VASILJ Nikola","cn":"尼古拉·瓦西利","nick":"VASILJ","c":"FC St. Pauli (GER)","h":193,"dob":"1995-02-12","v":"350","p":"Goalkeeper"},
      {"n":"JURKAS Mladen","cn":"姆拉登·尤尔卡斯","nick":"JURKAS","c":"FK Borac Banja Luka (BIH)","h":193,"dob":"2007-07-10","v":"20","p":"Goalkeeper"},
      {"n":"ZLOMISLIC Martin","cn":"马丁·兹洛米斯利奇","nick":"ZLOMISLIĆ","c":"HNK Rijeka (CRO)","h":189,"dob":"1998-08-16","v":"200","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"MUJAKIC Nihad","cn":"尼哈德·穆亚基奇","nick":"MUJAKIĆ","c":"Gaziantep FK (TUR)","h":189,"dob":"1998-04-15","v":"100","p":"Defender"},
      {"n":"HADZIKADUNIC Dennis","cn":"丹尼斯·哈吉卡杜尼奇","nick":"HADŽIKADUNIĆ","c":"UC Sampdoria (ITA)","h":191,"dob":"1998-09-07","v":"200","p":"Defender"},
      {"n":"MUHAREMOVIC Tarik","cn":"塔里克·穆哈雷莫维奇","nick":"MUHAREMOVIĆ","c":"US Sassuolo (ITA)","h":192,"dob":"2003-02-28","v":"700","p":"Defender"},
      {"n":"KOLASINAC Sead","cn":"塞亚德·科拉希纳茨","nick":"KOLAŠINAC","c":"Atalanta Bergamo (ITA)","h":183,"dob":"1993-06-20","v":"700","p":"Defender"},
      {"n":"DEDIC Amar","cn":"阿马尔·德迪奇","nick":"DEDIĆ","c":"SL Ben«ca (POR)","h":180,"dob":"2002-08-18","v":"1200","p":"Defender"},
      {"n":"KATIC Nikola","cn":"尼古拉·卡蒂奇","nick":"KATIĆ","c":"FC Schalke 04 (GER)","h":194,"dob":"1996-10-10","v":"150","p":"Defender"},
      {"n":"RADELJIC Stjepan","cn":"斯特耶潘·拉代利奇","nick":"RADELJIĆ","c":"HNK Rijeka (CRO)","h":201,"dob":"1997-05-09","v":"280","p":"Defender"},
      {"n":"CELIK Nidal","cn":"尼达尔·切利克","nick":"ČELIK","c":"RC Lens (FRA)","h":192,"dob":"2006-07-17","v":"180","p":"Defender"}
    ],
    "mf": [
      {"n":"TAHIROVIC Benjamin","cn":"本杰明·塔希罗维奇","nick":"TAHIROVIĆ","c":"Brøndby IF (DEN)","h":191,"dob":"2003-03-03","v":"300","p":"Midfield"},
      {"n":"GIGOVIC Armin","cn":"阿尔明·吉戈维奇","nick":"GIGOVIĆ","c":"BSC Young Boys (SUI)","h":187,"dob":"2002-06-04","v":"300","p":"Midfield"},
      {"n":"BASIC Ivan","cn":"伊万·巴希奇","nick":"BAŠIĆ","c":"FC Astana (KAZ)","h":178,"dob":"2002-04-30","v":"120","p":"Midfield"},
      {"n":"SUNJIC Ivan","cn":"伊万·舒尼奇","nick":"ŠUNJIĆ","c":"Pafos FC (CYP)","h":183,"dob":"1996-09-10","v":"150","p":"Midfield"},
      {"n":"MEMIC Amar","cn":"阿马尔·梅米奇","nick":"MEMIĆ","c":"FC Viktoria Plzeň (CZE)","h":176,"dob":"2001-01-20","v":"250","p":"Midfield"},
      {"n":"HADZIAHMETOVIC Amir","cn":"阿米尔·哈吉亚赫梅托维奇","nick":"HADŽIAHMETOVIĆ","c":"Hull City FC (ENG)","h":179,"dob":"1997-08-03","v":"450","p":"Midfield"},
      {"n":"BURNIC Dzenis","cn":"杰尼斯·布尔尼奇","nick":"BURNIĆ","c":"Karlsruher SC (GER)","h":182,"dob":"1998-05-22","v":"120","p":"Midfield"},
      {"n":"MAHMIC Ermin","cn":"埃尔明·马赫米奇","nick":"MAHMIĆ","c":"FC Slovan Liberec (CZE)","h":182,"dob":"2005-03-14","v":"80","p":"Midfield"}
    ],
    "fw": [
      {"n":"BAZDAR Samed","cn":"萨梅德·巴日达尔","nick":"BAŽDAR","c":"Jagiellonia Białystok (POL)","h":189,"dob":"2004-01-31","v":"200","p":"Forward"},
      {"n":"DEMIROVIC Ermedin","cn":"埃尔梅丁·德米罗维奇","nick":"DEMIROVIĆ","c":"VfB Stuttgart (GER)","h":185,"dob":"1998-03-25","v":"2200","p":"Forward"},
      {"n":"DZEKO Edin","cn":"埃丁·哲科","nick":"DŽEKO","c":"FC Schalke 04 (GER)","h":192,"dob":"1986-03-17","v":"160","p":"Forward"},
      {"n":"ALAJBEGOVIC Kerim","cn":"克里姆·阿拉伊贝戈维奇","nick":"ALAJBEGOVIĆ","c":"FC Red Bull Salzburg (AUT)","h":186,"dob":"2007-09-21","v":"50","p":"Forward"},
      {"n":"BAJRAKTAREVIC Esmir","cn":"埃斯米尔·巴伊拉克塔雷维奇","nick":"BAJRAKTAREVIĆ","c":"PSV Eindhoven (NED)","h":175,"dob":"2005-10-03","v":"300","p":"Forward"},
      {"n":"TABAKOVIC Haris","cn":"哈里斯·塔巴科维奇","nick":"TABAKOVIĆ","c":"Borussia Mönchengladbach (GER)","h":196,"dob":"1994-06-20","v":"250","p":"Forward"},
      {"n":"LUKIC Jovo","cn":"约沃·卢基奇","nick":"LUKIĆ","c":"Universitatea Cluj (ROU)","h":190,"dob":"1998-11-28","v":"60","p":"Forward"}
    ]
  },
  "BRA": {
    "gk": [
      {"n":"ALISSON","cn":"阿利松","nick":"A. BECKER","c":"Liverpool FC (ENG)","h":193,"dob":"1992-02-10","v":"2000","p":"Goalkeeper"},
      {"n":"WEVERTON","cn":"韦弗顿","nick":"WEVERTON","c":"Grêmio FBPA (BRA)","h":189,"dob":"1987-12-13","v":"100","p":"Goalkeeper"},
      {"n":"EDERSON","cn":"埃德森","nick":"EDERSON","c":"Fenerbahçe SK (TUR)","h":188,"dob":"1993-08-17","v":"2000","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"WESLEY","cn":"韦斯利","nick":"WESLEY","c":"AS Roma (ITA)","h":175,"dob":"2003-06-09","v":"2000","p":"Defender"},
      {"n":"GABRIEL MAGALHAES","cn":"加布里埃尔·马加良斯","nick":"GABRIEL","c":"Arsenal FC (ENG)","h":190,"dob":"1997-12-19","v":"7500","p":"Defender"},
      {"n":"MARQUINHOS","cn":"马尔基尼奥斯","nick":"MARQUINHOS","c":"Paris Saint-Germain (FRA)","h":183,"dob":"1994-05-14","v":"3500","p":"Defender"},
      {"n":"ALEX SANDRO","cn":"阿莱士·桑德罗","nick":"ALEX SANDRO","c":"CR Flamengo (BRA)","h":180,"dob":"1991-01-26","v":"180","p":"Defender"},
      {"n":"DANILO","cn":"达尼洛","nick":"DANILO","c":"CR Flamengo (BRA)","h":184,"dob":"1991-07-15","v":"300","p":"Defender"},
      {"n":"BREMER","cn":"布雷默","nick":"BREMER","c":"Juventus FC (ITA)","h":188,"dob":"1997-03-18","v":"5000","p":"Defender"},
      {"n":"LEO PEREIRA","cn":"莱奥·佩雷拉","nick":"LEO PEREIRA","c":"CR Flamengo (BRA)","h":189,"dob":"1996-01-31","v":"900","p":"Defender"},
      {"n":"DOUGLAS SANTOS","cn":"道格拉斯·桑托斯","nick":"DOUGLAS SANTOS","c":"FC Zenit St. Petersburg (RUS)","h":173,"dob":"1994-03-22","v":"900","p":"Defender"},
      {"n":"ROGER IBANEZ","cn":"罗热·伊巴涅斯","nick":"IBAÑEZ","c":"Al Ahli FC (KSA)","h":186,"dob":"1998-11-23","v":"1700","p":"Defender"}
    ],
    "mf": [
      {"n":"CASEMIRO","cn":"卡塞米罗","nick":"CASEMIRO","c":"Manchester United FC (ENG)","h":185,"dob":"1992-02-23","v":"1000","p":"Midfield"},
      {"n":"BRUNO GUIMARAES","cn":"布鲁诺·吉马良斯","nick":"BRUNO G.","c":"Newcastle United FC (ENG)","h":182,"dob":"1997-11-16","v":"8000","p":"Midfield"},
      {"n":"FABINHO","cn":"法比尼奥","nick":"FABINHO","c":"Al Ittihad (KSA)","h":188,"dob":"1993-10-23","v":"1500","p":"Midfield"},
      {"n":"DANILO SANTOS","cn":"达尼洛·桑托斯","nick":"DANILO S.","c":"Botafogo (BRA)","h":177,"dob":"2001-04-29","v":"2800","p":"Midfield"},
      {"n":"LUCAS PAQUETA","cn":"卢卡斯·帕克塔","nick":"L. PAQUETA","c":"CR Flamengo (BRA)","h":183,"dob":"1997-08-27","v":"2800","p":"Midfield"}
    ],
    "fw": [
      {"n":"VINICIUS JUNIOR","cn":"维尼修斯·儒尼奥尔","nick":"VINI JR.","c":"Real Madrid C. F. (ESP)","h":176,"dob":"2000-12-07","v":"17000","p":"Forward"},
      {"n":"MATHEUS CUNHA","cn":"马特乌斯·库尼亚","nick":"CUNHA","c":"Manchester United FC (ENG)","h":183,"dob":"1999-05-27","v":"6000","p":"Forward"},
      {"n":"NEYMAR JR","cn":"内马尔","nick":"NEYMAR JR","c":"Santos FC (BRA)","h":175,"dob":"1992-05-02","v":"1100","p":"Forward"},
      {"n":"RAPHINHA","cn":"拉菲尼亚","nick":"RAPHINHA","c":"FC Barcelona (ESP)","h":176,"dob":"1996-12-14","v":"9000","p":"Forward"},
      {"n":"ENDRICK","cn":"恩德里克","nick":"ENDRICK","c":"Olympique Lyonnais (FRA)","h":172,"dob":"2006-07-21","v":"3500","p":"Forward"},
      {"n":"LUIZ HENRIQUE","cn":"路易斯·恩里克","nick":"L. HENRIQUE","c":"FC Zenit St. Petersburg (RUS)","h":182,"dob":"2001-02-01","v":"2500","p":"Forward"},
      {"n":"GABRIEL MARTINELLI","cn":"加布里埃尔·马丁内利","nick":"MARTINELLI","c":"Arsenal FC (ENG)","h":178,"dob":"2001-06-18","v":"5500","p":"Forward"},
      {"n":"IGOR THIAGO","cn":"伊戈尔·蒂亚戈","nick":"THIAGO","c":"Brentford FC (ENG)","h":190,"dob":"2001-06-26","v":"1800","p":"Forward"},
      {"n":"RAYAN","cn":"拉扬","nick":"RAYAN","c":"AFC Bournemouth (ENG)","h":187,"dob":"2006-03-08","v":"1800","p":"Forward"}
    ]
  },
  "CAN": {
    "gk": [
      {"n":"ST. CLAIR Dayne","cn":"戴恩·圣克莱尔","nick":"ST. CLAIR","c":"Inter Miami CF (USA)","h":191,"dob":"1997-09-05","v":"280","p":"Goalkeeper"},
      {"n":"CREPEAU Maxime","cn":"马克西姆·克雷波","nick":"CRÉPEAU","c":"Orlando City SC (USA)","h":185,"dob":"1994-11-05","v":"300","p":"Goalkeeper"},
      {"n":"GOODMAN Owen","cn":"欧文·古德曼","nick":"GOODMAN","c":"Barnsley (ENG)","h":193,"dob":"2003-11-27","v":"60","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"JOHNSTON Alistair","cn":"阿利斯泰尔·约翰斯顿","nick":"JOHNSTON","c":"Celtic FC (SCO)","h":180,"dob":"1998-08-10","v":"1000","p":"Defender"},
      {"n":"JONES Al«e","cn":"阿利·琼斯","nick":"JONES","c":"Middlesbrough FC (ENG)","h":191,"dob":"1997-07-10","v":"400","p":"Defender"},
      {"n":"DE FOUGEROLLES Luc","cn":"吕克·德富热罗勒","nick":"DE FOUGEROLLES","c":"FCV Dender EH (BEL)","h":183,"dob":"2005-12-10","v":"25","p":"Defender"},
      {"n":"WATERMAN Joel","cn":"乔尔·沃特曼","nick":"WATERMAN","c":"Chicago Fire FC (USA)","h":185,"dob":"1996-01-24","v":"250","p":"Defender"},
      {"n":"CORNELIUS Derek","cn":"德雷克·科尼利厄斯","nick":"CORNELIUS","c":"Rangers FC (SCO)","h":186,"dob":"1997-11-25","v":"500","p":"Defender"},
      {"n":"BOMBITO Moise","cn":"莫伊兹·邦比托","nick":"BOMBITO","c":"OGC Nice (FRA)","h":190,"dob":"2000-03-30","v":"1000","p":"Defender"},
      {"n":"DAVIES Alphonso","cn":"阿方索·戴维斯","nick":"DAVIES","c":"FC Bayern München (GER)","h":183,"dob":"2000-02-11","v":"5000","p":"Defender"},
      {"n":"LARYEA Richie","cn":"里奇·拉里亚","nick":"LARYEA","c":"Toronto FC (CAN)","h":175,"dob":"1995-07-01","v":"100","p":"Defender"},
      {"n":"SIGUR Niko","cn":"尼科·西古尔","nick":"SIGUR","c":"HNK Hajduk Split (CRO)","h":178,"dob":"2003-09-09","v":"400","p":"Defender"}
    ],
    "mf": [
      {"n":"CHOINIERE Mathieu","cn":"马蒂厄·舒瓦尼埃","nick":"CHOINIÈRE","c":"LAFC (USA)","h":173,"dob":"1999-07-02","v":"80","p":"Midfield"},
      {"n":"EUSTAQUIO Stephen","cn":"斯蒂芬·欧斯塔基奥","nick":"EUSTÀQUIO","c":"LAFC (USA)","h":175,"dob":"1996-12-21","v":"1000","p":"Midfield"},
      {"n":"KONE Ismael","cn":"伊斯梅尔·科内","nick":"KONÉ","c":"US Sassuolo (ITA)","h":188,"dob":"2002-06-16","v":"900","p":"Midfield"},
      {"n":"MILLAR Liam","cn":"利亚姆·米勒","nick":"MILLAR","c":"Hull City FC (ENG)","h":176,"dob":"1999-09-27","v":"300","p":"Midfield"},
      {"n":"SHAFFELBURG Jacob","cn":"雅各布·沙费尔伯格","nick":"SHAFFELBURG","c":"LAFC (USA)","h":181,"dob":"1999-11-26","v":"400","p":"Midfield"},
      {"n":"OSORIO Jonathan","cn":"乔纳森·奥索里奥","nick":"OSORIO","c":"Toronto FC (CAN)","h":175,"dob":"1992-12-06","v":"150","p":"Midfield"},
      {"n":"SALIBA Nathan","cn":"纳坦·萨利巴","nick":"SALIBA","c":"RSC Anderlecht (BEL)","h":174,"dob":"2004-07-02","v":"350","p":"Midfield"},
      {"n":"FLORES Marcelo","cn":"马塞洛·弗洛雷斯","nick":"MARCELO","c":"Tigres UANL (MEX)","h":164,"dob":"2003-01-10","v":"120","p":"Midfield"}
    ],
    "fw": [
      {"n":"LARIN Cyle","cn":"赛尔·拉林","nick":"LARIN","c":"Southampton FC (ENG)","h":188,"dob":"1995-04-17","v":"350","p":"Forward"},
      {"n":"DAVID Jonathan","cn":"乔纳森·戴维","nick":"J. DAVID","c":"Juventus FC (ITA)","h":175,"dob":"2000-01-14","v":"4500","p":"Forward"},
      {"n":"OLUWASEYI Tani","cn":"塔尼·奥卢瓦塞伊","nick":"OLUWASEYI","c":"Villarreal CF (ESP)","h":187,"dob":"2000-05-15","v":"500","p":"Forward"},
      {"n":"BUCHANAN Tajon","cn":"塔洪·布坎南","nick":"BUCHANAN","c":"Villarreal CF (ESP)","h":183,"dob":"1999-08-02","v":"600","p":"Forward"},
      {"n":"AHMED Ali","cn":"阿里·艾哈迈德","nick":"AHMED","c":"Norwich City FC (ENG)","h":180,"dob":"2000-10-10","v":"300","p":"Forward"},
      {"n":"DAVID Promise","cn":"普罗米斯·戴维","nick":"PROMISE","c":"Royale Union Saint-Gilloise (BEL)","h":195,"dob":"2001-03-07","v":"180","p":"Forward"}
    ]
  },
  "CIV": {
    "gk": [
      {"n":"FOFANA Yahia","cn":"叶海亚·福法纳","nick":"Y. FOFANA","c":"Çaykur Rizespor (TUR)","h":194,"dob":"2000-08-21","v":"700","p":"Goalkeeper"},
      {"n":"KONE Mohamed","cn":"穆罕默德·科内","nick":"KONE","c":"Sporting Charleroi (BEL)","h":186,"dob":"2002-07-03","v":"120","p":"Goalkeeper"},
      {"n":"LAFONT Alban","cn":"阿尔邦·拉丰","nick":"LAFONT","c":"Panathinaikos FC (GRE)","h":196,"dob":"1999-01-23","v":"300","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"DIOMANDE Ousmane","cn":"奥斯曼·迪奥曼德","nick":"O. DIOMANDE","c":"Sporting CP (POR)","h":190,"dob":"2003-04-12","v":"4500","p":"Defender"},
      {"n":"KONAN Ghislain","cn":"吉斯兰·科南","nick":"G. KONAN","c":"Gil Vicente FC (POR)","h":176,"dob":"1995-12-27","v":"100","p":"Defender"},
      {"n":"SINGO Wilfried","cn":"威尔弗里德·辛戈","nick":"SINGO","c":"Galatasaray SK (TUR)","h":182,"dob":"2000-12-25","v":"2500","p":"Defender"},
      {"n":"KOSSOUNOU Odilon","cn":"奥迪隆·科苏努","nick":"KOSSOUNOU","c":"Atalanta Bergamo (ITA)","h":191,"dob":"2001-04-01","v":"2500","p":"Defender"},
      {"n":"OPERI Christopher","cn":"克里斯托弗·奥佩里","nick":"OPERI","c":"Başakşehir FK (TUR)","h":183,"dob":"1997-04-29","v":"380","p":"Defender"},
      {"n":"DOUE Guela","cn":"盖拉·杜埃","nick":"G. DOUE","c":"RC Strasbourg (FRA)","h":187,"dob":"2002-10-17","v":"1800","p":"Defender"},
      {"n":"AGBADOU Emmanuel","cn":"埃马纽埃尔·阿格巴杜","nick":"AGBADOU","c":"Beşiktaş JK (TUR)","h":185,"dob":"1997-06-17","v":"43","p":"Defender"},
      {"n":"NDICKA Evan","cn":"埃万·恩迪卡","nick":"NDICKA","c":"AS Roma (ITA)","h":192,"dob":"1999-08-20","v":"3000","p":"Defender"}
    ],
    "mf": [
      {"n":"SERI Jean Michael","cn":"让·米夏埃尔·塞里","nick":"SERI","c":"NK Maribor (SVN)","h":168,"dob":"1991-07-19","v":"20","p":"Midfield"},
      {"n":"FOFANA Seko","cn":"塞科·福法纳","nick":"FOFANA","c":"FC Porto (POR)","h":185,"dob":"1995-07-05","v":"1000","p":"Midfield"},
      {"n":"KESSIE Franck","cn":"弗兰克·凯西","nick":"KESSIE","c":"Al Ahli FC (KSA)","h":183,"dob":"1996-12-19","v":"1400","p":"Midfield"},
      {"n":"SANGARE Ibrahim","cn":"易卜拉欣·桑加雷","nick":"SANGARE","c":"Nottingham Forest FC (ENG)","h":191,"dob":"1997-02-12","v":"2400","p":"Midfield"},
      {"n":"GUIAGON Parfait","cn":"帕尔费·吉亚贡","nick":"GUIAGON","c":"Sporting Charleroi (BEL)","h":165,"dob":"2001-02-22","v":"40","p":"Midfield"},
      {"n":"OULAI Christ Inao","cn":"克里斯特·伊瑙·乌莱","nick":"INAO","c":"Trabzonspor (TUR)","h":173,"dob":"2006-06-04","v":"60","p":"Midfield"}
    ],
    "fw": [
      {"n":"BONNY Ange-Yoan","cn":"安热-约安·博尼","nick":"BONNY","c":"FC Internazionale Milano (ITA)","h":189,"dob":"2003-10-25","v":"2000","p":"Forward"},
      {"n":"ADINGRA Simon","cn":"西蒙·阿丁格拉","nick":"ADINGRA","c":"AS Monaco (FRA)","h":175,"dob":"2002-01-01","v":"2800","p":"Forward"},
      {"n":"DIOMANDE Yan","cn":"扬·迪奥曼德","nick":"YAN DIOMANDE","c":"RB Leipzig (GER)","h":180,"dob":"2006-11-14","v":"150","p":"Forward"},
      {"n":"WAHI Elye","cn":"埃利·瓦希","nick":"WAHI","c":"OGC Nice (FRA)","h":181,"dob":"2003-02-01","v":"2200","p":"Forward"},
      {"n":"DIAKITE Oumar","cn":"奥马尔·迪亚基特","nick":"DIAKITE","c":"Cercle Brugge (BEL)","h":182,"dob":"2003-12-20","v":"600","p":"Forward"},
      {"n":"DIALLO Amad","cn":"阿马德·迪亚洛","nick":"AMAD","c":"Manchester United FC (ENG)","h":173,"dob":"2002-11-07","v":"4500","p":"Forward"},
      {"n":"PEPE Nicolas","cn":"尼古拉·佩佩","nick":"PEPE","c":"Villarreal CF (ESP)","h":183,"dob":"1995-05-29","v":"600","p":"Forward"},
      {"n":"GUESSAND Evann","cn":"埃万·盖桑","nick":"GUESSAND","c":"Crystal Palace FC (ENG)","h":188,"dob":"2001-01-07","v":"2500","p":"Forward"},
      {"n":"TOURE Bazoumana","cn":"巴祖马纳·图雷","nick":"TOURE","c":"TSG Hoffenheim (GER)","h":178,"dob":"2006-02-03","v":"900","p":"Forward"}
    ]
  },
  "COD": {
    "gk": [
      {"n":"MPASI Lionel","cn":"利昂内尔·姆帕西","nick":"MPASI","c":"Le Havre AC (FRA)","h":182,"dob":"1994-01-08","v":"40","p":"Goalkeeper"},
      {"n":"FAYULU Timothy","cn":"蒂莫西·法尤卢","nick":"FAYULU","c":"FC Noah (ARM)","h":192,"dob":"1999-07-24","v":"140","p":"Goalkeeper"},
      {"n":"EPOLO Matthieu","cn":"马蒂厄·埃波洛","nick":"EPOLO","c":"Standard Liège (BEL)","h":183,"dob":"2005-01-15","v":"400","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"WAN-BISSAKA Aaron","cn":"阿龙·万-比萨卡","nick":"WAN BISSAKA","c":"West Ham United FC (ENG)","h":183,"dob":"1997-11-26","v":"2400","p":"Defender"},
      {"n":"KAPUADI Steve","cn":"史蒂夫·卡普阿迪","nick":"KAPUADI","c":"Widzew Łódź (POL)","h":196,"dob":"1998-04-30","v":"300","p":"Defender"},
      {"n":"TUANZEBE Axel","cn":"阿克塞尔·图安泽贝","nick":"TUANZEBE","c":"Burnley FC (ENG)","h":188,"dob":"1997-11-14","v":"500","p":"Defender"},
      {"n":"BATUBINSIKA Dylan","cn":"迪伦·巴图宾西卡","nick":"BATUBINSIKA","c":"AEL FC (GRE)","h":185,"dob":"1996-02-15","v":"120","p":"Defender"},
      {"n":"KAYEMBE Joris","cn":"若里斯·卡延贝","nick":"J. KAYEMBE","c":"KRC Genk (BEL)","h":180,"dob":"1994-08-08","v":"300","p":"Defender"},
      {"n":"MBEMBA Chancel","cn":"尚塞尔·姆本巴","nick":"MBEMBA","c":"Lille OSC (FRA)","h":182,"dob":"1994-08-08","v":"200","p":"Defender"},
      {"n":"KALULU Gedeon","cn":"热代翁·卡卢卢","nick":"G. KALULU","c":"Aris Limassol FC (CYP)","h":178,"dob":"1997-08-29","v":"200","p":"Defender"},
      {"n":"MASUAKU Arthur","cn":"阿蒂尔·马苏阿库","nick":"MASUAKU","c":"RC Lens (FRA)","h":179,"dob":"1993-07-11","v":"300","p":"Defender"}
    ],
    "mf": [
      {"n":"MUKAU Ngalayel","cn":"恩加拉耶尔·穆考","nick":"MUKAU","c":"Lille OSC (FRA)","h":186,"dob":"2004-03-11","v":"300","p":"Midfield"},
      {"n":"MBUKU Nathanael","cn":"纳塔纳埃尔·姆布库","nick":"MBUKU","c":"Montpellier HSC (FRA)","h":170,"dob":"2002-03-16","v":"100","p":"Midfield"},
      {"n":"MOUTOUSSAMY Samuel","cn":"萨米埃尔·穆图萨米","nick":"MOUTOUSSAMY","c":"Atromitos FC (GRE)","h":176,"dob":"1996-12-08","v":"160","p":"Midfield"},
      {"n":"BONGONDA Theo","cn":"泰奥·邦贡达","nick":"BONGONDA","c":"FC Spartak Moscow (RUS)","h":176,"dob":"1995-11-20","v":"600","p":"Midfield"},
      {"n":"SADIKI Noah","cn":"诺亚·萨迪基","nick":"SADIKI","c":"Sunderland AFC (ENG)","h":165,"dob":"2004-12-17","v":"1200","p":"Midfield"},
      {"n":"TSHIBOLA Aaron","cn":"阿龙·奇博拉","nick":"TSHIBOLA","c":"Kilmarnock FC (SCO)","h":184,"dob":"1995-02-01","v":"35","p":"Midfield"},
      {"n":"PICKEL Charles","cn":"夏尔·皮克尔","nick":"PICKEL","c":"RCD Espanyol (ESP)","h":187,"dob":"1997-05-15","v":"240","p":"Midfield"},
      {"n":"KAYEMBE Edo","cn":"埃多·卡延贝","nick":"KAYEMBE","c":"Watford FC (ENG)","h":183,"dob":"1998-03-06","v":"400","p":"Midfield"}
    ],
    "fw": [
      {"n":"CIPENGA Brian","cn":"布莱恩·西彭加","nick":"CIPENGA","c":"CD Castellón (ESP)","h":172,"dob":"1998-11-03","v":"50","p":"Forward"},
      {"n":"KAKUTA Gael","cn":"加埃尔·卡库塔","nick":"KAKUTA","c":"AEL FC (GRE)","h":174,"dob":"1991-06-21","v":"60","p":"Forward"},
      {"n":"ELIA Meschack","cn":"梅沙克·埃利亚","nick":"ELIA","c":"Alanyaspor (TUR)","h":173,"dob":"1997-06-08","v":"400","p":"Forward"},
      {"n":"BAKAMBU Cedric","cn":"塞德里克·巴坎布","nick":"BAKAMBU","c":"Real Betis (ESP)","h":182,"dob":"1991-11-04","v":"150","p":"Forward"},
      {"n":"MAYELE Fiston","cn":"菲斯顿·马耶莱","nick":"MAYELE","c":"Pyramids FC (EGY)","h":185,"dob":"1994-06-24","v":"120","p":"Forward"},
      {"n":"WISSA Yoane","cn":"约安·维萨","nick":"WISSA","c":"Newcastle United FC (ENG)","h":176,"dob":"1996-03-09","v":"3200","p":"Forward"},
      {"n":"BANZA Simon","cn":"西蒙·班扎","nick":"BANZA","c":"Al Jazira (UAE)","h":189,"dob":"1996-08-13","v":"1400","p":"Forward"}
    ]
  },
  "COL": {
    "gk": [
      {"n":"OSPINA David","cn":"大卫·奥斯皮纳","nick":"OSPINA","c":"Atlético Nacional (COL)","h":183,"dob":"1988-08-31","v":"40","p":"Goalkeeper"},
      {"n":"VARGAS Camilo","cn":"卡米洛·巴尔加斯","nick":"C. VARGAS","c":"Atlas FC (MEX)","h":183,"dob":"1989-09-03","v":"60","p":"Goalkeeper"},
      {"n":"MONTERO Alvaro","cn":"阿尔瓦罗·蒙特罗","nick":"MONTERO","c":"CA Vélez Sars«eld (ARG)","h":201,"dob":"1995-03-29","v":"200","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"MUNOZ Daniel","cn":"丹尼尔·穆尼奥斯","nick":"D. MUÑOZ","c":"Crystal Palace FC (ENG)","h":180,"dob":"1996-05-26","v":"2500","p":"Defender"},
      {"n":"LUCUMI Jhon","cn":"约翰·卢库米","nick":"J. LUCUMI","c":"Bologna FC (ITA)","h":187,"dob":"1998-06-26","v":"2200","p":"Defender"},
      {"n":"ARIAS Santiago","cn":"圣地亚哥·阿里亚斯","nick":"ARIAS","c":"CA Independiente (ARG)","h":177,"dob":"1992-01-13","v":"200","p":"Defender"},
      {"n":"MINA Yerry","cn":"耶里·米纳","nick":"Y. MINA","c":"Cagliari (ITA)","h":195,"dob":"1994-09-23","v":"300","p":"Defender"},
      {"n":"PUERTA Gustavo","cn":"古斯塔沃·普埃尔塔","nick":"PUERTA","c":"Racing Santander (ESP)","h":173,"dob":"2003-07-23","v":"80","p":"Defender"},
      {"n":"MOJICA Johan","cn":"约翰·莫希卡","nick":"J. MOJICA","c":"RCD Mallorca (ESP)","h":184,"dob":"1992-08-21","v":"200","p":"Defender"},
      {"n":"DITTA Willer","cn":"威勒·迪塔","nick":"W. DITTA","c":"CF Cruz Azul (MEX)","h":179,"dob":"1998-01-23","v":"500","p":"Defender"},
      {"n":"MACHADO Deiver","cn":"代维尔·马查多","nick":"MACHADO","c":"FC Nantes (FRA)","h":173,"dob":"1993-02-09","v":"300","p":"Defender"},
      {"n":"SANCHEZ Davinson","cn":"达文森·桑切斯","nick":"SANCHEZ","c":"Galatasaray SK (TUR)","h":188,"dob":"1996-12-06","v":"2000","p":"Defender"}
    ],
    "mf": [
      {"n":"CASTANO Kevin","cn":"凯文·卡斯塔尼奥","nick":"K. CASTAÑO","c":"CA River Plate (ARG)","h":179,"dob":"2000-09-29","v":"800","p":"Midfield"},
      {"n":"RIOS Richard","cn":"理查德·里奥斯","nick":"RICHARD RIOS","c":"SL Ben«ca (POR)","h":185,"dob":"2000-02-06","v":"1600","p":"Midfield"},
      {"n":"CARRASCAL Jorge","cn":"豪尔赫·卡拉斯卡尔","nick":"CARRASCAL","c":"CR Flamengo (BRA)","h":180,"dob":"1998-05-25","v":"700","p":"Midfield"},
      {"n":"RODRIGUEZ James","cn":"哈梅斯·罗德里格斯","nick":"JAMES","c":"Minnesota United FC (USA)","h":181,"dob":"1991-12-07","v":"250","p":"Midfield"},
      {"n":"ARIAS Jhon","cn":"约翰·阿里亚斯","nick":"J. ARIAS","c":"SE Palmeiras (BRA)","h":168,"dob":"1997-09-21","v":"1700","p":"Midfield"},
      {"n":"PORTILLA Juan","cn":"胡安·波尔蒂利亚","nick":"PORTILLA","c":"Athletico Paranaense (BRA)","h":181,"dob":"1998-12-09","v":"350","p":"Midfield"},
      {"n":"LERMA Jefferson","cn":"杰弗森·莱尔马","nick":"J. LERMA","c":"Crystal Palace FC (ENG)","h":180,"dob":"1994-10-25","v":"1000","p":"Midfield"},
      {"n":"QUINTERO Juan","cn":"胡安·金特罗","nick":"QUINTERO","c":"CA River Plate (ARG)","h":167,"dob":"1993-01-18","v":"70","p":"Midfield"}
    ],
    "fw": [
      {"n":"DIAZ Luis","cn":"路易斯·迪亚斯","nick":"LUIS DIAZ","c":"FC Bayern München (GER)","h":179,"dob":"1997-01-13","v":"7000","p":"Forward"},
      {"n":"CORDOBA Jhon","cn":"约翰·科尔多瓦","nick":"CORDOBA","c":"FC Krasnodar (RUS)","h":186,"dob":"1993-11-05","v":"1200","p":"Forward"},
      {"n":"HERNANDEZ Cucho","cn":"库乔·埃尔南德斯","nick":"C. HERNANDEZ","c":"Real Betis (ESP)","h":176,"dob":"1999-04-20","v":"1800","p":"Forward"},
      {"n":"CAMPAZ Jaminton","cn":"哈明顿·坎帕斯","nick":"CAMPAZ","c":"CA Rosario Central (ARG)","h":166,"dob":"2000-05-24","v":"600","p":"Forward"},
      {"n":"SUAREZ Luis","cn":"路易斯·苏亚雷斯","nick":"SUAREZ","c":"Sporting CP (POR)","h":179,"dob":"1997-02-12","v":"800","p":"Forward"},
      {"n":"GOMEZ Andres","cn":"安德烈斯·戈麦斯","nick":"A. GOMEZ","c":"CR Vasco Da Gama (BRA)","h":170,"dob":"2002-12-09","v":"60","p":"Forward"}
    ]
  },
  "CPV": {
    "gk": [
      {"n":"VOZINHA","cn":"沃济尼亚","nick":"VOZINHA","c":"GD Chaves (POR)","h":189,"dob":"1986-03-06","v":"30","p":"Goalkeeper"},
      {"n":"MARCIO ROSA","cn":"马尔西奥·罗萨","nick":"MARCIO","c":"PFC Montana (BUL)","h":186,"dob":"1997-02-23","v":"40","p":"Goalkeeper"},
      {"n":"CJ DOS SANTOS","cn":"CJ·多斯桑托斯","nick":"DOS SANTOS","c":"San Diego FC (USA)","h":189,"dob":"2000-08-24","v":"80","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"STOPIRA","cn":"斯托皮拉","nick":"STOPIRA","c":"SCU Torreense (POR)","h":178,"dob":"1988-05-20","v":"5","p":"Defender"},
      {"n":"DINEY BORGES","cn":"迪内·博尔热斯","nick":"BORGES","c":"Al Bataeh Club (UAE)","h":185,"dob":"1995-01-17","v":"50","p":"Defender"},
      {"n":"PICO LOPES","cn":"皮科·洛佩斯","nick":"LOPES","c":"Shamrock Rovers FC (IRL)","h":186,"dob":"1992-06-17","v":"40","p":"Defender"},
      {"n":"LOGAN COSTA","cn":"洛根·科斯塔","nick":"LOGAN","c":"Villarreal CF (ESP)","h":190,"dob":"2001-01-04","v":"1800","p":"Defender"},
      {"n":"SIDNY LOPES CABRAL","cn":"西德尼·洛佩斯·卡布拉尔","nick":"LOPES CABRAL","c":"SL Ben«ca (POR)","h":176,"dob":"2002-09-18","v":"35","p":"Defender"},
      {"n":"STEVEN MOREIRA","cn":"史蒂文·莫雷拉","nick":"MOREIRA","c":"Columbus Crew (USA)","h":178,"dob":"1994-08-13","v":"180","p":"Defender"},
      {"n":"WAGNER PINA","cn":"瓦格纳·皮纳","nick":"WAGNER P.","c":"Trabzonspor (TUR)","h":180,"dob":"2002-03-11","v":"500","p":"Defender"},
      {"n":"KELVIN PIRES","cn":"凯尔文·皮雷斯","nick":"KELVIN","c":"SJK (FIN)","h":193,"dob":"2000-05-06","v":"600","p":"Defender"}
    ],
    "mf": [
      {"n":"KEVIN PINA","cn":"凯文·皮纳","nick":"KEVIN L.","c":"FC Krasnodar (RUS)","h":177,"dob":"1997-01-27","v":"500","p":"Midfield"},
      {"n":"JOVANE CABRAL","cn":"若瓦内·卡布拉尔","nick":"JOVANE","c":"CF Estrela Da Amadora (POR)","h":174,"dob":"1998-06-14","v":"100","p":"Midfield"},
      {"n":"JOAO PAULO","cn":"若昂·保罗","nick":"JOÃO PAULO","c":"FC FCSB (ROU)","h":180,"dob":"1998-05-26","v":"60","p":"Midfield"},
      {"n":"JAMIRO MONTEIRO","cn":"雅米罗·蒙泰罗","nick":"MONTEIRO","c":"PEC Zwolle (NED)","h":175,"dob":"1993-11-23","v":"100","p":"Midfield"},
      {"n":"GARRY RODRIGUES","cn":"加里·罗德里格斯","nick":"RODRIGUES","c":"Apollon Limassol (CYP)","h":173,"dob":"1990-11-27","v":"50","p":"Midfield"},
      {"n":"DEROY DUARTE","cn":"德罗伊·杜阿尔特","nick":"D. DUARTE","c":"PFC Ludogorets Razgrad (BUL)","h":177,"dob":"1999-04-07","v":"150","p":"Midfield"},
      {"n":"LAROS DUARTE","cn":"拉罗斯·杜阿尔特","nick":"DUARTE","c":"Puskás Akadémia FC (HUN)","h":180,"dob":"1997-02-28","v":"120","p":"Midfield"},
      {"n":"YANNICK SEMEDO","cn":"扬尼克·塞梅多","nick":"Y. SEMEDO","c":"SC Farense (POR)","h":176,"dob":"1995-12-29","v":"40","p":"Midfield"},
      {"n":"WILLY SEMEDO","cn":"威利·塞梅多","nick":"SEMEDO","c":"AC Omonia (CYP)","h":185,"dob":"1994-04-27","v":"100","p":"Midfield"},
      {"n":"TELMO ARCANJO","cn":"特尔莫·阿尔坎若","nick":"ARCANJO","c":"Vitória SC (POR)","h":180,"dob":"2001-06-21","v":"300","p":"Midfield"},
      {"n":"NUNO DA COSTA","cn":"努诺·达科斯塔","nick":"DA COSTA","c":"Başakşehir FK (TUR)","h":182,"dob":"1991-10-02","v":"60","p":"Midfield"},
      {"n":"HELIO VARELA","cn":"埃利奥·瓦雷拉","nick":"HÉLIO","c":"Maccabi Tel-Aviv FC (ISR)","h":176,"dob":"2002-03-05","v":"120","p":"Midfield"}
    ],
    "fw": [
      {"n":"GILSON BENCHIMOL","cn":"吉尔森·本希莫尔","nick":"BENCHIMOL","c":"FC Akron Tolyatti (RUS)","h":187,"dob":"2001-12-29","v":"70","p":"Forward"},
      {"n":"DAILON LIVRAMENTO","cn":"代隆·利夫拉门托","nick":"LIVRAMENTO","c":"Casa Pia AC (POR)","h":185,"dob":"2001-04-05","v":"80","p":"Forward"},
      {"n":"RYAN MENDES","cn":"瑞安·门德斯","nick":"RYAN","c":"Iğdır FK (TUR)","h":178,"dob":"1990-08-01","v":"45","p":"Forward"}
    ]
  },
  "CRO": {
    "gk": [
      {"n":"LIVAKOVIC Dominik","cn":"多米尼克·利瓦科维奇","nick":"LIVAKOVIĆ","c":"GNK Dinamo Zagreb (CRO)","h":188,"dob":"1995-09-01","v":"900","p":"Goalkeeper"},
      {"n":"PANDUR Ivor","cn":"伊沃尔·潘杜尔","nick":"","c":"Hull City FC (ENG)","h":187,"dob":"2000-03-25","v":"200","p":"Goalkeeper"},
      {"n":"KOTARSKI Dominik","cn":"多米尼克·科塔尔斯基","nick":"KOTARSKI","c":"FC København (DEN)","h":190,"dob":"2000-10-02","v":"900","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"STANISIC Josip","cn":"约西普·斯塔尼希奇","nick":"STANIŠIĆ","c":"FC Bayern München (GER)","h":186,"dob":"2000-02-04","v":"3200","p":"Defender"},
      {"n":"PONGRACIC Marin","cn":"马林·蓬格拉契奇","nick":"PONGRAČIĆ","c":"ACF Fiorentina (ITA)","h":193,"dob":"1997-11-09","v":"1000","p":"Defender"},
      {"n":"GVARDIOL Josko","cn":"约什科·格瓦迪奥尔","nick":"GVARDIOL","c":"Manchester City FC (ENG)","h":185,"dob":"2002-01-23","v":"7500","p":"Defender"},
      {"n":"CALETA-CAR Duje","cn":"杜耶·查莱塔-察尔","nick":"ĆALETA-CAR","c":"Real Sociedad (ESP)","h":193,"dob":"1996-09-17","v":"700","p":"Defender"},
      {"n":"SUTALO Josip","cn":"约西普·舒塔洛","nick":"","c":"AFC Ajax (NED)","h":185,"dob":"2000-02-28","v":"2400","p":"Defender"},
      {"n":"JAKIC Kristijan","cn":"克里斯蒂扬·亚基奇","nick":"","c":"FC Augsburg (GER)","h":181,"dob":"1997-05-14","v":"650","p":"Defender"},
      {"n":"VUSKOVIC Luka","cn":"卢卡·武什科维奇","nick":"VUŠKOVIĆ","c":"Hamburger SV (GER)","h":193,"dob":"2007-02-24","v":"1200","p":"Defender"},
      {"n":"ERLIC Martin","cn":"马丁·埃尔利奇","nick":"","c":"FC Midtjylland (DEN)","h":192,"dob":"1998-01-24","v":"400","p":"Defender"}
    ],
    "mf": [
      {"n":"MORO Nikola","cn":"尼古拉·莫罗","nick":"","c":"Bologna FC (ITA)","h":183,"dob":"1998-12-03","v":"450","p":"Midfield"},
      {"n":"KOVACIC Mateo","cn":"马特奥·科瓦契奇","nick":"","c":"Manchester City FC (ENG)","h":178,"dob":"1994-06-05","v":"2000","p":"Midfield"},
      {"n":"MODRIC Luka","cn":"卢卡·莫德里奇","nick":"","c":"AC Milan (ITA)","h":172,"dob":"1985-09-09","v":"400","p":"Midfield"},
      {"n":"VLASIC Nikola","cn":"尼古拉·弗拉希奇","nick":"","c":"Torino FC (ITA)","h":179,"dob":"1997-04-10","v":"800","p":"Midfield"},
      {"n":"PASALIC Mario","cn":"马里奥·帕沙利奇","nick":"","c":"Atalanta Bergamo (ITA)","h":188,"dob":"1995-09-02","v":"1000","p":"Midfield"},
      {"n":"BATURINA Martin","cn":"马丁·巴图里纳","nick":"BATURINA","c":"Como (ITA)","h":172,"dob":"2003-02-16","v":"2200","p":"Midfield"},
      {"n":"SUCIC Petar","cn":"佩塔尔·苏契奇","nick":"","c":"FC Internazionale Milano (ITA)","h":183,"dob":"2003-10-25","v":"1400","p":"Midfield"},
      {"n":"FRUK Toni","cn":"托尼·弗鲁克","nick":"","c":"HNK Rijeka (CRO)","h":177,"dob":"2001-09-03","v":"1000","p":"Midfield"},
      {"n":"SUCIC Luka","cn":"卢卡·苏契奇","nick":"","c":"Real Sociedad (ESP)","h":185,"dob":"2002-08-09","v":"1500","p":"Midfield"}
    ],
    "fw": [
      {"n":"KRAMARIC Andrej","cn":"安德烈·克拉马里奇","nick":"KRAMARIĆ","c":"TSG Hoffenheim (GER)","h":177,"dob":"1991-06-19","v":"400","p":"Forward"},
      {"n":"BUDIMIR Ante","cn":"安特·布迪米尔","nick":"","c":"CA Osasuna (ESP)","h":190,"dob":"1991-07-22","v":"500","p":"Forward"},
      {"n":"PERISIC Ivan","cn":"伊万·佩里西奇","nick":"","c":"PSV Eindhoven (NED)","h":186,"dob":"1989-02-02","v":"150","p":"Forward"},
      {"n":"MATANOVIC Igor","cn":"伊戈尔·马塔诺维奇","nick":"MATANOVIĆ","c":"SC Freiburg (GER)","h":194,"dob":"2003-03-31","v":"500","p":"Forward"},
      {"n":"PASALIC Marco","cn":"马尔科·帕沙利奇","nick":"M.PAŠALIĆ","c":"Orlando City SC (USA)","h":177,"dob":"2000-09-14","v":"600","p":"Forward"},
      {"n":"MUSA Petar","cn":"佩塔尔·穆萨","nick":"","c":"FC Dallas (USA)","h":190,"dob":"1998-04-03","v":"600","p":"Forward"}
    ]
  },
  "CUW": {
    "gk": [
      {"n":"ROOM Eloy","cn":"埃洛伊·罗姆","nick":"ROOM","c":"Miami FC (USA)","h":190,"dob":"1989-06-02","v":"20","p":"Goalkeeper"},
      {"n":"BODAK Tyrick","cn":"泰里克·博达克","nick":"BODAK","c":"SC Telstar (NED)","h":190,"dob":"2002-05-15","v":"3","p":"Goalkeeper"},
      {"n":"DOORNBUSCH Trevor","cn":"特雷弗·多恩布什","nick":"DOORNBUSCH","c":"VVV Venlo (NED)","h":188,"dob":"1999-06-07","v":"15","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"SAMBO Shurandy","cn":"舒兰迪·桑博","nick":"SAMBO","c":"Sparta Rotterdam (NED)","h":174,"dob":"2001-08-19","v":"200","p":"Defender"},
      {"n":"GAARI Jurien","cn":"尤里恩·加里","nick":"GAARI","c":"Abha Club (KSA)","h":183,"dob":"1993-12-23","v":"40","p":"Defender"},
      {"n":"VAN EIJMA Roshon","cn":"罗肖恩·范艾马","nick":"VAN EIJMA","c":"RKC Waalwijk (NED)","h":186,"dob":"1998-09-06","v":"45","p":"Defender"},
      {"n":"FLORANUS Sherel","cn":"谢雷尔·弗洛拉努斯","nick":"FLORANUS","c":"PEC Zwolle (NED)","h":181,"dob":"1998-08-23","v":"85","p":"Defender"},
      {"n":"OBISPO Armando","cn":"阿曼多·奥比斯波","nick":"OBISPO","c":"PSV Eindhoven (NED)","h":185,"dob":"1999-05-03","v":"200","p":"Defender"},
      {"n":"BRENET Joshua","cn":"约书亚·布雷内特","nick":"BRENET","c":"Kayserispor (TUR)","h":181,"dob":"1994-03-20","v":"80","p":"Defender"},
      {"n":"BAZOER Riechedly","cn":"里切德利·巴祖尔","nick":"BAZOER","c":"Konyaspor (TUR)","h":184,"dob":"1996-12-10","v":"300","p":"Defender"},
      {"n":"FONVILLE Deveron","cn":"德韦龙·丰维尔","nick":"FONVILLE","c":"NEC Nijmegen (NED)","h":188,"dob":"2003-05-16","v":"60","p":"Defender"}
    ],
    "mf": [
      {"n":"ROEMERATOE Godfried","cn":"霍德弗里德·鲁梅拉托","nick":"ROEMERATOE","c":"RKC Waalwijk (NED)","h":178,"dob":"1999-08-19","v":"50","p":"Midfield"},
      {"n":"BACUNA Juninho","cn":"儒尼尼奥·巴库纳","nick":"J. BACUNA","c":"FC Volendam (NED)","h":178,"dob":"1997-07-08","v":"300","p":"Midfield"},
      {"n":"COMENENCIA Livano","cn":"利瓦诺·科梅南西亚","nick":"COMENENCIA","c":"FC Zürich (SUI)","h":185,"dob":"2004-03-02","v":"50","p":"Midfield"},
      {"n":"BACUNA Leandro","cn":"莱安德罗·巴库纳","nick":"L. BACUNA","c":"Iğdır FK (TUR)","h":180,"dob":"1991-08-21","v":"30","p":"Midfield"},
      {"n":"MARTHA Arjany","cn":"阿尔贾尼·马塔","nick":"MARTHA","c":"Rotherham United FC (ENG)","h":180,"dob":"2003-04-09","v":"70","p":"Midfield"},
      {"n":"CHONG Tahith","cn":"塔希特·钟","nick":"CHONG","c":"She  eld United FC (ENG)","h":185,"dob":"1999-04-12","v":"500","p":"Midfield"},
      {"n":"FELIDA Kevin","cn":"凯文·费利达","nick":"FELIDA","c":"FC Den Bosch (NED)","h":174,"dob":"1999-11-11","v":"30","p":"Midfield"}
    ],
    "fw": [
      {"n":"LOCADIA Juergen","cn":"尤尔根·洛卡迪亚","nick":"LOCADIA","c":"Miami FC (USA)","h":193,"dob":"1993-07-11","v":"20","p":"Forward"},
      {"n":"ANTONISSE Jeremy","cn":"杰雷米·安东尼塞","nick":"ANTONISSE","c":"AE Ki«sia FC (GRE)","h":164,"dob":"2002-03-29","v":"70","p":"Forward"},
      {"n":"HANSEN Sontje","cn":"松切·汉森","nick":"HANSEN","c":"Middlesbrough FC (ENG)","h":176,"dob":"2002-05-18","v":"400","p":"Forward"},
      {"n":"NOSLIN Tyrese","cn":"泰雷斯·诺斯林","nick":"NOSLIN","c":"SC Telstar (NED)","h":182,"dob":"2002-11-09","v":"40","p":"Forward"},
      {"n":"GORRE Kenji","cn":"肯吉·戈雷","nick":"GORRE","c":"Maccabi Haifa FC (ISR)","h":174,"dob":"1994-09-29","v":"75","p":"Forward"},
      {"n":"MARGARITHA Jearl","cn":"杰尔·马加里塔","nick":"MARGARITHA","c":"SK Beveren (BEL)","h":181,"dob":"2000-10-04","v":"40","p":"Forward"},
      {"n":"KUWAS Brandley","cn":"布兰德利·库瓦斯","nick":"KUWAS","c":"FC Volendam (NED)","h":181,"dob":"1992-09-19","v":"30","p":"Forward"},
      {"n":"KASTANEER Gervane","cn":"热尔万·卡斯塔内尔","nick":"KASTANEER","c":"Terengganu FC (MAS)","h":189,"dob":"1996-09-06","v":"18","p":"Forward"}
    ]
  },
  "CZE": {
    "gk": [
      {"n":"KOVAR Matej","cn":"马捷·科瓦日","nick":"KOVÁŘ","c":"PSV Eindhoven (NED)","h":196,"dob":"2000-05-17","v":"500","p":"Goalkeeper"},
      {"n":"STANEK Jindrich","cn":"因德日赫·斯塔涅克","nick":"STANĚK","c":"SK Slavia Praha (CZE)","h":192,"dob":"1996-04-27","v":"300","p":"Goalkeeper"},
      {"n":"HORNICEK Lukas","cn":"卢卡什·霍尔尼切克","nick":"HORNÍČEK","c":"SC Braga (POR)","h":198,"dob":"2002-07-13","v":"600","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"ZIMA David","cn":"大卫·齐马","nick":"ZIMA","c":"SK Slavia Praha (CZE)","h":190,"dob":"2000-11-08","v":"550","p":"Defender"},
      {"n":"HOLES Tomas","cn":"托马什·霍莱什","nick":"HOLEŠ","c":"SK Slavia Praha (CZE)","h":180,"dob":"1993-03-31","v":"150","p":"Defender"},
      {"n":"HRANAC Robin","cn":"罗宾·赫拉纳奇","nick":"HRANÁČ","c":"TSG Hoffenheim (GER)","h":189,"dob":"2000-01-29","v":"350","p":"Defender"},
      {"n":"COUFAL Vladimir","cn":"弗拉迪米尔·曹法尔","nick":"COUFAL","c":"TSG Hoffenheim (GER)","h":175,"dob":"1992-08-22","v":"500","p":"Defender"},
      {"n":"CHALOUPEK Stepan","cn":"什捷潘·哈卢佩克","nick":"CHALOUPEK","c":"SK Slavia Praha (CZE)","h":188,"dob":"2003-03-08","v":"200","p":"Defender"},
      {"n":"KREJCI Ladislav","cn":"拉迪斯拉夫·克雷伊奇","nick":"KREJČÍ","c":"Wolverhampton Wanderers FC (ENG)","h":191,"dob":"1999-04-20","v":"700","p":"Defender"},
      {"n":"JURASEK David","cn":"大卫·尤拉塞克","nick":"JURÁSEK","c":"SK Slavia Praha (CZE)","h":183,"dob":"2000-08-07","v":"500","p":"Defender"},
      {"n":"ZELENY Jaroslav","cn":"雅罗斯拉夫·泽莱尼","nick":"ZELENÝ","c":"AC Sparta Praha (CZE)","h":190,"dob":"1992-08-20","v":"120","p":"Defender"},
      {"n":"DOUDERA David","cn":"大卫·杜杰拉","nick":"DOUDĚRA","c":"SK Slavia Praha (CZE)","h":175,"dob":"1998-05-31","v":"300","p":"Defender"}
    ],
    "mf": [
      {"n":"DARIDA Vladimir","cn":"弗拉迪米尔·达里达","nick":"DARIDA","c":"FC Hradec Králové (CZE)","h":172,"dob":"1990-08-08","v":"50","p":"Midfield"},
      {"n":"CERV Lukas","cn":"卢卡什·切尔夫","nick":"ČERV","c":"FC Viktoria Plzeň (CZE)","h":182,"dob":"2001-04-10","v":"450","p":"Midfield"},
      {"n":"PROVOD Lukas","cn":"卢卡什·普罗沃德","nick":"PROVOD","c":"SK Slavia Praha (CZE)","h":191,"dob":"1996-10-23","v":"500","p":"Midfield"},
      {"n":"SADILEK Michal","cn":"米哈尔·萨迪莱克","nick":"SADÍLEK","c":"SK Slavia Praha (CZE)","h":169,"dob":"1999-05-31","v":"800","p":"Midfield"},
      {"n":"SOUCEK Tomas","cn":"托马什·绍切克","nick":"SOUČEK","c":"West Ham United FC (ENG)","h":192,"dob":"1995-02-27","v":"1800","p":"Midfield"},
      {"n":"SOJKA Alexandr","cn":"亚历山大·索伊卡","nick":"SOJKA","c":"FC Viktoria Plzeň (CZE)","h":188,"dob":"2003-04-02","v":"60","p":"Midfield"},
      {"n":"SOCHUREK Hugo","cn":"雨果·索胡雷克","nick":"SOCHŮREK","c":"AC Sparta Praha (CZE)","h":183,"dob":"2008-06-07","v":"30","p":"Midfield"}
    ],
    "fw": [
      {"n":"HLOZEK Adam","cn":"亚当·赫洛热克","nick":"HLOŽEK","c":"TSG Hoffenheim (GER)","h":188,"dob":"2002-07-25","v":"1800","p":"Forward"},
      {"n":"SCHICK Patrik","cn":"帕特里克·希克","nick":"SCHICK","c":"Bayer Leverkusen (GER)","h":191,"dob":"1996-01-24","v":"2700","p":"Forward"},
      {"n":"KUCHTA Jan","cn":"扬·库赫塔","nick":"KUCHTA","c":"AC Sparta Praha (CZE)","h":185,"dob":"1997-01-18","v":"400","p":"Forward"},
      {"n":"CHYTIL Mojmir","cn":"莫伊米尔·希蒂尔","nick":"CHYTIL","c":"SK Slavia Praha (CZE)","h":187,"dob":"1999-04-29","v":"300","p":"Forward"},
      {"n":"SULC Pavel","cn":"帕维尔·舒尔茨","nick":"ŠULC","c":"Olympique Lyonnais (FRA)","h":177,"dob":"2000-12-29","v":"1000","p":"Forward"},
      {"n":"CHORY Tomas","cn":"托马什·霍里","nick":"CHORÝ","c":"SK Slavia Praha (CZE)","h":199,"dob":"1995-01-26","v":"350","p":"Forward"},
      {"n":"VISINSKY Denis","cn":"丹尼斯·维辛斯基","nick":"VIŠINSKÝ","c":"FC Viktoria Plzeň (CZE)","h":178,"dob":"2003-03-21","v":"120","p":"Forward"}
    ]
  },
  "ECU": {
    "gk": [
      {"n":"GALINDEZ Hernan","cn":"埃尔南·加林德斯","nick":"GALINDEZ","c":"CA Huracán (ARG)","h":189,"dob":"1987-03-30","v":"150","p":"Goalkeeper"},
      {"n":"RAMIREZ Moises","cn":"莫伊塞斯·拉米雷斯","nick":"RAMÍREZ","c":"AE Ki«sia FC (GRE)","h":185,"dob":"2000-09-09","v":"200","p":"Goalkeeper"},
      {"n":"VALLE Gonzalo","cn":"贡萨洛·巴列","nick":"VALLE","c":"LDU Quito (ECU)","h":186,"dob":"1996-02-28","v":"60","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"TORRES Felix","cn":"费利克斯·托雷斯","nick":"TORRES","c":"SC Internacional (BRA)","h":187,"dob":"1997-11-01","v":"150","p":"Defender"},
      {"n":"HINCAPIE Piero","cn":"皮耶罗·因卡皮耶","nick":"HINCAPIE","c":"Arsenal FC (ENG)","h":183,"dob":"2002-09-01","v":"5000","p":"Defender"},
      {"n":"ORDONEZ Joel","cn":"乔尔·奥多涅斯","nick":"ORDÓÑEZ","c":"Club Brugge (BEL)","h":188,"dob":"2004-04-21","v":"2800","p":"Defender"},
      {"n":"PACHO Willian","cn":"威廉·帕乔","nick":"PACHO","c":"Paris Saint-Germain (FRA)","h":188,"dob":"2001-10-16","v":"6500","p":"Defender"},
      {"n":"ESTUPINAN Pervis","cn":"佩尔维斯·埃斯图皮尼安","nick":"ESTUPIÑÁN","c":"AC Milan (ITA)","h":175,"dob":"1998-01-21","v":"3000","p":"Defender"},
      {"n":"PRECIADO Angelo","cn":"安赫洛·普雷西亚多","nick":"PRECIADO","c":"Atlético Mineiro (BRA)","h":174,"dob":"1998-02-18","v":"380","p":"Defender"},
      {"n":"POROZO Jackson","cn":"杰克逊·波罗索","nick":"POROZO","c":"Club Tijuana (MEX)","h":192,"dob":"2000-04-08","v":"200","p":"Defender"},
      {"n":"MEDINA Yaimar","cn":"亚伊马尔·梅迪纳","nick":"MEDINA","c":"KRC Genk (BEL)","h":173,"dob":"2004-05-11","v":"400","p":"Defender"}
    ],
    "mf": [
      {"n":"ALCIVAR Jordy","cn":"霍尔迪·阿尔西瓦尔","nick":"ALCIVAR","c":"Independiente Del Valle (ECU)","h":168,"dob":"1999-05-08","v":"100","p":"Midfield"},
      {"n":"VALENCIA Anthony","cn":"安东尼·瓦伦西亚","nick":"A. VALENCIA","c":"Royal Antwerp FC (BEL)","h":173,"dob":"2003-07-21","v":"120","p":"Midfield"},
      {"n":"PAEZ Kendry","cn":"肯德里·派斯","nick":"PAEZ","c":"CA River Plate (ARG)","h":178,"dob":"2007-04-05","v":"1000","p":"Midfield"},
      {"n":"MINDA Alan","cn":"阿兰·明达","nick":"MINDA","c":"Atlético Mineiro (BRA)","h":174,"dob":"2003-05-14","v":"300","p":"Midfield"},
      {"n":"VITE Pedro","cn":"佩德罗·比特","nick":"VITE","c":"Pumas UNAM (MEX)","h":172,"dob":"2002-09-03","v":"500","p":"Midfield"},
      {"n":"CASTILLO Denil","cn":"德尼尔·卡斯蒂略","nick":"CASTILLO","c":"FC Midtjylland (DEN)","h":189,"dob":"2004-03-24","v":"350","p":"Midfield"},
      {"n":"FRANCO Alan","cn":"阿兰·弗朗哥","nick":"FRANCO","c":"Atlético Mineiro (BRA)","h":175,"dob":"1998-08-21","v":"400","p":"Midfield"},
      {"n":"CAICEDO Moises","cn":"莫伊塞斯·凯塞多","nick":"M. CAICEDO","c":"Chelsea FC (ENG)","h":178,"dob":"2001-02-11","v":"9000","p":"Midfield"}
    ],
    "fw": [
      {"n":"YEBOAH John","cn":"约翰·耶博阿","nick":"YEBOAH ZAMORA","c":"Venezia FC (ITA)","h":170,"dob":"2000-06-23","v":"280","p":"Forward"},
      {"n":"RODRIGUEZ Kevin","cn":"凯文·罗德里格斯","nick":"RODRIGUEZ","c":"Royale Union Saint-Gilloise (BEL)","h":190,"dob":"2000-04-03","v":"150","p":"Forward"},
      {"n":"VALENCIA Enner","cn":"恩纳·瓦伦西亚","nick":"E. VALENCIA","c":"CF Pachuca (MEX)","h":177,"dob":"1989-04-11","v":"170","p":"Forward"},
      {"n":"CAICEDO Jordy","cn":"霍尔迪·凯塞多","nick":"J. CAICEDO","c":"CA Huracán (ARG)","h":186,"dob":"1997-11-18","v":"120","p":"Forward"},
      {"n":"PLATA Gonzalo","cn":"贡萨洛·普拉塔","nick":"PLATA","c":"CR Flamengo (BRA)","h":178,"dob":"2000-01-11","v":"800","p":"Forward"},
      {"n":"ANGULO Nilson","cn":"尼尔森·安古洛","nick":"ANGULO","c":"Sunderland AFC (ENG)","h":184,"dob":"2003-06-19","v":"200","p":"Forward"},
      {"n":"AREVALO Jeremy","cn":"赫雷米·阿雷瓦洛","nick":"AREVALO","c":"VfB Stuttgart (GER)","h":182,"dob":"2005-03-19","v":"20","p":"Forward"}
    ]
  },
  "EGY": {
    "gk": [
      {"n":"MOHAMED ELSHENAWY","cn":"穆罕默德·谢纳维","nick":"M. ELSHENAWY","c":"Al Ahly FC (EGY)","h":191,"dob":"1988-12-18","v":"200","p":"Goalkeeper"},
      {"n":"MAHDY SOLIMAN","cn":"马赫迪·苏莱曼","nick":"M. SOLIMAN","c":"Zamalek SC (EGY)","h":189,"dob":"1987-08-06","v":"80","p":"Goalkeeper"},
      {"n":"MOSTAFA SHOUBIR","cn":"穆斯塔法·舒贝尔","nick":"SHOUBIR","c":"Al Ahly FC (EGY)","h":195,"dob":"2000-05-15","v":"300","p":"Goalkeeper"},
      {"n":"MOHAMED ALAA","cn":"穆罕默德·阿拉","nick":"M. ALAA","c":"El Gouna FC (EGY)","h":188,"dob":"1999-01-01","v":"60","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"YASSER IBRAHIM","cn":"亚西尔·易卜拉欣","nick":"YASSER","c":"Al Ahly FC (EGY)","h":185,"dob":"1993-10-02","v":"150","p":"Defender"},
      {"n":"MOHAMED HANY","cn":"穆罕默德·哈尼","nick":"M. HANY","c":"Al Ahly FC (EGY)","h":175,"dob":"1996-02-02","v":"200","p":"Defender"},
      {"n":"HOSSAM ABDELMAGUID","cn":"霍萨姆·阿卜杜勒马吉德","nick":"HOSSAM","c":"Zamalek SC (EGY)","h":193,"dob":"2001-04-30","v":"250","p":"Defender"},
      {"n":"RAMY RABIA","cn":"拉米·拉比亚","nick":"R. RABIAA","c":"Al Ain FC (UAE)","h":183,"dob":"1993-05-20","v":"100","p":"Defender"},
      {"n":"MOHAMED ABDELMONEIM","cn":"穆罕默德·阿卜杜勒莫内姆","nick":"M. ABDELMONIEM","c":"OGC Nice (FRA)","h":184,"dob":"1999-01-02","v":"400","p":"Defender"},
      {"n":"AHMED FATOUH","cn":"艾哈迈德·法图赫","nick":"A. FATOUH","c":"Zamalek SC (EGY)","h":177,"dob":"1998-03-22","v":"350","p":"Defender"},
      {"n":"KARIM HAFEZ","cn":"卡里姆·哈菲兹","nick":"K. HAFEZ","c":"Pyramids FC (EGY)","h":174,"dob":"1996-12-03","v":"30","p":"Defender"},
      {"n":"TAREK ALAA","cn":"塔里克·阿拉","nick":"T. ALAA","c":"ZED FC (EGY)","h":178,"dob":"2002-05-01","v":"50","p":"Defender"}
    ],
    "mf": [
      {"n":"EMAM ASHOUR","cn":"伊马姆·阿舒尔","nick":"E. ASHOUR","c":"Al Ahly FC (EGY)","h":180,"dob":"1998-02-20","v":"400","p":"Midfield"},
      {"n":"MOSTAFA ZICO","cn":"穆斯塔法·齐科","nick":"ZICO","c":"Pyramids FC (EGY)","h":179,"dob":"1997-04-27","v":"80","p":"Midfield"},
      {"n":"HAMDY FATHY","cn":"哈姆迪·法蒂","nick":"H. FATHY","c":"Al Wakrah SC (QAT)","h":183,"dob":"1994-09-29","v":"250","p":"Midfield"},
      {"n":"MOHANAD LASHIN","cn":"穆哈纳德·拉欣","nick":"M. LASHIN","c":"Pyramids FC (EGY)","h":186,"dob":"1996-05-29","v":"100","p":"Midfield"},
      {"n":"NABIL DONGA","cn":"纳比勒·东加","nick":"DONGA","c":"Al Najmah SC (KSA)","h":179,"dob":"1996-06-04","v":"60","p":"Midfield"},
      {"n":"MARAWAN ATTIA","cn":"马尔万·阿提亚","nick":"M. ATTIA","c":"Al Ahly FC (EGY)","h":176,"dob":"1998-01-08","v":"200","p":"Midfield"},
      {"n":"MAHMOUD SABER","cn":"马哈茂德·萨贝尔","nick":"M. SABER","c":"ZED FC (EGY)","h":170,"dob":"2001-07-30","v":"120","p":"Midfield"}
    ],
    "fw": [
      {"n":"TREZEGUET","cn":"特雷泽盖","nick":"M. TREZEGUET","c":"Al Ahly FC (EGY)","h":181,"dob":"1994-01-10","v":"500","p":"Forward"},
      {"n":"HAMZA ABDELKARIM","cn":"哈姆扎·阿卜杜勒卡里姆","nick":"ABDELKARIM","c":"FC Barcelona (ESP)","h":182,"dob":"2008-01-01","v":"50","p":"Forward"},
      {"n":"MOHAMED SALAH","cn":"穆罕默德·萨拉赫","nick":"M. SALAH","c":"Liverpool FC (ENG)","h":175,"dob":"1992-06-15","v":"5000","p":"Forward"},
      {"n":"HAISSEM HASSAN","cn":"海瑟姆·哈桑","nick":"H. HASSAN","c":"Real Oviedo (ESP)","h":175,"dob":"2002-08-02","v":"250","p":"Forward"},
      {"n":"IBRAHIM ADEL","cn":"易卜拉欣·阿代勒","nick":"I. ADEL","c":"FC Nordsjælland (DEN)","h":178,"dob":"2001-04-23","v":"100","p":"Forward"},
      {"n":"OMAR MARMOUSH","cn":"奥马尔·马尔穆什","nick":"MARMOUSH","c":"Manchester City FC (ENG)","h":180,"dob":"1999-07-02","v":"7500","p":"Forward"},
      {"n":"ZIZO","cn":"齐佐","nick":"ZIZO","c":"Al Ahly FC (EGY)","h":175,"dob":"1996-10-01","v":"400","p":"Forward"}
    ]
  },
  "ENG": {
    "gk": [
      {"n":"PICKFORD Jordan","cn":"乔丹·皮克福德","nick":"PICKFORD","c":"Everton FC (ENG)","h":185,"dob":"1994-07-03","v":"1800","p":"Goalkeeper"},
      {"n":"HENDERSON Dean","cn":"迪恩·亨德森","nick":"D. HENDERSON","c":"Crystal Palace FC (ENG)","h":188,"dob":"1997-12-03","v":"2000","p":"Goalkeeper"},
      {"n":"TRAFFORD James","cn":"詹姆斯·特拉福德","nick":"TRAFFORD","c":"Manchester City FC (ENG)","h":197,"dob":"2002-10-10","v":"2200","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"KONSA Ezri","cn":"埃兹里·孔萨","nick":"KONSA","c":"Aston Villa FC (ENG)","h":180,"dob":"1997-10-23","v":"3500","p":"Defender"},
      {"n":"OREILLY Nico","cn":"尼科·奥赖利","nick":"O'REILLY","c":"Manchester City FC (ENG)","h":177,"dob":"2005-03-21","v":"1800","p":"Defender"},
      {"n":"STONES John","cn":"约翰·斯通斯","nick":"STONES","c":"Manchester City FC (ENG)","h":188,"dob":"1994-05-28","v":"2500","p":"Defender"},
      {"n":"GUEHI Marc","cn":"马克·格希","nick":"GUEHI","c":"Manchester City FC (ENG)","h":183,"dob":"2000-07-13","v":"4500","p":"Defender"},
      {"n":"LIVRAMENTO Tino","cn":"蒂诺·利夫拉门托","nick":"LIVRAMENTO","c":"Newcastle United FC (ENG)","h":182,"dob":"2002-12-11","v":"4000","p":"Defender"},
      {"n":"BURN Dan","cn":"丹·伯恩","nick":"BURN","c":"Newcastle United FC (ENG)","h":201,"dob":"1992-09-05","v":"600","p":"Defender"},
      {"n":"JAMES Reece","cn":"里斯·詹姆斯","nick":"JAMES","c":"Chelsea FC (ENG)","h":180,"dob":"1999-08-12","v":"3000","p":"Defender"},
      {"n":"SPENCE Djed","cn":"杰德·斯彭斯","nick":"SPENCE","c":"Tottenham Hotspur FC (ENG)","h":184,"dob":"2000-09-08","v":"2000","p":"Defender"},
      {"n":"QUANSAH Jarell","cn":"贾雷尔·宽萨","nick":"QUANSAH","c":"Bayer Leverkusen (GER)","h":190,"dob":"2003-01-29","v":"2000","p":"Defender"}
    ],
    "mf": [
      {"n":"RICE Declan","cn":"德克兰·赖斯","nick":"","c":"Arsenal FC (ENG)","h":185,"dob":"1999-01-14","v":"12000","p":"Midfield"},
      {"n":"ANDERSON Elliot","cn":"埃利奥特·安德森","nick":"ANDERSON","c":"Nottingham Forest FC (ENG)","h":179,"dob":"2002-06-11","v":"3200","p":"Midfield"},
      {"n":"BELLINGHAM Jude","cn":"祖德·贝林厄姆","nick":"BELLINGHAM","c":"Real Madrid C. F. (ESP)","h":183,"dob":"2003-06-29","v":"18000","p":"Midfield"},
      {"n":"HENDERSON Jordan","cn":"乔丹·亨德森","nick":"J. HENDERSON","c":"Brentford FC (ENG)","h":183,"dob":"1990-06-17","v":"250","p":"Midfield"},
      {"n":"MAINOO Kobbie","cn":"科比·梅努","nick":"MAINOO","c":"Manchester United FC (ENG)","h":183,"dob":"2005-04-19","v":"5000","p":"Midfield"},
      {"n":"ROGERS Morgan","cn":"摩根·罗杰斯","nick":"ROGERS","c":"Aston Villa FC (ENG)","h":187,"dob":"2002-07-26","v":"5500","p":"Midfield"},
      {"n":"EZE Eberechi","cn":"埃贝雷奇·埃泽","nick":"","c":"Arsenal FC (ENG)","h":178,"dob":"1998-06-29","v":"5500","p":"Midfield"}
    ],
    "fw": [
      {"n":"SAKA Bukayo","cn":"布卡约·萨卡","nick":"SAKA","c":"Arsenal FC (ENG)","h":178,"dob":"2001-05-09","v":"15000","p":"Forward"},
      {"n":"KANE Harry","cn":"哈里·凯恩","nick":"KANE","c":"FC Bayern München (GER)","h":190,"dob":"1993-07-28","v":"7500","p":"Forward"},
      {"n":"RASHFORD Marcus","cn":"马库斯·拉什福德","nick":"RASHFORD","c":"FC Barcelona (ESP)","h":180,"dob":"1997-10-31","v":"5000","p":"Forward"},
      {"n":"GORDON Anthony","cn":"安东尼·戈登","nick":"GORDON","c":"Newcastle United FC (ENG)","h":182,"dob":"2001-02-24","v":"6500","p":"Forward"},
      {"n":"WATKINS Ollie","cn":"奥利·沃特金斯","nick":"WATKINS","c":"Aston Villa FC (ENG)","h":180,"dob":"1995-12-30","v":"4000","p":"Forward"},
      {"n":"MADUEKE Noni","cn":"诺尼·马杜埃凯","nick":"MADUEKE","c":"Arsenal FC (ENG)","h":182,"dob":"2002-10-03","v":"4000","p":"Forward"},
      {"n":"TONEY Ivan","cn":"伊万·托尼","nick":"TONEY","c":"Al Ahli FC (KSA)","h":185,"dob":"1996-03-16","v":"2500","p":"Forward"}
    ]
  },
  "ESP": {
    "gk": [
      {"n":"RAYA David","cn":"大卫·拉亚","nick":"","c":"Arsenal FC (ENG)","h":186,"dob":"1995-09-15","v":"4000","p":"Goalkeeper"},
      {"n":"GARCIA Joan","cn":"霍安·加西亚","nick":"","c":"FC Barcelona (ESP)","h":194,"dob":"2001-04-05","v":"2500","p":"Goalkeeper"},
      {"n":"SIMON Unai","cn":"乌奈·西蒙","nick":"","c":"Athletic Club (ESP)","h":190,"dob":"1997-11-06","v":"2800","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"PUBILL Marc","cn":"马克·普维尔","nick":"","c":"Atlético De Madrid (ESP)","h":191,"dob":"2003-06-20","v":"200","p":"Defender"},
      {"n":"GRIMALDO Alex","cn":"亚历克斯·格里马尔多","nick":"","c":"Bayer Leverkusen (GER)","h":171,"dob":"1995-09-20","v":"3000","p":"Defender"},
      {"n":"GARCIA Eric","cn":"埃里克·加西亚","nick":"","c":"FC Barcelona (ESP)","h":183,"dob":"2001-09-01","v":"1800","p":"Defender"},
      {"n":"LLORENTE Marcos","cn":"马科斯·略伦特","nick":"","c":"Atlético De Madrid (ESP)","h":183,"dob":"1995-01-30","v":"2500","p":"Defender"},
      {"n":"PORRO Pedro","cn":"佩德罗·波罗","nick":"","c":"Tottenham Hotspur FC (ENG)","h":173,"dob":"1999-09-13","v":"3800","p":"Defender"},
      {"n":"LAPORTE Aymeric","cn":"艾梅里克·拉波尔特","nick":"","c":"Athletic Club (ESP)","h":191,"dob":"1994-05-27","v":"1500","p":"Defender"},
      {"n":"CUBARSI Pau","cn":"保·库巴尔西","nick":"","c":"FC Barcelona (ESP)","h":183,"dob":"2007-01-22","v":"8000","p":"Defender"},
      {"n":"CUCURELLA Marc","cn":"马克·库库雷利亚","nick":"","c":"Chelsea FC (ENG)","h":173,"dob":"1998-07-22","v":"3500","p":"Defender"}
    ],
    "mf": [
      {"n":"MERINO Mikel","cn":"米克尔·梅里诺","nick":"","c":"Arsenal FC (ENG)","h":188,"dob":"1996-06-22","v":"3500","p":"Midfield"},
      {"n":"RUIZ Fabian","cn":"法比安·鲁伊斯","nick":"","c":"Paris Saint-Germain (FRA)","h":188,"dob":"1996-03-04","v":"4000","p":"Midfield"},
      {"n":"GAVI","cn":"加维","nick":"","c":"FC Barcelona (ESP)","h":173,"dob":"2004-05-08","v":"6000","p":"Midfield"},
      {"n":"BAENA Alex","cn":"亚历克斯·巴埃纳","nick":"","c":"Atlético De Madrid (ESP)","h":172,"dob":"2001-07-20","v":"800","p":"Midfield"},
      {"n":"RODRI","cn":"罗德里","nick":"","c":"Manchester City FC (ENG)","h":190,"dob":"1996-06-22","v":"11000","p":"Midfield"},
      {"n":"ZUBIMENDI Martin","cn":"马丁·苏维门迪","nick":"","c":"Arsenal FC (ENG)","h":181,"dob":"1999-02-02","v":"6000","p":"Midfield"},
      {"n":"PEDRI","cn":"佩德里","nick":"","c":"FC Barcelona (ESP)","h":174,"dob":"2002-11-25","v":"14000","p":"Midfield"}
    ],
    "fw": [
      {"n":"TORRES Ferran","cn":"费兰·托雷斯","nick":"","c":"FC Barcelona (ESP)","h":183,"dob":"2000-02-29","v":"4000","p":"Forward"},
      {"n":"OLMO Dani","cn":"达尼·奥尔莫","nick":"","c":"FC Barcelona (ESP)","h":179,"dob":"1998-07-05","v":"6000","p":"Forward"},
      {"n":"PINO Yeremy","cn":"耶雷米·皮诺","nick":"","c":"Crystal Palace FC (ENG)","h":174,"dob":"2002-10-20","v":"3000","p":"Forward"},
      {"n":"WILLIAMS Nico","cn":"尼科·威廉斯","nick":"","c":"Athletic Club (ESP)","h":181,"dob":"2002-12-07","v":"7000","p":"Forward"},
      {"n":"YAMAL Lamine","cn":"拉明·亚马尔","nick":"LAMINE YAMAL","c":"FC Barcelona (ESP)","h":183,"dob":"2007-07-13","v":"20000","p":"Forward"},
      {"n":"OYARZABAL Mikel","cn":"米克尔·奥亚萨瓦尔","nick":"","c":"Real Sociedad (ESP)","h":181,"dob":"1997-04-21","v":"2500","p":"Forward"},
      {"n":"MUNOZ Victor","cn":"维克托·穆尼奥斯","nick":"","c":"CA Osasuna (ESP)","h":173,"dob":"2003-07-13","v":"100","p":"Forward"},
      {"n":"IGLESIAS Borja","cn":"博尔哈·伊格莱西亚斯","nick":"","c":"RC Celta Vigo (ESP)","h":187,"dob":"1993-01-17","v":"300","p":"Forward"}
    ]
  },
  "FRA": {
    "gk": [
      {"n":"SAMBA Brice","cn":"布里斯·桑巴","nick":"SAMBA","c":"Stade Rennais FC (FRA)","h":187,"dob":"1994-04-25","v":"1200","p":"Goalkeeper"},
      {"n":"MAIGNAN Mike","cn":"迈克·迈尼昂","nick":"MAIGNAN","c":"AC Milan (ITA)","h":191,"dob":"1995-03-07","v":"2500","p":"Goalkeeper"},
      {"n":"RISSER Robin","cn":"罗班·里塞尔","nick":"RISSER","c":"RC Lens (FRA)","h":193,"dob":"2004-02-12","v":"150","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"GUSTO Malo","cn":"马洛·古斯托","nick":"GUSTO","c":"Chelsea FC (ENG)","h":179,"dob":"2003-05-19","v":"3500","p":"Defender"},
      {"n":"DIGNE Lucas","cn":"卢卡斯·迪涅","nick":"DIGNE","c":"Aston Villa FC (ENG)","h":178,"dob":"1993-07-20","v":"1000","p":"Defender"},
      {"n":"UPAMECANO Dayot","cn":"达约·于帕梅卡诺","nick":"UPAMECANO","c":"FC Bayern München (GER)","h":186,"dob":"1998-10-27","v":"5000","p":"Defender"},
      {"n":"KOUNDE Jules","cn":"朱尔·孔德","nick":"KOUNDE","c":"FC Barcelona (ESP)","h":178,"dob":"1998-12-11","v":"6500","p":"Defender"},
      {"n":"KONATE Ibrahima","cn":"易卜拉希马·科纳特","nick":"KONATE","c":"Liverpool FC (ENG)","h":194,"dob":"1999-05-25","v":"6000","p":"Defender"},
      {"n":"SALIBA William","cn":"威廉·萨利巴","nick":"SALIBA","c":"Arsenal FC (ENG)","h":192,"dob":"2001-03-24","v":"8000","p":"Defender"},
      {"n":"HERNANDEZ Theo","cn":"特奥·埃尔南德斯","nick":"T. HERNANDEZ","c":"Al Hilal SC (KSA)","h":184,"dob":"1997-06-10","v":"2500","p":"Defender"},
      {"n":"HERNANDEZ Lucas","cn":"卢卡斯·埃尔南德斯","nick":"L. HERNANDEZ","c":"Paris Saint-Germain (FRA)","h":184,"dob":"1996-02-14","v":"2500","p":"Defender"},
      {"n":"LACROIX Maxence","cn":"马克桑斯·拉克鲁瓦","nick":"LACROIX","c":"Crystal Palace FC (ENG)","h":192,"dob":"2000-06-04","v":"2500","p":"Defender"}
    ],
    "mf": [
      {"n":"KONE Manu","cn":"马努·科内","nick":"KONE","c":"AS Roma (ITA)","h":185,"dob":"2001-05-17","v":"4000","p":"Midfield"},
      {"n":"TCHOUAMENI Aurelien","cn":"奥雷利安·楚阿梅尼","nick":"TCHOUAMENI","c":"Real Madrid C. F. (ESP)","h":188,"dob":"2000-01-27","v":"7500","p":"Midfield"},
      {"n":"KANTE Ngolo","cn":"恩戈洛·坎特","nick":"KANTE","c":"Fenerbahçe SK (TUR)","h":171,"dob":"1991-03-29","v":"500","p":"Midfield"},
      {"n":"RABIOT Adrien","cn":"阿德里安·拉比奥","nick":"RABIOT","c":"AC Milan (ITA)","h":191,"dob":"1995-03-04","v":"2500","p":"Midfield"},
      {"n":"ZAIRE-EMERY Warren","cn":"瓦朗·扎伊尔-埃梅里","nick":"ZAIRE EMERY","c":"Paris Saint-Germain (FRA)","h":176,"dob":"2006-08-03","v":"5500","p":"Midfield"},
      {"n":"CHERKI Rayan","cn":"拉扬·谢尔基","nick":"CHERKI","c":"Manchester City FC (ENG)","h":180,"dob":"2003-08-17","v":"4500","p":"Midfield"},
      {"n":"AKLIOUCHE Maghnes","cn":"马涅斯·阿克卢什","nick":"AKLIOUCHE","c":"AS Monaco (FRA)","h":183,"dob":"2002-02-25","v":"4500","p":"Midfield"}
    ],
    "fw": [
      {"n":"DEMBELE Ousmane","cn":"奥斯曼·登贝莱","nick":"DEMBELE","c":"Paris Saint-Germain (FRA)","h":179,"dob":"1997-05-15","v":"9000","p":"Forward"},
      {"n":"THURAM Marcus","cn":"马库斯·图拉姆","nick":"THURAM","c":"FC Internazionale Milano (ITA)","h":192,"dob":"1997-06-08","v":"7500","p":"Forward"},
      {"n":"MBAPPE Kylian","cn":"基利安·姆巴佩","nick":"MBAPPE","c":"Real Madrid C. F. (ESP)","h":180,"dob":"1998-12-20","v":"18000","p":"Forward"},
      {"n":"OLISE Michael","cn":"迈克尔·奥利塞","nick":"OLISE","c":"FC Bayern München (GER)","h":184,"dob":"2001-12-12","v":"10000","p":"Forward"},
      {"n":"BARCOLA Bradley","cn":"布拉德利·巴科拉","nick":"BARCOLA","c":"Paris Saint-Germain (FRA)","h":187,"dob":"2002-02-09","v":"7000","p":"Forward"},
      {"n":"DOUE Desire","cn":"德西雷·杜埃","nick":"DOUE","c":"Paris Saint-Germain (FRA)","h":182,"dob":"2005-03-06","v":"9000","p":"Forward"},
      {"n":"MATETA Jean-Philippe","cn":"让-菲利普·马特塔","nick":"MATETA","c":"Crystal Palace FC (ENG)","h":192,"dob":"1997-06-28","v":"3000","p":"Forward"}
    ]
  },
  "GER": {
    "gk": [
      {"n":"NEUER Manuel","cn":"曼努埃尔·诺伊尔","nick":"NEUER","c":"FC Bayern München (GER)","h":193,"dob":"1986-03-27","v":"400","p":"Goalkeeper"},
      {"n":"BAUMANN Oliver","cn":"奥利弗·鲍曼","nick":"BAUMANN","c":"TSG Hoffenheim (GER)","h":187,"dob":"1990-02-06","v":"300","p":"Goalkeeper"},
      {"n":"NUEBEL Alexander","cn":"亚历山大·尼贝尔","nick":"NÜBEL","c":"VfB Stuttgart (GER)","h":193,"dob":"1996-09-30","v":"1200","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"RUEDIGER Antonio","cn":"安东尼奥·吕迪格","nick":"RÜDIGER","c":"Real Madrid C. F. (ESP)","h":190,"dob":"1993-03-03","v":"2000","p":"Defender"},
      {"n":"ANTON Waldemar","cn":"瓦尔德马·安东","nick":"ANTON","c":"Borussia Dortmund (GER)","h":189,"dob":"1996-07-20","v":"1800","p":"Defender"},
      {"n":"TAH Jonathan","cn":"约纳坦·塔","nick":"TAH","c":"FC Bayern München (GER)","h":195,"dob":"1996-11-02","v":"3000","p":"Defender"},
      {"n":"KIMMICH Joshua","cn":"约书亚·基米希","nick":"KIMMICH","c":"FC Bayern München (GER)","h":177,"dob":"1995-08-02","v":"4500","p":"Defender"},
      {"n":"SCHLOTTERBECK Nico","cn":"尼科·施洛特贝克","nick":"SCHLOTTERBECK","c":"Borussia Dortmund (GER)","h":191,"dob":"1999-01-12","v":"4000","p":"Defender"},
      {"n":"BROWN Nathaniel","cn":"纳撒尼尔·布朗","nick":"BROWN","c":"Eintracht Frankfurt (GER)","h":176,"dob":"2003-06-16","v":"2200","p":"Defender"},
      {"n":"RAUM David","cn":"大卫·劳姆","nick":"RAUM","c":"RB Leipzig (GER)","h":180,"dob":"1998-04-22","v":"2000","p":"Defender"},
      {"n":"THIAW Malick","cn":"马利克·佳夫","nick":"THIAW","c":"Newcastle United FC (ENG)","h":194,"dob":"2001-08-08","v":"1800","p":"Defender"}
    ],
    "mf": [
      {"n":"PAVLOVIC Aleksandar","cn":"亚历山大·帕夫洛维奇","nick":"PAVLOVIĆ","c":"FC Bayern München (GER)","h":188,"dob":"2004-03-05","v":"5500","p":"Midfield"},
      {"n":"GORETZKA Leon","cn":"莱昂·戈雷茨卡","nick":"GORETZKA","c":"FC Bayern München (GER)","h":189,"dob":"1995-06-02","v":"2200","p":"Midfield"},
      {"n":"LEWELING Jamie","cn":"杰米·莱韦林","nick":"LEWELING","c":"VfB Stuttgart (GER)","h":185,"dob":"2001-02-26","v":"2000","p":"Midfield"},
      {"n":"MUSIALA Jamal","cn":"贾马尔·穆西亚拉","nick":"MUSIALA","c":"FC Bayern München (GER)","h":180,"dob":"2003-02-26","v":"14000","p":"Midfield"},
      {"n":"GROSS Pascal","cn":"帕斯卡尔·格罗斯","nick":"GROß","c":"Brighton & Hove Albion FC (ENG)","h":181,"dob":"1991-06-15","v":"500","p":"Midfield"},
      {"n":"STILLER Angelo","cn":"安杰洛·施蒂勒","nick":"STILLER","c":"VfB Stuttgart (GER)","h":183,"dob":"2001-04-04","v":"4500","p":"Midfield"},
      {"n":"WIRTZ Florian","cn":"弗洛里安·维尔茨","nick":"WIRTZ","c":"Liverpool FC (ENG)","h":176,"dob":"2003-03-05","v":"14000","p":"Midfield"},
      {"n":"SANE Leroy","cn":"勒鲁瓦·萨内","nick":"SANÉ","c":"Galatasaray SK (TUR)","h":183,"dob":"1996-11-01","v":"3200","p":"Midfield"},
      {"n":"AMIRI Nadiem","cn":"纳迪姆·阿米里","nick":"AMIRI","c":"1. FSV Mainz 05 (GER)","h":178,"dob":"1996-10-27","v":"2000","p":"Midfield"},
      {"n":"NMECHA Felix","cn":"费利克斯·恩梅查","nick":"NMECHA","c":"Borussia Dortmund (GER)","h":190,"dob":"2000-10-10","v":"2800","p":"Midfield"},
      {"n":"KARL Lennart","cn":"伦纳特·卡尔","nick":"KARL","c":"FC Bayern München (GER)","h":170,"dob":"2008-02-22","v":"150","p":"Midfield"}
    ],
    "fw": [
      {"n":"HAVERTZ Kai","cn":"凯·哈弗茨","nick":"HAVERTZ","c":"Arsenal FC (ENG)","h":190,"dob":"1999-11-06","v":"6500","p":"Forward"},
      {"n":"WOLTEMADE Nick","cn":"尼克·沃尔特马德","nick":"WOLTEMADE","c":"Newcastle United FC (ENG)","h":198,"dob":"2002-02-14","v":"3000","p":"Forward"},
      {"n":"BEIER Maximilian","cn":"马克西米利安·拜尔","nick":"BEIER","c":"Borussia Dortmund (GER)","h":185,"dob":"2002-10-17","v":"2500","p":"Forward"},
      {"n":"UNDAV Deniz","cn":"德尼兹·温达夫","nick":"UNDAV","c":"VfB Stuttgart (GER)","h":179,"dob":"1996-07-19","v":"2000","p":"Forward"}
    ]
  },
  "GHA": {
    "gk": [
      {"n":"ZIGI Lawrence Ati","cn":"劳伦斯·阿蒂-齐吉","nick":"ZIGI","c":"FC St. Gallen (SUI)","h":188,"dob":"1996-11-29","v":"120","p":"Goalkeeper"},
      {"n":"ANANG Joseph","cn":"约瑟夫·阿南","nick":"ANANG","c":"St Patrick's Athletic FC (IRL)","h":190,"dob":"2000-08-06","v":"30","p":"Goalkeeper"},
      {"n":"ASARE Benjamin","cn":"本杰明·阿萨雷","nick":"ASARE","c":"Hearts Of Oak SC (GHA)","h":188,"dob":"1992-07-13","v":"30","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"SEIDU Alidu","cn":"阿利杜·塞杜","nick":"SEIDU","c":"Stade Rennais FC (FRA)","h":173,"dob":"2000-04-06","v":"900","p":"Defender"},
      {"n":"ADJETEY Jonas","cn":"乔纳斯·阿杰泰","nick":"ADJETEY","c":"VfL Wolfsburg (GER)","h":188,"dob":"2003-12-13","v":"800","p":"Defender"},
      {"n":"MUMIN Abdul","cn":"阿卜杜勒·穆明","nick":"SULEMAN","c":"Rayo Vallecano (ESP)","h":188,"dob":"1998-06-06","v":"500","p":"Defender"},
      {"n":"MENSAH Gideon","cn":"吉迪恩·门萨","nick":"MENSAH","c":"AJ Auxerre (FRA)","h":178,"dob":"1998-07-18","v":"400","p":"Defender"},
      {"n":"RAHMAN Baba","cn":"巴巴·拉赫曼","nick":"BABA","c":"PAOK Saloniki (GRE)","h":179,"dob":"1994-02-07","v":"200","p":"Defender"},
      {"n":"OPOKU Jerome","cn":"杰罗姆·奥波库","nick":"OPOKU","c":"Başakşehir FK (TUR)","h":197,"dob":"1998-10-14","v":"500","p":"Defender"},
      {"n":"OPPONG Kojo Peprah","cn":"科乔·佩普拉·奥蓬","nick":"PEPRAH","c":"OGC Nice (FRA)","h":185,"dob":"2004-04-06","v":"100","p":"Defender"},
      {"n":"LUCKASSEN Derrick","cn":"德里克·卢卡森","nick":"LUCKASSEN","c":"Pafos FC (CYP)","h":188,"dob":"1995-03-07","v":"100","p":"Defender"},
      {"n":"SENAYA Marvin","cn":"马文·塞纳亚","nick":"SENEYA","c":"AJ Auxerre (FRA)","h":181,"dob":"2001-01-28","v":"180","p":"Defender"}
    ],
    "mf": [
      {"n":"YIRENKYI Caleb","cn":"凯莱布·伊伦基","nick":"CALEB","c":"FC Nordsjælland (DEN)","h":182,"dob":"2006-01-15","v":"100","p":"Midfield"},
      {"n":"PARTEY Thomas","cn":"托马斯·帕尔特伊","nick":"THOMAS","c":"Villarreal CF (ESP)","h":185,"dob":"1993-06-13","v":"1400","p":"Midfield"},
      {"n":"SIBO Kwasi","cn":"夸西·西博","nick":"SIBO","c":"Real Oviedo (ESP)","h":183,"dob":"1998-06-24","v":"100","p":"Midfield"},
      {"n":"SEMENYO Antoine","cn":"安托万·塞梅尼奥","nick":"SEMENYO","c":"Manchester City FC (ENG)","h":185,"dob":"2000-07-01","v":"4000","p":"Midfield"},
      {"n":"OWUSU Elisha","cn":"以利沙·奥乌苏","nick":"OWUSU","c":"AJ Auxerre (FRA)","h":182,"dob":"1997-07-11","v":"300","p":"Midfield"},
      {"n":"BOAKYE Augustine","cn":"奥古斯丁·博阿基耶","nick":"BOAKYE","c":"AS Saint-Etienne (FRA)","h":178,"dob":"2000-03-11","v":"250","p":"Midfield"}
    ],
    "fw": [
      {"n":"ISSAHAKU Fatawu","cn":"法塔武·伊萨哈库","nick":"FATAWU","c":"Leicester City FC (ENG)","h":177,"dob":"2004-08-03","v":"1100","p":"Forward"},
      {"n":"AYEW Jordan","cn":"乔丹·阿尤","nick":"AYEW","c":"Leicester City FC (ENG)","h":182,"dob":"1991-11-09","v":"250","p":"Forward"},
      {"n":"THOMAS-ASANTE Brandon","cn":"布兰登·托马斯-阿桑特","nick":"ASANTE","c":"Coventry City FC (ENG)","h":182,"dob":"1998-12-29","v":"350","p":"Forward"},
      {"n":"BAAH Christopher Bonsu","cn":"克里斯托弗·邦苏·巴","nick":"BAAH","c":"Al Qadsiah FC (KSA)","h":172,"dob":"2004-12-14","v":"750","p":"Forward"},
      {"n":"WILLIAMS Inaki","cn":"伊尼亚基·威廉斯","nick":"WILLIAMS","c":"Athletic Club (ESP)","h":186,"dob":"1994-06-15","v":"1500","p":"Forward"},
      {"n":"SULEMANA Kamaldeen","cn":"卡马尔丁·苏莱马纳","nick":"KAMALDEEN","c":"Atalanta Bergamo (ITA)","h":174,"dob":"2002-02-15","v":"1300","p":"Forward"},
      {"n":"NUAMAH Ernest","cn":"欧内斯特·努阿马","nick":"NUAMAH","c":"Olympique Lyonnais (FRA)","h":178,"dob":"2003-01-11","v":"1500","p":"Forward"},
      {"n":"ADU Prince","cn":"普林斯·阿杜","nick":"ADU","c":"FC Viktoria Plzeň (CZE)","h":179,"dob":"2003-09-23","v":"300","p":"Forward"}
    ]
  },
  "HAI": {
    "gk": [
      {"n":"PLACIDE Johny","cn":"约翰尼·普拉西德","nick":"PLACIDE","c":"SC Bastia (FRA)","h":181,"dob":"1988-01-29","v":"20","p":"Goalkeeper"},
      {"n":"PIERRE Alexandre","cn":"亚历山大·皮埃尔","nick":"A. PIERRE","c":"FC Sochaux-Montbéliard (FRA)","h":190,"dob":"2001-02-25","v":"3","p":"Goalkeeper"},
      {"n":"DUVERGER Josue","cn":"若苏埃·迪韦热","nick":"DUVERGER","c":"FC Cosmos Koblenz (GER)","h":187,"dob":"2000-04-27","v":"40","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"ARCUS Carlens","cn":"卡伦斯·阿尔屈","nick":"ARCUS","c":"Angers SCO (FRA)","h":180,"dob":"1996-06-28","v":"180","p":"Defender"},
      {"n":"THERMONCY Keeto","cn":"基托·特尔蒙西","nick":"THERMONCY","c":"BSC Young Boys (SUI)","h":179,"dob":"2006-03-29","v":"30","p":"Defender"},
      {"n":"ADE Ricardo","cn":"里卡多·阿德","nick":"ADE","c":"LDU Quito (ECU)","h":190,"dob":"1990-05-21","v":"100","p":"Defender"},
      {"n":"DELCROIX Hannes","cn":"汉内斯·德尔克鲁瓦","nick":"DELCROIX","c":"FC Lugano (SUI)","h":183,"dob":"1999-02-28","v":"350","p":"Defender"},
      {"n":"EXPERIENCE Martin","cn":"马丁·埃克斯佩里安斯","nick":"EXPERIENCE","c":"AS Nancy (FRA)","h":178,"dob":"1999-09-03","v":"40","p":"Defender"},
      {"n":"LACROIX Markhus","cn":"马库斯·拉克鲁瓦","nick":"LACROIX","c":"Colorado Springs Switchbacks FC (USA)","h":175,"dob":"1993-10-14","v":"30","p":"Defender"},
      {"n":"DUVERNE Jean-Kevin","cn":"让-凯文·迪韦纳","nick":"DUVERNE","c":"KAA Gent (BEL)","h":184,"dob":"1997-12-07","v":"250","p":"Defender"},
      {"n":"PAUGAIN Wilguens","cn":"威尔根斯·波甘","nick":"PAUGIN","c":"SV Zulte Waregem (BEL)","h":180,"dob":"2001-08-24","v":"20","p":"Defender"}
    ],
    "mf": [
      {"n":"SAINTE Carl","cn":"卡尔·桑特","nick":"SAINTE","c":"El Paso Locomotive FC (USA)","h":182,"dob":"2002-09-08","v":"15","p":"Midfield"},
      {"n":"BELLEGARDE Jean-Ricner","cn":"让-里克纳·贝勒加德","nick":"BELLEGARDE","c":"Wolverhampton Wanderers FC (ENG)","h":170,"dob":"1998-06-27","v":"1800","p":"Midfield"},
      {"n":"PIERRE Leverton","cn":"莱弗顿·皮埃尔","nick":"L. PIERRE","c":"FC Vizela (POR)","h":181,"dob":"1998-09-03","v":"30","p":"Midfield"},
      {"n":"JEAN JACQUES Danley","cn":"丹利·让·雅克","nick":"JEAN JACQUES","c":"Philadelphia Union (USA)","h":182,"dob":"2000-05-20","v":"200","p":"Midfield"},
      {"n":"SIMON Dominique","cn":"多米尼克·西蒙","nick":"SIMON","c":"FC Tatran Prešov (SVK)","h":178,"dob":"2000-07-29","v":"20","p":"Midfield"},
      {"n":"PIERRE Woodensky","cn":"伍登斯基·皮埃尔","nick":"W. PIERRE","c":"Violette AC (HAI)","h":177,"dob":"2004-12-30","v":"10","p":"Midfield"}
    ],
    "fw": [
      {"n":"ETIENNE Derrick","cn":"德里克·艾蒂安","nick":"ETIENNE JR","c":"Toronto FC (CAN)","h":178,"dob":"1996-11-25","v":"100","p":"Forward"},
      {"n":"NAZON Duckens","cn":"杜肯·纳宗","nick":"NAZON","c":"Esteghlal Tehran FC (IRN)","h":181,"dob":"1994-07-04","v":"120","p":"Forward"},
      {"n":"DEEDSON Louicius","cn":"卢伊西乌斯·迪德森","nick":"DEEDSON","c":"FC Dallas (USA)","h":178,"dob":"2001-11-02","v":"50","p":"Forward"},
      {"n":"PROVIDENCE Ruben","cn":"鲁本·普罗维登斯","nick":"PROVIDENCE","c":"Almere City FC (NED)","h":178,"dob":"2001-07-07","v":"35","p":"Forward"},
      {"n":"JOSEPH Lenny","cn":"伦尼·约瑟夫","nick":"JOSEPH","c":"Ferencvárosi TC (HUN)","h":182,"dob":"2000-12-10","v":"100","p":"Forward"},
      {"n":"ISIDOR Wilson","cn":"威尔逊·伊西多尔","nick":"ISIDOR","c":"Sunderland AFC (ENG)","h":184,"dob":"2000-08-27","v":"1200","p":"Forward"},
      {"n":"FORTUNE Yassin","cn":"亚辛·福蒂纳","nick":"FORTUNE","c":"FC Vizela (POR)","h":186,"dob":"1999-01-30","v":"25","p":"Forward"},
      {"n":"PIERROT Frantzdy","cn":"弗朗茨迪·皮埃罗","nick":"PIERROT","c":"Çaykur Rizespor (TUR)","h":194,"dob":"1995-03-29","v":"320","p":"Forward"},
      {"n":"CASIMIR Josue","cn":"若苏埃·卡西米尔","nick":"CASIMIR","c":"AJ Auxerre (FRA)","h":178,"dob":"2001-09-24","v":"400","p":"Forward"}
    ]
  },
  "IRN": {
    "gk": [
      {"n":"BEIRANVAND Alireza","cn":"阿里雷扎·贝兰万德","nick":"BEIRANVAND","c":"Tractor Sazi Tabriz FC (IRN)","h":195,"dob":"1992-09-21","v":"80","p":"Goalkeeper"},
      {"n":"NIAZMAND Payam","cn":"帕亚姆·尼亚兹曼德","nick":"PAYAM","c":"Persepolis FC (IRN)","h":193,"dob":"1995-06-04","v":"65","p":"Goalkeeper"},
      {"n":"HOSSEINI Hossein","cn":"侯赛因·侯赛尼","nick":"HOSSEINI","c":"Sepahan SC (IRN)","h":189,"dob":"1992-06-30","v":"80","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"HARDANI Saleh","cn":"萨利赫·哈尔达尼","nick":"SALEH","c":"Esteghlal Tehran FC (IRN)","h":176,"dob":"1998-12-26","v":"60","p":"Defender"},
      {"n":"HAJISAFI Ehsan","cn":"埃赫桑·哈吉萨菲","nick":"E. HAJISAFI","c":"Sepahan SC (IRN)","h":178,"dob":"1990-02-25","v":"30","p":"Defender"},
      {"n":"KHALILZADEH Shoja","cn":"舒贾·哈利勒扎德","nick":"SHOJA","c":"Tractor Sazi Tabriz FC (IRN)","h":183,"dob":"1989-05-14","v":"50","p":"Defender"},
      {"n":"MOHAMMADI Milad","cn":"米拉德·穆罕默迪","nick":"M. MOHAMMADI","c":"Persepolis FC (IRN)","h":175,"dob":"1993-09-29","v":"120","p":"Defender"},
      {"n":"KANANI Hossein","cn":"侯赛因·卡纳尼","nick":"KANANI","c":"Persepolis FC (IRN)","h":188,"dob":"1994-03-23","v":"100","p":"Defender"},
      {"n":"YOUSEFI Arya","cn":"阿里亚·优素菲","nick":"ARYA","c":"Sepahan SC (IRN)","h":181,"dob":"2002-04-22","v":"80","p":"Defender"},
      {"n":"NEMATI Ali","cn":"阿里·内马蒂","nick":"ALI","c":"Foolad Khuzestan FC (IRN)","h":182,"dob":"1996-08-02","v":"50","p":"Defender"},
      {"n":"REZAEIAN Ramin","cn":"拉明·雷扎伊安","nick":"RAMIN","c":"Foolad Khuzestan FC (IRN)","h":184,"dob":"1990-03-21","v":"80","p":"Defender"},
      {"n":"IRI Danial","cn":"达尼亚尔·伊里","nick":"DANIAL","c":"Malavan Anzali FC (IRN)","h":182,"dob":"2003-10-26","v":"40","p":"Defender"}
    ],
    "mf": [
      {"n":"EZATOLAHI Saeid","cn":"赛义德·埃扎托拉希","nick":"S. EZATOLAHI","c":"Shabab Al Ahli Club (UAE)","h":189,"dob":"1996-01-10","v":"130","p":"Midfield"},
      {"n":"JAHANBAKHSH Alireza","cn":"阿里雷扎·贾汉巴赫什","nick":"A. JAHANBAKHSH","c":"FCV Dender EH (BEL)","h":180,"dob":"1993-11-08","v":"150","p":"Midfield"},
      {"n":"MOHEBBI Mohammad","cn":"穆罕默德·莫赫比","nick":"M. MOHEBBI","c":"FC Rostov (RUS)","h":187,"dob":"1998-12-20","v":"300","p":"Midfield"},
      {"n":"GHODDOS Saman","cn":"萨曼·古多斯","nick":"GHODDOS","c":"Al Ittihad Kalba SCC (UAE)","h":176,"dob":"1993-06-09","v":"150","p":"Midfield"},
      {"n":"CHESHMI Roozbeh","cn":"鲁兹贝·切什米","nick":"ROOZBEH","c":"Esteghlal Tehran FC (IRN)","h":192,"dob":"1993-07-24","v":"100","p":"Midfield"},
      {"n":"TORABI Mehdi","cn":"迈赫迪·托拉比","nick":"M. TORABI","c":"Tractor Sazi Tabriz FC (IRN)","h":185,"dob":"1994-10-09","v":"150","p":"Midfield"},
      {"n":"GHORBANI Mohammad","cn":"穆罕默德·戈尔巴尼","nick":"MOHAMMAD","c":"Al Wahda SC (UAE)","h":190,"dob":"2001-07-10","v":"60","p":"Midfield"},
      {"n":"RAZAGHINIA Amirmohammad","cn":"阿米尔穆罕默德·拉扎吉尼亚","nick":"RAZAGH","c":"Esteghlal Tehran FC (IRN)","h":187,"dob":"2006-11-04","v":"30","p":"Midfield"}
    ],
    "fw": [
      {"n":"TAREMI Mehdi","cn":"迈赫迪·塔雷米","nick":"TAREMI","c":"Olympiacos FC (GRE)","h":187,"dob":"1992-07-18","v":"350","p":"Forward"},
      {"n":"GHAYEDI Mehdi","cn":"迈赫迪·加耶迪","nick":"MEHDI GHAYEDI","c":"Al Nasr SC (UAE)","h":166,"dob":"1998-05-12","v":"120","p":"Forward"},
      {"n":"ALIPOUR Ali","cn":"阿里·阿里普尔","nick":"A. ALIPOUR","c":"Persepolis FC (IRN)","h":181,"dob":"1995-11-11","v":"120","p":"Forward"},
      {"n":"HOSSEINZADEH Amirhossein","cn":"阿米尔侯赛因·侯赛因扎德","nick":"AMIRHOSSEIN","c":"Tractor Sazi Tabriz FC (IRN)","h":178,"dob":"2000-10-30","v":"150","p":"Forward"},
      {"n":"MOGHANLOO Shahriyar","cn":"沙赫里亚尔·莫甘卢","nick":"SHAHRIYAR","c":"Al Ittihad Kalba SCC (UAE)","h":189,"dob":"1994-12-21","v":"50","p":"Forward"},
      {"n":"DARGAHI Dennis","cn":"丹尼斯·达尔加希","nick":"DARGAHI","c":"Standard Liège (BEL)","h":182,"dob":"1997-09-01","v":"250","p":"Forward"}
    ]
  },
  "IRQ": {
    "gk": [
      {"n":"FAHAD TALIB","cn":"法哈德·塔利布","nick":"FAHAD","c":"Al Talaba SC (IRQ)","h":192,"dob":"1994-10-21","v":"50","p":"Goalkeeper"},
      {"n":"JALAL HASSAN","cn":"贾拉勒·哈桑","nick":"JALAL","c":"Al Zawra'a SC (IRQ)","h":188,"dob":"1991-05-18","v":"80","p":"Goalkeeper"},
      {"n":"AHMED BASIL","cn":"艾哈迈德·巴西勒","nick":"AHMED B.","c":"Al Shorta SC (IRQ)","h":184,"dob":"1996-08-19","v":"60","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"REBIN GHAREEB","cn":"雷宾·加里布","nick":"REBIN","c":"Port FC (THA)","h":193,"dob":"1992-12-04","v":"10","p":"Defender"},
      {"n":"HUSSEIN ALI","cn":"侯赛因·阿里","nick":"HUSSEIN","c":"Pogoń Szczecin (POL)","h":182,"dob":"2002-01-03","v":"30","p":"Defender"},
      {"n":"ZAID TAHSEEN","cn":"扎伊德·塔赫辛","nick":"ZAID T.","c":"Pakhtakor Tashkent FK (UZB)","h":187,"dob":"2001-01-29","v":"100","p":"Defender"},
      {"n":"AKAM HASHIM","cn":"阿卡姆·哈希姆","nick":"AKAM","c":"Al Zawra'a SC (IRQ)","h":184,"dob":"1998-08-16","v":"40","p":"Defender"},
      {"n":"MUNAF YOUNUS","cn":"穆纳夫·尤努斯","nick":"MUNAF","c":"Al Shorta SC (IRQ)","h":184,"dob":"1996-11-16","v":"50","p":"Defender"},
      {"n":"AHMED YAHYA","cn":"艾哈迈德·叶海亚","nick":"AHMED","c":"Al Shorta SC (IRQ)","h":187,"dob":"1995-01-07","v":"40","p":"Defender"},
      {"n":"MERCHAS DOSKI","cn":"梅尔哈斯·多斯基","nick":"DOSKI","c":"FC Viktoria Plzeň (CZE)","h":173,"dob":"1999-07-12","v":"200","p":"Defender"},
      {"n":"MUSTAFA SAADOON","cn":"穆斯塔法·萨敦","nick":"MUSTAFA","c":"Al Shorta SC (IRQ)","h":181,"dob":"2001-05-25","v":"60","p":"Defender"},
      {"n":"FRANS PUTROS","cn":"弗兰斯·普特罗斯","nick":"FRANS","c":"Persib Bandung (IDN)","h":182,"dob":"1993-07-14","v":"35","p":"Defender"}
    ],
    "mf": [
      {"n":"YOUSSEF AMYN","cn":"优素福·阿明","nick":"YOUSSEF","c":"AEK Larnaca FC (CYP)","h":172,"dob":"2003-08-21","v":"60","p":"Midfield"},
      {"n":"IBRAHIM BAYESH","cn":"易卜拉欣·巴耶什","nick":"IBRAHIM","c":"Al Dhafra SCC (UAE)","h":180,"dob":"2000-01-05","v":"80","p":"Midfield"},
      {"n":"ZIDANE IQBAL","cn":"齐达内·伊克巴尔","nick":"Z.IQBAL","c":"FC Utrecht (NED)","h":183,"dob":"2003-04-27","v":"400","p":"Midfield"},
      {"n":"AMIR ALAMMARI","cn":"阿米尔·阿马里","nick":"AL-AMMARI","c":"KS Cracovia (POL)","h":180,"dob":"1997-07-27","v":"60","p":"Midfield"},
      {"n":"KEVIN YAKOB","cn":"凯文·雅各布","nick":"K. YAKOB","c":"Aarhus GF (DEN)","h":180,"dob":"2000-10-10","v":"100","p":"Midfield"},
      {"n":"AIMAR SHER","cn":"艾马尔·谢尔","nick":"AIMAR","c":"Sarpsborg 08 FF (NOR)","h":180,"dob":"2002-12-20","v":"130","p":"Midfield"},
      {"n":"ZAID ISMAEL","cn":"扎伊德·伊斯梅尔","nick":"ZAID I.","c":"Al Talaba SC (IRQ)","h":185,"dob":"2002-03-01","v":"40","p":"Midfield"}
    ],
    "fw": [
      {"n":"ALI ALHAMADI","cn":"阿里·哈马迪","nick":"AL-HAMADI","c":"Luton Town FC (ENG)","h":187,"dob":"2002-01-03","v":"250","p":"Forward"},
      {"n":"MOHANAD ALI","cn":"穆哈纳德·阿里","nick":"MOHANAD","c":"Dibba FC (UAE)","h":183,"dob":"2000-06-20","v":"120","p":"Forward"},
      {"n":"AHMED QASIM","cn":"艾哈迈德·卡西姆","nick":"AHMED Q.","c":"Nashville SC (USA)","h":183,"dob":"2003-12-07","v":"350","p":"Forward"},
      {"n":"ALI YOUSIF","cn":"阿里·优素福","nick":"ALI Y.","c":"Al Talaba SC (IRQ)","h":180,"dob":"1996-01-19","v":"40","p":"Forward"},
      {"n":"ALI JASIM","cn":"阿里·贾西姆","nick":"ALI J.","c":"Al Najmah SC (KSA)","h":178,"dob":"2004-01-20","v":"55","p":"Forward"},
      {"n":"AYMEN HUSSEIN","cn":"艾曼·侯赛因","nick":"AYMEN","c":"Al Karma SC (IRQ)","h":190,"dob":"1996-03-22","v":"150","p":"Forward"},
      {"n":"MARKO FARJI","cn":"马尔科·法尔吉","nick":"MARKO","c":"Venezia FC (ITA)","h":185,"dob":"2004-03-16","v":"220","p":"Forward"}
    ]
  },
  "JOR": {
    "gk": [
      {"n":"YAZEED ABULAILA","cn":"亚齐德·阿布拉伊拉","nick":"YAZEED","c":"Al Hussein SC (JOR)","h":188,"dob":"1993-08-01","v":"50","p":"Goalkeeper"},
      {"n":"NOUR BANIATEYAH","cn":"努尔·巴尼亚提亚","nick":"BANI ATEYAH","c":"Al Faisaly SC (JOR)","h":179,"dob":"1993-01-25","v":"40","p":"Goalkeeper"},
      {"n":"ABDALLAH ALFAKHORI","cn":"阿卜杜拉·法库里","nick":"ALFAKHORI","c":"Al Wahdat SC (JOR)","h":190,"dob":"2000-01-22","v":"60","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"MOHAMMAD ABUHASHEESH","cn":"穆罕默德·阿布哈希什","nick":"ABU HASHEESH","c":"Al Karma SC (IRQ)","h":179,"dob":"1995-09-05","v":"50","p":"Defender"},
      {"n":"ABDALLAH NASIB","cn":"阿卜杜拉·纳西布","nick":"NASIB","c":"Al Zawra'a SC (IRQ)","h":184,"dob":"1994-02-25","v":"80","p":"Defender"},
      {"n":"HUSAM ABUDAHAB","cn":"胡萨姆·阿布达哈卜","nick":"ABU DAHAB","c":"Al Faisaly SC (JOR)","h":186,"dob":"2000-05-13","v":"40","p":"Defender"},
      {"n":"YAZAN ALARAB","cn":"亚赞·阿拉伯","nick":"ALARAB","c":"FC Seoul (KOR)","h":185,"dob":"1996-01-31","v":"200","p":"Defender"},
      {"n":"MOHAMMAD ABUALNADI","cn":"穆罕默德·阿布纳迪","nick":"ABU ALNADI","c":"Selangor FC (MAS)","h":185,"dob":"2001-08-02","v":"18","p":"Defender"},
      {"n":"SALEEM OBAID","cn":"萨利姆·奥贝德","nick":"SALEEM","c":"Al Hussein SC (JOR)","h":187,"dob":"1992-01-17","v":"30","p":"Defender"},
      {"n":"SAED ALROSAN","cn":"萨埃德·罗桑","nick":"SA'ED","c":"Al Hussein SC (JOR)","h":186,"dob":"1997-01-02","v":"50","p":"Defender"},
      {"n":"EHSAN HADDAD","cn":"埃赫桑·哈达德","nick":"EHSAN","c":"Al Hussein SC (JOR)","h":174,"dob":"1994-05-02","v":"60","p":"Defender"},
      {"n":"ANAS BADAWI","cn":"阿纳斯·巴达维","nick":"BADAWI","c":"Al Faisaly SC (JOR)","h":174,"dob":"1997-09-13","v":"30","p":"Defender"}
    ],
    "mf": [
      {"n":"AMER JAMOUS","cn":"阿米尔·贾穆斯","nick":"JAMOUS","c":"Al Zawra'a SC (IRQ)","h":177,"dob":"2002-03-07","v":"50","p":"Midfield"},
      {"n":"NOOR ALRAWABDEH","cn":"努尔·拉瓦比德","nick":"ALRAWABDEH","c":"Selangor FC (MAS)","h":182,"dob":"1997-02-24","v":"100","p":"Midfield"},
      {"n":"RAJAEI AYED","cn":"拉贾伊·阿耶德","nick":"RAJA'EI","c":"Al Hussein SC (JOR)","h":175,"dob":"1993-07-25","v":"35","p":"Midfield"},
      {"n":"IBRAHIM SADEH","cn":"易卜拉欣·萨德","nick":"SA'DEH","c":"Al Karma SC (IRQ)","h":175,"dob":"2000-04-27","v":"80","p":"Midfield"},
      {"n":"MOHANNAD ABUTAHA","cn":"穆哈纳德·阿布塔哈","nick":"ABU TAHA","c":"Al-Quwa Al-Jawiya (IRQ)","h":173,"dob":"2003-02-02","v":"40","p":"Midfield"},
      {"n":"NIZAR ALRASHDAN","cn":"尼扎尔·拉什丹","nick":"NIZAR","c":"Qatar SC (QAT)","h":183,"dob":"1999-03-23","v":"60","p":"Midfield"},
      {"n":"MOHAMMAD ALDAOUD","cn":"穆罕默德·达乌德","nick":"ALDAOUD","c":"Al Wahdat SC (JOR)","h":185,"dob":"1992-12-04","v":"40","p":"Midfield"}
    ],
    "fw": [
      {"n":"MOHAMMAD ABUZRAIQ","cn":"穆罕默德·阿布兹赖克","nick":"ABU ZRAIQ","c":"Raja Casablanca (MAR)","h":170,"dob":"1997-12-30","v":"80","p":"Forward"},
      {"n":"ALI OLWAN","cn":"阿里·奥尔万","nick":"OLWAN","c":"Al Sailiya SC (QAT)","h":182,"dob":"2000-03-26","v":"70","p":"Forward"},
      {"n":"MOUSA ALTAMARI","cn":"穆萨·塔马里","nick":"ALTAMARI","c":"Stade Rennais FC (FRA)","h":176,"dob":"1997-10-06","v":"800","p":"Forward"},
      {"n":"ODEH FAKHOURY","cn":"奥德·法库里","nick":"ODEH","c":"Pyramids FC (EGY)","h":180,"dob":"2005-11-22","v":"30","p":"Forward"},
      {"n":"MAHMOUD ALMARDI","cn":"马哈茂德·马尔迪","nick":"ALMARDI","c":"Al Hussein SC (JOR)","h":173,"dob":"1993-06-10","v":"50","p":"Forward"},
      {"n":"IBRAHIM SABRA","cn":"易卜拉欣·萨卜拉","nick":"SABRA","c":"NK Lokomotiva Zagreb (CRO)","h":184,"dob":"2006-01-02","v":"28","p":"Forward"},
      {"n":"ALI AZAIZEH","cn":"阿里·阿扎伊泽","nick":"AZAIZEH","c":"Al Shabab FC (KSA)","h":178,"dob":"2004-04-13","v":"40","p":"Forward"}
    ]
  },
  "JPN": {
    "gk": [
      {"n":"SUZUKI Zion","cn":"铃木彩艳","nick":"SUZUKI","c":"Parma (ITA)","h":190,"dob":"2002-08-21","v":"2000","p":"Goalkeeper"},
      {"n":"OSAKO Keisuke","cn":"大迫敬介","nick":"OSAKO","c":"Sanfrecce Hiroshima (JPN)","h":188,"dob":"1999-07-28","v":"170","p":"Goalkeeper"},
      {"n":"HAYAKAWA Tomoki","cn":"早川友基","nick":"HAYAKAWA","c":"Kashima Antlers (JPN)","h":187,"dob":"1999-03-03","v":"100","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"SUGAWARA Yukinari","cn":"菅原由势","nick":"SUGAWARA","c":"SV Werder Bremen (GER)","h":179,"dob":"2000-06-28","v":"1100","p":"Defender"},
      {"n":"TANIGUCHI Shogo","cn":"谷口彰悟","nick":"TANIGUCHI","c":"Sint-Truiden VV (BEL)","h":185,"dob":"1991-07-15","v":"100","p":"Defender"},
      {"n":"ITAKURA Kou","cn":"板仓滉","nick":"ITAKURA","c":"AFC Ajax (NED)","h":188,"dob":"1997-01-27","v":"1200","p":"Defender"},
      {"n":"NAGATOMO Yuto","cn":"长友佑都","nick":"NAGATOMO","c":"FC Tokyo (JPN)","h":170,"dob":"1986-12-09","v":"13","p":"Defender"},
      {"n":"WATANABE Tsuyoshi","cn":"渡边刚","nick":"WATANABE","c":"Feyenoord Rotterdam (NED)","h":184,"dob":"1997-05-02","v":"900","p":"Defender"},
      {"n":"SEKO Ayumu","cn":"濑古步梦","nick":"","c":"Le Havre AC (FRA)","h":186,"dob":"2000-07-06","v":"100","p":"Defender"},
      {"n":"ITO Hiroki","cn":"伊藤洋辉","nick":"","c":"FC Bayern München (GER)","h":188,"dob":"1999-12-05","v":"2500","p":"Defender"},
      {"n":"TOMIYASU Takehiro","cn":"富安健洋","nick":"TOMIYASU","c":"AFC Ajax (NED)","h":187,"dob":"1998-05-11","v":"1800","p":"Defender"},
      {"n":"SUZUKI Junnosuke","cn":"铃木淳之介","nick":"J. SUZUKI","c":"FC København (DEN)","h":180,"dob":"2003-12-07","v":"100","p":"Defender"}
    ],
    "mf": [
      {"n":"ENDO Wataru","cn":"远藤航","nick":"","c":"Liverpool FC (ENG)","h":178,"dob":"1993-09-02","v":"800","p":"Midfield"},
      {"n":"TANAKA Ao","cn":"田中碧","nick":"TANAKA","c":"Leeds United FC (ENG)","h":180,"dob":"1998-10-09","v":"1000","p":"Midfield"},
      {"n":"KUBO Takefusa","cn":"久保建英","nick":"","c":"Real Sociedad (ESP)","h":173,"dob":"2001-04-06","v":"3000","p":"Midfield"},
      {"n":"DOAN Ritsu","cn":"堂安律","nick":"","c":"Eintracht Frankfurt (GER)","h":172,"dob":"1998-06-16","v":"2500","p":"Midfield"},
      {"n":"MAEDA Daizen","cn":"前田大然","nick":"DAIZEN","c":"Celtic FC (SCO)","h":173,"dob":"1997-10-20","v":"1500","p":"Midfield"},
      {"n":"NAKAMURA Keito","cn":"中村敬斗","nick":"NAKAMURA","c":"Stade Reims (FRA)","h":180,"dob":"2000-07-28","v":"800","p":"Midfield"},
      {"n":"ITO Junya","cn":"伊东纯也","nick":"","c":"KRC Genk (BEL)","h":177,"dob":"1993-09-03","v":"600","p":"Midfield"},
      {"n":"KAMADA Daichi","cn":"镰田大地","nick":"KAMADA","c":"Crystal Palace FC (ENG)","h":180,"dob":"1996-05-08","v":"1200","p":"Midfield"},
      {"n":"SUZUKI Yuito","cn":"铃木唯人","nick":"Y. SUZUKI","c":"SC Freiburg (GER)","h":175,"dob":"2001-10-25","v":"1000","p":"Midfield"},
      {"n":"SANO Kaishu","cn":"佐野海舟","nick":"","c":"1. FSV Mainz 05 (GER)","h":176,"dob":"2000-12-30","v":"2000","p":"Midfield"}
    ],
    "fw": [
      {"n":"GOTO Keisuke","cn":"后藤启介","nick":"","c":"Sint-Truiden VV (BEL)","h":191,"dob":"2005-03-06","v":"120","p":"Forward"},
      {"n":"UEDA Ayase","cn":"上田绮世","nick":"AYASE","c":"Feyenoord Rotterdam (NED)","h":182,"dob":"1998-08-28","v":"800","p":"Forward"},
      {"n":"OGAWA Koki","cn":"小川航基","nick":"OGAWA","c":"NEC Nijmegen (NED)","h":186,"dob":"1997-08-08","v":"250","p":"Forward"},
      {"n":"SHIOGAI Kento","cn":"盐贝健人","nick":"SHIOGAI","c":"VfL Wolfsburg (GER)","h":180,"dob":"2005-03-26","v":"50","p":"Forward"}
    ]
  },
  "KOR": {
    "gk": [
      {"n":"KIM Seunggyu","cn":"金承奎","nick":"SEUNGGYU","c":"FC Tokyo (JPN)","h":187,"dob":"1990-09-30","v":"300","p":"Goalkeeper"},
      {"n":"SONG Bumkeun","cn":"宋范根","nick":"BUMKEUN","c":"Jeonbuk Hyundai Motors FC (KOR)","h":196,"dob":"1997-10-15","v":"250","p":"Goalkeeper"},
      {"n":"JO Hyeonwoo","cn":"赵贤祐","nick":"HYEONWOO","c":"Ulsan HD (KOR)","h":189,"dob":"1991-09-25","v":"80","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"LEE Hanbeom","cn":"李汉范","nick":"HANBEOM","c":"FC Midtjylland (DEN)","h":188,"dob":"2002-06-17","v":"100","p":"Defender"},
      {"n":"KIM Minjae","cn":"金玟哉","nick":"MINJAE","c":"FC Bayern München (GER)","h":190,"dob":"1996-11-15","v":"4000","p":"Defender"},
      {"n":"KIM Taehyeon","cn":"金太炫","nick":"TAEHYEON","c":"Kashima Antlers (JPN)","h":186,"dob":"2000-09-17","v":"55","p":"Defender"},
      {"n":"LEE Taeseok","cn":"李太锡","nick":"TAESEOK","c":"FK Austria Wien (AUT)","h":174,"dob":"2002-07-28","v":"75","p":"Defender"},
      {"n":"CHO Wije","cn":"赵伟济","nick":"WIJE","c":"Jeonbuk Hyundai Motors FC (KOR)","h":190,"dob":"2001-08-25","v":"45","p":"Defender"},
      {"n":"KIM Moonhwan","cn":"金纹奂","nick":"MOONHWAN","c":"Daejeon Hana Citizen FC (KOR)","h":173,"dob":"1995-08-01","v":"75","p":"Defender"},
      {"n":"PARK Jinseob","cn":"朴镇燮","nick":"JINSEOB","c":"Zhejiang FC (CHN)","h":183,"dob":"1995-10-23","v":"150","p":"Defender"},
      {"n":"SEOL Youngwoo","cn":"薛英佑","nick":"YOUNGWOO","c":"FK Crvena Zvezda (SRB)","h":180,"dob":"1998-12-05","v":"450","p":"Defender"},
      {"n":"CASTROP Jens","cn":"延斯·卡斯特罗普","nick":"JENS","c":"Borussia Mönchengladbach (GER)","h":178,"dob":"2003-07-29","v":"600","p":"Defender"}
    ],
    "mf": [
      {"n":"LEE Gihyuk","cn":"李记赫","nick":"GIHYUK","c":"Gangwon FC (KOR)","h":184,"dob":"2000-07-07","v":"55","p":"Midfield"},
      {"n":"HWANG Inbeom","cn":"黄仁范","nick":"INBEOM","c":"Feyenoord Rotterdam (NED)","h":177,"dob":"1996-09-20","v":"1000","p":"Midfield"},
      {"n":"PAIK Seungho","cn":"白昇浩","nick":"SEUNGHO","c":"Birmingham City FC (ENG)","h":182,"dob":"1997-03-17","v":"150","p":"Midfield"},
      {"n":"LEE Jaesung","cn":"李在城","nick":"JAESUNG","c":"1. FSV Mainz 05 (GER)","h":180,"dob":"1992-08-10","v":"5","p":"Midfield"},
      {"n":"HWANG Heechan","cn":"黄喜灿","nick":"HEECHAN","c":"Wolverhampton Wanderers FC (ENG)","h":177,"dob":"1996-01-26","v":"1200","p":"Midfield"},
      {"n":"BAE Junho","cn":"裴俊镐","nick":"JUNHO","c":"Stoke City FC (ENG)","h":180,"dob":"2003-08-21","v":"300","p":"Midfield"},
      {"n":"LEE Kangin","cn":"李刚仁","nick":"KANGIN","c":"Paris Saint-Germain (FRA)","h":174,"dob":"2001-02-19","v":"2500","p":"Midfield"},
      {"n":"YANG Hyunjun","cn":"梁泫俊","nick":"HYUNJUN","c":"Celtic FC (SCO)","h":179,"dob":"2002-05-25","v":"250","p":"Midfield"},
      {"n":"KIM Jingyu","cn":"金镇圭","nick":"JINGYU","c":"Jeonbuk Hyundai Motors FC (KOR)","h":177,"dob":"1997-02-24","v":"100","p":"Midfield"},
      {"n":"EOM Jisung","cn":"严智星","nick":"JISUNG","c":"Swansea City AFC (WAL)","h":177,"dob":"2002-05-09","v":"140","p":"Midfield"},
      {"n":"LEE Donggyeong","cn":"李东炅","nick":"DONGGYEONG","c":"Ulsan HD (KOR)","h":175,"dob":"1997-09-20","v":"140","p":"Midfield"}
    ],
    "fw": [
      {"n":"SON Heungmin","cn":"孙兴慜","nick":"HEUNGMIN","c":"LAFC (USA)","h":183,"dob":"1992-07-08","v":"2000","p":"Forward"},
      {"n":"CHO Guesung","cn":"曹圭成","nick":"GUESUNG","c":"FC Midtjylland (DEN)","h":188,"dob":"1998-01-25","v":"350","p":"Forward"},
      {"n":"OH Hyeongyu","cn":"吴贤揆","nick":"HYEONGYU","c":"Beşiktaş JK (TUR)","h":183,"dob":"2001-04-12","v":"350","p":"Forward"}
    ]
  },
  "KSA": {
    "gk": [
      {"n":"NAWAF ALAQIDI","cn":"纳瓦夫·阿基迪","nick":"ALAQIDI","c":"Al Nassr FC (KSA)","h":186,"dob":"2000-10-05","v":"300","p":"Goalkeeper"},
      {"n":"MOHAMMED ALOWAIS","cn":"穆罕默德·奥韦斯","nick":"ALOWAIS","c":"Al Ula Saudi FC (KSA)","h":185,"dob":"1991-10-10","v":"200","p":"Goalkeeper"},
      {"n":"AHMED ALKASSAR","cn":"艾哈迈德·卡萨尔","nick":"ALKASSAR","c":"Al Qadsiah FC (KSA)","h":178,"dob":"1991-08-05","v":"150","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"ALI MAJRASHI","cn":"阿里·马杰拉希","nick":"MAJRASHI","c":"Al Ahli FC (KSA)","h":169,"dob":"1999-02-10","v":"100","p":"Defender"},
      {"n":"ALI LAJAMI","cn":"阿里·拉贾米","nick":"LAJAMI","c":"Al Hilal SC (KSA)","h":177,"dob":"1996-04-24","v":"250","p":"Defender"},
      {"n":"ABDULELAH ALAMRI","cn":"阿卜杜勒拉·阿姆里","nick":"ALAMRI","c":"Al Nassr FC (KSA)","h":185,"dob":"1997-01-15","v":"200","p":"Defender"},
      {"n":"HASSAN ALTAMBAKTI","cn":"哈桑·坦巴蒂","nick":"ALTAMBAKTI","c":"Al Hilal SC (KSA)","h":183,"dob":"1999-09-02","v":"400","p":"Defender"},
      {"n":"SAUD ABDULHAMID","cn":"萨乌德·阿卜杜勒哈米德","nick":"SAUD","c":"RC Lens (FRA)","h":172,"dob":"1999-07-18","v":"300","p":"Defender"},
      {"n":"NAWAF BU WASHL","cn":"纳瓦夫·布瓦什勒","nick":"NAWAF","c":"Al Nassr FC (KSA)","h":173,"dob":"1999-09-16","v":"100","p":"Defender"},
      {"n":"HASSAN KADISH","cn":"哈桑·卡迪什","nick":"KADISH","c":"Al Ittihad (KSA)","h":179,"dob":"1992-09-26","v":"150","p":"Defender"},
      {"n":"MOTEB ALHARBI","cn":"穆塔卜·哈尔比","nick":"MOTEB","c":"Al Hilal SC (KSA)","h":177,"dob":"2000-02-20","v":"250","p":"Defender"},
      {"n":"JEHAD THIKRI","cn":"杰哈德·齐克里","nick":"JEHAD","c":"Al Qadsiah FC (KSA)","h":184,"dob":"2001-07-21","v":"60","p":"Defender"},
      {"n":"MOHAMMED ABU ALSHAMAT","cn":"穆罕默德·阿布沙马特","nick":"MOHAMMED","c":"Al Qadsiah FC (KSA)","h":170,"dob":"2002-11-08","v":"40","p":"Defender"}
    ],
    "mf": [
      {"n":"NASSER ALDAWSARI","cn":"纳赛尔·达瓦萨里","nick":"NASSER","c":"Al Hilal SC (KSA)","h":178,"dob":"1998-12-19","v":"350","p":"Midfield"},
      {"n":"MUSAB ALJUWAYR","cn":"穆萨卜·朱瓦尔","nick":"MUSAB","c":"Al Qadsiah FC (KSA)","h":175,"dob":"2003-06-20","v":"100","p":"Midfield"},
      {"n":"ABDULLAH ALKHAIBARI","cn":"阿卜杜拉·海巴里","nick":"ALKHAIBARI","c":"Al Nassr FC (KSA)","h":175,"dob":"1996-08-16","v":"200","p":"Midfield"},
      {"n":"ZIYAD ALJOHANI","cn":"齐亚德·朱哈尼","nick":"ZIYAD","c":"Al Ahli FC (KSA)","h":180,"dob":"2001-11-11","v":"80","p":"Midfield"},
      {"n":"ALA ALHAJJI","cn":"阿拉·哈吉","nick":"ALHAJJI","c":"Neom SC (KSA)","h":178,"dob":"1995-03-12","v":"40","p":"Midfield"},
      {"n":"MOHAMED KANNO","cn":"穆罕默德·卡努","nick":"KANNO","c":"Al Hilal SC (KSA)","h":191,"dob":"1994-09-22","v":"300","p":"Midfield"}
    ],
    "fw": [
      {"n":"AIMAN YAHYA","cn":"艾曼·叶海亚","nick":"AIMAN","c":"Al Nassr FC (KSA)","h":173,"dob":"2001-05-14","v":"200","p":"Forward"},
      {"n":"FERAS ALBRIKAN","cn":"菲拉斯·布里坎","nick":"FERAS","c":"Al Ahli FC (KSA)","h":185,"dob":"2000-05-14","v":"400","p":"Forward"},
      {"n":"SALEM ALDAWSARI","cn":"萨勒姆·达瓦萨里","nick":"SALEM","c":"Al Hilal SC (KSA)","h":173,"dob":"1991-08-19","v":"400","p":"Forward"},
      {"n":"SALEH ALSHEHRI","cn":"萨利赫·谢赫里","nick":"ALSHEHRI","c":"Al Ittihad (KSA)","h":184,"dob":"1993-01-11","v":"150","p":"Forward"},
      {"n":"KHALID ALGHANNAM","cn":"哈立德·甘纳姆","nick":"KHALID","c":"Al Ettifaq FC (KSA)","h":171,"dob":"2000-08-11","v":"100","p":"Forward"},
      {"n":"ABDULLAH ALHAMDDAN","cn":"阿卜杜拉·哈姆丹","nick":"ALHAMDDAN","c":"Al Nassr FC (KSA)","h":186,"dob":"1999-09-13","v":"250","p":"Forward"},
      {"n":"SULTAN MANDASH","cn":"苏丹·曼达什","nick":"MANDASH","c":"Al Hilal SC (KSA)","h":172,"dob":"1994-10-17","v":"80","p":"Forward"}
    ]
  },
  "MAR": {
    "gk": [
      {"n":"BOUNOU Yassine","cn":"亚辛·布努","nick":"BONO","c":"Al Hilal SC (KSA)","h":192,"dob":"1991-05-04","v":"550","p":"Goalkeeper"},
      {"n":"EL KAJOUI Munir","cn":"穆尼尔·卡朱伊","nick":"EL KAJOUI","c":"RS Berkane (MAR)","h":190,"dob":"1989-10-05","v":"40","p":"Goalkeeper"},
      {"n":"TAGNAOUTI Ahmed Reda","cn":"艾哈迈德·雷达·塔格纳乌提","nick":"TAGNAOUTI","c":"ASFAR (MAR)","h":194,"dob":"1996-05-04","v":"60","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"HAKIMI Achraf","cn":"阿什拉夫·哈基米","nick":"HAKIMI","c":"Paris Saint-Germain (FRA)","h":180,"dob":"1998-04-11","v":"8000","p":"Defender"},
      {"n":"MAZRAOUI Noussair","cn":"努赛尔·马兹拉维","nick":"MAZRAOUI","c":"Manchester United FC (ENG)","h":183,"dob":"1997-11-14","v":"2500","p":"Defender"},
      {"n":"AGUERD Nayef","cn":"纳伊夫·阿盖尔德","nick":"AGUERD","c":"Olympique Marseille (FRA)","h":190,"dob":"1996-03-30","v":"1800","p":"Defender"},
      {"n":"EL OUAHDI Zakaria","cn":"扎卡里亚·瓦赫迪","nick":"EL OUAHDI","c":"KRC Genk (BEL)","h":171,"dob":"2001-12-31","v":"1200","p":"Defender"},
      {"n":"DIOP Issa","cn":"伊萨·迪奥普","nick":"ISSA","c":"Fulham FC (ENG)","h":194,"dob":"1997-09-01","v":"1400","p":"Defender"},
      {"n":"RIAD Chadi","cn":"沙迪·里亚德","nick":"RIAD","c":"Crystal Palace FC (ENG)","h":186,"dob":"2003-06-17","v":"1500","p":"Defender"},
      {"n":"BELAMMARI Youssef","cn":"优素福·贝拉马里","nick":"BELAMMARI","c":"Al Ahly FC (EGY)","h":175,"dob":"1998-09-20","v":"120","p":"Defender"},
      {"n":"HALHAL Redouane","cn":"雷杜万·哈勒哈勒","nick":"HALHAL","c":"KV Mechelen (BEL)","h":189,"dob":"2003-05-03","v":"35","p":"Defender"},
      {"n":"SALAH EDDINE Anass","cn":"阿纳斯·萨拉赫丁","nick":"SALAH-EDDINE","c":"PSV Eindhoven (NED)","h":181,"dob":"2002-01-18","v":"200","p":"Defender"}
    ],
    "mf": [
      {"n":"AMRABAT Sofyan","cn":"索菲扬·阿姆拉巴特","nick":"AMRABAT","c":"Real Betis (ESP)","h":185,"dob":"1996-08-21","v":"1700","p":"Midfield"},
      {"n":"BOUADDI Ayyoub","cn":"阿尤布·布阿迪","nick":"BOUADDI","c":"Lille OSC (FRA)","h":185,"dob":"2007-02-10","v":"500","p":"Midfield"},
      {"n":"TALBI Chemsdine","cn":"舍姆斯丁·塔勒比","nick":"TALBI","c":"Sunderland AFC (ENG)","h":175,"dob":"2005-09-05","v":"800","p":"Midfield"},
      {"n":"OUNAHI Azzedine","cn":"阿泽丁·欧纳希","nick":"OUNAHI","c":"Girona FC (ESP)","h":182,"dob":"2000-04-19","v":"1000","p":"Midfield"},
      {"n":"SAIBARI Ismael","cn":"伊斯梅尔·赛巴里","nick":"SAIBARI","c":"PSV Eindhoven (NED)","h":185,"dob":"2001-01-28","v":"2700","p":"Midfield"},
      {"n":"EL MOURABET Samir","cn":"萨米尔·穆拉比特","nick":"EL MOURABET","c":"RC Strasbourg (FRA)","h":187,"dob":"2005-06-10","v":"5","p":"Midfield"},
      {"n":"YASSINE Gessime","cn":"杰西姆·亚辛","nick":"YASSINE","c":"RC Strasbourg (FRA)","h":172,"dob":"2005-11-22","v":"200","p":"Midfield"},
      {"n":"EL KHANNOUSS Bilal","cn":"比拉勒·汉努斯","nick":"EL KHANNOUSS","c":"VfB Stuttgart (GER)","h":180,"dob":"2004-10-05","v":"2800","p":"Midfield"},
      {"n":"EL AYNAOUI Neil","cn":"尼尔·艾纳维","nick":"EL AYNAOUI","c":"AS Roma (ITA)","h":185,"dob":"2001-02-07","v":"1500","p":"Midfield"}
    ],
    "fw": [
      {"n":"RAHIMI Sou«ane","cn":"苏菲安·拉希米","nick":"RAHIMI","c":"Al Ain FC (UAE)","h":180,"dob":"1996-02-06","v":"300","p":"Forward"},
      {"n":"DIAZ Brahim","cn":"卜拉欣·迪亚斯","nick":"BRAHIM","c":"Real Madrid C. F. (ESP)","h":170,"dob":"1999-03-08","v":"4000","p":"Forward"},
      {"n":"EZZALZOULI Abde","cn":"阿卜德·埃扎尔祖利","nick":"EZZALZOULI","c":"Real Betis (ESP)","h":177,"dob":"2001-12-17","v":"1200","p":"Forward"},
      {"n":"EL KAABI Ayoub","cn":"阿尤布·卡比","nick":"EL KAABI","c":"Olympiacos FC (GRE)","h":182,"dob":"1993-06-25","v":"400","p":"Forward"},
      {"n":"AMAIMOUNI Ayoub","cn":"阿尤布·阿迈穆尼","nick":"AMAIMOUNI","c":"Eintracht Frankfurt (GER)","h":179,"dob":"2004-11-30","v":"50","p":"Forward"}
    ]
  },
  "MEX": {
    "gk": [
      {"n":"RANGEL Raul","cn":"劳尔·兰赫尔","nick":"R. RANGEL","c":"CD Guadalajara (MEX)","h":190,"dob":"2000-02-25","v":"500","p":"Goalkeeper"},
      {"n":"ACEVEDO Carlos","cn":"卡洛斯·阿塞维多","nick":"C. ACEVEDO","c":"Club Santos Laguna (MEX)","h":185,"dob":"1996-04-19","v":"300","p":"Goalkeeper"},
      {"n":"OCHOA Guillermo","cn":"吉列尔莫·奥乔亚","nick":"G. OCHOA","c":"AEL Limassol (CYP)","h":185,"dob":"1985-07-13","v":"50","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"SANCHEZ Jorge","cn":"豪尔赫·桑切斯","nick":"J. SÁNCHEZ","c":"PAOK Saloniki (GRE)","h":176,"dob":"1997-10-12","v":"250","p":"Defender"},
      {"n":"MONTES Cesar","cn":"塞萨尔·蒙特斯","nick":"C. MONTES","c":"FC Lokomotiv Moscow (RUS)","h":191,"dob":"1997-02-24","v":"450","p":"Defender"},
      {"n":"ALVAREZ Edson","cn":"埃德松·阿尔瓦雷斯","nick":"E. ÁLVAREZ","c":"Fenerbahçe SK (TUR)","h":180,"dob":"1997-10-24","v":"2500","p":"Defender"},
      {"n":"VASQUEZ Johan","cn":"约翰·巴斯克斯","nick":"J. VÁSQUEZ","c":"Genoa CFC (ITA)","h":182,"dob":"1998-10-22","v":"1400","p":"Defender"},
      {"n":"REYES Israel","cn":"以色列·雷耶斯","nick":"I. REYES","c":"Club América (MEX)","h":181,"dob":"2000-05-23","v":"400","p":"Defender"},
      {"n":"CHAVEZ Mateo","cn":"马特奥·查韦斯","nick":"M. CHÁVEZ","c":"AZ Alkmaar (NED)","h":178,"dob":"2004-12-05","v":"300","p":"Defender"},
      {"n":"GALLARDO Jesus","cn":"赫苏斯·加利亚多","nick":"J. GALLARDO","c":"Deportivo Toluca FC (MEX)","h":174,"dob":"1994-08-15","v":"350","p":"Defender"}
    ],
    "mf": [
      {"n":"LIRA Erik","cn":"埃里克·利拉","nick":"E. LIRA","c":"CF Cruz Azul (MEX)","h":172,"dob":"2000-08-05","v":"800","p":"Midfield"},
      {"n":"ROMO Luis","cn":"路易斯·罗莫","nick":"L. ROMO","c":"CD Guadalajara (MEX)","h":183,"dob":"1995-05-06","v":"450","p":"Midfield"},
      {"n":"FIDALGO Alvaro","cn":"阿尔瓦罗·菲达尔戈","nick":"FIDALGO","c":"Real Betis (ESP)","h":175,"dob":"1997-09-04","v":"900","p":"Midfield"},
      {"n":"PINEDA Orbelin","cn":"奥贝林·皮内达","nick":"ORBELÍN","c":"AEK Athens (GRE)","h":169,"dob":"1996-03-24","v":"700","p":"Midfield"},
      {"n":"VARGAS Obed","cn":"奥贝德·巴尔加斯","nick":"O. VARGAS","c":"Atlético De Madrid (ESP)","h":175,"dob":"2005-05-08","v":"600","p":"Midfield"},
      {"n":"MORA Gilberto","cn":"吉尔伯托·莫拉","nick":"G. MORA","c":"Club Tijuana (MEX)","h":175,"dob":"2008-10-14","v":"300","p":"Midfield"},
      {"n":"CHAVEZ Luis","cn":"路易斯·查韦斯","nick":"L. CHÁVEZ","c":"FC Dynamo Moscow (RUS)","h":178,"dob":"1996-01-15","v":"800","p":"Midfield"},
      {"n":"GUTIERREZ Brian","cn":"布莱恩·古铁雷斯","nick":"B. GUTIÉRREZ","c":"CD Guadalajara (MEX)","h":178,"dob":"2003-06-17","v":"500","p":"Midfield"}
    ],
    "fw": [
      {"n":"JIMENEZ Raul","cn":"劳尔·希门尼斯","nick":"RAÚL","c":"Fulham FC (ENG)","h":188,"dob":"1991-05-05","v":"500","p":"Forward"},
      {"n":"VEGA Alexis","cn":"亚历克西斯·维加","nick":"A. VEGA","c":"Deportivo Toluca FC (MEX)","h":175,"dob":"1997-11-25","v":"1000","p":"Forward"},
      {"n":"GIMENEZ Santiago","cn":"圣地亚哥·希门尼斯","nick":"S. GIMENEZ","c":"AC Milan (ITA)","h":180,"dob":"2001-04-18","v":"3000","p":"Forward"},
      {"n":"GONZALEZ Armando","cn":"阿曼多·冈萨雷斯","nick":"A. GONZÁLEZ","c":"CD Guadalajara (MEX)","h":182,"dob":"2003-04-20","v":"150","p":"Forward"},
      {"n":"QUINONES Julian","cn":"胡利安·基尼奥内斯","nick":"J. QUIÑONES","c":"Al Qadsiah FC (KSA)","h":177,"dob":"1997-03-24","v":"1200","p":"Forward"},
      {"n":"HUERTA Cesar","cn":"塞萨尔·韦尔塔","nick":"C. HUERTA","c":"RSC Anderlecht (BEL)","h":171,"dob":"2000-03-12","v":"600","p":"Forward"},
      {"n":"MARTINEZ Guillermo","cn":"吉列尔莫·马丁内斯","nick":"G. MARTÍNEZ","c":"Pumas UNAM (MEX)","h":191,"dob":"1995-03-15","v":"200","p":"Forward"},
      {"n":"ALVARADO Roberto","cn":"罗伯托·阿尔瓦拉多","nick":"R. ALVARADO","c":"CD Guadalajara (MEX)","h":176,"dob":"1998-07-09","v":"650","p":"Forward"}
    ]
  },
  "NED": {
    "gk": [
      {"n":"VERBRUGGEN Bart","cn":"巴尔特·费布鲁亨","nick":"VERBRUGGEN","c":"Brighton & Hove Albion FC (ENG)","h":193,"dob":"2002-08-18","v":"3000","p":"Goalkeeper"},
      {"n":"ROEFS Robin","cn":"罗宾·鲁夫斯","nick":"ROEFS","c":"Sunderland AFC (ENG)","h":193,"dob":"2003-01-17","v":"400","p":"Goalkeeper"},
      {"n":"FLEKKEN Mark","cn":"马克·弗莱肯","nick":"FLEKKEN","c":"Bayer Leverkusen (GER)","h":195,"dob":"1993-06-13","v":"1000","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"TIMBER Jurrien","cn":"尤里恩·廷伯","nick":"J. TIMBER","c":"Arsenal FC (ENG)","h":179,"dob":"2001-06-17","v":"5500","p":"Defender"},
      {"n":"VAN DIJK Virgil","cn":"维吉尔·范戴克","nick":"VIRGIL","c":"Liverpool FC (ENG)","h":195,"dob":"1991-08-07","v":"2300","p":"Defender"},
      {"n":"AKE Nathan","cn":"纳坦·阿克","nick":"AKÉ","c":"Manchester City FC (ENG)","h":180,"dob":"1995-02-18","v":"2500","p":"Defender"},
      {"n":"VAN HECKE Jan Paul","cn":"扬·保罗·范赫克","nick":"VAN HECKE","c":"Brighton & Hove Albion FC (ENG)","h":189,"dob":"2000-08-06","v":"3200","p":"Defender"},
      {"n":"WIEFFER Mats","cn":"马茨·维弗","nick":"WIEFFER","c":"Brighton & Hove Albion FC (ENG)","h":189,"dob":"1999-11-16","v":"2500","p":"Defender"},
      {"n":"VAN DE VEN Micky","cn":"米基·范德文","nick":"VAN DE VEN","c":"Tottenham Hotspur FC (ENG)","h":193,"dob":"2001-04-19","v":"5000","p":"Defender"},
      {"n":"DUMFRIES Denzel","cn":"登泽尔·邓弗里斯","nick":"DUMFRIES","c":"FC Internazionale Milano (ITA)","h":188,"dob":"1996-04-18","v":"3500","p":"Defender"},
      {"n":"HATO Jorrel","cn":"约雷尔·哈托","nick":"HATO","c":"Chelsea FC (ENG)","h":182,"dob":"2006-07-03","v":"3500","p":"Defender"}
    ],
    "mf": [
      {"n":"DE ROON Marten","cn":"马滕·德罗恩","nick":"DE ROON","c":"Atalanta Bergamo (ITA)","h":186,"dob":"1991-03-29","v":"500","p":"Midfield"},
      {"n":"KLUIVERT Justin","cn":"贾斯汀·克鲁伊维特","nick":"KLUIVERT","c":"AFC Bournemouth (ENG)","h":173,"dob":"1999-05-05","v":"3500","p":"Midfield"},
      {"n":"GRAVENBERCH Ryan","cn":"瑞安·格拉芬贝赫","nick":"GRAVENBERCH","c":"Liverpool FC (ENG)","h":190,"dob":"2002-05-16","v":"7500","p":"Midfield"},
      {"n":"REIJNDERS Tijjani","cn":"蒂贾尼·赖因德斯","nick":"REIJNDERS","c":"Manchester City FC (ENG)","h":178,"dob":"1998-07-29","v":"6000","p":"Midfield"},
      {"n":"TIL Guus","cn":"古斯·蒂尔","nick":"TIL","c":"PSV Eindhoven (NED)","h":188,"dob":"1997-12-22","v":"1200","p":"Midfield"},
      {"n":"KOOPMEINERS Teun","cn":"特恩·科普迈纳斯","nick":"KOOPMEINERS","c":"Juventus FC (ITA)","h":185,"dob":"1998-02-28","v":"3500","p":"Midfield"},
      {"n":"DE JONG Frenkie","cn":"弗伦基·德容","nick":"F. DE JONG","c":"FC Barcelona (ESP)","h":181,"dob":"1997-12-05","v":"4500","p":"Midfield"},
      {"n":"TIMBER Quinten","cn":"昆滕·廷伯","nick":"Q. TIMBER","c":"Olympique Marseille (FRA)","h":176,"dob":"2001-06-17","v":"3000","p":"Midfield"}
    ],
    "fw": [
      {"n":"WEGHORST Wout","cn":"沃特·韦霍斯特","nick":"WEGHORST","c":"AFC Ajax (NED)","h":197,"dob":"1992-07-08","v":"400","p":"Forward"},
      {"n":"DEPAY Memphis","cn":"孟菲斯·德佩","nick":"MEMPHIS","c":"SC Corinthians (BRA)","h":178,"dob":"1994-02-13","v":"900","p":"Forward"},
      {"n":"GAKPO Cody","cn":"科迪·加克波","nick":"GAKPO","c":"Liverpool FC (ENG)","h":193,"dob":"1999-07-05","v":"7000","p":"Forward"},
      {"n":"LANG Noa","cn":"诺阿·朗","nick":"LANG","c":"Galatasaray SK (TUR)","h":176,"dob":"1999-06-17","v":"2500","p":"Forward"},
      {"n":"MALEN Donyell","cn":"唐耶尔·马伦","nick":"MALEN","c":"AS Roma (ITA)","h":178,"dob":"1999-01-19","v":"2500","p":"Forward"},
      {"n":"BROBBEY Brian","cn":"布莱恩·布罗比","nick":"BROBBEY","c":"Sunderland AFC (ENG)","h":181,"dob":"2002-01-02","v":"2200","p":"Forward"},
      {"n":"SUMMERVILLE Crysencio","cn":"克雷森西奥·萨默维尔","nick":"SUMMERVILLE","c":"West Ham United FC (ENG)","h":172,"dob":"2001-10-30","v":"2200","p":"Forward"}
    ]
  },
  "NOR": {
    "gk": [
      {"n":"NYLAND Orjan","cn":"厄尔扬·尼兰","nick":"NYLAND","c":"Sevilla FC (ESP)","h":192,"dob":"1990-10-09","v":"90","p":"Goalkeeper"},
      {"n":"TANGVIK Sander","cn":"桑德·唐维克","nick":"TANGVIK","c":"Hamburger SV (GER)","h":193,"dob":"2002-11-29","v":"350","p":"Goalkeeper"},
      {"n":"SELVIK Egil","cn":"埃吉尔·塞尔维克","nick":"SELVIK","c":"Watford FC (ENG)","h":187,"dob":"1997-07-30","v":"150","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"AJER Kristoffer","cn":"克里斯托弗·阿耶尔","nick":"VASSBAKK AJER","c":"Brentford FC (ENG)","h":198,"dob":"1998-04-17","v":"1800","p":"Defender"},
      {"n":"OSTIGARD Leo","cn":"莱奥·厄斯蒂高","nick":"ØSTIGÅRD","c":"Genoa CFC (ITA)","h":183,"dob":"1999-11-28","v":"1000","p":"Defender"},
      {"n":"MOLLER WOLFE David","cn":"大卫·默勒·沃尔夫","nick":"MØLLER WOLFE","c":"Wolverhampton Wanderers FC (ENG)","h":185,"dob":"2002-04-23","v":"900","p":"Defender"},
      {"n":"BJORKAN Fredrik Andre","cn":"弗雷德里克·安德烈·比约坎","nick":"BJØRKAN","c":"FK Bodø/Glimt (NOR)","h":180,"dob":"1998-08-21","v":"250","p":"Defender"},
      {"n":"HOLMGREN PEDERSEN Marcus","cn":"马库斯·霍姆格伦·佩德森","nick":"HOLMGREN","c":"Torino FC (ITA)","h":184,"dob":"2000-07-16","v":"300","p":"Defender"},
      {"n":"HEGGEM Torbjorn","cn":"托比约恩·赫格姆","nick":"HEGGEM","c":"Bologna FC (ITA)","h":192,"dob":"1999-12-01","v":"120","p":"Defender"},
      {"n":"LANGAS Sondre","cn":"松德雷·朗奥斯","nick":"LANGÅS","c":"Derby County FC (ENG)","h":190,"dob":"2001-02-02","v":"350","p":"Defender"},
      {"n":"FALCHENER Henrik","cn":"亨里克·法尔谢纳","nick":"FALCHENER","c":"Viking Stavanger (NOR)","h":194,"dob":"2003-08-05","v":"250","p":"Defender"}
    ],
    "mf": [
      {"n":"THORSBY Morten","cn":"莫滕·托斯比","nick":"THORSBY","c":"US Cremonese (ITA)","h":188,"dob":"1996-05-05","v":"300","p":"Midfield"},
      {"n":"BERG Patrick","cn":"帕特里克·贝格","nick":"BERG","c":"FK Bodø/Glimt (NOR)","h":178,"dob":"1997-11-24","v":"600","p":"Midfield"},
      {"n":"BERGE Sander","cn":"桑德·贝格","nick":"BERGE","c":"Fulham FC (ENG)","h":195,"dob":"1998-02-14","v":"2500","p":"Midfield"},
      {"n":"ODEGAARD Martin","cn":"马丁·厄德高","nick":"ØDEGAARD","c":"Arsenal FC (ENG)","h":178,"dob":"1998-12-17","v":"8500","p":"Midfield"},
      {"n":"AURSNES Fredrik","cn":"弗雷德里克·奥尔斯内斯","nick":"AURSNES","c":"SL Ben«ca (POR)","h":181,"dob":"1995-10-12","v":"2000","p":"Midfield"},
      {"n":"THORSTVEDT Kristian","cn":"克里斯蒂安·托斯特维特","nick":"THORSTVEDT","c":"US Sassuolo (ITA)","h":189,"dob":"1999-03-13","v":"900","p":"Midfield"},
      {"n":"AASGAARD Thelo","cn":"特洛·奥斯加德","nick":"AASGAARD","c":"Rangers FC (SCO)","h":188,"dob":"2002-02-05","v":"200","p":"Midfield"},
      {"n":"SCHJELDERUP Andreas","cn":"安德烈亚斯·谢尔德鲁普","nick":"SCHJELDERUP","c":"SL Ben«ca (POR)","h":177,"dob":"2004-01-06","v":"1500","p":"Midfield"},
      {"n":"BOBB Oscar","cn":"奥斯卡·博布","nick":"BOBB","c":"Fulham FC (ENG)","h":177,"dob":"2003-12-07","v":"2500","p":"Midfield"},
      {"n":"HAUGE Jens Petter","cn":"延斯·彼得·海于格","nick":"HAUGE","c":"FK Bodø/Glimt (NOR)","h":184,"dob":"1999-12-10","v":"400","p":"Midfield"}
    ],
    "fw": [
      {"n":"SORLOTH Alexander","cn":"亚历山大·瑟洛特","nick":"SØRLOTH","c":"Atlético De Madrid (ESP)","h":196,"dob":"1995-05-12","v":"2500","p":"Forward"},
      {"n":"HAALAND Erling","cn":"埃尔林·哈兰德","nick":"BRAUT HAALAND","c":"Manchester City FC (ENG)","h":195,"dob":"2000-07-21","v":"18000","p":"Forward"},
      {"n":"STRAND LARSEN Jorgen","cn":"约尔根·斯特兰德·拉森","nick":"STRAND LARSEN","c":"Crystal Palace FC (ENG)","h":193,"dob":"2000-06-02","v":"3000","p":"Forward"},
      {"n":"NUSA Antonio","cn":"安东尼奥·努萨","nick":"NUSA","c":"RB Leipzig (GER)","h":183,"dob":"2005-04-17","v":"2800","p":"Forward"},
      {"n":"RYERSON Julian","cn":"尤利安·吕尔松","nick":"RYERSON","c":"Borussia Dortmund (GER)","h":186,"dob":"1997-11-17","v":"2000","p":"Forward"}
    ]
  },
  "NZL": {
    "gk": [
      {"n":"CROCOMBE Max","cn":"马克斯·克罗科姆","nick":"CROCOMBE","c":"Millwall FC (ENG)","h":190,"dob":"1993-12-08","v":"23","p":"Goalkeeper"},
      {"n":"PAULSEN Alex","cn":"亚历克斯·保尔森","nick":"","c":"Lechia Gdańsk (POL)","h":193,"dob":"2002-04-07","v":"200","p":"Goalkeeper"},
      {"n":"WOUD Michael","cn":"迈克尔·沃德","nick":"","c":"Auckland FC (NZL)","h":196,"dob":"1999-01-16","v":"20","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"PAYNE Tim","cn":"蒂姆·佩恩","nick":"","c":"Wellington Phoenix FC (NZL)","h":179,"dob":"1994-10-01","v":"45","p":"Defender"},
      {"n":"DE VRIES Francis","cn":"弗朗西斯·德弗里斯","nick":"","c":"Auckland FC (NZL)","h":181,"dob":"1994-11-28","v":"60","p":"Defender"},
      {"n":"BINDON Tyler","cn":"泰勒·宾登","nick":"","c":"She  eld United FC (ENG)","h":190,"dob":"2005-01-27","v":"120","p":"Defender"},
      {"n":"BOXALL Michael","cn":"迈克尔·博克索尔","nick":"","c":"Minnesota United FC (USA)","h":191,"dob":"1988-08-18","v":"15","p":"Defender"},
      {"n":"CACACE Liberato","cn":"利贝拉托·卡卡切","nick":"","c":"Wrexham AFC (WAL)","h":182,"dob":"2000-09-27","v":"300","p":"Defender"},
      {"n":"PIJNAKER Nando","cn":"南多·派纳克","nick":"","c":"Auckland FC (NZL)","h":185,"dob":"1999-02-25","v":"50","p":"Defender"},
      {"n":"SURMAN Finn","cn":"芬恩·苏尔曼","nick":"","c":"Portland Timbers (USA)","h":190,"dob":"2003-09-23","v":"80","p":"Defender"},
      {"n":"ELLIOT Callan","cn":"卡伦·埃利奥特","nick":"","c":"Auckland FC (NZL)","h":177,"dob":"1999-07-07","v":"30","p":"Defender"},
      {"n":"SMITH Tommy","cn":"汤米·史密斯","nick":"","c":"Braintree Town FC (ENG)","h":188,"dob":"1990-03-31","v":"10","p":"Defender"}
    ],
    "mf": [
      {"n":"BELL Joe","cn":"乔·贝尔","nick":"","c":"Viking Stavanger (NOR)","h":182,"dob":"1999-04-27","v":"200","p":"Midfield"},
      {"n":"GARBETT Matthew","cn":"马修·加伯特","nick":"","c":"Peterborough United FC (ENG)","h":192,"dob":"2002-04-13","v":"40","p":"Midfield"},
      {"n":"STAMENIC Marko","cn":"马尔科·斯塔梅尼奇","nick":"","c":"Swansea City AFC (WAL)","h":188,"dob":"2002-02-19","v":"300","p":"Midfield"},
      {"n":"SINGH Sarpreet","cn":"萨普里特·辛格","nick":"","c":"Wellington Phoenix FC (NZL)","h":180,"dob":"1999-02-20","v":"30","p":"Midfield"},
      {"n":"JUST Elijah","cn":"以利亚·贾斯特","nick":"","c":"Motherwell FC (SCO)","h":176,"dob":"2000-01-05","v":"40","p":"Midfield"},
      {"n":"RUFER Alex","cn":"亚历克斯·鲁弗","nick":"","c":"Wellington Phoenix FC (NZL)","h":180,"dob":"1996-12-06","v":"60","p":"Midfield"},
      {"n":"OLD Ben","cn":"本·奥尔德","nick":"","c":"AS Saint-Etienne (FRA)","h":173,"dob":"2002-08-13","v":"70","p":"Midfield"},
      {"n":"McCOWATT Callum","cn":"卡勒姆·麦考瓦特","nick":"MCCOWATT","c":"Silkeborg IF (DEN)","h":180,"dob":"1999-04-30","v":"30","p":"Midfield"},
      {"n":"THOMAS Ryan","cn":"瑞安·托马斯","nick":"","c":"PEC Zwolle (NED)","h":176,"dob":"1994-12-20","v":"70","p":"Midfield"},
      {"n":"BAYLISS Lachlan","cn":"拉克兰·贝利斯","nick":"","c":"Newcastle United Jets FC (AUS)","h":178,"dob":"2002-07-24","v":"35","p":"Midfield"}
    ],
    "fw": [
      {"n":"WOOD Chris","cn":"克里斯·伍德","nick":"","c":"Nottingham Forest FC (ENG)","h":191,"dob":"1991-07-12","v":"1000","p":"Forward"},
      {"n":"BARBAROUSES Kosta","cn":"科斯塔·巴巴鲁塞斯","nick":"BARBAROUSES","c":"WS Wanderers FC (AUS)","h":171,"dob":"1990-02-19","v":"35","p":"Forward"},
      {"n":"WAINE Ben","cn":"本·韦恩","nick":"","c":"Port Vale FC (ENG)","h":185,"dob":"2001-11-06","v":"55","p":"Forward"},
      {"n":"RANDALL Jesse","cn":"杰西·兰德尔","nick":"","c":"Auckland FC (NZL)","h":176,"dob":"2002-08-19","v":"35","p":"Forward"}
    ]
  },
  "PAN": {
    "gk": [
      {"n":"MEJIA Luis","cn":"路易斯·梅希亚","nick":"MEJÍA","c":"Club Nacional (URU)","h":193,"dob":"1991-03-16","v":"60","p":"Goalkeeper"},
      {"n":"SAMUDIO Cesar","cn":"塞萨尔·萨穆迪奥","nick":"SAMUDIO","c":"CD Marathón (HON)","h":189,"dob":"1994-02-23","v":"40","p":"Goalkeeper"},
      {"n":"MOSQUERA Orlando","cn":"奥兰多·莫斯克拉","nick":"MOSQUERA","c":"Al Fayha FC (KSA)","h":191,"dob":"1994-12-25","v":"100","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"BLACKMAN Cesar","cn":"塞萨尔·布莱克曼","nick":"BLACKMAN","c":"ŠK Slovan Bratislava (SVK)","h":174,"dob":"1998-02-04","v":"250","p":"Defender"},
      {"n":"CORDOBA Jose","cn":"何塞·科尔多瓦","nick":"CORDOBA","c":"Norwich City FC (ENG)","h":189,"dob":"2001-03-06","v":"480","p":"Defender"},
      {"n":"ESCOBAR Fidel","cn":"菲德尔·埃斯科瓦尔","nick":"F. ESCOBAR","c":"Deportivo Saprissa (CRC)","h":184,"dob":"1995-09-01","v":"35","p":"Defender"},
      {"n":"FARINA Edgardo","cn":"埃德加多·法里尼亚","nick":"FARIÑA","c":"FC Pari Nizhny Novgorod (RUS)","h":195,"dob":"2001-10-19","v":"80","p":"Defender"},
      {"n":"RAMOS Jiovany","cn":"希奥瓦尼·拉莫斯","nick":"RAMOS","c":"Puerto Cabello CF (VEN)","h":188,"dob":"1997-01-26","v":"30","p":"Defender"},
      {"n":"HARVEY Carlos","cn":"卡洛斯·哈维","nick":"HARVEY","c":"Minnesota United FC (USA)","h":184,"dob":"2000-03-02","v":"60","p":"Defender"},
      {"n":"DAVIS Eric","cn":"埃里克·戴维斯","nick":"DAVIS","c":"CD Plaza Amador (PAN)","h":180,"dob":"1991-03-31","v":"5","p":"Defender"},
      {"n":"ANDRADE Andres","cn":"安德烈斯·安德拉德","nick":"ANDRADE","c":"LASK Linz (AUT)","h":187,"dob":"1998-10-16","v":"200","p":"Defender"},
      {"n":"MURILLO Amir","cn":"阿米尔·穆里略","nick":"A. MURILLO","c":"Beşiktaş JK (TUR)","h":185,"dob":"1996-11-02","v":"1000","p":"Defender"},
      {"n":"MILLER Roderick","cn":"罗德里克·米勒","nick":"MILLER","c":"Turan Tovuz (AZE)","h":190,"dob":"1992-03-04","v":"60","p":"Defender"},
      {"n":"GUTIERREZ Jorge","cn":"豪尔赫·古铁雷斯","nick":"GUTIÉRREZ","c":"Deportivo La Guaira (VEN)","h":171,"dob":"1998-01-09","v":"40","p":"Defender"}
    ],
    "mf": [
      {"n":"MARTINEZ Cristian","cn":"克里斯蒂安·马丁内斯","nick":"MARTÍNEZ","c":"Hapoel Kiryat Shmona FC (ISR)","h":170,"dob":"1997-06-02","v":"10","p":"Midfield"},
      {"n":"RODRIGUEZ Jose Luis","cn":"何塞·路易斯·罗德里格斯","nick":"J.L. RODRÍGUEZ","c":"FC Juárez (MEX)","h":180,"dob":"1998-06-19","v":"200","p":"Midfield"},
      {"n":"CARRASQUILLA Adalberto","cn":"阿达尔贝托·卡拉斯基亚","nick":"CARRASQUILLA","c":"Pumas UNAM (MEX)","h":171,"dob":"1998-11-28","v":"380","p":"Midfield"},
      {"n":"DIAZ Ismael","cn":"伊斯梅尔·迪亚斯","nick":"ISMAEL","c":"Club León (MEX)","h":184,"dob":"1997-12-05","v":"80","p":"Midfield"},
      {"n":"BARCENAS Edgar Yoel","cn":"埃德加·约埃尔·巴尔塞纳斯","nick":"BÁRCENAS","c":"Mazatlán FC (MEX)","h":175,"dob":"1993-10-23","v":"80","p":"Midfield"},
      {"n":"QUINTERO Alberto","cn":"阿尔贝托·金特罗","nick":"QUINTERO","c":"CD Plaza Amador (PAN)","h":165,"dob":"1987-12-18","v":"10","p":"Midfield"},
      {"n":"GODOY Anibal","cn":"阿尼巴尔·戈多伊","nick":"GODOY","c":"San Diego FC (USA)","h":184,"dob":"1990-10-02","v":"15","p":"Midfield"},
      {"n":"YANIS Cesar","cn":"塞萨尔·亚尼斯","nick":"YANIS","c":"CD Cobresal (CHI)","h":160,"dob":"1996-01-28","v":"25","p":"Midfield"}
    ],
    "fw": [
      {"n":"RODRIGUEZ Tomas","cn":"托马斯·罗德里格斯","nick":"T. RODRÍGUEZ","c":"Deportivo Saprissa (CRC)","h":183,"dob":"1999-09-03","v":"40","p":"Forward"},
      {"n":"FAJARDO Jose","cn":"何塞·法哈尔多","nick":"FAJARDO","c":"CD Universidad Católica (ECU)","h":184,"dob":"1993-08-18","v":"80","p":"Forward"},
      {"n":"WATERMAN Cecilio","cn":"塞西利奥·沃特曼","nick":"WATERMAN","c":"CD Universidad De Concepción (CHI)","h":180,"dob":"1991-04-13","v":"30","p":"Forward"},
      {"n":"LONDONO Azarias","cn":"阿萨里亚斯·隆多尼奥","nick":"LONDOÑO","c":"CD Universidad Católica (ECU)","h":185,"dob":"2001-06-21","v":"50","p":"Forward"}
    ]
  },
  "PAR": {
    "gk": [
      {"n":"FERNANDEZ Gatito","cn":"加蒂托·费尔南德斯","nick":"FERNANDEZ","c":"Cerro Porteño (PAR)","h":191,"dob":"1988-03-29","v":"25","p":"Goalkeeper"},
      {"n":"GILL Orlando","cn":"奥兰多·希尔","nick":"O. GILL","c":"CA San Lorenzo (ARG)","h":190,"dob":"2000-11-06","v":"80","p":"Goalkeeper"},
      {"n":"OLVEIRA Gaston","cn":"加斯顿·奥尔维拉","nick":"OLVEIRA","c":"Club Olimpia (PAR)","h":191,"dob":"1993-04-21","v":"60","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"VELAZQUEZ Gustavo","cn":"古斯塔沃·贝拉斯克斯","nick":"VELAZQUEZ","c":"Cerro Porteño (PAR)","h":189,"dob":"1991-04-17","v":"80","p":"Defender"},
      {"n":"ALDERETE Omar","cn":"奥马尔·阿尔德雷特","nick":"ALDERETE","c":"Sunderland AFC (ENG)","h":190,"dob":"1996-12-26","v":"800","p":"Defender"},
      {"n":"CACERES Juan Jose","cn":"胡安·何塞·卡塞雷斯","nick":"CACERES","c":"FC Dynamo Moscow (RUS)","h":187,"dob":"2000-01-06","v":"150","p":"Defender"},
      {"n":"BALBUENA Fabian","cn":"法比安·巴尔布埃纳","nick":"BALBUENA","c":"Grêmio FBPA (BRA)","h":188,"dob":"1991-08-23","v":"200","p":"Defender"},
      {"n":"ALONSO Junior","cn":"儒尼奥尔·阿隆索","nick":"ALONSO","c":"Atlético Mineiro (BRA)","h":184,"dob":"1993-09-02","v":"300","p":"Defender"},
      {"n":"CANALE Jose","cn":"何塞·卡纳莱","nick":"CANALE","c":"CA Lanús (ARG)","h":192,"dob":"1996-07-20","v":"100","p":"Defender"},
      {"n":"GOMEZ Gustavo","cn":"古斯塔沃·戈麦斯","nick":"G. GOMEZ","c":"SE Palmeiras (BRA)","h":179,"dob":"1993-06-05","v":"500","p":"Defender"},
      {"n":"MAIDANA Alexandro","cn":"亚历山德罗·迈达纳","nick":"MAIDANA","c":"CA Talleres (ARG)","h":173,"dob":"2005-07-26","v":"30","p":"Defender"}
    ],
    "mf": [
      {"n":"SOSA Ramon","cn":"拉蒙·索萨","nick":"SOSA","c":"SE Palmeiras (BRA)","h":178,"dob":"1999-08-31","v":"1200","p":"Midfield"},
      {"n":"GOMEZ Diego","cn":"迭戈·戈麦斯","nick":"D. GOMEZ","c":"Brighton & Hove Albion FC (ENG)","h":183,"dob":"2003-03-27","v":"1400","p":"Midfield"},
      {"n":"ALMIRON Miguel","cn":"米格尔·阿尔米隆","nick":"M. ALMIRON","c":"Atlanta United FC (USA)","h":178,"dob":"1994-10-02","v":"1000","p":"Midfield"},
      {"n":"MAURICIO","cn":"毛里西奥","nick":"MAURICIO","c":"SE Palmeiras (BRA)","h":175,"dob":"2001-06-22","v":"1200","p":"Midfield"},
      {"n":"CUBAS Andres","cn":"安德烈斯·库瓦斯","nick":"CUBAS","c":"Vancouver Whitecaps FC (CAN)","h":166,"dob":"1996-11-05","v":"400","p":"Midfield"},
      {"n":"BOBADILLA Damian","cn":"达米安·博瓦迪利亚","nick":"BOBADILLA","c":"São Paulo FC (BRA)","h":180,"dob":"2001-11-07","v":"400","p":"Midfield"},
      {"n":"OJEDA Braian","cn":"布莱安·奥赫达","nick":"OJEDA","c":"Orlando City SC (USA)","h":173,"dob":"2000-06-27","v":"400","p":"Midfield"},
      {"n":"GALARZA Matias","cn":"马蒂亚斯·加拉尔萨","nick":"GALARZA","c":"Atlanta United FC (USA)","h":175,"dob":"2002-11-02","v":"250","p":"Midfield"},
      {"n":"CABALLERO Gustavo","cn":"古斯塔沃·卡瓦列罗","nick":"CABALLERO","c":"Portsmouth FC (ENG)","h":189,"dob":"2001-09-21","v":"50","p":"Midfield"}
    ],
    "fw": [
      {"n":"SANABRIA Antonio","cn":"安东尼奥·萨纳夫里亚","nick":"SANABRIA","c":"US Cremonese (ITA)","h":180,"dob":"1996-04-03","v":"280","p":"Forward"},
      {"n":"ROMERO GAMARRA Alejandro","cn":"亚历杭德罗·罗梅罗·加马拉","nick":"R. GAMARRA","c":"Al Ain FC (UAE)","h":165,"dob":"1995-11-01","v":"450","p":"Forward"},
      {"n":"ARCE Alex","cn":"亚历克斯·阿尔塞","nick":"ARCE","c":"CS Independiente Rivadavia (ARG)","h":188,"dob":"1995-06-16","v":"100","p":"Forward"},
      {"n":"ENCISO Julio","cn":"胡利奥·恩西索","nick":"ENCISO","c":"RC Strasbourg (FRA)","h":168,"dob":"2004-01-23","v":"2200","p":"Forward"},
      {"n":"AVALOS Gabriel","cn":"加夫列尔·阿瓦洛斯","nick":"AVALOS","c":"CA Independiente (ARG)","h":185,"dob":"1990-12-10","v":"100","p":"Forward"},
      {"n":"PITTA Isidro","cn":"伊西德罗·皮塔","nick":"PITTA","c":"Red Bull Bragantino (BRA)","h":185,"dob":"1999-08-14","v":"750","p":"Forward"}
    ]
  },
  "POR": {
    "gk": [
      {"n":"DIOGO COSTA","cn":"迪奥戈·科斯塔","nick":"DIOGO COSTA","c":"FC Porto (POR)","h":188,"dob":"1999-09-19","v":"4000","p":"Goalkeeper"},
      {"n":"JOSE SA","cn":"若泽·萨","nick":"JOSÉ SÁ","c":"Wolverhampton Wanderers FC (ENG)","h":192,"dob":"1993-01-17","v":"700","p":"Goalkeeper"},
      {"n":"RUI SILVA","cn":"鲁伊·席尔瓦","nick":"RUI SILVA","c":"Sporting CP (POR)","h":191,"dob":"1994-07-02","v":"700","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"NELSON SEMEDO","cn":"内尔松·塞梅多","nick":"N. SEMEDO","c":"Fenerbahçe SK (TUR)","h":179,"dob":"1993-11-16","v":"900","p":"Defender"},
      {"n":"RUBEN DIAS","cn":"鲁本·迪亚斯","nick":"RÚBEN DIAS","c":"Manchester City FC (ENG)","h":187,"dob":"1997-05-14","v":"6500","p":"Defender"},
      {"n":"TOMAS ARAUJO","cn":"托马斯·阿劳若","nick":"TOMÁS A.","c":"SL Ben«ca (POR)","h":187,"dob":"2002-05-16","v":"3200","p":"Defender"},
      {"n":"DIOGO DALOT","cn":"迪奥戈·达洛特","nick":"DALOT","c":"Manchester United FC (ENG)","h":184,"dob":"1999-03-18","v":"3000","p":"Defender"},
      {"n":"RENATO VEIGA","cn":"雷纳托·韦加","nick":"RENATO VEIGA","c":"Villarreal CF (ESP)","h":188,"dob":"2003-07-29","v":"2500","p":"Defender"},
      {"n":"GONCALO INACIO","cn":"贡萨洛·伊纳西奥","nick":"G. INÁCIO","c":"Sporting CP (POR)","h":185,"dob":"2001-08-25","v":"4500","p":"Defender"},
      {"n":"JOAO CANCELO","cn":"若昂·坎塞洛","nick":"JOÃO CANCELO","c":"FC Barcelona (ESP)","h":173,"dob":"1994-05-27","v":"1500","p":"Defender"},
      {"n":"SAMU COSTA","cn":"萨穆·科斯塔","nick":"SAMÚ","c":"RCD Mallorca (ESP)","h":185,"dob":"2000-11-27","v":"1500","p":"Defender"},
      {"n":"NUNO MENDES","cn":"努诺·门德斯","nick":"N. MENDES","c":"Paris Saint-Germain (FRA)","h":177,"dob":"2002-06-19","v":"7000","p":"Defender"}
    ],
    "mf": [
      {"n":"MATHEUS NUNES","cn":"马特乌斯·努内斯","nick":"MATHEUS N.","c":"Manchester City FC (ENG)","h":183,"dob":"1998-08-27","v":"3500","p":"Midfield"},
      {"n":"BRUNO FERNANDES","cn":"布鲁诺·费尔南德斯","nick":"B. FERNANDES","c":"Manchester United FC (ENG)","h":183,"dob":"1994-08-09","v":"5000","p":"Midfield"},
      {"n":"BERNARDO SILVA","cn":"贝尔纳多·席尔瓦","nick":"BERNARDO","c":"Manchester City FC (ENG)","h":173,"dob":"1994-10-08","v":"3800","p":"Midfield"},
      {"n":"JOAO NEVES","cn":"若昂·内维斯","nick":"JOÃO NEVES","c":"Paris Saint-Germain (FRA)","h":171,"dob":"2004-09-27","v":"8000","p":"Midfield"},
      {"n":"RUBEN NEVES","cn":"鲁本·内维斯","nick":"R. NEVES","c":"Al Hilal SC (KSA)","h":183,"dob":"1997-03-13","v":"2500","p":"Midfield"},
      {"n":"VITINHA","cn":"维蒂尼亚","nick":"VITINHA","c":"Paris Saint-Germain (FRA)","h":170,"dob":"2000-02-13","v":"8000","p":"Midfield"}
    ],
    "fw": [
      {"n":"CRISTIANO RONALDO","cn":"克里斯蒂亚诺·罗纳尔多","nick":"RONALDO","c":"Al Nassr FC (KSA)","h":185,"dob":"1985-05-02","v":"1200","p":"Forward"},
      {"n":"GONCALO RAMOS","cn":"贡萨洛·拉莫斯","nick":"G. RAMOS","c":"Paris Saint-Germain (FRA)","h":185,"dob":"2001-06-20","v":"4000","p":"Forward"},
      {"n":"JOAO FELIX","cn":"若昂·费利克斯","nick":"JOÃO FÉLIX","c":"Al Nassr FC (KSA)","h":179,"dob":"1999-10-11","v":"2000","p":"Forward"},
      {"n":"FRANCISCO TRINCAO","cn":"弗朗西斯科·特林康","nick":"TRINCÃO","c":"Sporting CP (POR)","h":184,"dob":"1999-12-29","v":"3500","p":"Forward"},
      {"n":"RAFAEL LEAO","cn":"拉斐尔·莱昂","nick":"RAFA LEÃO","c":"AC Milan (ITA)","h":188,"dob":"1999-10-06","v":"7000","p":"Forward"},
      {"n":"PEDRO NETO","cn":"佩德罗·内托","nick":"NETO","c":"Chelsea FC (ENG)","h":174,"dob":"2000-09-03","v":"5000","p":"Forward"},
      {"n":"GONCALO GUEDES","cn":"贡萨洛·格德斯","nick":"G. GUEDES","c":"Real Sociedad (ESP)","h":179,"dob":"1996-11-29","v":"1100","p":"Forward"},
      {"n":"FRANCISCO CONCEICAO","cn":"弗朗西斯科·孔塞桑","nick":"F. CONCEIÇÃO","c":"Juventus FC (ITA)","h":166,"dob":"2002-12-14","v":"2800","p":"Forward"}
    ]
  },
  "QAT": {
    "gk": [
      {"n":"MAHMOUD ABUNADA","cn":"马哈茂德·阿布纳达","nick":"ABUNADA","c":"Al Rayyan SC (QAT)","h":185,"dob":"2000-05-02","v":"30","p":"Goalkeeper"},
      {"n":"SALAH ZAKARIA","cn":"萨拉赫·扎卡里亚","nick":"SALAH","c":"Al Duhail SC (QAT)","h":186,"dob":"1999-04-24","v":"50","p":"Goalkeeper"},
      {"n":"MESHAAL BARSHAM","cn":"梅沙尔·巴沙姆","nick":"BARSHAM","c":"Al Sadd SC (QAT)","h":180,"dob":"1998-02-14","v":"85","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"PEDRO MIGUEL","cn":"佩德罗·米格尔","nick":"PEDRO","c":"Al Sadd SC (QAT)","h":180,"dob":"1990-06-08","v":"20","p":"Defender"},
      {"n":"LUCAS MENDES","cn":"卢卡斯·门德斯","nick":"L.MENDES","c":"Al Wakrah SC (QAT)","h":179,"dob":"1990-03-07","v":"80","p":"Defender"},
      {"n":"ISSA LAYE","cn":"伊萨·拉耶","nick":"GUEYE","c":"Al Arabi SC (QAT)","h":178,"dob":"1997-12-22","v":"40","p":"Defender"},
      {"n":"JASSEM GABER","cn":"贾西姆·加贝尔","nick":"JASSEM","c":"Al Rayyan SC (QAT)","h":181,"dob":"2002-02-20","v":"70","p":"Defender"},
      {"n":"AYOUB ALOUI","cn":"阿尤布·阿卢伊","nick":"AYOUB","c":"Al Gharafa SC (QAT)","h":181,"dob":"2005-11-03","v":"30","p":"Defender"},
      {"n":"HOMAM AHMED","cn":"胡马姆·艾哈迈德","nick":"HOMAM","c":"Cultural Leonesa (ESP)","h":188,"dob":"1999-08-25","v":"120","p":"Defender"},
      {"n":"BOUALEM KHOUKHI","cn":"布阿莱姆·胡赫","nick":"KHOUKHI","c":"Al Sadd SC (QAT)","h":185,"dob":"1990-09-07","v":"25","p":"Defender"},
      {"n":"SULTAN ALBRAKE","cn":"苏丹·布拉克","nick":"SULTAN","c":"Al Duhail SC (QAT)","h":178,"dob":"1996-07-04","v":"60","p":"Defender"},
      {"n":"ALHASHMI ALHUSSEIN","cn":"哈希米·侯赛因","nick":"ALHASHMI","c":"Al Arabi SC (QAT)","h":182,"dob":"2003-08-15","v":"30","p":"Defender"}
    ],
    "mf": [
      {"n":"ABDULAZIZ HATEM","cn":"阿卜杜勒阿齐兹·哈特姆","nick":"A. AZIZ","c":"Al Rayyan SC (QAT)","h":179,"dob":"1990-01-01","v":"150","p":"Midfield"},
      {"n":"KARIM BOUDIAF","cn":"卡里姆·布迪亚夫","nick":"KARIM","c":"Al Duhail SC (QAT)","h":190,"dob":"1990-09-16","v":"120","p":"Midfield"},
      {"n":"AHMED ALGANEHI","cn":"艾哈迈德·加内希","nick":"A. ALGANEHI","c":"Al Gharafa SC (QAT)","h":175,"dob":"2000-09-22","v":"55","p":"Midfield"},
      {"n":"AHMED FATHY","cn":"艾哈迈德·法蒂","nick":"A. FATHY","c":"Al Arabi SC (QAT)","h":171,"dob":"1993-01-25","v":"80","p":"Midfield"},
      {"n":"ASSIM MADIBO","cn":"阿西姆·马迪博","nick":"MADIBO","c":"Al Wakrah SC (QAT)","h":168,"dob":"1996-10-22","v":"100","p":"Midfield"}
    ],
    "fw": [
      {"n":"AHMED ALAAELDIN","cn":"艾哈迈德·阿拉丁","nick":"ALAAELDIN","c":"Al Rayyan SC (QAT)","h":179,"dob":"1993-01-31","v":"40","p":"Forward"},
      {"n":"EDMILSON JUNIOR","cn":"埃德米尔森·儒尼奥尔","nick":"EDMILSON JR.","c":"Al Duhail SC (QAT)","h":180,"dob":"1994-08-19","v":"250","p":"Forward"},
      {"n":"MOHAMMED MUNTARI","cn":"穆罕默德·蒙塔里","nick":"MUNTARI","c":"Al Gharafa SC (QAT)","h":192,"dob":"1993-12-20","v":"100","p":"Forward"},
      {"n":"HASSAN ALHAYDOS","cn":"哈桑·海多斯","nick":"ALHAYDOS","c":"Al Sadd SC (QAT)","h":174,"dob":"1990-11-12","v":"150","p":"Forward"},
      {"n":"AKRAM AFIF","cn":"阿克拉姆·阿菲夫","nick":"AFIF","c":"Al Sadd SC (QAT)","h":176,"dob":"1996-11-18","v":"800","p":"Forward"},
      {"n":"YUSUF ABDURISAG","cn":"优素福·阿卜杜里萨格","nick":"YUSUF","c":"Al Wakrah SC (QAT)","h":171,"dob":"1999-06-08","v":"30","p":"Forward"},
      {"n":"ALMOEZ ALI","cn":"阿尔莫埃斯·阿里","nick":"ALMOEZ","c":"Al Duhail SC (QAT)","h":180,"dob":"1996-08-19","v":"300","p":"Forward"},
      {"n":"TAHSIN JAMSHID","cn":"塔赫辛·贾姆希德","nick":"TAHSIN","c":"Al Duhail SC (QAT)","h":166,"dob":"2006-06-16","v":"60","p":"Forward"},
      {"n":"MOHAMED MANAI","cn":"穆罕默德·马纳伊","nick":"MANAI","c":"Al Shamal SC (QAT)","h":180,"dob":"2002-10-25","v":"30","p":"Forward"}
    ]
  },
  "RSA": {
    "gk": [
      {"n":"WILLIAMS Ronwen","cn":"龙文·威廉斯","nick":"WILLIAMS","c":"Mamelodi Sundowns FC (RSA)","h":184,"dob":"1992-01-21","v":"400","p":"Goalkeeper"},
      {"n":"CHAINE Sipho","cn":"西福·查伊内","nick":"CHAINE","c":"Orlando Pirates FC (RSA)","h":186,"dob":"1996-12-14","v":"200","p":"Goalkeeper"},
      {"n":"GOSS Ricardo","cn":"里卡多·戈斯","nick":"GOSS","c":"Siwelele FC (RSA)","h":181,"dob":"1994-02-04","v":"100","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"MATULUDI Thabang","cn":"塔邦·马图卢迪","nick":"MATULUDI","c":"Polokwane City FC (RSA)","h":189,"dob":"1999-01-14","v":"50","p":"Defender"},
      {"n":"NDAMANE Khulumani","cn":"库卢马尼·恩达马内","nick":"NDAMANE","c":"Mamelodi Sundowns FC (RSA)","h":183,"dob":"2004-05-02","v":"30","p":"Defender"},
      {"n":"MODIBA Aubrey","cn":"奥布里·莫迪巴","nick":"MODIBA","c":"Mamelodi Sundowns FC (RSA)","h":171,"dob":"1995-07-22","v":"200","p":"Defender"},
      {"n":"MBOKAZI Mbekezeli","cn":"姆贝凯泽利·姆博卡齐","nick":"MBOKAZI","c":"Chicago Fire FC (USA)","h":177,"dob":"2005-09-19","v":"30","p":"Defender"},
      {"n":"KABINI Samukelo","cn":"萨穆凯洛·卡比尼","nick":"KABINI","c":"Molde FK (NOR)","h":179,"dob":"2004-03-15","v":"120","p":"Defender"},
      {"n":"SIBISI Nkosinathi","cn":"恩科西纳蒂·西比西","nick":"SIBISI","c":"Orlando Pirates FC (RSA)","h":172,"dob":"1995-09-22","v":"150","p":"Defender"},
      {"n":"MUDAU Khuliso","cn":"库利索·穆达乌","nick":"MUDAU","c":"Mamelodi Sundowns FC (RSA)","h":179,"dob":"1995-04-26","v":"200","p":"Defender"},
      {"n":"OKON Ime","cn":"伊梅·奥孔","nick":"OKON","c":"Hannover 96 (GER)","h":187,"dob":"2004-02-20","v":"85","p":"Defender"},
      {"n":"MAKHANYA Olwethu","cn":"奥尔韦图·马卡尼亚","nick":"MAKHANYA","c":"Philadelphia Union (USA)","h":185,"dob":"2004-04-30","v":"40","p":"Defender"},
      {"n":"CROSS Bradley","cn":"布拉德利·克罗斯","nick":"CROSS","c":"Kaizer Chiefs FC (RSA)","h":175,"dob":"2001-01-30","v":"65","p":"Defender"}
    ],
    "mf": [
      {"n":"MOKOENA Teboho","cn":"特博霍·莫科埃纳","nick":"MOKOENA","c":"Mamelodi Sundowns FC (RSA)","h":177,"dob":"1997-01-24","v":"300","p":"Midfield"},
      {"n":"MBATHA Thalente","cn":"塔伦特·姆巴塔","nick":"MBATHA","c":"Orlando Pirates FC (RSA)","h":179,"dob":"2000-06-03","v":"100","p":"Midfield"},
      {"n":"ZWANE Themba","cn":"滕巴·兹瓦内","nick":"ZWANE","c":"Mamelodi Sundowns FC (RSA)","h":178,"dob":"1989-03-08","v":"100","p":"Midfield"},
      {"n":"SITHOLE Sphephelo","cn":"斯佩菲洛·西托莱","nick":"SITHOLE","c":"CD Tondela (POR)","h":197,"dob":"1999-03-03","v":"20","p":"Midfield"},
      {"n":"ADAMS Jayden","cn":"杰登·亚当斯","nick":"ADAMS","c":"Mamelodi Sundowns FC (RSA)","h":177,"dob":"2001-05-05","v":"80","p":"Midfield"}
    ],
    "fw": [
      {"n":"APPOLLIS Oswin","cn":"奥斯温·阿波利斯","nick":"APPOLLIS","c":"Orlando Pirates FC (RSA)","h":171,"dob":"2001-08-25","v":"100","p":"Forward"},
      {"n":"MOREMI Tshepang","cn":"切潘·莫雷米","nick":"MOREMI","c":"Orlando Pirates FC (RSA)","h":169,"dob":"2000-02-10","v":"60","p":"Forward"},
      {"n":"FOSTER Lyle","cn":"莱尔·福斯特","nick":"FOSTER","c":"Burnley FC (ENG)","h":185,"dob":"2000-03-09","v":"600","p":"Forward"},
      {"n":"MOFOKENG Relebohile","cn":"雷莱博希莱·莫弗肯","nick":"MOFOKENG","c":"Orlando Pirates FC (RSA)","h":168,"dob":"2004-10-23","v":"150","p":"Forward"},
      {"n":"MASEKO Thapelo","cn":"塔佩洛·马塞科","nick":"MASEKO","c":"AEL Limassol (CYP)","h":178,"dob":"2003-11-11","v":"80","p":"Forward"},
      {"n":"RAYNERS Iqraam","cn":"伊克拉姆·雷纳斯","nick":"RAYNERS","c":"Mamelodi Sundowns FC (RSA)","h":174,"dob":"1995-12-19","v":"120","p":"Forward"},
      {"n":"MAKGOPA Evidence","cn":"埃维登斯·马克戈帕","nick":"MAKGPA","c":"Orlando Pirates FC (RSA)","h":183,"dob":"2000-05-06","v":"80","p":"Forward"},
      {"n":"SEBELEBELE Kamogelo","cn":"卡莫盖洛·塞贝莱贝莱","nick":"SEBELEBELE","c":"Orlando Pirates FC (RSA)","h":166,"dob":"2002-07-21","v":"30","p":"Forward"}
    ]
  },
  "SCO": {
    "gk": [
      {"n":"GUNN Angus","cn":"安格斯·冈恩","nick":"GUNN","c":"Nottingham Forest FC (ENG)","h":196,"dob":"1996-01-22","v":"220","p":"Goalkeeper"},
      {"n":"KELLY Liam","cn":"利亚姆·凯利","nick":"KELLY","c":"Rangers FC (SCO)","h":184,"dob":"1996-01-23","v":"80","p":"Goalkeeper"},
      {"n":"GORDON Craig","cn":"克雷格·戈登","nick":"GORDON","c":"Heart Of Midlothian FC (SCO)","h":193,"dob":"1982-12-31","v":"5","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"HICKEY Aaron","cn":"阿龙·希基","nick":"HICKEY","c":"Brentford FC (ENG)","h":185,"dob":"2002-10-06","v":"1000","p":"Defender"},
      {"n":"ROBERTSON Andy","cn":"安迪·罗伯逊","nick":"ROBERTSON","c":"Liverpool FC (ENG)","h":178,"dob":"1994-11-03","v":"1800","p":"Defender"},
      {"n":"HANLEY Grant","cn":"格兰特·汉利","nick":"HANLEY","c":"Hibernian FC (SCO)","h":188,"dob":"1991-11-20","v":"60","p":"Defender"},
      {"n":"TIERNEY Kieran","cn":"基兰·蒂尔尼","nick":"TIERNEY","c":"Celtic FC (SCO)","h":180,"dob":"1997-05-06","v":"900","p":"Defender"},
      {"n":"HENDRY Jack","cn":"杰克·亨德利","nick":"HENDRY","c":"Al Ettifaq FC (KSA)","h":192,"dob":"1995-07-05","v":"250","p":"Defender"},
      {"n":"SOUTTAR John","cn":"约翰·苏塔尔","nick":"SOUTTAR","c":"Rangers FC (SCO)","h":186,"dob":"1996-09-25","v":"400","p":"Defender"},
      {"n":"HYAM Dominic","cn":"多米尼克·海姆","nick":"HYAM","c":"Wrexham AFC (WAL)","h":188,"dob":"1995-12-20","v":"200","p":"Defender"},
      {"n":"PATTERSON Nathan","cn":"纳坦·帕特森","nick":"PATTERSON","c":"Everton FC (ENG)","h":183,"dob":"2001-10-16","v":"1500","p":"Defender"},
      {"n":"RALSTON Anthony","cn":"安东尼·罗尔斯顿","nick":"RALSTON","c":"Celtic FC (SCO)","h":178,"dob":"1998-11-16","v":"150","p":"Defender"},
      {"n":"McKENNA Scott","cn":"斯科特·麦肯纳","nick":"MCKENNA","c":"GNK Dinamo Zagreb (CRO)","h":189,"dob":"1996-12-11","v":"400","p":"Defender"}
    ],
    "mf": [
      {"n":"McTOMINAY Scott","cn":"斯科特·麦克托米奈","nick":"MCTOMINAY","c":"SSC Napoli (ITA)","h":193,"dob":"1996-08-12","v":"5000","p":"Midfield"},
      {"n":"McGINN John","cn":"约翰·麦金","nick":"MCGINN","c":"Aston Villa FC (ENG)","h":178,"dob":"1994-10-18","v":"1600","p":"Midfield"},
      {"n":"FLETCHER Tyler","cn":"泰勒·弗莱彻","nick":"FLETCHER","c":"Manchester United FC (ENG)","h":183,"dob":"2007-03-19","v":"5","p":"Midfield"},
      {"n":"CHRISTIE Ryan","cn":"瑞安·克里斯蒂","nick":"CHRISTIE","c":"AFC Bournemouth (ENG)","h":178,"dob":"1995-02-22","v":"1000","p":"Midfield"},
      {"n":"FERGUSON Lewis","cn":"刘易斯·弗格森","nick":"FERGUSON","c":"Bologna FC (ITA)","h":181,"dob":"1999-08-24","v":"2800","p":"Midfield"},
      {"n":"McLEAN Kenny","cn":"肯尼·麦克莱恩","nick":"MCLEAN","c":"Norwich City FC (ENG)","h":183,"dob":"1992-08-01","v":"60","p":"Midfield"}
    ],
    "fw": [
      {"n":"DYKES Lyndon","cn":"林登·戴克斯","nick":"DYKES","c":"Charlton Athletic FC (ENG)","h":188,"dob":"1995-07-10","v":"120","p":"Forward"},
      {"n":"ADAMS Che","cn":"切·亚当斯","nick":"ADAMS","c":"Torino FC (ITA)","h":175,"dob":"1996-07-13","v":"1500","p":"Forward"},
      {"n":"STEWART Ross","cn":"罗斯·斯图尔特","nick":"STEWART","c":"Southampton FC (ENG)","h":188,"dob":"1996-11-07","v":"400","p":"Forward"},
      {"n":"GANNON-DOAK Ben","cn":"本·甘农-多克","nick":"GANNON DOAK","c":"AFC Bournemouth (ENG)","h":173,"dob":"2005-11-11","v":"1400","p":"Forward"},
      {"n":"HIRST George","cn":"乔治·赫斯特","nick":"HIRST","c":"Ipswich Town FC (ENG)","h":191,"dob":"1999-02-15","v":"400","p":"Forward"},
      {"n":"SHANKLAND Lawrence","cn":"劳伦斯·尚克兰","nick":"SHANKLAND","c":"Heart Of Midlothian FC (SCO)","h":185,"dob":"1995-10-08","v":"250","p":"Forward"},
      {"n":"CURTIS Findlay","cn":"芬德利·柯蒂斯","nick":"CURTIS","c":"Kilmarnock FC (SCO)","h":180,"dob":"2006-09-06","v":"10","p":"Forward"}
    ]
  },
  "SEN": {
    "gk": [
      {"n":"DIOUF Yehvann","cn":"耶万·迪乌夫","nick":"Y. DIOUF","c":"OGC Nice (FRA)","h":188,"dob":"1999-11-16","v":"1200","p":"Goalkeeper"},
      {"n":"MENDY Edouard","cn":"爱德华·门迪","nick":"MENDY","c":"Al Ahli FC (KSA)","h":194,"dob":"1992-01-03","v":"500","p":"Goalkeeper"},
      {"n":"DIAW Mory","cn":"莫里·迪奥","nick":"DIAW","c":"Le Havre AC (FRA)","h":197,"dob":"1993-06-22","v":"80","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"SARR Mamadou","cn":"马马杜·萨尔","nick":"SARR","c":"Chelsea FC (ENG)","h":194,"dob":"2005-08-29","v":"2000","p":"Defender"},
      {"n":"KOULIBALY Kalidou","cn":"卡利杜·库利巴利","nick":"KOULIBALY","c":"Al Hilal SC (KSA)","h":186,"dob":"1991-06-20","v":"600","p":"Defender"},
      {"n":"SECK Abdoulaye","cn":"阿卜杜拉耶·塞克","nick":"SECK","c":"Maccabi Haifa FC (ISR)","h":192,"dob":"1992-04-06","v":"50","p":"Defender"},
      {"n":"JAKOBS Ismail","cn":"伊斯梅尔·雅各布斯","nick":"JAKOBS","c":"Galatasaray SK (TUR)","h":184,"dob":"1999-08-17","v":"700","p":"Defender"},
      {"n":"DIATTA Krepin","cn":"克雷平·迪亚塔","nick":"KRÉPIN","c":"AS Monaco (FRA)","h":173,"dob":"1999-02-25","v":"700","p":"Defender"},
      {"n":"NIAKHATE Moussa","cn":"穆萨·尼亚卡特","nick":"NIAKHATE","c":"Olympique Lyonnais (FRA)","h":190,"dob":"1996-08-03","v":"1500","p":"Defender"},
      {"n":"MENDY Antoine","cn":"安托万·门迪","nick":"A. MENDY","c":"OGC Nice (FRA)","h":187,"dob":"2004-05-27","v":"250","p":"Defender"},
      {"n":"DIOUF El Hadji Malick","cn":"哈吉·马利克·迪乌夫","nick":"DIOUF","c":"West Ham United FC (ENG)","h":177,"dob":"2004-12-29","v":"1800","p":"Defender"}
    ],
    "mf": [
      {"n":"GUEYE Idrissa Gana","cn":"伊德里萨·加纳·盖耶","nick":"GANA","c":"Everton FC (ENG)","h":174,"dob":"1989-09-26","v":"150","p":"Midfield"},
      {"n":"CISS Pathe","cn":"帕特·西斯","nick":"P.I. CISS","c":"Rayo Vallecano (ESP)","h":186,"dob":"1994-03-16","v":"200","p":"Midfield"},
      {"n":"CAMARA Lamine","cn":"拉明·卡马拉","nick":"LAMINE","c":"AS Monaco (FRA)","h":174,"dob":"2004-01-01","v":"2200","p":"Midfield"},
      {"n":"SARR Pape Matar","cn":"帕普·马塔尔·萨尔","nick":"P.M. SARR","c":"Tottenham Hotspur FC (ENG)","h":185,"dob":"2002-09-14","v":"3200","p":"Midfield"},
      {"n":"DIARRA Habib","cn":"哈比卜·迪亚拉","nick":"H. DIARRA","c":"Sunderland AFC (ENG)","h":178,"dob":"2004-03-01","v":"2000","p":"Midfield"},
      {"n":"NDIAYE Bara Sapoko","cn":"巴拉·萨波科·恩迪亚耶","nick":"BARA","c":"FC Bayern München (GER)","h":180,"dob":"2007-12-31","v":"30","p":"Midfield"},
      {"n":"GUEYE Pape","cn":"帕普·盖耶","nick":"GUEYE","c":"Villarreal CF (ESP)","h":189,"dob":"1999-01-24","v":"1500","p":"Midfield"}
    ],
    "fw": [
      {"n":"DIAO Assane","cn":"阿萨内·迪奥","nick":"DIAO","c":"Como (ITA)","h":185,"dob":"2005-07-09","v":"3000","p":"Forward"},
      {"n":"DIENG Bamba","cn":"班巴·迪昂","nick":"B. DIENG","c":"FC Lorient (FRA)","h":178,"dob":"2000-03-23","v":"300","p":"Forward"},
      {"n":"MANE Sadio","cn":"萨迪奥·马内","nick":"MANÉ","c":"Al Nassr FC (KSA)","h":175,"dob":"1992-10-04","v":"800","p":"Forward"},
      {"n":"JACKSON Nicolas","cn":"尼古拉·雅克松","nick":"JACKSON","c":"FC Bayern München (GER)","h":187,"dob":"2001-06-20","v":"5000","p":"Forward"},
      {"n":"NDIAYE Cherif","cn":"谢里夫·恩迪亚耶","nick":"CHERIF","c":"Samsunspor (TUR)","h":190,"dob":"1996-01-23","v":"500","p":"Forward"},
      {"n":"NDIAYE Iliman","cn":"伊利曼·恩迪亚耶","nick":"NDIAYE","c":"Everton FC (ENG)","h":180,"dob":"2000-06-03","v":"2200","p":"Forward"},
      {"n":"SARR Ismaila","cn":"伊斯梅拉·萨尔","nick":"SARR","c":"Crystal Palace FC (ENG)","h":185,"dob":"1998-02-25","v":"2500","p":"Forward"},
      {"n":"MBAYE Ibrahim","cn":"易卜拉欣·姆巴耶","nick":"MBAYE","c":"Paris Saint-Germain (FRA)","h":175,"dob":"2008-01-24","v":"300","p":"Forward"}
    ]
  },
  "SUI": {
    "gk": [
      {"n":"KOBEL Gregor","cn":"格雷戈·科贝尔","nick":"KOBEL","c":"Borussia Dortmund (GER)","h":196,"dob":"1997-06-12","v":"4000","p":"Goalkeeper"},
      {"n":"MVOGO Yvon","cn":"伊冯·姆沃戈","nick":"MVOGO","c":"FC Lorient (FRA)","h":190,"dob":"1994-06-06","v":"300","p":"Goalkeeper"},
      {"n":"KELLER Marvin","cn":"马文·凯勒","nick":"KELLER","c":"BSC Young Boys (SUI)","h":189,"dob":"2002-03-07","v":"900","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"MUHEIM Miro","cn":"米罗·穆海姆","nick":"MUHEIM","c":"Hamburger SV (GER)","h":182,"dob":"1998-03-24","v":"400","p":"Defender"},
      {"n":"WIDMER Silvan","cn":"西尔万·维德默","nick":"WIDMER","c":"1. FSV Mainz 05 (GER)","h":183,"dob":"1993-05-03","v":"200","p":"Defender"},
      {"n":"ELVEDI Nico","cn":"尼科·埃尔韦迪","nick":"ELVEDI","c":"Borussia Mönchengladbach (GER)","h":189,"dob":"1996-09-30","v":"800","p":"Defender"},
      {"n":"AKANJI Manuel","cn":"曼努埃尔·阿坎吉","nick":"AKANJI","c":"FC Internazionale Milano (ITA)","h":188,"dob":"1995-07-19","v":"2800","p":"Defender"},
      {"n":"RODRIGUEZ Ricardo","cn":"里卡多·罗德里格斯","nick":"RODRIGUEZ","c":"Real Betis (ESP)","h":182,"dob":"1992-08-25","v":"200","p":"Defender"},
      {"n":"COEMERT Eray","cn":"埃拉伊·哲梅尔特","nick":"CÖMERT","c":"Valencia CF (ESP)","h":183,"dob":"1998-04-02","v":"200","p":"Defender"},
      {"n":"AMENDA Aurele","cn":"奥雷勒·阿门达","nick":"AMENDA","c":"Eintracht Frankfurt (GER)","h":194,"dob":"2003-07-31","v":"750","p":"Defender"},
      {"n":"JAQUEZ Luca","cn":"卢卡·雅克斯","nick":"JAQUEZ","c":"VfB Stuttgart (GER)","h":187,"dob":"2003-02-06","v":"600","p":"Defender"}
    ],
    "mf": [
      {"n":"ZAKARIA Denis","cn":"德尼斯·扎卡里亚","nick":"ZAKARIA","c":"AS Monaco (FRA)","h":189,"dob":"1996-11-20","v":"3000","p":"Midfield"},
      {"n":"FREULER Remo","cn":"雷莫·弗罗伊勒","nick":"FREULER","c":"Bologna FC (ITA)","h":181,"dob":"1992-04-15","v":"500","p":"Midfield"},
      {"n":"MANZAMBI Johan","cn":"约翰·曼赞比","nick":"MANZAMBI","c":"SC Freiburg (GER)","h":182,"dob":"2005-10-14","v":"800","p":"Midfield"},
      {"n":"XHAKA Granit","cn":"格拉尼特·扎卡","nick":"XHAKA","c":"Sunderland AFC (ENG)","h":183,"dob":"1992-09-27","v":"1200","p":"Midfield"},
      {"n":"JASHARI Ardon","cn":"阿尔东·亚沙里","nick":"JASHARI","c":"AC Milan (ITA)","h":181,"dob":"2002-07-30","v":"3200","p":"Midfield"},
      {"n":"SOW Djibril","cn":"吉布里勒·索乌","nick":"SOW","c":"Sevilla FC (ESP)","h":183,"dob":"1997-06-02","v":"750","p":"Midfield"},
      {"n":"AEBISCHER Michel","cn":"米歇尔·埃比歇尔","nick":"AEBISCHER","c":"Pisa SC (ITA)","h":183,"dob":"1997-06-01","v":"750","p":"Midfield"},
      {"n":"RIEDER Fabian","cn":"法比安·里德尔","nick":"RIEDER","c":"FC Augsburg (GER)","h":181,"dob":"2002-02-16","v":"600","p":"Midfield"}
    ],
    "fw": [
      {"n":"EMBOLO Breel","cn":"布雷尔·恩博洛","nick":"EMBOLO","c":"Stade Rennais FC (FRA)","h":184,"dob":"1997-02-14","v":"1200","p":"Forward"},
      {"n":"NDOYE Dan","cn":"丹·恩多耶","nick":"NODYE","c":"Nottingham Forest FC (ENG)","h":184,"dob":"2000-10-25","v":"3500","p":"Forward"},
      {"n":"FASSNACHT Christian","cn":"克里斯蒂安·法斯纳赫特","nick":"FASSNACHT","c":"BSC Young Boys (SUI)","h":185,"dob":"1993-11-11","v":"200","p":"Forward"},
      {"n":"VARGAS Ruben","cn":"鲁本·巴尔加斯","nick":"VARGAS","c":"Sevilla FC (ESP)","h":179,"dob":"1998-05-08","v":"700","p":"Forward"},
      {"n":"OKAFOR Noah","cn":"诺亚·奥卡福尔","nick":"OKAFOR","c":"Leeds United FC (ENG)","h":185,"dob":"2000-05-24","v":"1300","p":"Forward"},
      {"n":"AMDOUNI Zeki","cn":"泽基·阿姆杜尼","nick":"AMDOUNI","c":"Burnley FC (ENG)","h":183,"dob":"2000-04-12","v":"1200","p":"Forward"},
      {"n":"ITTEN Cedric","cn":"塞德里克·伊滕","nick":"ITTEN","c":"Fortuna Düsseldorf (GER)","h":190,"dob":"1996-12-27","v":"150","p":"Forward"}
    ]
  },
  "SWE": {
    "gk": [
      {"n":"WIDELL ZETTERSTROM Jacob","cn":"雅各布·维德尔·塞特斯特伦","nick":"ZETTERSTRÖM","c":"Derby County FC (ENG)","h":197,"dob":"1998-11-07","v":"250","p":"Goalkeeper"},
      {"n":"JOHANSSON Viktor","cn":"维克托·约翰松","nick":"V. JOHANSSON","c":"Stoke City FC (ENG)","h":187,"dob":"1998-09-14","v":"800","p":"Goalkeeper"},
      {"n":"NORDFELDT Kristoffer","cn":"克里斯托弗·努德费尔特","nick":"NORDFELDT","c":"AIK Stockholm (SWE)","h":190,"dob":"1989-06-23","v":"20","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"LAGERBIELKE Gustaf","cn":"古斯塔夫·拉格比尔克","nick":"LAGERBIELKE","c":"SC Braga (POR)","h":193,"dob":"2000-10-04","v":"300","p":"Defender"},
      {"n":"LINDELOF Victor","cn":"维克托·林德洛夫","nick":"LINDELÖF","c":"Aston Villa FC (ENG)","h":187,"dob":"1994-07-17","v":"800","p":"Defender"},
      {"n":"HIEN Isak","cn":"伊萨克·希恩","nick":"HIEN","c":"Atalanta Bergamo (ITA)","h":191,"dob":"1999-01-13","v":"3000","p":"Defender"},
      {"n":"GUDMUNDSSON Gabriel","cn":"加布里埃尔·古德蒙德松","nick":"GUDMUNDSSON","c":"Leeds United FC (ENG)","h":181,"dob":"1999-04-29","v":"700","p":"Defender"},
      {"n":"JOHANSSON Herman","cn":"赫尔曼·约翰松","nick":"H. JOHANSSON","c":"FC Dallas (USA)","h":190,"dob":"1997-10-16","v":"100","p":"Defender"},
      {"n":"SVENSSON Daniel","cn":"丹尼尔·斯文松","nick":"SVENSSON","c":"Borussia Dortmund (GER)","h":183,"dob":"2002-12-02","v":"1200","p":"Defender"},
      {"n":"EKDAL Hjalmar","cn":"亚尔马·埃克达尔","nick":"EKDAL","c":"Burnley FC (ENG)","h":187,"dob":"1998-10-21","v":"450","p":"Defender"},
      {"n":"STARFELT Carl","cn":"卡尔·斯塔费尔特","nick":"STARFELT","c":"RC Celta Vigo (ESP)","h":185,"dob":"1995-01-06","v":"600","p":"Defender"},
      {"n":"SMITH Eric","cn":"埃里克·史密斯","nick":"SMITH","c":"FC St. Pauli (GER)","h":192,"dob":"1997-08-01","v":"500","p":"Defender"},
      {"n":"BERNHARDSSON Alexander","cn":"亚历山大·伯恩哈德松","nick":"BERNHARDSSON","c":"Holstein Kiel (GER)","h":184,"dob":"1998-08-09","v":"300","p":"Defender"},
      {"n":"STROUD Elliot","cn":"埃利奥特·斯特劳德","nick":"STROUD","c":"Mjällby AIF (SWE)","h":185,"dob":"2002-06-22","v":"250","p":"Defender"}
    ],
    "mf": [
      {"n":"BERGVALL Lucas","cn":"卢卡斯·贝里瓦尔","nick":"BERGVALL","c":"Tottenham Hotspur FC (ENG)","h":187,"dob":"2006-02-02","v":"3800","p":"Midfield"},
      {"n":"NYGREN Benjamin","cn":"本杰明·尼格伦","nick":"NYGREN","c":"Celtic FC (SCO)","h":187,"dob":"2001-08-07","v":"600","p":"Midfield"},
      {"n":"SEMA Ken","cn":"肯·塞马","nick":"SEMA","c":"Pafos FC (CYP)","h":180,"dob":"1993-09-30","v":"130","p":"Midfield"},
      {"n":"KARLSTROM Jesper","cn":"耶斯佩尔·卡尔斯特伦","nick":"KARLSTRÖM","c":"Udinese (ITA)","h":182,"dob":"1995-06-21","v":"400","p":"Midfield"},
      {"n":"AYARI Yasin","cn":"亚辛·阿亚里","nick":"AYARI","c":"Brighton & Hove Albion FC (ENG)","h":172,"dob":"2003-06-10","v":"2200","p":"Midfield"},
      {"n":"SVANBERG Mattias","cn":"马蒂亚斯·斯万贝里","nick":"SVANBERG","c":"VfL Wolfsburg (GER)","h":186,"dob":"1999-05-01","v":"1200","p":"Midfield"},
      {"n":"ZENELI Besfort","cn":"贝斯福特·泽内利","nick":"ZENELI","c":"Royale Union Saint-Gilloise (BEL)","h":187,"dob":"2002-11-21","v":"400","p":"Midfield"}
    ],
    "fw": [
      {"n":"ISAK Alexander","cn":"亚历山大·伊萨克","nick":"ISAK","c":"Liverpool FC (ENG)","h":190,"dob":"1999-09-21","v":"12000","p":"Forward"},
      {"n":"ELANGA Anthony","cn":"安东尼·埃兰加","nick":"ELANGA","c":"Newcastle United FC (ENG)","h":178,"dob":"2002-04-27","v":"4200","p":"Forward"},
      {"n":"GYOKERES Viktor","cn":"维克托·吉厄克雷斯","nick":"GYÖKERES","c":"Arsenal FC (ENG)","h":189,"dob":"1998-04-06","v":"7500","p":"Forward"},
      {"n":"NILSSON Gustaf","cn":"古斯塔夫·尼尔松","nick":"NILSSON","c":"Club Brugge (BEL)","h":197,"dob":"1997-05-23","v":"500","p":"Forward"},
      {"n":"ALI Taha","cn":"塔哈·阿里","nick":"ALI","c":"Malmö FF (SWE)","h":174,"dob":"1998-01-07","v":"100","p":"Forward"}
    ]
  },
  "TUN": {
    "gk": [
      {"n":"CHAMAKH Mouhib","cn":"穆希卜·沙马赫","nick":"CHAMAKH","c":"Club Africain (TUN)","h":189,"dob":"2001-08-25","v":"30","p":"Goalkeeper"},
      {"n":"DAHMEN Aymen","cn":"艾门·达门","nick":"DAHMEN","c":"CS Sfaxien (TUN)","h":188,"dob":"1997-01-28","v":"100","p":"Goalkeeper"},
      {"n":"BEN HESSEN Sabri","cn":"萨布里·本·赫桑","nick":"BEN HSAN","c":"Étoile Du Sahel (TUN)","h":189,"dob":"1996-06-13","v":"40","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"ABDI Ali","cn":"阿里·阿卜迪","nick":"ABDI","c":"OGC Nice (FRA)","h":177,"dob":"1993-12-20","v":"300","p":"Defender"},
      {"n":"TALBI Montassar","cn":"蒙塔萨尔·塔勒比","nick":"TALBI","c":"FC Lorient (FRA)","h":190,"dob":"1998-05-26","v":"600","p":"Defender"},
      {"n":"REKIK Omar","cn":"奥马尔·雷基克","nick":"REKIK","c":"NK Maribor (SVN)","h":188,"dob":"2001-12-20","v":"50","p":"Defender"},
      {"n":"AROUS Adam","cn":"亚当·阿鲁斯","nick":"AROUS","c":"Kasımpaşa SK (TUR)","h":188,"dob":"2004-07-17","v":"150","p":"Defender"},
      {"n":"BRONN Dylan","cn":"迪伦·布龙","nick":"BRONN","c":"Servette FC (SUI)","h":186,"dob":"1995-06-19","v":"100","p":"Defender"},
      {"n":"BEN OUANES Mortadha","cn":"穆尔塔达·本·瓦内斯","nick":"BEN OUANES","c":"Kasımpaşa SK (TUR)","h":188,"dob":"1994-02-07","v":"150","p":"Defender"},
      {"n":"VALERY Yan","cn":"扬·瓦莱里","nick":"VALERY","c":"BSC Young Boys (SUI)","h":181,"dob":"1999-02-22","v":"140","p":"Defender"},
      {"n":"BEN HMIDA Mohamed Amine","cn":"穆罕默德·阿明·本·赫米达","nick":"BEN HMIDA","c":"Espérance De Tunisie (TUN)","h":181,"dob":"1995-12-15","v":"50","p":"Defender"},
      {"n":"NEFFATI Moutaz","cn":"穆塔兹·内法蒂","nick":"NEFFATI","c":"IFK Norrköping FK (SWE)","h":182,"dob":"2004-04-09","v":"80","p":"Defender"},
      {"n":"CHIKHAOUI Raed","cn":"拉伊德·希哈维","nick":"CHIKHAOUI","c":"US Monastir (TUN)","h":191,"dob":"2004-09-06","v":"30","p":"Defender"}
    ],
    "mf": [
      {"n":"MEJBRI Hannibal","cn":"汉尼拔·梅杰布里","nick":"MEJBRI","c":"Burnley FC (ENG)","h":177,"dob":"2003-01-21","v":"1200","p":"Midfield"},
      {"n":"GHARBI Ismael","cn":"伊斯梅尔·加尔比","nick":"GHARBI","c":"FC Augsburg (GER)","h":180,"dob":"2004-10-04","v":"750","p":"Midfield"},
      {"n":"KHEDIRA Rani","cn":"拉尼·赫迪拉","nick":"KHEDIRA","c":"1. FC Union Berlin (GER)","h":188,"dob":"1994-01-27","v":"250","p":"Midfield"},
      {"n":"AYARI Khalil","cn":"哈利勒·阿亚里","nick":"AYARI","c":"Paris Saint-Germain (FRA)","h":174,"dob":"2005-02-02","v":"100","p":"Midfield"},
      {"n":"HADJ MAHMOUD Mohamed","cn":"穆罕默德·哈吉·马哈茂德","nick":"BELHADJ MAHMOUD","c":"FC Lugano (SUI)","h":179,"dob":"2000-04-24","v":"400","p":"Midfield"},
      {"n":"SKHIRI Ellyes","cn":"埃利斯·斯希里","nick":"SKHIRI","c":"Eintracht Frankfurt (GER)","h":185,"dob":"1995-10-05","v":"750","p":"Midfield"},
      {"n":"SLIMANE Anis","cn":"阿尼斯·苏莱曼","nick":"SLIMANE","c":"Norwich City FC (ENG)","h":188,"dob":"2001-03-16","v":"300","p":"Midfield"},
      {"n":"TOUNEKTI Sebastian","cn":"塞巴斯蒂安·图内克蒂","nick":"TOUNEKTI","c":"Celtic FC (SCO)","h":182,"dob":"2002-07-13","v":"120","p":"Midfield"}
    ],
    "fw": [
      {"n":"ACHOURI Elias","cn":"埃利亚斯·阿舒里","nick":"ACHOURI","c":"FC København (DEN)","h":187,"dob":"1999-10-02","v":"350","p":"Forward"},
      {"n":"SAAD Elias","cn":"埃利亚斯·萨阿德","nick":"SAAD","c":"Hannover 96 (GER)","h":185,"dob":"1999-12-27","v":"400","p":"Forward"},
      {"n":"MASTOURI Hazem","cn":"哈泽姆·马斯图里","nick":"MASTOURI","c":"FC Dynamo Makhachkala (RUS)","h":191,"dob":"1997-06-18","v":"40","p":"Forward"},
      {"n":"ELLOUMI Rayan","cn":"拉扬·埃卢米","nick":"ELLOUMI","c":"Vancouver Whitecaps FC (CAN)","h":180,"dob":"2007-09-17","v":"50","p":"Forward"},
      {"n":"CHAOUAT Firas","cn":"菲拉斯·沙瓦特","nick":"CHAOUAT","c":"Club Africain (TUN)","h":185,"dob":"1996-08-05","v":"80","p":"Forward"}
    ]
  },
  "TUR": {
    "gk": [
      {"n":"GUNOK Mert","cn":"梅尔特·居诺克","nick":"MERT","c":"Fenerbahçe SK (TUR)","h":196,"dob":"1989-01-03","v":"100","p":"Goalkeeper"},
      {"n":"BAYINDIR Altay","cn":"阿尔泰·巴因迪尔","nick":"ALTAY","c":"Manchester United FC (ENG)","h":198,"dob":"1998-04-14","v":"800","p":"Goalkeeper"},
      {"n":"CAKIR Ugurcan","cn":"乌乌尔詹·恰克尔","nick":"UĞURCAN","c":"Galatasaray SK (TUR)","h":191,"dob":"1996-05-04","v":"950","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"CELIK Zeki","cn":"泽基·切利克","nick":"ZEKİ ÇELİK","c":"AS Roma (ITA)","h":180,"dob":"1997-02-17","v":"600","p":"Defender"},
      {"n":"DEMIRAL Merih","cn":"梅里赫·德米拉尔","nick":"DEMİRAL","c":"Al Ahli FC (KSA)","h":190,"dob":"1998-05-03","v":"1300","p":"Defender"},
      {"n":"SOYUNCU Caglar","cn":"恰拉尔·瑟云居","nick":"ÇAĞLAR","c":"Fenerbahçe SK (TUR)","h":185,"dob":"1996-05-23","v":"500","p":"Defender"},
      {"n":"ELMALI Eren","cn":"埃伦·埃尔马勒","nick":"EREN ELMALI","c":"Galatasaray SK (TUR)","h":181,"dob":"2000-07-07","v":"500","p":"Defender"},
      {"n":"BARDAKCI Abdulkerim","cn":"阿卜杜勒凯里姆·巴尔达克奇","nick":"ABDÜLKERİM","c":"Galatasaray SK (TUR)","h":185,"dob":"1994-07-09","v":"700","p":"Defender"},
      {"n":"KABAK Ozan","cn":"奥赞·卡巴克","nick":"OZAN KABAK","c":"TSG Hoffenheim (GER)","h":187,"dob":"2000-03-25","v":"500","p":"Defender"},
      {"n":"MULDUR Mert","cn":"梅尔特·米尔迪尔","nick":"MERT MÜLDÜR","c":"Fenerbahçe SK (TUR)","h":184,"dob":"1999-03-04","v":"600","p":"Defender"},
      {"n":"KADIOGLU Ferdi","cn":"费尔迪·卡迪奥格鲁","nick":"F. KADIOĞLU","c":"Brighton & Hove Albion FC (ENG)","h":174,"dob":"1999-07-10","v":"2500","p":"Defender"},
      {"n":"AKAYDIN Samet","cn":"萨梅特·阿卡伊登","nick":"SAMET AKAYDIN","c":"Çaykur Rizespor (TUR)","h":190,"dob":"1994-03-13","v":"150","p":"Defender"}
    ],
    "mf": [
      {"n":"OZCAN Salih","cn":"萨利赫·厄兹詹","nick":"ÖZCAN","c":"Borussia Dortmund (GER)","h":182,"dob":"1998-11-01","v":"400","p":"Midfield"},
      {"n":"KOKCU Orkun","cn":"奥尔昆·柯克曲","nick":"ORKUN KÖKÇÜ","c":"Beşiktaş JK (TUR)","h":175,"dob":"2000-12-29","v":"3000","p":"Midfield"},
      {"n":"CALHANOGLU Hakan","cn":"哈坎·恰尔汗奥卢","nick":"ÇALHANOĞLU","c":"FC Internazionale Milano (ITA)","h":178,"dob":"1994-08-02","v":"3000","p":"Midfield"},
      {"n":"YUKSEK Ismail","cn":"伊斯梅尔·尤克塞克","nick":"İSMAİL","c":"Fenerbahçe SK (TUR)","h":183,"dob":"1999-01-26","v":"1100","p":"Midfield"},
      {"n":"AYHAN Kaan","cn":"卡安·艾汉","nick":"KAAN","c":"Galatasaray SK (TUR)","h":185,"dob":"1994-10-11","v":"400","p":"Midfield"}
    ],
    "fw": [
      {"n":"AKTURKOGLU Kerem","cn":"克雷姆·阿克蒂尔科格鲁","nick":"AKTÜRKOĞLU","c":"Fenerbahçe SK (TUR)","h":172,"dob":"1998-10-21","v":"2400","p":"Forward"},
      {"n":"GULER Arda","cn":"阿尔达·居莱尔","nick":"ARDA GÜLER","c":"Real Madrid C. F. (ESP)","h":175,"dob":"2005-02-25","v":"4500","p":"Forward"},
      {"n":"GUL Deniz","cn":"德尼兹·居尔","nick":"DENİZ GÜL","c":"FC Porto (POR)","h":192,"dob":"2004-02-07","v":"400","p":"Forward"},
      {"n":"YILDIZ Kenan","cn":"凯南·耶尔德兹","nick":"YILDIZ","c":"Juventus FC (ITA)","h":187,"dob":"2005-04-05","v":"5000","p":"Forward"},
      {"n":"KAHVECI Irfan Can","cn":"伊尔凡·詹·卡赫韦吉","nick":"KAHVECİ","c":"Kasımpaşa SK (TUR)","h":180,"dob":"1995-07-15","v":"700","p":"Forward"},
      {"n":"AKGUN Yunus","cn":"尤努斯·阿克金","nick":"YUNUS","c":"Galatasaray SK (TUR)","h":173,"dob":"2000-07-07","v":"1400","p":"Forward"},
      {"n":"YILMAZ Baris Alper","cn":"巴勒什·阿尔珀·耶尔马兹","nick":"BARIŞ","c":"Galatasaray SK (TUR)","h":186,"dob":"2000-05-23","v":"2100","p":"Forward"},
      {"n":"AYDIN Oguz","cn":"奥乌兹·艾登","nick":"OĞUZ","c":"Fenerbahçe SK (TUR)","h":183,"dob":"2000-10-27","v":"300","p":"Forward"},
      {"n":"UZUN Can","cn":"詹·乌尊","nick":"CAN UZUN","c":"Eintracht Frankfurt (GER)","h":186,"dob":"2005-11-11","v":"1800","p":"Forward"}
    ]
  },
  "URU": {
    "gk": [
      {"n":"ROCHET Sergio","cn":"塞尔希奥·罗切特","nick":"S. ROCHET","c":"SC Internacional (BRA)","h":189,"dob":"1993-03-23","v":"300","p":"Goalkeeper"},
      {"n":"MELE Santiago","cn":"圣地亚哥·梅莱","nick":"S. MELE","c":"CF Monterrey (MEX)","h":185,"dob":"1997-06-09","v":"250","p":"Goalkeeper"},
      {"n":"MUSLERA Fernando","cn":"费尔南多·穆斯莱拉","nick":"F. MUSLERA","c":"Estudiantes LP (ARG)","h":190,"dob":"1986-06-16","v":"80","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"GIMENEZ Jose Maria","cn":"何塞·玛丽亚·希门尼斯","nick":"J.M. GIMÉNEZ","c":"Atlético De Madrid (ESP)","h":186,"dob":"1995-01-20","v":"2000","p":"Defender"},
      {"n":"CACERES Sebastian","cn":"塞巴斯蒂安·卡塞雷斯","nick":"S. CACERES","c":"Club América (MEX)","h":180,"dob":"1999-08-18","v":"500","p":"Defender"},
      {"n":"ARAUJO Ronald","cn":"罗纳德·阿劳霍","nick":"R. ARAUJO","c":"FC Barcelona (ESP)","h":185,"dob":"1999-07-03","v":"3500","p":"Defender"},
      {"n":"VARELA Guillermo","cn":"吉列尔莫·巴雷拉","nick":"G. VARELA","c":"CR Flamengo (BRA)","h":174,"dob":"1993-03-24","v":"120","p":"Defender"},
      {"n":"OLIVERA Mathias","cn":"马蒂亚斯·奥利韦拉","nick":"M. OLIVERA","c":"SSC Napoli (ITA)","h":174,"dob":"1997-10-31","v":"2000","p":"Defender"},
      {"n":"VINA Matias","cn":"马蒂亚斯·比尼亚","nick":"M. VIÑA","c":"CA River Plate (ARG)","h":180,"dob":"1997-09-11","v":"500","p":"Defender"},
      {"n":"BUENO Santiago","cn":"圣地亚哥·布埃诺","nick":"S. BUENO","c":"Wolverhampton Wanderers FC (ENG)","h":191,"dob":"1998-09-11","v":"1000","p":"Defender"}
    ],
    "mf": [
      {"n":"UGARTE Manuel","cn":"曼努埃尔·乌加特","nick":"M. UGARTE","c":"Manchester United FC (ENG)","h":182,"dob":"2001-11-04","v":"4500","p":"Midfield"},
      {"n":"BENTANCUR Rodrigo","cn":"罗德里戈·本坦库尔","nick":"R. BENTANCUR","c":"Tottenham Hotspur FC (ENG)","h":187,"dob":"1997-06-25","v":"3000","p":"Midfield"},
      {"n":"DE LA CRUZ Nicolas","cn":"尼古拉斯·德拉克鲁斯","nick":"N. DE LA CRUZ","c":"CR Flamengo (BRA)","h":167,"dob":"1997-01-06","v":"600","p":"Midfield"},
      {"n":"VALVERDE Federico","cn":"费德里科·巴尔韦德","nick":"F. VALVERDE","c":"Real Madrid C. F. (ESP)","h":182,"dob":"1998-07-22","v":"13000","p":"Midfield"},
      {"n":"DE ARRASCAETA Giorgian","cn":"希奥尔希安·德阿拉斯卡埃塔","nick":"G. DE ARRASCAETA","c":"CR Flamengo (BRA)","h":177,"dob":"1994-01-06","v":"1500","p":"Midfield"},
      {"n":"CANOBBIO Agustin","cn":"阿古斯丁·卡诺比奥","nick":"A. CANOBBIO","c":"Fluminense FC (BRA)","h":176,"dob":"1998-01-10","v":"500","p":"Midfield"},
      {"n":"MARTINEZ Emiliano","cn":"埃米利亚诺·马丁内斯","nick":"E. MARTINEZ","c":"SE Palmeiras (BRA)","h":184,"dob":"1999-08-17","v":"900","p":"Midfield"},
      {"n":"ARAUJO Maxi","cn":"马克西·阿劳霍","nick":"M. ARAUJO","c":"Sporting CP (POR)","h":176,"dob":"2000-02-15","v":"1700","p":"Midfield"},
      {"n":"PIQUEREZ Joaquin","cn":"华金·皮克雷斯","nick":"J. PIQUEREZ","c":"SE Palmeiras (BRA)","h":185,"dob":"1998-08-24","v":"1500","p":"Midfield"},
      {"n":"SANABRIA Juan Manuel","cn":"胡安·曼努埃尔·萨纳夫里亚","nick":"J.M. SANABRIA","c":"Real Salt Lake (USA)","h":170,"dob":"2000-03-29","v":"650","p":"Midfield"},
      {"n":"ZALAZAR Rodrigo","cn":"罗德里戈·萨拉萨尔","nick":"R. ZALAZAR","c":"SC Braga (POR)","h":175,"dob":"1999-12-08","v":"1800","p":"Midfield"}
    ],
    "fw": [
      {"n":"NUNEZ Darwin","cn":"达尔文·努涅斯","nick":"D. NUÑEZ","c":"Al Hilal SC (KSA)","h":185,"dob":"1999-06-24","v":"4500","p":"Forward"},
      {"n":"PELLISTRI Facundo","cn":"法昆多·佩利斯特里","nick":"F. PELLISTRI","c":"Panathinaikos FC (GRE)","h":174,"dob":"2001-12-20","v":"800","p":"Forward"},
      {"n":"RODRIGUEZ Brian","cn":"布莱恩·罗德里格斯","nick":"B. RODRIGUEZ","c":"Club América (MEX)","h":175,"dob":"2000-05-20","v":"600","p":"Forward"},
      {"n":"AGUIRRE Rodrigo","cn":"罗德里戈·阿吉雷","nick":"R. AGUIRRE","c":"Tigres UANL (MEX)","h":182,"dob":"1994-01-10","v":"200","p":"Forward"},
      {"n":"VINAS Federico","cn":"费德里科·比尼亚斯","nick":"F. VIÑAS","c":"Real Oviedo (ESP)","h":181,"dob":"1998-06-30","v":"200","p":"Forward"}
    ]
  },
  "USA": {
    "gk": [
      {"n":"TURNER Matt","cn":"马特·特纳","nick":"TURNER","c":"New England Revolution (USA)","h":190,"dob":"1994-06-24","v":"250","p":"Goalkeeper"},
      {"n":"FREESE Matt","cn":"马特·弗里兹","nick":"FREESE","c":"New York City FC (USA)","h":198,"dob":"1998-02-09","v":"80","p":"Goalkeeper"},
      {"n":"BRADY Chris","cn":"克里斯·布雷迪","nick":"BRADY","c":"Chicago Fire FC (USA)","h":193,"dob":"2004-03-03","v":"250","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"DEST Sergino","cn":"塞尔吉诺·德斯特","nick":"DEST","c":"PSV Eindhoven (NED)","h":173,"dob":"2000-03-11","v":"1600","p":"Defender"},
      {"n":"RICHARDS Chris","cn":"克里斯·理查兹","nick":"RICHARDS","c":"Crystal Palace FC (ENG)","h":189,"dob":"2000-03-28","v":"1400","p":"Defender"},
      {"n":"ROBINSON Antonee","cn":"安东内·罗宾逊","nick":"A. ROBINSON","c":"Fulham FC (ENG)","h":183,"dob":"1997-08-08","v":"3500","p":"Defender"},
      {"n":"TRUSTY Auston","cn":"奥斯顿·特拉斯蒂","nick":"TRUSTY","c":"Celtic FC (SCO)","h":190,"dob":"1998-12-08","v":"600","p":"Defender"},
      {"n":"ROBINSON Miles","cn":"迈尔斯·罗宾逊","nick":"M. ROBINSON","c":"FC Cincinnatti (USA)","h":187,"dob":"1997-03-14","v":"350","p":"Defender"},
      {"n":"REAM Tim","cn":"蒂姆·里姆","nick":"REAM","c":"Charlotte FC (USA)","h":186,"dob":"1987-05-10","v":"30","p":"Defender"},
      {"n":"FREEMAN Alex","cn":"亚历克斯·弗里曼","nick":"FREEMAN","c":"Villarreal CF (ESP)","h":188,"dob":"2004-09-08","v":"200","p":"Defender"},
      {"n":"ARFSTEN Max","cn":"马克斯·阿夫斯滕","nick":"ARFSTEN","c":"Columbus Crew (USA)","h":185,"dob":"2001-04-19","v":"100","p":"Defender"},
      {"n":"McKENZIE Mark","cn":"马克·麦肯齐","nick":"MCKENZIE","c":"Toulouse FC (FRA)","h":186,"dob":"1999-02-25","v":"600","p":"Defender"},
      {"n":"SCALLY Joe","cn":"乔·斯卡利","nick":"SCALLY","c":"Borussia Mönchengladbach (GER)","h":184,"dob":"2002-12-31","v":"1000","p":"Defender"}
    ],
    "mf": [
      {"n":"ADAMS Tyler","cn":"泰勒·亚当斯","nick":"ADAMS","c":"AFC Bournemouth (ENG)","h":175,"dob":"1999-02-14","v":"1800","p":"Midfield"},
      {"n":"REYNA Giovanni","cn":"乔瓦尼·雷纳","nick":"REYNA","c":"Borussia Mönchengladbach (GER)","h":187,"dob":"2002-11-13","v":"700","p":"Midfield"},
      {"n":"McKENNIE Weston","cn":"韦斯顿·麦肯尼","nick":"MCKENNIE","c":"Juventus FC (ITA)","h":180,"dob":"1998-08-28","v":"2200","p":"Midfield"},
      {"n":"BERHALTER Sebastian","cn":"塞巴斯蒂安·伯哈尔特","nick":"BERHALTER","c":"Vancouver Whitecaps FC (CAN)","h":175,"dob":"2001-10-05","v":"200","p":"Midfield"},
      {"n":"ROLDAN Cristian","cn":"克里斯蒂安·罗尔丹","nick":"ROLDAN","c":"Seattle Sounders FC (USA)","h":173,"dob":"1995-03-06","v":"400","p":"Midfield"},
      {"n":"TILLMAN Malik","cn":"马利克·蒂尔曼","nick":"TILLMAN","c":"Bayer Leverkusen (GER)","h":187,"dob":"2002-05-28","v":"3200","p":"Midfield"}
    ],
    "fw": [
      {"n":"PEPI Ricardo","cn":"里卡多·佩皮","nick":"PEPI","c":"PSV Eindhoven (NED)","h":185,"dob":"2003-09-01","v":"1600","p":"Forward"},
      {"n":"PULISIC Christian","cn":"克里斯蒂安·普利西奇","nick":"PULISIC","c":"AC Milan (ITA)","h":177,"dob":"1998-09-18","v":"5000","p":"Forward"},
      {"n":"AARONSON Brenden","cn":"布伦登·阿伦森","nick":"AARONSON","c":"Leeds United FC (ENG)","h":177,"dob":"2000-10-22","v":"1500","p":"Forward"},
      {"n":"WRIGHT Haji","cn":"哈吉·赖特","nick":"WRIGHT","c":"Coventry City FC (ENG)","h":191,"dob":"1998-03-27","v":"800","p":"Forward"},
      {"n":"BALOGUN Folarin","cn":"福拉林·巴洛贡","nick":"BALOGUN","c":"AS Monaco (FRA)","h":179,"dob":"2001-03-07","v":"1800","p":"Forward"},
      {"n":"WEAH Timothy","cn":"蒂莫西·维阿","nick":"WEAH","c":"Olympique Marseille (FRA)","h":183,"dob":"2000-02-22","v":"1700","p":"Forward"},
      {"n":"ZENDEJAS Alex","cn":"亚历克斯·森德哈斯","nick":"ZENDEJAS","c":"Club América (MEX)","h":167,"dob":"1998-07-02","v":"200","p":"Forward"}
    ]
  },
  "UZB": {
    "gk": [
      {"n":"YUSUPOV Utkir","cn":"乌特基尔·尤苏波夫","nick":"YUSUPOV","c":"PFC Navbahor Namangan (UZB)","h":185,"dob":"1991-04-01","v":"80","p":"Goalkeeper"},
      {"n":"NEMATOV Abduvohid","cn":"阿卜杜沃希德·内马托夫","nick":"NEMATOV","c":"Nasaf Qarshi FC (UZB)","h":182,"dob":"2001-03-20","v":"100","p":"Goalkeeper"},
      {"n":"ERGASHEV Botirali","cn":"博蒂拉利·埃尔加舍夫","nick":"ERGASHEV","c":"FK Neftchi Farg'ona (UZB)","h":189,"dob":"1995-06-23","v":"50","p":"Goalkeeper"}
    ],
    "df": [
      {"n":"KHUSANOV Abdukodir","cn":"阿卜杜科迪尔·胡萨诺夫","nick":"KHUSANOV","c":"Manchester City FC (ENG)","h":186,"dob":"2004-02-29","v":"3500","p":"Defender"},
      {"n":"ALIJONOV Khojiakbar","cn":"霍吉阿克巴尔·阿利若诺夫","nick":"ALIJONOV","c":"Pakhtakor Tashkent FK (UZB)","h":180,"dob":"1997-04-19","v":"150","p":"Defender"},
      {"n":"SAYFIEV Farrukh","cn":"法鲁赫·萨伊菲耶夫","nick":"SAYFIEV","c":"FK Neftchi Farg'ona (UZB)","h":183,"dob":"1991-01-17","v":"100","p":"Defender"},
      {"n":"ASHURMATOV Rustam","cn":"鲁斯塔姆·阿舒尔马托夫","nick":"ASHURMATOV","c":"Esteghlal Tehran FC (IRN)","h":186,"dob":"1996-07-07","v":"120","p":"Defender"},
      {"n":"NASRULLAEV Sherzod","cn":"舍尔佐德·纳斯鲁拉耶夫","nick":"NASRULLAEV","c":"Pakhtakor Tashkent FK (UZB)","h":183,"dob":"1998-07-23","v":"100","p":"Defender"},
      {"n":"ESHMURODOV Umar","cn":"乌马尔·埃什穆罗多夫","nick":"ESHMURODOV","c":"Nasaf Qarshi FC (UZB)","h":185,"dob":"1992-11-30","v":"80","p":"Defender"},
      {"n":"ABDULLAEV Abdulla","cn":"阿卜杜拉·阿卜杜拉耶夫","nick":"ABDULLAEV","c":"Dibba FC (UAE)","h":181,"dob":"1997-01-09","v":"60","p":"Defender"},
      {"n":"KARIMOV Behruzjon","cn":"贝赫鲁兹容·卡里莫夫","nick":"KARIMOV","c":"Surkhon FK (UZB)","h":172,"dob":"2007-07-08","v":"40","p":"Defender"},
      {"n":"ULMASALIYEV Avazbek","cn":"阿瓦兹别克·乌尔马萨利耶夫","nick":"ULMASALIYEV","c":"OKMK FK (UZB)","h":187,"dob":"2000-03-27","v":"30","p":"Defender"},
      {"n":"UROZOV Jakhongir","cn":"贾洪吉尔·乌罗佐夫","nick":"UROZOV","c":"FK Dinamo Samarkand (UZB)","h":190,"dob":"2004-01-18","v":"30","p":"Defender"}
    ],
    "mf": [
      {"n":"MOZGOVOY Akmal","cn":"阿克马尔·莫兹戈沃伊","nick":"MOZGOVOY","c":"Pakhtakor Tashkent FK (UZB)","h":180,"dob":"1999-02-04","v":"80","p":"Midfield"},
      {"n":"SHUKUROV Otabek","cn":"奥塔别克·舒库罗夫","nick":"SHUKUROV","c":"Baniyas Club (UAE)","h":183,"dob":"1996-06-22","v":"180","p":"Midfield"},
      {"n":"ISKANDEROV Jamshid","cn":"贾姆希德·伊斯坎德罗夫","nick":"ISKANDEROV","c":"FK Neftchi Farg'ona (UZB)","h":171,"dob":"1993-10-16","v":"70","p":"Midfield"},
      {"n":"XAMROBEKOV Odiljon","cn":"奥迪尔容·哈姆罗别科夫","nick":"XAMROBEKOV","c":"Tractor Sazi Tabriz FC (IRN)","h":180,"dob":"1996-02-13","v":"100","p":"Midfield"},
      {"n":"MASHARIPOV Jaloliddin","cn":"贾洛利丁·马沙里波夫","nick":"MASHARIPOV","c":"Esteghlal Tehran FC (IRN)","h":174,"dob":"1993-01-09","v":"150","p":"Midfield"},
      {"n":"URUNOV Oston","cn":"奥斯顿·乌鲁诺夫","nick":"URUNOV","c":"Persepolis FC (IRN)","h":181,"dob":"2000-12-19","v":"120","p":"Midfield"},
      {"n":"KHAMDAMOV Dostonbek","cn":"多斯通别克·哈姆达莫夫","nick":"KHAMDAMOV","c":"Pakhtakor Tashkent FK (UZB)","h":178,"dob":"1996-07-24","v":"100","p":"Midfield"},
      {"n":"GANIEV Azizjon","cn":"阿齐兹容·加尼耶夫","nick":"GANIEV","c":"Al Bataeh Club (UAE)","h":178,"dob":"1998-02-22","v":"80","p":"Midfield"},
      {"n":"FAYZULLAEV Abbosbek","cn":"阿博斯别克·法伊祖拉耶夫","nick":"FAYZULLAEV","c":"Başakşehir FK (TUR)","h":167,"dob":"2003-03-10","v":"300","p":"Midfield"},
      {"n":"ESANOV Sherzod","cn":"舍尔佐德·埃萨诺夫","nick":"ESANOV","c":"FK Buxoro (UZB)","h":190,"dob":"2003-01-02","v":"30","p":"Midfield"}
    ],
    "fw": [
      {"n":"SHOMURODOV Eldor","cn":"埃尔多尔·绍穆罗多夫","nick":"SHOMURODOV","c":"Başakşehir FK (TUR)","h":190,"dob":"1995-06-29","v":"500","p":"Forward"},
      {"n":"AMONOV Azizbek","cn":"阿齐兹别克·阿莫诺夫","nick":"AMONOV","c":"FK Dinamo Samarkand (UZB)","h":181,"dob":"1997-10-30","v":"80","p":"Forward"},
      {"n":"SERGEEV Igor","cn":"伊戈尔·谢尔盖耶夫","nick":"SERGEEV","c":"Persepolis FC (IRN)","h":185,"dob":"1993-04-30","v":"120","p":"Forward"}
    ]
  }
};