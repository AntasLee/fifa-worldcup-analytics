// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
(function(){
// ============================================
// oddsdata.js — 独立赔率数据层 (Phase 1)
// 从 groupsdata.js 剥离，扩展 AH/OU 字段
// 载入顺序: 必须在 groupsdata.js 之前加载
// ============================================

// ========== 球队级初始赔率 (48队) ==========
const initialOdds={
ALG:{w:4.61,d:3.94,l:3.33},ARG:{w:1.42,d:5.05,l:9.08},AUS:{w:4.95,d:4.01,l:1.82},
AUT:{w:2.96,d:4.09,l:4.83},BEL:{w:1.62,d:4.34,l:6.6},BIH:{w:5.26,d:3.91,l:1.8},
BRA:{w:1.38,d:5.88,l:9.5},CAN:{w:1.65,d:3.90,l:3.50},CIV:{w:4.5,d:3.61,l:2},
COD:{w:6.97,d:4.33,l:1.92},COL:{w:2.1,d:4.01,l:5.86},CPV:{w:11.57,d:6.56,l:1.31},
CRO:{w:2.72,d:3.75,l:4.45},CUW:{w:22,d:9.55,l:1.18},CZE:{w:2.98,d:3.42,l:2.63},
ECU:{w:1.69,d:4.23,l:5.85},EGY:{w:2.78,d:3.95,l:2.59},ENG:{w:1.45,d:4.98,l:7.66},
ESP:{w:1.15,d:10.73,l:25.15},FRA:{w:1.48,d:5.5,l:11.71},GER:{w:1.32,d:6.85,l:10.31},
GHA:{w:5.53,d:4.15,l:2.21},HAI:{w:10.56,d:6.31,l:1.34},IRN:{w:3.17,d:4.16,l:2.25},
IRQ:{w:14.97,d:6.67,l:1.25},JOR:{w:9.59,d:5.51,l:1.34},JPN:{w:2.47,d:3.68,l:3.1},
KOR:{w:2.50,d:3.40,l:2.71},KSA:{w:12.02,d:6.21,l:1.32},MAR:{w:3.07,d:3.68,l:2.48},
MEX:{w:1.76,d:3.43,l:1.83},NED:{w:1.93,d:3.91,l:4.44},NOR:{w:2.52,d:4.67,l:6.41},
NZL:{w:4.72,d:3.8,l:1.9},PAN:{w:6.26,d:4.37,l:1.64},PAR:{w:3.94,d:3.45,l:2.19},
POR:{w:1.54,d:5.01,l:8.66},QAT:{w:11.91,d:5.95,l:1.34},RSA:{w:5.00,d:3.68,l:4.92},
SCO:{w:2.36,d:3.84,l:3.17},SEN:{w:4.01,d:4.08,l:3.6},SUI:{w:1.47,d:5.15,l:8.05},
SWE:{w:2.95,d:3.85,l:2.49},TUN:{w:4.86,d:3.63,l:1.93},TUR:{w:2.05,d:3.61,l:4.26},
URU:{w:1.53,d:4.56,l:7.74},USA:{w:1.94,d:3.8,l:4.53},UZB:{w:7.49,d:4.67,l:1.66}};

let liveOdds=JSON.parse(JSON.stringify(initialOdds));
let lastUpdate='2026-06-12';

// ========== 比赛级赔率 (72场小组赛, 扩展9字段) ==========
// 字段: h(主队), a(客队), hw(主胜赔), d(平赔), aw(客胜赔),
//       ahLine(让球线), ahHome(让球主赔), ahAway(让球客赔),
//       ouLine(大小线), ouOver(大球赔), ouUnder(小球赔)
const matchOdds={
A_0_1:{h:'MEX',a:'RSA',hw:1.57,d:3.70,aw:5.50,ahLine:-1,ahHome:1.85,ahAway:1.91,ouLine:2.5,ouOver:1.91,ouUnder:1.86},A_0_2:{h:'MEX',a:'KOR',hw:1.95,d:3.2,aw:3.8,ahLine:-0.5,ahHome:2.05,ahAway:1.87,ouLine:2.5,ouOver:2.25,ouUnder:1.57},
A_1_2:{h:'RSA',a:'KOR',hw:5,d:3.75,aw:1.62,ahLine:1,ahHome:1.79,ahAway:2.03,ouLine:2.5,ouOver:2,ouUnder:1.73},A_2_3:{h:'KOR',a:'CZE',hw:2.5,d:3.25,aw:2.63,ahLine:0,ahHome:1.85,ahAway:1.89,ouLine:2.5,ouOver:2.25,ouUnder:1.6},
A_3_0:{h:'CZE',a:'MEX',hw:4.2,d:3.4,aw:1.83,ahLine:0.5,ahHome:2.04,ahAway:1.78,ouLine:2.5,ouOver:2.05,ouUnder:1.7},A_3_1:{h:'CZE',a:'RSA',hw:1.75,d:3.6,aw:4.33,ahLine:-0.75,ahHome:2.06,ahAway:1.86,ouLine:2.5,ouOver:2,ouUnder:1.75},
B_0_1:{h:'CAN',a:'BIH',hw:2.0,d:3.5,aw:3.25,ahLine:-0.5,ahHome:1.8,ahAway:1.91,ouLine:2.5,ouOver:2.2,ouUnder:1.62},B_0_2:{h:'CAN',a:'QAT',hw:1.3,d:5,aw:10,ahLine:-1.5,ahHome:1.88,ahAway:1.92,ouLine:2.5,ouOver:1.85,ouUnder:1.85},
B_1_2:{h:'BIH',a:'QAT',hw:1.62,d:3.6,aw:5,ahLine:-0.75,ahHome:1.82,ahAway:1.99,ouLine:2.5,ouOver:1.95,ouUnder:1.75},B_2_3:{h:'QAT',a:'SUI',hw:13,d:5.8,aw:1.22,ahLine:1.75,ahHome:1.97,ahAway:1.93,ouLine:2.5,ouOver:1.67,ouUnder:2.1},
B_3_0:{h:'SUI',a:'CAN',hw:2.1,d:3.2,aw:3.5,ahLine:-0.25,ahHome:1.79,ahAway:2.03,ouLine:2.5,ouOver:2.05,ouUnder:1.7},B_3_1:{h:'SUI',a:'BIH',hw:1.57,d:3.8,aw:5.5,ahLine:-1,ahHome:1.99,ahAway:1.82,ouLine:2.5,ouOver:1.95,ouUnder:1.75},
C_0_1:{h:'BRA',a:'MAR',hw:1.6,d:4,aw:5,ahLine:-0.75,ahHome:1.91,ahAway:2,ouLine:2.5,ouOver:1.95,ouUnder:1.75},C_0_2:{h:'BRA',a:'HAI',hw:1.07,d:12,aw:29,ahLine:-2.75,ahHome:1.85,ahAway:1.96,ouLine:2.5,ouOver:1.25,ouUnder:3.5},
C_1_2:{h:'MAR',a:'HAI',hw:1.3,d:4.8,aw:10,ahLine:-1.25,ahHome:1.79,ahAway:2.02,ouLine:2.5,ouOver:1.7,ouUnder:2.05},C_2_3:{h:'HAI',a:'SCO',hw:6,d:4.2,aw:1.5,ahLine:1,ahHome:1.88,ahAway:2.02,ouLine:2.5,ouOver:1.8,ouUnder:1.91},
C_3_0:{h:'SCO',a:'BRA',hw:6,d:4.4,aw:1.44,ahLine:1.25,ahHome:1.86,ahAway:1.94,ouLine:2.5,ouOver:1.75,ouUnder:2},C_3_1:{h:'SCO',a:'MAR',hw:4,d:3.1,aw:2,ahLine:0.5,ahHome:1.83,ahAway:1.98,ouLine:2.5,ouOver:2.25,ouUnder:1.6},
D_0_1:{h:'USA',a:'PAR',hw:2,d:3.2,aw:3.75,ahLine:-0.5,ahHome:2.13,ahAway:1.83,ouLine:2.5,ouOver:2.3,ouUnder:1.55},D_0_2:{h:'USA',a:'AUS',hw:1.73,d:3.6,aw:4.6,ahLine:-0.75,ahHome:1.94,ahAway:1.86,ouLine:2.5,ouOver:2,ouUnder:1.73},
D_1_2:{h:'PAR',a:'AUS',hw:2.2,d:3,aw:3.4,ahLine:-0.25,ahHome:1.79,ahAway:2.02,ouLine:2.5,ouOver:2.25,ouUnder:1.6},D_2_3:{h:'AUS',a:'TUR',hw:4.8,d:3.6,aw:1.67,ahLine:0.75,ahHome:1.96,ahAway:1.94,ouLine:2.5,ouOver:2,ouUnder:1.75},
D_3_0:{h:'TUR',a:'USA',hw:2.6,d:3.3,aw:2.5,ahLine:0,ahHome:1.85,ahAway:1.95,ouLine:2.5,ouOver:1.91,ouUnder:1.83},D_3_1:{h:'TUR',a:'PAR',hw:2.2,d:3.1,aw:3.3,ahLine:-0.25,ahHome:1.86,ahAway:1.94,ouLine:2.5,ouOver:2.3,ouUnder:1.57},
E_0_1:{h:'GER',a:'CUW',hw:1.05,d:15,aw:36,ahLine:-3.25,ahHome:1.86,ahAway:2,ouLine:2.5,ouOver:1.17,ouUnder:4.8},E_0_2:{h:'GER',a:'CIV',hw:1.55,d:4,aw:5.5,ahLine:-1,ahHome:1.92,ahAway:1.88,ouLine:2.5,ouOver:1.7,ouUnder:2.05},
E_1_2:{h:'CUW',a:'CIV',hw:15,d:6,aw:1.2,ahLine:1.75,ahHome:1.99,ahAway:1.82,ouLine:2.5,ouOver:1.65,ouUnder:2.15},E_2_3:{h:'CIV',a:'ECU',hw:3.4,d:2.75,aw:2.4,ahLine:0.25,ahHome:1.88,ahAway:2.02,ouLine:2.5,ouOver:2.9,ouUnder:1.36},
E_3_0:{h:'ECU',a:'GER',hw:4.6,d:3.6,aw:1.73,ahLine:0.75,ahHome:1.82,ahAway:1.99,ouLine:2.5,ouOver:1.85,ouUnder:1.85},E_3_1:{h:'ECU',a:'CUW',hw:1.18,d:6.5,aw:15,ahLine:-2,ahHome:2.03,ahAway:1.79,ouLine:2.5,ouOver:1.67,ouUnder:2.1},
F_0_1:{h:'NED',a:'JPN',hw:1.95,d:3.4,aw:3.75,ahLine:-0.5,ahHome:2.02,ahAway:1.89,ouLine:2.5,ouOver:1.85,ouUnder:1.85},F_0_2:{h:'NED',a:'SWE',hw:1.62,d:3.8,aw:5,ahLine:-1,ahHome:2.03,ahAway:1.78,ouLine:2.5,ouOver:1.85,ouUnder:1.85},
F_1_2:{h:'JPN',a:'SWE',hw:2.1,d:3.25,aw:3.4,ahLine:-0.25,ahHome:1.79,ahAway:2.02,ouLine:2.5,ouOver:2.05,ouUnder:1.7},F_2_3:{h:'SWE',a:'TUN',hw:1.85,d:3.3,aw:4.2,ahLine:-0.5,ahHome:1.9,ahAway:2,ouLine:2.5,ouOver:2.2,ouUnder:1.62},
F_3_0:{h:'TUN',a:'NED',hw:6,d:4,aw:1.5,ahLine:1,ahHome:2,ahAway:1.81,ouLine:2.5,ouOver:1.85,ouUnder:1.85},F_3_1:{h:'TUN',a:'JPN',hw:5,d:3.4,aw:1.7,ahLine:0.75,ahHome:1.91,ahAway:1.89,ouLine:2.5,ouOver:2.2,ouUnder:1.62},
G_0_1:{h:'BEL',a:'EGY',hw:1.62,d:3.75,aw:5,ahLine:-1,ahHome:2.12,ahAway:1.81,ouLine:2.5,ouOver:1.91,ouUnder:1.8},G_0_2:{h:'BEL',a:'IRN',hw:1.4,d:4.4,aw:7.5,ahLine:-1.25,ahHome:1.92,ahAway:1.88,ouLine:2.5,ouOver:1.8,ouUnder:1.91},
G_1_2:{h:'EGY',a:'IRN',hw:2.25,d:2.9,aw:3.5,ahLine:-0.25,ahHome:1.88,ahAway:1.92,ouLine:2.5,ouOver:2.5,ouUnder:1.44},G_2_3:{h:'IRN',a:'NZL',hw:1.8,d:3.5,aw:4.33,ahLine:-0.5,ahHome:1.85,ahAway:2.07,ouLine:2.5,ouOver:2.2,ouUnder:1.6},
G_3_0:{h:'NZL',a:'BEL',hw:10,d:5.5,aw:1.25,ahLine:1.5,ahHome:1.98,ahAway:1.83,ouLine:2.5,ouOver:1.67,ouUnder:2.1},G_3_1:{h:'NZL',a:'EGY',hw:4.6,d:3.5,aw:1.75,ahLine:0.75,ahHome:1.83,ahAway:1.97,ouLine:2.5,ouOver:2.1,ouUnder:1.67},
H_0_1:{h:'ESP',a:'CPV',hw:1.1,d:10,aw:23,ahLine:-2.5,ahHome:1.91,ahAway:1.94,ouLine:2.5,ouOver:1.33,ouUnder:3.1},H_0_2:{h:'ESP',a:'KSA',hw:1.08,d:10,aw:23,ahLine:-2.5,ahHome:1.98,ahAway:1.83,ouLine:2.5,ouOver:1.44,ouUnder:2.5},
H_1_2:{h:'CPV',a:'KSA',hw:2.3,d:3.4,aw:2.88,ahLine:-0.25,ahHome:1.93,ahAway:1.88,ouLine:2.5,ouOver:2.05,ouUnder:1.7},H_2_3:{h:'KSA',a:'URU',hw:7.5,d:4.2,aw:1.4,ahLine:1.25,ahHome:1.88,ahAway:2.04,ouLine:2.5,ouOver:1.85,ouUnder:1.85},
H_3_0:{h:'URU',a:'ESP',hw:5,d:3.75,aw:1.62,ahLine:0.75,ahHome:2.02,ahAway:1.8,ouLine:2.5,ouOver:1.85,ouUnder:1.85},H_3_1:{h:'URU',a:'CPV',hw:1.44,d:4.2,aw:7,ahLine:-1.25,ahHome:2.06,ahAway:1.76,ouLine:2.5,ouOver:1.85,ouUnder:1.85},
I_0_1:{h:'FRA',a:'SEN',hw:1.44,d:4.2,aw:6.5,ahLine:-1,ahHome:1.82,ahAway:2.1,ouLine:2.5,ouOver:1.85,ouUnder:1.85},I_0_2:{h:'FRA',a:'IRQ',hw:1.12,d:7.5,aw:26,ahLine:-2.5,ahHome:2,ahAway:1.81,ouLine:2.5,ouOver:1.44,ouUnder:2.5},
I_1_2:{h:'SEN',a:'IRQ',hw:1.4,d:4.33,aw:7.5,ahLine:-1.25,ahHome:1.9,ahAway:1.9,ouLine:2.5,ouOver:1.85,ouUnder:1.85},I_2_3:{h:'IRQ',a:'NOR',hw:13,d:6.5,aw:1.2,ahLine:2,ahHome:1.83,ahAway:2.09,ouLine:2.5,ouOver:1.55,ouUnder:2.3},
I_3_0:{h:'NOR',a:'FRA',hw:4.2,d:3.4,aw:1.83,ahLine:0.5,ahHome:1.97,ahAway:1.83,ouLine:2.5,ouOver:1.91,ouUnder:1.8},I_3_1:{h:'NOR',a:'SEN',hw:2.1,d:3.3,aw:3.3,ahLine:-0.25,ahHome:1.83,ahAway:1.98,ouLine:2.5,ouOver:1.95,ouUnder:1.75},
J_0_1:{h:'ARG',a:'ALG',hw:1.4,d:4.2,aw:8,ahLine:-1.25,ahHome:1.95,ahAway:1.95,ouLine:2.5,ouOver:1.83,ouUnder:1.91},J_0_2:{h:'ARG',a:'AUT',hw:1.67,d:3.6,aw:5,ahLine:-0.75,ahHome:1.78,ahAway:2.04,ouLine:2.5,ouOver:1.95,ouUnder:1.75},
J_1_2:{h:'ALG',a:'AUT',hw:3.6,d:3,aw:2.15,ahLine:0.25,ahHome:2,ahAway:1.81,ouLine:2.5,ouOver:2.15,ouUnder:1.65},J_2_3:{h:'AUT',a:'JOR',hw:1.33,d:5,aw:8.5,ahLine:-1.5,ahHome:1.98,ahAway:1.92,ouLine:2.5,ouOver:1.62,ouUnder:2.2},
J_3_0:{h:'JOR',a:'ARG',hw:15,d:7,aw:1.18,ahLine:2,ahHome:1.83,ahAway:1.96,ouLine:2.5,ouOver:1.53,ouUnder:2.38},J_3_1:{h:'JOR',a:'ALG',hw:6,d:3.9,aw:1.5,ahLine:1,ahHome:1.96,ahAway:1.84,ouLine:2.5,ouOver:1.91,ouUnder:1.8},
K_0_1:{h:'POR',a:'COD',hw:1.29,d:5,aw:10,ahLine:-1.5,ahHome:1.89,ahAway:2.02,ouLine:2.5,ouOver:1.67,ouUnder:2.1},K_0_2:{h:'POR',a:'UZB',hw:1.22,d:6,aw:12,ahLine:-1.75,ahHome:1.93,ahAway:1.88,ouLine:2.5,ouOver:1.5,ouUnder:2.4},
K_1_2:{h:'COD',a:'UZB',hw:2.3,d:3.2,aw:3,ahLine:-0.25,ahHome:1.98,ahAway:1.83,ouLine:2.5,ouOver:2.25,ouUnder:1.6},K_2_3:{h:'UZB',a:'COL',hw:6.5,d:4.5,aw:1.33,ahLine:1.25,ahHome:1.98,ahAway:1.93,ouLine:2.5,ouOver:1.91,ouUnder:1.8},
K_3_0:{h:'COL',a:'POR',hw:3.4,d:3.2,aw:2.1,ahLine:0.25,ahHome:1.98,ahAway:1.83,ouLine:2.5,ouOver:2.1,ouUnder:1.67},K_3_1:{h:'COL',a:'COD',hw:1.44,d:3.9,aw:7,ahLine:-1.25,ahHome:2.08,ahAway:1.75,ouLine:2.5,ouOver:2.1,ouUnder:1.67},
L_0_1:{h:'ENG',a:'CRO',hw:1.73,d:3.6,aw:4.6,ahLine:-0.75,ahHome:1.97,ahAway:1.93,ouLine:2.5,ouOver:2.05,ouUnder:1.7},L_0_2:{h:'ENG',a:'GHA',hw:1.3,d:5,aw:10,ahLine:-1.5,ahHome:1.89,ahAway:1.91,ouLine:2.5,ouOver:1.67,ouUnder:2.1},
L_1_2:{h:'CRO',a:'GHA',hw:1.65,d:3.6,aw:5,ahLine:-0.75,ahHome:1.78,ahAway:2.05,ouLine:2.5,ouOver:2.1,ouUnder:1.67},L_2_3:{h:'GHA',a:'PAN',hw:2.1,d:3.3,aw:3.4,ahLine:-0.25,ahHome:1.9,ahAway:2.01,ouLine:2.5,ouOver:2.15,ouUnder:1.65},
L_3_0:{h:'PAN',a:'ENG',hw:10,d:5.8,aw:1.25,ahLine:1.5,ahHome:1.99,ahAway:1.82,ouLine:2.5,ouOver:1.62,ouUnder:2.2},L_3_1:{h:'PAN',a:'CRO',hw:6.5,d:3.6,aw:1.55,ahLine:1,ahHome:1.85,ahAway:1.94,ouLine:2.5,ouOver:1.95,ouUnder:1.75}
};
// ========== 从 matchOdds 自动计算 liveOdds ==========
(function(){
  var ts={};
  Object.values(matchOdds).forEach(function(m){
    if(!ts[m.h])ts[m.h]={hw:[],aw:[],d:[]};
    if(!ts[m.a])ts[m.a]={hw:[],aw:[],d:[]};
    ts[m.h].hw.push(m.hw);ts[m.h].d.push(m.d);
    ts[m.a].aw.push(m.aw);ts[m.a].d.push(m.d);
  });
  Object.keys(liveOdds).forEach(function(c){
    var t=ts[c];
    if(t&&t.hw.length>0){
      liveOdds[c]={
        w:Math.round(t.hw.reduce(function(a,b){return a+b})/t.hw.length*100)/100,
        d:Math.round(t.d.reduce(function(a,b){return a+b})/t.d.length*100)/100,
        l:Math.round(t.aw.reduce(function(a,b){return a+b})/t.aw.length*100)/100
      };
    }
  });
})();

// ========== 暴露到全局 ==========
window.matchOdds = matchOdds;
window.initialOdds = initialOdds;
window.liveOdds = liveOdds;
window.lastUpdate = lastUpdate;
window.dataSource = 'William Hill';

console.log('✅ oddsdata.js 已加载: 72场比赛 (含AH/OU扩展字段) | 数据源: William Hill');

})();
