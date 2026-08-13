# Excelso Landing — Astro Migration Strategy

**Status:** Phase 1 scaffold started in `astro/`  
**Target stack:** Astro (Astro-first, **no React islands**)  
**Goals:** Performance, SEO, GEO, bilingual EN/ES  
**Source:** Current Next.js 15 marketing site (`excelso-landing-nextjs`)  
**Implementation tracker:** [`002-astro-implementation-tracker.md`](./002-astro-implementation-tracker.md)

---

## 1. Executive decisions

| Decision | Recommendation | Why |
|----------|-----------------|-----|
| Page model | **Multi-page** (not a single long scroll) | SEO/GEO, clear intents, shareable URLs, lighter per-route JS |
| Framework | **Astro puro** (HTML + CSS + small vanilla scripts) | Less JS, faster TTFB/LCP, content in first HTML |
| Languages | **English + Spanish** site-wide | Real routes + `hreflang`, not `localStorage` |
| Default locale | **English at `/`**, Spanish under `/es/` | Brand content is EN-first today; shorter URLs for primary market |
| React | **Do not use** `@astrojs/react` for this site | Rewrites presentation; no business logic needs React |
| Contact API | Keep same-origin endpoint + hosting adapter | Mailprex proxy; site is mostly static + 1 serverless route |

---

## 2. Single page vs multi-page

### Recommendation: **several pages** (refine the current model)

Excelso is not a one-offer landing. You already have two divisions (**Vault**, **Open**), case studies, about, contact, and legal. That maps poorly to one infinite scroll.

### Why multi-page wins for this site

1. **SEO / GEO** — Each URL can target one intent (“Excelso Vault”, “open source”, “case study MTN”, “contact”). LLMs and crawlers cite and rank **pages**, not sections buried in one document.
2. **Case studies need their own URLs** — Detail pages must be crawlable HTML. A single-page accordion/hash (`/#mtn`) is weak for indexing and sharing.
3. **Performance** — Home does not download Vanta, all case copy, legal text, and the contact form script. Each route ships only what it needs.
4. **Conversion** — `/contact` (and `/es/contacto` if desired) is a clean CTA target from ads, email, and LinkedIn.
5. **You already live this IA** — Nav is Home / About / Vault / Open / Contact. Migration should **improve** it, not flatten it.

### When a single page *would* make sense

- One product, one CTA, &lt; ~5 short sections, no case-study library, no bilingual legal depth.
- That is **not** Excelso.

### Hybrid (allowed, not instead of multi-page)

The **home** page can stay a short composition: brand + one headline + CTA + teasers that **link** to `/vault`, `/open`, `/contact`.  
Do **not** paste full Vault/Open/Contact content into `/` again (duplicate content + weight).

```
Home (teasers)  →  /vault, /open, /about, /contact
Vault           →  /vault/case-studies/[id]
Open            →  external repos + collaborate CTA
Contact         →  form + API
```

---

## 3. Information architecture (proposed URLs)

Keep the current mental model. Optional rename of “case studies” → “projects” if you want shorter, more commercial URLs (decide in Phase 0).

### Option A — Keep current paths (safer cutover)

| EN (default) | ES | Purpose |
|--------------|----|---------|
| `/` | `/es/` | Home / brand |
| `/about` | `/es/about` | Company |
| `/vault` | `/es/vault` | Commercial division |
| `/vault/case-studies` | `/es/vault/case-studies` | Project list |
| `/vault/case-studies/[id]` | `/es/vault/case-studies/[id]` | Project detail |
| `/open` | `/es/open` | Open-source division |
| `/contact` | `/es/contact` | Contact form |
| `/privacy` | `/es/privacy` | Privacy policy |
| `/terms` | `/es/terms` | Terms of use |

### Option B — Clearer “projects” naming (recommended if you accept redirects)

| EN | ES | Notes |
|----|----|-------|
| `/vault/projects` | `/es/vault/projects` | List |
| `/vault/projects/[id]` | `/es/vault/projects/[id]` | Detail |
| 301 from old `/vault/case-studies/*` | same for `/es` | Preserve SEO equity |

**Do not** collapse Vault + Open into a single `/projects` unless product strategy changes: they are different offers (client work vs open source).

### Out of nav (linked from footer only)

- Privacy, Terms  
- Optional: sitemap index, OG assets under `/og/`

---

## 4. Internationalization (EN / ES)

### Do not do

- Language only in `localStorage` / React Context (current legal approach).
- Client-only swap of strings on one URL.
- Fixed `<html lang="en">` for Spanish content.

### Do this (Astro i18n)

```ts
// astro.config — conceptual
i18n: {
  defaultLocale: "en",
  locales: ["en", "es"],
  routing: {
    prefixDefaultLocale: false, // EN at /, ES at /es/
  },
}
```

### Per-page requirements

- Correct `<html lang="en|es">`
- `link rel="alternate" hreflang="en|es|x-default"`
- Canonical per locale URL
- Translated **title**, **description**, **OG**, JSON-LD `inLanguage`
- Visible language switcher: same page in the other locale (not “reload home”)

### Content strategy

| Content | Approach |
|---------|----------|
| UI chrome (nav, footer, CTAs, form labels) | Message dictionaries (`en.json` / `es.json`) |
| Marketing sections (home, about, vault, open) | Dictionaries or colocated `content/en/*.md` + `content/es/*.md` |
| Case studies | Structured data with `en` + `es` fields **or** parallel files per id |
| Legal | Full translated documents (already partly exist) — **both locales as static pages** |

### Language switcher UX

- Control in header: `EN | ES`
- Switches to the **equivalent path** (`/vault` ↔ `/es/vault`)
- Persist preference in cookie **only** as a hint for first visit redirect (optional); never as the source of page content

### GEO note

Generative engines favor clear, self-contained pages with explicit language and entity markup. Bilingual **routed** pages + Organization/WebSite/BreadcrumbList JSON-LD beat a single EN page with a client toggle.

---

## 5. What moves to Astro (from prior audit)

### Astro-pure (zero or near-zero JS)

- Layout, metadata, JsonLd, Footer  
- About  
- Static marketing sections (markup)  
- Case study list + detail via `getStaticPaths`  
- Legal articles (per locale)  
- `data.ts` / content collections  

### Astro + small script (vanilla)

- Navbar mobile menu  
- Scroll reveals (replace Framer Motion)  
- Stats count-up  
- Contact form validation + `fetch`  
- Optional Vanta init (lazy, after idle)  

### Server endpoint

- `POST /api/send-email` → Mailprex (`MAILPREX_FORM_TOKEN`)  
- Requires `@astrojs/vercel` (or Node) — not `output: 'static'` alone if form stays first-party  

### Drop on purpose (performance)

- Splash screen (1s blocker in `MainLayout`)  
- Custom cursor  
- React Context i18n  
- Prefer **not** shipping Three/Vanta on first paint (poster / CSS / lazy)  

### No hard React requirement

Nothing in this codebase **requires** React if motion, shadcn, and Vanta are rewritten as HTML/CSS/vanilla.

---

## 6. Dependencies plan

| Remove | Keep / port | Add |
|--------|-------------|-----|
| `next`, `react`, `react-dom` | `tailwind`, `typescript`, `zod` | `astro` |
| `motion` / framer-motion | `clsx`, `cva`, `tailwind-merge` (optional) | `@astrojs/sitemap` |
| `@radix-ui/react-slot`, `lucide-react` | content/data modules | `@astrojs/vercel` (or node) |
| | `three` / `vanta` only if hero WebGL stays | `@astrojs/check` (optional) |

---

## 7. SEO / GEO checklist (Astro)

- [ ] One H1 per page; brand strong in first viewport on home  
- [ ] Unique title/description per locale + route  
- [ ] `hreflang` + canonical  
- [ ] Sitemap includes all EN + ES URLs (and case studies)  
- [ ] `robots.txt` disallows `/api/`  
- [ ] JSON-LD: Organization, WebSite, BreadcrumbList; CaseStudy/CreativeWork on project pages  
- [ ] Fix bogus `SearchAction` if `/vault?q=` has no real search  
- [ ] Case study body in **server HTML** (not client-only)  
- [ ] OG image per key route (reuse `/og/*`)  
- [ ] `prefers-reduced-motion` for animations/video  
- [ ] Single source of truth for Open projects (today `OpenCollaborate` duplicates/diverges from `data.ts`)  

---

## 8. Migration phases

### Phase 0 — Product decisions (blockers for IA)

1. **Multi-page confirmed** (this doc).  
2. Case studies path: keep `case-studies` vs rename `projects` + 301s.  
3. Vanta: keep lazy / replace / remove.  
4. Splash + custom cursor: remove (recommended).  
5. Default locale: EN at `/` (recommended) vs prefix both (`/en`, `/es`).  
6. Hosting adapter (Vercel assumed if current deploy is Vercel).  

### Phase 1 — Astro scaffold (parallel repo or folder)

- Astro + Tailwind 4 + i18n config  
- Shared layout: fonts, nav, footer, language switcher  
- Port `seo` constants + JsonLd  
- **No** React integration  

### Phase 2 — Static routes EN

- `/`, `/about`, `/vault`, `/open`, `/contact` shell  
- Case studies `getStaticPaths`  
- Sitemap + robots + OG  

### Phase 3 — Spanish parity

- `/es/*` with full copy  
- `hreflang` + switcher  
- Legal EN + ES as static pages  

### Phase 4 — Interactivity

- Navbar script, CSS reveals, count-up  
- Contact form + API route  
- Hero effects decision implemented  

### Phase 5 — Cutover

- 301 map old → new (especially if renaming projects)  
- DNS / hosting switch  
- Lighthouse + PSI vs Next baseline  
- Remove Next app  

**Value order:** SSG case studies + kill client shell → static pages → i18n → form/API → motion/Vanta.

---

## 9. Open questions (answer before coding)

1. Rename `/vault/case-studies` → `/vault/projects`?  
2. Spanish slugs (`/es/contacto`) or same slugs (`/es/contact`)?  
   - **Same slugs** = simpler code; **translated slugs** = slightly better ES SEO, more redirect complexity.  
3. Keep Vanta rings on home?  
4. Is Mailprex staying, or switch to Formspree/Resend/etc.?  
5. New repo `excelso-landing-astro` vs migrate in place?  

---

## 10. Summary

- **Architecture:** Multi-page Astro site, not a one-page scroll.  
- **Home:** Short brand composition + links into divisions.  
- **i18n:** EN default + `/es/` mirror, real HTML per language.  
- **No React:** rewrite motion/UI/scripts in Astro-native style.  
- **One server piece:** email API via adapter.  

This document is the strategy baseline.

**Started:** Phase 1 lives in [`../astro/`](../astro/) — see [`002-astro-implementation-tracker.md`](./002-astro-implementation-tracker.md).
