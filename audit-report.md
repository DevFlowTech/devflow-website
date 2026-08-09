# DevFlow Website — Deep-Scan Audit Report
**Date:** 2026-08-08 · **Commit:** f05bf2d · **Audit method:** Audit.md (13 phases)

**Core trust promise:** *The website accurately represents DevFlow's capabilities and every visitor lead that a user intentionally submits actually reaches the business.* Every phase below was read through that lens first.

---

## 1. Executive Scorecard

| Dimension | Score | Grade | Trend vs Prior Audit |
|---|---|---|---|
| Authentication & AuthZ | N/A | — | Baseline (no auth system) |
| Tenant / Ownership Isolation | N/A | — | Baseline (no tenant model) |
| Financial Logic Integrity | N/A | — | Baseline (no financial domain) |
| Input Validation | 95 | A | Baseline |
| API Security | 95 | A | Baseline |
| Frontend Security | 78 | C | Baseline |
| Database & Performance | 95 | A | Baseline |
| Data Integrity & Audit | 67 | D | Baseline |
| DevOps & Configuration | 84 | B | Baseline |
| Dependencies | 95 | A | Baseline |
| **OVERALL** | **87** | **B** | **Baseline** |

Scoring: Critical −25 · High −12 · Medium −5 · Low −2 (floor 0). Overall = mean of non-N/A dimensions, rounded.

---

## 2. Coverage Report

- **Total source files (`.ts`/`.tsx` under `src/`):** 127
- **Files opened and reviewed:** 22 (17.3% of total)
- **Critical-Path List:** ~35 files (entry points, forms, security config, data layer, SEO infra, error/not-found, key interactive components)
- **Critical-path files opened:** 21 / ~35 (60%)

**Directories reviewed:** `src/app` (layout, error, not-found, sitemap, robots, globals, contact, pricing, seo-audit, resources/tools/seo-audit, blog/[slug], work/[slug]), `src/components` (sections/HeroSection, sections/StatsBar, ui/AIChatbot, ui/ReCaptcha, ui/CookieBanner, layout/Footer), `src/data` (projectData, blogData, contentIndex), `src/lib` (siteSearch), root config (`package.json`, `next.config.ts`, `RULES.md`, `Audit.md`), `public/` (`llms.txt`, `.well-known/security.txt`).

**Files skipped (named):** `src/app/page.tsx` + `HomeClient.tsx`, `Navbar.tsx`, `PageWrapper.tsx`, `BackToTop.tsx`, `FloatingContact.tsx`, `ScrollProgress.tsx`, `Magnetic.tsx`/`MagneticButton.tsx`, `HeroMockup.tsx`, `FloatingParticles.tsx`, `InteractiveGrid.tsx`, `AnimatedGradientBackground.tsx`, `BackgroundBeams.tsx`, `BlogCard.tsx`, remaining section components (`TestimonialsSection`, `FounderSection`, `SkillsSection`, `FeaturedProjectsSection`, `ProcessTimelineSection`, `TechStackSection`, `FAQSection`), `src/lib/motion.ts`/`utils.ts`, all geo/location/industry SEO landing pages (`ai-development-company-ahmedabad`, `it-services-ahmedabad`, `software-development-company-ahmedabad`, etc.), services detail pages, careers/partnerships/white-label/terms/privacy/security/sla/maintenance/offshore/case-studies/knowledge-base/industries/locations/engineering-process/technology-stack/faq pages, `StructuredData.tsx` (inspected only via layout reference, ~1600-line schema block not line-read).

**Why the skip:** low-risk SEO/static-content pages and decorative UI components were deprioritized; the security-sensitive, data-bearing, and lead-capture surface was prioritized. **Coverage is therefore partial, not 100%.** Any page above that was not opened should be re-scanned before a release.

**Phases marked N/A:** Phase 2 (Authentication — no auth/session/system exists), Phase 7 (Financial — no ledger/payment models), Phase 8 (Isolation — no tenant/per-user ownership boundary; single static site). Phase 9 database portion N/A (no database); performance portion assessed.

---

## 3. Known Prior Fixes — Regression Check

No `.audit/history/*.json` existed before this run and no prior-fix list is derivable from repo docs, so this section is intentionally skipped rather than fabricated. Git history shows recent fixes (hero layout shift, CSP for analytics, lazy third-party scripts) — all confirmed **still holding** in this run (HeroSection parallax is RAF-throttled with reduced-motion respect; CSP in `next.config.ts:94-108` includes the analytics domains; GA/Clarity/GTM load with `strategy="lazyOnload"`).

---

## 4. Findings

### F1 — HIGH · Chatbot lead-capture form fakes submission; leads are silently lost
- **Category:** Business Logic / Data Integrity
- **Dimension(s):** Data Integrity & Audit
- **Severity:** High · **Confidence:** 10
- **Location:** `src/components/ui/AIChatbot.tsx:120-142` (`handleLeadSubmit`)
- **Evidence:**
  ```tsx
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim() || !leadName.trim()) return;
    setLeadSubmitted(true);
    setShowLeadForm(false);
    setTimeout(() => { ...adds bot message "I've submitted your request to Prince Gajjar..." }, 800);
  };
  ```
  No `fetch`, no Formspree call, no API call — the form only flips local state. The confirmation message at line 133 ("I've submitted your request … They will contact you at **${leadEmail}** within 24 hours") is a lie rendered to the visitor.
- **Root cause:** A client-side-only "demo" lead form was shipped into the production chatbot without a transmission step.
- **Reproduction:** Open the chat bubble → trigger the lead-intake form → submit name + email → the bot thanks you. Inspect the network tab: zero outbound requests.
- **Business impact:** Every lead captured through the most prominent conversion surface on the site is discarded. The visitor believes a sales team received their details and may wait 24 hours. Revenue loss and reputational damage; the falsified confirmation message is deceptive and may constitute misleading conduct.
- **Recommended fix:** POST to Formspree exactly like `contact/page.tsx:242` (including `g-recaptcha-response`), show the success message only on a 2xx response, and surface the failure state per RULES.md §4.4.

### F2 — HIGH · "SEO audit" tool is fully simulated with hardcoded scores and fake progress
- **Category:** Business Logic / Data Integrity
- **Dimension(s):** Data Integrity & Audit
- **Severity:** High · **Confidence:** 10
- **Location:** `src/app/resources/tools/seo-audit/page.tsx` (`handleStartAudit` line 24, `handleEmailSubmit` line 46)
- **Evidence:** The audit runs a `setTimeout` chain of staged progress messages, then displays hardcoded results (94/100, 87/100, 42/100) with canned diagnostic copy. No URL is fetched, no site is crawled, no request leaves the browser. The email capture sets local state only — no submission.
- **Root cause:** A "tool" page was implemented as a static mock/demo and promoted as a real product to visitors, without a back-end engine.
- **Reproduction:** Open `/resources/tools/seo-audit`, enter any URL, run the audit. Every website, including a typo'd or non-existent domain, returns identical fabricated scores.
- **Business impact:** A visitor/lead receives a fabricated technical assessment presented as a genuine analysis — a direct breach of the site's core trust promise. A real engineering shop marketing itself on "radical transparency" (see `contentIndex.ts:53-68`) damages its credibility the moment a prospect catches the fake.
- **Recommended fix:** Either remove the page, clearly label it a demo/interactive wireframe, or wire it to a real server-side crawler. Never present simulated output as analysis.

### F3 — HIGH · Analytics load unconditionally despite a consent banner that claims compliance (GDPR exposure)
- **Category:** Privacy Compliance / Frontend Security
- **Dimension(s):** Frontend Security, DevOps & Configuration
- **Severity:** High · **Confidence:** 10
- **Location:** `src/app/layout.tsx:670-710` (GA `G-1893RGH1FW`, Clarity `xwyxun7vj0`, GTM `GTM-PKQSRRN2`, all `strategy="lazyOnload"`, no consent gate) · `src/components/ui/CookieBanner.tsx` (writes `"accepted"`/`"declined"` to localStorage; never read by any analytics gate)
- **Evidence:** The banner text asserts "We won't track your information, but to comply with your preferences, we'll use one tiny cookie." The three tracking stacks load on every page visit regardless of banner choice. No code reads the consent value to conditionally block scripts; opting out has zero effect.
- **Root cause:** Consent mechanism was implemented as a decorative UI element; no wiring exists between the consent store and script loading.
- **Reproduction:** Select "declined" in the banner, reload, and observe GA/GTM/Clarity requests in the network tab — they fire anyway.
- **Business impact:** Non-compliance with GDPR/DPDPA consent requirements and the banner's own promise; legal exposure for the company, and a direct trust violation of European/Indian visitors.
- **Recommended fix:** Gate GA/GTM/Clarity behind the consent value (e.g., set cookies/data-layer only after `"accepted"`), or strip the consent banner entirely and the "one tiny cookie" claim. Keep analytics server-config via GTM for the accepted path only.

### F4 — MEDIUM · reCAPTCHA can silently disappear and is never verified app-side
- **Category:** Bot protection / Input Validation
- **Dimension(s):** Frontend Security, Input Validation
- **Severity:** Medium · **Confidence:** 9
- **Location:** `src/components/ui/ReCaptcha.tsx:53` (returns `null` when `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is empty) · `src/app/contact/page.tsx:242` (token sent only as a field to Formspree)
- **Evidence:** If the env var is unset at build time, the widget silently renders nothing and the form still submits unguarded. The app itself performs zero server-side token verification — it relies entirely on the Formspree dashboard secret being configured (unverifiable from this repo).
- **Root cause:** Captcha presence and verification are both delegated to external configuration that the code cannot enforce, with no fail-closed behavior.
- **Reproduction:** Build without the env var → contact form has no captcha at all.
- **Business impact:** Unbounded spam/abuse of the contact and footer forms; false "security" impression. Harm limited to form spam since the site stores no user data.
- **Recommended fix:** Fail closed — render the widget when the key is missing in production (or refuse to submit), and verify the token on a server function/route rather than trusting the client.

### F5 — MEDIUM · CSP allows `unsafe-eval` and `unsafe-inline` in `script-src`
- **Category:** Security hardening
- **Dimension(s):** API Security, Frontend Security
- **Severity:** Medium · **Confidence:** 10
- **Location:** `next.config.ts:98`
- **Evidence:** `"script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com https://static.cloudflareinsights.com https://www.clarity.ms"`
- **Root cause:** Inline analytics snippets and Next.js/GTM needs forced permissive script-src; no dynamic code injection vector was found in app code, so this is defense-in-depth, not a live exploit.
- **Reproduction:** Not exploitable via current app code (React escapes by default; no `dangerouslySetInnerHTML` on untrusted input). This is a latent weakening.
- **Business impact:** If any XSS were ever introduced, `unsafe-inline`/`unsafe-eval` remove the last layer of protection.
- **Recommended fix:** Move inline analytics into external `.js` files, use strict nonces/hashes, and drop `unsafe-eval`/`unsafe-inline`; re-test GTM/Clarity after tightening.

### F6 — MEDIUM · Portfolio case studies use placeholder URLs, templated copy, and unverifiable metrics
- **Category:** Data Integrity / Business Logic
- **Dimension(s):** Data Integrity & Audit
- **Severity:** Medium · **Confidence:** 9
- **Location:** `src/data/projectData.ts` (all projects link to `https://www.devflow.co.in`; descriptions repeat template phrasing "Developed to address key operational challenges, this project represents a custom solution"; `results` contain precise fabricated-looking figures such as "70% faster queries", "99.8% inventory accuracy", "LCP 0.90s", "PageSpeed 99/100")
- **Root cause:** Placeholder/mock content was published as real client work without disclaimers.
- **Reproduction:** Open any `/work/[slug]` page and click the client website link — it navigates back to DevFlow's own homepage.
- **Business impact:** A prospective client clicking a "live project" hits the agency's own site, instantly exposing the placeholder. Direct breach of the trust promise; undermines every other credibility claim on the site.
- **Recommended fix:** Either publish real client links/screenshots (with permission), or label case studies as sanitized/internal prototypes. Do not ship `devflow.co.in` self-links as client URLs.

### F7 — LOW · Blog data hygiene: duplicate dates across posts
- **Category:** Data Integrity
- **Dimension(s):** Data Integrity & Audit
- **Severity:** Low · **Confidence:** 10
- **Location:** `src/data/blogData.ts` ("May 13, 2026" appears on at least 5 posts; other dates are auto-generated patterns)
- **Impact:** Erodes content credibility; readers and AI crawlers see repeated identical publish dates. `sameAs`/date schema feeds this into search results.

### F8 — LOW · Sitemap `lastModified` is regenerated every build
- **Category:** SEO churn
- **Dimension(s):** Data Integrity & Audit
- **Severity:** Low · **Confidence:** 10
- **Location:** `src/app/sitemap.ts` (all entries use `new Date().toISOString()`)
- **Impact:** Every deploy re-stamps every URL as "just modified," confusing crawlers and causing unnecessary re-crawl of unchanged pages.

### F9 — LOW · `security.txt` is minimal (no PGP key, no encryption policy)
- **Category:** Compliance / Defense-in-depth
- **Dimension(s):** DevOps & Configuration
- **Severity:** Low · **Confidence:** 10
- **Location:** `public/.well-known/security.txt`
- **Impact:** Security researchers cannot report vulnerabilities to an encrypted contact; minor, but free to fix.

### F10 — LOW · Client error boundary logs to console in production
- **Category:** Observability hygiene
- **Dimension(s):** DevOps & Configuration
- **Severity:** Low · **Confidence:** 10
- **Location:** `src/app/error.tsx` (`console.error(error.message, error.digest)`)
- **Impact:** Console noise in production; error details are not surfaced to users (good), so impact is minimal.

### F11 — MEDIUM · Dependency tree carries 5 high-severity advisories (all fixable)
- **Category:** Supply chain
- **Dimension(s):** Dependencies
- **Severity:** Medium · **Confidence:** 10
- **Location:** `npm audit` (2026-08-08): `js-yaml` (4.0.0–4.3.0, DoS, `GHSA-5p4m-2wfm-xmqj`), `nanoid` (<3.3.17, generator DoS, `GHSA-2v37-7h3g-55p8`), `next` (via `postcss` XSS-in-stringify and `sharp` libvips CVEs), `postcss` (<8.5.10, XSS in output), `sharp` (<0.35.0, libvips CVEs). 0 critical. All flagged `fixAvailable: true`.
- **Impact:** Transitive and mostly build-time; no end-user input reaches these paths on a static site, so exploitability is low — but `next`/`sharp` run in production image optimization, and the tree should be cleaned.
- **Recommended fix:** Run `npm audit fix` (or pin the safe ranges) in a feature branch, then rebuild; re-audit to confirm 0 high.

---

## 5. Final Assessment

- **Counts:** Critical 0 · High 3 · Medium 4 · Low 4
- **Production Readiness Score:** 87 / 100 (B)
- **Top 10 risks ranked:**
  1. F1 — Chatbot lead capture silently discards leads (revenue + trust)
  2. F2 — Simulated SEO audit presented as real analysis (trust)
  3. F3 — Consent banner contradicted by unconditional analytics (GDPR exposure)
  4. F6 — Placeholder portfolio URLs/templated case studies (trust)
  5. F4 — reCAPTCHA can silently vanish; no server verification (spam/abuse)
  6. F5 — CSP `unsafe-eval`/`unsafe-inline` (latent XSS amplification)
  7. F11 — 5 high advisories in dependency tree (hygiene)
  8. F8 — Sitemap lastModified churn (SEO)
  9. F7 — Blog duplicate publish dates (content credibility)
  10. F9/F10 — security.txt gaps + prod console logging (minor)

- **Most Dangerous Module:** `src/components/ui/AIChatbot.tsx` — the site's primary conversion surface silently drops every lead and asserts a false confirmation to visitors.
- **Most Fragile Module:** `src/app/resources/tools/seo-audit/page.tsx` — a fully simulated tool shipping fabricated results as a client-facing product.
- **Areas Requiring Manual Review (confidence 6–8):**
  - Site-wide claim accuracy: "120+ Enterprise Projects", "99.99% Uptime SLA", "50k+ Hours Saved", "8+ Countries" (`StatsBar.tsx`, home metrics) — no supporting evidence in-repo.
  - Unbacked compliance/quality badges: "ISO Standard Code", "GDPR Compliant", "NDA Protected" (Footer) — no cert/process evidence.
  - "AGENTIC BROWSING v2.0" label on a static keyword-search index (`siteSearch.ts` / `contentIndex.ts`) overstates capability.
  - Blog content quality/authenticity beyond the date issue (several posts read as templated SEO filler).
  - Runtime verification needed: whether the deployed env actually sets `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, and whether the Formspree dashboard secret is configured (affects F4's exploitability).
  - Unreviewed pages (see Coverage Report) — especially `careers`, `partnerships`, `white-label`, `terms`, `privacy`, and the geo-landing clusters, which were outside the critical path.
  - Actual deploy (Vercel) environment variables, CI logs for secret leakage, and backup/rollback procedures are outside the repo and must be checked at the platform level.

- **Suggested re-scan trigger:** Re-run after (a) F1/F2 are either wired to a real backend or removed, (b) any release that adds a server-side component (route handlers, server actions, forms, or auth), or (c) a major version bump of Next.js. Otherwise, a re-scan in 90 days is adequate; the trust-integrity items above should be fixed before then.

---

*Report generated per Audit.md. Known Prior Fixes section skipped because no prior audit history exists in this repo (Rule 7 not applicable to baseline).*
