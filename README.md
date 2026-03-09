# 柿种 B2B 宣传与销售网站

这是一个面向 B2B 客户的单页营销网站，用于宣传和销售日本零食「柿种」。

适用场景：
- 商超/便利店渠道开发
- 电商与礼盒客户批发合作
- 展会或业务洽谈时的线上展示页

## 功能

- **多语言支持**：中文 / 日本語 / English，自动检测浏览器语言，可手动切换并保存偏好
- **真实邮件发送**：集成 [Formspree](https://formspree.io)，询盘表单提交后直接发送邮件到您的邮箱
- **数据统计**：支持 Google Analytics 4，附带 localStorage 轻量级统计作为补充
- **社交媒体适配**：OpenGraph / Twitter Card 元标签，适配小红书、抖音、微信等平台分享
- **多主题**：5 套主题可切换，移动端自适应背景图

## 文件结构

- `index.html`：页面结构与文案
- `styles.css`：页面样式
- `script.js`：多语言系统、询盘表单（含邮件发送）、统计埋点

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 配置说明

### 1. 开启真实邮件发送（Formspree）

1. 访问 [https://formspree.io](https://formspree.io) 注册账号
2. 创建一个新表单，绑定您的收件邮箱
3. 复制表单 ID（格式：`xxxxxxxx`）
4. 打开 `script.js`，找到顶部配置：

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

将 `YOUR_FORM_ID` 替换为您的实际表单 ID。

免费套餐每月最多 50 次表单提交，满足初期需求。

### 2. 开启 Google Analytics 4 数据统计

1. 访问 [https://analytics.google.com](https://analytics.google.com) 创建 GA4 媒体资源
2. 获取测量 ID（格式：`G-XXXXXXXXXX`）
3. 打开 `script.js`，找到顶部配置：

```js
const GA4_ID = 'YOUR_GA4_ID';
```

将 `YOUR_GA4_ID` 替换为您的实际测量 ID。

未配置时，网站仍会通过 `localStorage` 记录页面浏览和询盘提交的基础计数。

### 3. 替换商务联系信息

打开 `index.html`，搜索并替换：
- `sales@example.com` → 您的商务邮箱
- `+86 138-0000-0000` → 您的联系电话
- `KAKITANE_B2B` → 您的微信号

## GitHub Pages 部署说明

该项目是纯静态站点，不需要 Jekyll 构建。

- 仓库根目录已包含 `.nojekyll`，用于显式跳过 Jekyll 处理。
- 请在 GitHub 仓库 `Settings > Pages > Build and deployment` 中将 `Source` 设为 `GitHub Actions`。
- 不要同时使用 `Deploy from a branch`，否则 GitHub 可能仍会触发默认的 Pages/Jekyll 构建流程。

## 社交媒体发布建议

页面已内置 OpenGraph 与 Twitter Card 元标签，可直接在以下平台生成预览卡片：

| 平台 | 建议 |
|------|------|
| 小红书 | 截图 + 网站链接，配合 #日本零食 #柿种 等标签 |
| 抖音 | 短视频介绍产品，文字引导添加网站链接到主页 |
| 微信公众号 | 分享网页链接，OG 图将自动显示预览 |
| LinkedIn | 直接分享链接，英文版适合海外渠道开发 |
