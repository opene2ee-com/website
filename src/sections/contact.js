import { t } from '../i18n.js';
import { mailIcon, githubIcon, shieldIcon } from '../icons.js';

export function renderContact() {
  return `
  <section class="section" id="contact" style="background:var(--color-bg-subtle)">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">${t('contact.label')}</span>
        <h2 class="section-title">${t('contact.title')}</h2>
        <p class="section-desc">${t('contact.desc')}</p>
      </div>
      <div class="contact-grid">
        <div class="contact-card reveal">
          <div class="contact-icon">${mailIcon()}</div>
          <h4>${t('contact.email.title')}</h4>
          <p>${t('contact.email.text')}</p>
          <a href="mailto:${t('contact.email.link')}">${t('contact.email.link')}</a>
        </div>
        <div class="contact-card reveal reveal-delay-1">
          <div class="contact-icon">${githubIcon()}</div>
          <h4>${t('contact.github.title')}</h4>
          <p>${t('contact.github.text')}</p>
          <a href="https://${t('contact.github.link')}" target="_blank" rel="noopener">${t('contact.github.link')}</a>
        </div>
        <div class="contact-card reveal reveal-delay-2">
          <div class="contact-icon">${shieldIcon()}</div>
          <h4>${t('contact.security.title')}</h4>
          <p>${t('contact.security.text')}</p>
          <a href="mailto:${t('contact.security.link')}">${t('contact.security.link')}</a>
        </div>
      </div>
    </div>
  </section>`;
}
