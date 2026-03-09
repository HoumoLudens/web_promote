// ============================================================
// Configuration
// ============================================================

// To enable real email delivery, sign up at https://formspree.io,
// create a form, then replace YOUR_FORM_ID with your actual form ID.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// To enable Google Analytics, replace YOUR_GA4_ID with your
// Measurement ID (e.g. G-XXXXXXXXXX) from https://analytics.google.com.
const GA4_ID = 'YOUR_GA4_ID';

// ============================================================
// Translations
// ============================================================

const TRANSLATIONS = {
  zh: {
    'nav.products': '产品',
    'nav.advantages': '优势',
    'nav.cooperation': '合作模式',
    'nav.inquiry': '获取报价',
    'hero.tag': '工厂直供 · 渠道更省成本',
    'hero.title': '柿种工厂直销供货<br>实惠价格 + 丰富口味 + 灵活定制',
    'hero.desc':
      '直接对接工厂，减少中间环节成本。我们为商超、便利店、电商和餐饮客户提供高性价比柿种产品，支持多口味组合与包装定制，帮助你更快上架、更稳复购。',
    'hero.btn.primary': '获取工厂报价',
    'hero.btn.ghost': '查看口味与规格',
    'hero.point1': '工厂直销价格，降低采购成本',
    'hero.point2': '原味、混合、辣味等口味可灵活组合',
    'hero.point3': '支持包装与口味定制，满足渠道差异化',
    'hero.card.title': '适配渠道',
    'hero.card.ch1': '酒吧 / KTV / 夜场娱乐场所',
    'hero.card.ch2': '线下商超 / 精品超市',
    'hero.card.ch3': '便利店 / 零食连锁',
    'hero.card.ch4': '跨境电商 / 社群团购',
    'hero.card.ch5': '酒店 / 航空配餐 / 餐饮佐餐',
    'hero.card.cta.desc': '提交需求后，快速提供工厂直销报价',
    'hero.card.cta.btn': '领取定制报价',
    'products.title': '口味与规格方案',
    'products.subtitle': '从高频常销到渠道定制，兼顾价格带与口味丰富度，满足不同销售场景。',
    'product1.name': '经典原味（高性价比）',
    'product1.desc': '工厂稳定生产，适合做基础走量款，价格友好、动销稳定。',
    'product1.s1': '规格：70g / 150g / 500g',
    'product1.s2': '口味：经典咸香',
    'product1.s3': '场景：日常零售 / 活动引流',
    'product2.name': '花生混合（复购热门）',
    'product2.desc': '米果与花生搭配，口味层次丰富，适合线上线下联动销售。',
    'product2.s1': '规格：80g / 160g / 1kg',
    'product2.s2': '口味：咸香混合',
    'product2.s3': '场景：电商组合 / 节庆礼赠',
    'product3.name': '定制款（口味 / 包装可定制）',
    'product3.desc': '支持 OEM/联名与渠道专供，打造差异化产品线。',
    'product3.s1': '口味：可按需求开发与调整',
    'product3.s2': '包装：礼盒 / 袋装 / 散装',
    'product3.s3': '价格：按起订量阶梯报价',
    'adv.title': '为什么选择我们',
    'adv1.name': '工厂直销',
    'adv1.desc': '减少中间流通环节，采购链路更短，交付效率更高。',
    'adv2.name': '价格实惠',
    'adv2.desc': '提供有竞争力的渠道价格，支持阶梯报价与长期合作价。',
    'adv3.name': '口味丰富',
    'adv3.desc': '覆盖多口味组合，满足不同区域和人群的偏好需求。',
    'adv4.name': '支持定制',
    'adv4.desc': '可定制口味、包装与标签，帮助渠道打造差异化卖点。',
    'coop.title': '合作流程',
    'step1.title': '01 提交需求',
    'step1.desc': '告知渠道类型、目标口味、包装要求和预计采购量。',
    'step2.title': '02 获取工厂报价',
    'step2.desc': '根据规格与数量，提供直销价格、交期与供货建议。',
    'step3.title': '03 样品与定制确认',
    'step3.desc': '确认口味、包装、标签及合作条款后安排生产。',
    'step4.title': '04 批量供货',
    'step4.desc': '按计划发货并持续补货，保障渠道长期稳定动销。',
    'contact.title': '商务对接窗口',
    'contact.email': '邮箱：sales@example.com',
    'contact.phone': '电话：+86 138-0000-0000',
    'contact.wechat': '微信：KAKITANE_B2B',
    'contact.tip': '可快速提供：工厂报价单、样品政策、定制方案',
    'inq.title': '提交询盘',
    'inq.subtitle': '留下需求信息，我们将提供工厂直销报价与定制建议。',
    'form.company': '公司名称',
    'form.company.ph': '如：XX连锁 / XX电商店铺',
    'form.name': '联系人',
    'form.name.ph': '采购 / 招商负责人姓名',
    'form.phone': '联系方式',
    'form.phone.ph': '手机 / 微信 / 企业邮箱',
    'form.channel': '渠道类型',
    'form.channel.ph': '请选择',
    'form.ch1': '酒吧 / KTV / 娱乐场所',
    'form.ch2': '商超',
    'form.ch3': '便利店',
    'form.ch4': '电商',
    'form.ch5': '礼品渠道',
    'form.ch6': '其他',
    'form.message': '需求说明',
    'form.message.ph': '如：目标规格、首批数量、上架时间、目标渠道',
    'form.submit': '提交询盘',
    'form.success': '询盘已提交，我们会尽快联系您。',
    'form.error.required': '请完整填写信息后再提交。',
    'form.error.send': '提交失败，请稍后重试或直接联系我们。',
    'footer.copyright': '© 2026 柿种 B2B 经销站 | 日本零食渠道合作',
    'footer.back': '返回顶部',
  },
  ja: {
    'nav.products': '製品',
    'nav.advantages': '強み',
    'nav.cooperation': '取引モデル',
    'nav.inquiry': '見積もりを取得',
    'hero.tag': '工場直販 · チャネルコスト削減',
    'hero.title': '柿の種 工場直販<br>低価格 + 豊富な味 + カスタマイズ対応',
    'hero.desc':
      '工場と直接取引し、中間マージンを削減。スーパー、コンビニ、EC、飲食店向けにコスパの高い柿の種を提供。多フレーバーの組み合わせやパッケージカスタマイズに対応し、スムーズな棚導入と安定したリピートをサポートします。',
    'hero.btn.primary': '工場見積もりを取得',
    'hero.btn.ghost': 'フレーバーと仕様を見る',
    'hero.point1': '工場直販価格で仕入れコストを削減',
    'hero.point2': '定番・ミックス・辛口など自由に組み合わせ可能',
    'hero.point3': 'パッケージ・フレーバーのカスタマイズ対応',
    'hero.card.title': '対応チャネル',
    'hero.card.ch1': 'バー / カラオケ / ナイトスポット',
    'hero.card.ch2': 'スーパー / 高級スーパー',
    'hero.card.ch3': 'コンビニ / スナックチェーン',
    'hero.card.ch4': '越境EC / グループ購入',
    'hero.card.ch5': 'ホテル / 機内食 / 飲食店',
    'hero.card.cta.desc': 'ご要望送信後、工場直販見積もりを迅速に提供',
    'hero.card.cta.btn': 'カスタム見積もりを受け取る',
    'products.title': 'フレーバーと仕様プラン',
    'products.subtitle':
      '高回転の定番品からチャネル専用カスタム品まで、価格帯と味のバリエーションを兼ね備えた幅広いラインナップ。',
    'product1.name': '定番・原味（コスパ重視）',
    'product1.desc':
      '安定した工場生産で、主力の数量消化向け。リーズナブルな価格と安定した動き。',
    'product1.s1': '規格：70g / 150g / 500g',
    'product1.s2': 'フレーバー：定番しょっぱい',
    'product1.s3': '用途：日常小売 / イベント集客',
    'product2.name': 'ピーナッツミックス（リピート人気）',
    'product2.desc':
      'おかきとピーナッツのコンビで、味に奥行きが生まれる。オンライン・オフライン連動販売に最適。',
    'product2.s1': '規格：80g / 160g / 1kg',
    'product2.s2': 'フレーバー：塩味ミックス',
    'product2.s3': '用途：EC セット / ギフト・贈答',
    'product3.name': 'カスタム（フレーバー / パッケージ対応）',
    'product3.desc': 'OEM・コラボ・チャネル専用に対応し、差別化された商品ラインを実現。',
    'product3.s1': 'フレーバー：ご要望に応じて開発・調整',
    'product3.s2': 'パッケージ：ギフトボックス / 袋 / バルク',
    'product3.s3': '価格：ロット別段階見積もり',
    'adv.title': '選ばれる理由',
    'adv1.name': '工場直販',
    'adv1.desc': '中間流通をカットし、調達リードタイムと納品効率を向上。',
    'adv2.name': '競争力のある価格',
    'adv2.desc': 'チャネル向け競争力価格と、ロット別段階価格・長期契約価格を提供。',
    'adv3.name': '豊富なフレーバー',
    'adv3.desc': '多フレーバーの組み合わせで、地域・客層ニーズに幅広く対応。',
    'adv4.name': 'カスタマイズ対応',
    'adv4.desc': 'フレーバー・パッケージ・ラベルのカスタマイズで、差別化セールスポイントを実現。',
    'coop.title': '取引フロー',
    'step1.title': '01 要件のご提出',
    'step1.desc': 'チャネル種別・希望フレーバー・パッケージ要件・想定ロット数をご連絡ください。',
    'step2.title': '02 工場見積もりの取得',
    'step2.desc': '仕様・数量に応じて、直販価格・納期・供給提案を提示。',
    'step3.title': '03 サンプル・仕様確認',
    'step3.desc': 'フレーバー・パッケージ・ラベル・契約条件を確認後、生産を手配。',
    'step4.title': '04 量産・安定供給',
    'step4.desc': '計画通りに出荷し、継続補充でチャネルの安定した販売をサポート。',
    'contact.title': '商談窓口',
    'contact.email': 'メール：sales@example.com',
    'contact.phone': '電話：+86 138-0000-0000',
    'contact.wechat': 'WeChat：KAKITANE_B2B',
    'contact.tip': '迅速に提供可能：工場見積書・サンプル方針・カスタム提案',
    'inq.title': 'お問い合わせ送信',
    'inq.subtitle': 'ご要件をご入力ください。工場直販見積もりとカスタム提案をご提供します。',
    'form.company': '会社名',
    'form.company.ph': '例：○○チェーン / ○○EC店舗',
    'form.name': '担当者名',
    'form.name.ph': '購買 / 商談担当者名',
    'form.phone': '連絡先',
    'form.phone.ph': '携帯 / WeChat / 会社メール',
    'form.channel': 'チャネル種別',
    'form.channel.ph': '選択してください',
    'form.ch1': 'バー / カラオケ / ナイト施設',
    'form.ch2': 'スーパー',
    'form.ch3': 'コンビニ',
    'form.ch4': 'EC',
    'form.ch5': 'ギフト',
    'form.ch6': 'その他',
    'form.message': '要件の詳細',
    'form.message.ph': '例：希望規格・初回ロット・納品時期・対象チャネル',
    'form.submit': 'お問い合わせを送信',
    'form.success': 'お問い合わせを受け付けました。近日中にご連絡いたします。',
    'form.error.required': '全項目をご入力の上、再送信してください。',
    'form.error.send': '送信に失敗しました。時間をおいて再度お試しいただくか、直接ご連絡ください。',
    'footer.copyright': '© 2026 柿の種 B2B 卸売 | 日本お菓子チャネル協力',
    'footer.back': 'トップへ戻る',
  },
  en: {
    'nav.products': 'Products',
    'nav.advantages': 'Why Us',
    'nav.cooperation': 'Cooperation',
    'nav.inquiry': 'Get Quote',
    'hero.tag': 'Factory Direct · Lower Channel Costs',
    'hero.title':
      'Kaki-no-Tane Factory Direct Supply<br>Competitive Price + Rich Flavors + Custom Options',
    'hero.desc':
      'Source direct from our factory to cut middleman costs. We supply high-value Kaki-no-Tane products to supermarkets, convenience stores, e-commerce, and food service clients. Flexible flavor combinations and custom packaging help you launch faster and drive repeat purchases.',
    'hero.btn.primary': 'Get Factory Quote',
    'hero.btn.ghost': 'View Flavors & Specs',
    'hero.point1': 'Factory-direct pricing to reduce procurement costs',
    'hero.point2': 'Original, mixed, spicy and more — fully customizable combinations',
    'hero.point3': 'Custom packaging & flavors to differentiate your channel',
    'hero.card.title': 'Supported Channels',
    'hero.card.ch1': 'Bars / KTV / Nightlife Venues',
    'hero.card.ch2': 'Supermarkets / Premium Grocery',
    'hero.card.ch3': 'Convenience Stores / Snack Chains',
    'hero.card.ch4': 'Cross-border E-commerce / Group Buying',
    'hero.card.ch5': 'Hotels / Airline Catering / Restaurants',
    'hero.card.cta.desc': 'Submit your needs and receive a factory-direct quote quickly',
    'hero.card.cta.btn': 'Receive Custom Quote',
    'products.title': 'Flavors & Specification Plans',
    'products.subtitle':
      'From high-volume staples to custom channel products — covering price tiers and flavor variety for different sales scenarios.',
    'product1.name': 'Classic Original (Best Value)',
    'product1.desc':
      'Stable factory production ideal for volume SKUs. Friendly price point with consistent sell-through.',
    'product1.s1': 'Size: 70g / 150g / 500g',
    'product1.s2': 'Flavor: Classic Savory',
    'product1.s3': 'Use: Daily Retail / Event Sampling',
    'product2.name': 'Peanut Mix (Top Repurchase)',
    'product2.desc':
      'Rice crackers + peanuts create layered flavor appeal, ideal for online-offline combined sales.',
    'product2.s1': 'Size: 80g / 160g / 1kg',
    'product2.s2': 'Flavor: Savory Mix',
    'product2.s3': 'Use: E-commerce Bundles / Gift Sets',
    'product3.name': 'Custom (Flavor / Packaging)',
    'product3.desc':
      'OEM, co-branding, and channel-exclusive options to create a differentiated product line.',
    'product3.s1': 'Flavor: Developed & adjusted to order',
    'product3.s2': 'Packaging: Gift box / Bag / Bulk',
    'product3.s3': 'Pricing: Volume-tiered quotes',
    'adv.title': 'Why Choose Us',
    'adv1.name': 'Factory Direct',
    'adv1.desc': 'Fewer supply chain steps means shorter lead times and higher delivery efficiency.',
    'adv2.name': 'Competitive Pricing',
    'adv2.desc': 'Channel-competitive prices with volume-tiered and long-term partner rates.',
    'adv3.name': 'Rich Flavor Range',
    'adv3.desc': 'Multi-flavor combinations cover diverse regional and demographic preferences.',
    'adv4.name': 'Custom Support',
    'adv4.desc': 'Customize flavor, packaging, and labels to create differentiated selling points.',
    'coop.title': 'Cooperation Flow',
    'step1.title': '01 Submit Requirements',
    'step1.desc': 'Share your channel type, target flavors, packaging needs, and estimated order volume.',
    'step2.title': '02 Get Factory Quote',
    'step2.desc': 'Receive direct pricing, lead times, and supply recommendations based on specs and quantity.',
    'step3.title': '03 Sample & Customization Approval',
    'step3.desc': 'Confirm flavors, packaging, labels, and terms, then production begins.',
    'step4.title': '04 Bulk Supply',
    'step4.desc': 'Shipment on schedule with ongoing replenishment for stable long-term channel sales.',
    'contact.title': 'Business Contact',
    'contact.email': 'Email: sales@example.com',
    'contact.phone': 'Tel: +86 138-0000-0000',
    'contact.wechat': 'WeChat: KAKITANE_B2B',
    'contact.tip': 'Quick provision: Factory price list · Sample policy · Custom proposal',
    'inq.title': 'Submit Inquiry',
    'inq.subtitle':
      'Leave your requirements and we will provide factory pricing and customization recommendations.',
    'form.company': 'Company Name',
    'form.company.ph': 'e.g., XY Chain / XY E-commerce Store',
    'form.name': 'Contact Person',
    'form.name.ph': 'Procurement / Business Development Contact',
    'form.phone': 'Contact Info',
    'form.phone.ph': 'Phone / WeChat / Business Email',
    'form.channel': 'Channel Type',
    'form.channel.ph': 'Please select',
    'form.ch1': 'Bar / KTV / Nightlife',
    'form.ch2': 'Supermarket',
    'form.ch3': 'Convenience Store',
    'form.ch4': 'E-commerce',
    'form.ch5': 'Gift Channel',
    'form.ch6': 'Other',
    'form.message': 'Requirements',
    'form.message.ph': 'e.g., Target size, first batch quantity, shelf date, target channel',
    'form.submit': 'Submit Inquiry',
    'form.success': 'Inquiry submitted. We will get back to you shortly.',
    'form.error.required': 'Please complete all fields before submitting.',
    'form.error.send': 'Submission failed. Please try again later or contact us directly.',
    'footer.copyright': '© 2026 Kaki-no-Tane B2B Distribution | Japanese Snack Channel Partner',
    'footer.back': 'Back to Top',
  },
};

// ============================================================
// Constants & DOM references
// ============================================================

const THEME_KEY = 'web_promote_theme';
const DEFAULT_THEME = 'night-bar';
const BASE_THEME = 'violet';
const LANG_KEY = 'web_promote_lang';
const DEFAULT_LANG = 'zh';
const SUPPORTED_LANGS = ['zh', 'ja', 'en'];

const inquiryForm = document.getElementById('inquiryForm');
const formMessage = document.getElementById('formMessage');
const themeSwitch = document.getElementById('themeSwitch');
const langSwitch = document.getElementById('langSwitch');
const themeButtons = themeSwitch ? themeSwitch.querySelectorAll('.theme-btn') : [];

let currentLang = DEFAULT_LANG;

// ============================================================
// Theme system
// ============================================================

const applyTheme = (themeName) => {
  const validTheme = themeName || DEFAULT_THEME;
  if (validTheme === BASE_THEME) {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', validTheme);
  }

  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === validTheme;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const savedTheme = localStorage.getItem(THEME_KEY);
const availableThemes = Array.from(themeButtons).map((button) => button.dataset.theme);

if (savedTheme && availableThemes.includes(savedTheme)) {
  applyTheme(savedTheme);
} else {
  applyTheme(DEFAULT_THEME);
}

if (themeSwitch) {
  themeSwitch.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const themeName = target.dataset.theme;
    if (!themeName || !availableThemes.includes(themeName)) {
      return;
    }

    localStorage.setItem(THEME_KEY, themeName);
    applyTheme(themeName);
  });
}

// ============================================================
// Language (i18n) system
// ============================================================

const t = (key, lang) => {
  const l = lang || currentLang;
  const langData = TRANSLATIONS[l] || TRANSLATIONS[DEFAULT_LANG];
  return langData[key] !== undefined ? langData[key] : (TRANSLATIONS[DEFAULT_LANG][key] ?? key);
};

const CHANNEL_OPTIONS = [
  { value: '', key: 'form.channel.ph' },
  { value: '酒吧KTV娱乐', key: 'form.ch1' },
  { value: '商超', key: 'form.ch2' },
  { value: '便利店', key: 'form.ch3' },
  { value: '电商', key: 'form.ch4' },
  { value: '礼品', key: 'form.ch5' },
  { value: '其他', key: 'form.ch6' },
];

const PAGE_TITLES = {
  zh: '柿种工厂直销 | 价格实惠 口味丰富 可定制',
  ja: '柿の種 工場直販 | お手頃価格 · 豊富なフレーバー · カスタム対応',
  en: 'Kaki-no-Tane Factory Direct | Affordable Price · Rich Flavors · Custom',
};

const applyLanguage = (lang) => {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.title = PAGE_TITLES[lang] || PAGE_TITLES[DEFAULT_LANG];

  // Plain-text nodes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = t(key, lang);
    if (text !== undefined) el.textContent = text;
  });

  // HTML nodes (e.g. headings with <br>)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    const html = t(key, lang);
    if (html !== undefined) el.innerHTML = html;
  });

  // Input / textarea placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const text = t(key, lang);
    if (text !== undefined) el.placeholder = text;
  });

  // Channel select options
  const channelSelect = document.getElementById('channelSelect');
  if (channelSelect) {
    const currentValue = channelSelect.value;
    channelSelect.innerHTML = CHANNEL_OPTIONS.map(
      (o) =>
        `<option value="${o.value}"${o.value === currentValue ? ' selected' : ''}>${t(o.key, lang)}</option>`,
    ).join('');
  }

  // Language toggle button states
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Update the submit button text in case it was overwritten during a request
  const submitBtn = inquiryForm ? inquiryForm.querySelector('button[type="submit"]') : null;
  if (submitBtn && !submitBtn.disabled) {
    submitBtn.textContent = t('form.submit', lang);
  }
};

if (langSwitch) {
  langSwitch.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const lang = target.dataset.lang;
    if (!lang || !SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage(lang);
  });
}

// Detect initial language: saved preference → browser language → default
const savedLang = localStorage.getItem(LANG_KEY);
const browserLang = (navigator.language || '').split('-')[0];
const initialLang =
  savedLang && SUPPORTED_LANGS.includes(savedLang)
    ? savedLang
    : SUPPORTED_LANGS.includes(browserLang)
      ? browserLang
      : DEFAULT_LANG;
applyLanguage(initialLang);

// ============================================================
// Analytics helpers
// ============================================================

const trackEvent = (eventName, params = {}) => {
  // Google Analytics 4
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }

  // Lightweight localStorage-based stats (fallback / supplement)
  try {
    const statsKey = 'web_promote_stats';
    const stats = JSON.parse(localStorage.getItem(statsKey) || '{}');
    stats[eventName] = (stats[eventName] || 0) + 1;
    stats._last = new Date().toISOString();
    localStorage.setItem(statsKey, JSON.stringify(stats));
  } catch {
    // ignore storage errors
  }
};

trackEvent('page_view', { lang: initialLang });

// ============================================================
// Inquiry form — real email delivery via Formspree
// ============================================================

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const company = String(formData.get('company') || '').trim();
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const channel = String(formData.get('channel') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!company || !name || !phone || !channel || !message) {
      formMessage.textContent = t('form.error.required');
      formMessage.classList.add('error');
      return;
    }

    const submitBtn = inquiryForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '···';
    }
    formMessage.textContent = '';
    formMessage.classList.remove('error');

    const isFormspreeConfigured = !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID');

    if (isFormspreeConfigured) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          formMessage.textContent = t('form.success');
          formMessage.classList.remove('error');
          inquiryForm.reset();
          trackEvent('inquiry_submitted', { channel, lang: currentLang });
        } else {
          formMessage.textContent = t('form.error.send');
          formMessage.classList.add('error');
        }
      } catch {
        formMessage.textContent = t('form.error.send');
        formMessage.classList.add('error');
      }
    } else {
      // Formspree not yet configured — demo mode shows success feedback
      formMessage.textContent = t('form.success');
      formMessage.classList.remove('error');
      inquiryForm.reset();
      trackEvent('inquiry_submitted', { channel, lang: currentLang });
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = t('form.submit');
    }
  });
}

// ============================================================
// Google Analytics 4 — lazy-load when ID is configured
// ============================================================

if (GA4_ID && !GA4_ID.includes('YOUR_GA4_ID')) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA4_ID);
}