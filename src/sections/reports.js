import { t } from '../i18n.js';
import { fileIcon } from '../icons.js';

export function renderReports() {
  const items = t('reports.items');
  if (!Array.isArray(items)) return '';

  // News section
  const articles = t('news.articles');
  const newsHtml = Array.isArray(articles) ? articles.map((a, i) => `
    <div class="news-card reveal ${i > 0 ? 'reveal-delay-' + Math.min(i, 3) : ''}">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="news-date">${a.date}</span>
        <span class="news-tag">${a.tag}</span>
      </div>
      <h4>${a.title}</h4>
      <p>${a.summary}</p>
    </div>
  `).join('') : '';

  const reportsHtml = items.map((item, i) => `
    <div class="report-card reveal ${i > 0 ? 'reveal-delay-1' : ''}">
      <div class="report-icon">${fileIcon()}</div>
      <div class="report-info">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="report-meta">${item.meta}</span>
      </div>
    </div>
  `).join('');

  return `
  <section class="section" id="news" style="background:var(--color-bg-subtle)">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">${t('news.label')}</span>
        <h2 class="section-title">${t('news.title')}</h2>
        <p class="section-desc">${t('news.desc')}</p>
      </div>
      <div class="news-grid">
        ${newsHtml}
      </div>
    </div>
  </section>
  <div class="gradient-line"></div>
  <section class="section" id="reports">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">${t('reports.label')}</span>
        <h2 class="section-title">${t('reports.title')}</h2>
        <p class="section-desc">${t('reports.desc')}</p>
      </div>
      <div class="reports-grid">
        ${reportsHtml}
      </div>
    </div>
  </section>`;
}
