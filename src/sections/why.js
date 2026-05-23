import { t } from '../i18n.js';
import { alertIcon, shieldIcon } from '../icons.js';

function escapeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function renderWhy() {
  return `
  <section class="section" id="why">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">${t('why.label')}</span>
        <h2 class="section-title">${t('why.title')}</h2>
        <p class="section-desc">${t('why.desc')}</p>
      </div>
      <div class="why-grid">
        <div class="why-card problem reveal">
          <div class="why-card-icon">${alertIcon()}</div>
          <h3>${t('why.problem.title')}</h3>
          <p>${t('why.problem.text')}</p>
          <pre class="code-snippet">${escapeHtml(t('why.problem.code'))}</pre>
        </div>
        <div class="why-card solution reveal reveal-delay-1">
          <div class="why-card-icon">${shieldIcon()}</div>
          <h3>${t('why.solution.title')}</h3>
          <p>${t('why.solution.text')}</p>
          <pre class="code-snippet">${escapeHtml(t('why.solution.code'))}</pre>
        </div>
      </div>
    </div>
  </section>`;
}
