// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
// ============================================
// WORLD CUP BRACKET V14 — 硬编码R32落位 + 淘汰赛比分自动晋级
// R32 16场对阵直接硬编码（来源 matchdata_2026.js），不再依赖小组积分算法
// ============================================
;(function(){
'use strict';

// ── Flag mapping ──
function flagUrl(code){return typeof pastFlag==='function'?pastFlag(code):'https://flagcdn.com/w80/'+(code.toLowerCase())+'.png';}

// ── Team data ──
function buildTeamMap(){
  if(typeof window.teamMap!=='undefined')return window.teamMap;
  var map={};
  if(typeof groupsData!=='undefined'){groupsData.forEach(function(g){g.teams.forEach(function(t){map[t.code]={zh:t.zh||t.nameZh,en:t.en||t.code,code:t.code,group:g.id};});});}
  return map;
}

// ── Standard 6-match pairings for a 4-team group ──
var GROUP_PAIRINGS=[[0,1],[2,3],[0,2],[1,3],[0,3],[1,2]];

// ── R32 Pairings (FIFA Official 2026: M73-M88) ──
var R32_PAIRINGS=[
  {a:{g:'E',p:1},b:{g:'*',p:3,opts:'ABCDF'}},  // 0: M74  E1 vs 3rd(A/B/C/D/F)
  {a:{g:'I',p:1},b:{g:'*',p:3,opts:'CDFGH'}},  // 1: M77  I1 vs 3rd(C/D/F/G/H)
  {a:{g:'A',p:2},b:{g:'B',p:2}},                // 2: M73  A2 vs B2
  {a:{g:'F',p:1},b:{g:'C',p:2}},                // 3: M75  F1 vs C2
  {a:{g:'C',p:1},b:{g:'F',p:2}},                // 4: M76  C1 vs F2
  {a:{g:'E',p:2},b:{g:'I',p:2}},                // 5: M78  E2 vs I2
  {a:{g:'A',p:1},b:{g:'*',p:3,opts:'CEFHI'}},  // 6: M79  A1 vs 3rd(C/E/F/H/I)
  {a:{g:'L',p:1},b:{g:'*',p:3,opts:'EHIJK'}},  // 7: M80  L1 vs 3rd(E/H/I/J/K)
  {a:{g:'K',p:2},b:{g:'L',p:2}},                // 8: M83  K2 vs L2
  {a:{g:'H',p:1},b:{g:'J',p:2}},                // 9: M84  H1 vs J2
  {a:{g:'D',p:1},b:{g:'*',p:3,opts:'BEFIJ'}},  // 10: M81 D1 vs 3rd(B/E/F/I/J)
  {a:{g:'G',p:1},b:{g:'*',p:3,opts:'AEHIJ'}},  // 11: M82 G1 vs 3rd(A/E/H/I/J)
  {a:{g:'J',p:1},b:{g:'H',p:2}},                // 12: M86 J1 vs H2
  {a:{g:'D',p:2},b:{g:'G',p:2}},                // 13: M88 D2 vs G2
  {a:{g:'B',p:1},b:{g:'*',p:3,opts:'EFGIJ'}},  // 14: M85 B1 vs 3rd(E/F/G/I/J)
  {a:{g:'K',p:1},b:{g:'*',p:3,opts:'DEIJL'}}   // 15: M87 K1 vs 3rd(D/E/I/J/L)
];

var _sid=0;
function makeSlot(round,idx,extra){_sid++;var s={id:_sid,round:round,idx:idx,teams:[null,null],winner:null,nextMatchId:null};if(extra)Object.assign(s,extra);return s;}

var R32=R32_PAIRINGS.map(function(p,i){return makeSlot('R32',i,{ga:p.a,gb:p.b,hasThirdPlace:p.b.g==='*'});});
var R16_FEED=[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15]];
var R16=R16_FEED.map(function(pair,i){var s=makeSlot('R16',i,{feeds:[R32[pair[0]].id,R32[pair[1]].id]});R32[pair[0]].nextMatchId=s.id;R32[pair[1]].nextMatchId=s.id;return s;});
var QF_FEED=[[0,1],[2,3],[4,5],[6,7]];
var QF=QF_FEED.map(function(pair,i){var s=makeSlot('QF',i,{feeds:[R16[pair[0]].id,R16[pair[1]].id]});R16[pair[0]].nextMatchId=s.id;R16[pair[1]].nextMatchId=s.id;return s;});
var SF=[];
for(var i=0;i<2;i++){var s=makeSlot('SF',i,{feeds:[QF[i*2].id,QF[i*2+1].id]});QF[i*2].nextMatchId=s.id;QF[i*2+1].nextMatchId=s.id;SF.push(s);}
var TP=makeSlot('TP',0,{isThirdPlace:true,feeds:[SF[0].id,SF[1].id]});
var FIN=makeSlot('FINAL',0,{isFinal:true,feeds:[SF[0].id,SF[1].id]});
SF[0].nextMatchId=FIN.id;SF[1].nextMatchId=FIN.id;
var ALL_SLOTS=R32.concat(R16,QF,SF,[TP,FIN]);
var SLOT_BY_ID={};ALL_SLOTS.forEach(function(s){SLOT_BY_ID[s.id]=s;});

// ── Layout (9 columns, split left/right) ──
var COLUMNS=[
  {id:'R32L',slots:[R32[0],R32[1],R32[2],R32[3],R32[4],R32[5],R32[6],R32[7]],label:'32強',round:'R32'},
  {id:'R16L',slots:[R16[0],R16[1],R16[2],R16[3]],label:'16強',round:'R16'},
  {id:'QFL', slots:[QF[0],QF[1]],label:'8強',round:'QF'},
  {id:'SFL', slots:[SF[0]],label:'4強',round:'SF'},
  {id:'CTR', slots:[FIN,TP],label:'',isCenter:true},
  {id:'SFR', slots:[SF[1]],label:'4強',round:'SF'},
  {id:'QFR', slots:[QF[2],QF[3]],label:'8強',round:'QF'},
  {id:'R16R',slots:[R16[4],R16[5],R16[6],R16[7]],label:'16強',round:'R16'},
  {id:'R32R',slots:[R32[8],R32[9],R32[10],R32[11],R32[12],R32[13],R32[14],R32[15]],label:'32強',round:'R32'}
];

var CARD_H=38;

function getCardW(){
  var w=window.innerWidth;
  if(w<=480)return 68;
  if(w<=768)return 86;
  if(w<=1024)return 106;
  return 126;
}

function getWrap(){return document.getElementById('bkSceneWrap');}

function getSceneWidth(){
  var CARD_W=getCardW();
  var minW=9*CARD_W+20;
  var wrapW=(getWrap()&&getWrap().clientWidth)||window.innerWidth;
  return Math.max(wrapW,minW);
}

function colX(ci){
  var CARD_W=getCardW();
  var W=getSceneWidth();
  var margin=CARD_W/2+10;
  return margin+(W-margin*2)/8*ci;
}

function matchY(ci,idx,total){
  var H=getWrap().clientHeight;
  var top=18,bot=6,usable=H-top-bot;
  if(total<=1)return top+usable/2;
  return top+usable/total*idx+usable/total/2;
}

// ── State ──
var preds={};
function load(){try{var raw=localStorage.getItem('wc2026_bracket_v9');if(raw)preds=JSON.parse(raw);}catch(e){}if(!preds||typeof preds!=='object')preds={};}
function save(){localStorage.setItem('wc2026_bracket_v9',JSON.stringify(preds));}
function gpred(sid){return preds[sid]||null;}
function spred(sid,data){preds[sid]=data;save();}

var cardElements={};

// ═══════════════════════════════════════════
//  GROUP STANDINGS
// ═══════════════════════════════════════════

function getMatchResult(gid, homeIdx, awayIdx) {
  var g = (window.groupsData || []).find(function(g){ return g.id === gid; });
  if (!g) return null;
  var home = g.teams[homeIdx], away = g.teams[awayIdx];
  if (!home || !away) return null;
  var key = '2026|' + gid + '|' + home.code + '|' + away.code;
  var revKey = '2026|' + gid + '|' + away.code + '|' + home.code;

  if (typeof wc2026MatchDetails !== 'undefined') {
    var md = wc2026MatchDetails[key];
    if (md && md.score) return { sh: md.score.sh, sa: md.score.sa, isReal: true };
    md = wc2026MatchDetails[revKey];
    if (md && md.score) return { sh: md.score.sa, sa: md.score.sh, isReal: true };
  }
  if (typeof wc2026AllMatches !== 'undefined') {
    var ma = wc2026AllMatches[key];
    if (ma && ma.score) return { sh: ma.score.sh, sa: ma.score.sa, isReal: true };
    ma = wc2026AllMatches[revKey];
    if (ma && ma.score) return { sh: ma.score.sa, sa: ma.score.sh, isReal: true };
  }
  try {
    var gPreds = JSON.parse(localStorage.getItem('wc2026_groups') || '{}');
    var mid = gid + '_' + homeIdx + '_' + awayIdx;
    var revMid = gid + '_' + awayIdx + '_' + homeIdx;
    var pred = gPreds[mid] || gPreds[revMid];
    if (pred && pred.sh != null && pred.sa != null) {
      return { sh: Number(pred.sh), sa: Number(pred.sa), isReal: false };
    }
  } catch(e) {}
  return null;
}

function computeGroupStandings(gid) {
  var g = (window.groupsData || []).find(function(g){ return g.id === gid; });
  if (!g) return null;
  var teams = g.teams;
  var st = {};
  teams.forEach(function(t) { st[t.code] = { team: t, pts: 0, gf: 0, ga: 0, gd: 0 }; });
  var complete = true;
  GROUP_PAIRINGS.forEach(function(pair) {
    var hi = pair[0], ai = pair[1];
    var result = getMatchResult(gid, hi, ai);
    if (result) {
      st[teams[hi].code].gf += result.sh;
      st[teams[hi].code].ga += result.sa;
      st[teams[ai].code].gf += result.sa;
      st[teams[ai].code].ga += result.sh;
      if (result.sh > result.sa) st[teams[hi].code].pts += 3;
      else if (result.sa > result.sh) st[teams[ai].code].pts += 3;
      else { st[teams[hi].code].pts += 1; st[teams[ai].code].pts += 1; }
    } else { complete = false; }
  });
  if (!complete) return null;
  var arr = Object.values(st);
  arr.forEach(function(s) { s.gd = s.gf - s.ga; });
  arr.sort(function(a, b) { return b.pts - a.pts || b.gd - a.gd || b.gf - a.gf; });
  return arr;
}

function getAllThirdPlaceTeams(allStandings) {
  var thirds = [];
  'ABCDEFGHIJKL'.split('').forEach(function(gid) {
    var s = allStandings[gid];
    if (!s) return;
    thirds.push({ group: gid, team: s[2].team, pts: s[2].pts, gd: s[2].gd, gf: s[2].gf });
  });
  if (thirds.length < 12) return null;
  thirds.sort(function(a, b) { return b.pts - a.pts || b.gd - a.gd || b.gf - a.gf; });
  return thirds;
}

// ═══════════════════════════════════════════
//  FIFA ANNEX C — 小组第三官方分配表 (495种组合)
//  Source: FIFA World Cup 26 Regulations, Annex C, pp. 80-97
//  列顺序 A,B,D,E,G,I,K,L → 对应胜者组 → R32 slot 6,14,10,0,11,1,15,7
// ═══════════════════════════════════════════
var ANNEX_C_WINNERS = ["A","B","D","E","G","I","K","L"];
var ANNEX_C_ROWS = [
 "EJIFHGLK","HGIDJFLK","EJIDHGLK","EJIDHFLK","EGIDJFLK","EGJDHFLK","EGIDHFLK","EGJDHFLI","EGJDHFIK",
 "HGICJFLK","EJICHGLK","EJICHFLK","EGICJFLK","EGJCHFLK","EGICHFLK","EGJCHFLI","EGJCHFIK","HGICJDLK",
 "CJIDHFLK","CGIDJFLK","CGJDHFLK","CGIDHFLK","CGJDHFLI","CGJDHFIK","EJICHDLK","EGICJDLK","EGJCHDLK",
 "EGICHDLK","EGJCHDLI","EGJCHDIK","CJEDIFLK","CJEDHFLK","CEIDHFLK","CJEDHFLI","CJEDHFIK","CGEDJFLK",
 "CGEDIFLK","CGEDJFLI","CGEDJFIK","CGEDHFLK","CGJDHFLE","CGJDHFEK","CGEDHFLI","CGEDHFIK","CGJDHFEI",
 "HJBFIGLK","EJIBHGLK","EJBFIHLK","EJBFIGLK","EJBFHGLK","EGBFIHLK","EJBFHGLI","EJBFHGIK","HJBDIGLK",
 "HJBDIFLK","IGBDJFLK","HGBDJFLK","HGBDIFLK","HGBDJFLI","HGBDJFIK","EJBDIHLK","EJBDIGLK","EJBDHGLK",
 "EGBDIHLK","EJBDHGLI","EJBDHGIK","EJBDIFLK","EJBDHFLK","EIBDHFLK","EJBDHFLI","EJBDHFIK","EGBDJFLK",
 "EGBDIFLK","EGBDJFLI","EGBDJFIK","EGBDHFLK","HGBDJFLE","HGBDJFEK","EGBDHFLI","EGBDHFIK","HGBDJFEI",
 "HJBCIGLK","HJBCIFLK","IGBCJFLK","HGBCJFLK","HGBCIFLK","HGBCJFLI","HGBCJFIK","EJBCIHLK","EJBCIGLK",
 "EJBCHGLK","EGBCIHLK","EJBCHGLI","EJBCHGIK","EJBCIFLK","EJBCHFLK","EIBCHFLK","EJBCHFLI","EJBCHFIK",
 "EGBCJFLK","EGBCIFLK","EGBCJFLI","EGBCJFIK","EGBCHFLK","HGBCJFLE","HGBCJFEK","EGBCHFLI","EGBCHFIK",
 "HGBCJFEI","HJBCIDLK","IGBCJDLK","HGBCJDLK","HGBCIDLK","HGBCJDLI","HGBCJDIK","CJBDIFLK","CJBDHFLK",
 "CIBDHFLK","CJBDHFLI","CJBDHFIK","CGBDJFLK","CGBDIFLK","CGBDJFLI","CGBDJFIK","CGBDHFLK","CGBDHFLJ",
 "HGBCJFDK","CGBDHFLI","CGBDHFIK","HGBCJFDI","EJBCIDLK","EJBCHDLK","EIBCHDLK","EJBCHDLI","EJBCHDIK",
 "EGBCJDLK","EGBCIDLK","EGBCJDLI","EGBCJDIK","EGBCHDLK","HGBCJDLE","HGBCJDEK","EGBCHDLI","EGBCHDIK",
 "HGBCJDEI","CJBDEFLK","CEBDIFLK","CJBDEFLI","CJBDEFIK","CEBDHFLK","CJBDHFLE","CJBDHFEK","CEBDHFLI",
 "CEBDHFIK","CJBDHFEI","CGBDEFLK","CGBDJFLE","CGBDJFEK","CGBDEFLI","CGBDEFIK","CGBDJFEI","CGBDHFLE",
 "CGBDHFEK","HGBCJFDE","CGBDHFEI","HJIFAGLK","EJIAHGLK","EJIFAHLK","EJIFAGLK","EGJFAHLK","EGIFAHLK",
 "EGJFAHLI","EGJFAHIK","HJIDAGLK","HJIDAFLK","IGJDAFLK","HGJDAFLK","HGIDAFLK","HGJDAFLI","HGJDAFIK",
 "EJIDAHLK","EJIDAGLK","EGJDAHLK","EGIDAHLK","EGJDAHLI","EGJDAHIK","EJIDAFLK","HJEDAFLK","HEIDAFLK",
 "HJEDAFLI","HJEDAFIK","EGJDAFLK","EGIDAFLK","EGJDAFLI","EGJDAFIK","HGEDAFLK","HGJDAFLE","HGJDAFEK",
 "HGEDAFLI","HGEDAFIK","HGJDAFEI","HJICAGLK","HJICAFLK","IGJCAFLK","HGJCAFLK","HGICAFLK","HGJCAFLI",
 "HGJCAFIK","EJICAHLK","EJICAGLK","EGJCAHLK","EGICAHLK","EGJCAHLI","EGJCAHIK","EJICAFLK","HJECAFLK",
 "HEICAFLK","HJECAFLI","HJECAFIK","EGJCAFLK","EGICAFLK","EGJCAFLI","EGJCAFIK","HGECAFLK","HGJCAFLE",
 "HGJCAFEK","HGECAFLI","HGECAFIK","HGJCAFEI","HJICADLK","IGJCADLK","HGJCADLK","HGICADLK","HGJCADLI",
 "HGJCADIK","CJIDAFLK","HJFCADLK","HFICADLK","HJFCADLI","HJFCADIK","CGJDAFLK","CGIDAFLK","CGJDAFLI",
 "CGJDAFIK","HGFCADLK","CGJDAFLH","HGJCAFDK","HGFCADLI","HGFCADIK","HGJCAFDI","EJICADLK","HJECADLK",
 "HEICADLK","HJECADLI","HJECADIK","EGJCADLK","EGICADLK","EGJCADLI","EGJCADIK","HGECADLK","HGJCADLE",
 "HGJCADEK","HGECADLI","HGECADIK","HGJCADEI","CJEDAFLK","CEIDAFLK","CJEDAFLI","CJEDAFIK","HEFCADLK",
 "HJFCADLE","HJECAFDK","HEFCADLI","HEFCADIK","HJECAFDI","CGEDAFLK","CGJDAFLE","CGJDAFEK","CGEDAFLI",
 "CGEDAFIK","CGJDAFEI","HGFCADLE","HGECAFDK","HGJCAFDE","HGECAFDI","HJBAIGLK","HJBAIFLK","IJBFAGLK",
 "HJBFAGLK","HGBAIFLK","HJBFAGLI","HJBFAGIK","EJBAIHLK","EJBAIGLK","EJBAHGLK","EGBAIHLK","EJBAHGLI",
 "EJBAHGIK","EJBAIFLK","EJBFAHLK","EIBFAHLK","EJBFAHLI","EJBFAHIK","EJBFAGLK","EGBAIFLK","EJBFAGLI",
 "EJBFAGIK","EGBFAHLK","HJBFAGLE","HJBFAGEK","EGBFAHLI","EGBFAHIK","HJBFAGEI","IJBDAHLK","IJBDAGLK",
 "HJBDAGLK","IGBDAHLK","HJBDAGLI","HJBDAGIK","IJBDAFLK","HJBDAFLK","HIBDAFLK","HJBDAFLI","HJBDAFIK",
 "FJBDAGLK","IGBDAFLK","FJBDAGLI","FJBDAGIK","HGBDAFLK","HGBDAFLJ","HGBDAFJK","HGBDAFLI","HGBDAFIK",
 "HGBDAFIJ","EJBAIDLK","EJBDAHLK","EIBDAHLK","EJBDAHLI","EJBDAHIK","EJBDAGLK","EGBAIDLK","EJBDAGLI",
 "EJBDAGIK","EGBDAHLK","HJBDAGLE","HJBDAGEK","EGBDAHLI","EGBDAHIK","HJBDAGEI","EJBDAFLK","EIBDAFLK",
 "EJBDAFLI","EJBDAFIK","HEBDAFLK","HJBDAFLE","HJBDAFEK","HEBDAFLI","HEBDAFIK","HJBDAFEI","EGBDAFLK",
 "EGBDAFLJ","EGBDAFJK","EGBDAFLI","EGBDAFIK","EGBDAFIJ","HGBDAFLE","HGBDAFEK","HGBDAFEJ","HGBDAFEI",
 "IJBCAHLK","IJBCAGLK","HJBCAGLK","IGBCAHLK","HJBCAGLI","HJBCAGIK","IJBCAFLK","HJBCAFLK","HIBCAFLK",
 "HJBCAFLI","HJBCAFIK","CJBFAGLK","IGBCAFLK","CJBFAGLI","CJBFAGIK","HGBCAFLK","HGBCAFLJ","HGBCAFJK",
 "HGBCAFLI","HGBCAFIK","HGBCAFIJ","EJBAICLK","EJBCAHLK","EIBCAHLK","EJBCAHLI","EJBCAHIK","EJBCAGLK",
 "EGBAICLK","EJBCAGLI","EJBCAGIK","EGBCAHLK","HJBCAGLE","HJBCAGEK","EGBCAHLI","EGBCAHIK","HJBCAGEI",
 "EJBCAFLK","EIBCAFLK","EJBCAFLI","EJBCAFIK","HEBCAFLK","HJBCAFLE","HJBCAFEK","HEBCAFLI","HEBCAFIK",
 "HJBCAFEI","EGBCAFLK","EGBCAFLJ","EGBCAFJK","EGBCAFLI","EGBCAFIK","EGBCAFIJ","HGBCAFLE","HGBCAFEK",
 "HGBCAFEJ","HGBCAFEI","IJBCADLK","HJBCADLK","HIBCADLK","HJBCADLI","HJBCADIK","CJBDAGLK","IGBCADLK",
 "CJBDAGLI","CJBDAGIK","HGBCADLK","HGBCADLJ","HGBCADJK","HGBCADLI","HGBCADIK","HGBCADIJ","CJBDAFLK",
 "CIBDAFLK","CJBDAFLI","CJBDAFIK","HFBCADLK","CJBDAFLH","HJBCAFDK","HFBCADLI","HFBCADIK","HJBCAFDI",
 "CGBDAFLK","CGBDAFLJ","CGBDAFJK","CGBDAFLI","CGBDAFIK","CGBDAFIJ","CGBDAFLH","HGBCAFDK","HGBCAFDJ",
 "HGBCAFDI","EJBCADLK","EIBCADLK","EJBCADLI","EJBCADIK","HEBCADLK","HJBCADLE","HJBCADEK","HEBCADLI",
 "HEBCADIK","HJBCADEI","EGBCADLK","EGBCADLJ","EGBCADJK","EGBCADLI","EGBCADIK","EGBCADIJ","HGBCADLE",
 "HGBCADEK","HGBCADEJ","HGBCADEI","CEBDAFLK","CJBDAFLE","CJBDAFEK","CEBDAFLI","CEBDAFIK","CJBDAFEI",
 "HFBCADLE","HEBCAFDK","HJBCAFDE","HEBCAFDI","CGBDAFLE","CGBDAFEK","CGBDAFEJ","CGBDAFEI","HGBCAFDE"
];
// 构建快速查找 Map: 排序后的出线组 → 分配行
var ANNEX_C_MAP = {};
ANNEX_C_ROWS.forEach(function(row) {
  var sorted = row.split('').sort().join('');
  ANNEX_C_MAP[sorted] = row;
});
// ANNEX_C_WINNERS 列顺序 → R32 slot 索引
// A→M79(s6), B→M85(s14), D→M81(s10), E→M74(s0), G→M82(s11), I→M77(s1), K→M87(s15), L→M80(s7)
var ANNEX_C_WINNER_TO_SLOT = { A:6, B:14, D:10, E:0, G:11, I:1, K:15, L:7 };

function allocateThirdPlace(rankedThirds) {
  // 仅前8名小组第三晋级 (2026赛制: 12组取8)
  var top8 = rankedThirds.slice(0, 8);
  var qualifying = top8.map(function(t){ return t.group; }).sort().join('');
  var row = ANNEX_C_MAP[qualifying];
  if (!row) { console.warn('Annex C lookup failed for: '+qualifying); return null; }
  var assigned = {};
  for (var i = 0; i < 8; i++) {
    var winnerGroup = ANNEX_C_WINNERS[i];
    var thirdGroup = row[i];
    var slotIdx = ANNEX_C_WINNER_TO_SLOT[winnerGroup];
    var thirdTeam = null;
    for (var j = 0; j < top8.length; j++) {
      if (top8[j].group === thirdGroup) { thirdTeam = top8[j]; break; }
    }
    if (thirdTeam) assigned[slotIdx] = thirdTeam;
  }
  return assigned;
}

// ═══════════════════════════════════════════
//  R32 HARDCODED TEAMS (V14)
//  依据 matchdata_2026.js 实际淘汰赛对阵，直接硬编码落位
//  槽位顺序 = bracket_overlay R32_PAIRINGS (M73-M88)
// ═══════════════════════════════════════════
var HARDCODED_R32 = [
  ['GER','PAR'],  // 0: M74  E1 vs 3rd
  ['FRA','SWE'],  // 1: M77  I1 vs 3rd
  ['RSA','CAN'],  // 2: M73  A2 vs B2
  ['NED','MAR'],  // 3: M75  F1 vs C2
  ['BRA','JPN'],  // 4: M76  C1 vs F2
  ['CIV','NOR'],  // 5: M78  E2 vs I2
  ['MEX','ECU'],  // 6: M79  A1 vs 3rd
  ['ENG','COD'],  // 7: M80  L1 vs 3rd
  ['POR','CRO'],  // 8: M83  K2 vs L2
  ['ESP','AUT'],  // 9: M84  H1 vs J2
  ['USA','BIH'],  // 10: M81 D1 vs 3rd
  ['BEL','SEN'],  // 11: M82 G1 vs 3rd
  ['ARG','CPV'],  // 12: M86 J1 vs H2
  ['AUS','EGY'],  // 13: M88 D2 vs G2
  ['SUI','ALG'],  // 14: M85 B1 vs 3rd
  ['COL','GHA']   // 15: M87 K1 vs 3rd
];

// ═══════════════════════════════════════════
//  AUTO-FILL (V14: 硬编码R32 + 自动晋级)
// ═══════════════════════════════════════════

function resolveTeamByCode(code) {
  var map = buildTeamMap();
  var t = map[code];
  if (t) return { zh: t.zh, en: t.en, code: t.code };
  // fallback: 无teamMap时用code自身
  return { zh: code, en: code, code: code };
}

function autoFillBracket() {
  var changed = false;

  R32.forEach(function(slot, i) {
    var hard = HARDCODED_R32[i];
    if (!hard) return;
    var teamA = resolveTeamByCode(hard[0]);
    var teamB = resolveTeamByCode(hard[1]);

    var p = gpred(slot.id);
    if (!p) { p = { teams: [null, null], winner: null }; spred(slot.id, p); }

    var updateNeeded = false;
    if (!p.teams[0] || p.teams[0].code !== teamA.code) {
      p.teams[0] = teamA; updateNeeded = true;
    }
    if (!p.teams[1] || p.teams[1].code !== teamB.code) {
      p.teams[1] = teamB; updateNeeded = true;
    }

    if (updateNeeded) {
      clearDownstream(slot.id);
      p.winner = null;
      changed = true;
    }

    // V14: 硬编码落位，全部解锁（不再显示"待角逐"）
    p._lockedA = false;
    p._lockedB = false;
  });

  if (changed) save();

  // V13: 自动从淘汰赛实际比分推进晋级路线
  autoAdvanceKnockoutResults();
}

// ═══════════════════════════════════════════
//  AUTO-ADVANCE FROM MATCH RESULTS (V13)
//  读取 wc2026AllMatches/wc2026MatchDetails 中淘汰赛实际比分
//  自动判定胜者并传播到下游轮次
// ═══════════════════════════════════════════

function getKnockoutMatchResult(stage, teamA, teamB) {
  if (!teamA || !teamB) return null;
  if (!teamA.code || !teamB.code) return null;
  var key1 = '2026|' + stage + '|' + teamA.code + '|' + teamB.code;
  var key2 = '2026|' + stage + '|' + teamB.code + '|' + teamA.code;

  // 优先 wc2026MatchDetails（含进球明细），其次 wc2026AllMatches
  if (typeof wc2026MatchDetails !== 'undefined') {
    var md = wc2026MatchDetails[key1];
    if (md && md.score && md.score.sh != null && md.score.sa != null) {
      return { sh: Number(md.score.sh), sa: Number(md.score.sa), key: key1, source: 'details' };
    }
    md = wc2026MatchDetails[key2];
    if (md && md.score && md.score.sh != null && md.score.sa != null) {
      return { sh: Number(md.score.sa), sa: Number(md.score.sh), key: key2, source: 'details' };
    }
  }
  if (typeof wc2026AllMatches !== 'undefined') {
    var ma = wc2026AllMatches[key1];
    if (ma && ma.score && ma.score.sh != null && ma.score.sa != null) {
      return { sh: Number(ma.score.sh), sa: Number(ma.score.sa), key: key1, source: 'allMatches' };
    }
    ma = wc2026AllMatches[key2];
    if (ma && ma.score && ma.score.sh != null && ma.score.sa != null) {
      return { sh: Number(ma.score.sa), sa: Number(ma.score.sh), key: key2, source: 'allMatches' };
    }
  }
  return null;
}

function autoAdvanceKnockoutResults() {
  var changed = false;
  // 按轮次排序：R32 → R16 → QF → SF → TP → FINAL
  var orderedSlots = R32.concat(R16, QF, SF, [TP, FIN]);
  var processed = {};

  orderedSlots.forEach(function(slot) {
    // 季军赛特殊处理：通过 SF 败者自动填充，不从 matchdata 读取
    if (slot.isThirdPlace) return;

    var p = gpred(slot.id);
    if (!p) return;
    if (!p.teams[0] || !p.teams[1]) return; // 双方未齐
    if (p.winner !== null && p.winner !== undefined) return; // 已有胜者，跳过

    var result = getKnockoutMatchResult(slot.round, p.teams[0], p.teams[1]);
    if (!result) return;

    // 判断胜者
    if (result.sh > result.sa) {
      p.winner = 0;
    } else if (result.sa > result.sh) {
      p.winner = 1;
    } else {
      return; // 平局 → 需点球数据，暂不判定
    }

    console.log('Bracket: ' + slot.round + ' auto-advance ' +
      p.teams[p.winner].code + ' (' + result.sh + '-' + result.sa + ') via ' + result.source);

    changed = true;
    processed[slot.id] = true;
  });

  if (changed) {
    save();
    // 按轮次级联传播
    orderedSlots.forEach(function(slot) {
      if (processed[slot.id]) propagate(slot.id);
    });
  }
}

// ═══════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════

function createCardEl(mid, slot, locked){
  var el = document.createElement('div');
  el.className = 'bk-card' + (locked ? ' locked' : '');
  el.setAttribute('data-match', mid);
  if (slot) el.setAttribute('data-slot', slot);
  if (!locked) {
    el.addEventListener('click', function(){ onCardClick(this.getAttribute('data-match'), this.getAttribute('data-slot') || '1'); });
  }
  return el;
}

function updateCardEl(el, slot, isLocked){
  var mid = el.getAttribute('data-match');
  var p = gpred(parseInt(mid));
  var pos = slot === '1' ? 0 : 1;
  var team = p ? p.teams[pos] : null;
  var isWinner = p && p.winner === pos;
  var extraClasses = '';
  if (el.classList.contains('final-card')) extraClasses += ' final-card';
  if (el.classList.contains('tp-card')) extraClasses += ' tp-card';

  el.className = 'bk-card' +
    (team ? ' filled' : '') +
    (isWinner ? ' winner' : '') +
    (isLocked ? ' locked' : '') +
    extraClasses;

  if (team) {
    var img = document.createElement('img');
    img.className = 'flag';
    img.src = flagUrl(team.code);
    img.alt = '';
    img.loading = 'lazy';
    img.onerror = function(){ this.style.display = 'none'; };
    var info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = '<span class="name-zh">' + team.zh + '</span><span class="name-en">' + team.en + '</span>';
    el.innerHTML = '';
    el.appendChild(img);
    el.appendChild(info);
    el.style.cursor = 'pointer';
  } else if (isLocked) {
    el.innerHTML = '<span class="placeholder locked-text">待角逐</span>';
    el.style.cursor = 'not-allowed';
  } else {
    el.innerHTML = '<span class="placeholder">—</span>';
    el.style.cursor = 'pointer';
  }
}

function renderAll(){
  var layer = document.getElementById('bkCardsLayer');
  if (!layer) return;
  layer.innerHTML = '';
  cardElements = {};
  var scene = document.getElementById('bkScene');
  var oldHeaders = scene.querySelectorAll('.bk-col-header');
  for (var i = 0; i < oldHeaders.length; i++) { oldHeaders[i].remove(); }

  var CARD_W = getCardW();
  var sceneW = getSceneWidth();
  var wrapW = (getWrap() && getWrap().clientWidth) || window.innerWidth;
  if (sceneW > wrapW) {
    scene.style.minWidth = sceneW + 'px';
    scene.style.width = sceneW + 'px';
  } else {
    scene.style.minWidth = '';
    scene.style.width = '';
  }

  var frag = document.createDocumentFragment();
  var gap = Math.max(28, Math.round(CARD_W * 0.31));

  COLUMNS.forEach(function(col, ci){
    var x = colX(ci);
    if (col.label) {
      var hdr = document.createElement('div');
      hdr.className = 'bk-col-header' + (col.isCenter ? ' gold' : '');
      hdr.style.left = x + 'px';
      hdr.style.top = '6px';
      hdr.textContent = col.isCenter ? '🏆 決賽 / 🥉 季軍賽' : col.label;
      scene.appendChild(hdr);
    }
    col.slots.forEach(function(slot, idx){
      var baseY = matchY(ci, idx, col.slots.length);
      var p = gpred(slot.id);

      if (slot.round === 'R32') {
        // V14: 硬编码后全部解锁；fallback 处理旧缓存
        var lockedA = p ? !!p._lockedA : false;
        var lockedB = p ? !!p._lockedB : false;
        var y1 = baseY - gap / 2, y2 = baseY + gap / 2;
        [0, 1].forEach(function(pos){
          var isLocked = pos === 0 ? lockedA : lockedB;
          var el = createCardEl(slot.id, String(pos + 1), isLocked);
          el.style.left = x + 'px';
          el.style.top = (pos === 0 ? y1 : y2) + 'px';
          updateCardEl(el, String(pos + 1), isLocked);
          frag.appendChild(el);
          cardElements[slot.id + '_' + (pos + 1)] = el;
        });
      } else if (slot.isThirdPlace) {
        [0, 1].forEach(function(pos){
          var el = createCardEl(slot.id, String(pos + 1), false);
          el.classList.add('tp-card');
          el.style.left = x + 'px';
          el.style.top = (baseY + (pos === 0 ? -gap / 2 : gap / 2)) + 'px';
          updateCardEl(el, String(pos + 1), false);
          frag.appendChild(el);
          cardElements[slot.id + '_' + (pos + 1)] = el;
          if (pos === 0) cardElements[slot.id] = el;
        });
      } else if (slot.isFinal) {
        [0, 1].forEach(function(pos){
          var el = createCardEl(slot.id, String(pos + 1), false);
          el.classList.add('final-card');
          el.style.left = x + 'px';
          el.style.top = (baseY + (pos === 0 ? -gap / 2 : gap / 2)) + 'px';
          updateCardEl(el, String(pos + 1), false);
          frag.appendChild(el);
          cardElements[slot.id + '_' + (pos + 1)] = el;
          if (pos === 0) cardElements[slot.id] = el;
        });
      } else {
        [0, 1].forEach(function(pos){
          var el = createCardEl(slot.id, String(pos + 1), false);
          el.style.left = x + 'px';
          el.style.top = (baseY + (pos === 0 ? -gap / 2 : gap / 2)) + 'px';
          updateCardEl(el, String(pos + 1), false);
          frag.appendChild(el);
          cardElements[slot.id + '_' + (pos + 1)] = el;
          if (pos === 0) cardElements[slot.id] = el;
        });
      }
    });
  });

  layer.appendChild(frag);

  // Final / Third Place labels
  var oldLabel = document.getElementById('bkFinalLabel'); if (oldLabel) oldLabel.remove();
  var oldTpLabel = document.getElementById('bkThirdLabel'); if (oldTpLabel) oldTpLabel.remove();
  var ctrCol = COLUMNS[4];
  if (ctrCol) {
    var cx = colX(4);
    var finY = matchY(4, 0, 2) - 85;
    var finLabel = document.createElement('div');
    finLabel.id = 'bkFinalLabel'; finLabel.className = 'bk-final-label';
    finLabel.style.left = cx + 'px'; finLabel.style.top = finY + 'px';
    finLabel.style.transform = 'translateX(-50%)';
    finLabel.innerHTML = '总决赛<span class="bk-label-en">FINAL</span>';
    scene.appendChild(finLabel);
    var tpY = matchY(4, 1, 2) - 85;
    var tpLabel = document.createElement('div');
    tpLabel.id = 'bkThirdLabel'; tpLabel.className = 'bk-final-label third';
    tpLabel.style.left = cx + 'px'; tpLabel.style.top = tpY + 'px';
    tpLabel.style.transform = 'translateX(-50%)';
    tpLabel.innerHTML = '季军赛<span class="bk-label-en">THIRD PLACE</span>';
    scene.appendChild(tpLabel);
  }
  updateProgress(); drawConnectors(); renderGlow();
}

function renderGlow(){
  var scene = document.getElementById('bkScene');
  if (scene) {
    scene.style.backgroundImage = [
      'radial-gradient(ellipse 65% 92% at 50% 50%, rgba(240,208,112,0.68) 0%, rgba(200,162,72,0.32) 32%, rgba(180,140,60,0.10) 58%, transparent 78%)',
      'radial-gradient(circle 48% at 52% 48%, rgba(245,215,120,0.48) 0%, rgba(220,180,90,0.20) 40%, transparent 68%)',
      'radial-gradient(circle 28% at 48% 50%, rgba(210,170,80,0.25) 0%, rgba(160,120,50,0.08) 50%, transparent 70%)'
    ].join(', ');
    scene.style.backgroundColor = 'transparent';
  }
  var gl = document.getElementById('bkGlowLayer');
  if (gl) { gl.style.backgroundImage = ''; gl.style.backgroundColor = 'transparent'; }
}

// ═══════════════════════════════════════════
//  SVG CONNECTORS
// ═══════════════════════════════════════════

function drawConnectors(){
  var svg = document.getElementById('bkSVG'); if (!svg) return;
  var CARD_W = getCardW();
  var W = getSceneWidth(), H = (getWrap() && getWrap().clientHeight) || 600;
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.style.width = W + 'px';
  svg.style.height = H + 'px';

  var halfW = CARD_W / 2;
  var paths = '';

  var CONN_MAP = {};
  ALL_SLOTS.forEach(function(s){ if (s.feeds) { s.feeds.forEach(function(fid, fi){ CONN_MAP[fid] = { tid: s.id, ts: fi }; }); } });

  Object.keys(CONN_MAP).forEach(function(srcIdStr){
    var srcSlotId = parseInt(srcIdStr);
    var conn = CONN_MAP[srcSlotId];
    var tgtSlotId = conn.tid;
    var pred = gpred(srcSlotId);

    var srcKey;
    if (pred && pred.winner !== null && pred.winner !== undefined) {
      srcKey = srcSlotId + '_' + (pred.winner + 1);
    } else {
      srcKey = srcSlotId + '_' + (conn.ts + 1);
    }

    var srcEl = cardElements[srcKey];
    var tgtEl = cardElements[tgtSlotId + '_' + (conn.ts + 1)] || cardElements[tgtSlotId + '_1'] || cardElements[tgtSlotId];
    if (!srcEl || !tgtEl) return;

    var sx = parseFloat(srcEl.style.left);
    var sy = parseFloat(srcEl.style.top);
    var tx = parseFloat(tgtEl.style.left);
    var ty = parseFloat(tgtEl.style.top);

    var x1 = sx + halfW, x2 = tx - halfW, mx = (x1 + x2) / 2;
    var highlight = pred && pred.winner !== null && pred.winner !== undefined;
    paths += '<path class="' + (highlight ? 'conn-winner' : '') + '" d="M' + x1 + ',' + sy + ' L' + mx + ',' + sy + ' L' + mx + ',' + ty + ' L' + x2 + ',' + ty + '"/>\n';
  });

  // SF losers → 3rd place
  SF.forEach(function(sf, sfi){
    var p = gpred(sf.id); if (!p || p.winner === null || p.winner === undefined) return;
    var loserPos = p.winner === 0 ? 1 : 0; if (!p.teams[loserPos]) return;
    var loserKey = sf.id + '_' + (loserPos + 1);
    var srcEl = cardElements[loserKey]; if (!srcEl) return;
    var tgtEl = cardElements[TP.id + '_' + (sfi + 1)] || cardElements[TP.id]; if (!tgtEl) return;
    var sx = parseFloat(srcEl.style.left), sy = parseFloat(srcEl.style.top);
    var tx = parseFloat(tgtEl.style.left), ty = parseFloat(tgtEl.style.top);
    var x1 = sx + halfW, x2 = tx - halfW, mx = (x1 + x2) / 2;
    paths += '<path d="M' + x1 + ',' + sy + ' L' + mx + ',' + sy + ' L' + mx + ',' + ty + ' L' + x2 + ',' + ty + '" style="stroke-dasharray:3,3;opacity:0.3;stroke-width:0.8"/>\n';
  });

  svg.innerHTML = '<g>' + paths + '</g>';
}

// ═══════════════════════════════════════════
//  PROGRESS
// ═══════════════════════════════════════════

function updateProgress(){
  var filled = 0, total = 0;
  ALL_SLOTS.forEach(function(s){
    if (s.isThirdPlace) return;
    total += 2;
    var p = gpred(s.id);
    if (p) {
      if (p.teams[0]) filled++;
      if (p.teams[1]) filled++;
    }
  });
  var pct = total > 0 ? Math.round(filled / total * 100) : 0;
  var pf = document.getElementById('bkProgressFill'); if (pf) pf.style.width = pct + '%';
  var pt = document.getElementById('bkProgressText'); if (pt) pt.textContent = filled + ' / ' + total;
}

// ═══════════════════════════════════════════
//  INTERACTION
// ═══════════════════════════════════════════

function onCardClick(matchId, slot){
  var sid = parseInt(matchId);
  var p = gpred(sid);
  var slotObj = SLOT_BY_ID[sid];
  if (!slotObj) return;
  var pos = parseInt(slot) - 1;

  if (slotObj.round === 'R32') {
    var isLocked = pos === 0 ? !!p._lockedA : !!p._lockedB;
    if (isLocked) return;
  }

  if (!p || !p.teams[pos]) return;

  if (p.winner === pos) {
    p.winner = null;
    save();
    clearDownstream(sid);
    renderAll();
    return;
  }

  p.winner = pos;
  save();
  clearDownstream(sid);
  propagate(sid);
  renderAll();
}

function propagate(slotId){
  var slot = SLOT_BY_ID[slotId]; if (!slot) return;
  var p = gpred(slotId);
  if (!p || p.winner === null || p.winner === undefined) return;
  var winnerTeam = p.teams[p.winner]; if (!winnerTeam) return;

  if (slot.nextMatchId) {
    var ns = SLOT_BY_ID[slot.nextMatchId]; if (!ns) return;
    var np = gpred(slot.nextMatchId);
    if (!np) { np = { teams: [null, null], winner: null }; spred(slot.nextMatchId, np); }
    var fi = ns.feeds ? ns.feeds.indexOf(slotId) : 0;
    np.teams[fi >= 0 ? fi : 0] = winnerTeam;
    np.winner = null;
    save();
    propagate(slot.nextMatchId);
  }
  if (slot.round === 'SF' && !slot.isThirdPlace) {
    var loserPos = p.winner === 0 ? 1 : 0;
    var loserTeam = p.teams[loserPos];
    if (loserTeam) {
      var tpp = gpred(TP.id);
      if (!tpp) { tpp = { teams: [null, null], winner: null }; spred(TP.id, tpp); }
      var tfi = TP.feeds ? TP.feeds.indexOf(slotId) : -1;
      tpp.teams[tfi >= 0 ? tfi : 0] = loserTeam;
      tpp.winner = null;
      save();
    }
  }
}

function clearDownstream(slotId){
  var slot = SLOT_BY_ID[slotId]; if (!slot || !slot.nextMatchId) return;
  var ns = SLOT_BY_ID[slot.nextMatchId]; if (!ns) return;
  var fi = ns.feeds ? ns.feeds.indexOf(slotId) : -1;
  var np = gpred(slot.nextMatchId);
  if (np) { np.teams[fi >= 0 ? fi : 0] = null; np.winner = null; save(); }
  clearDownstream(slot.nextMatchId);
}

// ═══════════════════════════════════════════
//  PUBLIC API
// ═══════════════════════════════════════════

window.Bracket = window.Bracket || {};
// 暴露 Annex C 全局查询供 groupsdata.js 等模块使用
window.Bracket.allocateThirdPlace = allocateThirdPlace;
window.ANNEX_C_DATA = { winners: ANNEX_C_WINNERS, map: ANNEX_C_MAP, winnerToSlot: ANNEX_C_WINNER_TO_SLOT };

Bracket.open = function(){
  var overlay = document.getElementById('bracketOverlay'); if (!overlay) return;
  overlay.classList.add('active');
  var btn = document.getElementById('btnBracketToggle'); if (btn) { btn.classList.add('active'); btn.textContent = '📅 返回小组预测'; }
  autoFillBracket();
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){ renderAll(); });
  });
};

Bracket.close = function(){
  var overlay = document.getElementById('bracketOverlay'); if (!overlay) return;
  overlay.classList.remove('active');
  var btn = document.getElementById('btnBracketToggle'); if (btn) { btn.classList.remove('active'); btn.textContent = '📋 晋级路线'; }
};

Bracket.toggle = function(){
  var overlay = document.getElementById('bracketOverlay'); if (!overlay) return;
  if (overlay.classList.contains('active')) { Bracket.close(); } else { Bracket.open(); }
};

function showConfirm(msg, onOk, onCancel){
  var overlay = document.getElementById('bkConfirmOverlay');
  var msgEl = document.getElementById('bkConfirmMsg');
  var okBtn = document.getElementById('bkConfirmOk');
  var cancelBtn = document.getElementById('bkConfirmCancel');
  if (!overlay || !msgEl) { if (onCancel) onCancel(); return; }
  msgEl.textContent = msg;
  overlay.classList.add('show');
  function cleanup(){
    overlay.classList.remove('show');
    okBtn.removeEventListener('click', handleOk);
    cancelBtn.removeEventListener('click', handleCancel);
  }
  function handleOk(){ cleanup(); if (onOk) onOk(); }
  function handleCancel(){ cleanup(); if (onCancel) onCancel(); }
  okBtn.addEventListener('click', handleOk);
  cancelBtn.addEventListener('click', handleCancel);
}

Bracket.resetAll = function(){
  showConfirm('确定清空晋级路线所有预测？此操作不可撤销。', function(){
    preds = {}; save();
    autoFillBracket();
    requestAnimationFrame(function(){
      renderAll();
      Bracket.toast('🔄 已全部重置');
    });
  });
};

Bracket.saveImage = function(){
  var wrap = document.getElementById('bkSceneWrap');
  if (!wrap) { alert('截图区域未找到'); return; }
  if (typeof html2canvas === 'undefined') { alert('截图库加载中，请稍后再试'); return; }
  html2canvas(wrap, {
    backgroundColor: '#080c12',
    scale: 2,
    useCORS: true,
    allowTaint: true,
    onclone: function(clonedDoc){
      var cards = clonedDoc.querySelectorAll('.bk-card');
      cards.forEach(function(card){
        var l = parseFloat(card.style.left) || 0;
        var t = parseFloat(card.style.top) || 0;
        card.style.left = (l - 63) + 'px';
        card.style.top = (t - 19) + 'px';
        card.style.transform = 'none';
      });
      var hdrs = clonedDoc.querySelectorAll('.bk-col-header');
      hdrs.forEach(function(h){
        var l = parseFloat(h.style.left) || 0;
        h.style.left = (l - 63) + 'px';
        h.style.transform = 'none';
        h.style.width = '126px';
        h.style.textAlign = 'center';
      });
      var lbls = clonedDoc.querySelectorAll('.bk-final-label');
      lbls.forEach(function(lb){
        var l = parseFloat(lb.style.left) || 0;
        lb.style.left = (l - 63) + 'px';
        lb.style.transform = 'none';
        lb.style.width = '126px';
        lb.style.textAlign = 'center';
      });
      var glow = clonedDoc.getElementById('bkGlowLayer');
      if (glow) glow.style.display = 'none';
      var scene = clonedDoc.getElementById('bkScene');
      if (scene) { scene.style.backgroundImage = ''; scene.style.backgroundColor = 'transparent'; }
      var clonedWrap = clonedDoc.getElementById('bkSceneWrap');
      if (clonedWrap) { clonedWrap.style.backgroundImage = ''; clonedWrap.style.backgroundColor = '#080c12'; }
    }
  }).then(function(canvas){
    var link = document.createElement('a');
    link.download = 'WorldCup2026_Bracket.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    Bracket.toast('📸 截图已保存');
  }).catch(function(e){ console.error('截图失败:', e); alert('截图失败'); });
};

Bracket.closeSaveModal = function(){
  var el = document.getElementById('bkSaveOverlay'); if (el) el.classList.remove('show');
};

Bracket.confirmSave = function(){
  Bracket.closeSaveModal(); save(); Bracket.toast('💾 晋级路线已保存');
};

Bracket.toast = function(msg){
  var t = document.getElementById('bkToast'); if (!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(Bracket._tt);
  Bracket._tt = setTimeout(function(){ t.classList.remove('show'); }, 2000);
};

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    var saveOverlay = document.getElementById('bkSaveOverlay');
    if (saveOverlay && saveOverlay.classList.contains('show')) { Bracket.closeSaveModal(); return; }
    var confirmOverlay = document.getElementById('bkConfirmOverlay');
    if (confirmOverlay && confirmOverlay.classList.contains('show')) { confirmOverlay.classList.remove('show'); return; }
    var overlay = document.getElementById('bracketOverlay');
    if (overlay && overlay.classList.contains('active')) { Bracket.close(); }
  }
});

var _rd;
window.addEventListener('resize', function(){
  clearTimeout(_rd);
  _rd = setTimeout(function(){
    if (document.getElementById('bracketOverlay').classList.contains('active')) renderAll();
  }, 150);
});

load();
console.log('🏆 Bracket Overlay V14 ready — hardcoded R32 teams + auto-advance knockout results');
})();
