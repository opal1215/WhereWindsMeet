# WhereWindsMeet 网站项目结构

## 📁 当前项目结构

```
WhereWindsMeet/
├── app/                          # Next.js App Router 页面
│   ├── layout.tsx                # 根布局（SEO元数据、字体、GA）
│   ├── page.tsx                  # 首页
│   ├── globals.css               # 全局样式
│   ├── sitemap.ts                # 动态网站地图
│   ├── robots.ts                 # Robots.txt配置
│   ├── guides/                   # 攻略页面 ✅
│   │   └── [slug]/
│   │       └── page.tsx          # 动态攻略页面
│   └── builds/                   # 构建页面 ✅
│       └── [slug]/
│           └── page.tsx          # 动态构建页面
│
├── components/                   # React组件
│   ├── seo/                      # SEO Schema组件
│   │   ├── SchemaOrg.tsx         # 基础Schema组件
│   │   ├── ArticleSchema.tsx     # 文章Schema
│   │   ├── HowToSchema.tsx       # 教程Schema
│   │   ├── BreadcrumbSchema.tsx  # 面包屑Schema
│   │   ├── WebSiteSchema.tsx     # 网站Schema
│   │   └── VideoGameSchema.tsx   # 游戏Schema
│   ├── ui/                       # UI组件 ✅
│   │   ├── Button.tsx            # 按钮组件
│   │   ├── Card.tsx              # 卡片组件
│   │   ├── Navbar.tsx            # 导航栏
│   │   ├── Footer.tsx            # 页脚
│   │   ├── Breadcrumbs.tsx       # 面包屑导航
│   │   ├── RelatedContent.tsx    # 相关内容推荐
│   │   ├── FAQ.tsx               # FAQ组件（带Schema）
│   │   └── TableOfContents.tsx   # 目录导航组件
│   └── sections/                 # 页面容器组件 ✅
│       ├── Hero.tsx              # 英雄区组件
│       └── SectionContainer.tsx  # 区块容器
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

## ✅ 已完成功能

### 阶段1：SEO基础设施 + 项目框架 ✅

#### 1. SEO基础设施 🔍
- ✅ 6个Schema.org组件（Google搜索富结果）
- ✅ 完整的SEO元数据配置
- ✅ OpenGraph和Twitter卡片支持
- ✅ 动态sitemap.xml生成
- ✅ Robots.txt配置
- ✅ Google Analytics集成框架

#### 2. 项目框架 🏗️
- ✅ Next.js 16 + TypeScript
- ✅ Tailwind CSS v3设计系统
- ✅ 图片优化配置（AVIF/WebP）
- ✅ 性能优化（压缩、CSS优化）
- ✅ 响应式字体系统（Google Fonts CDN）

#### 3. 设计系统 🎨
- ✅ 金色+深蓝色武侠主题配色
- ✅ 完整的Tailwind配置
- ✅ 全局CSS变量
- ✅ 字体配置（Cinzel、Crimson Text、Inter）
- ✅ 动画系统基础

### 阶段2：核心组件库 + 首页骨架 ✅

#### 4. UI组件库 (6个组件) 🎨
- ✅ **Button**: primary/secondary/outline变体，支持Link和onClick
- ✅ **Card**: 卡片容器，支持图标、图片、href，三种变体
- ✅ **Navbar**: 响应式导航栏，支持子菜单、移动端菜单
- ✅ **Footer**: 4列布局，社交媒体链接、法律信息
- ✅ **Breadcrumbs**: 面包屑导航，支持Home图标
- ✅ **RelatedContent**: 相关内容推荐，支持紧凑模式

#### 5. 页面容器组件 (2个组件) 📦
- ✅ **Hero**: 全屏英雄区，渐变文字、双CTA按钮、滚动指示器
- ✅ **SectionContainer**: Son of Oak呼吸节奏区块容器，支持标题/副标题

#### 6. 完整首页 🏠
- ✅ Hero英雄区（全屏，渐变标题）
- ✅ 新手入门卡片区（2x2网格）
- ✅ 热门构建区（3列卡片）
- ✅ 世界地图预览区（2列布局）
- ✅ 互动工具区（3列工具卡片）
- ✅ EEAT信任区（关于说明）

### 阶段3：内容页面模板 ✅

#### 7. 攻略页面模板 📄
- ✅ **动态路由**：`/guides/[slug]` 支持generateStaticParams
- ✅ **完整文章布局**：标题、描述、作者、发布/修改日期
- ✅ **面包屑导航**：集成Breadcrumbs组件和Schema
- ✅ **目录导航（TOC）**：智能滚动监听，自动高亮当前章节
- ✅ **相关内容推荐**：RelatedContent组件集成
- ✅ **FAQ Section**：可折叠FAQ，自动生成FAQPage Schema
- ✅ **SEO优化**：ArticleSchema + BreadcrumbSchema完整集成
- ✅ **示例内容**：Beginner Guide完整示例

#### 8. 构建页面模板 🎮
- ✅ **动态路由**：`/builds/[slug]` 支持SSG
- ✅ **构建统计卡片**：伤害、防御、机动性、难度可视化进度条
- ✅ **武器和技能展示**：图标化列表
- ✅ **属性分配表格**：优先级标签，响应式表格
- ✅ **优劣势对比**：绿/红色边框卡片对比
- ✅ **进度指南**：早期/中期/后期阶段步骤
- ✅ **Build Planner CTA**：引导至工具页面
- ✅ **SEO优化**：HowToSchema + ArticleSchema集成
- ✅ **示例内容**：PVE DPS Build完整示例

#### 9. 新增UI组件（2个） 🎨
- ✅ **FAQ组件**：可折叠问答，自动生成FAQPage Schema
- ✅ **TableOfContents组件**：IntersectionObserver滚动监听，平滑跳转

### 阶段4：工具页面和数据库 ✅

#### 10. 数据库页面系统 📊
- ✅ **Weapons Database List**：`/database/weapons` - 武器数据库列表页
- ✅ **Weapon Detail Page**：`/database/weapons/[id]` - 单个武器详情页（动态路由）
- ✅ **DatabaseCard组件**：数据库卡片，支持稀有度颜色、统计数据、特殊能力
- ✅ **FilterBar组件**：搜索和筛选栏，支持类型、稀有度过滤
- ✅ **示例数据**：6个武器示例，1个完整详情页（Infernal Twinblades）

#### 11. 静态工具页面（3个） 🛠️
- ✅ **XP Calculator**：`/tools/xp-calculator` - 经验值计算器
  - 实时计算升级所需经验值
  - 活动XP效率对比
  - 进度条可视化
  - 等级滑块控制
- ✅ **Drop Table**：`/tools/drop-table` - 掉落表查询工具
  - Boss掉落数据库
  - 掉落率可视化
  - 可折叠详情表格
  - 搜索和筛选功能
- ✅ **Build Planner**：`/tools/build-planner` - 构建规划器（基础版）
  - 属性点分配系统
  - 实时统计计算
  - 预设构建加载
  - 武器和玩法选择
  - 保存和分享功能（UI已完成）

#### 12. 构建状态 🏗️
- ✅ 成功生成12个静态页面
- ✅ 所有TypeScript类型检查通过
- ✅ 动态路由SSG正常工作
- ⚠️ Viewport metadata警告（不影响功能，Next.js 16新特性）

---

## 🚧 待开发内容（后续阶段）

### 阶段5：内容扩展和优化
- [ ] 更多数据库页面（技能、物品、Boss）
- [ ] 更多攻略内容页面（基于sitemap规划）
- [ ] 更多构建示例
- [ ] 性能优化（Lighthouse 90+）
- [ ] 移动端优化测试
- [ ] 可访问性测试（WCAG AA）
- [ ] Core Web Vitals优化
- [ ] 图片资源替换（占位符→真实图片）

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
**当前阶段**: 阶段4完成 ✅
**下一阶段**: 阶段5 - 内容扩展和优化

**项目统计**：
- 总组件数：22个（6个SEO + 8个UI + 2个容器 + 2个数据库组件 + 4个页面模板）
- 静态页面：12个（首页 + 动态路由示例 + 工具页面 + 数据库页面）
- 代码行数：约10000+行
- 功能模块：攻略系统、构建系统、数据库系统、工具系统

## 🎯 组件使用示例

### Button组件
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="lg" href="/guides">
  View Guides
</Button>
```

### Card组件
```tsx
import { Card } from '@/components/ui/Card';
import { Sword } from 'lucide-react';

<Card
  title="Build Guide"
  description="Master the best builds"
  href="/builds"
  icon={<Sword className="w-8 h-8" />}
/>
```

### SectionContainer组件
```tsx
import { SectionContainer } from '@/components/sections/SectionContainer';

<SectionContainer
  title="Section Title"
  subtitle="Section description"
  background="secondary"
>
  {/* Your content here */}
</SectionContainer>
```

### FAQ组件
```tsx
import { FAQ } from '@/components/ui/FAQ';

const faqItems = [
  {
    question: 'What is the best starting sect?',
    answer: 'Wudang Sect is recommended for beginners...',
  },
  // More items...
];

<FAQ items={faqItems} title="Frequently Asked Questions" />
```

### TableOfContents组件
```tsx
import { TableOfContents } from '@/components/ui/TableOfContents';

const tocItems = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'getting-started', text: 'Getting Started', level: 2 },
  { id: 'basic-combat', text: 'Basic Combat', level: 3 },
];

<TableOfContents items={tocItems} />
```

### DatabaseCard组件（阶段4新增）
```tsx
import { DatabaseCard } from '@/components/database/DatabaseCard';

<DatabaseCard
  title="Infernal Twinblades"
  type="Dual Blades"
  rarity="Legendary"
  description="Legendary dual blades forged in the Infernal Volcano..."
  stats={[
    { label: 'Damage', value: 450 },
    { label: 'Attack Speed', value: 1.8 },
    { label: 'Required Level', value: 50 },
  ]}
  location="Northern Frontier - Infernal Volcano"
  specialAbility="Flame Trail: Attacks leave burning damage over 5 seconds"
  image="/images/weapons/infernal-twinblades.jpg"
  href="/database/weapons/infernal-twinblades"
/>
```

### FilterBar组件（阶段4新增）
```tsx
import { FilterBar, FilterState } from '@/components/database/FilterBar';

const weaponTypes = ['All', 'Sword', 'Dual Blades', 'Polearm', 'Bow', 'Fist'];
const rarities = ['All', 'Common', 'Rare', 'Epic', 'Legendary'];

const handleFilterChange = (filters: FilterState) => {
  console.log('Current filters:', filters);
  // Apply filtering logic
};

<FilterBar
  types={weaponTypes}
  rarities={rarities}
  placeholder="Search weapons..."
  onFilterChange={handleFilterChange}
/>
```
