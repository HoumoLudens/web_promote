const inquiryForm = document.getElementById('inquiryForm');
const formMessage = document.getElementById('formMessage');
const themeSwitch = document.getElementById('themeSwitch');
const themeButtons = themeSwitch ? themeSwitch.querySelectorAll('.theme-btn') : [];
const metricTipSnackRevenue = document.getElementById('metricTipSnackRevenue');
const metricTipPeakExtra = document.getElementById('metricTipPeakExtra');
const metricTipNightRevenue = document.getElementById('metricTipNightRevenue');
const THEME_KEY = 'web_promote_theme';
const DEFAULT_THEME = 'night-bar';
const BASE_THEME = 'violet';

// Edit these 3 values to quickly customize example numbers for different stores.
const salesAssumptions = {
  snackUnitPrice: 12,
  peakBaseSnackOrders: 80,
  nightlyDrinkRevenue: 8000,
};

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

const formatRange = (min, max) => `${Math.round(min)}-${Math.round(max)}`;

if (metricTipSnackRevenue && metricTipPeakExtra && metricTipNightRevenue) {
  const extraSnackRevenueMin = 12 * salesAssumptions.snackUnitPrice;
  const extraSnackRevenueMax = 28 * salesAssumptions.snackUnitPrice;
  metricTipSnackRevenue.textContent = `按每份 ${salesAssumptions.snackUnitPrice} 元算，每 100 桌约多卖 ${formatRange(extraSnackRevenueMin, extraSnackRevenueMax)} 元小食。`;

  const extraSnackCountMin = salesAssumptions.peakBaseSnackOrders * 0.1;
  const extraSnackCountMax = salesAssumptions.peakBaseSnackOrders * 0.22;
  metricTipPeakExtra.textContent = `如果你高峰本来卖 ${salesAssumptions.peakBaseSnackOrders} 份小食，通常可多卖约 ${formatRange(extraSnackCountMin, extraSnackCountMax)} 份。`;

  const extraNightRevenueMin = salesAssumptions.nightlyDrinkRevenue * 0.08;
  const extraNightRevenueMax = salesAssumptions.nightlyDrinkRevenue * 0.18;
  metricTipNightRevenue.textContent = `例：酒水夜营业额 ${salesAssumptions.nightlyDrinkRevenue} 元时，约多 ${formatRange(extraNightRevenueMin, extraNightRevenueMax)} 元。`;
}

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const requiredFields = Array.from(inquiryForm.querySelectorAll('[required]'));
    const hasMissingField = requiredFields.some((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) {
        return false;
      }
      return !field.value.trim();
    });

    if (hasMissingField) {
      formMessage.textContent = '请完整填写信息后再提交。';
      formMessage.classList.add('error');
      return;
    }

    const company = String(formData.get('company') || '').trim();
    const name = String(formData.get('name') || '').trim();
    formMessage.textContent = '询盘已提交，我们会尽快联系您。';
    formMessage.classList.remove('error');
    console.info('lead submitted', { company, name, scenario: 'bar-nightlife' });
    inquiryForm.reset();
  });
}