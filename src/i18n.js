const SUPPORTED_LANGS = ['tr', 'en'];
const DEFAULT_LANG = 'tr';
let currentLang = DEFAULT_LANG;
let translations = {};

function detectLang() {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash && SUPPORTED_LANGS.includes(hash)) return hash;
  const stored = localStorage.getItem('opene2ee-lang');
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = navigator.language?.slice(0, 2);
  if (browser && SUPPORTED_LANGS.includes(browser)) return browser;
  return DEFAULT_LANG;
}

async function loadLocale(lang) {
  try {
    const mod = await import(`./locales/${lang}.json`);
    return mod.default || mod;
  } catch {
    console.warn(`Locale "${lang}" not found, falling back to "${DEFAULT_LANG}"`);
    const mod = await import(`./locales/${DEFAULT_LANG}.json`);
    return mod.default || mod;
  }
}

function t(key) {
  const keys = key.split('.');
  let val = translations;
  for (const k of keys) {
    if (val && typeof val === 'object' && k in val) {
      val = val[k];
    } else {
      return key;
    }
  }
  return val !== undefined ? val : key;
}

function getCurrentLang() {
  return currentLang;
}

function getSupportedLangs() {
  return [...SUPPORTED_LANGS];
}

async function setLang(lang, renderCallback) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;
  localStorage.setItem('opene2ee-lang', lang);
  window.location.hash = `#/${lang}`;
  translations = await loadLocale(lang);
  document.documentElement.lang = lang;
  if (renderCallback) renderCallback();
}

async function initI18n(renderCallback) {
  currentLang = detectLang();
  translations = await loadLocale(currentLang);
  document.documentElement.lang = currentLang;
  window.location.hash = `#/${currentLang}`;
  if (renderCallback) renderCallback();
  window.addEventListener('hashchange', async () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash && SUPPORTED_LANGS.includes(hash) && hash !== currentLang) {
      await setLang(hash, renderCallback);
    }
  });
}

export { t, getCurrentLang, getSupportedLangs, setLang, initI18n };
