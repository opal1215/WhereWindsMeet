# Where Winds Meet 网站项目 - 完整状态文档

**最后更新**: 2024-11-18
**当前阶段**: 第5阶段完成，准备内容上传
**Git分支**: `claude/add-redemption-codes-page-01Qikc4u4F1zDXx4HbqGxUHd`

---

## 📋 项目概览

### 网站定位
- **目标用户**: 欧美PS5和PC玩家（Where Winds Meet国际版，2024年11月16日发布）
- **核心目标**: SEO驱动的自然流量获取，通过高质量攻略和工具吸引玩家
- **设计风格**: 3A级游戏网站审美，专业、无emoji、金色+深蓝配色

### 技术栈
- **框架**: Next.js 16 + TypeScript
- **样式**: Tailwind CSS v3
- **图片格式**: WEBP优先（性能优化）
- **内容管理**: Markdown + Gray Matter
- **SEO**: Schema.org结构化数据 + 完整meta标签

---

## ✅ 已完成功能清单

### 1. SEO基础设施
- [x] 6个Schema.org组件（ArticleSchema, BreadcrumbSchema, FAQSchema等）
- [x] 完整meta标签配置（OpenGraph, Twitter Cards）
- [x] 动态sitemap.xml生成
- [x] robots.txt配置
- [x] Google Analytics集成框架

### 2. 核心页面
- [x] **首页** (`/`) - Hero区 + Codes CTA + 内容区块
- [x] **兑换码页面** (`/codes`) - 5个活跃codes + 一键复制功能
- [x] **示例攻略页** (`/guides/beginner-guide`) - 完整文章模板
- [x] **示例构建页** (`/builds/pve-dps`) - 构建指南模板
- [x] **工具页面**:
  - `/tools/build-planner` - 构建规划器
  - `/tools/xp-calculator` - 经验计算器
  - `/tools/drop-table` - 掉落表查询

### 3. UI组件库（22个组件）
- **SEO组件** (6个): SchemaOrg, ArticleSchema, BreadcrumbSchema, FAQSchema, WebSiteSchema, VideoGameSchema
- **UI组件** (10个): Button, Card, Navbar, Footer, Breadcrumbs, RelatedContent, FAQ, TableOfContents, CopyButton, FilterBar
- **页面容器** (2个): Hero, SectionContainer
- **数据库组件** (2个): DatabaseCard, FilterBar

### 4. 性能优化
- [x] Next.js配置优化（图片、代码分割、tree shaking）
- [x] Lucide图标按需加载
- [x] 生产环境console移除
- [x] CSS优化
- [x] WEBP图片支持

### 5. 导航和内部链接
- [x] 导航栏："Codes"放在第一位
- [x] 首页Codes CTA横幅（金色渐变设计）
- [x] Sitemap优先级配置（/codes = 0.95）

---

## 🎨 设计系统

### 配色方案
```css
/* 背景色 */
--bg-primary: #0A1628      /* 深蓝黑主背景 */
--bg-secondary: #132B47    /* 次级深蓝 */
--bg-card: #1A3A5C         /* 卡片背景 */

/* 金色（核心品牌色）*/
--gold-primary: #D4AF37    /* 主金色 */
--gold-bright: #F0D87C     /* 亮金色 */
--gold-dark: #B8952E       /* 暗金色 */

/* 文字颜色 */
--text-primary: #F5F1E8    /* 米白主文字 */
--text-secondary: #B8C5D6  /* 浅蓝灰次要文字 */
```

### 字体系统
- **标题**: Cinzel (serif, 武侠感)
- **正文**: Crimson Text (易读性)
- **UI**: Inter (现代、清晰)

### 设计原则
- ❌ **绝对不使用emoji**
- ✅ 使用Lucide React图标
- ✅ 金色渐变用于重要元素
- ✅ 专业3A游戏网站审美

---

## 📂 项目文件结构

```
WhereWindsMeet/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 首页
│   ├── layout.tsx                # 根布局
│   ├── codes/page.tsx            # 兑换码页面 ✅
│   ├── guides/[slug]/page.tsx    # 动态攻略页面
│   ├── builds/[slug]/page.tsx    # 动态构建页面
│   ├── tools/                    # 工具页面
│   ├── database/                 # 数据库页面
│   ├── sitemap.ts                # 动态sitemap
│   └── robots.ts                 # Robots配置
│
├── components/
│   ├── seo/                      # SEO Schema组件
│   ├── ui/                       # UI组件
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   ├── CopyButton.tsx        # ✅ 新增
│   │   └── ...
│   └── sections/                 # 页面容器组件
│       ├── Hero.tsx              # ✅ 支持金色副标题
│       └── SectionContainer.tsx
│
├── content/                      # Markdown内容
│   ├── codes.md                  # ✅ 兑换码内容文档
│   ├── guides/                   # 📝 攻略文章目录
│   │   └── beginner-guide.md     # 示例攻略
│   └── builds/                   # 构建文章目录
│
├── public/
│   └── images/                   # 图片资源目录
│       └── hero-bg.webp          # ⏳ 待上传
│
├── lib/                          # 工具函数
│   └── content.ts                # Markdown解析
│
├── next.config.mjs               # ✅ 性能优化配置
├── tailwind.config.ts            # Tailwind配置
└── tsconfig.json                 # TypeScript配置
```

---

## 🎯 首页Hero区域配置

### 当前设置
```tsx
<Hero
  title="Find Your Way Through the Wuxia Winds"
  subtitle="Beginner tips, builds, maps and resources for PS5 & PC players."
  goldSubtitle={true}  // ✅ 副标题使用金色渐变
  backgroundImage="/images/hero-bg.webp"  // ⏳ 需要上传
/>
```

### Hero背景图要求
- **文件名**: `hero-bg.webp`
- **位置**: `/public/images/hero-bg.webp`
- **尺寸**: 1920 x 1080 像素
- **大小**: < 200KB
- **风格**: 武侠主题、深蓝色调、金色点缀

---

## 📝 待上传内容：4篇文章

### 文章结构规划

用户准备了4篇文章，形成完整的新手引导链：

1. **Is Where Winds Meet for You?** - 认知筛选
   目标slug: `is-where-winds-meet-for-you`

2. **First 3 Hours Guide** - 开局节奏
   目标slug: `first-3-hours-guide`

3. **Qinghe & Kaifeng Tips** - 地图生活技巧
   目标slug: `qinghe-kaifeng-tips`

4. **Combat Guide + Simple Builds** - 战斗体系
   目标slug: `combat-guide-simple-builds`

### 上传位置
```
/content/guides/
├── is-where-winds-meet-for-you.md
├── first-3-hours-guide.md
├── qinghe-kaifeng-tips.md
└── combat-guide-simple-builds.md
```

### Frontmatter模板示例

每篇文章需要以下frontmatter（已为用户准备好完整模板）：

```yaml
---
title: "文章标题"
description: "SEO描述"
author: "WWM Guides Team"
datePublished: "2024-11-18"
dateModified: "2024-11-18"
image: "/images/cards/文章缩略图.jpg"
keywords:
  - "关键词1"
  - "关键词2"
relatedGuides:
  - title: "相关文章"
    url: "/guides/slug"
    description: "描述"
faqs:
  - question: "问题"
    answer: "答案"
---
```

---

## 🔍 SEO策略总结

### 高优先级页面
1. **首页** (`/`) - Priority: 1.0
2. **兑换码页** (`/codes`) - Priority: 0.95, 日更新
3. **新手指南系列** - Priority: 0.9
4. **其他攻略** - Priority: 0.7-0.8

### 关键词定位
- **兑换码**: where winds meet codes, wwm redeem codes, free echo jade
- **新手**: where winds meet beginner guide, first 3 hours
- **战斗**: wwm combat guide, parry system, beginner builds
- **城市**: qinghe kaifeng tips, city guide

### 内部链接策略
```
首页 → Codes页面（CTA横幅）
首页 → 新手指南（Getting Started区块）

文章链：
文1(认知筛选) → 文2(前3小时)
文2(前3小时) → 文3(城市技巧) + 文4(战斗)
文3(城市) → 文4(战斗)
文4(战斗) → 高级builds
```

---

## 🛠️ Git和部署信息

### 当前分支
```bash
claude/add-redemption-codes-page-01Qikc4u4F1zDXx4HbqGxUHd
```

### 最近提交
1. ✅ 兑换码页面创建（含SEO优化）
2. ✅ 性能优化（Next.js配置）
3. ✅ 首页Hero更新（金色副标题）
4. ✅ WEBP格式支持

### 构建命令
```bash
npm install          # 安装依赖
npm run dev          # 开发模式
npm run build        # 生产构建
npm start            # 生产预览
```

### 构建状态
- ✅ 13个静态页面成功生成
- ✅ TypeScript检查通过
- ⚠️ Viewport metadata警告（不影响功能）

---

## 📸 图片资源状态

### 已配置（待上传）
- [ ] `/public/images/hero-bg.webp` - 首页Hero背景
- [ ] `/public/og-image.jpg` - OpenGraph分享图
- [ ] `/public/twitter-image.jpg` - Twitter卡片

### 文章缩略图（可选）
- [ ] `/public/images/cards/is-wwm-for-you.jpg`
- [ ] `/public/images/cards/first-3-hours.jpg`
- [ ] `/public/images/cards/qinghe-kaifeng.jpg`
- [ ] `/public/images/cards/combat-builds.jpg`

### 图片上传指南
详见项目文档：
- `HOW-TO-UPLOAD-HERO-IMAGE.md` - Hero图片指南
- `public/images/IMAGE-REQUIREMENTS.md` - 所有图片需求

---

## 🚀 下一步待办事项

### 立即需要完成
1. **上传Hero背景图** - `hero-bg.webp` 到 `/public/images/`
2. **上传4篇文章** - 到 `/content/guides/` 目录
3. **测试构建** - 确保所有页面正常生成

### 文章上传后需要做
1. 更新导航栏（添加4篇新文章链接）
2. 更新首页"Getting Started"区块
3. 更新sitemap（添加新文章）
4. 测试内部链接流转
5. 运行 `npm run build` 验证

### 后续优化
1. 添加Google Analytics追踪ID
2. 配置Google Search Console
3. 性能测试（Lighthouse 90+目标）
4. 移动端测试
5. 准备域名部署

---

## 🔧 开发工作流

### 添加新文章
1. 在 `/content/guides/` 创建 `.md` 文件
2. 添加完整frontmatter
3. 写入文章内容
4. 运行 `npm run build` 测试
5. 提交到Git

### 修改现有页面
1. 编辑对应的 `.tsx` 或 `.md` 文件
2. 本地预览 `npm run dev`
3. 测试构建 `npm run build`
4. 提交更改

### 添加新组件
1. 在 `components/ui/` 或 `components/sections/` 创建
2. 遵循现有组件模式（TypeScript + Tailwind）
3. 保持3A审美（无emoji、金色+深蓝配色）

---

## 📞 重要提醒

### 设计规范
- ❌ **绝对不要添加emoji**
- ✅ 使用Lucide React图标
- ✅ 遵循金色+深蓝配色
- ✅ 保持专业游戏网站审美

### 文件命名
- 使用小写字母 + 连字符
- 示例：`first-3-hours-guide.md`（✅）
- 避免：`First 3 Hours Guide.md`（❌）

### SEO优化
- 每个页面必须有完整meta标签
- 使用Schema.org结构化数据
- 文章间建立内部链接
- 关键词自然分布

---

## 📊 项目统计

- **总组件数**: 22个
- **静态页面**: 13个（已生成）
- **代码行数**: ~12,000+
- **文章数**: 1篇示例（待添加4篇）
- **SEO Schema类型**: 6种
- **活跃兑换码**: 5个

---

## ❓ 常见问题

### Q: 如何添加新的兑换码？
A: 编辑 `/app/codes/page.tsx` 中的 `activeCodes` 数组，按价值排序。

### Q: 文章放在哪里？
A: `/content/guides/` 目录，使用markdown格式，包含完整frontmatter。

### Q: 如何修改首页Hero文字？
A: 编辑 `/app/page.tsx` 中的 `<Hero>` 组件props。

### Q: WEBP图片会自动优化吗？
A: 是的，Next.js会自动优化为AVIF/WEBP，并生成多种尺寸。

### Q: 如何测试SEO？
A: 使用Google Search Console或Screaming Frog，检查meta标签和Schema标记。

---

**文档结束**

需要帮助？查看项目中的其他文档：
- `PROJECT-STRUCTURE.md` - 项目结构详解
- `SEO-Technical-Implementation-Spec.md` - SEO技术规范
- `CONTENT-GUIDE.md` - 内容编写指南
