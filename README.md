# 🏆 FIFA World Cup Analytics

> 世界杯足球数据分析平台 - 2022卡塔尔世界杯 & 2026美加墨世界杯

## 🚀 在线访问

部署于 Cloudflare Pages: **[https://your-project.pages.dev](https://your-project.pages.dev)**

## 📊 功能

- 🏟️ 完整赛程 & 淘汰赛对阵图
- 👥 球员数据（核心数据、生涯数据、媒体资料）
- 🏴 球队 & 小组信息
- 🔍 多语言搜索引擎
- 📈 数据可视化 & 对比分析
- 📱 响应式设计

## 🛠 技术栈

- 纯静态前端 (HTML + JavaScript + CSS)
- Cloudflare Pages 托管
- Brotli/Gzip 压缩传输

## 🖥 本地开发

```bash
node server.js
# 访问 http://localhost:8080
```

## 📁 项目结构

```
├── FIFAWorldCup.html      # 主入口
├── app.js                 # 应用逻辑
├── engine.js              # 搜索引擎 & 翻译引擎
├── playerdata_*.js        # 球员数据（按需加载）
├── matchdata.js           # 比赛数据
├── teamdata.js            # 球队数据
└── server.js              # 本地开发服务器
```

## 📄 License

MIT
