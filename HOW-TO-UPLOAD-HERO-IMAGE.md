# 如何上传Hero背景图片

## 图片要求

### 文件名
`hero-bg.jpg`

### 尺寸
**1920 x 1080 像素** (16:9 宽高比)

### 文件大小
压缩后 **小于 200KB**

### 风格要求
- 武侠主题场景
- 深蓝色调 + 金色点缀（符合网站配色）
- 图片右侧或中央留白区域用于显示文字
- 建议：夜晚场景、英雄角色、山峰或古建筑

---

## 上传步骤

### 1. 准备图片

确保你的图片符合上述要求：
- 尺寸：1920 x 1080px
- 格式：JPG 或 WebP
- 文件大小：< 200KB

如果图片太大，使用以下工具压缩：
- [TinyJPG](https://tinyjpg.com/) - 在线压缩
- [Squoosh](https://squoosh.app/) - Google 压缩工具

### 2. 重命名文件

将你的图片重命名为：
```
hero-bg.jpg
```

注意：必须是小写字母，使用连字符。

### 3. 上传到正确位置

将 `hero-bg.jpg` 上传到这个目录：
```
/public/images/hero-bg.jpg
```

**完整路径**：
```
WhereWindsMeet/
└── public/
    └── images/
        └── hero-bg.jpg  ← 上传到这里
```

### 4. 验证上传

上传后，检查文件是否在正确位置：
```bash
ls -la public/images/hero-bg.jpg
```

应该看到文件存在且大小合理。

---

## 当前网站设置

### 首页标题（已完成）
- **主标题**：Find Your Way Through the Wuxia Winds
- **副标题**：Beginner tips, builds, maps and resources for PS5 & PC players.
- **副标题颜色**：金色渐变（已启用）

### Hero组件配置
Hero组件已经配置为自动使用 `/images/hero-bg.jpg` 作为背景图片。

上传图片后，网站会：
1. 自动优化图片为 AVIF 和 WebP 格式
2. 根据设备分辨率提供不同尺寸
3. 优先加载（priority loading）确保快速显示

---

## AI生成提示词（可选）

如果你使用AI工具（如Midjourney、Stable Diffusion）生成图片，可以使用这个提示词：

```
A cinematic wuxia warrior in traditional Chinese armor standing on a mountain peak at dusk,
overlooking an ancient Chinese city with golden lanterns glowing in the distance,
deep navy blue night sky with subtle stars and wisps of clouds,
dramatic lighting from the side casting golden highlights,
atmospheric fog in the valleys,
right side of image has negative space for text overlay,
highly detailed, photorealistic,
cinematic composition, 16:9 aspect ratio,
color palette: deep blue (#0A1628) and gold (#D4AF37) accents
```

---

## 临时占位符

在你上传图片之前，网站会显示：
- 深蓝色渐变背景
- 文字内容完全可见
- 所有功能正常工作

上传图片是**可选的**，但强烈推荐，因为会大幅提升视觉效果！

---

## 故障排除

### 图片没有显示？
1. 检查文件名是否正确：`hero-bg.jpg`（全小写）
2. 检查文件路径：`public/images/hero-bg.jpg`
3. 清除浏览器缓存
4. 重新构建网站：`npm run build`

### 图片质量差？
1. 确保原图尺寸是 1920x1080px
2. 使用高质量JPG（质量设置 80-90）
3. 避免过度压缩

### 图片加载慢？
1. 确保文件小于 200KB
2. 使用 TinyJPG 压缩
3. 考虑转换为 WebP 格式

---

**需要帮助？** 查看 `/public/images/IMAGE-REQUIREMENTS.md` 获取更多图片要求详情。
