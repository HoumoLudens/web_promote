// ─── Constants ────────────────────────────────────────────────────────────────

const THEME_KEY = 'web_promote_theme';
const DEFAULT_THEME = 'night-bar';
const BASE_THEME = 'violet';
const LANG_KEY = 'web_promote_lang';
const DEFAULT_LANG = 'zh';

// EmailJS — replace with your actual keys from https://www.emailjs.com/
// Leave as-is to keep the form working without real email delivery.
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// ─── Translations ─────────────────────────────────────────────────────────────

const translations = {
  zh: {
    pageTitle: '柿种工厂直销 | 价格实惠 口味丰富 可定制',
    'nav.products': '产品',
    'nav.advantages': '优势',
    'nav.cooperation': '合作模式',
    'nav.inquiry': '获取报价',
    'hero.tag': '工厂直供 · 渠道更省成本',
    'hero.h1': '柿种工厂直销供货<br>实惠价格 + 丰富口味 + 灵活定制',
    'hero.desc':
      '直接对接工厂，减少中间环节成本。我们为商超、便利店、电商和餐饮客户提供高性价比柿种产品，支持多口味组合与包装定制，帮助你更快上架、更稳复购。',
    'hero.cta.primary': '获取工厂报价',
    'hero.cta.ghost': '查看口味与规格',
    'hero.point.0': '工厂直销价格，降低采购成本',
    'hero.point.1': '原味、混合、辣味等口味可灵活组合',
    'hero.point.2': '支持包装与口味定制，满足渠道差异化',
    'hero.card.title': '适配渠道',
    'hero.card.item.0': '酒吧 / KTV / 夜场娱乐场所',
    'hero.card.item.1': '线下商超 / 精品超市',
    'hero.card.item.2': '便利店 / 零食连锁',
    'hero.card.item.3': '跨境电商 / 社群团购',
    'hero.card.item.4': '酒店 / 航空配餐 / 餐饮佐餐',
    'hero.card.cta.desc': '提交需求后，快速提供工厂直销报价',
    'hero.card.cta.btn': '领取定制报价',
    'products.title': '口味与规格方案',
    'products.desc': '从高频常销到渠道定制，兼顾价格带与口味丰富度，满足不同销售场景。',
    'product.0.title': '经典原味（高性价比）',
    'product.0.desc': '工厂稳定生产，适合做基础走量款，价格友好、动销稳定。',
    'product.0.li.0': '规格：70g / 150g / 500g',
    'product.0.li.1': '口味：经典咸香',
    'product.0.li.2': '场景：日常零售 / 活动引流',
    'product.1.title': '花生混合（复购热门）',
    'product.1.desc': '米果与花生搭配，口味层次丰富，适合线上线下联动销售。',
    'product.1.li.0': '规格：80g / 160g / 1kg',
    'product.1.li.1': '口味：咸香混合',
    'product.1.li.2': '场景：电商组合 / 节庆礼赠',
    'product.2.title': '定制款（口味 / 包装可定制）',
    'product.2.desc': '支持 OEM/联名与渠道专供，打造差异化产品线。',
    'product.2.li.0': '口味：可按需求开发与调整',
    'product.2.li.1': '包装：礼盒 / 袋装 / 散装',
    'product.2.li.2': '价格：按起订量阶梯报价',
    'advantages.title': '为什么选择我们',
    'advantage.0.title': '工厂直销',
    'advantage.0.desc': '减少中间流通环节，采购链路更短，交付效率更高。',
    'advantage.1.title': '价格实惠',
    'advantage.1.desc': '提供有竞争力的渠道价格，支持阶梯报价与长期合作价。',
    'advantage.2.title': '口味丰富',
    'advantage.2.desc': '覆盖多口味组合，满足不同区域和人群的偏好需求。',
    'advantage.3.title': '支持定制',
    'advantage.3.desc': '可定制口味、包装与标签，帮助渠道打造差异化卖点。',
    'cooperation.title': '合作流程',
    'step.0.title': '01 提交需求',
    'step.0.desc': '告知渠道类型、目标口味、包装要求和预计采购量。',
    'step.1.title': '02 获取工厂报价',
    'step.1.desc': '根据规格与数量，提供直销价格、交期与供货建议。',
    'step.2.title': '03 样品与定制确认',
    'step.2.desc': '确认口味、包装、标签及合作条款后安排生产。',
    'step.3.title': '04 批量供货',
    'step.3.desc': '按计划发货并持续补货，保障渠道长期稳定动销。',
    'contact.title': '商务对接窗口',
    'contact.email': '邮箱：sales@example.com',
    'contact.phone': '电话：+86 138-0000-0000',
    'contact.wechat': '微信：KAKITANE_B2B',
    'contact.tip': '可快速提供：工厂报价单、样品政策、定制方案',
    'inquiry.title': '提交询盘',
    'inquiry.desc': '留下需求信息，我们将提供工厂直销报价与定制建议。',
    'form.company.label': '公司名称',
    'form.company.placeholder': '如：XX连锁 / XX电商店铺',
    'form.name.label': '联系人',
    'form.name.placeholder': '采购 / 招商负责人姓名',
    'form.phone.label': '联系方式',
    'form.phone.placeholder': '手机 / 微信 / 企业邮箱',
    'form.channel.label': '渠道类型',
    'form.channel.default': '请选择',
    'form.channel.bar': '酒吧 / KTV / 娱乐场所',
    'form.channel.supermarket': '商超',
    'form.channel.convenience': '便利店',
    'form.channel.ecommerce': '电商',
    'form.channel.gift': '礼品渠道',
    'form.channel.other': '其他',
    'form.message.label': '需求说明',
    'form.message.placeholder': '如：目标规格、首批数量、上架时间、目标渠道',
    'form.submit': '提交询盘',
    'form.success': '询盘已提交，我们会尽快联系您。',
    'form.error.empty': '请完整填写信息后再提交。',
    'form.error.send': '提交失败，请稍后重试或直接联系我们。',
    'footer.copy': '© 2026 柿种 B2B 经销站 | 日本零食渠道合作',
    'footer.top': '返回顶部',
  },
  en: {
    pageTitle: 'Kakitane Factory Direct | Best Price · Rich Flavors · Custom',
    'nav.products': 'Products',
    'nav.advantages': 'Why Us',
    'nav.cooperation': 'How It Works',
    'nav.inquiry': 'Get Quote',
    'hero.tag': 'Factory Direct · Lower Channel Costs',
    'hero.h1': 'Kakitane Factory Direct Supply<br>Best Price · Rich Flavors · Custom Options',
    'hero.desc':
      'Work directly with our factory to reduce supply chain costs. We supply supermarkets, convenience stores, e-commerce and food service clients with high-value Kakitane rice crackers. Multi-flavor combinations and custom packaging available.',
    'hero.cta.primary': 'Get Factory Quote',
    'hero.cta.ghost': 'View Products & Specs',
    'hero.point.0': 'Factory direct pricing, lower procurement costs',
    'hero.point.1': 'Original, mixed, spicy flavors — flexible combinations',
    'hero.point.2': 'Custom packaging & flavors for channel differentiation',
    'hero.card.title': 'Target Channels',
    'hero.card.item.0': 'Bars / KTV / Entertainment Venues',
    'hero.card.item.1': 'Supermarkets / Specialty Grocers',
    'hero.card.item.2': 'Convenience Stores / Snack Chains',
    'hero.card.item.3': 'Cross-border E-commerce / Group Buying',
    'hero.card.item.4': 'Hotels / Airlines / Food Service',
    'hero.card.cta.desc': 'Submit your requirements for a fast factory quote',
    'hero.card.cta.btn': 'Get Custom Quote',
    'products.title': 'Products & Specifications',
    'products.desc':
      'From bestselling classics to channel-exclusive SKUs — balancing price range and flavor variety for different sales scenarios.',
    'product.0.title': 'Classic Original (Best Value)',
    'product.0.desc':
      'Stable factory production, ideal as a high-volume everyday SKU with friendly pricing and steady sell-through.',
    'product.0.li.0': 'Sizes: 70g / 150g / 500g',
    'product.0.li.1': 'Flavor: Classic Savory',
    'product.0.li.2': 'Use: Daily retail / Event promotions',
    'product.1.title': 'Peanut Mix (Best Repeat Purchase)',
    'product.1.desc':
      'Rice cracker and peanut blend with layered flavors, ideal for online-offline cross-channel sales.',
    'product.1.li.0': 'Sizes: 80g / 160g / 1kg',
    'product.1.li.1': 'Flavor: Savory Mix',
    'product.1.li.2': 'Use: E-commerce bundles / Gift sets',
    'product.2.title': 'Custom SKU (Flavor & Packaging)',
    'product.2.desc': 'OEM / co-branded and channel-exclusive options to build a differentiated product line.',
    'product.2.li.0': 'Flavor: Developed to your specifications',
    'product.2.li.1': 'Packaging: Gift box / Bag / Bulk',
    'product.2.li.2': 'Pricing: Tiered by order quantity',
    'advantages.title': 'Why Choose Us',
    'advantage.0.title': 'Factory Direct',
    'advantage.0.desc': 'Fewer intermediaries means a shorter supply chain, faster delivery, and better margins.',
    'advantage.1.title': 'Competitive Pricing',
    'advantage.1.desc': 'Channel-friendly prices with tiered volume discounts and long-term partnership rates.',
    'advantage.2.title': 'Flavor Variety',
    'advantage.2.desc': 'Wide range of flavor combinations to meet the preferences of different regions and customer segments.',
    'advantage.3.title': 'Custom Options',
    'advantage.3.desc': 'Customize flavors, packaging and labels to give your channel a unique competitive edge.',
    'cooperation.title': 'How It Works',
    'step.0.title': '01 Submit Requirements',
    'step.0.desc': 'Tell us your channel type, target flavors, packaging needs and estimated order volume.',
    'step.1.title': '02 Receive Factory Quote',
    'step.1.desc': 'We provide direct factory pricing, lead times and supply recommendations based on your specs.',
    'step.2.title': '03 Sample & Confirm',
    'step.2.desc': 'Confirm flavors, packaging, labels and cooperation terms, then production begins.',
    'step.3.title': '04 Bulk Supply',
    'step.3.desc': 'On-schedule shipments with ongoing replenishment to ensure stable long-term channel sales.',
    'contact.title': 'Business Contact',
    'contact.email': 'Email: sales@example.com',
    'contact.phone': 'Tel: +86 138-0000-0000',
    'contact.wechat': 'WeChat: KAKITANE_B2B',
    'contact.tip': 'Quick response: Factory price list · Sample policy · Custom plans',
    'inquiry.title': 'Submit Inquiry',
    'inquiry.desc': 'Leave your requirements and we will provide factory pricing and customization advice.',
    'form.company.label': 'Company Name',
    'form.company.placeholder': 'e.g. XYZ Chain / XYZ Online Store',
    'form.name.label': 'Contact Person',
    'form.name.placeholder': 'Purchasing / BD manager name',
    'form.phone.label': 'Contact Info',
    'form.phone.placeholder': 'Mobile / WeChat / Business email',
    'form.channel.label': 'Channel Type',
    'form.channel.default': 'Please select',
    'form.channel.bar': 'Bar / KTV / Entertainment',
    'form.channel.supermarket': 'Supermarket',
    'form.channel.convenience': 'Convenience Store',
    'form.channel.ecommerce': 'E-commerce',
    'form.channel.gift': 'Gift Channel',
    'form.channel.other': 'Other',
    'form.message.label': 'Requirements',
    'form.message.placeholder': 'e.g. Target specs, first order qty, listing timeline, target channel',
    'form.submit': 'Submit Inquiry',
    'form.success': 'Inquiry submitted! We will contact you shortly.',
    'form.error.empty': 'Please complete all fields before submitting.',
    'form.error.send': 'Submission failed. Please try again or contact us directly.',
    'footer.copy': '© 2026 Kakitane B2B | Japanese Snack Channel Partner',
    'footer.top': 'Back to Top',
  },
};

// ─── DOM refs ─────────────────────────────────────────────────────────────────

const themeSwitch = document.getElementById('themeSwitch');
const themeButtons = themeSwitch ? themeSwitch.querySelectorAll('.theme-btn') : [];
const langToggle = document.getElementById('langToggle');
const inquiryForm = document.getElementById('inquiryForm');
const formMessage = document.getElementById('formMessage');

// ─── Theme ────────────────────────────────────────────────────────────────────

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

    if (typeof gtag === 'function') {
      gtag('event', 'theme_switch', { theme: themeName });
    }
  });
}

// ─── i18n ─────────────────────────────────────────────────────────────────────

const currentLang = () => localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

const applyLanguage = (lang) => {
  const t = translations[lang] || translations[DEFAULT_LANG];

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  if (t.pageTitle) document.title = t.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  if (langToggle) {
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    langToggle.setAttribute(
      'aria-label',
      lang === 'zh' ? 'Switch to English' : '切换为中文'
    );
  }
  if (formMessage) formMessage.textContent = '';
};

applyLanguage(currentLang());

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLang = currentLang() === 'zh' ? 'en' : 'zh';
    localStorage.setItem(LANG_KEY, newLang);
    applyLanguage(newLang);

    if (typeof gtag === 'function') {
      gtag('event', 'language_switch', { language: newLang });
    }
  });
}

// ─── EmailJS ──────────────────────────────────────────────────────────────────

let emailjsInitialized = false;

const getEmailjsReady = () => {
  if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || typeof emailjs === 'undefined') {
    return false;
  }
  if (!emailjsInitialized) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    emailjsInitialized = true;
  }
  return true;
};

// ─── Inquiry form ─────────────────────────────────────────────────────────────

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const t = translations[currentLang()] || translations[DEFAULT_LANG];

    const formData = new FormData(inquiryForm);
    const company = String(formData.get('company') || '').trim();
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const channel = String(formData.get('channel') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!company || !name || !phone || !channel || !message) {
      formMessage.textContent = t['form.error.empty'];
      formMessage.classList.add('error');
      return;
    }

    const submitBtn = inquiryForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      if (getEmailjsReady()) {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, inquiryForm);
      }

      formMessage.textContent = t['form.success'];
      formMessage.classList.remove('error');
      inquiryForm.reset();

      if (typeof gtag === 'function') {
        gtag('event', 'form_submit', { event_category: 'inquiry', channel });
      }
    } catch (_err) {
      formMessage.textContent = t['form.error.send'];
      formMessage.classList.add('error');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}