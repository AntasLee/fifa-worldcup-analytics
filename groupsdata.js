// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
(function(){
// ========== GROUPS DATA ==========
const groupsData=[{id:'A',name:'A组',teams:[{zh:'墨西哥',en:'Mexico',code:'MEX'},{zh:'南非',en:'South Africa',code:'RSA'},{zh:'韩国',en:'South Korea',code:'KOR'},{zh:'捷克',en:'Czech Republic',code:'CZE'}]},{id:'B',name:'B组',teams:[{zh:'加拿大',en:'Canada',code:'CAN'},{zh:'波黑',en:'Bosnia & Herzegovina',code:'BIH'},{zh:'卡塔尔',en:'Qatar',code:'QAT'},{zh:'瑞士',en:'Switzerland',code:'SUI'}]},{id:'C',name:'C组',teams:[{zh:'巴西',en:'Brazil',code:'BRA'},{zh:'摩洛哥',en:'Morocco',code:'MAR'},{zh:'海地',en:'Haiti',code:'HAI'},{zh:'苏格兰',en:'Scotland',code:'SCO'}]},{id:'D',name:'D组',teams:[{zh:'美国',en:'United States',code:'USA'},{zh:'巴拉圭',en:'Paraguay',code:'PAR'},{zh:'澳大利亚',en:'Australia',code:'AUS'},{zh:'土耳其',en:'Turkey',code:'TUR'}]},{id:'E',name:'E组',teams:[{zh:'德国',en:'Germany',code:'GER'},{zh:'库拉索',en:'Curaçao',code:'CUW'},{zh:'科特迪瓦',en:'Ivory Coast',code:'CIV'},{zh:'厄瓜多尔',en:'Ecuador',code:'ECU'}]},{id:'F',name:'F组',teams:[{zh:'荷兰',en:'Netherlands',code:'NED'},{zh:'日本',en:'Japan',code:'JPN'},{zh:'瑞典',en:'Sweden',code:'SWE'},{zh:'突尼斯',en:'Tunisia',code:'TUN'}]},{id:'G',name:'G组',teams:[{zh:'比利时',en:'Belgium',code:'BEL'},{zh:'埃及',en:'Egypt',code:'EGY'},{zh:'伊朗',en:'Iran',code:'IRN'},{zh:'新西兰',en:'New Zealand',code:'NZL'}]},{id:'H',name:'H组',teams:[{zh:'西班牙',en:'Spain',code:'ESP'},{zh:'佛得角',en:'Cape Verde',code:'CPV'},{zh:'沙特阿拉伯',en:'Saudi Arabia',code:'KSA'},{zh:'乌拉圭',en:'Uruguay',code:'URU'}]},{id:'I',name:'I组',teams:[{zh:'法国',en:'France',code:'FRA'},{zh:'塞内加尔',en:'Senegal',code:'SEN'},{zh:'伊拉克',en:'Iraq',code:'IRQ'},{zh:'挪威',en:'Norway',code:'NOR'}]},{id:'J',name:'J组',teams:[{zh:'阿根廷',en:'Argentina',code:'ARG'},{zh:'阿尔及利亚',en:'Algeria',code:'ALG'},{zh:'奥地利',en:'Austria',code:'AUT'},{zh:'约旦',en:'Jordan',code:'JOR'}]},{id:'K',name:'K组',teams:[{zh:'葡萄牙',en:'Portugal',code:'POR'},{zh:'民主刚果',en:'DR Congo',code:'COD'},{zh:'乌兹别克斯坦',en:'Uzbekistan',code:'UZB'},{zh:'哥伦比亚',en:'Colombia',code:'COL'}]},{id:'L',name:'L组',teams:[{zh:'英格兰',en:'England',code:'ENG'},{zh:'克罗地亚',en:'Croatia',code:'CRO'},{zh:'加纳',en:'Ghana',code:'GHA'},{zh:'巴拿马',en:'Panama',code:'PAN'}]}];
window.groupsData = groupsData;
const allTeams=groupsData.flatMap(g=>g.teams);
const teamMap=Object.fromEntries(allTeams.map(t=>[t.code,t]));
window.teamMap = teamMap;

// ========== TEAM ANALYSIS DB ==========
const teamDB={ALG:{r:34,c:{n:'弗拉迪米尔·佩特科维奇',t:'Switzerland',a:'TBD'},p:[{n:'里亚德·马赫雷斯',p:'前锋',c:'Al Ahli FC (KSA)',v:'—'},{n:'阿明·古伊里',p:'前锋',c:'Olympique Marseille (FRA)',v:'—'},{n:'拉米兹·泽鲁基',p:'中场',c:'FC Twente (NED)',v:'—'},{n:'侯赛姆·奥亚尔',p:'中场',c:'Al Ittihad (KSA)',v:'—'},{n:'艾萨·曼迪',p:'后卫',c:'Lille OSC (FRA)',v:'—'},{n:'梅尔文·马斯蒂尔',p:'门将',c:'FC Stade Nyonnais (SUI)',v:'—'}],s:['技术足球','法国体系','边路创造力'],sd:'多名球员在法国青训体系成长，技术细腻，进攻端创造力出色。',f:'4-3-3'},ARG:{r:1,c:{n:'利昂内尔·斯卡洛尼',t:'Argentina',a:'TBD'},p:[{n:'胡利安·阿尔瓦雷斯',p:'前锋',c:'Atlético De Madrid (ESP)',v:'—'},{n:'利昂内尔·梅西',p:'前锋',c:'Inter Miami CF (USA)',v:'—'},{n:'莱安德罗·帕雷德斯',p:'中场',c:'CA Boca Juniors (ARG)',v:'—'},{n:'罗德里戈·德保罗',p:'中场',c:'Inter Miami CF (USA)',v:'—'},{n:'莱昂纳多·巴莱尔迪',p:'后卫',c:'Olympique Marseille (FRA)',v:'—'},{n:'胡安·穆索',p:'门将',c:'Atlético De Madrid (ESP)',v:'—'}],s:['高压逼抢','快速转换','边路进攻'],sd:'斯卡洛尼打造的阿根廷队兼具南美技术和欧洲纪律，擅长高位压迫和快速反击。',f:'4-3-3'},AUS:{r:29,c:{n:'托尼·波波维奇',t:'Australia',a:'TBD'},p:[{n:'马修·莱基',p:'前锋',c:'Melbourne City FC (AUS)',v:'—'},{n:'穆罕默德·图雷',p:'前锋',c:'Norwich City FC (ENG)',v:'—'},{n:'康纳·梅特卡夫',p:'中场',c:'FC St. Pauli (GER)',v:'—'},{n:'艾登·奥尼尔',p:'中场',c:'New York City FC (USA)',v:'—'},{n:'米洛斯·德格内克',p:'后卫',c:'APOEL FC (CYP)',v:'—'},{n:'马修·瑞安',p:'门将',c:'Levante UD (ESP)',v:'—'}],s:['英式传统','身体对抗','头球优势'],sd:'身体强壮、空中优势明显，索塔是后防领袖，斗志顽强。',f:'4-4-2'},AUT:{r:21,c:{n:'拉尔夫·朗尼克',t:'Germany',a:'TBD'},p:[{n:'马尔科·阿瑙托维奇',p:'前锋',c:'FK Crvena Zvezda (SRB)',v:'—'},{n:'米夏埃尔·格雷戈里奇',p:'前锋',c:'FC Augsburg (GER)',v:'—'},{n:'克萨维尔·施拉格尔',p:'中场',c:'RB Leipzig (GER)',v:'—'},{n:'尼古拉斯·塞瓦尔德',p:'中场',c:'RB Leipzig (GER)',v:'—'},{n:'大卫·阿芬格鲁伯',p:'后卫',c:'Elche CF (ESP)',v:'—'},{n:'亚历山大·施拉格尔',p:'门将',c:'FC Red Bull Salzburg (AUT)',v:'—'}],s:['高位压迫','快速转换','朗尼克体系'],sd:'朗尼克高压体系在奥地利国家队成功复制，整体压迫和快速转换是特色。',f:'4-2-2-2'},BEL:{r:9,c:{n:'鲁迪·加西亚',t:'France',a:'TBD'},p:[{n:'罗梅卢·卢卡库',p:'前锋',c:'SSC Napoli (ITA)',v:'—'},{n:'莱安德罗·特罗萨德',p:'前锋',c:'Arsenal FC (ENG)',v:'—'},{n:'阿克塞尔·维特塞尔',p:'中场',c:'Girona FC (ESP)',v:'—'},{n:'凯文·德布劳内',p:'中场',c:'SSC Napoli (ITA)',v:'—'},{n:'泽诺·德巴斯特',p:'后卫',c:'Sporting CP (POR)',v:'—'},{n:'蒂博·库尔图瓦',p:'门将',c:'Real Madrid C. F. (ESP)',v:'—'}],s:['快速转换','边路推进','德布劳内核心'],sd:'黄金一代逐渐谢幕，德布劳内仍是核心大脑，攻强守弱特征明显。',f:'4-3-3'},BIH:{r:48,c:{n:'谢尔盖·巴巴雷茨',t:'Bosnia And Herzegovina',a:'TBD'},p:[{n:'萨梅德·巴日达尔',p:'前锋',c:'Jagiellonia Białystok (POL)',v:'—'},{n:'埃尔梅丁·德米罗维奇',p:'前锋',c:'VfB Stuttgart (GER)',v:'—'},{n:'本杰明·塔希罗维奇',p:'中场',c:'Brøndby IF (DEN)',v:'—'},{n:'阿尔明·吉戈维奇',p:'中场',c:'BSC Young Boys (SUI)',v:'—'},{n:'尼哈德·穆亚基奇',p:'后卫',c:'Gaziantep FK (TUR)',v:'—'},{n:'尼古拉·瓦西利',p:'门将',c:'FC St. Pauli (GER)',v:'—'}],s:['技术足球','前南风格','德米罗维奇崛起'],sd:'偏前南技术流但阵容老化严重，德米罗维奇是新生代代表。',f:'4-2-3-1'},BRA:{r:3,c:{n:'卡洛·安切洛蒂',t:'Italy',a:'TBD'},p:[{n:'维尼修斯·儒尼奥尔',p:'前锋',c:'Real Madrid C. F. (ESP)',v:'—'},{n:'马特乌斯·库尼亚',p:'前锋',c:'Manchester United FC (ENG)',v:'—'},{n:'卡塞米罗',p:'中场',c:'Manchester United FC (ENG)',v:'—'},{n:'布鲁诺·吉马良斯',p:'中场',c:'Newcastle United FC (ENG)',v:'—'},{n:'韦斯利',p:'后卫',c:'AS Roma (ITA)',v:'—'},{n:'阿利松',p:'门将',c:'Liverpool FC (ENG)',v:'—'}],s:['桑巴控球','边路爆破','高位防线'],sd:'五星巴西坚持攻势足球，边路双星驱动、创造力充沛，但防守端高位防线偶有漏洞。',f:'4-2-3-1'},CPV:{r:56,c:{n:'佩德罗·布比斯塔',t:'Cabo Verde',a:'TBD'},p:[{n:'吉尔森·本希莫尔',p:'前锋',c:'FC Akron Tolyatti (RUS)',v:'—'},{n:'代隆·利夫拉门托',p:'前锋',c:'Casa Pia AC (POR)',v:'—'},{n:'凯文·皮纳',p:'中场',c:'FC Krasnodar (RUS)',v:'—'},{n:'若瓦内·卡布拉尔',p:'中场',c:'CF Estrela Da Amadora (POR)',v:'—'},{n:'斯托皮拉',p:'后卫',c:'SCU Torreense (POR)',v:'—'},{n:'沃济尼亚',p:'门将',c:'GD Chaves (POR)',v:'—'}],s:['非洲小国','反击速度','团队足球'],sd:'球员分散在欧美各级联赛，整体实力有限但斗志顽强。',f:'4-4-2'},CAN:{r:30,c:{n:'杰西·马希',t:'USA',a:'TBD'},p:[{n:'赛尔·拉林',p:'前锋',c:'Southampton FC (ENG)',v:'—'},{n:'乔纳森·戴维',p:'前锋',c:'Juventus FC (ITA)',v:'—'},{n:'马蒂厄·舒瓦尼埃',p:'中场',c:'LAFC (USA)',v:'—'},{n:'斯蒂芬·欧斯塔基奥',p:'中场',c:'LAFC (USA)',v:'—'},{n:'阿利斯泰尔·约翰斯顿',p:'后卫',c:'Celtic FC (SCO)',v:'—'},{n:'戴恩·圣克莱尔',p:'门将',c:'Inter Miami CF (USA)',v:'—'}],s:['戴维斯驱动','速度反击','边路狂飙'],sd:'以阿方索·戴维斯和乔纳森·戴维双子星为核心，速度快、冲击力强。',f:'4-4-2'},COL:{r:12,c:{n:'内斯托尔·洛伦佐',t:'Argentina',a:'TBD'},p:[{n:'路易斯·迪亚斯',p:'前锋',c:'FC Bayern München (GER)',v:'—'},{n:'约翰·科尔多瓦',p:'前锋',c:'FC Krasnodar (RUS)',v:'—'},{n:'凯文·卡斯塔尼奥',p:'中场',c:'CA River Plate (ARG)',v:'—'},{n:'理查德·里奥斯',p:'中场',c:'SL Ben«ca (POR)',v:'—'},{n:'丹尼尔·穆尼奥斯',p:'后卫',c:'Crystal Palace FC (ENG)',v:'—'},{n:'大卫·奥斯皮纳',p:'门将',c:'Atlético Nacional (COL)',v:'—'}],s:['边路突破','技术足球','迪亚斯核心'],sd:'哥伦比亚围绕迪亚斯打造进攻体系，J罗提供创造力，整体偏技术流。',f:'4-2-3-1'},COD:{r:52,c:{n:'塞巴斯蒂安·德萨布雷',t:'France',a:'TBD'},p:[{n:'布莱恩·西彭加',p:'前锋',c:'CD Castellón (ESP)',v:'—'},{n:'加埃尔·卡库塔',p:'前锋',c:'AEL FC (GRE)',v:'—'},{n:'恩加拉耶尔·穆考',p:'中场',c:'Lille OSC (FRA)',v:'—'},{n:'纳塔纳埃尔·姆布库',p:'中场',c:'Montpellier HSC (FRA)',v:'—'},{n:'阿龙·万-比萨卡',p:'后卫',c:'West Ham United FC (ENG)',v:'—'},{n:'利昂内尔·姆帕西',p:'门将',c:'Le Havre AC (FRA)',v:'—'}],s:['非洲力量','法国体系','速度冲击'],sd:'多名球员在法国联赛体系成长，身体条件和速度是最大优势。',f:'4-3-3'},CRO:{r:10,c:{n:'兹拉特科·达利奇',t:'Croatia',a:'TBD'},p:[{n:'安德烈·克拉马里奇',p:'前锋',c:'TSG Hoffenheim (GER)',v:'—'},{n:'安特·布迪米尔',p:'前锋',c:'CA Osasuna (ESP)',v:'—'},{n:'尼古拉·莫罗',p:'中场',c:'Bologna FC (ITA)',v:'—'},{n:'马特奥·科瓦契奇',p:'中场',c:'Manchester City FC (ENG)',v:'—'},{n:'约西普·斯塔尼希奇',p:'后卫',c:'FC Bayern München (GER)',v:'—'},{n:'多米尼克·利瓦科维奇',p:'门将',c:'GNK Dinamo Zagreb (CRO)',v:'—'}],s:['中场控制','防守坚韧','逆转能力'],sd:'格瓦迪奥尔成为新领袖，克罗地亚依旧以中场控制力和顽强斗志著称。',f:'4-2-3-1'},CUW:{r:68,c:{n:'迪克·艾德沃卡特',t:'Netherlands',a:'TBD'},p:[{n:'尤尔根·洛卡迪亚',p:'前锋',c:'Miami FC (USA)',v:'—'},{n:'杰雷米·安东尼塞',p:'前锋',c:'AE Ki«sia FC (GRE)',v:'—'},{n:'霍德弗里德·鲁梅拉托',p:'中场',c:'RKC Waalwijk (NED)',v:'—'},{n:'儒尼尼奥·巴库纳',p:'中场',c:'FC Volendam (NED)',v:'—'},{n:'舒兰迪·桑博',p:'后卫',c:'Sparta Rotterdam (NED)',v:'—'},{n:'埃洛伊·罗姆',p:'门将',c:'Miami FC (USA)',v:'—'}],s:['荷兰体系','技术足球','加勒比风格'],sd:'多名球员在荷兰联赛体系成长，技术风格偏荷兰但整体实力有限。',f:'4-3-3'},CZE:{r:32,c:{n:'米罗斯拉夫·库贝克',t:'Czech Republic',a:'TBD'},p:[{n:'亚当·赫洛热克',p:'前锋',c:'TSG Hoffenheim (GER)',v:'—'},{n:'帕特里克·希克',p:'前锋',c:'Bayer Leverkusen (GER)',v:'—'},{n:'弗拉迪米尔·达里达',p:'中场',c:'FC Hradec Králové (CZE)',v:'—'},{n:'卢卡什·切尔夫',p:'中场',c:'FC Viktoria Plzeň (CZE)',v:'—'},{n:'大卫·齐马',p:'后卫',c:'SK Slavia Praha (CZE)',v:'—'},{n:'马捷·科瓦日',p:'门将',c:'PSV Eindhoven (NED)',v:'—'}],s:['力量足球','头球优势','绍切克核心'],sd:'身体对抗强、空中优势明显，绍切克和希克是攻防关键人物。',f:'4-2-3-1'},CIV:{r:33,c:{n:'埃梅尔斯·法埃',t:"Côte d'Ivoire",a:'TBD'},p:[{n:'安热-约安·博尼',p:'前锋',c:'FC Internazionale Milano (ITA)',v:'—'},{n:'西蒙·阿丁格拉',p:'前锋',c:'AS Monaco (FRA)',v:'—'},{n:'让·米夏埃尔·塞里',p:'中场',c:'NK Maribor (SVN)',v:'—'},{n:'塞科·福法纳',p:'中场',c:'FC Porto (POR)',v:'—'},{n:'奥斯曼·迪奥曼德',p:'后卫',c:'Sporting CP (POR)',v:'—'},{n:'叶海亚·福法纳',p:'门将',c:'Çaykur Rizespor (TUR)',v:'—'}],s:['非洲力量','快速反击','边路速度'],sd:'多名球员在欧洲效力，身体对抗和速度是核心竞争力。',f:'4-3-3'},ECU:{r:27,c:{n:'塞巴斯蒂安·贝卡切切',t:'Argentina',a:'TBD'},p:[{n:'约翰·耶博阿',p:'前锋',c:'Venezia FC (ITA)',v:'—'},{n:'凯文·罗德里格斯',p:'前锋',c:'Royale Union Saint-Gilloise (BEL)',v:'—'},{n:'霍尔迪·阿尔西瓦尔',p:'中场',c:'Independiente Del Valle (ECU)',v:'—'},{n:'安东尼·瓦伦西亚',p:'中场',c:'Royal Antwerp FC (BEL)',v:'—'},{n:'费利克斯·托雷斯',p:'后卫',c:'SC Internacional (BRA)',v:'—'},{n:'埃尔南·加林德斯',p:'门将',c:'CA Huracán (ARG)',v:'—'}],s:['南美硬度','高位压迫','凯塞多核心'],sd:'年轻且富有活力，凯塞多是世界级中场，整体压迫能力强。',f:'4-2-3-1'},EGY:{r:22,c:{n:'霍萨姆·哈桑',t:'Egypt',a:'TBD'},p:[{n:'特雷泽盖',p:'前锋',c:'Al Ahly FC (EGY)',v:'—'},{n:'哈姆扎·阿卜杜勒卡里姆',p:'前锋',c:'FC Barcelona (ESP)',v:'—'},{n:'伊马姆·阿舒尔',p:'中场',c:'Al Ahly FC (EGY)',v:'—'},{n:'穆斯塔法·齐科',p:'中场',c:'Pyramids FC (EGY)',v:'—'},{n:'亚西尔·易卜拉欣',p:'后卫',c:'Al Ahly FC (EGY)',v:'—'},{n:'穆罕默德·谢纳维',p:'门将',c:'Al Ahly FC (EGY)',v:'—'}],s:['萨拉赫依赖','防守反击','边路推进'],sd:'战术围绕萨拉赫展开，马尔穆什的崛起提供了第二攻击点。',f:'4-3-3'},ENG:{r:4,c:{n:'托马斯·图赫尔',t:'Germany',a:'TBD'},p:[{n:'布卡约·萨卡',p:'前锋',c:'Arsenal FC (ENG)',v:'—'},{n:'哈里·凯恩',p:'前锋',c:'FC Bayern München (GER)',v:'—'},{n:'德克兰·赖斯',p:'中场',c:'Arsenal FC (ENG)',v:'—'},{n:'埃利奥特·安德森',p:'中场',c:'Nottingham Forest FC (ENG)',v:'—'},{n:'埃兹里·孔萨',p:'后卫',c:'Aston Villa FC (ENG)',v:'—'},{n:'乔丹·皮克福德',p:'门将',c:'Everton FC (ENG)',v:'—'}],s:['传控压迫','边中结合','高位防线'],sd:'图赫尔治下的英格兰融合德式压迫与英式冲击力，贝林厄姆为核心的全能中场体系。',f:'4-2-3-1'},ESP:{r:5,c:{n:'路易斯·德拉富恩特',t:'Spain',a:'TBD'},p:[{n:'费兰·托雷斯',p:'前锋',c:'FC Barcelona (ESP)',v:'—'},{n:'达尼·奥尔莫',p:'前锋',c:'FC Barcelona (ESP)',v:'—'},{n:'米克尔·梅里诺',p:'中场',c:'Arsenal FC (ENG)',v:'—'},{n:'法比安·鲁伊斯',p:'中场',c:'Paris Saint-Germain (FRA)',v:'—'},{n:'马克·普维尔',p:'后卫',c:'Atlético De Madrid (ESP)',v:'—'},{n:'大卫·拉亚',p:'门将',c:'Arsenal FC (ENG)',v:'—'}],s:['Tiki-Taka','高位压迫','边锋爆破'],sd:'西班牙延续传控传统但加入边路速度元素，攻防转换更快。',f:'4-3-3'},FRA:{r:2,c:{n:'迪迪埃·德尚',t:'France',a:'TBD'},p:[{n:'奥斯曼·登贝莱',p:'前锋',c:'Paris Saint-Germain (FRA)',v:'—'},{n:'马库斯·图拉姆',p:'前锋',c:'FC Internazionale Milano (ITA)',v:'—'},{n:'马努·科内',p:'中场',c:'AS Roma (ITA)',v:'—'},{n:'奥雷利安·楚阿梅尼',p:'中场',c:'Real Madrid C. F. (ESP)',v:'—'},{n:'马洛·古斯托',p:'后卫',c:'Chelsea FC (ENG)',v:'—'},{n:'布里斯·桑巴',p:'门将',c:'Stade Rennais FC (FRA)',v:'—'}],s:['防守反击','速度爆破','身体对抗'],sd:'德尚的法国队以稳固防守+姆巴佩速度著称，身体对抗能力强，是大赛型球队。',f:'4-3-3'},GER:{r:6,c:{n:'朱利安·纳格尔斯曼',t:'Germany',a:'TBD'},p:[{n:'凯·哈弗茨',p:'前锋',c:'Arsenal FC (ENG)',v:'—'},{n:'尼克·沃尔特马德',p:'前锋',c:'Newcastle United FC (ENG)',v:'—'},{n:'亚历山大·帕夫洛维奇',p:'中场',c:'FC Bayern München (GER)',v:'—'},{n:'莱昂·戈雷茨卡',p:'中场',c:'FC Bayern München (GER)',v:'—'},{n:'安东尼奥·吕迪格',p:'后卫',c:'Real Madrid C. F. (ESP)',v:'—'},{n:'曼努埃尔·诺伊尔',p:'门将',c:'FC Bayern München (GER)',v:'—'}],s:['高压逼抢','快速纵向','双核驱动'],sd:'纳格尔斯曼打造的双核体系（穆夏拉+维尔茨），高位压迫凶狠。',f:'4-2-3-1'},GHA:{r:36,c:{n:'卡洛斯·奎罗斯',t:'Portugal',a:'TBD'},p:[{n:'法塔武·伊萨哈库',p:'前锋',c:'Leicester City FC (ENG)',v:'—'},{n:'乔丹·阿尤',p:'前锋',c:'Leicester City FC (ENG)',v:'—'},{n:'凯莱布·伊伦基',p:'中场',c:'FC Nordsjælland (DEN)',v:'—'},{n:'托马斯·帕尔特伊',p:'中场',c:'Villarreal CF (ESP)',v:'—'},{n:'阿利杜·塞杜',p:'后卫',c:'Stade Rennais FC (FRA)',v:'—'},{n:'劳伦斯·阿蒂-齐吉',p:'门将',c:'FC St. Gallen (SUI)',v:'—'}],s:['速度冲击','非洲力量','库杜斯核心'],sd:'速度快、对抗强，库杜斯是中场发动机，边路爆破能力强。',f:'4-2-3-1'},HAI:{r:72,c:{n:'塞巴斯蒂安·米涅',t:'France',a:'TBD'},p:[{n:'德里克·艾蒂安',p:'前锋',c:'Toronto FC (CAN)',v:'—'},{n:'杜肯·纳宗',p:'前锋',c:'Esteghlal Tehran FC (IRN)',v:'—'},{n:'卡尔·桑特',p:'中场',c:'El Paso Locomotive FC (USA)',v:'—'},{n:'让-里克纳·贝勒加德',p:'中场',c:'Wolverhampton Wanderers FC (ENG)',v:'—'},{n:'卡伦斯·阿尔屈',p:'后卫',c:'Angers SCO (FRA)',v:'—'},{n:'约翰尼·普拉西德',p:'门将',c:'SC Bastia (FRA)',v:'—'}],s:['加勒比风格','法国体系','斗志顽强'],sd:'以归化和海外球员为主，身体条件不错但战术纪律有待提升。',f:'4-4-2'},IRN:{r:25,c:{n:'阿米尔·加莱诺伊',t:'IR Iran',a:'TBD'},p:[{n:'迈赫迪·塔雷米',p:'前锋',c:'Olympiacos FC (GRE)',v:'—'},{n:'迈赫迪·加耶迪',p:'前锋',c:'Al Nasr SC (UAE)',v:'—'},{n:'赛义德·埃扎托拉希',p:'中场',c:'Shabab Al Ahli Club (UAE)',v:'—'},{n:'阿里雷扎·贾汉巴赫什',p:'中场',c:'FCV Dender EH (BEL)',v:'—'},{n:'萨利赫·哈尔达尼',p:'后卫',c:'Esteghlal Tehran FC (IRN)',v:'—'},{n:'阿里雷扎·贝兰万德',p:'门将',c:'Tractor Sazi Tabriz FC (IRN)',v:'—'}],s:['防守反击','身体对抗','双塔组合'],sd:'以防守反击和身体对抗著称，塔雷米和阿兹蒙双前锋是最大武器。',f:'4-4-2'},IRQ:{r:55,c:{n:'格雷厄姆·阿诺德',t:'Australia',a:'TBD'},p:[{n:'阿里·哈马迪',p:'前锋',c:'Luton Town FC (ENG)',v:'—'},{n:'穆哈纳德·阿里',p:'前锋',c:'Dibba FC (UAE)',v:'—'},{n:'优素福·阿明',p:'中场',c:'AEK Larnaca FC (CYP)',v:'—'},{n:'易卜拉欣·巴耶什',p:'中场',c:'Al Dhafra SCC (UAE)',v:'—'},{n:'雷宾·加里布',p:'后卫',c:'Port FC (THA)',v:'—'},{n:'法哈德·塔利布',p:'门将',c:'Al Talaba SC (IRQ)',v:'—'}],s:['防守反击','整体战术','西亚力量'],sd:'西班牙教练带来欧洲战术理念，整体防守组织有所提升。',f:'4-2-3-1'},JPN:{r:16,c:{n:'森保一',t:'Japan',a:'TBD'},p:[{n:'后藤启介',p:'前锋',c:'Sint-Truiden VV (BEL)',v:'—'},{n:'上田绮世',p:'前锋',c:'Feyenoord Rotterdam (NED)',v:'—'},{n:'远藤航',p:'中场',c:'Liverpool FC (ENG)',v:'—'},{n:'田中碧',p:'中场',c:'Leeds United FC (ENG)',v:'—'},{n:'菅原由势',p:'后卫',c:'SV Werder Bremen (GER)',v:'—'},{n:'铃木彩艳',p:'门将',c:'Parma (ITA)',v:'—'}],s:['技术传控','快速转换','战术纪律'],sd:'技术流风格鲜明，三笘薰和久保建英是进攻双核，战术执行力极强。',f:'4-2-3-1'},JOR:{r:58,c:{n:'贾马尔·塞拉米',t:'Morocco',a:'TBD'},p:[{n:'穆罕默德·阿布兹赖克',p:'前锋',c:'Raja Casablanca (MAR)',v:'—'},{n:'阿里·奥尔万',p:'前锋',c:'Al Sailiya SC (QAT)',v:'—'},{n:'阿米尔·贾穆斯',p:'中场',c:'Al Zawra\'a SC (IRQ)',v:'—'},{n:'努尔·拉瓦比德',p:'中场',c:'Selangor FC (MAS)',v:'—'},{n:'穆罕默德·阿布哈希什',p:'后卫',c:'Al Karma SC (IRQ)',v:'—'},{n:'亚齐德·阿布拉伊拉',p:'门将',c:'Al Hussein SC (JOR)',v:'—'}],s:['西亚技术','防守反击','塔马里核心'],sd:'2024亚洲杯表现出色，塔马里是进攻核心，防守纪律性强。',f:'4-4-2'},KOR:{r:20,c:{n:'洪明甫',t:'Korea Republic',a:'TBD'},p:[{n:'孙兴慜',p:'前锋',c:'LAFC (USA)',v:'—'},{n:'曹圭成',p:'前锋',c:'FC Midtjylland (DEN)',v:'—'},{n:'李记赫',p:'中场',c:'Gangwon FC (KOR)',v:'—'},{n:'黄仁范',p:'中场',c:'Feyenoord Rotterdam (NED)',v:'—'},{n:'李汉范',p:'后卫',c:'FC Midtjylland (DEN)',v:'—'},{n:'金承奎',p:'门将',c:'FC Tokyo (JPN)',v:'—'}],s:['速度反击','边路冲击','孙兴慜核心'],sd:'孙兴慜领衔的速度反击体系，金玟哉坐镇后防，跑动能力出色。',f:'4-4-2'},KSA:{r:43,c:{n:'乔治斯·多尼斯',t:'Greece',a:'TBD'},p:[{n:'艾曼·叶海亚',p:'前锋',c:'Al Nassr FC (KSA)',v:'—'},{n:'菲拉斯·布里坎',p:'前锋',c:'Al Ahli FC (KSA)',v:'—'},{n:'纳赛尔·达瓦萨里',p:'中场',c:'Al Hilal SC (KSA)',v:'—'},{n:'穆萨卜·朱瓦尔',p:'中场',c:'Al Qadsiah FC (KSA)',v:'—'},{n:'阿里·马杰拉希',p:'后卫',c:'Al Ahli FC (KSA)',v:'—'},{n:'纳瓦夫·阿基迪',p:'门将',c:'Al Nassr FC (KSA)',v:'—'}],s:['技术足球','曼奇尼体系','控球为主'],sd:'曼奇尼执教的沙特正转型技术流，但整体实力与世界强队有差距。',f:'4-3-3'},MAR:{r:15,c:{n:'穆罕默德·瓦赫比',t:'Morocco',a:'TBD'},p:[{n:'苏菲安·拉希米',p:'前锋',c:'Al Ain FC (UAE)',v:'—'},{n:'卜拉欣·迪亚斯',p:'前锋',c:'Real Madrid C. F. (ESP)',v:'—'},{n:'索菲扬·阿姆拉巴特',p:'中场',c:'Real Betis (ESP)',v:'—'},{n:'阿尤布·布阿迪',p:'中场',c:'Lille OSC (FRA)',v:'—'},{n:'阿什拉夫·哈基米',p:'后卫',c:'Paris Saint-Germain (FRA)',v:'—'},{n:'亚辛·布努',p:'门将',c:'Al Hilal SC (KSA)',v:'—'}],s:['铁血防守','快速反击','团队纪律'],sd:'极致防守反击体系，2022世界杯四强黑马奇迹有望延续。',f:'4-1-4-1'},MEX:{r:14,c:{n:'哈维尔·阿吉雷',t:'Mexico',a:'TBD'},p:[{n:'劳尔·希门尼斯',p:'前锋',c:'Fulham FC (ENG)',v:'—'},{n:'亚历克西斯·维加',p:'前锋',c:'Deportivo Toluca FC (MEX)',v:'—'},{n:'埃里克·利拉',p:'中场',c:'CF Cruz Azul (MEX)',v:'—'},{n:'路易斯·罗莫',p:'中场',c:'CD Guadalajara (MEX)',v:'—'},{n:'豪尔赫·桑切斯',p:'后卫',c:'PAOK Saloniki (GRE)',v:'—'},{n:'劳尔·兰赫尔',p:'门将',c:'CD Guadalajara (MEX)',v:'—'}],s:['技术控球','中场调度','经验老道'],sd:'中北美传统强队，技术细腻、大赛经验丰富，但锋线终结能力时有不足。',f:'4-3-3'},NED:{r:7,c:{n:'罗纳德·科曼',t:'Netherlands',a:'TBD'},p:[{n:'沃特·韦霍斯特',p:'前锋',c:'AFC Ajax (NED)',v:'—'},{n:'孟菲斯·德佩',p:'前锋',c:'SC Corinthians (BRA)',v:'—'},{n:'马滕·德罗恩',p:'中场',c:'Atalanta Bergamo (ITA)',v:'—'},{n:'贾斯汀·克鲁伊维特',p:'中场',c:'AFC Bournemouth (ENG)',v:'—'},{n:'尤里恩·廷伯',p:'后卫',c:'Arsenal FC (ENG)',v:'—'},{n:'巴尔特·费布鲁亨',p:'门将',c:'Brighton & Hove Albion FC (ENG)',v:'—'}],s:['全攻全守','边翼卫突击','高位防线'],sd:'荷兰队秉承全攻全守哲学，弗林蓬的双翼卫体系是进攻重要发起点。',f:'3-4-3'},NOR:{r:24,c:{n:'斯托莱·索尔巴肯',t:'Norway',a:'TBD'},p:[{n:'亚历山大·瑟洛特',p:'前锋',c:'Atlético De Madrid (ESP)',v:'—'},{n:'埃尔林·哈兰德',p:'前锋',c:'Manchester City FC (ENG)',v:'—'},{n:'莫滕·托斯比',p:'中场',c:'US Cremonese (ITA)',v:'—'},{n:'帕特里克·贝格',p:'中场',c:'FK Bodø/Glimt (NOR)',v:'—'},{n:'克里斯托弗·阿耶尔',p:'后卫',c:'Brentford FC (ENG)',v:'—'},{n:'厄尔扬·尼兰',p:'门将',c:'Sevilla FC (ESP)',v:'—'}],s:['哈兰德终结','厄德高创造','北欧力量'],sd:'哈兰德+厄德高双星组合威力巨大，球队围绕二人构建高效进攻体系。',f:'4-3-3'},NZL:{r:60,c:{n:'达伦·贝兹利',t:'New Zealand',a:'TBD'},p:[{n:'克里斯·伍德',p:'前锋',c:'Nottingham Forest FC (ENG)',v:'—'},{n:'科斯塔·巴巴鲁塞斯',p:'前锋',c:'WS Wanderers FC (AUS)',v:'—'},{n:'乔·贝尔',p:'中场',c:'Viking Stavanger (NOR)',v:'—'},{n:'马修·加伯特',p:'中场',c:'Peterborough United FC (ENG)',v:'—'},{n:'蒂姆·佩恩',p:'后卫',c:'Wellington Phoenix FC (NZL)',v:'—'},{n:'马克斯·克罗科姆',p:'门将',c:'Millwall FC (ENG)',v:'—'}],s:['英式长传','身体对抗','伍德核心'],sd:'以克里斯·伍德为进攻支点，打法直接，身体对抗是大洋洲特色。',f:'4-4-2'},PAN:{r:62,c:{n:'托马斯·克里斯蒂安森',t:'Spain',a:'TBD'},p:[{n:'托马斯·罗德里格斯',p:'前锋',c:'Deportivo Saprissa (CRC)',v:'—'},{n:'何塞·法哈尔多',p:'前锋',c:'CD Universidad Católica (ECU)',v:'—'},{n:'克里斯蒂安·马丁内斯',p:'中场',c:'Hapoel Kiryat Shmona FC (ISR)',v:'—'},{n:'何塞·路易斯·罗德里格斯',p:'中场',c:'FC Juárez (MEX)',v:'—'},{n:'塞萨尔·布莱克曼',p:'后卫',c:'ŠK Slovan Bratislava (SVK)',v:'—'},{n:'路易斯·梅希亚',p:'门将',c:'Club Nacional (URU)',v:'—'}],s:['中北美风格','防守反击','整体足球'],sd:'战术纪律较好，防守组织严密，但进攻端缺乏决定性球员。',f:'5-4-1'},PAR:{r:38,c:{n:'古斯塔沃·阿尔法罗',t:'Argentina',a:'TBD'},p:[{n:'安东尼奥·萨纳夫里亚',p:'前锋',c:'US Cremonese (ITA)',v:'—'},{n:'亚历杭德罗·罗梅罗·加马拉',p:'前锋',c:'Al Ain FC (UAE)',v:'—'},{n:'拉蒙·索萨',p:'中场',c:'SE Palmeiras (BRA)',v:'—'},{n:'迭戈·戈麦斯',p:'中场',c:'Brighton & Hove Albion FC (ENG)',v:'—'},{n:'古斯塔沃·贝拉斯克斯',p:'后卫',c:'Cerro Porteño (PAR)',v:'—'},{n:'加蒂托·费尔南德斯',p:'门将',c:'Cerro Porteño (PAR)',v:'—'}],s:['南美技术','防守反击','边路突进'],sd:'延续南美技术风格，阿尔米隆和恩西索是进攻双引擎。',f:'4-4-2'},POR:{r:8,c:{n:'罗伯托·马丁内斯',t:'Spain',a:'TBD'},p:[{n:'克里斯蒂亚诺·罗纳尔多',p:'前锋',c:'Al Nassr FC (KSA)',v:'—'},{n:'贡萨洛·拉莫斯',p:'前锋',c:'Paris Saint-Germain (FRA)',v:'—'},{n:'马特乌斯·努内斯',p:'中场',c:'Manchester City FC (ENG)',v:'—'},{n:'布鲁诺·费尔南德斯',p:'中场',c:'Manchester United FC (ENG)',v:'—'},{n:'内尔松·塞梅多',p:'后卫',c:'Fenerbahçe SK (TUR)',v:'—'},{n:'迪奥戈·科斯塔',p:'门将',c:'FC Porto (POR)',v:'—'}],s:['技术控球','边路爆破','灵活前场'],sd:'C罗退役后葡萄牙更加团队化，莱昂和B费是进攻核心。',f:'4-3-3'},QAT:{r:44,c:{n:'尤伦·洛佩特吉',t:'Spain',a:'TBD'},p:[{n:'艾哈迈德·阿拉丁',p:'前锋',c:'Al Rayyan SC (QAT)',v:'—'},{n:'埃德米尔森·儒尼奥尔',p:'前锋',c:'Al Duhail SC (QAT)',v:'—'},{n:'阿卜杜勒阿齐兹·哈特姆',p:'中场',c:'Al Rayyan SC (QAT)',v:'—'},{n:'卡里姆·布迪亚夫',p:'中场',c:'Al Duhail SC (QAT)',v:'—'},{n:'佩德罗·米格尔',p:'后卫',c:'Al Sadd SC (QAT)',v:'—'},{n:'马哈茂德·阿布纳达',p:'门将',c:'Al Rayyan SC (QAT)',v:'—'}],s:['控球传切','亚洲冠军','进攻足球'],sd:'作为亚洲冠军有一定技术实力，但面对世界强队防守压力巨大。',f:'4-3-3'},RSA:{r:42,c:{n:'雨果·布鲁斯',t:'Belgium',a:'TBD'},p:[{n:'奥斯温·阿波利斯',p:'前锋',c:'Orlando Pirates FC (RSA)',v:'—'},{n:'切潘·莫雷米',p:'前锋',c:'Orlando Pirates FC (RSA)',v:'—'},{n:'特博霍·莫科埃纳',p:'中场',c:'Mamelodi Sundowns FC (RSA)',v:'—'},{n:'塔伦特·姆巴塔',p:'中场',c:'Orlando Pirates FC (RSA)',v:'—'},{n:'塔邦·马图卢迪',p:'后卫',c:'Polokwane City FC (RSA)',v:'—'},{n:'龙文·威廉斯',p:'门将',c:'Mamelodi Sundowns FC (RSA)',v:'—'}],s:['非洲传统','速度反击','本土化'],sd:'以本土联赛球员为主，配合默契但缺乏欧洲顶级联赛经验。',f:'4-4-2'},SCO:{r:28,c:{n:'史蒂夫·克拉克',t:'Scotland',a:'TBD'},p:[{n:'林登·戴克斯',p:'前锋',c:'Charlton Athletic FC (ENG)',v:'—'},{n:'切·亚当斯',p:'前锋',c:'Torino FC (ITA)',v:'—'},{n:'斯科特·麦克托米奈',p:'中场',c:'SSC Napoli (ITA)',v:'—'},{n:'约翰·麦金',p:'中场',c:'Aston Villa FC (ENG)',v:'—'},{n:'阿龙·希基',p:'后卫',c:'Brentford FC (ENG)',v:'—'},{n:'安格斯·冈恩',p:'门将',c:'Nottingham Forest FC (ENG)',v:'—'}],s:['英式传统','边路传中','身体对抗'],sd:'坚持英式足球传统，罗伯逊和蒂尔尼双左后卫配置是战术亮点。',f:'3-4-3'},SEN:{r:17,c:{n:'帕普·蒂亚乌',t:'Senegal',a:'TBD'},p:[{n:'阿萨内·迪奥',p:'前锋',c:'Como (ITA)',v:'—'},{n:'班巴·迪昂',p:'前锋',c:'FC Lorient (FRA)',v:'—'},{n:'伊德里萨·加纳·盖耶',p:'中场',c:'Everton FC (ENG)',v:'—'},{n:'帕特·西斯',p:'中场',c:'Rayo Vallecano (ESP)',v:'—'},{n:'马马杜·萨尔',p:'后卫',c:'Chelsea FC (ENG)',v:'—'},{n:'耶万·迪乌夫',p:'门将',c:'OGC Nice (FRA)',v:'—'}],s:['身体对抗','快速反击','非洲力量'],sd:'多名球员在欧洲顶级联赛效力，身体素质和速度是最大武器。',f:'4-3-3'},SUI:{r:18,c:{n:'穆拉特·雅金',t:'Switzerland',a:'TBD'},p:[{n:'布雷尔·恩博洛',p:'前锋',c:'Stade Rennais FC (FRA)',v:'—'},{n:'丹·恩多耶',p:'前锋',c:'Nottingham Forest FC (ENG)',v:'—'},{n:'德尼斯·扎卡里亚',p:'中场',c:'AS Monaco (FRA)',v:'—'},{n:'雷莫·弗罗伊勒',p:'中场',c:'Bologna FC (ITA)',v:'—'},{n:'米罗·穆海姆',p:'后卫',c:'Hamburger SV (GER)',v:'—'},{n:'格雷戈·科贝尔',p:'门将',c:'Borussia Dortmund (GER)',v:'—'}],s:['防守稳固','团队协作','定位球'],sd:'防守组织严密，扎卡是绝对核心，整体打法实用有韧性。',f:'3-5-2'},SWE:{r:26,c:{n:'格雷厄姆·波特',t:'England',a:'TBD'},p:[{n:'亚历山大·伊萨克',p:'前锋',c:'Liverpool FC (ENG)',v:'—'},{n:'安东尼·埃兰加',p:'前锋',c:'Newcastle United FC (ENG)',v:'—'},{n:'卢卡斯·贝里瓦尔',p:'中场',c:'Tottenham Hotspur FC (ENG)',v:'—'},{n:'本杰明·尼格伦',p:'中场',c:'Celtic FC (SCO)',v:'—'},{n:'古斯塔夫·拉格比尔克',p:'后卫',c:'SC Braga (POR)',v:'—'},{n:'雅各布·维德尔·塞特斯特伦',p:'门将',c:'Derby County FC (ENG)',v:'—'}],s:['北欧力量','速度反击','伊萨克核心'],sd:'体能充沛、防守硬朗，伊萨克和库卢塞夫斯基是进攻端主要威胁。',f:'4-4-2'},TUN:{r:40,c:{n:'萨布里·拉穆希',t:'France',a:'TBD'},p:[{n:'埃利亚斯·阿舒里',p:'前锋',c:'FC København (DEN)',v:'—'},{n:'埃利亚斯·萨阿德',p:'前锋',c:'Hannover 96 (GER)',v:'—'},{n:'汉尼拔·梅杰布里',p:'中场',c:'Burnley FC (ENG)',v:'—'},{n:'伊斯梅尔·加尔比',p:'中场',c:'FC Augsburg (GER)',v:'—'},{n:'阿里·阿卜迪',p:'后卫',c:'OGC Nice (FRA)',v:'—'},{n:'穆希卜·沙马赫',p:'门将',c:'Club Africain (TUN)',v:'—'}],s:['防守反击','整体战术','纪律严明'],sd:'战术纪律好、防守组织严密，但进攻端缺乏顶级球星。',f:'4-3-3'},TUR:{r:23,c:{n:'文森佐·蒙特拉',t:'Italy',a:'TBD'},p:[{n:'克雷姆·阿克蒂尔科格鲁',p:'前锋',c:'Fenerbahçe SK (TUR)',v:'—'},{n:'阿尔达·居莱尔',p:'前锋',c:'Real Madrid C. F. (ESP)',v:'—'},{n:'萨利赫·厄兹詹',p:'中场',c:'Borussia Dortmund (GER)',v:'—'},{n:'奥尔昆·柯克曲',p:'中场',c:'Beşiktaş JK (TUR)',v:'—'},{n:'泽基·切利克',p:'后卫',c:'AS Roma (ITA)',v:'—'},{n:'梅尔特·居诺克',p:'门将',c:'Fenerbahçe SK (TUR)',v:'—'}],s:['技术中场','年轻天才','进攻足球'],sd:'拥有居莱尔、伊尔迪兹等天才新星，进攻端充满创造力但稳定性是短板。',f:'4-2-3-1'},URU:{r:11,c:{n:'马塞洛·贝尔萨',t:'Argentina',a:'TBD'},p:[{n:'达尔文·努涅斯',p:'前锋',c:'Al Hilal SC (KSA)',v:'—'},{n:'法昆多·佩利斯特里',p:'前锋',c:'Panathinaikos FC (GRE)',v:'—'},{n:'曼努埃尔·乌加特',p:'中场',c:'Manchester United FC (ENG)',v:'—'},{n:'罗德里戈·本坦库尔',p:'中场',c:'Tottenham Hotspur FC (ENG)',v:'—'},{n:'何塞·玛丽亚·希门尼斯',p:'后卫',c:'Atlético De Madrid (ESP)',v:'—'},{n:'塞尔希奥·罗切特',p:'门将',c:'SC Internacional (BRA)',v:'—'}],s:['高压疯抢','快速攻防','边路冲击'],sd:'贝尔萨的乌拉圭打高强度压迫和疯狂跑动，巴尔韦德和努涅斯是关键人物。',f:'4-3-3'},USA:{r:13,c:{n:'毛里西奥·波切蒂诺',t:'Argentina',a:'TBD'},p:[{n:'里卡多·佩皮',p:'前锋',c:'PSV Eindhoven (NED)',v:'—'},{n:'克里斯蒂安·普利西奇',p:'前锋',c:'AC Milan (ITA)',v:'—'},{n:'泰勒·亚当斯',p:'中场',c:'AFC Bournemouth (ENG)',v:'—'},{n:'乔瓦尼·雷纳',p:'中场',c:'Borussia Mönchengladbach (GER)',v:'—'},{n:'塞尔吉诺·德斯特',p:'后卫',c:'PSV Eindhoven (NED)',v:'—'},{n:'马特·特纳',p:'门将',c:'New England Revolution (USA)',v:'—'}],s:['高压体能','运动能力','快速转换'],sd:'波切蒂诺治下的美国队体能充沛、压迫积极，多名球员在欧洲效力。',f:'4-3-3'},UZB:{r:50,c:{n:'法比奥·卡纳瓦罗',t:'Italy',a:'TBD'},p:[{n:'埃尔多尔·绍穆罗多夫',p:'前锋',c:'Başakşehir FK (TUR)',v:'—'},{n:'阿齐兹别克·阿莫诺夫',p:'前锋',c:'FK Dinamo Samarkand (UZB)',v:'—'},{n:'阿克马尔·莫兹戈沃伊',p:'中场',c:'Pakhtakor Tashkent FK (UZB)',v:'—'},{n:'奥塔别克·舒库罗夫',p:'中场',c:'Baniyas Club (UAE)',v:'—'},{n:'阿卜杜科迪尔·胡萨诺夫',p:'后卫',c:'Manchester City FC (ENG)',v:'—'},{n:'乌特基尔·尤苏波夫',p:'门将',c:'PFC Navbahor Namangan (UZB)',v:'—'}],s:['中亚力量','反击速度','技术成长'],sd:'在卡塔内茨调教下进步明显，年轻球员技术能力和战术素养提升。',f:'4-2-3-1'}};
window.teamDB = teamDB;

// ========== ODDS (已剥离至 oddsdata.js) ==========
// 桥接 oddsdata.js 全局变量到局部作用域
var matchOdds = window.matchOdds || {};
var liveOdds = window.liveOdds || {};
var initialOdds = window.initialOdds || {};
var lastUpdate = window.lastUpdate || '2025-06-27';
if(!window.matchOdds){console.error('❌ oddsdata.js 未加载!');}
function getFlag(code){return typeof pastFlag==='function'?pastFlag(code):'https://flagcdn.com/w80/'+(code.toLowerCase())+'.png';}

function getGMTBJ(gid,mi){const t={A:['6月12日 03:00','6月12日 10:00','6月19日 00:00','6月19日 09:00','6月25日 09:00','6月25日 09:00'],B:['6月13日 03:00','6月14日 03:00','6月19日 03:00','6月19日 06:00','6月25日 03:00','6月25日 03:00'],C:['6月14日 06:00','6月14日 09:00','6月20日 06:00','6月20日 09:00','6月25日 06:00','6月25日 06:00'],D:['6月13日 09:00','6月14日 12:00','6月20日 03:00','6月21日 00:00','6月26日 10:00','6月26日 10:00'],E:['6月15日 01:00','6月15日 07:00','6月21日 04:00','6月21日 08:00','6月26日 04:00','6月26日 04:00'],F:['6月15日 04:00','6月15日 10:00','6月21日 01:00','6月22日 00:00','6月26日 07:00','6月26日 07:00'],G:['6月16日 06:00','6月17日 00:00','6月22日 03:00','6月22日 09:00','6月27日 11:00','6月27日 11:00'],H:['6月16日 01:00','6月16日 06:00','6月22日 00:00','6月22日 06:00','6月27日 08:00','6月27日 08:00'],I:['6月17日 03:00','6月17日 06:00','6月23日 05:00','6月23日 08:00','6月27日 03:00','6月27日 03:00'],J:['6月17日 09:00','6月18日 00:00','6月23日 01:00','6月23日 11:00','6月28日 10:00','6月28日 10:00'],K:['6月18日 01:00','6月18日 10:00','6月24日 01:00','6月24日 10:00','6月28日 07:30','6月28日 07:30'],L:['6月18日 04:00','6月18日 07:00','6月24日 04:00','6月24日 07:00','6月28日 05:00','6月28日 05:00']};return t[gid]?t[gid][mi]:'待定';}
function getKOTime(sid,i){const t={R32:['6月29日 03:00','6月30日 01:00','6月30日 04:30','6月30日 09:00','7月1日 01:00','7月1日 05:00','7月1日 09:00','7月2日 00:00','7月2日 04:00','7月2日 08:00','7月3日 03:00','7月3日 07:00','7月3日 11:00','7月4日 02:00','7月4日 06:00','7月4日 09:30'],R16:['7月5日 01:00','7月5日 05:00','7月6日 04:00','7月6日 08:00','7月7日 03:00','7月7日 05:00','7月8日 00:00','7月8日 04:00'],QF:['7月10日 04:00','7月11日 03:00','7月12日 05:00','7月12日 09:00'],SF:['7月15日 03:00','7月16日 03:00'],TP:['7月19日 05:00'],FINAL:['7月20日 03:00']};const a=t[sid];return a&&i<a.length?a[i]:'待定';}
const pairingsByGroup={'A':[[0,1],[2,3],[3,1],[0,2],[1,2],[3,0]],'B':[[0,1],[2,3],[3,1],[0,2],[3,0],[1,2]],'C':[[0,1],[2,3],[3,1],[0,2],[3,0],[1,2]],'D':[[0,1],[2,3],[0,2],[3,1],[3,0],[1,2]],'E':[[0,1],[2,3],[0,2],[3,1],[3,0],[1,2]],'F':[[0,1],[2,3],[0,2],[3,1],[1,2],[3,0]],'G':[[0,1],[2,3],[0,2],[3,1],[1,2],[3,0]],'H':[[0,1],[2,3],[0,2],[3,1],[1,2],[3,0]],'I':[[0,1],[2,3],[0,2],[3,1],[3,0],[1,2]],'J':[[0,1],[2,3],[0,2],[3,1],[1,2],[3,0]],'K':[[0,1],[2,3],[0,2],[3,1],[3,0],[1,2]],'L':[[0,1],[2,3],[0,2],[3,1],[3,0],[1,2]]};
const mByGroup={},allGM=[];
groupsData.forEach(g=>{const t=g.teams;const p=pairingsByGroup[g.id]||[[0,1],[2,3],[0,2],[1,3],[0,3],[1,2]];const ms=p.map(([i,j],idx)=>({id:g.id+'_'+i+'_'+j,gid:g.id,gn:g.name,home:t[i],away:t[j],time:getGMTBJ(g.id,idx)}));mByGroup[g.id]=ms;allGM.push(...ms);});
window.allGM = allGM;

const koRounds=[{id:'R32',name:'32强',count:16,label:'32强'},{id:'R16',name:'16强',count:8,label:'16强'},{id:'QF',name:'8强',count:4,label:'8强'},{id:'SF',name:'4强',count:2,label:'4强'},{id:'TP',name:'季军赛',count:1,label:'季军赛'},{id:'FINAL',name:'决赛',count:1,label:'决赛'}];
const r32s=[{a:{g:'A',p:1},b:{g:'B',p:2}},{a:{g:'C',p:1},b:{g:'D',p:2}},{a:{g:'E',p:1},b:{g:'F',p:2}},{a:{g:'G',p:1},b:{g:'H',p:2}},{a:{g:'I',p:1},b:{g:'J',p:2}},{a:{g:'K',p:1},b:{g:'L',p:2}},{a:{g:'B',p:1},b:{g:'A',p:2}},{a:{g:'D',p:1},b:{g:'C',p:2}},{a:{g:'F',p:1},b:{g:'E',p:2}},{a:{g:'H',p:1},b:{g:'G',p:2}},{a:{g:'J',p:1},b:{g:'I',p:2}},{a:{g:'L',p:1},b:{g:'K',p:2}},{a:{g:'A',p:1},b:{g:'C',p:2}},{a:{g:'E',p:1},b:{g:'G',p:2}},{a:{g:'I',p:1},b:{g:'K',p:2}},{a:{g:'B',p:1},b:{g:'D',p:2}}];

function genKOs(){const ms=[];koRounds.forEach(r=>{for(let i=1;i<=r.count;i++){const m={id:r.id+'_'+i,sid:r.id,sn:r.name,time:getKOTime(r.id,i-1),tA:null,tB:null,sA:null,sB:null,w:null,af:true};if(r.id==='R32'&&i<=r32s.length){m.sA=r32s[i-1].a;m.sB=r32s[i-1].b;}ms.push(m);}});return ms;}
let koMs=genKOs();
const koByStage={};koMs.forEach(m=>{if(!koByStage[m.sid])koByStage[m.sid]=[];koByStage[m.sid].push(m);});

let gPreds=JSON.parse(localStorage.getItem('wc2026_groups')||'{}');
let kPreds=JSON.parse(localStorage.getItem('wc2026_knockout')||'{}');
let selMid=null,cGT='all',mTab='groups',cKR='R32',cProbMid=null;

function compStands(gid){const ms=mByGroup[gid];const ts=groupsData.find(g=>g.id===gid).teams;const st={};ts.forEach(t=>{st[t.code]={t:t,pts:0,gf:0,ga:0,gd:0};});let comp=true;ms.forEach(m=>{const p=gPreds[m.id];if(!p||p.sh==null||p.sa==null){comp=false;return;}st[m.home.code].gf+=p.sh;st[m.home.code].ga+=p.sa;st[m.away.code].gf+=p.sa;st[m.away.code].ga+=p.sh;if(p.sh>p.sa)st[m.home.code].pts+=3;else if(p.sa>p.sh)st[m.away.code].pts+=3;else{st[m.home.code].pts+=1;st[m.away.code].pts+=1;}});if(!comp)return null;Object.values(st).forEach(s=>{s.gd=s.gf-s.ga;});return Object.values(st).sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf).map(s=>s.t);}
function autoFillKO(){let ch=false;koMs.forEach(m=>{if(!m.sA||!m.sB)return;const sA=compStands(m.sA.g),sB=compStands(m.sB.g);if(!sA||!sB)return;const tA=sA[m.sA.p-1],tB=sB[m.sB.p-1];if(!tA||!tB)return;let p=kPreds[m.id];if(!p){p={tA:null,tB:null,sA:null,sB:null,w:null,af:true};kPreds[m.id]=p;}if(p.af===undefined)p.af=true;if(p.af){if(p.tA!==tA.code||p.tB!==tB.code){p.tA=tA.code;p.tB=tB.code;p.w=null;ch=true;}}});if(ch)saveK();}

function tdb(tc,sd){const t=tc?teamMap[tc]:null;if(!t)return '<span style="color:var(--text-secondary);flex:1;">待定</span>';const f=getFlag(t.code);return '<div class="team-block '+sd+'" style="justify-content:'+(sd==='home'?'flex-end':'flex-start')+';">'+(sd==='home'?'<div class="team-info" style="text-align:right;"><span class="team-name-zh">'+t.zh+'</span><span class="team-code">'+t.code+' · '+t.en+'</span></div><img class="team-flag" src="'+f+'" onerror="this.style.display=\'none\';" loading="lazy">':'')+(sd==='away'?'<img class="team-flag" src="'+f+'" onerror="this.style.display=\'none\';" loading="lazy"><div class="team-info" style="text-align:left;"><span class="team-name-zh">'+t.zh+'</span><span class="team-code">'+t.code+' · '+t.en+'</span></div>':'')+'</div>';}
function rSP(gid){const st=compStands(gid);if(!st)return '';const gr=groupsData.find(g=>g.id===gid);const ss={};gr.teams.forEach(t=>{ss[t.code]={t:t,pts:0,gf:0,ga:0,gd:0};});mByGroup[gid].forEach(m=>{const p=gPreds[m.id];if(!p||p.sh==null||p.sa==null)return;ss[m.home.code].gf+=p.sh;ss[m.home.code].ga+=p.sa;ss[m.away.code].gf+=p.sa;ss[m.away.code].ga+=p.sh;if(p.sh>p.sa)ss[m.home.code].pts+=3;else if(p.sa>p.sh)ss[m.away.code].pts+=3;else{ss[m.home.code].pts+=1;ss[m.away.code].pts+=1;}});Object.values(ss).forEach(s=>{s.gd=s.gf-s.ga;});const sor=Object.values(ss).sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf);let rows='';sor.forEach((s,i)=>{const rc=i===0?'rank-1':i===1?'rank-2':i===2?'rank-3':'';const ac=i<=1?'advance':'';const f=getFlag(s.t.code);rows+='<tr class="'+ac+'"><td class="'+rc+'">'+(i+1)+'</td><td style="text-align:left;"><img src="'+f+'" style="width:20px;height:14px;vertical-align:middle;margin-right:4px;" onerror="this.style.display=\'none\';">'+s.t.zh+'</td><td>'+s.pts+'</td><td>'+s.gf+'</td><td>'+s.ga+'</td><td>'+(s.gd>=0?'+'+s.gd:s.gd)+'</td></tr>';});return '<div class="standings-panel visible"><table class="standings-table"><thead><tr><th>#</th><th>球队</th><th>积分</th><th>进球</th><th>失球</th><th>净胜球</th></tr></thead><tbody>'+rows+'</tbody></table></div>';}
function rGM(){const grid=document.getElementById('groupsGrid');let h='';const se=document.getElementById('searchInput').value.trim().toLowerCase();groupsData.forEach(g=>{if(cGT!=='all'&&g.id!==cGT&&!se)return;let ms=mByGroup[g.id];if(se){ms=ms.filter(m=>m.home.zh.toLowerCase().includes(se)||m.home.code.toLowerCase().includes(se)||m.away.zh.toLowerCase().includes(se)||m.away.code.toLowerCase().includes(se));}if(ms.length===0)return;const pc=ms.filter(m=>{const p=gPreds[m.id];return p&&p.sh!=null&&p.sa!=null;}).length;h+='<div class="group-card" data-group="'+g.id+'"><div class="group-header"><span class="group-badge">'+g.name+'</span> '+g.name+' 小组赛<span style="margin-left:auto;font-size:0.75rem;color:var(--text-secondary);">已预测 '+pc+'/6</span></div><div class="match-list">'+ms.map(m=>{var mk='2026|'+m.gid+'|'+m.home.code+'|'+m.away.code;var fin=(typeof wc2026MatchDetails!=='undefined'&&wc2026MatchDetails[mk]);if(fin){var fs=fin.score||{sh:'?',sa:'?'};return '<div class="match-item finished" data-match-id="'+m.id+'" onclick="showMatchDetail(\'2026\',\''+m.gid+'\',\''+m.home.code+'\',\''+m.away.code+'\',false)" title="点击查看比赛详情"><span class="match-time">'+m.time+'</span>'+tdb(m.home.code,'home')+'<span class="vs-badge">VS</span>'+tdb(m.away.code,'away')+'<div class="score-input-group" style="background:rgba(212,168,67,0.15);border-radius:4px;padding:2px 0;"><span style="width:34px;text-align:center;font-weight:800;color:var(--gold-light);font-size:0.85rem;">'+fs.sh+'</span><span class="score-colon">:</span><span style="width:34px;text-align:center;font-weight:800;color:var(--gold-light);font-size:0.85rem;">'+fs.sa+'</span></div><span class=\"predict-indicator\"></span><button class=\"btn btn-analysis\" onclick="event.stopPropagation();showA(\''+m.id+'\')">📋对阵详情</button><button class="btn btn-venue" onclick=\"event.stopPropagation();showVenueAnalysis(\''+m.id+'\')\">🏟️赛场分析</button><button class="btn btn-prob" onclick="event.stopPropagation();calcP(\''+m.id+'\')">📊概率</button></div>';}const p=gPreds[m.id]||{};const is=m.id===selMid;const ip=p.sh!=null&&p.sa!=null;const sh=p.sh??'',sa=p.sa??'';const wn=p.w==='home'?m.home.zh:p.w==='away'?m.away.zh:p.w==='draw'?'平局':'';return '<div class="match-item'+(is?' selected':'')+(ip?' predicted':'')+'" data-match-id="'+m.id+'" onclick="selM(\''+m.id+'\')"><span class="match-time">'+m.time+'</span>'+tdb(m.home.code,'home')+'<span class="vs-badge">VS</span>'+tdb(m.away.code,'away')+'<div class="score-input-group" onclick="event.stopPropagation();"><input type="number" class="score-input" min="0" max="20" placeholder="-" value="'+sh+'" onchange="uGS(\''+m.id+'\',\'home\',this.value)" onfocus="selM(\''+m.id+'\')"><span class="score-colon">:</span><input type="number" class="score-input" min="0" max="20" placeholder="-" value="'+sa+'" onchange="uGS(\''+m.id+'\',\'away\',this.value)" onfocus="selM(\''+m.id+'\')"></div><span class="predict-indicator">'+(ip?'✅ '+wn:'')+'</span><button class="btn btn-analysis" onclick="event.stopPropagation();showA(\''+m.id+'\')">📋对阵详情</button><button class="btn btn-venue" onclick=\"event.stopPropagation();showVenueAnalysis(\''+m.id+'\')\">🏟️赛场分析</button><button class="btn btn-prob" onclick="event.stopPropagation();calcP(\''+m.id+'\')">📊概率</button></div>';}).join('')+'</div>'+rSP(g.id)+'</div>';});grid.innerHTML=h||'<div style="padding:40px;text-align:center;color:var(--text-secondary);">未找到匹配的球队</div>';}

// ========== PROBABILITY ==========
function poisson(lambda,k){if(k<0)return 0;let p=Math.exp(-lambda);for(let i=1;i<=k;i++)p*=lambda/i;return p;}
function oddsToLambda(ow,ol){const pw=1/ow,pl=1/ol,pd=1/((ow+ol)/2+0.5);const t=pw+pd+pl;const pWin=pw/t;const diff=(pWin-0.5)*4;const base=1.35;return{hl:Math.max(0.2,base+diff*0.7),al:Math.max(0.2,base-diff*0.7)};}
function calcGD(hl,al){const mg=7;const dHW=[],dD=[],dAW=[];let tHW=0,tD=0,tAW=0;const jt=[];for(let h=0;h<=mg;h++){jt[h]=[];for(let a=0;a<=mg;a++){const p=poisson(hl,h)*poisson(al,a);jt[h][a]=p;if(h>a)tHW+=p;else if(h===a)tD+=p;else tAW+=p;}}for(let g=1;g<=mg;g++){let ph=0;for(let a=0;a<g;a++)ph+=(jt[g]?jt[g][a]||0:0);dHW.push({goal:g,prob:tHW>0?ph/tHW*100:0});}for(let g=1;g<=mg;g++){const pd=jt[g]?jt[g][g]||0:0;dD.push({goal:g,prob:tD>0?pd/tD*100:0});}for(let g=1;g<=mg;g++){let pa=0;for(let h=0;h<g;h++)pa+=(jt[h]?jt[h][g]||0:0);dAW.push({goal:g,prob:tAW>0?pa/tAW*100:0});}return{hw:dHW,dd:dD,aw:dAW};}
function calcPbs(ho,ao){const rw=1/ho.w,rd=1/((ho.d+ao.d||3.2)/2),ra=1/ao.w;const t=rw+rd+ra;return{ph:(rw/t*100).toFixed(1),pd:(rd/t*100).toFixed(1),pa:(ra/t*100).toFixed(1)};}
function rPC(mid){if(window.renderProbModalV4){window.renderProbModalV4(mid);return;}const m=allGM.find(x=>x.id===mid);if(!m)return;const ho=liveOdds[m.home.code]||{w:2.50,d:3.20,l:2.80};const ao=liveOdds[m.away.code]||{w:2.80,d:3.20,l:2.50};const pr=calcPbs(ho,ao);const{hl,al}=oddsToLambda(ho.w,ao.w);const gd=calcGD(hl,al);const p=gPreds[mid];const cs=(p&&p.sh!=null&&p.sa!=null)?p.sh+'-'+p.sa:'未填写';const sh='<span class=\"source-tag source-william\">William Hill</span> (The Odds API)';let mh='<table class="prob-matrix"><thead><tr><th rowspan="2" style="width:50px;">进球数</th><th colspan="3" class="cond-header" style="color:#87ceeb;">'+m.home.zh+'胜 ('+pr.ph+'%)</th><th colspan="3" class="cond-header" style="color:#ccc;">平局 ('+pr.pd+'%)</th><th colspan="3" class="cond-header" style="color:#e74c3c;">'+m.away.zh+'胜 ('+pr.pa+'%)</th></tr><tr><th style="font-size:0.65rem;">赔率</th><th style="font-size:0.65rem;">概率</th><th style="font-size:0.65rem;">趋势</th><th style="font-size:0.65rem;">赔率</th><th style="font-size:0.65rem;">概率</th><th style="font-size:0.65rem;">趋势</th><th style="font-size:0.65rem;">赔率</th><th style="font-size:0.65rem;">概率</th><th style="font-size:0.65rem;">趋势</th></tr></thead><tbody>';for(let g=0;g<7;g++){const gl=g<6?'进'+(g+1)+'球':'进7+球';const hd=gd.hw[g]||{prob:0};const dd=gd.dd[g]||{prob:0};const ad=gd.aw[g]||{prob:0};const hOdd=hd.prob>0?(100/hd.prob*0.92).toFixed(2):'—';const dOdd=dd.prob>0?(100/dd.prob*0.92).toFixed(2):'—';const aOdd=ad.prob>0?(100/ad.prob*0.92).toFixed(2):'—';const bw=Math.max(2,Math.min(80,hd.prob*1.2));const bd=Math.max(2,Math.min(80,dd.prob*0.8));const ba=Math.max(2,Math.min(80,ad.prob*1.2));mh+='<tr><td class="goal-col">'+gl+'</td><td class="odd-val">'+hOdd+'</td><td class="prob-val">'+hd.prob.toFixed(1)+'%</td><td><span class="prob-bar" style="width:'+bw+'px;"></span></td><td class="odd-val">'+dOdd+'</td><td class="prob-val">'+dd.prob.toFixed(1)+'%</td><td><span class="prob-bar" style="width:'+bd+'px;background:#aaa;"></span></td><td class="odd-val">'+aOdd+'</td><td class="prob-val">'+ad.prob.toFixed(1)+'%</td><td><span class="prob-bar" style="width:'+ba+'px;background:#e74c3c;"></span></td></tr>';}mh+='</tbody></table>';const sum='<div style="display:flex;gap:20px;margin-top:16px;flex-wrap:wrap;"><div style="flex:1;min-width:180px;background:var(--surface2);padding:12px;border-radius:8px;text-align:center;"><div style="font-size:0.7rem;color:var(--text-secondary);">'+m.home.zh+' 胜</div><div style="font-size:1.4rem;font-weight:800;color:#87ceeb;">'+pr.ph+'%</div><div style="font-size:0.7rem;color:var(--text-secondary);">赔率 '+ho.w.toFixed(2)+'</div></div><div style="flex:1;min-width:180px;background:var(--surface2);padding:12px;border-radius:8px;text-align:center;"><div style="font-size:0.7rem;color:var(--text-secondary);">平局</div><div style="font-size:1.4rem;font-weight:800;color:#ccc;">'+pr.pd+'%</div><div style="font-size:0.7rem;color:var(--text-secondary);">赔率 '+ho.d.toFixed(2)+'</div></div><div style="flex:1;min-width:180px;background:var(--surface2);padding:12px;border-radius:8px;text-align:center;"><div style="font-size:0.7rem;color:var(--text-secondary);">'+m.away.zh+' 胜</div><div style="font-size:1.4rem;font-weight:800;color:#e74c3c;">'+pr.pa+'%</div><div style="font-size:0.7rem;color:var(--text-secondary);">赔率 '+ao.w.toFixed(2)+'</div></div></div>';const ui=lastUpdate?'<div class="update-info">📡 数据更新时间：<b>'+lastUpdate+'</b>（北京时间） | 数据源：'+sh+'</div>':'<div class="update-info">📡 数据源：初始模拟赔率 | 点击「🔄 更新数据」获取最新赔率</div>';document.getElementById('probContent').innerHTML='<p style="color:var(--gold-light);font-weight:700;margin-bottom:8px;font-size:1.1rem;">'+m.home.zh+' vs '+m.away.zh+'（'+m.time+'）</p>'+ui+'<p style="font-size:0.75rem;color:var(--text-secondary);margin-top:10px;margin-bottom:4px;">📊 胜平负条件下进球概率矩阵（进1球~进7+球）— 泊松分布模型 & 博彩赔率推导</p>'+sum+'<div style="overflow-x:auto;margin-top:8px;">'+mh+'</div><p style="font-size:0.65rem;color:var(--text-secondary);margin-top:8px;">* 当前预测比分：<b style="color:var(--gold-light);">'+cs+'</b> | λ主='+hl.toFixed(2)+', λ客='+al.toFixed(2)+'</p>';cProbMid=mid;}
window.calcP=function(mid){if(window.renderProbModalV4){window.renderProbModalV4(mid);}else{rPC(mid);}document.getElementById('probModal').classList.add('visible');};
window.closeProbModal=function(){document.getElementById('probModal').classList.remove('visible');cProbMid=null;};

// ========== UPDATE ODDS ==========
window.dataSource='William Hill';
window.updateOddsFromBookmakers=function(){
    const btn=document.getElementById('btnUpdateOdds');
    btn.disabled=true;
    btn.innerHTML='<span class=\"spinner\"></span>正在从 William Hill 获取最新数据...';
    setTimeout(()=>{
        // 从 matchOdds 提取各队最新赔率（取该队所有比赛赔率的均值作为实力基准）
        const teamStats={};
        Object.values(matchOdds).forEach(m=>{
            if(!teamStats[m.h])teamStats[m.h]={hw:[],aw:[],d:[]};
            if(!teamStats[m.a])teamStats[m.a]={hw:[],aw:[],d:[]};
            teamStats[m.h].hw.push(m.hw);
            teamStats[m.h].d.push(m.d);
            teamStats[m.a].aw.push(m.aw);
            teamStats[m.a].d.push(m.d);
        });
        Object.keys(liveOdds).forEach(code=>{
            const ts=teamStats[code];
            if(ts&&ts.hw.length>0){
                const avgHw=ts.hw.reduce((a,b)=>a+b,0)/ts.hw.length;
                const avgAw=ts.aw.reduce((a,b)=>a+b,0)/ts.aw.length;
                const avgD=ts.d.reduce((a,b)=>a+b,0)/ts.d.length;
                liveOdds[code]={w:Math.round(avgHw*100)/100,d:Math.round(avgD*100)/100,l:Math.round(avgAw*100)/100};
            }else{
                const o=initialOdds[code]||{w:2.80,d:3.20,l:2.80};
                liveOdds[code]={w:o.w,d:o.d,l:o.l};
            }
        });
        lastUpdate=new Date();
        dataSource='William Hill';
        const info=document.getElementById('updateInfo');
        if(info)info.innerHTML='<span class=\"source-tag source-william\">William Hill</span> 数据更新于 '+lastUpdate.toLocaleString('zh-CN')+' | 数据来源: The Odds API (72场小组赛)';
        btn.disabled=false;
        btn.textContent='🔄 刷新概率数据';
        showToast('✅ William Hill 概率数据已更新 (72场小组赛)');
    },800);
};

// ========== ANALYSIS ==========
function rFD(fm,tc){const pts=fm.split('-').map(Number);const pos=[];pos.push({x:50,y:90,r:'gk',l:'GK'});let tn=1;const rc=pts.length;const yS=73,yE=25,ySt=rc<=1?0:(yE-yS)/(rc-1);for(let row=0;row<rc;row++){const cnt=pts[row];const y=yS+row*ySt;const sp=70/(cnt+1);for(let col=0;col<cnt;col++){const x=15+sp*(col+1);let rl='mf';if(row===0)rl='df';else if(row===rc-1)rl='fw';pos.push({x,y,r:rl,l:''+tn});tn++;}}let dh='';pos.forEach(p=>{dh+='<div class="fm-dot '+p.r+'" style="left:'+p.x+'%;top:'+p.y+'%;">'+p.l+'</div>';});return '<div class="fm-pitch"><div class="fm-center-circle"></div><div class="fm-center-dot"></div><div class="fm-penalty-area fm-penalty-top"></div><div class="fm-penalty-area fm-penalty-bot"></div>'+dh+'<div class="fm-label">'+fm+'</div></div>';}

// ========== V13: H2H 往届交手记录 ==========
function findHeadToHead(codeA,codeB){
  const allYears=['2002','2006','2010','2014','2018','2022'];
  const results=[];
  allYears.forEach(year=>{
    const data=year==='2022'?wc2022Data:year==='2018'?wc2018Data:year==='2014'?wc2014Data:year==='2010'?wc2010Data:year==='2006'?wc2006Data:wc2002Data;
    if(!data)return;
    // search groups
    Object.values(data.groups).forEach(g=>{
      g.matches.forEach(m=>{
        if((m.h===codeA&&m.a===codeB)||(m.h===codeB&&m.a===codeA)){
          results.push({...m,year:year,stage:g.name,isKnockout:false});
        }
      });
    });
    // search knockout
    if(data.knockout){
      data.knockout.forEach(kr=>{
        kr.matches.forEach(m=>{
          if((m.h===codeA&&m.a===codeB)||(m.h===codeB&&m.a===codeA)){
            results.push({...m,year:year,stage:kr.stage,isKnockout:true});
          }
        });
      });
    }
  });
  return results;
}

// V13: 三档分类函数
function getMatchResultClass(m){
  if(!m.odds)return'expected';
  var aw=m.sh>m.sa?'home':m.sa>m.sh?'away':'draw';
  var fw=m.odds.hw<m.odds.aw?'home':m.odds.aw<m.odds.hw?'away':'draw';
  var favOdds=Math.min(m.odds.hw,m.odds.aw);
  var dogOdds=Math.max(m.odds.hw,m.odds.aw);
  
  // 预期: 赔率优势方赢了
  if(aw===fw)return'result-expected';
  // 爆冷: 赔率弱势方(赔率>=3.0)赢了
  if(aw!==fw&&aw!=='draw'&&dogOdds>=3.0)return'result-upset';
  // 超常: 平局且强队赔率<=1.8，或弱队小胜(弱赔率<3.0但>1.5)
  if(aw==='draw'&&favOdds<=1.8)return'result-above';
  if(aw!==fw&&aw!=='draw'&&dogOdds<3.0)return'result-above';
  return'result-above';
}

function getMatchBadge(m){
  var cls=getMatchResultClass(m);
  if(cls==='result-expected')return'<span class="past-expected-badge">✓预期</span>';
  if(cls==='result-above')return'<span class="past-above-badge">⚡超常</span>';
  if(cls==='result-upset')return'<span class="past-upset-badge">⚠爆冷</span>';
  return'';
}

function renderH2H(codeA,codeB,teamNameA,teamNameB){
	  var h2h=findHeadToHead(codeA,codeB);
	  if(h2h.length===0){
	    return '<div class="h2h-section"><div class="h2h-title">⚔️ 往届交手记录 ('+teamNameA+' vs '+teamNameB+')</div><div class="h2h-no-data">📭 两队近六届世界杯无交手记录</div></div>';
	  }
	  var html='<div class="h2h-section"><div class="h2h-title">⚔️ 往届交手记录 ('+teamNameA+' vs '+teamNameB+') — 近六届世界杯共 '+h2h.length+' 场</div>';
	  html+='<table class="h2h-table-refined">';
	  h2h.forEach(function(m){
	    var tnA=m.h===codeA?teamNameA:teamNameB;
	    var tnB=m.a===codeB?teamNameB:teamNameA;
	    var sc=m.h===codeA?(m.sh+':'+m.sa):(m.sa+':'+m.sh);
	    var yearLabel={'2002':'🇰🇷🇯🇵 2002','2006':'🇩🇪 2006','2010':'🇿🇦 2010','2014':'🇧🇷 2014','2018':'🇷🇺 2018','2022':'🇶🇦 2022'}[m.year]||m.year;
	    html+='<tr><td class="td-date">'+yearLabel+'</td><td class="td-home">'+tnA+'</td><td class="td-score">'+sc+'</td><td class="td-away">'+tnB+'</td><td class="td-tag">'+getMatchBadge(m)+'</td></tr>';
	  });
	  html+='</table></div>';
	  return html;
	}

window.showA=function(mid){
  const m=allGM.find(x=>x.id===mid);
  if(!m)return;
  const hd=teamDB[m.home.code];
  const ad=teamDB[m.away.code];
  const ct=document.getElementById('analysisContent');
  
// 从 squadDB 动态计算身价前6球员
function computeTop6FromSquad(code) {
    try {
        if (typeof squadDB === "undefined" || !squadDB[code]) return null;
        const team = squadDB[code];
        const allPlayers = [];
        const positions = ['gk','df','mf','fw'];
        positions.forEach(pos => {
            if (team[pos]) {
                team[pos].forEach(p => {
                    const val = parseFloat(p.v);
                    allPlayers.push({
                        n: p.cn || p.n,
                        en: p.n,
                        p: p.p,
                        c: p.c,
                        v: isNaN(val) ? 0 : val
                    });
                });
            }
        });
        // Sort by value descending
        allPlayers.sort((a,b) => b.v - a.v);
        return allPlayers.slice(0, 5);
    } catch(e) {
        console.warn('computeTop6FromSquad error:', e);
        return null;
    }
}

// 获取教练年龄
function getCoachAgeDynamic(code) {
    try {
        if (typeof getCoachAge === 'function') {
            return getCoachAge(code);
        }
        if (typeof coachDB !== "undefined" && coachDB[code] && coachDB[code].a) {
            return coachDB[code].a;
        }
    } catch(e) {}
    return '?';
}

function rtc(t,d,sd){
    const f=getFlag(t.code);
    if(!d)return '<div class="team-card '+sd+'" style="text-align:center"><div class="card-stripe"></div><img class="flag-lg" src="'+f+'" onerror="this.style.display=\'none\';" style="margin-top:8px"><div class="team-name-lg">'+t.zh+'</div><div class="team-code">'+t.code+' · '+(t.en||'')+'</div><p style="color:var(--text-secondary);text-align:center;padding:20px;">暂无详细分析数据</p></div>';
    const coRaw=d.c;const co={n:coRaw.n, t:coRaw.t, a:getCoachAgeDynamic(t.code)};const top6Dynamic=computeTop6FromSquad(t.code);const pl=top6Dynamic||d.p;
    let ph=pl.slice(0,5).map((p,i)=>'<div class="pl-row"><span class="pl-num">'+(i+1)+'</span><span class="pl-name">'+p.n+'</span><span class="pl-val">'+(window.formatValueWan?window.formatValueWan(p.v):p.v)+'</span></div>').join('');
    let sh=d.s.map(s=>'<span class="style-tag">'+s+'</span>').join('');
    let tv='';try{if(typeof squadDB!=='undefined'&&squadDB[t.code]){var sq=squadDB[t.code];var t2=0;['gk','df','mf','fw'].forEach(function(c){if(sq[c])sq[c].forEach(function(p){var v=parseFloat(p.v);if(!isNaN(v))t2+=v;});});if(t2>=10000)tv=(t2/10000).toFixed(1)+'亿€';else if(t2>0)tv=t2+'万€';}}catch(e){}
    return '<div class="team-card '+sd+'" style="text-align:center"><div class="card-stripe"></div><img class="flag-lg" src="'+f+'" onerror="this.style.display=\'none\';" style="margin-top:8px"><div class="team-name-lg">'+t.zh+'</div><div class="team-code">'+t.code+'</div><div style="margin:8px 0"><span class="data-pill gold">🏆 FIFA #'+(window.fifaWorldRanking&&window.fifaWorldRanking[t.code]?window.fifaWorldRanking[t.code]:d.r)+'</span>'+(tv?'<span class="data-pill em" style="margin-left:4px">💰 '+tv+'</span>':'')+'</div><div class="coach-mini" style="justify-content:center"><div class="coach-dot">👔</div><div><div style="font-weight:700;font-size:0.72rem">'+co.n+'</div><div style="color:#888;font-size:0.58rem">'+co.a+'岁</div></div></div><div style="margin:6px 0">'+sh+'</div><div style="text-align:left;margin-top:6px"><div class="section-title">⭐ TOP 5</div>'+ph+'</div><button class="btn-squad-gold" style="margin-top:8px;width:100%" onclick=\"event.stopPropagation();showSquadWithShimmer(\''+t.code+'\',this)\">📋 完整阵容</button></div>';
  }
  var h2hHtml=renderH2H(m.home.code,m.away.code,m.home.zh,m.away.zh);
  var _tParts=(m.time||'').replace('月','/').replace('日','').split(' ');var _dateRaw=_tParts[0]||'';var _timeStr=_tParts[1]||'';var _dp=_dateRaw.split('/');var _month=_dp[0]||'';var _day=_dp[1]||'';var _dateStr=(_month.length<2?'0'+_month:_month)+'/'+(_day.length<2?'0'+_day:_day);var fmHome=hd&&hd.f?rFD(hd.f,m.home.code):'';var fmAway=ad&&ad.f?rFD(ad.f,m.away.code):'';ct.innerHTML='<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;padding:16px;border-bottom:1px solid rgba(255,255,255,0.05)">'+rtc(m.home,hd,'home')+'<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 4px"><div class="vs-badge-refined">VS</div><div style="font-size:0.6rem;color:#777;margin-top:6px">'+m.gn+'组</div><div class="info-badge">'+_dateStr+'</div><div class="info-time">'+_timeStr+'</div></div>'+rtc(m.away,ad,'away')+'</div>'+(fmHome&&fmAway?'<div style="padding:10px 16px 0;text-align:center"><div class="fm-section-header" style="color:#d4a020">📐 预计阵型</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:4px 16px 12px"><div style="text-align:center"><div class="section-title" style="text-align:center;margin-bottom:2px">'+m.home.zh+' · '+hd.f+'</div>'+fmHome+'<div class="pitch-annotation"></div></div><div style="text-align:center"><div class="section-title" style="text-align:center;margin-bottom:2px">'+m.away.zh+' · '+ad.f+'</div>'+fmAway+'<div class="pitch-annotation"><span>← </span><span> →</span></div></div></div>':'')+h2hHtml+'<div class="src-footer">数据来源: FIFA | AI分析仅供参考</div>';
  document.getElementById('analysisModal').classList.add('visible');
};
window.closeAnalysisModal=function(){document.getElementById('analysisModal').classList.remove('visible');};

// ========== KNOCKOUT ==========
function bKT(){const c=document.getElementById('koTabs');let h='';koRounds.forEach(r=>{h+='<div class="tab'+(cKR===r.id?' active':'')+'" data-koround="'+r.id+'" onclick="sKR(\''+r.id+'\')">'+r.label+'</div>';});c.innerHTML=h;}
function rKP(){bKT();const ct=document.getElementById('koContent');let h='';koRounds.forEach(r=>{const ms=koByStage[r.id]||[];h+='<div class="ko-round-section'+(cKR===r.id?' active':'')+'" data-koround="'+r.id+'"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(380px,1fr));gap:12px;">'+ms.map(m=>{const p=kPreds[m.id]||{};const tA=p.tA||null,tB=p.tB||null;const sh=p.sA??'',sa=p.sB??'';const wn=p.w==='teamA'?(teamMap[tA]?.zh||''):p.w==='teamB'?(teamMap[tB]?.zh||''):p.w==='draw'?'平局':'';return '<div class="ko-match"><span class="match-time">'+m.time+'</span><div class="ko-team" onclick="eKT(event,\''+m.id+'\',\'tA\')"><div class="display">'+tdb(tA,'home')+'</div><select onchange="uKT(\''+m.id+'\',\'tA\',this.value)" onclick="event.stopPropagation();"><option value="">-- 选择 --</option>'+allTeams.map(t=>'<option value="'+t.code+'" '+(tA===t.code?'selected':'')+'>'+t.zh+'</option>').join('')+'</select></div><span class="vs-badge">VS</span><div class="ko-team" onclick="eKT(event,\''+m.id+'\',\'tB\')"><div class="display">'+tdb(tB,'away')+'</div><select onchange="uKT(\''+m.id+'\',\'tB\',this.value)" onclick="event.stopPropagation();"><option value="">-- 选择 --</option>'+allTeams.map(t=>'<option value="'+t.code+'" '+(tB===t.code?'selected':'')+'>'+t.zh+'</option>').join('')+'</select></div><div class="ko-score-group" onclick="event.stopPropagation();"><input type="number" class="score-input" min="0" max="20" placeholder="-" value="'+sh+'" onchange="uKS(\''+m.id+'\',\'sA\',this.value)"><span class="score-colon">:</span><input type="number" class="score-input" min="0" max="20" placeholder="-" value="'+sa+'" onchange="uKS(\''+m.id+'\',\'sB\',this.value)"></div><span class="predict-indicator">'+(p.w?'✅ '+wn:'')+'</span></div>';}).join('')+'</div></div>';});ct.innerHTML=h;}
window.sKR=function(rid){cKR=rid;document.querySelectorAll('#koTabs .tab').forEach(t=>t.classList.remove('active'));const tb=document.querySelector('#koTabs .tab[data-koround="'+rid+'"]');if(tb)tb.classList.add('active');document.querySelectorAll('.ko-round-section').forEach(s=>s.classList.remove('active'));const sc=document.querySelector('.ko-round-section[data-koround="'+rid+'"]');if(sc)sc.classList.add('active');};

// ========== ACTIONS ==========
window.selM=function(mid){if(selMid){const p=document.querySelector('.match-item[data-match-id="'+selMid+'"]');if(p)p.classList.remove('selected');}selMid=mid;const el=document.querySelector('.match-item[data-match-id="'+mid+'"]');if(el)el.classList.add('selected');};
window.uGS=function(mid,side,value){const sc=value===''?null:parseInt(value);if(sc!==null&&(isNaN(sc)||sc<0||sc>20)){showToast('⚠️ 请输入0-20之间的比分');return;}if(!gPreds[mid])gPreds[mid]={sh:null,sa:null,w:null};if(side==='home')gPreds[mid].sh=sc;else gPreds[mid].sa=sc;const sh=gPreds[mid].sh,sa=gPreds[mid].sa;if(sh!=null&&sa!=null){if(sh>sa)gPreds[mid].w='home';else if(sa>sh)gPreds[mid].w='away';else gPreds[mid].w='draw';}else gPreds[mid].w=null;saveG();autoFillKO();rGM();if(mTab==='knockout')rKP();showToast('✅ 比分已更新');};
window.uKS=function(mid,side,value){const sc=value===''?null:parseInt(value);if(sc!==null&&(isNaN(sc)||sc<0||sc>20)){showToast('⚠️ 请输入0-20之间的比分');return;}if(!kPreds[mid])kPreds[mid]={tA:null,tB:null,sA:null,sB:null,w:null,af:true};kPreds[mid][side]=sc;const sa=kPreds[mid].sA,sb=kPreds[mid].sB;if(sa!=null&&sb!=null){if(sa>sb)kPreds[mid].w='teamA';else if(sb>sa)kPreds[mid].w='teamB';else kPreds[mid].w='draw';}else kPreds[mid].w=null;saveK();if(mTab==='knockout')rKP();showToast('✅ 比分已更新');};
window.uKT=function(mid,side,code){if(!kPreds[mid])kPreds[mid]={tA:null,tB:null,sA:null,sB:null,w:null,af:true};kPreds[mid][side]=code||null;kPreds[mid].af=false;kPreds[mid].w=null;saveK();if(mTab==='knockout')rKP();};
window.eKT=function(ev,mid,side){ev.currentTarget.classList.toggle('editing');};
window.resetAllPredictions=function(){if(confirm('确定要清除所有小组赛预测结果吗？')){gPreds={};selMid=null;saveG();rGM();autoFillKO();if(mTab==='knockout')rKP();showToast('🔄 小组预测已重置');}};
window.showMyPredictionsModal=function(){const ct=document.getElementById('summaryContent');const gp=allGM.filter(m=>{const p=gPreds[m.id];return p&&p.sh!=null&&p.sa!=null;});const kp=koMs.filter(m=>{const p=kPreds[m.id];return p&&p.tA&&p.tB&&p.sA!=null&&p.sB!=null;});let h='';if(gp.length===0&&kp.length===0){h='<p style="color:var(--text-secondary);text-align:center;padding:20px;">暂无预测记录。</p>';}else{if(gp.length>0){h+='<p style="color:var(--gold-light);font-weight:700;">小组赛</p>';const ggd={};gp.forEach(m=>{if(!ggd[m.gid])ggd[m.gid]=[];ggd[m.gid].push(m);});for(const[gid,ms]of Object.entries(ggd)){h+='<p style="color:var(--gold-light);font-size:0.8rem;">'+ms[0].gn+'</p>';ms.forEach(m=>{const p=gPreds[m.id];const wn=p.w==='home'?m.home.zh:p.w==='away'?m.away.zh:'平局';h+='<div class="summary-item"><span>'+m.home.zh+' '+p.sh+':'+p.sa+' '+m.away.zh+'</span> <span>→ '+wn+'</span></div>';});}}if(kp.length>0){h+='<p style="color:var(--gold-light);font-weight:700;margin-top:12px;">淘汰赛</p>';kp.forEach(m=>{const p=kPreds[m.id];const ta=teamMap[p.tA]?.zh||p.tA;const tb=teamMap[p.tB]?.zh||p.tB;const wn=p.w==='teamA'?ta:p.w==='teamB'?tb:'平局';h+='<div class="summary-item"><span>'+ta+' '+p.sA+':'+p.sB+' '+tb+'</span> <span>→ '+wn+'</span> <small>('+m.sn+')</small></div>';});}}ct.innerHTML=h;document.getElementById('summaryModal').classList.add('visible');};
window.closeSummaryModal=function(){document.getElementById('summaryModal').classList.remove('visible');};
window.savePredictions=function(){saveG();saveK();const gc=Object.values(gPreds).filter(p=>p.sh!=null&&p.sa!=null).length;const kc=Object.values(kPreds).filter(p=>p.tA&&p.tB&&p.sA!=null&&p.sB!=null).length;showToast('💾 已保存 '+gc+' 场小组赛 + '+kc+' 场淘汰赛预测');};
function saveG(){localStorage.setItem('wc2026_groups',JSON.stringify(gPreds));}
function saveK(){localStorage.setItem('wc2026_knockout',JSON.stringify(kPreds));}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._to);t._to=setTimeout(()=>t.classList.remove('show'),2200);}

// ========== TABS ==========
function bGT(){const c=document.getElementById('groupTabs');let h='<div class="tab active" data-group="all" onclick="sGT(\'all\')">全部小组</div>';groupsData.forEach(g=>{h+='<div class="tab" data-group="'+g.id+'" onclick="sGT(\''+g.id+'\')">'+g.name+'</div>';});c.innerHTML=h;}
window.sGT=function(tid){cGT=tid;document.querySelectorAll('#groupTabs .tab').forEach(t=>t.classList.remove('active'));const tb=document.querySelector('#groupTabs .tab[data-group="'+tid+'"]');if(tb)tb.classList.add('active');document.getElementById('searchInput').value='';rGM();};
window.switchMainTab=function(tab){mTab=tab;document.querySelectorAll('#tabContainer .tab').forEach(t=>t.classList.remove('active'));var tb=document.querySelector('#tabContainer .tab[data-tab="'+tab+'"]');if(tb)tb.classList.add('active');document.getElementById('groupsContainer').style.display=tab==='groups'?'block':'none';document.getElementById('knockoutPanel').classList.toggle('visible',tab==='knockout');if(tab==='knockout'){autoFillKO();rKP();}};
window.filterTeams=function(){if(currentEdition==='2026'){rGM();}else{renderPastWCMatchesMain();}};
document.addEventListener('keydown',function(e){if(e.key==='Escape'){try{var pd=document.querySelector('.player-detail-overlay');if(pd){pd.remove();e.stopImmediatePropagation();return;}var pdm=document.getElementById('playerDetailModal');if(pdm&&pdm.classList.contains('visible')){if(typeof closePlayerDetail==='function')closePlayerDetail();e.stopImmediatePropagation();return;}var sm=document.getElementById('squadModal');if(sm&&sm.classList.contains('visible')){if(typeof closeSquadModal==='function')closeSquadModal();e.stopImmediatePropagation();return;}var modals=[{id:'matchDetailModal',close:closeMatchDetail},{id:'dataOverviewModal',close:closeDataOverview},{id:'backtestModal',close:closeBacktestModal},{id:'analysisModal',close:closeAnalysisModal},{id:'venueAnalysisModal',close:closeVenueAnalysis},{id:'probModal',close:closeProbModal},{id:'summaryModal',close:closeSummaryModal}];for(var i=0;i<modals.length;i++){var m=document.getElementById(modals[i].id);if(m&&m.classList.contains('visible')){modals[i].close();e.stopImmediatePropagation();return;}}selMid=null;if(mTab==='groups')rGM();}catch(e){}}if(e.ctrlKey&&e.key==='s'){e.preventDefault();savePredictions();}});
// pastWCModal removed - using main page view instead
['summaryModal','probModal','analysisModal','backtestModal'].forEach(id=>{var el=document.getElementById(id);if(el)el.addEventListener('click',function(e){if(e.target===this){if(id==='summaryModal')closeSummaryModal();if(id==='probModal')closeProbModal();if(id==='analysisModal')closeAnalysisModal();if(id==='backtestModal')closeBacktestModal();}});});

// ========== 往届世界杯数据 ==========
// pastWCYear, currentEdition, pastWCStage now in global scope (defined in app.js)



// ===== 球员搜索索引 (一次性构建，O(1)查找) =====
var __playerSearchIndex = {};
(function buildPlayerSearchIndex() {
    if (typeof playerDB === 'undefined') { console.warn('playerDB not loaded, skipping index build'); return; }
    var count = 0;
    // 合并补充球员数据
    if (typeof supplementalPlayers !== 'undefined') {
        for (var sk in supplementalPlayers) {
            if (!playerDB[sk]) { playerDB[sk] = supplementalPlayers[sk]; }
        }
    }
    for (var key in playerDB) {
        var pd = playerDB[key];
        // 索引所有可搜索字段
        var terms = [];
        if (pd.n) terms.push(pd.n.toLowerCase().trim());
        if (pd.nn && pd.nn !== pd.n) terms.push(pd.nn.toLowerCase().trim());
        if (pd.nk) terms.push(pd.nk.toLowerCase().trim());
        if (pd.slug) terms.push(pd.slug.toLowerCase().trim());
        // Key 本身也索引
        terms.push(key.toLowerCase().trim());
        
        for (var i = 0; i < terms.length; i++) {
            var t = terms[i];
            if (t && !__playerSearchIndex[t]) {
                __playerSearchIndex[t] = key;
                count++;
            }
        }
        // 额外：索引归一化版本（特殊字符→ASCII，支持 Od-eg-rd 匹配 Ødegaard 等）
        for (var i = 0; i < terms.length; i++) {
            var t = terms[i];
            var norm = t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
            if (norm !== t && norm && !__playerSearchIndex[norm]) {
                __playerSearchIndex[norm] = key;
                count++;
            }
        }
        // 索引中文名（通过翻译引擎生成）
        var cnName = (typeof translate !== 'undefined' && translate.player) ? translate.player(pd) : '';
        if (cnName && cnName !== pd.n && cnName !== pd.nn && !__playerSearchIndex[cnName]) {
            __playerSearchIndex[cnName] = key;
            __playerSearchIndex[cnName.toLowerCase()] = key;
            count++;
        }
        // 额外：索引按空格拆分的词（支持 "Cristiano Ronaldo" → "cristiano", "ronaldo" 部分匹配）
        var allText = ((pd.n||'') + ' ' + (pd.nn||'') + ' ' + key).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        var words = allText.split(/[\s,·\.\-]+/);
        var skipWords = { 'undefined':1, 'null':1, 'nan':1, '':1 };
        for (var w = 0; w < words.length; w++) {
            var word = words[w];
            if (word && word.length >= 2 && !skipWords[word] && !__playerSearchIndex[word]) {
                __playerSearchIndex[word] = key;
                count++;
            }
        }
    }
    console.log('🔍 球员搜索索引已构建: ' + count + ' 条, 覆盖 ' + Object.keys(playerDB).length + ' 名球员');
})();

// ===== Helper: 从显示名获取 playerDB key (O(1)) =====
function getPlayerKey(displayName) {
    if (!displayName || typeof playerDB === 'undefined') return null;
    
    // 1. 直接 key 匹配
    if (playerDB[displayName]) return displayName;
    
    // 2. 小写索引查找
    var lower = displayName.toLowerCase().trim();
    if (__playerSearchIndex[lower]) return __playerSearchIndex[lower];
    // 去重音规范化 (支持 Olić→Olic, Higuaín→Higuain)
    var lowerNoAccent = lower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
    if (lowerNoAccent !== lower && __playerSearchIndex[lowerNoAccent]) return __playerSearchIndex[lowerNoAccent];
    
    // ★ V1.63 修复: 去除常见姓名后缀 (对所有输入格式生效，不仅限于括号格式)
    // 处理 "NEYMAR JR" → "NEYMAR", "VINICIUS JUNIOR" → "VINICIUS" 等
    var suffixStripped = displayName.replace(/\s+(Jr|Sr|II|III|IV|Júnior|Júnior|Junior|Senior)\.?$/i, '').trim();
    if (suffixStripped !== displayName) {
        if (playerDB[suffixStripped]) return suffixStripped;
        var sfxLower = suffixStripped.toLowerCase();
        if (__playerSearchIndex[sfxLower]) return __playerSearchIndex[sfxLower];
        var sfxNoAccent = sfxLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
        if (sfxNoAccent !== sfxLower && __playerSearchIndex[sfxNoAccent]) return __playerSearchIndex[sfxNoAccent];
    }
    
    // ★ V1.63 修复: 名姓顺序交换 (对所有输入格式生效)
    // 处理 "Hwang In-beom" ↔ "In-beom Hwang" 等
    var wordsForSwap = displayName.split(' ');
    if (wordsForSwap.length >= 2) {
        var swappedName = wordsForSwap.slice(1).concat(wordsForSwap[0]).join(' ');
        if (swappedName !== displayName) {
            if (playerDB[swappedName]) return swappedName;
            var swLower = swappedName.toLowerCase();
            if (__playerSearchIndex[swLower]) return __playerSearchIndex[swLower];
            var swNoAccent = swLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
            if (swNoAccent !== swLower && __playerSearchIndex[swNoAccent]) return __playerSearchIndex[swNoAccent];
        }
    }
    
    // 3. 处理 "中文名 (English Name)" 格式
    var parenIdx = displayName.indexOf(' (');
    if (parenIdx >= 0) {
        var cnPart = displayName.substring(0, parenIdx).trim();
        var enPart = displayName.substring(parenIdx + 2).replace(')', '').trim();
        
        // 尝试中文部分
        if (playerDB[cnPart]) return cnPart;
        if (__playerSearchIndex[cnPart.toLowerCase()]) return __playerSearchIndex[cnPart.toLowerCase()];
        
        // 尝试英文部分 (优先精确匹配)
        if (playerDB[enPart]) return enPart;
        if (__playerSearchIndex[enPart.toLowerCase()]) return __playerSearchIndex[enPart.toLowerCase()];
        
        // 英文部分去重音后再试
        var enNoAccent = enPart.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
        if (enNoAccent !== enPart.toLowerCase() && __playerSearchIndex[enNoAccent]) return __playerSearchIndex[enNoAccent];
        
        // ★ V1.63 修复: 去除常见姓名后缀 (Jr, Sr, II, III, Júnior 等)
        var enPartStripped = enPart.replace(/\s+(Jr|Sr|II|III|IV|Júnior|Júnior|Junior|Senior)\.?$/i, '').trim();
        if (enPartStripped !== enPart) {
            if (playerDB[enPartStripped]) return enPartStripped;
            var enStrippedLower = enPartStripped.toLowerCase();
            if (__playerSearchIndex[enStrippedLower]) return __playerSearchIndex[enStrippedLower];
            var enStrippedNoAccent = enStrippedLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
            if (enStrippedNoAccent !== enStrippedLower && __playerSearchIndex[enStrippedNoAccent]) return __playerSearchIndex[enStrippedNoAccent];
        }
        
        // ★ V1.63 修复: 尝试交换名姓顺序 ("Hwang In-beom" ↔ "In-beom Hwang")
        var enWords = enPart.split(' ');
        if (enWords.length >= 2) {
            // 尝试交换顺序: 首词移到最后
            var swapped = enWords.slice(1).concat(enWords[0]).join(' ');
            if (swapped !== enPart) {
                if (playerDB[swapped]) return swapped;
                var swappedLower = swapped.toLowerCase();
                if (__playerSearchIndex[swappedLower]) return __playerSearchIndex[swappedLower];
                var swappedNoAccent = swappedLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
                if (swappedNoAccent !== swappedLower && __playerSearchIndex[swappedNoAccent]) return __playerSearchIndex[swappedNoAccent];
            }
            
            var lastName = enWords[enWords.length - 1];
            if (__playerSearchIndex[lastName.toLowerCase()]) return __playerSearchIndex[lastName.toLowerCase()];
            // 去重音后的姓
            var lnNoAccent = lastName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
            if (lnNoAccent !== lastName.toLowerCase() && __playerSearchIndex[lnNoAccent]) return __playerSearchIndex[lnNoAccent];
            
            // ★ V1.63 修复: 连字符名处理 — 尝试去连字符版本 ("In-beom" → "Inbeom")
            if (lastName.indexOf('-') >= 0) {
                var lastNameNoHyphen = lastName.replace(/-/g, '');
                var lnNoHyphenLower = lastNameNoHyphen.toLowerCase();
                if (__playerSearchIndex[lnNoHyphenLower]) return __playerSearchIndex[lnNoHyphenLower];
                var lnNoHyphenNoAccent = lnNoHyphenLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[øØ]/g,'o').replace(/[æÆ]/g,'ae').replace(/[åÅ]/g,'a').replace(/[łŁ]/g,'l').replace(/[đĐð]/g,'d').replace(/[þÞ]/g,'th').replace(/[ß]/g,'ss').replace(/[ıİ]/g,'i');
                if (lnNoHyphenNoAccent !== lnNoHyphenLower && __playerSearchIndex[lnNoHyphenNoAccent]) return __playerSearchIndex[lnNoHyphenNoAccent];
            }
        }
    }
    
    // 3.5 缩写名处理：M. Klose → 提取 Klose 并按姓搜索
    var abbrMatch = displayName.match(/^[A-Z]\.\s*(.+)$/);
    if (abbrMatch) {
        var lastName = abbrMatch[1];
        var lnLower = lastName.toLowerCase().trim();
        // 按姓精确匹配索引
        if (__playerSearchIndex[lnLower]) return __playerSearchIndex[lnLower];
        // 按姓后缀匹配索引
        for (var idxKey in __playerSearchIndex) {
            if (idxKey.endsWith(lnLower) && idxKey.length > lnLower.length) {
                return __playerSearchIndex[idxKey];
            }
        }
        // 按姓遍历 playerDB
        for (var key in playerDB) {
            var pd = playerDB[key];
            if (pd.n) {
                var nLower = pd.n.toLowerCase();
                var nParts = nLower.split(' ');
                if (nParts[nParts.length - 1] === lnLower) return key;
            }
        }
    }
    
    // 4. 模糊匹配：遍历索引查找包含查询的条目
    var matches = [];
    for (var idxKey in __playerSearchIndex) {
        if (idxKey.indexOf(lower) >= 0 && matches.indexOf(__playerSearchIndex[idxKey]) < 0) {
            matches.push(__playerSearchIndex[idxKey]);
        }
    }
    if (matches.length === 1) { var _sk=matches[0]; var _sp=playerDB[_sk]; if(_sp){ var _sf=[(_sp.n||""),(_sp.nn||""),(_sp.cn||""),(_sp.en||""),_sk]; var _ff=false; for(var _si=0;_si<_sf.length;_si++){ if(_sf[_si].toLowerCase().indexOf(lower)>=0){ _ff=true; break; } } if(_ff) return _sk; } }
    
    // 5. 最终回退：遍历 playerDB (慢但保证能找到)
    // V1.63 添加最低相关性要求，避免短查询误匹配（如"希门尼斯"误匹配到"Emam Ashour"）
    if (lower.length >= 3) {
        for (var key in playerDB) {
            var pd = playerDB[key];
            // 精确子串匹配
            if (pd.n && pd.n.toLowerCase().indexOf(lower) >= 0) {
                // 额外验证：查询长度≥4 或 匹配在单词边界上
                if (lower.length >= 4) return key;
                var nLower = pd.n.toLowerCase();
                var idx = nLower.indexOf(lower);
                var atWordStart = (idx === 0 || nLower.charAt(idx-1) === ' ');
                if (atWordStart) return key;
            }
            if (pd.nn && pd.nn.toLowerCase().indexOf(lower) >= 0) {
                if (lower.length >= 4) return key;
                var nnLower = pd.nn.toLowerCase();
                var idx2 = nnLower.indexOf(lower);
                var atWordStart2 = (idx2 === 0 || nnLower.charAt(idx2-1) === ' ');
                if (atWordStart2) return key;
            }
        }
    }
    
    return null; // 模糊匹配不自动返回，交由上层searchPlayer展示下拉列表
}

// ===== 渲染球员详情 Modal =====
// ===== 俱乐部名称翻译 & Logo 查找（V1.63） =====
var _clubNameMap = {"FC Barcelona":"巴塞罗那","fc barcelona":"巴塞罗那","Real Madrid":"皇家马德里","real madrid":"皇家马德里","Manchester United":"曼联","manchester united":"曼联","Manchester City":"曼城","manchester city":"曼城","Liverpool FC":"利物浦","liverpool fc":"利物浦","Chelsea FC":"切尔西","chelsea fc":"切尔西","Arsenal FC":"阿森纳","arsenal fc":"阿森纳","Bayern Munich":"拜仁慕尼黑","bayern munich":"拜仁慕尼黑","Borussia Dortmund":"多特蒙德","borussia dortmund":"多特蒙德","Juventus FC":"尤文图斯","juventus fc":"尤文图斯","AC Milan":"AC米兰","ac milan":"AC米兰","Inter Milan":"国际米兰","inter milan":"国际米兰","Paris Saint-Germain":"巴黎圣日耳曼","paris saint-germain":"巴黎圣日耳曼","Atlético Madrid":"马德里竞技","atlético madrid":"马德里竞技","Tottenham Hotspur":"热刺","tottenham hotspur":"热刺","AS Monaco":"摩纳哥","as monaco":"摩纳哥","Sporting CP":"葡萄牙体育","sporting cp":"葡萄牙体育","Santos FC":"桑托斯","santos fc":"桑托斯","Al-Nassr":"利雅得胜利","al-nassr":"利雅得胜利","Al-Hilal":"利雅得新月","al-hilal":"利雅得新月","Inter Miami CF":"国际迈阿密","inter miami cf":"国际迈阿密","Cruzeiro":"克鲁塞罗","cruzeiro":"克鲁塞罗","PSV Eindhoven":"PSV埃因霍温","psv eindhoven":"PSV埃因霍温","FC Girondins Bordeaux":"波尔多","fc girondins bordeaux":"波尔多","AS Cannes":"戛纳","as cannes":"戛纳","Real Sociedad":"皇家社会","real sociedad":"皇家社会","Corinthians":"科林蒂安","corinthians":"科林蒂安","Bayer Leverkusen":"勒沃库森","bayer leverkusen":"勒沃库森","RB Leipzig":"RB莱比锡","rb leipzig":"RB莱比锡","Brighton & Hove Albion":"布莱顿","brighton & hove albion":"布莱顿","Newcastle United":"纽卡斯尔","newcastle united":"纽卡斯尔","VfL Wolfsburg":"沃尔夫斯堡","vfl wolfsburg":"沃尔夫斯堡","Olympique Marseille":"马赛","olympique marseille":"马赛","West Ham United":"西汉姆联","west ham united":"西汉姆联","Everton FC":"埃弗顿","everton fc":"埃弗顿","Leicester City":"莱斯特城","leicester city":"莱斯特城","AS Roma":"罗马","as roma":"罗马","Sevilla FC":"塞维利亚","sevilla fc":"塞维利亚","Villarreal CF":"比利亚雷亚尔","villarreal cf":"比利亚雷亚尔","Athletic Club":"毕尔巴鄂竞技","athletic club":"毕尔巴鄂竞技","Valencia CF":"瓦伦西亚","valencia cf":"瓦伦西亚","Deportivo La Coruña":"拉科鲁尼亚","deportivo la coruña":"拉科鲁尼亚","SL Benfica":"本菲卡","sl benfica":"本菲卡","FC Porto":"波尔图","fc porto":"波尔图","AFC Ajax":"阿贾克斯","afc ajax":"阿贾克斯","Feyenoord":"费耶诺德","feyenoord":"费耶诺德","Galatasaray":"加拉塔萨雷","galatasaray":"加拉塔萨雷","Fenerbahçe":"费内巴切","fenerbahçe":"费内巴切","Shakhtar Donetsk":"顿涅茨克矿工","shakhtar donetsk":"顿涅茨克矿工","CSKA Moscow":"莫斯科中央陆军","cska moscow":"莫斯科中央陆军","SC Freiburg":"弗赖堡","sc freiburg":"弗赖堡","Borussia Mönchengladbach":"门兴","borussia mönchengladbach":"门兴","VfB Stuttgart":"斯图加特","vfb stuttgart":"斯图加特","Eintracht Frankfurt":"法兰克福","eintracht frankfurt":"法兰克福","Nottingham Forest":"诺丁汉森林","nottingham forest":"诺丁汉森林","Fulham FC":"富勒姆","fulham fc":"富勒姆","Southampton FC":"南安普顿","southampton fc":"南安普顿","Aston Villa":"阿斯顿维拉","aston villa":"阿斯顿维拉","Crystal Palace":"水晶宫","crystal palace":"水晶宫","Burnley FC":"伯恩利","burnley fc":"伯恩利","LOSC Lille":"里尔","losc lille":"里尔","Olympique Lyon":"里昂","olympique lyon":"里昂","Stade Rennais":"雷恩","stade rennais":"雷恩","OGC Nice":"尼斯","ogc nice":"尼斯","Celtic FC":"凯尔特人","celtic fc":"凯尔特人","Red Star Belgrade":"贝尔格莱德红星","red star belgrade":"贝尔格莱德红星","Dinamo Zagreb":"萨格勒布迪纳摩","dinamo zagreb":"萨格勒布迪纳摩","SSC Napoli":"那不勒斯","ssc napoli":"那不勒斯","ACF Fiorentina":"佛罗伦萨","acf fiorentina":"佛罗伦萨","SS Lazio":"拉齐奥","ss lazio":"拉齐奥","Bologna FC":"博洛尼亚","bologna fc":"博洛尼亚","FC Schalke 04":"沙尔克04","fc schalke 04":"沙尔克04","Hamburger SV":"汉堡","hamburger sv":"汉堡","Werder Bremen":"云达不来梅","werder bremen":"云达不来梅","River Plate":"河床","river plate":"河床","Boca Juniors":"博卡青年","boca juniors":"博卡青年","CR Flamengo":"弗拉门戈","cr flamengo":"弗拉门戈","SE Palmeiras":"帕尔梅拉斯","se palmeiras":"帕尔梅拉斯","Grêmio":"格雷米奥","grêmio":"格雷米奥","São Paulo FC":"圣保罗","são paulo fc":"圣保罗","Olympiacos":"奥林匹亚科斯","olympiacos":"奥林匹亚科斯","New York City FC":"纽约城","new york city fc":"纽约城","Los Angeles FC":"洛杉矶FC","los angeles fc":"洛杉矶FC","LA Galaxy":"洛杉矶银河","la galaxy":"洛杉矶银河","New York Red Bulls":"纽约红牛","new york red bulls":"纽约红牛","FC Basel":"巴塞尔","fc basel":"巴塞尔","Leeds United":"利兹联","leeds united":"利兹联","Al-Ittihad":"吉达联合","al-ittihad":"吉达联合","Shanghai Shenhua":"上海申花","shanghai shenhua":"上海申花","VfL Bochum":"波鸿","vfl bochum":"波鸿","Al-Shabab":"利雅得青年","al-shabab":"利雅得青年","Montpellier HSC":"蒙彼利埃","montpellier hsc":"蒙彼利埃","Vissel Kobe":"神户胜利船","vissel kobe":"神户胜利船","RSC Anderlecht":"安德莱赫特","rsc anderlecht":"安德莱赫特","Club Brugge":"布鲁日","club brugge":"布鲁日","Newell's Old Boys":"纽维尔老男孩","newell's old boys":"纽维尔老男孩","RCD Mallorca":"马洛卡","rcd mallorca":"马洛卡","Beşiktaş":"贝西克塔斯","beşiktaş":"贝西克塔斯","AS Saint-Étienne":"圣埃蒂安","as saint-étienne":"圣埃蒂安","Birmingham City":"伯明翰城","birmingham city":"伯明翰城","Manchester United FC":"曼联","manchester united fc":"曼联","Atletico Madrid 2017":"马德里竞技","atletico madrid 2017":"马德里竞技","Sporting Clube de Portugal":"葡萄牙体育","sporting clube de portugal":"葡萄牙体育","Al-Nassr FC":"利雅得胜利","al-nassr fc":"利雅得胜利","Al Hilal SFC":"利雅得新月","al hilal sfc":"利雅得新月","Cruzeiro Esporte Clube":"克鲁塞罗","cruzeiro esporte clube":"克鲁塞罗","FC Girondins de Bordeaux":"波尔多","fc girondins de bordeaux":"波尔多","Corinthians Paulista":"科林蒂安","corinthians paulista":"科林蒂安","Bayer 04 Leverkusen":"勒沃库森","bayer 04 leverkusen":"勒沃库森","RB Leipzig 2014":"RB莱比锡","rb leipzig 2014":"RB莱比锡","West Ham United FC":"西汉姆联","west ham united fc":"西汉姆联","Athletic Club Bilbao":"毕尔巴鄂竞技","athletic club bilbao":"毕尔巴鄂竞技","RC Deportivo de La Coruña":"拉科鲁尼亚","rc deportivo de la coruña":"拉科鲁尼亚","Galatasaray SK":"加拉塔萨雷","galatasaray sk":"加拉塔萨雷","Fenerbahçe SK":"费内巴切","fenerbahçe sk":"费内巴切","FC Shakhtar Donetsk":"顿涅茨克矿工","fc shakhtar donetsk":"顿涅茨克矿工","PFC CSKA Moscow":"莫斯科中央陆军","pfc cska moscow":"莫斯科中央陆军","VfB Stuttgart 1893 AG":"斯图加特","vfb stuttgart 1893 ag":"斯图加特","Nottingham Forest F.C.":"诺丁汉森林","nottingham forest f.c.":"诺丁汉森林","Aston Villa FC":"阿斯顿维拉","aston villa fc":"阿斯顿维拉","Crystal Palace FC":"水晶宫","crystal palace fc":"水晶宫","Olympique Lyonnais":"里昂","olympique lyonnais":"里昂","Stade Rennais FC":"雷恩","stade rennais fc":"雷恩","FK Crvena zvezda":"贝尔格莱德红星","fk crvena zvezda":"贝尔格莱德红星","GNK Dinamo Zagreb":"萨格勒布迪纳摩","gnk dinamo zagreb":"萨格勒布迪纳摩","Bologna F.C. 1909":"博洛尼亚","bologna f.c. 1909":"博洛尼亚","SV Werder Bremen":"云达不来梅","sv werder bremen":"云达不来梅","Palmeiras":"帕尔梅拉斯","palmeiras":"帕尔梅拉斯","São Paulo Futebol Clube":"圣保罗","são paulo futebol clube":"圣保罗","Olympiacos FC":"奥林匹亚科斯","olympiacos fc":"奥林匹亚科斯","LAFC":"洛杉矶FC","lafc":"洛杉矶FC","FC Basel 2019":"巴塞尔","fc basel 2019":"巴塞尔","Leeds United F.C.":"利兹联","leeds united f.c.":"利兹联","Al-Ittihad Club":"吉达联合","al-ittihad club":"吉达联合","Shanghai Shenhua FC":"上海申花","shanghai shenhua fc":"上海申花","Al-Shabab FC":"利雅得青年","al-shabab fc":"利雅得青年","Beşiktaş JK":"贝西克塔斯","beşiktaş jk":"贝西克塔斯","Birmingham City FC":"伯明翰城","birmingham city fc":"伯明翰城","Manchester City FC":"曼城","manchester city fc":"曼城","FC Bayern München":"拜仁慕尼黑","fc bayern münchen":"拜仁慕尼黑","FC Bayern Munich":"拜仁慕尼黑","fc bayern munich":"拜仁慕尼黑","Bor. Dortmund":"多特蒙德","bor. dortmund":"多特蒙德","Atletico Madrid":"马德里竞技","atletico madrid":"马德里竞技","Athletic Bilbao":"毕尔巴鄂竞技","athletic bilbao":"毕尔巴鄂竞技","Inter Milano":"国际米兰","inter milano":"国际米兰","Juventus":"尤文图斯","juventus":"尤文图斯","Olympique de Marseille":"马赛","olympique de marseille":"马赛","Tottenham":"热刺","tottenham":"热刺","Spurs":"热刺","spurs":"热刺","PSG":"巴黎圣日耳曼","psg":"巴黎圣日耳曼","Barça":"巴塞罗那","barça":"巴塞罗那","Barca":"巴塞罗那","barca":"巴塞罗那","Real Madrid CF":"皇家马德里","real madrid cf":"皇家马德里","Manchester Utd":"曼联","manchester utd":"曼联","Man Utd":"曼联","man utd":"曼联","Man United":"曼联","man united":"曼联","Man City":"曼城","man city":"曼城","Bayern":"拜仁慕尼黑","bayern":"拜仁慕尼黑","Dortmund":"多特蒙德","dortmund":"多特蒙德","Sport Club Corinthians Paulista":"科林蒂安","sport club corinthians paulista":"科林蒂安","CA River Plate":"河床","ca river plate":"河床","CA Boca Juniors":"博卡青年","ca boca juniors":"博卡青年","Sociedade Esportiva Palmeiras":"帕尔梅拉斯","sociedade esportiva palmeiras":"帕尔梅拉斯","RC Lens":"朗斯","rc lens":"朗斯","FC Lorient":"洛里昂","fc lorient":"洛里昂","Servette FC":"塞尔维特","servette fc":"塞尔维特","Lokomotiv Moscow":"莫斯科火车头","lokomotiv moscow":"莫斯科火车头","CF Monterrey":"蒙特雷","cf monterrey":"蒙特雷","CD Cruz Azul":"蓝十字","cd cruz azul":"蓝十字","Levante UD":"莱万特","levante ud":"莱万特","Melbourne City FC":"墨尔本城","melbourne city fc":"墨尔本城","DC United":"华盛顿联","dc united":"华盛顿联","D.C. United":"华盛顿联","d.c. united":"华盛顿联","Persepolis FC":"波斯波利斯","persepolis fc":"波斯波利斯","Club Tijuana":"蒂华纳","club tijuana":"蒂华纳","Hellas Verona":"维罗纳","hellas verona":"维罗纳","FC Dallas":"达拉斯FC","fc dallas":"达拉斯FC","1.FC Union Berlin":"柏林联合","1.fc union berlin":"柏林联合","Akhmat Grozny":"格罗兹尼艾哈迈德","akhmat grozny":"格罗兹尼艾哈迈德","Real Salt Lake City":"皇家盐湖城","real salt lake city":"皇家盐湖城","Charlotte FC":"夏洛特FC","charlotte fc":"夏洛特FC","CF Pachuca":"帕丘卡","cf pachuca":"帕丘卡","FC Nantes":"南特","fc nantes":"南特","AS Saint-Etienne":"圣埃蒂安","as saint-etienne":"圣埃蒂安","Real Betis":"皇家贝蒂斯","real betis":"皇家贝蒂斯","Getafe CF":"赫塔菲","getafe cf":"赫塔菲","Celta Vigo":"塞尔塔","celta vigo":"塞尔塔","RCD Espanyol":"西班牙人","rcd espanyol":"西班牙人","Granada CF":"格拉纳达","granada cf":"格拉纳达","CA Osasuna":"奥萨苏纳","ca osasuna":"奥萨苏纳","Rayo Vallecano":"巴列卡诺","rayo vallecano":"巴列卡诺","UD Almería":"阿尔梅里亚","ud almería":"阿尔梅里亚","Girona FC":"吉罗纳","girona fc":"吉罗纳","UD Las Palmas":"拉斯帕尔马斯","ud las palmas":"拉斯帕尔马斯","Wolverhampton Wanderers":"狼队","wolverhampton wanderers":"狼队","Brentford FC":"布伦特福德","brentford fc":"布伦特福德","AFC Bournemouth":"伯恩茅斯","afc bournemouth":"伯恩茅斯","Ipswich Town":"伊普斯维奇","ipswich town":"伊普斯维奇","Sheffield United":"谢菲尔德联","sheffield united":"谢菲尔德联","Luton Town":"卢顿","luton town":"卢顿","Blackburn Rovers":"布莱克本","blackburn rovers":"布莱克本","Middlesbrough FC":"米德尔斯堡","middlesbrough fc":"米德尔斯堡","Sunderland AFC":"桑德兰","sunderland afc":"桑德兰","Stoke City":"斯托克城","stoke city":"斯托克城","Swansea City":"斯旺西","swansea city":"斯旺西","Cardiff City":"加的夫城","cardiff city":"加的夫城","Millwall FC":"米尔沃尔","millwall fc":"米尔沃尔","Preston North End":"普雷斯顿","preston north end":"普雷斯顿","Bristol City":"布里斯托尔城","bristol city":"布里斯托尔城","Hull City":"赫尔城","hull city":"赫尔城","Watford FC":"沃特福德","watford fc":"沃特福德","Norwich City":"诺维奇城","norwich city":"诺维奇城","Queens Park Rangers":"女王公园巡游者","queens park rangers":"女王公园巡游者","Derby County":"德比郡","derby county":"德比郡","Portsmouth FC":"朴茨茅斯","portsmouth fc":"朴茨茅斯","Bolton Wanderers":"博尔顿","bolton wanderers":"博尔顿","Charlton Athletic":"查尔顿","charlton athletic":"查尔顿","Wigan Athletic":"维冈竞技","wigan athletic":"维冈竞技","Reading FC":"雷丁","reading fc":"雷丁","Barnsley FC":"巴恩斯利","barnsley fc":"巴恩斯利","SC Heerenveen":"海伦芬","sc heerenveen":"海伦芬","AZ Alkmaar":"阿尔克马尔","az alkmaar":"阿尔克马尔","FC Utrecht":"乌得勒支","fc utrecht":"乌得勒支","FC Twente":"特温特","fc twente":"特温特","Vitesse Arnhem":"维特斯","vitesse arnhem":"维特斯","FC Groningen":"格罗宁根","fc groningen":"格罗宁根","Heracles Almelo":"赫拉克勒斯","heracles almelo":"赫拉克勒斯","Sparta Rotterdam":"鹿特丹斯巴达","sparta rotterdam":"鹿特丹斯巴达","NEC Nijmegen":"奈梅亨","nec nijmegen":"奈梅亨","PEC Zwolle":"兹沃勒","pec zwolle":"兹沃勒","Willem II":"威廉二世","willem ii":"威廉二世","FC Den Bosch":"登博斯","fc den bosch":"登博斯","SC Cambuur":"坎布尔","sc cambuur":"坎布尔","Go Ahead Eagles":"前进之鹰","go ahead eagles":"前进之鹰","RKC Waalwijk":"瓦尔韦克","rkc waalwijk":"瓦尔韦克","FC Emmen":"埃门","fc emmen":"埃门","FC Volendam":"福伦丹","fc volendam":"福伦丹","Excelsior Rotterdam":"精英","excelsior rotterdam":"精英","Almere City FC":"阿尔梅勒城","almere city fc":"阿尔梅勒城","NAC Breda":"布雷达","nac breda":"布雷达","Roda JC":"罗达JC","roda jc":"罗达JC","MVV Maastricht":"马斯特里赫特","mvv maastricht":"马斯特里赫特","De Graafschap":"格拉夫夏普","de graafschap":"格拉夫夏普","FC Eindhoven":"埃因霍温FC","fc eindhoven":"埃因霍温FC","Helmond Sport":"赫尔蒙德体育","helmond sport":"赫尔蒙德体育","TOP Oss":"奥斯","top oss":"奥斯","SC Telstar":"特尔斯达","sc telstar":"特尔斯达","VVV-Venlo":"芬洛","vvv-venlo":"芬洛","FC Dordrecht":"多德雷赫特","fc dordrecht":"多德雷赫特","Jong Ajax":"阿贾克斯青年队","jong ajax":"阿贾克斯青年队","Jong PSV":"PSV青年队","jong psv":"PSV青年队","Jong FC Utrecht":"乌得勒支青年队","jong fc utrecht":"乌得勒支青年队","Jong AZ":"阿尔克马尔青年队","jong az":"阿尔克马尔青年队","Genoa CFC":"热那亚","genoa cfc":"热那亚","Torino FC":"都灵","torino fc":"都灵","Udinese Calcio":"乌迪内斯","udinese calcio":"乌迪内斯","US Sassuolo":"萨索洛","us sassuolo":"萨索洛","Empoli FC":"恩波利","empoli fc":"恩波利","Cagliari Calcio":"卡利亚里","cagliari calcio":"卡利亚里","US Lecce":"莱切","us lecce":"莱切","Frosinone Calcio":"弗罗西诺内","frosinone calcio":"弗罗西诺内","Parma Calcio":"帕尔马","parma calcio":"帕尔马","Spezia Calcio":"斯佩齐亚","spezia calcio":"斯佩齐亚","Brescia Calcio":"布雷西亚","brescia calcio":"布雷西亚","Salernitana":"萨勒尼塔纳","salernitana":"萨勒尼塔纳","Venezia FC":"威尼斯","venezia fc":"威尼斯","Como 1907":"科莫","como 1907":"科莫","US Cremonese":"克雷莫纳","us cremonese":"克雷莫纳","Cittadella":"奇塔代拉","cittadella":"奇塔代拉","FC Südtirol":"南蒂罗尔","fc südtirol":"南蒂罗尔","Palermo FC":"巴勒莫","palermo fc":"巴勒莫","Sampdoria":"桑普多利亚","sampdoria":"桑普多利亚","Benevento Calcio":"贝内文托","benevento calcio":"贝内文托","Ascoli Calcio":"阿斯科利","ascoli calcio":"阿斯科利","Ternana Calcio":"特尔纳纳","ternana calcio":"特尔纳纳","Modena FC":"摩德纳","modena fc":"摩德纳","Reggiana":"雷吉亚纳","reggiana":"雷吉亚纳","Cosenza Calcio":"科森扎","cosenza calcio":"科森扎","FC Bari":"巴里","fc bari":"巴里","Pisa SC":"比萨","pisa sc":"比萨","SPAL":"斯帕尔","spal":"斯帕尔","AS Monaco FC":"摩纳哥","as monaco fc":"摩纳哥","Stade Brestois":"布雷斯特","stade brestois":"布雷斯特","Stade de Reims":"兰斯","stade de reims":"兰斯","Toulouse FC":"图卢兹","toulouse fc":"图卢兹","Clermont Foot":"克莱蒙","clermont foot":"克莱蒙","AJ Auxerre":"欧塞尔","aj auxerre":"欧塞尔","FC Metz":"梅斯","fc metz":"梅斯","ESTAC Troyes":"特鲁瓦","estac troyes":"特鲁瓦","Dijon FCO":"第戎","dijon fco":"第戎","SM Caen":"卡昂","sm caen":"卡昂","Amiens SC":"亚眠","amiens sc":"亚眠","FC Sochaux":"索肖","fc sochaux":"索肖","Chamois Niortais":"尼奥尔","chamois niortais":"尼奥尔","Paris FC":"巴黎FC","paris fc":"巴黎FC","Grenoble Foot":"格勒诺布尔","grenoble foot":"格勒诺布尔","SC Bastia":"巴斯蒂亚","sc bastia":"巴斯蒂亚","Valenciennes FC":"瓦朗谢讷","valenciennes fc":"瓦朗谢讷","EA Guingamp":"甘冈","ea guingamp":"甘冈","Rodez AF":"罗德兹","rodez af":"罗德兹","Pau FC":"波城","pau fc":"波城","USL Dunkerque":"敦刻尔克","usl dunkerque":"敦刻尔克","Stade Lavallois":"拉瓦勒","stade lavallois":"拉瓦勒","US Concarneau":"孔卡尔诺","us concarneau":"孔卡尔诺","FC Annecy":"阿讷西","fc annecy":"阿讷西","US Quevilly-Rouen":"奎维利鲁昂","us quevilly-rouen":"奎维利鲁昂","TSG Hoffenheim":"霍芬海姆","tsg hoffenheim":"霍芬海姆","1.FC Köln":"科隆","1.fc köln":"科隆","FC Augsburg":"奥格斯堡","fc augsburg":"奥格斯堡","1.FSV Mainz 05":"美因茨","1.fsv mainz 05":"美因茨","SV Darmstadt 98":"达姆施塔特","sv darmstadt 98":"达姆施塔特","1.FC Heidenheim":"海登海姆","1.fc heidenheim":"海登海姆","Holstein Kiel":"基尔荷尔斯泰因","holstein kiel":"基尔荷尔斯泰因","FC St. Pauli":"圣保利","fc st. pauli":"圣保利","Hertha BSC":"柏林赫塔","hertha bsc":"柏林赫塔","Fortuna Düsseldorf":"杜塞尔多夫","fortuna düsseldorf":"杜塞尔多夫","Hannover 96":"汉诺威96","hannover 96":"汉诺威96","1.FC Nürnberg":"纽伦堡","1.fc nürnberg":"纽伦堡","Karlsruher SC":"卡尔斯鲁厄","karlsruher sc":"卡尔斯鲁厄","SC Paderborn":"帕德博恩","sc paderborn":"帕德博恩","Hansa Rostock":"罗斯托克","hansa rostock":"罗斯托克","Arminia Bielefeld":"比勒费尔德","arminia bielefeld":"比勒费尔德","Jahn Regensburg":"雷根斯堡","jahn regensburg":"雷根斯堡","Erzgebirge Aue":"厄尔士山奥厄","erzgebirge aue":"厄尔士山奥厄","SV Sandhausen":"桑德豪森","sv sandhausen":"桑德豪森","Dynamo Dresden":"德累斯顿迪纳摩","dynamo dresden":"德累斯顿迪纳摩","MSV Duisburg":"杜伊斯堡","msv duisburg":"杜伊斯堡","1860 München":"慕尼黑1860","1860 münchen":"慕尼黑1860","Würzburger Kickers":"维尔茨堡踢球者","würzburger kickers":"维尔茨堡踢球者","VfL Osnabrück":"奥斯纳布吕克","vfl osnabrück":"奥斯纳布吕克","SV Wehen Wiesbaden":"韦恩威斯巴登","sv wehen wiesbaden":"韦恩威斯巴登","1.FC Magdeburg":"马格德堡","1.fc magdeburg":"马格德堡","Eintracht Braunschweig":"不伦瑞克","eintracht braunschweig":"不伦瑞克","Preußen Münster":"普鲁士明斯特","preußen münster":"普鲁士明斯特","Rot-Weiss Essen":"红白埃森","rot-weiss essen":"红白埃森","SpVgg Unterhaching":"下哈兴","spvgg unterhaching":"下哈兴","RB Salzburg":"萨尔茨堡红牛","rb salzburg":"萨尔茨堡红牛","SK Sturm Graz":"格拉茨风暴","sk sturm graz":"格拉茨风暴","LASK":"林茨","lask":"林茨","SK Rapid Wien":"维也纳快速","sk rapid wien":"维也纳快速","Austria Wien":"奥地利维也纳","austria wien":"奥地利维也纳","TSV Hartberg":"哈特贝格","tsv hartberg":"哈特贝格","BSC Young Boys":"伯尔尼年轻人","bsc young boys":"伯尔尼年轻人","FC Zürich":"苏黎世","fc zürich":"苏黎世","FC Lugano":"卢加诺","fc lugano":"卢加诺","FC Luzern":"卢塞恩","fc luzern":"卢塞恩","FC St. Gallen":"圣加仑","fc st. gallen":"圣加仑","Grasshopper Club Zürich":"苏黎世草蜢","grasshopper club zürich":"苏黎世草蜢","Trabzonspor":"特拉布宗体育","trabzonspor":"特拉布宗体育","Başakşehir FK":"伊斯坦布尔巴沙克谢希尔","başakşehir fk":"伊斯坦布尔巴沙克谢希尔","Adana Demirspor":"阿达纳德米尔体育","adana demirspor":"阿达纳德米尔体育","Konyaspor":"科尼亚体育","konyaspor":"科尼亚体育","Antalyaspor":"安塔利亚体育","antalyaspor":"安塔利亚体育","Kayserispor":"开塞利体育","kayserispor":"开塞利体育","Sivasspor":"锡瓦斯体育","sivasspor":"锡瓦斯体育","Gaziantep FK":"加济安泰普","gaziantep fk":"加济安泰普","Hatayspor":"哈塔伊体育","hatayspor":"哈塔伊体育","Karagümrük SK":"卡拉古姆鲁克","karagümrük sk":"卡拉古姆鲁克","Çaykur Rizespor":"里泽体育","çaykur rizespor":"里泽体育","MKE Ankaragücü":"安卡拉古库","mke ankaragücü":"安卡拉古库","Alanyaspor":"阿拉尼亚体育","alanyaspor":"阿拉尼亚体育","Kasımpaşa":"卡森帕夏","kasımpaşa":"卡森帕夏","Samsunspor":"萨姆松体育","samsunspor":"萨姆松体育","Pendikspor":"彭迪克体育","pendikspor":"彭迪克体育","İstanbulspor":"伊斯坦布尔体育","i̇stanbulspor":"伊斯坦布尔体育","Göztepe":"格兹泰佩","göztepe":"格兹泰佩","SC Braga":"布拉加","sc braga":"布拉加","Vitória Guimarães":"吉马良斯","vitória guimarães":"吉马良斯","FC Famalicão":"法马利康","fc famalicão":"法马利康","FC Arouca":"阿罗卡","fc arouca":"阿罗卡","Casa Pia AC":"卡萨皮亚","casa pia ac":"卡萨皮亚","Gil Vicente FC":"吉维森特","gil vicente fc":"吉维森特","GD Chaves":"沙维斯","gd chaves":"沙维斯","CF Estrela":"阿马多拉之星","cf estrela":"阿马多拉之星","Rio Ave FC":"里奥阿维","rio ave fc":"里奥阿维","Portimonense SC":"波尔蒂芒人","portimonense sc":"波尔蒂芒人","FC Vizela":"维泽拉","fc vizela":"维泽拉","Moreirense FC":"莫雷拉人","moreirense fc":"莫雷拉人","Boavista FC":"博阿维斯塔","boavista fc":"博阿维斯塔","CD Nacional":"国民队","cd nacional":"国民队","CS Marítimo":"马里蒂莫","cs marítimo":"马里蒂莫","CD Santa Clara":"圣克拉拉","cd santa clara":"圣克拉拉","SC Farense":"法伦斯","sc farense":"法伦斯","B-SAD":"贝伦人","b-sad":"贝伦人","FC Penafiel":"佩纳菲耶尔","fc penafiel":"佩纳菲耶尔","Académico Viseu":"维塞乌学院","académico viseu":"维塞乌学院","KRC Genk":"亨克","krc genk":"亨克","KAA Gent":"根特","kaa gent":"根特","Royal Antwerp FC":"安特卫普","royal antwerp fc":"安特卫普","Union SG":"圣吉卢瓦联","union sg":"圣吉卢瓦联","Standard Liège":"标准列日","standard liège":"标准列日","KV Mechelen":"梅赫伦","kv mechelen":"梅赫伦","KVC Westerlo":"韦斯特洛","kvc westerlo":"韦斯特洛","Cercle Brugge":"色格拉布鲁日","cercle brugge":"色格拉布鲁日","Sint-Truiden VV":"圣特赖登","sint-truiden vv":"圣特赖登","Oud-Heverlee Leuven":"旧海弗莱鲁汶","oud-heverlee leuven":"旧海弗莱鲁汶","Sporting Charleroi":"沙勒罗瓦","sporting charleroi":"沙勒罗瓦","KV Kortrijk":"科特赖克","kv kortrijk":"科特赖克","RWDM":"莫伦贝克","rwdm":"莫伦贝克","KAS Eupen":"欧本","kas eupen":"欧本","Rangers FC":"格拉斯哥流浪者","rangers fc":"格拉斯哥流浪者","Heart of Midlothian":"哈茨","heart of midlothian":"哈茨","Aberdeen FC":"阿伯丁","aberdeen fc":"阿伯丁","Hibernian FC":"希伯尼安","hibernian fc":"希伯尼安","Motherwell FC":"马瑟韦尔","motherwell fc":"马瑟韦尔","Dundee FC":"邓迪","dundee fc":"邓迪","Dundee United":"邓迪联","dundee united":"邓迪联","St. Johnstone":"圣约翰斯通","st. johnstone":"圣约翰斯通","Kilmarnock FC":"基尔马诺克","kilmarnock fc":"基尔马诺克","Ross County":"罗斯郡","ross county":"罗斯郡","St. Mirren FC":"圣米伦","st. mirren fc":"圣米伦","Livingston FC":"利文斯顿","livingston fc":"利文斯顿","FC København":"哥本哈根","fc københavn":"哥本哈根","Brøndby IF":"布隆德比","brøndby if":"布隆德比","FC Midtjylland":"中日德兰","fc midtjylland":"中日德兰","FC Nordsjælland":"北西兰","fc nordsjælland":"北西兰","AGF Aarhus":"奥胡斯","agf aarhus":"奥胡斯","Malmö FF":"马尔默","malmö ff":"马尔默","Djurgårdens IF":"尤尔加登","djurgårdens if":"尤尔加登","Hammarby IF":"哈马比","hammarby if":"哈马比","BK Häcken":"赫根","bk häcken":"赫根","IFK Göteborg":"哥德堡","ifk göteborg":"哥德堡","Rosenborg BK":"罗森博格","rosenborg bk":"罗森博格","FK Bodø/Glimt":"博德闪耀","fk bodø/glimt":"博德闪耀","Molde FK":"莫尔德","molde fk":"莫尔德","Viking FK":"维京","viking fk":"维京","SK Brann":"布兰","sk brann":"布兰","Vålerenga IF":"瓦勒伦加","vålerenga if":"瓦勒伦加","SK Slavia Praha":"布拉格斯拉维亚","sk slavia praha":"布拉格斯拉维亚","AC Sparta Prague":"布拉格斯巴达","ac sparta prague":"布拉格斯巴达","Viktoria Plzeň":"比尔森胜利","viktoria plzeň":"比尔森胜利","Legia Warszawa":"华沙莱吉亚","legia warszawa":"华沙莱吉亚","Lech Poznań":"波兹南莱赫","lech poznań":"波兹南莱赫","Raków Częstochowa":"琴斯托霍瓦拉库夫","raków częstochowa":"琴斯托霍瓦拉库夫","Śląsk Wrocław":"弗罗茨瓦夫","śląsk wrocław":"弗罗茨瓦夫","Cracovia":"克拉科维亚","cracovia":"克拉科维亚","Panathinaikos":"帕纳辛奈科斯","panathinaikos":"帕纳辛奈科斯","PAOK Thessaloniki":"塞萨洛尼基PAOK","paok thessaloniki":"塞萨洛尼基PAOK","AEK Athens":"雅典AEK","aek athens":"雅典AEK","Hajduk Split":"哈伊杜克","hajduk split":"哈伊杜克","FK Partizan":"贝尔格莱德游击队","fk partizan":"贝尔格莱德游击队","FK Vojvodina":"伏伊伏丁那","fk vojvodina":"伏伊伏丁那","Dynamo Kyiv":"基辅迪纳摩","dynamo kyiv":"基辅迪纳摩","SC Dnipro-1":"第聂伯罗","sc dnipro-1":"第聂伯罗","FC Zorya Luhansk":"卢甘斯克索尔亚","fc zorya luhansk":"卢甘斯克索尔亚","Zenit St. Petersburg":"圣彼得堡泽尼特","zenit st. petersburg":"圣彼得堡泽尼特","Spartak Moscow":"莫斯科斯巴达","spartak moscow":"莫斯科斯巴达","FC Krasnodar":"克拉斯诺达尔","fc krasnodar":"克拉斯诺达尔","Dinamo Moscow":"莫斯科迪纳摩","dinamo moscow":"莫斯科迪纳摩","FC Rostov":"罗斯托夫","fc rostov":"罗斯托夫","Atlanta United":"亚特兰大联","atlanta united":"亚特兰大联","Seattle Sounders":"西雅图海湾人","seattle sounders":"西雅图海湾人","Portland Timbers":"波特兰伐木者","portland timbers":"波特兰伐木者","Columbus Crew":"哥伦布机员","columbus crew":"哥伦布机员","FC Cincinnati":"辛辛那提FC","fc cincinnati":"辛辛那提FC","Orlando City SC":"奥兰多城","orlando city sc":"奥兰多城","Philadelphia Union":"费城联合","philadelphia union":"费城联合","New England Revolution":"新英格兰革命","new england revolution":"新英格兰革命","Nashville SC":"纳什维尔SC","nashville sc":"纳什维尔SC","Chicago Fire":"芝加哥火焰","chicago fire":"芝加哥火焰","Houston Dynamo":"休斯顿迪纳摩","houston dynamo":"休斯顿迪纳摩","Sporting Kansas City":"堪萨斯城体育","sporting kansas city":"堪萨斯城体育","Colorado Rapids":"科罗拉多急流","colorado rapids":"科罗拉多急流","Minnesota United":"明尼苏达联","minnesota united":"明尼苏达联","Vancouver Whitecaps":"温哥华白帽","vancouver whitecaps":"温哥华白帽","CF Montréal":"蒙特利尔CF","cf montréal":"蒙特利尔CF","Toronto FC":"多伦多FC","toronto fc":"多伦多FC","Austin FC":"奥斯汀FC","austin fc":"奥斯汀FC","St. Louis City SC":"圣路易斯城","st. louis city sc":"圣路易斯城","San Jose Earthquakes":"圣何塞地震","san jose earthquakes":"圣何塞地震","Club América":"美洲俱乐部","club américa":"美洲俱乐部","CD Guadalajara":"瓜达拉哈拉","cd guadalajara":"瓜达拉哈拉","Tigres UANL":"老虎队","tigres uanl":"老虎队","Atlas FC":"阿特拉斯","atlas fc":"阿特拉斯","Santos Laguna":"桑托斯拉古纳","santos laguna":"桑托斯拉古纳","Club León":"莱昂","club león":"莱昂","Toluca FC":"托卢卡","toluca fc":"托卢卡","Pumas UNAM":"美洲狮","pumas unam":"美洲狮","FC Juárez":"华雷斯","fc juárez":"华雷斯","Mazatlán FC":"马萨特兰","mazatlán fc":"马萨特兰","Querétaro FC":"克雷塔罗","querétaro fc":"克雷塔罗","Puebla FC":"普埃布拉","puebla fc":"普埃布拉","Atlético San Luis":"圣路易斯竞技","atlético san luis":"圣路易斯竞技","Necaxa":"内卡萨","necaxa":"内卡萨","Atlético Mineiro":"米内罗竞技","atlético mineiro":"米内罗竞技","Botafogo FR":"博塔弗戈","botafogo fr":"博塔弗戈","Fluminense FC":"弗鲁米嫩塞","fluminense fc":"弗鲁米嫩塞","CR Vasco da Gama":"瓦斯科达伽马","cr vasco da gama":"瓦斯科达伽马","SC Internacional":"巴西国际","sc internacional":"巴西国际","Athletico Paranaense":"巴拉纳竞技","athletico paranaense":"巴拉纳竞技","Fortaleza EC":"福塔雷萨","fortaleza ec":"福塔雷萨","EC Bahia":"巴伊亚","ec bahia":"巴伊亚","Red Bull Bragantino":"布拉甘蒂诺红牛","red bull bragantino":"布拉甘蒂诺红牛","Cuiabá EC":"库亚巴","cuiabá ec":"库亚巴","Goiás EC":"戈亚斯","goiás ec":"戈亚斯","Coritiba FC":"科里蒂巴","coritiba fc":"科里蒂巴","América Mineiro":"米内罗美洲","américa mineiro":"米内罗美洲","Avaí FC":"阿瓦伊","avaí fc":"阿瓦伊","Ceará SC":"塞阿拉","ceará sc":"塞阿拉","Sport Recife":"累西腓体育","sport recife":"累西腓体育","EC Vitória":"维多利亚","ec vitória":"维多利亚","EC Juventude":"尤文图德","ec juventude":"尤文图德","Racing Club":"竞技俱乐部","racing club":"竞技俱乐部","CA Independiente":"独立","ca independiente":"独立","San Lorenzo":"圣洛伦索","san lorenzo":"圣洛伦索","Estudiantes LP":"拉普拉塔大学生","estudiantes lp":"拉普拉塔大学生","Vélez Sarsfield":"萨斯菲尔德","vélez sarsfield":"萨斯菲尔德","CA Lanús":"拉努斯","ca lanús":"拉努斯","CA Rosario Central":"罗萨里奥中央","ca rosario central":"罗萨里奥中央","CA Talleres":"塔列雷斯","ca talleres":"塔列雷斯","Defensa y Justicia":"国防与司法","defensa y justicia":"国防与司法","CA Huracán":"飓风","ca huracán":"飓风","CA Belgrano":"贝尔格拉诺","ca belgrano":"贝尔格拉诺","Argentinos Juniors":"阿根廷青年","argentinos juniors":"阿根廷青年","CA Platense":"普拉滕斯","ca platense":"普拉滕斯","CA Unión Santa Fe":"圣塔菲联","ca unión santa fe":"圣塔菲联","CA Central Córdoba":"科尔多瓦中央","ca central córdoba":"科尔多瓦中央","CA Banfield":"班菲尔德","ca banfield":"班菲尔德","CA Tigre":"老虎竞技","ca tigre":"老虎竞技","Instituto AC":"学院队","instituto ac":"学院队","Barracas Central":"巴拉卡斯中央","barracas central":"巴拉卡斯中央","Deportivo Riestra":"里斯特拉","deportivo riestra":"里斯特拉","CA Sarmiento":"萨米恩托","ca sarmiento":"萨米恩托","CA Atlético Tucumán":"图库曼竞技","ca atlético tucumán":"图库曼竞技","Godoy Cruz":"戈多伊克鲁斯","godoy cruz":"戈多伊克鲁斯","Independiente Rivadavia":"独立里瓦达维亚","independiente rivadavia":"独立里瓦达维亚","Gimnasia LP":"拉普拉塔体操","gimnasia lp":"拉普拉塔体操","Al-Ahli SFC":"吉达国民","al-ahli sfc":"吉达国民","Al-Ettifaq":"达曼协作","al-ettifaq":"达曼协作","Al-Taawoun FC":"布赖代合作","al-taawoun fc":"布赖代合作","Al-Fateh":"哈萨征服","al-fateh":"哈萨征服","Al-Fayha":"费哈","al-fayha":"费哈","Al-Wehda":"麦加统一","al-wehda":"麦加统一","Al-Raed":"布赖代先锋","al-raed":"布赖代先锋","Damac FC":"达马克","damac fc":"达马克","Al-Khaleej":"卡利杰","al-khaleej":"卡利杰","Al-Okhdood":"阿赫杜德","al-okhdood":"阿赫杜德","Al-Hazem":"哈森姆","al-hazem":"哈森姆","Al-Tai":"塔伊","al-tai":"塔伊","Al-Riyadh":"利雅得","al-riyadh":"利雅得","Abha Club":"艾卜哈","abha club":"艾卜哈","Al-Ain FC":"艾因","al-ain fc":"艾因","Al-Wasl":"华斯尔","al-wasl":"华斯尔","Shabab Al-Ahli":"沙巴布阿赫利","shabab al-ahli":"沙巴布阿赫利","Al-Wahda":"瓦赫达","al-wahda":"瓦赫达","Al-Sadd SC":"萨德","al-sadd sc":"萨德","Al-Duhail SC":"杜海勒","al-duhail sc":"杜海勒","Al-Rayyan SC":"赖扬","al-rayyan sc":"赖扬","Al-Gharafa SC":"加拉法","al-gharafa sc":"加拉法","Beijing Guoan":"北京国安","beijing guoan":"北京国安","Shanghai Port":"上海海港","shanghai port":"上海海港","Shandong Taishan":"山东泰山","shandong taishan":"山东泰山","Guangzhou FC":"广州队","guangzhou fc":"广州队","Kashima Antlers":"鹿岛鹿角","kashima antlers":"鹿岛鹿角","Urawa Red Diamonds":"浦和红钻","urawa red diamonds":"浦和红钻","Yokohama F. Marinos":"横滨水手","yokohama f. marinos":"横滨水手","Kawasaki Frontale":"川崎前锋","kawasaki frontale":"川崎前锋","Gamba Osaka":"大阪钢巴","gamba osaka":"大阪钢巴","Nagoya Grampus":"名古屋鲸八","nagoya grampus":"名古屋鲸八","Jeonbuk Hyundai":"全北现代","jeonbuk hyundai":"全北现代","Ulsan HD":"蔚山现代","ulsan hd":"蔚山现代","FC Seoul":"首尔FC","fc seoul":"首尔FC","Pohang Steelers":"浦项制铁","pohang steelers":"浦项制铁","Al Ahly SC":"开罗国民","al ahly sc":"开罗国民","Zamalek SC":"扎马雷克","zamalek sc":"扎马雷克","Espérance Tunis":"突尼斯希望","espérance tunis":"突尼斯希望","Wydad AC":"卡萨布兰卡维达德","wydad ac":"卡萨布兰卡维达德","Raja CA":"拉贾卡萨布兰卡","raja ca":"拉贾卡萨布兰卡","Mamelodi Sundowns":"马梅洛迪日落","mamelodi sundowns":"马梅洛迪日落","Kaizer Chiefs":"凯撒酋长","kaizer chiefs":"凯撒酋长","Orlando Pirates":"奥兰多海盗","orlando pirates":"奥兰多海盗","FC Arsenal":"阿森纳","fc arsenal":"阿森纳","F.C. Barcelona":"巴塞罗那","f.c. barcelona":"巴塞罗那","Chelsea Football Club":"切尔西","chelsea football club":"切尔西","Liverpool Football Club":"利物浦","liverpool football club":"利物浦","Arsenal Football Club":"阿森纳","arsenal football club":"阿森纳","Manchester City Football Club":"曼城","manchester city football club":"曼城","Tottenham Hotspur FC":"热刺","tottenham hotspur fc":"热刺","Everton Football Club":"埃弗顿","everton football club":"埃弗顿","Newcastle United FC":"纽卡斯尔","newcastle united fc":"纽卡斯尔","Leeds United FC":"利兹联","leeds united fc":"利兹联","Southampton Football Club":"南安普顿","southampton football club":"南安普顿","Leicester City FC":"莱斯特城","leicester city fc":"莱斯特城","Wolverhampton Wanderers FC":"狼队","wolverhampton wanderers fc":"狼队","Norwich City FC":"诺维奇","norwich city fc":"诺维奇","Watford Football Club":"沃特福德","watford football club":"沃特福德","Burnley Football Club":"伯恩利","burnley football club":"伯恩利","Brighton and Hove Albion":"布莱顿","brighton and hove albion":"布莱顿","Fulham Football Club":"富勒姆","fulham football club":"富勒姆","Nottingham Forest FC":"诺丁汉森林","nottingham forest fc":"诺丁汉森林","Bournemouth":"伯恩茅斯","bournemouth":"伯恩茅斯","Luton Town FC":"卢顿","luton town fc":"卢顿","Sheffield United FC":"谢菲尔德联","sheffield united fc":"谢菲尔德联","West Bromwich Albion":"西布朗","west bromwich albion":"西布朗","Blackburn Rovers FC":"布莱克本","blackburn rovers fc":"布莱克本","Middlesbrough":"米德尔斯堡","middlesbrough":"米德尔斯堡","Stoke City FC":"斯托克城","stoke city fc":"斯托克城","Swansea City AFC":"斯旺西","swansea city afc":"斯旺西","Cardiff City FC":"加的夫城","cardiff city fc":"加的夫城","Millwall":"米尔沃尔","millwall":"米尔沃尔","Preston North End FC":"普雷斯顿","preston north end fc":"普雷斯顿","Bristol City FC":"布里斯托尔城","bristol city fc":"布里斯托尔城","Hull City AFC":"赫尔城","hull city afc":"赫尔城","Coventry City FC":"考文垂","coventry city fc":"考文垂","Oxford United FC":"牛津联","oxford united fc":"牛津联","Wrexham AFC":"雷克瑟姆","wrexham afc":"雷克瑟姆","Leyton Orient":"莱顿东方","leyton orient":"莱顿东方","Charlton Athletic FC":"查尔顿","charlton athletic fc":"查尔顿","Portsmouth":"朴茨茅斯","portsmouth":"朴茨茅斯","Bolton Wanderers FC":"博尔顿","bolton wanderers fc":"博尔顿","Derby County FC":"德比郡","derby county fc":"德比郡","Wigan Athletic FC":"维冈竞技","wigan athletic fc":"维冈竞技","Barnsley":"巴恩斯利","barnsley":"巴恩斯利","FC Twente Enschede":"特温特","fc twente enschede":"特温特"};

window.translateClubName = function(name) {
    // 优先使用引擎的 formatStandardName
    if (typeof window.formatStandardName === 'function') {
        var stdResult = window.formatStandardName('club', name);
        if (stdResult && stdResult !== name && stdResult !== '暂无数据') return stdResult;
    }
    if (!name || name === '?' || name === 'Unknown') return '暂无数据';
    
    // Strategy 0: If input is already in "中文（English）" format, return as-is
    if (/[（(].*[a-zA-Z].*[)）]/.test(name)) return name;
    
    // Strategy 1: Direct lookup in clubNameMap (English key or Chinese key)
    if (typeof clubNameMap !== 'undefined') {
        if (clubNameMap[name]) return clubNameMap[name];
        if (clubNameMap[name.toLowerCase()]) return clubNameMap[name.toLowerCase()];
        // Try cleaning: remove parenthetical notes and slashed alternatives
        var cleanName = name.replace(/[（(][^)）]*[)）]/g, '').replace(/\/.*$/, '').trim();
        if (cleanName !== name) {
            if (clubNameMap[cleanName]) return clubNameMap[cleanName];
            if (clubNameMap[cleanName.toLowerCase()]) return clubNameMap[cleanName.toLowerCase()];
        }
    }
    
    // Strategy 2: Fallback to _clubNameMap
    if (_clubNameMap[name]) return _clubNameMap[name] + '（' + name + '）';
    var cn = _clubNameMap[name.toLowerCase()];
    if (cn) return cn + '（' + name + '）';
    
    // Strategy 3: Try stripping "FC"/"SC" suffixes/prefixes
    var cleaned = name.replace(/^(FC|SC|AC|AS|CD|CA|CF|CS|EC|SE|CR|RC|FK|SK|NK|BK|1\.)\s*/i, '')
        .replace(/\s*(FC|SC|AC|CF|SSC|SAD|S\.A\.D\.)$/i, '').trim();
    if (cleaned !== name) {
        if (typeof clubNameMap !== 'undefined') {
            if (clubNameMap[cleaned]) return clubNameMap[cleaned];
            if (clubNameMap[cleaned.toLowerCase()]) return clubNameMap[cleaned.toLowerCase()];
        }
        cn = _clubNameMap[cleaned] || _clubNameMap[cleaned.toLowerCase()];
        if (cn) return cn + '（' + name + '）';
    }
    
    // Strategy 4: Normalize input and search all clubNameMap keys (case-insensitive, punctuation-stripped)
    var normInput = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
    if (typeof clubNameMap !== 'undefined') {
        for (var ck in clubNameMap) {
            if (!clubNameMap.hasOwnProperty(ck)) continue;
            var normCk = ck.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
            if (normCk === normInput) return clubNameMap[ck] + '（' + name + '）';
        }
    }
    
    // Strategy 5: Fuzzy bidirectional substring match on clubNameMap
    if (typeof clubNameMap !== 'undefined' && normInput.length > 3) {
        for (var ck2 in clubNameMap) {
            if (!clubNameMap.hasOwnProperty(ck2)) continue;
            var normCk2 = ck2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
            if (normCk2.length > 3 && (normCk2.indexOf(normInput) >= 0 || normInput.indexOf(normCk2) >= 0)) {
                return clubNameMap[ck2] + '（' + name + '）';
            }
        }
    }
    
    // Strategy 6: Try clubLeagueMap — if club has a league mapping, it confirms the club exists
    if (typeof clubLeagueMap !== 'undefined') {
        for (var clk in clubLeagueMap) {
            if (!clubLeagueMap.hasOwnProperty(clk)) continue;
            var normClk = clk.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
            if (normClk === normInput || (normClk.length > 3 && normInput.length > 3 && (normClk.indexOf(normInput) >= 0 || normInput.indexOf(normClk) >= 0))) {
                return name + '（' + name + '）';
            }
        }
    }
    
    return name;
};
window.translateLeagueName = function(leagueName, clubName) {
    // 优先使用引擎的 formatStandardName
    if (typeof window.formatStandardName === 'function' && leagueName && leagueName !== '?' && leagueName !== 'Unknown') {
        var stdResult = window.formatStandardName('league', leagueName);
        if (stdResult && stdResult !== leagueName && stdResult !== '?') return stdResult;
    }
    if (!leagueName || leagueName === '?' || leagueName === 'Unknown') {
        // Try to infer league from club via clubLeagueMap
        if (clubName && typeof clubLeagueMap !== 'undefined') {
            // Strategy A: Direct lookup
            if (clubLeagueMap[clubName]) return clubLeagueMap[clubName];
            if (clubLeagueMap[clubName.toLowerCase()]) return clubLeagueMap[clubName.toLowerCase()];
            
            // Strategy B: Chinese→English reverse lookup via clubNameMap
            var enClubNames = null;
            if (typeof clubNameMap !== 'undefined' && clubNameMap._reverseCN) {
                enClubNames = clubNameMap._reverseCN[clubName];
            }
            if (!enClubNames && typeof _reverseCNClub !== 'undefined') {
                enClubNames = _reverseCNClub[clubName];
            }
            if (enClubNames) {
                for (var ei = 0; ei < enClubNames.length; ei++) {
                    var en = enClubNames[ei];
                    if (clubLeagueMap[en]) return clubLeagueMap[en];
                    if (clubLeagueMap[en.toLowerCase()]) return clubLeagueMap[en.toLowerCase()];
                }
            }
            
            // Strategy C: Normalized exact match
            var normClub = clubName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
            for (var clk in clubLeagueMap) {
                if (!clubLeagueMap.hasOwnProperty(clk)) continue;
                var normClk = clk.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
                if (normClk === normClub) return clubLeagueMap[clk];
            }
            
            // Strategy D: Clean club name (remove FC/SC/AC prefixes/suffixes) and retry
            var cleaned = clubName.replace(/^(FC|SC|AC|AS|CD|CA|CF|CS|EC|SE|CR|RC|FK|SK|NK|BK|1\.)\s*/i, '')
                .replace(/\s*(FC|SC|AC|CF|SSC|SAD|S\.A\.D\.)$/i, '').trim();
            if (cleaned !== clubName) {
                if (clubLeagueMap[cleaned]) return clubLeagueMap[cleaned];
                if (clubLeagueMap[cleaned.toLowerCase()]) return clubLeagueMap[cleaned.toLowerCase()];
                var normClean = cleaned.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
                for (var clk2 in clubLeagueMap) {
                    if (!clubLeagueMap.hasOwnProperty(clk2)) continue;
                    var normClk2 = clk2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
                    if (normClk2 === normClean) return clubLeagueMap[clk2];
                }
            }
            
            // Strategy E: Fuzzy bidirectional substring match
            if (normClub.length > 3) {
                for (var clk3 in clubLeagueMap) {
                    if (!clubLeagueMap.hasOwnProperty(clk3)) continue;
                    var normClk3 = clk3.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
                    if (normClk3.length > 3 && (normClk3.indexOf(normClub) >= 0 || normClub.indexOf(normClk3) >= 0)) {
                        return clubLeagueMap[clk3];
                    }
                }
            }
        }
        return '暂无数据';
    }
    // Direct lookup
    if (typeof leagueNameMap !== 'undefined' && leagueNameMap[leagueName]) {
        return leagueNameMap[leagueName];
    }
    // Normalized lookup in leagueNameMap
    if (typeof leagueNameMap !== 'undefined') {
        var normLg = leagueName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
        for (var lk in leagueNameMap) {
            if (!leagueNameMap.hasOwnProperty(lk)) continue;
            var normLk = lk.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim();
            if (normLk === normLg) return leagueNameMap[lk];
        }
    }
    // Also check translate.league from engine.js
    if (typeof translate !== 'undefined' && translate.league) {
        var tlResult = translate.league(leagueName);
        if (tlResult && tlResult !== leagueName && tlResult !== '?') return tlResult;
    }
    return leagueName;
};

// ===== 位置名称翻译（V1.63）=====
window.translatePosition = function(pos) {
    // 优先使用引擎的 translate.position
    if (typeof translate !== 'undefined' && translate.position) {
        var engResult = translate.position(pos);
        if (engResult && engResult !== pos) return engResult;
    }
    if (!pos || pos === "?") return '暂无数据';
    // If already in "中文（English）" format, return as-is
    if (/[（(].*[a-zA-Z].*[)）]/.test(pos)) return pos;
    // Strategy 1: Direct lookup in positionNameMap
    if (typeof positionNameMap !== "undefined" && positionNameMap[pos]) {
        return positionNameMap[pos];
    }
    // Strategy 2: Case-insensitive English lookup
    if (typeof positionNameMap !== "undefined" && positionNameMap[pos.toLowerCase()]) {
        return positionNameMap[pos.toLowerCase()];
    }
    // Strategy 3: Try Capitalized form
    var capitalized = pos.charAt(0).toUpperCase() + pos.slice(1).toLowerCase();
    if (typeof positionNameMap !== "undefined" && positionNameMap[capitalized]) {
        return positionNameMap[capitalized];
    }
    return pos;
};


window.getClubLogo = function(clubName, fallbackToFlag) {
    if (!clubName || clubName === '?') return '';
    // Strategy 1: Direct Chinese name lookup in clubLogoMap
    if (typeof clubLogoMap !== 'undefined' && clubLogoMap[clubName]) {
        return clubLogoMap[clubName];
    }
    // Strategy 1.5: Extract Chinese name from clubNameMap (from teamdata.js)
    if (typeof clubNameMap !== 'undefined' && clubNameMap[clubName]) {
        var displayCN = clubNameMap[clubName];
        var cnMatch = displayCN.match(/^([\u4e00-\u9fff\uff01-\uff5e]+)/);
        if (cnMatch && typeof clubLogoMap !== 'undefined' && clubLogoMap[cnMatch[1]]) {
            return clubLogoMap[cnMatch[1]];
        }
    }
    // Strategy 2: English→Chinese→Logo (via _clubNameMap)
    var cn = _clubNameMap[clubName] || _clubNameMap[clubName.toLowerCase()];
    if (cn && typeof clubLogoMap !== 'undefined' && clubLogoMap[cn]) {
        return clubLogoMap[cn];
    }
    // Strategy 3: Try cleaned name
    var cleaned = clubName.replace(/\s(FC|SC|AC|CF|SSC|SAD|S\.A\.D\.)$/i, '').trim();
    if (cleaned !== clubName) {
        cn = _clubNameMap[cleaned] || _clubNameMap[cleaned.toLowerCase()];
        if (cn && typeof clubLogoMap !== 'undefined' && clubLogoMap[cn]) {
            return clubLogoMap[cn];
        }
    }
    // Strategy 4: Try partial match against clubLogoMap URLs
    if (typeof clubLogoMap !== 'undefined') {
        var searchName = clubName.toLowerCase().replace(/[^a-z0-9]/g, '');
        for (var ck in clubLogoMap) {
            if (clubLogoMap.hasOwnProperty(ck) && clubLogoMap[ck].toLowerCase().replace(/[^a-z0-9]/g, '').indexOf(searchName) > -1) {
                return clubLogoMap[ck];
            }
        }
    }
    return '';
};



// 统一的球员名称格式化: 委托给引擎 formatStandardName → 中文(英文)
window.formatPlayerDisplay = function(playerNameOrKey, pd) {
    if (!playerNameOrKey) return '';
    // 优先使用引擎统一格式化
    if (typeof window.formatStandardName === 'function') {
        if (!pd && playerDB && playerDB[playerNameOrKey]) pd = playerDB[playerNameOrKey];
        if (!pd && typeof getPlayerKey === 'function') {
            var k = getPlayerKey(playerNameOrKey);
            if (k && playerDB && playerDB[k]) pd = playerDB[k];
        }
        if (pd) return window.formatStandardName('player', pd);
        return window.formatStandardName('player', String(playerNameOrKey));
    }
    // 回退逻辑
    if (!pd && playerDB && playerDB[playerNameOrKey]) pd = playerDB[playerNameOrKey];
    if (!pd && typeof getPlayerKey === 'function') {
        var k2 = getPlayerKey(playerNameOrKey);
        if (k2 && playerDB && playerDB[k2]) pd = playerDB[k2];
    }
    var cn = '', native = '';
    if (pd) {
        if (typeof playerToCN === 'function') { cn = playerToCN(pd) || ''; }
        else if (typeof translate !== 'undefined' && translate.player) { cn = translate.player(pd) || ''; }
        if (!cn && pd.cn) cn = pd.cn;
        if (!cn && pd.nn) cn = pd.nn;
        native = pd.n || pd.native || pd.en || '';
        if (!native && pd.name) native = pd.name;
    }
    if (!cn && !native) cn = String(playerNameOrKey);
    if (!native && pd) native = pd.n || '';
    if (!cn && !pd && typeof playerToCN === 'function' && playerNameOrKey) {
        cn = playerToCN({ n: String(playerNameOrKey) }) || '';
    }
    if (cn && native && cn !== native) return cn + ' (' + native + ')';
    if (cn) return cn;
    if (native) return native;
    return String(playerNameOrKey);
};

window.showPlayerDetail = function(playerKeyOrName) {
    // V3统一弹窗委托（engine.js 的 showUnifiedPlayerDetail）
    if (typeof window.showUnifiedPlayerDetail === 'function' && window.showUnifiedPlayerDetail !== window.showPlayerDetail) {
        window.showUnifiedPlayerDetail(playerKeyOrName);
        return;
    }
    try {
        // 智能解析参数：可能是 key 也可能是显示名
        var key = playerKeyOrName;
        var pd = playerDB[key];
        
        // 如果不是有效的 key，尝试通过显示名查找
        if (!pd) {
            var resolved = getPlayerKey(playerKeyOrName);
            if (resolved && playerDB[resolved]) {
                // V1.63 相关性验证：确保模糊搜索返回的球员确实匹配查询
                // 防止类似搜索"希门尼斯"却返回"Emam Ashour"的问题
                var _qPd = playerDB[resolved];
                var _qStr = (_qPd.cn||'') + '|' + (_qPd.n||'') + '|' + (_qPd.nn||'') + '|' + (_qPd.en||'') + '|' + resolved.toLowerCase();
                var _qInput = playerKeyOrName.toString().toLowerCase().trim();
                var _relScore = 0;
                // 精确匹配权重
                if (resolved.toLowerCase() === _qInput) _relScore += 3;
                if (_qPd.n && _qPd.n.toLowerCase() === _qInput) _relScore += 3;
                if (_qPd.cn && _qPd.cn === playerKeyOrName) _relScore += 3;
                if (_qPd.nn && _qPd.nn.toLowerCase() === _qInput) _relScore += 3;
                if (_qPd.en && _qPd.en.toLowerCase() === _qInput) _relScore += 3;
                // 子串匹配基础分（仅查询≥3字符时）
                if (_qInput.length >= 3 && _qStr.toLowerCase().indexOf(_qInput) >= 0) _relScore += 1;
                // 查询≥4字符且以查询开头
                if (_qInput.length >= 4) {
                    var _fields = [_qPd.cn, _qPd.n, _qPd.nn, _qPd.en];
                    for (var _fi = 0; _fi < _fields.length; _fi++) {
                        if (_fields[_fi] && _fields[_fi].toLowerCase().indexOf(_qInput) === 0) { _relScore += 1; break; }
                    }
                }
                // 仅当相关性≥2分才采纳
                if (_relScore >= 2) {
                    key = resolved;
                    pd = _qPd;
                }
            }
        }
        
        if (!pd) {
            // V1.63: 检查是否有 squad 传来的额外数据
            var squadData = window._squadDetailData || null;
            var rawName = playerKeyOrName, cnGuess = rawName, enGuess = '';
            // 尝试通过翻译引擎获取中文名
            var resolvedKey = getPlayerKey(playerKeyOrName);
            if (resolvedKey && playerDB[resolvedKey]) {
                var tPd = playerDB[resolvedKey];
                if (typeof playerToCN === 'function') cnGuess = playerToCN(tPd) || rawName;
                else if (tPd.cn) cnGuess = tPd.cn;
                else if (tPd.nn) cnGuess = tPd.nn;
                enGuess = tPd.n || tPd.en || '';
            }
            var parenIdx = rawName.indexOf(' (');
            if (parenIdx >= 0) { cnGuess = rawName.substring(0, parenIdx).trim(); enGuess = rawName.substring(parenIdx + 2).replace(')', '').trim(); }
            // 如果 squad 数据中有英文原名，优先使用
            if (squadData && squadData.orig && !enGuess) enGuess = squadData.orig;
            
            var doc2 = document.getElementById('playerDetailContent'), sub2 = document.getElementById('playerDetailSubtitle');
            if (sub2) sub2.textContent = '— ' + cnGuess + (enGuess ? ' (' + enGuess + ')' : '');
            var html2 = '<div class="player-detail-header-card"><div class="player-detail-avatar">' + cnGuess.charAt(0) + '</div><div class="player-detail-info"><div class="pd-name">' + cnGuess + (enGuess ? ' (' + enGuess + ')' : '') + '</div><div class="pd-nickname">—</div><div class="pd-meta">';
            // 如果有 squad 数据，展示更丰富的信息
            if (squadData) {
                if (squadData.posCN) html2 += '<span>📍 ' + squadData.posCN + '</span>';
                if (squadData.club) html2 += '<span>🏟️ ' + squadData.club + '</span>';
                if (squadData.height && squadData.height !== '—') html2 += '<span>📏 ' + squadData.height + '</span>';
                if (squadData.value && squadData.value !== '—') html2 += '<span>💰 ' + squadData.value + '</span>';
                else html2 += '<span>📭 身价暂缺</span>';
                // V1.63: 显示出生日期/年龄
                if (squadData.dob && squadData.dob.length >= 10) {
                    var dobDate = new Date(squadData.dob);
                    if (!isNaN(dobDate.getTime())) {
                        var today = new Date();
                        var age = today.getFullYear() - dobDate.getFullYear();
                        var monthDiff = today.getMonth() - dobDate.getMonth();
                        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) age--;
                        html2 += '<span>🎂 ' + squadData.dob.substring(0, 10) + ' (' + age + '岁)</span>';
                    } else {
                        html2 += '<span>🎂 ' + squadData.dob.substring(0, 10) + '</span>';
                    }
                }
            } else {
                html2 += '<span>📭 数据暂缺</span>';
            }
            html2 += '</div></div></div>';
            
            // 如果有 squad 数据，展示 squad 信息
            if (squadData) {
                html2 += '<div class="pd-section-title">📋 阵容信息（来自入选名单）</div>';
                html2 += '<div style="overflow-x:auto;"><table class="pd-career-table"><thead><tr><th>位置</th><th>俱乐部</th><th>身高</th><th>当前身价</th></tr></thead><tbody>';
                html2 += '<tr><td>' + (squadData.posCN || '—') + '</td><td>' + (squadData.club || '—') + '</td><td>' + (squadData.height || '—') + '</td><td style="font-weight:700;color:var(--gold-light);">' + (squadData.value || '—') + '</td></tr>';
                html2 += '</tbody></table></div>';
            }
            
            html2 += '<div class="pd-section-title">📋 世界杯进球记录</div><div style="padding:8px;color:var(--text-secondary);font-size:0.75rem;">该球员曾在世界杯比赛中进球。搜索Key: ' + rawName.replace(/'/g, '') + '。如需完整数据（俱乐部、联赛、获奖等），请告知维护者补充。</div>';
            html2 += '<div class="pd-section-title" style="margin-top:14px;">💡 提示</div><div style="padding:8px;color:var(--text-secondary);font-size:0.75rem;">该球员数据不在当前数据库中。系统已自动展示可用信息。</div>';
            if (doc2) doc2.innerHTML = html2;
            var modal2 = document.getElementById('playerDetailModal');
            if (modal2) modal2.classList.add('visible');
            // 清除 squad 数据缓存
            window._squadDetailData = null;
            return;
        }
        
        var doc = document.getElementById('playerDetailContent');
        var sub = document.getElementById('playerDetailSubtitle');
        
        var cnName = (typeof translate !== 'undefined' && translate.player) ? translate.player(pd) : (pd.n || key);
        var nativeName = pd.n || '';  // Original language name
        var enName = pd.nn || '';  // English name for search
        var nickname = pd.nk || '—';
        var nat = pd.nat || '?';
        var ht = pd.ht || '?';
        var wt = pd.wt || '?';
        var bd = pd.bd || '?';
        var photoUrl = pd.photo || '';
        
        if (sub) sub.textContent = '— ' + cnName + (nativeName && nativeName !== cnName ? ' (' + nativeName + ')' : (enName ? ' (' + enName + ')' : ''));
        
        var flagUrl = (typeof pastFlagMap !== 'undefined' && pastFlagMap[nat]) ? 'https://flagcdn.com/w80/' + pastFlagMap[nat] + '.png' : '';
        
        var html = '';
        // Header card
        html += '<div class="player-detail-header-card">';
        html += '<div class="player-detail-avatar">';
        if (photoUrl) {
            html += '<img src="' + photoUrl + '" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="var p=this.parentElement;this.remove();p.appendChild(document.createTextNode(cnName.charAt(0)));" loading="lazy">';
        } else {
            html += cnName.charAt(0);
        }
        html += '</div>';
        html += '<div class="player-detail-info">';
        html += '<div class="pd-name">' + cnName + (enName ? ' (' + enName + ')' : '') + '</div>';
        html += '<div class="pd-nickname">' + nickname + '</div>';
        html += '<div class="pd-meta">';
        if (flagUrl) {
            var teamName = (typeof pastTeamNames !== 'undefined' && pastTeamNames[nat]) ? pastTeamNames[nat].zh : nat;
            html += '<span><img src="' + flagUrl + '" style="width:18px;height:12px;vertical-align:middle;margin-right:3px;" onerror="this.style.display=\'none\'"> ' + teamName + '</span>';
        }
        html += '<span>📏 ' + ht + '</span>';
        html += '<span>⚖️ ' + wt + '</span>';
        html += '<span>🎂 ' + bd + '</span>';
        html += '</div></div></div>';
        
        // Career data
        if (pd.cr && pd.cr.length > 0) {
            var ntEntries = pd.cr.filter(function(c) { return c.nt; });
            var clubEntries = pd.cr.filter(function(c) { return !c.nt; });
            
            html += '<div class="pd-section-title">🇺🇳 国家队生涯</div>';
            if (ntEntries.length > 0) {
                html += '<div style="overflow-x:auto;"><table class="pd-career-table"><thead><tr><th>时期</th><th>国家队</th><th>赛事</th><th>位置</th><th>身价</th><th>号码</th></tr></thead><tbody>';
                ntEntries.forEach(function(c) {
                    html += '<tr class="pd-nt-row"><td>' + (c.p || '暂无数据') + '</td><td>' + (translateClubName(c.t) || '?') + '</td><td>' + (translateLeagueName(c.l, c.t) || '暂无数据') + '</td><td>' + (translatePosition(c.ps) || '暂无数据') + '</td><td>' + (window.formatValueWan ? window.formatValueWan(c.mv) : c.mv) || '暂无数据' + '</td><td>' + (c.no || '暂无数据') + '</td></tr>';
                });
                html += '</tbody></table></div>';
            } else {
                html += '<div style="padding:8px;color:var(--text-secondary);font-size:0.75rem;">暂无国家队详细记录</div>';
            }
            
            html += '<div class="pd-section-title" style="margin-top:14px;">🏟️ 俱乐部生涯</div>';
            if (clubEntries.length > 0) {
                html += '<div style="overflow-x:auto;"><table class="pd-career-table"><thead><tr><th>时期</th><th>俱乐部</th><th>联赛</th><th>位置</th><th>身价</th><th>号码</th></tr></thead><tbody>';
                clubEntries.forEach(function(c) {
                    var displayName = translateClubName(c.t || '暂无数据');
                    var logoUrl = getClubLogo(c.t);
                    var logoHtml = logoUrl ? '<img src="' + logoUrl + '" style="width:18px;height:18px;object-fit:contain;vertical-align:middle;margin-right:4px;" onerror="this.style.display=\'none\'">' : '';
                    html += '<tr><td>' + (c.p || '暂无数据') + '</td><td>' + logoHtml + displayName + '</td><td>' + (translateLeagueName(c.l, c.t) || '暂无数据') + '</td><td>' + (translatePosition(c.ps) || '暂无数据') + '</td><td>' + (window.formatValueWan ? window.formatValueWan(c.mv) : c.mv) || '暂无数据' + '</td><td>' + (c.no || '暂无数据') + '</td></tr>';
                });
                html += '</tbody></table></div>';
            } else {
                html += '<div style="padding:8px;color:var(--text-secondary);font-size:0.75rem;">暂无俱乐部详细记录</div>';
            }
        } else {
            // V1.63: 没有生涯数据时，检查 squad 数据
            var squadData2 = window._squadDetailData || null;
            html += '<div class="pd-section-title">📋 生涯数据</div>';
            if (squadData2) {
                html += '<div style="overflow-x:auto;"><table class="pd-career-table"><thead><tr><th>位置</th><th>俱乐部</th><th>身高</th><th>当前身价</th></tr></thead><tbody>';
                html += '<tr><td>' + (squadData2.posCN || '—') + '</td><td>' + (squadData2.club || '—') + '</td><td>' + (squadData2.height || '—') + '</td><td style="font-weight:700;color:var(--gold-light);">' + (squadData2.value || '—') + '</td></tr>';
                html += '</tbody></table></div>';
            } else {
                html += '<div style="padding:8px;color:var(--text-secondary);font-size:0.75rem;">暂无详细生涯记录</div>';
            }
        }
        
        // Awards
        html += '<div class="pd-section-title" style="margin-top:14px;">🏆 获奖记录</div>';
        if (pd.aw && pd.aw.length > 0) {
            html += '<ul class="pd-award-list">';
            pd.aw.forEach(function(a) { html += '<li>' + a + '</li>'; });
            html += '</ul>';
        } else {
            html += '<div style="padding:8px;color:var(--text-secondary);font-size:0.75rem;">暂无获奖记录</div>';
        }
        
        // Injuries
        html += '<div class="pd-section-title" style="margin-top:14px;">🏥 伤病史</div>';
        if (pd.ij && pd.ij.length > 0) {
            html += '<ul class="pd-injury-list">';
            pd.ij.forEach(function(i) { html += '<li>' + i + '</li>'; });
            html += '</ul>';
        } else {
            html += '<div style="padding:8px;color:var(--text-secondary);font-size:0.75rem;">暂无重大伤病记录</div>';
        }
        
        if (doc) doc.innerHTML = html;
        var modal = document.getElementById('playerDetailModal');
        if (modal) modal.classList.add('visible');
        
        // 清除 squad 数据缓存
        window._squadDetailData = null;
        
    } catch(e) {
        console.error('showPlayerDetail error:', e);
        showToast('⚠️ 显示球员详情时出错: ' + e.message);
    }
};

window.closePlayerDetail = function() {
    // 优先处理V3弹窗（engine.js的 overlay）
    var ov = document.querySelector('.player-detail-overlay');
    if (ov) { ov.remove(); return; }
    var modal = document.getElementById('playerDetailModal');
    if (modal) modal.classList.remove('visible');
};

window.switchPlayerDetailTab = function(tab) {
    document.querySelectorAll('#pdTabs .player-detail-tab').forEach(function(t) { t.classList.remove('active'); });
    var btn = document.querySelector('#pdTabs .player-detail-tab[data-pdtab="' + tab + '"]');
    if (btn) btn.classList.add('active');
    document.querySelectorAll('.player-detail-tab-content').forEach(function(c) { c.classList.remove('active'); });
    var content = document.getElementById('pdTab' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (content) content.classList.add('active');
};

// ===== 使球员名可点击 =====
window.makePlayerClickable = function(displayName) {
    if (!displayName || typeof displayName !== 'string') { console.warn('[makePlayerClickable] invalid displayName:', displayName); return ''; }
    
    var key = getPlayerKey(displayName);
    var pd = key ? playerDB[key] : null;
    
    // 统一使用引擎 formatStandardName 生成 中文(英文) 标签
    var label;
    if (typeof window.formatStandardName === 'function') {
        if (pd) {
            label = window.formatStandardName('player', pd);
        } else {
            label = window.formatStandardName('player', String(displayName));
        }
    } else {
        // 回退逻辑（引擎未加载时）
        label = window.formatPlayerDisplay ? window.formatPlayerDisplay(displayName, pd) : displayName;
    }
    
    // 转义 onclick 参数（使用 key 而非显示名，避免转义问题）
    var onclickVal = key || displayName;
    // ★ V1.63 修复: 如果 key 为空且 displayName 包含括号，提取英文名作为回退
    if (!key && displayName.indexOf('(') >= 0) {
        var _em = displayName.match(/\(([^)]+)\)/);
        if (_em && _em[1]) { onclickVal = _em[1].trim(); }
    }
    var safeOnclick = onclickVal.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');
    var safeLabel = label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    return '<span class="player-clickable" onclick="event.stopPropagation();showPlayerDetail(\'' + safeOnclick + '\')" title="点击查看 ' + (pd && pd.n ? pd.n : displayName).replace(/'/g, '&#39;') + ' 的详细资料">' + safeLabel + '</span>';
};



// ===== 搜索下拉框 (输入时实时过滤) =====
window.filterPlayersDropdown = function() {
    var input = document.getElementById('playerSearchInput');
    var dropdown = document.getElementById('playerSearchDropdown');
    if (!input || !dropdown) return;
    
    var query = input.value.trim();
    input.removeAttribute('data-selected-key');
    
    if (query.length < 1) {
        dropdown.style.display = 'none';
        return;
    }
    
    var ql = query.toLowerCase();
    var results = [];
    var seen = {};
    
    // 先从索引精确查找
    if (__playerSearchIndex[ql]) {
        var k = __playerSearchIndex[ql];
        if (!seen[k]) { results.push(k); seen[k] = true; }
    }
    
    // 再从索引模糊查找
    for (var idxKey in __playerSearchIndex) {
        if (results.length >= 8) break;
        if (idxKey.indexOf(ql) >= 0) {
            var k = __playerSearchIndex[idxKey];
            if (!seen[k]) { results.push(k); seen[k] = true; }
        }
    }
    
    // 如果索引没找到，回退到遍历 playerDB
    if (results.length === 0) {
        for (var key in playerDB) {
            if (results.length >= 8) break;
            var pd = playerDB[key];
            if ((pd.n && pd.n.toLowerCase().indexOf(ql) >= 0) ||
                (pd.nn && pd.nn.toLowerCase().indexOf(ql) >= 0) ||
                (pd.nk && pd.nk.toLowerCase().indexOf(ql) >= 0)) {
                if (!seen[key]) { results.push(key); seen[key] = true; }
            }
        }
    }
    
    if (results.length === 0) {
        dropdown.innerHTML = '<div class="psd-item psd-no-match">未找到匹配球员 — 请尝试其他关键词</div>';
        dropdown.style.display = 'block';
        return;
    }
    
    var html = '<div class="psd-item psd-no-match" style="color:var(--text-secondary);font-size:0.65rem;">📋 找到 ' + results.length + ' 位球员，点击选择后按搜索查看详情</div>';
    var limit = Math.min(results.length, 8);
    for (var i = 0; i < limit; i++) {
        var rk = results[i];
        var rpd = playerDB[rk];
        if (!rpd) continue;
        var safeKey = rk.replace(/'/g, '&#39;').replace(/"/g, '&quot;');
        var dropdownLabel = (window.formatStandardName ? window.formatStandardName('player', rpd) : rpd.n);
        html += '<div class="psd-item" onclick="event.stopPropagation();selectPlayerFromDropdown(\'' + safeKey + '\');">' + dropdownLabel + '</div>';
    }
    
    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
};

// ===== 从下拉框选择球员 =====
window.selectPlayerFromDropdown = function(playerKey) {
    var input = document.getElementById('playerSearchInput');
    var dropdown = document.getElementById('playerSearchDropdown');
    var pd = playerDB[playerKey];
    if (input && pd) {
        var stdName = (window.formatStandardName ? window.formatStandardName('player', pd) : (pd.n + (pd.nn && pd.nn !== pd.n ? ' (' + pd.nn + ')' : '')));
        input.value = stdName;
        input.setAttribute('data-selected-key', playerKey);
    }
    if (dropdown) dropdown.style.display = 'none';
    if (pd) showToast('📌 已选择「' + (window.formatStandardName ? window.formatStandardName('player', pd) : pd.n) + '」，点击「搜索球员」查看详情');
};

// ===== 搜索球员按钮 =====
window.searchPlayer = function() {
    var input = document.getElementById('playerSearchInput');
    var dropdown = document.getElementById('playerSearchDropdown');
    if (!input) return;
    
    var query = input.value.trim();
    if (!query) {
        showToast('⚠️ 请输入球员姓名后点击搜索');
        return;
    }
    
    // 优先使用下拉框选择的 key
    var selectedKey = input.getAttribute('data-selected-key');
    if (selectedKey && playerDB && playerDB[selectedKey]) {
        showPlayerDetail(selectedKey);
        if (dropdown) dropdown.style.display = 'none';
        input.removeAttribute('data-selected-key');
        return;
    }
    
    // 尝试精确匹配（带相关性验证，避免索引子串误匹配）
    var key = getPlayerKey(query);
    if (key && playerDB && playerDB[key]) {
        var _pdV = playerDB[key];
        var _qlV = query.toLowerCase();
        var _vStr = (_pdV.cn||'') + '|' + (_pdV.n||'') + '|' + (_pdV.nn||'') + '|' + (_pdV.en||'') + '|' + key.toLowerCase();
        if (key.toLowerCase() === _qlV || (_pdV.n && _pdV.n.toLowerCase() === _qlV) || (_pdV.nn && _pdV.nn.toLowerCase() === _qlV) || (_pdV.cn && _pdV.cn === query) || _vStr.indexOf(_qlV) >= 0) {
            showPlayerDetail(key);
            if (dropdown) dropdown.style.display = 'none';
            return;
        }
        // 相关性不足，继续走模糊搜索流程
    }
    
    var ql = query.toLowerCase();
    var matches = [];
    var seen = {};
    
    // 1. 尝试使用引擎搜索
    if (typeof window._playerSearchEngine !== 'undefined' && window._playerSearchEngine.search) {
        var engineResult = window._playerSearchEngine.search(query);
        if (engineResult && engineResult.id) {
            showPlayerDetail(engineResult.id);
            if (dropdown) dropdown.style.display = 'none';
            return;
        }
    }
    
    // 2. 索引模糊搜索 (__playerSearchIndex 已在 engine.js 中构建)
    if (typeof __playerSearchIndex !== 'undefined') {
        for (var idxKey in __playerSearchIndex) {
            if (idxKey.indexOf(ql) >= 0) {
                var k = __playerSearchIndex[idxKey];
                if (!seen[k]) { matches.push(k); seen[k] = true; }
            }
        }
    }
    
    // 3. 后备：直接遍历 playerDB
    if (matches.length === 0 && typeof playerDB !== 'undefined') {
        for (var dbKey in playerDB) {
            if (dbKey.toLowerCase().indexOf(ql) >= 0) {
                if (!seen[dbKey]) { matches.push(dbKey); seen[dbKey] = true; }
            } else {
                var pd = playerDB[dbKey];
                var searchStr = (pd.cn||'') + ' ' + (pd.n||'') + ' ' + (pd.en||'') + ' ' + (pd.nn||'');
                if (searchStr.toLowerCase().indexOf(ql) >= 0) {
                    if (!seen[dbKey]) { matches.push(dbKey); seen[dbKey] = true; }
                }
            }
        }
    }
    
    if (matches.length === 1) {
        // V1.63 增强相关性验证：短查询(≤3字符)要求更高相关性，避免子串误匹配
        // 例如搜索"ash"不应自动显示"Emam Ashour"
        var mpd2 = playerDB[matches[0]];
        var relScore = 0;
        var exactMatch = false;
        if (mpd2) {
            var searchStr2 = (mpd2.cn||'') + '|' + (mpd2.n||'') + '|' + (mpd2.nn||'') + '|' + (mpd2.en||'');
            var sl = searchStr2.toLowerCase();
            // 子串匹配基础分（仅当查询≥3字符时计分）
            if (ql.length >= 3 && sl.indexOf(ql) >= 0) relScore++;
            // 精确匹配加成
            if (mpd2.n && mpd2.n.toLowerCase() === ql) { relScore += 3; exactMatch = true; }
            if (mpd2.cn && mpd2.cn === query) { relScore += 3; exactMatch = true; }
            if (mpd2.nn && mpd2.nn.toLowerCase() === ql) { relScore += 3; exactMatch = true; }
            if (mpd2.en && mpd2.en.toLowerCase() === ql) { relScore += 3; exactMatch = true; }
            // 查询长度≥4且任意字段以查询开头 → 加1分
            if (ql.length >= 4 && !exactMatch) {
                var fields = [mpd2.cn, mpd2.n, mpd2.nn, mpd2.en];
                for (var fi = 0; fi < fields.length; fi++) {
                    if (fields[fi] && fields[fi].toLowerCase().indexOf(ql) === 0) { relScore++; break; }
                }
            }
        }
        // 精确匹配(≥3分)或强相关(≥2分)才直接展示
        if (relScore >= 2) {
            showPlayerDetail(matches[0]);
            if (dropdown) dropdown.style.display = 'none';
            return;
        }
        // 相关性不足，继续搜索或显示无结果
    }
    
    if (matches.length > 1) {
        var html = '';
        var limit = Math.min(matches.length, 10);
        for (var i = 0; i < limit; i++) {
            var mk = matches[i];
            var mpd = playerDB[mk];
            if (!mpd) continue;
            var safeMk = mk.replace(/'/g, '&#39;').replace(/"/g, '&quot;');
            html += '<div class="psd-item" onclick="event.stopPropagation();selectPlayerFromDropdown(\'' + safeMk + '\');searchPlayer();">' + mpd.n + ' <span style="color:var(--text-secondary);font-size:0.7rem;">(' + (mpd.nn || mk) + ')</span></div>';
        }
        if (dropdown) {
            dropdown.innerHTML = html;
            dropdown.style.display = 'block';
        }
        showToast('📋 找到 ' + matches.length + ' 位球员，请从下拉列表选择');
        return;
    }
    
    // 尝试在比赛数据中搜索 scorer（V1.63: 仅当查询≥3字符且匹配整个单词时才触发，避免误匹配）
    if (typeof wcMatchDetails !== 'undefined' && ql.length >= 3) {
        for (var mk2 in wcMatchDetails) {
            var detail = wcMatchDetails[mk2];
            if (detail && detail.goals) {
                for (var gi = 0; gi < detail.goals.length; gi++) {
                    var g = detail.goals[gi];
                    if (g.scorer) {
                        var scorerWords = g.scorer.toLowerCase().split(/[\s,·\.\-]+/);
                        for (var sw = 0; sw < scorerWords.length; sw++) {
                            if (scorerWords[sw] === ql || (scorerWords[sw].length >= 3 && scorerWords[sw].indexOf(ql) === 0)) {
                                showPlayerDetail(g.scorer);
                                if (dropdown) dropdown.style.display = 'none';
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
    
    showToast('🔍 未找到匹配的球员：「' + query + '」');
};

// ===== 点击外部关闭下拉框 =====
document.addEventListener('click', function(e) {
    var dropdown = document.getElementById('playerSearchDropdown');
    var input = document.getElementById('playerSearchInput');
    if (dropdown && input && e.target !== input && !input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

// Add click-to-close for player detail modal
setTimeout(function() {
  var pdm = document.getElementById('playerDetailModal');
  if (pdm) pdm.addEventListener('click', function(e) { if (e.target === this) closePlayerDetail(); });
}, 100);


// ========== V21: 数据总览功能 ==========
// Player class for future detail expansion
class Player {
  constructor(name, goals, types) {
    this.name = name;
    this.goals = goals;
    this.types = types || {};
  }
}

window.closeDataOverview = function() {
  document.getElementById('dataOverviewModal').classList.remove('visible');
};

window.showDataOverview = function() {
  var data = pastWCYear==='2022'?wc2022Data:pastWCYear==='2018'?wc2018Data:pastWCYear==='2014'?wc2014Data:pastWCYear==='2010'?wc2010Data:pastWCYear==='2006'?wc2006Data:wc2002Data;
  var yearLabel = {'2022':'\uD83C\uDDE6\uD83C\uDDF6 2022 \u5361\u5854\u5C14','2018':'\uD83C\uDDF7\uD83C\uDDFA 2018 \u4FC4\u7F57\u65AF','2014':'\uD83C\uDDE7\uD83C\uDDF7 2014 \u5DF4\u897F','2010':'\uD83C\uDDFF\uD83C\uDDE6 2010 \u5357\u975E','2006':'\uD83C\uDDE9\uD83C\uDDEA 2006 \u5FB7\u56FD','2002':'\uD83C\uDDF0\uD83C\uDDF7\uD83C\uDDEF\uD83C\uDDF5 2002 \u97E9\u65E5'}[pastWCYear]||pastWCYear;
  document.getElementById('dataOverviewYearLabel').textContent = '\u2014 ' + yearLabel;

  // ===== USE COMPLETE MATCH DATA for total goals =====
  var allGoalsFromDetails = [];
  var totalGoals = 0, totalRegularGoals = 0, totalPKGoals = 0;
  var totalMatches = 0;
  var totalYellows = 0, totalReds = 0;
  var goalTypeCount = {penalty:0, header:0, free_kick:0, own_goal:0, shot:0};
  var scorerMap = {};
  var matchesWithDetailData = 0;

  // Count from complete match data (groups + knockout)
  Object.keys(data.groups).sort().forEach(function(gid) {
    var g = data.groups[gid];
    g.matches.forEach(function(m) {
      totalMatches++;
      totalGoals += (m.sh || 0) + (m.sa || 0);
      totalRegularGoals += (m.sh || 0) + (m.sa || 0);
    });
  });
  if (data.knockout) {
    ['R16','QF','SF','TP','FINAL'].forEach(function(ks) {
      var kr = data.knockout.find(function(k){return k.stage===ks;});
      if (!kr) return;
      kr.matches.forEach(function(m) {
        totalMatches++;
        totalGoals += (m.sh || 0) + (m.sa || 0);
        totalRegularGoals += (m.sh || 0) + (m.sa || 0);
        // Count penalty shootout goals from ps field
        if (m.ps) {
          var psParts = m.ps.split('-');
          if (psParts.length === 2) {
            var psHome = parseInt(psParts[0]) || 0;
            var psAway = parseInt(psParts[1]) || 0;
            totalPKGoals += psHome + psAway;
            totalGoals += psHome + psAway;
          }
        }
      });
    });
  }

  // Collect detailed data from wcMatchDetails for minute distribution & goal types
  Object.keys(wcMatchDetails).forEach(function(key) {
    var parts = key.split('|');
    if (parts[0] !== pastWCYear) return;
    var detail = wcMatchDetails[key];
    if (!detail) return;
    matchesWithDetailData++;

    if (detail.goals) {
      detail.goals.forEach(function(g) {
        // Only count regular-time goals from details (not PK shootout)
        if (g.min <= 130) {
          allGoalsFromDetails.push({min: g.min, type: g.type, scorer: g.scorer, side: g.side});
          goalTypeCount[g.type] = (goalTypeCount[g.type] || 0) + 1;
          if (!scorerMap[g.scorer]) scorerMap[g.scorer] = {goals: 0, types: {}};
          scorerMap[g.scorer].goals++;
          scorerMap[g.scorer].types[g.type] = (scorerMap[g.scorer].types[g.type] || 0) + 1;
        }
      });
    }

    if (detail.cards) {
      totalYellows += (detail.cards.home ? detail.cards.home.yellow : 0) + (detail.cards.away ? detail.cards.away.yellow : 0);
      totalReds += (detail.cards.home ? detail.cards.home.red : 0) + (detail.cards.away ? detail.cards.away.red : 0);
    }
  });

  // Goal minute intervals (5-min buckets: 1-5, 6-10, ..., 116-120, 120+)
  var intervals = [];
  var intervalLabels = [];
  for (var i = 0; i < 25; i++) {
    var lo = i * 5 + 1;
    var hi = (i + 1) * 5;
    if (i === 24) { lo = 121; hi = 999; }
    intervals.push(0);
    intervalLabels.push(i === 24 ? '120+' : (lo + '-' + hi));
  }
  allGoalsFromDetails.forEach(function(g) {
    var idx = Math.min(24, Math.floor((g.min - 1) / 5));
    intervals[idx]++;
  });

  var maxGoal = Math.max.apply(null, intervals) || 1;

  // Build scorer leaderboard (top 30)
  var scorerList = Object.keys(scorerMap).map(function(name) {
    return {name: name, goals: scorerMap[name].goals, types: scorerMap[name].types};
  }).sort(function(a, b) { return b.goals - a.goals; }).slice(0, 30);

  var typeLabels = {penalty: '\u70B9\u7403', header: '\u5934\u7403', free_kick: '\u4EFB\u610F\u7403', own_goal: '\u4E4C\u9F99', shot: '\u5C04\u95E8'};
  var typeColors = {penalty: '#ffd700', header: '#87ceeb', free_kick: '#ba55d3', own_goal: '#e74c3c', shot: '#2ecc71'};

  // ===== RENDER =====
  var html = '';

  // Summary cards - using complete data
  html += '<div class="overview-summary-grid">';
  html += '<div class="overview-stat-card"><div class="stat-num">' + totalGoals + '</div><div class="stat-lbl">⚽ 总进球（含点球大战）</div></div>';
  html += '<div class="overview-stat-card"><div class="stat-num">' + totalRegularGoals + '</div><div class="stat-lbl">⚽ 常规时间进球</div></div>';
  html += '<div class="overview-stat-card"><div class="stat-num">' + totalPKGoals + '</div><div class="stat-lbl">🎯 点球大战进球</div></div>';
  html += '<div class="overview-stat-card"><div class="stat-num">' + totalMatches + '</div><div class="stat-lbl">📋 总比赛场次</div></div>';
  html += '<div class="overview-stat-card"><div class="stat-num">' + (totalMatches > 0 ? (totalRegularGoals / totalMatches).toFixed(2) : '—') + '</div><div class="stat-lbl">📊 场均进球（常规）</div></div>';
  html += '</div>';

  // Tab row
  html += '<div class="overview-tab-row" id="overviewTabs">';
  html += '<div class="overview-tab-btn active" data-ovtab="goals" onclick="switchOverviewTab(\'goals\')">⚽ 进球分钟分布</div>';
  html += '<div class="overview-tab-btn" data-ovtab="cards" onclick="switchOverviewTab(\'cards\')">🟨 纪律统计</div>';
  html += '<div class="overview-tab-btn" data-ovtab="types" onclick="switchOverviewTab(\'types\')">🎯 进球方式</div>';
  html += '<div class="overview-tab-btn" data-ovtab="scorers" onclick="switchOverviewTab(\'scorers\')">👑 射手榜</div>';
  html += '</div>';

  // Goal interval chart (from detailed data only)
  html += '<div class="overview-tab-content" id="ovTabGoals" style="display:block;">';
  html += '<div class="backtest-section-title">⚽ 进球分钟区间分布（每5分钟）<span style="font-size:0.65rem;color:var(--text-secondary);"> — 详细数据覆盖 ' + matchesWithDetailData + '/' + totalMatches + ' 场</span></div>';
  html += '<div class="overview-bar-chart">';
  intervals.forEach(function(v, i) {
    var w = maxGoal > 0 ? Math.max(2, Math.round(v / maxGoal * 100)) : 0;
    html += '<div class="overview-bar-row">';
    html += '<span class="overview-bar-label">' + intervalLabels[i] + '</span>';
    html += '<div class="overview-bar-track"><div class="overview-bar-fill overview-goal-bar" style="width:' + w + '%;"></div></div>';
    html += '<span class="overview-bar-val">' + (v || '0') + '</span>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div class="backtest-insight">📌 详细分钟分布基于 <strong>' + matchesWithDetailData + '</strong> 场有进球时间轴记录的比赛（共 ' + allGoalsFromDetails.length + ' 球）。加时赛进球计入120+区间。完整总进球数（含点球大战）为 <strong>' + totalGoals + '</strong> 球。</div>';
  html += '</div>';

  // Card stats
  html += '<div class="overview-tab-content" id="ovTabCards" style="display:none;">';
  html += '<div class="backtest-section-title">🟨 纪律统计<span style="font-size:0.65rem;color:var(--text-secondary);"> — 详细数据覆盖 ' + matchesWithDetailData + '/' + totalMatches + ' 场</span></div>';
  html += '<table class="backtest-table"><thead><tr><th>指标</th><th>总计（已知场次）</th><th>场均</th><th>全赛事估算</th></tr></thead><tbody>';
  html += '<tr><td>🟨 黄牌</td><td>' + totalYellows + '</td><td>' + (matchesWithDetailData > 0 ? (totalYellows / matchesWithDetailData).toFixed(2) : '—') + '</td><td>≈' + (matchesWithDetailData > 0 ? Math.round(totalYellows / matchesWithDetailData * totalMatches) : '—') + '</td></tr>';
  html += '<tr><td>🟥 红牌</td><td>' + totalReds + '</td><td>' + (matchesWithDetailData > 0 ? (totalReds / matchesWithDetailData).toFixed(2) : '—') + '</td><td>≈' + (matchesWithDetailData > 0 ? Math.round(totalReds / matchesWithDetailData * totalMatches) : '—') + '</td></tr>';
  html += '</tbody></table>';
  html += '<div class="backtest-insight">📌 纪律数据来自 <strong>' + matchesWithDetailData + '</strong> 场有详细记录的比赛。全赛事估算是按场均×总场次推算。</div>';
  html += '</div>';

  // Goal types
  html += '<div class="overview-tab-content" id="ovTabTypes" style="display:none;">';
  html += '<div class="backtest-section-title">🎯 进球方式总览<span style="font-size:0.65rem;color:var(--text-secondary);"> — 详细数据覆盖 ' + matchesWithDetailData + '/' + totalMatches + ' 场</span></div>';
  html += '<table class="backtest-table"><thead><tr><th>进球方式</th><th>数量（已知）</th><th>占比</th></tr></thead><tbody>';
  Object.keys(typeLabels).forEach(function(t) {
    var cnt = goalTypeCount[t] || 0;
    var pct = allGoalsFromDetails.length > 0 ? (cnt / allGoalsFromDetails.length * 100) : 0;
    html += '<tr><td><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:' + (typeColors[t] || '#ccc') + ';margin-right:6px;vertical-align:middle;"></span>' + typeLabels[t] + '</td><td>' + cnt + '</td><td>' + pct.toFixed(1) + '%</td></tr>';
  });
  html += '</tbody></table>';
  html += '</div>';

  // Scorer leaderboard
  html += '<div class="overview-tab-content" id="ovTabScorers" style="display:none;">';
  html += '<div class="backtest-section-title">👑 球员射手榜（TOP 30）<span style="font-size:0.65rem;color:var(--text-secondary);"> — 来自详细数据</span></div>';
  html += '<div style="overflow-x:auto;"><table class="scorer-table"><thead><tr><th>#</th><th>球员</th><th>进球</th><th>点球</th><th>头球</th><th>任意球</th><th>乌龙</th><th>射门</th></tr></thead><tbody>';
  scorerList.forEach(function(p, i) {
    var rc = i === 0 ? 'rank-gold' : (i === 1 ? 'rank-silver' : (i === 2 ? 'rank-bronze' : ''));
    html += '<tr><td class="' + rc + '">' + (i + 1) + '</td><td style="text-align:left;font-weight:600;">' + makePlayerClickable(p.name) + '</td><td style="font-weight:700;color:var(--gold-light);">' + p.goals + '</td>';
    html += '<td>' + (p.types.penalty || 0) + '</td><td>' + (p.types.header || 0) + '</td><td>' + (p.types.free_kick || 0) + '</td><td>' + (p.types.own_goal || 0) + '</td><td>' + (p.types.shot || 0) + '</td>';
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  html += '</div>';
  html += '<div style="text-align:center;padding:16px 0 8px;color:var(--text-secondary);font-size:0.75rem;opacity:0.8;">◆ 仅用作数据分析 不构成投资建议 ◆</div>';

  document.getElementById('dataOverviewContent').innerHTML = html;
  document.getElementById('dataOverviewModal').classList.add('visible');
};

window.switchOverviewTab = function(tab) {
  document.querySelectorAll('#overviewTabs .overview-tab-btn').forEach(function(t) { t.classList.remove('active'); });
  var btn = document.querySelector('#overviewTabs .overview-tab-btn[data-ovtab="' + tab + '"]');
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.overview-tab-content').forEach(function(c) { c.style.display = 'none'; });
  var content = document.getElementById('ovTab' + tab.charAt(0).toUpperCase() + tab.slice(1));
  if (content) content.style.display = 'block';
};

// Add click-to-close for data overview modal
setTimeout(function() {
  var dm = document.getElementById('dataOverviewModal');
  if (dm) dm.addEventListener('click', function(e) { if (e.target === this) closeDataOverview(); });
}, 100);


// ========== 数据对比功能 (V20) ==========
// Track which comparison type is active
window._comparisonType = 'flat'; // 'flat', 'pref', 'dataOverview'

// Run comparison based on current modal context
window.runComparison = function() {
  // Determine which type based on what's currently visible
  var bm = document.getElementById('backtestModal');
  var label = document.getElementById('backtestYearLabel');
  if (label && bm.classList.contains('visible')) {
    var labelText = label.textContent || '';
    if (labelText.indexOf('均注策略') >= 0) {
      runFlatBacktestComparison();
    } else {
      runPrefBacktestComparison();
    }
  }
};

// Flat Betting comparison across all editions
window.runFlatBacktestComparison = function() {
  var editions = ['2022','2018','2014','2010','2006','2002'];
  var editionLabels = {'2022':'🇶🇦2022','2018':'🇷🇺2018','2014':'🇧🇷2014','2010':'🇿🇦2010','2006':'🇩🇪2006','2002':'🇰🇷🇯🇵2002'};
  var allResults = [];
  
  editions.forEach(function(year) {
    var data = year==='2022'?wc2022Data:year==='2018'?wc2018Data:year==='2014'?wc2014Data:year==='2010'?wc2010Data:year==='2006'?wc2006Data:wc2002Data;
    if (!data || !data.groups) return;
    
    var allMatches = [];
    Object.keys(data.groups).sort().forEach(function(gid) {
      data.groups[gid].matches.forEach(function(m) {
        allMatches.push({m:m, stage:data.groups[gid].name, date:m.date||''});
      });
    });
    ['R16','QF','SF','TP','FINAL'].forEach(function(ks) {
      var kr = data.knockout.find(function(k){return k.stage===ks;});
      if (!kr) return;
      kr.matches.forEach(function(m) {
        allMatches.push({m:m, stage:{'R16':'16强','QF':'8强','SF':'4强','TP':'季军赛','FINAL':'决赛'}[ks]||ks, date:m.date||''});
      });
    });
    
    var strategies = [
      {id:'all_fav', name:'🟢全投预期', initialCapital:10000, capital:10000, additionalCapital:0, injectionCount:0,
       totalBets:0, wins:0, totalReturn:0, totalStake:0, bankruptAt:null,
       getTarget:function(od){return od.hw<od.aw?'home':'away';},
       getOdds:function(od){return Math.min(od.hw,od.aw);}},
      {id:'all_draw', name:'🟠全投平局', initialCapital:10000, capital:10000, additionalCapital:0, injectionCount:0,
       totalBets:0, wins:0, totalReturn:0, totalStake:0, bankruptAt:null,
       getTarget:function(od){return 'draw';},
       getOdds:function(od){return od.d||3.2;}},
      {id:'all_dog', name:'🔴全投爆冷', initialCapital:10000, capital:10000, additionalCapital:0, injectionCount:0,
       totalBets:0, wins:0, totalReturn:0, totalStake:0, bankruptAt:null,
       getTarget:function(od){return od.hw>od.aw?'home':'away';},
       getOdds:function(od){return Math.max(od.hw,od.aw);}}
    ];
    
    allMatches.forEach(function(item, globalIdx) {
      var m = item.m;
      var od = m.odds || {hw:2.50, d:3.20, aw:2.80};
      var outcome = m.sh > m.sa ? 'home' : (m.sa > m.sh ? 'away' : 'draw');
      
      strategies.forEach(function(s) {
        var target = s.getTarget(od);
        var odds = s.getOdds(od);
        var stake = 1000;

        while (s.capital < stake) {
          if (s.bankruptAt === null) s.bankruptAt = globalIdx;
          s.capital += 1000;
          s.additionalCapital += 1000;
          s.injectionCount++;
        }

        s.capital -= stake;
        s.totalBets++;
        s.totalStake += stake;

        var won = false, returnAmount = 0;
        if (target === 'draw' && outcome === 'draw') { returnAmount = Math.round(stake * odds); won = true; }
        else if (target === 'home' && outcome === 'home') { returnAmount = Math.round(stake * odds); won = true; }
        else if (target === 'away' && outcome === 'away') { returnAmount = Math.round(stake * odds); won = true; }

        if (won) {
          s.wins++;
          s.capital += returnAmount;
          s.totalReturn += returnAmount;
        }
      });
    });
    
    allResults.push({year: year, label: editionLabels[year] || year, strategies: strategies});
  });
  
  // Render comparison
  var bl = document.getElementById('backtestYearLabel');
  if (bl) bl.textContent = '— 📊 数据对比：均注策略（全部六届）';
  
  var html = '';
  html += '<div class="backtest-insight"><strong>📊 数据对比说明：</strong>以下展示六届世界杯的均注策略（全投预期/全投平局/全投爆冷）横向对比，所有策略均以<strong>¥10,000 预算本金</strong>运行，耗尽后每场追加¥1,000。</div>';
  
  // Summary cards per edition per strategy
  html += '<div class="backtest-section-title">📊 各届均注策略 — 顶部主信息对比</div>';
  
  allResults.forEach(function(result) {
    html += '<div class="backtest-section-title" style="font-size:0.9rem;">' + result.label + '</div>';
    html += '<div class="backtest-summary-grid">';
    result.strategies.forEach(function(s) {
      var totalInvested = s.initialCapital + s.additionalCapital;
      var profit = s.capital - totalInvested;
      var roiBudget = s.initialCapital > 0 ? (profit / s.initialCapital * 100) : 0;
      var hitRate = s.totalBets > 0 ? (s.wins / s.totalBets * 100) : 0;
      var cls = profit >= 0 ? 'backtest-positive' : 'backtest-negative';
      html += '<div class="backtest-summary-card">';
      html += '<div class="card-label">' + s.name + '</div>';
      html += '<div class="card-value ' + cls + '">' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + '</div>';
      html += '<div class="card-sub">实际投入 ¥' + totalInvested.toLocaleString() + '（预算¥' + s.initialCapital.toLocaleString() + ' + 追加¥' + s.additionalCapital.toLocaleString() + '）</div>';
      html += '<div class="card-sub">最终金额 ¥' + s.capital.toLocaleString() + ' | ROI(预算) ' + (roiBudget >= 0 ? '+' : '') + roiBudget.toFixed(2) + '%</div>';
      html += '<div class="card-sub">命中 ' + s.wins + '/' + s.totalBets + ' (' + hitRate.toFixed(1) + '%)' + (s.injectionCount > 0 ? ' | 追加' + s.injectionCount + '次' : '') + '</div>';
      html += '</div>';
    });
    html += '</div>';
  });
  
  // Summary comparison table
  html += '<div class="backtest-section-title">📊 跨届汇总对比表</div>';
  html += '<div style="overflow-x:auto;"><table class="backtest-table"><thead><tr><th>届次</th><th>🟢全投预期 净盈亏</th><th>🟢ROI</th><th>🟠全投平局 净盈亏</th><th>🟠ROI</th><th>🔴全投爆冷 净盈亏</th><th>🔴ROI</th></tr></thead><tbody>';
  allResults.forEach(function(result) {
    html += '<tr><td style="font-weight:700;">' + result.label + '</td>';
    result.strategies.forEach(function(s) {
      var totalInvested = s.initialCapital + s.additionalCapital;
      var profit = s.capital - totalInvested;
      var roiBudget = s.initialCapital > 0 ? (profit / s.initialCapital * 100) : 0;
      var cls = profit >= 0 ? 'backtest-positive' : 'backtest-negative';
      html += '<td class="' + cls + '">' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + '</td>';
      html += '<td class="' + cls + '">' + (roiBudget >= 0 ? '+' : '') + roiBudget.toFixed(2) + '%</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  
  // Show in backtest modal
  var bc = document.getElementById('backtestContent');
  if (bc) bc.innerHTML = html;
  var bm = document.getElementById('backtestModal');
  if (bm) bm.classList.add('visible');
};

// Preferred backtest comparison across all editions
window.runPrefBacktestComparison = function() {
  var editions = ['2022','2018','2014','2010','2006','2002'];
  var editionLabels = {'2022':'🇶🇦2022','2018':'🇷🇺2018','2014':'🇧🇷2014','2010':'🇿🇦2010','2006':'🇩🇪2006','2002':'🇰🇷🇯🇵2002'};
  var allResults = [];
  
  editions.forEach(function(year) {
    var data = year==='2022'?wc2022Data:year==='2018'?wc2018Data:year==='2014'?wc2014Data:year==='2010'?wc2010Data:year==='2006'?wc2006Data:wc2002Data;
    if (!data || !data.groups) return;

    var allMatches = [];
    Object.keys(data.groups).sort().forEach(function(gid) {
      data.groups[gid].matches.forEach(function(m) {
        allMatches.push({m:m, stage:data.groups[gid].name, date:m.date||''});
      });
    });
    ['R16','QF','SF','TP','FINAL'].forEach(function(ks) {
      var kr = data.knockout.find(function(k){return k.stage===ks;});
      if (!kr) return;
      kr.matches.forEach(function(m) {
        allMatches.push({m:m, stage:{'R16':'16强','QF':'8强','SF':'4强','TP':'季军赛','FINAL':'决赛'}[ks]||ks, date:m.date||''});
      });
    });

    var strategies = [
      {id:'conservative', name:'🛡️稳健型', desc:'仅投赔率1.30~2.00的明显热门，每注8%本金',
       capital:10000, initialCapital:10000, totalBets:0, wins:0, losses:0, peakCapital:10000, maxDrawdown:0,
       shouldBet:function(od){var fav=Math.min(od.hw,od.aw);return fav>=1.30&&fav<=2.00;},
       getStake:function(){return Math.floor(this.capital*0.08);},
       getTarget:function(od){return od.hw<od.aw?'home':'away';}},
      {id:'aggressive', name:'⚡激进型', desc:'投赔率1.20~2.80的热门+接近对决的平局，每注15%本金',
       capital:10000, initialCapital:10000, totalBets:0, wins:0, losses:0, peakCapital:10000, maxDrawdown:0,
       shouldBet:function(od){var fav=Math.min(od.hw,od.aw);if(fav>=1.20&&fav<=2.80)return true;if(Math.abs(od.hw-od.aw)<0.5)return true;return false;},
       getStake:function(){return Math.floor(this.capital*0.15);},
       getTarget:function(od){var diff=Math.abs(od.hw-od.aw);if(diff<0.5)return'draw';return od.hw<od.aw?'home':'away';}},
      {id:'upset', name:'🎯以小博大', desc:'仅投赔率≥4.00的大冷门，每注2%本金，小注博大奖',
       capital:10000, initialCapital:10000, totalBets:0, wins:0, losses:0, peakCapital:10000, maxDrawdown:0,
       shouldBet:function(od){return Math.max(od.hw,od.aw)>=4.00;},
       getStake:function(){return Math.floor(this.capital*0.02);},
       getTarget:function(od){return od.hw>od.aw?'home':'away';}}
    ];

    allMatches.forEach(function(item, globalIdx) {
      var m = item.m;
      var od = m.odds || {hw:2.50, d:3.20, aw:2.80};
      var outcome = m.sh > m.sa ? 'home' : (m.sa > m.sh ? 'away' : 'draw');

      strategies.forEach(function(strat) {
        if (!strat.shouldBet(od)) return;
        var target = strat.getTarget(od);
        var stake = strat.getStake();
        if (stake <= 0 || stake > strat.capital) return;

        strat.totalBets++;
        var returnAmount = 0;
        var won = false;
        if (target === 'draw' && outcome === 'draw') { returnAmount = Math.floor(stake * (od.d || 3.2)); won = true; }
        else if (target === 'home' && outcome === 'home') { returnAmount = Math.floor(stake * od.hw); won = true; }
        else if (target === 'away' && outcome === 'away') { returnAmount = Math.floor(stake * od.aw); won = true; }

        if (won) { strat.wins++; strat.capital += returnAmount - stake; }
        else { strat.losses++; strat.capital -= stake; }

        if (strat.capital > strat.peakCapital) strat.peakCapital = strat.capital;
      });
    });

    allResults.push({year:year, label:editionLabels[year]||year, strategies:strategies});
  });

  var bl = document.getElementById('backtestYearLabel');
  if (bl) bl.textContent = '— 📊 数据对比：优选策略（全部六届）';

  var html = '';
  html += '<div class="backtest-insight"><strong>📊 数据对比说明：</strong>以下展示六届世界杯的优选策略（稳健型/激进型/以小博大）横向对比，所有策略均以<strong>¥10,000 本金</strong>运行。</div>';

  html += '<div class="backtest-section-title">📊 各届优选策略 — 顶部主信息对比</div>';

  allResults.forEach(function(result) {
    html += '<div class="backtest-section-title" style="font-size:0.9rem;">' + result.label + '</div>';
    html += '<div class="backtest-summary-grid">';
    result.strategies.forEach(function(s) {
      var profit = s.capital - s.initialCapital;
      var roi = ((s.capital / s.initialCapital) - 1) * 100;
      var hitRate = s.totalBets > 0 ? (s.wins / s.totalBets * 100) : 0;
      var cls = profit >= 0 ? 'backtest-positive' : (roi < -20 ? 'backtest-negative' : 'backtest-neutral');
      var badge = profit >= 500 ? '🏆 优异' : (profit >= 0 ? '✅ 正收益' : (roi < -20 ? '⚠️ 严重亏损' : '📉 亏损'));
      html += '<div class="backtest-summary-card">';
      html += '<div class="card-label">' + s.name + '</div>';
      html += '<div class="card-value ' + cls + '">' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + '</div>';
      html += '<div class="card-sub">起始本金 ¥' + s.initialCapital.toLocaleString() + ' | 最终金额 ¥' + s.capital.toLocaleString() + '</div>';
      html += '<div class="card-sub">ROI ' + (roi >= 0 ? '+' : '') + roi.toFixed(2) + '% | 命中 ' + s.wins + '/' + s.totalBets + ' (' + hitRate.toFixed(1) + '%) | 回撤 ' + s.maxDrawdown.toFixed(1) + '%</div>';
      html += '<div style="margin-top:4px;"><span style="display:inline-block;padding:3px 10px;border-radius:12px;font-size:0.65rem;font-weight:700;background:' + (profit>=0?'rgba(46,204,113,0.15)':'rgba(231,76,60,0.12)') + ';color:' + (profit>=0?'#2ecc71':'#e74c3c') + ';">' + badge + '</span></div>';
      html += '</div>';
    });
    html += '</div>';
  });

  // Cross-edition summary table
  html += '<div class="backtest-section-title">📊 跨届汇总对比表</div>';
  html += '<div style="overflow-x:auto;"><table class="backtest-table"><thead><tr><th>届次</th><th>🛡️稳健型 净盈亏</th><th>ROI</th><th>⚡激进型 净盈亏</th><th>ROI</th><th>🎯以小博大 净盈亏</th><th>ROI</th></tr></thead><tbody>';
  allResults.forEach(function(result) {
    html += '<tr><td style="font-weight:700;">' + result.label + '</td>';
    result.strategies.forEach(function(s) {
      var profit = s.capital - s.initialCapital;
      var roi = ((s.capital / s.initialCapital) - 1) * 100;
      var cls = profit >= 0 ? 'backtest-positive' : 'backtest-negative';
      html += '<td class="' + cls + '">' + (profit >= 0 ? '+' : '') + '¥' + profit.toLocaleString() + '</td>';
      html += '<td class="' + cls + '">' + (roi >= 0 ? '+' : '') + roi.toFixed(2) + '%</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  var bc = document.getElementById('backtestContent');
  if (bc) bc.innerHTML = html;
  var bm = document.getElementById('backtestModal');
  if (bm) bm.classList.add('visible');
};

// Data overview comparison across all editions
window.runDataOverviewComparison = function() {
  var editions = ['2022','2018','2014','2010','2006','2002'];
  var editionLabels = {'2022':'\uD83C\uDDE6\uD83C\uDDF62022','2018':'\uD83C\uDDF7\uD83C\uDDFA2018','2014':'\uD83C\uDDE7\uD83C\uDDF72014','2010':'\uD83C\uDDFF\uD83C\uDDE62010','2006':'\uD83C\uDDE9\uD83C\uDDEA2006','2002':'\uD83C\uDDF0\uD83C\uDDF7\uD83C\uDDEF\uD83C\uDDF52002'};
  var allResults = [];

  editions.forEach(function(year) {
    var data = year==='2022'?wc2022Data:year==='2018'?wc2018Data:year==='2014'?wc2014Data:year==='2010'?wc2010Data:year==='2006'?wc2006Data:wc2002Data;
    if (!data || !data.groups) return;

    // Count from complete match data
    var totalGoals = 0, totalRegularGoals = 0, totalPKGoals = 0, totalMatches = 0;
    Object.keys(data.groups).sort().forEach(function(gid) {
      data.groups[gid].matches.forEach(function(m) {
        totalMatches++;
        totalGoals += (m.sh || 0) + (m.sa || 0);
        totalRegularGoals += (m.sh || 0) + (m.sa || 0);
      });
    });
    if (data.knockout) {
      ['R16','QF','SF','TP','FINAL'].forEach(function(ks) {
        var kr = data.knockout.find(function(k){return k.stage===ks;});
        if (!kr) return;
        kr.matches.forEach(function(m) {
          totalMatches++;
          totalGoals += (m.sh || 0) + (m.sa || 0);
          totalRegularGoals += (m.sh || 0) + (m.sa || 0);
          if (m.ps) {
            var psParts = m.ps.split('-');
            if (psParts.length === 2) {
              totalPKGoals += (parseInt(psParts[0])||0) + (parseInt(psParts[1])||0);
              totalGoals += (parseInt(psParts[0])||0) + (parseInt(psParts[1])||0);
            }
          }
        });
      });
    }

    // Detailed data from wcMatchDetails
    var allGoalsFromDetails = [], totalYellows = 0, totalReds = 0;
    var goalTypeCount = {penalty:0, header:0, free_kick:0, own_goal:0, shot:0};
    var matchesWithDetailData = 0;
    Object.keys(wcMatchDetails).forEach(function(key) {
      var parts = key.split('|');
      if (parts[0] !== year) return;
      var detail = wcMatchDetails[key];
      if (!detail) return;
      matchesWithDetailData++;
      if (detail.goals) {
        detail.goals.forEach(function(g) {
          if (g.min <= 130) {
            allGoalsFromDetails.push({min:g.min, type:g.type, scorer:g.scorer});
            goalTypeCount[g.type] = (goalTypeCount[g.type] || 0) + 1;
          }
        });
      }
      if (detail.cards) {
        totalYellows += (detail.cards.home ? detail.cards.home.yellow : 0) + (detail.cards.away ? detail.cards.away.yellow : 0);
        totalReds += (detail.cards.home ? detail.cards.home.red : 0) + (detail.cards.away ? detail.cards.away.red : 0);
      }
    });

    allResults.push({
      year:year, label:editionLabels[year]||year,
      totalGoals:totalGoals, totalRegularGoals:totalRegularGoals, totalPKGoals:totalPKGoals,
      totalMatches:totalMatches,
      yellows:totalYellows, reds:totalReds,
      matchesWithDetailData:matchesWithDetailData,
      goalTypes: goalTypeCount,
      detailGoalsCount: allGoalsFromDetails.length
    });
  });

  var dlabel = document.getElementById('dataOverviewYearLabel');
  if (dlabel) dlabel.textContent = '\u2014 \uD83D\uDCCA \u6570\u636E\u5BF9\u6BD4\uFF1A\u516D\u5C4A\u4E16\u754C\u676F\u6570\u636E\u603B\u89C8';

  var html = '';
  html += '<div class="backtest-insight"><strong>\uD83D\uDCCA \u6570\u636E\u5BF9\u6BD4\u8BF4\u660E\uFF1A</strong>\u4EE5\u4E0B\u5C55\u793A\u516D\u5C4A\u4E16\u754C\u676F\u7684\u5173\u952E\u6570\u636E\u6307\u6807\u6A2A\u5411\u5BF9\u6BD4\u3002<strong>\u603B\u8FDB\u7403/\u5E38\u89C4\u65F6\u95F4\u8FDB\u7403/\u70B9\u7403\u5927\u6218\u8FDB\u7403</strong>\u6765\u81EA\u5B8C\u6574\u6BD4\u8D5B\u6570\u636E\uFF0864/64\u573A\u8986\u76D6\uFF09\uFF0C\u8FDB\u7403\u65B9\u5F0F\u548C\u7EAA\u5F8B\u6570\u636E\u4EC5\u6765\u81EA\u6709\u8BE6\u7EC6\u8BB0\u5F55\u7684\u573A\u6B21\u3002</div>';

  // Summary comparison table - complete data metrics
  html += '<div class="backtest-section-title">\uD83D\uDCCA \u516D\u5C4A\u4E16\u754C\u676F\u6570\u636E\u603B\u89C8\u5BF9\u6BD4</div>';
  html += '<div style="overflow-x:auto;"><table class="backtest-table"><thead><tr><th>\u5C4A\u6B21</th><th>⚽ \u603B\u8FDB\u7403</th><th>⚽ \u5E38\u89C4\u65F6\u95F4</th><th>🎯 \u70B9\u7403\u5927\u6218</th><th>📋 \u573A\u6B21</th><th>📊 \u573A\u5747\u8FDB\u7403</th></tr></thead><tbody>';
  allResults.forEach(function(r) {
    var avgGoals = r.totalMatches > 0 ? (r.totalRegularGoals / r.totalMatches).toFixed(2) : '—';
    html += '<tr><td style="font-weight:700;">' + r.label + '</td>';
    html += '<td>' + r.totalGoals + '</td>';
    html += '<td>' + r.totalRegularGoals + '</td>';
    html += '<td>' + r.totalPKGoals + '</td>';
    html += '<td>' + r.totalMatches + '</td>';
    html += '<td>' + avgGoals + '</td>';
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  // Detailed data comparison (from wcMatchDetails)
  html += '<div class="backtest-section-title">🔍 详细数据对比（来自进球时间轴记录）</div>';
  html += '<div style="overflow-x:auto;"><table class="backtest-table"><thead><tr><th>届次</th><th>🟨 黄牌</th><th>🟥 红牌</th><th>📊 详细覆盖</th><th>点球</th><th>头球</th><th>任意球</th><th>乌龙</th><th>射门</th></tr></thead><tbody>';
  allResults.forEach(function(r) {
    html += '<tr><td style="font-weight:700;">' + r.label + '</td>';
    html += '<td>' + r.yellows + '</td>';
    html += '<td>' + r.reds + '</td>';
    html += '<td>' + r.matchesWithDetailData + '/' + r.totalMatches + '</td>';
    html += '<td>' + (r.goalTypes.penalty||0) + '</td>';
    html += '<td>' + (r.goalTypes.header||0) + '</td>';
    html += '<td>' + (r.goalTypes.free_kick||0) + '</td>';
    html += '<td>' + (r.goalTypes.own_goal||0) + '</td>';
    html += '<td>' + (r.goalTypes.shot||0) + '</td>';
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  
  // ========== V23: 进球分钟区间分布各届对比表 ==========
  // Compute interval distribution per edition from wcMatchDetails
  var intervalDefs = [];
  for (var ii = 0; ii < 18; ii++) intervalDefs.push({label: (ii*5+1)+'-'+(ii*5+5)+"'", lo: ii*5+1, hi: ii*5+5, reg: true});
  [
    {l:'91-95\'',lo:91,hi:95},{l:'96-100\'',lo:96,hi:100},{l:'101-105\'',lo:101,hi:105},
    {l:'106-110\'',lo:106,hi:110},{l:'111-115\'',lo:111,hi:115},{l:'116-120\'',lo:116,hi:120},{l:'120+\'',lo:121,hi:999}
  ].forEach(function(x){intervalDefs.push({label:x.l, lo:x.lo, hi:x.hi, reg:false});});

  var edInterval = {};
  editions.forEach(function(y){edInterval[y]={goals:new Array(25).fill(0),regTotal:0,extTotal:0};});

  Object.keys(wcMatchDetails).forEach(function(key){
    var parts = key.split('|'), yearKey = parts[0];
    if (!edInterval[yearKey]) return;
    var detail = wcMatchDetails[key];
    if (!detail || !detail.goals) return;
    detail.goals.forEach(function(g){
      if (g.min > 130) return;
      for (var j = 0; j < intervalDefs.length; j++) {
        if (g.min >= intervalDefs[j].lo && g.min <= intervalDefs[j].hi) {
          edInterval[yearKey].goals[j]++;
          if (g.min <= 90) edInterval[yearKey].regTotal++;
          else edInterval[yearKey].extTotal++;
          break;
        }
      }
    });
  });

  // Grand totals
  var grandGoals = new Array(25).fill(0), grandReg = 0, grandExt = 0;
  editions.forEach(function(y){
    for (var k = 0; k < 25; k++) grandGoals[k] += edInterval[y].goals[k];
    grandReg += edInterval[y].regTotal;
    grandExt += edInterval[y].extTotal;
  });

  // Render interval distribution table
  html += '<div class="backtest-section-title">⏱️ 进球分钟区间分布 — 六届对比（每5分钟）</div>';
  html += '<div style="overflow-x:auto;"><table class="backtest-table"><thead><tr><th>分钟区间</th>';
  editions.forEach(function(y){html += '<th>' + (editionLabels[y] || y) + '</th><th>占比</th>';});
  html += '<th>合计</th><th>总占比</th></tr></thead><tbody>';

  intervalDefs.forEach(function(iv, idx){
    var rowCls = '';
    if (idx === 18) rowCls = ' style="border-top:2px solid var(--gold);"';
    html += '<tr' + rowCls + '><td style="font-weight:600;' + (iv.reg ? '' : 'color:var(--gold-light);') + '">' + iv.label + '</td>';
    editions.forEach(function(y){
      var ed = edInterval[y], g = ed.goals[idx];
      var base = iv.reg ? ed.regTotal : ed.extTotal;
      var pct = base > 0 ? (g / base * 100).toFixed(1) + '%' : '—';
      html += '<td>' + (g || '—') + '</td><td style="font-size:0.65rem;color:var(--text-secondary);">' + pct + '</td>';
    });
    var gbaseTotal = iv.reg ? grandReg : grandExt;
    var gpct = gbaseTotal > 0 ? (grandGoals[idx] / gbaseTotal * 100).toFixed(1) + '%' : '—';
    html += '<td style="font-weight:700;">' + (grandGoals[idx] || '—') + '</td><td style="font-size:0.65rem;color:var(--gold-light);font-weight:600;">' + gpct + '</td></tr>';
  });

  // Totals rows
  html += '<tr style="border-top:2px solid var(--gold);font-weight:700;background:var(--surface2);"><td>⚽ 常规时段合计 (1-90\')</td>';
  editions.forEach(function(y){
    html += '<td style="color:var(--gold-light);">' + edInterval[y].regTotal + '</td><td style=\"font-size:0.65rem;color:var(--text-secondary);\">' + (edInterval[y].regTotal + edInterval[y].extTotal > 0 ? (edInterval[y].regTotal / (edInterval[y].regTotal + edInterval[y].extTotal) * 100).toFixed(1) + '%' : '—') + '</td>';
  });
  html += '<td style="color:var(--gold-light);">' + grandReg + '</td><td style=\"font-size:0.65rem;color:var(--text-secondary);font-weight:600;\">' + (grandReg + grandExt > 0 ? (grandReg / (grandReg + grandExt) * 100).toFixed(1) + '%' : '—') + '</td></tr>';

  html += '<tr style="font-weight:700;background:var(--surface2);"><td>⚽ 加时赛合计 (91-120+\')</td>';
  editions.forEach(function(y){
    html += '<td style="color:var(--gold-light);">' + edInterval[y].extTotal + '</td><td style=\"font-size:0.65rem;color:var(--text-secondary);\">' + (edInterval[y].regTotal + edInterval[y].extTotal > 0 ? (edInterval[y].extTotal / (edInterval[y].regTotal + edInterval[y].extTotal) * 100).toFixed(1) + '%' : '—') + '</td>';
  });
  html += '<td style="color:var(--gold-light);">' + grandExt + '</td><td style=\"font-size:0.65rem;color:var(--text-secondary);font-weight:600;\">' + (grandReg + grandExt > 0 ? (grandExt / (grandReg + grandExt) * 100).toFixed(1) + '%' : '—') + '</td></tr>';

  html += '</tbody></table></div>';
  // ========== END V23 ==========

  html += '<div class="backtest-insight">📌 <strong>总进球/常规时间进球/点球大战进球</strong>来自完整比赛数据（每组6场×8组+淘汰赛=64场全覆盖）。<strong>进球方式、纪律牌</strong>仅来自有详细时间轴记录的场次（各届覆盖不一）。</div>';

  var doc = document.getElementById('dataOverviewContent');
  if (doc) doc.innerHTML = html;
  var dm = document.getElementById('dataOverviewModal');
  if (dm) dm.classList.add('visible');
};

// ========== INIT ==========
function init(){
koMs.forEach(m=>{if(kPreds[m.id]){if(kPreds[m.id].af===undefined)kPreds[m.id].af=true;}});
bGT();rGM();autoFillKO();
// Initialize in 2026 mode
currentEdition='2026';
var pastMain=document.getElementById('pastWCMainContainer');
if(pastMain) pastMain.classList.remove('visible');
const gc=Object.values(gPreds).filter(p=>p.sh!=null&&p.sa!=null).length;
const kc=Object.values(kPreds).filter(p=>p.tA&&p.tB&&p.sA!=null&&p.sB!=null).length;
if(gc+kc>0)setTimeout(()=>showToast('📂 已加载 '+gc+' 场小组 + '+kc+' 场淘汰赛历史预测'),500);
}

// Expose IIFE functions to global scope for playerdata.js access
window.getMatchResultClass = getMatchResultClass;
window.getMatchBadge = getMatchBadge;
window.rGM = rGM;
window.rKP = rKP;
window.autoFillKO = autoFillKO;
window.showToast = showToast;
window.makePlayerClickable = window.makePlayerClickable || makePlayerClickable;
window.getPlayerKey = getPlayerKey;
window.showPlayerDetail = window.showPlayerDetail || showPlayerDetail;


/* ===== League & Club Functions ===== */

init();
})();