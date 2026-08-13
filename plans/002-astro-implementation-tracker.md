# Astro Migration — Implementation Tracker

Companion to [`001-astro-migration-strategy.md`](./001-astro-migration-strategy.md).

**Astro app path:** `astro/`

## Provisional Phase 0 defaults

| Question | Default |
|----------|---------|
| Case studies path | `/vault/case-studies` |
| ES slugs | Same as EN |
| Vanta | Deferred (CSS atmosphere) |
| Mailprex | Kept (`MAILPREX_FORM_TOKEN`) |
| Hosting | `@astrojs/vercel` + static pages + on-demand API |

## Phase 1 — Done

Scaffold, i18n, layout, data, sitemap, robots.

## Phase 2 — Done

Home / About / Vault / Open EN+ES, reveals, count-up, no React.

## Phase 3 — Done

- [x] Contact form EN+ES (vanilla validation + fetch)
- [x] Privacy + Terms EN+ES from `legalCopy.ts` (real routes, not localStorage)
- [x] API `POST /api/send-email` (Mailprex proxy, zod validation)
- [x] Vercel adapter (`output: static` + `prerender = false` on API)

## Remaining

- [ ] Case study body translations (ES pages still use EN project copy)
- [ ] Optional Open project description i18n
- [ ] Optional lazy Vanta
- [x] Excelso Labs (`/labs`, `/labs/ai`, `/labs/cybersec`) EN+ES
- [ ] Cutover: point domain / remove Next

## Env

```bash
# astro/.env
MAILPREX_FORM_TOKEN=your_token
```

## Commands

```bash
cd astro
npm run dev
npm run build
npm run preview
```
