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
BRA:{w:1.38,d:5.88,l:9.5},CAN:{w:1.61,d:4.36,l:6.69},CIV:{w:4.5,d:3.61,l:2},
COD:{w:6.97,d:4.33,l:1.92},COL:{w:2.1,d:4.01,l:5.86},CPV:{w:11.57,d:6.56,l:1.31},
CRO:{w:2.72,d:3.75,l:4.45},CUW:{w:22,d:9.55,l:1.18},CZE:{w:2.45,d:3.34,l:3.42},
ECU:{w:1.69,d:4.23,l:5.85},EGY:{w:2.78,d:3.95,l:2.59},ENG:{w:1.45,d:4.98,l:7.66},
ESP:{w:1.15,d:10.73,l:25.15},FRA:{w:1.48,d:5.5,l:11.71},GER:{w:1.32,d:6.85,l:10.31},
GHA:{w:5.53,d:4.15,l:2.21},HAI:{w:10.56,d:6.31,l:1.34},IRN:{w:3.17,d:4.16,l:2.25},
IRQ:{w:14.97,d:6.67,l:1.25},JOR:{w:9.59,d:5.51,l:1.34},JPN:{w:2.47,d:3.68,l:3.1},
KOR:{w:3.54,d:3.48,l:2.33},KSA:{w:12.02,d:6.21,l:1.32},MAR:{w:3.07,d:3.68,l:2.48},
MEX:{w:1.68,d:4.11,l:6.15},NED:{w:1.93,d:3.91,l:4.44},NOR:{w:2.52,d:4.67,l:6.41},
NZL:{w:4.72,d:3.8,l:1.9},PAN:{w:6.26,d:4.37,l:1.64},PAR:{w:3.94,d:3.45,l:2.19},
POR:{w:1.54,d:5.01,l:8.66},QAT:{w:11.91,d:5.95,l:1.34},RSA:{w:5.81,d:3.91,l:1.75},
SCO:{w:2.36,d:3.84,l:3.17},SEN:{w:4.01,d:4.08,l:3.6},SUI:{w:1.47,d:5.15,l:8.05},
SWE:{w:2.95,d:3.85,l:2.49},TUN:{w:4.86,d:3.63,l:1.93},TUR:{w:2.05,d:3.61,l:4.26},
URU:{w:1.53,d:4.56,l:7.74},USA:{w:1.94,d:3.8,l:4.53},UZB:{w:7.49,d:4.67,l:1.66}};

let liveOdds=JSON.parse(JSON.stringify(initialOdds));
let lastUpdate='2025-06-27';

// ========== 比赛级赔率 (72场小组赛, 扩展9字段) ==========
// 字段: h(主队), a(客队), hw(主胜赔), d(平赔), aw(客胜赔),
//       ahLine(让球线), ahHome(让球主赔), ahAway(让球客赔),
//       ouLine(大小线), ouOver(大球赔), ouUnder(小球赔)
const matchOdds={
A_0_1:{h:'MEX',a:'RSA',hw:1.42,d:4.31,aw:8.39,ahLine:-1.0,ahHome:1.27,ahAway:3.5,ouLine:2.5,ouOver:1.81,ouUnder:1.99},
A_0_2:{h:'MEX',a:'KOR',hw:1.79,d:3.5,aw:4.41,ahLine:-0.5,ahHome:1.6,ahAway:3.5,ouLine:2.5,ouOver:1.86,ouUnder:1.95},
A_1_2:{h:'RSA',a:'KOR',hw:3.89,d:3.32,aw:1.96,ahLine:0.25,ahHome:3.44,ahAway:1.74,ouLine:2.5,ouOver:1.89,ouUnder:1.92},
A_2_3:{h:'KOR',a:'CZE',hw:2.67,d:3.07,aw:2.82,ahLine:0.0,ahHome:2.37,ahAway:2.5,ouLine:2.0,ouOver:2.0,ouUnder:1.84},
A_3_0:{h:'CZE',a:'MEX',hw:2.1,d:4.76,aw:3.88,ahLine:-0.25,ahHome:1.87,ahAway:3.43,ouLine:2.5,ouOver:1.91,ouUnder:1.91},
A_3_1:{h:'CZE',a:'RSA',hw:1.94,d:3.2,aw:4.04,ahLine:-0.25,ahHome:1.73,ahAway:3.5,ouLine:2.5,ouOver:1.89,ouUnder:1.93},
B_0_1:{h:'CAN',a:'BIH',hw:1.81,d:3.51,aw:4.62,ahLine:-0.5,ahHome:1.61,ahAway:3.5,ouLine:2.5,ouOver:1.87,ouUnder:1.94},
B_0_2:{h:'CAN',a:'QAT',hw:1.3,d:4.93,aw:9.84,ahLine:-1.5,ahHome:1.16,ahAway:3.5,ouLine:3.0,ouOver:1.79,ouUnder:2.0},
B_1_2:{h:'BIH',a:'QAT',hw:1.56,d:3.9,aw:6.18,ahLine:-0.5,ahHome:1.39,ahAway:3.5,ouLine:2.5,ouOver:1.83,ouUnder:1.97},
B_2_3:{h:'QAT',a:'SUI',hw:12.91,d:6.41,aw:1.21,ahLine:1.0,ahHome:3.5,ahAway:1.08,ouLine:3.0,ouOver:1.78,ouUnder:2.01},
B_3_0:{h:'SUI',a:'CAN',hw:1.88,d:4.95,aw:4.79,ahLine:-0.25,ahHome:1.67,ahAway:3.5,ouLine:2.5,ouOver:1.88,ouUnder:1.93},
B_3_1:{h:'SUI',a:'BIH',hw:1.6,d:3.88,aw:5.34,ahLine:-0.5,ahHome:1.43,ahAway:3.5,ouLine:2.5,ouOver:1.83,ouUnder:1.97},
C_0_1:{h:'BRA',a:'MAR',hw:1.64,d:3.84,aw:5.3,ahLine:-0.5,ahHome:1.46,ahAway:3.5,ouLine:2.5,ouOver:1.84,ouUnder:1.96},
C_0_2:{h:'BRA',a:'HAI',hw:1.08,d:10,aw:29,ahLine:-2.5,ahHome:1.08,ahAway:3.5,ouLine:3.5,ouOver:1.76,ouUnder:2.03},
C_1_2:{h:'MAR',a:'HAI',hw:1.32,d:4.92,aw:9.43,ahLine:-1.5,ahHome:1.18,ahAway:3.5,ouLine:3.0,ouOver:1.79,ouUnder:2.0},
C_2_3:{h:'HAI',a:'SCO',hw:6.03,d:4.25,aw:1.53,ahLine:1.0,ahHome:3.5,ahAway:1.37,ouLine:2.5,ouOver:1.82,ouUnder:1.98},
C_3_0:{h:'SCO',a:'BRA',hw:2.38,d:4.2,aw:3.52,ahLine:0.0,ahHome:2.11,ahAway:3.12,ouLine:2.5,ouOver:1.95,ouUnder:1.87},
C_3_1:{h:'SCO',a:'MAR',hw:4.05,d:3.15,aw:1.98,ahLine:0.25,ahHome:3.5,ahAway:1.76,ouLine:2.5,ouOver:1.89,ouUnder:1.92},
D_0_1:{h:'USA',a:'PAR',hw:1.94,d:3.37,aw:4.14,ahLine:-0.25,ahHome:1.73,ahAway:3.5,ouLine:2.5,ouOver:1.89,ouUnder:1.93},
D_0_2:{h:'USA',a:'AUS',hw:1.72,d:3.82,aw:4.39,ahLine:-0.5,ahHome:1.53,ahAway:3.5,ouLine:2.5,ouOver:1.85,ouUnder:1.95},
D_1_2:{h:'PAR',a:'AUS',hw:2.16,d:3.14,aw:3.46,ahLine:-0.25,ahHome:1.92,ahAway:3.06,ouLine:2.5,ouOver:1.92,ouUnder:1.9},
D_2_3:{h:'AUS',a:'TUR',hw:4.96,d:3.72,aw:1.71,ahLine:0.5,ahHome:3.5,ahAway:1.52,ouLine:2.5,ouOver:1.85,ouUnder:1.95},
D_3_0:{h:'TUR',a:'USA',hw:1.93,d:5.02,aw:4.44,ahLine:-0.25,ahHome:1.72,ahAway:3.5,ouLine:2.5,ouOver:1.88,ouUnder:1.93},
D_3_1:{h:'TUR',a:'PAR',hw:2.2,d:3.12,aw:3.36,ahLine:0.0,ahHome:1.96,ahAway:2.98,ouLine:2.5,ouOver:1.93,ouUnder:1.9},
E_0_1:{h:'GER',a:'CUW',hw:1.05,d:15,aw:51,ahLine:-2.5,ahHome:1.08,ahAway:3.5,ouLine:3.5,ouOver:1.75,ouUnder:2.03},
E_0_2:{h:'GER',a:'CIV',hw:1.55,d:4.14,aw:5.4,ahLine:-0.5,ahHome:1.38,ahAway:3.5,ouLine:2.5,ouOver:1.83,ouUnder:1.97},
E_1_2:{h:'CUW',a:'CIV',hw:13.6,d:6.02,aw:1.21,ahLine:1.0,ahHome:3.5,ahAway:1.08,ouLine:3.0,ouOver:1.78,ouUnder:2.01},
E_2_3:{h:'CIV',a:'ECU',hw:3.48,d:2.87,aw:2.38,ahLine:0.0,ahHome:3.08,ahAway:2.11,ouLine:2.5,ouOver:1.95,ouUnder:1.87},
E_3_0:{h:'ECU',a:'GER',hw:2.23,d:4.16,aw:3.94,ahLine:0.0,ahHome:1.98,ahAway:3.49,ouLine:2.5,ouOver:1.93,ouUnder:1.89},
E_3_1:{h:'ECU',a:'CUW',hw:1.19,d:6.48,aw:13.11,ahLine:-2.0,ahHome:1.08,ahAway:3.5,ouLine:3.5,ouOver:1.77,ouUnder:2.02},
F_0_1:{h:'NED',a:'JPN',hw:2.05,d:3.48,aw:3.61,ahLine:-0.25,ahHome:1.82,ahAway:3.2,ouLine:2.5,ouOver:1.9,ouUnder:1.91},
F_0_2:{h:'NED',a:'SWE',hw:1.63,d:3.91,aw:4.98,ahLine:-0.5,ahHome:1.45,ahAway:3.5,ouLine:2.5,ouOver:1.84,ouUnder:1.96},
F_1_2:{h:'JPN',a:'SWE',hw:2.08,d:3.36,aw:3.49,ahLine:-0.25,ahHome:1.85,ahAway:3.09,ouLine:2.5,ouOver:1.91,ouUnder:1.91},
F_2_3:{h:'SWE',a:'TUN',hw:1.92,d:3.37,aw:4.18,ahLine:-0.25,ahHome:1.71,ahAway:3.5,ouLine:2.5,ouOver:1.88,ouUnder:1.93},
F_3_0:{h:'TUN',a:'NED',hw:2.29,d:4.52,aw:3.5,ahLine:0.0,ahHome:2.04,ahAway:3.1,ouLine:2.5,ouOver:1.94,ouUnder:1.89},
F_3_1:{h:'TUN',a:'JPN',hw:5.01,d:3.43,aw:1.71,ahLine:0.5,ahHome:3.5,ahAway:1.52,ouLine:2.5,ouOver:1.85,ouUnder:1.95},
G_0_1:{h:'BEL',a:'EGY',hw:1.67,d:3.78,aw:5.23,ahLine:-0.5,ahHome:1.49,ahAway:3.5,ouLine:2.5,ouOver:1.85,ouUnder:1.96},
G_0_2:{h:'BEL',a:'IRN',hw:1.39,d:4.41,aw:7.59,ahLine:-1.0,ahHome:1.24,ahAway:3.5,ouLine:3.0,ouOver:1.8,ouUnder:1.99},
G_1_2:{h:'EGY',a:'IRN',hw:2.24,d:2.96,aw:3.48,ahLine:0.0,ahHome:1.99,ahAway:3.08,ouLine:2.5,ouOver:1.93,ouUnder:1.89},
G_2_3:{h:'IRN',a:'NZL',hw:1.85,d:3.5,aw:4.42,ahLine:-0.25,ahHome:1.65,ahAway:3.5,ouLine:2.5,ouOver:1.87,ouUnder:1.94},
G_3_0:{h:'NZL',a:'BEL',hw:2.46,d:4.28,aw:3.29,ahLine:0.0,ahHome:2.18,ahAway:2.92,ouLine:2.5,ouOver:1.96,ouUnder:1.86},
G_3_1:{h:'NZL',a:'EGY',hw:4.47,d:3.66,aw:1.74,ahLine:0.5,ahHome:3.5,ahAway:1.55,ouLine:2.5,ouOver:1.86,ouUnder:1.95},
H_0_1:{h:'ESP',a:'CPV',hw:1.09,d:10.84,aw:25.73,ahLine:-2.5,ahHome:1.08,ahAway:3.5,ouLine:3.5,ouOver:1.76,ouUnder:2.03},
H_0_2:{h:'ESP',a:'KSA',hw:1.1,d:9.61,aw:22.28,ahLine:-2.5,ahHome:1.08,ahAway:3.5,ouLine:3.5,ouOver:1.76,ouUnder:2.03},
H_1_2:{h:'CPV',a:'KSA',hw:2.57,d:3.19,aw:2.73,ahLine:0.0,ahHome:2.28,ahAway:2.42,ouLine:2.0,ouOver:1.98,ouUnder:1.85},
H_2_3:{h:'KSA',a:'URU',hw:7.63,d:4.23,aw:1.45,ahLine:1.0,ahHome:3.5,ahAway:1.3,ouLine:2.5,ouOver:1.81,ouUnder:1.99},
H_3_0:{h:'URU',a:'ESP',hw:2.29,d:4.14,aw:3.77,ahLine:0.0,ahHome:2.04,ahAway:3.34,ouLine:2.5,ouOver:1.94,ouUnder:1.89},
H_3_1:{h:'URU',a:'CPV',hw:1.44,d:4.2,aw:6.5,ahLine:-1.0,ahHome:1.29,ahAway:3.5,ouLine:2.5,ouOver:1.81,ouUnder:1.99},
I_0_1:{h:'FRA',a:'SEN',hw:1.44,d:4.2,aw:6.5,ahLine:-1.0,ahHome:1.29,ahAway:3.5,ouLine:2.5,ouOver:1.81,ouUnder:1.99},
I_0_2:{h:'FRA',a:'IRQ',hw:1.12,d:8,aw:26,ahLine:-2.5,ahHome:1.08,ahAway:3.5,ouLine:3.5,ouOver:1.76,ouUnder:2.03},
I_1_2:{h:'SEN',a:'IRQ',hw:1.44,d:4.2,aw:7,ahLine:-1.0,ahHome:1.29,ahAway:3.5,ouLine:2.5,ouOver:1.81,ouUnder:1.99},
I_2_3:{h:'IRQ',a:'NOR',hw:13,d:6.5,aw:1.2,ahLine:1.0,ahHome:3.5,ahAway:1.08,ouLine:3.5,ouOver:1.78,ouUnder:2.02},
I_3_0:{h:'NOR',a:'FRA',hw:4.2,d:3.4,aw:1.83,ahLine:0.5,ahHome:3.5,ahAway:1.63,ouLine:2.5,ouOver:1.87,ouUnder:1.94},
I_3_1:{h:'NOR',a:'SEN',hw:2.1,d:3.3,aw:3.3,ahLine:-0.25,ahHome:1.87,ahAway:2.92,ouLine:2.5,ouOver:1.91,ouUnder:1.91},
J_0_1:{h:'ARG',a:'ALG',hw:1.4,d:4.2,aw:8,ahLine:-1.0,ahHome:1.25,ahAway:3.5,ouLine:3.0,ouOver:1.81,ouUnder:1.99},
J_0_2:{h:'ARG',a:'AUT',hw:1.67,d:3.5,aw:5,ahLine:-0.5,ahHome:1.49,ahAway:3.5,ouLine:2.5,ouOver:1.85,ouUnder:1.96},
J_1_2:{h:'ALG',a:'AUT',hw:3.6,d:3,aw:2.15,ahLine:0.25,ahHome:3.19,ahAway:1.91,ouLine:2.5,ouOver:1.92,ouUnder:1.9},
J_2_3:{h:'AUT',a:'JOR',hw:1.3,d:5,aw:9,ahLine:-1.5,ahHome:1.16,ahAway:3.5,ouLine:3.0,ouOver:1.79,ouUnder:2.0},
J_3_0:{h:'JOR',a:'ARG',hw:13,d:6.5,aw:1.2,ahLine:1.0,ahHome:3.5,ahAway:1.08,ouLine:3.5,ouOver:1.78,ouUnder:2.02},
J_3_1:{h:'JOR',a:'ALG',hw:6,d:3.9,aw:1.5,ahLine:1.0,ahHome:3.5,ahAway:1.34,ouLine:2.5,ouOver:1.82,ouUnder:1.98},
K_0_1:{h:'POR',a:'COD',hw:1.25,d:5,aw:10,ahLine:-1.5,ahHome:1.12,ahAway:3.5,ouLine:3.0,ouOver:1.78,ouUnder:2.01},
K_0_2:{h:'POR',a:'UZB',hw:1.22,d:5.8,aw:12,ahLine:-2.0,ahHome:1.09,ahAway:3.5,ouLine:3.0,ouOver:1.78,ouUnder:2.01},
K_1_2:{h:'COD',a:'UZB',hw:2.3,d:3.2,aw:3,ahLine:0.0,ahHome:2.04,ahAway:2.66,ouLine:2.5,ouOver:1.94,ouUnder:1.88},
K_2_3:{h:'UZB',a:'COL',hw:6.5,d:4.5,aw:1.33,ahLine:1.0,ahHome:3.5,ahAway:1.19,ouLine:3.0,ouOver:1.79,ouUnder:2.0},
K_3_0:{h:'COL',a:'POR',hw:3.4,d:3.2,aw:2.1,ahLine:0.25,ahHome:3.01,ahAway:1.87,ouLine:2.5,ouOver:1.91,ouUnder:1.91},
K_3_1:{h:'COL',a:'COD',hw:1.44,d:3.9,aw:7,ahLine:-1.0,ahHome:1.29,ahAway:3.5,ouLine:2.5,ouOver:1.81,ouUnder:1.99},
L_0_1:{h:'ENG',a:'CRO',hw:1.73,d:3.6,aw:4.6,ahLine:-0.5,ahHome:1.54,ahAway:3.5,ouLine:2.5,ouOver:1.85,ouUnder:1.95},
L_0_2:{h:'ENG',a:'GHA',hw:1.3,d:4.8,aw:10,ahLine:-1.5,ahHome:1.16,ahAway:3.5,ouLine:3.0,ouOver:1.79,ouUnder:2.0},
L_1_2:{h:'CRO',a:'GHA',hw:1.67,d:3.6,aw:5,ahLine:-0.5,ahHome:1.49,ahAway:3.5,ouLine:2.5,ouOver:1.85,ouUnder:1.96},
L_2_3:{h:'GHA',a:'PAN',hw:2,d:3.4,aw:3.5,ahLine:-0.25,ahHome:1.78,ahAway:3.1,ouLine:2.5,ouOver:1.9,ouUnder:1.92},
L_3_0:{h:'PAN',a:'ENG',hw:9,d:5.5,aw:1.29,ahLine:1.0,ahHome:3.5,ahAway:1.16,ouLine:3.0,ouOver:1.79,ouUnder:2.01},
L_3_1:{h:'PAN',a:'CRO',hw:6.5,d:3.6,aw:1.55,ahLine:0.5,ahHome:3.5,ahAway:1.38,ouLine:2.5,ouOver:1.83,ouUnder:1.97}};

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
