# Project Context — DevFlow Website

_Living state document. Updated after every run that changes the project (see RULES.md §8.1)._

Last updated: **2026-08-09 (Full-Site SEO Rewrite Executed)**

---

## Brand

- **Name:** DevFlow
- **Domain:** https://www.devflow.co.in
- **What it is:** A software development agency website — portfolio, services, blog, and a large SEO/content surface. Markets custom software, ERP/CRM, SaaS, web/mobile development, and "AI agentic" engineering, with a transparency/"radical transparency" positioning.
- **Audience:** Prospective enterprise/SMB clients and developers, largely India + international.
- **Tone:** Technical, confident, developer-flavored ("[ Label ]" mono micro-labels, dark theme, green accent).

## Project Profile

- **Primary type:** Portfolio / personal-brand agency site
- **Secondary type:** Content/blog + SaaS-adjacent resources (SEO-heavy)
- **Local profile applies:** No (global agency positioning)
- **International profile applies:** Partially — target keywords include USA-focused terms; served from `en-IN`, single domain (no hreflang subdirectories)
- **Page-type → template:** Services detail pages use service templates; `/work/[slug]` case studies; `/resources/tools/seo-audit` is a **simulated demo** (see Open Audit Findings — do not represent as real analysis)

## Stack & Architecture

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React 19.2) |
| Language | TypeScript |
| Styling | Tailwind CSS v4, globals.css, `@tailwindcss/postcss` |
| Animation | framer-motion 12 |
| Icons | react-icons |
| Fonts | next/font — Outfit (display), Plus Jakarta Sans (sans), JetBrains Mono (mono) |
| Forms | Formspree (contact page) + react-google-recaptcha |
| Hosting/Deploy | Vercel (CSP references `va.vercel-scripts.com`, `vitals.vercel-insights.com`) |
| Package mgr | npm (lockfile: package-lock.json) |

**Key conventions**
- App Router: routes are directories under `src/app/`; dynamic routes `[slug]`.
- Data-driven pages: `src/data/*.ts` feed service/blog/project/industry/location/knowledge pages.
- Heavy/client-only components dynamically imported in `src/app/layout.tsx` (`dynamic()`).
- `use client` components under `src/components/`. SEO JSON-LD centralized in `src/components/SEO/StructuredData.tsx`.
- ESLint via `eslint-config-next`; script: `npm run lint`.

## Folder / File Structure

```
src/
  app/                 # App Router pages
    layout.tsx         # Root layout: fonts, nav, footer, consent-gated analytics
    page.tsx           # Home
    work/, work/[slug] # Case studies (data from projectData.ts)
    blog/, blog/[slug], blog/category/[slug]
    services/, services/[slug]
    contact/           # Formspree + reCAPTCHA lead form
    pricing/, about/, careers/, partnerships/, white-label-development/
    industries/[slug], locations/[slug], knowledge-base/[slug]
    resources/tools/seo-audit   # SIMULATED tool (see Open Audit Findings)
    resources/calculators
    seo-audit/         # standalone SEO-audit landing
    engineering-process/, technology-stack/, faq/, maintenance/, sla/,
    security/, terms/, privacy/, offshore-development/, case-studies/,
    dedicated-development-teams/, ai-solutions/, expertise/
    geo landing pages: ai-development-company-ahmedabad,
      it-company-ahmedabad, it-services-ahmedabad,
      software-development-company-ahmedabad, mobile-app-development-company-ahmedabad,
      web-development-company-ahmedabad, seo-company-ahmedabad
    sitemap.ts, robots.ts, not-found.tsx, error.tsx, globals.css
  components/
    analytics/AnalyticsProvider.tsx  # consent-gated tracker loader
    SEO/StructuredData.tsx           # ~1600-line JSON-LD schema block
    layout/  Navbar, Footer, PageWrapper
    sections/ HeroSection, StatsBar, TestimonialsSection, FounderSection,
              SkillsSection, FeaturedProjectsSection, ProcessTimelineSection,
              TechStackSection, FAQSection, ...
    ui/      AIChatbot, CookieBanner, ReCaptcha, BackToTop, FloatingContact,
             ScrollProgress, Magnetic/MagneticButton, HeroMockup, ...
  data/      projectData.ts, servicesData.ts, blogData.ts, blogCategories.ts,
             contentIndex.ts, industriesData.ts, locationsData.ts,
             knowledgeHubData.ts
  lib/       siteSearch.ts, motion.ts, utils.ts
public/
  llms.txt, robots.txt (via app), .well-known/security.txt,
  ga-config.js, clarity-script.js, gtm-script.js   # externalized tracker snippets
next.config.ts    # redirects, security headers (CSP/HSTS), image config
RULES.md, SEO.md, Audit.md, Context.md, Changelog.md, audit-report.md
.audit/history/   # prior audit scorecard JSON
```

## Analytics & Tracking (consent-gated)

All third-party tracking loads **only after** the visitor accepts cookies (`localStorage["cookie-consent"] === "accepted"`), via `src/components/analytics/AnalyticsProvider.tsx`. Declining drops them. The consent value is written and broadcast by `CookieBanner.tsx` (`cookie-consent` CustomEvent).

| Tracker | ID | Notes |
|---|---|---|
| Google Analytics 4 | G-1893RGH1FW | gtag.js + externalized `/ga-config.js` |
| Microsoft Clarity | xwyxun7vj0 | externalized `/clarity-script.js` |
| Google Tag Manager | GTM-PKQSRRN2 | externalized `/gtm-script.js` + noscript iframe |
| Ahrefs Analytics | key `owsL0mOYqqNQ4Dc5F3yHRg` | plain async script, allowed by CSP |
| Ahrefs Site Verification | meta tag in `layout.tsx` | non-tracking, always present |

**Externalized snippets** (`public/*.js`) exist so tracker code runs under the production CSP (no `unsafe-eval`). The CSP in `next.config.ts` still carries `'unsafe-inline'` in `script-src` because the Next.js App Router bootstrap and inline JSON-LD are inline by design; removing it would require a nonce-based CSP that forces dynamic rendering.

## SEO / AEO Infrastructure

- **robots.txt** — generated in `src/app/robots.ts`; explicitly permits GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, anthropic-ai (per SEO.md).
- **sitemap** — `src/app/sitemap.ts`; note: all `lastModified` values are regenerated every build (see Open Audit Findings F8).
- **llms.txt** — `public/llms.txt`, linked from `<head>` via `<link rel="alternate">`.
- **Structured data** — centralized `StructuredData.tsx`: Article, FAQPage, BreadcrumbList, Organization, Product/Offer where relevant; validates per SEO.md §10.
- **IndexNow** — key verification file committed.
- **Ahrefs** — site verification + analytics.
- **Guardrails (SEO.md)** — one H1/page, no keyword stuffing (~1–1.5%), no fabricated data/links/reviews, direct-answer blocks under question headings, TL;DR at top, human-quality floor.

## Forms & Lead Capture

- **Contact page** (`/contact`): Formspree POST including `g-recaptcha-response`; guarded by `ReCaptcha.tsx`.
- **AIChatbot** (`src/components/ui/AIChatbot.tsx`): interactive assistant + a lead-intake form. **⚠ Known issue (F1): the chatbot lead form is currently simulated — it flips local state and shows a false "we've submitted your request" message without any network submission. Fix required before it can be trusted as a conversion surface.**

## Key External Services

| Service | Use | Config location |
|---|---|---|
| Formspree | Contact form endpoint | `src/app/contact/page.tsx` |
| Google reCAPTCHA | Form bot protection | env `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` |
| Vercel | Hosting, analytics (`va.vercel-scripts.com`), image optimization | platform dashboard |
| GA4 / Clarity / GTM / Ahrefs | Analytics | consent-gated provider |

## Environment Variables

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — reCAPTCHA v2 site key (contact + footer forms). **Fail-closed gap (F4): if unset at build time, the widget silently renders nothing and forms submit unguarded.** Must be set on the deployed (Vercel) environment.

## Open Audit Findings

From `audit-report.md` (2026-08-08). Severity: Critical 0 · High 3 · Medium 4 · Low 4.

**Resolved (this remediation round):**
- **F3** Consent-gated analytics — fixed (see Changelog 2026-08-08).
- **F5** CSP `unsafe-eval` in production — fixed; `unsafe-inline` retained with documented rationale.
- **F6** Placeholder portfolio URLs / templated case studies — mitigated: URLs → `#`, NDA badge, conditional live-site button. Underlying copy/metrics still templated/fabricated-looking.

**Open — High:**
- **F1** AIChatbot lead form simulates submission (false confirmation to visitor; leads silently lost).
- **F2** `/resources/tools/seo-audit` returns hardcoded scores (94/100, 87/100, 42/100) for any input — presented as real analysis.

**Open — Medium:**
- **F4** reCAPTCHA can silently disappear (env unset) and is never verified server-side.
- **F11** 5 high-severity npm advisories (js-yaml, nanoid, next/postcss, sharp) — `npm audit fix` pending.

**Open — Low:**
- **F7** Blog duplicate publish dates; **F8** sitemap `lastModified` churn; **F9** minimal `security.txt`; **F10** `console.error` in prod error boundary.

**Needs manual review:** unbacked site claims ("120+ Enterprise Projects", "99.99% Uptime", "50k+ Hours", "ISO Standard Code", "GDPR Compliant"), blog content authenticity, unreviewed geo/careers/privacy pages.

## Verification / Commands

- `npm run dev` — local dev
- `npm run build` — production build (validates TS + lint-on-build)
- `npm run lint` — ESLint
- `npm run start` — serve production build
- CSP header is emitted by `next.config.ts` `headers()` — verify generated header in a deployed response before release.

## Related Agent Manuals

- `RULES.md` — universal agent operating rules (planning, security, docs). **Context.md and Changelog.md must be updated after every change-making run (§8.1).**
- `SEO.md` — RankSynth SEO/AEO/GEO operating manual (research → audit → generate → implement → validate → log).
- `Audit.md` — deep-scan repository audit protocol; `audit-report.md` + `.audit/history/` hold the last scorecard.
