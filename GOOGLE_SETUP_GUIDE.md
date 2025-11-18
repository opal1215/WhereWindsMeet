# Google Analytics & Search Console 设置指南

本指南将帮助你完成 Google Analytics 4 (GA4) 和 Google Search Console (GSC) 的设置，让你的网站能够被 Google 收录并追踪访问数据。

---

## 📊 第一部分：Google Analytics 4 (GA4) 设置

### 步骤 1: 创建 GA4 账号

1. **访问 Google Analytics**
   - 打开 https://analytics.google.com/
   - 使用你的 Google 账号登录

2. **创建新账号**
   - 点击左下角"管理"（齿轮图标）
   - 点击"创建账号"
   - 账号名称：输入 `Where Winds Meet Guides`
   - 配置账号设置（选择你的地区和时区）

3. **创建数据流 (Data Stream)**
   - 选择平台类型：**网站 (Web)**
   - 网站 URL：`https://wherewindsmeetgame.org`
   - 数据流名称：`WWM Guides Website`
   - 点击"创建数据流"

4. **获取测量 ID (Measurement ID)**
   - 创建完成后，你会看到一个以 `G-` 开头的测量 ID
   - 格式类似：`G-ABC123XYZ`
   - **复制这个 ID**

### 步骤 2: 将 GA4 ID 添加到网站

1. **打开项目文件**
   ```bash
   # 编辑 app/layout.tsx
   ```

2. **找到 GoogleAnalytics 组件**
   ```typescript
   // 找到这一行：
   <GoogleAnalytics measurementId="G-XXXXXXXXXX" />

   // 替换为你的真实 ID：
   <GoogleAnalytics measurementId="G-ABC123XYZ" />
   ```

3. **保存并部署**
   ```bash
   git add app/layout.tsx
   git commit -m "Add Google Analytics 4 measurement ID"
   git push
   ```

### 步骤 3: 验证 GA4 正常工作

1. **实时报告测试**
   - 访问 GA4 控制台
   - 点击左侧菜单"报告" > "实时"
   - 在另一个标签页打开你的网站
   - 几秒钟后，实时报告应该显示 1 个活跃用户

2. **Debug View（调试视图）**
   - 在 GA4 中启用调试模式
   - 使用 Chrome 扩展 "Google Analytics Debugger" 进行测试

---

## 🔍 第二部分：Google Search Console (GSC) 设置

### 步骤 1: 添加网站到 Search Console

1. **访问 Google Search Console**
   - 打开 https://search.google.com/search-console/
   - 使用你的 Google 账号登录

2. **添加资源 (Property)**
   - 点击左上角下拉菜单
   - 选择"添加资源"
   - 选择"网址前缀"类型
   - 输入：`https://wherewindsmeetgame.org`
   - 点击"继续"

### 步骤 2: 验证网站所有权

有 **3 种验证方法**，选择最方便的一种：

#### 方法 1：HTML 标记验证（推荐）

1. **获取验证代码**
   - Google 会给你一个 meta 标签
   - 格式类似：`<meta name="google-site-verification" content="abc123..." />`

2. **添加到网站**
   - 打开 `app/layout.tsx`
   - 找到 `metadata` 对象中的 `verification` 部分：
     ```typescript
     verification: {
       google: 'YOUR_GOOGLE_VERIFICATION_CODE', // TODO: Replace
     },
     ```
   - 将 `YOUR_GOOGLE_VERIFICATION_CODE` 替换为 Google 提供的 content 值
   - 例如：
     ```typescript
     verification: {
       google: 'abc123xyz789def456', // 只需要 content 的值，不需要整个 meta 标签
     },
     ```

3. **部署并验证**
   ```bash
   git add app/layout.tsx
   git commit -m "Add Google Search Console verification"
   git push
   ```
   - 等待网站部署完成（1-5分钟）
   - 回到 Search Console，点击"验证"按钮

#### 方法 2：HTML 文件上传

1. **下载验证文件**
   - Google 会提供一个 HTML 文件（例如：`google123abc.html`）
   - 下载这个文件

2. **上传到 public 文件夹**
   ```bash
   # 将文件放到 public/ 文件夹
   mv google123abc.html public/
   ```

3. **部署并验证**
   ```bash
   git add public/google123abc.html
   git commit -m "Add GSC verification file"
   git push
   ```
   - 访问 `https://wherewindsmeetgame.org/google123abc.html` 确认可以访问
   - 回到 Search Console，点击"验证"

#### 方法 3：DNS 验证（如果你有域名控制权）

1. **获取 TXT 记录**
   - Google 会提供一个 TXT 记录值

2. **添加到 DNS 设置**
   - 登录你的域名注册商（如 Cloudflare、GoDaddy 等）
   - 添加 TXT 记录到域名的 DNS 设置
   - 等待 DNS 传播（可能需要 5-30 分钟）

3. **验证**
   - 回到 Search Console，点击"验证"

### 步骤 3: 提交 Sitemap

1. **进入 Sitemaps 页面**
   - 验证成功后，点击左侧菜单"站点地图 (Sitemaps)"

2. **提交 Sitemap URL**
   - 在"添加新的站点地图"输入框中输入：`sitemap.xml`
   - 完整 URL 应该是：`https://wherewindsmeetgame.org/sitemap.xml`
   - 点击"提交"

3. **确认提交成功**
   - 几分钟后刷新页面
   - 状态应该显示"成功"
   - 你会看到发现的 URL 数量

---

## 📈 第三部分：监控和优化

### Google Search Console 指标

1. **效果报告 (Performance)**
   - 查看点击次数、展示次数、点击率、排名
   - 分析哪些关键词带来流量
   - 识别排名机会

2. **索引覆盖率 (Coverage)**
   - 检查哪些页面已被索引
   - 修复索引错误
   - 查看排除的页面原因

3. **网址检查 (URL Inspection)**
   - 检查特定 URL 的索引状态
   - 请求为新页面或更新的页面编制索引
   - 查看 Google 如何看待你的页面

### Google Analytics 4 指标

1. **实时报告**
   - 查看当前访客
   - 了解用户来自哪里
   - 查看正在访问的页面

2. **流量获取**
   - 分析流量来源（有机搜索、直接访问、社交媒体等）
   - 了解哪些渠道最有效

3. **互动度**
   - 查看平均参与时间
   - 跳出率
   - 每个会话的页面浏览量

4. **事件追踪**
   使用我们的自定义事件追踪功能：
   ```typescript
   import { trackEvent } from '@/components/analytics/GoogleAnalytics';

   // 追踪按钮点击
   trackEvent('button_click', {
     category: 'engagement',
     label: 'build_planner_open',
     value: 1
   });

   // 追踪导航
   trackEvent('navigation', {
     category: 'user_action',
     label: 'guide_viewed',
   });
   ```

---

## ✅ 验证清单

完成以下所有步骤确保设置正确：

### Google Analytics 4
- [ ] 创建 GA4 账号和数据流
- [ ] 获取测量 ID (G-XXXXXXXXXX)
- [ ] 在 `app/layout.tsx` 中替换测量 ID
- [ ] 部署到生产环境
- [ ] 在 GA4 实时报告中看到活跃用户

### Google Search Console
- [ ] 添加网站为资源
- [ ] 完成所有权验证（3种方法选1种）
- [ ] 提交 sitemap.xml
- [ ] 在 Sitemaps 页面看到"成功"状态
- [ ] 检查索引覆盖率报告

### SEO 优化
- [ ] 所有页面都有独特的 title 和 description
- [ ] 添加了结构化数据 (JSON-LD)
- [ ] robots.txt 配置正确（允许 Googlebot）
- [ ] sitemap.xml 包含所有重要页面
- [ ] 网站速度优化（使用 PageSpeed Insights 检查）

---

## 🚀 预期时间表

- **第 1 天**：设置完成，GA4 开始收集数据
- **2-7 天**：Google 开始爬取网站
- **1-2 周**：首批页面被索引
- **4-8 周**：开始看到有机搜索流量
- **2-3 个月**：排名逐渐提升

**注意**：新网站需要时间建立信誉。保持更新优质内容，排名会逐步提升！

---

## 🛠️ 故障排除

### GA4 没有显示数据？

1. **检查测量 ID 是否正确**
   - 确保格式为 `G-XXXXXXXXXX`
   - 没有多余的空格或引号

2. **检查浏览器控制台**
   - 打开开发者工具 (F12)
   - 查看 Console 是否有错误
   - Network 标签应该显示对 `google-analytics.com` 的请求

3. **检查广告拦截器**
   - 禁用 AdBlock 或其他广告拦截扩展
   - 使用隐身模式测试

4. **等待时间**
   - 数据可能需要 24-48 小时才能在报告中显示
   - 实时报告应该立即工作

### Search Console 验证失败？

1. **HTML 标记方法**
   - 确保 meta 标签在 `<head>` 中
   - 部署后访问你的网站，查看源代码确认标签存在
   - 清除浏览器缓存后再试

2. **HTML 文件方法**
   - 确保文件在 `public/` 文件夹中
   - 访问 `https://yoursite.com/google123abc.html` 确认可以访问
   - 文件内容不能修改

3. **DNS 方法**
   - 使用工具检查 DNS 传播：https://dnschecker.org/
   - 等待 5-60 分钟后重试
   - 确保 TXT 记录完全一致

### Sitemap 未被发现？

1. **检查 sitemap.xml 可访问性**
   - 访问 `https://yoursite.com/sitemap.xml`
   - 应该显示 XML 格式的网站地图

2. **检查 robots.txt**
   - 访问 `https://yoursite.com/robots.txt`
   - 确保包含 `Sitemap: https://yoursite.com/sitemap.xml`

3. **重新提交**
   - 在 Search Console 中删除 sitemap
   - 等待几分钟
   - 重新提交

---

## 📞 获取帮助

如果遇到问题：

1. **Google 帮助中心**
   - GA4: https://support.google.com/analytics/
   - GSC: https://support.google.com/webmasters/

2. **检查文档**
   - Next.js Metadata: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   - Sitemap: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

3. **社区支持**
   - Stack Overflow (标签：google-analytics, google-search-console)
   - Google Search Central Community

---

**祝你的网站成功！🎉**
