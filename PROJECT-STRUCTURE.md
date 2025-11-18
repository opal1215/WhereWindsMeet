# WhereWindsMeet 网站项目结构

## 📁 当前项目结构

```
WhereWindsMeet/
├── app/                          # Next.js App Router 页面
│   ├── layout.tsx                # 根布局（SEO元数据、字体、GA）
│   ├── page.tsx                  # 首页
│   ├── globals.css               # 全局样式
│   ├── sitemap.ts                # 动态网站地图
│   └── robots.ts                 # Robots.txt配置
│
├── components/                   # React组件
│   ├── seo/                      # SEO Schema组件
│   │   ├── SchemaOrg.tsx         # 基础Schema组件
│   │   ├── ArticleSchema.tsx     # 文章Schema
│   │   ├── HowToSchema.tsx       # 教程Schema
│   │   ├── BreadcrumbSchema.tsx  # 面包屑Schema
│   │   ├── WebSiteSchema.tsx     # 网站Schema
│   │   └── VideoGameSchema.tsx   # 游戏Schema
│   └── ui/                       # UI组件（待创建）
│
├── public/                       # 静态资源
│   ├── images/                   # 图片目录
│   │   ├── .gitkeep
│   │   └── IMAGE-REQUIREMENTS.md # 📄 图片需求文档
│   └── decorations/              # 装饰元素
│       └── .gitkeep
│
├── next.config.mjs               # Next.js配置（图片优化、性能）
├── tailwind.config.ts            # Tailwind CSS配置（设计系统）
├── postcss.config.mjs            # PostCSS配置
├── tsconfig.json                 # TypeScript配置
├── package.json                  # 项目依赖
│
├── SEO-Technical-Implementation-Spec.md  # 📄 SEO技术规范
├── wwm-complete-master-skill.md          # 📄 完整网站开发文档
└── PROJECT-STRUCTURE.md                   # 📄 本文件
```

---

## ✅ 已完成功能（阶段1）

### 1. SEO基础设施 🔍
- ✅ 6个Schema.org组件（Google搜索富结果）
- ✅ 完整的SEO元数据配置
- ✅ OpenGraph和Twitter卡片支持
- ✅ 动态sitemap.xml生成
- ✅ Robots.txt配置
- ✅ Google Analytics集成框架

### 2. 项目框架 🏗️
- ✅ Next.js 16 + TypeScript
- ✅ Tailwind CSS v3设计系统
- ✅ 图片优化配置（AVIF/WebP）
- ✅ 性能优化（压缩、CSS优化）
- ✅ 响应式字体系统（Google Fonts CDN）

### 3. 设计系统 🎨
- ✅ 金色+深蓝色武侠主题配色
- ✅ 完整的Tailwind配置
- ✅ 全局CSS变量
- ✅ 字体配置（Cinzel、Crimson Text、Inter）
- ✅ 动画系统基础

---

## 🚧 待开发内容（后续阶段）

### 阶段2：核心组件开发
- [ ] UI组件库（Button、Card、Navbar、Footer）
- [ ] 页面容器组件（Hero、SectionContainer）
- [ ] 导航组件（Breadcrumbs、RelatedContent）

### 阶段3：首页开发
- [ ] Hero英雄区
- [ ] 新手入门卡片区（2x2网格）
- [ ] 热门构建区（横向滚动）
- [ ] 世界地图预览区
- [ ] 互动工具区
- [ ] EEAT信任区
- [ ] Footer页脚

### 阶段4：内容页面模板
- [ ] 攻略页面模板（/guides/[slug]）
- [ ] 构建页面模板（/builds/[slug]）
- [ ] 工具页面框架
- [ ] 数据库页面框架

### 阶段5：优化和完善
- [ ] 性能优化（Lighthouse 90+）
- [ ] 移动端优化
- [ ] 可访问性测试（WCAG AA）
- [ ] Core Web Vitals优化

---

## 📊 URL结构规划（7大内容集群）

根据 `wwm-complete-master-skill.md` 和 `sitemap.ts` 配置：

### A. Getting Started & Progression
- `/beginner-guide`
- `/leveling-guide`
- `/currencies-and-economy`
- `/game-modes-overview`
- `/settings-optimization`

### B. Combat & Builds
- `/combat-overview`
- `/weapons/*` （swords, polearms, bows, dual-blades）
- `/martial-arts-styles`
- `/builds/*`
- `/attributes-and-stats`

### C. World & Exploration
- `/world-map`
- `/regions/*`
- `/fast-travel-and-movement`
- `/exploration-activities`

### D. Life Skills & Economy
- `/life-skills/*` （medicine, crafting）
- `/mini-games`
- `/farming-routes`

### E. Multiplayer & Social
- `/multiplayer-overview`
- `/co-op-and-teams`
- `/pvp-modes`
- `/guilds-and-organizations`
- `/social-features`

### F. Tools & Database
- `/tools/*` （build-planner, map-tracker, drop-table等）
- `/database/*` （weapons, skills, items, bosses）

### G. Meta & Updates
- `/news`
- `/tier-lists`
- `/meta-report`

---

## 🎨 设计系统配色

```css
/* 背景色 */
--bg-primary: #0A1628      /* 深蓝黑主背景 */
--bg-secondary: #132B47    /* 次级深蓝 */
--bg-card: #1A3A5C         /* 卡片背景 */

/* 金色（WWM DNA） */
--gold-primary: #D4AF37    /* 主金色 */
--gold-bright: #F0D87C     /* 亮金色 */
--gold-dark: #B8952E       /* 暗金色 */

/* 蓝色点缀 */
--blue-accent: #4A90E2     /* 亮蓝 */
--blue-muted: #2C5282      /* 中蓝 */

/* 文字颜色 */
--text-primary: #F5F1E8    /* 米白主文字 */
--text-secondary: #B8C5D6  /* 浅蓝灰次要文字 */
--text-muted: #7A8BA3      /* 暗蓝灰说明文字 */
```

---

## 🖼️ 图片资源需求

详细说明请查看：`public/images/IMAGE-REQUIREMENTS.md`

### 优先级高（必需）：
1. `og-image.jpg` (1200x630) - OpenGraph分享图
2. `twitter-image.jpg` (1200x630) - Twitter卡片
3. `logo.png` (512x512) - 网站Logo
4. `hero-bg.jpg` (1920x1080) - 首页英雄背景

### 优先级中：
- 区块背景图（3-5张，1920x800）
- 新手指南卡片图（4张，800x500）
- 构建卡片示例图（3-5张，800x500）

### 优先级低：
- 装饰元素PNG（金色笔触、云纹、山脉剪影）

---

## 🚀 快速启动

```bash
# 安装依赖（如果还没安装）
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 生产预览
npm start
```

---

## 📝 开发说明

1. **图片上传**：将图片放入 `public/images/` 目录
2. **组件开发**：新组件放入 `components/ui/` 或 `components/sections/`
3. **页面创建**：在 `app/` 目录下创建对应路由文件夹
4. **SEO配置**：每个页面使用 `generateMetadata` 函数
5. **Schema使用**：在页面中导入并使用相应的Schema组件

---

**最后更新**: 2025-11-18
**当前阶段**: 阶段1完成 ✅
**下一阶段**: 阶段2 - 核心组件开发
