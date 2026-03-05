const inquiryForm = document.getElementById('inquiryForm');
const formMessage = document.getElementById('formMessage');
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
      formMessage.textContent = '请完整填写信息后再提交。';
      formMessage.classList.add('error');
      return;
    }

    formMessage.textContent = '询盘已提交，我们会尽快联系您。';
    formMessage.classList.remove('error');
    inquiryForm.reset();
  });
}