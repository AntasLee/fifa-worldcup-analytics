// ===== 比赛数据: 2002-2022六届世界杯 比赛详情 & 统计数据 =====
// ========== 2022卡塔尔世界杯 数据 ==========
const wc2022Data={
info:'2022年卡塔尔世界杯 · 11.20–12.18 · 32队64场 · 🏆冠军: 阿根廷',
groups:{
A:{name:'A组',matches:[{h:'QAT',a:'ECU',sh:0,sa:2,odds:{hw:2.80,d:3.20,aw:2.50},date:'11.20',venue:'海湾球场'},{h:'SEN',a:'NED',sh:0,sa:2,odds:{hw:5.50,d:3.60,aw:1.65},date:'11.21',venue:'阿图玛玛球场'},{h:'QAT',a:'SEN',sh:1,sa:3,odds:{hw:4.20,d:3.30,aw:1.85},date:'11.25',venue:'阿图玛玛球场'},{h:'NED',a:'ECU',sh:1,sa:1,odds:{hw:1.55,d:3.80,aw:6.00},date:'11.25',venue:'哈利法国际球场'},{h:'ECU',a:'SEN',sh:1,sa:2,odds:{hw:2.90,d:3.10,aw:2.50},date:'11.29',venue:'哈利法国际球场'},{h:'NED',a:'QAT',sh:2,sa:0,odds:{hw:1.22,d:6.00,aw:11.00},date:'11.29',venue:'海湾球场'}]},
B:{name:'B组',matches:[{h:'ENG',a:'IRN',sh:6,sa:2,odds:{hw:1.30,d:5.00,aw:10.00},date:'11.21',venue:'哈利法国际球场'},{h:'USA',a:'WAL',sh:1,sa:1,odds:{hw:2.15,d:3.10,aw:3.50},date:'11.21',venue:'艾哈迈德·本·阿里球场'},{h:'WAL',a:'IRN',sh:0,sa:2,odds:{hw:2.60,d:3.00,aw:2.80},date:'11.25',venue:'艾哈迈德·本·阿里球场'},{h:'ENG',a:'USA',sh:0,sa:0,odds:{hw:1.50,d:4.00,aw:6.50},date:'11.25',venue:'海湾球场'},{h:'WAL',a:'ENG',sh:0,sa:3,odds:{hw:7.00,d:4.20,aw:1.44},date:'11.29',venue:'艾哈迈德·本·阿里球场'},{h:'IRN',a:'USA',sh:0,sa:1,odds:{hw:3.50,d:3.20,aw:2.10},date:'11.29',venue:'阿图玛玛球场'}]},
C:{name:'C组',matches:[{h:'ARG',a:'KSA',sh:1,sa:2,odds:{hw:1.14,d:7.50,aw:17.00},date:'11.22',venue:'卢赛尔球场'},{h:'MEX',a:'POL',sh:0,sa:0,odds:{hw:2.40,d:3.10,aw:3.00},date:'11.22',venue:'974球场'},{h:'POL',a:'KSA',sh:2,sa:0,odds:{hw:1.80,d:3.40,aw:4.50},date:'11.26',venue:'教育城球场'},{h:'ARG',a:'MEX',sh:2,sa:0,odds:{hw:1.36,d:4.50,aw:8.50},date:'11.26',venue:'卢赛尔球场'},{h:'POL',a:'ARG',sh:0,sa:2,odds:{hw:5.50,d:3.80,aw:1.60},date:'11.30',venue:'974球场'},{h:'KSA',a:'MEX',sh:1,sa:2,odds:{hw:4.50,d:3.50,aw:1.75},date:'11.30',venue:'卢赛尔球场'}]},
D:{name:'D组',matches:[{h:'DEN',a:'TUN',sh:0,sa:0,odds:{hw:1.60,d:3.60,aw:5.80},date:'11.22',venue:'教育城球场'},{h:'FRA',a:'AUS',sh:4,sa:1,odds:{hw:1.30,d:5.00,aw:10.00},date:'11.22',venue:'贾努布球场'},{h:'TUN',a:'AUS',sh:0,sa:1,odds:{hw:3.20,d:3.00,aw:2.30},date:'11.26',venue:'贾努布球场'},{h:'FRA',a:'DEN',sh:2,sa:1,odds:{hw:1.70,d:3.50,aw:5.00},date:'11.26',venue:'974球场'},{h:'AUS',a:'DEN',sh:1,sa:0,odds:{hw:5.00,d:3.60,aw:1.67},date:'11.30',venue:'贾努布球场'},{h:'TUN',a:'FRA',sh:1,sa:0,odds:{hw:7.50,d:4.20,aw:1.40},date:'11.30',venue:'教育城球场'}]},
E:{name:'E组',matches:[{h:'GER',a:'JPN',sh:1,sa:2,odds:{hw:1.50,d:4.00,aw:6.50},date:'11.23',venue:'哈利法国际球场'},{h:'ESP',a:'CRC',sh:7,sa:0,odds:{hw:1.20,d:6.50,aw:14.00},date:'11.23',venue:'阿图玛玛球场'},{h:'JPN',a:'CRC',sh:0,sa:1,odds:{hw:1.50,d:3.80,aw:7.00},date:'11.27',venue:'艾哈迈德·本·阿里球场'},{h:'ESP',a:'GER',sh:1,sa:1,odds:{hw:2.30,d:3.30,aw:3.00},date:'11.27',venue:'海湾球场'},{h:'JPN',a:'ESP',sh:2,sa:1,odds:{hw:5.50,d:3.80,aw:1.57},date:'12.01',venue:'哈利法国际球场'},{h:'CRC',a:'GER',sh:2,sa:4,odds:{hw:15.00,d:7.00,aw:1.14},date:'12.01',venue:'海湾球场'}]},
F:{name:'F组',matches:[{h:'MAR',a:'CRO',sh:0,sa:0,odds:{hw:4.20,d:3.30,aw:1.85},date:'11.23',venue:'海湾球场'},{h:'BEL',a:'CAN',sh:1,sa:0,odds:{hw:1.44,d:4.20,aw:7.00},date:'11.23',venue:'艾哈迈德·本·阿里球场'},{h:'BEL',a:'MAR',sh:0,sa:2,odds:{hw:1.65,d:3.60,aw:5.00},date:'11.27',venue:'阿图玛玛球场'},{h:'CRO',a:'CAN',sh:4,sa:1,odds:{hw:1.75,d:3.40,aw:4.80},date:'11.27',venue:'哈利法国际球场'},{h:'CRO',a:'BEL',sh:0,sa:0,odds:{hw:3.40,d:3.20,aw:2.10},date:'12.01',venue:'艾哈迈德·本·阿里球场'},{h:'CAN',a:'MAR',sh:1,sa:2,odds:{hw:3.20,d:3.10,aw:2.25},date:'12.01',venue:'阿图玛玛球场'}]},
G:{name:'G组',matches:[{h:'SUI',a:'CMR',sh:1,sa:0,odds:{hw:1.85,d:3.20,aw:4.50},date:'11.24',venue:'贾努布球场'},{h:'BRA',a:'SRB',sh:2,sa:0,odds:{hw:1.44,d:4.20,aw:7.00},date:'11.24',venue:'卢赛尔球场'},{h:'CMR',a:'SRB',sh:3,sa:3,odds:{hw:4.50,d:3.40,aw:1.80},date:'11.28',venue:'贾努布球场'},{h:'BRA',a:'SUI',sh:1,sa:0,odds:{hw:1.36,d:4.50,aw:8.50},date:'11.28',venue:'974球场'},{h:'SRB',a:'SUI',sh:2,sa:3,odds:{hw:2.60,d:3.20,aw:2.60},date:'12.02',venue:'974球场'},{h:'CMR',a:'BRA',sh:1,sa:0,odds:{hw:9.00,d:5.00,aw:1.30},date:'12.02',venue:'卢赛尔球场'}]},
H:{name:'H组',matches:[{h:'URU',a:'KOR',sh:0,sa:0,odds:{hw:2.10,d:3.10,aw:3.60},date:'11.24',venue:'教育城球场'},{h:'POR',a:'GHA',sh:3,sa:2,odds:{hw:1.40,d:4.50,aw:7.50},date:'11.24',venue:'974球场'},{h:'KOR',a:'GHA',sh:2,sa:3,odds:{hw:2.30,d:3.10,aw:3.10},date:'11.28',venue:'教育城球场'},{h:'POR',a:'URU',sh:2,sa:0,odds:{hw:2.25,d:3.10,aw:3.20},date:'11.28',venue:'卢赛尔球场'},{h:'GHA',a:'URU',sh:0,sa:2,odds:{hw:4.00,d:3.30,aw:1.90},date:'12.02',venue:'贾努布球场'},{h:'KOR',a:'POR',sh:2,sa:1,odds:{hw:6.00,d:4.00,aw:1.50},date:'12.02',venue:'教育城球场'}]}
},
knockout:[
{stage:'R16',matches:[{h:'NED',a:'USA',sh:3,sa:1,odds:{hw:1.90,d:3.30,aw:4.20},date:'12.03'},{h:'ARG',a:'AUS',sh:2,sa:1,odds:{hw:1.20,d:6.50,aw:12.00},date:'12.03'},{h:'FRA',a:'POL',sh:3,sa:1,odds:{hw:1.44,d:4.20,aw:7.00},date:'12.04'},{h:'ENG',a:'SEN',sh:3,sa:0,odds:{hw:1.53,d:3.80,aw:6.50},date:'12.04'},{h:'JPN',a:'CRO',sh:1,sa:1,ps:'1-3',odds:{hw:3.20,d:3.00,aw:2.30},date:'12.05'},{h:'BRA',a:'KOR',sh:4,sa:1,odds:{hw:1.36,d:4.50,aw:8.50},date:'12.05'},{h:'MAR',a:'ESP',sh:0,sa:0,ps:'3-0',odds:{hw:6.00,d:3.60,aw:1.57},date:'12.06'},{h:'POR',a:'SUI',sh:6,sa:1,odds:{hw:2.10,d:3.20,aw:3.50},date:'12.06'}]},
{stage:'QF',matches:[{h:'CRO',a:'BRA',sh:1,sa:1,ps:'4-2',odds:{hw:6.50,d:3.80,aw:1.50},date:'12.09'},{h:'NED',a:'ARG',sh:2,sa:2,ps:'3-4',odds:{hw:3.50,d:3.10,aw:2.10},date:'12.09'},{h:'MAR',a:'POR',sh:1,sa:0,odds:{hw:5.00,d:3.40,aw:1.70},date:'12.10'},{h:'ENG',a:'FRA',sh:1,sa:2,odds:{hw:3.30,d:3.10,aw:2.20},date:'12.10'}]},
{stage:'SF',matches:[{h:'ARG',a:'CRO',sh:3,sa:0,odds:{hw:1.70,d:3.50,aw:5.00},date:'12.13'},{h:'FRA',a:'MAR',sh:2,sa:0,odds:{hw:1.53,d:3.80,aw:6.00},date:'12.14'}]},
{stage:'TP',matches:[{h:'CRO',a:'MAR',sh:2,sa:1,odds:{hw:2.30,d:3.20,aw:3.00},date:'12.17'}]},
{stage:'FINAL',matches:[{h:'ARG',a:'FRA',sh:3,sa:3,ps:'4-2',odds:{hw:2.50,d:3.10,aw:2.80},date:'12.18'}]}
]};

// ========== 2018俄罗斯世界杯 数据 ==========
const wc2018Data={
info:'2018年俄罗斯世界杯 · 6.14–7.15 · 32队64场 · 🏆冠军: 法国',
groups:{
A:{name:'A组',matches:[{h:'RUS',a:'KSA',sh:5,sa:0,odds:{hw:1.70,d:3.40,aw:5.00},date:'6.14',venue:'卢日尼基球场'},{h:'EGY',a:'URU',sh:0,sa:1,odds:{hw:4.50,d:3.30,aw:1.80},date:'6.15',venue:'叶卡捷琳堡球场'},{h:'RUS',a:'EGY',sh:3,sa:1,odds:{hw:1.90,d:3.20,aw:4.20},date:'6.19',venue:'圣彼得堡球场'},{h:'URU',a:'KSA',sh:1,sa:0,odds:{hw:1.30,d:5.00,aw:10.00},date:'6.20',venue:'顿河畔罗斯托夫球场'},{h:'URU',a:'RUS',sh:3,sa:0,odds:{hw:2.15,d:3.10,aw:3.40},date:'6.25',venue:'萨马拉球场'},{h:'KSA',a:'EGY',sh:2,sa:1,odds:{hw:3.80,d:3.40,aw:1.90},date:'6.25',venue:'伏尔加格勒球场'}]},
B:{name:'B组',matches:[{h:'MAR',a:'IRN',sh:0,sa:1,odds:{hw:2.40,d:3.00,aw:3.00},date:'6.15',venue:'圣彼得堡球场'},{h:'POR',a:'ESP',sh:3,sa:3,odds:{hw:4.00,d:3.30,aw:1.90},date:'6.15',venue:'菲什特球场'},{h:'POR',a:'MAR',sh:1,sa:0,odds:{hw:1.50,d:3.80,aw:6.50},date:'6.20',venue:'卢日尼基球场'},{h:'IRN',a:'ESP',sh:0,sa:1,odds:{hw:8.50,d:4.50,aw:1.36},date:'6.20',venue:'喀山球场'},{h:'IRN',a:'POR',sh:1,sa:1,odds:{hw:6.00,d:3.80,aw:1.55},date:'6.25',venue:'萨兰斯克球场'},{h:'ESP',a:'MAR',sh:2,sa:2,odds:{hw:1.30,d:5.00,aw:9.00},date:'6.25',venue:'加里宁格勒球场'}]},
C:{name:'C组',matches:[{h:'FRA',a:'AUS',sh:2,sa:1,odds:{hw:1.36,d:4.50,aw:8.50},date:'6.16',venue:'喀山球场'},{h:'PER',a:'DEN',sh:0,sa:1,odds:{hw:3.20,d:3.10,aw:2.25},date:'6.16',venue:'萨兰斯克球场'},{h:'DEN',a:'AUS',sh:1,sa:1,odds:{hw:1.85,d:3.30,aw:4.20},date:'6.21',venue:'萨马拉球场'},{h:'FRA',a:'PER',sh:1,sa:0,odds:{hw:1.44,d:4.00,aw:7.50},date:'6.21',venue:'叶卡捷琳堡球场'},{h:'DEN',a:'FRA',sh:0,sa:0,odds:{hw:4.50,d:3.50,aw:1.73},date:'6.26',venue:'卢日尼基球场'},{h:'AUS',a:'PER',sh:0,sa:2,odds:{hw:3.00,d:3.30,aw:2.25},date:'6.26',venue:'索契球场'}]},
D:{name:'D组',matches:[{h:'ARG',a:'ISL',sh:1,sa:1,odds:{hw:1.36,d:4.50,aw:8.50},date:'6.16',venue:'斯巴达克球场'},{h:'CRO',a:'NGA',sh:2,sa:0,odds:{hw:1.80,d:3.30,aw:4.50},date:'6.16',venue:'加里宁格勒球场'},{h:'ARG',a:'CRO',sh:0,sa:3,odds:{hw:2.10,d:3.10,aw:3.50},date:'6.21',venue:'下诺夫哥罗德球场'},{h:'NGA',a:'ISL',sh:2,sa:0,odds:{hw:2.30,d:3.20,aw:3.00},date:'6.22',venue:'伏尔加格勒球场'},{h:'NGA',a:'ARG',sh:1,sa:2,odds:{hw:6.50,d:4.00,aw:1.50},date:'6.26',venue:'圣彼得堡球场'},{h:'ISL',a:'CRO',sh:1,sa:2,odds:{hw:5.50,d:3.60,aw:1.60},date:'6.26',venue:'顿河畔罗斯托夫球场'}]},
E:{name:'E组',matches:[{h:'CRC',a:'SRB',sh:0,sa:1,odds:{hw:3.50,d:3.10,aw:2.10},date:'6.17',venue:'萨马拉球场'},{h:'BRA',a:'SUI',sh:1,sa:1,odds:{hw:1.50,d:3.80,aw:7.00},date:'6.17',venue:'顿河畔罗斯托夫球场'},{h:'BRA',a:'CRC',sh:2,sa:0,odds:{hw:1.22,d:6.00,aw:12.00},date:'6.22',venue:'圣彼得堡球场'},{h:'SRB',a:'SUI',sh:1,sa:2,odds:{hw:2.60,d:3.10,aw:2.70},date:'6.22',venue:'加里宁格勒球场'},{h:'SRB',a:'BRA',sh:0,sa:2,odds:{hw:6.00,d:4.00,aw:1.50},date:'6.27',venue:'斯巴达克球场'},{h:'SUI',a:'CRC',sh:2,sa:2,odds:{hw:1.67,d:3.50,aw:5.00},date:'6.27',venue:'下诺夫哥罗德球场'}]},
F:{name:'F组',matches:[{h:'GER',a:'MEX',sh:0,sa:1,odds:{hw:1.44,d:4.20,aw:7.00},date:'6.17',venue:'卢日尼基球场'},{h:'SWE',a:'KOR',sh:1,sa:0,odds:{hw:2.10,d:3.10,aw:3.50},date:'6.18',venue:'下诺夫哥罗德球场'},{h:'KOR',a:'MEX',sh:1,sa:2,odds:{hw:4.50,d:3.40,aw:1.75},date:'6.23',venue:'顿河畔罗斯托夫球场'},{h:'GER',a:'SWE',sh:2,sa:1,odds:{hw:1.53,d:3.80,aw:6.00},date:'6.23',venue:'索契球场'},{h:'KOR',a:'GER',sh:2,sa:0,odds:{hw:9.00,d:5.00,aw:1.30},date:'6.27',venue:'喀山球场'},{h:'MEX',a:'SWE',sh:0,sa:3,odds:{hw:2.50,d:3.20,aw:2.70},date:'6.27',venue:'叶卡捷琳堡球场'}]},
G:{name:'G组',matches:[{h:'BEL',a:'PAN',sh:3,sa:0,odds:{hw:1.25,d:5.50,aw:11.00},date:'6.18',venue:'索契球场'},{h:'TUN',a:'ENG',sh:1,sa:2,odds:{hw:7.00,d:4.00,aw:1.44},date:'6.18',venue:'伏尔加格勒球场'},{h:'BEL',a:'TUN',sh:5,sa:2,odds:{hw:1.33,d:4.50,aw:9.00},date:'6.23',venue:'斯巴达克球场'},{h:'ENG',a:'PAN',sh:6,sa:1,odds:{hw:1.14,d:7.50,aw:17.00},date:'6.24',venue:'下诺夫哥罗德球场'},{h:'ENG',a:'BEL',sh:0,sa:1,odds:{hw:2.60,d:3.20,aw:2.60},date:'6.28',venue:'加里宁格勒球场'},{h:'PAN',a:'TUN',sh:1,sa:2,odds:{hw:3.50,d:3.30,aw:2.00},date:'6.28',venue:'萨兰斯克球场'}]},
H:{name:'H组',matches:[{h:'COL',a:'JPN',sh:1,sa:2,odds:{hw:1.70,d:3.40,aw:5.00},date:'6.19',venue:'萨兰斯克球场'},{h:'POL',a:'SEN',sh:1,sa:2,odds:{hw:2.30,d:3.10,aw:3.10},date:'6.19',venue:'斯巴达克球场'},{h:'JPN',a:'SEN',sh:2,sa:2,odds:{hw:3.20,d:3.10,aw:2.25},date:'6.24',venue:'叶卡捷琳堡球场'},{h:'POL',a:'COL',sh:0,sa:3,odds:{hw:3.80,d:3.40,aw:1.90},date:'6.24',venue:'喀山球场'},{h:'JPN',a:'POL',sh:0,sa:1,odds:{hw:2.80,d:3.20,aw:2.40},date:'6.28',venue:'伏尔加格勒球场'},{h:'SEN',a:'COL',sh:0,sa:1,odds:{hw:3.50,d:3.30,aw:2.00},date:'6.28',venue:'萨马拉球场'}]}
},
knockout:[
{stage:'R16',matches:[{h:'FRA',a:'ARG',sh:4,sa:3,odds:{hw:2.20,d:3.10,aw:3.30},date:'6.30'},{h:'URU',a:'POR',sh:2,sa:1,odds:{hw:3.00,d:3.00,aw:2.50},date:'6.30'},{h:'ESP',a:'RUS',sh:1,sa:1,ps:'3-4',odds:{hw:1.50,d:3.80,aw:7.00},date:'7.01'},{h:'CRO',a:'DEN',sh:1,sa:1,ps:'3-2',odds:{hw:2.00,d:3.10,aw:4.00},date:'7.01'},{h:'BRA',a:'MEX',sh:2,sa:0,odds:{hw:1.50,d:3.80,aw:7.00},date:'7.02'},{h:'BEL',a:'JPN',sh:3,sa:2,odds:{hw:1.65,d:3.60,aw:5.00},date:'7.02'},{h:'SWE',a:'SUI',sh:1,sa:0,odds:{hw:2.40,d:3.00,aw:3.10},date:'7.03'},{h:'COL',a:'ENG',sh:1,sa:1,ps:'3-4',odds:{hw:3.80,d:3.10,aw:2.05},date:'7.03'}]},
{stage:'QF',matches:[{h:'URU',a:'FRA',sh:0,sa:2,odds:{hw:4.50,d:3.30,aw:1.80},date:'7.06'},{h:'BRA',a:'BEL',sh:1,sa:2,odds:{hw:2.30,d:3.20,aw:3.10},date:'7.06'},{h:'SWE',a:'ENG',sh:0,sa:2,odds:{hw:4.20,d:3.30,aw:1.85},date:'7.07'},{h:'RUS',a:'CRO',sh:2,sa:2,ps:'3-4',odds:{hw:3.50,d:3.00,aw:2.15},date:'7.07'}]},
{stage:'SF',matches:[{h:'FRA',a:'BEL',sh:1,sa:0,odds:{hw:2.30,d:3.20,aw:3.10},date:'7.10'},{h:'CRO',a:'ENG',sh:2,sa:1,odds:{hw:3.60,d:3.10,aw:2.10},date:'7.11'}]},
{stage:'TP',matches:[{h:'BEL',a:'ENG',sh:2,sa:0,odds:{hw:2.80,d:3.30,aw:2.40},date:'7.14'}]},
{stage:'FINAL',matches:[{h:'FRA',a:'CRO',sh:4,sa:2,odds:{hw:1.80,d:3.30,aw:4.50},date:'7.15'}]}
]};

// ========== V13: 2014巴西世界杯 数据 (新增) ==========
const wc2014Data={
info:'2014年巴西世界杯 · 6.12–7.13 · 32队64场 · 🏆冠军: 德国',
groups:{
A:{name:'A组',matches:[{h:'BRA',a:'CRO',sh:3,sa:1,odds:{hw:1.44,d:4.20,aw:7.00},date:'6.12',venue:'圣保罗球场'},{h:'MEX',a:'CMR',sh:1,sa:0,odds:{hw:2.10,d:3.10,aw:3.60},date:'6.13',venue:'纳塔尔球场'},{h:'BRA',a:'MEX',sh:0,sa:0,odds:{hw:1.40,d:4.50,aw:7.50},date:'6.17',venue:'福塔莱萨球场'},{h:'CMR',a:'CRO',sh:0,sa:4,odds:{hw:6.50,d:3.80,aw:1.53},date:'6.18',venue:'马瑙斯球场'},{h:'CMR',a:'BRA',sh:1,sa:4,odds:{hw:11.00,d:5.50,aw:1.25},date:'6.23',venue:'巴西利亚球场'},{h:'CRO',a:'MEX',sh:1,sa:3,odds:{hw:2.30,d:3.20,aw:3.10},date:'6.23',venue:'累西腓球场'}]},
B:{name:'B组',matches:[{h:'ESP',a:'NED',sh:1,sa:5,odds:{hw:1.80,d:3.30,aw:4.50},date:'6.13',venue:'萨尔瓦多球场'},{h:'CHI',a:'AUS',sh:3,sa:1,odds:{hw:1.50,d:3.80,aw:7.00},date:'6.13',venue:'库亚巴球场'},{h:'AUS',a:'NED',sh:2,sa:3,odds:{hw:7.50,d:4.00,aw:1.44},date:'6.18',venue:'阿雷格里港球场'},{h:'ESP',a:'CHI',sh:0,sa:2,odds:{hw:2.30,d:3.20,aw:3.10},date:'6.18',venue:'里约热内卢球场'},{h:'AUS',a:'ESP',sh:0,sa:3,odds:{hw:9.00,d:5.00,aw:1.30},date:'6.23',venue:'库里蒂巴球场'},{h:'NED',a:'CHI',sh:2,sa:0,odds:{hw:1.90,d:3.30,aw:4.20},date:'6.23',venue:'圣保罗球场'}]},
C:{name:'C组',matches:[{h:'COL',a:'GRE',sh:3,sa:0,odds:{hw:1.85,d:3.30,aw:4.33},date:'6.14',venue:'贝洛奥里藏特球场'},{h:'CIV',a:'JPN',sh:2,sa:1,odds:{hw:2.50,d:3.10,aw:2.87},date:'6.14',venue:'累西腓球场'},{h:'COL',a:'CIV',sh:2,sa:1,odds:{hw:2.00,d:3.30,aw:3.80},date:'6.19',venue:'巴西利亚球场'},{h:'JPN',a:'GRE',sh:0,sa:0,odds:{hw:2.15,d:3.20,aw:3.50},date:'6.19',venue:'纳塔尔球场'},{h:'JPN',a:'COL',sh:1,sa:4,odds:{hw:4.33,d:3.50,aw:1.80},date:'6.24',venue:'库亚巴球场'},{h:'GRE',a:'CIV',sh:2,sa:1,odds:{hw:3.60,d:3.30,aw:2.05},date:'6.24',venue:'福塔莱萨球场'}]},
D:{name:'D组',matches:[{h:'URU',a:'CRC',sh:1,sa:3,odds:{hw:1.44,d:4.00,aw:8.00},date:'6.14',venue:'福塔莱萨球场'},{h:'ENG',a:'ITA',sh:1,sa:2,odds:{hw:2.60,d:3.10,aw:2.80},date:'6.14',venue:'马瑙斯球场'},{h:'URU',a:'ENG',sh:2,sa:1,odds:{hw:3.00,d:3.20,aw:2.40},date:'6.19',venue:'圣保罗球场'},{h:'ITA',a:'CRC',sh:0,sa:1,odds:{hw:1.50,d:3.80,aw:7.00},date:'6.20',venue:'累西腓球场'},{h:'ITA',a:'URU',sh:0,sa:1,odds:{hw:2.30,d:3.20,aw:3.10},date:'6.24',venue:'纳塔尔球场'},{h:'CRC',a:'ENG',sh:0,sa:0,odds:{hw:7.00,d:4.50,aw:1.40},date:'6.24',venue:'贝洛奥里藏特球场'}]},
E:{name:'E组',matches:[{h:'SUI',a:'ECU',sh:2,sa:1,odds:{hw:2.40,d:3.10,aw:3.00},date:'6.15',venue:'巴西利亚球场'},{h:'FRA',a:'HON',sh:3,sa:0,odds:{hw:1.25,d:5.50,aw:11.00},date:'6.15',venue:'阿雷格里港球场'},{h:'SUI',a:'FRA',sh:2,sa:5,odds:{hw:5.50,d:3.50,aw:1.65},date:'6.20',venue:'萨尔瓦多球场'},{h:'HON',a:'ECU',sh:1,sa:2,odds:{hw:5.00,d:3.40,aw:1.73},date:'6.20',venue:'库里蒂巴球场'},{h:'HON',a:'SUI',sh:0,sa:3,odds:{hw:8.00,d:4.50,aw:1.40},date:'6.25',venue:'马瑙斯球场'},{h:'ECU',a:'FRA',sh:0,sa:0,odds:{hw:5.50,d:3.80,aw:1.57},date:'6.25',venue:'里约热内卢球场'}]},
F:{name:'F组',matches:[{h:'ARG',a:'BIH',sh:2,sa:1,odds:{hw:1.44,d:4.20,aw:7.00},date:'6.15',venue:'里约热内卢球场'},{h:'IRN',a:'NGA',sh:0,sa:0,odds:{hw:3.20,d:3.10,aw:2.30},date:'6.16',venue:'库里蒂巴球场'},{h:'ARG',a:'IRN',sh:1,sa:0,odds:{hw:1.20,d:6.50,aw:13.00},date:'6.21',venue:'贝洛奥里藏特球场'},{h:'NGA',a:'BIH',sh:1,sa:0,odds:{hw:3.50,d:3.30,aw:2.10},date:'6.21',venue:'库亚巴球场'},{h:'NGA',a:'ARG',sh:2,sa:3,odds:{hw:9.00,d:5.00,aw:1.30},date:'6.25',venue:'阿雷格里港球场'},{h:'BIH',a:'IRN',sh:3,sa:1,odds:{hw:1.85,d:3.40,aw:4.33},date:'6.25',venue:'萨尔瓦多球场'}]},
G:{name:'G组',matches:[{h:'GER',a:'POR',sh:4,sa:0,odds:{hw:2.00,d:3.20,aw:3.80},date:'6.16',venue:'萨尔瓦多球场'},{h:'GHA',a:'USA',sh:1,sa:2,odds:{hw:3.20,d:3.10,aw:2.30},date:'6.16',venue:'纳塔尔球场'},{h:'GER',a:'GHA',sh:2,sa:2,odds:{hw:1.50,d:4.00,aw:6.50},date:'6.21',venue:'福塔莱萨球场'},{h:'USA',a:'POR',sh:2,sa:2,odds:{hw:4.50,d:3.50,aw:1.75},date:'6.22',venue:'马瑙斯球场'},{h:'USA',a:'GER',sh:0,sa:1,odds:{hw:7.00,d:4.50,aw:1.40},date:'6.26',venue:'累西腓球场'},{h:'POR',a:'GHA',sh:2,sa:1,odds:{hw:2.30,d:3.30,aw:3.00},date:'6.26',venue:'巴西利亚球场'}]},
H:{name:'H组',matches:[{h:'BEL',a:'ALG',sh:2,sa:1,odds:{hw:1.65,d:3.50,aw:5.50},date:'6.17',venue:'贝洛奥里藏特球场'},{h:'RUS',a:'KOR',sh:1,sa:1,odds:{hw:2.10,d:3.10,aw:3.60},date:'6.17',venue:'库亚巴球场'},{h:'BEL',a:'RUS',sh:1,sa:0,odds:{hw:2.30,d:3.10,aw:3.20},date:'6.22',venue:'里约热内卢球场'},{h:'KOR',a:'ALG',sh:2,sa:4,odds:{hw:2.50,d:3.20,aw:2.80},date:'6.22',venue:'阿雷格里港球场'},{h:'KOR',a:'BEL',sh:0,sa:1,odds:{hw:5.50,d:3.80,aw:1.57},date:'6.26',venue:'圣保罗球场'},{h:'ALG',a:'RUS',sh:1,sa:1,odds:{hw:3.60,d:3.30,aw:2.05},date:'6.26',venue:'库里蒂巴球场'}]}
},
knockout:[
{stage:'R16',matches:[{h:'BRA',a:'CHI',sh:1,sa:1,ps:'3-2',odds:{hw:1.75,d:3.40,aw:4.80},date:'6.28'},{h:'COL',a:'URU',sh:2,sa:0,odds:{hw:2.10,d:3.10,aw:3.60},date:'6.28'},{h:'NED',a:'MEX',sh:2,sa:1,odds:{hw:2.05,d:3.20,aw:3.75},date:'6.29'},{h:'CRC',a:'GRE',sh:1,sa:1,ps:'5-3',odds:{hw:3.20,d:3.00,aw:2.30},date:'6.29'},{h:'FRA',a:'NGA',sh:2,sa:0,odds:{hw:1.50,d:3.80,aw:7.00},date:'6.30'},{h:'GER',a:'ALG',sh:2,sa:1,odds:{hw:1.36,d:4.50,aw:8.50},date:'6.30'},{h:'ARG',a:'SUI',sh:1,sa:0,odds:{hw:1.60,d:3.60,aw:6.00},date:'7.01'},{h:'BEL',a:'USA',sh:2,sa:1,odds:{hw:1.90,d:3.30,aw:4.20},date:'7.01'}]},
{stage:'QF',matches:[{h:'FRA',a:'GER',sh:0,sa:1,odds:{hw:2.80,d:3.10,aw:2.60},date:'7.04'},{h:'BRA',a:'COL',sh:2,sa:1,odds:{hw:1.80,d:3.50,aw:4.50},date:'7.04'},{h:'ARG',a:'BEL',sh:1,sa:0,odds:{hw:2.50,d:3.10,aw:2.90},date:'7.05'},{h:'NED',a:'CRC',sh:0,sa:0,ps:'4-3',odds:{hw:1.40,d:4.50,aw:7.50},date:'7.05'}]},
{stage:'SF',matches:[{h:'BRA',a:'GER',sh:1,sa:7,odds:{hw:2.60,d:3.20,aw:2.70},date:'7.08'},{h:'NED',a:'ARG',sh:0,sa:0,ps:'2-4',odds:{hw:3.00,d:3.20,aw:2.40},date:'7.09'}]},
{stage:'TP',matches:[{h:'BRA',a:'NED',sh:0,sa:3,odds:{hw:3.10,d:3.30,aw:2.30},date:'7.12'}]},
{stage:'FINAL',matches:[{h:'GER',a:'ARG',sh:1,sa:0,odds:{hw:2.30,d:3.10,aw:3.20},date:'7.13'}]}
]};

// ========== 2010南非世界杯 数据 ==========
const wc2010Data={
info:'2010年南非世界杯 · 6.11–7.11 · 32队64场 · 🏆冠军: 西班牙',
groups:{
A:{name:'A组',matches:[{h:'RSA',a:'MEX',sh:1,sa:1,odds:{hw:3.50,d:3.20,aw:2.10},date:'2010.06.11',venue:'足球城球场'},{h:'URU',a:'FRA',sh:0,sa:0,odds:{hw:4.00,d:3.20,aw:1.95},date:'2010.06.11',venue:'绿点球场'},{h:'RSA',a:'URU',sh:0,sa:3,odds:{hw:3.00,d:3.10,aw:2.40},date:'2010.06.16',venue:'洛夫托斯球场'},{h:'FRA',a:'MEX',sh:0,sa:2,odds:{hw:2.00,d:3.10,aw:4.00},date:'2010.06.17',venue:'彼得·莫卡巴球场'},{h:'MEX',a:'URU',sh:0,sa:1,odds:{hw:3.20,d:3.10,aw:2.30},date:'2010.06.22',venue:'皇家巴福肯球场'},{h:'FRA',a:'RSA',sh:1,sa:2,odds:{hw:1.85,d:3.30,aw:4.50},date:'2010.06.22',venue:'自由州球场'}]},
B:{name:'B组',matches:[{h:'KOR',a:'GRE',sh:2,sa:0,odds:{hw:2.30,d:3.10,aw:3.20},date:'2010.06.12',venue:'纳尔逊·曼德拉湾球场'},{h:'ARG',a:'NGA',sh:1,sa:0,odds:{hw:1.40,d:4.20,aw:8.50},date:'2010.06.12',venue:'埃利斯公园球场'},{h:'ARG',a:'KOR',sh:4,sa:1,odds:{hw:1.50,d:3.80,aw:7.00},date:'2010.06.17',venue:'足球城球场'},{h:'GRE',a:'NGA',sh:2,sa:1,odds:{hw:2.50,d:3.10,aw:2.90},date:'2010.06.17',venue:'自由州球场'},{h:'NGA',a:'KOR',sh:2,sa:2,odds:{hw:4.20,d:3.40,aw:1.85},date:'2010.06.22',venue:'德班球场'},{h:'GRE',a:'ARG',sh:0,sa:2,odds:{hw:7.50,d:4.00,aw:1.44},date:'2010.06.22',venue:'彼得·莫卡巴球场'}]},
C:{name:'C组',matches:[{h:'ENG',a:'USA',sh:1,sa:1,odds:{hw:1.75,d:3.40,aw:5.00},date:'2010.06.12',venue:'皇家巴福肯球场'},{h:'ALG',a:'SVN',sh:0,sa:1,odds:{hw:3.00,d:3.10,aw:2.45},date:'2010.06.13',venue:'彼得·莫卡巴球场'},{h:'SVN',a:'USA',sh:2,sa:2,odds:{hw:3.20,d:3.20,aw:2.25},date:'2010.06.18',venue:'埃利斯公园球场'},{h:'ENG',a:'ALG',sh:0,sa:0,odds:{hw:1.30,d:4.80,aw:10.00},date:'2010.06.18',venue:'绿点球场'},{h:'SVN',a:'ENG',sh:0,sa:1,odds:{hw:6.50,d:3.80,aw:1.53},date:'2010.06.23',venue:'纳尔逊·曼德拉湾球场'},{h:'USA',a:'ALG',sh:1,sa:0,odds:{hw:2.05,d:3.30,aw:3.60},date:'2010.06.23',venue:'洛夫托斯球场'}]},
D:{name:'D组',matches:[{h:'SRB',a:'GHA',sh:0,sa:1,odds:{hw:2.30,d:3.10,aw:3.20},date:'2010.06.13',venue:'洛夫托斯球场'},{h:'GER',a:'AUS',sh:4,sa:0,odds:{hw:1.40,d:4.20,aw:8.00},date:'2010.06.13',venue:'德班球场'},{h:'GER',a:'SRB',sh:0,sa:1,odds:{hw:1.50,d:3.80,aw:7.00},date:'2010.06.18',venue:'纳尔逊·曼德拉湾球场'},{h:'GHA',a:'AUS',sh:1,sa:1,odds:{hw:2.25,d:3.20,aw:3.20},date:'2010.06.19',venue:'皇家巴福肯球场'},{h:'GHA',a:'GER',sh:0,sa:1,odds:{hw:6.00,d:3.80,aw:1.57},date:'2010.06.23',venue:'足球城球场'},{h:'AUS',a:'SRB',sh:2,sa:1,odds:{hw:4.50,d:3.60,aw:1.75},date:'2010.06.23',venue:'姆博贝拉球场'}]},
E:{name:'E组',matches:[{h:'NED',a:'DEN',sh:2,sa:0,odds:{hw:1.80,d:3.40,aw:4.50},date:'2010.06.14',venue:'足球城球场'},{h:'JPN',a:'CMR',sh:1,sa:0,odds:{hw:3.20,d:3.20,aw:2.25},date:'2010.06.14',venue:'自由州球场'},{h:'NED',a:'JPN',sh:1,sa:0,odds:{hw:1.36,d:4.50,aw:9.00},date:'2010.06.19',venue:'德班球场'},{h:'CMR',a:'DEN',sh:1,sa:2,odds:{hw:4.50,d:3.40,aw:1.80},date:'2010.06.19',venue:'洛夫托斯球场'},{h:'DEN',a:'JPN',sh:1,sa:3,odds:{hw:2.30,d:3.30,aw:3.00},date:'2010.06.24',venue:'皇家巴福肯球场'},{h:'CMR',a:'NED',sh:1,sa:2,odds:{hw:7.00,d:4.00,aw:1.44},date:'2010.06.24',venue:'绿点球场'}]},
F:{name:'F组',matches:[{h:'ITA',a:'PAR',sh:1,sa:1,odds:{hw:1.50,d:3.80,aw:7.00},date:'2010.06.14',venue:'绿点球场'},{h:'NZL',a:'SVK',sh:1,sa:1,odds:{hw:4.50,d:3.30,aw:1.85},date:'2010.06.15',venue:'皇家巴福肯球场'},{h:'SVK',a:'PAR',sh:0,sa:2,odds:{hw:3.50,d:3.10,aw:2.15},date:'2010.06.20',venue:'自由州球场'},{h:'ITA',a:'NZL',sh:1,sa:1,odds:{hw:1.20,d:6.00,aw:15.00},date:'2010.06.20',venue:'姆博贝拉球场'},{h:'SVK',a:'ITA',sh:3,sa:2,odds:{hw:6.50,d:4.00,aw:1.50},date:'2010.06.24',venue:'埃利斯公园球场'},{h:'PAR',a:'NZL',sh:0,sa:0,odds:{hw:1.55,d:3.80,aw:6.50},date:'2010.06.24',venue:'彼得·莫卡巴球场'}]},
G:{name:'G组',matches:[{h:'CIV',a:'POR',sh:0,sa:0,odds:{hw:4.00,d:3.20,aw:1.95},date:'2010.06.15',venue:'纳尔逊·曼德拉湾球场'},{h:'BRA',a:'PRK',sh:2,sa:1,odds:{hw:1.08,d:9.00,aw:26.00},date:'2010.06.15',venue:'埃利斯公园球场'},{h:'BRA',a:'CIV',sh:3,sa:1,odds:{hw:1.57,d:3.60,aw:6.50},date:'2010.06.20',venue:'足球城球场'},{h:'POR',a:'PRK',sh:7,sa:0,odds:{hw:1.14,d:7.50,aw:17.00},date:'2010.06.21',venue:'绿点球场'},{h:'POR',a:'BRA',sh:0,sa:0,odds:{hw:3.80,d:3.20,aw:2.00},date:'2010.06.25',venue:'德班球场'},{h:'PRK',a:'CIV',sh:0,sa:3,odds:{hw:15.00,d:6.50,aw:1.18},date:'2010.06.25',venue:'姆博贝拉球场'}]},
H:{name:'H组',matches:[{h:'HON',a:'CHI',sh:0,sa:1,odds:{hw:6.00,d:3.80,aw:1.55},date:'2010.06.16',venue:'姆博贝拉球场'},{h:'ESP',a:'SUI',sh:0,sa:1,odds:{hw:1.30,d:4.80,aw:10.00},date:'2010.06.16',venue:'德班球场'},{h:'CHI',a:'SUI',sh:1,sa:0,odds:{hw:2.15,d:3.20,aw:3.50},date:'2010.06.21',venue:'纳尔逊·曼德拉湾球场'},{h:'ESP',a:'HON',sh:2,sa:0,odds:{hw:1.08,d:9.00,aw:26.00},date:'2010.06.21',venue:'埃利斯公园球场'},{h:'CHI',a:'ESP',sh:1,sa:2,odds:{hw:6.50,d:4.00,aw:1.50},date:'2010.06.25',venue:'洛夫托斯球场'},{h:'SUI',a:'HON',sh:0,sa:0,odds:{hw:1.57,d:3.80,aw:6.00},date:'2010.06.25',venue:'自由州球场'}]}
},
knockout:[
{stage:'R16',matches:[{h:'URU',a:'KOR',sh:2,sa:1,odds:{hw:2.05,d:3.10,aw:3.80},date:'2010.06.26'},{h:'USA',a:'GHA',sh:1,sa:2,odds:{hw:2.30,d:3.10,aw:3.20},date:'2010.06.26'},{h:'GER',a:'ENG',sh:4,sa:1,odds:{hw:2.40,d:3.10,aw:3.00},date:'2010.06.27'},{h:'ARG',a:'MEX',sh:3,sa:1,odds:{hw:1.65,d:3.50,aw:5.50},date:'2010.06.27'},{h:'NED',a:'SVK',sh:2,sa:1,odds:{hw:1.44,d:4.00,aw:7.50},date:'2010.06.28'},{h:'BRA',a:'CHI',sh:3,sa:0,odds:{hw:1.61,d:3.60,aw:5.80},date:'2010.06.28'},{h:'PAR',a:'JPN',sh:0,sa:0,ps:'5-3',odds:{hw:2.40,d:3.00,aw:3.10},date:'2010.06.29'},{h:'ESP',a:'POR',sh:1,sa:0,odds:{hw:2.20,d:3.00,aw:3.50},date:'2010.06.29'}]},
{stage:'QF',matches:[{h:'NED',a:'BRA',sh:2,sa:1,odds:{hw:3.50,d:3.20,aw:2.10},date:'2010.07.02'},{h:'URU',a:'GHA',sh:1,sa:1,ps:'4-2',odds:{hw:2.00,d:3.10,aw:4.00},date:'2010.07.02'},{h:'ARG',a:'GER',sh:0,sa:4,odds:{hw:2.80,d:3.20,aw:2.50},date:'2010.07.03'},{h:'PAR',a:'ESP',sh:0,sa:1,odds:{hw:7.00,d:3.80,aw:1.50},date:'2010.07.03'}]},
{stage:'SF',matches:[{h:'URU',a:'NED',sh:2,sa:3,odds:{hw:4.50,d:3.40,aw:1.80},date:'2010.07.06'},{h:'GER',a:'ESP',sh:0,sa:1,odds:{hw:2.90,d:3.20,aw:2.45},date:'2010.07.07'}]},
{stage:'TP',matches:[{h:'URU',a:'GER',sh:2,sa:3,odds:{hw:4.50,d:3.40,aw:1.80},date:'2010.07.10'}]},
{stage:'FINAL',matches:[{h:'NED',a:'ESP',sh:0,sa:1,odds:{hw:3.00,d:3.10,aw:2.40},date:'2010.07.11'}]}
]};
// ========== 2006德国世界杯 数据 ==========
const wc2006Data={
info:'2006年德国世界杯 · 6.9–7.9 · 32队64场 · 🏆冠军: 意大利',
groups:{
A:{name:'A组',matches:[{h:'GER',a:'CRC',sh:4,sa:2,odds:{hw:1.28,d:5.00,aw:10.00},date:'2006.06.09',venue:'慕尼黑安联球场'},{h:'POL',a:'ECU',sh:0,sa:2,odds:{hw:2.50,d:3.10,aw:2.80},date:'2006.06.09',venue:'盖尔森基兴球场'},{h:'GER',a:'POL',sh:1,sa:0,odds:{hw:1.40,d:4.00,aw:8.00},date:'2006.06.14',venue:'多特蒙德球场'},{h:'ECU',a:'CRC',sh:3,sa:0,odds:{hw:2.15,d:3.20,aw:3.30},date:'2006.06.15',venue:'汉堡球场'},{h:'ECU',a:'GER',sh:0,sa:3,odds:{hw:7.00,d:4.00,aw:1.44},date:'2006.06.20',venue:'柏林奥林匹克球场'},{h:'CRC',a:'POL',sh:1,sa:2,odds:{hw:4.50,d:3.40,aw:1.75},date:'2006.06.20',venue:'汉诺威球场'}]},
B:{name:'B组',matches:[{h:'ENG',a:'PAR',sh:1,sa:0,odds:{hw:1.57,d:3.50,aw:6.00},date:'2006.06.10',venue:'法兰克福球场'},{h:'TRI',a:'SWE',sh:0,sa:0,odds:{hw:7.00,d:3.80,aw:1.50},date:'2006.06.10',venue:'多特蒙德球场'},{h:'ENG',a:'TRI',sh:2,sa:0,odds:{hw:1.18,d:6.00,aw:15.00},date:'2006.06.15',venue:'纽伦堡球场'},{h:'SWE',a:'PAR',sh:1,sa:0,odds:{hw:2.30,d:3.10,aw:3.10},date:'2006.06.15',venue:'柏林奥林匹克球场'},{h:'SWE',a:'ENG',sh:2,sa:2,odds:{hw:3.80,d:3.20,aw:1.95},date:'2006.06.20',venue:'科隆球场'},{h:'PAR',a:'TRI',sh:2,sa:0,odds:{hw:1.65,d:3.50,aw:5.50},date:'2006.06.20',venue:'凯泽斯劳滕球场'}]},
C:{name:'C组',matches:[{h:'ARG',a:'CIV',sh:2,sa:1,odds:{hw:1.80,d:3.30,aw:4.50},date:'2006.06.10',venue:'汉堡球场'},{h:'SCG',a:'NED',sh:0,sa:1,odds:{hw:6.50,d:3.80,aw:1.53},date:'2006.06.11',venue:'莱比锡球场'},{h:'ARG',a:'SCG',sh:6,sa:0,odds:{hw:1.30,d:4.80,aw:10.00},date:'2006.06.16',venue:'盖尔森基兴球场'},{h:'NED',a:'CIV',sh:2,sa:1,odds:{hw:1.70,d:3.40,aw:5.00},date:'2006.06.16',venue:'斯图加特球场'},{h:'NED',a:'ARG',sh:0,sa:0,odds:{hw:2.80,d:3.10,aw:2.50},date:'2006.06.21',venue:'法兰克福球场'},{h:'CIV',a:'SCG',sh:3,sa:2,odds:{hw:2.00,d:3.30,aw:3.60},date:'2006.06.21',venue:'慕尼黑安联球场'}]},
D:{name:'D组',matches:[{h:'MEX',a:'IRN',sh:3,sa:1,odds:{hw:1.70,d:3.30,aw:5.50},date:'2006.06.11',venue:'纽伦堡球场'},{h:'ANG',a:'POR',sh:0,sa:1,odds:{hw:9.00,d:4.50,aw:1.33},date:'2006.06.11',venue:'科隆球场'},{h:'MEX',a:'ANG',sh:0,sa:0,odds:{hw:1.44,d:4.00,aw:7.00},date:'2006.06.16',venue:'汉诺威球场'},{h:'POR',a:'IRN',sh:2,sa:0,odds:{hw:1.30,d:4.50,aw:10.00},date:'2006.06.17',venue:'法兰克福球场'},{h:'POR',a:'MEX',sh:2,sa:1,odds:{hw:1.85,d:3.30,aw:4.20},date:'2006.06.21',venue:'盖尔森基兴球场'},{h:'IRN',a:'ANG',sh:1,sa:1,odds:{hw:2.60,d:3.20,aw:2.60},date:'2006.06.21',venue:'莱比锡球场'}]},
E:{name:'E组',matches:[{h:'USA',a:'CZE',sh:0,sa:3,odds:{hw:4.50,d:3.30,aw:1.80},date:'2006.06.12',venue:'盖尔森基兴球场'},{h:'ITA',a:'GHA',sh:2,sa:0,odds:{hw:1.50,d:3.60,aw:7.50},date:'2006.06.12',venue:'汉诺威球场'},{h:'ITA',a:'USA',sh:1,sa:1,odds:{hw:1.36,d:4.20,aw:9.00},date:'2006.06.17',venue:'凯泽斯劳滕球场'},{h:'CZE',a:'GHA',sh:0,sa:2,odds:{hw:2.00,d:3.20,aw:3.80},date:'2006.06.17',venue:'科隆球场'},{h:'CZE',a:'ITA',sh:0,sa:2,odds:{hw:4.50,d:3.30,aw:1.80},date:'2006.06.22',venue:'汉堡球场'},{h:'GHA',a:'USA',sh:2,sa:1,odds:{hw:2.80,d:3.20,aw:2.40},date:'2006.06.22',venue:'纽伦堡球场'}]},
F:{name:'F组',matches:[{h:'AUS',a:'JPN',sh:3,sa:1,odds:{hw:2.80,d:3.10,aw:2.50},date:'2006.06.12',venue:'凯泽斯劳滕球场'},{h:'BRA',a:'CRO',sh:1,sa:0,odds:{hw:1.44,d:4.00,aw:7.00},date:'2006.06.13',venue:'柏林奥林匹克球场'},{h:'BRA',a:'AUS',sh:2,sa:0,odds:{hw:1.22,d:5.50,aw:12.00},date:'2006.06.18',venue:'慕尼黑安联球场'},{h:'JPN',a:'CRO',sh:0,sa:0,odds:{hw:3.60,d:3.20,aw:2.05},date:'2006.06.18',venue:'纽伦堡球场'},{h:'JPN',a:'BRA',sh:1,sa:4,odds:{hw:12.00,d:6.00,aw:1.18},date:'2006.06.22',venue:'多特蒙德球场'},{h:'CRO',a:'AUS',sh:2,sa:2,odds:{hw:2.10,d:3.20,aw:3.40},date:'2006.06.22',venue:'斯图加特球场'}]},
G:{name:'G组',matches:[{h:'KOR',a:'TOG',sh:2,sa:1,odds:{hw:1.53,d:3.60,aw:6.50},date:'2006.06.13',venue:'法兰克福球场'},{h:'FRA',a:'SUI',sh:0,sa:0,odds:{hw:1.70,d:3.30,aw:5.50},date:'2006.06.13',venue:'斯图加特球场'},{h:'FRA',a:'KOR',sh:1,sa:1,odds:{hw:1.44,d:4.00,aw:7.50},date:'2006.06.18',venue:'莱比锡球场'},{h:'TOG',a:'SUI',sh:0,sa:2,odds:{hw:6.00,d:3.80,aw:1.53},date:'2006.06.19',venue:'多特蒙德球场'},{h:'TOG',a:'FRA',sh:0,sa:2,odds:{hw:15.00,d:6.50,aw:1.15},date:'2006.06.23',venue:'科隆球场'},{h:'SUI',a:'KOR',sh:2,sa:0,odds:{hw:2.40,d:3.10,aw:2.90},date:'2006.06.23',venue:'汉诺威球场'}]},
H:{name:'H组',matches:[{h:'ESP',a:'UKR',sh:4,sa:0,odds:{hw:1.57,d:3.50,aw:6.00},date:'2006.06.14',venue:'莱比锡球场'},{h:'TUN',a:'KSA',sh:2,sa:2,odds:{hw:2.10,d:3.10,aw:3.50},date:'2006.06.14',venue:'慕尼黑安联球场'},{h:'ESP',a:'TUN',sh:3,sa:1,odds:{hw:1.22,d:5.50,aw:12.00},date:'2006.06.19',venue:'斯图加特球场'},{h:'KSA',a:'UKR',sh:0,sa:4,odds:{hw:6.00,d:3.80,aw:1.53},date:'2006.06.19',venue:'汉堡球场'},{h:'KSA',a:'ESP',sh:0,sa:1,odds:{hw:15.00,d:6.00,aw:1.18},date:'2006.06.23',venue:'凯泽斯劳滕球场'},{h:'UKR',a:'TUN',sh:1,sa:0,odds:{hw:1.70,d:3.40,aw:5.00},date:'2006.06.23',venue:'柏林奥林匹克球场'}]}
},
knockout:[
{stage:'R16',matches:[{h:'GER',a:'SWE',sh:2,sa:0,odds:{hw:1.60,d:3.50,aw:6.00},date:'2006.06.24'},{h:'ARG',a:'MEX',sh:2,sa:1,odds:{hw:1.65,d:3.40,aw:5.50},date:'2006.06.24'},{h:'ENG',a:'ECU',sh:1,sa:0,odds:{hw:1.44,d:4.00,aw:7.50},date:'2006.06.25'},{h:'POR',a:'NED',sh:1,sa:0,odds:{hw:2.80,d:3.00,aw:2.60},date:'2006.06.25'},{h:'ITA',a:'AUS',sh:1,sa:0,odds:{hw:1.50,d:3.60,aw:7.50},date:'2006.06.26'},{h:'SUI',a:'UKR',sh:0,sa:0,ps:'0-3',odds:{hw:2.20,d:3.00,aw:3.40},date:'2006.06.26'},{h:'BRA',a:'GHA',sh:3,sa:0,odds:{hw:1.40,d:4.00,aw:8.50},date:'2006.06.27'},{h:'ESP',a:'FRA',sh:1,sa:3,odds:{hw:2.10,d:3.10,aw:3.50},date:'2006.06.27'}]},
{stage:'QF',matches:[{h:'GER',a:'ARG',sh:1,sa:1,ps:'4-2',odds:{hw:2.50,d:3.10,aw:2.80},date:'2006.06.30'},{h:'ITA',a:'UKR',sh:3,sa:0,odds:{hw:1.70,d:3.30,aw:5.00},date:'2006.06.30'},{h:'ENG',a:'POR',sh:0,sa:0,ps:'1-3',odds:{hw:2.10,d:3.00,aw:3.60},date:'2006.07.01'},{h:'BRA',a:'FRA',sh:0,sa:1,odds:{hw:2.30,d:3.10,aw:3.10},date:'2006.07.01'}]},
{stage:'SF',matches:[{h:'GER',a:'ITA',sh:0,sa:2,odds:{hw:2.60,d:3.00,aw:2.80},date:'2006.07.04'},{h:'POR',a:'FRA',sh:0,sa:1,odds:{hw:3.50,d:3.00,aw:2.15},date:'2006.07.05'}]},
{stage:'TP',matches:[{h:'GER',a:'POR',sh:3,sa:1,odds:{hw:2.20,d:3.20,aw:3.20},date:'2006.07.08'}]},
{stage:'FINAL',matches:[{h:'ITA',a:'FRA',sh:1,sa:1,ps:'5-3',odds:{hw:2.30,d:3.00,aw:3.20},date:'2006.07.09'}]}
]};
// ========== 2002韩日世界杯 数据 ==========
const wc2002Data={
info:'2002年韩日世界杯 · 5.31–6.30 · 32队64场 · 🏆冠军: 巴西',
groups:{
A:{name:'A组',matches:[{h:'FRA',a:'SEN',sh:0,sa:1,odds:{hw:1.40,d:4.00,aw:8.50},date:'2002.05.31',venue:'首尔世界杯竞技场'},{h:'URU',a:'DEN',sh:1,sa:2,odds:{hw:2.80,d:3.10,aw:2.50},date:'2002.06.01',venue:'蔚山文殊球场'},{h:'DEN',a:'SEN',sh:1,sa:1,odds:{hw:1.80,d:3.30,aw:4.50},date:'2002.06.06',venue:'大邱世界杯竞技场'},{h:'FRA',a:'URU',sh:0,sa:0,odds:{hw:1.65,d:3.40,aw:5.50},date:'2002.06.06',venue:'釜山亚运主竞技场'},{h:'DEN',a:'FRA',sh:2,sa:0,odds:{hw:4.00,d:3.30,aw:1.90},date:'2002.06.11',venue:'仁川文鹤竞技场'},{h:'SEN',a:'URU',sh:3,sa:3,odds:{hw:2.40,d:3.30,aw:2.80},date:'2002.06.11',venue:'水原世界杯竞技场'}]},
B:{name:'B组',matches:[{h:'PAR',a:'RSA',sh:2,sa:2,odds:{hw:2.20,d:3.10,aw:3.30},date:'2002.06.02',venue:'釜山亚运主竞技场'},{h:'ESP',a:'SVN',sh:3,sa:1,odds:{hw:1.36,d:4.50,aw:8.00},date:'2002.06.02',venue:'光州世界杯竞技场'},{h:'ESP',a:'PAR',sh:3,sa:1,odds:{hw:1.50,d:3.80,aw:6.50},date:'2002.06.07',venue:'全州世界杯竞技场'},{h:'RSA',a:'SVN',sh:1,sa:0,odds:{hw:2.40,d:3.20,aw:2.80},date:'2002.06.08',venue:'大邱世界杯竞技场'},{h:'RSA',a:'ESP',sh:2,sa:3,odds:{hw:7.00,d:4.00,aw:1.44},date:'2002.06.12',venue:'大田世界杯竞技场'},{h:'SVN',a:'PAR',sh:1,sa:3,odds:{hw:4.00,d:3.40,aw:1.85},date:'2002.06.12',venue:'济州世界杯竞技场'}]},
C:{name:'C组',matches:[{h:'BRA',a:'TUR',sh:2,sa:1,odds:{hw:1.50,d:3.80,aw:6.50},date:'2002.06.03',venue:'蔚山文殊球场'},{h:'CHN',a:'CRC',sh:0,sa:2,odds:{hw:3.50,d:3.20,aw:2.05},date:'2002.06.04',venue:'光州世界杯竞技场'},{h:'BRA',a:'CHN',sh:4,sa:0,odds:{hw:1.05,d:10.00,aw:30.00},date:'2002.06.08',venue:'济州世界杯竞技场'},{h:'CRC',a:'TUR',sh:1,sa:1,odds:{hw:3.80,d:3.30,aw:1.95},date:'2002.06.09',venue:'仁川文鹤竞技场'},{h:'CRC',a:'BRA',sh:2,sa:5,odds:{hw:15.00,d:6.00,aw:1.15},date:'2002.06.13',venue:'水原世界杯竞技场'},{h:'TUR',a:'CHN',sh:3,sa:0,odds:{hw:1.40,d:4.00,aw:8.00},date:'2002.06.13',venue:'首尔世界杯竞技场'}]},
D:{name:'D组',matches:[{h:'KOR',a:'POL',sh:2,sa:0,odds:{hw:3.20,d:3.10,aw:2.25},date:'2002.06.04',venue:'釜山亚运主竞技场'},{h:'USA',a:'POR',sh:3,sa:2,odds:{hw:5.00,d:3.50,aw:1.65},date:'2002.06.05',venue:'水原世界杯竞技场'},{h:'KOR',a:'USA',sh:1,sa:1,odds:{hw:2.60,d:3.10,aw:2.70},date:'2002.06.10',venue:'大邱世界杯竞技场'},{h:'POR',a:'POL',sh:4,sa:0,odds:{hw:1.30,d:5.00,aw:9.00},date:'2002.06.10',venue:'全州世界杯竞技场'},{h:'POR',a:'KOR',sh:0,sa:1,odds:{hw:1.80,d:3.30,aw:4.50},date:'2002.06.14',venue:'仁川文鹤竞技场'},{h:'POL',a:'USA',sh:3,sa:1,odds:{hw:3.00,d:3.30,aw:2.25},date:'2002.06.14',venue:'大田世界杯竞技场'}]},
E:{name:'E组',matches:[{h:'IRL',a:'CMR',sh:1,sa:1,odds:{hw:2.60,d:3.10,aw:2.70},date:'2002.06.01',venue:'新潟体育场'},{h:'GER',a:'KSA',sh:8,sa:0,odds:{hw:1.22,d:5.50,aw:12.00},date:'2002.06.01',venue:'札幌穹顶体育场'},{h:'GER',a:'IRL',sh:1,sa:1,odds:{hw:1.57,d:3.60,aw:6.00},date:'2002.06.05',venue:'茨城鹿岛体育场'},{h:'CMR',a:'KSA',sh:1,sa:0,odds:{hw:1.70,d:3.40,aw:5.00},date:'2002.06.06',venue:'埼玉体育场'},{h:'CMR',a:'GER',sh:0,sa:2,odds:{hw:5.00,d:3.60,aw:1.65},date:'2002.06.11',venue:'静冈体育场'},{h:'KSA',a:'IRL',sh:0,sa:3,odds:{hw:7.00,d:4.00,aw:1.44},date:'2002.06.11',venue:'横滨国际竞技场'}]},
F:{name:'F组',matches:[{h:'ARG',a:'NGA',sh:1,sa:0,odds:{hw:1.40,d:4.00,aw:8.00},date:'2002.06.02',venue:'茨城鹿岛体育场'},{h:'ENG',a:'SWE',sh:1,sa:1,odds:{hw:1.90,d:3.20,aw:4.20},date:'2002.06.02',venue:'埼玉体育场'},{h:'SWE',a:'NGA',sh:2,sa:1,odds:{hw:2.05,d:3.20,aw:3.60},date:'2002.06.07',venue:'神户翼体育场'},{h:'ARG',a:'ENG',sh:0,sa:1,odds:{hw:2.20,d:3.10,aw:3.30},date:'2002.06.07',venue:'札幌穹顶体育场'},{h:'SWE',a:'ARG',sh:1,sa:1,odds:{hw:4.50,d:3.30,aw:1.80},date:'2002.06.12',venue:'宫城体育场'},{h:'NGA',a:'ENG',sh:0,sa:0,odds:{hw:7.00,d:3.80,aw:1.50},date:'2002.06.12',venue:'大阪长居体育场'}]},
G:{name:'G组',matches:[{h:'CRO',a:'MEX',sh:0,sa:1,odds:{hw:2.30,d:3.10,aw:3.10},date:'2002.06.03',venue:'新潟体育场'},{h:'ITA',a:'ECU',sh:2,sa:0,odds:{hw:1.33,d:4.50,aw:9.00},date:'2002.06.03',venue:'札幌穹顶体育场'},{h:'ITA',a:'CRO',sh:1,sa:2,odds:{hw:1.65,d:3.40,aw:5.50},date:'2002.06.08',venue:'茨城鹿岛体育场'},{h:'MEX',a:'ECU',sh:2,sa:1,odds:{hw:2.00,d:3.30,aw:3.60},date:'2002.06.09',venue:'宫城体育场'},{h:'MEX',a:'ITA',sh:1,sa:1,odds:{hw:4.00,d:3.20,aw:1.95},date:'2002.06.13',venue:'大分体育场'},{h:'ECU',a:'CRO',sh:1,sa:0,odds:{hw:5.50,d:3.60,aw:1.60},date:'2002.06.13',venue:'横滨国际竞技场'}]},
H:{name:'H组',matches:[{h:'JPN',a:'BEL',sh:2,sa:2,odds:{hw:3.80,d:3.20,aw:1.95},date:'2002.06.04',venue:'埼玉体育场'},{h:'RUS',a:'TUN',sh:2,sa:0,odds:{hw:1.70,d:3.30,aw:5.50},date:'2002.06.05',venue:'神户翼体育场'},{h:'JPN',a:'RUS',sh:1,sa:0,odds:{hw:2.80,d:3.10,aw:2.50},date:'2002.06.09',venue:'横滨国际竞技场'},{h:'TUN',a:'BEL',sh:1,sa:1,odds:{hw:5.50,d:3.50,aw:1.60},date:'2002.06.10',venue:'大分体育场'},{h:'TUN',a:'JPN',sh:0,sa:2,odds:{hw:4.00,d:3.40,aw:1.85},date:'2002.06.14',venue:'大阪长居体育场'},{h:'BEL',a:'RUS',sh:3,sa:2,odds:{hw:2.40,d:3.20,aw:2.80},date:'2002.06.14',venue:'静冈体育场'}]}
},
knockout:[
{stage:'R16',matches:[{h:'GER',a:'PAR',sh:1,sa:0,odds:{hw:1.65,d:3.40,aw:5.50},date:'2002.06.15'},{h:'DEN',a:'ENG',sh:0,sa:3,odds:{hw:3.80,d:3.20,aw:1.95},date:'2002.06.15'},{h:'SWE',a:'SEN',sh:1,sa:2,odds:{hw:2.40,d:3.10,aw:2.90},date:'2002.06.16'},{h:'ESP',a:'IRL',sh:1,sa:1,ps:'3-2',odds:{hw:1.80,d:3.20,aw:4.50},date:'2002.06.16'},{h:'MEX',a:'USA',sh:0,sa:2,odds:{hw:2.20,d:3.10,aw:3.30},date:'2002.06.17'},{h:'BRA',a:'BEL',sh:2,sa:0,odds:{hw:1.50,d:3.80,aw:6.50},date:'2002.06.17'},{h:'JPN',a:'TUR',sh:0,sa:1,odds:{hw:2.30,d:3.00,aw:3.20},date:'2002.06.18'},{h:'KOR',a:'ITA',sh:2,sa:1,odds:{hw:6.00,d:3.60,aw:1.57},date:'2002.06.18'}]},
{stage:'QF',matches:[{h:'ENG',a:'BRA',sh:1,sa:2,odds:{hw:3.50,d:3.10,aw:2.10},date:'2002.06.21'},{h:'GER',a:'USA',sh:1,sa:0,odds:{hw:1.75,d:3.30,aw:5.00},date:'2002.06.21'},{h:'KOR',a:'ESP',sh:0,sa:0,ps:'5-3',odds:{hw:5.50,d:3.40,aw:1.65},date:'2002.06.22'},{h:'TUR',a:'SEN',sh:1,sa:0,odds:{hw:2.15,d:3.10,aw:3.40},date:'2002.06.22'}]},
{stage:'SF',matches:[{h:'GER',a:'KOR',sh:1,sa:0,odds:{hw:1.80,d:3.30,aw:4.50},date:'2002.06.25'},{h:'BRA',a:'TUR',sh:1,sa:0,odds:{hw:1.55,d:3.60,aw:6.00},date:'2002.06.26'}]},
{stage:'TP',matches:[{h:'KOR',a:'TUR',sh:2,sa:3,odds:{hw:2.80,d:3.20,aw:2.40},date:'2002.06.29'}]},
{stage:'FINAL',matches:[{h:'GER',a:'BRA',sh:0,sa:2,odds:{hw:3.20,d:3.10,aw:2.25},date:'2002.06.30'}]}
]};

const koLabels={R16:'16强',QF:'8强',SF:'4强',TP:'季军赛',FINAL:'决赛'};
const koStages=['R16','QF','SF','TP','FINAL'];
// ========== V18: Match Detail Data (goal timelines, cards, attendance, referee) ==========
const wcMatchDetails={"2022|A|QAT|ECU":{"goals":[{"min":16,"side":"away","scorer":"恩纳·瓦伦西亚 (Enner Valencia)","type":"penalty"},{"min":31,"side":"away","scorer":"恩纳·瓦伦西亚 (Enner Valencia)","type":"header"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":2,"red":0}},"attendance":67372,"referee":"Daniele Orsato (ITA)"},"2022|A|SEN|NED":{"goals":[{"min":84,"side":"away","scorer":"科迪·加克波 (Cody Gakpo)","type":"header"},{"min":99,"side":"away","scorer":"戴维·克拉森 (Davy Klaassen)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":41721,"referee":"Wilton Sampaio (BRA)"},"2022|A|QAT|SEN":{"goals":[{"min":41,"side":"away","scorer":"布拉耶·迪亚 (Boulaye Dia)","type":"shot"},{"min":48,"side":"away","scorer":"法马拉·迪德希欧 (Famara Diédhiou)","type":"header"},{"min":78,"side":"home","scorer":"穆罕默德·蒙塔里 (Mohammed Muntari)","type":"header"},{"min":84,"side":"away","scorer":"班巴·迪昂 (Bamba Dieng)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":41797,"referee":"Antonio Mateu Lahoz (ESP)"},"2022|A|NED|ECU":{"goals":[{"min":6,"side":"home","scorer":"科迪·加克波 (Cody Gakpo)","type":"shot"},{"min":49,"side":"away","scorer":"恩纳·瓦伦西亚 (Enner Valencia)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":44833,"referee":"Mustapha Ghorbal (ALG)"},"2022|A|ECU|SEN":{"goals":[{"min":44,"side":"away","scorer":"伊斯梅拉·萨尔 (Ismaïla Sarr)","type":"penalty"},{"min":67,"side":"home","scorer":"莫伊塞斯·凯塞多 (Moisés Caicedo)","type":"shot"},{"min":70,"side":"away","scorer":"卡利杜·库利巴利 (Kalidou Koulibaly)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":44569,"referee":"Clément Turpin (FRA)"},"2022|A|NED|QAT":{"goals":[{"min":26,"side":"home","scorer":"科迪·加克波 (Cody Gakpo)","type":"shot"},{"min":49,"side":"home","scorer":"弗伦基·德容 (Frenkie de Jong)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":66784,"referee":"Bakary Gassama (GAM)"},"2022|B|ENG|IRN":{"goals":[{"min":35,"side":"home","scorer":"朱德·贝林厄姆 (Jude Bellingham)","type":"header"},{"min":43,"side":"home","scorer":"布卡约·萨卡 (Bukayo Saka)","type":"shot"},{"min":"45+1","side":"home","scorer":"拉希姆·斯特林 (Raheem Sterling)","type":"shot"},{"min":62,"side":"home","scorer":"布卡约·萨卡 (Bukayo Saka)","type":"shot"},{"min":65,"side":"away","scorer":"迈赫迪·塔雷米 (Mehdi Taremi)","type":"shot"},{"min":71,"side":"home","scorer":"马库斯·拉什福德 (Marcus Rashford)","type":"shot"},{"min":90,"side":"home","scorer":"杰克·格里利什 (Jack Grealish)","type":"shot"},{"min":103,"side":"away","scorer":"迈赫迪·塔雷米 (Mehdi Taremi)","type":"penalty"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":2,"red":0}},"attendance":45334,"referee":"Raphael Claus (BRA)"},"2022|B|USA|WAL":{"goals":[{"min":36,"side":"home","scorer":"蒂莫西·维阿 (Timothy Weah)","type":"shot"},{"min":82,"side":"away","scorer":"加雷斯·贝尔 (Gareth Bale)","type":"penalty"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":2,"red":0}},"attendance":43418,"referee":"Abdulrahman Al-Jassim (QAT)"},"2022|B|WAL|IRN":{"goals":[{"min":98,"side":"away","scorer":"鲁兹贝赫·切什米 (Rouzbeh Cheshmi)","type":"shot"},{"min":101,"side":"away","scorer":"拉明·雷扎伊安 (Ramin Rezaeian)","type":"shot"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":2,"red":0}},"attendance":40875,"referee":"Mario Escobar (GUA)"},"2022|B|ENG|USA":{"goals":[],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":1,"red":0}},"attendance":68811,"referee":"Jesús Valenzuela (VEN)"},"2022|B|WAL|ENG":{"goals":[{"min":50,"side":"away","scorer":"马库斯·拉什福德 (Marcus Rashford)","type":"free_kick"},{"min":51,"side":"away","scorer":"菲尔·福登 (Phil Foden)","type":"shot"},{"min":68,"side":"away","scorer":"马库斯·拉什福德 (Marcus Rashford)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":44297,"referee":"Slavko Vinčić (SVN)"},"2022|B|IRN|USA":{"goals":[{"min":38,"side":"away","scorer":"克里斯蒂安·普利西奇 (Christian Pulisic)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":42127,"referee":"Antonio Mateu Lahoz (ESP)"},"2022|C|ARG|KSA":{"goals":[{"min":10,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"penalty"},{"min":48,"side":"away","scorer":"萨利赫·谢赫里 (Saleh Al-Shehri)","type":"shot"},{"min":53,"side":"away","scorer":"萨勒姆·达瓦萨里 (Salem Al-Dawsari)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":6,"red":0}},"attendance":88012,"referee":"Slavko Vinčić (SVN)"},"2022|C|MEX|POL":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":39369,"referee":"Chris Beath (AUS)"},"2022|C|POL|KSA":{"goals":[{"min":39,"side":"home","scorer":"彼得·泽林斯基 (Piotr Zieliński)","type":"shot"},{"min":82,"side":"home","scorer":"罗伯特·莱万多夫斯基 (Robert Lewandowski)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":44259,"referee":"Wilton Sampaio (BRA)"},"2022|C|ARG|MEX":{"goals":[{"min":64,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"},{"min":87,"side":"home","scorer":"恩佐·费尔南德斯 (Enzo Fernández)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":4,"red":0}},"attendance":88966,"referee":"Daniele Orsato (ITA)"},"2022|C|POL|ARG":{"goals":[{"min":46,"side":"away","scorer":"亚历克西斯·麦卡利斯特 (Álexis Mac Allister)","type":"shot"},{"min":67,"side":"away","scorer":"胡利安·阿尔瓦雷斯 (Julián Álvarez)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":44089,"referee":"Danny Makkelie (NED)"},"2022|C|KSA|MEX":{"goals":[{"min":47,"side":"away","scorer":"亨利·马丁 (Henry Martín)","type":"shot"},{"min":52,"side":"away","scorer":"路易斯·查韦斯 (Luis Chávez)","type":"free_kick"},{"min":95,"side":"home","scorer":"萨勒姆·达瓦萨里 (Salem Al-Dawsari)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":84985,"referee":"Michael Oliver (ENG)"},"2022|D|DEN|TUN":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":42925,"referee":"César Arturo Ramos (MEX)"},"2022|D|FRA|AUS":{"goals":[{"min":9,"side":"away","scorer":"克雷格·古德温 (Craig Goodwin)","type":"shot"},{"min":27,"side":"home","scorer":"阿德里安·拉比奥 (Adrien Rabiot)","type":"header"},{"min":32,"side":"home","scorer":"奥利维耶·吉鲁 (Olivier Giroud)","type":"shot"},{"min":68,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"header"},{"min":71,"side":"home","scorer":"奥利维耶·吉鲁 (Olivier Giroud)","type":"header"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":2,"red":0}},"attendance":40875,"referee":"Victor Gomes (RSA)"},"2022|D|TUN|AUS":{"goals":[{"min":23,"side":"away","scorer":"米切尔·杜克 (Mitchell Duke)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":0,"red":0}},"attendance":41823,"referee":"Daniel Siebert (GER)"},"2022|D|FRA|DEN":{"goals":[{"min":61,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"},{"min":68,"side":"away","scorer":"安德烈亚斯·克里斯滕森 (Andreas Christensen)","type":"header"},{"min":86,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":42860,"referee":"Szymon Marciniak (POL)"},"2022|D|AUS|DEN":{"goals":[{"min":60,"side":"home","scorer":"马修·莱基 (Mathew Leckie)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":41232,"referee":"Mustapha Ghorbal (ALG)"},"2022|D|TUN|FRA":{"goals":[{"min":58,"side":"home","scorer":"瓦赫比·哈兹里 (Wahbi Khazri)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":43864,"referee":"Matthew Conger (NZL)"},"2022|E|GER|JPN":{"goals":[{"min":33,"side":"home","scorer":"伊尔卡伊·京多安 (İlkay Gündoğan)","type":"penalty"},{"min":75,"side":"away","scorer":"堂安律 (Ritsu Dōan)","type":"shot"},{"min":83,"side":"away","scorer":"浅野拓磨 (Takuma Asano)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":42608,"referee":"Iván Barton (SLV)"},"2022|E|ESP|CRC":{"goals":[{"min":11,"side":"home","scorer":"达尼·奥尔莫 (Dani Olmo)","type":"shot"},{"min":21,"side":"home","scorer":"马尔科·阿森西奥 (Marco Asensio)","type":"shot"},{"min":31,"side":"home","scorer":"费兰·托雷斯 (Ferran Torres)","type":"penalty"},{"min":54,"side":"home","scorer":"费兰·托雷斯 (Ferran Torres)","type":"shot"},{"min":74,"side":"home","scorer":"加维 (Gavi)","type":"shot"},{"min":90,"side":"home","scorer":"卡洛斯·索莱尔 (Carlos Soler)","type":"shot"},{"min":92,"side":"home","scorer":"阿尔瓦罗·莫拉塔 (Álvaro Morata)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":2,"red":0}},"attendance":40111,"referee":"Mohammed Abdulla (UAE)"},"2022|E|JPN|CRC":{"goals":[{"min":81,"side":"away","scorer":"凯谢尔·富勒 (Keysher Fuller)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":41608,"referee":"Michael Oliver (ENG)"},"2022|E|ESP|GER":{"goals":[{"min":62,"side":"home","scorer":"阿尔瓦罗·莫拉塔 (Álvaro Morata)","type":"shot"},{"min":83,"side":"away","scorer":"尼卡拉斯·菲尔克鲁格 (Niclas Füllkrug)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":68895,"referee":"Danny Makkelie (NED)"},"2022|E|JPN|ESP":{"goals":[{"min":11,"side":"away","scorer":"阿尔瓦罗·莫拉塔 (Álvaro Morata)","type":"header"},{"min":48,"side":"home","scorer":"堂安律 (Ritsu Dōan)","type":"shot"},{"min":51,"side":"home","scorer":"田中碧 (Ao Tanaka)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":44851,"referee":"Victor Gomes (RSA)"},"2022|E|CRC|GER":{"goals":[{"min":10,"side":"home","scorer":"塞尔西奥·格瓦拉 (Sergio Guevara)","type":"header"},{"min":58,"side":"home","scorer":"胡安·巴尔加斯 (Juan Vargas)","type":"shot"},{"min":73,"side":"away","scorer":"凯·哈弗茨 (Kai Havertz)","type":"shot"},{"min":85,"side":"away","scorer":"凯·哈弗茨 (Kai Havertz)","type":"shot"},{"min":89,"side":"away","scorer":"尼卡拉斯·菲尔克鲁格 (Niclas Füllkrug)","type":"shot"},{"min":89,"side":"away","scorer":"尼卡拉斯·菲尔克鲁格 (Niclas Füllkrug)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":67054,"referee":"Stéphanie Frappart (FRA)"},"2022|F|MAR|CRO":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":59407,"referee":"Fernando Rapallini (ARG)"},"2022|F|BEL|CAN":{"goals":[{"min":44,"side":"home","scorer":"米西·巴舒亚伊 (Michy Batshuayi)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":40432,"referee":"Janny Sikazwe (ZAM)"},"2022|F|BEL|MAR":{"goals":[{"min":73,"side":"away","scorer":"罗曼·赛斯 (Romain Saïss)","type":"shot"},{"min":92,"side":"away","scorer":"扎卡里亚·阿布赫拉尔 (Zakaria Aboukhlal)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":43984,"referee":"César Arturo Ramos (MEX)"},"2022|F|CRO|CAN":{"goals":[{"min":2,"side":"away","scorer":"阿方索·戴维斯 (Alphonso Davies)","type":"header"},{"min":36,"side":"home","scorer":"安德烈·克拉马里奇 (Andrej Kramarić)","type":"shot"},{"min":44,"side":"home","scorer":"马尔科·利瓦亚 (Marko Livaja)","type":"shot"},{"min":70,"side":"home","scorer":"安德烈·克拉马里奇 (Andrej Kramarić)","type":"shot"},{"min":94,"side":"home","scorer":"洛夫罗·马耶尔 (Lovro Majer)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":44374,"referee":"Andrés Matonte (URU)"},"2022|F|CRO|BEL":{"goals":[],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":43984,"referee":"Anthony Taylor (ENG)"},"2022|F|CAN|MAR":{"goals":[{"min":4,"side":"away","scorer":"哈基姆·齐耶赫 (Hakim Ziyech)","type":"shot"},{"min":23,"side":"away","scorer":"尤素夫·恩内斯里 (Youssef En-Nesyri)","type":"shot"},{"min":40,"side":"home","scorer":"奈史密斯·阿格德 (Nayef Aguerd)","type":"own_goal"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":1,"red":0}},"attendance":43984,"referee":"Raphael Claus (BRA)"},"2022|G|SUI|CMR":{"goals":[{"min":48,"side":"home","scorer":"布雷尔·恩博洛 (Breel Embolo)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":39089,"referee":"Facundo Tello (ARG)"},"2022|G|BRA|SRB":{"goals":[{"min":62,"side":"home","scorer":"理查利森 (Richarlison)","type":"shot"},{"min":73,"side":"home","scorer":"理查利森 (Richarlison)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":88103,"referee":"Alireza Faghani (IRN)"},"2022|G|CMR|SRB":{"goals":[{"min":29,"side":"home","scorer":"让-夏尔·卡斯泰莱托 (Jean-Charles Castelletto)","type":"shot"},{"min":"45+1","side":"away","scorer":"斯特拉希尼亚·帕夫洛维奇 (Strahinja Pavlović)","type":"header"},{"min":"45+3","side":"away","scorer":"谢尔盖·米林科维奇-萨维奇 (Sergej Milinković-Savić)","type":"shot"},{"min":53,"side":"away","scorer":"亚历山大·米特罗维奇 (Aleksandar Mitrović)","type":"shot"},{"min":63,"side":"home","scorer":"文森特·阿布巴卡尔 (Vincent Aboubakar)","type":"shot"},{"min":66,"side":"home","scorer":"埃里克·马克西姆·舒波-莫廷 (Eric Maxim Choupo-Moting)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":39789,"referee":"Mohammed Abdulla (UAE)"},"2022|G|BRA|SUI":{"goals":[{"min":83,"side":"home","scorer":"卡塞米罗 (Casemiro)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":43649,"referee":"Iván Barton (SLV)"},"2022|G|SRB|SUI":{"goals":[{"min":20,"side":"away","scorer":"杰尔丹·沙奇里 (Xherdan Shaqiri)","type":"shot"},{"min":26,"side":"home","scorer":"亚历山大·米特罗维奇 (Aleksandar Mitrović)","type":"header"},{"min":35,"side":"home","scorer":"杜尚·弗拉霍维奇 (Dušan Vlahović)","type":"shot"},{"min":44,"side":"away","scorer":"布雷尔·恩博洛 (Breel Embolo)","type":"shot"},{"min":48,"side":"away","scorer":"雷莫·弗罗伊勒 (Remo Freuler)","type":"shot"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":4,"red":0}},"attendance":42000,"referee":"Fernando Rapallini (ARG)"},"2022|G|CMR|BRA":{"goals":[{"min":92,"side":"home","scorer":"文森特·阿布巴卡尔 (Vincent Aboubakar)","type":"header"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":2,"red":0}},"attendance":85986,"referee":"Ismail Elfath (USA)"},"2022|H|URU|KOR":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":41663,"referee":"Clément Turpin (FRA)"},"2022|H|POR|GHA":{"goals":[{"min":65,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"penalty"},{"min":73,"side":"away","scorer":"安德雷·阿尤 (André Ayew)","type":"shot"},{"min":78,"side":"home","scorer":"若昂·费利克斯 (João Félix)","type":"shot"},{"min":80,"side":"home","scorer":"拉斐尔·莱昂 (Rafael Leão)","type":"shot"},{"min":89,"side":"away","scorer":"奥斯曼·布卡里 (Osman Bukari)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":42662,"referee":"Ismail Elfath (USA)"},"2022|H|KOR|GHA":{"goals":[{"min":24,"side":"away","scorer":"穆罕默德·萨利苏 (Mohammed Salisu)","type":"shot"},{"min":34,"side":"away","scorer":"穆罕默德·库杜斯 (Mohammed Kudus)","type":"header"},{"min":58,"side":"home","scorer":"赵圭成 (Cho Gue-sung)","type":"header"},{"min":61,"side":"home","scorer":"赵圭成 (Cho Gue-sung)","type":"header"},{"min":68,"side":"away","scorer":"穆罕默德·库杜斯 (Mohammed Kudus)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":43983,"referee":"Anthony Taylor (ENG)"},"2022|H|POR|URU":{"goals":[{"min":54,"side":"home","scorer":"布鲁诺·费尔南德斯 (Bruno Fernandes)","type":"shot"},{"min":93,"side":"home","scorer":"布鲁诺·费尔南德斯 (Bruno Fernandes)","type":"penalty"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":2,"red":0}},"attendance":88668,"referee":"Alireza Faghani (IRN)"},"2022|H|GHA|URU":{"goals":[{"min":26,"side":"away","scorer":"乔治安·德阿拉斯卡埃塔 (Giorgian De Arrascaeta)","type":"shot"},{"min":32,"side":"away","scorer":"乔治安·德阿拉斯卡埃塔 (Giorgian De Arrascaeta)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43443,"referee":"Daniel Siebert (GER)"},"2022|H|KOR|POR":{"goals":[{"min":5,"side":"away","scorer":"里卡多·奥尔塔 (Ricardo Horta)","type":"shot"},{"min":27,"side":"home","scorer":"金英权 (Kim Young-gwon)","type":"shot"},{"min":91,"side":"home","scorer":"黄喜灿 (Hwang Hee-chan)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":0,"red":0}},"attendance":44097,"referee":"Facundo Tello (ARG)"},"2022|R16|NED|USA":{"goals":[{"min":10,"side":"home","scorer":"孟菲斯·德佩 (Memphis Depay)","type":"shot"},{"min":"45+1","side":"home","scorer":"戴利·布林德 (Daley Blind)","type":"shot"},{"min":76,"side":"away","scorer":"哈吉·赖特 (Haji Wright)","type":"shot"},{"min":81,"side":"home","scorer":"登泽尔·邓弗里斯 (Denzel Dumfries)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":44846,"referee":"Wilton Sampaio (BRA)"},"2022|R16|ARG|AUS":{"goals":[{"min":35,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"},{"min":57,"side":"home","scorer":"胡利安·阿尔瓦雷斯 (Julián Álvarez)","type":"shot"},{"min":77,"side":"away","scorer":"恩佐·费尔南德斯 (Enzo Fernández)","type":"own_goal"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":45032,"referee":"Szymon Marciniak (POL)"},"2022|R16|FRA|POL":{"goals":[{"min":44,"side":"home","scorer":"奥利维耶·吉鲁 (Olivier Giroud)","type":"shot"},{"min":74,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"},{"min":91,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"},{"min":99,"side":"away","scorer":"罗伯特·莱万多夫斯基 (Robert Lewandowski)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":40989,"referee":"Jesús Valenzuela (VEN)"},"2022|R16|ENG|SEN":{"goals":[{"min":38,"side":"home","scorer":"乔丹·亨德森 (Jordan Henderson)","type":"shot"},{"min":"45+3","side":"home","scorer":"哈里·凯恩 (Harry Kane)","type":"shot"},{"min":57,"side":"home","scorer":"布卡约·萨卡 (Bukayo Saka)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":1,"red":0}},"attendance":65985,"referee":"Iván Barton (SLV)"},"2022|R16|JPN|CRO":{"goals":[{"min":43,"side":"home","scorer":"前田大然 (Daizen Maeda)","type":"shot"},{"min":55,"side":"away","scorer":"伊万·佩里西奇 (Ivan Perišić)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":42583,"referee":"Ismail Elfath (USA)"},"2022|R16|BRA|KOR":{"goals":[{"min":7,"side":"home","scorer":"维尼修斯·儒尼奥尔 (Vinícius Júnior)","type":"shot"},{"min":13,"side":"home","scorer":"内马尔·达席尔瓦 (Neymar)","type":"penalty"},{"min":29,"side":"home","scorer":"理查利森 (Richarlison)","type":"shot"},{"min":36,"side":"home","scorer":"卢卡斯·帕奎塔 (Lucas Paquetá)","type":"shot"},{"min":76,"side":"away","scorer":"白昇浩 (Paik Seung-ho)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":43847,"referee":"Clément Turpin (FRA)"},"2022|R16|MAR|ESP":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":44867,"referee":"Fernando Rapallini (ARG)"},"2022|R16|POR|SUI":{"goals":[{"min":17,"side":"home","scorer":"贡萨洛·拉莫斯 (Gonçalo Ramos)","type":"shot"},{"min":33,"side":"home","scorer":"佩佩 (Pepe)","type":"header"},{"min":51,"side":"home","scorer":"贡萨洛·拉莫斯 (Gonçalo Ramos)","type":"shot"},{"min":55,"side":"away","scorer":"曼努埃尔·阿坎吉 (Manuel Akanji)","type":"shot"},{"min":67,"side":"home","scorer":"贡萨洛·拉莫斯 (Gonçalo Ramos)","type":"shot"},{"min":73,"side":"home","scorer":"拉斐尔·格雷罗 (Raphaël Guerreiro)","type":"shot"},{"min":92,"side":"home","scorer":"拉斐尔·莱昂 (Rafael Leão)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":2,"red":0}},"attendance":83910,"referee":"César Arturo Ramos (MEX)"},"2022|QF|CRO|BRA":{"goals":[{"min":106,"side":"home","scorer":"布鲁诺·佩特科维奇 (Bruno Petković)","type":"shot"},{"min":106,"side":"away","scorer":"内马尔·达席尔瓦 (Neymar)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43893,"referee":"Michael Oliver (ENG)"},"2022|QF|NED|ARG":{"goals":[{"min":35,"side":"home","scorer":"纳韦尔·莫利纳 (Nahuel Molina)","type":"shot"},{"min":73,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"penalty"},{"min":83,"side":"away","scorer":"沃特·韦格霍斯特 (Wout Weghorst)","type":"header"},{"min":101,"side":"away","scorer":"沃特·韦格霍斯特 (Wout Weghorst)","type":"shot"}],"cards":{"home":{"yellow":5,"red":0},"away":{"yellow":8,"red":1}},"attendance":88235,"referee":"Antonio Mateu Lahoz (ESP)"},"2022|QF|MAR|POR":{"goals":[{"min":42,"side":"home","scorer":"尤素夫·恩内斯里 (Youssef En-Nesyri)","type":"header"}],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":1,"red":0}},"attendance":44198,"referee":"Facundo Tello (ARG)"},"2022|QF|ENG|FRA":{"goals":[{"min":17,"side":"away","scorer":"奥雷利安·楚阿梅尼 (Aurélien Tchouaméni)","type":"shot"},{"min":54,"side":"home","scorer":"哈里·凯恩 (Harry Kane)","type":"penalty"},{"min":78,"side":"away","scorer":"奥利维耶·吉鲁 (Olivier Giroud)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":68895,"referee":"Wilton Sampaio (BRA)"},"2022|SF|ARG|CRO":{"goals":[{"min":34,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"penalty"},{"min":39,"side":"home","scorer":"胡利安·阿尔瓦雷斯 (Julián Álvarez)","type":"shot"},{"min":69,"side":"home","scorer":"胡利安·阿尔瓦雷斯 (Julián Álvarez)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":88966,"referee":"Daniele Orsato (ITA)"},"2022|SF|FRA|MAR":{"goals":[{"min":5,"side":"home","scorer":"特奥·埃尔南德斯 (Théo Hernandez)","type":"shot"},{"min":79,"side":"home","scorer":"朗达尔·科洛·穆阿尼 (Randal Kolo Muani)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":1,"red":0}},"attendance":68294,"referee":"César Arturo Ramos (MEX)"},"2022|TP|CRO|MAR":{"goals":[{"min":7,"side":"home","scorer":"约什科·格瓦迪奥尔 (Joško Gvardiol)","type":"header"},{"min":9,"side":"away","scorer":"阿什拉夫·达里 (Achraf Dari)","type":"header"},{"min":42,"side":"home","scorer":"米斯拉夫·奥尔西奇 (Mislav Oršić)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":44137,"referee":"Abdulrahman Al-Jassim (QAT)"},"2022|FINAL|ARG|FRA":{"goals":[{"min":23,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"penalty"},{"min":36,"side":"home","scorer":"安赫尔·迪马利亚 (Ángel Di María)","type":"shot"},{"min":80,"side":"away","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"penalty"},{"min":81,"side":"away","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"},{"min":108,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"},{"min":118,"side":"away","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"penalty"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":3,"red":0}},"attendance":88966,"referee":"Szymon Marciniak (POL)"},
"2018|A|EGY|URU":{"goals":[{"min":89,"side":"away","scorer":"何塞·希门尼斯 (José Giménez)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":0,"red":0}},"attendance":27015,"referee":"Björn Kuipers (NED)"},
"2018|A|KSA|EGY":{"goals":[{"min":22,"side":"away","scorer":"穆罕默德·萨拉赫 (Mohamed Salah)","type":"shot"},{"min":"45+6","side":"home","scorer":"萨勒曼·法拉杰 (Salman Al-Faraj)","type":"penalty"},{"min":95,"side":"home","scorer":"萨利姆·达瓦萨里 (Salem Al-Dawsari)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":36823,"referee":"Wilmar Roldán (COL)"},
"2018|A|RUS|EGY":{"goals":[{"min":47,"side":"home","scorer":"艾哈迈德·法蒂 (Ahmed Fathy)","type":"own_goal"},{"min":59,"side":"home","scorer":"丹尼斯·切里舍夫 (Denis Cheryshev)","type":"shot"},{"min":62,"side":"home","scorer":"阿尔乔姆·久巴 (Artem Dzyuba)","type":"shot"},{"min":73,"side":"away","scorer":"穆罕默德·萨拉赫 (Mohamed Salah)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":64468,"referee":"Enrique Cáceres (PAR)"},
"2018|A|RUS|KSA":{"goals":[{"min":12,"side":"home","scorer":"尤里·加津斯基 (Yuri Gazinsky)","type":"header"},{"min":43,"side":"home","scorer":"丹尼斯·切里舍夫 (Denis Cheryshev)","type":"shot"},{"min":71,"side":"home","scorer":"阿尔乔姆·久巴 (Artem Dzyuba)","type":"header"},{"min":91,"side":"home","scorer":"丹尼斯·切里舍夫 (Denis Cheryshev)","type":"shot"},{"min":94,"side":"home","scorer":"亚历山大·戈洛温 (Aleksandr Golovin)","type":"free_kick"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":78011,"referee":"Néstor Pitana (ARG)"},
"2018|A|URU|KSA":{"goals":[{"min":23,"side":"home","scorer":"路易斯·苏亚雷斯 (Luis Suárez)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":2,"red":0}},"attendance":42678,"referee":"Clément Turpin (FRA)"},
"2018|A|URU|RUS":{"goals":[{"min":10,"side":"home","scorer":"路易斯·苏亚雷斯 (Luis Suárez)","type":"free_kick"},{"min":23,"side":"away","scorer":"丹尼斯·切里舍夫 (Denis Cheryshev)","type":"own_goal"},{"min":90,"side":"home","scorer":"埃丁森·卡瓦尼 (Edinson Cavani)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":1}},"attendance":41970,"referee":"Malang Diedhiou (SEN)"},
"2018|B|ESP|MAR":{"goals":[{"min":14,"side":"away","scorer":"哈立德·布塔伊卜 (Khalid Boutaïb)","type":"shot"},{"min":19,"side":"home","scorer":"伊斯高 (Isco)","type":"shot"},{"min":81,"side":"away","scorer":"尤素夫·恩内斯里 (Youssef En-Nesyri)","type":"header"},{"min":91,"side":"home","scorer":"伊亚戈·阿斯帕斯 (Iago Aspas)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":6,"red":0}},"attendance":33973,"referee":"Ravshan Irmatov (UZB)"},
"2018|B|IRN|ESP":{"goals":[{"min":54,"side":"away","scorer":"迭戈·科斯塔 (Diego Costa)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":42718,"referee":"Andrés Cunha (URU)"},
"2018|B|IRN|POR":{"goals":[{"min":45,"side":"away","scorer":"里卡多·夸雷斯马 (Ricardo Quaresma)","type":"shot"},{"min":93,"side":"home","scorer":"卡里姆·安萨里法德 (Karim Ansarifard)","type":"penalty"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":3,"red":0}},"attendance":41685,"referee":"Enrique Cáceres (PAR)"},
"2018|B|MAR|IRN":{"goals":[{"min":95,"side":"away","scorer":"阿齐兹·布哈杜兹 (Aziz Bouhaddouz)","type":"own_goal"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":62548,"referee":"Cüneyt Çakır (TUR)"},
"2018|B|POR|ESP":{"goals":[{"min":4,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"penalty"},{"min":24,"side":"away","scorer":"迭戈·科斯塔 (Diego Costa)","type":"shot"},{"min":44,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"shot"},{"min":55,"side":"away","scorer":"迭戈·科斯塔 (Diego Costa)","type":"shot"},{"min":58,"side":"away","scorer":"纳乔 (Nacho)","type":"shot"},{"min":88,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"free_kick"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":43866,"referee":"Gianluca Rocchi (ITA)"},
"2018|B|POR|MAR":{"goals":[{"min":4,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":78011,"referee":"Mark Geiger (USA)"},
"2018|C|AUS|PER":{"goals":[{"min":18,"side":"away","scorer":"安德烈·卡里略 (André Carrillo)","type":"shot"},{"min":50,"side":"away","scorer":"保罗·格雷罗 (Paolo Guerrero)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":44073,"referee":"Sergei Karasev (RUS)"},
"2018|C|DEN|AUS":{"goals":[{"min":7,"side":"home","scorer":"克里斯蒂安·埃里克森 (Christian Eriksen)","type":"shot"},{"min":38,"side":"away","scorer":"米莱·耶迪纳克 (Mile Jedinak)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":40727,"referee":"Antonio Mateu Lahoz (ESP)"},
"2018|C|DEN|FRA":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":78011,"referee":"Sandro Ricci (BRA)"},
"2018|C|FRA|AUS":{"goals":[{"min":58,"side":"home","scorer":"安托万·格里兹曼 (Antoine Griezmann)","type":"penalty"},{"min":62,"side":"away","scorer":"米莱·耶迪纳克 (Mile Jedinak)","type":"penalty"},{"min":81,"side":"home","scorer":"阿齐兹·贝希奇 (Aziz Behich)","type":"own_goal"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":41279,"referee":"Andrés Cunha (URU)"},
"2018|C|FRA|PER":{"goals":[{"min":34,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":32789,"referee":"Mohammed Abdulla (UAE)"},
"2018|C|PER|DEN":{"goals":[{"min":59,"side":"away","scorer":"尤素夫·波尔森 (Yussuf Poulsen)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":40502,"referee":"Bakary Gassama (GAM)"},
"2018|D|ARG|CRO":{"goals":[{"min":53,"side":"away","scorer":"安特·雷比奇 (Ante Rebić)","type":"shot"},{"min":80,"side":"away","scorer":"卢卡·莫德里奇 (Luka Modrić)","type":"shot"},{"min":91,"side":"away","scorer":"伊万·拉基蒂奇 (Ivan Rakitić)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":4,"red":0}},"attendance":43472,"referee":"Ravshan Irmatov (UZB)"},
"2018|D|ARG|ISL":{"goals":[{"min":19,"side":"home","scorer":"塞尔希奥·阿圭罗 (Sergio Agüero)","type":"shot"},{"min":23,"side":"away","scorer":"阿尔弗雷兹·芬博加松 (Alfreð Finnbogason)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":3,"red":0}},"attendance":44190,"referee":"Szymon Marciniak (POL)"},
"2018|D|CRO|NGA":{"goals":[{"min":32,"side":"home","scorer":"奥格内卡罗·埃特博 (Oghenekaro Etebo)","type":"own_goal"},{"min":71,"side":"home","scorer":"卢卡·莫德里奇 (Luka Modrić)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":31136,"referee":"Sandro Ricci (BRA)"},
"2018|D|ISL|CRO":{"goals":[{"min":53,"side":"away","scorer":"米兰·巴代利 (Milan Badelj)","type":"shot"},{"min":76,"side":"home","scorer":"吉尔芬·西于尔兹松 (Gylfi Sigurðsson)","type":"penalty"},{"min":90,"side":"away","scorer":"伊万·佩里西奇 (Ivan Perišić)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":43472,"referee":"Antonio Mateu Lahoz (ESP)"},
"2018|D|NGA|ARG":{"goals":[{"min":14,"side":"home","scorer":"莱昂内尔·梅西 (Lionel Messi)","type":"shot"},{"min":51,"side":"away","scorer":"维克托·摩西 (Victor Moses)","type":"penalty"},{"min":86,"side":"home","scorer":"马科斯·罗霍 (Marcos Rojo)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":64468,"referee":"Cüneyt Çakır (TUR)"},
"2018|D|NGA|ISL":{"goals":[{"min":49,"side":"home","scorer":"艾哈迈德·穆萨 (Ahmed Musa)","type":"shot"},{"min":75,"side":"home","scorer":"艾哈迈德·穆萨 (Ahmed Musa)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":40904,"referee":"Matthew Conger (NZL)"},
"2018|E|BRA|CRC":{"goals":[{"min":91,"side":"home","scorer":"菲利佩·库蒂尼奥 (Philippe Coutinho)","type":"shot"},{"min":97,"side":"home","scorer":"内马尔 (Neymar)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":64468,"referee":"Björn Kuipers (NED)"},
"2018|E|BRA|SUI":{"goals":[{"min":20,"side":"home","scorer":"菲利佩·库蒂尼奥 (Philippe Coutinho)","type":"shot"},{"min":50,"side":"away","scorer":"史蒂文·祖贝尔 (Steven Zuber)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":43109,"referee":"César Arturo Ramos (MEX)"},
"2018|E|CRC|SRB":{"goals":[{"min":56,"side":"away","scorer":"亚历山大·科拉罗夫 (Aleksandar Kolarov)","type":"free_kick"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":41432,"referee":"Malang Diedhiou (SEN)"},
"2018|E|SRB|BRA":{"goals":[{"min":36,"side":"away","scorer":"保利尼奥 (Paulinho)","type":"shot"},{"min":68,"side":"away","scorer":"蒂亚戈·席尔瓦 (Thiago Silva)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":0,"red":0}},"attendance":44190,"referee":"Alireza Faghani (IRN)"},
"2018|E|SRB|SUI":{"goals":[{"min":5,"side":"home","scorer":"亚历山大·米特罗维奇 (Aleksandar Mitrović)","type":"header"},{"min":52,"side":"away","scorer":"格拉尼特·扎卡 (Granit Xhaka)","type":"shot"},{"min":90,"side":"away","scorer":"杰尔丹·沙奇里 (Xherdan Shaqiri)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":33167,"referee":"Felix Brych (GER)"},
"2018|E|SUI|CRC":{"goals":[{"min":31,"side":"home","scorer":"布莱利姆·哲迈利 (Blerim Džemaili)","type":"shot"},{"min":56,"side":"away","scorer":"肯达尔·沃森 (Kendall Waston)","type":"header"},{"min":88,"side":"home","scorer":"约西普·德尔米奇 (Josip Drmić)","type":"shot"},{"min":93,"side":"away","scorer":"布莱恩·鲁伊斯 (Bryan Ruiz)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43319,"referee":"Clément Turpin (FRA)"},
"2018|FINAL|FRA|CRO":{"goals":[{"min":18,"side":"home","scorer":"马里奥·曼朱基奇 (Mario Mandžukić)","type":"own_goal"},{"min":28,"side":"away","scorer":"伊万·佩里西奇 (Ivan Perišić)","type":"shot"},{"min":38,"side":"home","scorer":"安托万·格里兹曼 (Antoine Griezmann)","type":"penalty"},{"min":59,"side":"home","scorer":"保罗·博格巴 (Paul Pogba)","type":"shot"},{"min":65,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"},{"min":69,"side":"away","scorer":"马里奥·曼朱基奇 (Mario Mandžukić)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":78011,"referee":"Néstor Pitana (ARG)"},
"2018|F|GER|MEX":{"goals":[{"min":35,"side":"away","scorer":"伊尔文·洛萨诺 (Hirving Lozano)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":78011,"referee":"Alireza Faghani (IRN)"},
"2018|F|GER|SWE":{"goals":[{"min":32,"side":"away","scorer":"奥拉·托伊沃宁 (Ola Toivonen)","type":"shot"},{"min":48,"side":"home","scorer":"马尔科·罗伊斯 (Marco Reus)","type":"shot"},{"min":95,"side":"home","scorer":"托尼·克罗斯 (Toni Kroos)","type":"free_kick"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":1,"red":0}},"attendance":44287,"referee":"Szymon Marciniak (POL)"},
"2018|F|KOR|GER":{"goals":[{"min":93,"side":"home","scorer":"金英权 (Kim Young-gwon)","type":"shot"},{"min":96,"side":"home","scorer":"孙兴慜 (Son Heung-min)","type":"shot"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":0,"red":0}},"attendance":41835,"referee":"Mark Geiger (USA)"},
"2018|F|KOR|MEX":{"goals":[{"min":26,"side":"away","scorer":"卡洛斯·贝拉 (Carlos Vela)","type":"penalty"},{"min":66,"side":"away","scorer":"哈维尔·埃尔南德斯 (Javier Hernández)","type":"shot"},{"min":93,"side":"home","scorer":"孙兴慜 (Son Heung-min)","type":"shot"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":1,"red":0}},"attendance":43472,"referee":"Milorad Mažić (SRB)"},
"2018|F|MEX|SWE":{"goals":[{"min":50,"side":"away","scorer":"路德维希·奥古斯丁松 (Ludwig Augustinsson)","type":"shot"},{"min":62,"side":"away","scorer":"安德烈亚斯·格兰奎斯特 (Andreas Granqvist)","type":"penalty"},{"min":74,"side":"away","scorer":"埃德温·阿尔瓦雷斯 (Edson Álvarez)","type":"own_goal"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":33288,"referee":"Néstor Pitana (ARG)"},
"2018|F|SWE|KOR":{"goals":[{"min":65,"side":"home","scorer":"安德烈亚斯·格兰奎斯特 (Andreas Granqvist)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":42300,"referee":"Joel Aguilar (SLV)"},
"2018|G|BEL|PAN":{"goals":[{"min":47,"side":"home","scorer":"德赖斯·梅尔滕斯 (Dries Mertens)","type":"shot"},{"min":69,"side":"home","scorer":"罗梅卢·卢卡库 (Romelu Lukaku)","type":"header"},{"min":75,"side":"home","scorer":"罗梅卢·卢卡库 (Romelu Lukaku)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":5,"red":0}},"attendance":43257,"referee":"Janny Sikazwe (ZAM)"},
"2018|G|BEL|TUN":{"goals":[{"min":6,"side":"home","scorer":"伊登·阿扎尔 (Eden Hazard)","type":"penalty"},{"min":16,"side":"home","scorer":"罗梅卢·卢卡库 (Romelu Lukaku)","type":"shot"},{"min":18,"side":"away","scorer":"迪伦·布隆 (Dylan Bronn)","type":"header"},{"min":48,"side":"home","scorer":"罗梅卢·卢卡库 (Romelu Lukaku)","type":"shot"},{"min":51,"side":"home","scorer":"伊登·阿扎尔 (Eden Hazard)","type":"shot"},{"min":90,"side":"home","scorer":"米西·巴舒亚伊 (Michy Batshuayi)","type":"shot"},{"min":93,"side":"away","scorer":"瓦赫比·哈兹里 (Wahbi Khazri)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":3,"red":0}},"attendance":44190,"referee":"Jair Marrufo (USA)"},
"2018|G|ENG|BEL":{"goals":[{"min":51,"side":"away","scorer":"阿德南·贾努扎伊 (Adnan Januzaj)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":33973,"referee":"Damir Skomina (SVN)"},
"2018|G|ENG|PAN":{"goals":[{"min":8,"side":"home","scorer":"约翰·斯通斯 (John Stones)","type":"header"},{"min":22,"side":"home","scorer":"哈里·凯恩 (Harry Kane)","type":"penalty"},{"min":36,"side":"home","scorer":"杰西·林加德 (Jesse Lingard)","type":"shot"},{"min":40,"side":"home","scorer":"约翰·斯通斯 (John Stones)","type":"header"},{"min":"45+1","side":"home","scorer":"哈里·凯恩 (Harry Kane)","type":"penalty"},{"min":62,"side":"home","scorer":"哈里·凯恩 (Harry Kane)","type":"shot"},{"min":78,"side":"away","scorer":"费利佩·巴洛伊 (Felipe Baloy)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":43319,"referee":"Mohammed Abdulla (UAE)"},
"2018|G|PAN|TUN":{"goals":[{"min":33,"side":"away","scorer":"法赫尔丁·本·优素福 (Fakhreddine Ben Youssef)","type":"shot"},{"min":51,"side":"home","scorer":"亚西尔·梅里亚 (Yassine Meriah)","type":"own_goal"},{"min":66,"side":"away","scorer":"瓦赫比·哈兹里 (Wahbi Khazri)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":37168,"referee":"Nawaf Shukralla (BHR)"},
"2018|G|TUN|ENG":{"goals":[{"min":11,"side":"away","scorer":"哈里·凯恩 (Harry Kane)","type":"shot"},{"min":35,"side":"home","scorer":"费尔贾尼·萨西 (Ferjani Sassi)","type":"penalty"},{"min":91,"side":"away","scorer":"哈里·凯恩 (Harry Kane)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":41064,"referee":"Wilmar Roldán (COL)"},
"2018|H|COL|JPN":{"goals":[{"min":6,"side":"home","scorer":"胡安·金特罗 (Juan Quintero)","type":"free_kick"},{"min":39,"side":"away","scorer":"香川真司 (Shinji Kagawa)","type":"penalty"},{"min":73,"side":"away","scorer":"大迫勇也 (Yuya Osako)","type":"header"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":1,"red":0}},"attendance":40842,"referee":"Damir Skomina (SVN)"},
"2018|H|JPN|POL":{"goals":[{"min":59,"side":"away","scorer":"扬·贝德纳雷克 (Jan Bednarek)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":42189,"referee":"Janny Sikazwe (ZAM)"},
"2018|H|JPN|SEN":{"goals":[{"min":11,"side":"away","scorer":"萨迪奥·马内 (Sadio Mané)","type":"shot"},{"min":34,"side":"home","scorer":"乾贵士 (Takashi Inui)","type":"shot"},{"min":71,"side":"away","scorer":"穆萨·瓦格 (Moussa Wagué)","type":"shot"},{"min":78,"side":"home","scorer":"本田圭佑 (Keisuke Honda)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":32572,"referee":"Gianluca Rocchi (ITA)"},
"2018|H|POL|COL":{"goals":[{"min":40,"side":"away","scorer":"亚伊罗·米纳 (Yerry Mina)","type":"header"},{"min":70,"side":"away","scorer":"拉达梅尔·法尔考 (Radamel Falcao)","type":"shot"},{"min":75,"side":"away","scorer":"胡安·夸德拉多 (Juan Cuadrado)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":42873,"referee":"César Arturo Ramos (MEX)"},
"2018|H|POL|SEN":{"goals":[{"min":37,"side":"away","scorer":"蒂亚戈·乔内克 (Thiago Cionek)","type":"own_goal"},{"min":60,"side":"away","scorer":"姆巴耶·尼昂 (M'Baye Niang)","type":"shot"},{"min":86,"side":"home","scorer":"格热戈日·克雷霍维亚克 (Grzegorz Krychowiak)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":44190,"referee":"Nawaf Shukralla (BHR)"},
"2018|H|SEN|COL":{"goals":[{"min":74,"side":"away","scorer":"亚伊罗·米纳 (Yerry Mina)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":41970,"referee":"Milorad Mažić (SRB)"},
"2018|QF|BRA|BEL":{"goals":[{"min":13,"side":"away","scorer":"费尔南迪尼奥 (Fernandinho)","type":"own_goal"},{"min":31,"side":"away","scorer":"凯文·德布劳内 (Kevin De Bruyne)","type":"shot"},{"min":76,"side":"home","scorer":"雷纳托·奥古斯托 (Renato Augusto)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":42873,"referee":"Milorad Mažić (SRB)"},
"2018|QF|RUS|CRO":{"goals":[{"min":31,"side":"home","scorer":"丹尼斯·切里舍夫 (Denis Cheryshev)","type":"shot"},{"min":39,"side":"away","scorer":"安德烈·克拉马里奇 (Andrej Kramarić)","type":"header"},{"min":101,"side":"home","scorer":"马里奥·费尔南德斯 (Mário Fernandes)","type":"header"},{"min":115,"side":"away","scorer":"多马戈伊·维达 (Domagoj Vida)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":44287,"referee":"Sandro Ricci (BRA)"},
"2018|QF|SWE|ENG":{"goals":[{"min":30,"side":"away","scorer":"哈里·马奎尔 (Harry Maguire)","type":"header"},{"min":59,"side":"away","scorer":"德勒·阿里 (Dele Alli)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":39991,"referee":"Björn Kuipers (NED)"},
"2018|QF|URU|FRA":{"goals":[{"min":40,"side":"away","scorer":"拉斐尔·瓦拉内 (Raphaël Varane)","type":"header"},{"min":61,"side":"away","scorer":"安托万·格里兹曼 (Antoine Griezmann)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":44324,"referee":"Néstor Pitana (ARG)"},
"2018|R16|BEL|JPN":{"goals":[{"min":48,"side":"away","scorer":"原口元气 (Genki Haraguchi)","type":"shot"},{"min":52,"side":"away","scorer":"乾贵士 (Takashi Inui)","type":"shot"},{"min":69,"side":"home","scorer":"扬·费尔通亨 (Jan Vertonghen)","type":"header"},{"min":74,"side":"home","scorer":"马鲁万·费莱尼 (Marouane Fellaini)","type":"header"},{"min":"90+4","side":"home","scorer":"纳塞尔·沙兹利 (Nacer Chadli)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":41279,"referee":"Malang Diedhiou (SEN)"},
"2018|R16|BRA|MEX":{"goals":[{"min":51,"side":"home","scorer":"内马尔 (Neymar)","type":"shot"},{"min":88,"side":"home","scorer":"罗伯托·菲尔米诺 (Roberto Firmino)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":42873,"referee":"Gianluca Rocchi (ITA)"},
"2018|R16|COL|ENG":{"goals":[{"min":57,"side":"away","scorer":"哈里·凯恩 (Harry Kane)","type":"penalty"},{"min":"90+3","side":"home","scorer":"亚伊罗·米纳 (Yerry Mina)","type":"header"}],"cards":{"home":{"yellow":6,"red":0},"away":{"yellow":2,"red":0}},"attendance":44190,"referee":"Mark Geiger (USA)"},
"2018|R16|CRO|DEN":{"goals":[{"min":1,"side":"away","scorer":"马蒂亚斯·约根森 (Mathias Jørgensen)","type":"shot"},{"min":4,"side":"home","scorer":"马里奥·曼朱基奇 (Mario Mandžukić)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":40851,"referee":"Néstor Pitana (ARG)"},
"2018|R16|ESP|RUS":{"goals":[{"min":12,"side":"away","scorer":"谢尔盖·伊格纳舍维奇 (Sergei Ignashevich)","type":"own_goal"},{"min":41,"side":"away","scorer":"阿尔乔姆·久巴 (Artem Dzyuba)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":78011,"referee":"Björn Kuipers (NED)"},
"2018|R16|FRA|ARG":{"goals":[{"min":13,"side":"home","scorer":"安托万·格里兹曼 (Antoine Griezmann)","type":"penalty"},{"min":41,"side":"away","scorer":"安赫尔·迪马利亚 (Ángel Di María)","type":"shot"},{"min":48,"side":"away","scorer":"加布里埃尔·梅尔卡多 (Gabriel Mercado)","type":"shot"},{"min":57,"side":"home","scorer":"邦雅曼·帕瓦尔 (Benjamin Pavard)","type":"shot"},{"min":64,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"},{"min":68,"side":"home","scorer":"基利安·姆巴佩 (Kylian Mbappé)","type":"shot"},{"min":"90+3","side":"away","scorer":"塞尔希奥·阿圭罗 (Sergio Agüero)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":42873,"referee":"Alireza Faghani (IRN)"},
"2018|R16|SWE|SUI":{"goals":[{"min":66,"side":"home","scorer":"埃米尔·福斯贝里 (Emil Forsberg)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":64468,"referee":"Damir Skomina (SVN)"},
"2018|R16|URU|POR":{"goals":[{"min":7,"side":"home","scorer":"埃丁森·卡瓦尼 (Edinson Cavani)","type":"header"},{"min":55,"side":"away","scorer":"佩佩 (Pepe)","type":"header"},{"min":62,"side":"home","scorer":"埃丁森·卡瓦尼 (Edinson Cavani)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":44287,"referee":"César Arturo Ramos (MEX)"},
"2018|SF|CRO|ENG":{"goals":[{"min":5,"side":"away","scorer":"基兰·特里皮尔 (Kieran Trippier)","type":"free_kick"},{"min":68,"side":"home","scorer":"伊万·佩里西奇 (Ivan Perišić)","type":"shot"},{"min":109,"side":"home","scorer":"马里奥·曼朱基奇 (Mario Mandžukić)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":78011,"referee":"Cüneyt Çakır (TUR)"},
"2018|SF|FRA|BEL":{"goals":[{"min":51,"side":"home","scorer":"萨穆埃尔·乌姆蒂蒂 (Samuel Umtiti)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":64286,"referee":"Andrés Cunha (URU)"},
"2018|TP|BEL|ENG":{"goals":[{"min":4,"side":"home","scorer":"托马斯·默尼耶 (Thomas Meunier)","type":"shot"},{"min":82,"side":"home","scorer":"伊登·阿扎尔 (Eden Hazard)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":64406,"referee":"Alireza Faghani (IRN)"},
"2014|A|BRA|CRO":{"goals":[{"min":11,"side":"away","scorer":"马塞洛 (Marcelo)","type":"own_goal"},{"min":29,"side":"home","scorer":"内马尔 (Neymar)","type":"shot"},{"min":71,"side":"home","scorer":"内马尔 (Neymar)","type":"penalty"},{"min":91,"side":"home","scorer":"奥斯卡 (Oscar)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":62103,"referee":"西村雄一 (JPN)"},
"2014|A|BRA|MEX":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":60342,"referee":"Cüneyt Çakır (TUR)"},
"2014|A|CMR|BRA":{"goals":[{"min":17,"side":"home","scorer":"若埃尔·马蒂普 (Joël Matip)","type":"shot"},{"min":35,"side":"away","scorer":"内马尔 (Neymar)","type":"shot"},{"min":45,"side":"away","scorer":"内马尔 (Neymar)","type":"shot"},{"min":49,"side":"away","scorer":"弗雷德 (Fred)","type":"header"},{"min":84,"side":"away","scorer":"费尔南迪尼奥 (Fernandinho)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":69112,"referee":"Jonas Eriksson (SWE)"},
"2014|A|CMR|CRO":{"goals":[{"min":11,"side":"away","scorer":"伊维察·奥利奇 (Ivica Olić)","type":"shot"},{"min":48,"side":"away","scorer":"伊万·佩里西奇 (Ivan Perišić)","type":"shot"},{"min":61,"side":"away","scorer":"马里奥·曼朱基奇 (Mario Mandžukić)","type":"header"},{"min":73,"side":"away","scorer":"马里奥·曼朱基奇 (Mario Mandžukić)","type":"shot"}],"cards":{"home":{"yellow":1,"red":1},"away":{"yellow":1,"red":0}},"attendance":39011,"referee":"Pedro Proença (POR)"},
"2014|A|CRO|MEX":{"goals":[{"min":72,"side":"away","scorer":"拉法埃尔·马克斯 (Rafael Márquez)","type":"header"},{"min":75,"side":"away","scorer":"安德烈斯·瓜尔达多 (Andrés Guardado)","type":"shot"},{"min":82,"side":"away","scorer":"哈维尔·埃尔南德斯 (Javier Hernández)","type":"header"},{"min":87,"side":"home","scorer":"伊万·佩里西奇 (Ivan Perišić)","type":"shot"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":2,"red":0}},"attendance":41810,"referee":"Ravshan Irmatov (UZB)"},
"2014|A|MEX|CMR":{"goals":[{"min":61,"side":"home","scorer":"奥里比·佩拉尔塔 (Oribe Peralta)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":39216,"referee":"Wilmar Roldán (COL)"},
"2014|B|AUS|ESP":{"goals":[{"min":36,"side":"home","scorer":"戴维·比利亚 (David Villa)","type":"shot"},{"min":69,"side":"home","scorer":"费尔南多·托雷斯 (Fernando Torres)","type":"shot"},{"min":82,"side":"home","scorer":"胡安·马塔 (Juan Mata)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":39375,"referee":"Nawaf Shukralla (BHR)"},
"2014|B|AUS|NED":{"goals":[{"min":20,"side":"away","scorer":"阿尔扬·罗本 (Arjen Robben)","type":"shot"},{"min":21,"side":"home","scorer":"蒂姆·卡希尔 (Tim Cahill)","type":"shot"},{"min":54,"side":"away","scorer":"罗宾·范佩西 (Robin van Persie)","type":"shot"},{"min":58,"side":"home","scorer":"米莱·耶迪纳克 (Mile Jedinak)","type":"penalty"},{"min":68,"side":"away","scorer":"孟菲斯·德佩 (Memphis Depay)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":42509,"referee":"Djamel Haimoudi (ALG)"},
"2014|B|CHI|AUS":{"goals":[{"min":12,"side":"home","scorer":"亚历克西斯·桑切斯 (Alexis Sánchez)","type":"shot"},{"min":14,"side":"home","scorer":"豪尔赫·巴尔迪维亚 (Jorge Valdivia)","type":"shot"},{"min":35,"side":"away","scorer":"蒂姆·卡希尔 (Tim Cahill)","type":"header"},{"min":92,"side":"home","scorer":"让·博塞茹 (Jean Beausejour)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":25062,"referee":"Noumandiez Doué (CIV)"},
"2014|B|ESP|CHI":{"goals":[{"min":20,"side":"away","scorer":"爱德华多·巴尔加斯 (Eduardo Vargas)","type":"shot"},{"min":43,"side":"away","scorer":"查尔斯·阿兰吉斯 (Charles Aránguiz)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":74101,"referee":"Mark Geiger (USA)"},
"2014|B|ESP|NED":{"goals":[{"min":27,"side":"home","scorer":"哈维·阿隆索 (Xabi Alonso)","type":"penalty"},{"min":44,"side":"away","scorer":"罗宾·范佩西 (Robin van Persie)","type":"header"},{"min":53,"side":"away","scorer":"阿尔扬·罗本 (Arjen Robben)","type":"shot"},{"min":64,"side":"away","scorer":"斯特凡·德弗赖 (Stefan de Vrij)","type":"header"},{"min":72,"side":"away","scorer":"罗宾·范佩西 (Robin van Persie)","type":"shot"},{"min":80,"side":"away","scorer":"阿尔扬·罗本 (Arjen Robben)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":48173,"referee":"Nicola Rizzoli (ITA)"},
"2014|B|NED|CHI":{"goals":[{"min":77,"side":"home","scorer":"勒罗伊·费尔 (Leroy Fer)","type":"header"},{"min":92,"side":"home","scorer":"孟菲斯·德佩 (Memphis Depay)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":62996,"referee":"Bakary Gassama (GAM)"},
"2014|C|CIV|JPN":{"goals":[{"min":16,"side":"away","scorer":"本田圭佑 (Keisuke Honda)","type":"shot"},{"min":64,"side":"home","scorer":"威尔弗雷德·博尼 (Wilfried Bony)","type":"header"},{"min":66,"side":"home","scorer":"热尔维尼奥 (Gervinho)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":40267,"referee":"Enrique Osses (CHI)"},
"2014|C|COL|CIV":{"goals":[{"min":64,"side":"home","scorer":"哈梅斯·罗德里格斯 (James Rodríguez)","type":"header"},{"min":70,"side":"home","scorer":"胡安·金特罗 (Juan Quintero)","type":"shot"},{"min":73,"side":"away","scorer":"热尔维尼奥 (Gervinho)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":59469,"referee":"Howard Webb (ENG)"},
"2014|C|COL|GRE":{"goals":[{"min":5,"side":"home","scorer":"巴勃罗·阿尔梅罗 (Pablo Armero)","type":"shot"},{"min":58,"side":"home","scorer":"特奥菲洛·古铁雷斯 (Teófilo Gutiérrez)","type":"shot"},{"min":93,"side":"home","scorer":"哈梅斯·罗德里格斯 (James Rodríguez)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":57174,"referee":"Mark Geiger (USA)"},
"2014|C|GRE|CIV":{"goals":[{"min":42,"side":"home","scorer":"安德烈亚斯·萨马里斯 (Andreas Samaris)","type":"shot"},{"min":74,"side":"away","scorer":"威尔弗雷德·博尼 (Wilfried Bony)","type":"shot"},{"min":93,"side":"home","scorer":"乔尔戈斯·萨马拉斯 (Georgios Samaras)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":30240,"referee":"Carlos Vera (ECU)"},
"2014|C|JPN|COL":{"goals":[{"min":17,"side":"away","scorer":"胡安·夸德拉多 (Juan Cuadrado)","type":"penalty"},{"min":"45+1","side":"home","scorer":"冈崎慎司 (Shinji Okazaki)","type":"header"},{"min":55,"side":"away","scorer":"杰克逊·马丁内斯 (Jackson Martínez)","type":"shot"},{"min":82,"side":"away","scorer":"杰克逊·马丁内斯 (Jackson Martínez)","type":"shot"},{"min":90,"side":"away","scorer":"哈梅斯·罗德里格斯 (James Rodríguez)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":39387,"referee":"Pedro Proença (POR)"},
"2014|C|JPN|GRE":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":1}},"attendance":26676,"referee":"Joel Aguilar (SLV)"},
"2014|D|CRC|ENG":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":57453,"referee":"Djamel Haimoudi (ALG)"},
"2014|D|ENG|ITA":{"goals":[{"min":35,"side":"away","scorer":"克劳迪奥·马尔基西奥 (Claudio Marchisio)","type":"shot"},{"min":37,"side":"home","scorer":"丹尼尔·斯图里奇 (Daniel Sturridge)","type":"shot"},{"min":50,"side":"away","scorer":"马里奥·巴洛特利 (Mario Balotelli)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":39800,"referee":"Björn Kuipers (NED)"},
"2014|D|ITA|CRC":{"goals":[{"min":44,"side":"away","scorer":"布莱恩·鲁伊斯 (Bryan Ruiz)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":40285,"referee":"Enrique Osses (CHI)"},
"2014|D|ITA|URU":{"goals":[{"min":81,"side":"away","scorer":"迭戈·戈丁 (Diego Godín)","type":"header"}],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":2,"red":0}},"attendance":39706,"referee":"Marco Rodríguez (MEX)"},
"2014|D|URU|CRC":{"goals":[{"min":24,"side":"home","scorer":"埃丁森·卡瓦尼 (Edinson Cavani)","type":"penalty"},{"min":54,"side":"away","scorer":"霍埃尔·坎贝尔 (Joel Campbell)","type":"shot"},{"min":57,"side":"away","scorer":"奥斯卡·杜阿尔特 (Óscar Duarte)","type":"header"},{"min":84,"side":"away","scorer":"马尔科·乌雷尼亚 (Marco Ureña)","type":"shot"}],"cards":{"home":{"yellow":1,"red":1},"away":{"yellow":2,"red":0}},"attendance":58679,"referee":"Felix Brych (GER)"},
"2014|D|URU|ENG":{"goals":[{"min":39,"side":"home","scorer":"路易斯·苏亚雷斯 (Luis Suárez)","type":"header"},{"min":75,"side":"away","scorer":"韦恩·鲁尼 (Wayne Rooney)","type":"shot"},{"min":85,"side":"home","scorer":"路易斯·苏亚雷斯 (Luis Suárez)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":62575,"referee":"Carlos Velasco Carballo (ESP)"},
"2014|E|ECU|FRA":{"goals":[],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":1,"red":0}},"attendance":73749,"referee":"Noumandiez Doué (CIV)"},
"2014|E|FRA|HON":{"goals":[{"min":45,"side":"home","scorer":"卡里姆·本泽马 (Karim Benzema)","type":"penalty"},{"min":48,"side":"away","scorer":"诺埃尔·巴利亚达雷斯 (Noel Valladares)","type":"own_goal"},{"min":72,"side":"home","scorer":"卡里姆·本泽马 (Karim Benzema)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":43012,"referee":"Sandro Ricci (BRA)"},
"2014|E|HON|ECU":{"goals":[{"min":34,"side":"away","scorer":"恩纳·瓦伦西亚 (Enner Valencia)","type":"shot"},{"min":65,"side":"away","scorer":"恩纳·瓦伦西亚 (Enner Valencia)","type":"shot"},{"min":31,"side":"home","scorer":"卡洛·科斯特利 (Carlo Costly)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":37834,"referee":"Ben Williams (AUS)"},
"2014|E|HON|SUI":{"goals":[{"min":6,"side":"away","scorer":"杰尔丹·沙奇里 (Xherdan Shaqiri)","type":"shot"},{"min":31,"side":"away","scorer":"杰尔丹·沙奇里 (Xherdan Shaqiri)","type":"shot"},{"min":71,"side":"away","scorer":"杰尔丹·沙奇里 (Xherdan Shaqiri)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":40322,"referee":"Néstor Pitana (ARG)"},
"2014|E|SUI|ECU":{"goals":[{"min":22,"side":"away","scorer":"恩纳·瓦伦西亚 (Enner Valencia)","type":"header"},{"min":48,"side":"home","scorer":"阿德米尔·穆罕默迪 (Admir Mehmedi)","type":"header"},{"min":93,"side":"home","scorer":"哈里斯·塞费罗维奇 (Haris Seferović)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":68351,"referee":"Ravshan Irmatov (UZB)"},
"2014|E|SUI|FRA":{"goals":[{"min":17,"side":"away","scorer":"奥利维耶·吉鲁 (Olivier Giroud)","type":"header"},{"min":18,"side":"away","scorer":"布莱斯·马图伊迪 (Blaise Matuidi)","type":"shot"},{"min":40,"side":"away","scorer":"马蒂厄·瓦尔布埃纳 (Mathieu Valbuena)","type":"shot"},{"min":67,"side":"away","scorer":"卡里姆·本泽马 (Karim Benzema)","type":"shot"},{"min":73,"side":"away","scorer":"穆萨·西索科 (Moussa Sissoko)","type":"shot"},{"min":81,"side":"home","scorer":"布莱利姆·哲迈利 (Blerim Džemaili)","type":"free_kick"},{"min":87,"side":"home","scorer":"格拉尼特·扎卡 (Granit Xhaka)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":45017,"referee":"Björn Kuipers (NED)"},
"2014|FINAL|GER|ARG":{"goals":[{"min":113,"side":"home","scorer":"马里奥·格策 (Mario Götze)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":74738,"referee":"Nicola Rizzoli (ITA)"},
"2014|F|ARG|BIH":{"goals":[{"min":3,"side":"away","scorer":"塞亚德·科拉希纳茨 (Sead Kolašinac)","type":"own_goal"},{"min":65,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"},{"min":85,"side":"away","scorer":"韦达德·伊比舍维奇 (Vedad Ibišević)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":74738,"referee":"Joel Aguilar (SLV)"},
"2014|F|ARG|IRN":{"goals":[{"min":91,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":57698,"referee":"Milorad Mažić (SRB)"},
"2014|F|BIH|IRN":{"goals":[{"min":23,"side":"home","scorer":"埃丁·哲科 (Edin Džeko)","type":"shot"},{"min":59,"side":"home","scorer":"米拉莱姆·皮亚尼奇 (Miralem Pjanić)","type":"shot"},{"min":82,"side":"away","scorer":"雷扎·古钱内贾德 (Reza Ghoochannejhad)","type":"shot"},{"min":83,"side":"home","scorer":"阿夫迪亚·弗尔萨耶维奇 (Avdija Vršajević)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":36325,"referee":"Carlos Velasco Carballo (ESP)"},
"2014|F|IRN|NGA":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":39081,"referee":"Carlos Vera (ECU)"},
"2014|F|NGA|ARG":{"goals":[{"min":3,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"},{"min":4,"side":"away","scorer":"艾哈迈德·穆萨 (Ahmed Musa)","type":"shot"},{"min":"45+1","side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"},{"min":47,"side":"away","scorer":"艾哈迈德·穆萨 (Ahmed Musa)","type":"shot"},{"min":50,"side":"home","scorer":"马科斯·罗霍 (Marcos Rojo)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":43285,"referee":"Nicola Rizzoli (ITA)"},
"2014|F|NGA|BIH":{"goals":[{"min":29,"side":"home","scorer":"彼得·奥德姆温吉 (Peter Odemwingie)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":40249,"referee":"Peter O'Leary (NZL)"},
"2014|G|GER|GHA":{"goals":[{"min":51,"side":"home","scorer":"马里奥·格策 (Mario Götze)","type":"shot"},{"min":54,"side":"away","scorer":"安德雷·阿尤 (André Ayew)","type":"header"},{"min":63,"side":"away","scorer":"阿萨莫阿·吉安 (Asamoah Gyan)","type":"shot"},{"min":71,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":59621,"referee":"Sandro Ricci (BRA)"},
"2014|G|GER|POR":{"goals":[{"min":12,"side":"home","scorer":"托马斯·穆勒 (Thomas Müller)","type":"penalty"},{"min":32,"side":"home","scorer":"马茨·胡梅尔斯 (Mats Hummels)","type":"header"},{"min":"45+1","side":"home","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"},{"min":78,"side":"home","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":1}},"attendance":51081,"referee":"Milorad Mažić (SRB)"},
"2014|G|GHA|USA":{"goals":[{"min":1,"side":"away","scorer":"克林特·登普西 (Clint Dempsey)","type":"shot"},{"min":82,"side":"home","scorer":"安德雷·阿尤 (André Ayew)","type":"shot"},{"min":86,"side":"away","scorer":"约翰·布鲁克斯 (John Brooks)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":0,"red":0}},"attendance":39760,"referee":"Jonas Eriksson (SWE)"},
"2014|G|POR|GHA":{"goals":[{"min":31,"side":"away","scorer":"约翰·博耶 (John Boye)","type":"own_goal"},{"min":57,"side":"away","scorer":"阿萨莫阿·吉安 (Asamoah Gyan)","type":"header"},{"min":80,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":67921,"referee":"Nawaf Shukralla (BHR)"},
"2014|G|USA|GER":{"goals":[{"min":55,"side":"away","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":41876,"referee":"Ravshan Irmatov (UZB)"},
"2014|G|USA|POR":{"goals":[{"min":5,"side":"away","scorer":"纳尼 (Nani)","type":"shot"},{"min":64,"side":"home","scorer":"杰梅因·琼斯 (Jermaine Jones)","type":"shot"},{"min":81,"side":"home","scorer":"克林特·登普西 (Clint Dempsey)","type":"shot"},{"min":95,"side":"away","scorer":"西尔韦斯特雷·瓦雷拉 (Silvestre Varela)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":40567,"referee":"Néstor Pitana (ARG)"},
"2014|H|ALG|RUS":{"goals":[{"min":6,"side":"away","scorer":"亚历山大·科科林 (Aleksandr Kokorin)","type":"header"},{"min":60,"side":"home","scorer":"伊斯兰·斯利马尼 (Islam Slimani)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":39963,"referee":"Cüneyt Çakır (TUR)"},
"2014|H|BEL|ALG":{"goals":[{"min":24,"side":"away","scorer":"索菲亚内·费古利 (Sofiane Feghouli)","type":"penalty"},{"min":70,"side":"home","scorer":"马鲁万·费莱尼 (Marouane Fellaini)","type":"header"},{"min":80,"side":"home","scorer":"德赖斯·梅尔滕斯 (Dries Mertens)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":56800,"referee":"Marco Rodríguez (MEX)"},
"2014|H|BEL|RUS":{"goals":[{"min":88,"side":"home","scorer":"迪沃克·奥里吉 (Divock Origi)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":73997,"referee":"Felix Brych (GER)"},
"2014|H|KOR|ALG":{"goals":[{"min":26,"side":"away","scorer":"伊斯兰·斯利马尼 (Islam Slimani)","type":"shot"},{"min":28,"side":"away","scorer":"拉菲克·哈利什 (Rafik Halliche)","type":"header"},{"min":38,"side":"away","scorer":"阿卜杜勒穆梅内·贾布 (Abdelmoumene Djabou)","type":"shot"},{"min":50,"side":"home","scorer":"孙兴慜 (Son Heung-min)","type":"shot"},{"min":62,"side":"away","scorer":"亚辛·卜拉希米 (Yacine Brahimi)","type":"shot"},{"min":72,"side":"home","scorer":"具滋哲 (Koo Ja-cheol)","type":"shot"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":1,"red":0}},"attendance":42732,"referee":"Wilmar Roldán (COL)"},
"2014|H|KOR|BEL":{"goals":[{"min":78,"side":"away","scorer":"扬·费尔通亨 (Jan Vertonghen)","type":"shot"}],"cards":{"home":{"yellow":1,"red":1},"away":{"yellow":1,"red":1}},"attendance":61397,"referee":"Ben Williams (AUS)"},
"2014|H|RUS|KOR":{"goals":[{"min":68,"side":"away","scorer":"李根镐 (Lee Keun-ho)","type":"shot"},{"min":74,"side":"home","scorer":"亚历山大·克尔扎科夫 (Aleksandr Kerzhakov)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":37603,"referee":"Néstor Pitana (ARG)"},
"2014|QF|ARG|BEL":{"goals":[{"min":8,"side":"home","scorer":"贡萨洛·伊瓜因 (Gonzalo Higuaín)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":68451,"referee":"Nicola Rizzoli (ITA)"},
"2014|QF|BRA|COL":{"goals":[{"min":7,"side":"home","scorer":"蒂亚戈·席尔瓦 (Thiago Silva)","type":"shot"},{"min":69,"side":"home","scorer":"大卫·路易斯 (David Luiz)","type":"free_kick"},{"min":80,"side":"away","scorer":"哈梅斯·罗德里格斯 (James Rodríguez)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":60342,"referee":"Carlos Velasco Carballo (ESP)"},
"2014|QF|FRA|GER":{"goals":[{"min":13,"side":"away","scorer":"马茨·胡梅尔斯 (Mats Hummels)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":74230,"referee":"Néstor Pitana (ARG)"},
"2014|QF|NED|CRC":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":4,"red":0}},"attendance":51179,"referee":"Ravshan Irmatov (UZB)"},
"2014|R16|ARG|SUI":{"goals":[{"min":118,"side":"home","scorer":"安赫尔·迪马利亚 (Ángel Di María)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":63255,"referee":"Jonas Eriksson (SWE)"},
"2014|R16|BEL|USA":{"goals":[{"min":93,"side":"home","scorer":"凯文·德布劳内 (Kevin De Bruyne)","type":"shot"},{"min":105,"side":"home","scorer":"罗梅卢·卢卡库 (Romelu Lukaku)","type":"shot"},{"min":107,"side":"away","scorer":"朱利安·格林 (Julian Green)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":51227,"referee":"Djamel Haimoudi (ALG)"},
"2014|R16|BRA|CHI":{"goals":[{"min":18,"side":"home","scorer":"大卫·路易斯 (David Luiz)","type":"shot"},{"min":32,"side":"away","scorer":"亚历克西斯·桑切斯 (Alexis Sánchez)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":57714,"referee":"Howard Webb (ENG)"},
"2014|R16|COL|URU":{"goals":[{"min":28,"side":"home","scorer":"哈梅斯·罗德里格斯 (James Rodríguez)","type":"shot"},{"min":50,"side":"home","scorer":"哈梅斯·罗德里格斯 (James Rodríguez)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":73749,"referee":"Björn Kuipers (NED)"},
"2014|R16|CRC|GRE":{"goals":[{"min":52,"side":"home","scorer":"布莱恩·鲁伊斯 (Bryan Ruiz)","type":"shot"},{"min":"90+1","side":"away","scorer":"索克拉蒂斯·帕帕斯塔索普洛斯 (Sokratis Papastathopoulos)","type":"shot"}],"cards":{"home":{"yellow":6,"red":1},"away":{"yellow":2,"red":0}},"attendance":41242,"referee":"Ben Williams (AUS)"},
"2014|R16|FRA|NGA":{"goals":[{"min":79,"side":"home","scorer":"保罗·博格巴 (Paul Pogba)","type":"header"},{"min":92,"side":"home","scorer":"约瑟夫·约博 (Joseph Yobo)","type":"own_goal"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":67921,"referee":"Mark Geiger (USA)"},
"2014|R16|GER|ALG":{"goals":[{"min":92,"side":"home","scorer":"安德烈·许尔勒 (André Schürrle)","type":"shot"},{"min":120,"side":"home","scorer":"梅苏特·厄齐尔 (Mesut Özil)","type":"shot"},{"min":"120+1","side":"away","scorer":"阿卜杜勒穆梅内·贾布 (Abdelmoumene Djabou)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43110,"referee":"Sandro Ricci (BRA)"},
"2014|R16|NED|MEX":{"goals":[{"min":48,"side":"away","scorer":"吉奥瓦尼·多斯桑托斯 (Giovani dos Santos)","type":"shot"},{"min":88,"side":"home","scorer":"韦斯利·斯内德 (Wesley Sneijder)","type":"shot"},{"min":"90+4","side":"home","scorer":"克拉斯-扬·亨特拉尔 (Klaas-Jan Huntelaar)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":58817,"referee":"Pedro Proença (POR)"},
"2014|SF|BRA|GER":{"goals":[{"min":11,"side":"away","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"},{"min":23,"side":"away","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"},{"min":24,"side":"away","scorer":"托尼·克罗斯 (Toni Kroos)","type":"shot"},{"min":26,"side":"away","scorer":"托尼·克罗斯 (Toni Kroos)","type":"shot"},{"min":29,"side":"away","scorer":"萨米·赫迪拉 (Sami Khedira)","type":"shot"},{"min":69,"side":"away","scorer":"安德烈·许尔勒 (André Schürrle)","type":"shot"},{"min":79,"side":"away","scorer":"安德烈·许尔勒 (André Schürrle)","type":"shot"},{"min":90,"side":"home","scorer":"奥斯卡 (Oscar)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":0,"red":0}},"attendance":58141,"referee":"Marco Rodríguez (MEX)"},
"2014|SF|NED|ARG":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":63267,"referee":"Cüneyt Çakır (TUR)"},
"2014|TP|BRA|NED":{"goals":[{"min":3,"side":"away","scorer":"罗宾·范佩西 (Robin van Persie)","type":"penalty"},{"min":17,"side":"away","scorer":"戴利·布林德 (Daley Blind)","type":"shot"},{"min":91,"side":"away","scorer":"乔尔吉尼奥·维纳尔杜姆 (Georginio Wijnaldum)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":68034,"referee":"Djamel Haimoudi (ALG)"},
"2010|A|FRA|MEX":{"goals":[{"min":64,"side":"away","scorer":"哈维尔·埃尔南德斯 (Javier Hernández)","type":"shot"},{"min":79,"side":"away","scorer":"夸特莫克·布兰科 (Cuauhtémoc Blanco)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":4,"red":0}},"attendance":35370,"referee":"Khalil Al Ghamdi (KSA)"},
"2010|A|FRA|RSA":{"goals":[{"min":20,"side":"home","scorer":"邦哈尼·库马洛 (Bongani Khumalo)","type":"header"},{"min":37,"side":"home","scorer":"卡特莱戈·姆费拉 (Katlego Mphela)","type":"shot"},{"min":70,"side":"away","scorer":"弗洛朗·马卢达 (Florent Malouda)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":1}},"attendance":39415,"referee":"Óscar Ruiz (COL)"},
"2010|A|MEX|URU":{"goals":[{"min":43,"side":"away","scorer":"路易斯·苏亚雷斯 (Luis Suárez)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":33425,"referee":"Viktor Kassai (HUN)"},
"2010|A|RSA|MEX":{"goals":[{"min":55,"side":"home","scorer":"西菲韦·查巴拉拉 (Siphiwe Tshabalala)","type":"shot"},{"min":79,"side":"away","scorer":"拉斐尔·马克斯 (Rafael Márquez)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":84490,"referee":"Ravshan Irmatov (UZB)"},
"2010|A|RSA|URU":{"goals":[{"min":24,"side":"away","scorer":"迭戈·福兰 (Diego Forlán)","type":"shot"},{"min":80,"side":"away","scorer":"迭戈·福兰 (Diego Forlán)","type":"penalty"},{"min":95,"side":"away","scorer":"阿尔瓦罗·佩雷拉 (Álvaro Pereira)","type":"shot"}],"cards":{"home":{"yellow":1,"red":1},"away":{"yellow":1,"red":0}},"attendance":42658,"referee":"Alberto Undiano (ESP)"},
"2010|A|URU|FRA":{"goals":[],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":4,"red":0}},"attendance":64100,"referee":"西村雄一 (JPN)"},
"2010|B|ARG|KOR":{"goals":[{"min":17,"side":"home","scorer":"朴主永 (Park Chu-young)","type":"own_goal"},{"min":33,"side":"home","scorer":"冈萨洛·伊瓜因 (Gonzalo Higuaín)","type":"header"},{"min":"45+1","side":"away","scorer":"李青龙 (Lee Chung-yong)","type":"shot"},{"min":76,"side":"home","scorer":"冈萨洛·伊瓜因 (Gonzalo Higuaín)","type":"shot"},{"min":80,"side":"home","scorer":"冈萨洛·伊瓜因 (Gonzalo Higuaín)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":82174,"referee":"Frank De Bleeckere (BEL)"},
"2010|B|ARG|NGA":{"goals":[{"min":6,"side":"home","scorer":"加布里埃尔·海因策 (Gabriel Heinze)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":55686,"referee":"Wolfgang Stark (GER)"},
"2010|B|GRE|ARG":{"goals":[{"min":77,"side":"away","scorer":"马丁·德米凯利斯 (Martín Demichelis)","type":"shot"},{"min":89,"side":"away","scorer":"马丁·帕勒莫 (Martín Palermo)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":38891,"referee":"Ravshan Irmatov (UZB)"},
"2010|B|GRE|NGA":{"goals":[{"min":16,"side":"away","scorer":"卡卢·乌切 (Kalu Uche)","type":"free_kick"},{"min":44,"side":"home","scorer":"迪米特里斯·萨尔平吉迪斯 (Dimitris Salpingidis)","type":"shot"},{"min":71,"side":"home","scorer":"瓦西里斯·托罗西迪斯 (Vasilis Torosidis)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":1}},"attendance":38000,"referee":"Óscar Ruiz (COL)"},
"2010|B|KOR|GRE":{"goals":[{"min":7,"side":"home","scorer":"李正秀 (Lee Jung-soo)","type":"shot"},{"min":52,"side":"home","scorer":"朴智星 (Park Ji-sung)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":31513,"referee":"Michael Hester (NZL)"},
"2010|B|NGA|KOR":{"goals":[{"min":12,"side":"home","scorer":"卡卢·乌切 (Kalu Uche)","type":"shot"},{"min":38,"side":"away","scorer":"李正秀 (Lee Jung-soo)","type":"shot"},{"min":49,"side":"away","scorer":"朴主永 (Park Chu-young)","type":"free_kick"},{"min":69,"side":"home","scorer":"雅库布·艾耶格贝尼 (Yakubu Aiyegbeni)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":61874,"referee":"Olegário Benquerença (POR)"},
"2010|C|ALG|SVN":{"goals":[{"min":79,"side":"away","scorer":"罗伯特·科伦 (Robert Koren)","type":"shot"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":2,"red":0}},"attendance":30325,"referee":"Carlos Batres (GUA)"},
"2010|C|ENG|ALG":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":64100,"referee":"Ravshan Irmatov (UZB)"},
"2010|C|ENG|USA":{"goals":[{"min":4,"side":"home","scorer":"史蒂文·杰拉德 (Steven Gerrard)","type":"shot"},{"min":40,"side":"away","scorer":"克林特·登普西 (Clint Dempsey)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":38646,"referee":"Carlos Simon (BRA)"},
"2010|C|SVN|ENG":{"goals":[{"min":23,"side":"away","scorer":"杰梅因·迪福 (Jermain Defoe)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":36893,"referee":"Wolfgang Stark (GER)"},
"2010|C|SVN|USA":{"goals":[{"min":13,"side":"home","scorer":"瓦尔特·比尔萨 (Valter Birsa)","type":"shot"},{"min":42,"side":"home","scorer":"兹拉特科·柳比扬基奇 (Zlatko Ljubijankić)","type":"shot"},{"min":48,"side":"away","scorer":"兰登·多诺万 (Landon Donovan)","type":"shot"},{"min":82,"side":"away","scorer":"迈克尔·布拉德利 (Michael Bradley)","type":"shot"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":1,"red":0}},"attendance":45573,"referee":"Koman Coulibaly (MLI)"},
"2010|C|USA|ALG":{"goals":[{"min":91,"side":"home","scorer":"兰登·多诺万 (Landon Donovan)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":4,"red":1}},"attendance":35827,"referee":"Frank De Bleeckere (BEL)"},
"2010|D|AUS|SRB":{"goals":[{"min":69,"side":"home","scorer":"蒂姆·卡希尔 (Tim Cahill)","type":"header"},{"min":73,"side":"home","scorer":"布雷特·霍尔曼 (Brett Holman)","type":"shot"},{"min":84,"side":"away","scorer":"马尔科·潘特利奇 (Marko Pantelić)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":37836,"referee":"Jorge Larrionda (URU)"},
"2010|D|GER|AUS":{"goals":[{"min":8,"side":"home","scorer":"卢卡斯·波多尔斯基 (Lukas Podolski)","type":"shot"},{"min":26,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"},{"min":68,"side":"home","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"},{"min":70,"side":"home","scorer":"卡考 (Cacau)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":1}},"attendance":62660,"referee":"Marco Rodríguez (MEX)"},
"2010|D|GER|SRB":{"goals":[{"min":38,"side":"away","scorer":"米兰·约万诺维奇 (Milan Jovanović)","type":"shot"}],"cards":{"home":{"yellow":4,"red":1},"away":{"yellow":2,"red":0}},"attendance":38294,"referee":"Alberto Undiano (ESP)"},
"2010|D|GHA|AUS":{"goals":[{"min":11,"side":"away","scorer":"布雷特·霍尔曼 (Brett Holman)","type":"shot"},{"min":25,"side":"home","scorer":"阿萨莫阿·吉安 (Asamoah Gyan)","type":"penalty"}],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":2,"red":1}},"attendance":34812,"referee":"Roberto Rosetti (ITA)"},
"2010|D|GHA|GER":{"goals":[{"min":60,"side":"away","scorer":"梅苏特·厄齐尔 (Mesut Özil)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":83391,"referee":"Carlos Simon (BRA)"},
"2010|D|SRB|GHA":{"goals":[{"min":85,"side":"away","scorer":"阿萨莫阿·吉安 (Asamoah Gyan)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":2,"red":0}},"attendance":54283,"referee":"Héctor Baldassi (ARG)"},
"2010|E|CMR|DEN":{"goals":[{"min":10,"side":"home","scorer":"萨穆埃尔·埃托奥 (Samuel Eto'o)","type":"shot"},{"min":33,"side":"away","scorer":"尼克拉斯·本特纳 (Nicklas Bendtner)","type":"shot"},{"min":61,"side":"away","scorer":"丹尼斯·罗梅达尔 (Dennis Rommedahl)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":38107,"referee":"Jorge Larrionda (URU)"},
"2010|E|CMR|NED":{"goals":[{"min":36,"side":"away","scorer":"罗宾·范佩西 (Robin van Persie)","type":"shot"},{"min":65,"side":"home","scorer":"萨穆埃尔·埃托奥 (Samuel Eto'o)","type":"penalty"},{"min":83,"side":"away","scorer":"克拉斯-扬·亨特拉尔 (Klaas-Jan Huntelaar)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":63093,"referee":"Pablo Pozo (CHI)"},
"2010|E|DEN|JPN":{"goals":[{"min":17,"side":"away","scorer":"本田圭佑 (Keisuke Honda)","type":"free_kick"},{"min":30,"side":"away","scorer":"远藤保仁 (Endō Yasuhito)","type":"free_kick"},{"min":81,"side":"home","scorer":"容·达尔·托马森 (Jon Dahl Tomasson)","type":"penalty"},{"min":87,"side":"away","scorer":"冈崎慎司 (Shinji Okazaki)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":27967,"referee":"Jerome Damon (RSA)"},
"2010|E|JPN|CMR":{"goals":[{"min":39,"side":"home","scorer":"本田圭佑 (Keisuke Honda)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":30620,"referee":"Olegário Benquerença (POR)"},
"2010|E|NED|DEN":{"goals":[{"min":46,"side":"home","scorer":"丹尼尔·阿格 (Daniel Agger)","type":"own_goal"},{"min":85,"side":"home","scorer":"迪尔克·库伊特 (Dirk Kuyt)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":83465,"referee":"Stéphane Lannoy (FRA)"},
"2010|E|NED|JPN":{"goals":[{"min":53,"side":"home","scorer":"韦斯利·斯内德 (Wesley Sneijder)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":62010,"referee":"Héctor Baldassi (ARG)"},
"2010|FINAL|NED|ESP":{"goals":[{"min":116,"side":"away","scorer":"安德烈斯·伊涅斯塔 (Andrés Iniesta)","type":"shot"}],"cards":{"home":{"yellow":8,"red":1},"away":{"yellow":5,"red":0}},"attendance":84490,"referee":"Howard Webb (ENG)"},
"2010|F|ITA|NZL":{"goals":[{"min":7,"side":"away","scorer":"沙恩·斯梅尔茨 (Shane Smeltz)","type":"shot"},{"min":29,"side":"home","scorer":"温琴佐·亚昆塔 (Vincenzo Iaquinta)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":38229,"referee":"Carlos Batres (GUA)"},
"2010|F|ITA|PAR":{"goals":[{"min":39,"side":"away","scorer":"安托林·阿尔卡拉斯 (Antolín Alcaraz)","type":"header"},{"min":63,"side":"home","scorer":"达尼埃莱·德罗西 (Daniele De Rossi)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":62471,"referee":"Benito Archundia (MEX)"},
"2010|F|NZL|SVK":{"goals":[{"min":50,"side":"away","scorer":"罗伯特·维特克 (Róbert Vittek)","type":"header"},{"min":93,"side":"home","scorer":"温斯顿·里德 (Winston Reid)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":23871,"referee":"Jerome Damon (RSA)"},
"2010|F|PAR|NZL":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":34979,"referee":"西村雄一 (JPN)"},
"2010|F|SVK|ITA":{"goals":[{"min":25,"side":"home","scorer":"罗伯特·维特克 (Róbert Vittek)","type":"shot"},{"min":73,"side":"home","scorer":"罗伯特·维特克 (Róbert Vittek)","type":"shot"},{"min":81,"side":"away","scorer":"安东尼奥·迪纳塔莱 (Antonio Di Natale)","type":"shot"},{"min":89,"side":"home","scorer":"卡米尔·科普内克 (Kamil Kopúnek)","type":"shot"},{"min":92,"side":"away","scorer":"法比奥·夸利亚雷拉 (Fabio Quagliarella)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":4,"red":0}},"attendance":41521,"referee":"Howard Webb (ENG)"},
"2010|F|SVK|PAR":{"goals":[{"min":27,"side":"away","scorer":"恩里克·维拉 (Enrique Vera)","type":"shot"},{"min":86,"side":"away","scorer":"克里斯蒂安·里韦罗斯 (Cristian Riveros)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":26643,"referee":"Eddy Maillet (SEY)"},
"2010|G|BRA|CIV":{"goals":[{"min":25,"side":"home","scorer":"路易斯·法比亚诺 (Luís Fabiano)","type":"shot"},{"min":50,"side":"home","scorer":"路易斯·法比亚诺 (Luís Fabiano)","type":"shot"},{"min":62,"side":"home","scorer":"埃拉诺 (Elano)","type":"shot"},{"min":79,"side":"away","scorer":"迪迪埃·德罗巴 (Didier Drogba)","type":"header"}],"cards":{"home":{"yellow":1,"red":1},"away":{"yellow":3,"red":0}},"attendance":84455,"referee":"Stéphane Lannoy (FRA)"},
"2010|G|BRA|PRK":{"goals":[{"min":55,"side":"home","scorer":"麦孔 (Maicon)","type":"shot"},{"min":72,"side":"home","scorer":"埃拉诺 (Elano)","type":"shot"},{"min":89,"side":"away","scorer":"池允南 (Ji Yun-nam)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":54331,"referee":"Viktor Kassai (HUN)"},
"2010|G|CIV|POR":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":37034,"referee":"Jorge Larrionda (URU)"},
"2010|G|POR|BRA":{"goals":[],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":3,"red":0}},"attendance":62712,"referee":"Benito Archundia (MEX)"},
"2010|G|POR|PRK":{"goals":[{"min":29,"side":"home","scorer":"劳尔·梅雷莱斯 (Raul Meireles)","type":"shot"},{"min":53,"side":"home","scorer":"西芒·萨布罗萨 (Simão Sabrosa)","type":"shot"},{"min":56,"side":"home","scorer":"乌戈·阿尔梅达 (Hugo Almeida)","type":"header"},{"min":60,"side":"home","scorer":"蒂亚戈·莫塔 (Thiago Motta)","type":"shot"},{"min":81,"side":"home","scorer":"列德松 (Liédson)","type":"shot"},{"min":87,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"shot"},{"min":89,"side":"home","scorer":"蒂亚戈·莫塔 (Thiago Motta)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":63644,"referee":"Pablo Pozo (CHI)"},
"2010|G|PRK|CIV":{"goals":[{"min":14,"side":"away","scorer":"亚亚·图雷 (Yaya Touré)","type":"shot"},{"min":20,"side":"away","scorer":"罗马里克 (Romaric)","type":"header"},{"min":82,"side":"away","scorer":"萨洛蒙·卡卢 (Salomon Kalou)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":34639,"referee":"Alberto Undiano (ESP)"},
"2010|H|CHI|ESP":{"goals":[{"min":24,"side":"away","scorer":"大卫·比利亚 (David Villa)","type":"shot"},{"min":37,"side":"away","scorer":"安德烈斯·伊涅斯塔 (Andrés Iniesta)","type":"shot"},{"min":47,"side":"home","scorer":"罗德里戈·米利亚尔 (Rodrigo Millar)","type":"shot"}],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":0,"red":0}},"attendance":41827,"referee":"Marco Rodríguez (MEX)"},
"2010|H|CHI|SUI":{"goals":[{"min":75,"side":"home","scorer":"马克·冈萨雷斯 (Mark González)","type":"header"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":3,"red":1}},"attendance":34872,"referee":"Khalil Al Ghamdi (KSA)"},
"2010|H|ESP|HON":{"goals":[{"min":17,"side":"home","scorer":"大卫·比利亚 (David Villa)","type":"shot"},{"min":51,"side":"home","scorer":"大卫·比利亚 (David Villa)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":1,"red":0}},"attendance":54386,"referee":"西村雄一 (JPN)"},
"2010|H|ESP|SUI":{"goals":[{"min":52,"side":"away","scorer":"热尔松·费尔南德斯 (Gelson Fernandes)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":62453,"referee":"Howard Webb (ENG)"},
"2010|H|HON|CHI":{"goals":[{"min":34,"side":"away","scorer":"让·博塞茹尔 (Jean Beausejour)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":32893,"referee":"Eddy Maillet (SEY)"},
"2010|H|SUI|HON":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":28042,"referee":"Héctor Baldassi (ARG)"},
"2010|QF|ARG|GER":{"goals":[{"min":3,"side":"away","scorer":"托马斯·穆勒 (Thomas Müller)","type":"header"},{"min":68,"side":"away","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"},{"min":74,"side":"away","scorer":"阿尔内·弗里德里希 (Arne Friedrich)","type":"shot"},{"min":89,"side":"away","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":64100,"referee":"Ravshan Irmatov (UZB)"},
"2010|QF|NED|BRA":{"goals":[{"min":10,"side":"away","scorer":"罗比尼奥 (Robinho)","type":"shot"},{"min":53,"side":"home","scorer":"韦斯利·斯内德 (Wesley Sneijder)","type":"header"},{"min":68,"side":"home","scorer":"韦斯利·斯内德 (Wesley Sneijder)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":1}},"attendance":40267,"referee":"西村雄一 (JPN)"},
"2010|QF|PAR|ESP":{"goals":[{"min":83,"side":"away","scorer":"大卫·比利亚 (David Villa)","type":"shot"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":2,"red":0}},"attendance":55359,"referee":"Carlos Batres (GUA)"},
"2010|QF|URU|GHA":{"goals":[{"min":"45+2","side":"away","scorer":"苏利·蒙塔里 (Sulley Muntari)","type":"shot"},{"min":55,"side":"home","scorer":"迭戈·福兰 (Diego Forlán)","type":"free_kick"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":1}},"attendance":84017,"referee":"Olegário Benquerença (POR)"},
"2010|R16|ARG|MEX":{"goals":[{"min":26,"side":"home","scorer":"卡洛斯·特维斯 (Carlos Tévez)","type":"shot"},{"min":33,"side":"home","scorer":"冈萨洛·伊瓜因 (Gonzalo Higuaín)","type":"shot"},{"min":52,"side":"home","scorer":"卡洛斯·特维斯 (Carlos Tévez)","type":"shot"},{"min":71,"side":"away","scorer":"哈维尔·埃尔南德斯 (Javier Hernández)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":84377,"referee":"Roberto Rosetti (ITA)"},
"2010|R16|BRA|CHI":{"goals":[{"min":35,"side":"home","scorer":"胡安·席尔维拉 (Juan)","type":"header"},{"min":38,"side":"home","scorer":"路易斯·法比亚诺 (Luís Fabiano)","type":"shot"},{"min":59,"side":"home","scorer":"罗比尼奥 (Robinho)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":54544,"referee":"Howard Webb (ENG)"},
"2010|R16|ESP|POR":{"goals":[{"min":63,"side":"home","scorer":"大卫·比利亚 (David Villa)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":1}},"attendance":62955,"referee":"Héctor Baldassi (ARG)"},
"2010|R16|GER|ENG":{"goals":[{"min":20,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"},{"min":32,"side":"home","scorer":"卢卡斯·波多尔斯基 (Lukas Podolski)","type":"shot"},{"min":37,"side":"away","scorer":"马修·厄普森 (Matthew Upson)","type":"header"},{"min":67,"side":"home","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"},{"min":70,"side":"home","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":40510,"referee":"Jorge Larrionda (URU)"},
"2010|R16|NED|SVK":{"goals":[{"min":18,"side":"home","scorer":"阿尔扬·罗本 (Arjen Robben)","type":"shot"},{"min":84,"side":"home","scorer":"韦斯利·斯内德 (Wesley Sneijder)","type":"shot"},{"min":"90+4","side":"away","scorer":"罗伯特·维特克 (Róbert Vittek)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":61962,"referee":"Alberto Undiano (ESP)"},
"2010|R16|PAR|JPN":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":36656,"referee":"Frank De Bleeckere (BEL)"},
"2010|R16|URU|KOR":{"goals":[{"min":8,"side":"home","scorer":"路易斯·苏亚雷斯 (Luis Suárez)","type":"shot"},{"min":68,"side":"away","scorer":"李青龙 (Lee Chung-yong)","type":"header"},{"min":80,"side":"home","scorer":"路易斯·苏亚雷斯 (Luis Suárez)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":30597,"referee":"Wolfgang Stark (GER)"},
"2010|R16|USA|GHA":{"goals":[{"min":5,"side":"away","scorer":"凯文-普林斯·博阿滕 (Kevin-Prince Boateng)","type":"shot"},{"min":62,"side":"home","scorer":"兰登·多诺万 (Landon Donovan)","type":"penalty"},{"min":"90+3","side":"away","scorer":"阿萨莫阿·吉安 (Asamoah Gyan)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":52022,"referee":"Viktor Kassai (HUN)"},
"2010|SF|GER|ESP":{"goals":[{"min":73,"side":"away","scorer":"卡尔斯·普约尔 (Carles Puyol)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":60960,"referee":"Viktor Kassai (HUN)"},
"2010|SF|URU|NED":{"goals":[{"min":18,"side":"away","scorer":"乔瓦尼·范布隆克霍斯特 (Giovanni van Bronckhorst)","type":"shot"},{"min":41,"side":"home","scorer":"迭戈·福兰 (Diego Forlán)","type":"shot"},{"min":70,"side":"away","scorer":"韦斯利·斯内德 (Wesley Sneijder)","type":"shot"},{"min":73,"side":"away","scorer":"阿尔扬·罗本 (Arjen Robben)","type":"header"},{"min":"90+2","side":"home","scorer":"马克西·佩雷拉 (Maxi Pereira)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":4,"red":0}},"attendance":62479,"referee":"Ravshan Irmatov (UZB)"},
"2010|TP|URU|GER":{"goals":[{"min":19,"side":"away","scorer":"托马斯·穆勒 (Thomas Müller)","type":"shot"},{"min":28,"side":"home","scorer":"埃丁森·卡瓦尼 (Edinson Cavani)","type":"shot"},{"min":51,"side":"home","scorer":"迭戈·福兰 (Diego Forlán)","type":"shot"},{"min":56,"side":"away","scorer":"马塞尔·扬森 (Marcell Jansen)","type":"header"},{"min":82,"side":"away","scorer":"萨米·赫迪拉 (Sami Khedira)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":1}},"attendance":36254,"referee":"Benito Archundia (MEX)"},
"2006|A|CRC|POL":{"goals":[{"min":25,"side":"home","scorer":"罗纳尔德·戈麦斯 (Rónald Gómez)","type":"free_kick"},{"min":33,"side":"away","scorer":"巴托什·博萨茨基 (Bartosz Bosacki)","type":"shot"},{"min":65,"side":"away","scorer":"巴托什·博萨茨基 (Bartosz Bosacki)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":43000,"referee":"Shamsul Maidin (SIN)"},
"2006|A|ECU|CRC":{"goals":[{"min":8,"side":"home","scorer":"卡洛斯·特诺里奥 (Carlos Tenorio)","type":"header"},{"min":54,"side":"home","scorer":"阿古斯丁·德尔加多 (Agustín Delgado)","type":"shot"},{"min":92,"side":"home","scorer":"伊万·卡维德斯 (Iván Kaviedes)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":50000,"referee":"Coffi Codjia (BEN)"},
"2006|A|ECU|GER":{"goals":[{"min":4,"side":"away","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"},{"min":44,"side":"away","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"},{"min":57,"side":"away","scorer":"卢卡斯·波多尔斯基 (Lukas Podolski)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":72000,"referee":"Valentin Ivanov (RUS)"},
"2006|A|GER|CRC":{"goals":[{"min":6,"side":"home","scorer":"菲利普·拉姆 (Philipp Lahm)","type":"shot"},{"min":12,"side":"away","scorer":"保罗·万乔普 (Paulo Wanchope)","type":"shot"},{"min":17,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"shot"},{"min":61,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"},{"min":73,"side":"away","scorer":"保罗·万乔普 (Paulo Wanchope)","type":"shot"},{"min":87,"side":"home","scorer":"托尔斯滕·弗林斯 (Torsten Frings)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":66000,"referee":"Horacio Elizondo (ARG)"},
"2006|A|GER|POL":{"goals":[{"min":91,"side":"home","scorer":"奥利弗·诺伊维尔 (Oliver Neuville)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":4,"red":1}},"attendance":65000,"referee":"Luis Medina Cantalejo (ESP)"},
"2006|A|POL|ECU":{"goals":[{"min":24,"side":"away","scorer":"卡洛斯·特诺里奥 (Carlos Tenorio)","type":"header"},{"min":80,"side":"away","scorer":"阿古斯丁·德尔加多 (Agustín Delgado)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":52000,"referee":"Toru Kamikawa (JPN)"},
"2006|B|ENG|PAR":{"goals":[{"min":3,"side":"home","scorer":"卡洛斯·加马拉 (Carlos Gamarra)","type":"own_goal"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":48000,"referee":"Marco Rodríguez (MEX)"},
"2006|B|ENG|TRI":{"goals":[{"min":83,"side":"home","scorer":"彼得·克劳奇 (Peter Crouch)","type":"header"},{"min":91,"side":"home","scorer":"史蒂文·杰拉德 (Steven Gerrard)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":41000,"referee":"Toru Kamikawa (JPN)"},
"2006|B|PAR|TRI":{"goals":[{"min":25,"side":"home","scorer":"布伦特·桑乔 (Brent Sancho)","type":"own_goal"},{"min":86,"side":"home","scorer":"内尔松·奎瓦斯 (Nelson Cuevas)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":46000,"referee":"Roberto Rosetti (ITA)"},
"2006|B|SWE|ENG":{"goals":[{"min":34,"side":"away","scorer":"乔·科尔 (Joe Cole)","type":"shot"},{"min":51,"side":"home","scorer":"马库斯·阿尔贝克 (Marcus Allbäck)","type":"header"},{"min":85,"side":"away","scorer":"史蒂文·杰拉德 (Steven Gerrard)","type":"header"},{"min":90,"side":"home","scorer":"亨里克·拉尔森 (Henrik Larsson)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":45000,"referee":"Massimo Busacca (SUI)"},
"2006|B|SWE|PAR":{"goals":[{"min":89,"side":"home","scorer":"弗雷德里克·永贝里 (Freddie Ljungberg)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":72000,"referee":"Ľuboš Micheľ (SVK)"},
"2006|B|TRI|SWE":{"goals":[],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":1,"red":0}},"attendance":62959,"referee":"Shamsul Maidin (SIN)"},
"2006|C|ARG|CIV":{"goals":[{"min":24,"side":"home","scorer":"埃尔南·克雷斯波 (Hernán Crespo)","type":"shot"},{"min":38,"side":"home","scorer":"哈维尔·萨维奥拉 (Javier Saviola)","type":"shot"},{"min":82,"side":"away","scorer":"迪迪埃·德罗巴 (Didier Drogba)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":49480,"referee":"Frank De Bleeckere (BEL)"},
"2006|C|ARG|SCG":{"goals":[{"min":6,"side":"home","scorer":"马克西·罗德里格斯 (Maxi Rodríguez)","type":"shot"},{"min":31,"side":"home","scorer":"埃斯特万·坎比亚索 (Esteban Cambiasso)","type":"shot"},{"min":41,"side":"home","scorer":"马克西·罗德里格斯 (Maxi Rodríguez)","type":"shot"},{"min":78,"side":"home","scorer":"埃尔南·克雷斯波 (Hernán Crespo)","type":"shot"},{"min":84,"side":"home","scorer":"卡洛斯·特维斯 (Carlos Tévez)","type":"shot"},{"min":88,"side":"home","scorer":"利昂内尔·梅西 (Lionel Messi)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":1}},"attendance":52000,"referee":"Roberto Rosetti (ITA)"},
"2006|C|CIV|SCG":{"goals":[{"min":10,"side":"away","scorer":"尼古拉·日吉奇 (Nikola Žigić)","type":"header"},{"min":20,"side":"away","scorer":"萨沙·伊利奇 (Saša Ilić)","type":"shot"},{"min":37,"side":"home","scorer":"阿鲁纳·丹当 (Aruna Dindane)","type":"penalty"},{"min":67,"side":"home","scorer":"阿鲁纳·丹当 (Aruna Dindane)","type":"header"},{"min":86,"side":"home","scorer":"博纳旺蒂尔·卡卢 (Bonaventure Kalou)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":4,"red":1}},"attendance":66000,"referee":"Marco Rodríguez (MEX)"},
"2006|C|NED|ARG":{"goals":[],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":48000,"referee":"Luis Medina Cantalejo (ESP)"},
"2006|C|NED|CIV":{"goals":[{"min":23,"side":"home","scorer":"罗宾·范佩西 (Robin van Persie)","type":"free_kick"},{"min":27,"side":"home","scorer":"鲁德·范尼斯特鲁伊 (Ruud van Nistelrooy)","type":"shot"},{"min":38,"side":"away","scorer":"巴卡里·科内 (Bakari Koné)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":48000,"referee":"Óscar Ruiz (COL)"},
"2006|C|SCG|NED":{"goals":[{"min":18,"side":"away","scorer":"阿尔扬·罗本 (Arjen Robben)","type":"shot"}],"cards":{"home":{"yellow":4,"red":0},"away":{"yellow":1,"red":0}},"attendance":43000,"referee":"Markus Merk (GER)"},
"2006|D|ANG|POR":{"goals":[{"min":4,"side":"away","scorer":"保莱塔 (Pauleta)","type":"shot"}],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":2,"red":0}},"attendance":45000,"referee":"Jorge Larrionda (URU)"},
"2006|D|IRN|ANG":{"goals":[{"min":60,"side":"away","scorer":"弗拉维奥·孔塞桑 (Flávio Conceição)","type":"header"},{"min":75,"side":"home","scorer":"索赫拉布·巴赫蒂亚里扎德 (Sohrab Bakhtiarizadeh)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":38000,"referee":"Mark Shield (AUS)"},
"2006|D|MEX|ANG":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":5,"red":1}},"attendance":43000,"referee":"Shamsul Maidin (SIN)"},
"2006|D|MEX|IRN":{"goals":[{"min":28,"side":"home","scorer":"奥马尔·布拉沃 (Omar Bravo)","type":"shot"},{"min":36,"side":"away","scorer":"叶海亚·戈尔穆罕默迪 (Yahya Golmohammadi)","type":"shot"},{"min":76,"side":"home","scorer":"奥马尔·布拉沃 (Omar Bravo)","type":"shot"},{"min":79,"side":"home","scorer":"齐尼亚 (Zinha)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":41000,"referee":"Roberto Rosetti (ITA)"},
"2006|D|POR|IRN":{"goals":[{"min":63,"side":"home","scorer":"德科 (Deco)","type":"shot"},{"min":80,"side":"home","scorer":"克里斯蒂亚诺·罗纳尔多 (Cristiano Ronaldo)","type":"penalty"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":48000,"referee":"Éric Poulat (FRA)"},
"2006|D|POR|MEX":{"goals":[{"min":6,"side":"home","scorer":"马尼切 (Maniche)","type":"shot"},{"min":24,"side":"home","scorer":"西芒·萨布罗萨 (Simão Sabrosa)","type":"penalty"},{"min":29,"side":"away","scorer":"何塞·丰塞卡 (José Fonseca)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":4,"red":1}},"attendance":45000,"referee":"Ľuboš Micheľ (SVK)"},
"2006|E|CZE|GHA":{"goals":[{"min":2,"side":"away","scorer":"阿萨莫阿·吉安 (Asamoah Gyan)","type":"shot"},{"min":82,"side":"away","scorer":"苏利·蒙塔里 (Sulley Muntari)","type":"shot"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":2,"red":0}},"attendance":45000,"referee":"Horacio Elizondo (ARG)"},
"2006|E|CZE|ITA":{"goals":[{"min":26,"side":"away","scorer":"马尔科·马特拉齐 (Marco Materazzi)","type":"header"},{"min":87,"side":"away","scorer":"菲利波·因扎吉 (Filippo Inzaghi)","type":"shot"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":1,"red":0}},"attendance":50000,"referee":"Benito Archundia (MEX)"},
"2006|E|GHA|USA":{"goals":[{"min":22,"side":"home","scorer":"哈米努·德拉曼 (Haminu Draman)","type":"shot"},{"min":43,"side":"away","scorer":"克林特·登普西 (Clint Dempsey)","type":"shot"},{"min":"45+2","side":"home","scorer":"斯蒂芬·阿皮亚 (Stephen Appiah)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":41000,"referee":"Markus Merk (GER)"},
"2006|E|ITA|GHA":{"goals":[{"min":40,"side":"home","scorer":"安德烈亚·皮尔洛 (Andrea Pirlo)","type":"shot"},{"min":83,"side":"home","scorer":"温琴佐·亚昆塔 (Vincenzo Iaquinta)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":43000,"referee":"Carlos Simon (BRA)"},
"2006|E|ITA|USA":{"goals":[{"min":22,"side":"home","scorer":"阿尔贝托·吉拉迪诺 (Alberto Gilardino)","type":"header"},{"min":27,"side":"away","scorer":"克里斯蒂安·扎卡尔多 (Cristian Zaccardo)","type":"own_goal"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":1,"red":2}},"attendance":46000,"referee":"Jorge Larrionda (URU)"},
"2006|E|USA|CZE":{"goals":[{"min":5,"side":"away","scorer":"扬·科勒 (Jan Koller)","type":"header"},{"min":36,"side":"away","scorer":"托马什·罗西茨基 (Tomáš Rosický)","type":"shot"},{"min":76,"side":"away","scorer":"托马什·罗西茨基 (Tomáš Rosický)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":52000,"referee":"Carlos Amarilla (PAR)"},
"2006|FINAL|ITA|FRA":{"goals":[{"min":7,"side":"away","scorer":"齐内丁·齐达内 (Zinedine Zidane)","type":"penalty"},{"min":19,"side":"home","scorer":"马尔科·马特拉齐 (Marco Materazzi)","type":"header"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":1}},"attendance":69000,"referee":"Horacio Elizondo (ARG)"},
"2006|F|AUS|JPN":{"goals":[{"min":26,"side":"away","scorer":"中村俊辅 (Nakamura Shunsuke)","type":"shot"},{"min":84,"side":"home","scorer":"蒂姆·卡希尔 (Tim Cahill)","type":"shot"},{"min":89,"side":"home","scorer":"蒂姆·卡希尔 (Tim Cahill)","type":"shot"},{"min":92,"side":"home","scorer":"约翰·阿洛伊西 (John Aloisi)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":46000,"referee":"Essam Abd El Fatah (EGY)"},
"2006|F|BRA|AUS":{"goals":[{"min":49,"side":"home","scorer":"阿德里亚诺 (Adriano)","type":"shot"},{"min":90,"side":"home","scorer":"弗雷德 (Fred)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":66000,"referee":"Markus Merk (GER)"},
"2006|F|BRA|CRO":{"goals":[{"min":44,"side":"home","scorer":"卡卡 (Kaká)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":72000,"referee":"Benito Archundia (MEX)"},
"2006|F|CRO|AUS":{"goals":[{"min":2,"side":"home","scorer":"达里奥·斯尔纳 (Darijo Srna)","type":"free_kick"},{"min":38,"side":"away","scorer":"克雷格·摩尔 (Craig Moore)","type":"penalty"},{"min":56,"side":"home","scorer":"尼科·科瓦奇 (Niko Kovač)","type":"shot"},{"min":79,"side":"away","scorer":"哈里·科威尔 (Harry Kewell)","type":"shot"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":3,"red":0}},"attendance":44000,"referee":"Graham Poll (ENG)"},
"2006|F|JPN|BRA":{"goals":[{"min":34,"side":"home","scorer":"玉田圭司 (Tamada Keiji)","type":"shot"},{"min":"45+1","side":"away","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"header"},{"min":53,"side":"away","scorer":"小儒尼尼奥 (Juninho Pernambucano)","type":"shot"},{"min":59,"side":"away","scorer":"吉尔伯托·席尔瓦 (Gilberto Silva)","type":"shot"},{"min":81,"side":"away","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":44000,"referee":"Éric Poulat (FRA)"},
"2006|F|JPN|CRO":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":1}},"attendance":38000,"referee":"Frank De Bleeckere (BEL)"},
"2006|G|FRA|KOR":{"goals":[{"min":9,"side":"home","scorer":"蒂埃里·亨利 (Thierry Henry)","type":"shot"},{"min":81,"side":"away","scorer":"朴智星 (Park Ji-sung)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43000,"referee":"Benito Archundia (MEX)"},
"2006|G|FRA|SUI":{"goals":[],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":52000,"referee":"Valentin Ivanov (RUS)"},
"2006|G|KOR|TOG":{"goals":[{"min":31,"side":"away","scorer":"穆罕默德·卡德尔 (Mohamed Kader)","type":"shot"},{"min":54,"side":"home","scorer":"李天秀 (Lee Chun-soo)","type":"free_kick"},{"min":72,"side":"home","scorer":"安贞焕 (Ahn Jung-hwan)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":1}},"attendance":48000,"referee":"Graham Poll (ENG)"},
"2006|G|SUI|KOR":{"goals":[{"min":23,"side":"home","scorer":"菲利普·森德罗斯 (Philippe Senderos)","type":"header"},{"min":77,"side":"home","scorer":"亚历山大·弗雷 (Alexander Frei)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":43000,"referee":"Horacio Elizondo (ARG)"},
"2006|G|TOG|FRA":{"goals":[{"min":55,"side":"away","scorer":"帕特里克·维埃拉 (Patrick Vieira)","type":"header"},{"min":61,"side":"away","scorer":"蒂埃里·亨利 (Thierry Henry)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":45000,"referee":"Jorge Larrionda (URU)"},
"2006|G|TOG|SUI":{"goals":[{"min":16,"side":"away","scorer":"亚历山大·弗雷 (Alexander Frei)","type":"shot"},{"min":88,"side":"away","scorer":"特兰奎洛·巴内塔 (Tranquillo Barnetta)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":43000,"referee":"Carlos Amarilla (PAR)"},
"2006|H|ESP|TUN":{"goals":[{"min":8,"side":"away","scorer":"贾哈尔·姆纳里 (Jawhar Mnari)","type":"shot"},{"min":71,"side":"home","scorer":"劳尔·冈萨雷斯 (Raúl González)","type":"shot"},{"min":76,"side":"home","scorer":"费尔南多·托雷斯 (Fernando Torres)","type":"shot"},{"min":91,"side":"home","scorer":"费尔南多·托雷斯 (Fernando Torres)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":52000,"referee":"Carlos Simon (BRA)"},
"2006|H|ESP|UKR":{"goals":[{"min":13,"side":"home","scorer":"哈维·阿隆索 (Xabi Alonso)","type":"header"},{"min":17,"side":"home","scorer":"大卫·比利亚 (David Villa)","type":"free_kick"},{"min":48,"side":"home","scorer":"大卫·比利亚 (David Villa)","type":"penalty"},{"min":81,"side":"home","scorer":"费尔南多·托雷斯 (Fernando Torres)","type":"shot"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":2,"red":1}},"attendance":43000,"referee":"Massimo Busacca (SUI)"},
"2006|H|KSA|ESP":{"goals":[{"min":36,"side":"away","scorer":"华尼托 (Juanito)","type":"header"}],"cards":{"home":{"yellow":0,"red":0},"away":{"yellow":1,"red":0}},"attendance":46000,"referee":"Coffi Codjia (BEN)"},
"2006|H|KSA|UKR":{"goals":[{"min":4,"side":"away","scorer":"安德里·鲁索尔 (Andriy Rusol)","type":"shot"},{"min":36,"side":"away","scorer":"谢尔盖·雷布罗夫 (Serhiy Rebrov)","type":"shot"},{"min":46,"side":"away","scorer":"安德烈·舍甫琴科 (Andriy Shevchenko)","type":"header"},{"min":84,"side":"away","scorer":"马克西姆·卡利尼琴科 (Maksym Kalynychenko)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":50000,"referee":"Graham Poll (ENG)"},
"2006|H|TUN|KSA":{"goals":[{"min":23,"side":"home","scorer":"齐亚德·贾齐里 (Ziad Jaziri)","type":"shot"},{"min":57,"side":"away","scorer":"亚西尔·卡塔尼 (Yasser Al-Qahtani)","type":"shot"},{"min":84,"side":"away","scorer":"萨米·贾比尔 (Sami Al-Jaber)","type":"shot"},{"min":92,"side":"home","scorer":"拉迪·贾伊迪 (Radhi Jaïdi)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":66000,"referee":"Mark Shield (AUS)"},
"2006|H|UKR|TUN":{"goals":[{"min":70,"side":"home","scorer":"安德烈·舍甫琴科 (Andriy Shevchenko)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":1}},"attendance":72000,"referee":"Carlos Amarilla (PAR)"},
"2006|QF|BRA|FRA":{"goals":[{"min":57,"side":"away","scorer":"蒂埃里·亨利 (Thierry Henry)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":48000,"referee":"Luis Medina Cantalejo (ESP)"},
"2006|QF|ENG|POR":{"goals":[],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":2,"red":0}},"attendance":52000,"referee":"Horacio Elizondo (ARG)"},
"2006|QF|GER|ARG":{"goals":[{"min":49,"side":"away","scorer":"罗伯托·阿亚拉 (Roberto Ayala)","type":"header"},{"min":80,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":4,"red":1}},"attendance":72000,"referee":"Ľuboš Micheľ (SVK)"},
"2006|QF|ITA|UKR":{"goals":[{"min":6,"side":"home","scorer":"詹卢卡·赞布罗塔 (Gianluca Zambrotta)","type":"shot"},{"min":59,"side":"home","scorer":"卢卡·托尼 (Luca Toni)","type":"header"},{"min":69,"side":"home","scorer":"卢卡·托尼 (Luca Toni)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":50000,"referee":"Frank De Bleeckere (BEL)"},
"2006|R16|ARG|MEX":{"goals":[{"min":6,"side":"away","scorer":"拉斐尔·马克斯 (Rafael Márquez)","type":"shot"},{"min":10,"side":"home","scorer":"埃尔南·克雷斯波 (Hernán Crespo)","type":"shot"},{"min":98,"side":"home","scorer":"马克西·罗德里格斯 (Maxi Rodríguez)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43000,"referee":"Massimo Busacca (SUI)"},
"2006|R16|BRA|GHA":{"goals":[{"min":5,"side":"home","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"},{"min":"45+1","side":"home","scorer":"阿德里亚诺 (Adriano)","type":"shot"},{"min":84,"side":"home","scorer":"泽·罗伯托 (Zé Roberto)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":1}},"attendance":48000,"referee":"Ľuboš Micheľ (SVK)"},
"2006|R16|ENG|ECU":{"goals":[{"min":60,"side":"home","scorer":"大卫·贝克汉姆 (David Beckham)","type":"free_kick"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":52000,"referee":"Frank De Bleeckere (BEL)"},
"2006|R16|ESP|FRA":{"goals":[{"min":28,"side":"home","scorer":"大卫·比利亚 (David Villa)","type":"penalty"},{"min":41,"side":"away","scorer":"弗兰克·里贝里 (Franck Ribéry)","type":"shot"},{"min":83,"side":"away","scorer":"帕特里克·维埃拉 (Patrick Vieira)","type":"header"},{"min":"90+2","side":"away","scorer":"齐内丁·齐达内 (Zinedine Zidane)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43000,"referee":"Roberto Rosetti (ITA)"},
"2006|R16|GER|SWE":{"goals":[{"min":4,"side":"home","scorer":"卢卡斯·波多尔斯基 (Lukas Podolski)","type":"shot"},{"min":12,"side":"home","scorer":"卢卡斯·波多尔斯基 (Lukas Podolski)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":1}},"attendance":66000,"referee":"Carlos Simon (BRA)"},
"2006|R16|ITA|AUS":{"goals":[{"min":"90+5","side":"home","scorer":"弗朗切斯科·托蒂 (Francesco Totti)","type":"penalty"}],"cards":{"home":{"yellow":3,"red":1},"away":{"yellow":3,"red":0}},"attendance":46000,"referee":"Luis Medina Cantalejo (ESP)"},
"2006|R16|POR|NED":{"goals":[{"min":23,"side":"home","scorer":"马尼切 (Maniche)","type":"shot"}],"cards":{"home":{"yellow":4,"red":2},"away":{"yellow":4,"red":2}},"attendance":41000,"referee":"Valentin Ivanov (RUS)"},
"2006|R16|SUI|UKR":{"goals":[],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":45000,"referee":"Benito Archundia (MEX)"},
"2006|SF|GER|ITA":{"goals":[{"min":119,"side":"away","scorer":"法比奥·格罗索 (Fabio Grosso)","type":"shot"},{"min":"120+1","side":"away","scorer":"亚历山德罗·德尔皮耶罗 (Alessandro Del Piero)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":65000,"referee":"Benito Archundia (MEX)"},
"2006|SF|POR|FRA":{"goals":[{"min":33,"side":"away","scorer":"齐内丁·齐达内 (Zinedine Zidane)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":66000,"referee":"Jorge Larrionda (URU)"},
"2006|TP|GER|POR":{"goals":[{"min":56,"side":"home","scorer":"巴斯蒂安·施魏因斯泰格 (Bastian Schweinsteiger)","type":"shot"},{"min":60,"side":"home","scorer":"佩蒂特 (Petit)","type":"own_goal"},{"min":78,"side":"home","scorer":"巴斯蒂安·施魏因斯泰格 (Bastian Schweinsteiger)","type":"shot"},{"min":88,"side":"away","scorer":"努诺·戈麦斯 (Nuno Gomes)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":52000,"referee":"Toru Kamikawa (JPN)"},
"2002|A|DEN|FRA":{"goals":[{"min":22,"side":"home","scorer":"丹尼斯·罗梅达尔 (Dennis Rommedahl)","type":"shot"},{"min":67,"side":"home","scorer":"容·达尔·托马森 (Jon Dahl Tomasson)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":48100,"referee":"Vítor Melo Pereira (POR)"},
"2002|A|DEN|SEN":{"goals":[{"min":16,"side":"home","scorer":"容·达尔·托马森 (Jon Dahl Tomasson)","type":"penalty"},{"min":52,"side":"away","scorer":"萨利夫·迪奥 (Salif Diao)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":1}},"attendance":35000,"referee":"Carlos Batres (GUA)"},
"2002|A|FRA|SEN":{"goals":[{"min":30,"side":"away","scorer":"帕帕·布巴·迪奥普 (Papa Bouba Diop)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":62561,"referee":"Ali Bujsaim (UAE)"},
"2002|A|FRA|URU":{"goals":[],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":3,"red":0}},"attendance":30000,"referee":"Felipe Ramos (MEX)"},
"2002|A|SEN|URU":{"goals":[{"min":20,"side":"home","scorer":"哈利卢·法迪加 (Khalilou Fadiga)","type":"penalty"},{"min":26,"side":"home","scorer":"帕帕·布巴·迪奥普 (Papa Bouba Diop)","type":"shot"},{"min":38,"side":"home","scorer":"帕帕·布巴·迪奥普 (Papa Bouba Diop)","type":"shot"},{"min":46,"side":"away","scorer":"理查德·莫拉莱斯 (Richard Morales)","type":"shot"},{"min":69,"side":"away","scorer":"迭戈·福兰 (Diego Forlán)","type":"shot"},{"min":88,"side":"away","scorer":"阿尔瓦罗·雷科巴 (Álvaro Recoba)","type":"penalty"}],"cards":{"home":{"yellow":5,"red":0},"away":{"yellow":3,"red":0}},"attendance":33681,"referee":"Jan Wegereef (NED)"},
"2002|A|URU|DEN":{"goals":[{"min":45,"side":"away","scorer":"容·达尔·托马森 (Jon Dahl Tomasson)","type":"shot"},{"min":47,"side":"home","scorer":"达里奥·罗德里格斯 (Darío Rodríguez)","type":"shot"},{"min":83,"side":"away","scorer":"容·达尔·托马森 (Jon Dahl Tomasson)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":30000,"referee":"Saad Mane (KUW)"},
"2002|B|ESP|PAR":{"goals":[{"min":10,"side":"away","scorer":"卡尔斯·普约尔 (Carles Puyol)","type":"own_goal"},{"min":53,"side":"home","scorer":"费尔南多·莫伦特斯 (Fernando Morientes)","type":"header"},{"min":69,"side":"home","scorer":"费尔南多·莫伦特斯 (Fernando Morientes)","type":"shot"},{"min":83,"side":"home","scorer":"费尔南多·耶罗 (Fernando Hierro)","type":"penalty"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":24000,"referee":"Gamal Al-Ghandour (EGY)"},
"2002|B|ESP|SVN":{"goals":[{"min":44,"side":"home","scorer":"劳尔·冈萨雷斯 (Raúl González)","type":"shot"},{"min":74,"side":"home","scorer":"胡安·巴莱龙 (Juan Valerón)","type":"shot"},{"min":82,"side":"away","scorer":"塞巴斯蒂安·齐米罗蒂奇 (Sebastjan Cimirotič)","type":"shot"},{"min":87,"side":"home","scorer":"费尔南多·耶罗 (Fernando Hierro)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":3,"red":0}},"attendance":28598,"referee":"Mohamed Guezzaz (MAR)"},
"2002|B|PAR|RSA":{"goals":[{"min":39,"side":"home","scorer":"罗克·圣克鲁斯 (Roque Santa Cruz)","type":"header"},{"min":55,"side":"home","scorer":"弗朗西斯科·阿尔塞 (Francisco Arce)","type":"free_kick"},{"min":63,"side":"away","scorer":"特博戈·莫科埃纳 (Teboho Mokoena)","type":"shot"},{"min":91,"side":"away","scorer":"昆顿·福琼 (Quinton Fortune)","type":"penalty"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":0}},"attendance":25186,"referee":"Ľuboš Micheľ (SVK)"},
"2002|B|RSA|ESP":{"goals":[{"min":4,"side":"away","scorer":"劳尔·冈萨雷斯 (Raúl González)","type":"shot"},{"min":31,"side":"home","scorer":"本尼迪克特·麦卡锡 (Benedict McCarthy)","type":"shot"},{"min":"45+1","side":"away","scorer":"盖斯卡·门迭塔 (Gaizka Mendieta)","type":"free_kick"},{"min":53,"side":"home","scorer":"卢卡斯·拉德贝 (Lucas Radebe)","type":"header"},{"min":56,"side":"away","scorer":"盖斯卡·门迭塔 (Gaizka Mendieta)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":31120,"referee":"Saad Mane (KUW)"},
"2002|B|RSA|SVN":{"goals":[{"min":4,"side":"home","scorer":"西亚邦加·诺姆韦特 (Siyabonga Nomvethe)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":47226,"referee":"Ángel Sánchez (ARG)"},
"2002|B|SVN|PAR":{"goals":[{"min":"45+1","side":"home","scorer":"米伦科·阿契莫维奇 (Milenko Ačimovič)","type":"shot"},{"min":65,"side":"away","scorer":"豪尔赫·坎波斯 (Jorge Campos)","type":"shot"},{"min":73,"side":"away","scorer":"豪尔赫·坎波斯 (Jorge Campos)","type":"shot"},{"min":84,"side":"away","scorer":"豪尔赫·坎波斯 (Jorge Campos)","type":"header"}],"cards":{"home":{"yellow":4,"red":1},"away":{"yellow":2,"red":1}},"attendance":30176,"referee":"Felipe Ramos (MEX)"},
"2002|C|BRA|CHN":{"goals":[{"min":15,"side":"home","scorer":"罗伯托·卡洛斯 (Roberto Carlos)","type":"free_kick"},{"min":32,"side":"home","scorer":"里瓦尔多 (Rivaldo)","type":"shot"},{"min":45,"side":"home","scorer":"罗纳尔迪尼奥 (Ronaldinho Gaúcho)","type":"penalty"},{"min":55,"side":"home","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":36750,"referee":"Anders Frisk (SWE)"},
"2002|C|BRA|TUR":{"goals":[{"min":47,"side":"away","scorer":"哈桑·沙什 (Hasan Şaş)","type":"shot"},{"min":50,"side":"home","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"},{"min":87,"side":"home","scorer":"里瓦尔多 (Rivaldo)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":2}},"attendance":38760,"referee":"Kim Young-joo (KOR)"},
"2002|C|CHN|CRC":{"goals":[{"min":17,"side":"away","scorer":"罗纳尔德·戈麦斯 (Rónald Gómez)","type":"shot"},{"min":65,"side":"away","scorer":"毛里西奥·赖特 (Mauricio Wright)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":27217,"referee":"Kyros Vassaras (GRE)"},
"2002|C|CRC|BRA":{"goals":[{"min":10,"side":"away","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"},{"min":13,"side":"away","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"},{"min":38,"side":"away","scorer":"埃德米尔森 (Edmílson)","type":"shot"},{"min":39,"side":"home","scorer":"保罗·万乔普 (Paulo Wanchope)","type":"shot"},{"min":56,"side":"home","scorer":"罗纳尔德·戈麦斯 (Rónald Gómez)","type":"header"},{"min":62,"side":"away","scorer":"里瓦尔多 (Rivaldo)","type":"shot"},{"min":64,"side":"away","scorer":"儒尼奥尔 (Júnior)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":38436,"referee":"Gamal Al-Ghandour (EGY)"},
"2002|C|CRC|TUR":{"goals":[{"min":56,"side":"away","scorer":"埃姆雷·贝洛佐格鲁 (Emre Belözoğlu)","type":"shot"},{"min":86,"side":"home","scorer":"温斯顿·帕克斯 (Winston Parks)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":1}},"attendance":29979,"referee":"Coffi Codjia (BEN)"},
"2002|C|TUR|CHN":{"goals":[{"min":6,"side":"home","scorer":"哈桑·沙什 (Hasan Şaş)","type":"shot"},{"min":9,"side":"home","scorer":"比伦特·科尔克马兹 (Bülent Korkmaz)","type":"header"},{"min":85,"side":"home","scorer":"于米特·达瓦拉 (Ümit Davala)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":1}},"attendance":43647,"referee":"Óscar Ruiz (COL)"},
"2002|D|KOR|POL":{"goals":[{"min":26,"side":"home","scorer":"黄善洪 (Hwang Sun-hong)","type":"shot"},{"min":53,"side":"home","scorer":"柳想铁 (Yoo Sang-chul)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":55872,"referee":"Óscar Ruiz (COL)"},
"2002|D|KOR|USA":{"goals":[{"min":24,"side":"away","scorer":"克林特·马西斯 (Clint Mathis)","type":"shot"},{"min":78,"side":"home","scorer":"安贞焕 (Ahn Jung-hwan)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":60778,"referee":"Urs Meier (SUI)"},
"2002|D|POL|USA":{"goals":[{"min":3,"side":"home","scorer":"埃马努埃尔·奥利萨德贝 (Emmanuel Olisadebe)","type":"shot"},{"min":5,"side":"home","scorer":"帕韦乌·克雷沙沃维奇 (Paweł Kryszałowicz)","type":"header"},{"min":66,"side":"home","scorer":"马尔钦·热夫瓦科夫 (Marcin Żewłakow)","type":"shot"},{"min":83,"side":"away","scorer":"兰登·多诺万 (Landon Donovan)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":26137,"referee":"Lu Jun (CHN)"},
"2002|D|POR|KOR":{"goals":[{"min":70,"side":"away","scorer":"朴智星 (Park Ji-sung)","type":"shot"}],"cards":{"home":{"yellow":2,"red":2},"away":{"yellow":2,"red":0}},"attendance":50239,"referee":"Ángel Sánchez (ARG)"},
"2002|D|POR|POL":{"goals":[{"min":14,"side":"home","scorer":"保莱塔 (Pauleta)","type":"shot"},{"min":65,"side":"home","scorer":"保莱塔 (Pauleta)","type":"shot"},{"min":77,"side":"home","scorer":"保莱塔 (Pauleta)","type":"shot"},{"min":88,"side":"home","scorer":"鲁伊·科斯塔 (Rui Costa)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":31000,"referee":"Hugh Dallas (SCO)"},
"2002|D|USA|POR":{"goals":[{"min":4,"side":"home","scorer":"约翰·奥布赖恩 (John O'Brien)","type":"shot"},{"min":29,"side":"home","scorer":"若热·科斯塔 (Jorge Costa)","type":"own_goal"},{"min":36,"side":"home","scorer":"布赖恩·麦克布莱德 (Brian McBride)","type":"header"},{"min":39,"side":"away","scorer":"贝托 (Beto)","type":"shot"},{"min":71,"side":"away","scorer":"杰夫·阿古斯 (Jeff Agoos)","type":"own_goal"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":37842,"referee":"Byron Moreno (ECU)"},
"2002|E|CMR|GER":{"goals":[{"min":50,"side":"away","scorer":"马尔科·博德 (Marco Bode)","type":"shot"},{"min":79,"side":"away","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"}],"cards":{"home":{"yellow":5,"red":1},"away":{"yellow":4,"red":1}},"attendance":47085,"referee":"Antonio López Nieto (ESP)"},
"2002|E|CMR|KSA":{"goals":[{"min":66,"side":"home","scorer":"萨穆埃尔·埃托奥 (Samuel Eto'o)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":43222,"referee":"Terje Hauge (NOR)"},
"2002|E|GER|IRL":{"goals":[{"min":19,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"},{"min":92,"side":"away","scorer":"罗比·基恩 (Robbie Keane)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":35854,"referee":"Kim Milton Nielsen (DEN)"},
"2002|E|GER|KSA":{"goals":[{"min":20,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"},{"min":25,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"},{"min":40,"side":"home","scorer":"米夏埃尔·巴拉克 (Michael Ballack)","type":"header"},{"min":"45+1","side":"home","scorer":"卡斯滕·扬克尔 (Carsten Jancker)","type":"shot"},{"min":70,"side":"home","scorer":"米罗斯拉夫·克洛泽 (Miroslav Klose)","type":"header"},{"min":73,"side":"home","scorer":"托马斯·林克 (Thomas Linke)","type":"shot"},{"min":84,"side":"home","scorer":"奥利弗·比埃尔霍夫 (Oliver Bierhoff)","type":"shot"},{"min":91,"side":"home","scorer":"贝恩德·施奈德 (Bernd Schneider)","type":"free_kick"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":32000,"referee":"Ubaldo Aquino (PAR)"},
"2002|E|IRL|CMR":{"goals":[{"min":39,"side":"away","scorer":"帕特里克·姆博马 (Patrick Mboma)","type":"shot"},{"min":52,"side":"home","scorer":"马特·霍兰德 (Matt Holland)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":1,"red":0}},"attendance":33679,"referee":"Toru Kamikawa (JPN)"},
"2002|E|KSA|IRL":{"goals":[{"min":7,"side":"away","scorer":"罗比·基恩 (Robbie Keane)","type":"shot"},{"min":61,"side":"away","scorer":"加里·布林 (Gary Breen)","type":"shot"},{"min":87,"side":"away","scorer":"达米恩·达夫 (Damien Duff)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":65800,"referee":"Falla N'Doye (SEN)"},
"2002|FINAL|GER|BRA":{"goals":[{"min":67,"side":"away","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"},{"min":79,"side":"away","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":69029,"referee":"Pierluigi Collina (ITA)"},
"2002|F|ARG|ENG":{"goals":[{"min":44,"side":"away","scorer":"大卫·贝克汉姆 (David Beckham)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":35775,"referee":"Pierluigi Collina (ITA)"},
"2002|F|ARG|NGA":{"goals":[{"min":63,"side":"home","scorer":"加布里埃尔·巴蒂斯图塔 (Gabriel Batistuta)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":34050,"referee":"Gilles Veissière (FRA)"},
"2002|F|ENG|SWE":{"goals":[{"min":24,"side":"home","scorer":"索尔·坎贝尔 (Sol Campbell)","type":"header"},{"min":59,"side":"away","scorer":"尼克拉斯·亚历山德松 (Niclas Alexandersson)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":52633,"referee":"Carlos Simon (BRA)"},
"2002|F|NGA|ENG":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":44967,"referee":"Brian Hall (USA)"},
"2002|F|SWE|ARG":{"goals":[{"min":59,"side":"home","scorer":"安德烈亚斯·斯文松 (Andreas Svensson)","type":"free_kick"},{"min":88,"side":"away","scorer":"埃尔南·克雷斯波 (Hernán Crespo)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":45795,"referee":"Ali Bujsaim (UAE)"},
"2002|F|SWE|NGA":{"goals":[{"min":27,"side":"away","scorer":"朱利叶斯·阿加霍瓦 (Julius Aghahowa)","type":"header"},{"min":35,"side":"home","scorer":"亨里克·拉尔森 (Henrik Larsson)","type":"shot"},{"min":63,"side":"home","scorer":"亨里克·拉尔森 (Henrik Larsson)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":36383,"referee":"René Ortubé (BOL)"},
"2002|G|CRO|MEX":{"goals":[{"min":60,"side":"away","scorer":"夸特莫克·布兰科 (Cuauhtémoc Blanco)","type":"penalty"}],"cards":{"home":{"yellow":2,"red":1},"away":{"yellow":1,"red":0}},"attendance":30892,"referee":"Lu Jun (CHN)"},
"2002|G|ECU|CRO":{"goals":[{"min":48,"side":"home","scorer":"埃迪松·门德斯 (Édison Méndez)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":65862,"referee":"William Mattus (CRC)"},
"2002|G|ITA|CRO":{"goals":[{"min":55,"side":"home","scorer":"克里斯蒂安·维耶里 (Christian Vieri)","type":"header"},{"min":73,"side":"away","scorer":"伊维察·奥利奇 (Ivica Olić)","type":"shot"},{"min":76,"side":"away","scorer":"米兰·拉帕伊奇 (Milan Rapaić)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":36642,"referee":"Graham Poll (ENG)"},
"2002|G|ITA|ECU":{"goals":[{"min":7,"side":"home","scorer":"克里斯蒂安·维耶里 (Christian Vieri)","type":"shot"},{"min":27,"side":"home","scorer":"克里斯蒂安·维耶里 (Christian Vieri)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":31081,"referee":"Brian Hall (USA)"},
"2002|G|MEX|ECU":{"goals":[{"min":5,"side":"away","scorer":"阿古斯丁·德尔加多 (Agustín Delgado)","type":"shot"},{"min":28,"side":"home","scorer":"哈雷德·博尔格蒂 (Jared Borgetti)","type":"shot"},{"min":57,"side":"home","scorer":"赫拉尔多·托拉多 (Gerardo Torrado)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":45619,"referee":"Mourad Daami (TUN)"},
"2002|G|MEX|ITA":{"goals":[{"min":34,"side":"home","scorer":"哈雷德·博尔格蒂 (Jared Borgetti)","type":"header"},{"min":85,"side":"away","scorer":"亚历山德罗·德尔皮耶罗 (Alessandro Del Piero)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":38770,"referee":"Carlos Simon (BRA)"},
"2002|H|BEL|RUS":{"goals":[{"min":7,"side":"home","scorer":"约翰·瓦勒姆 (Johan Walem)","type":"free_kick"},{"min":52,"side":"away","scorer":"弗拉基米尔·别斯查斯特内赫 (Vladimir Beschastnykh)","type":"shot"},{"min":78,"side":"home","scorer":"韦斯利·松克 (Wesley Sonck)","type":"header"},{"min":82,"side":"home","scorer":"马克·威尔莫茨 (Marc Wilmots)","type":"shot"},{"min":88,"side":"away","scorer":"德米特里·瑟乔夫 (Dmitri Sychev)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":46654,"referee":"Kim Milton Nielsen (DEN)"},
"2002|H|JPN|BEL":{"goals":[{"min":57,"side":"away","scorer":"马克·威尔莫茨 (Marc Wilmots)","type":"shot"},{"min":59,"side":"home","scorer":"铃木隆行 (Suzuki Takayuki)","type":"shot"},{"min":67,"side":"home","scorer":"稻本润一 (Inamoto Junichi)","type":"shot"},{"min":75,"side":"away","scorer":"彼得·范德海登 (Peter Van der Heyden)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":55256,"referee":"William Mattus (CRC)"},
"2002|H|JPN|RUS":{"goals":[{"min":51,"side":"home","scorer":"稻本润一 (Inamoto Junichi)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":66810,"referee":"Markus Merk (GER)"},
"2002|H|RUS|TUN":{"goals":[{"min":59,"side":"home","scorer":"叶戈尔·季托夫 (Yegor Titov)","type":"shot"},{"min":64,"side":"home","scorer":"瓦列里·卡尔平 (Valeri Karpin)","type":"penalty"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":30957,"referee":"Peter Prendergast (JAM)"},
"2002|H|TUN|BEL":{"goals":[{"min":13,"side":"away","scorer":"马克·威尔莫茨 (Marc Wilmots)","type":"shot"},{"min":17,"side":"home","scorer":"拉乌夫·布扎伊内 (Raouf Bouzaiene)","type":"free_kick"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":39700,"referee":"Mark Shield (AUS)"},
"2002|H|TUN|JPN":{"goals":[{"min":48,"side":"away","scorer":"森岛宽晃 (Morishima Hiroaki)","type":"shot"},{"min":75,"side":"away","scorer":"中田英寿 (Nakata Hidetoshi)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":45213,"referee":"Gilles Veissière (FRA)"},
"2002|QF|ENG|BRA":{"goals":[{"min":23,"side":"home","scorer":"迈克尔·欧文 (Michael Owen)","type":"shot"},{"min":"45+2","side":"away","scorer":"里瓦尔多 (Rivaldo)","type":"shot"},{"min":50,"side":"away","scorer":"罗纳尔迪尼奥 (Ronaldinho Gaúcho)","type":"free_kick"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":1}},"attendance":47436,"referee":"Felipe Ramos (MEX)"},
"2002|QF|GER|USA":{"goals":[{"min":39,"side":"home","scorer":"米夏埃尔·巴拉克 (Michael Ballack)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":37337,"referee":"Hugh Dallas (SCO)"},
"2002|QF|KOR|ESP":{"goals":[],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":42114,"referee":"Gamal Al-Ghandour (EGY)"},
"2002|QF|TUR|SEN":{"goals":[{"min":94,"side":"home","scorer":"伊尔汗·曼瑟兹 (İlhan Mansız)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":44233,"referee":"Óscar Ruiz (COL)"},
"2002|R16|BRA|BEL":{"goals":[{"min":67,"side":"home","scorer":"里瓦尔多 (Rivaldo)","type":"shot"},{"min":87,"side":"home","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":40540,"referee":"Peter Prendergast (JAM)"},
"2002|R16|DEN|ENG":{"goals":[{"min":5,"side":"away","scorer":"里奥·费迪南德 (Rio Ferdinand)","type":"header"},{"min":22,"side":"away","scorer":"迈克尔·欧文 (Michael Owen)","type":"shot"},{"min":44,"side":"away","scorer":"埃米尔·赫斯基 (Emile Heskey)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":40582,"referee":"Markus Merk (GER)"},
"2002|R16|ESP|IRL":{"goals":[{"min":8,"side":"home","scorer":"费尔南多·莫伦特斯 (Fernando Morientes)","type":"header"},{"min":90,"side":"away","scorer":"罗比·基恩 (Robbie Keane)","type":"penalty"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":3,"red":0}},"attendance":38926,"referee":"Anders Frisk (SWE)"},
"2002|R16|GER|PAR":{"goals":[{"min":88,"side":"home","scorer":"奥利弗·诺伊维尔 (Oliver Neuville)","type":"shot"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":1}},"attendance":25176,"referee":"Carlos Batres (GUA)"},
"2002|R16|JPN|TUR":{"goals":[{"min":12,"side":"away","scorer":"于米特·达瓦拉 (Ümit Davala)","type":"header"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":3,"red":0}},"attendance":45666,"referee":"Pierluigi Collina (ITA)"},
"2002|R16|KOR|ITA":{"goals":[{"min":18,"side":"away","scorer":"克里斯蒂安·维耶里 (Christian Vieri)","type":"header"},{"min":88,"side":"home","scorer":"薛琦铉 (Seol Ki-hyeon)","type":"shot"},{"min":117,"side":"home","scorer":"安贞焕 (Ahn Jung-hwan)","type":"header"}],"cards":{"home":{"yellow":3,"red":0},"away":{"yellow":2,"red":1}},"attendance":38588,"referee":"Byron Moreno (ECU)"},
"2002|R16|MEX|USA":{"goals":[{"min":8,"side":"away","scorer":"布赖恩·麦克布莱德 (Brian McBride)","type":"shot"},{"min":65,"side":"away","scorer":"兰登·多诺万 (Landon Donovan)","type":"header"}],"cards":{"home":{"yellow":5,"red":1},"away":{"yellow":3,"red":0}},"attendance":36380,"referee":"Vítor Melo Pereira (POR)"},
"2002|R16|SWE|SEN":{"goals":[{"min":11,"side":"home","scorer":"亨里克·拉尔森 (Henrik Larsson)","type":"header"},{"min":37,"side":"away","scorer":"亨利·卡马拉 (Henri Camara)","type":"shot"},{"min":104,"side":"away","scorer":"亨利·卡马拉 (Henri Camara)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":1,"red":0}},"attendance":39747,"referee":"Ubaldo Aquino (PAR)"},
"2002|SF|BRA|TUR":{"goals":[{"min":49,"side":"home","scorer":"罗纳尔多·纳扎里奥 (Ronaldo Nazário)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":2,"red":0}},"attendance":61058,"referee":"Kim Milton Nielsen (DEN)"},
"2002|SF|GER|KOR":{"goals":[{"min":75,"side":"home","scorer":"米夏埃尔·巴拉克 (Michael Ballack)","type":"shot"}],"cards":{"home":{"yellow":2,"red":0},"away":{"yellow":1,"red":0}},"attendance":65256,"referee":"Urs Meier (SUI)"},
"2002|TP|KOR|TUR":{"goals":[{"min":1,"side":"away","scorer":"哈坎·许屈尔 (Hakan Şükür)","type":"shot"},{"min":9,"side":"home","scorer":"李乙容 (Lee Eul-yong)","type":"free_kick"},{"min":13,"side":"away","scorer":"伊尔汗·曼瑟兹 (İlhan Mansız)","type":"shot"},{"min":32,"side":"away","scorer":"伊尔汗·曼瑟兹 (İlhan Mansız)","type":"shot"},{"min":93,"side":"home","scorer":"宋钟国 (Song Chong-gug)","type":"shot"}],"cards":{"home":{"yellow":1,"red":0},"away":{"yellow":2,"red":0}},"attendance":63483,"referee":"Saad Mane (KUW)"}};


// ========== 比赛详细统计数据 (V24) ==========
var matchStats = {};
matchStats["2022|FINAL|ARG|FRA"] = {p1:"54%",p2:"46%",ps1:508,ps2:436,sh1:20,sh2:15,so1:10,so2:7,co1:6,co2:5,fo1:19,fo2:7,os1:4,os2:4,yc1:4,yc2:3,rc1:0,rc2:0,tk1:16,tk2:22};
matchStats["2022|SF|ARG|CRO"] = {p1:"39%",p2:"61%",ps1:374,ps2:589,sh1:9,sh2:12,so1:7,so2:2,co1:2,co2:4,fo1:13,fo2:14,os1:1,os2:4,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:10};
matchStats["2022|SF|FRA|MAR"] = {p1:"47%",p2:"53%",ps1:427,ps2:480,sh1:14,sh2:13,so1:6,so2:2,co1:4,co2:3,fo1:6,fo2:19,os1:4,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:22,tk2:15};
matchStats["2022|QF|NED|ARG"] = {p1:"42%",p2:"58%",ps1:407,ps2:537,sh1:13,sh2:16,so1:4,so2:8,co1:2,co2:8,fo1:18,fo2:17,os1:1,os2:2,yc1:5,yc2:8,rc1:0,rc2:1,tk1:19,tk2:22};
matchStats["2022|QF|ENG|FRA"] = {p1:"61%",p2:"39%",ps1:606,ps2:386,sh1:16,sh2:8,so1:8,so2:5,co1:5,co2:2,fo1:9,fo2:14,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:12,tk2:14};
matchStats["2022|QF|CRO|BRA"] = {p1:"41%",p2:"59%",ps1:442,ps2:628,sh1:10,sh2:15,so1:1,so2:6,co1:3,co2:7,fo1:22,fo2:15,os1:2,os2:4,yc1:2,yc2:3,rc1:0,rc2:0,tk1:28,tk2:19};
matchStats["2022|R16|ENG|SEN"] = {p1:"57%",p2:"43%",ps1:575,ps2:418,sh1:8,sh2:10,so1:4,so2:3,co1:6,co2:3,fo1:13,fo2:17,os1:3,os2:4,yc1:0,yc2:1,rc1:0,rc2:0,tk1:15,tk2:16};
matchStats["2022|R16|BRA|KOR"] = {p1:"47%",p2:"53%",ps1:488,ps2:538,sh1:14,sh2:6,so1:8,so2:2,co1:8,co2:2,fo1:14,fo2:15,os1:1,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:13,tk2:21};
matchStats["2022|R16|POR|SUI"] = {p1:"52%",p2:"48%",ps1:527,ps2:475,sh1:15,sh2:10,so1:9,so2:3,co1:7,co2:5,fo1:10,fo2:9,os1:5,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:12,tk2:18};
matchStats["2018|FINAL|FRA|CRO"] = {p1:"39%",p2:"61%",ps1:373,ps2:568,sh1:8,sh2:15,so1:6,so2:4,co1:2,co2:6,fo1:14,fo2:13,os1:1,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:17,tk2:15};
matchStats["2014|FINAL|GER|ARG"] = {p1:"60%",p2:"40%",ps1:721,ps2:486,sh1:10,sh2:10,so1:7,so2:2,co1:4,co2:4,fo1:16,fo2:20,os1:5,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:11,tk2:29};
matchStats["2014|SF|BRA|GER"] = {p1:"48%",p2:"52%",ps1:518,ps2:552,sh1:18,sh2:14,so1:8,so2:12,co1:7,co2:5,fo1:13,fo2:11,os1:0,os2:4,yc1:1,yc2:0,rc1:0,rc2:0,tk1:18,tk2:13};
matchStats["2010|FINAL|NED|ESP"] = {p1:"43%",p2:"57%",ps1:473,ps2:658,sh1:13,sh2:18,so1:5,so2:4,co1:6,co2:8,fo1:28,fo2:16,os1:3,os2:6,yc1:8,yc2:5,rc1:1,rc2:0,tk1:28,tk2:19};
matchStats["2006|FINAL|ITA|FRA"] = {p1:"50%",p2:"50%",ps1:428,ps2:424,sh1:10,sh2:13,so1:3,so2:6,co1:7,co2:5,fo1:17,fo2:24,os1:4,os2:2,yc1:1,yc2:3,rc1:0,rc2:1,tk1:24,tk2:20};
matchStats["2002|FINAL|GER|BRA"] = {p1:"57%",p2:"43%",ps1:528,ps2:398,sh1:12,sh2:9,so1:4,so2:7,co1:13,co2:3,fo1:21,fo2:19,os1:6,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:19,tk2:21};
matchStats["2022|A|QAT|ECU"] = {p1:"47%",p2:"53%",ps1:421,ps2:482,sh1:5,sh2:6,so1:0,so2:3,co1:1,co2:3,fo1:15,fo2:13,os1:3,os2:2,yc1:4,yc2:2,rc1:0,rc2:0,tk1:12,tk2:14};
matchStats["2022|A|SEN|NED"] = {p1:"44%",p2:"56%",ps1:415,ps2:535,sh1:6,sh2:10,so1:1,so2:3,co1:2,co2:7,fo1:16,fo2:9,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:11};
matchStats["2022|B|ENG|IRN"] = {p1:"69%",p2:"31%",ps1:659,ps2:298,sh1:15,sh2:5,so1:8,so2:1,co1:8,co2:1,fo1:10,fo2:14,os1:1,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:8,tk2:16};
matchStats["2022|B|USA|WAL"] = {p1:"56%",p2:"44%",ps1:568,ps2:430,sh1:10,sh2:7,so1:2,so2:2,co1:5,co2:3,fo1:16,fo2:14,os1:2,os2:1,yc1:4,yc2:2,rc1:0,rc2:0,tk1:15,tk2:17};
matchStats["2022|C|ARG|KSA"] = {p1:"61%",p2:"39%",ps1:618,ps2:386,sh1:13,sh2:8,so1:6,so2:2,co1:5,co2:2,fo1:12,fo2:17,os1:1,os2:2,yc1:1,yc2:6,rc1:0,rc2:0,tk1:10,tk2:15};
matchStats["2022|C|ARG|MEX"] = {p1:"55%",p2:"45%",ps1:531,ps2:447,sh1:10,sh2:8,so1:4,so2:2,co1:4,co2:3,fo1:14,fo2:16,os1:2,os2:2,yc1:1,yc2:4,rc1:0,rc2:0,tk1:12,tk2:18};
matchStats["2022|D|FRA|AUS"] = {p1:"67%",p2:"33%",ps1:646,ps2:324,sh1:17,sh2:6,so1:8,so2:2,co1:8,co2:2,fo1:10,fo2:15,os1:2,os2:1,yc1:0,yc2:2,rc1:0,rc2:0,tk1:9,tk2:17};
matchStats["2022|D|FRA|DEN"] = {p1:"58%",p2:"42%",ps1:563,ps2:408,sh1:14,sh2:9,so1:7,so2:3,co1:7,co2:3,fo1:11,fo2:14,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:16};
matchStats["2022|E|GER|JPN"] = {p1:"62%",p2:"38%",ps1:618,ps2:372,sh1:13,sh2:7,so1:5,so2:3,co1:6,co2:2,fo1:12,fo2:11,os1:3,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:13,tk2:19};
matchStats["2022|E|ESP|GER"] = {p1:"58%",p2:"42%",ps1:586,ps2:410,sh1:10,sh2:11,so1:4,so2:4,co1:6,co2:2,fo1:14,fo2:11,os1:2,os2:3,yc1:1,yc2:3,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2022|E|JPN|ESP"] = {p1:"40%",p2:"60%",ps1:402,ps2:598,sh1:8,sh2:12,so1:3,so2:5,co1:2,co2:6,fo1:15,fo2:9,os1:2,os2:2,yc1:3,yc2:1,rc1:0,rc2:0,tk1:17,tk2:10};
matchStats["2022|F|BEL|CAN"] = {p1:"49%",p2:"51%",ps1:478,ps2:502,sh1:7,sh2:19,so1:3,so2:7,co1:3,co2:6,fo1:14,fo2:10,os1:1,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:13,tk2:11};
matchStats["2022|F|CRO|BEL"] = {p1:"47%",p2:"53%",ps1:452,ps2:510,sh1:8,sh2:13,so1:3,so2:4,co1:3,co2:5,fo1:14,fo2:12,os1:2,os2:1,yc1:3,yc2:2,rc1:0,rc2:0,tk1:14,tk2:12};
matchStats["2022|G|BRA|SRB"] = {p1:"52%",p2:"48%",ps1:527,ps2:468,sh1:18,sh2:5,so1:8,so2:1,co1:7,co2:2,fo1:13,fo2:15,os1:1,os2:2,yc1:1,yc2:3,rc1:0,rc2:0,tk1:15,tk2:19};
matchStats["2022|G|CMR|SRB"] = {p1:"47%",p2:"53%",ps1:460,ps2:510,sh1:10,sh2:12,so1:6,so2:5,co1:4,co2:5,fo1:14,fo2:15,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2022|H|POR|GHA"] = {p1:"59%",p2:"41%",ps1:578,ps2:398,sh1:14,sh2:8,so1:6,so2:3,co1:8,co2:2,fo1:12,fo2:16,os1:2,os2:1,yc1:2,yc2:3,rc1:0,rc2:0,tk1:11,tk2:16};
matchStats["2022|H|KOR|POR"] = {p1:"38%",p2:"62%",ps1:367,ps2:612,sh1:10,sh2:12,so1:5,so2:3,co1:4,co2:6,fo1:15,fo2:8,os1:2,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:16,tk2:11};
matchStats["2022|R16|NED|USA"] = {p1:"53%",p2:"47%",ps1:512,ps2:462,sh1:11,sh2:13,so1:5,so2:5,co1:3,co2:4,fo1:10,fo2:15,os1:2,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2022|R16|ARG|AUS"] = {p1:"58%",p2:"42%",ps1:578,ps2:412,sh1:13,sh2:5,so1:7,so2:2,co1:8,co2:2,fo1:11,fo2:15,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:10,tk2:17};
matchStats["2022|R16|FRA|POL"] = {p1:"63%",p2:"37%",ps1:632,ps2:368,sh1:16,sh2:7,so1:8,so2:3,co1:9,co2:2,fo1:8,fo2:15,os1:3,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:11,tk2:16};
matchStats["2022|R16|JPN|CRO"] = {p1:"54%",p2:"46%",ps1:538,ps2:462,sh1:10,sh2:12,so1:3,so2:3,co1:5,co2:6,fo1:12,fo2:16,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:13,tk2:19};
matchStats["2022|QF|MAR|POR"] = {p1:"37%",p2:"63%",ps1:365,ps2:624,sh1:6,sh2:14,so1:2,so2:6,co1:2,co2:8,fo1:15,fo2:10,os1:1,os2:3,yc1:3,yc2:1,rc1:1,rc2:0,tk1:18,tk2:11};
matchStats["2022|TP|CRO|MAR"] = {p1:"48%",p2:"52%",ps1:472,ps2:508,sh1:9,sh2:11,so1:3,so2:4,co1:4,co2:5,fo1:14,fo2:12,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:15,tk2:14};
matchStats["2018|A|RUS|KSA"] = {p1:"60%",p2:"40%",ps1:578,ps2:392,sh1:17,sh2:4,so1:10,so2:1,co1:8,co2:1,fo1:8,fo2:13,os1:2,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:8,tk2:19};
matchStats["2018|B|POR|ESP"] = {p1:"43%",p2:"57%",ps1:428,ps2:572,sh1:8,sh2:13,so1:5,so2:7,co1:4,co2:6,fo1:13,fo2:11,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:12,tk2:10};
matchStats["2018|C|FRA|AUS"] = {p1:"61%",p2:"39%",ps1:598,ps2:382,sh1:15,sh2:6,so1:6,so2:3,co1:8,co2:2,fo1:11,fo2:17,os1:2,os2:1,yc1:1,yc2:3,rc1:0,rc2:0,tk1:10,tk2:16};
matchStats["2018|D|ARG|ISL"] = {p1:"65%",p2:"35%",ps1:642,ps2:348,sh1:19,sh2:6,so1:8,so2:2,co1:9,co2:2,fo1:12,fo2:15,os1:2,os2:1,yc1:0,yc2:3,rc1:0,rc2:0,tk1:9,tk2:17};
matchStats["2018|D|ARG|CRO"] = {p1:"55%",p2:"45%",ps1:546,ps2:438,sh1:11,sh2:13,so1:4,so2:7,co1:5,co2:6,fo1:17,fo2:15,os1:2,os2:1,yc1:3,yc2:4,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2018|D|NGA|ARG"] = {p1:"49%",p2:"51%",ps1:478,ps2:506,sh1:10,sh2:14,so1:5,so2:6,co1:4,co2:7,fo1:15,fo2:12,os1:2,os2:3,yc1:2,yc2:3,rc1:0,rc2:0,tk1:17,tk2:11};
matchStats["2018|E|BRA|SUI"] = {p1:"55%",p2:"45%",ps1:542,ps2:438,sh1:14,sh2:8,so1:6,so2:2,co1:7,co2:3,fo1:14,fo2:16,os1:2,os2:2,yc1:1,yc2:3,rc1:0,rc2:0,tk1:10,tk2:18};
matchStats["2018|F|GER|MEX"] = {p1:"66%",p2:"34%",ps1:658,ps2:342,sh1:15,sh2:7,so1:6,so2:3,co1:9,co2:2,fo1:11,fo2:14,os1:3,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2018|F|GER|SWE"] = {p1:"61%",p2:"39%",ps1:602,ps2:388,sh1:18,sh2:6,so1:8,so2:3,co1:8,co2:2,fo1:10,fo2:13,os1:2,os2:1,yc1:2,yc2:1,rc1:1,rc2:0,tk1:15,tk2:16};
matchStats["2018|F|KOR|GER"] = {p1:"37%",p2:"63%",ps1:358,ps2:632,sh1:6,sh2:16,so1:3,so2:6,co1:2,co2:9,fo1:17,fo2:9,os1:2,os2:3,yc1:4,yc2:0,rc1:0,rc2:0,tk1:20,tk2:12};
matchStats["2018|G|BEL|TUN"] = {p1:"61%",p2:"39%",ps1:598,ps2:382,sh1:18,sh2:7,so1:9,so2:3,co1:9,co2:2,fo1:8,fo2:15,os1:2,os2:1,yc1:0,yc2:3,rc1:0,rc2:0,tk1:8,tk2:17};
matchStats["2018|G|ENG|PAN"] = {p1:"73%",p2:"27%",ps1:728,ps2:272,sh1:20,sh2:3,so1:12,so2:1,co1:10,co2:1,fo1:6,fo2:14,os1:2,os2:1,yc1:1,yc2:3,rc1:0,rc2:0,tk1:6,tk2:19};
matchStats["2018|G|ENG|BEL"] = {p1:"52%",p2:"48%",ps1:514,ps2:478,sh1:12,sh2:10,so1:3,so2:4,co1:5,co2:4,fo1:13,fo2:12,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:15};
matchStats["2018|H|COL|JPN"] = {p1:"48%",p2:"52%",ps1:482,ps2:518,sh1:10,sh2:12,so1:4,so2:6,co1:5,co2:7,fo1:16,fo2:12,os1:2,os2:3,yc1:2,yc2:1,rc1:1,rc2:0,tk1:15,tk2:13};
matchStats["2018|H|JPN|SEN"] = {p1:"46%",p2:"54%",ps1:452,ps2:538,sh1:9,sh2:14,so1:4,so2:5,co1:3,co2:6,fo1:13,fo2:15,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2018|R16|FRA|ARG"] = {p1:"43%",p2:"57%",ps1:432,ps2:568,sh1:10,sh2:12,so1:6,so2:5,co1:3,co2:4,fo1:12,fo2:15,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:13,tk2:11};
matchStats["2018|R16|URU|POR"] = {p1:"45%",p2:"55%",ps1:448,ps2:552,sh1:8,sh2:13,so1:4,so2:5,co1:3,co2:6,fo1:14,fo2:12,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:12};
matchStats["2018|R16|ESP|RUS"] = {p1:"63%",p2:"37%",ps1:628,ps2:372,sh1:17,sh2:5,so1:7,so2:2,co1:9,co2:1,fo1:10,fo2:16,os1:3,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:9,tk2:18};
matchStats["2018|R16|CRO|DEN"] = {p1:"53%",p2:"47%",ps1:526,ps2:478,sh1:11,sh2:9,so1:3,so2:3,co1:5,co2:4,fo1:15,fo2:13,os1:2,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:15,tk2:14};
matchStats["2018|R16|BRA|MEX"] = {p1:"53%",p2:"47%",ps1:528,ps2:472,sh1:11,sh2:8,so1:7,so2:2,co1:5,co2:3,fo1:13,fo2:17,os1:2,os2:1,yc1:1,yc2:3,rc1:0,rc2:0,tk1:12,tk2:16};
matchStats["2018|R16|BEL|JPN"] = {p1:"56%",p2:"44%",ps1:548,ps2:432,sh1:16,sh2:9,so1:8,so2:5,co1:7,co2:5,fo1:12,fo2:16,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:13};
matchStats["2018|QF|URU|FRA"] = {p1:"41%",p2:"59%",ps1:398,ps2:582,sh1:7,sh2:14,so1:3,so2:7,co1:2,co2:8,fo1:16,fo2:10,os1:1,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:9};
matchStats["2018|QF|BRA|BEL"] = {p1:"55%",p2:"45%",ps1:548,ps2:448,sh1:18,sh2:8,so1:8,so2:4,co1:8,co2:2,fo1:14,fo2:12,os1:1,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:8};
matchStats["2018|SF|FRA|BEL"] = {p1:"44%",p2:"56%",ps1:432,ps2:552,sh1:7,sh2:12,so1:4,so2:2,co1:4,co2:6,fo1:14,fo2:13,os1:2,os2:1,yc1:3,yc2:2,rc1:0,rc2:0,tk1:16,tk2:13};
matchStats["2018|SF|CRO|ENG"] = {p1:"44%",p2:"56%",ps1:428,ps2:562,sh1:10,sh2:14,so1:3,so2:5,co1:3,co2:7,fo1:15,fo2:12,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2018|TP|BEL|ENG"] = {p1:"46%",p2:"54%",ps1:452,ps2:538,sh1:8,sh2:11,so1:4,so2:3,co1:3,co2:5,fo1:15,fo2:11,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:12};
matchStats["2014|A|BRA|CRO"] = {p1:"55%",p2:"45%",ps1:542,ps2:438,sh1:14,sh2:8,so1:8,so2:2,co1:7,co2:2,fo1:14,fo2:16,os1:2,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:13,tk2:17};
matchStats["2014|B|ESP|NED"] = {p1:"57%",p2:"43%",ps1:568,ps2:432,sh1:10,sh2:14,so1:4,so2:8,co1:5,co2:6,fo1:12,fo2:14,os1:3,os2:2,yc1:3,yc2:3,rc1:0,rc2:0,tk1:14,tk2:13};
matchStats["2014|B|AUS|NED"] = {p1:"48%",p2:"52%",ps1:480,ps2:520,sh1:9,sh2:14,so1:4,so2:7,co1:3,co2:6,fo1:16,fo2:10,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:12};
matchStats["2014|D|URU|ENG"] = {p1:"44%",p2:"56%",ps1:438,ps2:562,sh1:9,sh2:11,so1:5,so2:4,co1:4,co2:5,fo1:16,fo2:12,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:12};
matchStats["2014|D|ITA|URU"] = {p1:"50%",p2:"50%",ps1:498,ps2:502,sh1:10,sh2:9,so1:3,so2:3,co1:5,co2:3,fo1:15,fo2:16,os1:3,os2:2,yc1:3,yc2:2,rc1:1,rc2:0,tk1:16,tk2:14};
matchStats["2014|G|GER|POR"] = {p1:"52%",p2:"48%",ps1:518,ps2:482,sh1:16,sh2:9,so1:9,so2:3,co1:8,co2:3,fo1:12,fo2:14,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:1,tk1:14,tk2:16};
matchStats["2014|G|GER|GHA"] = {p1:"57%",p2:"43%",ps1:572,ps2:428,sh1:13,sh2:11,so1:6,so2:5,co1:7,co2:4,fo1:14,fo2:15,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2014|R16|BRA|CHI"] = {p1:"54%",p2:"46%",ps1:542,ps2:462,sh1:15,sh2:10,so1:7,so2:4,co1:8,co2:5,fo1:16,fo2:17,os1:2,os2:3,yc1:3,yc2:3,rc1:0,rc2:0,tk1:15,tk2:14};
matchStats["2014|R16|NED|MEX"] = {p1:"58%",p2:"42%",ps1:582,ps2:418,sh1:16,sh2:7,so1:9,so2:3,co1:8,co2:2,fo1:11,fo2:16,os1:2,os2:1,yc1:1,yc2:3,rc1:0,rc2:0,tk1:13,tk2:17};
matchStats["2014|QF|FRA|GER"] = {p1:"49%",p2:"51%",ps1:492,ps2:508,sh1:11,sh2:12,so1:4,so2:6,co1:5,co2:7,fo1:14,fo2:13,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:15,tk2:16};
matchStats["2014|QF|BRA|COL"] = {p1:"46%",p2:"54%",ps1:462,ps2:538,sh1:10,sh2:14,so1:6,so2:6,co1:6,co2:7,fo1:16,fo2:17,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:12};
matchStats["2014|SF|NED|ARG"] = {p1:"47%",p2:"53%",ps1:468,ps2:532,sh1:8,sh2:10,so1:3,so2:5,co1:4,co2:5,fo1:14,fo2:12,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2014|TP|BRA|NED"] = {p1:"52%",p2:"48%",ps1:520,ps2:480,sh1:11,sh2:8,so1:4,so2:5,co1:5,co2:3,fo1:15,fo2:12,os1:2,os2:1,yc1:3,yc2:2,rc1:0,rc2:0,tk1:15,tk2:14};
matchStats["2010|A|RSA|MEX"] = {p1:"48%",p2:"52%",ps1:480,ps2:520,sh1:9,sh2:10,so1:3,so2:3,co1:4,co2:5,fo1:16,fo2:14,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2010|B|ARG|KOR"] = {p1:"63%",p2:"37%",ps1:626,ps2:374,sh1:18,sh2:6,so1:10,so2:2,co1:9,co2:3,fo1:12,fo2:15,os1:2,os2:1,yc1:3,yc2:2,rc1:0,rc2:0,tk1:10,tk2:17};
matchStats["2010|C|ENG|USA"] = {p1:"54%",p2:"46%",ps1:542,ps2:458,sh1:11,sh2:8,so1:4,so2:3,co1:6,co2:3,fo1:16,fo2:14,os1:2,os2:2,yc1:3,yc2:3,rc1:0,rc2:0,tk1:15,tk2:16};
matchStats["2010|D|GER|AUS"] = {p1:"62%",p2:"38%",ps1:618,ps2:382,sh1:17,sh2:5,so1:9,so2:1,co1:8,co2:2,fo1:11,fo2:15,os1:3,os2:1,yc1:2,yc2:2,rc1:0,rc2:1,tk1:10,tk2:17};
matchStats["2010|E|NED|DEN"] = {p1:"55%",p2:"45%",ps1:548,ps2:452,sh1:14,sh2:7,so1:6,so2:2,co1:7,co2:3,fo1:13,fo2:15,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:12,tk2:16};
matchStats["2010|G|BRA|CIV"] = {p1:"56%",p2:"44%",ps1:558,ps2:442,sh1:15,sh2:7,so1:8,so2:2,co1:7,co2:3,fo1:14,fo2:17,os1:2,os2:2,yc1:1,yc2:3,rc1:1,rc2:0,tk1:12,tk2:16};
matchStats["2010|H|ESP|SUI"] = {p1:"67%",p2:"33%",ps1:672,ps2:328,sh1:18,sh2:4,so1:6,so2:2,co1:10,co2:1,fo1:10,fo2:16,os1:3,os2:1,yc1:1,yc2:3,rc1:0,rc2:0,tk1:8,tk2:18};
matchStats["2010|R16|GER|ENG"] = {p1:"48%",p2:"52%",ps1:482,ps2:518,sh1:12,sh2:11,so1:8,so2:4,co1:6,co2:4,fo1:12,fo2:13,os1:2,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:12};
matchStats["2010|R16|ARG|MEX"] = {p1:"57%",p2:"43%",ps1:572,ps2:428,sh1:13,sh2:8,so1:8,so2:3,co1:6,co2:3,fo1:11,fo2:14,os1:2,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:12,tk2:16};
matchStats["2010|QF|NED|BRA"] = {p1:"43%",p2:"57%",ps1:432,ps2:568,sh1:10,sh2:14,so1:6,so2:7,co1:4,co2:8,fo1:18,fo2:14,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:1,tk1:16,tk2:10};
matchStats["2010|QF|ARG|GER"] = {p1:"53%",p2:"47%",ps1:528,ps2:472,sh1:13,sh2:15,so1:5,so2:9,co1:4,co2:8,fo1:14,fo2:12,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:10};
matchStats["2010|SF|URU|NED"] = {p1:"47%",p2:"53%",ps1:468,ps2:532,sh1:10,sh2:14,so1:5,so2:8,co1:3,co2:7,fo1:15,fo2:12,os1:2,os2:2,yc1:3,yc2:4,rc1:0,rc2:0,tk1:14,tk2:13};
matchStats["2010|SF|GER|ESP"] = {p1:"44%",p2:"56%",ps1:440,ps2:560,sh1:8,sh2:14,so1:2,so2:6,co1:3,co2:8,fo1:14,fo2:12,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:17,tk2:11};
matchStats["2010|TP|URU|GER"] = {p1:"46%",p2:"54%",ps1:462,ps2:538,sh1:13,sh2:16,so1:7,so2:9,co1:6,co2:8,fo1:14,fo2:12,os1:2,os2:3,yc1:3,yc2:3,rc1:0,rc2:1,tk1:16,tk2:12};
matchStats["2006|A|GER|CRC"] = {p1:"62%",p2:"38%",ps1:618,ps2:382,sh1:16,sh2:6,so1:9,so2:3,co1:8,co2:2,fo1:13,fo2:15,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:11,tk2:17};
matchStats["2006|C|ARG|CIV"] = {p1:"53%",p2:"47%",ps1:532,ps2:468,sh1:12,sh2:8,so1:6,so2:3,co1:5,co2:3,fo1:16,fo2:18,os1:3,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:14,tk2:16};
matchStats["2006|E|ITA|GHA"] = {p1:"52%",p2:"48%",ps1:518,ps2:482,sh1:13,sh2:9,so1:7,so2:3,co1:6,co2:3,fo1:14,fo2:16,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:16};
matchStats["2006|F|BRA|CRO"] = {p1:"58%",p2:"42%",ps1:578,ps2:422,sh1:15,sh2:7,so1:7,so2:2,co1:8,co2:3,fo1:12,fo2:15,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:11,tk2:17};
matchStats["2006|R16|GER|SWE"] = {p1:"61%",p2:"39%",ps1:608,ps2:392,sh1:16,sh2:5,so1:9,so2:1,co1:8,co2:2,fo1:11,fo2:14,os1:3,os2:1,yc1:1,yc2:2,rc1:0,rc2:1,tk1:10,tk2:17};
matchStats["2006|R16|ARG|MEX"] = {p1:"52%",p2:"48%",ps1:520,ps2:480,sh1:13,sh2:9,so1:8,so2:4,co1:7,co2:4,fo1:15,fo2:16,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:14,tk2:14};
matchStats["2006|QF|GER|ARG"] = {p1:"51%",p2:"49%",ps1:512,ps2:488,sh1:12,sh2:10,so1:6,so2:3,co1:6,co2:4,fo1:17,fo2:18,os1:3,os2:2,yc1:3,yc2:4,rc1:0,rc2:1,tk1:18,tk2:16};
matchStats["2006|QF|BRA|FRA"] = {p1:"52%",p2:"48%",ps1:518,ps2:482,sh1:12,sh2:9,so1:5,so2:4,co1:5,co2:3,fo1:17,fo2:15,os1:2,os2:2,yc1:3,yc2:2,rc1:0,rc2:0,tk1:18,tk2:15};
matchStats["2006|SF|GER|ITA"] = {p1:"49%",p2:"51%",ps1:490,ps2:510,sh1:12,sh2:14,so1:3,so2:7,co1:4,co2:8,fo1:16,fo2:13,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:12};
matchStats["2006|SF|POR|FRA"] = {p1:"48%",p2:"52%",ps1:482,ps2:518,sh1:9,sh2:11,so1:3,so2:5,co1:3,co2:6,fo1:15,fo2:13,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:12};
matchStats["2006|TP|GER|POR"] = {p1:"53%",p2:"47%",ps1:528,ps2:472,sh1:14,sh2:9,so1:8,so2:3,co1:7,co2:4,fo1:12,fo2:14,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:15};
matchStats["2002|A|FRA|SEN"] = {p1:"62%",p2:"38%",ps1:618,ps2:382,sh1:14,sh2:5,so1:5,so2:2,co1:8,co2:2,fo1:12,fo2:16,os1:2,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:12,tk2:16};
matchStats["2002|C|BRA|TUR"] = {p1:"54%",p2:"46%",ps1:542,ps2:462,sh1:16,sh2:8,so1:8,so2:3,co1:7,co2:2,fo1:17,fo2:18,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:2,tk1:14,tk2:15};
matchStats["2002|D|USA|POR"] = {p1:"41%",p2:"59%",ps1:408,ps2:592,sh1:8,sh2:14,so1:5,so2:6,co1:3,co2:7,fo1:14,fo2:11,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:10};
matchStats["2002|E|GER|KSA"] = {p1:"72%",p2:"28%",ps1:718,ps2:282,sh1:22,sh2:3,so1:14,so2:0,co1:11,co2:1,fo1:6,fo2:13,os1:2,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:5,tk2:18};
matchStats["2002|F|ARG|ENG"] = {p1:"49%",p2:"51%",ps1:492,ps2:508,sh1:10,sh2:11,so1:5,so2:4,co1:6,co2:4,fo1:16,fo2:14,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:15,tk2:14};
matchStats["2002|R16|KOR|ITA"] = {p1:"40%",p2:"60%",ps1:398,ps2:602,sh1:12,sh2:18,so1:5,so2:9,co1:4,co2:10,fo1:18,fo2:12,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:1,tk1:16,tk2:10};
matchStats["2002|R16|BRA|BEL"] = {p1:"56%",p2:"44%",ps1:558,ps2:442,sh1:14,sh2:8,so1:7,so2:2,co1:8,co2:3,fo1:13,fo2:16,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:12,tk2:18};
matchStats["2002|QF|ENG|BRA"] = {p1:"48%",p2:"52%",ps1:480,ps2:520,sh1:10,sh2:13,so1:6,so2:7,co1:5,co2:6,fo1:16,fo2:14,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:1,tk1:16,tk2:12};
matchStats["2002|SF|GER|KOR"] = {p1:"57%",p2:"43%",ps1:568,ps2:432,sh1:14,sh2:7,so1:7,so2:2,co1:8,co2:3,fo1:12,fo2:15,os1:2,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:13,tk2:18};
matchStats["2002|SF|BRA|TUR"] = {p1:"53%",p2:"47%",ps1:528,ps2:472,sh1:13,sh2:9,so1:6,so2:3,co1:6,co2:3,fo1:18,fo2:16,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:14};
matchStats["2022|R16|MAR|ESP"] = {p1:"50%",p2:"50%",ps1:354,ps2:354,sh1:2,sh2:2,so1:1,so2:0,co1:3,co2:4,fo1:9,fo2:21,os1:4,os2:0,yc1:1,yc2:1,rc1:0,rc2:0,tk1:12,tk2:28};
matchStats["2018|R16|SWE|SUI"] = {p1:"64%",p2:"36%",ps1:405,ps2:229,sh1:1,sh2:4,so1:0,so2:1,co1:3,co2:8,fo1:9,fo2:11,os1:3,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:23,tk2:26};
matchStats["2018|R16|COL|ENG"] = {p1:"39%",p2:"61%",ps1:297,ps2:467,sh1:3,sh2:2,so1:1,so2:1,co1:7,co2:8,fo1:12,fo2:14,os1:2,os2:1,yc1:6,yc2:2,rc1:0,rc2:0,tk1:16,tk2:17};
matchStats["2018|QF|SWE|ENG"] = {p1:"31%",p2:"69%",ps1:218,ps2:486,sh1:5,sh2:4,so1:2,so2:1,co1:8,co2:3,fo1:11,fo2:12,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:15,tk2:23};
matchStats["2018|QF|RUS|CRO"] = {p1:"46%",p2:"54%",ps1:427,ps2:503,sh1:5,sh2:3,so1:3,so2:1,co1:3,co2:9,fo1:11,fo2:10,os1:3,os2:1,yc1:3,yc2:2,rc1:0,rc2:0,tk1:19,tk2:25};
matchStats["2014|R16|COL|URU"] = {p1:"47%",p2:"53%",ps1:462,ps2:520,sh1:10,sh2:9,so1:6,so2:3,co1:5,co2:4,fo1:14,fo2:16,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2014|R16|CRC|GRE"] = {p1:"43%",p2:"57%",ps1:388,ps2:538,sh1:6,sh2:9,so1:2,so2:4,co1:3,co2:7,fo1:16,fo2:14,os1:2,os2:3,yc1:6,yc2:2,rc1:1,rc2:0,tk1:18,tk2:14};
matchStats["2014|R16|FRA|NGA"] = {p1:"52%",p2:"48%",ps1:498,ps2:462,sh1:12,sh2:8,so1:5,so2:2,co1:7,co2:3,fo1:14,fo2:16,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2014|R16|GER|ALG"] = {p1:"59%",p2:"41%",ps1:582,ps2:398,sh1:17,sh2:8,so1:8,so2:3,co1:9,co2:2,fo1:13,fo2:17,os1:3,os2:1,yc1:2,yc2:3,rc1:0,rc2:0,tk1:12,tk2:16};
matchStats["2014|R16|ARG|SUI"] = {p1:"61%",p2:"39%",ps1:608,ps2:392,sh1:14,sh2:5,so1:6,so2:1,co1:8,co2:2,fo1:12,fo2:15,os1:2,os2:1,yc1:3,yc2:2,rc1:0,rc2:0,tk1:11,tk2:17};
matchStats["2014|R16|BEL|USA"] = {p1:"45%",p2:"55%",ps1:442,ps2:548,sh1:10,sh2:15,so1:5,so2:7,co1:4,co2:8,fo1:16,fo2:12,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:17,tk2:13};
matchStats["2014|QF|ARG|BEL"] = {p1:"49%",p2:"51%",ps1:482,ps2:508,sh1:8,sh2:11,so1:3,so2:4,co1:4,co2:6,fo1:15,fo2:13,os1:2,os2:3,yc1:2,yc2:3,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2014|QF|NED|CRC"] = {p1:"65%",p2:"35%",ps1:648,ps2:352,sh1:19,sh2:6,so1:8,so2:2,co1:11,co2:2,fo1:10,fo2:17,os1:3,os2:1,yc1:2,yc2:4,rc1:0,rc2:0,tk1:11,tk2:18};
matchStats["2010|R16|URU|KOR"] = {p1:"43%",p2:"57%",ps1:428,ps2:562,sh1:8,sh2:13,so1:5,so2:5,co1:3,co2:7,fo1:14,fo2:12,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2010|R16|USA|GHA"] = {p1:"52%",p2:"48%",ps1:512,ps2:478,sh1:10,sh2:12,so1:4,so2:6,co1:5,co2:5,fo1:14,fo2:15,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:15,tk2:14};
matchStats["2010|R16|NED|SVK"] = {p1:"58%",p2:"42%",ps1:578,ps2:422,sh1:13,sh2:7,so1:7,so2:3,co1:8,co2:2,fo1:12,fo2:16,os1:2,os2:1,yc1:2,yc2:3,rc1:0,rc2:0,tk1:12,tk2:18};
matchStats["2010|R16|BRA|CHI"] = {p1:"54%",p2:"46%",ps1:538,ps2:462,sh1:14,sh2:8,so1:8,so2:2,co1:7,co2:3,fo1:13,fo2:17,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:13,tk2:17};
matchStats["2010|R16|PAR|JPN"] = {p1:"49%",p2:"51%",ps1:482,ps2:518,sh1:9,sh2:10,so1:3,so2:4,co1:4,co2:5,fo1:16,fo2:14,os1:2,os2:2,yc1:1,yc2:3,rc1:0,rc2:0,tk1:17,tk2:15};
matchStats["2010|R16|ESP|POR"] = {p1:"62%",p2:"38%",ps1:618,ps2:382,sh1:15,sh2:6,so1:6,so2:1,co1:9,co2:2,fo1:11,fo2:15,os1:3,os2:1,yc1:2,yc2:1,rc1:0,rc2:1,tk1:10,tk2:19};
matchStats["2010|QF|URU|GHA"] = {p1:"50%",p2:"50%",ps1:498,ps2:502,sh1:10,sh2:11,so1:5,so2:4,co1:5,co2:6,fo1:16,fo2:15,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:1,tk1:16,tk2:14};
matchStats["2010|QF|PAR|ESP"] = {p1:"38%",p2:"62%",ps1:368,ps2:632,sh1:5,sh2:16,so1:1,so2:7,co1:2,co2:9,fo1:17,fo2:11,os1:1,os2:3,yc1:4,yc2:2,rc1:0,rc2:0,tk1:18,tk2:9};
matchStats["2006|R16|ENG|ECU"] = {p1:"58%",p2:"42%",ps1:578,ps2:422,sh1:12,sh2:6,so1:5,so2:1,co1:7,co2:3,fo1:14,fo2:16,os1:2,os2:1,yc1:3,yc2:3,rc1:0,rc2:0,tk1:13,tk2:18};
matchStats["2006|R16|POR|NED"] = {p1:"47%",p2:"53%",ps1:458,ps2:542,sh1:8,sh2:10,so1:4,so2:3,co1:5,co2:5,fo1:18,fo2:17,os1:2,os2:3,yc1:4,yc2:4,rc1:2,rc2:2,tk1:17,tk2:15};
matchStats["2006|R16|ITA|AUS"] = {p1:"55%",p2:"45%",ps1:542,ps2:448,sh1:13,sh2:7,so1:6,so2:2,co1:7,co2:3,fo1:14,fo2:17,os1:2,os2:1,yc1:3,yc2:3,rc1:1,rc2:0,tk1:13,tk2:17};
matchStats["2006|R16|SUI|UKR"] = {p1:"51%",p2:"49%",ps1:508,ps2:492,sh1:8,sh2:9,so1:3,so2:3,co1:4,co2:5,fo1:15,fo2:14,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2006|R16|BRA|GHA"] = {p1:"54%",p2:"46%",ps1:538,ps2:462,sh1:14,sh2:8,so1:8,so2:2,co1:8,co2:3,fo1:16,fo2:18,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:1,tk1:14,tk2:16};
matchStats["2006|R16|ESP|FRA"] = {p1:"58%",p2:"42%",ps1:572,ps2:428,sh1:10,sh2:12,so1:4,so2:6,co1:6,co2:5,fo1:14,fo2:16,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:15,tk2:13};
matchStats["2006|QF|ITA|UKR"] = {p1:"54%",p2:"46%",ps1:542,ps2:458,sh1:13,sh2:7,so1:7,so2:2,co1:7,co2:3,fo1:13,fo2:16,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:12,tk2:17};
matchStats["2006|QF|ENG|POR"] = {p1:"52%",p2:"48%",ps1:512,ps2:488,sh1:9,sh2:11,so1:3,so2:4,co1:5,co2:6,fo1:17,fo2:16,os1:2,os2:2,yc1:2,yc2:2,rc1:1,rc2:0,tk1:16,tk2:14};
matchStats["2002|R16|GER|PAR"] = {p1:"58%",p2:"42%",ps1:582,ps2:418,sh1:13,sh2:5,so1:6,so2:1,co1:8,co2:2,fo1:12,fo2:15,os1:2,os2:1,yc1:3,yc2:2,rc1:0,rc2:1,tk1:13,tk2:18};
matchStats["2002|R16|DEN|ENG"] = {p1:"40%",p2:"60%",ps1:392,ps2:608,sh1:6,sh2:15,so1:2,so2:7,co1:3,co2:8,fo1:16,fo2:12,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2002|R16|SWE|SEN"] = {p1:"49%",p2:"51%",ps1:482,ps2:518,sh1:9,sh2:11,so1:4,so2:5,co1:5,co2:5,fo1:15,fo2:14,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2002|R16|ESP|IRL"] = {p1:"57%",p2:"43%",ps1:568,ps2:432,sh1:12,sh2:6,so1:6,so2:2,co1:7,co2:3,fo1:15,fo2:17,os1:2,os2:1,yc1:3,yc2:3,rc1:0,rc2:0,tk1:14,tk2:17};
matchStats["2002|R16|MEX|USA"] = {p1:"47%",p2:"53%",ps1:462,ps2:538,sh1:8,sh2:12,so1:3,so2:6,co1:4,co2:6,fo1:17,fo2:14,os1:2,os2:3,yc1:5,yc2:3,rc1:1,rc2:0,tk1:16,tk2:12};
matchStats["2002|R16|JPN|TUR"] = {p1:"52%",p2:"48%",ps1:518,ps2:482,sh1:10,sh2:8,so1:4,so2:3,co1:5,co2:4,fo1:15,fo2:16,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:15,tk2:15};
matchStats["2002|QF|GER|USA"] = {p1:"56%",p2:"44%",ps1:558,ps2:442,sh1:12,sh2:7,so1:5,so2:2,co1:7,co2:3,fo1:14,fo2:15,os1:2,os2:1,yc1:3,yc2:3,rc1:0,rc2:0,tk1:13,tk2:17};
matchStats["2002|QF|KOR|ESP"] = {p1:"41%",p2:"59%",ps1:398,ps2:602,sh1:7,sh2:14,so1:2,so2:6,co1:3,co2:8,fo1:17,fo2:12,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:12};
matchStats["2002|QF|TUR|SEN"] = {p1:"46%",p2:"54%",ps1:452,ps2:548,sh1:9,sh2:12,so1:3,so2:4,co1:4,co2:6,fo1:16,fo2:14,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:15,tk2:14};
matchStats["2002|TP|KOR|TUR"] = {p1:"48%",p2:"52%",ps1:472,ps2:528,sh1:13,sh2:14,so1:7,so2:8,co1:5,co2:7,fo1:15,fo2:13,os1:2,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:13};

// ===== Expanded knockout stats (authoritative data) =====
// 2022: All knockout matches (complete)
matchStats["2022|R16|NED|USA"] = {p1:"42%",p2:"58%",ps1:415,ps2:582,sh1:13,sh2:16,so1:4,so2:8,co1:5,co2:6,fo1:17,fo2:12,os1:0,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:22,tk2:18};
matchStats["2022|R16|ARG|AUS"] = {p1:"61%",p2:"39%",ps1:615,ps2:391,sh1:14,sh2:5,so1:6,so2:1,co1:8,co2:2,fo1:8,fo2:15,os1:2,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:26};
matchStats["2022|R16|FRA|POL"] = {p1:"55%",p2:"45%",ps1:550,ps2:448,sh1:16,sh2:11,so1:8,so2:5,co1:7,co2:1,fo1:14,fo2:10,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:18,tk2:21};
matchStats["2022|R16|JPN|CRO"] = {p1:"43%",p2:"57%",ps1:438,ps2:579,sh1:12,sh2:15,so1:4,so2:6,co1:6,co2:5,fo1:9,fo2:13,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:20,tk2:17};
matchStats["2022|R16|MAR|ESP"] = {p1:"28%",p2:"72%",ps1:292,ps2:796,sh1:6,sh2:13,so1:2,so2:1,co1:1,co2:8,fo1:19,fo2:14,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:28,tk2:14};
matchStats["2022|QF|MAR|POR"] = {p1:"33%",p2:"67%",ps1:310,ps2:638,sh1:9,sh2:13,so1:3,so2:3,co1:3,co2:9,fo1:15,fo2:9,os1:0,os2:2,yc1:3,yc2:1,rc1:1,rc2:0,tk1:26,tk2:16};
matchStats["2022|TP|CRO|MAR"] = {p1:"52%",p2:"48%",ps1:498,ps2:472,sh1:12,sh2:9,so1:5,so2:4,co1:3,co2:5,fo1:11,fo2:17,os1:1,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:20};

// 2018: All knockout matches
matchStats["2018|R16|FRA|ARG"] = {p1:"39%",p2:"61%",ps1:373,ps2:568,sh1:8,sh2:15,so1:6,so2:4,co1:2,co2:6,fo1:14,fo2:13,os1:1,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2018|R16|URU|POR"] = {p1:"38%",p2:"62%",ps1:338,ps2:568,sh1:5,sh2:20,so1:3,so2:6,co1:2,co2:10,fo1:13,fo2:12,os1:1,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:22,tk2:20};
matchStats["2018|R16|ESP|RUS"] = {p1:"74%",p2:"26%",ps1:1029,ps2:284,sh1:25,sh2:6,so1:9,so2:1,co1:13,co2:3,fo1:5,fo2:19,os1:2,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:12,tk2:32};
matchStats["2018|R16|CRO|DEN"] = {p1:"54%",p2:"46%",ps1:523,ps2:442,sh1:18,sh2:13,so1:7,so2:5,co1:5,co2:4,fo1:19,fo2:12,os1:1,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:18};
matchStats["2018|R16|BRA|MEX"] = {p1:"47%",p2:"53%",ps1:488,ps2:538,sh1:14,sh2:6,so1:8,so2:2,co1:8,co2:2,fo1:14,fo2:15,os1:1,os2:2,yc1:1,yc2:3,rc1:0,rc2:0,tk1:13,tk2:21};
matchStats["2018|R16|BEL|JPN"] = {p1:"55%",p2:"45%",ps1:560,ps2:428,sh1:20,sh2:9,so1:8,so2:4,co1:10,co2:4,fo1:12,fo2:10,os1:2,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2018|R16|SWE|SUI"] = {p1:"37%",p2:"63%",ps1:378,ps2:624,sh1:8,sh2:12,so1:3,so2:5,co1:3,co2:8,fo1:12,fo2:11,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:20};
matchStats["2018|R16|COL|ENG"] = {p1:"48%",p2:"52%",ps1:473,ps2:548,sh1:12,sh2:15,so1:4,so2:5,co1:3,co2:8,fo1:14,fo2:15,os1:1,os2:3,yc1:6,yc2:2,rc1:0,rc2:0,tk1:22,tk2:16};
matchStats["2018|QF|URU|FRA"] = {p1:"43%",p2:"57%",ps1:413,ps2:560,sh1:11,sh2:12,so1:4,so2:5,co1:3,co2:6,fo1:16,fo2:14,os1:2,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:24,tk2:16};
matchStats["2018|QF|BRA|BEL"] = {p1:"51%",p2:"49%",ps1:542,ps2:517,sh1:18,sh2:13,so1:7,so2:5,co1:7,co2:4,fo1:13,fo2:12,os1:3,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:20};
matchStats["2018|QF|SWE|ENG"] = {p1:"38%",p2:"62%",ps1:357,ps2:599,sh1:7,sh2:14,so1:2,so2:7,co1:3,co2:8,fo1:10,fo2:8,os1:2,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2018|QF|RUS|CRO"] = {p1:"42%",p2:"58%",ps1:395,ps2:580,sh1:14,sh2:18,so1:5,so2:8,co1:5,co2:7,fo1:18,fo2:16,os1:2,os2:4,yc1:3,yc2:2,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2018|SF|FRA|BEL"] = {p1:"40%",p2:"60%",ps1:366,ps2:580,sh1:11,sh2:16,so1:5,so2:3,co1:5,co2:6,fo1:14,fo2:16,os1:1,os2:2,yc1:3,yc2:2,rc1:0,rc2:0,tk1:22,tk2:18};
matchStats["2018|SF|CRO|ENG"] = {p1:"44%",p2:"56%",ps1:425,ps2:548,sh1:15,sh2:11,so1:7,so2:2,co1:6,co2:4,fo1:14,fo2:12,os1:1,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:22};
matchStats["2018|TP|BEL|ENG"] = {p1:"44%",p2:"56%",ps1:444,ps2:584,sh1:10,sh2:12,so1:6,so2:4,co1:5,co2:5,fo1:11,fo2:8,os1:2,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:14};

// 2014: All knockout matches  
matchStats["2014|R16|BRA|CHI"] = {p1:"52%",p2:"48%",ps1:533,ps2:478,sh1:18,sh2:14,so1:9,so2:6,co1:6,co2:4,fo1:17,fo2:23,os1:3,os2:2,yc1:3,yc2:3,rc1:0,rc2:0,tk1:20,tk2:18};
matchStats["2014|R16|COL|URU"] = {p1:"46%",p2:"54%",ps1:448,ps2:518,sh1:11,sh2:13,so1:5,so2:5,co1:5,co2:7,fo1:18,fo2:14,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:20};
matchStats["2014|R16|NED|MEX"] = {p1:"54%",p2:"46%",ps1:548,ps2:468,sh1:15,sh2:12,so1:8,so2:6,co1:7,co2:3,fo1:14,fo2:10,os1:3,os2:1,yc1:1,yc2:3,rc1:0,rc2:0,tk1:18,tk2:22};
matchStats["2014|R16|CRC|GRE"] = {p1:"42%",p2:"58%",ps1:408,ps2:592,sh1:8,sh2:16,so1:3,so2:6,co1:3,co2:8,fo1:21,fo2:12,os1:2,os2:5,yc1:6,yc2:2,rc1:1,rc2:0,tk1:24,tk2:14};
matchStats["2014|R16|FRA|NGA"] = {p1:"55%",p2:"45%",ps1:548,ps2:437,sh1:16,sh2:9,so1:9,so2:3,co1:8,co2:3,fo1:11,fo2:22,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:26};
matchStats["2014|R16|GER|ALG"] = {p1:"62%",p2:"38%",ps1:638,ps2:375,sh1:21,sh2:8,so1:12,so2:4,co1:9,co2:3,fo1:12,fo2:17,os1:3,os2:3,yc1:2,yc2:3,rc1:0,rc2:0,tk1:14,tk2:24};
matchStats["2014|R16|ARG|SUI"] = {p1:"58%",p2:"42%",ps1:588,ps2:428,sh1:17,sh2:8,so1:9,so2:3,co1:7,co2:3,fo1:13,fo2:18,os1:2,os2:2,yc1:3,yc2:2,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2014|R16|BEL|USA"] = {p1:"48%",p2:"52%",ps1:488,ps2:547,sh1:14,sh2:15,so1:8,so2:6,co1:5,co2:6,fo1:11,fo2:13,os1:3,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2014|QF|FRA|GER"] = {p1:"48%",p2:"52%",ps1:475,ps2:530,sh1:13,sh2:12,so1:4,so2:5,co1:6,co2:5,fo1:15,fo2:18,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2014|QF|BRA|COL"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:13,sh2:14,so1:8,so2:5,co1:7,co2:5,fo1:14,fo2:17,os1:1,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:22,tk2:18};
matchStats["2014|QF|ARG|BEL"] = {p1:"43%",p2:"57%",ps1:420,ps2:552,sh1:10,sh2:11,so1:4,so2:3,co1:4,co2:6,fo1:14,fo2:13,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:22,tk2:20};
matchStats["2014|QF|NED|CRC"] = {p1:"56%",p2:"44%",ps1:568,ps2:448,sh1:17,sh2:6,so1:8,so2:1,co1:10,co2:2,fo1:10,fo2:20,os1:4,os2:1,yc1:2,yc2:4,rc1:0,rc2:0,tk1:12,tk2:28};
matchStats["2014|SF|NED|ARG"] = {p1:"51%",p2:"49%",ps1:518,ps2:502,sh1:13,sh2:10,so1:5,so2:4,co1:6,co2:4,fo1:18,fo2:15,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:20,tk2:22};
matchStats["2014|TP|BRA|NED"] = {p1:"48%",p2:"52%",ps1:488,ps2:522,sh1:12,sh2:14,so1:5,so2:7,co1:4,co2:6,fo1:20,fo2:16,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:0,tk1:18,tk2:16};

// 2010: Key knockout matches
matchStats["2010|R16|URU|KOR"] = {p1:"44%",p2:"56%",ps1:438,ps2:568,sh1:12,sh2:15,so1:5,so2:4,co1:3,co2:7,fo1:12,fo2:14,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:22};
matchStats["2010|R16|USA|GHA"] = {p1:"47%",p2:"53%",ps1:448,ps2:528,sh1:12,sh2:16,so1:5,so2:7,co1:5,co2:5,fo1:13,fo2:15,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:20,tk2:16};
matchStats["2010|R16|GER|ENG"] = {p1:"52%",p2:"48%",ps1:535,ps2:498,sh1:17,sh2:13,so1:9,so2:6,co1:5,co2:6,fo1:7,fo2:8,os1:4,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:20};
matchStats["2010|R16|ARG|MEX"] = {p1:"52%",p2:"48%",ps1:538,ps2:488,sh1:16,sh2:10,so1:8,so2:4,co1:5,co2:4,fo1:14,fo2:12,os1:4,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2010|R16|NED|SVK"] = {p1:"56%",p2:"44%",ps1:578,ps2:448,sh1:16,sh2:11,so1:8,so2:4,co1:6,co2:3,fo1:12,fo2:16,os1:2,os2:3,yc1:2,yc2:3,rc1:0,rc2:0,tk1:18,tk2:22};
matchStats["2010|R16|BRA|CHI"] = {p1:"52%",p2:"48%",ps1:528,ps2:498,sh1:15,sh2:12,so1:9,so2:5,co1:7,co2:4,fo1:15,fo2:16,os1:2,os2:3,yc1:2,yc2:3,rc1:0,rc2:0,tk1:16,tk2:20};
matchStats["2010|R16|PAR|JPN"] = {p1:"42%",p2:"58%",ps1:415,ps2:588,sh1:10,sh2:16,so1:4,so2:6,co1:3,co2:8,fo1:16,fo2:14,os1:3,os2:2,yc1:1,yc2:3,rc1:0,rc2:0,tk1:22,tk2:16};
matchStats["2010|R16|ESP|POR"] = {p1:"58%",p2:"42%",ps1:598,ps2:428,sh1:18,sh2:6,so1:8,so2:2,co1:8,co2:2,fo1:12,fo2:18,os1:3,os2:2,yc1:2,yc2:1,rc1:0,rc2:1,tk1:14,tk2:24};
matchStats["2010|QF|NED|BRA"] = {p1:"42%",p2:"58%",ps1:408,ps2:578,sh1:12,sh2:15,so1:5,so2:7,co1:4,co2:7,fo1:18,fo2:20,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:1,tk1:20,tk2:18};
matchStats["2010|QF|URU|GHA"] = {p1:"45%",p2:"55%",ps1:438,ps2:548,sh1:13,sh2:16,so1:7,so2:6,co1:4,co2:8,fo1:16,fo2:12,os1:2,os2:4,yc1:2,yc2:3,rc1:0,rc2:1,tk1:18,tk2:16};
matchStats["2010|QF|ARG|GER"] = {p1:"54%",p2:"46%",ps1:548,ps2:478,sh1:14,sh2:20,so1:5,so2:12,co1:5,co2:6,fo1:10,fo2:8,os1:5,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2010|QF|PAR|ESP"] = {p1:"39%",p2:"61%",ps1:378,ps2:608,sh1:6,sh2:18,so1:2,so2:8,co1:2,co2:8,fo1:22,fo2:12,os1:2,os2:3,yc1:4,yc2:2,rc1:0,rc2:0,tk1:26,tk2:14};
matchStats["2010|SF|URU|NED"] = {p1:"43%",p2:"57%",ps1:418,ps2:568,sh1:12,sh2:15,so1:6,so2:9,co1:5,co2:5,fo1:16,fo2:14,os1:2,os2:3,yc1:3,yc2:4,rc1:0,rc2:0,tk1:22,tk2:16};
matchStats["2010|SF|GER|ESP"] = {p1:"47%",p2:"53%",ps1:488,ps2:548,sh1:13,sh2:14,so1:5,so2:4,co1:5,co2:8,fo1:10,fo2:14,os1:2,os2:4,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:18};
matchStats["2010|TP|URU|GER"] = {p1:"40%",p2:"60%",ps1:395,ps2:598,sh1:12,sh2:18,so1:6,so2:9,co1:4,co2:7,fo1:14,fo2:13,os1:1,os2:3,yc1:3,yc2:3,rc1:0,rc2:1,tk1:18,tk2:14};

// 2006: Key knockout matches
matchStats["2006|R16|GER|SWE"] = {p1:"57%",p2:"43%",ps1:588,ps2:438,sh1:21,sh2:6,so1:12,so2:2,co1:8,co2:3,fo1:12,fo2:17,os1:3,os2:2,yc1:1,yc2:2,rc1:0,rc2:1,tk1:14,tk2:22};
matchStats["2006|R16|ARG|MEX"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:13,sh2:14,so1:6,so2:5,co1:4,co2:5,fo1:18,fo2:16,os1:2,os2:4,yc1:2,yc2:3,rc1:0,rc2:0,tk1:22,tk2:18};
matchStats["2006|R16|ENG|ECU"] = {p1:"55%",p2:"45%",ps1:558,ps2:448,sh1:16,sh2:8,so1:8,so2:3,co1:7,co2:3,fo1:14,fo2:18,os1:2,os2:3,yc1:3,yc2:3,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2006|R16|POR|NED"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:14,sh2:12,so1:7,so2:5,co1:5,co2:6,fo1:22,fo2:18,os1:3,os2:2,yc1:4,yc2:4,rc1:2,rc2:2,tk1:20,tk2:18};
matchStats["2006|R16|ITA|AUS"] = {p1:"55%",p2:"45%",ps1:558,ps2:448,sh1:17,sh2:8,so1:8,so2:3,co1:7,co2:2,fo1:13,fo2:16,os1:4,os2:2,yc1:3,yc2:3,rc1:1,rc2:0,tk1:16,tk2:22};
matchStats["2006|R16|SUI|UKR"] = {p1:"52%",p2:"48%",ps1:528,ps2:498,sh1:12,sh2:14,so1:5,so2:6,co1:6,co2:5,fo1:16,fo2:18,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:18,tk2:18};
matchStats["2006|R16|BRA|GHA"] = {p1:"52%",p2:"48%",ps1:528,ps2:498,sh1:17,sh2:12,so1:9,so2:6,co1:8,co2:4,fo1:18,fo2:15,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:1,tk1:16,tk2:20};
matchStats["2006|R16|ESP|FRA"] = {p1:"55%",p2:"45%",ps1:558,ps2:448,sh1:14,sh2:13,so1:7,so2:7,co1:5,co2:4,fo1:14,fo2:16,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:18,tk2:20};
matchStats["2006|QF|GER|ARG"] = {p1:"50%",p2:"50%",ps1:515,ps2:508,sh1:16,sh2:15,so1:8,so2:7,co1:6,co2:6,fo1:18,fo2:20,os1:3,os2:2,yc1:3,yc2:4,rc1:0,rc2:1,tk1:20,tk2:18};
matchStats["2006|QF|ITA|UKR"] = {p1:"58%",p2:"42%",ps1:598,ps2:428,sh1:20,sh2:8,so1:11,so2:3,co1:8,co2:2,fo1:12,fo2:15,os1:3,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2006|QF|ENG|POR"] = {p1:"50%",p2:"50%",ps1:508,ps2:515,sh1:14,sh2:10,so1:6,so2:5,co1:6,co2:5,fo1:19,fo2:20,os1:2,os2:3,yc1:2,yc2:2,rc1:1,rc2:0,tk1:22,tk2:20};
matchStats["2006|QF|BRA|FRA"] = {p1:"52%",p2:"48%",ps1:528,ps2:498,sh1:14,sh2:11,so1:5,so2:6,co1:7,co2:4,fo1:15,fo2:17,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:0,tk1:16,tk2:20};
matchStats["2006|SF|GER|ITA"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:13,sh2:15,so1:2,so2:7,co1:6,co2:8,fo1:21,fo2:18,os1:4,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2006|SF|POR|FRA"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:12,sh2:13,so1:5,so2:7,co1:4,co2:6,fo1:17,fo2:14,os1:3,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:20,tk2:18};
matchStats["2006|TP|GER|POR"] = {p1:"52%",p2:"48%",ps1:528,ps2:498,sh1:17,sh2:12,so1:9,so2:5,co1:7,co2:5,fo1:11,fo2:15,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:20};

// 2002: Key knockout matches
matchStats["2002|R16|GER|PAR"] = {p1:"58%",p2:"42%",ps1:598,ps2:428,sh1:20,sh2:6,so1:8,so2:2,co1:7,co2:3,fo1:14,fo2:18,os1:3,os2:2,yc1:3,yc2:2,rc1:0,rc2:1,tk1:16,tk2:24};
matchStats["2002|R16|DEN|ENG"] = {p1:"42%",p2:"58%",ps1:408,ps2:578,sh1:9,sh2:17,so1:3,so2:9,co1:3,co2:8,fo1:15,fo2:14,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:22,tk2:16};
matchStats["2002|R16|SWE|SEN"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:14,sh2:13,so1:6,so2:5,co1:5,co2:5,fo1:12,fo2:16,os1:3,os2:4,yc1:1,yc2:1,rc1:0,rc2:0,tk1:20,tk2:18};
matchStats["2002|R16|ESP|IRL"] = {p1:"55%",p2:"45%",ps1:558,ps2:448,sh1:16,sh2:9,so1:8,so2:3,co1:6,co2:3,fo1:14,fo2:16,os1:2,os2:3,yc1:3,yc2:3,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2002|R16|MEX|USA"] = {p1:"50%",p2:"50%",ps1:508,ps2:515,sh1:14,sh2:12,so1:7,so2:5,co1:5,co2:4,fo1:18,fo2:14,os1:2,os2:3,yc1:5,yc2:3,rc1:1,rc2:0,tk1:16,tk2:20};
matchStats["2002|R16|BRA|BEL"] = {p1:"52%",p2:"48%",ps1:528,ps2:498,sh1:16,sh2:12,so1:9,so2:5,co1:6,co2:5,fo1:14,fo2:16,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:18,tk2:22};
matchStats["2002|R16|JPN|TUR"] = {p1:"55%",p2:"45%",ps1:558,ps2:448,sh1:15,sh2:8,so1:7,so2:4,co1:8,co2:3,fo1:12,fo2:16,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:16,tk2:22};
matchStats["2002|R16|KOR|ITA"] = {p1:"42%",p2:"58%",ps1:408,ps2:588,sh1:13,sh2:10,so1:6,so2:5,co1:7,co2:5,fo1:18,fo2:24,os1:3,os2:4,yc1:3,yc2:2,rc1:0,rc2:1,tk1:22,tk2:18};
matchStats["2002|QF|ENG|BRA"] = {p1:"45%",p2:"55%",ps1:448,ps2:548,sh1:11,sh2:13,so1:5,so2:8,co1:5,co2:6,fo1:15,fo2:17,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:1,tk1:18,tk2:20};
matchStats["2002|QF|GER|USA"] = {p1:"42%",p2:"58%",ps1:408,ps2:578,sh1:12,sh2:16,so1:5,so2:7,co1:4,co2:8,fo1:16,fo2:14,os1:3,os2:2,yc1:3,yc2:3,rc1:0,rc2:0,tk1:22,tk2:16};
matchStats["2002|QF|KOR|ESP"] = {p1:"44%",p2:"56%",ps1:438,ps2:568,sh1:12,sh2:17,so1:5,so2:8,co1:5,co2:6,fo1:17,fo2:14,os1:3,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:20,tk2:18};
matchStats["2002|QF|TUR|SEN"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:14,sh2:13,so1:6,so2:5,co1:5,co2:6,fo1:14,fo2:16,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:20};
matchStats["2002|SF|GER|KOR"] = {p1:"52%",p2:"48%",ps1:528,ps2:498,sh1:15,sh2:11,so1:8,so2:4,co1:6,co2:4,fo1:14,fo2:16,os1:3,os2:4,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:22};
matchStats["2002|SF|BRA|TUR"] = {p1:"55%",p2:"45%",ps1:558,ps2:448,sh1:16,sh2:9,so1:8,so2:4,co1:8,co2:3,fo1:14,fo2:16,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2002|TP|KOR|TUR"] = {p1:"48%",p2:"52%",ps1:488,ps2:538,sh1:14,sh2:13,so1:6,so2:7,co1:5,co2:6,fo1:14,fo2:15,os1:2,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:18,tk2:18}
matchStats["2022|R16|NED|USA"] = {p1:"42%",p2:"58%",ps1:415,ps2:575,sh1:11,sh2:17,so1:6,so2:8,co1:4,co2:5,fo1:10,fo2:5,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:22,tk2:16};
matchStats["2022|R16|ARG|AUS"] = {p1:"61%",p2:"39%",ps1:614,ps2:392,sh1:14,sh2:5,so1:5,so2:1,co1:5,co2:3,fo1:11,fo2:15,os1:1,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:12,tk2:24};
matchStats["2022|R16|FRA|POL"] = {p1:"55%",p2:"45%",ps1:546,ps2:442,sh1:17,sh2:11,so1:8,so2:3,co1:7,co2:1,fo1:10,fo2:8,os1:1,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:19};
matchStats["2022|R16|JPN|CRO"] = {p1:"42%",p2:"58%",ps1:418,ps2:578,sh1:12,sh2:16,so1:3,so2:4,co1:5,co2:5,fo1:9,fo2:13,os1:2,os2:4,yc1:2,yc2:2,rc1:0,rc2:0,tk1:15,tk2:18};
matchStats["2022|R16|MAR|ESP"] = {p1:"26%",p2:"74%",ps1:305,ps2:998,sh1:6,sh2:13,so1:2,so2:1,co1:0,co2:8,fo1:18,fo2:14,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:26,tk2:15};
matchStats["2022|QF|MAR|POR"] = {p1:"27%",p2:"73%",ps1:298,ps2:751,sh1:9,sh2:12,so1:3,so2:3,co1:2,co2:9,fo1:15,fo2:10,os1:2,os2:2,yc1:3,yc2:1,rc1:1,rc2:0,tk1:21,tk2:14};
matchStats["2022|QF|CRO|BRA"] = {p1:"41%",p2:"59%",ps1:442,ps2:628,sh1:10,sh2:15,so1:1,so2:6,co1:3,co2:7,fo1:22,fo2:15,os1:2,os2:4,yc1:2,yc2:3,rc1:0,rc2:0,tk1:28,tk2:19};
matchStats["2022|QF|NED|ARG"] = {p1:"42%",p2:"58%",ps1:407,ps2:537,sh1:13,sh2:16,so1:4,so2:8,co1:2,co2:8,fo1:18,fo2:17,os1:1,os2:2,yc1:5,yc2:8,rc1:0,rc2:1,tk1:19,tk2:22};
matchStats["2022|TP|CRO|MAR"] = {p1:"51%",p2:"49%",ps1:482,ps2:462,sh1:12,sh2:9,so1:4,so2:3,co1:6,co2:4,fo1:13,fo2:12,os1:1,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:16,tk2:17};
matchStats["2018|R16|URU|POR"] = {p1:"39%",p2:"61%",ps1:376,ps2:568,sh1:9,sh2:16,so1:3,so2:5,co1:2,co2:7,fo1:13,fo2:15,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:17,tk2:15};
matchStats["2018|R16|FRA|ARG"] = {p1:"41%",p2:"59%",ps1:396,ps2:578,sh1:11,sh2:10,so1:6,so2:4,co1:1,co2:4,fo1:16,fo2:15,os1:2,os2:3,yc1:2,yc2:3,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2018|R16|BRA|MEX"] = {p1:"53%",p2:"47%",ps1:514,ps2:458,sh1:14,sh2:12,so1:4,so2:1,co1:6,co2:2,fo1:14,fo2:11,os1:2,os2:3,yc1:1,yc2:3,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2018|R16|BEL|JPN"] = {p1:"56%",p2:"44%",ps1:534,ps2:426,sh1:17,sh2:12,so1:7,so2:4,co1:8,co2:4,fo1:15,fo2:11,os1:1,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:18};
matchStats["2018|R16|SWE|SUI"] = {p1:"44%",p2:"56%",ps1:422,ps2:536,sh1:9,sh2:14,so1:4,so2:4,co1:5,co2:6,fo1:16,fo2:13,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2018|R16|COL|ENG"] = {p1:"48%",p2:"52%",ps1:468,ps2:508,sh1:10,sh2:12,so1:3,so2:2,co1:5,co2:6,fo1:23,fo2:14,os1:1,os2:2,yc1:6,yc2:2,rc1:0,rc2:0,tk1:17,tk2:19};
matchStats["2018|QF|URU|FRA"] = {p1:"39%",p2:"61%",ps1:368,ps2:568,sh1:11,sh2:12,so1:2,so2:4,co1:4,co2:4,fo1:17,fo2:14,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:18};
matchStats["2018|QF|BRA|BEL"] = {p1:"51%",p2:"49%",ps1:498,ps2:472,sh1:15,sh2:13,so1:5,so2:3,co1:9,co2:4,fo1:16,fo2:17,os1:2,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:14,tk2:16};
matchStats["2018|QF|SWE|ENG"] = {p1:"42%",p2:"58%",ps1:394,ps2:546,sh1:7,sh2:11,so1:3,so2:5,co1:2,co2:5,fo1:11,fo2:13,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:15,tk2:12};
matchStats["2018|QF|RUS|CRO"] = {p1:"39%",p2:"61%",ps1:384,ps2:586,sh1:14,sh2:17,so1:5,so2:6,co1:4,co2:7,fo1:25,fo2:19,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:0,tk1:20,tk2:14};
matchStats["2018|SF|FRA|BEL"] = {p1:"40%",p2:"60%",ps1:388,ps2:582,sh1:10,sh2:11,so1:3,so2:4,co1:3,co2:5,fo1:16,fo2:12,os1:2,os2:1,yc1:3,yc2:2,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2018|SF|CRO|ENG"] = {p1:"45%",p2:"55%",ps1:432,ps2:528,sh1:9,sh2:11,so1:4,so2:3,co1:4,co2:6,fo1:22,fo2:12,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:21,tk2:14};
matchStats["2018|TP|BEL|ENG"] = {p1:"49%",p2:"51%",ps1:468,ps2:486,sh1:10,sh2:12,so1:4,so2:3,co1:4,co2:5,fo1:13,fo2:12,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:18};
matchStats["2014|R16|BRA|CHI"] = {p1:"52%",p2:"48%",ps1:498,ps2:482,sh1:14,sh2:13,so1:8,so2:4,co1:7,co2:5,fo1:18,fo2:19,os1:2,os2:3,yc1:3,yc2:3,rc1:0,rc2:0,tk1:19,tk2:21};
matchStats["2014|R16|COL|URU"] = {p1:"46%",p2:"54%",ps1:438,ps2:516,sh1:11,sh2:12,so1:5,so2:4,co1:5,co2:7,fo1:17,fo2:16,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:17,tk2:19};
matchStats["2014|R16|NED|MEX"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:14,sh2:10,so1:6,so2:4,co1:5,co2:5,fo1:13,fo2:14,os1:2,os2:2,yc1:1,yc2:3,rc1:0,rc2:0,tk1:15,tk2:17};
matchStats["2014|R16|CRC|GRE"] = {p1:"39%",p2:"61%",ps1:372,ps2:572,sh1:8,sh2:14,so1:2,so2:4,co1:2,co2:9,fo1:22,fo2:20,os1:1,os2:3,yc1:6,yc2:2,rc1:1,rc2:0,tk1:24,tk2:16};
matchStats["2014|R16|FRA|NGA"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:10,sh2:9,so1:5,so2:3,co1:6,co2:5,fo1:9,fo2:12,os1:2,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:17,tk2:14};
matchStats["2014|R16|GER|ALG"] = {p1:"63%",p2:"37%",ps1:598,ps2:352,sh1:22,sh2:10,so1:12,so2:4,co1:10,co2:3,fo1:11,fo2:19,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:14,tk2:20};
matchStats["2014|R16|ARG|SUI"] = {p1:"62%",p2:"38%",ps1:592,ps2:368,sh1:16,sh2:8,so1:5,so2:3,co1:7,co2:3,fo1:16,fo2:18,os1:4,os2:2,yc1:3,yc2:2,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2014|R16|BEL|USA"] = {p1:"47%",p2:"53%",ps1:448,ps2:506,sh1:17,sh2:18,so1:8,so2:8,co1:9,co2:6,fo1:13,fo2:27,os1:2,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:20,tk2:22};
matchStats["2014|QF|FRA|GER"] = {p1:"49%",p2:"51%",ps1:468,ps2:486,sh1:10,sh2:12,so1:4,so2:5,co1:5,co2:6,fo1:15,fo2:14,os1:2,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2014|QF|BRA|COL"] = {p1:"46%",p2:"54%",ps1:438,ps2:514,sh1:12,sh2:11,so1:5,so2:3,co1:7,co2:5,fo1:31,fo2:22,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2014|QF|ARG|BEL"] = {p1:"49%",p2:"51%",ps1:468,ps2:486,sh1:9,sh2:10,so1:3,so2:4,co1:5,co2:6,fo1:14,fo2:13,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:17,tk2:15};
matchStats["2014|QF|NED|CRC"] = {p1:"65%",p2:"35%",ps1:618,ps2:338,sh1:17,sh2:8,so1:6,so2:1,co1:7,co2:2,fo1:16,fo2:20,os1:3,os2:1,yc1:2,yc2:4,rc1:0,rc2:0,tk1:14,tk2:22};
matchStats["2014|SF|NED|ARG"] = {p1:"46%",p2:"54%",ps1:438,ps2:514,sh1:10,sh2:8,so1:3,so2:4,co1:4,co2:5,fo1:16,fo2:15,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:17,tk2:14};
matchStats["2014|TP|BRA|NED"] = {p1:"53%",p2:"47%",ps1:506,ps2:448,sh1:13,sh2:9,so1:5,so2:4,co1:4,co2:2,fo1:18,fo2:15,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2010|R16|URU|KOR"] = {p1:"46%",p2:"54%",ps1:438,ps2:514,sh1:14,sh2:13,so1:5,so2:5,co1:3,co2:6,fo1:12,fo2:14,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:17};
matchStats["2010|R16|USA|GHA"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:16,sh2:14,so1:6,so2:5,co1:5,co2:4,fo1:14,fo2:18,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:20};
matchStats["2010|R16|GER|ENG"] = {p1:"51%",p2:"49%",ps1:486,ps2:468,sh1:17,sh2:15,so1:8,so2:5,co1:6,co2:6,fo1:11,fo2:14,os1:2,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:13,tk2:16};
matchStats["2010|R16|ARG|MEX"] = {p1:"48%",p2:"52%",ps1:458,ps2:496,sh1:15,sh2:13,so1:7,so2:4,co1:5,co2:5,fo1:13,fo2:14,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:15,tk2:18};
matchStats["2010|R16|NED|SVK"] = {p1:"54%",p2:"46%",ps1:514,ps2:438,sh1:16,sh2:11,so1:7,so2:4,co1:6,co2:4,fo1:14,fo2:16,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:14,tk2:17};
matchStats["2010|R16|BRA|CHI"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:15,sh2:14,so1:7,so2:4,co1:8,co2:5,fo1:16,fo2:17,os1:2,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:15,tk2:19};
matchStats["2010|R16|PAR|JPN"] = {p1:"44%",p2:"56%",ps1:418,ps2:534,sh1:12,sh2:14,so1:4,so2:5,co1:5,co2:6,fo1:18,fo2:14,os1:2,os2:3,yc1:1,yc2:3,rc1:0,rc2:0,tk1:17,tk2:15};
matchStats["2010|R16|ESP|POR"] = {p1:"61%",p2:"39%",ps1:582,ps2:372,sh1:19,sh2:11,so1:7,so2:4,co1:6,co2:4,fo1:13,fo2:17,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:1,tk1:14,tk2:18};
matchStats["2010|QF|NED|BRA"] = {p1:"47%",p2:"53%",ps1:448,ps2:506,sh1:12,sh2:14,so1:5,so2:6,co1:5,co2:8,fo1:20,fo2:18,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:1,tk1:16,tk2:15};
matchStats["2010|QF|URU|GHA"] = {p1:"46%",p2:"54%",ps1:438,ps2:514,sh1:16,sh2:18,so1:6,so2:5,co1:6,co2:8,fo1:20,fo2:21,os1:2,os2:4,yc1:2,yc2:3,rc1:0,rc2:1,tk1:18,tk2:16};
matchStats["2010|QF|ARG|GER"] = {p1:"46%",p2:"54%",ps1:438,ps2:514,sh1:12,sh2:18,so1:4,so2:7,co1:3,co2:7,fo1:17,fo2:13,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2010|QF|PAR|ESP"] = {p1:"32%",p2:"68%",ps1:304,ps2:648,sh1:6,sh2:16,so1:2,so2:6,co1:2,co2:8,fo1:18,fo2:14,os1:3,os2:2,yc1:4,yc2:2,rc1:0,rc2:0,tk1:22,tk2:12};
matchStats["2010|SF|URU|NED"] = {p1:"42%",p2:"58%",ps1:398,ps2:552,sh1:13,sh2:16,so1:5,so2:7,co1:4,co2:7,fo1:22,fo2:16,os1:2,os2:3,yc1:3,yc2:4,rc1:0,rc2:0,tk1:19,tk2:14};
matchStats["2010|SF|GER|ESP"] = {p1:"49%",p2:"51%",ps1:468,ps2:486,sh1:12,sh2:13,so1:4,so2:5,co1:6,co2:5,fo1:11,fo2:12,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2010|TP|URU|GER"] = {p1:"42%",p2:"58%",ps1:398,ps2:552,sh1:15,sh2:18,so1:7,so2:8,co1:6,co2:7,fo1:17,fo2:16,os1:2,os2:2,yc1:3,yc2:3,rc1:0,rc2:1,tk1:16,tk2:14};
matchStats["2006|R16|GER|SWE"] = {p1:"54%",p2:"46%",ps1:514,ps2:438,sh1:16,sh2:8,so1:6,so2:3,co1:7,co2:3,fo1:12,fo2:16,os1:2,os2:1,yc1:1,yc2:2,rc1:0,rc2:1,tk1:14,tk2:18};
matchStats["2006|R16|ARG|MEX"] = {p1:"49%",p2:"51%",ps1:468,ps2:486,sh1:14,sh2:12,so1:6,so2:4,co1:6,co2:5,fo1:17,fo2:15,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:18,tk2:17};
matchStats["2006|R16|ENG|ECU"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:14,sh2:10,so1:4,so2:3,co1:5,co2:4,fo1:14,fo2:18,os1:2,os2:2,yc1:3,yc2:3,rc1:0,rc2:0,tk1:16,tk2:20};
matchStats["2006|R16|POR|NED"] = {p1:"43%",p2:"57%",ps1:408,ps2:542,sh1:13,sh2:14,so1:5,so2:6,co1:5,co2:6,fo1:25,fo2:28,os1:3,os2:2,yc1:4,yc2:4,rc1:2,rc2:2,tk1:20,tk2:22};
matchStats["2006|R16|ITA|AUS"] = {p1:"56%",p2:"44%",ps1:534,ps2:418,sh1:16,sh2:9,so1:5,so2:3,co1:7,co2:3,fo1:17,fo2:16,os1:2,os2:1,yc1:3,yc2:3,rc1:1,rc2:0,tk1:14,tk2:18};
matchStats["2006|R16|SUI|UKR"] = {p1:"53%",p2:"47%",ps1:506,ps2:448,sh1:12,sh2:11,so1:3,so2:3,co1:5,co2:6,fo1:14,fo2:18,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2006|R16|BRA|GHA"] = {p1:"54%",p2:"46%",ps1:514,ps2:438,sh1:15,sh2:12,so1:7,so2:4,co1:7,co2:5,fo1:16,fo2:22,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:1,tk1:18,tk2:20};
matchStats["2006|R16|ESP|FRA"] = {p1:"56%",p2:"44%",ps1:534,ps2:418,sh1:12,sh2:9,so1:5,so2:4,co1:5,co2:4,fo1:19,fo2:22,os1:3,os2:2,yc1:2,yc2:3,rc1:0,rc2:0,tk1:16,tk2:17};
matchStats["2006|QF|GER|ARG"] = {p1:"44%",p2:"56%",ps1:418,ps2:534,sh1:13,sh2:12,so1:5,so2:4,co1:5,co2:6,fo1:21,fo2:23,os1:2,os2:3,yc1:3,yc2:4,rc1:0,rc2:1,tk1:18,tk2:16};
matchStats["2006|QF|ITA|UKR"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:14,sh2:10,so1:7,so2:3,co1:6,co2:4,fo1:14,fo2:16,os1:3,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:15,tk2:18};
matchStats["2006|QF|ENG|POR"] = {p1:"48%",p2:"52%",ps1:458,ps2:496,sh1:10,sh2:12,so1:4,so2:4,co1:5,co2:5,fo1:18,fo2:17,os1:3,os2:3,yc1:2,yc2:2,rc1:1,rc2:0,tk1:17,tk2:19};
matchStats["2006|QF|BRA|FRA"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:14,sh2:11,so1:5,so2:4,co1:7,co2:5,fo1:12,fo2:17,os1:2,os2:3,yc1:3,yc2:2,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2006|SF|GER|ITA"] = {p1:"45%",p2:"55%",ps1:428,ps2:522,sh1:13,sh2:15,so1:5,so2:7,co1:7,co2:6,fo1:19,fo2:18,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:17};
matchStats["2006|SF|POR|FRA"] = {p1:"46%",p2:"54%",ps1:438,ps2:514,sh1:9,sh2:12,so1:3,so2:5,co1:4,co2:6,fo1:18,fo2:11,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2006|TP|GER|POR"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:14,sh2:12,so1:6,so2:4,co1:6,co2:5,fo1:14,fo2:16,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:13,tk2:18};
matchStats["2002|R16|GER|PAR"] = {p1:"54%",p2:"46%",ps1:514,ps2:438,sh1:17,sh2:9,so1:7,so2:3,co1:7,co2:4,fo1:13,fo2:17,os1:3,os2:2,yc1:3,yc2:2,rc1:0,rc2:1,tk1:16,tk2:20};
matchStats["2002|R16|DEN|ENG"] = {p1:"48%",p2:"52%",ps1:458,ps2:496,sh1:9,sh2:13,so1:4,so2:6,co1:4,co2:6,fo1:14,fo2:13,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2002|R16|SWE|SEN"] = {p1:"53%",p2:"47%",ps1:506,ps2:448,sh1:14,sh2:13,so1:5,so2:5,co1:6,co2:5,fo1:16,fo2:18,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:17,tk2:18};
matchStats["2002|R16|ESP|IRL"] = {p1:"56%",p2:"44%",ps1:534,ps2:418,sh1:15,sh2:12,so1:6,so2:4,co1:8,co2:5,fo1:16,fo2:19,os1:3,os2:2,yc1:3,yc2:3,rc1:0,rc2:0,tk1:16,tk2:18};
matchStats["2002|R16|MEX|USA"] = {p1:"44%",p2:"56%",ps1:418,ps2:534,sh1:11,sh2:14,so1:3,so2:6,co1:4,co2:7,fo1:23,fo2:14,os1:2,os2:3,yc1:5,yc2:3,rc1:1,rc2:0,tk1:20,tk2:16};
matchStats["2002|R16|BRA|BEL"] = {p1:"55%",p2:"45%",ps1:524,ps2:428,sh1:16,sh2:11,so1:7,so2:4,co1:7,co2:5,fo1:15,fo2:13,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:14};
matchStats["2002|R16|JPN|TUR"] = {p1:"52%",p2:"48%",ps1:496,ps2:458,sh1:13,sh2:12,so1:4,so2:4,co1:6,co2:5,fo1:15,fo2:17,os1:2,os2:3,yc1:2,yc2:3,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2002|R16|KOR|ITA"] = {p1:"42%",p2:"58%",ps1:398,ps2:552,sh1:14,sh2:16,so1:5,so2:6,co1:5,co2:7,fo1:22,fo2:18,os1:3,os2:2,yc1:3,yc2:2,rc1:0,rc2:1,tk1:18,tk2:14};
matchStats["2002|QF|ENG|BRA"] = {p1:"42%",p2:"58%",ps1:398,ps2:552,sh1:9,sh2:13,so1:4,so2:6,co1:4,co2:7,fo1:14,fo2:12,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:1,tk1:18,tk2:14};
matchStats["2002|QF|GER|USA"] = {p1:"53%",p2:"47%",ps1:506,ps2:448,sh1:14,sh2:11,so1:6,so2:4,co1:8,co2:6,fo1:16,fo2:19,os1:2,os2:3,yc1:3,yc2:3,rc1:0,rc2:0,tk1:17,tk2:16};
matchStats["2002|QF|KOR|ESP"] = {p1:"42%",p2:"58%",ps1:398,ps2:552,sh1:12,sh2:15,so1:4,so2:5,co1:5,co2:7,fo1:18,fo2:14,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:19,tk2:16};
matchStats["2002|QF|TUR|SEN"] = {p1:"48%",p2:"52%",ps1:458,ps2:496,sh1:12,sh2:13,so1:4,so2:4,co1:5,co2:6,fo1:16,fo2:17,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:17,tk2:18};
matchStats["2002|SF|GER|KOR"] = {p1:"51%",p2:"49%",ps1:486,ps2:468,sh1:13,sh2:11,so1:5,so2:4,co1:8,co2:5,fo1:14,fo2:16,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:19};
matchStats["2002|SF|BRA|TUR"] = {p1:"54%",p2:"46%",ps1:514,ps2:438,sh1:15,sh2:12,so1:6,so2:4,co1:7,co2:5,fo1:16,fo2:17,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:15,tk2:18};
matchStats["2002|A|URU|DEN"] = {p1:"55%",p2:"45%",ps1:437,ps2:357,sh1:10,sh2:6,so1:4,so2:6,co1:3,co2:6,fo1:17,fo2:9,os1:0,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:13};
matchStats["2002|A|DEN|SEN"] = {p1:"49%",p2:"51%",ps1:367,ps2:381,sh1:6,sh2:8,so1:6,so2:2,co1:2,co2:3,fo1:8,fo2:8,os1:4,os2:3,yc1:2,yc2:2,rc1:0,rc2:1,tk1:12,tk2:17};
matchStats["2002|A|FRA|URU"] = {p1:"55%",p2:"45%",ps1:369,ps2:302,sh1:8,sh2:8,so1:4,so2:2,co1:7,co2:6,fo1:17,fo2:15,os1:1,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:16,tk2:11};
matchStats["2002|A|DEN|FRA"] = {p1:"47%",p2:"53%",ps1:409,ps2:462,sh1:14,sh2:10,so1:8,so2:5,co1:9,co2:2,fo1:18,fo2:10,os1:2,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:10,tk2:20};
matchStats["2002|A|SEN|URU"] = {p1:"48%",p2:"52%",ps1:318,ps2:345,sh1:11,sh2:7,so1:5,so2:5,co1:3,co2:4,fo1:19,fo2:12,os1:3,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:13,tk2:18};
matchStats["2002|B|PAR|RSA"] = {p1:"59%",p2:"41%",ps1:500,ps2:347,sh1:7,sh2:7,so1:3,so2:5,co1:5,co2:6,fo1:15,fo2:10,os1:4,os2:0,yc1:0,yc2:0,rc1:0,rc2:0,tk1:13,tk2:10};
matchStats["2002|B|ESP|SVN"] = {p1:"60%",p2:"40%",ps1:427,ps2:284,sh1:12,sh2:7,so1:7,so2:3,co1:6,co2:4,fo1:6,fo2:11,os1:4,os2:3,yc1:0,yc2:2,rc1:0,rc2:0,tk1:21,tk2:13};
matchStats["2002|B|ESP|PAR"] = {p1:"57%",p2:"43%",ps1:494,ps2:372,sh1:12,sh2:9,so1:7,so2:6,co1:5,co2:6,fo1:13,fo2:17,os1:0,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:17,tk2:17};
matchStats["2002|B|RSA|SVN"] = {p1:"46%",p2:"54%",ps1:333,ps2:390,sh1:12,sh2:10,so1:2,so2:4,co1:6,co2:1,fo1:13,fo2:10,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:19,tk2:21};
matchStats["2002|B|RSA|ESP"] = {p1:"40%",p2:"60%",ps1:359,ps2:538,sh1:10,sh2:12,so1:6,so2:7,co1:7,co2:5,fo1:19,fo2:9,os1:1,os2:1,yc1:2,yc2:0,rc1:0,rc2:0,tk1:19,tk2:13};
matchStats["2002|B|SVN|PAR"] = {p1:"43%",p2:"57%",ps1:317,ps2:421,sh1:5,sh2:10,so1:2,so2:5,co1:7,co2:5,fo1:9,fo2:8,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:15};
matchStats["2002|C|CHN|CRC"] = {p1:"45%",p2:"55%",ps1:382,ps2:466,sh1:11,sh2:8,so1:3,so2:4,co1:7,co2:6,fo1:14,fo2:13,os1:4,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:18,tk2:10};
matchStats["2002|C|BRA|CHN"] = {p1:"63%",p2:"37%",ps1:503,ps2:295,sh1:11,sh2:7,so1:7,so2:3,co1:8,co2:3,fo1:16,fo2:8,os1:4,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:17,tk2:20};
matchStats["2002|C|CRC|TUR"] = {p1:"51%",p2:"49%",ps1:334,ps2:320,sh1:4,sh2:10,so1:3,so2:4,co1:6,co2:1,fo1:12,fo2:11,os1:3,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:13,tk2:21};
matchStats["2002|C|CRC|BRA"] = {p1:"42%",p2:"58%",ps1:304,ps2:419,sh1:9,sh2:15,so1:7,so2:9,co1:2,co2:1,fo1:17,fo2:16,os1:0,os2:0,yc1:0,yc2:0,rc1:0,rc2:0,tk1:17,tk2:12};
matchStats["2002|C|TUR|CHN"] = {p1:"64%",p2:"36%",ps1:417,ps2:234,sh1:10,sh2:5,so1:8,so2:3,co1:8,co2:7,fo1:15,fo2:17,os1:4,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:18,tk2:10};
matchStats["2002|D|KOR|POL"] = {p1:"57%",p2:"43%",ps1:461,ps2:348,sh1:13,sh2:7,so1:6,so2:4,co1:5,co2:3,fo1:14,fo2:13,os1:1,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:16,tk2:11};
matchStats["2002|D|KOR|USA"] = {p1:"51%",p2:"49%",ps1:458,ps2:441,sh1:11,sh2:5,so1:3,so2:2,co1:6,co2:7,fo1:17,fo2:6,os1:1,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:13,tk2:21};
matchStats["2002|D|POR|POL"] = {p1:"56%",p2:"44%",ps1:393,ps2:308,sh1:7,sh2:9,so1:5,so2:2,co1:9,co2:2,fo1:8,fo2:18,os1:4,os2:2,yc1:0,yc2:2,rc1:1,rc2:0,tk1:13,tk2:14};
matchStats["2002|D|POR|KOR"] = {p1:"51%",p2:"49%",ps1:374,ps2:359,sh1:10,sh2:10,so1:1,so2:6,co1:2,co2:7,fo1:18,fo2:8,os1:0,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:19,tk2:13};
matchStats["2002|D|POL|USA"] = {p1:"44%",p2:"56%",ps1:288,ps2:366,sh1:10,sh2:10,so1:8,so2:5,co1:2,co2:2,fo1:15,fo2:12,os1:4,os2:2,yc1:2,yc2:0,rc1:0,rc2:1,tk1:11,tk2:18};
matchStats["2002|E|IRL|CMR"] = {p1:"45%",p2:"55%",ps1:301,ps2:368,sh1:10,sh2:10,so1:5,so2:2,co1:5,co2:7,fo1:19,fo2:12,os1:4,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:12,tk2:18};
matchStats["2002|E|GER|IRL"] = {p1:"61%",p2:"39%",ps1:405,ps2:259,sh1:9,sh2:9,so1:2,so2:4,co1:9,co2:2,fo1:10,fo2:17,os1:3,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:15,tk2:17};
matchStats["2002|E|CMR|KSA"] = {p1:"55%",p2:"45%",ps1:441,ps2:361,sh1:8,sh2:9,so1:3,so2:4,co1:8,co2:3,fo1:8,fo2:18,os1:4,os2:2,yc1:2,yc2:0,rc1:0,rc2:0,tk1:19,tk2:11};
matchStats["2002|E|CMR|GER"] = {p1:"43%",p2:"57%",ps1:358,ps2:474,sh1:6,sh2:6,so1:6,so2:6,co1:9,co2:6,fo1:14,fo2:17,os1:0,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2002|E|KSA|IRL"] = {p1:"50%",p2:"50%",ps1:410,ps2:410,sh1:9,sh2:7,so1:1,so2:7,co1:8,co2:5,fo1:17,fo2:19,os1:1,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:11,tk2:17};
matchStats["2002|F|ARG|NGA"] = {p1:"53%",p2:"47%",ps1:405,ps2:359,sh1:13,sh2:7,so1:5,so2:2,co1:8,co2:6,fo1:17,fo2:10,os1:3,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:13,tk2:15};
matchStats["2002|F|ENG|SWE"] = {p1:"50%",p2:"50%",ps1:326,ps2:326,sh1:13,sh2:5,so1:2,so2:2,co1:4,co2:3,fo1:17,fo2:7,os1:1,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:19,tk2:14};
matchStats["2002|F|SWE|NGA"] = {p1:"54%",p2:"46%",ps1:361,ps2:307,sh1:8,sh2:10,so1:8,so2:5,co1:8,co2:6,fo1:10,fo2:8,os1:2,os2:0,yc1:0,yc2:0,rc1:1,rc2:0,tk1:17,tk2:10};
matchStats["2002|F|SWE|ARG"] = {p1:"44%",p2:"56%",ps1:361,ps2:459,sh1:4,sh2:6,so1:4,so2:3,co1:3,co2:7,fo1:8,fo2:19,os1:4,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:20,tk2:20};
matchStats["2002|F|NGA|ENG"] = {p1:"42%",p2:"58%",ps1:347,ps2:478,sh1:8,sh2:7,so1:3,so2:1,co1:5,co2:6,fo1:10,fo2:18,os1:2,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:12,tk2:15};
matchStats["2002|G|CRO|MEX"] = {p1:"48%",p2:"52%",ps1:337,ps2:365,sh1:7,sh2:7,so1:2,so2:3,co1:7,co2:1,fo1:7,fo2:11,os1:1,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:15,tk2:12};
matchStats["2002|G|ITA|ECU"] = {p1:"58%",p2:"42%",ps1:457,ps2:331,sh1:13,sh2:2,so1:3,so2:2,co1:4,co2:7,fo1:11,fo2:6,os1:0,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:11,tk2:17};
matchStats["2002|G|ITA|CRO"] = {p1:"55%",p2:"45%",ps1:400,ps2:328,sh1:12,sh2:9,so1:6,so2:5,co1:6,co2:4,fo1:12,fo2:15,os1:3,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:20,tk2:19};
matchStats["2002|G|MEX|ECU"] = {p1:"56%",p2:"44%",ps1:393,ps2:308,sh1:5,sh2:9,so1:5,so2:3,co1:7,co2:7,fo1:15,fo2:12,os1:2,os2:3,yc1:0,yc2:2,rc1:0,rc2:0,tk1:17,tk2:20};
matchStats["2002|G|MEX|ITA"] = {p1:"46%",p2:"54%",ps1:305,ps2:357,sh1:6,sh2:3,so1:6,so2:3,co1:5,co2:3,fo1:7,fo2:6,os1:4,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:14,tk2:14};
matchStats["2002|G|ECU|CRO"] = {p1:"44%",p2:"56%",ps1:315,ps2:402,sh1:6,sh2:9,so1:6,so2:3,co1:4,co2:5,fo1:13,fo2:17,os1:0,os2:3,yc1:1,yc2:0,rc1:0,rc2:0,tk1:11,tk2:19};
matchStats["2002|H|JPN|BEL"] = {p1:"44%",p2:"56%",ps1:317,ps2:404,sh1:13,sh2:8,so1:4,so2:3,co1:8,co2:4,fo1:14,fo2:19,os1:3,os2:0,yc1:1,yc2:1,rc1:0,rc2:0,tk1:21,tk2:20};
matchStats["2002|H|RUS|TUN"] = {p1:"59%",p2:"41%",ps1:521,ps2:362,sh1:10,sh2:9,so1:8,so2:5,co1:2,co2:3,fo1:14,fo2:13,os1:2,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:14,tk2:10};
matchStats["2002|H|JPN|RUS"] = {p1:"49%",p2:"51%",ps1:326,ps2:339,sh1:10,sh2:9,so1:5,so2:4,co1:2,co2:2,fo1:11,fo2:19,os1:3,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:19,tk2:20};
matchStats["2002|H|TUN|BEL"] = {p1:"41%",p2:"59%",ps1:292,ps2:419,sh1:5,sh2:5,so1:5,so2:4,co1:6,co2:5,fo1:18,fo2:17,os1:3,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:19};
matchStats["2002|H|TUN|JPN"] = {p1:"41%",p2:"59%",ps1:268,ps2:386,sh1:9,sh2:8,so1:6,so2:6,co1:8,co2:4,fo1:6,fo2:14,os1:0,os2:0,yc1:1,yc2:0,rc1:1,rc2:0,tk1:14,tk2:11};
matchStats["2002|H|BEL|RUS"] = {p1:"52%",p2:"48%",ps1:447,ps2:413,sh1:11,sh2:12,so1:7,so2:3,co1:2,co2:5,fo1:19,fo2:10,os1:4,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:10,tk2:16};
matchStats["2006|A|POL|ECU"] = {p1:"47%",p2:"53%",ps1:345,ps2:390,sh1:7,sh2:6,so1:2,so2:3,co1:4,co2:5,fo1:7,fo2:12,os1:3,os2:1,yc1:2,yc2:0,rc1:0,rc2:0,tk1:12,tk2:20};
matchStats["2006|A|GER|POL"] = {p1:"60%",p2:"40%",ps1:476,ps2:317,sh1:9,sh2:6,so1:3,so2:5,co1:6,co2:2,fo1:7,fo2:15,os1:1,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:16,tk2:13};
matchStats["2006|A|ECU|CRC"] = {p1:"49%",p2:"51%",ps1:424,ps2:441,sh1:11,sh2:8,so1:7,so2:1,co1:7,co2:2,fo1:12,fo2:12,os1:2,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:17,tk2:19};
matchStats["2006|A|ECU|GER"] = {p1:"42%",p2:"58%",ps1:305,ps2:420,sh1:12,sh2:7,so1:3,so2:6,co1:6,co2:3,fo1:11,fo2:8,os1:1,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:10,tk2:13};
matchStats["2006|A|CRC|POL"] = {p1:"49%",p2:"51%",ps1:404,ps2:421,sh1:6,sh2:7,so1:6,so2:5,co1:4,co2:2,fo1:6,fo2:9,os1:2,os2:0,yc1:1,yc2:2,rc1:0,rc2:0,tk1:17,tk2:14};
matchStats["2006|B|ENG|PAR"] = {p1:"56%",p2:"44%",ps1:419,ps2:329,sh1:6,sh2:5,so1:4,so2:5,co1:5,co2:3,fo1:15,fo2:18,os1:1,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:14,tk2:20};
matchStats["2006|B|TRI|SWE"] = {p1:"39%",p2:"61%",ps1:330,ps2:516,sh1:4,sh2:3,so1:4,so2:1,co1:4,co2:6,fo1:11,fo2:15,os1:4,os2:1,yc1:2,yc2:0,rc1:1,rc2:1,tk1:16,tk2:14};
matchStats["2006|B|ENG|TRI"] = {p1:"63%",p2:"37%",ps1:419,ps2:246,sh1:12,sh2:5,so1:3,so2:4,co1:8,co2:1,fo1:7,fo2:16,os1:2,os2:0,yc1:1,yc2:2,rc1:0,rc2:0,tk1:19,tk2:12};
matchStats["2006|B|SWE|PAR"] = {p1:"48%",p2:"52%",ps1:362,ps2:393,sh1:11,sh2:6,so1:7,so2:4,co1:5,co2:1,fo1:18,fo2:15,os1:0,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:19};
matchStats["2006|B|SWE|ENG"] = {p1:"43%",p2:"57%",ps1:339,ps2:450,sh1:10,sh2:11,so1:8,so2:3,co1:8,co2:6,fo1:11,fo2:12,os1:4,os2:2,yc1:2,yc2:2,rc1:0,rc2:1,tk1:18,tk2:19};
matchStats["2006|B|PAR|TRI"] = {p1:"61%",p2:"39%",ps1:459,ps2:293,sh1:14,sh2:4,so1:8,so2:1,co1:6,co2:1,fo1:19,fo2:10,os1:2,os2:3,yc1:0,yc2:1,rc1:0,rc2:0,tk1:21,tk2:20};
matchStats["2006|C|SCG|NED"] = {p1:"42%",p2:"58%",ps1:368,ps2:507,sh1:5,sh2:8,so1:5,so2:6,co1:5,co2:5,fo1:14,fo2:17,os1:4,os2:2,yc1:0,yc2:1,rc1:0,rc2:0,tk1:20,tk2:21};
matchStats["2006|C|ARG|SCG"] = {p1:"57%",p2:"43%",ps1:385,ps2:291,sh1:12,sh2:6,so1:7,so2:5,co1:4,co2:3,fo1:11,fo2:15,os1:0,os2:1,yc1:0,yc2:2,rc1:0,rc2:0,tk1:12,tk2:19};
matchStats["2006|C|NED|CIV"] = {p1:"52%",p2:"48%",ps1:409,ps2:378,sh1:5,sh2:7,so1:5,so2:2,co1:8,co2:4,fo1:15,fo2:19,os1:0,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:19,tk2:14};
matchStats["2006|C|NED|ARG"] = {p1:"49%",p2:"51%",ps1:414,ps2:430,sh1:8,sh2:10,so1:2,so2:1,co1:6,co2:3,fo1:10,fo2:11,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:13,tk2:17};
matchStats["2006|C|CIV|SCG"] = {p1:"52%",p2:"48%",ps1:387,ps2:358,sh1:15,sh2:6,so1:9,so2:6,co1:2,co2:6,fo1:6,fo2:9,os1:0,os2:0,yc1:2,yc2:2,rc1:0,rc2:1,tk1:19,tk2:16};
matchStats["2006|D|MEX|IRN"] = {p1:"53%",p2:"47%",ps1:456,ps2:404,sh1:15,sh2:4,so1:7,so2:4,co1:2,co2:3,fo1:11,fo2:12,os1:2,os2:3,yc1:0,yc2:2,rc1:0,rc2:0,tk1:16,tk2:17};
matchStats["2006|D|ANG|POR"] = {p1:"37%",p2:"63%",ps1:327,ps2:556,sh1:5,sh2:9,so1:3,so2:3,co1:8,co2:5,fo1:11,fo2:7,os1:1,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:19,tk2:21};
matchStats["2006|D|MEX|ANG"] = {p1:"66%",p2:"34%",ps1:589,ps2:303,sh1:7,sh2:8,so1:1,so2:3,co1:3,co2:2,fo1:10,fo2:17,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:13,tk2:19};
matchStats["2006|D|POR|IRN"] = {p1:"58%",p2:"42%",ps1:426,ps2:309,sh1:11,sh2:5,so1:4,so2:5,co1:8,co2:6,fo1:18,fo2:19,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:20,tk2:20};
matchStats["2006|D|POR|MEX"] = {p1:"49%",p2:"51%",ps1:395,ps2:411,sh1:11,sh2:4,so1:3,so2:4,co1:6,co2:2,fo1:16,fo2:12,os1:4,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:10,tk2:19};
matchStats["2006|D|IRN|ANG"] = {p1:"58%",p2:"42%",ps1:494,ps2:358,sh1:10,sh2:9,so1:3,so2:6,co1:2,co2:1,fo1:12,fo2:19,os1:3,os2:2,yc1:0,yc2:0,rc1:0,rc2:0,tk1:18,tk2:20};
matchStats["2006|E|USA|CZE"] = {p1:"53%",p2:"47%",ps1:417,ps2:370,sh1:11,sh2:8,so1:2,so2:6,co1:2,co2:5,fo1:18,fo2:13,os1:2,os2:0,yc1:1,yc2:1,rc1:0,rc2:0,tk1:12,tk2:21};
matchStats["2006|E|ITA|USA"] = {p1:"53%",p2:"47%",ps1:448,ps2:397,sh1:7,sh2:8,so1:4,so2:6,co1:8,co2:4,fo1:15,fo2:8,os1:3,os2:0,yc1:2,yc2:1,rc1:0,rc2:0,tk1:15,tk2:19};
matchStats["2006|E|CZE|GHA"] = {p1:"48%",p2:"52%",ps1:376,ps2:408,sh1:8,sh2:5,so1:3,so2:5,co1:5,co2:5,fo1:7,fo2:6,os1:4,os2:2,yc1:2,yc2:2,rc1:1,rc2:0,tk1:13,tk2:21};
matchStats["2006|E|CZE|ITA"] = {p1:"43%",p2:"57%",ps1:319,ps2:423,sh1:6,sh2:8,so1:5,so2:7,co1:6,co2:4,fo1:13,fo2:15,os1:2,os2:0,yc1:1,yc2:2,rc1:0,rc2:0,tk1:13,tk2:13};
matchStats["2006|E|GHA|USA"] = {p1:"51%",p2:"49%",ps1:443,ps2:426,sh1:14,sh2:3,so1:3,so2:2,co1:3,co2:1,fo1:9,fo2:10,os1:3,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:20,tk2:17};
matchStats["2006|F|AUS|JPN"] = {p1:"45%",p2:"55%",ps1:389,ps2:475,sh1:12,sh2:5,so1:5,so2:5,co1:9,co2:6,fo1:9,fo2:11,os1:3,os2:1,yc1:0,yc2:2,rc1:0,rc2:0,tk1:19,tk2:16};
matchStats["2006|F|BRA|AUS"] = {p1:"60%",p2:"40%",ps1:491,ps2:328,sh1:11,sh2:5,so1:3,so2:1,co1:6,co2:3,fo1:15,fo2:18,os1:0,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:17,tk2:18};
matchStats["2006|F|JPN|CRO"] = {p1:"49%",p2:"51%",ps1:380,ps2:395,sh1:6,sh2:3,so1:5,so2:2,co1:8,co2:3,fo1:6,fo2:12,os1:0,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:17};
matchStats["2006|F|JPN|BRA"] = {p1:"47%",p2:"53%",ps1:324,ps2:366,sh1:10,sh2:12,so1:4,so2:9,co1:6,co2:2,fo1:17,fo2:14,os1:1,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:15,tk2:12};
matchStats["2006|F|CRO|AUS"] = {p1:"56%",p2:"44%",ps1:368,ps2:290,sh1:7,sh2:4,so1:7,so2:3,co1:5,co2:5,fo1:9,fo2:9,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:10};
matchStats["2006|G|KOR|TOG"] = {p1:"60%",p2:"40%",ps1:428,ps2:286,sh1:11,sh2:7,so1:7,so2:3,co1:9,co2:3,fo1:6,fo2:17,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:13,tk2:10};
matchStats["2006|G|FRA|SUI"] = {p1:"58%",p2:"42%",ps1:385,ps2:279,sh1:12,sh2:2,so1:1,so2:1,co1:7,co2:5,fo1:13,fo2:17,os1:2,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2006|G|FRA|KOR"] = {p1:"56%",p2:"44%",ps1:408,ps2:320,sh1:8,sh2:3,so1:3,so2:3,co1:5,co2:6,fo1:16,fo2:9,os1:2,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:15,tk2:19};
matchStats["2006|G|TOG|SUI"] = {p1:"34%",p2:"66%",ps1:266,ps2:517,sh1:10,sh2:8,so1:4,so2:7,co1:2,co2:6,fo1:12,fo2:19,os1:3,os2:0,yc1:0,yc2:2,rc1:0,rc2:0,tk1:21,tk2:12};
matchStats["2006|G|TOG|FRA"] = {p1:"36%",p2:"64%",ps1:303,ps2:540,sh1:12,sh2:7,so1:3,so2:6,co1:8,co2:2,fo1:6,fo2:7,os1:1,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:20,tk2:18};
matchStats["2006|G|SUI|KOR"] = {p1:"47%",p2:"53%",ps1:378,ps2:426,sh1:12,sh2:8,so1:3,so2:5,co1:9,co2:2,fo1:12,fo2:8,os1:3,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:21};
matchStats["2006|H|ESP|UKR"] = {p1:"56%",p2:"44%",ps1:436,ps2:343,sh1:15,sh2:7,so1:10,so2:2,co1:9,co2:3,fo1:8,fo2:15,os1:0,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:21,tk2:19};
matchStats["2006|H|TUN|KSA"] = {p1:"53%",p2:"47%",ps1:402,ps2:356,sh1:7,sh2:11,so1:5,so2:5,co1:7,co2:7,fo1:19,fo2:12,os1:3,os2:0,yc1:0,yc2:0,rc1:0,rc2:0,tk1:11,tk2:10};
matchStats["2006|H|ESP|TUN"] = {p1:"62%",p2:"38%",ps1:456,ps2:279,sh1:9,sh2:3,so1:4,so2:2,co1:2,co2:6,fo1:17,fo2:7,os1:1,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:17,tk2:20};
matchStats["2006|H|KSA|UKR"] = {p1:"50%",p2:"50%",ps1:357,ps2:356,sh1:10,sh2:11,so1:6,so2:8,co1:5,co2:4,fo1:6,fo2:12,os1:4,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:10,tk2:20};
matchStats["2006|H|KSA|ESP"] = {p1:"36%",p2:"64%",ps1:285,ps2:507,sh1:8,sh2:6,so1:6,so2:3,co1:3,co2:6,fo1:16,fo2:19,os1:2,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:19};
matchStats["2006|H|UKR|TUN"] = {p1:"54%",p2:"46%",ps1:403,ps2:344,sh1:10,sh2:6,so1:4,so2:3,co1:6,co2:2,fo1:12,fo2:7,os1:1,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:14,tk2:14};
matchStats["2010|A|URU|FRA"] = {p1:"47%",p2:"53%",ps1:418,ps2:472,sh1:12,sh2:8,so1:6,so2:1,co1:2,co2:6,fo1:19,fo2:18,os1:2,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:21,tk2:13};
matchStats["2010|A|RSA|URU"] = {p1:"42%",p2:"58%",ps1:366,ps2:505,sh1:11,sh2:6,so1:1,so2:6,co1:4,co2:5,fo1:16,fo2:15,os1:2,os2:0,yc1:0,yc2:2,rc1:0,rc2:0,tk1:21,tk2:12};
matchStats["2010|A|FRA|MEX"] = {p1:"50%",p2:"50%",ps1:355,ps2:354,sh1:7,sh2:10,so1:6,so2:4,co1:9,co2:5,fo1:18,fo2:12,os1:1,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:13,tk2:14};
matchStats["2010|A|MEX|URU"] = {p1:"48%",p2:"52%",ps1:394,ps2:427,sh1:11,sh2:8,so1:3,so2:2,co1:2,co2:3,fo1:6,fo2:8,os1:3,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:12,tk2:16};
matchStats["2010|A|FRA|RSA"] = {p1:"58%",p2:"42%",ps1:502,ps2:363,sh1:12,sh2:8,so1:5,so2:7,co1:9,co2:7,fo1:19,fo2:14,os1:2,os2:3,yc1:0,yc2:2,rc1:0,rc2:0,tk1:21,tk2:11};
matchStats["2010|B|KOR|GRE"] = {p1:"57%",p2:"43%",ps1:480,ps2:362,sh1:6,sh2:7,so1:3,so2:1,co1:3,co2:3,fo1:7,fo2:17,os1:2,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:14,tk2:17};
matchStats["2010|B|ARG|NGA"] = {p1:"57%",p2:"43%",ps1:393,ps2:297,sh1:9,sh2:2,so1:2,so2:2,co1:5,co2:4,fo1:6,fo2:19,os1:4,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2010|B|GRE|NGA"] = {p1:"44%",p2:"56%",ps1:362,ps2:461,sh1:9,sh2:9,so1:6,so2:6,co1:7,co2:3,fo1:17,fo2:9,os1:0,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:16,tk2:10};
matchStats["2010|B|NGA|KOR"] = {p1:"50%",p2:"50%",ps1:353,ps2:352,sh1:6,sh2:4,so1:3,so2:4,co1:8,co2:7,fo1:17,fo2:15,os1:0,os2:2,yc1:2,yc2:2,rc1:0,rc2:1,tk1:11,tk2:12};
matchStats["2010|B|GRE|ARG"] = {p1:"39%",p2:"61%",ps1:332,ps2:519,sh1:10,sh2:12,so1:1,so2:6,co1:8,co2:3,fo1:9,fo2:18,os1:2,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:15,tk2:18};
matchStats["2010|C|ALG|SVN"] = {p1:"51%",p2:"49%",ps1:390,ps2:374,sh1:9,sh2:3,so1:2,so2:3,co1:7,co2:6,fo1:18,fo2:13,os1:4,os2:3,yc1:1,yc2:0,rc1:0,rc2:0,tk1:17,tk2:20};
matchStats["2010|C|SVN|USA"] = {p1:"45%",p2:"55%",ps1:392,ps2:480,sh1:9,sh2:10,so1:7,so2:5,co1:5,co2:2,fo1:14,fo2:8,os1:2,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2010|C|ENG|ALG"] = {p1:"56%",p2:"44%",ps1:436,ps2:342,sh1:7,sh2:5,so1:1,so2:1,co1:8,co2:2,fo1:8,fo2:6,os1:2,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:10,tk2:20};
matchStats["2010|C|SVN|ENG"] = {p1:"38%",p2:"62%",ps1:266,ps2:435,sh1:8,sh2:3,so1:1,so2:2,co1:3,co2:3,fo1:10,fo2:12,os1:3,os2:3,yc1:1,yc2:0,rc1:0,rc2:0,tk1:18,tk2:18};
matchStats["2010|C|USA|ALG"] = {p1:"54%",p2:"46%",ps1:471,ps2:401,sh1:9,sh2:6,so1:6,so2:5,co1:9,co2:4,fo1:8,fo2:8,os1:3,os2:3,yc1:1,yc2:1,rc1:1,rc2:0,tk1:13,tk2:10};
matchStats["2010|D|SRB|GHA"] = {p1:"51%",p2:"49%",ps1:376,ps2:362,sh1:8,sh2:11,so1:4,so2:2,co1:9,co2:4,fo1:13,fo2:9,os1:4,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:11,tk2:12};
matchStats["2010|D|GER|SRB"] = {p1:"55%",p2:"45%",ps1:402,ps2:328,sh1:11,sh2:6,so1:6,so2:6,co1:7,co2:3,fo1:15,fo2:7,os1:2,os2:3,yc1:1,yc2:0,rc1:0,rc2:0,tk1:13,tk2:14};
matchStats["2010|D|GHA|AUS"] = {p1:"48%",p2:"52%",ps1:394,ps2:426,sh1:13,sh2:10,so1:7,so2:2,co1:7,co2:1,fo1:18,fo2:14,os1:3,os2:1,yc1:1,yc2:0,rc1:1,rc2:0,tk1:16,tk2:12};
matchStats["2010|D|GHA|GER"] = {p1:"47%",p2:"53%",ps1:372,ps2:420,sh1:12,sh2:10,so1:3,so2:3,co1:8,co2:5,fo1:13,fo2:6,os1:2,os2:0,yc1:0,yc2:0,rc1:0,rc2:0,tk1:14,tk2:16};
matchStats["2010|D|AUS|SRB"] = {p1:"51%",p2:"49%",ps1:370,ps2:356,sh1:8,sh2:11,so1:4,so2:4,co1:3,co2:6,fo1:14,fo2:8,os1:4,os2:1,yc1:0,yc2:0,rc1:0,rc2:1,tk1:20,tk2:18};
matchStats["2010|E|JPN|CMR"] = {p1:"52%",p2:"48%",ps1:381,ps2:351,sh1:12,sh2:8,so1:5,so2:4,co1:2,co2:4,fo1:10,fo2:18,os1:0,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:19,tk2:19};
matchStats["2010|E|NED|JPN"] = {p1:"56%",p2:"44%",ps1:469,ps2:368,sh1:8,sh2:10,so1:7,so2:2,co1:6,co2:6,fo1:11,fo2:11,os1:1,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:14};
matchStats["2010|E|CMR|DEN"] = {p1:"50%",p2:"50%",ps1:366,ps2:366,sh1:9,sh2:6,so1:5,so2:4,co1:4,co2:1,fo1:14,fo2:13,os1:2,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:20,tk2:13};
matchStats["2010|E|DEN|JPN"] = {p1:"52%",p2:"48%",ps1:382,ps2:353,sh1:4,sh2:9,so1:4,so2:8,co1:2,co2:1,fo1:14,fo2:10,os1:0,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:12,tk2:15};
matchStats["2010|E|CMR|NED"] = {p1:"39%",p2:"61%",ps1:310,ps2:486,sh1:5,sh2:5,so1:4,so2:4,co1:8,co2:2,fo1:12,fo2:16,os1:2,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:15,tk2:18};
matchStats["2010|F|ITA|PAR"] = {p1:"55%",p2:"45%",ps1:401,ps2:328,sh1:5,sh2:8,so1:4,so2:4,co1:3,co2:3,fo1:6,fo2:16,os1:4,os2:0,yc1:2,yc2:2,rc1:0,rc2:0,tk1:20,tk2:16};
matchStats["2010|F|NZL|SVK"] = {p1:"45%",p2:"55%",ps1:345,ps2:421,sh1:10,sh2:11,so1:2,so2:4,co1:5,co2:4,fo1:17,fo2:16,os1:1,os2:3,yc1:2,yc2:1,rc1:1,rc2:0,tk1:20,tk2:16};
matchStats["2010|F|SVK|PAR"] = {p1:"48%",p2:"52%",ps1:430,ps2:466,sh1:7,sh2:11,so1:1,so2:7,co1:3,co2:7,fo1:9,fo2:12,os1:1,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:10,tk2:12};
matchStats["2010|F|ITA|NZL"] = {p1:"61%",p2:"39%",ps1:399,ps2:255,sh1:13,sh2:6,so1:6,so2:2,co1:2,co2:7,fo1:7,fo2:9,os1:1,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:11,tk2:14};
matchStats["2010|F|SVK|ITA"] = {p1:"40%",p2:"60%",ps1:337,ps2:505,sh1:15,sh2:5,so1:8,so2:4,co1:3,co2:4,fo1:7,fo2:10,os1:2,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:11,tk2:20};
matchStats["2010|F|PAR|NZL"] = {p1:"57%",p2:"43%",ps1:506,ps2:381,sh1:4,sh2:3,so1:3,so2:2,co1:7,co2:7,fo1:17,fo2:13,os1:0,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:16,tk2:11};
matchStats["2010|G|CIV|POR"] = {p1:"47%",p2:"53%",ps1:348,ps2:393,sh1:9,sh2:4,so1:3,so2:1,co1:8,co2:4,fo1:13,fo2:8,os1:0,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:13,tk2:13};
matchStats["2010|G|BRA|PRK"] = {p1:"70%",p2:"30%",ps1:583,ps2:250,sh1:5,sh2:4,so1:3,so2:4,co1:6,co2:7,fo1:14,fo2:17,os1:1,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:13,tk2:16};
matchStats["2010|G|POR|PRK"] = {p1:"64%",p2:"36%",ps1:494,ps2:278,sh1:10,sh2:10,so1:10,so2:5,co1:2,co2:1,fo1:14,fo2:18,os1:1,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2010|G|POR|BRA"] = {p1:"47%",p2:"53%",ps1:344,ps2:388,sh1:7,sh2:2,so1:3,so2:2,co1:8,co2:4,fo1:12,fo2:17,os1:2,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:10,tk2:19};
matchStats["2010|G|PRK|CIV"] = {p1:"42%",p2:"58%",ps1:352,ps2:486,sh1:5,sh2:12,so1:4,so2:5,co1:7,co2:7,fo1:8,fo2:13,os1:1,os2:3,yc1:0,yc2:1,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2010|H|HON|CHI"] = {p1:"44%",p2:"56%",ps1:375,ps2:477,sh1:8,sh2:10,so1:5,so2:6,co1:5,co2:1,fo1:11,fo2:14,os1:2,os2:3,yc1:0,yc2:1,rc1:1,rc2:0,tk1:16,tk2:12};
matchStats["2010|H|CHI|SUI"] = {p1:"46%",p2:"54%",ps1:408,ps2:480,sh1:11,sh2:3,so1:5,so2:3,co1:6,co2:4,fo1:18,fo2:13,os1:4,os2:2,yc1:0,yc2:0,rc1:0,rc2:0,tk1:12,tk2:14};
matchStats["2010|H|ESP|HON"] = {p1:"62%",p2:"38%",ps1:459,ps2:282,sh1:5,sh2:6,so1:3,so2:2,co1:6,co2:4,fo1:6,fo2:18,os1:0,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:20,tk2:10};
matchStats["2010|H|CHI|ESP"] = {p1:"43%",p2:"57%",ps1:284,ps2:376,sh1:7,sh2:12,so1:5,so2:3,co1:4,co2:1,fo1:7,fo2:6,os1:1,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:10};
matchStats["2010|H|SUI|HON"] = {p1:"63%",p2:"37%",ps1:520,ps2:306,sh1:3,sh2:9,so1:3,so2:1,co1:3,co2:7,fo1:17,fo2:13,os1:4,os2:0,yc1:1,yc2:2,rc1:0,rc2:0,tk1:19,tk2:10};
matchStats["2014|A|MEX|CMR"] = {p1:"58%",p2:"42%",ps1:488,ps2:353,sh1:5,sh2:5,so1:5,so2:3,co1:7,co2:2,fo1:18,fo2:13,os1:1,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:17,tk2:17};
matchStats["2014|A|BRA|MEX"] = {p1:"55%",p2:"45%",ps1:393,ps2:321,sh1:4,sh2:5,so1:3,so2:4,co1:6,co2:5,fo1:10,fo2:11,os1:4,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:21,tk2:15};
matchStats["2014|A|CMR|CRO"] = {p1:"48%",p2:"52%",ps1:419,ps2:454,sh1:11,sh2:8,so1:6,so2:6,co1:8,co2:4,fo1:14,fo2:19,os1:2,os2:0,yc1:0,yc2:2,rc1:0,rc2:0,tk1:16,tk2:21};
matchStats["2014|A|CMR|BRA"] = {p1:"44%",p2:"56%",ps1:375,ps2:477,sh1:7,sh2:11,so1:6,so2:6,co1:4,co2:2,fo1:14,fo2:13,os1:2,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:13,tk2:14};
matchStats["2014|A|CRO|MEX"] = {p1:"49%",p2:"51%",ps1:368,ps2:384,sh1:6,sh2:12,so1:6,so2:6,co1:3,co2:5,fo1:19,fo2:11,os1:3,os2:0,yc1:2,yc2:2,rc1:0,rc2:0,tk1:10,tk2:18};
matchStats["2014|B|CHI|AUS"] = {p1:"47%",p2:"53%",ps1:327,ps2:369,sh1:13,sh2:9,so1:4,so2:3,co1:2,co2:4,fo1:10,fo2:16,os1:3,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:18,tk2:12};
matchStats["2014|B|ESP|CHI"] = {p1:"58%",p2:"42%",ps1:502,ps2:363,sh1:7,sh2:6,so1:4,so2:6,co1:8,co2:5,fo1:18,fo2:19,os1:0,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:16,tk2:10};
matchStats["2014|B|AUS|ESP"] = {p1:"46%",p2:"54%",ps1:395,ps2:463,sh1:7,sh2:5,so1:1,so2:4,co1:6,co2:3,fo1:16,fo2:19,os1:4,os2:3,yc1:1,yc2:2,rc1:1,rc2:0,tk1:20,tk2:19};
matchStats["2014|B|NED|CHI"] = {p1:"52%",p2:"48%",ps1:406,ps2:374,sh1:6,sh2:2,so1:6,so2:2,co1:9,co2:6,fo1:7,fo2:10,os1:3,os2:2,yc1:1,yc2:1,rc1:0,rc2:0,tk1:16,tk2:16};
matchStats["2014|C|COL|GRE"] = {p1:"53%",p2:"47%",ps1:398,ps2:353,sh1:10,sh2:8,so1:8,so2:1,co1:5,co2:1,fo1:19,fo2:17,os1:1,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:21,tk2:21};
matchStats["2014|C|CIV|JPN"] = {p1:"49%",p2:"51%",ps1:345,ps2:360,sh1:13,sh2:8,so1:6,so2:3,co1:9,co2:3,fo1:6,fo2:12,os1:4,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2014|C|COL|CIV"] = {p1:"54%",p2:"46%",ps1:470,ps2:401,sh1:7,sh2:10,so1:5,so2:3,co1:4,co2:5,fo1:15,fo2:14,os1:3,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:10,tk2:21};
matchStats["2014|C|JPN|GRE"] = {p1:"51%",p2:"49%",ps1:384,ps2:369,sh1:7,sh2:6,so1:4,so2:1,co1:6,co2:4,fo1:8,fo2:9,os1:2,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:15,tk2:20};
matchStats["2014|C|JPN|COL"] = {p1:"50%",p2:"50%",ps1:387,ps2:387,sh1:9,sh2:13,so1:2,so2:9,co1:8,co2:3,fo1:10,fo2:10,os1:4,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:14,tk2:18};
matchStats["2014|C|GRE|CIV"] = {p1:"48%",p2:"52%",ps1:407,ps2:441,sh1:8,sh2:6,so1:4,so2:2,co1:5,co2:3,fo1:13,fo2:14,os1:1,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:14,tk2:10};
matchStats["2014|D|URU|CRC"] = {p1:"53%",p2:"47%",ps1:410,ps2:363,sh1:12,sh2:13,so1:2,so2:8,co1:2,co2:3,fo1:12,fo2:8,os1:2,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:21,tk2:18};
matchStats["2014|D|ENG|ITA"] = {p1:"46%",p2:"54%",ps1:395,ps2:463,sh1:12,sh2:7,so1:2,so2:4,co1:3,co2:5,fo1:15,fo2:16,os1:2,os2:0,yc1:0,yc2:1,rc1:0,rc2:1,tk1:16,tk2:19};
matchStats["2014|D|ITA|CRC"] = {p1:"62%",p2:"38%",ps1:531,ps2:325,sh1:8,sh2:4,so1:4,so2:2,co1:9,co2:5,fo1:7,fo2:16,os1:0,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:10,tk2:15};
matchStats["2014|D|CRC|ENG"] = {p1:"45%",p2:"55%",ps1:399,ps2:487,sh1:5,sh2:3,so1:4,so2:2,co1:9,co2:2,fo1:10,fo2:11,os1:3,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:19,tk2:10};
matchStats["2014|E|SUI|ECU"] = {p1:"53%",p2:"47%",ps1:420,ps2:373,sh1:14,sh2:9,so1:4,so2:2,co1:3,co2:5,fo1:9,fo2:7,os1:4,os2:0,yc1:0,yc2:0,rc1:1,rc2:0,tk1:10,tk2:15};
matchStats["2014|E|FRA|HON"] = {p1:"62%",p2:"38%",ps1:519,ps2:318,sh1:6,sh2:9,so1:6,so2:1,co1:9,co2:2,fo1:6,fo2:11,os1:1,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:20,tk2:14};
matchStats["2014|E|SUI|FRA"] = {p1:"49%",p2:"51%",ps1:319,ps2:332,sh1:7,sh2:11,so1:3,so2:7,co1:6,co2:1,fo1:10,fo2:19,os1:3,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:12,tk2:19};
matchStats["2014|E|HON|ECU"] = {p1:"47%",p2:"53%",ps1:404,ps2:455,sh1:11,sh2:8,so1:4,so2:4,co1:5,co2:4,fo1:6,fo2:11,os1:2,os2:0,yc1:2,yc2:1,rc1:0,rc2:0,tk1:15,tk2:13};
matchStats["2014|E|HON|SUI"] = {p1:"43%",p2:"57%",ps1:360,ps2:478,sh1:10,sh2:7,so1:6,so2:7,co1:6,co2:5,fo1:18,fo2:12,os1:1,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:17,tk2:16};
matchStats["2014|E|ECU|FRA"] = {p1:"39%",p2:"61%",ps1:305,ps2:478,sh1:11,sh2:2,so1:6,so2:2,co1:5,co2:4,fo1:10,fo2:6,os1:3,os2:2,yc1:2,yc2:1,rc1:1,rc2:0,tk1:15,tk2:13};
matchStats["2014|F|ARG|BIH"] = {p1:"58%",p2:"42%",ps1:498,ps2:361,sh1:13,sh2:4,so1:4,so2:4,co1:2,co2:7,fo1:9,fo2:13,os1:3,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:13,tk2:10};
matchStats["2014|F|IRN|NGA"] = {p1:"52%",p2:"48%",ps1:362,ps2:334,sh1:5,sh2:3,so1:1,so2:3,co1:7,co2:2,fo1:6,fo2:16,os1:2,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:18,tk2:20};
matchStats["2014|F|ARG|IRN"] = {p1:"60%",p2:"40%",ps1:523,ps2:349,sh1:7,sh2:2,so1:3,so2:2,co1:7,co2:4,fo1:12,fo2:12,os1:0,os2:0,yc1:2,yc2:2,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2014|F|NGA|BIH"] = {p1:"56%",p2:"44%",ps1:451,ps2:354,sh1:5,sh2:7,so1:5,so2:2,co1:5,co2:3,fo1:13,fo2:14,os1:1,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:20,tk2:12};
matchStats["2014|F|NGA|ARG"] = {p1:"42%",p2:"58%",ps1:373,ps2:516,sh1:5,sh2:13,so1:5,so2:5,co1:2,co2:4,fo1:15,fo2:11,os1:3,os2:2,yc1:2,yc2:2,rc1:0,rc2:0,tk1:10,tk2:14};
matchStats["2014|F|BIH|IRN"] = {p1:"44%",p2:"56%",ps1:391,ps2:498,sh1:11,sh2:6,so1:8,so2:5,co1:9,co2:3,fo1:15,fo2:14,os1:2,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:21,tk2:13};
matchStats["2014|G|GHA|USA"] = {p1:"49%",p2:"51%",ps1:352,ps2:367,sh1:5,sh2:4,so1:5,so2:4,co1:8,co2:6,fo1:8,fo2:17,os1:0,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:21,tk2:13};
matchStats["2014|G|USA|POR"] = {p1:"49%",p2:"51%",ps1:386,ps2:402,sh1:7,sh2:7,so1:6,so2:5,co1:5,co2:6,fo1:6,fo2:19,os1:2,os2:0,yc1:2,yc2:1,rc1:0,rc2:0,tk1:10,tk2:15};
matchStats["2014|G|USA|GER"] = {p1:"41%",p2:"59%",ps1:318,ps2:457,sh1:9,sh2:8,so1:6,so2:4,co1:6,co2:3,fo1:18,fo2:9,os1:3,os2:2,yc1:2,yc2:0,rc1:0,rc2:0,tk1:21,tk2:16};
matchStats["2014|G|POR|GHA"] = {p1:"52%",p2:"48%",ps1:429,ps2:396,sh1:9,sh2:7,so1:6,so2:4,co1:4,co2:1,fo1:13,fo2:12,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:10,tk2:12};
matchStats["2014|H|BEL|ALG"] = {p1:"61%",p2:"39%",ps1:451,ps2:289,sh1:9,sh2:3,so1:5,so2:3,co1:2,co2:1,fo1:15,fo2:9,os1:4,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:11,tk2:17};
matchStats["2014|H|RUS|KOR"] = {p1:"51%",p2:"49%",ps1:348,ps2:334,sh1:5,sh2:9,so1:4,so2:3,co1:3,co2:1,fo1:6,fo2:15,os1:3,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:12,tk2:19};
matchStats["2014|H|BEL|RUS"] = {p1:"51%",p2:"49%",ps1:392,ps2:377,sh1:7,sh2:5,so1:6,so2:4,co1:8,co2:6,fo1:11,fo2:8,os1:2,os2:0,yc1:1,yc2:1,rc1:0,rc2:0,tk1:11,tk2:15};
matchStats["2014|H|KOR|ALG"] = {p1:"58%",p2:"42%",ps1:517,ps2:375,sh1:10,sh2:10,so1:5,so2:5,co1:3,co2:5,fo1:16,fo2:9,os1:0,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:11,tk2:12};
matchStats["2014|H|KOR|BEL"] = {p1:"48%",p2:"52%",ps1:354,ps2:384,sh1:4,sh2:9,so1:2,so2:5,co1:4,co2:4,fo1:16,fo2:11,os1:3,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:17,tk2:12};
matchStats["2014|H|ALG|RUS"] = {p1:"47%",p2:"53%",ps1:367,ps2:413,sh1:6,sh2:6,so1:3,so2:4,co1:2,co2:1,fo1:17,fo2:10,os1:1,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:19,tk2:15};
matchStats["2018|A|EGY|URU"] = {p1:"48%",p2:"52%",ps1:330,ps2:357,sh1:5,sh2:10,so1:5,so2:3,co1:5,co2:2,fo1:12,fo2:12,os1:3,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:11,tk2:20};
matchStats["2018|A|RUS|EGY"] = {p1:"54%",p2:"46%",ps1:367,ps2:312,sh1:9,sh2:7,so1:6,so2:2,co1:2,co2:2,fo1:7,fo2:12,os1:0,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:21,tk2:14};
matchStats["2018|A|URU|KSA"] = {p1:"58%",p2:"42%",ps1:405,ps2:293,sh1:6,sh2:10,so1:5,so2:2,co1:5,co2:1,fo1:7,fo2:17,os1:1,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:14,tk2:10};
matchStats["2018|A|URU|RUS"] = {p1:"52%",p2:"48%",ps1:366,ps2:337,sh1:9,sh2:9,so1:8,so2:5,co1:5,co2:7,fo1:15,fo2:8,os1:4,os2:2,yc1:2,yc2:2,rc1:1,rc2:0,tk1:16,tk2:13};
matchStats["2018|A|KSA|EGY"] = {p1:"42%",p2:"58%",ps1:343,ps2:473,sh1:10,sh2:4,so1:7,so2:3,co1:2,co2:1,fo1:15,fo2:18,os1:1,os2:0,yc1:1,yc2:1,rc1:0,rc2:0,tk1:10,tk2:18};
matchStats["2018|B|MAR|IRN"] = {p1:"53%",p2:"47%",ps1:412,ps2:365,sh1:3,sh2:7,so1:1,so2:5,co1:3,co2:7,fo1:12,fo2:10,os1:2,os2:2,yc1:0,yc2:0,rc1:0,rc2:0,tk1:18,tk2:16};
matchStats["2018|B|POR|MAR"] = {p1:"57%",p2:"43%",ps1:394,ps2:298,sh1:10,sh2:7,so1:7,so2:1,co1:9,co2:4,fo1:11,fo2:14,os1:1,os2:0,yc1:1,yc2:2,rc1:0,rc2:0,tk1:14,tk2:14};
matchStats["2018|B|IRN|ESP"] = {p1:"42%",p2:"58%",ps1:320,ps2:442,sh1:8,sh2:9,so1:4,so2:4,co1:9,co2:7,fo1:13,fo2:11,os1:2,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:21,tk2:20};
matchStats["2018|B|IRN|POR"] = {p1:"46%",p2:"54%",ps1:319,ps2:375,sh1:5,sh2:10,so1:2,so2:3,co1:7,co2:4,fo1:13,fo2:7,os1:1,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:18,tk2:19};
matchStats["2018|B|ESP|MAR"] = {p1:"54%",p2:"46%",ps1:468,ps2:398,sh1:13,sh2:4,so1:4,so2:4,co1:3,co2:3,fo1:18,fo2:17,os1:3,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:20,tk2:18};
matchStats["2018|C|PER|DEN"] = {p1:"47%",p2:"53%",ps1:392,ps2:442,sh1:5,sh2:11,so1:4,so2:5,co1:2,co2:2,fo1:18,fo2:6,os1:2,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:20,tk2:18};
matchStats["2018|C|DEN|AUS"] = {p1:"56%",p2:"44%",ps1:424,ps2:334,sh1:6,sh2:4,so1:3,so2:3,co1:9,co2:3,fo1:15,fo2:19,os1:4,os2:1,yc1:2,yc2:0,rc1:0,rc2:0,tk1:15,tk2:12};
matchStats["2018|C|FRA|PER"] = {p1:"60%",p2:"40%",ps1:490,ps2:326,sh1:11,sh2:10,so1:6,so2:4,co1:8,co2:2,fo1:7,fo2:11,os1:0,os2:1,yc1:0,yc2:1,rc1:0,rc2:1,tk1:10,tk2:13};
matchStats["2018|C|DEN|FRA"] = {p1:"50%",p2:"50%",ps1:361,ps2:360,sh1:3,sh2:9,so1:3,so2:1,co1:9,co2:2,fo1:7,fo2:6,os1:2,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:12,tk2:17};
matchStats["2018|C|AUS|PER"] = {p1:"55%",p2:"45%",ps1:477,ps2:390,sh1:10,sh2:10,so1:6,so2:3,co1:3,co2:5,fo1:19,fo2:17,os1:2,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:17,tk2:15};
matchStats["2018|D|CRO|NGA"] = {p1:"54%",p2:"46%",ps1:482,ps2:411,sh1:12,sh2:2,so1:4,so2:2,co1:3,co2:7,fo1:7,fo2:16,os1:4,os2:3,yc1:0,yc2:1,rc1:0,rc2:0,tk1:21,tk2:15};
matchStats["2018|D|NGA|ISL"] = {p1:"56%",p2:"44%",ps1:503,ps2:395,sh1:10,sh2:6,so1:8,so2:2,co1:3,co2:3,fo1:8,fo2:14,os1:2,os2:1,yc1:2,yc2:0,rc1:0,rc2:0,tk1:19,tk2:13};
matchStats["2018|D|ISL|CRO"] = {p1:"45%",p2:"55%",ps1:353,ps2:432,sh1:13,sh2:10,so1:3,so2:4,co1:8,co2:2,fo1:18,fo2:19,os1:0,os2:3,yc1:2,yc2:0,rc1:0,rc2:0,tk1:18,tk2:14};
matchStats["2018|E|CRC|SRB"] = {p1:"50%",p2:"50%",ps1:404,ps2:403,sh1:9,sh2:6,so1:2,so2:3,co1:2,co2:3,fo1:17,fo2:7,os1:3,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:20,tk2:20};
matchStats["2018|E|BRA|CRC"] = {p1:"60%",p2:"40%",ps1:535,ps2:357,sh1:13,sh2:10,so1:7,so2:3,co1:4,co2:4,fo1:9,fo2:16,os1:3,os2:0,yc1:0,yc2:0,rc1:0,rc2:0,tk1:10,tk2:15};
matchStats["2018|E|SRB|SUI"] = {p1:"45%",p2:"55%",ps1:380,ps2:465,sh1:12,sh2:7,so1:7,so2:5,co1:7,co2:4,fo1:15,fo2:6,os1:3,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:10,tk2:10};
matchStats["2018|E|SRB|BRA"] = {p1:"41%",p2:"59%",ps1:307,ps2:442,sh1:5,sh2:4,so1:1,so2:4,co1:7,co2:4,fo1:7,fo2:10,os1:4,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:17,tk2:12};
matchStats["2018|E|SUI|CRC"] = {p1:"52%",p2:"48%",ps1:410,ps2:379,sh1:7,sh2:4,so1:7,so2:4,co1:8,co2:4,fo1:12,fo2:8,os1:2,os2:2,yc1:1,yc2:2,rc1:0,rc2:1,tk1:17,tk2:20};
matchStats["2018|F|SWE|KOR"] = {p1:"49%",p2:"51%",ps1:322,ps2:336,sh1:7,sh2:3,so1:7,so2:2,co1:5,co2:4,fo1:18,fo2:16,os1:2,os2:2,yc1:0,yc2:1,rc1:0,rc2:0,tk1:17,tk2:17};
matchStats["2018|F|KOR|MEX"] = {p1:"45%",p2:"55%",ps1:391,ps2:477,sh1:12,sh2:11,so1:7,so2:5,co1:9,co2:3,fo1:9,fo2:17,os1:3,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:14,tk2:21};
matchStats["2018|F|MEX|SWE"] = {p1:"51%",p2:"49%",ps1:413,ps2:397,sh1:3,sh2:7,so1:3,so2:6,co1:9,co2:5,fo1:12,fo2:11,os1:4,os2:1,yc1:0,yc2:2,rc1:0,rc2:0,tk1:11,tk2:11};
matchStats["2018|G|BEL|PAN"] = {p1:"65%",p2:"35%",ps1:553,ps2:297,sh1:12,sh2:10,so1:5,so2:5,co1:7,co2:6,fo1:9,fo2:12,os1:0,os2:0,yc1:2,yc2:0,rc1:0,rc2:0,tk1:21,tk2:13};
matchStats["2018|G|TUN|ENG"] = {p1:"40%",p2:"60%",ps1:353,ps2:530,sh1:10,sh2:8,so1:3,so2:4,co1:3,co2:1,fo1:17,fo2:9,os1:3,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:18,tk2:15};
matchStats["2018|G|PAN|TUN"] = {p1:"48%",p2:"52%",ps1:316,ps2:343,sh1:8,sh2:12,so1:4,so2:5,co1:5,co2:4,fo1:12,fo2:8,os1:2,os2:1,yc1:0,yc2:2,rc1:0,rc2:0,tk1:17,tk2:11};
matchStats["2018|H|POL|SEN"] = {p1:"49%",p2:"51%",ps1:342,ps2:356,sh1:4,sh2:4,so1:4,so2:4,co1:7,co2:7,fo1:19,fo2:13,os1:1,os2:3,yc1:0,yc2:1,rc1:0,rc2:0,tk1:20,tk2:14};
matchStats["2018|H|POL|COL"] = {p1:"44%",p2:"56%",ps1:367,ps2:467,sh1:7,sh2:8,so1:5,so2:8,co1:7,co2:7,fo1:19,fo2:10,os1:1,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:14,tk2:12};
matchStats["2018|H|JPN|POL"] = {p1:"57%",p2:"43%",ps1:511,ps2:385,sh1:6,sh2:5,so1:4,so2:5,co1:3,co2:3,fo1:14,fo2:11,os1:2,os2:0,yc1:0,yc2:0,rc1:0,rc2:1,tk1:14,tk2:13};
matchStats["2018|H|SEN|COL"] = {p1:"47%",p2:"53%",ps1:388,ps2:437,sh1:10,sh2:6,so1:2,so2:6,co1:7,co2:7,fo1:9,fo2:8,os1:1,os2:1,yc1:2,yc2:1,rc1:1,rc2:0,tk1:13,tk2:16};
matchStats["2022|A|QAT|SEN"] = {p1:"45%",p2:"55%",ps1:346,ps2:422,sh1:6,sh2:8,so1:4,so2:5,co1:2,co2:3,fo1:11,fo2:7,os1:2,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:21,tk2:18};
matchStats["2022|A|NED|ECU"] = {p1:"60%",p2:"40%",ps1:499,ps2:332,sh1:10,sh2:8,so1:2,so2:3,co1:7,co2:1,fo1:6,fo2:16,os1:0,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:10,tk2:10};
matchStats["2022|A|ECU|SEN"] = {p1:"48%",p2:"52%",ps1:342,ps2:370,sh1:5,sh2:11,so1:5,so2:4,co1:7,co2:3,fo1:16,fo2:13,os1:3,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:10,tk2:12};
matchStats["2022|A|NED|QAT"] = {p1:"62%",p2:"38%",ps1:520,ps2:318,sh1:10,sh2:10,so1:4,so2:5,co1:3,co2:2,fo1:15,fo2:7,os1:1,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:19,tk2:17};
matchStats["2022|B|WAL|IRN"] = {p1:"49%",p2:"51%",ps1:377,ps2:393,sh1:6,sh2:10,so1:5,so2:7,co1:3,co2:1,fo1:11,fo2:17,os1:2,os2:1,yc1:2,yc2:0,rc1:0,rc2:0,tk1:13,tk2:17};
matchStats["2022|B|ENG|USA"] = {p1:"51%",p2:"49%",ps1:457,ps2:439,sh1:6,sh2:10,so1:2,so2:5,co1:5,co2:2,fo1:17,fo2:19,os1:3,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:17,tk2:13};
matchStats["2022|B|WAL|ENG"] = {p1:"40%",p2:"60%",ps1:308,ps2:461,sh1:5,sh2:8,so1:2,so2:7,co1:8,co2:3,fo1:11,fo2:10,os1:1,os2:1,yc1:0,yc2:1,rc1:0,rc2:0,tk1:18,tk2:11};
matchStats["2022|B|IRN|USA"] = {p1:"49%",p2:"51%",ps1:354,ps2:368,sh1:6,sh2:11,so1:5,so2:3,co1:8,co2:2,fo1:13,fo2:18,os1:0,os2:2,yc1:1,yc2:2,rc1:0,rc2:0,tk1:20,tk2:12};
matchStats["2022|C|MEX|POL"] = {p1:"54%",p2:"46%",ps1:471,ps2:402,sh1:11,sh2:8,so1:2,so2:3,co1:8,co2:6,fo1:12,fo2:13,os1:1,os2:0,yc1:2,yc2:2,rc1:0,rc2:0,tk1:18,tk2:11};
matchStats["2022|C|POL|KSA"] = {p1:"55%",p2:"45%",ps1:452,ps2:370,sh1:11,sh2:10,so1:7,so2:2,co1:7,co2:5,fo1:13,fo2:7,os1:1,os2:3,yc1:2,yc2:2,rc1:0,rc2:0,tk1:19,tk2:12};
matchStats["2022|C|POL|ARG"] = {p1:"41%",p2:"59%",ps1:361,ps2:520,sh1:5,sh2:9,so1:5,so2:3,co1:8,co2:4,fo1:10,fo2:8,os1:4,os2:0,yc1:0,yc2:1,rc1:0,rc2:0,tk1:15,tk2:10};
matchStats["2022|C|KSA|MEX"] = {p1:"44%",p2:"56%",ps1:369,ps2:469,sh1:11,sh2:5,so1:7,so2:4,co1:4,co2:1,fo1:6,fo2:6,os1:1,os2:1,yc1:1,yc2:1,rc1:0,rc2:0,tk1:11,tk2:12};
matchStats["2022|D|DEN|TUN"] = {p1:"57%",p2:"43%",ps1:435,ps2:328,sh1:10,sh2:10,so1:2,so2:5,co1:5,co2:4,fo1:16,fo2:8,os1:0,os2:2,yc1:2,yc2:0,rc1:0,rc2:0,tk1:16,tk2:12};
matchStats["2022|D|TUN|AUS"] = {p1:"43%",p2:"57%",ps1:330,ps2:438,sh1:9,sh2:3,so1:2,so2:3,co1:2,co2:3,fo1:14,fo2:7,os1:2,os2:2,yc1:0,yc2:0,rc1:0,rc2:0,tk1:13,tk2:15};
matchStats["2022|D|AUS|DEN"] = {p1:"50%",p2:"50%",ps1:353,ps2:353,sh1:12,sh2:5,so1:4,so2:2,co1:8,co2:4,fo1:14,fo2:17,os1:3,os2:0,yc1:2,yc2:1,rc1:0,rc2:1,tk1:16,tk2:12};
matchStats["2022|D|TUN|FRA"] = {p1:"40%",p2:"60%",ps1:301,ps2:452,sh1:7,sh2:2,so1:5,so2:2,co1:5,co2:3,fo1:10,fo2:16,os1:1,os2:3,yc1:2,yc2:1,rc1:0,rc2:0,tk1:15,tk2:15};
matchStats["2022|E|ESP|CRC"] = {p1:"61%",p2:"39%",ps1:437,ps2:279,sh1:19,sh2:7,so1:10,so2:1,co1:5,co2:2,fo1:17,fo2:8,os1:4,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:13,tk2:12};
matchStats["2022|E|JPN|CRC"] = {p1:"56%",p2:"44%",ps1:376,ps2:295,sh1:8,sh2:6,so1:2,so2:2,co1:4,co2:1,fo1:7,fo2:18,os1:0,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:18,tk2:15};
matchStats["2022|E|CRC|GER"] = {p1:"42%",p2:"58%",ps1:339,ps2:468,sh1:7,sh2:8,so1:4,so2:7,co1:5,co2:7,fo1:16,fo2:11,os1:0,os2:3,yc1:0,yc2:1,rc1:1,rc2:0,tk1:20,tk2:13};
matchStats["2022|F|MAR|CRO"] = {p1:"46%",p2:"54%",ps1:335,ps2:393,sh1:8,sh2:6,so1:4,so2:3,co1:8,co2:4,fo1:6,fo2:16,os1:1,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:10,tk2:21};
matchStats["2022|F|BEL|MAR"] = {p1:"51%",p2:"49%",ps1:430,ps2:414,sh1:11,sh2:7,so1:2,so2:3,co1:4,co2:3,fo1:8,fo2:19,os1:2,os2:3,yc1:0,yc2:2,rc1:0,rc2:0,tk1:16,tk2:10};
matchStats["2022|F|CRO|CAN"] = {p1:"57%",p2:"43%",ps1:447,ps2:337,sh1:13,sh2:7,so1:8,so2:2,co1:4,co2:5,fo1:9,fo2:14,os1:2,os2:2,yc1:2,yc2:1,rc1:0,rc2:0,tk1:18,tk2:13};
matchStats["2022|F|CAN|MAR"] = {p1:"49%",p2:"51%",ps1:356,ps2:370,sh1:4,sh2:8,so1:4,so2:3,co1:9,co2:1,fo1:16,fo2:16,os1:3,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:18,tk2:20};
matchStats["2022|G|SUI|CMR"] = {p1:"52%",p2:"48%",ps1:421,ps2:389,sh1:9,sh2:2,so1:5,so2:2,co1:7,co2:2,fo1:14,fo2:6,os1:3,os2:0,yc1:2,yc2:2,rc1:1,rc2:0,tk1:14,tk2:15};
matchStats["2022|G|BRA|SUI"] = {p1:"58%",p2:"42%",ps1:445,ps2:323,sh1:4,sh2:8,so1:4,so2:4,co1:6,co2:6,fo1:14,fo2:7,os1:0,os2:2,yc1:0,yc2:1,rc1:0,rc2:0,tk1:19,tk2:16};
matchStats["2022|G|SRB|SUI"] = {p1:"51%",p2:"49%",ps1:422,ps2:405,sh1:6,sh2:12,so1:5,so2:8,co1:6,co2:2,fo1:16,fo2:6,os1:3,os2:1,yc1:1,yc2:1,rc1:1,rc2:0,tk1:13,tk2:11};
matchStats["2022|G|CMR|BRA"] = {p1:"37%",p2:"63%",ps1:269,ps2:457,sh1:11,sh2:2,so1:3,so2:2,co1:3,co2:4,fo1:19,fo2:19,os1:3,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:19,tk2:15};
matchStats["2022|H|URU|KOR"] = {p1:"53%",p2:"47%",ps1:446,ps2:396,sh1:9,sh2:2,so1:5,so2:1,co1:4,co2:6,fo1:16,fo2:7,os1:0,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:21,tk2:15};
matchStats["2022|H|KOR|GHA"] = {p1:"49%",p2:"51%",ps1:398,ps2:415,sh1:10,sh2:12,so1:7,so2:4,co1:3,co2:3,fo1:16,fo2:19,os1:0,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:16,tk2:15};
matchStats["2022|H|POR|URU"] = {p1:"48%",p2:"52%",ps1:333,ps2:361,sh1:14,sh2:9,so1:4,so2:1,co1:4,co2:2,fo1:6,fo2:8,os1:2,os2:3,yc1:0,yc2:2,rc1:0,rc2:0,tk1:10,tk2:15};
matchStats["2022|H|GHA|URU"] = {p1:"48%",p2:"52%",ps1:336,ps2:364,sh1:11,sh2:6,so1:4,so2:3,co1:5,co2:5,fo1:14,fo2:15,os1:2,os2:2,yc1:0,yc2:2,rc1:0,rc2:0,tk1:18,tk2:21};

// ========== 2026世界杯 已完成比赛数据 ==========
// ⚠️ 进球时间 min 字段录入规范：
//   常规进球 → 数字类型：  { min: 62, ... }
//   补时进球 → 字符串类型：{ min: "90+3", ... }  ← "+" 是语义符号，不是数学加号
//   补时阶段仅四类：45+ / 90+ / 105+ / 120+
//   禁止将补时写成数字（如 93 替代 "90+3"），否则小组赛无加时的场景会统计错误。
const wc2026MatchDetails = {
  "2026|A|MEX|RSA": {
    score: { sh: 2, sa: 0 },
    goals: [
      { min: 9, side: "home", scorer: "基尼奥内斯 (Julián Quiñones)", type: "shot", assist: "埃里克·利拉 (Érik Lira)" },
      { min: 67, side: "home", scorer: "R.希门尼斯 (Raúl Jiménez)", type: "header", assist: "罗伯托·阿尔瓦拉多 (Roberto Alvarado)" }
    ],
    cards: {
      home: { yellow: 1, red: 1 },
      away: { yellow: 2, red: 2 }
    },
    attendance: 87523,
    referee: "Wilton Sampaio (BRA)"
  },
  "2026|A|KOR|CZE": {
    score: { sh: 2, sa: 1 },
    goals: [
      { min: 59, side: "away", scorer: "拉吉斯拉夫·克雷伊奇 (Ladislav Krejčí)", type: "header" },
      { min: 67, side: "home", scorer: "黄仁范 (Hwang In-beom)", type: "shot" },
      { min: 80, side: "home", scorer: "吴贤揆 (Oh Hyeon-gyu)", type: "shot", assist: "黄仁范 (Hwang In-beom)" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: 62345,
    referee: "Daniele Orsato (ITA)"
  },

  "2026|A|CZE|RSA": {
    score: { sh: 1, sa: 1 },
    goals: [
      { min: 6,  side: "home", scorer: "萨迪莱克 (Lukáš Sadílek)", type: "shot" },
      { min: 83, side: "away", scorer: "莫科纳 (Teboho Mokoena)",  type: "penalty" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 2, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|A|MEX|KOR": {
    score: { sh: 1, sa: 0 },
    goals: [
      { min: 50, side: "home", scorer: "罗莫 (Luis Romo)", type: "shot" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 2, red: 0 }
    },
    attendance: 45522,
    referee: "Gustavo Tejera (URU)"
  },
  "2026|B|CAN|BIH": {
    score: { sh: 1, sa: 1 },
    goals: [
      { min: 21, side: "away", scorer: "约沃·卢基奇 (Jovo Lukić)", type: "header" },
      { min: 78, side: "home", scorer: "赛尔·拉林 (Cyle Larin)", type: "shot" }
    ],
    cards: {
      home: { yellow: 2, red: 0 },
      away: { yellow: 3, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|B|SUI|BIH": {
    score: { sh: 4, sa: 1 },
    goals: [
      { min: 74,    side: "home", scorer: "曼赞比 (Meschack Manzambi)",      type: "shot", assist: "鲁本·巴尔加斯 (Rubén Vargas)" },
      { min: 84,    side: "home", scorer: "巴尔加斯 (Rubén Vargas)",         type: "shot" },
      { min: 90,    side: "home", scorer: "曼赞比 (Meschack Manzambi)",      type: "shot" },
      { min: "90+3",side: "away", scorer: "马赫米奇 (Amar Mahmić)",          type: "shot" },
      { min: "90+7",side: "home", scorer: "扎卡 (Granit Xhaka)",             type: "penalty" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 2, red: 1 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|B|CAN|QAT": {
    score: { sh: 6, sa: 0 },
    goals: [
      { min: 16,    side: "home", scorer: "拉林 (Cyle Larin)",           type: "shot" },
      { min: 29,    side: "home", scorer: "戴维 (Jonathan David)",       type: "shot" },
      { min: "45+3",side: "home", scorer: "戴维 (Jonathan David)",       type: "shot" },
      { min: 64,    side: "home", scorer: "萨利巴 (Saliba)",             type: "free_kick" },
      { min: 75,    side: "home", scorer: "马纳伊 (Mohamed Manai)",      type: "own_goal" },
      { min: "90+2",side: "home", scorer: "戴维 (Jonathan David)",       type: "shot" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 1, red: 2 }
    },
    attendance: null,
    referee: "Cristián Garay (CHI)"
  },
  "2026|D|USA|PAR": {
    score: { sh: 4, sa: 1 },
    goals: [
      { min: 8, side: "home", scorer: "达米安·博瓦迪利亚 (Damián Bobadilla)", type: "own_goal" },
      { min: 31, side: "home", scorer: "巴洛贡 (Folarin Balogun)", type: "shot", assist: "普利西奇 (Christian Pulisic)" },
      { min: 50, side: "home", scorer: "巴洛贡 (Folarin Balogun)", type: "shot" },
      { min: 74, side: "away", scorer: "毛里西奥·普拉多 (Mauricio Prado)", type: "shot", assist: "恩西索 (Julio Enciso)" },
      { min: "90+8", side: "home", scorer: "雷纳 (Giovanni Reyna)", type: "shot", assist: "马利克·蒂尔曼 (Malik Tillman)" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 5, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|B|QAT|SUI": {
    score: { sh: 1, sa: 1 },
    goals: [
      { min: 17, side: "away", scorer: "恩博洛 (Breel Embolo)", type: "penalty" },
      { min: "90+5", side: "home", scorer: "胡希 (Boualem Khoukhi)", type: "header" }
    ],
    cards: {
      home: { yellow: 2, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|C|BRA|MAR": {
    score: { sh: 1, sa: 1 },
    goals: [
      { min: 21, side: "away", scorer: "萨伊瓦里 (Ismael Saibari)", type: "shot" },
      { min: 32, side: "home", scorer: "维尼修斯 (Vinícius Júnior)", type: "shot", assist: "布鲁诺·吉马良斯 (Bruno Guimarães)" }
    ],
    cards: {
      home: { yellow: 2, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|C|HAI|SCO": {
    score: { sh: 0, sa: 1 },
    goals: [
      { min: 28, side: "away", scorer: "麦金 (John McGinn)", type: "shot" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 3, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|C|SCO|MAR": {
    score: { sh: 0, sa: 1 },
    goals: [
      { min: 2, side: "away", scorer: "赛巴里 (Ismael Saibari)", type: "shot" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "Ilgiz Tantashev (UZB)"
  },

  "2026|C|BRA|HAI": {
    score: { sh: 3, sa: 0 },
    goals: [
      { min: 23,    side: "home", scorer: "库尼亚 (Matheus Cunha)",       type: "shot" },
      { min: 36,    side: "home", scorer: "库尼亚 (Matheus Cunha)",       type: "shot" },
      { min: "45+3",side: "home", scorer: "维尼修斯 (Vinícius Júnior)",   type: "shot" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 3, red: 0 }
    },
    attendance: 68324,
    referee: "Alejandro Hernández Hernández (ESP)"
  },
  "2026|D|AUS|TUR": {
    score: { sh: 2, sa: 0 },
    goals: [
      { min: 27, side: "home", scorer: "伊兰昆达 (Nestory Irankunda)", type: "shot" },
      { min: 75, side: "home", scorer: "梅特卡夫 (Connor Metcalfe)", type: "shot" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|D|USA|AUS": {
    score: { sh: 2, sa: 0 },
    goals: [
      { min: 11, side: "home", scorer: "伯吉斯 (Cameron Burgess)", type: "own_goal", assist: "塞尔吉诺·德斯特 (Sergiño Dest)" },
      { min: 43, side: "home", scorer: "弗里曼 (Freeman)",          type: "header" }
    ],
    cards: {
      home: { yellow: 3, red: 0 },
      away: { yellow: 4, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|D|TUR|PAR": {
    score: { sh: 0, sa: 1 },
    goals: [
      { min: 2, side: "away", scorer: "加拉尔塞 (Matías Galarza)", type: "shot" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 1, red: 1 }
    },
    attendance: 68827,
    referee: "Iván Barton (SLV)"
  },
  "2026|E|GER|CUW": {
    score: { sh: 7, sa: 1 },
    goals: [
      { min: 6, side: "home", scorer: "费利克斯·恩梅查 (Felix Nmecha)", type: "shot" },
      { min: 21, side: "away", scorer: "利瓦诺·科梅内西亚 (Livano Comenencia)", type: "shot" },
      { min: 38, side: "home", scorer: "尼科·施洛特贝克 (Nico Schlotterbeck)", type: "header" },
      { min: 50, side: "home", scorer: "凯·哈弗茨 (Kai Havertz)", type: "penalty" },
      { min: 47, side: "home", scorer: "贾马尔·穆西亚拉 (Jamal Musiala)", type: "shot" },
      { min: 68, side: "home", scorer: "纳撒尼尔·布朗 (Nathaniel Brown)", type: "shot" },
      { min: 78, side: "home", scorer: "德尼茨·翁达夫 (Deniz Undav)", type: "shot" },
      { min: 88, side: "home", scorer: "凯·哈弗茨 (Kai Havertz)", type: "shot" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|F|NED|JPN": {
    score: { sh: 2, sa: 2 },
    goals: [
      { min: 51, side: "home", scorer: "维吉尔·范戴克 (Virgil van Dijk)", type: "header" },
      { min: 57, side: "away", scorer: "中村敬斗 (Keito Nakamura)", type: "shot" },
      { min: 64, side: "home", scorer: "克莱森西奥·萨默维尔 (Crysencio Summerville)", type: "shot" },
      { min: 88, side: "away", scorer: "镰田大地 (Daichi Kamada)", type: "header" }
    ],
    cards: {
      home: { yellow: 3, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|E|CIV|ECU": {
    score: { sh: 1, sa: 0 },
    goals: [
      { min: 90, side: "home", scorer: "迪亚洛 (Amad Diallo)", type: "shot", assist: "威尔弗里德·辛戈 (Wilfried Singo)" }
    ],
    cards: {
      home: { yellow: 3, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|E|GER|CIV": {
    score: { sh: 2, sa: 1 },
    goals: [
      { min: 30,    side: "away", scorer: "凯西 (Franck Kessié)",       type: "shot" },
      { min: 68,    side: "home", scorer: "翁达夫 (Deniz Undav)",       type: "shot", assist: "纳迪姆·阿米里 (Nadiem Amiri)" },
      { min: "90+4",side: "home", scorer: "翁达夫 (Deniz Undav)",       type: "shot", assist: "费利克斯·恩梅查 (Felix Nmecha)" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: 43036,
    referee: "Juan Gabriel Benítez (PAR)"
  },

  "2026|E|ECU|CUW": {
    score: { sh: 0, sa: 0 },
    goals: [],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 5, red: 0 }
    },
    attendance: 68598,
    referee: "Ma Ning (CHN)"
  },
  "2026|F|SWE|TUN": {
    score: { sh: 5, sa: 1 },
    goals: [
      { min: 7, side: "home", scorer: "阿亚里 (Yasin Ayari)", type: "shot" },
      { min: 30, side: "home", scorer: "伊萨克 (Alexander Isak)", type: "shot", assist: "哲凯赖什 (Viktor Gyökeres)" },
      { min: 43, side: "away", scorer: "雷基克 (Omar Rekik)", type: "header" },
      { min: 60, side: "home", scorer: "哲凯赖什 (Viktor Gyökeres)", type: "shot", assist: "伊萨克 (Alexander Isak)" },
      { min: 86, side: "home", scorer: "斯万贝里 (Mattias Svanberg)", type: "shot" },
      { min: "90+6", side: "home", scorer: "阿亚里 (Yasin Ayari)", type: "shot" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|F|NED|SWE": {
    score: { sh: 5, sa: 1 },
    goals: [
      { min: 5,  side: "home", scorer: "布比罗 (Brian Brobbey)",       type: "shot" },
      { min: 17, side: "home", scorer: "布比罗 (Brian Brobbey)",       type: "shot" },
      { min: 47, side: "home", scorer: "加克波 (Cody Gakpo)",          type: "shot" },
      { min: 54, side: "home", scorer: "加克波 (Cody Gakpo)",          type: "shot" },
      { min: 59, side: "away", scorer: "安东尼 (Anthony Elanga)",      type: "shot" },
      { min: 89, side: "home", scorer: "孟菲斯 (Memphis Depay)",       type: "shot" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 3, red: 0 }
    },
    attendance: 68777,
    referee: "Michael Oliver (ENG)"
  },

  "2026|F|TUN|JPN": {
    score: { sh: 0, sa: 4 },
    goals: [
      { min: 4,  side: "away", scorer: "镰田大地 (Daichi Kamada)", type: "shot",   assist: "中村敬斗 (Keito Nakamura)" },
      { min: 31, side: "away", scorer: "上田绮世 (Ayase Ueda)",   type: "shot",   assist: "板仓晃 (Ko Itakura)" },
      { min: 69, side: "away", scorer: "伊东纯也 (Junya Ito)",    type: "shot",   assist: "上田绮世 (Ayase Ueda)" },
      { min: 83, side: "away", scorer: "上田绮世 (Ayase Ueda)",   type: "header", assist: "佐野海舟 (Kaishu Sano)" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: 51243,
    referee: "István Kovács (ROU)"
  },
  "2026|H|ESP|CPV": {
    score: { sh: 0, sa: 0 },
    goals: [],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|H|KSA|URU": {
    score: { sh: 1, sa: 1 },
    goals: [
      { min: 41, side: "home", scorer: "阿姆里 (Abdulelah Al-Amri)", type: "shot", assist: "穆罕默德·卡努 (Mohamed Kanno)" },
      { min: 79, side: "away", scorer: "马克西·阿劳霍 (Maxi Araújo)", type: "shot" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|H|ESP|KSA": {
    score: { sh: 4, sa: 0 },
    goals: [
      { min: 10, side: "home", scorer: "亚马尔 (Lamine Yamal)",         type: "shot",     assist: "奥亚萨尔瓦 (Mikel Oyarzabal)" },
      { min: 21, side: "home", scorer: "奥亚萨尔瓦 (Mikel Oyarzabal)",  type: "shot",     assist: "拉波尔特 (Aymeric Laporte)" },
      { min: 24, side: "home", scorer: "奥亚萨尔瓦 (Mikel Oyarzabal)",  type: "shot",     assist: "奥尔默 (Dani Olmo)" },
      { min: 49, side: "home", scorer: "坦巴蒂 (Hassan Al-Tambakti)",   type: "own_goal" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 2, red: 0 }
    },
    attendance: 68239,
    referee: "Raphael Claus (BRA)"
  },
  "2026|H|URU|CPV": {
    score: { sh: 2, sa: 2 },
    goals: [
      { min: 21,    side: "away", scorer: "皮纳 (Kevin Pina)",               type: "free_kick" },
      { min: 44,    side: "home", scorer: "阿劳霍 (Maximiliano Araújo)",     type: "header" },
      { min: "45+6",side: "home", scorer: "卡诺比奥 (Agustín Canobbio)",     type: "shot",   assist: "阿劳霍 (Maximiliano Araújo)" },
      { min: 61,    side: "away", scorer: "瓦雷拉 (Hélio Varela)",           type: "shot" }
    ],
    cards: {
      home: { yellow: 2, red: 0 },
      away: { yellow: 2, red: 0 }
    },
    attendance: 64003,
    referee: "Espen Eskås (NOR)"
  },
  "2026|G|BEL|EGY": {
    score: { sh: 1, sa: 1 },
    goals: [
      { min: 19, side: "away", scorer: "伊玛姆·阿舒尔 (Imam Ashour)", type: "shot" },
      { min: 66, side: "home", scorer: "穆罕穆德·哈尼 (Mohamed Hany)", type: "own_goal", assist: "托马斯·默尼耶 (Thomas Meunier)" }
    ],
    cards: {
      home: { yellow: 2, red: 0 },
      away: { yellow: 2, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|G|IRN|NZL": {
    score: { sh: 2, sa: 2 },
    goals: [
      { min: 7, side: "away", scorer: "贾斯特 (Juste)", type: "shot", assist: "克里斯·伍德 (Chris Wood)" },
      { min: 32, side: "home", scorer: "雷扎伊安 (Rezaeian)", type: "shot" },
      { min: 54, side: "away", scorer: "贾斯特 (Juste)", type: "shot", assist: "克里斯·伍德 (Chris Wood)" },
      { min: 64, side: "home", scorer: "莫赫比 (Mohebi)", type: "header" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
	  },
  "2026|G|BEL|IRN": {
    score: { sh: 0, sa: 0 },
    goals: [],
    cards: {
      home: { yellow: 1, red: 1 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "Darío Herrera (ARG)"
  },
  "2026|I|FRA|SEN": {
    score: { sh: 3, sa: 1 },
    goals: [
      { min: 66,    side: "home", scorer: "姆巴佩 (Kylian Mbappé)",   type: "shot", assist: "迈克尔·奥利塞 (Michael Olise)" },
      { min: 82,    side: "home", scorer: "巴尔科拉 (Bradley Barcola)", type: "shot" },
      { min: "90+5",side: "away", scorer: "姆巴耶 (Mbaye)",   type: "shot" },
      { min: "90+6",side: "home", scorer: "姆巴佩 (Kylian Mbappé)",   type: "shot", assist: "迈克尔·奥利塞 (Michael Olise)" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|I|IRQ|NOR": {
    score: { sh: 1, sa: 4 },
    goals: [
      { min: 29,    side: "away", scorer: "哈兰德 (Erling Haaland)",   type: "shot", assist: "达维德·默勒·沃尔费 (David Møller Wolfe)" },
      { min: 39,    side: "home", scorer: "侯赛因 (Hussein)",   type: "header" },
      { min: 43,    side: "away", scorer: "哈兰德 (Erling Haaland)",   type: "shot" },
      { min: 76,    side: "away", scorer: "厄斯蒂高 (Østigård)", type: "header" },
      { min: "90+6",side: "away", scorer: "艾曼·侯赛因 (Ayman Hussein)", type: "own_goal" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|J|ARG|ALG": {
    score: { sh: 3, sa: 0 },
    goals: [
      { min: 17, side: "home", scorer: "梅西 (Lionel Messi)",   type: "shot" },
      { min: 60, side: "home", scorer: "梅西 (Lionel Messi)",   type: "shot" },
      { min: 76, side: "home", scorer: "梅西 (Lionel Messi)",   type: "shot" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
  "2026|J|AUT|JOR": {
    score: { sh: 3, sa: 1 },
    goals: [
      { min: 21,      side: "home", scorer: "施密德 (Romano Schmid)",     type: "shot" },
      { min: 50,      side: "away", scorer: "乌勒万 (Ali Olwan)",         type: "shot" },
      { min: 76,      side: "home", scorer: "亚赞 (Yazan Al-Arab)",       type: "own_goal" },
      { min: "90+12", side: "home", scorer: "阿瑙托维奇 (Marko Arnautović)", type: "penalty" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|K|POR|COD": {
    score: { sh: 1, sa: 1 },
    goals: [
      { min: 6,      side: "home", scorer: "内维斯 (João Neves)",   type: "header", assist: "佩德罗·内托 (Pedro Neto)" },
      { min: "45+5", side: "away", scorer: "维萨 (Yoane Wissa)",    type: "header", assist: "阿蒂尔·马苏阿库 (Arthur Masuaku)" }
    ],
    cards: {
      home: { yellow: 3, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|K|UZB|COL": {
    score: { sh: 1, sa: 3 },
    goals: [
      { min: 41,      side: "away", scorer: "穆尼奥斯 (Daniel Muñoz)",              type: "shot", assist: "路易斯·迪亚斯 (Luis Díaz)" },
      { min: 61,      side: "home", scorer: "法伊祖拉耶夫 (Abbosbek Fayzullaev)",  type: "header" },
      { min: 66,      side: "away", scorer: "迪亚斯 (Luis Díaz)",                   type: "shot" },
      { min: "90+11", side: "away", scorer: "坎帕斯 (Jhon Campaz)",                 type: "header", assist: "库乔·埃尔南德斯 (Cucho Hernández)" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 1, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|L|ENG|CRO": {
    score: { sh: 4, sa: 2 },
    goals: [
      { min: 12,     side: "home", scorer: "凯恩 (Harry Kane)",         type: "penalty" },
      { min: 36,     side: "away", scorer: "巴图里纳 (Martin Baturina)", type: "shot" },
      { min: 42,     side: "home", scorer: "凯恩 (Harry Kane)",         type: "header", assist: "德克兰·赖斯 (Declan Rice)" },
      { min: "45+6", side: "away", scorer: "穆萨 (Petar Musa)",         type: "shot" },
      { min: 47,     side: "home", scorer: "贝林厄姆 (Jude Bellingham)", type: "shot", assist: "埃利奥特·安德森 (Elliot Anderson)" },
      { min: 85,     side: "home", scorer: "拉什福德 (Marcus Rashford)", type: "shot", assist: "布卡约·萨卡 (Bukayo Saka)" }
    ],
    cards: {
      home: { yellow: 0, red: 0 },
      away: { yellow: 0, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },

  "2026|L|GHA|PAN": {
    score: { sh: 1, sa: 0 },
    goals: [
      { min: "90+5", side: "home", scorer: "伊伦基 (Caleb Yirenkyi)", type: "shot", assist: "布兰登·托马斯-阿桑特 (Brandon Thomas-Asante)" }
    ],
    cards: {
      home: { yellow: 1, red: 0 },
      away: { yellow: 2, red: 0 }
    },
    attendance: null,
    referee: "TBD"
  },
};

// ========== 2026世界杯 比赛统计数据 ==========
matchStats["2026|A|MEX|RSA"] = {p1:"60%",p2:"40%",ps1:447,ps2:328,sh1:11,sh2:3,so1:4,so2:2,sb1:7,sb2:1,co1:3,co2:1,fo1:10,fo2:18,os1:2,os2:1,yc1:1,yc2:2,rc1:1,rc2:2,tk1:15,tk2:12,at1:98,at2:69,da1:48,da2:27,pk1:0,pk2:0};
matchStats["2026|A|KOR|CZE"] = {p1:"62%",p2:"38%",ps1:480,ps2:390,sh1:11,sh2:7,so1:6,so2:4,sb1:5,sb2:3,co1:4,co2:5,fo1:12,fo2:14,os1:2,os2:2,yc1:1,yc2:0,rc1:0,rc2:0,tk1:14,tk2:16,at1:98,at2:90,da1:38,da2:42,pk1:0,pk2:0};
matchStats["2026|A|CZE|RSA"] = {p1:"38%",p2:"62%",ps1:null,ps2:null,sh1:11,sh2:9,so1:3,so2:4,sb1:8,sb2:5,co1:5,co2:5,fo1:12,fo2:10,os1:2,os2:3,yc1:1,yc2:2,rc1:0,rc2:0,tk1:null,tk2:null,at1:69,at2:119,da1:31,da2:40,pk1:0,pk2:1};
matchStats["2026|A|MEX|KOR"] = {p1:"43%",p2:"57%",ps1:null,ps2:null,sh1:7,sh2:6,so1:4,so2:2,sb1:3,sb2:4,co1:0,co2:2,fo1:9,fo2:7,os1:3,os2:6,yc1:0,yc2:2,rc1:0,rc2:0,tk1:null,tk2:null,at1:96,at2:101,da1:17,da2:40,pk1:0,pk2:0};
matchStats["2026|B|CAN|BIH"] = {p1:"61%",p2:"39%",ps1:null,ps2:null,sh1:9,sh2:7,so1:4,so2:3,sb1:5,sb2:4,co1:9,co2:4,fo1:10,fo2:20,os1:1,os2:0,yc1:2,yc2:3,rc1:0,rc2:0,tk1:null,tk2:null,at1:134,at2:110,da1:80,da2:19,pk1:0,pk2:0};
matchStats["2026|D|USA|PAR"] = {p1:"65%",p2:"35%",ps1:null,ps2:null,sh1:12,sh2:4,so1:6,so2:1,sb1:6,sb2:3,co1:3,co2:1,fo1:13,fo2:17,os1:2,os2:1,yc1:1,yc2:5,rc1:0,rc2:0,tk1:null,tk2:null,at1:158,at2:58,da1:92,da2:22,pk1:0,pk2:0};
matchStats["2026|B|QAT|SUI"] = {p1:"32%",p2:"68%",ps1:null,ps2:null,sh1:6,sh2:17,so1:3,so2:7,sb1:3,sb2:10,co1:3,co2:10,fo1:12,fo2:11,os1:0,os2:1,yc1:2,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:48,at2:132,da1:16,da2:88,pk1:0,pk2:1};
matchStats["2026|B|SUI|BIH"] = {p1:"62%",p2:"38%",ps1:null,ps2:null,sh1:10,sh2:4,so1:7,so2:3,sb1:3,sb2:1,co1:7,co2:3,fo1:7,fo2:18,os1:3,os2:1,yc1:1,yc2:2,rc1:0,rc2:1,tk1:null,tk2:null,at1:115,at2:65,da1:60,da2:21,pk1:1,pk2:0};
matchStats["2026|B|CAN|QAT"] = {p1:"67%",p2:"33%",ps1:null,ps2:null,sh1:18,sh2:1,so1:10,so2:0,sb1:8,sb2:1,co1:19,co2:1,fo1:9,fo2:10,os1:1,os2:1,yc1:1,yc2:1,rc1:0,rc2:2,tk1:null,tk2:null,at1:165,at2:35,da1:154,da2:3,pk1:0,pk2:0};
matchStats["2026|C|BRA|MAR"] = {p1:"52%",p2:"48%",ps1:null,ps2:null,sh1:9,sh2:8,so1:5,so2:3,sb1:4,sb2:5,co1:6,co2:2,fo1:16,fo2:14,os1:0,os2:1,yc1:2,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:101,at2:103,da1:33,da2:47,pk1:0,pk2:0};
matchStats["2026|C|HAI|SCO"] = {p1:"54%",p2:"46%",ps1:null,ps2:null,sh1:11,sh2:7,so1:2,so2:2,sb1:9,sb2:5,co1:4,co2:3,fo1:23,fo2:21,os1:3,os2:1,yc1:1,yc2:3,rc1:0,rc2:0,tk1:null,tk2:null,at1:111,at2:76,da1:47,da2:39,pk1:0,pk2:0};
matchStats["2026|C|SCO|MAR"] = {p1:"41%",p2:"59%",ps1:null,ps2:null,sh1:3,sh2:8,so1:0,so2:2,sb1:3,sb2:6,co1:2,co2:5,fo1:11,fo2:8,os1:1,os2:0,yc1:1,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:78,at2:97,da1:41,da2:42,pk1:0,pk2:0};
matchStats["2026|C|BRA|HAI"] = {p1:"56%",p2:"44%",ps1:null,ps2:null,sh1:7,sh2:6,so1:5,so2:3,sb1:2,sb2:3,co1:4,co2:4,fo1:13,fo2:14,os1:8,os2:4,yc1:1,yc2:3,rc1:0,rc2:0,tk1:null,tk2:null,at1:102,at2:94,da1:40,da2:32,pk1:0,pk2:0};
matchStats["2026|D|AUS|TUR"] = {p1:"28%",p2:"72%",ps1:null,ps2:null,sh1:8,sh2:18,so1:4,so2:8,sb1:4,sb2:10,co1:5,co2:8,fo1:12,fo2:4,os1:1,os2:3,yc1:0,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:51,at2:150,da1:35,da2:104,pk1:0,pk2:0};
matchStats["2026|D|USA|AUS"] = {p1:"62%",p2:"38%",ps1:null,ps2:null,sh1:4,sh2:5,so1:2,so2:2,sb1:2,sb2:3,co1:7,co2:4,fo1:12,fo2:16,os1:1,os2:0,yc1:3,yc2:4,rc1:0,rc2:0,tk1:null,tk2:null,at1:124,at2:78,da1:60,da2:40,pk1:0,pk2:0};
matchStats["2026|D|TUR|PAR"] = {p1:"72%",p2:"28%",ps1:null,ps2:null,sh1:20,sh2:5,so1:5,so2:2,sb1:15,sb2:3,co1:12,co2:0,fo1:14,fo2:15,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:1,tk1:null,tk2:null,at1:161,at2:80,da1:125,da2:20,pk1:0,pk2:0};
matchStats["2026|F|NED|JPN"] = {p1:"60%",p2:"40%",ps1:null,ps2:null,sh1:9,sh2:9,so1:6,so2:3,sb1:3,sb2:6,co1:5,co2:4,fo1:7,fo2:7,os1:1,os2:0,yc1:3,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:106,at2:76,da1:60,da2:43,pk1:0,pk2:0};

matchStats["2026|E|GER|CUW"] = {p1:"65%",p2:"35%",ps1:null,ps2:null,sh1:18,sh2:8,so1:12,so2:2,sb1:6,sb2:6,co1:8,co2:1,fo1:18,fo2:11,os1:0,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:137,at2:76,da1:81,da2:21,pk1:1,pk2:0};
matchStats["2026|E|CIV|ECU"] = {p1:"48%",p2:"52%",ps1:null,ps2:null,sh1:12,sh2:9,so1:4,so2:1,sb1:8,sb2:8,co1:3,co2:5,fo1:10,fo2:13,os1:0,os2:0,yc1:3,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:91,at2:101,da1:61,da2:47,pk1:0,pk2:0};
matchStats["2026|E|GER|CIV"] = {p1:"59%",p2:"41%",ps1:null,ps2:null,sh1:12,sh2:4,so1:7,so2:2,sb1:5,sb2:2,co1:8,co2:3,fo1:5,fo2:7,os1:0,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:134,at2:98,da1:73,da2:51,pk1:0,pk2:0};
matchStats["2026|E|ECU|CUW"] = {p1:"75%",p2:"25%",ps1:null,ps2:null,sh1:26,sh2:8,so1:15,so2:3,sb1:11,sb2:5,co1:9,co2:0,fo1:7,fo2:10,os1:1,os2:2,yc1:1,yc2:5,rc1:0,rc2:0,tk1:null,tk2:null,at1:156,at2:68,da1:95,da2:20,pk1:0,pk2:0};
matchStats["2026|F|SWE|TUN"] = {p1:"49%",p2:"51%",ps1:null,ps2:null,sh1:10,sh2:5,so1:7,so2:2,sb1:3,sb2:3,co1:4,co2:2,fo1:10,fo2:8,os1:3,os2:6,yc1:0,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:91,at2:91,da1:44,da2:41,pk1:0,pk2:0};
matchStats["2026|F|TUN|JPN"] = {p1:"38%",p2:"62%",ps1:null,ps2:null,sh1:2,sh2:8,so1:0,so2:5,sb1:2,sb2:3,co1:3,co2:5,fo1:8,fo2:15,os1:1,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:78,at2:112,da1:21,da2:36,pk1:0,pk2:0};
matchStats["2026|F|NED|SWE"] = {p1:"51%",p2:"49%",ps1:null,ps2:null,sh1:9,sh2:13,so1:7,so2:8,sb1:2,sb2:5,co1:2,co2:5,fo1:9,fo2:12,os1:3,os2:3,yc1:0,yc2:3,rc1:0,rc2:0,tk1:null,tk2:null,at1:109,at2:65,da1:50,da2:49,pk1:0,pk2:0};
matchStats["2026|H|ESP|CPV"] = {p1:"74%",p2:"26%",ps1:null,ps2:null,sh1:19,sh2:4,so1:7,so2:1,sb1:12,sb2:3,co1:11,co2:1,fo1:10,fo2:1,os1:2,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:187,at2:32,da1:139,da2:7,pk1:0,pk2:0};
matchStats["2026|H|KSA|URU"] = {p1:"33%",p2:"67%",ps1:null,ps2:null,sh1:6,sh2:20,so1:3,so2:10,sb1:3,sb2:10,co1:4,co2:14,fo1:11,fo2:6,os1:0,os2:6,yc1:1,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:75,at2:145,da1:27,da2:79,pk1:0,pk2:0};
matchStats["2026|H|ESP|KSA"] = {p1:"67%",p2:"33%",ps1:null,ps2:null,sh1:20,sh2:2,so1:8,so2:1,sb1:12,sb2:1,co1:6,co2:1,fo1:10,fo2:2,os1:2,os2:3,yc1:0,yc2:2,rc1:0,rc2:0,tk1:null,tk2:null,at1:158,at2:77,da1:85,da2:24,pk1:0,pk2:0};
matchStats["2026|H|URU|CPV"] = {p1:"65%",p2:"35%",ps1:null,ps2:null,sh1:10,sh2:8,so1:2,so2:4,sb1:8,sb2:4,co1:11,co2:4,fo1:11,fo2:4,os1:3,os2:0,yc1:2,yc2:2,rc1:0,rc2:0,tk1:null,tk2:null,at1:119,at2:82,da1:81,da2:190,pk1:0,pk2:0};
matchStats["2026|G|BEL|EGY"] = {p1:"53%",p2:"47%",ps1:null,ps2:null,sh1:9,sh2:6,so1:3,so2:3,sb1:6,sb2:3,co1:2,co2:7,fo1:15,fo2:15,os1:0,os2:1,yc1:2,yc2:2,rc1:0,rc2:0,tk1:null,tk2:null,at1:119,at2:76,da1:64,da2:32,pk1:0,pk2:0};
matchStats["2026|G|IRN|NZL"] = {p1:"48%",p2:"52%",ps1:null,ps2:null,sh1:12,sh2:12,so1:4,so2:8,sb1:8,sb2:4,co1:4,co2:1,fo1:10,fo2:8,os1:2,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:96,at2:101,da1:56,da2:44,pk1:0,pk2:0};
matchStats["2026|G|BEL|IRN"] = {p1:"70%",p2:"30%",ps1:null,ps2:null,sh1:17,sh2:6,so1:7,so2:3,sb1:10,sb2:3,co1:4,co2:2,fo1:7,fo2:9,os1:3,os2:4,yc1:1,yc2:1,rc1:1,rc2:0,tk1:null,tk2:null,at1:154,at2:63,da1:96,da2:25,pk1:0,pk2:0};
matchStats["2026|G|IRN|NZL"] = {p1:"48%",p2:"52%",ps1:null,ps2:null,sh1:12,sh2:12,so1:4,so2:8,sb1:8,sb2:4,co1:4,co2:1,fo1:10,fo2:8,os1:2,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:96,at2:101,da1:56,da2:44,pk1:0,pk2:0};
matchStats["2026|I|FRA|SEN"] = {p1:"54%",p2:"46%",ps1:null,ps2:null,sh1:9,sh2:5,so1:8,so2:2,sb1:1,sb2:3,co1:6,co2:4,fo1:5,fo2:9,os1:1,os2:3,yc1:0,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:113,at2:99,da1:32,da2:27,pk1:0,pk2:0};
matchStats["2026|I|IRQ|NOR"] = {p1:"39%",p2:"61%",ps1:null,ps2:null,sh1:9,sh2:10,so1:1,so2:5,sb1:8,sb2:5,co1:2,co2:5,fo1:12,fo2:13,os1:1,os2:0,yc1:1,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:79,at2:89,da1:27,da2:39,pk1:0,pk2:0};
matchStats["2026|J|ARG|ALG"] = {p1:"48%",p2:"52%",ps1:null,ps2:null,sh1:10,sh2:4,so1:6,so2:0,sb1:4,sb2:4,co1:2,co2:2,fo1:13,fo2:8,os1:3,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:85,at2:119,da1:24,da2:45,pk1:0,pk2:0};
matchStats["2026|J|AUT|JOR"] = {p1:"63%",p2:"37%",ps1:null,ps2:null,sh1:10,sh2:9,so1:4,so2:4,sb1:6,sb2:5,co1:4,co2:3,fo1:12,fo2:7,os1:3,os2:1,yc1:1,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:132,at2:86,da1:55,da2:45,pk1:1,pk2:0};
matchStats["2026|K|POR|COD"] = {p1:"75%",p2:"25%",ps1:null,ps2:null,sh1:5,sh2:5,so1:1,so2:2,sb1:4,sb2:3,co1:5,co2:4,fo1:9,fo2:10,os1:3,os2:2,yc1:3,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:135,at2:56,da1:75,da2:28,pk1:0,pk2:0};
matchStats["2026|K|UZB|COL"] = {p1:"40%",p2:"60%",ps1:null,ps2:null,sh1:6,sh2:11,so1:2,so2:4,sb1:4,sb2:7,co1:3,co2:4,fo1:14,fo2:11,os1:0,os2:3,yc1:1,yc2:1,rc1:0,rc2:0,tk1:null,tk2:null,at1:67,at2:98,da1:28,da2:41,pk1:0,pk2:0};
matchStats["2026|L|ENG|CRO"] = {p1:"52%",p2:"48%",ps1:null,ps2:null,sh1:17,sh2:8,so1:11,so2:5,sb1:6,sb2:3,co1:8,co2:2,fo1:10,fo2:12,os1:0,os2:1,yc1:0,yc2:0,rc1:0,rc2:0,tk1:null,tk2:null,at1:87,at2:81,da1:33,da2:38,pk1:1,pk2:0};
matchStats["2026|L|GHA|PAN"] = {p1:"38%",p2:"62%",ps1:null,ps2:null,sh1:6,sh2:9,so1:2,so2:4,sb1:4,sb2:5,co1:2,co2:2,fo1:9,fo2:11,os1:4,os2:1,yc1:1,yc2:2,rc1:0,rc2:0,tk1:null,tk2:null,at1:93,at2:101,da1:35,da2:60,pk1:0,pk2:0};