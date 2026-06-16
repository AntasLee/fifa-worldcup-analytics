// ===== 2026世界杯 赛场分析数据 — 球场 / 大本营 / 天气配置 =====
// 版本: V1.72 | 生成: 2025-07-17
// 依赖: teamdata.js (pastTeamNames, pastFlag, pastFlagMap)
// 配合: app.js → showVenueAnalysis() 渲染函数

// ============================================================
//  一、2026年世界杯 16座球场 静态数据
// ============================================================
// 数据来源: FIFA官方场地手册, Wikipedia, StadiumDB
// [TODO: VERIFY] 标记项需赛后官方确认
// 海拔单位: 米 | 容量: 赛时座席 | 草皮: natural/hybrid/artificial

const venues2026 = {

  // ── 加拿大 (2座) ──
  toronto: {
    id: 'toronto',
    name:  { zh: 'BMO球场', en: 'BMO Field' },
    city:  { zh: '多伦多', en: 'Toronto' },
    country: 'CAN',
    coord: { lat: 43.6329, lng: -79.4186 },
    elevation: 86,
    capacity: 45736,
    grass: 'hybrid',
    timezone: 'America/Toronto',
    indoor: false
  },
  vancouver: {
    id: 'vancouver',
    name:  { zh: 'BC Place体育场', en: 'BC Place' },
    city:  { zh: '温哥华', en: 'Vancouver' },
    country: 'CAN',
    coord: { lat: 49.2767, lng: -123.1120 },
    elevation: 4,
    capacity: 54500,
    grass: 'artificial',           // [TODO: VERIFY] 世界杯可能换天然草
    timezone: 'America/Vancouver',
    indoor: true                   // 可伸缩顶棚
  },

  // ── 墨西哥 (3座) ──
  mexicoCity: {
    id: 'mexicoCity',
    name:  { zh: '阿兹特克球场', en: 'Estadio Azteca' },
    city:  { zh: '墨西哥城', en: 'Mexico City' },
    country: 'MEX',
    coord: { lat: 19.3029, lng: -99.1504 },
    elevation: 2250,               // ⚠️ 极高海拔 — 对客队显著不利
    capacity: 87523,
    grass: 'natural',
    timezone: 'America/Mexico_City',
    indoor: false
  },
  monterrey: {
    id: 'monterrey',
    name:  { zh: 'BBVA球场', en: 'Estadio BBVA' },
    city:  { zh: '蒙特雷', en: 'Monterrey' },
    country: 'MEX',
    coord: { lat: 25.6688, lng: -100.2445 },
    elevation: 537,
    capacity: 53500,
    grass: 'natural',
    timezone: 'America/Monterrey',
    indoor: false
  },
  guadalajara: {
    id: 'guadalajara',
    name:  { zh: '阿克伦球场', en: 'Estadio Akron' },
    city:  { zh: '瓜达拉哈拉', en: 'Guadalajara' },
    country: 'MEX',
    coord: { lat: 20.6817, lng: -103.4628 },
    elevation: 1566,               // 中度高原
    capacity: 48071,
    grass: 'natural',
    timezone: 'America/Mexico_City',
    indoor: false
  },

  // ── 美国 (11座) ──
  arlington: {
    id: 'arlington',
    name:  { zh: 'AT&T体育场', en: 'AT&T Stadium' },
    city:  { zh: '阿灵顿 (达拉斯)', en: 'Arlington (Dallas)' },
    country: 'USA',
    coord: { lat: 32.7473, lng: -97.0945 },
    elevation: 181,
    capacity: 80000,
    grass: 'artificial',           // [TODO: VERIFY] 世界杯或铺天然草
    timezone: 'America/Chicago',
    indoor: true                   // 可伸缩顶棚
  },
  inglewood: {
    id: 'inglewood',
    name:  { zh: 'SoFi体育场', en: 'SoFi Stadium' },
    city:  { zh: '英格尔伍德 (洛杉矶)', en: 'Inglewood (LA)' },
    country: 'USA',
    coord: { lat: 33.9535, lng: -118.3390 },
    elevation: 38,
    capacity: 70240,
    grass: 'artificial',           // [TODO: VERIFY]
    timezone: 'America/Los_Angeles',
    indoor: true                   // 半室内
  },
  eastRutherford: {
    id: 'eastRutherford',
    name:  { zh: '大都会人寿体育场', en: 'MetLife Stadium' },
    city:  { zh: '东卢瑟福 (纽约)', en: 'East Rutherford (NY)' },
    country: 'USA',
    coord: { lat: 40.8136, lng: -74.0744 },
    elevation: 3,
    capacity: 87157,
    grass: 'artificial',           // [TODO: VERIFY]
    timezone: 'America/New_York',
    indoor: false
  },
  atlanta: {
    id: 'atlanta',
    name:  { zh: '梅赛德斯-奔驰体育场', en: 'Mercedes-Benz Stadium' },
    city:  { zh: '亚特兰大', en: 'Atlanta' },
    country: 'USA',
    coord: { lat: 33.7555, lng: -84.4010 },
    elevation: 300,
    capacity: 71000,
    grass: 'artificial',           // [TODO: VERIFY]
    timezone: 'America/New_York',
    indoor: true                   // 可伸缩顶棚
  },
  santaClara: {
    id: 'santaClara',
    name:  { zh: '李维斯体育场', en: "Levi's Stadium" },
    city:  { zh: '圣克拉拉 (旧金山)', en: 'Santa Clara (SF)' },
    country: 'USA',
    coord: { lat: 37.4030, lng: -121.9702 },
    elevation: 7,
    capacity: 68500,
    grass: 'natural',
    timezone: 'America/Los_Angeles',
    indoor: false
  },
  philadelphia: {
    id: 'philadelphia',
    name:  { zh: '林肯金融体育场', en: 'Lincoln Financial Field' },
    city:  { zh: '费城', en: 'Philadelphia' },
    country: 'USA',
    coord: { lat: 39.9008, lng: -75.1675 },
    elevation: 11,
    capacity: 69176,
    grass: 'natural',
    timezone: 'America/New_York',
    indoor: false
  },
  seattle: {
    id: 'seattle',
    name:  { zh: '流明球场', en: 'Lumen Field' },
    city:  { zh: '西雅图', en: 'Seattle' },
    country: 'USA',
    coord: { lat: 47.5952, lng: -122.3316 },
    elevation: 5,
    capacity: 69000,
    grass: 'artificial',           // [TODO: VERIFY]
    timezone: 'America/Los_Angeles',
    indoor: false
  },
  kansasCity: {
    id: 'kansasCity',
    name:  { zh: '箭头体育场', en: 'Arrowhead Stadium' },
    city:  { zh: '堪萨斯城', en: 'Kansas City' },
    country: 'USA',
    coord: { lat: 39.0489, lng: -94.4840 },
    elevation: 279,
    capacity: 76416,
    grass: 'natural',
    timezone: 'America/Chicago',
    indoor: false
  },
  houston: {
    id: 'houston',
    name:  { zh: 'NRG体育场', en: 'NRG Stadium' },
    city:  { zh: '休斯顿', en: 'Houston' },
    country: 'USA',
    coord: { lat: 29.6847, lng: -95.4108 },
    elevation: 15,
    capacity: 72220,
    grass: 'artificial',           // [TODO: VERIFY]
    timezone: 'America/Chicago',
    indoor: true                   // 可伸缩顶棚
  },
  foxborough: {
    id: 'foxborough',
    name:  { zh: '吉列体育场', en: 'Gillette Stadium' },
    city:  { zh: '福克斯堡 (波士顿)', en: 'Foxborough (Boston)' },
    country: 'USA',
    coord: { lat: 42.0909, lng: -71.2643 },
    elevation: 78,
    capacity: 65878,
    grass: 'artificial',           // [TODO: VERIFY]
    timezone: 'America/New_York',
    indoor: false
  },
  miamiGardens: {
    id: 'miamiGardens',
    name:  { zh: '硬石体育场', en: 'Hard Rock Stadium' },
    city:  { zh: '迈阿密花园 (迈阿密)', en: 'Miami Gardens (Miami)' },
    country: 'USA',
    coord: { lat: 25.9580, lng: -80.2389 },
    elevation: 2,
    capacity: 64767,
    grass: 'natural',
    timezone: 'America/New_York',
    indoor: false
  }
};

// ============================================================
//  二、球队大本营预估数据 (赛前3-6个月公布)
// ============================================================
// [TODO: VERIFY] 全部数据需 FIFA Team Base Camp 官方公告后确认
// 以下为基于地理/历史惯例的合理预估

const teamBaseCamps2026 = {

  // ── 北美球队 (大本营在本国) ──
  USA: { city: { zh: '洛杉矶', en: 'Los Angeles' },    country: 'USA', coord: { lat: 33.9535, lng: -118.3390 } },
  MEX: { city: { zh: '墨西哥城', en: 'Mexico City' },   country: 'MEX', coord: { lat: 19.4326, lng: -99.1332 } },
  CAN: { city: { zh: '多伦多', en: 'Toronto' },         country: 'CAN', coord: { lat: 43.6532, lng: -79.3832 } },
  CUW: { city: { zh: '博卡拉顿', en: 'Boca Raton, FL' },country: 'USA', coord: { lat: 26.3683, lng: -80.1289 }, site: 'Florida Atlantic University' },
  HAI: { city: { zh: '加洛韦', en: 'Galloway, NJ' },    country: 'USA', coord: { lat: 39.4890, lng: -74.5360 }, site: 'Stockton University' },
  PAN: { city: { zh: '新特库姆塞斯', en: 'New Tecumseth, ON' }, country: 'CAN', coord: { lat: 44.0865, lng: -79.8640 }, site: 'Nottawasaga Training Site' },

  // ── 南美球队 (多数选择美国南部/墨西哥作为驻地) ──
  ARG: { city: { zh: '迈阿密', en: 'Miami' },           country: 'USA', coord: { lat: 25.7617, lng: -80.1918 } },
  BRA: { city: { zh: '奥兰多', en: 'Orlando' },          country: 'USA', coord: { lat: 28.5383, lng: -81.3792 } },
  URU: { city: { zh: '休斯顿', en: 'Houston' },          country: 'USA', coord: { lat: 29.7604, lng: -95.3698 } },
  COL: { city: { zh: '亚特兰大', en: 'Atlanta' },        country: 'USA', coord: { lat: 33.7490, lng: -84.3880 } },
  CHI: { city: { zh: '达拉斯', en: 'Dallas' },           country: 'USA', coord: { lat: 32.7767, lng: -96.7970 } },
  ECU: { city: { zh: '休斯顿', en: 'Houston' },          country: 'USA', coord: { lat: 29.7604, lng: -95.3698 } },
  PER: { city: { zh: '迈阿密', en: 'Miami' },           country: 'USA', coord: { lat: 25.7617, lng: -80.1918 } },
  PAR: { city: { zh: '迈阿密', en: 'Miami' },           country: 'USA', coord: { lat: 25.7617, lng: -80.1918 } },

  // ── 欧洲球队 (多数选择美国东北部/中部) ──
  ENG: { city: { zh: '纽约', en: 'New York' },           country: 'USA', coord: { lat: 40.7128, lng: -74.0060 } },
  FRA: { city: { zh: '华盛顿DC', en: 'Washington DC' },  country: 'USA', coord: { lat: 38.9072, lng: -77.0369 } },
  GER: { city: { zh: '芝加哥', en: 'Chicago' },          country: 'USA', coord: { lat: 41.8781, lng: -87.6298 } },
  ESP: { city: { zh: '波士顿', en: 'Boston' },           country: 'USA', coord: { lat: 42.3601, lng: -71.0589 } },
  ITA: { city: { zh: '费城', en: 'Philadelphia' },       country: 'USA', coord: { lat: 39.9526, lng: -75.1652 } },
  NED: { city: { zh: '纽约', en: 'New York' },           country: 'USA', coord: { lat: 40.7128, lng: -74.0060 } },
  POR: { city: { zh: '波士顿', en: 'Boston' },           country: 'USA', coord: { lat: 42.3601, lng: -71.0589 } },
  BEL: { city: { zh: '华盛顿DC', en: 'Washington DC' },  country: 'USA', coord: { lat: 38.9072, lng: -77.0369 } },
  CRO: { city: { zh: '芝加哥', en: 'Chicago' },          country: 'USA', coord: { lat: 41.8781, lng: -87.6298 } },
  DEN: { city: { zh: '纽约', en: 'New York' },           country: 'USA', coord: { lat: 40.7128, lng: -74.0060 } },
  SUI: { city: { zh: '纽约', en: 'New York' },           country: 'USA', coord: { lat: 40.7128, lng: -74.0060 } },
  SRB: { city: { zh: '芝加哥', en: 'Chicago' },          country: 'USA', coord: { lat: 41.8781, lng: -87.6298 } },
  SCO: { city: { zh: '夏洛特', en: 'Charlotte, NC' },    country: 'USA', coord: { lat: 35.2271, lng: -80.8431 }, site: 'Charlotte FC / Atrium Health Performance Park' },
  AUT: { city: { zh: '圣巴巴拉', en: 'Santa Barbara, CA' }, country: 'USA', coord: { lat: 34.4370, lng: -119.8346 }, site: 'UC Santa Barbara – Harder Stadium' },
  BIH: { city: { zh: '桑迪', en: 'Sandy, UT' },          country: 'USA', coord: { lat: 40.5648, lng: -111.8388 }, site: 'RSL Stadium / Real Salt Lake Training Center' },
  CZE: { city: { zh: '曼斯菲尔德', en: 'Mansfield, TX' }, country: 'USA', coord: { lat: 32.5632, lng: -97.1417 }, site: 'Mansfield Multipurpose Stadium' },
  NOR: { city: { zh: '格林斯伯勒', en: 'Greensboro, NC' }, country: 'USA', coord: { lat: 36.0726, lng: -79.7920 }, site: 'UNC Greensboro' },
  SWE: { city: { zh: '弗里斯科', en: 'Frisco, TX' },     country: 'USA', coord: { lat: 33.1507, lng: -96.8236 }, site: 'FC Dallas Stadium / Toyota Stadium' },
  TUR: { city: { zh: '梅萨', en: 'Mesa, AZ' },           country: 'USA', coord: { lat: 33.4152, lng: -111.8315 }, site: 'Arizona Athletic Grounds' },

  // ── 非洲球队 ──
  MAR: { city: { zh: '蒙特利尔', en: 'Montreal' },      country: 'CAN', coord: { lat: 45.5017, lng: -73.5673 } },
  SEN: { city: { zh: '华盛顿DC', en: 'Washington DC' },  country: 'USA', coord: { lat: 38.9072, lng: -77.0369 } },
  NGA: { city: { zh: '休斯顿', en: 'Houston' },          country: 'USA', coord: { lat: 29.7604, lng: -95.3698 } },
  GHA: { city: { zh: '亚特兰大', en: 'Atlanta' },        country: 'USA', coord: { lat: 33.7490, lng: -84.3880 } },
  CMR: { city: { zh: '达拉斯', en: 'Dallas' },           country: 'USA', coord: { lat: 32.7767, lng: -96.7970 } },
  ALG: { city: { zh: '蒙特利尔', en: 'Montreal' },      country: 'CAN', coord: { lat: 45.5017, lng: -73.5673 } },
  EGY: { city: { zh: '纽约', en: 'New York' },           country: 'USA', coord: { lat: 40.7128, lng: -74.0060 } },
  CIV: { city: { zh: '波士顿', en: 'Boston' },           country: 'USA', coord: { lat: 42.3601, lng: -71.0589 } },
  TUN: { city: { zh: '蒙特利尔', en: 'Montreal' },      country: 'CAN', coord: { lat: 45.5017, lng: -73.5673 } },
  RSA: { city: { zh: '休斯顿', en: 'Houston' },          country: 'USA', coord: { lat: 29.7604, lng: -95.3698 } },
  COD: { city: { zh: '休斯顿', en: 'Houston, TX' },      country: 'USA', coord: { lat: 29.7604, lng: -95.3698 }, site: 'Houston Training Centre' },
  CPV: { city: { zh: '坦帕', en: 'Tampa, FL' },          country: 'USA', coord: { lat: 27.9506, lng: -82.4572 }, site: 'Waters Sportsplex' },

  // ── 亚洲球队 ──
  JPN: { city: { zh: '洛杉矶', en: 'Los Angeles' },      country: 'USA', coord: { lat: 34.0522, lng: -118.2437 } },
  KOR: { city: { zh: '洛杉矶', en: 'Los Angeles' },      country: 'USA', coord: { lat: 34.0522, lng: -118.2437 } },
  KSA: { city: { zh: '达拉斯', en: 'Dallas' },           country: 'USA', coord: { lat: 32.7767, lng: -96.7970 } },
  IRN: { city: { zh: '休斯顿', en: 'Houston' },          country: 'USA', coord: { lat: 29.7604, lng: -95.3698 } },
  AUS: { city: { zh: '洛杉矶', en: 'Los Angeles' },      country: 'USA', coord: { lat: 34.0522, lng: -118.2437 } },
  QAT: { city: { zh: '达拉斯', en: 'Dallas' },           country: 'USA', coord: { lat: 32.7767, lng: -96.7970 } },
  UAE: { city: { zh: '迈阿密', en: 'Miami' },           country: 'USA', coord: { lat: 25.7617, lng: -80.1918 } },
  UZB: { city: { zh: '休斯顿', en: 'Houston' },          country: 'USA', coord: { lat: 29.7604, lng: -95.3698 } },
  CHN: { city: { zh: '洛杉矶', en: 'Los Angeles' },      country: 'USA', coord: { lat: 34.0522, lng: -118.2437 } },
  IRQ: { city: { zh: '格林布赖尔县', en: 'Greenbrier County, WV' }, country: 'USA', coord: { lat: 37.7965, lng: -80.2975 }, site: 'The Greenbrier Sports Performance Centre' },
  JOR: { city: { zh: '波特兰', en: 'Portland, OR' },     country: 'USA', coord: { lat: 45.5152, lng: -122.6784 }, site: 'University of Portland' },

  // ── 大洋洲 ──
  NZL: { city: { zh: '洛杉矶', en: 'Los Angeles' },      country: 'USA', coord: { lat: 34.0522, lng: -118.2437 } }
};

// ============================================================
//  三、天气数据配置 (Open-Meteo API)
// ============================================================

const weatherConfig = {
  // 免费天气API — 无需密钥
  apiBase: 'https://api.open-meteo.com/v1/forecast',
  
  // 请求参数模板 (latitude/longitude 由调用时填入)
  getUrl: function(lat, lng) {
    return this.apiBase + '?' +
      'latitude=' + lat + '&longitude=' + lng +
      '&current=temperature_2m,relative_humidity_2m,apparent_temperature,' +
      'precipitation,weather_code,wind_speed_10m,wind_direction_10m,' +
      'surface_pressure,visibility' +
      '&hourly=temperature_2m,precipitation_probability' +
      '&timezone=auto' +
      '&forecast_days=1';
  },

  // 天气代码 → 图标/文本 映射 (WMO 标准)
  weatherCodes: {
    0:  { icon: '☀️',  text: '晴',        en: 'Clear' },
    1:  { icon: '🌤️',  text: '大部晴',    en: 'Mostly Clear' },
    2:  { icon: '⛅',   text: '多云',      en: 'Partly Cloudy' },
    3:  { icon: '☁️',   text: '阴',        en: 'Overcast' },
    45: { icon: '🌫️',  text: '雾',        en: 'Fog' },
    48: { icon: '🌫️',  text: '冻雾',      en: 'Rime Fog' },
    51: { icon: '🌦️',  text: '小毛毛雨',  en: 'Light Drizzle' },
    53: { icon: '🌦️',  text: '毛毛雨',    en: 'Moderate Drizzle' },
    55: { icon: '🌧️',  text: '大毛毛雨',  en: 'Heavy Drizzle' },
    61: { icon: '🌧️',  text: '小雨',      en: 'Light Rain' },
    63: { icon: '🌧️',  text: '中雨',      en: 'Moderate Rain' },
    65: { icon: '🌧️',  text: '大雨',      en: 'Heavy Rain' },
    71: { icon: '🌨️',  text: '小雪',      en: 'Light Snow' },
    73: { icon: '🌨️',  text: '中雪',      en: 'Moderate Snow' },
    75: { icon: '❄️',   text: '大雪',      en: 'Heavy Snow' },
    80: { icon: '🌦️',  text: '阵雨',      en: 'Rain Showers' },
    95: { icon: '⛈️',   text: '雷暴',      en: 'Thunderstorm' }
  },

  // 手动信源链接 (当API不可用时)
  fallbackLabel: '查看天气预报 ↗',
  attribution: '数据: Open-Meteo (open-meteo.com) — 免费开源天气API',

  // 获取天气的异步函数 (可在 app.js 中调用)
  fetchWeather: async function(lat, lng) {
    try {
      const resp = await fetch(this.getUrl(lat, lng));
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      const cur = data.current;
      const wc = this.weatherCodes[cur.weather_code] || { icon: '❓', text: '未知', en: 'Unknown' };
      return {
        temp:       cur.temperature_2m,           // °C
        feelsLike:  cur.apparent_temperature,      // 体感温度 °C
        humidity:   cur.relative_humidity_2m,      // %
        windSpeed:  cur.wind_speed_10m,            // km/h
        windDir:    cur.wind_direction_10m,         // °
        precip:     cur.precipitation,              // mm
        pressure:   cur.surface_pressure,           // hPa
        visibility: cur.visibility,                 // m
        weatherCode: cur.weather_code,
        icon:       wc.icon,
        text:       wc.text,
        textEn:     wc.en,
        updatedAt:  new Date().toISOString(),
        source:     'Open-Meteo'
      };
    } catch (e) {
      console.warn('天气API请求失败:', e.message);
      return null;
    }
  }
};

// ============================================================
//  四、场馆名称映射 (matchdata.js venue字段 → venueId)
// ============================================================
// 用于历史世界杯场馆名称匹配（2026年以外）

const venueNameToId = {
  // 2022 卡塔尔
  '海湾球场':            'lusail',        // 近似映射
  '卢赛尔球场':          'lusail',
  '阿图玛玛球场':        'althumama',
  '哈利法国际球场':      'khalifa',
  '艾哈迈德·本·阿里球场':'ahmadBinAli',
  '974球场':             '974',
  '教育城球场':          'educationCity',
  '贾努布球场':          'janoub',
  // 其他常见球场名称可在此扩展
};

// ============================================================
//  五、核心计算函数
// ============================================================

/**
 * Haversine公式 — 计算两坐标间距离(km)
 * @param {number} lat1, lng1 — 起点坐标
 * @param {number} lat2, lng2 — 终点坐标
 * @returns {number} 距离 (公里)
 */
function haversineKm(lat1, lng1, lat2, lng2) {
  var R = 6371;
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLng = (lng2 - lng1) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * 海拔影响等级判定
 * @param {number} elevation — 海拔(m)
 * @returns {'extreme'|'high'|'medium'|'low'}
 */
function getElevationImpact(elevation) {
  if (elevation >= 2000) return 'extreme';  // 墨西哥城 2250m — 血氧显著下降
  if (elevation >= 1000) return 'high';     // 瓜达拉哈拉 1566m — 中度高原
  if (elevation >= 300)  return 'medium';   // 亚特兰大 300m, 蒙特雷 537m
  return 'low';                             // 大多数美国场馆 ~海平面
}

/**
 * 时区差异计算 (基于粗略经度 → 简化版，配合 IANA 时区)
 * @param {string} tz1 — 球队大本营所在时区 (未直接使用，由计算替代)
 * @param {string} tz2 — 球场所在地时区
 * @returns {number} 时差 (小时，正数=球场时间领先)
 */
function getTimezoneOffset(tzStr) {
  // 简化: 使用已知时区 → UTC偏移映射
  var offsets = {
    'America/Toronto': -4, 'America/Vancouver': -7,
    'America/Mexico_City': -6, 'America/Monterrey': -6,
    'America/New_York': -4, 'America/Chicago': -5,
    'America/Los_Angeles': -7, 'America/Denver': -6
  };
  return offsets[tzStr] || 0;
}

/**
 * 主要入口: 获取一场比赛的完整赛场分析数据
 * @param {string} venueId   — venues2026 的 key
 * @param {string} teamHCode — 主队代码 (如 'MEX')
 * @param {string} teamACode — 客队代码 (如 'RSA')
 * @returns {object} 分析结果
 */
function getVenueAnalysis(venueId, teamHCode, teamACode) {
  var venue = venues2026[venueId];
  if (!venue) return null;

  var baseH = teamBaseCamps2026[teamHCode];
  var baseA = teamBaseCamps2026[teamACode];

  var distH = baseH ? haversineKm(baseH.coord.lat, baseH.coord.lng, venue.coord.lat, venue.coord.lng) : null;
  var distA = baseA ? haversineKm(baseA.coord.lat, baseA.coord.lng, venue.coord.lat, venue.coord.lng) : null;

  return {
    venue: venue,
    // 大本营数据
    baseCampH: baseH || null,
    baseCampA: baseA || null,
    // 距离
    distanceH: distH,
    distanceA: distA,
    distanceDiff: (distH !== null && distA !== null) ? Math.abs(distH - distA) : null,
    // 海拔
    elevation: venue.elevation,
    elevationImpact: getElevationImpact(venue.elevation),
    // 天气 (调用时注入)
    weather: null,
    // 草皮
    grass: venue.grass,
    // 室内
    indoor: venue.indoor,
    // 元数据
    timestamp: new Date().toISOString()
  };
}

/**
 * 评估单个球队受客观因素影响的程度 (用于5.1双栏评级)
 * 返回每项因子的评级: 'advantage' | 'neutral' | 'disadvantage'
 */
function assessTeamFactors(venueId, teamCode, isHome) {
  var venue = venues2026[venueId];
  if (!venue) return null;

  var base = teamBaseCamps2026[teamCode];
  var dist = base ? haversineKm(base.coord.lat, base.coord.lng, venue.coord.lat, venue.coord.lng) : null;
  
  // 距离评级
  var distanceRating = 'neutral';
  if (dist !== null) {
    if (dist <= 800) distanceRating = 'advantage';       // 短途: 低消耗
    else if (dist <= 2000) distanceRating = 'neutral';    // 中途
    else distanceRating = 'disadvantage';                  // 长途: 高消耗
  }
  
  // 海拔评级 (球队所属国的适应性)
  var elevRating = 'neutral';
  var elev = venue.elevation;
  if (elev >= 1500) {
    // 高海拔: 墨西哥球队天然适应
    if (teamCode === 'MEX') elevRating = 'advantage';
    else if (['BOL','ECU','COL','PER'].indexOf(teamCode) >= 0) elevRating = 'neutral'; // 安第斯球队适应
    else elevRating = 'disadvantage';
  }

  // 草皮评级
  var grassRating = 'neutral';
  if (venue.grass === 'artificial') {
    // 多数球员不习惯人工草皮 (除非球队常年在人工草皮训练)
    grassRating = 'disadvantage';
  }

  // 温度评级 (简化: 基于球场纬度 → 6月气温预判)
  var tempRating = 'neutral';
  var lat = Math.abs(venue.coord.lat);
  if (lat < 30) {
    // 南部球场较热: 墨西哥城、瓜达拉哈拉、迈阿密、休斯顿、达拉斯、亚特兰大
    // 热: 对北欧球队不利
    if (['ENG','GER','DEN','NED','BEL','SUI','SWE','NOR','SCO','IRL','POL','CRO','SRB','UKR','RUS','ISL'].indexOf(teamCode) >= 0) {
      tempRating = 'disadvantage';
    }
    if (['MEX','BRA','ARG','COL','ECU','KSA','QAT','UAE','NGA','GHA','CMR','CIV','SEN','MAR','TUN','ALG'].indexOf(teamCode) >= 0) {
      tempRating = 'advantage';
    }
  }

  // 时区评级
  var tzRating = 'neutral';
  if (base) {
    var venueTzOffset = getTimezoneOffset(venue.timezone);
    var baseLng = base.coord.lng;
    var baseTzOffset = Math.round(baseLng / 15); // 粗略时区估算
    var tzDiff = Math.abs(venueTzOffset - baseTzOffset);
    if (tzDiff <= 1) tzRating = 'advantage';
    else if (tzDiff <= 4) tzRating = 'neutral';
    else tzRating = 'disadvantage';
  }

  return {
    distance:       { value: dist, rating: distanceRating },
    elevation:      { value: venue.elevation, rating: elevRating },
    grass:          { value: venue.grass, rating: grassRating },
    temperature:    { value: null, rating: tempRating },   // 天气API可覆盖
    timezone:       { value: null, rating: tzRating },
    indoor:         { value: venue.indoor, rating: venue.indoor ? 'advantage' : 'neutral' },
    // 综合计数
    advantageCount:   0,
    disadvantageCount:0,
    neutralCount:     0
  };
}

// ============================================================
//  五-A、2026世界杯 赛场映射 (分组/轮次 → 场馆)
// ============================================================
//  五-A、2026世界杯 赛场映射 (逐场精确映射)
// ============================================================
// 数据来源: FIFA 2026 Official Match Schedule (fifa.com)
// 校验: 交叉比对 ESPN / fifawc-2026.com / worldcuppass 等多源
// 更新时间: 2025-07-12
// 映射逻辑: match.id (格式: 组别_主队索引_客队索引) → 场馆
//           knockout则以 R32_N / R16_N / QF_N / SF_N / TP / FINAL 为key

var venueMatchMapping = {
  // ══════════════════════════════════════════════
  //  小组赛 (12组 × 6场 = 72场 · 逐场精确映射)
  // ══════════════════════════════════════════════
  
  // ── A组: MEX(0) RSA(1) KOR(2) CZE(3) ──
  'A_0_1': { id: 'mexicoCity',     name: '阿兹特克球场' },       // MEX vs RSA · Jun11
  'A_2_3': { id: 'guadalajara',    name: '阿克伦球场' },         // KOR vs CZE · Jun11
  'A_3_1': { id: 'atlanta',        name: '梅赛德斯-奔驰体育场' }, // CZE vs RSA · Jun18
  'A_0_2': { id: 'guadalajara',    name: '阿克伦球场' },         // MEX vs KOR · Jun18
  'A_1_2': { id: 'monterrey',      name: 'BBVA球场' },           // RSA vs KOR · Jun24
  'A_3_0': { id: 'mexicoCity',     name: '阿兹特克球场' },       // CZE vs MEX · Jun24

  // ── B组: CAN(0) BIH(1) QAT(2) SUI(3) ──
  'B_0_1': { id: 'toronto',        name: 'BMO球场' },            // CAN vs BIH · Jun12
  'B_2_3': { id: 'santaClara',     name: '李维斯体育场' },       // QAT vs SUI · Jun13
  'B_3_1': { id: 'inglewood',      name: 'SoFi体育场' },         // SUI vs BIH · Jun18
  'B_0_2': { id: 'vancouver',      name: 'BC Place体育场' },     // CAN vs QAT · Jun18
  'B_3_0': { id: 'vancouver',      name: 'BC Place体育场' },     // SUI vs CAN · Jun24
  'B_1_2': { id: 'seattle',        name: '流明球场' },           // BIH vs QAT · Jun24

  // ── C组: BRA(0) MAR(1) HAI(2) SCO(3) ──
  'C_0_1': { id: 'eastRutherford', name: '大都会人寿体育场' },   // BRA vs MAR · Jun13
  'C_2_3': { id: 'foxborough',     name: '吉列体育场' },         // HAI vs SCO · Jun13
  'C_3_1': { id: 'foxborough',     name: '吉列体育场' },         // SCO vs MAR · Jun19
  'C_0_2': { id: 'philadelphia',   name: '林肯金融体育场' },     // BRA vs HAI · Jun19
  'C_3_0': { id: 'miamiGardens',   name: '硬石体育场' },         // SCO vs BRA · Jun24
  'C_1_2': { id: 'atlanta',        name: '梅赛德斯-奔驰体育场' }, // MAR vs HAI · Jun24

  // ── D组: USA(0) PAR(1) AUS(2) TUR(3) ──
  'D_0_1': { id: 'inglewood',      name: 'SoFi体育场' },         // USA vs PAR · Jun12
  'D_2_3': { id: 'vancouver',      name: 'BC Place体育场' },     // AUS vs TUR · Jun13
  'D_0_2': { id: 'seattle',        name: '流明球场' },           // USA vs AUS · Jun19
  'D_3_1': { id: 'santaClara',     name: '李维斯体育场' },       // TUR vs PAR · Jun19
  'D_3_0': { id: 'inglewood',      name: 'SoFi体育场' },         // TUR vs USA · Jun25
  'D_1_2': { id: 'santaClara',     name: '李维斯体育场' },       // PAR vs AUS · Jun25

  // ── E组: GER(0) CUW(1) CIV(2) ECU(3) ──
  'E_0_1': { id: 'houston',        name: 'NRG体育场' },          // GER vs CUW · Jun14
  'E_2_3': { id: 'philadelphia',   name: '林肯金融体育场' },     // CIV vs ECU · Jun14
  'E_0_2': { id: 'toronto',        name: 'BMO球场' },            // GER vs CIV · Jun20
  'E_3_1': { id: 'kansasCity',     name: '箭头体育场' },         // ECU vs CUW · Jun20
  'E_3_0': { id: 'eastRutherford', name: '大都会人寿体育场' },   // ECU vs GER · Jun25
  'E_1_2': { id: 'philadelphia',   name: '林肯金融体育场' },     // CUW vs CIV · Jun25

  // ── F组: NED(0) JPN(1) SWE(2) TUN(3) ──
  'F_0_1': { id: 'arlington',      name: 'AT&T体育场' },         // NED vs JPN · Jun14
  'F_2_3': { id: 'monterrey',      name: 'BBVA球场' },           // SWE vs TUN · Jun14
  'F_0_2': { id: 'houston',        name: 'NRG体育场' },          // NED vs SWE · Jun20
  'F_3_1': { id: 'monterrey',      name: 'BBVA球场' },           // TUN vs JPN · Jun20
  'F_1_2': { id: 'arlington',      name: 'AT&T体育场' },         // JPN vs SWE · Jun25
  'F_3_0': { id: 'kansasCity',     name: '箭头体育场' },         // TUN vs NED · Jun25

  // ── G组: BEL(0) EGY(1) IRN(2) NZL(3) ──
  'G_0_1': { id: 'seattle',        name: '流明球场' },           // BEL vs EGY · Jun15
  'G_2_3': { id: 'inglewood',      name: 'SoFi体育场' },         // IRN vs NZL · Jun15
  'G_0_2': { id: 'inglewood',      name: 'SoFi体育场' },         // BEL vs IRN · Jun21
  'G_3_1': { id: 'vancouver',      name: 'BC Place体育场' },     // NZL vs EGY · Jun21
  'G_1_2': { id: 'seattle',        name: '流明球场' },           // EGY vs IRN · Jun26
  'G_3_0': { id: 'vancouver',      name: 'BC Place体育场' },     // NZL vs BEL · Jun26

  // ── H组: ESP(0) CPV(1) KSA(2) URU(3) ──
  'H_0_1': { id: 'atlanta',        name: '梅赛德斯-奔驰体育场' }, // ESP vs CPV · Jun15
  'H_2_3': { id: 'miamiGardens',   name: '硬石体育场' },         // KSA vs URU · Jun15
  'H_0_2': { id: 'atlanta',        name: '梅赛德斯-奔驰体育场' }, // ESP vs KSA · Jun21
  'H_3_1': { id: 'miamiGardens',   name: '硬石体育场' },         // URU vs CPV · Jun21
  'H_1_2': { id: 'houston',        name: 'NRG体育场' },          // CPV vs KSA · Jun26
  'H_3_0': { id: 'guadalajara',    name: '阿克伦球场' },         // URU vs ESP · Jun26

  // ── I组: FRA(0) SEN(1) IRQ(2) NOR(3) ──
  'I_0_1': { id: 'eastRutherford', name: '大都会人寿体育场' },   // FRA vs SEN · Jun16
  'I_2_3': { id: 'foxborough',     name: '吉列体育场' },         // IRQ vs NOR · Jun16
  'I_0_2': { id: 'philadelphia',   name: '林肯金融体育场' },     // FRA vs IRQ · Jun22
  'I_3_1': { id: 'eastRutherford', name: '大都会人寿体育场' },   // NOR vs SEN · Jun22
  'I_3_0': { id: 'foxborough',     name: '吉列体育场' },         // NOR vs FRA · Jun26
  'I_1_2': { id: 'toronto',        name: 'BMO球场' },            // SEN vs IRQ · Jun26

  // ── J组: ARG(0) ALG(1) AUT(2) JOR(3) ──
  'J_0_1': { id: 'kansasCity',     name: '箭头体育场' },         // ARG vs ALG · Jun16
  'J_2_3': { id: 'santaClara',     name: '李维斯体育场' },       // AUT vs JOR · Jun16
  'J_0_2': { id: 'arlington',      name: 'AT&T体育场' },         // ARG vs AUT · Jun22
  'J_3_1': { id: 'santaClara',     name: '李维斯体育场' },       // JOR vs ALG · Jun22
  'J_1_2': { id: 'kansasCity',     name: '箭头体育场' },         // ALG vs AUT · Jun27
  'J_3_0': { id: 'arlington',      name: 'AT&T体育场' },         // JOR vs ARG · Jun27

  // ── K组: POR(0) COD(1) UZB(2) COL(3) ──
  'K_0_1': { id: 'houston',        name: 'NRG体育场' },          // POR vs COD · Jun17
  'K_2_3': { id: 'mexicoCity',     name: '阿兹特克球场' },       // UZB vs COL · Jun17
  'K_0_2': { id: 'houston',        name: 'NRG体育场' },          // POR vs UZB · Jun23
  'K_3_1': { id: 'guadalajara',    name: '阿克伦球场' },         // COL vs COD · Jun23
  'K_3_0': { id: 'miamiGardens',   name: '硬石体育场' },         // COL vs POR · Jun27
  'K_1_2': { id: 'atlanta',        name: '梅赛德斯-奔驰体育场' }, // COD vs UZB · Jun27

  // ── L组: ENG(0) CRO(1) GHA(2) PAN(3) ──
  'L_0_1': { id: 'arlington',      name: 'AT&T体育场' },         // ENG vs CRO · Jun17
  'L_2_3': { id: 'toronto',        name: 'BMO球场' },            // GHA vs PAN · Jun17
  'L_0_2': { id: 'foxborough',     name: '吉列体育场' },         // ENG vs GHA · Jun23
  'L_3_1': { id: 'toronto',        name: 'BMO球场' },            // PAN vs CRO · Jun23
  'L_3_0': { id: 'eastRutherford', name: '大都会人寿体育场' },   // PAN vs ENG · Jun27
  'L_1_2': { id: 'philadelphia',   name: '林肯金融体育场' },     // CRO vs GHA · Jun27

  // ══════════════════════════════════════════════
  //  淘汰赛 (R32 / R16 / QF / SF / TP / FINAL)
  //  经官方赛程校验调整
  // ══════════════════════════════════════════════
  
  // ── 1/16决赛 (R32) 16场 ──
  'R32_1':  { id: 'inglewood',      name: 'SoFi体育场' },         // M73
  'R32_2':  { id: 'foxborough',     name: '吉列体育场' },         // M74
  'R32_3':  { id: 'monterrey',      name: 'BBVA球场' },           // M75
  'R32_4':  { id: 'houston',        name: 'NRG体育场' },          // M76
  'R32_5':  { id: 'eastRutherford', name: '大都会人寿体育场' },   // M77
  'R32_6':  { id: 'arlington',      name: 'AT&T体育场' },         // M78
  'R32_7':  { id: 'mexicoCity',     name: '阿兹特克球场' },       // M79
  'R32_8':  { id: 'atlanta',        name: '梅赛德斯-奔驰体育场' }, // M80
  'R32_9':  { id: 'santaClara',     name: '李维斯体育场' },       // M81
  'R32_10': { id: 'seattle',        name: '流明球场' },           // M82
  'R32_11': { id: 'toronto',        name: 'BMO球场' },            // M83
  'R32_12': { id: 'inglewood',      name: 'SoFi体育场' },         // M84
  'R32_13': { id: 'vancouver',      name: 'BC Place体育场' },     // M85
  'R32_14': { id: 'miamiGardens',   name: '硬石体育场' },         // M86
  'R32_15': { id: 'kansasCity',     name: '箭头体育场' },         // M87
  'R32_16': { id: 'arlington',      name: 'AT&T体育场' },         // M88

  // ── 1/8决赛 (R16) 8场 ──
  'R16_1': { id: 'philadelphia',    name: '林肯金融体育场' },     // M89
  'R16_2': { id: 'houston',         name: 'NRG体育场' },          // M90
  'R16_3': { id: 'eastRutherford',  name: '大都会人寿体育场' },   // M91
  'R16_4': { id: 'mexicoCity',      name: '阿兹特克球场' },       // M92
  'R16_5': { id: 'arlington',       name: 'AT&T体育场' },         // M93
  'R16_6': { id: 'seattle',         name: '流明球场' },           // M94
  'R16_7': { id: 'atlanta',         name: '梅赛德斯-奔驰体育场' }, // M95
  'R16_8': { id: 'vancouver',       name: 'BC Place体育场' },     // M96

  // ── 1/4决赛 ──
  'QF_1': { id: 'foxborough',       name: '吉列体育场' },         // M97
  'QF_2': { id: 'inglewood',        name: 'SoFi体育场' },         // M98
  'QF_3': { id: 'miamiGardens',     name: '硬石体育场' },         // M99
  'QF_4': { id: 'kansasCity',       name: '箭头体育场' },         // M100

  // ── 半决赛 ──
  'SF_1': { id: 'arlington',        name: 'AT&T体育场' },         // M101
  'SF_2': { id: 'atlanta',          name: '梅赛德斯-奔驰体育场' }, // M102

  // ── 季军赛 ──
  'TP': { id: 'miamiGardens',       name: '硬石体育场' },         // M103

  // ── 决赛 ──
  'FINAL': { id: 'eastRutherford',  name: '大都会人寿体育场' }    // M104
};

/**
 * 根据比赛对象获取对应的 2026 世界杯场馆（标准化格式）
 * @param {object} match — 比赛对象 (含 group/round/gid 等字段)
 * @returns {object|null} 标准化场馆对象，供 app.js renderVenueDashboard 使用
 */
function getVenueFor2026Match(match) {
  if (!match) return null;

  // 1. 确定查找key (V1.72: 优先 match.id 精确匹配)
  var lookupKey = null;
  // 最优先: match.id 逐场精确匹配 (如 'A_0_1', 'R32_5')
  if (match.id && venueMatchMapping[match.id]) {
    lookupKey = match.id;
  }
  // 其次: match.sid (如 'R32', 'R16', 'QF', 'SF', 'TP', 'FINAL')
  if (!lookupKey && match.sid && venueMatchMapping[match.sid]) {
    lookupKey = match.sid;
  }
  // 再次: round + group 组合 (如 'R32_1')
  if (!lookupKey && match.round && match.group) {
    var combined = match.round + '_' + match.group;
    if (venueMatchMapping[combined]) lookupKey = combined;
  }
  // 再次: match.gid (小组字母)
  if (!lookupKey && match.gid && venueMatchMapping[match.gid]) {
    lookupKey = match.gid;
  }
  // 兜底
  if (!lookupKey) lookupKey = 'A_0_1';  // 默认揭幕战·阿兹特克

  var mapping = venueMatchMapping[lookupKey];
  var venueId = mapping ? mapping.id : 'mexicoCity';
  var raw = venues2026[venueId];
  if (!raw) return null;

  // 2. 标准化 → 转为 app.js renderVenueDashboard 期望的格式
  var countryNames = { 'USA': '美国', 'MEX': '墨西哥', 'CAN': '加拿大' };
  return {
    nameZh:      raw.name.zh,
    nameEn:      raw.name.en,
    city:        raw.city.zh,
    country:     countryNames[raw.country] || raw.country,
    coordinates: [raw.coord.lat, raw.coord.lng],
    elevation:   raw.elevation,
    capacity:    raw.capacity,
    grassType:   raw.grass === 'natural' ? '天然草' : raw.grass === 'hybrid' ? '混合草' : '人工草',
    timezone:    raw.timezone,
    indoor:      raw.indoor,
    _raw:        raw,  // 保留原始引用供高级分析
    _venueId:    venueId
  };
}

/**
 * 标准化大本营数据 → app.js renderVenueDashboard 期望的格式
 * @param {object} camp — teamBaseCamps2026 中的原始数据
 * @returns {object|null} { city, coordinates }
 */
function normalizeBaseCamp(camp) {
  if (!camp) return null;
  return {
    city:        camp.city.zh,
    coordinates: [camp.coord.lat, camp.coord.lng],
    country:     camp.country
  };
}

// ============================================================
//  六、辅助函数 — 数据验证
// ============================================================

function validateVenuedata() {
  var venueIds = Object.keys(venues2026);
  var campCodes = Object.keys(teamBaseCamps2026);
  var issues = [];

  if (venueIds.length !== 16) {
    issues.push('⚠️ 球场数量: ' + venueIds.length + ' (应为16)');
  }

  venueIds.forEach(function(id) {
    var v = venues2026[id];
    if (!v.coord || v.coord.lat === undefined) issues.push('⚠️ ' + id + ': 缺少坐标');
    if (!v.elevation && v.elevation !== 0) issues.push('⚠️ ' + id + ': 缺少海拔');
    if (!v.capacity) issues.push('⚠️ ' + id + ': 缺少容量');
    if (!v.timezone) issues.push('⚠️ ' + id + ': 缺少时区');
  });

  var expectedTeams = 48;
  if (campCodes.length < expectedTeams) {
    issues.push('ℹ️ 大本营数据: ' + campCodes.length + ' 队 (预计' + expectedTeams + '队，赛前陆续补充)');
  }

  return { valid: issues.length === 0, issues: issues, venues: venueIds.length, baseCamps: campCodes.length };
}

// ============================================================
//  EXIF 信息
// ============================================================
// venues2026:     16座球场 (USA×11 + MEX×3 + CAN×2)
// teamBaseCamps: ~50队预估 (赛前FIFA官方公布后确认)
// weatherConfig:  Open-Meteo API — 免费，无需密钥
// 海拔范围:       2m (迈阿密) ~ 2250m (墨西哥城)
// 容量范围:       45,736 (多伦多) ~ 87,523 (墨西哥城)
