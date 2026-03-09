// ============================================================
// 1. EMAILJS CONFIGURATION
// ============================================================
/**
 * EmailJS Setup Instructions:
 * 1. Sign up for free at https://www.emailjs.com (200 emails/month free tier)
 * 2. Create an Email Service (Gmail, Outlook, custom SMTP, etc.)
 * 3. Create an Email Template. Add these variables to the template:
 *      {{company}}  {{name}}  {{phone}}  {{channel}}  {{message}}  {{lang}}
 * 4. Fill in your credentials below and set enabled: true
 */
const EMAIL_CONFIG = {
  publicKey: '',       // e.g. 'abc123XYZ_yourPublicKey'
  serviceId: '',       // e.g. 'service_xxxxxx'
  templateId: '',      // e.g. 'template_xxxxxx'
  enabled: false,      // set to true after filling in the values above
};

// ============================================================
// 2. I18N TRANSLATIONS
// ============================================================

const LANG_KEY = 'kakitane_lang';
const DEFAULT_LANG = 'zh';

const translations = {
  zh: {
    nav_products: '产品',
    nav_advantages: '优势',
    nav_cooperation: '合作模式',
    nav_inquiry: '获取报价',
    hero_tag: '工厂直供 · 渠道更省成本',
    hero_title: '柿种工厂直销供货<br>实惠价格 + 丰富口味 + 灵活定制',
    hero_desc:
      '直接对接工厂，减少中间环节成本。我们为商超、便利店、电商和餐饮客户提供高性价比柿种产品，支持多口味组合与包装定制，帮助你更快上架、更稳复购。',
    hero_btn_primary: '获取工厂报价',
    hero_btn_ghost: '查看口味与规格',
    quick_1: '工厂直销价格，降低采购成本',
    quick_2: '原味、混合、辣味等口味可灵活组合',
    quick_3: '支持包装与口味定制，满足渠道差异化',
    hero_card_title: '适配渠道',
    channel_bar: '酒吧 / KTV / 夜场娱乐场所',
    channel_super: '线下商超 / 精品超市',
    channel_cvs: '便利店 / 零食连锁',
    channel_ec: '跨境电商 / 社群团购',
    channel_hotel: '酒店 / 航空配餐 / 餐饮佐餐',
    hero_card_cta_desc: '提交需求后，快速提供工厂直销报价',
    hero_card_cta_btn: '领取定制报价',
    products_title: '口味与规格方案',
    products_desc: '从高频常销到渠道定制，兼顾价格带与口味丰富度，满足不同销售场景。',
    prod1_title: '经典原味（高性价比）',
    prod1_desc: '工厂稳定生产，适合做基础走量款，价格友好、动销稳定。',
    prod1_spec1: '规格：70g / 150g / 500g',
    prod1_spec2: '口味：经典咸香',
    prod1_spec3: '场景：日常零售 / 活动引流',
    prod2_title: '花生混合（复购热门）',
    prod2_desc: '米果与花生搭配，口味层次丰富，适合线上线下联动销售。',
    prod2_spec1: '规格：80g / 160g / 1kg',
    prod2_spec2: '口味：咸香混合',
    prod2_spec3: '场景：电商组合 / 节庆礼赠',
    prod3_title: '定制款（口味 / 包装可定制）',
    prod3_desc: '支持 OEM/联名与渠道专供，打造差异化产品线。',
    prod3_spec1: '口味：可按需求开发与调整',
    prod3_spec2: '包装：礼盒 / 袋装 / 散装',
    prod3_spec3: '价格：按起订量阶梯报价',
    adv_title: '为什么选择我们',
    adv1_title: '工厂直销',
    adv1_desc: '减少中间流通环节，采购链路更短，交付效率更高。',
    adv2_title: '价格实惠',
    adv2_desc: '提供有竞争力的渠道价格，支持阶梯报价与长期合作价。',
    adv3_title: '口味丰富',
    adv3_desc: '覆盖多口味组合，满足不同区域和人群的偏好需求。',
    adv4_title: '支持定制',
    adv4_desc: '可定制口味、包装与标签，帮助渠道打造差异化卖点。',
    coop_title: '合作流程',
    step1_title: '01 提交需求',
    step1_desc: '告知渠道类型、目标口味、包装要求和预计采购量。',
    step2_title: '02 获取工厂报价',
    step2_desc: '根据规格与数量，提供直销价格、交期与供货建议。',
    step3_title: '03 样品与定制确认',
    step3_desc: '确认口味、包装、标签及合作条款后安排生产。',
    step4_title: '04 批量供货',
    step4_desc: '按计划发货并持续补货，保障渠道长期稳定动销。',
    contact_title: '商务对接窗口',
    contact_email: '邮箱：sales@example.com',
    contact_phone: '电话：+86 138-0000-0000',
    contact_wechat: '微信：KAKITANE_B2B',
    contact_tip: '可快速提供：工厂报价单、样品政策、定制方案',
    inquiry_title: '提交询盘',
    inquiry_desc: '留下需求信息，我们将提供工厂直销报价与定制建议。',
    form_company: '公司名称',
    form_company_ph: '如：XX连锁 / XX电商店铺',
    form_name: '联系人',
    form_name_ph: '采购 / 招商负责人姓名',
    form_phone: '联系方式',
    form_phone_ph: '手机 / 微信 / 企业邮箱',
    form_channel: '渠道类型',
    form_channel_ph: '请选择',
    form_channel_bar: '酒吧 / KTV / 娱乐场所',
    form_channel_super: '商超',
    form_channel_cvs: '便利店',
    form_channel_ec: '电商',
    form_channel_gift: '礼品渠道',
    form_channel_other: '其他',
    form_message: '需求说明',
    form_message_ph: '如：目标规格、首批数量、上架时间、目标渠道',
    form_submit: '提交询盘',
    form_sending: '发送中…',
    form_success: '询盘已提交，我们会尽快联系您。',
    form_error_empty: '请完整填写信息后再提交。',
    form_error_send: '发送失败，请稍后重试或直接联系我们。',
    footer_copy: '© 2026 柿种 B2B 经销站 | 日本零食渠道合作',
    footer_top: '返回顶部',
    footer_stats: '数据统计',
    stats_title: '询盘数据统计',
    stats_total: '总询盘数',
    stats_this_week: '本周',
    stats_this_month: '本月',
    stats_by_channel: '渠道分布',
    stats_recent: '最近提交（最多10条）',
    stats_export: '导出 CSV',
    stats_close: '关闭',
    stats_empty: '暂无提交记录',
    stats_col_time: '时间',
    stats_col_company: '公司',
    stats_col_channel: '渠道',
    stats_col_lang: '语言',
  },
  en: {
    nav_products: 'Products',
    nav_advantages: 'Advantages',
    nav_cooperation: 'How It Works',
    nav_inquiry: 'Get a Quote',
    hero_tag: 'Factory Direct · Lower Channel Costs',
    hero_title:
      'Kakitane Factory Direct Supply<br>Competitive Prices · Rich Flavors · Flexible Customization',
    hero_desc:
      'Connect directly with the factory to reduce middleman costs. We supply high-value Kakitane products to supermarkets, convenience stores, e-commerce, and food service customers — with multi-flavor combinations and custom packaging.',
    hero_btn_primary: 'Get Factory Quote',
    hero_btn_ghost: 'View Flavors & Specs',
    quick_1: 'Factory-direct pricing to reduce procurement costs',
    quick_2: 'Original, mixed, and spicy flavors — flexible combinations',
    quick_3: 'Custom packaging & flavors to differentiate your channel',
    hero_card_title: 'Target Channels',
    channel_bar: 'Bars / KTV / Entertainment Venues',
    channel_super: 'Supermarkets / Premium Grocers',
    channel_cvs: 'Convenience Stores / Snack Chains',
    channel_ec: 'Cross-border E-commerce / Group Buying',
    channel_hotel: 'Hotels / Airlines / Restaurants',
    hero_card_cta_desc: 'Submit your requirements for a fast factory direct quote',
    hero_card_cta_btn: 'Get Custom Quote',
    products_title: 'Flavors & Specifications',
    products_desc:
      'From best-selling standards to custom channel products — balancing price range and flavor variety for different sales scenarios.',
    prod1_title: 'Classic Original (Best Value)',
    prod1_desc:
      'Stable factory production — ideal as a high-volume staple with friendly pricing and steady turnover.',
    prod1_spec1: 'Sizes: 70g / 150g / 500g',
    prod1_spec2: 'Flavor: Classic Savory',
    prod1_spec3: 'Use Case: Daily Retail / Promotional Traffic',
    prod2_title: 'Peanut Mix (Top Repurchase)',
    prod2_desc:
      'Rice crackers paired with peanuts — rich layered flavor, ideal for both online and offline sales.',
    prod2_spec1: 'Sizes: 80g / 160g / 1kg',
    prod2_spec2: 'Flavor: Savory Mix',
    prod2_spec3: 'Use Case: E-commerce Bundle / Gift Sets',
    prod3_title: 'Custom SKU (Flavor / Packaging)',
    prod3_desc: 'OEM, co-branding, and channel-exclusive options to build a differentiated product line.',
    prod3_spec1: 'Flavor: Custom-developed on request',
    prod3_spec2: 'Packaging: Gift box / Bag / Bulk',
    prod3_spec3: 'Pricing: Tiered by order quantity',
    adv_title: 'Why Choose Us',
    adv1_title: 'Factory Direct',
    adv1_desc: 'Fewer intermediaries — shorter supply chain, faster delivery, better margins.',
    adv2_title: 'Competitive Pricing',
    adv2_desc: 'Channel-competitive pricing with tiered quotes and long-term partnership rates.',
    adv3_title: 'Rich Flavor Range',
    adv3_desc: 'Multiple flavor combinations to match regional preferences and diverse consumers.',
    adv4_title: 'Custom Support',
    adv4_desc: 'Custom flavors, packaging, and labeling to help your channel stand out.',
    coop_title: 'How It Works',
    step1_title: '01 Submit Requirements',
    step1_desc: 'Share your channel type, target flavors, packaging needs, and expected order volume.',
    step2_title: '02 Receive Factory Quote',
    step2_desc: 'Get direct pricing, lead times, and supply recommendations based on your specs.',
    step3_title: '03 Sample & Confirm',
    step3_desc: 'Confirm flavors, packaging, labels, and terms before production begins.',
    step4_title: '04 Bulk Supply',
    step4_desc: 'Ongoing delivery and replenishment to keep your channel stocked.',
    contact_title: 'Business Contact',
    contact_email: 'Email: sales@example.com',
    contact_phone: 'Phone: +86 138-0000-0000',
    contact_wechat: 'WeChat: KAKITANE_B2B',
    contact_tip: 'We can quickly provide: factory price lists, sample policies, custom proposals',
    inquiry_title: 'Submit an Inquiry',
    inquiry_desc:
      'Leave your requirements and we will provide factory-direct pricing and custom recommendations.',
    form_company: 'Company Name',
    form_company_ph: 'e.g. ABC Supermarket / XYZ E-commerce',
    form_name: 'Contact Person',
    form_name_ph: 'Purchasing / Business Development Manager',
    form_phone: 'Contact Info',
    form_phone_ph: 'Mobile / WeChat / Business Email',
    form_channel: 'Channel Type',
    form_channel_ph: 'Please select',
    form_channel_bar: 'Bar / KTV / Entertainment',
    form_channel_super: 'Supermarket',
    form_channel_cvs: 'Convenience Store',
    form_channel_ec: 'E-commerce',
    form_channel_gift: 'Gift Channel',
    form_channel_other: 'Other',
    form_message: 'Requirements',
    form_message_ph: 'e.g. target sizes, first order quantity, launch timeline, target channel',
    form_submit: 'Submit Inquiry',
    form_sending: 'Sending…',
    form_success: 'Inquiry submitted! We will contact you shortly.',
    form_error_empty: 'Please fill in all required fields.',
    form_error_send: 'Failed to send. Please try again or contact us directly.',
    footer_copy: '© 2026 Kakitane B2B | Japanese Snack Channel Partner',
    footer_top: 'Back to Top',
    footer_stats: 'Statistics',
    stats_title: 'Inquiry Statistics',
    stats_total: 'Total Inquiries',
    stats_this_week: 'This Week',
    stats_this_month: 'This Month',
    stats_by_channel: 'By Channel',
    stats_recent: 'Recent Submissions (up to 10)',
    stats_export: 'Export CSV',
    stats_close: 'Close',
    stats_empty: 'No submissions yet',
    stats_col_time: 'Time',
    stats_col_company: 'Company',
    stats_col_channel: 'Channel',
    stats_col_lang: 'Language',
  },
  ja: {
    nav_products: '製品',
    nav_advantages: '選ぶ理由',
    nav_cooperation: '取引の流れ',
    nav_inquiry: '見積もりを取得',
    hero_tag: '工場直販・チャネルコスト削減',
    hero_title: '柿の種 工場直販供給<br>お得な価格・豊富なフレーバー・柔軟なカスタマイズ',
    hero_desc:
      '工場と直接つながり、中間コストを削減。スーパー、コンビニ、ECショップ、飲食業向けに高コスパの柿の種製品を供給。フレーバー組み合わせとパッケージのカスタマイズにも対応。',
    hero_btn_primary: '工場見積もりを取得',
    hero_btn_ghost: 'フレーバー・仕様を見る',
    quick_1: '工場直販価格で調達コストを削減',
    quick_2: 'プレーン・ミックス・辛口など柔軟に組み合わせ可能',
    quick_3: 'パッケージ・フレーバーのカスタマイズでチャネル差別化',
    hero_card_title: '対応チャネル',
    channel_bar: 'バー / KTV / エンターテイメント施設',
    channel_super: 'スーパー / 高級食料品店',
    channel_cvs: 'コンビニ / スナックチェーン',
    channel_ec: '越境EC / グループ購入',
    channel_hotel: 'ホテル / 航空 / 飲食',
    hero_card_cta_desc: 'ご要望をお送りいただくと、工場直販見積もりをすぐにご提供します',
    hero_card_cta_btn: 'カスタム見積もりを取得',
    products_title: 'フレーバーと仕様',
    products_desc:
      'ベストセラー定番商品からチャネル向けカスタム品まで、価格帯とフレーバーの多様性でさまざまな販売シーンに対応。',
    prod1_title: 'クラシック プレーン（高コスパ）',
    prod1_desc: '安定した工場生産。ベース商品として最適。価格フレンドリーで安定した回転率。',
    prod1_spec1: 'サイズ：70g / 150g / 500g',
    prod1_spec2: 'フレーバー：クラシック塩味',
    prod1_spec3: '用途：日常小売 / プロモーション',
    prod2_title: 'ピーナッツミックス（リピート人気）',
    prod2_desc: 'おかきとピーナッツを組み合わせ、豊かな味わい。オンライン・オフライン販売に最適。',
    prod2_spec1: 'サイズ：80g / 160g / 1kg',
    prod2_spec2: 'フレーバー：塩味ミックス',
    prod2_spec3: '用途：ECセット / ギフトセット',
    prod3_title: 'カスタム（フレーバー・パッケージ対応）',
    prod3_desc: 'OEM・コブランディング・チャネル専用製品の差別化ラインを構築。',
    prod3_spec1: 'フレーバー：ご要望に応じて開発・調整',
    prod3_spec2: 'パッケージ：ギフトボックス / 袋 / バルク',
    prod3_spec3: '価格：発注数量に応じた段階的見積もり',
    adv_title: 'なぜ私たちを選ぶのか',
    adv1_title: '工場直販',
    adv1_desc: '中間業者を削減。サプライチェーンが短くなり、納期が早まり、マージンが改善。',
    adv2_title: '競争力のある価格',
    adv2_desc: 'チャネル競争力のある価格と段階的見積もり、長期取引価格に対応。',
    adv3_title: '豊富なフレーバー',
    adv3_desc: '地域の好みや多様な顧客に合わせた複数のフレーバー組み合わせ。',
    adv4_title: 'カスタマイズ対応',
    adv4_desc: 'フレーバー・パッケージ・ラベルのカスタマイズでチャネルの差別化を支援。',
    coop_title: '取引の流れ',
    step1_title: '01 ご要望を送信',
    step1_desc: 'チャネルタイプ、希望フレーバー、パッケージ要件、予定発注数量をお伝えください。',
    step2_title: '02 工場見積もりを受け取る',
    step2_desc: '仕様と数量に基づき、直販価格・リードタイム・供給提案をご提供します。',
    step3_title: '03 サンプル・確認',
    step3_desc: 'フレーバー、パッケージ、ラベル、条件を確認後に生産開始。',
    step4_title: '04 大量供給',
    step4_desc: '計画的な納品と継続補充で、チャネルの安定供給を保証。',
    contact_title: 'ビジネス窓口',
    contact_email: 'メール：sales@example.com',
    contact_phone: '電話：+86 138-0000-0000',
    contact_wechat: 'WeChat：KAKITANE_B2B',
    contact_tip: '工場価格表・サンプルポリシー・カスタム提案を迅速にご提供',
    inquiry_title: 'お問い合わせを送信',
    inquiry_desc: 'ご要望をお送りいただくと、工場直販の見積もりとカスタム提案をご提供します。',
    form_company: '会社名',
    form_company_ph: '例：ABC スーパー / XYZ 電商',
    form_name: '担当者名',
    form_name_ph: '購買 / ビジネス開発担当者',
    form_phone: '連絡先',
    form_phone_ph: '携帯 / WeChat / 会社メール',
    form_channel: 'チャネルタイプ',
    form_channel_ph: '選択してください',
    form_channel_bar: 'バー / KTV / エンターテイメント',
    form_channel_super: 'スーパー',
    form_channel_cvs: 'コンビニ',
    form_channel_ec: 'EC',
    form_channel_gift: 'ギフトチャネル',
    form_channel_other: 'その他',
    form_message: 'ご要望・詳細',
    form_message_ph: '例：目標サイズ、初回発注数量、発売時期、対象チャネル',
    form_submit: '問い合わせを送信',
    form_sending: '送信中…',
    form_success: 'お問い合わせを受け付けました。折り返しご連絡いたします。',
    form_error_empty: 'すべての必須項目を入力してください。',
    form_error_send: '送信に失敗しました。しばらくしてからもう一度お試しください。',
    footer_copy: '© 2026 柿の種 B2B | 日本スナック チャネルパートナー',
    footer_top: 'トップへ戻る',
    footer_stats: '統計データ',
    stats_title: '問い合わせ統計',
    stats_total: '総問い合わせ数',
    stats_this_week: '今週',
    stats_this_month: '今月',
    stats_by_channel: 'チャネル別',
    stats_recent: '最近の送信（最大10件）',
    stats_export: 'CSV エクスポート',
    stats_close: '閉じる',
    stats_empty: 'まだ送信データがありません',
    stats_col_time: '時刻',
    stats_col_company: '会社',
    stats_col_channel: 'チャネル',
    stats_col_lang: '言語',
  },
};

// ============================================================
// 3. I18N ENGINE
// ============================================================

let currentLang = DEFAULT_LANG;

function t(key) {
  const langData = translations[currentLang] || translations[DEFAULT_LANG];
  return (langData && langData[key]) || (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key]) || key;
}

const CHANNEL_OPTIONS = [
  { value: '', key: 'form_channel_ph' },
  { value: '酒吧KTV娱乐', key: 'form_channel_bar' },
  { value: '商超', key: 'form_channel_super' },
  { value: '便利店', key: 'form_channel_cvs' },
  { value: '电商', key: 'form_channel_ec' },
  { value: '礼品', key: 'form_channel_gift' },
  { value: '其他', key: 'form_channel_other' },
];

function updateChannelOptions() {
  const select = document.querySelector('select[name="channel"]');
  if (!select) return;
  const currentValue = select.value;
  select.innerHTML = '';
  CHANNEL_OPTIONS.forEach((ch) => {
    const opt = document.createElement('option');
    opt.value = ch.value;
    opt.textContent = t(ch.key);
    if (ch.value === currentValue) opt.selected = true;
    select.appendChild(opt);
  });
}

function applyLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  const htmlEl = document.documentElement;
  htmlEl.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
  });

  updateChannelOptions();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

// Init language
(function initLang() {
  const saved = localStorage.getItem(LANG_KEY);
  applyLang(translations[saved] ? saved : DEFAULT_LANG);
})();

const langSwitch = document.getElementById('langSwitch');
if (langSwitch) {
  langSwitch.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const lang = target.dataset.lang;
    if (lang && translations[lang]) applyLang(lang);
  });
}

// ============================================================
// 4. THEME SYSTEM
// ============================================================

const themeSwitch = document.getElementById('themeSwitch');
const themeButtons = themeSwitch ? themeSwitch.querySelectorAll('.theme-btn') : [];
const THEME_KEY = 'web_promote_theme';
const DEFAULT_THEME = 'night-bar';
const BASE_THEME = 'violet';

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
    if (!(target instanceof HTMLButtonElement)) return;
    const themeName = target.dataset.theme;
    if (!themeName || !availableThemes.includes(themeName)) return;
    localStorage.setItem(THEME_KEY, themeName);
    applyTheme(themeName);
  });
}

// ============================================================
// 5. MOBILE NAV TOGGLE
// ============================================================

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// 6. STATISTICS TRACKING
// ============================================================

const STATS_KEY = 'kakitane_inquiries';

/** Escape HTML entities to prevent XSS when inserting user data into innerHTML. */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function loadInquiries() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to parse saved inquiries:', err);
    return [];
  }
}

function saveInquiry(data) {
  const list = loadInquiries();
  list.push({ ...data, timestamp: new Date().toISOString() });
  localStorage.setItem(STATS_KEY, JSON.stringify(list));
}

function computeStats(inquiries) {
  const now = Date.now();
  const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  const MONTH_MS = 30 * 24 * 60 * 60 * 1000; // approx. 30 days
  const thisWeek = inquiries.filter((i) => now - new Date(i.timestamp).getTime() <= WEEK_MS).length;
  const thisMonth = inquiries.filter((i) => now - new Date(i.timestamp).getTime() <= MONTH_MS).length;
  const byChannel = {};
  inquiries.forEach((i) => {
    const ch = i.channel || '—';
    byChannel[ch] = (byChannel[ch] || 0) + 1;
  });
  return { total: inquiries.length, thisWeek, thisMonth, byChannel };
}

// ============================================================
// 7. STATISTICS MODAL
// ============================================================

function renderStats() {
  const inquiries = loadInquiries();
  const stats = computeStats(inquiries);

  const elTotal = document.getElementById('statTotal');
  const elWeek = document.getElementById('statWeek');
  const elMonth = document.getElementById('statMonth');
  if (elTotal) elTotal.textContent = String(stats.total);
  if (elWeek) elWeek.textContent = String(stats.thisWeek);
  if (elMonth) elMonth.textContent = String(stats.thisMonth);

  const channelContainer = document.getElementById('statsChannelBars');
  if (channelContainer) {
    const entries = Object.entries(stats.byChannel).sort(([, a], [, b]) => b - a);
    if (entries.length === 0) {
      channelContainer.innerHTML = `<p class="stats-empty">${t('stats_empty')}</p>`;
    } else {
      const max = Math.max(...entries.map(([, c]) => c));
      channelContainer.innerHTML = entries
        .map(
          ([channel, count]) => `
          <div class="channel-bar-row">
            <span class="channel-bar-label">${escapeHtml(channel)}</span>
            <div class="channel-bar-track">
              <div class="channel-bar-fill" style="width:${((count / max) * 100).toFixed(1)}%"></div>
            </div>
            <span class="channel-bar-count">${count}</span>
          </div>`,
        )
        .join('');
    }
  }

  const recentContainer = document.getElementById('statsRecentList');
  if (recentContainer) {
    const recent = [...inquiries].reverse().slice(0, 10);
    if (recent.length === 0) {
      recentContainer.innerHTML = `<p class="stats-empty">${t('stats_empty')}</p>`;
    } else {
      recentContainer.innerHTML = `
        <table class="stats-table">
          <thead>
            <tr>
              <th>${t('stats_col_time')}</th>
              <th>${t('stats_col_company')}</th>
              <th>${t('stats_col_channel')}</th>
              <th>${t('stats_col_lang')}</th>
            </tr>
          </thead>
          <tbody>
            ${recent
              .map(
                (i) => `
              <tr>
                <td>${escapeHtml(new Date(i.timestamp).toLocaleString())}</td>
                <td>${escapeHtml(i.company || '—')}</td>
                <td>${escapeHtml(i.channel || '—')}</td>
                <td>${escapeHtml(i.lang || '—')}</td>
              </tr>`,
              )
              .join('')}
          </tbody>
        </table>`;
    }
  }

  document.querySelectorAll('#statsModal [data-i18n]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });
}

function exportCSV() {
  const inquiries = loadInquiries();
  if (inquiries.length === 0) return;
  const headers = ['Time', 'Company', 'Contact', 'Phone', 'Channel', 'Message', 'Language'];
  /** Escape a CSV field value by replacing double-quotes and stripping newlines. */
  function csvField(val) {
    return String(val || '').replace(/"/g, '""').replace(/[\r\n]+/g, ' ');
  }
  const rows = inquiries.map((i) => [
    csvField(i.timestamp),
    csvField(i.company),
    csvField(i.name),
    csvField(i.phone),
    csvField(i.channel),
    csvField(i.message),
    csvField(i.lang),
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((v) => `"${v}"`).join(','))
    .join('\r\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `kakitane_inquiries_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const statsModal = document.getElementById('statsModal');
const statsOpenBtn = document.getElementById('statsOpenBtn');
const statsCloseBtn = document.getElementById('statsClose');
const statsExportBtn = document.getElementById('statsExport');

function openStats() {
  if (!statsModal) return;
  renderStats();
  statsModal.classList.add('is-open');
  statsModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (statsCloseBtn) statsCloseBtn.focus();
}

function closeStats() {
  if (!statsModal) return;
  statsModal.classList.remove('is-open');
  statsModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (statsOpenBtn) statsOpenBtn.focus();
}

if (statsOpenBtn) statsOpenBtn.addEventListener('click', openStats);
if (statsCloseBtn) statsCloseBtn.addEventListener('click', closeStats);
if (statsExportBtn) statsExportBtn.addEventListener('click', exportCSV);

const statsClose2Btn = document.getElementById('statsClose2');
if (statsClose2Btn) statsClose2Btn.addEventListener('click', closeStats);

if (statsModal) {
  statsModal.addEventListener('click', (e) => {
    if (e.target === statsModal) closeStats();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && statsModal.classList.contains('is-open')) closeStats();
  });
}

// ============================================================
// 8. EMAILJS + FORM HANDLING
// ============================================================

if (EMAIL_CONFIG.enabled && EMAIL_CONFIG.publicKey && typeof emailjs !== 'undefined') {
  emailjs.init({ publicKey: EMAIL_CONFIG.publicKey });
}

function sendEmail(params) {
  if (!EMAIL_CONFIG.enabled || !EMAIL_CONFIG.publicKey || typeof emailjs === 'undefined') {
    return Promise.resolve();
  }
  return emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, params);
}

const inquiryForm = document.getElementById('inquiryForm');
const formMessage = document.getElementById('formMessage');

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const company = String(formData.get('company') || '').trim();
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const channel = String(formData.get('channel') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!company || !name || !phone || !channel || !message) {
      formMessage.textContent = t('form_error_empty');
      formMessage.classList.add('error');
      return;
    }

    const submitBtn = inquiryForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t('form_sending');
    }
    formMessage.textContent = '';
    formMessage.classList.remove('error');

    sendEmail({ company, name, phone, channel, message, lang: currentLang })
      .then(() => {
        saveInquiry({ company, name, phone, channel, message, lang: currentLang });
        formMessage.textContent = t('form_success');
        formMessage.classList.remove('error');
        inquiryForm.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        formMessage.textContent = t('form_error_send');
        formMessage.classList.add('error');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = t('form_submit');
        }
      });
  });
}