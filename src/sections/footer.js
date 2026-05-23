import { t, getCurrentLang, getSupportedLangs, setLang } from '../i18n.js';
import { logoSvg } from '../icons.js';

export function renderFooter(renderApp) {
  const langs = getSupportedLangs();
  const current = getCurrentLang();

  return `
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-left">
          ${logoSvg(20)}
          <span class="footer-copy">${t('footer.copy')}</span>
        </div>
        <div class="footer-links">
          <a href="https://github.com/opene2ee-com" target="_blank" rel="noopener">${t('footer.github')}</a>
          <a href="https://github.com/opene2ee-com/website/blob/main/LICENSE" target="_blank" rel="noopener">${t('footer.license')}</a>
          <div class="lang-toggle" id="footer-lang-toggle">
            ${langs.map(l => `<button class="lang-btn ${l === current ? 'active' : ''}" data-lang="${l}">${l.toUpperCase()}</button>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}

export function initFooter(renderApp) {
  const toggle = document.getElementById('footer-lang-toggle');
  if (toggle) {
    toggle.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.dataset.lang;
        if (lang !== getCurrentLang()) {
          setLang(lang, renderApp);
        }
      });
    });
  }
}
