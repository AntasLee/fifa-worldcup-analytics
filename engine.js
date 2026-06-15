// ===== engine.js - 翻译引擎 + 搜索引擎 + 聚合引擎 V1.71 =====
// 依赖: teamdata.js (playerDB, clubNameMap, clubLeagueMap, supplementalPlayers)

// ==================== 1. 字符串规范化 ====================
function normalize(str) {
    if (!str || typeof str !== 'string') return '';
    return str
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // 去重音
        .replace(/[^a-z0-9\u4e00-\u9fff\uac00-\ud7af\u3040-\u309f\u30a0-\u30ff\u0400-\u04ff\u0600-\u06ff]/g, '') // 保留字母数字+中文+韩文+日文+西里尔+阿拉伯
        .trim();
}

function normalizeName(name) {
    if (!name || typeof name !== 'string') return '';
    return name
        .toLowerCase()
        .replace(/[øØ]/g, 'o').replace(/[æÆ]/g, 'ae').replace(/[åÅ]/g, 'a')
        .replace(/[łŁ]/g, 'l').replace(/[đĐð]/g, 'd').replace(/[þÞ]/g, 'th')
        .replace(/[ß]/g, 'ss').replace(/[ıİ]/g, 'i')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z]/g, '')
        .trim();
}

// ==================== 2. 翻译引擎 ====================
const translate = (function() {
    // 联赛翻译表
    const leagueMap = {
        'premier league': '英超联赛',
        'laliga': '西甲联赛',
        'serie a': '意甲联赛',
        'bundesliga': '德甲联赛',
        'ligue 1': '法甲联赛',
        'eredivisie': '荷甲联赛',
        'primeira liga': '葡超联赛',
        'belgian pro league': '比利时甲级联赛',
        'jupiler pro league': '比利时甲级联赛',
        'super lig': '土超联赛',
        'russian premier league': '俄超联赛',
        'brasileirão': '巴甲联赛',
        'brasileirao': '巴甲联赛',
        'argentine primera': '阿根廷甲级联赛',
        'mls': '美国职业大联盟',
        'major league soccer': '美国职业大联盟',
        'liga mx': '墨西哥超级联赛',
        'saudi pro league': '沙特职业联赛',
        'qatar stars league': '卡塔尔联',
        'uae pro league': '阿联酋职业联赛',
        'egyptian premier league': '埃及超级联赛',
        'chinese super league': '中超联赛',
        'csl': '中超联赛',
        'j.league': '日本J联赛',
        'k league': '韩国K联赛',
        'scottish premiership': '苏格兰超级联赛',
        'swiss super league': '瑞士超级联赛',
        'super league greece': '希腊超级联赛',
        'allsvenskan': '瑞典超级联赛',
        'superligaen': '丹麦超级联赛',
        'eliteserien': '挪威超级联赛',
        'ekstraklasa': '波兰甲级联赛',
        'prva hnl': '克罗地亚甲级联赛',
        'serbian superliga': '塞尔维亚超级联赛',
        'ukrainian premier league': '乌克兰超级联赛',
        'czech first league': '捷克甲级联赛',
        'liga i': '罗马尼亚甲级联赛',
        'a-league': '澳大利亚A联赛',
        'national team': '国家队'
    };

    // 位置翻译表
    const posMap = {
        'goalkeeper': '门将 (Goalkeeper)', 'centre-back': '中后卫 (Centre-Back)', 'left-back': '左后卫 (Left-Back)', 'right-back': '右后卫 (Right-Back)',
        'defender': '后卫 (Defender)', 'centre-forward': '中锋 (Centre-Forward)', 'left winger': '左边锋 (Left Winger)', 'right winger': '右边锋 (Right Winger)',
        'attacking midfield': '攻击型中场 (Attacking Midfield)', 'central midfield': '中前卫 (Central Midfield)', 'defensive midfield': '防守型中场 (Defensive Midfield)',
        'left midfield': '左中场 (Left Midfield)', 'right midfield': '右中场 (Right Midfield)', 'midfield': '中场 (Midfield)', 'forward': '前锋 (Forward)',
        'winger': '边锋 (Winger)', 'striker': '前锋 (Striker)', 'second striker': '第二前锋 (Second Striker)', 'sweeper': '清道夫 (Sweeper)',
        'midfielder': '中场 (Midfielder)', 'full-back': '边后卫 (Full-Back)', 'centre half': '中后卫 (Centre Half)',
        'wing-back': '翼卫 (Wing-Back)', 'right wing-back': '右翼卫 (Right Wing-Back)', 'left wing-back': '左翼卫 (Left Wing-Back)',
        'box-to-box midfielder': '全能中场 (Box-to-Box Midfielder)', 'libero': '自由人 (Libero)', 'deep-lying playmaker': '深位组织型中场 (Deep-Lying Playmaker)'
    };

    // 西里尔→拉丁 简单音译
    const cyrillicMap = {
        'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z','и':'i','й':'y',
        'к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f',
        'х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'
    };

    function leagueToCN(league) {
        if (!league || league === '?' || league === 'Unknown') return null;
        // 尝试从 leagueNameMap 获取
        if (typeof leagueNameMap !== 'undefined' && leagueNameMap[league]) {
            return leagueNameMap[league];
        }
        // 规范化后查表
        const key = normalize(league);
        if (leagueMap[key]) return leagueMap[key] + ' (' + league + ')';
        // 规范化匹配 leagueNameMap
        if (typeof leagueNameMap !== 'undefined') {
            const normLg = normalizeName(league);
            for (const [k, v] of Object.entries(leagueNameMap)) {
                if (normalizeName(k) === normLg) return v;
            }
        }
        // 从 clubLeagueMap 反查
        if (typeof clubLeagueMap !== 'undefined') {
            const normLg = normalizeName(league);
            for (const [club, lg] of Object.entries(clubLeagueMap)) {
                if (normalizeName(lg) === normLg) return lg;
            }
        }
        return league;
    }

    function clubToCN(club) {
        if (!club || club === '?' || club === 'Unknown') return null;
        // 尝试 clubNameMap（精确+规范化）
        if (typeof clubNameMap !== 'undefined') {
            // 精确匹配
            if (clubNameMap[club]) return clubNameMap[club];
            if (clubNameMap[club.toLowerCase()]) return clubNameMap[club.toLowerCase()];
            // 去 FC/SC/AFC/CF 后缀和前缀
            const variants = [
                club,
                club.replace(/\s*(FC|SC|AC|CF|AS|SSC|SAD|S\.A\.D\.)$/i, '').trim(),
                club.replace(/^(FC|SC|AC|AS|CD|CA|CF)\s+/i, '').trim()
            ];
            for (const v of variants) {
                if (clubNameMap[v]) return clubNameMap[v];
                if (clubNameMap[v.toLowerCase()]) return clubNameMap[v.toLowerCase()];
            }
            // 规范化匹配
            const normClub = normalizeName(club);
            for (const [key, val] of Object.entries(clubNameMap)) {
                if (normalizeName(key) === normClub) return val;
            }
            // 模糊匹配
            if (normClub.length > 3) {
                for (const [key, val] of Object.entries(clubNameMap)) {
                    const nk = normalizeName(key);
                    if (nk.length > 3 && (nk.includes(normClub) || normClub.includes(nk))) return val;
                }
            }
        }
        return club;
    }

    function positionToCN(pos) {
        if (!pos) return '';
        // 1. 精确匹配
        if (posMap[pos]) return posMap[pos];
        // 2. 小写匹配（保留连字符，避免 normalize 剔除 - 导致 "right-back" → "rightback" 失配）
        var keyLC = pos.toLowerCase().trim();
        if (posMap[keyLC]) return posMap[keyLC];
        // 3. 去连字符匹配（兼容 "rightback" 等无连字符输入）
        var keyNoHyphen = keyLC.replace(/-/g, '');
        if (posMap[keyNoHyphen]) return posMap[keyNoHyphen];
        // 4. normalize 兜底
        var keyNorm = normalize(pos);
        if (posMap[keyNorm]) return posMap[keyNorm];
        return pos;
    }

    function cyrillicToLatin(str) {
        if (!str) return '';
        let result = '';
        for (const ch of str.toLowerCase()) {
            result += cyrillicMap[ch] || ch;
        }
        return result;
    }

    
    // ===== 人名音译引擎：拉丁→中文 =====
    const famousPlayers = {
        'lionel messi':'利昂内尔·梅西','cristiano ronaldo':'克里斯蒂亚诺·罗纳尔多','neymar':'内马尔','kylian mbappe':'基利安·姆巴佩',
        'ronaldo nazario':'罗纳尔多·纳扎里奥','ronaldinho':'罗纳尔迪尼奥','zinedine zidane':'齐内丁·齐达内','diego maradona':'迭戈·马拉多纳',
        'pele':'贝利','johan cruyff':'约翰·克鲁伊夫','franz beckenbauer':'弗朗茨·贝肯鲍尔','michel platini':'米歇尔·普拉蒂尼',
        'robert lewandowski':'罗伯特·莱万多夫斯基','karim benzema':'卡里姆·本泽马','luka modric':'卢卡·莫德里奇','toni kroos':'托尼·克罗斯',
        'kevin de bruyne':'凯文·德布劳内','harry kane':'哈里·凯恩','mohamed salah':'穆罕默德·萨拉赫','erling haaland':'埃尔林·哈兰德',
        'vinicius junior':'维尼修斯·儒尼奥尔','jude bellingham':'裘德·贝林厄姆','jamal musiala':'贾马尔·穆夏拉','pedri':'佩德里',
        'gavi':'加维','bukayo saka':'布卡约·萨卡','phil foden':'菲尔·福登','julian alvarez':'胡利安·阿尔瓦雷斯',
        'thibaut courtois':'蒂博·库尔图瓦','alisson becker':'阿利松·贝克尔','ederson':'埃德森','manuel neuer':'曼努埃尔·诺伊尔',
        'virgil van dijk':'维吉尔·范戴克','sergio ramos':'塞尔吉奥·拉莫斯','paolo maldini':'保罗·马尔蒂尼','fabio cannavaro':'法比奥·卡纳瓦罗',
        'gianluigi buffon':'詹路易吉·布冯','iker casillas':'伊克尔·卡西利亚斯','andres iniesta':'安德雷斯·伊涅斯塔','xavi hernandez':'哈维·埃尔南德斯',
        'luis suarez':'路易斯·苏亚雷斯','antoine griezmann':'安托万·格列兹曼','eden hazard':'埃登·阿扎尔','nkunku':'恩昆库',
        'declan rice':'德克兰·赖斯','jack grealish':'杰克·格里利什','marcus rashford':'马库斯·拉什福德','bruno fernandes':'布鲁诺·费尔南德斯',
        'gabriel jesus':'加布里埃尔·热苏斯','gabriel martinelli':'加布里埃尔·马丁内利','martin odegaard':'马丁·厄德高','rodri':'罗德里',
        'ruben dias':'鲁本·迪亚斯','john stones':'约翰·斯通斯','kyle walker':'凯尔·沃克','andrew robertson':'安德鲁·罗伯逊',
        'trent alexander-arnold':'特伦特·亚历山大-阿诺德','joao cancelo':'若昂·坎塞洛','theo hernandez':'特奥·埃尔南德斯','achraf hakimi':'阿什拉夫·哈基米',
        'federico valverde':'费德里科·巴尔韦德','aurelien tchouameni':'奥雷利安·楚阿梅尼','eduardo camavinga':'爱德华多·卡马温加',
        'enner valencia':'恩纳·瓦伦西亚','cody gakpo':'科迪·加克波','frenkie de jong':'弗伦基·德容','davy klaassen':'戴维·克拉森',
        'ismaila sarr':'伊斯梅拉·萨尔','moises caicedo':'莫伊塞斯·凯塞多','kalidou koulibaly':'卡利杜·库利巴利',
        'angel di maria':'安赫尔·迪马利亚','lautaro martinez':'劳塔罗·马丁内斯','paulo dybala':'保罗·迪巴拉',
        'son heung-min':'孙兴慜','kim min-jae':'金玟哉','takefusa kubo':'久保建英','kaoru mitoma':'三笘薰',
        'wataru endo':'遠藤航','ko itakura':'板倉滉','daichi kamada':'鎌田大地','hiroki ito':'伊藤洋輝',
        'maya yoshida':'吉田麻也','yuto nagatomo':'長友佑都','takehiro tomiyasu':'冨安健洋','shogo taniguchi':'谷口彰悟',
        'junya ito':'伊東純也','takuma asano':'浅野拓磨','ao tanaka':'田中碧','ritsu doan':'堂安律',
        'hidemasa morita':'守田英正','daizen maeda':'前田大然','ayase ueda':'上田綺世','yuki soma':'相馬勇紀',
        'tomoki hayakawa':'早川 友基','keisuke osako':'大迫敬介','aya suzuka':'铃木彩艶','kento shiode':'塩手健人',
        'reo hatate':'旗手怜央','gaku shibasaki':'柴崎岳','genki haraguchi':'原口元気','yuya osako':'大迫勇也',
        'shuichi gonda':'権田修一','daniel schmidt':'シュミット・ダニエル','eiji kawashima':'川島永嗣',
        'hiroki sakai':'酒井宏樹','miki yamane':'山根視来','yuta nakayama':'中山雄太',
        'chanathip songkrasin':'差那提·颂克拉辛','theerathon bunmathan':'提拉通·汶马探',
        'sardar azmoun':'萨达尔·阿兹蒙','mehdi taremi':'迈赫迪·塔雷米','alireza jahanbakhsh':'阿里雷扎·贾汉巴赫什',
        'paulo junichi tanaka':'田中 パウロ 淳一','tanaka paulo junichi':'田中 パウロ 淳一','tatsuya tanaka':'田中達也',
        'takumi minamino':'南野拓実',
        'alphonso davies':'阿方索·戴维斯','christian pulisic':'克里斯蒂安·普利西奇','giovanni reyna':'乔瓦尼·雷纳',
        'sadio mane':'萨迪奥·马内','riyad mahrez':'里亚德·马赫雷斯','hakim ziyech':'哈基姆·齐耶赫',
        'thomas muller':'托马斯·穆勒','joshua kimmich':'约书亚·基米希','serge gnabry':'塞尔吉·格纳布里','leroy sane':'勒鲁瓦·萨内',
        'romelu lukaku':'罗梅卢·卢卡库','memphis depay':'孟菲斯·德佩','dusan vlahovic':'杜尚·弗拉霍维奇','victor osimhen':'维克托·奥斯梅恩',
        'luka jovic':'卢卡·约维奇','alejandro garnacho':'亚历杭德罗·加纳乔','enzo fernandez':'恩佐·费尔南德斯',
        'alexis mac allister':'亚历克西斯·麦卡利斯特','nicolas otamendi':'尼古拉斯·奥塔门迪','emiliano martinez':'埃米利亚诺·马丁内斯',
        'olivier giroud':'奥利维耶·吉鲁','oliver kahn':'奥利弗·卡恩','philipp lahm':'菲利普·拉姆','bastian schweinsteiger':'巴斯蒂安·施魏因斯泰格',
        'mesut ozil':'梅苏特·厄齐尔','mario gotze':'马里奥·格策','miroslav klose':'米罗斯拉夫·克洛泽','david villa':'大卫·比利亚',
        'fernando torres':'费尔南多·托雷斯','carles puyol':'卡尔斯·普约尔','gerard pique':'赫拉德·皮克','david silva':'大卫·席尔瓦',
        'sergio busquets':'塞尔吉奥·布斯克茨','jordi alba':'若尔迪·阿尔巴','sergio aguero':'塞尔吉奥·阿圭罗','gonzalo higuain':'冈萨洛·伊瓜因',
        'james rodriguez':'哈梅斯·罗德里格斯','radamel falcao':'拉达梅尔·法尔考','david ospina':'大卫·奥斯皮纳',
        'keylor navas':'凯洛尔·纳瓦斯','david de gea':'大卫·德赫亚','thierry henry':'蒂埃里·亨利','dennis bergkamp':'丹尼斯·博格坎普',
        'ruud van nistelrooy':'鲁德·范尼斯特鲁伊','arjen robben':'阿尔扬·罗本','wesley sneijder':'韦斯利·斯内德','robin van persie':'罗宾·范佩西',
        'david beckham':'大卫·贝克汉姆','steven gerrard':'史蒂文·杰拉德','frank lampard':'弗兰克·兰帕德','wayne rooney':'韦恩·鲁尼',
        'ryan giggs':'瑞恩·吉格斯','paul scholes':'保罗·斯科尔斯','alessandro del piero':'亚历山德罗·德尔·皮耶罗','francesco totti':'弗朗切斯科·托蒂',
        'andrea pirlo':'安德烈亚·皮尔洛','gennaro gattuso':'詹纳罗·加图索','clarence seedorf':'克拉伦斯·西多夫','kaka':'卡卡',
        'luis figo':'路易斯·菲戈','rivaldo':'里瓦尔多','roberto carlos':'罗伯托·卡洛斯','cafu':'卡福','rudi voller':'鲁迪·沃勒尔',
        'emilio butragueno':'埃米利奥·布特拉格诺','hugo sanchez':'乌戈·桑切斯','george weah':'乔治·维阿','roberto baggio':'罗伯托·巴乔',
        'gabriel batistuta':'加布里埃尔·巴蒂斯图塔','herman crespo':'埃尔南·克雷斯波','juan roman riquelme':'胡安·罗曼·里克尔梅',
        'alexandre pato':'亚历山大·帕托','dida':'迪达','julio cesar':'儒利奥·塞萨尔','maicon':'麦孔','lucio':'卢西奥',
        'samuel eto':'萨穆埃尔·埃托奥','didier drogba':'迪迪埃·德罗巴','yaya toure':'亚亚·图雷','michael essien':'迈克尔·埃辛',
        'jay-jay okocha':'杰伊·奥科查','nwankwo kanu':'恩万科沃·卡努','roger milla':'罗杰·米拉',
        'hidetoshi nakata':'中田英寿','shunsuke nakamura':'中村俊辅','park ji-sung':'朴智星','ali daei':'阿里·代伊',
        'tim cahill':'蒂姆·卡希尔','clint dempsey':'克林特·邓普西','landon donovan':'兰登·多诺万',
        'socrates':'苏格拉底','zico':'济科','romario':'罗马里奥','bebeto':'贝贝托','denilson':'德尼尔森',
        'gheorghe hagi':'格奥尔基·哈吉','hristo stoichkov':'赫里斯托·斯托伊奇科夫','pavel nedved':'帕维尔·内德维德',
        'michael ballack':'米夏埃尔·巴拉克','jurgen klinsmann':'尤尔根·克林斯曼','lothar matthaus':'洛塔尔·马特乌斯',
        'davor suker':'达沃·苏克','robert prosinecki':'罗伯特·普罗辛内茨基','predrag mijatovic':'普雷德拉格·米亚托维奇',
        'alex del piero':'亚历克斯·德尔·皮耶罗','claudio ranieri':'克劳迪奥·拉涅利','carlo ancelotti':'卡洛·安切洛蒂',
        'arsene wenger':'阿尔塞纳·温格','jose mourinho':'若泽·穆里尼奥','pep guardiola':'佩普·瓜迪奥拉',
        'gianni infantino':'詹尼·因凡蒂诺','sepp blatter':'塞普·布拉特','diego simeone':'迭戈·西蒙尼',
        'luis enrique':'路易斯·恩里克','xabi alonso':'哈维·阿隆索','steven gerrard':'史蒂文·杰拉德','frank ribery':'弗兰克·里贝里',
        // 常见葡萄牙语/西班牙语球员名映射
        'tomas araujo':'托马斯·阿劳若','tomas araújo':'托马斯·阿劳若','nestor araujo':'内斯托尔·阿劳若','nestor araújo':'内斯托尔·阿劳若',
    };

    const givenNameMap = {
        'lionel':'利昂内尔','cristiano':'克里斯蒂亚诺','neymar':'内马尔','kylian':'基利安','robert':'罗伯特',
        'karim':'卡里姆','luka':'卢卡','toni':'托尼','kevin':'凯文','harry':'哈里','mohamed':'穆罕默德',
        'erling':'埃尔林','jude':'裘德','jamal':'贾马尔','bukayo':'布卡约','phil':'菲尔','julian':'胡利安',
        'thibaut':'蒂博','manuel':'曼努埃尔','virgil':'维吉尔','sergio':'塞尔吉奥','gianluigi':'詹路易吉',
        'iker':'伊克尔','andres':'安德雷斯','luis':'路易斯','antoine':'安托万','eden':'埃登','declan':'德克兰',
        'jack':'杰克','marcus':'马库斯','bruno':'布鲁诺','gabriel':'加布里埃尔','martin':'马丁',
        'ruben':'鲁本','john':'约翰','kyle':'凯尔','kyle':'凯尔','jan':'扬','saad':'萨阿德','al':'阿尔','abdullah':'阿卜杜拉','mohammed':'穆罕默德','andrew':'安德鲁','trent':'特伦特','joao':'若昂',
        'theo':'特奥','achraf':'阿什拉夫','federico':'费德里科','aurelien':'奥雷利安','eduardo':'爱德华多',
        'enner':'恩纳','cody':'科迪','davy':'戴维','ismaila':'伊斯梅拉','moises':'莫伊塞斯','kalidou':'卡利杜',
        'angel':'安赫尔','lautaro':'劳塔罗','paulo':'保罗','alphonso':'阿方索','christian':'克里斯蒂安',
        'giovanni':'乔瓦尼','sadio':'萨迪奥','riyad':'里亚德','hakim':'哈基姆','thomas':'托马斯',
        'joshua':'约书亚','serge':'塞尔吉','leroy':'勒鲁瓦','romelu':'罗梅卢','memphis':'孟菲斯',
        'dusan':'杜尚','victor':'维克托','alejandro':'亚历杭德罗','enzo':'恩佐','alexis':'亚历克西斯',
        'tomas':'托马斯','nestor':'内斯托尔','tomas':'托马斯',
        'nicolas':'尼古拉斯','emiliano':'埃米利亚诺','olivier':'奥利维耶','oliver':'奥利弗','philipp':'菲利普',
        'bastian':'巴斯蒂安','mesut':'梅苏特','mario':'马里奥','miroslav':'米罗斯拉夫','david':'大卫',
        'fernando':'费尔南多','carles':'卡尔斯','gerard':'赫拉德','jordi':'若尔迪','gonzalo':'冈萨洛',
        'james':'哈梅斯','radamel':'拉达梅尔','keylor':'凯洛尔','thierry':'蒂埃里','dennis':'丹尼斯',
        'ruud':'鲁德','arjen':'阿尔扬','wesley':'韦斯利','robin':'罗宾','steven':'史蒂文','frank':'弗兰克',
        'wayne':'韦恩','ryan':'瑞恩','paul':'保罗','alessandro':'亚历山德罗','francesco':'弗朗切斯科',
        'andrea':'安德烈亚','gennaro':'詹纳罗','clarence':'克拉伦斯','emilio':'埃米利奥','hugo':'乌戈',
        'george':'乔治','roberto':'罗伯托','herman':'埃尔南','juan':'胡安','alexandre':'亚历山大',
        'samuel':'萨穆埃尔','didier':'迪迪埃','michael':'迈克尔','tim':'蒂姆','clint':'克林特','landon':'兰登',
        'gheorghe':'格奥尔基','hristo':'赫里斯托','pavel':'帕维尔','jurgen':'尤尔根','lothar':'洛塔尔',
        'davor':'达沃','predrag':'普雷德拉格','jose':'若泽','pep':'佩普','diego':'迭戈','xabi':'哈维',
        'frank':'弗兰克','vinicius':'维尼修斯','pedri':'佩德里','gavi':'加维','rodri':'罗德里',
        'erik':'埃里克','jan':'扬','mats':'马茨','leon':'莱昂','florian':'弗洛里安','kingsley':'金斯利',
        'ousmane':'奥斯曼','ansu':'安苏','ferran':'费兰','pablo':'巴勃罗','marcos':'马科斯','daniel':'丹尼尔',
        'adama':'阿达马','ibrahim':'易卜拉欣','edinson':'埃丁森','giorgio':'乔治','lorenzo':'洛伦佐',
        'federico':'费德里科','matteo':'马泰奥','sandro':'桑德罗','leonardo':'莱昂纳多','nicolo':'尼科洛',
        'gianluca':'詹卢卡','simone':'西蒙尼','ciro':'奇罗','domenico':'多梅尼科','fabio':'法比奥',
        'emre':'埃姆雷','hakan':'哈坎','arda':'阿尔达','kerem':'凯雷姆','yusuf':'优素福','cenk':'坚克',
        'dries':'德里斯','youri':'尤里','leandro':'莱安德罗','axel':'阿克塞尔','toby':'托比',
        'kasper':'卡斯帕','simon':'西蒙','yann':'扬','peter':'彼得','reas':'安德烈亚斯',
        'mikel':'米克尔','unai':'乌奈','dani':'达尼','alvaro':'阿尔瓦罗','jesus':'赫苏斯','iker':'伊克尔',
        'alex':'亚历克斯','max':'马克斯','ben':'本','tom':'汤姆','sam':'萨姆','joe':'乔','jim':'吉姆',
        'william':'威廉','henry':'亨利','charles':'查尔斯','richard':'理查德','edward':'爱德华',
        'patrick':'帕特里克','sebastian':'塞巴斯蒂安','jonathan':'乔纳森','christopher':'克里斯托弗',
        'nicholas':'尼古拉斯','benjamin':'本杰明','alexander':'亚历山大','anthony':'安东尼','matthew':'马修',
        'joshua':'约书亚','andrew':'安德鲁','nathan':'内森','ryan':'瑞安','brandon':'布兰登','jason':'杰森',
        'justin':'贾斯汀','austin':'奥斯汀','tyler':'泰勒','jacob':'雅各布','kyle':'凯尔',
    };

    const surnameMap = {
        'messi':'梅西','ronaldo':'罗纳尔多','mbappe':'姆巴佩','neymar':'内马尔','lewandowski':'莱万多夫斯基',
        'benzema':'本泽马','modric':'莫德里奇','kroos':'克罗斯','de bruyne':'德布劳内','kane':'凯恩',
        'salah':'萨拉赫','haaland':'哈兰德','bellingham':'贝林厄姆','musiala':'穆夏拉','pedri':'佩德里',
        'gavi':'加维','saka':'萨卡','foden':'福登','alvarez':'阿尔瓦雷斯','courtois':'库尔图瓦',
        'becker':'贝克尔','neuer':'诺伊尔','van dijk':'范戴克','ramos':'拉莫斯','maldini':'马尔蒂尼',
        'cannavaro':'卡纳瓦罗','buffon':'布冯','casillas':'卡西利亚斯','iniesta':'伊涅斯塔','hernandez':'埃尔南德斯',
        'suarez':'苏亚雷斯','griezmann':'格列兹曼','hazard':'阿扎尔','rice':'赖斯','grealish':'格里利什',
        'rashford':'拉什福德','fernandes':'费尔南德斯','jesus':'热苏斯','martinelli':'马丁内利','odegaard':'厄德高',
        'rodri':'罗德里','dias':'迪亚斯','stones':'斯通斯','walker':'沃克','robertson':'罗伯逊',
        'alexander-arnold':'亚历山大-阿诺德','cancelo':'坎塞洛','hakimi':'哈基米','valverde':'巴尔韦德',
        'tchouameni':'楚阿梅尼','camavinga':'卡马温加','valencia':'瓦伦西亚','gakpo':'加克波','de jong':'德容',
        'klaassen':'克拉森','sarr':'萨尔','caicedo':'凯塞多','koulibaly':'库利巴利','di maria':'迪马利亚',
        'martinez':'马丁内斯','dybala':'迪巴拉','mane':'马内','mahrez':'马赫雷斯','ziyech':'齐耶赫',
        'muller':'穆勒','kimmich':'基米希','gnabry':'格纳布里','sane':'萨内','lukaku':'卢卡库',
        'depay':'德佩','vlahovic':'弗拉霍维奇','osimhen':'奥斯梅恩','jovic':'约维奇','garnacho':'加纳乔',
        'fernandez':'费尔南德斯','mac allister':'麦卡利斯特','otamendi':'奥塔门迪','giroud':'吉鲁',
        'kahn':'卡恩','lahm':'拉姆','schweinsteiger':'施魏因斯泰格','ozil':'厄齐尔','gotze':'格策',
        'klose':'克洛泽','villa':'比利亚','torres':'托雷斯','puyol':'普约尔','pique':'皮克',
        'silva':'席尔瓦','busquets':'布斯克茨','alba':'阿尔巴','aguero':'阿圭罗','higuain':'伊瓜因',
        'rodriguez':'罗德里格斯','falcao':'法尔考','ospina':'奥斯皮纳','navas':'纳瓦斯','de gea':'德赫亚',
        'henry':'亨利','bergkamp':'博格坎普','van nistelrooy':'范尼斯特鲁伊','robben':'罗本','sneijder':'斯内德',
        'van persie':'范佩西','beckham':'贝克汉姆','gerrard':'杰拉德','lampard':'兰帕德','rooney':'鲁尼',
        'giggs':'吉格斯','scholes':'斯科尔斯','del piero':'德尔·皮耶罗','totti':'托蒂','pirlo':'皮尔洛',
        'gattuso':'加图索','seedorf':'西多夫','figo':'菲戈','rivaldo':'里瓦尔多','carlos':'卡洛斯',
        'voller':'沃勒尔','butragueno':'布特拉格诺','sanchez':'桑切斯','weah':'维阿','baggio':'巴乔',
        'batistuta':'巴蒂斯图塔','crespo':'克雷斯波','riquelme':'里克尔梅','eto':'埃托奥','drogba':'德罗巴',
        'toure':'图雷','essien':'埃辛','cahill':'卡希尔','dempsey':'邓普西','donovan':'多诺万',
        'hagi':'哈吉','stoichkov':'斯托伊奇科夫','nedved':'内德维德','ballack':'巴拉克','klinsmann':'克林斯曼',
        'matthaus':'马特乌斯','suker':'苏克','prosinecki':'普罗辛内茨基','mijatovic':'米亚托维奇',
        'ribery':'里贝里','alonso':'阿隆索','guardiola':'瓜迪奥拉','mourinho':'穆里尼奥','wenger':'温格',
        'simeone':'西蒙尼','enrique':'恩里克','zidane':'齐达内','maradona':'马拉多纳','cruyff':'克鲁伊夫',
        'beckenbauer':'贝肯鲍尔','platini':'普拉蒂尼','pato':'帕托','dida':'迪达','lucio':'卢西奥',
        'robertson':'罗伯逊','mitoma':'三笘薰','kubo':'久保建英','son':'孙兴慜','kim':'金玟哉',
        'davies':'戴维斯','pulisic':'普利西奇','reyna':'雷纳','nakata':'中田英寿','nakamura':'中村俊辅',
        'park':'朴智星','daei':'代伊','pele':'贝利','zico':'济科','romario':'罗马里奥','bebeto':'贝贝托',
        'socrates':'苏格拉底','kaka':'卡卡','cafu':'卡福','maicon':'麦孔','cesar':'塞萨尔',
        'okocha':'奥科查','kanu':'卡努','milla':'米拉','junior':'儒尼奥尔',
        'garcia':'加西亚','lopez':'洛佩斯','gonzalez':'冈萨雷斯','perez':'佩雷斯','moreno':'莫雷诺',
        'romero':'罗梅罗','torres':'托雷斯','jimenez':'希门尼斯','mendoza':'门多萨',
        'muller':'穆勒','schmidt':'施密特','fischer':'菲舍尔','weber':'韦伯','wagner':'瓦格纳','becker':'贝克尔',
        'hoffmann':'霍夫曼','schneider':'施奈德','meyer':'迈尔','schulz':'舒尔茨','koch':'科赫',
        'rossi':'罗西','bianchi':'比安基','ferrari':'法拉利','colombo':'科隆博','conti':'孔蒂',
        'fontaine':'方丹','le pen':'勒庞','petit':'佩蒂','blanc':'布兰克','deschamps':'德尚',
        'johnson':'约翰逊','williams':'威廉姆斯','brown':'布朗','jones':'琼斯','davis':'戴维斯',
        'wilson':'威尔逊','taylor':'泰勒','thomas':'托马斯','roberts':'罗伯茨','evans':'埃文斯',
        'diaz':'迪亚斯','vertonghen':'费尔通亨','al-sheeb':'阿尔·谢布','heung-min':'兴慜','alvarez':'阿尔瓦雷斯','castillo':'卡斯蒂略','ortiz':'奥尔蒂斯',
        'araujo':'阿劳若','araújo':'阿劳若','montano':'蒙塔诺','montaño':'蒙塔诺',
    };

    const syllableMap = {
        'a':'阿','ba':'巴','be':'贝','bi':'比','bo':'博','bu':'布','ca':'卡','ce':'塞','ci':'奇','co':'科','cu':'库',
        'da':'达','de':'德','di':'迪','do':'多','du':'杜','fa':'法','fe':'费','fi':'菲','fo':'福','fu':'富',
        'ga':'加','ge':'格','gi':'吉','go':'戈','gu':'古','ha':'哈','he':'赫','hi':'希','ho':'霍','hu':'胡',
        'ja':'哈','je':'热','ji':'吉','jo':'若','ju':'朱','ka':'卡','ke':'凯','ki':'基','ko':'科','ku':'库',
        'la':'拉','le':'莱','li':'利','lo':'洛','lu':'卢','ma':'马','me':'梅','mi':'米','mo':'莫','mu':'穆',
        'na':'纳','ne':'内','ni':'尼','no':'诺','nu':'努','pa':'帕','pe':'佩','pi':'皮','po':'波','pu':'普',
        'qua':'夸','que':'克','qui':'基','ra':'拉','re':'雷','ri':'里','ro':'罗','ru':'鲁',
        'sa':'萨','se':'塞','si':'西','so':'索','su':'苏','ta':'塔','te':'特','ti':'蒂','to':'托','tu':'图',
        'va':'瓦','ve':'韦','vi':'维','vo':'沃','vu':'武','wa':'瓦','we':'韦','wi':'威','wo':'沃',
        'xa':'萨','xe':'塞','xi':'西','xo':'索','xu':'苏',
        'ya':'亚','ye':'耶','yi':'伊','yo':'约','yu':'尤','za':'扎','ze':'泽','zi':'齐','zo':'佐','zu':'祖',
        'cha':'查','che':'切','chi':'奇','cho':'乔','chu':'楚','sha':'沙','she':'谢','shi':'希','sho':'绍','shu':'舒',
        'tha':'塔','the':'特','thi':'蒂','tho':'托','thu':'图','pha':'法','phe':'费','phi':'菲','pho':'福','phu':'富',
        'bra':'布拉','bre':'布雷','bri':'布里','bro':'布罗','bru':'布鲁',
        'cra':'克拉','cre':'克雷','cri':'克里','cro':'克罗','cru':'克鲁',
        'dra':'德拉','dre':'德雷','dri':'德里','dro':'德罗','dru':'德鲁',
        'fra':'弗拉','fre':'弗雷','fri':'弗里','fro':'弗罗','fru':'弗鲁',
        'gra':'格拉','gre':'格雷','gri':'格里','gro':'格罗','gru':'格鲁',
        'pra':'普拉','pre':'普雷','pri':'普里','pro':'普罗','pru':'普鲁',
        'tra':'特拉','tre':'特雷','tri':'特里','tro':'特罗','tru':'特鲁',
        'stra':'斯特拉','stre':'斯特雷','stri':'斯特里','stro':'斯特罗','stru':'斯特鲁',
        'spr':'斯普', 'sch':'施', 'tsch':'奇', 'tsch':'奇',
        'berg':'贝格','burg':'堡','stein':'施泰因','heim':'海姆','dorf':'多夫','bach':'巴赫',
        'mann':'曼','land':'兰','son':'松','sen':'森','ton':'顿','ley':'利','ford':'福德',
        'wood':'伍德','field':'菲尔德','worth':'沃思','bridge':'布里奇','well':'韦尔',
        'ez':'斯','es':'斯','is':'斯','os':'斯','us':'斯',
        'ian':'安','ien':'安','eau':'奥','eaux':'奥','oux':'乌','ault':'奥','ot':'奥',
        'er':'尔','ar':'尔','or':'尔','ir':'尔','ur':'尔',
        'ck':'克','ff':'夫','ll':'尔','mm':'姆','nn':'恩','pp':'普','rr':'尔','ss':'斯','tt':'特',
    };

    function transliterateName(englishName) {
        if (!englishName || typeof englishName !== 'string') return '';
        const name = englishName.trim();
        if (!name) return '';
        
        // 1. Check famous players (case-insensitive, accent-stripped)
        const key = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[·\-\.]/g, ' ').replace(/\s+/g, ' ').trim();
        if (famousPlayers[key]) return famousPlayers[key];
        
        // 2. Split into parts (given name + surname)
        const parts = name.split(/\s+/);
        if (parts.length === 0) return name;
        
        // 3. Try givenNameMap + surnameMap for first+last (accent-stripped)
        if (parts.length >= 2) {
            const firstLower = parts[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[·\-\.]/g, '');
            const lastLower = parts[parts.length - 1].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[·\-\.]/g, '');
            
            let cnFirst = givenNameMap[firstLower] || transliterateWord(parts[0]);
            let cnLast = surnameMap[lastLower] || transliterateWord(parts[parts.length - 1]);
            
            // If multiple given names, transliterate middle names
            if (parts.length > 2) {
                const middleCN = parts.slice(1, -1).map(p => transliterateWord(p)).filter(Boolean);
                return cnLast + '·' + cnFirst + (middleCN.length > 0 ? '·' + middleCN.join('·') : '');
            }
            return cnLast + '·' + cnFirst;
        }
        
        // 4. Single name (accent-stripped)
        var singleKey = parts[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return surnameMap[singleKey] || givenNameMap[singleKey] || transliterateWord(parts[0]);
    }

    function transliterateWord(word) {
        if (!word) return '';
        let remaining = word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[·\-\.]/g, '');
        let result = '';
        
        // Try common suffixes first
        const suffixes = ['stein','heim','dorf','bach','berg','burg','mann','land','son','sen','ton','ley','ford','wood','field','worth','bridge','well'];
        for (const suf of suffixes) {
            if (remaining.endsWith(suf) && remaining.length > suf.length) {
                const prefix = remaining.substring(0, remaining.length - suf.length);
                result = transliterateSyllables(prefix) + (syllableMap[suf] || suf);
                return result;
            }
        }
        
        // Check surname map for whole word
        if (surnameMap[remaining]) return surnameMap[remaining];
        if (givenNameMap[remaining]) return givenNameMap[remaining];
        
        return transliterateSyllables(remaining) || word;
    }

    function transliterateSyllables(str) {
        if (!str) return '';
        let result = '';
        let i = 0;
        while (i < str.length) {
            let matched = false;
            // Try 4-char match
            if (i + 4 <= str.length) {
                const sub4 = str.substring(i, i + 4);
                if (syllableMap[sub4]) { result += syllableMap[sub4]; i += 4; matched = true; continue; }
            }
            // Try 3-char match
            if (i + 3 <= str.length) {
                const sub3 = str.substring(i, i + 3);
                if (syllableMap[sub3]) { result += syllableMap[sub3]; i += 3; matched = true; continue; }
            }
            // Try 2-char match
            if (i + 2 <= str.length) {
                const sub2 = str.substring(i, i + 2);
                if (syllableMap[sub2]) { result += syllableMap[sub2]; i += 2; matched = true; continue; }
            }
            // Single char
            const ch = str[i];
            if (syllableMap[ch]) { result += syllableMap[ch]; }
            // else skip unknown characters (consonants in consonant clusters)
            i++;
        }
        return result;
    }
    

    // 特殊球员名映射表（约定俗成的翻译，音译引擎无法正确处理）
    const specialNameMap = {
        // 现役巨星
        'kane': '凯恩', 'harry kane': '哈里·凯恩',
        'salah': '萨拉赫', 'mohamed salah': '穆罕默德·萨拉赫',
        'mbappe': '姆巴佩', 'kylian mbappe': '基利安·姆巴佩',
        'haaland': '哈兰德', 'erling haaland': '埃尔林·哈兰德',
        'de bruyne': '德布劳内', 'kevin de bruyne': '凯文·德布劳内',
        'saka': '萨卡', 'bukayo saka': '布卡约·萨卡',
        'foden': '福登', 'phil foden': '菲尔·福登',
        'bellingham': '贝林厄姆', 'jude bellingham': '祖德·贝林厄姆',
        'vinicius': '维尼修斯', 'vinicius junior': '维尼修斯·儒尼奥尔',
        'rodrygo': '罗德里戈', 'rodrygo goes': '罗德里戈·戈斯',
        'pedri': '佩德里', 'gavi': '加维',
        'musiala': '穆西亚拉', 'jamal musiala': '贾马尔·穆西亚拉',
        'wirtz': '维尔茨', 'florian wirtz': '弗洛里安·维尔茨',
        'courtois': '库尔图瓦', 'thibaut courtois': '蒂博·库尔图瓦',
        'alisson': '阿利松', 'ederson': '埃德松',
        'oblak': '奥布拉克', 'jan oblak': '扬·奥布拉克',
        'ter stegen': '特尔施特根', 'marc ter stegen': '马克·特尔施特根',
        'donnarumma': '唐纳鲁马', 'gianluigi donnarumma': '詹路易吉·唐纳鲁马',
        'van dijk': '范戴克', 'virgil van dijk': '维吉尔·范戴克',
        'dias': '迪亚斯', 'ruben dias': '鲁本·迪亚斯',
        'marquinhos': '马尔基尼奥斯',
        'alaba': '阿拉巴', 'david alaba': '大卫·阿拉巴',
        'rudiger': '吕迪格', 'antonio rudiger': '安东尼奥·吕迪格',
        'kimmich': '基米希', 'joshua kimmich': '约书亚·基米希',
        'rodri': '罗德里', 'casemiro': '卡塞米罗',
        'modric': '莫德里奇', 'luka modric': '卢卡·莫德里奇',
        'kroos': '克罗斯', 'toni kroos': '托尼·克罗斯',
        'gundogan': '京多安', 'ilkay gundogan': '伊尔卡伊·京多安',
        'bruno fernandes': '布鲁诺·费尔南德斯', 'bernardo silva': '贝尔纳多·席尔瓦',
        'valverde': '巴尔韦德', 'federico valverde': '费德里科·巴尔韦德',
        // 传奇球员
        'ronaldo': '罗纳尔多', 'cristiano ronaldo': '克里斯蒂亚诺·罗纳尔多',
        'ronaldinho': '罗纳尔迪尼奥',
        'zidane': '齐达内', 'zinedine zidane': '齐内丁·齐达内',
        'beckham': '贝克汉姆', 'david beckham': '大卫·贝克汉姆',
        'ronaldo nazario': '罗纳尔多·纳扎里奥',
        'cruyff': '克鲁伊夫', 'johan cruyff': '约翰·克鲁伊夫',
        'maradona': '马拉多纳', 'diego maradona': '迭戈·马拉多纳',
        'pele': '贝利', 'platini': '普拉蒂尼', 'michel platini': '米歇尔·普拉蒂尼',
        'baresi': '巴雷西', 'franco baresi': '弗兰科·巴雷西',
        'maldini': '马尔蒂尼', 'paolo maldini': '保罗·马尔蒂尼',
        'baggio': '巴乔', 'roberto baggio': '罗伯特·巴乔',
        'bergkamp': '博格坎普', 'dennis bergkamp': '丹尼斯·博格坎普',
        'henry': '亨利', 'thierry henry': '蒂埃里·亨利',
        'ronaldo luis': '罗纳尔多', 'figo': '菲戈', 'luis figo': '路易斯·菲戈',
        'nedved': '内德维德', 'pavel nedved': '帕维尔·内德维德',
        'shevchenko': '舍甫琴科', 'andriy shevchenko': '安德烈·舍甫琴科',
        'ronaldinho gaucho': '罗纳尔迪尼奥',
        'cannavaro': '卡纳瓦罗', 'fabio cannavaro': '法比奥·卡纳瓦罗',
        'kaka': '卡卡', 'xavi': '哈维', 'iniesta': '伊涅斯塔',
        'andres iniesta': '安德雷斯·伊涅斯塔',
        'robben': '罗本', 'arjen robben': '阿尔扬·罗本',
        'ribery': '里贝里', 'franck ribery': '弗兰克·里贝里',
        'scholes': '斯科尔斯', 'paul scholes': '保罗·斯科尔斯',
        'giggs': '吉格斯', 'ryan giggs': '瑞恩·吉格斯',
        'lampard': '兰帕德', 'frank lampard': '弗兰克·兰帕德',
        'gerrard': '杰拉德', 'steven gerrard': '史蒂文·杰拉德',
        'pirlo': '皮尔洛', 'andrea pirlo': '安德烈亚·皮尔洛',
        'buffon': '布冯', 'gianluigi buffon': '詹路易吉·布冯',
        'casillas': '卡西利亚斯', 'iker casillas': '伊克尔·卡西利亚斯',
        'neuer': '诺伊尔', 'manuel neuer': '曼努埃尔·诺伊尔',
        'ibrahimovic': '伊布拉希莫维奇', 'zlatan ibrahimovic': '兹拉坦·伊布拉希莫维奇',
        'suarez': '苏亚雷斯', 'luis suarez': '路易斯·苏亚雷斯',
        'lewandowski': '莱万多夫斯基', 'robert lewandowski': '罗伯特·莱万多夫斯基',
        'aguero': '阿圭罗', 'sergio aguero': '塞尔希奥·阿圭罗',
        'drogba': '德罗巴', 'didier drogba': '迪迪埃·德罗巴',
        'eto': '埃托奥', 'samuel eto': '萨穆埃尔·埃托奥',
        'torres': '托雷斯', 'fernando torres': '费尔南多·托雷斯',
        'villa': '比利亚', 'david villa': '大卫·比利亚',
        'raul': '劳尔', 'hazard': '阿扎尔', 'eden hazard': '埃登·阿扎尔',
        'pogba': '博格巴', 'paul pogba': '保罗·博格巴',
        'griezmann': '格里兹曼', 'antoine griezmann': '安托万·格里兹曼',
        'lukaku': '卢卡库', 'romelu lukaku': '罗梅卢·卢卡库',
        'sterling': '斯特林', 'raheem sterling': '拉希姆·斯特林',
        'son': '孙兴慜', 'heung min son': '孙兴慜', 'son heung min': '孙兴慜',
        // 世界杯历史巨星
        'muller': '穆勒', 'thomas muller': '托马斯·穆勒',
        'gerd muller': '盖德·穆勒', 'klose': '克洛泽', 'miroslav klose': '米罗斯拉夫·克洛泽',
        'beckenbauer': '贝肯鲍尔', 'franz beckenbauer': '弗朗茨·贝肯鲍尔',
        'matthaus': '马特乌斯', 'lothar matthaus': '洛塔尔·马特乌斯',
        'romario': '罗马里奥', 'rivaldo': '里瓦尔多',
        'puskas': '普斯卡什', 'ferenc puskas': '费伦茨·普斯卡什',
        'eusevio': '尤西比奥', 'charlton': '查尔顿', 'bobby charlton': '博比·查尔顿',
        'moore': '穆尔', 'bobby moore': '博比·穆尔',
        'fountaine': '方丹', 'just fontaine': '朱斯特·方丹',
        'yashin': '亚辛', 'lev yashin': '列夫·亚辛',
        'lineker': '莱因克尔', 'gary lineker': '加里·莱因克尔',
        // 日韩球员补充（全名）
        'wataru endo': '遠藤航', 'ko itakura': '板倉滉', 'daichi kamada': '鎌田大地', 'hiroki ito': '伊藤洋輝',
        'maya yoshida': '吉田麻也', 'yuto nagatomo': '長友佑都', 'takehiro tomiyasu': '冨安健洋',
        'junya ito': '伊東純也', 'takuma asano': '浅野拓磨', 'ao tanaka': '田中碧', 'ritsu doan': '堂安律',
        'paulo junichi tanaka': '田中淳一', 'tanaka paulo junichi': '田中淳一', 'tatsuya tanaka': '田中達也',
        'takumi minamino': '南野拓実', 'minamino': '南野',
        // 日本常用姓氏 → 汉字映射（单字匹配用）
        'tanaka': '田中', 'suzuki': '铃木', 'sato': '佐藤', 'takahashi': '高桥', 'watanabe': '渡边',
        'ito': '伊藤', 'yamamoto': '山本', 'nakamura': '中村', 'kobayashi': '小林', 'kato': '加藤',
        'yoshida': '吉田', 'yamada': '山田', 'sasaki': '佐佐木', 'yamaguchi': '山口', 'matsumoto': '松本',
        'inoue': '井上', 'kimura': '木村', 'hayashi': '林', 'endo': '遠藤', 'okada': '冈田',
        'nakano': '中野', 'morita': '守田', 'kamada': '鎌田', 'mitoma': '三笘', 'kubo': '久保',
        'asano': '浅野', 'itakura': '板倉', 'tomiyasu': '冨安', 'doan': '堂安', 'maeda': '前田',
        'ueda': '上田', 'soma': '相馬', 'hatate': '旗手', 'shibasaki': '柴崎', 'haraguchi': '原口',
        'osako': '大迫', 'sakai': '酒井', 'yamane': '山根', 'nakayama': '中山', 'taniguchi': '谷口',
        'nagatomo': '長友', 'kawashima': '川島', 'gonda': '権田', 'schmidt': '施密特',
        // 韩国常用姓氏 → 汉字映射
        'kim': '金', 'lee': '李', 'park': '朴', 'choi': '崔', 'jung': '郑', 'kang': '姜',
        'cho': '赵', 'son': '孙', 'hwang': '黄', 'shin': '申', 'ahn': '安', 'song': '宋',
        'seo': '徐', 'kwon': '权', 'lim': '林', 'yoon': '尹', 'jang': '张', 'oh': '吴',
    };

    function playerToCN(player) {
        if (!player) return '';
        if (player.cn) return player.cn;
        // 检查 player.n 是否含中日韩字符（WC球员: n=中文名, nn=英文名）
        if (player.n) {
            const match = player.n.match(/^([^()]+)/);
            if (match && /[一-鿿]/.test(match[1])) return match[1].trim();
        }
        // 检查 player.nn 是否含中日韩字符（全库球员: n=拉丁名, nn=原生名）
        if (player.nn) {
            const nnTrimmed = player.nn.trim();
            // 纯汉字/韩文/日文假名 → 直接返回
            if (/^[\u4e00-\u9fff\uac00-\ud7af\u3040-\u309f\u30a0-\u30ff]+(\s+[\u4e00-\u9fff\uac00-\ud7af\u3040-\u309f\u30a0-\u30ff]+)*$/.test(nnTrimmed)) {
                return nnTrimmed;
            }
            // 含CJK字符混合（如 "田中 パウロ 淳一"）→ 提取汉字部分
            var cjkMatch = nnTrimmed.match(/[\u4e00-\u9fff\uac00-\ud7af]+/g);
            if (cjkMatch) return cjkMatch.join(' ');
        }
        
        // Determine the best Latin/English name for transliteration
        // Priority: .en > .n (Latin name) > .nn (native script, may need conversion)
        let latinName = player.en || player.n || '';
        const nativeName = player.nn || '';
        
        // If latinName is missing but nativeName is Cyrillic, convert to Latin
        if (!latinName && /[а-яА-ЯёЁЀ-ӿ]/.test(nativeName)) {
            latinName = cyrillicToLatin(nativeName);
        }
        // If still no latinName, use nativeName as-is (but Arabic/other scripts may fail transliteration)
        if (!latinName) latinName = nativeName;
        
        // 3.5 Check special name map (using Latin name, accent-stripped)
        if (latinName) {
        const rawEnName = latinName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[·\-\.]/g, ' ').replace(/\s+/g, ' ').trim();
        if (specialNameMap[rawEnName]) return specialNameMap[rawEnName];
        // Also check individual words (for "Harry Kane" → check "kane")
        const nameWords = rawEnName.split(' ');
        for (const w of nameWords) {
            if (w.length > 2 && specialNameMap[w]) return specialNameMap[w];
        }
        
        // 3.6 Look up in playerDB — if exact match found with CJK nn, use that (O(1) via pre-built index)
        if (typeof playerDB !== 'undefined' && latinName) {
            // Try direct key match
            if (playerDB[latinName] && playerDB[latinName].nn && /[\u4e00-\u9fff]/.test(playerDB[latinName].nn)) {
                return playerDB[latinName].nn;
            }
            // O(1) case-insensitive lookup via pre-built index (avoids O(n) for-in loop)
            var lcName = latinName.toLowerCase();
            if (typeof _playerDBLCIndex !== 'undefined' && _playerDBLCIndex && _playerDBLCIndex[lcName]) {
                var dbPD = playerDB[_playerDBLCIndex[lcName]];
                if (dbPD && dbPD.nn && /[\u4e00-\u9fff]/.test(dbPD.nn)) return dbPD.nn;
            }
        }
        
        // 4. Try transliteration from Latin name
        if (latinName) {
            const cn = transliterateName(latinName);
            if (cn && cn !== latinName) return cn;
        }
        }
        // Fallback: return Latin name (not native script), or empty string
        return latinName || nativeName || '';
    }
    return {
        league: leagueToCN,
        club: clubToCN,
        position: positionToCN,
        cyrillic: cyrillicToLatin,
        player: playerToCN
    };
})();

// 预构建 playerDB 的小写→key 索引，供 playerToCN O(1) 查询，避免 O(n²) 阻塞
var _playerDBLCIndex = null;

// ==================== 3. 搜索引擎 ====================
const _searchEngine = (function() {
    let _indexBuilt = false;
    let _exactIndex = {};   // 精确名 → playerId
    let _nameIndex = {};    // 归一化名 → playerId
    let _cnIndex = {};      // 中文名/部分 → playerId
    let _nickIndex = {};    // 昵称 → playerId
    let _playerCache = {};  // playerId → player对象

    function buildIndex() {
        if (_indexBuilt) return;
        _indexBuilt = true;

        const db = {};
        // 合并 playerDB
        if (typeof playerDB !== 'undefined') {
            for (const [id, pd] of Object.entries(playerDB)) {
                db[id] = pd;
            }
        }
        // 合并 supplementalPlayers (先合并再索引)
        if (typeof supplementalPlayers !== 'undefined') {
            for (const [key, sp] of Object.entries(supplementalPlayers)) {
                const id = sp.id || key;
                if (!db[id]) {
                    // 智能判断 n 和 nn 哪个是中文名、哪个是英文名
                    var spN = sp.n || '';
                    var spNN = sp.nn || '';
                    var spCN = spN;
                    var spEN = spNN;
                    // 如果 nn 含CJK而 n 不含 → 交换: nn是中文名, n是拉丁名
                    if (/[\u4e00-\u9fff]/.test(spNN) && !/[\u4e00-\u9fff]/.test(spN)) {
                        spCN = spNN;
                        spEN = spN;
                    }
                    db[id] = {
                        id: id,
                        n: spNN ? (spN + ' (' + spNN + ')') : spN,
                        cn: spCN,
                        en: spEN,
                        t: (sp.cr && sp.cr.length > 0) ? sp.cr[sp.cr.length - 1].t : '',
                        l: (sp.cr && sp.cr.length > 0) ? sp.cr[sp.cr.length - 1].l : '',
                        p: (sp.cr && sp.cr.length > 0) ? sp.cr[sp.cr.length - 1].ps : '',
                        a: sp.bd || '',
                        ht: sp.ht || '',
                        wt: sp.wt || '',
                        nat: sp.nat || '',
                        nicknames: sp.nk ? [sp.nk] : [],
                        career: sp.cr || [],
                        awards: sp.aw || [],
                        _supplemental: true
                    };
                    db[id]._supplemental = true;
                }
            }
        }

        // 预构建 playerDB 小写索引，供 playerToCN O(1) 查询（避免 O(n²)）
        if (!_playerDBLCIndex) {
            _playerDBLCIndex = {};
            if (typeof playerDB !== 'undefined') {
                for (var _k in playerDB) {
                    if (playerDB.hasOwnProperty(_k)) {
                        _playerDBLCIndex[_k.toLowerCase()] = _k;
                    }
                }
            }
        }

        // 构建索引
        for (const [id, pd] of Object.entries(db)) {
            _playerCache[id] = pd;

            // 提取英文名
            const enName = pd.en || (pd.nn) || (pd.n && pd.n.match(/\(([^)]+)\)/) ? pd.n.match(/\(([^)]+)\)/)[1] : pd.n) || '';
            const cnName = translate.player(pd);

            if (enName) {
                _exactIndex[enName.toLowerCase()] = id;
                _nameIndex[normalizeName(enName)] = id;
                // 分拆名和姓
                const parts = enName.toLowerCase().split(/\s+/);
                for (const p of parts) {
                    if (p.length > 2) {
                        if (!_nameIndex[p]) _nameIndex[p] = [];
                        if (Array.isArray(_nameIndex[p])) {
                            if (!_nameIndex[p].includes(id)) _nameIndex[p].push(id);
                        } else {
                            _nameIndex[p] = [_nameIndex[p], id];
                        }
                    }
                }
            }

            if (cnName) {
                _cnIndex[cnName] = id;
                // 部分匹配索引
                for (let i = 1; i <= cnName.length; i++) {
                    for (let j = 0; j <= cnName.length - i; j++) {
                        const sub = cnName.substring(j, j + i);
                        if (sub.length >= 2) {
                            if (!_cnIndex[sub]) _cnIndex[sub] = [];
                            if (Array.isArray(_cnIndex[sub])) {
                                if (!_cnIndex[sub].includes(id)) _cnIndex[sub].push(id);
                            } else if (_cnIndex[sub] !== id) {
                                _cnIndex[sub] = [_cnIndex[sub], id];
                            }
                        }
                    }
                }
            }

            // 昵称索引
            if (pd.nicknames && Array.isArray(pd.nicknames)) {
                for (const nk of pd.nicknames) {
                    _nickIndex[nk] = id;
                    _nickIndex[nk.toLowerCase()] = id;
                }
            }
            if (pd.nk) {
                _nickIndex[pd.nk] = id;
                _nickIndex[pd.nk.toLowerCase()] = id;
            }
        }
    }

    function search(query, context) {
        buildIndex();
        if (!query || typeof query !== 'string' || query.trim() === '') return null;

        const q = query.trim();
        const qNorm = normalizeName(q);
        const qLower = q.toLowerCase();

        // Level 1: 精确匹配
        if (_exactIndex[qLower]) {
            return _playerCache[_exactIndex[qLower]] || null;
        }

        // Level 1b: 昵称精确匹配
        if (_nickIndex[q]) {
            const nid = _nickIndex[q];
            return _playerCache[nid] || null;
        }
        if (_nickIndex[qLower]) {
            const nid = _nickIndex[qLower];
            return _playerCache[nid] || null;
        }

        // Level 2: 归一化匹配 (跳过空归一化名，中文等应由Level3处理)
        if (qNorm && _nameIndex[qNorm]) {
            const result = _nameIndex[qNorm];
            if (Array.isArray(result)) {
                return resolveMultiple(result, context);
            }
            return _playerCache[result] || null;
        }

        // Level 3: 中文名匹配
        if (_cnIndex[q]) {
            const result = _cnIndex[q];
            if (Array.isArray(result)) {
                return resolveMultiple(result.slice(0, 10), context);
            }
            return _playerCache[result] || null;
        }

        // Level 4: 西里尔→拉丁 再匹配
        if (/[а-яё]/i.test(q)) {
            const latinQ = translate.cyrillic(q);
            if (latinQ !== q) {
                return search(latinQ, context);
            }
        }

        return null;
    }

    function resolveMultiple(ids, context) {
        if (!Array.isArray(ids)) return _playerCache[ids] || null;
        if (ids.length === 0) return null;
        if (ids.length === 1) return _playerCache[ids[0]] || null;

        // 上下文消歧
        if (context && context.year) {
            // 根据世界杯年份缩小范围
            // 简化：返回第一个
        }

        // 返回候选列表
        return {
            _candidates: ids.map(id => _playerCache[id]).filter(Boolean),
            _multiple: true
        };
    }



    function getPlayer(id) {
        buildIndex();
        return _playerCache[id] || null;
    }

    return {
        search: search,
        get: getPlayer,
        buildIndex: buildIndex,
        searchByLastName: function(lastName) {
            var ln = (lastName || '').toLowerCase().trim();
            if (!ln) return [];
            var results = [];
            // 精确匹配姓
            if (_nameIndex[ln]) results.push(_nameIndex[ln]);
            // 后缀匹配（全名以该姓结尾）
            for (var key in _nameIndex) {
                if (key.endsWith(ln) && key !== ln) {
                    if (results.indexOf(_nameIndex[key]) < 0) {
                        results.push(_nameIndex[key]);
                    }
                }
            }
            return results;
        }
    };
})();


// ==================== 4. 聚合引擎（俱乐部/联赛） ====================
const buildClubIndex = (function() {
    let _clubIdx = {};
    let _leagueIdx = {};
    let _built = false;

    // Helpers: normalize club/league name for key
    function normKey(s) {
        if (!s) return '';
        return s.toLowerCase()
            .replace(/\s*fc$/i,'').replace(/\s*sc$/i,'').replace(/\s*cf$/i,'')
            .replace(/\s*ac$/i,'').replace(/\s*as$/i,'').replace(/\s*ssc$/i,'')
            .replace(/\s*afc$/i,'').replace(/\s*sv$/i,'')
            .replace(/[&.,'\-–—()\[\]{}]/g,' ')
            .replace(/\s+/g,' ').trim();
    }

    function build() {
        if (_built) return { clubs: _clubIdx, leagues: _leagueIdx };
        _built = true;

        // 1. Seed from clubNameMap (existing translations)
        if (typeof clubNameMap !== 'undefined') {
            for (const [key, val] of Object.entries(clubNameMap)) {
                const nk = normKey(key);
                if (!_clubIdx[nk]) {
                    // Extract pure English name from value like "阿森纳（Arsenal FC）"
                    let en = key;
                    let cn = val;
                    const m = val.match(/^(.+?)（(.+?)）$/);
                    if (m) { cn = m[1]; en = m[2]; }
                    _clubIdx[nk] = { id: nk.replace(/\s+/g,'_'), en: en, cn: cn, league: null, country: null, countryCn: null, players: [], worldCupGoals: 0 };
                }
            }
        }

        // 2. Seed from clubLeagueMap
        if (typeof clubLeagueMap !== 'undefined') {
            for (const [key, val] of Object.entries(clubLeagueMap)) {
                const nk = normKey(key);
                if (_clubIdx[nk]) {
                    _clubIdx[nk].league = val;
                }
            }
        }

        // 3. Traverse playerDB to populate players and discover new clubs/leagues
        if (typeof playerDB !== 'undefined') {
            for (const [playerName, pd] of Object.entries(playerDB)) {
                // Determine player's nationality
                const nat = pd.nat || pd.nt || '';
                
                // Get career entries
                let careerEntries = [];
                if (pd.cr && Array.isArray(pd.cr) && pd.cr.length > 0) {
                    careerEntries = pd.cr;
                }
                // If no career, try top-level t/l
                if (careerEntries.length === 0 && (pd.t || pd.team)) {
                    careerEntries = [{ t: pd.t || pd.team, l: pd.l || pd.league || '' }];
                }

                for (const ce of careerEntries) {
                    // Skip national team entries (nt flag)
                    if (ce.nt === true) continue;
                    
                    const clubName = ce.t || ce.team || '';
                    const leagueName = ce.l || ce.league || '';
                    
                    // Skip entries with national team patterns in name
                    if (/国家队|national team|國際隊|selección|selecao|nationalmannschaft/i.test(clubName)) continue;
                    if (/国家队|national team/i.test(leagueName)) continue;
                    
                    if (!clubName || clubName === '?' || clubName === 'Unknown') continue;
                    
                    const cnk = normKey(clubName);
                    
                    // Auto-register club if not exists
                    if (!_clubIdx[cnk]) {
                        _clubIdx[cnk] = {
                            id: cnk.replace(/\s+/g,'_'),
                            en: clubName,
                            cn: translate.club ? translate.club(clubName) : clubName,
                            league: null,
                            country: null,
                            countryCn: null,
                            players: [],
                            worldCupGoals: 0
                        };
                    }
                    
                    // Add player to club
                    if (!_clubIdx[cnk].players.includes(playerName)) {
                        _clubIdx[cnk].players.push(playerName);
                    }
                    
                    // Set league if available
                    if (leagueName && leagueName !== '?' && leagueName !== 'Unknown' && !_clubIdx[cnk].league) {
                        _clubIdx[cnk].league = leagueName;
                    }
                }
            }
        }

        // 4. Build leagueIndex from clubIndex
        for (const [ck, club] of Object.entries(_clubIdx)) {
            let ln = club.league || 'Unknown';
            const lnk = normKey(ln);
            
            if (!_leagueIdx[lnk]) {
                _leagueIdx[lnk] = {
                    id: lnk.replace(/\s+/g,'_'),
                    en: ln,
                    cn: (typeof translate !== 'undefined' && translate.league) ? translate.league(ln) : ln,
                    country: null,
                    countryCn: null,
                    clubs: [],
                    worldCupGoals: 0,
                    playerCount: 0
                };
            }
            
            if (!_leagueIdx[lnk].clubs.includes(ck)) {
                _leagueIdx[lnk].clubs.push(ck);
            }
        }

        // 5. Compute World Cup goal stats from matchdata
        if (typeof wcMatchDetails !== 'undefined' && typeof playerDB !== 'undefined') {
            // Build reverse name→club mapping from playerDB
            const playerClubMap = {};
            for (const [playerName, pd] of Object.entries(playerDB)) {
                if (pd.cr && Array.isArray(pd.cr) && pd.cr.length > 0) {
                    const lastClub = pd.cr[pd.cr.length - 1];
                    if (lastClub.t) {
                        const cnk = normKey(lastClub.t);
                        // Store multiple name variants
                        playerClubMap[playerName.toLowerCase()] = cnk;
                        if (pd.nn) playerClubMap[pd.nn.toLowerCase()] = cnk;
                        if (pd.n) {
                            playerClubMap[pd.n.toLowerCase()] = cnk;
                            // Extract English from "Name (English)"
                            const em = pd.n.match(/\(([^)]+)\)/);
                            if (em) playerClubMap[em[1].toLowerCase()] = cnk;
                        }
                    }
                }
            }

            // Parse wcMatchDetails for goals
            for (const [matchKey, match] of Object.entries(wcMatchDetails)) {
                if (!match.goals) continue;
                for (const g of match.goals) {
                    if (!g.scorer || g.type === 'own_goal') continue;
                    // scorer format: "恩纳·瓦伦西亚 (Enner Valencia)" or "梅西 (Lionel Messi)"
                    const enMatch = g.scorer.match(/\(([^)]+)\)/);
                    const scorerEn = enMatch ? enMatch[1] : g.scorer;
                    const cnk = playerClubMap[scorerEn.toLowerCase()];
                    if (cnk && _clubIdx[cnk]) {
                        _clubIdx[cnk].worldCupGoals = (_clubIdx[cnk].worldCupGoals || 0) + 1;
                        if (_clubIdx[cnk].league) {
                            const lnk = normKey(_clubIdx[cnk].league);
                            if (_leagueIdx[lnk]) {
                                _leagueIdx[lnk].worldCupGoals = (_leagueIdx[lnk].worldCupGoals || 0) + 1;
                            }
                        }
                    }
                }
            }
        }

        // 6. Compute player counts per league
        for (const [ck, club] of Object.entries(_clubIdx)) {
            if (club.league) {
                const lnk = normKey(club.league);
                if (_leagueIdx[lnk]) {
                    _leagueIdx[lnk].playerCount += club.players.length;
                }
            }
        }

        // 7. Sort league clubs by player count
        for (const [lk, league] of Object.entries(_leagueIdx)) {
            league.clubs.sort((a, b) => {
                const ca = _clubIdx[a] || { players: [] };
                const cb = _clubIdx[b] || { players: [] };
                return cb.players.length - ca.players.length;
            });
        }

        console.log('[Aggregation] Clubs:', Object.keys(_clubIdx).length, 'Leagues:', Object.keys(_leagueIdx).length);
        return { clubs: _clubIdx, leagues: _leagueIdx };
    }


    function getIndexes() {
        buildIndex();
        // 返回一个扁平化的查找索引 { 关键词 → playerId }
        const flat = {};
        // 合并所有索引
        for (const [k, v] of Object.entries(_exactIndex)) { flat[k] = v; }
        for (const [k, v] of Object.entries(_nickIndex)) { flat[k] = v; }
        for (const [k, v] of Object.entries(_cnIndex)) { 
            if (Array.isArray(v)) { for (const id of v) { flat[k + '_' + id] = id; } }
            else { flat[k] = v; }
        }
        return flat;
    }

    return { build: build, getClubs: () => _clubIdx, getLeagues: () => _leagueIdx, reset: function() { _built = false; _clubIdx = {}; _leagueIdx = {}; } };
})();

// Expose global accessor
window.getAggregatedData = function() {
    const result = buildClubIndex.build();
    return result;
};
window._playerSearchEngine = _searchEngine;
window.translate = translate;
window.buildClubIndex = buildClubIndex;
window.buildSearchIndex = _searchEngine.buildIndex;

// 自动初始化聚合索引
// 立即设置 dataReady 标记 (防止 DOMContentLoaded 已触发导致页面卡死)
window.tournamentDataReady = true;

if (typeof document !== 'undefined') {
    // 浏览器环境：延迟到 DOM 加载后
    document.addEventListener('DOMContentLoaded', function() {
        window.tournamentDataReady = true;
        setTimeout(function() {
            buildClubIndex.build();
            console.log('[engine.js] 聚合索引构建完成');
            try { sessionStorage.setItem('engineDataBuilt', 'V1.71'); } catch(e) {}
        }, 500);
    });
}

// ==================== 国家队聚合索引 ====================
const buildNationIndex = {
    _built: false,
    build() {
        if (this._built) return;
        const nationIdx = {};
        const processPlayer = (p, src) => {
            const nation = p.nationality || p.nation || p.country || 'Unknown';
            if (!nationIdx[nation]) nationIdx[nation] = { players: [], playerCount: 0, clubs: new Set() };
            nationIdx[nation].players.push({ name: p.name, id: p.id || '', club: p.club || '', league: p.league || '', source: src });
            nationIdx[nation].playerCount++;
            if (p.club) nationIdx[nation].clubs.add(p.club);
        };
        if (typeof playerDB !== 'undefined') Object.values(playerDB).forEach(p => processPlayer(p, 'playerDB'));
        if (typeof supplementalPlayers !== 'undefined') supplementalPlayers.forEach(p => processPlayer(p, 'supplemental'));
        window.__nationIndex = nationIdx;
        this._built = true;
        console.log('[NationIndex] Built: ' + Object.keys(nationIdx).length + ' nations');
    }
};

// Auto-build on load
if (typeof window !== 'undefined') {
    window.buildNationIndex = buildNationIndex;
}

// ==================== Player Stats Index ====================
const buildPlayerStatsIndex = {
    _built: false,
    build() {
        if (this._built) return;
        if (typeof playerDB === 'undefined') { console.warn('[PlayerStatsIndex] playerDB not loaded'); return; }
        const stats = { byPosition: { Forward: [], Midfielder: [], Defender: [], Goalkeeper: [], Unknown: [] }, byNation: {}, byClub: {}, topScorers: [], playerCount: 0, totalGoals: 0 };
        for (const [name, data] of Object.entries(playerDB)) {
            const pos = data.position || 'Unknown';
            const nation = data.nationality || data.nation || 'Unknown';
            const club = data.club || 'Unknown';
            const goals = parseInt(data.goals) || 0;
            const player = { name, position: pos, nation, club, goals, ...data };
            if (!stats.byPosition[pos]) stats.byPosition[pos] = [];
            stats.byPosition[pos].push(player);
            if (!stats.byNation[nation]) stats.byNation[nation] = [];
            stats.byNation[nation].push(player);
            if (!stats.byClub[club]) stats.byClub[club] = [];
            stats.byClub[club].push(player);
            stats.playerCount++;
            stats.totalGoals += goals;
        }
        stats.topScorers = Object.values(playerDB).map((d, i) => ({ name: Object.keys(playerDB)[i], goals: parseInt(d.goals) || 0, position: d.position, nation: d.nationality || d.nation })).sort((a, b) => b.goals - a.goals).slice(0, 50);
        stats.avgGoals = stats.playerCount > 0 ? (stats.totalGoals / stats.playerCount).toFixed(2) : 0;
        window.__playerStatsIndex = stats;
        this._built = true;
        console.log('[PlayerStatsIndex] Built: ' + stats.playerCount + ' players, Top scorer: ' + (stats.topScorers[0]?.name || 'N/A'));
    }
};
if (typeof window !== 'undefined') { window.buildPlayerStatsIndex = buildPlayerStatsIndex; }

// ==================== 5. 统一标准名称格式化 ====================
// 会话级缓存：同一页面内同一名称只翻译一次
var _nameCache = {};
window.clearNameCache = function() { _nameCache = {}; };

// 解析 "中文（英文）" 或 "中文 (英文)" 两种格式
function parseStoredFormat(val, fallbackEn) {
    if (!val || typeof val !== 'string') return { cn: val || '', en: fallbackEn || '' };
    var m1 = val.match(/^(.+?)（(.+?)）$/);
    if (m1) return { cn: m1[1].trim(), en: m1[2].trim() };
    var m2 = val.match(/^(.+?)\s*\((.+?)\)$/);
    if (m2) return { cn: m2[1].trim(), en: m2[2].trim() };
    return { cn: val, en: fallbackEn || val };
}

// 国家名称映射表 (V4: 值=纯中文)
var nationNameMap = {
    'Brazil':'巴西','France':'法国','England':'英格兰','Argentina':'阿根廷','Germany':'德国','Spain':'西班牙',
    'Italy':'意大利','Netherlands':'荷兰','Portugal':'葡萄牙','Belgium':'比利时','Croatia':'克罗地亚',
    'Uruguay':'乌拉圭','Morocco':'摩洛哥','Japan':'日本','South Korea':'韩国','Senegal':'塞内加尔',
    'Saudi Arabia':'沙特阿拉伯','United States':'美国','Mexico':'墨西哥','Canada':'加拿大',
    'Cameroon':'喀麦隆','Ghana':'加纳','Tunisia':'突尼斯','Nigeria':'尼日利亚','Egypt':'埃及',
    'Algeria':'阿尔及利亚','Ivory Coast':'科特迪瓦','Australia':'澳大利亚','Iran':'伊朗','Qatar':'卡塔尔',
    'Ecuador':'厄瓜多尔','Poland':'波兰','Serbia':'塞尔维亚','Switzerland':'瑞士','Denmark':'丹麦',
    'Sweden':'瑞典','Norway':'挪威','Russia':'俄罗斯','Ukraine':'乌克兰','Turkey':'土耳其',
    'Greece':'希腊','Czech Republic':'捷克','Austria':'奥地利','Scotland':'苏格兰','Wales':'威尔士',
    'Chile':'智利','Colombia':'哥伦比亚','Peru':'秘鲁','Paraguay':'巴拉圭','Costa Rica':'哥斯达黎加',
    'Honduras':'洪都拉斯','Panama':'巴拿马','Jamaica':'牙买加','South Africa':'南非','Mali':'马里',
    'China':'中国','India':'印度','New Zealand':'新西兰','Bulgaria':'保加利亚','Romania':'罗马尼亚',
    'Slovakia':'斯洛伐克','Slovenia':'斯洛文尼亚','Hungary':'匈牙利','Finland':'芬兰','Norway':'挪威',
    'Iceland':'冰岛','Ireland':'爱尔兰','Northern Ireland':'北爱尔兰','Bosnia':'波黑',
    'DR Congo':'民主刚果','Cape Verde':'佛得角','Curaçao':'库拉索','Haiti':'海地',
    'Jordan':'约旦','Iraq':'伊拉克','Uzbekistan':'乌兹别克斯坦','New Zealand':'新西兰'
};

function nationToCN(input) {
    if (!input || typeof input !== 'string') return { cn: '', en: '' };
    var t = input.trim();
    if (nationNameMap[t]) return { cn: nationNameMap[t], en: t };
    var lower = t.toLowerCase();
    var keys = Object.keys(nationNameMap);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i].toLowerCase() === lower) return { cn: nationNameMap[keys[i]], en: t };
    }
    for (var j = 0; j < keys.length; j++) {
        if (keys[j].toLowerCase().indexOf(lower) >= 0 || lower.indexOf(keys[j].toLowerCase()) >= 0)
            return { cn: nationNameMap[keys[j]], en: t };
    }
    return { cn: t, en: t };
}

/**
 * 统一标准名称格式化：输出 中文(英文) 格式
 * @param {'player'|'club'|'league'|'position'|'nation'} type
 * @param {*} input - 球员对象/俱乐部名/联赛名/位置名/国家名
 * @param {string} [orig] - 原始英文名（可选，仅 player 类型使用）
 * @returns {string} 中文(英文) 或仅中文
 */
function formatStandardName(type, input, orig) {
    // 生成缓存key
    var cacheKey = type + '|' + (typeof input === 'object' ? (input.en || input.nn || input.n || JSON.stringify(input).substring(0, 80)) : String(input)) + '|' + (orig || '');
    if (_nameCache[cacheKey]) return _nameCache[cacheKey];
    
    var result = '';
    switch (type) {
        case 'player': result = _formatPlayerName(input, orig); break;
        case 'club': result = _formatClubName(input); break;
        case 'league': result = _formatLeagueName(input); break;
        case 'position': result = _formatPositionName(input); break;
        case 'nation': result = _formatNationName(input); break;
        default: result = String(input || ''); break;
    }
    _nameCache[cacheKey] = result;
    return result;
}

    function _formatPlayerName(p, orig) {
        var cn = '', en = '';
        // 检测CJK字符（含中日韩统一汉字、日文假名、韩文）
        var RE_CJK = /[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/;
        if (typeof p === 'object' && p !== null) {
            cn = translate.player(p) || '';
            if (!cn && p.cn) cn = p.cn;
            if (!cn && p.nn) cn = p.nn;
            // en 优先级: orig > p.en > p.n(拉丁名,排除CJK) > p.nn(拉丁名,排除CJK)
            en = orig || p.en || '';
            if (!en && p.n && !RE_CJK.test(p.n)) en = p.n;
            if (!en && p.nn && !RE_CJK.test(p.nn)) en = p.nn;
            // 如果 en 仍为空且 p.n 含CJK，说明n是中文名，尝试从其他字段提取拉丁名
            if (!en && p.n && RE_CJK.test(p.n)) {
                // p.nn 可能是拉丁名
                if (p.nn && !RE_CJK.test(p.nn)) en = p.nn;
            }
        } else {
            var nameStr = String(p || '');
            // ★ V1.71 修复: 输入已是 "中文名 (English Name)" 格式时，解析提取
            var reStored = /^(.+)\s+\(([^)]+)\)$/;
            var mStored = nameStr.match(reStored);
            if (mStored) {
                var cnPart = mStored[1].trim();
                var enPart = mStored[2].trim();
                // 尝试从 playerDB 查找（优先用英文名查找）
                var pFound = (typeof playerDB !== 'undefined' && (playerDB[enPart] || playerDB[cnPart])) ? (playerDB[enPart] || playerDB[cnPart]) : null;
                if (pFound) {
                    cn = translate.player(pFound) || cnPart;
                    en = orig || pFound.en || pFound.nn || enPart;
                    // 确保 en 为拉丁名
                    if (en && RE_CJK.test(en) && pFound.nn && !RE_CJK.test(pFound.nn)) en = pFound.nn;
                } else {
                    cn = cnPart;
                    en = enPart;
                }
            } else {
                // 优先从 playerDB 查找，利用 nn (原生名) 获取准确翻译
                var pObj = (typeof playerDB !== 'undefined' && playerDB[nameStr]) ? playerDB[nameStr] : { n: nameStr };
                cn = translate.player(pObj) || nameStr;
                en = orig || nameStr;
            }
        }
        if (!cn && !en) return '未知球员';
        // 安全兜底：确保 cn/en 均为字符串
        cn = String(cn || ''); en = String(en || '');
        // cn与en相同时只返回cn
        if (!en || cn === en) return cn;
        // cn可能已含英文(如 "田中 パウロ 淳一")，检查en是否已是cn的子串
        if (cn.indexOf(en) >= 0) return cn;
        return cn + '(' + en + ')';
    }

function _formatClubName(name) {
    if (!name || typeof name !== 'string') return String(name || '');
    // 如果已经是格式化过的，解析后重新输出
    var parsed = parseStoredFormat(name);
    if (parsed.cn !== parsed.en || name.indexOf('（') > 0 || name.indexOf('(') > 0) {
        var en = parsed.en || name;
        var cn = parsed.cn;
        if (cn === en) return cn;
        return cn + '(' + en + ')';
    }
    // 通过引擎翻译
    var tlResult = translate.club(name);
    if (tlResult && tlResult !== name) {
        var p2 = parseStoredFormat(tlResult, name);
        if (p2.cn && p2.en && p2.cn !== p2.en) return p2.cn + '(' + p2.en + ')';
        if (p2.cn) return p2.cn + '(' + name + ')';
    }
    return name;
}

function _formatLeagueName(name) {
    if (!name || typeof name !== 'string') return String(name || '');
    var parsed = parseStoredFormat(name);
    if (parsed.cn !== parsed.en || name.indexOf('（') > 0 || name.indexOf('(') > 0) {
        if (parsed.cn === parsed.en) return parsed.cn;
        return parsed.cn + '(' + parsed.en + ')';
    }
    var tlResult = translate.league(name);
    if (tlResult && tlResult !== name && tlResult !== '?') {
        var p2 = parseStoredFormat(tlResult, name);
        if (p2.cn && p2.en && p2.cn !== p2.en) return p2.cn + '(' + p2.en + ')';
        if (p2.cn) return p2.cn + '(' + name + ')';
    }
    return name;
}

function _formatPositionName(pos) {
    if (!pos || typeof pos !== 'string') return pos || '';
    // 0. 处理空字符串
    var trimmed = pos.trim();
    if (!trimmed) return pos;
    // 1. 尝试引擎翻译（positionToCN 现已修复连字符问题）
    var cn = translate.position(trimmed);
    if (cn && cn !== trimmed) return cn;
    // 2. 处理 "Defender - Centre-Back" 格式 → 提取后半段重试
    var m = trimmed.match(/^[A-Za-z]+\s*[-–]\s*(.+)/);
    if (m) {
        var sub = translate.position(m[1]);
        if (sub && sub !== m[1]) return sub;
        // 提取失败 → 至少用后半段原文（优于返回整段）
        return _formatPositionName(m[1]);
    }
    // 3. 处理 "/" 分隔的多位置 → 逐个翻译
    if (trimmed.indexOf('/') > 0) {
        var parts = trimmed.split('/');
        var translated = parts.map(function(p) {
            return _formatPositionName(p.trim());
        });
        return translated.join(' / ');
    }
    // 4. 已是纯中文 → 保留原样
    if (/[\u4e00-\u9fff]/.test(trimmed)) return trimmed;
    // 4.5 去掉 -er 后缀重试 (Midfielder→Midfield, Winger→Wing, Defender→Defend...)
    if (/er$/i.test(trimmed)) {
        var stripped = trimmed.replace(/er$/i, '');
        var cn2 = translate.position(stripped);
        if (cn2 && cn2 !== stripped) return cn2;
        // 再加回 -er 后缀尝试 (如 "wing"→"winger")
        var cn3 = translate.position(stripped + 'er');
        if (cn3 && cn3 !== stripped + 'er') return cn3;
    }
    // 4.6 尝试将单数变为复数重试 (如 "forward"→"forwards" 可能误写)
    if (/s$/i.test(trimmed)) {
        var singular = trimmed.replace(/s$/i, '');
        var cn4 = translate.position(singular);
        if (cn4 && cn4 !== singular) return cn4;
    }
    // 5. 纯英文但引擎未翻译 → 返回原值（保留英文以备后续处理）
    return trimmed;
}

function _formatNationName(input) {
    var r = nationToCN(input);
    if (!r.cn && !r.en) return String(input || '');
    if (!r.en || r.cn === r.en) return r.cn;
    return r.cn + '(' + r.en + ')';
}

// 将 formatStandardName 暴露到 translate 对象
translate.formatName = formatStandardName;
translate.nation = nationToCN;

// ==================== 6. 统一球员详情弹窗 V3 ====================
// 基于 player-detail-popup-v3-preview 设计
// 位置颜色: 门将金(#D4A843)、后卫蓝(#3A6B9F)、中场绿(#2E7D32)、前锋红(#C0392B)

function getPosCategoryV3(pos) {
    if (!pos) return 'unknown';
    var p = pos.toLowerCase();
    if (/goalkeeper|门将/.test(p)) return 'gk';
    if (/back|后卫|centre-back|full-back|wing-back|sweeper/.test(p) && !/wing(?!.*back)/i.test(p)) return 'df';
    if (/midfield|中场|wing(?!.*back)/i.test(p)) return 'mf';
    if (/forward|前锋|striker|winger|attack/.test(p)) return 'fw';
    return 'unknown';
}

function calcAgeV3(birthStr) {
    if (!birthStr) return '—';
    var parts = birthStr.split('-');
    if (parts.length < 3) return '—';
    var b = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    if (isNaN(b.getTime())) return '—';
    var now = new Date();
    var age = now.getFullYear() - b.getFullYear();
    var m = now.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
    return age + '岁';
}

function formatValueWanV3(raw) {
    if (!raw || raw === '—' || raw === '暂无数据' || raw === '?' || raw === '? €' || raw === '?€') return '—';
    var str = String(raw);
    var numMatch = str.match(/([\d.]+)/);
    if (!numMatch) return str;
    var num = parseFloat(numMatch[1]);
    if (/m/i.test(str)) return (num * 100).toFixed(0) + '万€';
    if (/万/.test(str)) return num.toFixed(0) + '万€';
    if (/亿/.test(str)) return (num * 10000).toFixed(0) + '万€';
    return num.toFixed(0) + '万€';
}

function extractYearV3(s) {
    var m = String(s).match(/^(\d{4})/);
    return m ? parseInt(m[1]) : 0;
}
function extractYearMonthV3(s) {
    var m = String(s).match(/^(\d{4})[.\-](\d{1,2})/);
    if (m) return parseInt(m[1]) * 100 + parseInt(m[2]);
    var y = String(s).match(/^(\d{4})/);
    return y ? parseInt(y[1]) * 100 : 0;
}
function sortByYearDescV3(arr, keyFn) {
    return arr.slice().sort(function(a, b) {
        return (keyFn ? keyFn(b) : extractYearV3(b)) - (keyFn ? keyFn(a) : extractYearV3(a));
    });
}

// 构建V3弹窗DOM
function buildPlayerDetailDOMV3(pd, resolvedKey) {
    var cnName = translate.player(pd) || pd.cn || '';
    // enName 优先取拉丁名，非CJK原生名
    var enName = pd.en || '';
    if (!enName && pd.n && !/[\u4e00-\u9fff]/.test(pd.n)) enName = pd.n;
    if (!enName && pd.nn && !/[\u4e00-\u9fff]/.test(pd.nn)) enName = pd.nn;
    // 从 pd.n 提取英文名 (格式: "中文名 (English Name)")
    if (!enName && pd.n) {
        var em = pd.n.match(/\(([^)]+)\)/);
        if (em) enName = em[1];
    }
    var origName = pd.nn || '';
    var nickname = pd.nk || '';
    var nat = pd.nat || '';
    var ht = pd.ht || '';
    var wt = pd.wt || '';
    var bd = pd.bd || '';
    var photoUrl = pd.photo || '';
    // 从生涯数据获取最新位置
    var pos = '';
    if (pd.cr && pd.cr.length > 0) {
        var lastCr = pd.cr[pd.cr.length - 1];
        pos = lastCr.ps || '';
    }
    var posCN = translate.position(pos) || pos;
    var posCat = getPosCategoryV3(pos);

    // 主名: 中文(英文) 标准格式
    var mainName = cnName;
    if (enName && enName !== cnName) {
        mainName = cnName + '(' + enName + ')';
    }
    // 副名: 原语言名
    var subName = (origName && origName !== cnName && origName !== enName) ? origName : '';

    var ageStr = calcAgeV3(bd);

    // 最新身价
    var latestValue = '—';
    if (pd.cr && pd.cr.length > 0) {
        var last = pd.cr[pd.cr.length - 1];
        latestValue = formatValueWanV3(last.mv || '');
    }
    // 如果 playerDB 中没有身价数据，尝试从 squadDB 补充 (V1.71: 优先查_squadValueMap + 单词级匹配)
    if ((latestValue === '—' || !latestValue) && typeof squadDB !== 'undefined' && resolvedKey) {
        // ★ V1.71: 优先从 squadmodal 预存的 _squadValueMap 直接获取（100%准确）
        if (typeof window._squadValueMap !== 'undefined' && window._squadValueMap[resolvedKey]) {
            latestValue = formatValueWanV3(window._squadValueMap[resolvedKey]);
        }
        // 回退: 单词级匹配遍历 squadDB（处理 LASTNAME Firstname ↔ Firstname Lastname）
        if (latestValue === '—' || !latestValue) {
            var enLookup = resolvedKey || pd.en || pd.n || '';
            var normEnLookup = enLookup.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            // 单词集合匹配辅助函数
            var wordSet = function(s) {
                return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[\s\-\.]+/).filter(function(w){return w.length>=2;}).sort().join('|');
            };
            var lookupWordSet = wordSet(enLookup);
            for (var teamCode in squadDB) {
                if (!squadDB.hasOwnProperty(teamCode)) continue;
                var squadTeam = squadDB[teamCode];
                var categories = ['gk','df','mf','fw'];
                var foundVal = false;
                for (var sci = 0; sci < categories.length && !foundVal; sci++) {
                    var squadPlayers = squadTeam[categories[sci]] || [];
                    for (var spi = 0; spi < squadPlayers.length; spi++) {
                        var sp = squadPlayers[spi];
                        var spNorm = (sp.n || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        var spWordSet = wordSet(sp.n || '');
                        // 匹配: 原始名精确、归一化精确、单词集合匹配（处理名字顺序不同）
                        if (sp.n === enLookup || sp.n === (pd.n || '') || sp.n === (pd.en || '') || spNorm === normEnLookup || (lookupWordSet && spWordSet && lookupWordSet === spWordSet)) {
                            if (sp.v && sp.v !== '—' && sp.v !== '?' && sp.v !== '? €' && sp.v !== '?€') {
                                latestValue = formatValueWanV3(sp.v);
                                foundVal = true;
                                break;
                            }
                        }
                    }
                }
                if (foundVal) break;
            }
        }
    }

    // === 卡片容器 ===
    var card = document.createElement('div');
    card.className = 'player-detail-card';
    card.style.cssText = 'animation:slideUpV3 0.3s ease;background:linear-gradient(145deg, #1a1a2e, #16213e);border-radius:16px;width:960px;max-width:96vw;max-height:90vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.12);position:relative;';

    // === 头部 ===
    var header = document.createElement('div');
    var posColors = {
        'gk': 'background:linear-gradient(135deg, #8b6914, #c9a030);',
        'df': 'background:linear-gradient(135deg, #154a8a, #3a7edf);',
        'mf': 'background:linear-gradient(135deg, #146b2e, #3ab850);',
        'fw': 'background:linear-gradient(135deg, #a02020, #e04040);',
        'unknown': 'background:linear-gradient(135deg, #4a3880, #8b7ec0);'
    };
    header.style.cssText = 'padding:24px 28px 20px;position:relative;border-radius:16px 16px 0 0;display:flex;align-items:center;gap:20px;' + (posColors[posCat] || posColors['unknown']);

    var closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position:absolute;top:10px;right:14px;cursor:pointer;font-size:1.1rem;color:rgba(255,255,255,0.85);width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(0,0,0,0.2);transition:all 0.2s;z-index:10;';
    closeBtn.onmouseover = function() { this.style.background = 'rgba(0,0,0,0.5)'; this.style.color = '#fff'; };
    closeBtn.onmouseout = function() { this.style.background = 'rgba(0,0,0,0.2)'; this.style.color = 'rgba(255,255,255,0.85)'; };
    closeBtn.onclick = closePlayerDetailV3;
    header.appendChild(closeBtn);

    // 头像
    var avatarWrap = document.createElement('div');
    avatarWrap.style.cssText = 'width:80px;height:80px;min-width:80px;border-radius:50%;background:rgba(255,255,255,0.18);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:800;color:#fff;box-shadow:0 6px 20px rgba(0,0,0,0.3);border:3px solid rgba(255,255,255,0.4);overflow:hidden;';
    if (photoUrl) {
        var img = document.createElement('img');
        img.src = photoUrl;
        img.style.cssText = 'width:100%;height:100%;border-radius:50%;object-fit:cover;';
        img.onerror = function() { this.style.display = 'none'; this.parentElement.appendChild(document.createTextNode(cnName.charAt(0))); };
        avatarWrap.appendChild(img);
    } else {
        avatarWrap.appendChild(document.createTextNode(cnName.charAt(0)));
    }
    header.appendChild(avatarWrap);

    // 文字区
    var textArea = document.createElement('div');
    textArea.style.cssText = 'flex:1;';

    var nameMain = document.createElement('div');
    nameMain.style.cssText = 'font-size:1.4rem;font-weight:700;color:#fff;line-height:1.3;';
    nameMain.textContent = cnName;
    textArea.appendChild(nameMain);

    if (enName && enName !== cnName) {
        var nameEn = document.createElement('div');
        nameEn.style.cssText = 'font-size:0.85rem;color:rgba(255,255,255,0.7);margin-bottom:4px;';
        nameEn.textContent = '(' + enName + ')';
        textArea.appendChild(nameEn);
    }

    if (subName) {
        var nameSub = document.createElement('div');
        nameSub.style.cssText = 'font-size:0.85rem;color:rgba(255,255,255,0.7);font-style:italic;margin-bottom:6px;';
        nameSub.textContent = subName;
        textArea.appendChild(nameSub);
    }

    var metaRow = document.createElement('div');
    metaRow.style.cssText = 'display:flex;gap:10px;align-items:center;flex-wrap:wrap;';

    var posBadge = document.createElement('span');
    posBadge.style.cssText = 'display:inline-block;padding:3px 14px;border-radius:12px;font-size:0.78rem;font-weight:700;letter-spacing:0.5px;background:rgba(255,255,255,0.2);color:#fff;';
    posBadge.textContent = posCN || '未知位置';
    metaRow.appendChild(posBadge);

    if (nickname && nickname !== '—') {
        var nickTag = document.createElement('span');
        nickTag.style.cssText = 'font-size:0.75rem;color:rgba(255,255,255,0.55);font-style:italic;';
        nickTag.textContent = '"' + nickname + '"';
        metaRow.appendChild(nickTag);
    }
    textArea.appendChild(metaRow);
    header.appendChild(textArea);
    card.appendChild(header);

    // === 信息网格 ===
    var infoGrid = document.createElement('div');
    infoGrid.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-bottom:1px solid rgba(255,255,255,0.06);';
    
    function makeInfoItem(label, value, highlight) {
        var div = document.createElement('div');
        div.style.cssText = 'padding:14px 20px;text-align:center;border-right:1px solid rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.04);transition:background 0.2s;' + (highlight ? 'background:rgba(255,215,0,0.06);border-bottom:2px solid rgba(255,215,0,0.25);' : '');
        var lbl = document.createElement('div');
        lbl.style.cssText = 'font-size:0.6rem;color:' + (highlight ? '#f0d070' : '#8899aa') + ';text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;';
        lbl.textContent = label;
        var val = document.createElement('div');
        val.style.cssText = 'font-weight:700;color:' + (highlight ? '#f0d070' : '#fff') + ';font-size:' + (highlight ? '0.95rem' : '0.88rem') + ';line-height:1.3;';
        val.textContent = value || '—';
        div.appendChild(lbl); div.appendChild(val);
        return div;
    }

    // 使用 formatStandardName 翻译国籍
    var natDisplay = nat;
    if (nat && nat !== '?') {
        natDisplay = formatStandardName('nation', nat);
    }

    infoGrid.appendChild(makeInfoItem('年龄', ageStr));
    infoGrid.appendChild(makeInfoItem('身高', ht));
    infoGrid.appendChild(makeInfoItem('出生日期', bd));
    infoGrid.appendChild(makeInfoItem('体重', wt));
    infoGrid.appendChild(makeInfoItem('国籍', natDisplay));
    infoGrid.appendChild(makeInfoItem('当前身价', latestValue, true));
    card.appendChild(infoGrid);

    // === 生涯数据 ===
    function makeSectionTitle(title, count) {
        var div = document.createElement('div');
        div.style.cssText = 'font-size:0.78rem;font-weight:700;letter-spacing:0.5px;color:#f0d070;padding:14px 24px 8px;display:flex;align-items:center;gap:6px;';
        div.appendChild(document.createTextNode(title));
        if (count) {
            var span = document.createElement('span');
            span.style.cssText = 'font-size:0.65rem;color:#8899aa;font-weight:400;margin-left:auto;';
            span.textContent = count;
            div.appendChild(span);
        }
        return div;
    }

    function makeEmpty(msg) {
        var div = document.createElement('div');
        div.style.cssText = 'padding:6px 24px 10px;font-size:0.72rem;color:#8899aa;font-style:italic;';
        div.textContent = msg;
        return div;
    }

    function makeCareerTable(entries) {
        var wrap = document.createElement('div');
        wrap.style.cssText = 'padding:0 24px 10px;overflow-x:auto;';
        var table = document.createElement('table');
        table.style.cssText = 'width:100%;border-collapse:collapse;font-size:0.75rem;border-radius:10px;overflow:hidden;';
        
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        ['时期', '球队', '赛事', '位置', '身价', '号码'].forEach(function(h) {
            var th = document.createElement('th');
            th.style.cssText = 'background:rgba(255,255,255,0.05);color:#8899aa;padding:8px 12px;text-align:left;font-weight:600;font-size:0.67rem;text-transform:uppercase;letter-spacing:0.5px;white-space:nowrap;' + (h === '号码' ? 'text-align:center;' : '');
            th.textContent = h;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        entries.forEach(function(c) {
            var row = document.createElement('tr');
            row.style.cssText = 'border-bottom:1px solid rgba(255,255,255,0.03);';
            
            var tdP = document.createElement('td');
            tdP.style.cssText = 'padding:8px 12px;color:#8899aa;font-size:0.72rem;white-space:nowrap;';
            tdP.textContent = c.p || '暂无数据';
            row.appendChild(tdP);

            var tdT = document.createElement('td');
            tdT.style.cssText = 'padding:8px 12px;color:#ddd;white-space:nowrap;';
            tdT.textContent = formatStandardName('club', c.t) || c.t || '暂无数据';
            row.appendChild(tdT);

            var tdL = document.createElement('td');
            tdL.style.cssText = 'padding:8px 12px;color:#ddd;white-space:nowrap;';
            tdL.textContent = formatStandardName('league', c.l) || c.l || '暂无数据';
            row.appendChild(tdL);

            var tdPos = document.createElement('td');
            tdPos.style.cssText = 'padding:8px 12px;color:#ddd;white-space:nowrap;';
            tdPos.textContent = formatStandardName('position', c.ps) || c.ps || '暂无数据';
            row.appendChild(tdPos);

            var tdVal = document.createElement('td');
            tdVal.style.cssText = 'padding:8px 12px;color:#f0d070;font-weight:600;text-align:right;white-space:nowrap;';
            tdVal.textContent = formatValueWanV3(c.mv);
            row.appendChild(tdVal);

            var tdNo = document.createElement('td');
            tdNo.style.cssText = 'padding:8px 12px;color:#ddd;text-align:center;white-space:nowrap;';
            tdNo.textContent = c.no || '—';
            row.appendChild(tdNo);

            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        wrap.appendChild(table);
        return wrap;
    }

    function makeAwardList(awards) {
        var ul = document.createElement('ul');
        ul.style.cssText = 'list-style:none;padding:4px 24px 10px;display:flex;flex-wrap:wrap;gap:6px;';
        awards.forEach(function(a) {
            var li = document.createElement('li');
            li.style.cssText = 'font-size:0.7rem;padding:5px 12px;border-radius:10px;background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.12);color:#f0d070;';
            li.textContent = a;
            ul.appendChild(li);
        });
        return ul;
    }

    function makeInjuryList(injuries) {
        var ul = document.createElement('ul');
        ul.style.cssText = 'list-style:none;padding:4px 24px 10px;';
        injuries.forEach(function(i) {
            var li = document.createElement('li');
            li.style.cssText = 'font-size:0.72rem;padding:5px 0;color:#8899aa;border-bottom:1px solid rgba(255,255,255,0.03);display:flex;align-items:center;gap:8px;';
            var dot = document.createElement('span');
            dot.style.cssText = 'width:6px;height:6px;border-radius:50%;background:#e04040;flex-shrink:0;';
            li.appendChild(dot);
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        });
        return ul;
    }

    if (pd.cr && pd.cr.length > 0) {
        var ntEntries = [], clubEntries = [];
        for (var i = 0; i < pd.cr.length; i++) {
            if (pd.cr[i].nt) { ntEntries.push(pd.cr[i]); }
            else { clubEntries.push(pd.cr[i]); }
        }
        card.appendChild(makeSectionTitle('🇺🇳 国家队生涯', ntEntries.length + ' 条'));
        if (ntEntries.length > 0) {
            card.appendChild(makeCareerTable(ntEntries));
        } else {
            card.appendChild(makeEmpty('暂无国家队详细记录'));
        }
        card.appendChild(makeSectionTitle('🏟️ 俱乐部生涯', clubEntries.length + ' 条'));
        if (clubEntries.length > 0) {
            card.appendChild(makeCareerTable(clubEntries));
        } else {
            card.appendChild(makeEmpty('暂无俱乐部详细记录'));
        }
    } else {
        card.appendChild(makeSectionTitle('📋 生涯数据', ''));
        card.appendChild(makeEmpty('暂无详细生涯记录'));
    }

    // 荣誉
    var awSorted = pd.aw && pd.aw.length > 0 ? sortByYearDescV3(pd.aw) : [];
    card.appendChild(makeSectionTitle('🏆 荣誉记录', awSorted.length > 0 ? awSorted.length + ' 项' : ''));
    if (awSorted.length > 0) {
        card.appendChild(makeAwardList(awSorted));
    } else {
        card.appendChild(makeEmpty('暂无荣誉记录'));
    }

    // 伤病
    var ijSorted = pd.ij && pd.ij.length > 0 ? sortByYearDescV3(pd.ij, extractYearMonthV3) : [];
    card.appendChild(makeSectionTitle('🏥 伤病史', ijSorted.length > 0 ? ijSorted.length + ' 条' : ''));
    if (ijSorted.length > 0) {
        card.appendChild(makeInjuryList(ijSorted));
    } else {
        card.appendChild(makeEmpty('暂无重大伤病记录'));
    }

    // 底部
    var footer = document.createElement('div');
    footer.style.cssText = 'padding:10px 24px 14px;text-align:center;font-size:0.58rem;color:rgba(255,255,255,0.25);border-top:1px solid rgba(255,255,255,0.04);letter-spacing:0.3px;';
    footer.textContent = '数据来源: Transfermarkt / Sky Sports / FIFA | 2026 美加墨世界杯';
    card.appendChild(footer);

    return card;
}

// 回退弹窗（数据未收录时）
function buildFallbackDetailV3(rawName) {
    var cnGuess = rawName, enGuess = '';
    var pidx = rawName.indexOf('(');
    if (pidx >= 0) {
        cnGuess = rawName.substring(0, pidx).trim();
        enGuess = rawName.substring(pidx + 1).replace(')', '').trim();
    }
    var card = document.createElement('div');
    card.className = 'player-detail-card';
    card.style.cssText = 'animation:slideUpV3 0.3s ease;background:linear-gradient(145deg, #1a1a2e, #16213e);border-radius:16px;width:960px;max-width:96vw;max-height:90vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.12);position:relative;';

    var header = document.createElement('div');
    header.style.cssText = 'padding:24px 28px 20px;position:relative;border-radius:16px 16px 0 0;display:flex;align-items:center;gap:20px;background:linear-gradient(135deg, #4a3880, #8b7ec0);';
    
    var closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position:absolute;top:10px;right:14px;cursor:pointer;font-size:1.1rem;color:rgba(255,255,255,0.85);width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(0,0,0,0.2);';
    closeBtn.onclick = closePlayerDetailV3;
    header.appendChild(closeBtn);

    var av = document.createElement('div');
    av.style.cssText = 'width:80px;height:80px;min-width:80px;border-radius:50%;background:rgba(255,255,255,0.18);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:800;color:#fff;';
    av.textContent = cnGuess.charAt(0);
    header.appendChild(av);

    var ta = document.createElement('div');
    ta.style.cssText = 'flex:1;';
    var nm = document.createElement('div');
    nm.style.cssText = 'font-size:1.4rem;font-weight:700;color:#fff;';
    nm.textContent = cnGuess + (enGuess ? '(' + enGuess + ')' : '');
    ta.appendChild(nm);
    var badge = document.createElement('span');
    badge.style.cssText = 'display:inline-block;padding:3px 14px;border-radius:12px;font-size:0.78rem;font-weight:700;background:rgba(255,255,255,0.2);color:#fff;';
    badge.textContent = '未知位置';
    ta.appendChild(badge);
    header.appendChild(ta);
    card.appendChild(header);

    var infoGrid = document.createElement('div');
    infoGrid.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);padding:14px 20px;';
    var infoItem = document.createElement('div');
    infoItem.style.cssText = 'grid-column:span 3;text-align:center;padding:14px;';
    var infoVal = document.createElement('div');
    infoVal.style.cssText = 'color:#8899aa;font-size:0.8rem;';
    infoVal.textContent = '该球员数据暂未收录';
    infoItem.appendChild(infoVal);
    infoGrid.appendChild(infoItem);
    card.appendChild(infoGrid);

    var hint = document.createElement('div');
    hint.style.cssText = 'padding:6px 24px 10px;font-size:0.72rem;color:#8899aa;font-style:italic;';
    hint.innerHTML = '搜索Key: ' + rawName + '<br>如需完整数据，请告知维护者补充。';
    card.appendChild(hint);

    var footer = document.createElement('div');
    footer.style.cssText = 'padding:10px 24px 14px;text-align:center;font-size:0.58rem;color:rgba(255,255,255,0.25);';
    footer.textContent = '数据来源: Transfermarkt / Sky Sports / FIFA | 2026 美加墨世界杯';
    card.appendChild(footer);

    return card;
}

/**
 * showUnifiedPlayerDetail — 统一球员详情弹窗（V3格式）
 * @param {string} playerKeyOrName - playerDB key 或球员显示名
 * 所有搜索/点击弹窗统一由此方法渲染
 */
window.showUnifiedPlayerDetail = function(playerKeyOrName) {
    // 移除旧弹窗
    var existing = document.querySelector('.player-detail-overlay');
    if (existing) existing.remove();

    var key = playerKeyOrName;
    var pd = null;

    // 尝试从 playerDB 查找
    if (typeof playerDB !== 'undefined') {
        // 1. 精确匹配
        if (playerDB[key]) {
            pd = playerDB[key];
        // 2. 重音不敏感匹配 (Vinícius Júnior → Vinicius Junior)
        } else if (typeof key === 'string') {
            var normKey = key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            for (var k in playerDB) {
                if (!playerDB.hasOwnProperty(k)) continue;
                if (k.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === normKey) {
                    key = k;
                    pd = playerDB[k];
                    break;
                }
            }
        }
        // 3. getPlayerKey 辅助
        if (!pd && typeof getPlayerKey === 'function') {
            var resolved = getPlayerKey(key);
            if (resolved && playerDB[resolved]) {
                key = resolved;
                pd = playerDB[resolved];
            }
        }
        // 增强模糊匹配: 处理来自 squad 的格式化名称 "中文(English)"
        if (!pd && typeof key === 'string') {
            var searchKey = key;
            // 提取括号内的英文名作为主要搜索键
            var enInParen = key.match(/\(([^)]+)\)/);
            var cnPart = '';
            var enPart = '';
            if (enInParen) {
                enPart = enInParen[1].trim();
                cnPart = key.substring(0, key.indexOf('(')).trim();
                // 优先用英文名查
                if (playerDB[enPart]) { key = enPart; pd = playerDB[enPart]; }
            }
            if (!pd) {
                // 尝试通过搜索引擎查找 (O(1) 优先索引 + O(n) 兜底归一化匹配)
                var normQ = normalizeName(enPart || key);
                // 先尝试 _playerDBLCIndex 和 _searchEngine 的预构建索引
                var foundViaIndex = false;
                if (typeof _playerDBLCIndex !== 'undefined' && _playerDBLCIndex) {
                    var lcKey = (enPart || key).toLowerCase();
                    if (_playerDBLCIndex[lcKey]) {
                        key = _playerDBLCIndex[lcKey]; pd = playerDB[key]; foundViaIndex = true;
                    }
                }
                if (!foundViaIndex && typeof _searchEngine !== 'undefined' && _searchEngine.search) {
                    var sr = _searchEngine.search(enPart || key);
                    if (sr && !sr._multiple) { pd = sr; foundViaIndex = true; }
                }
                if (!foundViaIndex) {
                    // 兜底：O(n) 遍历（仅在索引查找失败时）
                    for (var k in playerDB) {
                        if (!playerDB.hasOwnProperty(k)) continue;
                        var p = playerDB[k];
                        var pEn = p.en || '';
                        if (!pEn && p.n && !/[\u4e00-\u9fff]/.test(p.n)) pEn = p.n;
                        if (!pEn && p.nn && !/[\u4e00-\u9fff]/.test(p.nn)) pEn = p.nn;
                        var pNorm = normalizeName(pEn);
                        if (normQ && pNorm === normQ) {
                            key = k; pd = p; break;
                        }
                        // 也检查 n/nn/cn 是否匹配中文部分
                        if (cnPart && (p.n === cnPart || p.cn === cnPart || p.nn === cnPart)) {
                            key = k; pd = p; break;
                        }
                    }
                }
            }
            // 最后尝试: 遍历所有 squadDB 构建临时球员数据
            if (!pd && typeof squadDB !== 'undefined') {
                for (var teamCode in squadDB) {
                    if (!squadDB.hasOwnProperty(teamCode)) continue;
                    var squad = squadDB[teamCode];
                    var categories = ['gk','df','mf','fw'];
                    var foundInSquad = false;
                    for (var ci = 0; ci < categories.length && !foundInSquad; ci++) {
                        var players = squad[categories[ci]] || [];
                        for (var pi = 0; pi < players.length; pi++) {
                            var sp = players[pi];
                            if (!sp.n) continue;
                            // 匹配原始名或格式化后含此名 (统一使用去重音归一化)
                            var spNorm = sp.n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ');
                            var matchNorm = (enPart || key || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ');
                            if (sp.n === enPart || sp.n === key || sp.n === cnPart || spNorm === matchNorm) {
                                // 构建临时 pd 用于展示
                                pd = {
                                    n: sp.n,
                                    en: sp.n,
                                    cn: cnPart || '',
                                    nat: (typeof teamMap !== 'undefined' && teamMap[teamCode]) ? teamMap[teamCode].en : teamCode,
                                    ht: (sp.h && sp.h > 0) ? sp.h + 'cm' : '',
                                    wt: '',
                                    bd: sp.dob || '',
                                    nk: '',
                                    cr: [{ t: sp.c || '', l: '', ps: sp.p || '', mv: sp.v || '', p: '2026', no: '' }],
                                    aw: [],
                                    ij: [],
                                    _fromSquad: true
                                };
                                foundInSquad = true;
                                break;
                            }
                        }
                    }
                    if (foundInSquad) break;
                }
            }
        }
    }

    // 移除旧弹窗（再次确认）
    var existing2 = document.querySelector('.player-detail-overlay');
    if (existing2) existing2.remove();

    // 创建遮罩
    var overlay = document.createElement('div');
    overlay.className = 'player-detail-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.78);z-index:10001;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);animation:fadeInV3 0.2s ease;';
    overlay.onclick = function(e) { if (e.target === overlay) overlay.remove(); };

    var card;
    if (pd) {
        card = buildPlayerDetailDOMV3(pd, key);
    } else {
        card = buildFallbackDetailV3(String(playerKeyOrName));
    }
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // ESC 关闭
    var escHandler = function(e) {
        if (e.key === 'Escape') {
            e.stopImmediatePropagation(); // 阻止全局ESC处理器重复关闭底层弹窗
            var ov = document.querySelector('.player-detail-overlay');
            if (ov) ov.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);

    // 注入动画样式（仅一次）
    if (!document.getElementById('pd-v3-anim-style')) {
        var style = document.createElement('style');
        style.id = 'pd-v3-anim-style';
        style.textContent = '@keyframes fadeInV3{from{opacity:0}to{opacity:1}}@keyframes slideUpV3{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}.player-detail-card{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.15) transparent;}.player-detail-card::-webkit-scrollbar{width:5px;}.player-detail-card::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.15);border-radius:10px;}@media(max-width:480px){.player-detail-card{max-height:92vh!important;border-radius:12px!important}.player-detail-card>div:first-child{padding:14px 12px 12px!important;gap:12px!important;border-radius:12px 12px 0 0!important;flex-wrap:nowrap!important}.player-detail-card>div:first-child>div:first-child{width:56px!important;height:56px!important;min-width:56px!important;font-size:1.5rem!important;border-width:2px!important}.player-detail-card>div:first-child>div:last-child>div:first-child{font-size:0.92rem!important;line-height:1.2!important}.player-detail-card>div:first-child>div:last-child>div:nth-child(2){font-size:0.7rem!important;margin-bottom:3px!important}.player-detail-card>div:first-child>div:last-child>div:nth-child(2)[style*="0.85rem"]{font-size:0.72rem!important;margin-bottom:2px!important}.player-detail-card>div:first-child>div:last-child>div:last-child{gap:6px!important}.player-detail-card>div:first-child>div:last-child>div:last-child>span:first-child{padding:2px 10px!important;font-size:0.68rem!important}.player-detail-card>div:first-child>div:last-child>div:last-child>span:last-child{font-size:0.65rem!important}.player-detail-card>div:first-child>span{top:6px!important;right:8px!important;width:26px!important;height:26px!important;font-size:0.9rem!important}.player-detail-card>div:nth-child(2){padding:8px 4px!important;grid-template-columns:repeat(2,1fr)!important;gap:2px!important}.player-detail-card>div:nth-child(2)>div{padding:10px 6px!important}.player-detail-card>div:nth-child(2)>div>div:first-child{font-size:0.5rem!important;margin-bottom:2px!important;letter-spacing:0!important}.player-detail-card>div:nth-child(2)>div>div:last-child{font-size:0.72rem!important}.player-detail-card>div:nth-child(2)>div>div:last-child[style*="0.95rem"]{font-size:0.78rem!important}.player-detail-card div[style*="padding:14px 24px 8px"],.player-detail-card div[style*="padding:14px 24px 8px;"]{padding:10px 4px 6px!important;font-size:0.7rem!important}.player-detail-card div[style*="padding:6px 24px 10px"]{padding:4px 4px 8px!important;font-size:0.65rem!important}.player-detail-card div[style*="padding:0 24px 10px"]{padding:0 2px 8px!important}.player-detail-card div[style*="padding:4px 24px 10px"]{padding:4px 4px 8px!important}.player-detail-card table{font-size:0.6rem!important}.player-detail-card th{padding:5px 4px!important;font-size:0.52rem!important}.player-detail-card td{padding:5px 4px!important;font-size:0.55rem!important}.player-detail-card ul{padding:4px 8px 8px!important;gap:4px!important}.player-detail-card ul li{padding:4px 8px!important;font-size:0.62rem!important}.player-detail-card>div:last-child{padding:8px 10px 10px!important;font-size:0.5rem!important}}';
        document.head.appendChild(style);
    }
};

function closePlayerDetailV3() {
    var ov = document.querySelector('.player-detail-overlay');
    if (ov) ov.remove();
}
window.closePlayerDetail = closePlayerDetailV3;

// 将 V3 弹窗也挂到 translate 对象下
translate.showDetail = window.showUnifiedPlayerDetail;
translate.closeDetail = closePlayerDetailV3;

// ===== 全局导出补充 (引擎增强) =====
if (typeof window !== 'undefined') {
    // 导出 playerToCN 供 HTML 内联脚本使用
    window.playerToCN = translate.player;
    window.formatStandardName = formatStandardName;
    window.nationToCN = nationToCN;
    window.formatValueWan = formatValueWanV3;
    
    // 构建并导出搜索索引供快速查找
    window.buildSearchIndex = function() {
        _searchEngine.buildIndex();
        // 将内部索引导出为全局变量
        window.__playerSearchIndex = _searchEngine.getIndexes ? _searchEngine.getIndexes() : {};
        console.log('[engine.js] 搜索索引已构建并导出');
    };
    
    // 自动构建搜索索引
    if (typeof playerDB !== 'undefined') {
        try {
            _searchEngine.buildIndex();
            window.__playerSearchIndex = _searchEngine.getIndexes ? _searchEngine.getIndexes() : {};
        } catch(e) {
            console.warn('[engine.js] 搜索索引自动构建失败:', e.message);
        }
    }
}

// ==================== 日期格式化 ====================
function formatPastDate(d) {
    if (!d) return '';
    var parts = d.split('.');
    if (parts.length === 2) parts = [pastWCYear, parts[0], parts[1]];
    if (parts.length === 3) return parts[0] + '年' + parts[1] + '月' + parts[2] + '日';
    return d;
}
