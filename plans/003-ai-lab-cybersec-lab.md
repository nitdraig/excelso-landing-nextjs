# Excelso AI Lab & CyberSec Lab — Product & Implementation Plan

**Status:** Ready to implement (Astro-first)  
**Depends on:** [`001-astro-migration-strategy.md`](./001-astro-migration-strategy.md), [`002-astro-implementation-tracker.md`](./002-astro-implementation-tracker.md)  
**Target:** `astro/` (do **not** add these pages to the Next.js app unless cutover is delayed)

---

## 1. Role in the group

Excelso Tech stays a **two-division commercial model**:

| Unit | Audience | What it sells / does |
|------|----------|----------------------|
| **Excelso Vault** | Private / B2B | Strategic, scalable, secure IT delivery |
| **Excelso Open** | Social / open-source | Community, education, public goods |

The labs are **not a third commercial division**. They are **experimental initiatives** that seek to generate **impact projects**: innovation, workflow improvement, and product development.

Each lab can ship work through **either channel**:

- **Excelso Open** — advances shown as open source (tools, methods, education) when sharing creates impact without breaking obligations.
- **Excelso Vault** — developments kept closed when **contracts, security, or privacy** require it (client IP, threat models, personal or industrial data).

Same lab, two possible outcomes. The channel is chosen per project, not per lab.

```
                 ┌─────────────────┐
                 │  EXCELSO TECH   │
                 └────────┬────────┘
            ┌─────────────┴─────────────┐
            │                           │
     Excelso Vault                 Excelso Open
     (B2B / private)               (social / OSS)
            ▲                           ▲
            │  IP, playbooks            │  demos, talks, OSS
            │                           │
     ┌──────┴───────────────────────────┴──────┐
     │         Experimental R&D layer          │
     │  AI Lab (EXC-LAB-AI)                    │
     │  CyberSec Lab (EXC-LAB-SEC)             │
     └─────────────────────────────────────────┘
```

**Positioning line (home + labs hub):**  
*Labs invent impact. Open when we can share. Vault when we must protect.*

Do **not** collapse labs into `/vault` or `/open`. That would blur B2B vs community and weaken SEO for each intent.

---

## 2. Brand tokens (copy source of truth)

Use these strings in content files. Internal codes are for JSON-LD / optional small badge, not as H1.

### Excelso AI Lab

| Field | EN | ES |
|-------|----|----|
| Official name | Excelso AI Lab | Excelso AI Lab |
| Short name | AI Lab | AI Lab |
| Code | `EXC-LAB-AI` | `EXC-LAB-AI` |
| Motto | Structuring context, accelerating intelligence. | Estructurando contexto, acelerando inteligencia. |
| Mission | Develop applied AI architectures, autonomous agents, and high-precision RAG systems—reducing bias and computational cost—to solve industrial, environmental, and productivity problems. | Desarrollar arquitecturas de IA aplicada, agentes autónomos y sistemas RAG de alta precisión, reduciendo sesgos y costos computacionales, para resolver problemas industriales, ambientales y de productividad. |
| Vision | Become a technical reference in Context Engineering and agile AI integration in Latin America, turning abstract algorithms into high-impact commercial and social products. | Posicionarse como referente técnico en Context Engineering e integración ágil de IA en Latinoamérica, transformando algoritmos abstractos en productos de alto impacto comercial y social. |
| Values | Deterministic efficiency · Technological transparency · Context over prompting · Algorithmic sustainability | Eficiencia determinista · Transparencia tecnológica · Contexto sobre prompting · Sostenibilidad algorítmica |

### Excelso CyberSec Lab

| Field | EN | ES |
|-------|----|----|
| Official name | Excelso CyberSec Lab | Excelso CyberSec Lab |
| Short name | CyberSec Lab | CyberSec Lab |
| Code | `EXC-LAB-SEC` | `EXC-LAB-SEC` |
| Motto | Security by design, resilience by code. | Seguridad por diseño, resistencia por código. |
| Mission | Harden applications, APIs, and infrastructure across the Excelso ecosystem through advanced AppSec, DevSecOps, and continuous audit—protecting client and community data. | Blindar aplicaciones, APIs e infraestructuras del ecosistema Excelso mediante AppSec, DevSecOps y auditoría continua, garantizando la integridad de los datos de clientes y comunidades. |
| Vision | Become the preventive-security standard for fast-scaling SaaS and cloud/VPS infrastructure in the region. | Convertirse en el estándar de seguridad preventiva para productos SaaS e infraestructuras cloud/VPS de rápido escalamiento en la región. |
| Values | Zero Trust · Operational resilience · Privacy by design · Digital ethics | Confianza cero · Resiliencia operativa · Privacidad por diseño · Ética digital |

---

## 3. Information architecture

Keep **multi-page**. Each lab needs its own URL for SEO/GEO (same rationale as Vault vs Open in doc 001).

### Recommended URLs (same slugs EN/ES)

| EN | ES | Purpose |
|----|----|---------|
| `/labs` | `/es/labs` | Hub: both labs, how they feed Vault + Open |
| `/labs/ai` | `/es/labs/ai` | Excelso AI Lab |
| `/labs/cybersec` | `/es/labs/cybersec` | Excelso CyberSec Lab |

**Why this over `/ai-lab` + `/cybersec-lab`:** one prefix groups experimental R&D, matches internal codes, and leaves room for a future lab without nav explosion.

**Why this over nesting under Vault:** labs serve Open as well; Vault already has “AI & ML” and “Cybersecurity” as **delivery services**. Labs are **how Excelso invents**; Vault is **how Excelso sells**.

### Nav (do not add two extra top-level items)

Current: Home · About · Vault · Open · Contact.

Add **one** item:

```
Labs  →  /labs
```

Active state: `/labs` and `/labs/*`.

Footer: keep Privacy/Terms; optionally add Labs next to Vault/Open.

### Home

Do **not** paste full lab pages into `/`.

1. Update **Our Divisions** lead: two commercial divisions **plus** an R&D layer.
2. Add a third block **after** Vault + Open: **Excelso Labs** — two compact cards (AI Lab, CyberSec Lab) linking to `/labs/ai` and `/labs/cybersec`, plus a text link to `/labs`.
3. Hero CTAs stay Vault + Open (conversion). Labs are discovery, not the primary CTA.

### Cross-links (required)

| From | To |
|------|----|
| Vault services “AI & Machine Learning” | `/labs/ai` (“R&D in AI Lab”) |
| Vault services “Cybersecurity Solutions” | `/labs/cybersec` |
| Open page (collaborate / projects intro) | `/labs` (“experimental work we share”) |
| Each lab page | `/vault`, `/open`, `/contact` |
| `/labs` hub | both lab pages + Vault + Open |

---

## 4. Page compositions

Mirror Vault: Hero → body sections → CTA. Shared wrapper optional (`LabHero`, `LabValues`, `LabBridge`, `LabCTA`).

### `/labs` (hub)

1. **Hero** — “Excelso Labs” · one line: R&D that feeds Vault and Open · codes as secondary badges.
2. **Two cards** — AI Lab / CyberSec Lab (motto, one-sentence mission, CTA).
3. **Outcomes** — two columns: *Open track* (public advances) vs *Vault track* (closed by contract, security, or privacy). State clearly that **both labs** can produce either.
4. **CTA** — Contact (partnerships) · Open (follow work).

### `/labs/ai`

1. **Hero** — name, motto, `EXC-LAB-AI`, CTA Contact + Vault.
2. **Mission / Vision**.
3. **Values** — four items (same visual language as About values).
4. **Focus** — Context Engineering, agents, high-precision RAG, bias reduction, compute cost, industrial / environmental / productivity use cases. These are **research themes**, not a service catalog (Vault keeps the catalog).
5. **Bridge** — Vault: applied architectures, client-ready agents/RAG. Open: transparent methods, community tools, education.
6. **CTA** — Contact · Open · back to Labs.

### `/labs/cybersec`

Same skeleton.

**Focus:** AppSec, DevSecOps, continuous audit, APIs, cloud/VPS, Zero Trust, privacy by design. Again: lab themes, not a replacement for Vault “Cybersecurity Solutions”.

---

## 5. Content & i18n

Follow existing Astro pattern (`content/vault.ts`, `content/home.ts`).

| File | Contents |
|------|----------|
| `astro/src/content/labs.ts` | Hub copy EN+ES |
| `astro/src/content/ai-lab.ts` | AI Lab page EN+ES (mission, vision, values, focus, bridge, SEO title/description) |
| `astro/src/content/cybersec-lab.ts` | Same for CyberSec Lab |

Chrome: add `nav.labs` in `astro/src/i18n/ui.ts`.

**Do not** put lab essays in `localStorage` i18n. Real `/es/labs/*` pages + `hreflang`.

Optional later (not v1): `labProjects[]` in `data.ts` (papers, OSS, internal tools) — only when there is real work to show. Empty grids look worse than a strong narrative page.

---

## 6. SEO / GEO

Per locale and per route:

- Unique `title` + `description` (e.g. “Excelso AI Lab · Context Engineering & applied AI”).
- One H1 (official name). Motto as lead, not a second H1.
- Canonical + `hreflang`.
- Sitemap entries for `/labs`, `/labs/ai`, `/labs/cybersec` and `/es/...`.
- OG: reuse group OG or add `/og/ai-lab.webp` and `/og/cybersec-lab.webp` when assets exist.
- JSON-LD: `ResearchOrganization` (or `Organization` + `parentOrganization: Excelso`) on each lab page; hub can be `CollectionPage` + breadcrumbs.
- Breadcrumbs: Home → Labs → AI Lab / CyberSec Lab.

Legal: no change unless labs collect data. Contact form stays `/contact`. If Auth0 copy mentions “apps under Excelso”, labs can be named later as products exist—not required for v1 pages.

---

## 7. Visual language

Stay in the current system (container, `tracking-tighter` titles, muted leads, border cards, optional video/grid).

Differentiate **without** a third brand color system:

| Surface | Cue |
|---------|-----|
| Vault | Existing shield / corporate video (`bg.webm`) |
| Open | Existing code / community video |
| AI Lab | Abstract/grid atmosphere; badge `EXC-LAB-AI`; icon `cpu` or similar |
| CyberSec Lab | Denser grid / lock-shield; badge `EXC-LAB-SEC`; icon `shield` |

Reuse `reveal.ts`. No React. No extra WebGL on first paint (same as Phase 0 Vanta deferral).

Nav at 6 items (with Labs) is acceptable on desktop; keep labels short: **Labs**.

---

## 8. Implementation phases (Astro)

### Phase A — IA + chrome

- `navRoutes` + translations.
- Footer link to `/labs`.
- Home: labs teaser block + copy tweak on divisions lead.
- Vault/Open: one-line cross-links on AI and security services / Open intro.

### Phase B — Routes + content

- Pages: `labs/index.astro`, `labs/ai.astro`, `labs/cybersec.astro` + `/es/` mirrors.
- Content modules + components (`LabsHub`, `LabHero`, `LabValues`, `LabFocus`, `LabBridge`, `LabCTA`).
- SEO in `BaseLayout` (title, description, JsonLd, breadcrumbs).

### Phase C — Discoverability

- Sitemap.
- Optional OG images.
- QA: EN/ES switcher on equivalent paths; active nav on nested lab URLs.

### Out of scope for v1

- Case-study-style lab project library.
- Dedicated contact forms per lab.
- Next.js duplicates.
- Renaming Vault service titles (keep them; only add “Research in AI Lab” links).

---

## 9. Copy pitfalls to avoid

- Labs are **not** “our AI product” or “our SOC product”. They are **labs**.
- Do not list pricing on lab pages.
- Do not imply offensive security / hacking services unless legal and product later allow it. CyberSec Lab = **defensive AppSec / DevSecOps / audit**.
- Do not duplicate full Vault service blurbs on lab pages (thin/duplicate content).
- Keep mottos; do not replace the Excelso group slogan on home.

---

## 10. Success criteria

- A visitor understands in one screen: **Vault = delivery, Open = community, Labs = R&D**.
- `/labs/ai` and `/labs/cybersec` are indexable, bilingual, and linked from Home, Hub, Vault, Open, and nav.
- No extra JS framework; pages match Vault/Open layout quality.
- Internal codes appear as metadata/badges, not as the brand name in the H1.

---

## 11. Open questions (defaults if unanswered)

| Question | Default |
|----------|---------|
| Hub page `/labs`? | **Yes** — one nav item, two deep pages |
| Spanish names in H1? | Keep **Excelso AI Lab** / **Excelso CyberSec Lab**; body in ES |
| Show `EXC-LAB-*` on the site? | Small badge under motto, not in nav |
| Lab project grid in v1? | **No** until real items exist |
| Implement in Next as well? | **No** — Astro only |

This document is the baseline for implementing the two experimental labs.
