# Plan: 柿の种网站内容优化与社交引流完善

## TL;DR
优化现有 B2B 柿の种 单页营销网站：丰富产品内容（增加品牌故事、口味图鉴、场景展示）、添加产品配图、完善移动端体验（汉堡菜单、触控优化）、增加社交媒体分享与引流功能（OG 标签、微信/小红书/抖音分享按钮、二维码弹窗），使网站可直接部署并在多平台传播。

## 现状分析
- 纯静态单页站 (HTML/CSS/JS)，已配好 GitHub Pages 部署
- 5 套主题样式，默认"夜场"主题
- 内容偏 B2B 骨架（产品规格、优势、合作流程、询盘表单）
- 缺少：产品实图、品牌故事、口味详情、社交分享、移动端导航菜单
- image/ 目录仅有 2 张背景图

---

## Phase 1: 内容丰富化

### Step 1 — 新增"关于柿の种"品牌故事区块
- 在 `#products` 之前插入新 section `#story`
- 内容要点（基于维基百科公共知识，用自己语言重新组织）：
  - 1923 年新潟县长冈市浪花屋制果创始人今井与三郎意外发明
  - 柿子种形状的由来（像柿子的种子）
  - 米果 + 花生的经典搭配起源（帝国酒店酒吧 / 龟田制果直营店）
  - 2017 年被 JAXA 认证为"宇宙日本食"
  - 在中国市场的发展（青岛工厂、麻辣味本地化）
- 导航栏增加"品牌故事"锚点
- 用 CSS grid 左文右图布局

### Step 2 — 丰富产品卡片内容
- 每张产品卡片增加 emoji 图标装饰和更详细的口味描述
- 增加第 4 张卡片："辣味/芥末/限定口味系列"，突出差异化（芥末味、麻辣味、青海苔、芝士等）
- 每张卡片预留产品图片位（`<img>` 占位，class `card-img`）

### Step 3 — 新增"场景展示"区块 `#scenes`
- 在 `#advantages` 之后插入
- 用 4-6 张场景图展示柿种在不同渠道的使用场景：酒吧佐酒、商超货架、电商包装、航空配餐等
- 使用 CSS grid 瀑布流或等高网格布局
- 图片使用 lazy loading (`loading="lazy"`)

---

## Phase 2: 图片资源策略

### Step 4 — 图片占位与指引
- 由于无法直接生成或下载图片，采用以下策略：
  - 在 HTML 中使用带 `alt` 文字的 `<img>` 标签 + CSS 渐变背景占位
  - 在 `image/` 目录下创建子目录结构：`image/products/`、`image/scenes/`
  - 在 README.md 中新增"图片替换指南"章节，列出每张图片的文件名、推荐尺寸、内容建议
  - 推荐用户从以下渠道获取真实图片：
    - 自己拍摄的产品实物图（最佳）
    - Unsplash 搜索 "rice crackers"、"japanese snacks"、"bar snacks"
    - 使用 AI 图像生成工具生成产品展示图
- CSS 中为 `.card-img` 和 `.scene-img` 添加统一的圆角、比例和 object-fit 样式
- 所有图片必须带有描述性 `alt` 属性

---

## Phase 3: 移动端体验优化

### Step 5 — 汉堡菜单
- 当前 `@media (max-width: 760px)` 直接 `display:none` 隐藏导航
- 改为：添加汉堡按钮 (`.hamburger`)，点击展开/收起侧滑或下拉导航面板
- JS 中添加汉堡菜单 toggle 逻辑，点击导航链接后自动关闭
- 添加 `aria-expanded`、`aria-controls` 无障碍属性

### Step 6 — 触控与滚动优化
- 给所有 `.btn` 添加 `min-height: 44px`（Apple HIG 触控目标最低要求）
- 添加 CSS `scroll-behavior: smooth` 到 `html`
- 添加浮动"返回顶部"按钮，滚动超过一屏后显示
- JS 中使用 `IntersectionObserver` 控制返回顶部按钮的显隐

---

## Phase 4: 社交媒体引流与分享

### Step 7 — Open Graph & 社交 Meta 标签
- 在 `<head>` 中添加完整 OG 标签：
  - `og:title` / `og:description` / `og:image` / `og:url` / `og:type`
  - `og:image` 需要一张 1200×630 的分享封面图（列入图片指南）
- 添加 Twitter Card 标签 (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- 添加 `<link rel="icon">` favicon

### Step 8 — 社交分享浮动按钮组
- 在页面右侧或底部添加固定定位的分享按钮组 `.share-fab`
- 包含：
  - **微信**: 点击弹出二维码弹窗（QR 码指向网站 URL，用纯 JS 库 `qrcode-generator` 内联生成或静态图片）
  - **小红书**: 点击复制当前页面标题+链接到剪贴板，提示"已复制，打开小红书粘贴发布"
  - **抖音**: 同上，复制引导文案+链接
  - **更多**: 调用 `navigator.share()` Web Share API（移动端支持，桌面端降级为复制链接）
- 所有 SVG 图标内联，不依赖外部图标库

### Step 9 — 微信二维码弹窗
- 创建模态弹窗组件 `.qr-modal`
- 使用轻量内联 QR 码生成（纯 JS，无外部依赖，约 4KB）
- 弹窗内容：QR 码 + "微信扫码访问" 提示文字
- 点击遮罩层或关闭按钮关闭
- 支持 Escape 键关闭

### Step 10 — 页面底部社交引导 CTA
- 在 `footer` 上方新增 `.social-cta` 区块
- 内容："关注我们" + 微信公众号/小红书/抖音图标+账号名
- 引导文案示例："扫码关注，获取最新口味与优惠"

---

## Phase 5: SEO & 部署完善

### Step 11 — SEO 增强
- 添加 JSON-LD 结构化数据 (`Organization` + `Product` schema)
- 确保所有图片有 `alt`，所有交互元素有 ARIA 标签
- `<html lang="zh-CN">` 已正确设置 ✓

### Step 12 — 性能优化
- 所有新增图片使用 `loading="lazy"`
- CSS 中已有 `backdrop-filter`，确保不影响低端移动设备（添加 `@supports` 降级）
- 检查字体加载：已有 `display=swap` ✓

### Step 13 — 部署检查清单更新
- 更新 README.md：
  - 新增"图片替换指南"（每张图尺寸、用途说明）
  - 新增"社交账号配置"（替换微信/小红书/抖音占位账号）
  - 新增"OG 图片配置"（替换分享封面图）
- 确认 `.github/workflows/deploy-pages.yml` 无需修改（已正确配置）
- 确保 `.nojekyll` 存在 ✓

---

## 需修改的文件

- `index.html` — 新增品牌故事区块、场景展示区块、汉堡按钮、社交分享按钮组、QR 弹窗、OG meta 标签、JSON-LD、favicon、社交 CTA、丰富产品卡片
- `styles.css` — 新增汉堡菜单样式、品牌故事布局、场景图网格、分享按钮组浮动样式、QR 弹窗样式、返回顶部样式、card-img 样式、smooth scroll、触控优化
- `script.js` — 新增汉堡菜单 toggle、返回顶部按钮逻辑、QR 弹窗开关、社交分享（复制剪贴板 + Web Share API）、IntersectionObserver
- `README.md` — 新增图片替换指南、社交账号配置说明、OG 图片说明

## 不新增文件（保持单页静态结构）
- QR 码生成逻辑内联在 script.js 中
- SVG 图标内联在 HTML 中
- 不引入任何外部 JS/CSS 框架

---

## 验证步骤

1. **视觉检查**: 本地 `python3 -m http.server 8080` 启动，分别在桌面端和手机端（或 Chrome DevTools 模拟）浏览全部区块
2. **汉堡菜单**: 在 ≤760px 视口下，汉堡按钮可见、点击展开导航、点击链接后自动关闭且平滑滚动到目标区块
3. **主题切换**: 确认 5 套主题下所有新增区块样式正常（品牌故事、场景、分享按钮、QR 弹窗）
4. **分享功能**: 点击微信按钮弹出二维码；点击小红书/抖音按钮剪贴板包含标题+链接；移动端"更多"按钮调用系统分享
5. **OG 标签**: 用 https://www.opengraph.xyz/ 验证 OG 标签解析正确
6. **表单**: 询盘提交前端验证仍然正常
7. **性能**: Chrome Lighthouse 移动端评分 ≥ 90（Performance）
8. **部署**: push 到 main 分支，GitHub Actions 自动部署，Pages URL 可访问

---

## 决策与约束

- **保持纯静态**：不引入构建工具或框架，保持直接部署能力
- **图片策略**：HTML 预留 img 标签 + CSS 占位，用户自行替换真实图片即可上线
- **不含真实联系方式**：保留占位信息（`sales@example.com` 等），用户部署前自行替换
- **QR 码生成**：使用轻量内联方案，不依赖外部 CDN
- **社交分享**：小红书/抖音无官方 Web 分享 API，采用"复制到剪贴板"方案 + 引导文案

## Phase 6: Formspree 真实邮件表单

### Step 14 — 集成 Formspree
- 注册 Formspree 账号（免费版 50 次/月）
- 修改 `<form>` 的 `action` 为 `https://formspree.io/f/{form_id}`，`method="POST"`
- 添加隐藏字段 `<input type="hidden" name="_subject" value="新询盘">` 设置邮件主题
- 添加 `<input type="hidden" name="_next" value="https://你的域名/#inquiry">` 提交后跳转回本页
- 添加蜜罐字段 `<input type="text" name="_gotcha" style="display:none">` 防垃圾
- JS 改为 `fetch` 异步提交 Formspree，成功后在页面内显示提示而非跳转，保持 SPA 体验
- README 新增"Formspree 配置"说明：注册 → 创建表单 → 替换 form_id

---

## Phase 7: 多语言 i18n（中/日/英）

### Step 15 — 纯 JS i18n 方案（无框架）
- 创建 `i18n.js` 文件，包含三语翻译字典对象：
  ```
  const LANG = { zh: {...}, ja: {...}, en: {...} }
  ```
- 所有需翻译的 HTML 文本元素添加 `data-i18n="key"` 属性
- 占位符文本用 `data-i18n-placeholder="key"` 属性
- `<select>` 选项用 `data-i18n-option="key"` 属性
- JS 函数 `setLang(lang)` 遍历所有 `[data-i18n]` 元素替换 `textContent`
- 语言偏好存入 localStorage，下次访问自动应用

### Step 16 — 语言切换器 UI
- 在导航栏（主题切换旁边）添加语言切换下拉或按钮组：🇨🇳 中文 | 🇯🇵 日本語 | 🇬🇧 EN
- 移动端汉堡菜单内也包含语言切换
- 切换语言时同步更新：
  - `<html lang="...">`（zh-CN / ja / en）
  - `<title>` 和 `<meta name="description">`
  - OG 标签的 title/description
  - 所有可见文本

### Step 17 — 日文/英文翻译内容
- 日文翻译：柿の种是日本产品，日文版本可突出"日本品質""本場の味"等本土卖点
- 英文翻译：面向跨境电商/海外客户，突出 "Factory Direct" "Customizable Flavors" 等
- Google Fonts 已加载 Noto Sans SC，需额外加载 Noto Sans JP；英文可复用 system-ui
- 翻译覆盖范围：导航、标题、正文、按钮、表单标签/选项/占位符、footer、主题名称

---

## Phase 8: 数据统计

### Step 18 — Google Analytics 4 (GA4)
- 在 `<head>` 中添加 GA4 gtag.js 代码片段（异步加载，不阻塞渲染）
- `GA_MEASUREMENT_ID` 使用占位符，README 中说明替换方法
- 自动追踪：页面浏览、滚动深度、外链点击

### Step 19 — 百度统计
- 在 `<body>` 末尾（`</body>` 前）添加百度统计代码片段
- 使用占位 ID，README 中说明注册百度统计并替换 ID

### Step 20 — 自定义事件追踪
- 在 JS 中为关键交互添加 GA4 事件（`gtag('event', ...)`）：
  - `form_submit` — 询盘表单提交
  - `share_click` — 社交分享按钮点击（区分渠道：wechat/xiaohongshu/douyin）
  - `theme_switch` — 主题切换（附带主题名）
  - `lang_switch` — 语言切换（附带语言代码）
  - `qr_modal_open` — 微信二维码弹窗打开
- 百度统计使用 `_hmt.push(['_trackEvent', ...])` 追踪同样的事件

---

## 更新后的需修改文件

| 文件 | 改动 |
|---|---|
| `index.html` | 品牌故事、场景展示、汉堡按钮、OG/Twitter 标签、JSON-LD、favicon、社交分享按钮组、QR 弹窗、底部 CTA、丰富产品卡片、Formspree 表单、`data-i18n` 属性、语言切换器、GA4 + 百度统计代码 |
| `styles.css` | 汉堡菜单、品牌故事布局、场景图网格、分享按钮浮动、QR 弹窗、返回顶部、card-img、smooth scroll、44px 触控、语言切换器样式 |
| `script.js` | 汉堡菜单 toggle、返回顶部、QR 弹窗、社交分享、IntersectionObserver、Formspree fetch 提交、自定义事件追踪 |
| `i18n.js`（新建） | 三语翻译字典 + `setLang()` 函数 + localStorage 持久化 |
| `README.md` | 图片替换指南、社交账号配置、Formspree 配置、GA4 + 百度统计 ID 替换说明、多语言说明 |

## 更新后的验证步骤

1-8 同前
9. **表单提交**: Formspree 测试提交 → 确认邮件收到 → 页面内显示成功提示不跳转
10. **多语言**: 切换日文/英文 → 全部可见文本正确翻译 → localStorage 记忆语言 → 刷新后保持
11. **统计**: Chrome DevTools Network 面板确认 GA4 和百度统计请求正常发送 → 点击分享/提交表单 → GA4 Realtime 报告中可见事件
