import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';
import { getCurrentLang, initI18n, t } from './i18n.js';
import { renderNav, initNav } from './sections/nav.js';
import { renderHero } from './sections/hero.js';
import { renderWhy } from './sections/why.js';
import { renderHow } from './sections/how.js';
import { renderMatrix } from './sections/matrix.js';
import { renderReports } from './sections/reports.js';
import { renderContact } from './sections/contact.js';
import { renderFooter, initFooter } from './sections/footer.js';

const META_LOCALES = {
  tr: 'tr_TR',
  en: 'en_US',
};

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  updateDocumentMeta();

  app.innerHTML =
    renderNav(renderApp) +
    renderHero() +
    '<div class="gradient-line"></div>' +
    renderWhy() +
    renderHow() +
    '<div class="gradient-line"></div>' +
    renderMatrix() +
    renderReports() +
    renderContact() +
    renderFooter(renderApp);

  // Initialize interactive components
  initNav(renderApp);
  initFooter(renderApp);

  // Scroll reveal
  initScrollReveal();
}

function setMetaContent(selector, content) {
  const meta = document.querySelector(selector);
  if (meta) meta.setAttribute('content', content);
}

function updateDocumentMeta() {
  const title = t('meta.title');
  const description = t('meta.description');
  const locale = META_LOCALES[getCurrentLang()] || META_LOCALES.tr;

  document.title = title;
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[property="og:locale"]', locale);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[name="twitter:description"]', description);
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Boot
initI18n(renderApp);
