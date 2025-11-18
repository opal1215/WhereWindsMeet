# 📝 WhereWindsMeet 内容管理指南

## 目录结构

你的文章应该放在 `content/` 目录下的对应文件夹中：

```
content/
├── guides/          # 攻略文章（.md文件）
├── builds/          # 构建文章（.md文件）
└── database/        # 数据库条目（未来扩展）
    └── weapons/
```

## 📄 如何添加新文章

### 步骤1：创建 Markdown 文件

在对应的文件夹中创建一个 `.md` 文件，文件名将成为URL的一部分。

**示例：**
- `content/guides/beginner-guide.md` → URL: `/guides/beginner-guide`
- `content/builds/pve-tank.md` → URL: `/builds/pve-tank`

### 步骤2：编写 Frontmatter（文章元数据）

每个文章文件的开头必须包含 Frontmatter（使用 `---` 包裹的YAML格式元数据）。

---

## 🎯 攻略文章格式

### 完整示例

```markdown
---
title: "Where Winds Meet Beginner Guide"
description: "Complete guide for new players starting Where Winds Meet. Learn essential mechanics, combat basics, and progression systems."
author: "WWM Guides Team"
datePublished: "2025-11-16"
dateModified: "2025-11-18"
image: "/images/cards/beginner-guide.jpg"
keywords:
  - "where winds meet"
  - "wwm beginner guide"
  - "new player guide"
relatedGuides:
  - title: "Leveling Guide"
    url: "/leveling-guide"
    description: "Fast-track your character progression"
  - title: "Combat Overview"
    url: "/combat-overview"
    description: "Deep dive into combat mechanics"
faqs:
  - question: "What is the best starting sect for beginners?"
    answer: "Wudang Sect is generally recommended for beginners due to its balanced playstyle."
  - question: "How long does it take to reach max level?"
    answer: "For casual players, expect 40-60 hours of gameplay."
---

# 你的文章标题

文章正文开始...

## 第一部分

内容...

### 子标题

更多内容...
```

### Frontmatter 字段说明

| 字段 | 必需 | 说明 | 示例 |
|------|------|------|------|
| `title` | ✅ | 文章标题 | "Where Winds Meet Beginner Guide" |
| `description` | ✅ | SEO描述（150-160字符） | "Complete guide for new players..." |
| `author` | ✅ | 作者名称 | "WWM Guides Team" |
| `datePublished` | ✅ | 发布日期（YYYY-MM-DD） | "2025-11-16" |
| `dateModified` | ✅ | 最后修改日期 | "2025-11-18" |
| `image` | ✅ | 文章封面图片路径 | "/images/cards/beginner-guide.jpg" |
| `keywords` | ⭕ | SEO关键词列表 | 见上方示例 |
| `relatedGuides` | ⭕ | 相关文章推荐 | 见上方示例 |
| `faqs` | ⭕ | 常见问题（自动生成Schema） | 见上方示例 |

---

## 🛡️ 构建文章格式

### 完整示例

```markdown
---
title: "PVE DPS Build - Infernal Twinblades"
description: "Maximum damage output build for endgame PVE content using Dual Blades."
difficulty: "Hard"
playstyle: "Aggressive Melee DPS"
author: "WWM Builds Team"
datePublished: "2025-11-15"
dateModified: "2025-11-18"
image: "/images/cards/build-pve-dps.jpg"
stats:
  damage: 95
  defense: 40
  mobility: 85
  difficulty: 80
weapons:
  - "Infernal Twinblades"
  - "Celestial Daggers (Alternative)"
skills:
  - "Phantom Strike"
  - "Blade Fury"
  - "Dancing Shadows"
attributes:
  - name: "Strength"
    value: "60 points"
    priority: "High"
  - name: "Agility"
    value: "80 points"
    priority: "High"
gameplay: "Open combat with Shadow Step to close distance, apply Blade Fury for damage buff..."
strengths:
  - "Highest single-target DPS in the game"
  - "Excellent burst damage windows"
weaknesses:
  - "Low survivability - requires good positioning"
  - "Heavily gear-dependent"
steps:
  - name: "Early Game (Level 1-30)"
    text: "Focus on leveling Agility and Strength equally. Use any dual blades available."
  - name: "Mid Game (Level 31-50)"
    text: "Farm for Infernal Twinblades in Northern Frontier region."
relatedBuilds:
  - title: "PVE Tank Build"
    url: "/builds/pve-tank"
    description: "Defensive build for survivability"
---

# 你的构建标题

构建详细说明...
```

### 构建 Frontmatter 字段说明

| 字段 | 必需 | 说明 | 示例 |
|------|------|------|------|
| `title` | ✅ | 构建名称 | "PVE DPS Build - Infernal Twinblades" |
| `description` | ✅ | 构建简介 | "Maximum damage output build..." |
| `difficulty` | ✅ | 难度等级 | "Easy" / "Medium" / "Hard" / "Very Hard" |
| `playstyle` | ✅ | 玩法风格 | "Aggressive Melee DPS" |
| `author` | ✅ | 作者 | "WWM Builds Team" |
| `datePublished` | ✅ | 发布日期 | "2025-11-15" |
| `dateModified` | ✅ | 修改日期 | "2025-11-18" |
| `image` | ✅ | 封面图 | "/images/cards/build-pve-dps.jpg" |
| `stats` | ✅ | 属性评分（0-100） | damage, defense, mobility, difficulty |
| `weapons` | ✅ | 推荐武器列表 | 字符串数组 |
| `skills` | ✅ | 核心技能列表 | 字符串数组 |
| `attributes` | ✅ | 属性分配 | name, value, priority（High/Medium/Low） |
| `gameplay` | ✅ | 游戏玩法说明 | 文本字符串 |
| `strengths` | ✅ | 优势列表 | 字符串数组 |
| `weaknesses` | ✅ | 劣势列表 | 字符串数组 |
| `steps` | ✅ | 进度指南 | name + text（早期/中期/后期） |
| `relatedBuilds` | ⭕ | 相关构建 | title + url + description |

---

## 📸 图片管理

### 图片存放位置

所有图片应放在 `public/images/` 目录下：

```
public/images/
├── cards/              # 文章卡片封面图（800x500推荐）
│   ├── beginner-guide.jpg
│   └── build-pve-dps.jpg
├── weapons/            # 武器图片
├── og-image.jpg        # OpenGraph分享图（1200x630）
└── twitter-image.jpg   # Twitter卡片图（1200x630）
```

### 图片使用规范

- **文章封面**：800x500px（推荐）
- **OpenGraph图**：1200x630px（必需）
- **格式**：JPEG/PNG/WebP
- **引用方式**：`/images/cards/your-image.jpg`（从 public 开始的绝对路径）

---

## ✍️ Markdown 编写技巧

### 支持的Markdown语法

```markdown
# 一级标题（自动生成，通常不需要）
## 二级标题（会自动添加到目录）
### 三级标题（会自动添加到目录）

**粗体文字**
*斜体文字*

- 无序列表项1
- 无序列表项2

1. 有序列表项1
2. 有序列表项2

[链接文字](URL地址)
```

### 目录（Table of Contents）自动生成

系统会自动从你的 `## 二级标题` 和 `### 三级标题` 生成侧边栏目录导航。

**示例：**
```markdown
## Getting Started    ← 自动生成TOC
### Choosing Your Sect   ← 自动生成TOC
### Understanding Game Modes   ← 自动生成TOC
```

---

## 🚀 发布流程

### 1. 创建文章

在 `content/guides/` 或 `content/builds/` 创建 `.md` 文件。

### 2. 编写内容

按照上面的格式填写 Frontmatter 和正文。

### 3. 添加图片（如果需要）

将图片放到 `public/images/cards/` 目录。

### 4. 测试（可选）

运行开发服务器查看效果：
```bash
npm run dev
```

访问：`http://localhost:3000/guides/your-article-slug`

### 5. 构建（可选）

```bash
npm run build
```

系统会自动读取 `content/` 目录下的所有 `.md` 文件并生成静态页面。

---

## 📚 完整示例文件

### 示例1：攻略文章

查看：`content/guides/beginner-guide.md`

### 示例2：构建文章

查看：`content/builds/pve-dps.md`

---

## ❓ 常见问题

### Q: 我可以使用中文编写文章吗？
A: 可以！但网站是面向欧美用户的，建议正文使用英文。元数据（title, description）必须使用英文。

### Q: 如何修改已发布的文章？
A: 直接编辑对应的 `.md` 文件，更新 `dateModified` 日期，然后重新构建即可。

### Q: 文章会自动出现在导航栏吗？
A: 不会。文章通过URL直接访问（如 `/guides/beginner-guide`）。如需添加到导航栏，需要修改 `components/ui/Navbar.tsx`。

### Q: 可以添加自定义HTML吗？
A: 不建议。当前系统使用简单的Markdown渲染。如需复杂排版，可以联系开发者扩展功能。

### Q: 图片路径写错会怎样？
A: 页面会显示占位符或空白。确保图片路径正确且文件已上传到 `public/images/`。

### Q: 如何删除文章？
A: 直接删除对应的 `.md` 文件，然后重新构建。

---

## 🎯 快速上手检查清单

上传新文章前，请确认：

- ✅ 文件名使用小写字母和连字符（例如：`beginner-guide.md`）
- ✅ Frontmatter 必需字段全部填写
- ✅ 日期格式正确（YYYY-MM-DD）
- ✅ 图片已上传到 `public/images/cards/`
- ✅ 图片路径使用绝对路径（`/images/...`）
- ✅ 文章内容使用英文
- ✅ 至少包含2个二级标题（`##`）

---

**最后更新**: 2025-11-18
**文档版本**: 1.0

有任何问题，请参考示例文件或联系开发者。
