# Changelog — DevFlow Website

Reverse-chronological log of every change made to the project. Per RULES.md §8.1, updated in the same run as any project change. Entries before 2026-08-08 predate this file; see `git log` for that history.

---

## SEO Audit Remediation (Findings from SEO_Analysis_Report_DevFlow.docx) — 2026-08-09 10:35

### What changed
- Updated `HeroSection.tsx` H1 to bridge local and national intent ("Custom Software & AI Development Company in Ahmedabad, India").
- Updated Blog JSON-LD author schema to attribute to `Prince Gajjar` (`@type: Person`) instead of a generic organization.
- Enforced `trailingSlash: false` in `next.config.ts` to normalize canonical/redirect matching.
- Replaced generic H1 tags on `/services`, `/about`, and `/work` with keyword-optimized headings.
- Verified that `Organization`, `LocalBusiness`, and `BreadcrumbList` schemas are present and unconditionally/conditionally rendered via `StructuredData.tsx`.

### Why
To address all findings from the external SEO Audit (`SEO_Analysis_Report_DevFlow.docx`), improving local search intent, resolving canonical/redirect discrepancies, enhancing E-E-A-T signals, and aligning H1 tags with SEO best practices.

## Consent-gated analytics (audit F3) — 2026-08-08 16:33

### What changed
- Wired the previously-unmounted `src/components/analytics/AnalyticsProvider.tsx` into `src/app/layout.tsx`: removed the unconditional GA4/Clarity/GTM scripts and the Ahrefs `<head>` script, replaced them with a single `<AnalyticsProvider />` that mounts the four trackers only after `localStorage["cookie-consent"] === "accepted"`.
- Updated `src/components/ui/CookieBanner.tsx` to dispatch a `cookie-consent` CustomEvent (`detail.consent`) on Accept/Decline so trackers mount/drop within the same visit — previously only localStorage was written, so a first-visit choice required a reload to take effect.
- Added `https://analytics.ahrefs.com` to the CSP `script-src` allowlist in `next.config.ts` (the consent-gated provider loads Ahrefs from there; it was previously blocked by the CSP).

### Why
Audit finding F3 (High): analytics loaded unconditionally despite a consent banner claiming compliance, exposing the site to GDPR/DPDPA risk and contradicting the banner's own promise. The fix makes the banner's Accept/Decline choice actually control script loading.

### Bug fixed (if applicable)
First-visit "Accept" did not load analytics until page reload (missing CustomEvent dispatch); Ahrefs would have been CSP-blocked after consent (missing script-src host).

### Root cause
The consent gate component existed but was never mounted, the banner never notified subscribers of a live choice, and the CSP allowlist predated the consent-gated Ahrefs load.

---

## CSP hardening — production drops `unsafe-eval` (audit F5) — 2026-08-08

### What changed
- `next.config.ts`: `script-src` now drops `'unsafe-eval'` in production builds (kept only in dev for React Fast Refresh). Rationale documented inline.
- Tracker bootstrap code (GA config, Clarity, GTM) externalized to `public/ga-config.js`, `public/clarity-script.js`, `public/gtm-script.js` so it runs under the stricter CSP rather than as inline `<Script>` blocks.

### Why
Audit finding F5 (Medium): `unsafe-eval`/`unsafe-inline` in `script-src` removed the last defense layer should any XSS ever be introduced. `unsafe-inline` is retained (Next App Router hydration bootstrap + inline JSON-LD are inline by design; removing it needs a nonce CSP that forces dynamic rendering) — documented in the config.

---

## Portfolio placeholder URLs & NDA labeling (audit F6) — 2026-08-08

### What changed
- `src/data/projectData.ts`: every case-study `url` changed from the self-referential `https://www.devflow.co.in` to `"#"`.
- `src/app/work/[slug]/page.tsx`: added a "sanitized internal prototype — client URLs withheld under NDA" badge next to the CTA, and rendered the "Visit Live Site ↗" button only when a real `http(s)` URL is present (placeholder `"#"` no longer produces a dead anchor).

### Why
Audit finding F6 (Medium): clicking any "live project" redirected to DevFlow's own homepage, instantly exposing placeholder content and breaching the site's core trust promise.

### Known limitation
The underlying case-study copy and `results` figures (e.g. "70% faster queries", "99.8% inventory accuracy") remain templated/fabricated-looking. Either real client data (with permission) or a permanent "prototype" framing is still needed; not resolved by this change.

---

## Deep-scan audit, project rules, and initial remediation — 2026-08-08

### What changed
- Added `Audit.md` (13-phase deep-scan protocol), `RULES.md` (universal agent operating rules), `SEO.md` (RankSynth SEO/AEO/GEO manual), and the `audit-report.md` output (baseline scorecard 87/B).
- Added `.audit/history/2026-08-08.json` baseline scorecard.
- Committed earlier this day: hero layout-shift fix, deferred third-party scripts to `lazyOnload`, CSP additions for GA/Clarity/Cloudflare, Ahrefs verification + analytics, IndexNow key, FAQ/AEO schema, service redirects and internal-linking improvements (see `git log`).

### Why
Establish an auditable baseline and operating rules for this repository before the audit-remediation backlog is worked.
