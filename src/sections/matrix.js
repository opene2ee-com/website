import { t } from '../i18n.js';

export function renderMatrix() {
  const headers = t('matrix.headers');
  const rows = t('matrix.rows');
  if (!Array.isArray(rows)) return '';

  const getColor = (status) => {
    if (status === 'verified') return 'var(--color-status-verified)';
    if (status === 'caution') return 'var(--color-status-caution)';
    return 'var(--color-status-pending)';
  };

  const rowsHtml = rows.map(row => `
    <tr>
      <td><strong>${row.app}</strong></td>
      <td><span class="protocol-tag">${row.protocol}</span></td>
      <td>
        <div class="integrity-bar">
          <div style="width:100px;height:4px;background:var(--color-border-ash);border-radius:2px;overflow:hidden">
            <div class="integrity-fill" style="width:${row.integrity}%;background:${getColor(row.status)};height:100%;border-radius:2px"></div>
          </div>
          <span style="font-family:var(--font-ibm-plex-mono);font-size:12px;color:var(--color-text-slate)">${row.integrity}% · ${row.integrityLabel}</span>
        </div>
      </td>
      <td>
        <span class="status-badge ${row.status}">
          <span class="status-dot"></span>
          ${row.statusLabel}
        </span>
      </td>
    </tr>
  `).join('');

  return `
  <section class="section" id="matrix">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">${t('matrix.label')}</span>
        <h2 class="section-title">${t('matrix.title')}</h2>
        <p class="section-desc">${t('matrix.desc')}</p>
      </div>
      <div class="matrix-table-wrap reveal">
        <table class="matrix-table">
          <thead>
            <tr>
              <th>${headers.app}</th>
              <th>${headers.protocol}</th>
              <th>${headers.integrity}</th>
              <th>${headers.status}</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}
