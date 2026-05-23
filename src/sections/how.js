import { t } from '../i18n.js';

function escapeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function renderHow() {
  const steps = t('how.steps');
  if (!Array.isArray(steps)) return '';

  const stepsHtml = steps.map((step, i) => `
    <div class="how-step reveal" data-step="${i + 1}">
      <div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
      <div class="code-card">
        <div class="code-card-header">
          <span class="code-card-dot red"></span>
          <span class="code-card-dot yellow"></span>
          <span class="code-card-dot green"></span>
          <span class="code-card-title">step_${i + 1}.ts</span>
        </div>
        <div class="code-card-body"><pre style="margin:0;white-space:pre-wrap">${escapeHtml(step.code)}</pre></div>
      </div>
    </div>
  `).join('');

  return `
  <section class="section" id="how" style="background:var(--color-bg-subtle)">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">${t('how.label')}</span>
        <h2 class="section-title">${t('how.title')}</h2>
        <p class="section-desc">${t('how.desc')}</p>
      </div>
      <div class="how-steps">
        ${stepsHtml}
      </div>
    </div>
  </section>`;
}
