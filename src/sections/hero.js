import { t } from '../i18n.js';

function heroCodeCard() {
  return `
  <div class="code-card float">
    <div class="code-card-header">
      <span class="code-card-dot red"></span>
      <span class="code-card-dot yellow"></span>
      <span class="code-card-dot green"></span>
      <span class="code-card-title">protocol_analysis.ts</span>
    </div>
    <div class="code-card-body">
      <span class="line"><span class="line-num">1</span><span class="syn-cmt">// OpenE2EE Protocol Analyzer</span></span>
      <span class="line"><span class="line-num">2</span><span class="syn-key">const</span> <span class="syn-fn">analyzer</span> = <span class="syn-key">new</span> <span class="syn-type">E2EEInspector</span>({</span>
      <span class="line"><span class="line-num">3</span>  mode: <span class="syn-str">'passive'</span>,</span>
      <span class="line"><span class="line-num">4</span>  protocol: <span class="syn-str">'RCS/MLS'</span>,</span>
      <span class="line"><span class="line-num">5</span>  verify: <span class="syn-val">true</span></span>
      <span class="line"><span class="line-num">6</span>});</span>
      <span class="line"><span class="line-num">7</span></span>
      <span class="line"><span class="line-num">8</span><span class="syn-key">const</span> result = <span class="syn-key">await</span> <span class="syn-fn">analyzer</span>.<span class="syn-fn">inspect</span>({</span>
      <span class="line"><span class="line-num">9</span>  tls: <span class="syn-fn">fingerprint</span>(),</span>
      <span class="line"><span class="line-num">10</span>  headers: <span class="syn-fn">metadata</span>(),</span>
      <span class="line"><span class="line-num">11</span>  entropy: <span class="syn-fn">measure</span>()</span>
      <span class="line"><span class="line-num">12</span>});</span>
      <span class="line"><span class="line-num">13</span></span>
      <span class="line"><span class="line-num">14</span><span class="syn-cmt">// result.score → </span><span class="syn-val">97.4</span> <span class="syn-cmt">✓ verified</span></span>
    </div>
  </div>`;
}

export function renderHero() {
  return `
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content reveal">
          <div class="hero-badge">
            <span class="pulse"></span>
            ${t('hero.badge')}
          </div>
          <h1>${t('hero.title')}</h1>
          <p class="hero-subtitle">${t('hero.subtitle')}</p>
          <div class="hero-actions">
            <a href="#matrix" class="btn btn-primary">${t('hero.cta_primary')}</a>
            <a href="#reports" class="btn btn-secondary">${t('hero.cta_secondary')}</a>
          </div>
        </div>
        <div class="hero-visual reveal reveal-delay-2">
          ${heroCodeCard()}
        </div>
      </div>
    </div>
  </section>`;
}
