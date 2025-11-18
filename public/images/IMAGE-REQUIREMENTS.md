# 图片资源需求说明

## 📁 上传位置说明

所有图片资源应该上传到以下目录：
- **主图片目录**: `/public/images/`
- **装饰元素**: `/public/decorations/`

## 🖼️ 必需图片列表

### 1. SEO 和社交媒体图片
上传位置：`/public/`

| 文件名 | 尺寸 | 用途 | 优先级 |
|--------|------|------|--------|
| `og-image.jpg` | 1200 x 630px | OpenGraph 分享图片 | 🔴 高 |
| `twitter-image.jpg` | 1200 x 630px | Twitter 卡片图片 | 🔴 高 |
| `logo.png` | 512 x 512px | 网站 Logo | 🔴 高 |
| `favicon.ico` | 32 x 32px | 浏览器图标 | 🔴 高 |

**设计要求**：
- 主题：武侠风格，深蓝色背景 + 金色元素
- OG/Twitter 图片应包含游戏角色或场景
- Logo 应简洁，适合各种尺寸显示

---

### 2. 首页英雄区图片
上传位置：`/public/images/`

| 文件名 | 尺寸 | 用途 | 优先级 |
|--------|------|------|--------|
| `hero-bg.jpg` | 1920 x 1080px | 首页背景图 | 🔴 高 |

**设计要求**：
- 武侠战士在夜晚场景
- 深蓝色调 + 金色点缀（符合网站配色）
- 图片右侧或中央留白，用于放置文字
- 压缩到 < 200KB

---

### 3. 区块背景图片
上传位置：`/public/images/`

| 文件名 | 尺寸 | 用途 | 数量 |
|--------|------|------|------|
| `section-bg-1.jpg` | 1920 x 800px | 各区块背景 | 3-5 张 |
| `section-bg-2.jpg` | 1920 x 800px | 各区块背景 | |
| `section-bg-3.jpg` | 1920 x 800px | 各区块背景 | |

**设计要求**：
- 不同游戏场景（城市、野外、战斗等）
- 深蓝色调为主
- 适度模糊，不抢主要内容的风头
- 每张 < 150KB

---

### 4. 卡片缩略图
上传位置：`/public/images/cards/`

这些图片将用于首页和各个页面的卡片组件：

#### 新手指南卡片
| 文件名 | 尺寸 | 内容 |
|--------|------|------|
| `beginner-guide.jpg` | 800 x 500px | 新手角色或教程场景 |
| `leveling-guide.jpg` | 800 x 500px | 角色升级/进度界面 |
| `game-modes.jpg` | 800 x 500px | 游戏模式选择 |
| `settings.jpg` | 800 x 500px | 游戏设置界面 |

#### 构建卡片示例
| 文件名 | 尺寸 | 内容 |
|--------|------|------|
| `build-pve-dps.jpg` | 800 x 500px | DPS 构建展示 |
| `build-pve-tank.jpg` | 800 x 500px | 坦克构建展示 |
| `build-pvp.jpg` | 800 x 500px | PVP 构建展示 |

**设计要求**：
- 清晰展示卡片主题
- 统一的视觉风格
- 每张 < 100KB

---

### 5. 装饰元素
上传位置：`/public/decorations/`

| 文件名 | 格式 | 用途 |
|--------|------|------|
| `gold-brush-1.png` | PNG 透明 | 金色笔触分隔线 |
| `gold-brush-2.png` | PNG 透明 | 金色笔触分隔线 |
| `cloud-pattern-1.png` | PNG 透明 | 中国云纹装饰 |
| `cloud-pattern-2.png` | PNG 透明 | 中国云纹装饰 |
| `mountain-silhouette.png` | PNG 透明 | 山脉剪影 |

**设计要求**：
- PNG 格式，透明背景
- 金色 (#D4AF37 或相近色)
- 宽度 150-250px
- 每张 < 50KB

---

## 🎨 图片规格总览

### 颜色方案
- **主背景色**：深蓝色 `#0A1628`
- **金色强调**：`#D4AF37` (主金色), `#F0D87C` (亮金色)
- **蓝色点缀**：`#4A90E2`

### 文件格式
- **照片类**：`.jpg` 或 `.webp`
- **图标/装饰**：`.png` (透明背景)
- **Logo**：`.svg` 或 `.png`

### 压缩要求
- 英雄图片：< 200KB
- 区块背景：< 150KB
- 卡片图片：< 100KB
- 装饰元素：< 50KB

---

## 🔧 推荐工具

### AI 图片生成提示词示例

**英雄背景图**：
```
A cinematic wuxia warrior standing on a mountain peak at night,
overlooking an ancient Chinese city with golden lanterns,
deep blue night sky with stars, dramatic lighting,
golden accent colors, highly detailed,
wide aspect ratio 16:9, atmospheric
```

**装饰元素**：
```
Traditional Chinese cloud pattern,
gold color on transparent background,
decorative element, simple design, PNG format
```

### 图片压缩工具
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim (Mac): https://imageoptim.com/

---

## 📋 上传检查清单

完成后请确认：
- [ ] 所有文件名使用小写和连字符（`-`）
- [ ] 图片尺寸符合要求
- [ ] 文件大小在限制范围内
- [ ] 已优化压缩（使用 TinyPNG 等工具）
- [ ] 透明背景的装饰元素使用 PNG 格式
- [ ] 所有图片都有适当的 alt 文本（稍后在代码中添加）

---

## 🚀 临时占位符

在您准备图片期间，网站会使用：
- 纯色背景占位符
- 渐变色块
- 文字占位符

这不影响网站功能开发，图片准备好后可以随时替换！

---

**最后更新**: 2025-11-18
