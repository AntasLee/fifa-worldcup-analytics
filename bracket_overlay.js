// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
// ============================================
// WORLD CUP BRACKET V8 — Full-Screen Overlay JS
// Adapted for FIFAWorldCup.html #bracketOverlay
// ============================================
;(function(){
'use strict';

// ── Flag mapping: delegates to pastFlag (teamdata.js) ──
function flagUrl(code){return typeof pastFlag==='function'?pastFlag(code):'https://flagcdn.com/w80/'+(code.toLowerCase())+'.png';}

// ── Team data: delegates to window.teamMap (groupsdata.js) ──
function buildTeamMap(){
  if(typeof window.teamMap!=='undefined')return window.teamMap;
  var map={};
  if(typeof groupsData!=='undefined'){groupsData.forEach(function(g){g.teams.forEach(function(t){map[t.code]={zh:t.zh||t.nameZh,en:t.en||t.code,code:t.code,group:g.id};});});}
  return map;
}

// ── R32 Pairings (aligned with groupsdata.js r32s) ──
var R32_PAIRINGS=[
  {a:{g:'A',p:1},b:{g:'B',p:2}},{a:{g:'C',p:1},b:{g:'D',p:2}},{a:{g:'E',p:1},b:{g:'F',p:2}},{a:{g:'G',p:1},b:{g:'H',p:2}},
  {a:{g:'I',p:1},b:{g:'J',p:2}},{a:{g:'K',p:1},b:{g:'L',p:2}},{a:{g:'B',p:1},b:{g:'A',p:2}},{a:{g:'D',p:1},b:{g:'C',p:2}},
  {a:{g:'F',p:1},b:{g:'E',p:2}},{a:{g:'H',p:1},b:{g:'G',p:2}},{a:{g:'J',p:1},b:{g:'I',p:2}},{a:{g:'L',p:1},b:{g:'K',p:2}},
  {a:{g:'A',p:1},b:{g:'C',p:2}},{a:{g:'E',p:1},b:{g:'G',p:2}},{a:{g:'I',p:1},b:{g:'K',p:2}},{a:{g:'B',p:1},b:{g:'D',p:2}}
];

var _sid=0;
function makeSlot(round,idx,extra){_sid++;var s={id:_sid,round:round,idx:idx,teams:[null,null],winner:null,nextMatchId:null};if(extra)Object.assign(s,extra);return s;}

var R32=R32_PAIRINGS.map(function(p,i){return makeSlot('R32',i,{ga:p.a,gb:p.b});});
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

// ── Layout (9 columns) ──
var COLUMNS=[
  {id:'R32L',slots:[R32[0],R32[1],R32[2],R32[3],R32[4],R32[5],R32[6],R32[7]],label:'32強',round:'R32'},
  {id:'R16L',slots:[R16[0],R16[1],R16[2],R16[3]],label:'16強',round:'R16'},
  {id:'QFL',slots:[QF[0],QF[1]],label:'8強',round:'QF'},
  {id:'SFL',slots:[SF[0]],label:'4強',round:'SF'},
  {id:'CTR',slots:[FIN,TP],label:'',isCenter:true},
  {id:'SFR',slots:[SF[1]],label:'4強',round:'SF'},
  {id:'QFR',slots:[QF[2],QF[3]],label:'8強',round:'QF'},
  {id:'R16R',slots:[R16[4],R16[5],R16[6],R16[7]],label:'16強',round:'R16'},
  {id:'R32R',slots:[R32[8],R32[9],R32[10],R32[11],R32[12],R32[13],R32[14],R32[15]],label:'32強',round:'R32'}
];

var CARD_W=126, CARD_H=38;

function getWrap(){return document.getElementById('bkSceneWrap');}
function colX(ci){var W=getWrap().clientWidth;var cw=CARD_W;var margin=cw/2+10;return margin+(W-margin*2)/8*ci;}
function matchY(ci,idx,total){var H=getWrap().clientHeight;var top=22,bot=8,usable=H-top-bot;if(total<=1)return top+usable/2;return top+usable/total*idx+usable/total/2;}

// ── State ──
var preds={};
function load(){try{var raw=localStorage.getItem('wc2026_bracket_v9');if(raw)preds=JSON.parse(raw);}catch(e){}if(!preds||typeof preds!=='object')preds={};}
function save(){localStorage.setItem('wc2026_bracket_v9',JSON.stringify(preds));}
function gpred(sid){return preds[sid]||null;}
function spred(sid,data){preds[sid]=data;save();}

var cardElements={};
var pickerTarget=null;
var pickerSlot=null;

// ── Render cards ──
function createCardEl(mid,slot){
  var el=document.createElement('div');
  el.className='bk-card';
  el.setAttribute('data-match',mid);
  if(slot)el.setAttribute('data-slot',slot);
  el.addEventListener('click',function(){onCardClick(this.getAttribute('data-match'),this.getAttribute('data-slot')||'1');});
  return el;
}

function updateCardEl(el,slot){
  var mid=el.getAttribute('data-match');
  var p=gpred(parseInt(mid));
  var pos=slot==='1'?0:1;
  var team=p?p.teams[pos]:null;
  var isWinner=p&&p.winner===pos;
  var extraClasses='';if(el.classList.contains('final-card'))extraClasses+=' final-card';if(el.classList.contains('tp-card'))extraClasses+=' tp-card';
  el.className='bk-card'+(team?' filled':'')+(isWinner?' winner':'')+extraClasses;
  if(team){
    var img=document.createElement('img');img.className='flag';img.src=flagUrl(team.code);img.alt='';img.loading='lazy';img.onerror=function(){this.style.display='none';};
    var info=document.createElement('div');info.className='info';info.innerHTML='<span class="name-zh">'+team.zh+'</span><span class="name-en">'+team.en+'</span>';
    el.innerHTML='';el.appendChild(img);el.appendChild(info);
  }else{el.innerHTML='<span class="placeholder">点击选择</span>';}
}

function renderAll(){
  var layer=document.getElementById('bkCardsLayer');
  if(!layer)return;
  layer.innerHTML='';cardElements={};
  var scene=document.getElementById('bkScene');
  var oldHeaders=scene.querySelectorAll('.bk-col-header');
  for(var i=0;i<oldHeaders.length;i++){oldHeaders[i].remove();}

  var frag=document.createDocumentFragment();

  COLUMNS.forEach(function(col,ci){
    var x=colX(ci);
    if(col.label){
      var hdr=document.createElement('div');
      hdr.className='bk-col-header'+(col.isCenter?' gold':'');
      hdr.style.left=x+'px';hdr.style.top='10px';
      hdr.textContent=col.isCenter?'🏆 決賽 / 🥉 季軍賽':col.label;
      scene.appendChild(hdr);
    }
    col.slots.forEach(function(slot,idx){
      var baseY=matchY(ci,idx,col.slots.length);
      var p=gpred(slot.id);
      if(slot.round==='R32'){
        var gap=40;var y1=baseY-gap/2,y2=baseY+gap/2;
        [0,1].forEach(function(pos){
          var el=createCardEl(slot.id,String(pos+1));
          el.style.left=x+'px';el.style.top=(pos===0?y1:y2)+'px';
          updateCardEl(el,String(pos+1));frag.appendChild(el);
          cardElements[slot.id+'_'+(pos+1)]=el;
        });
      }else if(slot.isThirdPlace){
        var g3=40;
        [0,1].forEach(function(pos){
          var el3b=createCardEl(slot.id,String(pos+1));el3b.classList.add('tp-card');el3b.style.left=x+'px';el3b.style.top=(baseY+(pos===0?-g3/2:g3/2))+'px';
          updateCardEl(el3b,String(pos+1));frag.appendChild(el3b);cardElements[slot.id+'_'+(pos+1)]=el3b;
          if(pos===0)cardElements[slot.id]=el3b;
        });
      }else if(slot.round==='FINAL'){
        var pf=gpred(slot.id);var hasBothF=pf&&pf.teams[0]&&pf.teams[1];
        var hasWinnerF=hasBothF&&pf.winner!==null&&pf.winner!==undefined;
        var gF=42;
        [0,1].forEach(function(pos){
          var elFb=createCardEl(slot.id,String(pos+1));elFb.classList.add('final-card');elFb.style.left=x+'px';elFb.style.top=(baseY+(pos===0?-gF/2:gF/2))+'px';
          updateCardEl(elFb,String(pos+1));frag.appendChild(elFb);cardElements[slot.id+'_'+(pos+1)]=elFb;
          if(pos===0)cardElements[slot.id]=elFb;
        });
      }else{
        var hasBoth=p&&p.teams[0]&&p.teams[1];
        var hasWinner=hasBoth&&p.winner!==null&&p.winner!==undefined;
        var g2=40;
        [0,1].forEach(function(pos){
          var el2=createCardEl(slot.id,String(pos+1));el2.style.left=x+'px';el2.style.top=(baseY+(pos===0?-g2/2:g2/2))+'px';
          updateCardEl(el2,String(pos+1));frag.appendChild(el2);cardElements[slot.id+'_'+(pos+1)]=el2;
          if(pos===0)cardElements[slot.id]=el2;
        });
      }
    });
  });

  layer.appendChild(frag);
  // ── Final / Third Place bilingual labels ──
  var oldFrame=document.getElementById('bkFinalFrame');if(oldFrame)oldFrame.remove();
  var oldLabel=document.getElementById('bkFinalLabel');if(oldLabel)oldLabel.remove();
  var oldTpLabel=document.getElementById('bkThirdLabel');if(oldTpLabel)oldTpLabel.remove();
  var ctrCol=COLUMNS.find(function(c){return c.isCenter;});
  if(ctrCol){
    var ctrIdx=COLUMNS.indexOf(ctrCol);
    var cx=colX(ctrIdx);
    // FIN label
    var finSlot=ctrCol.slots.find(function(s){return s.isFinal;});
    if(finSlot){
      var finIdx=ctrCol.slots.indexOf(finSlot);
      var finY=matchY(ctrIdx,finIdx,ctrCol.slots.length);
      var finLabel=document.createElement('div');
      finLabel.id='bkFinalLabel';finLabel.className='bk-final-label';
      finLabel.style.left=cx+'px';finLabel.style.top=(finY-85)+'px';
      finLabel.style.transform='translateX(-50%)';
      finLabel.innerHTML='总决赛<span class="bk-label-en">FINAL</span>';
      scene.appendChild(finLabel);
    }
    // Third Place label
    var tpSlot=ctrCol.slots.find(function(s){return s.isThirdPlace;});
    if(tpSlot){
      var tpIdx=ctrCol.slots.indexOf(tpSlot);
      var tpY=matchY(ctrIdx,tpIdx,ctrCol.slots.length);
      var tpLabel=document.createElement('div');
      tpLabel.id='bkThirdLabel';tpLabel.className='bk-final-label third';
      tpLabel.style.left=cx+'px';tpLabel.style.top=(tpY-85)+'px';
      tpLabel.style.transform='translateX(-50%)';
      tpLabel.innerHTML='季军赛<span class="bk-label-en">THIRD PLACE</span>';
      scene.appendChild(tpLabel);
    }
  }
  updateProgress();drawConnectors();renderGlow();
}

function renderGlow(){
  // 双重锚定：CSS (bk-scene-wrap) + JS (bkScene) 同步设置金色径向渐变
  var scene=document.getElementById('bkScene');
  if(scene){
    scene.style.backgroundImage=[
      'radial-gradient(ellipse 65% 92% at 50% 50%, rgba(240,208,112,0.68) 0%, rgba(200,162,72,0.32) 32%, rgba(180,140,60,0.10) 58%, transparent 78%)',
      'radial-gradient(circle 48% at 52% 48%, rgba(245,215,120,0.48) 0%, rgba(220,180,90,0.20) 40%, transparent 68%)',
      'radial-gradient(circle 28% at 48% 50%, rgba(210,170,80,0.25) 0%, rgba(160,120,50,0.08) 50%, transparent 70%)'
    ].join(', ');
    scene.style.backgroundColor='transparent';
  }
  var layer=document.getElementById('bkGlowLayer');
  if(layer){
    layer.style.backgroundImage='';
    layer.style.backgroundColor='transparent';
  }
}

// ── SVG Connectors ──
function drawConnectors(){
  var svg=document.getElementById('bkSVG');if(!svg)return;
  var wrap=getWrap();if(!wrap)return;
  var W=wrap.clientWidth,H=wrap.clientHeight;
  svg.setAttribute('viewBox','0 0 '+W+' '+H);svg.style.width=W+'px';svg.style.height=H+'px';
  function getPos(key){var el=cardElements[key];if(!el)return null;return{x:parseFloat(el.style.left),y:parseFloat(el.style.top)};}
  var paths='';
  var CONN_MAP={};
  ALL_SLOTS.forEach(function(s){if(s.feeds){s.feeds.forEach(function(fid,fi){CONN_MAP[fid]={tid:s.id,ts:fi};});}});
  Object.keys(CONN_MAP).forEach(function(srcIdStr){
    var tgtId=parseInt(srcIdStr);var conn=CONN_MAP[tgtId];
    var srcSlotId=tgtId;var tgtSlotId=conn.tid;
    var p=gpred(srcSlotId);
    var srcKey;if(p&&p.winner!==null&&p.winner!==undefined)srcKey=srcSlotId+'_'+(p.winner+1);else srcKey=srcSlotId+'_'+(conn.ts+1);
    var srcPos=getPos(srcKey);var tgtPos=getPos(tgtSlotId+'_'+(conn.ts+1))||getPos(tgtSlotId+'_1')||getPos(tgtSlotId);
    if(!srcPos||!tgtPos)return;
    var halfW=CARD_W/2;var isLeft=srcPos.x<W/2;
    var sx=isLeft?srcPos.x+halfW:srcPos.x-halfW;var tx=isLeft?tgtPos.x-halfW:tgtPos.x+halfW;var mx=(sx+tx)/2;
    var highlight=p&&p.winner!==null&&p.winner!==undefined;
    paths+='<path class="'+(highlight?'conn-winner':'')+'" d="M'+sx+','+srcPos.y+' L'+mx+','+srcPos.y+' L'+mx+','+tgtPos.y+' L'+tx+','+tgtPos.y+'"/>\n';
  });
  // SF losers → 3rd place
  SF.forEach(function(sf,sfi){
    var p=gpred(sf.id);if(!p||p.winner===null||p.winner===undefined)return;
    var loserPos=p.winner===0?1:0;if(!p.teams[loserPos])return;
    var loserKey=sf.id+'_'+(loserPos+1);var loserPos2=getPos(loserKey);
    var t3Pos2=getPos(TP.id+'_'+(sfi+1))||getPos(TP.id);if(!loserPos2||!t3Pos2)return;
    var halfW=CARD_W/2;var isLeft=loserPos2.x<W/2;
    var sx=isLeft?loserPos2.x+halfW:loserPos2.x-halfW;var tx=isLeft?t3Pos2.x-halfW:t3Pos2.x+halfW;var mx=(sx+tx)/2;
    paths+='<path d="M'+sx+','+loserPos2.y+' L'+mx+','+loserPos2.y+' L'+mx+','+t3Pos2.y+' L'+tx+','+t3Pos2.y+'" style="stroke-dasharray:3,3;opacity:0.3;stroke-width:0.8"/>\n';
  });
  // Divider lines
  var R32_COLS=COLUMNS.filter(function(c){return c.id==='R32L'||c.id==='R32R';});
  R32_COLS.forEach(function(col){
    var ci=COLUMNS.indexOf(col);var cx=colX(ci);var halfCardW=CARD_W/2;
    for(var i=0;i<col.slots.length-1;i++){
      var el0=cardElements[col.slots[i].id+'_2'];var el1=cardElements[col.slots[i+1].id+'_1'];
      if(!el0||!el1)continue;
      var y0=parseFloat(el0.style.top);var y1=parseFloat(el1.style.top);var midY=(y0+y1)/2;
      paths+='<line class="divider-line" x1="'+(cx-halfCardW+4)+'" y1="'+midY+'" x2="'+(cx+halfCardW-4)+'" y2="'+midY+'"/>\n';
    }
  });
  svg.innerHTML='<g>'+paths+'</g>';
}

// ── Progress ──
function updateProgress(){
  var filled=0,total=0;
  ALL_SLOTS.forEach(function(s){if(s.isThirdPlace)return;total+=2;var p=gpred(s.id);if(p){if(p.teams[0])filled++;if(p.teams[1])filled++;}});
  var pct=total>0?Math.round(filled/total*100):0;
  var pf=document.getElementById('bkProgressFill');if(pf)pf.style.width=pct+'%';
  var pt=document.getElementById('bkProgressText');if(pt)pt.textContent=filled+' / '+total;
}

// ── Interaction ──
function onCardClick(matchId,slot){
  var sid=parseInt(matchId);var p=gpred(sid);var slotObj=SLOT_BY_ID[sid];if(!slotObj)return;
  var pos=parseInt(slot)-1;
  if(p&&p.teams[0]&&p.teams[1]){
    if(p.winner===pos){p.winner=null;save();propagate(sid);renderAll();return;}
    p.winner=pos;save();propagate(sid);renderAll();return;
  }
  pickerTarget=sid;pickerSlot=pos;openPicker(sid,pos);
}

function propagate(slotId){
  var slot=SLOT_BY_ID[slotId];if(!slot)return;var p=gpred(slotId);
  if(!p||p.winner===null||p.winner===undefined)return;var winnerTeam=p.teams[p.winner];if(!winnerTeam)return;
  if(slot.nextMatchId){
    var ns=SLOT_BY_ID[slot.nextMatchId];if(!ns)return;var np=gpred(slot.nextMatchId);
    if(!np){np={teams:[null,null],winner:null};spred(slot.nextMatchId,np);}
    var fi=ns.feeds?ns.feeds.indexOf(slotId):0;np.teams[fi>=0?fi:0]=winnerTeam;np.winner=null;save();propagate(slot.nextMatchId);
  }
  if(slot.round==='SF'&&!slot.isThirdPlace){
    var loserPos=p.winner===0?1:0;var loserTeam=p.teams[loserPos];if(loserTeam){
      var tpp=gpred(TP.id);if(!tpp){tpp={teams:[null,null],winner:null};spred(TP.id,tpp);}
      var tfi=TP.feeds?TP.feeds.indexOf(slotId):-1;tpp.teams[tfi>=0?tfi:0]=loserTeam;tpp.winner=null;save();
    }
  }
}

function clearDownstream(slotId){
  var slot=SLOT_BY_ID[slotId];if(!slot||!slot.nextMatchId)return;
  var ns=SLOT_BY_ID[slot.nextMatchId];if(!ns)return;
  var fi=ns.feeds?ns.feeds.indexOf(slotId):-1;
  var np=gpred(slot.nextMatchId);if(np){np.teams[fi>=0?fi:0]=null;np.winner=null;save();}
  clearDownstream(slot.nextMatchId);
}

// ── Picker ──
function openPicker(sid,pos){
  var popup=document.getElementById('bkPickerPopup');if(!popup)return;
  var overlay=document.getElementById('bkPickerOverlay');if(overlay)overlay.classList.add('show');
  var teamMap=buildTeamMap();var allTeams=[];
  for(var k in teamMap){allTeams.push(teamMap[k]);}
  allTeams.sort(function(a,b){return a.zh.localeCompare(b.zh,'zh');});
  var items='';
  allTeams.forEach(function(t){items+='<div class="picker-item" onclick="Bracket.pickTeam(\''+t.code+'\')"><img src="'+flagUrl(t.code)+'" onerror="this.style.display=\'none\'"><span>'+t.zh+' <small style="color:#a09888">'+t.code+'</small></span></div>';});
  popup.innerHTML=items||'<div style="padding:12px;color:#a09888">球队数据加载中...</div>';
  popup.style.display='block';
}

function closePicker(){
  var popup=document.getElementById('bkPickerPopup');if(popup)popup.style.display='none';
  var overlay=document.getElementById('bkPickerOverlay');if(overlay)overlay.classList.remove('show');
  pickerTarget=null;
}

function pickTeam(code){
  if(pickerTarget===null||pickerSlot===null)return;
  var teamMap=buildTeamMap();var team=teamMap[code];if(!team)return;
  var sid=pickerTarget,pos=pickerSlot;
  var p=gpred(sid);if(!p){p={teams:[null,null],winner:null};spred(sid,p);}
  if(p.teams[0]&&p.teams[1]&&p.teams[0].code===code&&pos===0){p.winner=0;save();clearDownstream(sid);propagate(sid);closePicker();renderAll();return;}
  if(p.teams[0]&&p.teams[1]&&p.teams[1].code===code&&pos===1){p.winner=1;save();clearDownstream(sid);propagate(sid);closePicker();renderAll();return;}
  var other=pos===0?1:0;
  if(p.teams[other]&&p.teams[other].code===code){p.teams[other]=p.teams[pos];}
  p.teams[pos]={zh:team.zh,en:team.en,code:team.code};p.winner=null;save();
  clearDownstream(sid);closePicker();renderAll();
}

// ── Public API ──
window.Bracket=window.Bracket||{};

var _initDone=false;
function initIfNeeded(){
  if(_initDone)return;
  load();renderAll();_initDone=true;
}

Bracket.open=function(){
  initIfNeeded();
  var overlay=document.getElementById('bracketOverlay');if(!overlay)return;
  overlay.classList.add('active');
  var btn=document.getElementById('btnBracketToggle');if(btn){btn.classList.add('active');btn.textContent='📅 返回小组预测';}
  setTimeout(function(){renderAll();},50);
};

Bracket.close=function(){
  var overlay=document.getElementById('bracketOverlay');if(!overlay)return;
  overlay.classList.remove('active');
  var btn=document.getElementById('btnBracketToggle');if(btn){btn.classList.remove('active');btn.textContent='📋 晋级路线';}
  closePicker();
};

Bracket.toggle=function(){
  var overlay=document.getElementById('bracketOverlay');if(!overlay)return;
  if(overlay.classList.contains('active')){Bracket.close();}else{Bracket.open();}
};

// ── Async confirm dialog (non-blocking, avoids INP penalty) ──
function showConfirm(msg, onOk, onCancel){
  var overlay = document.getElementById('bkConfirmOverlay');
  var msgEl = document.getElementById('bkConfirmMsg');
  var okBtn = document.getElementById('bkConfirmOk');
  var cancelBtn = document.getElementById('bkConfirmCancel');
  if(!overlay || !msgEl){ if(onCancel)onCancel(); return; }
  msgEl.textContent = msg;
  overlay.classList.add('show');
  function cleanup(){
    overlay.classList.remove('show');
    okBtn.removeEventListener('click', handleOk);
    cancelBtn.removeEventListener('click', handleCancel);
  }
  function handleOk(){
    cleanup();
    if(onOk) onOk();
  }
  function handleCancel(){
    cleanup();
    if(onCancel) onCancel();
  }
  okBtn.addEventListener('click', handleOk);
  cancelBtn.addEventListener('click', handleCancel);
}

Bracket.resetAll=function(){
  showConfirm('确定清空晋级路线所有预测？此操作不可撤销。', function(){
    preds={};save();
    requestAnimationFrame(function(){
      renderAll();
      Bracket.toast('🔄 已全部重置');
    });
  });
};

Bracket.saveImage=function(){
  var wrap=document.getElementById('bkSceneWrap');
  if(!wrap){alert('截图区域未找到');return;}
  if(typeof html2canvas==='undefined'){alert('截图库加载中，请稍后再试');return;}
  html2canvas(wrap,{
    backgroundColor:'#080c12',
    scale:2,
    useCORS:true,
    allowTaint:true,
    onclone:function(clonedDoc){
      // Fix html2canvas transform bug: remove CSS transforms & compensate positions
      var cards=clonedDoc.querySelectorAll('.bk-card');
      cards.forEach(function(card){
        var l=parseFloat(card.style.left)||0;
        var t=parseFloat(card.style.top)||0;
        card.style.left=(l-63)+'px';card.style.top=(t-19)+'px';
        card.style.transform='none';
      });
      var hdrs=clonedDoc.querySelectorAll('.bk-col-header');
      hdrs.forEach(function(h){
        var l=parseFloat(h.style.left)||0;
        h.style.left=(l-63)+'px';h.style.transform='none';
        h.style.width='126px';h.style.textAlign='center';
      });
      var lbls=clonedDoc.querySelectorAll('.bk-final-label');
      lbls.forEach(function(lb){
        var l=parseFloat(lb.style.left)||0;
        lb.style.left=(l-63)+'px';lb.style.transform='none';
        lb.style.width='126px';lb.style.textAlign='center';
      });
      // 移除光晕层避免遮盖卡片
      var glow=clonedDoc.getElementById('bkGlowLayer');
      if(glow) glow.style.display='none';
      // 清除 bkScene 内联金色渐变背景
      var scene=clonedDoc.getElementById('bkScene');
      if(scene){
        scene.style.backgroundImage='';
        scene.style.backgroundColor='transparent';
      }
      // 确保包裹器纯黑背景
      var clonedWrap=clonedDoc.getElementById('bkSceneWrap');
      if(clonedWrap){
        clonedWrap.style.backgroundImage='';
        clonedWrap.style.backgroundColor='#080c12';
      }
    }
  }).then(function(canvas){
    var link=document.createElement('a');link.download='WorldCup2026_Bracket.png';link.href=canvas.toDataURL('image/png');link.click();
    Bracket.toast('📸 截图已保存');
  }).catch(function(e){console.error('截图失败:',e);alert('截图失败');});
};

Bracket.closeSaveModal=function(){
  var el=document.getElementById('bkSaveOverlay');if(el)el.classList.remove('show');
};

Bracket.confirmSave=function(){
  Bracket.closeSaveModal();save();Bracket.toast('💾 晋级路线已保存');
};

Bracket.closePicker=closePicker;

Bracket.pickTeam=pickTeam;

Bracket.toast=function(msg){
  var t=document.getElementById('bkToast');if(!t)return;
  t.textContent=msg;t.classList.add('show');
  clearTimeout(Bracket._tt);Bracket._tt=setTimeout(function(){t.classList.remove('show');},2000);
};

	// ── ESC to close (topmost first) ──
	document.addEventListener('keydown',function(e){
	  if(e.key==='Escape'){
	    var pickerPopup=document.getElementById('bkPickerPopup');
	    if(pickerPopup&&pickerPopup.style.display==='block'){closePicker();return;}
	    var saveOverlay=document.getElementById('bkSaveOverlay');
	    if(saveOverlay&&saveOverlay.classList.contains('show')){Bracket.closeSaveModal();return;}
	    var overlay=document.getElementById('bracketOverlay');
	    if(overlay&&overlay.classList.contains('active')){Bracket.close();}
	  }
	});

// ── Resize handler ──
var _rd;window.addEventListener('resize',function(){clearTimeout(_rd);_rd=setTimeout(function(){if(document.getElementById('bracketOverlay').classList.contains('active'))renderAll();},150);});

load();
console.log('🏆 Bracket Overlay V9 ready — Full-screen SVG bracket');
})();
