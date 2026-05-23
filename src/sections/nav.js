import { t, getCurrentLang, getSupportedLangs, setLang } from '../i18n.js';
import { logoSvg, githubIcon } from '../icons.js';

export function renderNav(renderApp) {
  const langs = getSupportedLangs();
  const current = getCurrentLang();

  return `
  <nav class="nav" id="main-nav">
    <div class="nav-inner">
      <a href="#" class="nav-logo" id="nav-logo" aria-label="OpenE2EE Home">
        ${logoSvg(28)}
      </a>
      <div class="nav-links" id="nav-links">
        <a href="#why" class="nav-link">${t('nav.why')}</a>
        <a href="#how" class="nav-link">${t('nav.how')}</a>
        <a href="#matrix" class="nav-link">${t('nav.matrix')}</a>
        <a href="#news" class="nav-link">${t('nav.news')}</a>
        <a href="#reports" class="nav-link">${t('nav.reports')}</a>
        <a href="#contact" class="nav-link">${t('nav.contact')}</a>
        <a href="https://github.com/opene2ee-com" class="nav-link" target="_blank" rel="noopener" aria-label="GitHub">${githubIcon()}</a>
        <div class="lang-toggle" id="lang-toggle">
          ${langs.map(l => `<button class="lang-btn ${l === current ? 'active' : ''}" data-lang="${l}">${l.toUpperCase()}</button>`).join('')}
        </div>
      </div>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

export function initNav(renderApp) {
  // Scroll effect
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Hamburger
  const hamburger = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');
  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    // Close menu on link click
    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Language toggle
  const toggle = document.getElementById('lang-toggle');
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
