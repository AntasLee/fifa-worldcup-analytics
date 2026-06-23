// player_stats_2026.js — 2026世界杯球员个人统计（助攻榜 & 扑救榜）
// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
//
// V1.79 架构（2026-06-23 修订）:
//   助攻榜 → FIFAWorldCup.html showOvAssistRank() 从 wc2026MatchDetails.goals[].assist 纯动态聚合
//   扑救榜 → FIFAWorldCup.html showOvSaveRank() 从 wc2026MatchDetails.gkSaves + stats 动态计算
//   本文件不再维护静态硬编码数据，保留为架构说明占位。
//
// 数据源说明:
//   wc2026MatchDetails (matchdata.js) — 唯一权威数据源（goals/cards/gkSaves），助攻榜/扑救榜均从此读取
//   wc2026AllMatches   (matchdata_2026.js) — 增强数据（stats/mediaRating/xg），供 prob_engine/perfboard 等使用
//
// 名称匹配使用 _buildCnToInfo()（基于 squadDB + playerDB 构建中英文索引），缓存修复见 V1.79 CHANGELOG。
// ================================================================

console.log('✅ player_stats_2026.js 加载完成 — 助攻榜/扑救榜已切换为纯动态聚合引擎（V1.79）');
