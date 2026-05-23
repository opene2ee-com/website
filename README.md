# OpenE2EE.com Website

Dijital iletişimde şeffaflık — RCS 3.0 ve E2EE protokollerinin gerçek zamanlı denetimi.

## Quick Start

### Docker (Recommended)

```bash
# Development
docker build --target dev -t opene2ee-dev .
docker run -d --name opene2ee-dev -p 3000:3000 \
  -v $(pwd):/app -v /app/node_modules opene2ee-dev

# Production
docker build --target production -t opene2ee .
docker run -d --name opene2ee -p 80:80 opene2ee
```

### Node.js

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # dist/
```

## Adding a New Language

1. Copy `src/locales/tr.json` → `src/locales/xx.json`
2. Translate all string values (keep the same key structure)
3. Add `'xx'` to the `SUPPORTED_LANGS` array in `src/i18n.js`
4. Commit & push

## Project Structure

```
├── index.html              # Entry point
├── Dockerfile              # Multi-stage: dev + production
├── public/
│   ├── logo.svg            # <OpenE2EE /> text logo
│   ├── favicon.svg         # E2 favicon
│   └── reports/            # Future PDF whitepapers
├── refers/                 # Design system reference (SST-inspired)
└── src/
    ├── main.js             # App orchestrator
    ├── i18n.js             # Internationalization module
    ├── icons.js            # Shared SVG icons
    ├── locales/
    │   ├── tr.json         # Turkish
    │   └── en.json         # English
    ├── styles/
    │   ├── variables.css   # Design tokens
    │   ├── base.css        # Reset & typography
    │   ├── components.css  # All component styles
    │   └── animations.css  # Scroll reveal & micro-animations
    └── sections/
        ├── nav.js          # Navigation + language toggle
        ├── hero.js         # Hero + code card
        ├── why.js          # Problem & Solution
        ├── how.js          # 3-step technical flow
        ├── matrix.js       # Transparency matrix table
        ├── reports.js      # News + whitepaper cards
        ├── contact.js      # Contact cards
        └── footer.js       # Footer + lang toggle
```

## Tech Stack

- **Vite** — Build tool
- **Vanilla JS** — No framework
- **IBM Plex Mono + Rubik** — Typography
- **CSS Custom Properties** — Design system

## License

MIT
