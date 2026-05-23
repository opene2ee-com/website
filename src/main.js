import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';
import { initI18n, t } from './i18n.js';
import { renderNav, initNav } from './sections/nav.js';
import { renderHero } from './sections/hero.js';
import { renderWhy } from './sections/why.js';
import { renderHow } from './sections/how.js';
import { renderMatrix } from './sections/matrix.js';
import { renderReports } from './sections/reports.js';
import { renderContact } from './sections/contact.js';
import { renderFooter, initFooter } from './sections/footer.js';

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Update meta
  document.title = t('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

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
