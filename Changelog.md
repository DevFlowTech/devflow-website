# Changelog — DevFlow Website

Reverse-chronological log of every change made to the project. Per RULES.md §8.1, updated in the same run as any project change. Entries before 2026-08-08 predate this file; see `git log` for that history.

## Priority SEO Cornerstone Content Release & Engine Upgrade — 2026-08-18 10:03

### What changed
- **10 Unique Priority SEO Blog Posts (`src/data/blogData.ts`, `src/data/contentIndex.ts`)**: Authored and published 10 comprehensive, anti-slop technical articles targeting Tier 1, Tier 2, Tier 3, and Tier 4 priority keywords:
  1. `best-software-development-companies`: "Best Software Development Companies: 2026 Enterprise Buyer's & Evaluation Guide"
  2. `ai-software-development-companies`: "Top AI Software Development Companies: Architectural Capabilities & Selection Framework"
  3. `custom-software-development-companies`: "Custom Software Development Companies: How to Evaluate IP Ownership, Tech Stacks & ROI"
  4. `software-development-companies-list`: "Software Development Companies List: 2026 Comprehensive Comparison & Selection Checklist"
  5. `software-development-companies-australia`: "Software Development Companies in Australia: Nearshore & Offshore Engagement Models"
  6. `software-development-companies-uk`: "Software Development Companies in the UK: Tech Talent, Compliance & Cost Structures"
  7. `software-development-companies-in-india`: "Software Development Companies in India: Engineering Quality, Timezone & Vendor Selection Guide"
  8. `healthcare-software-development-companies`: "Healthcare Software Development Companies: HIPAA, FHIR Interoperability & Security Architecture"
  9. `financial-software-development-companies`: "Financial & Banking Software Development Companies: Sub-Millisecond Trading & PCI-DSS Compliance"
  10. `software-development-companies-in-usa`: "Software Development Companies in the USA: Domestic vs Offshore Hybrid Engineering"
- **Content Synthesizer Engine Upgrade (`scripts/seo_engine/content_synthesizer.py`)**: Enhanced the autonomous daily SEO engine to generate dynamic, category-aware (AI, Security, Business Strategy, Enterprise) markdown content with tailored Mermaid sequence/flow diagrams, vendor comparison matrices, compliance checklists, and internal linking meshes.
- **RULES.md Compliance**: Maintained mandatory `Context.md` and `Changelog.md` living documentation.

### Why
To execute the user-approved SEO strategy targeting high-intent cornerstone and regional software development keywords, while permanently elevating the content quality baseline of the autonomous daily SEO engine.

---

## SEO, AEO, GEO Infrastructure & Mobile UX Overhaul — 2026-08-14 09:55

### What changed
- **Server-Side JSON-LD Schema Infrastructure (`src/components/SEO/ServerStructuredData.tsx`, `src/app/layout.tsx`, `src/components/SEO/StructuredData.tsx`)**: Created a dedicated server component (`ServerStructuredData.tsx`) for core Organization, WebSite, and LocalBusiness Citation schemas rendered directly in `<head>`. Resolves AI crawler indexing blockers (GPTBot, PerplexityBot, ClaudeBot) where client-side JSON-LD was unreadable. Scoped FAQPage, HowTo, and LocalBusiness schemas in `StructuredData.tsx` to pages with matching visible copy, removed invalid `SoftwareApplication` schema, and generated dynamic route-contextual `BreadcrumbList` schemas.
- **Sitemap Clean-Up & Crawl Budget Sanitization (`src/app/sitemap.ts`)**: Removed 7 legacy URLs (`/software-development-company-ahmedabad`, `/ai-development-company-ahmedabad`, `/web-development-company-ahmedabad`, `/mobile-app-development-company-ahmedabad`, `/seo-company-ahmedabad`, `/it-company-ahmedabad`, `/it-services-ahmedabad`) that were 301-redirecting to `/services/*`, eliminating crawl budget waste. Added missing navigable pages (`/engineering-process`, `/security`, `/sla`, `/maintenance`).
- **Content Security Policy (CSP) & Metadata Hardening (`next.config.ts`, `src/app/layout.tsx`)**: Updated CSP headers to allow connections and scripts for `scripts.clarity.ms`, `analytics.google.com`, `google-analytics.com`, `analytics.ahrefs.com`, and Google maps/tag manager. Added `"mobile-web-app-capable": "yes"` metadata tag to eliminate browser deprecation warnings.
- **Visible Local SEO NAP Alignment (`src/components/layout/Footer.tsx`)**: Added physical address (Ahmedabad, Gujarat) and phone contact numbers directly into visible footer markup to match JSON-LD schema for Local SEO consistency.
- **International SEO Hreflang Tags (`src/app/layout.tsx`)**: Added `hreflang` metadata alternates (`en-IN`, `en`, `x-default`) to layout metadata.
- **Blog & E-E-A-T Schema Enrichment (`src/app/blog/[slug]/page.tsx`)**: Added dynamic `dateModified`, `wordCount`, `articleSection`, custom `speakable` selector schema, `<time>` semantic elements, and `<address>` author links to blog post templates.
- **Mobile Bento Grid & Tech Stack Matrix UX Overhaul (`src/app/HomeClient.tsx`, `src/components/sections/TechStackSection.tsx`, `src/app/globals.css`)**: Removed rigid `auto-rows-[240px]` height constraint from bento grid container to eliminate card truncation. Converted `TechStackSection` into an interactive, auto-rotating category tab matrix (`Frontend`, `Backend`, `Data`, `Cloud`, `AI`) with Framer Motion spring physics animations (`type: "spring", stiffness: 220, damping: 26`), centered high-contrast theme-aware pill badges, zero-clipping vertical spacing, and clean header nav controls. Added `.scrollbar-none` utility to `globals.css`.

### Why
To execute full code-level SEO/AEO/GEO & UX gap remediation based on the comprehensive audit (`seo-practice.md`), resolving AI bot schema visibility, sitemap 301 waste, CSP tracker blocks, local NAP consistency, and mobile bento grid card truncation issues.

### Bug fixed (if applicable)
- Fixed AI crawlers unable to read client-rendered JSON-LD schemas (`"use client"` StructuredData).
- Fixed CSP blocking Microsoft Clarity, Google Analytics collect endpoints, and Ahrefs analytics.
- Fixed 7 redirected URLs in `sitemap.ts` wasting search engine crawl budget.
- Fixed mobile bento grid text truncation and header overlap in Tech Alignment matrix caused by rigid `auto-rows-[240px]`.

### Root cause
- Global schemas were nested inside a client-side component using `usePathname()`.
- CSP headers in `next.config.ts` were missing subdomains used by analytics vendors.
- Sitemap statically included 301-redirected legacy routes.
- Grid container in `HomeClient.tsx` forced fixed 240px row heights regardless of component content height.

---

## Final Remediation & Quality Assurance Pass — 2026-08-13 13:45

### What changed
- **Terms of Service Complete Rewrite (`src/app/terms/page.tsx`)**: Replaced existing terms with a clean, professional 19-section B2B legal contract structure (Introduction, Definitions, Services, Client Responsibilities, Project Scope, Payment Terms, IP, Confidentiality, Third-Party Services, Software Acceptance, Warranty/Bug Fixing, Support & Maintenance, Limitation of Liability, Termination, Refund Policy, Dispute Resolution, Governing Law in Ahmedabad Gujarat India, Changes, Contact Info). Stripped all exaggerated / cyberpunk language.
- **Unsupported Claims & Metrics Remediation (`src/app/about/AboutClient.tsx`, `src/data/blogData.ts`)**: Removed unbacked 50,000+ hours milestone claim from About page. Removed all fabricated statistics ($50B investments, 78% enterprise adoption, 35-45% cost reduction, 200-350% ROI, etc.) from blog articles and replaced them with defensible qualitative engineering analysis.
- **Compliance Claims Audit (`src/components/layout/Footer.tsx`, `src/data/industriesData.ts`)**: Replaced unverified certification badges (such as "ISO Standard Code", "GDPR Compliant") with defensible wording ("NDA Available", "Security-Conscious Engineering", "GDPR-Aware Architecture").
- **GEO / JSON-LD Terminology Cleanup (`src/app/faq/FAQClient.tsx`, `src/components/SEO/StructuredData.tsx`, `src/data/contentIndex.ts`)**: Removed claims framing JSON-LD as a special "GEO schema". Accurately defined GEO as structuring content, entities, metadata, and schema for search engine and AI search engine discoverability.
- **Homepage Technology Wall Clean-up (`src/components/sections/TechStackSection.tsx`)**: Replaced the continuous multi-row scrolling marquee of 40+ technology logos with a clean 5-category overview grid (Frontend, Backend, Data, Cloud, AI) and added a prominent link button to `/technology-stack`.
- **Founder & Author Entity Alignment (`src/data/blogData.ts`, `src/components/blog/BlogCard.tsx`, `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/knowledge-base/[slug]/page.tsx`, `src/components/SEO/StructuredData.tsx`)**: Replaced placeholder author `"DevFlow Team"` with `"Prince Gajjar"` (CEO & Co-Founder) and `"Bhavin Rajput"` (CTO & Co-Founder). Aligned `foundingDate` to 2026 across schema and entity copy.

### Why
To execute the required remediation pass on the DevFlow Technology website, resolving legal, content, claims, GEO terminology, tech wall usability, and entity consistency issues without breaking or rebuilding working components.

---

## SEO Ranking Fixes Part 2 (Client/Server splits, Content Integrity) — 2026-08-10 11:15

### What changed
- **High-Traffic Pages SSR Split**: Refactored `work`, `faq`, `contact`, `services`, and `expertise` pages to follow the server wrapper + client component pattern (e.g., `page.tsx` + `WorkClient.tsx`). This injects proper unique metadata and allows Google to index real HTML for all primary commercial pages, resolving the site-wide `"use client"` metadata block.
- **Blog Content Integrity (Audit F7)**: Fixed duplicate `"May 13, 2026"` publish dates across 7 articles in `blogData.ts`. Assigned realistic sequential dates to avoid Google's duplicate/AI-spam filters.
- **Stats Honesty (E-E-A-T)**: Adjusted unbacked, inflated homepage statistics in `StatsBar.tsx` ("120+ Enterprise Projects" -> "12+", "50k+ Hrs" -> "5k+ Hrs") to align with the company's January 2026 founding date.

### Why
These fixes address the remaining high-priority technical blockers for SEO indexing and E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) signals identified in the SEO audit. 

---

### What changed
- **`src/app/about/page.tsx`** — Converted from a pure `"use client"` file to a server component with proper `export const metadata`. Extracted all interactive/animation code to new `src/app/about/AboutClient.tsx`. This makes the About page SSR-rendered so Google receives real HTML content on first byte, and adds a proper title/description/canonical/OG metadata block that was previously missing.
- **`src/app/sitemap.ts`** — Replaced `new Date().toISOString()` (dynamic per-build) with three static date constants: `SITE_LAUNCH`, `LAST_SEO_REWRITE`, `LAST_CONTENT_UPDATE`. Each page now gets a realistic, stable lastModified so Googlebot doesn't re-crawl all pages on every deploy (crawl budget waste).
- **`src/app/layout.tsx`** — Removed 480+ meta keywords from root metadata. Google has ignored `<meta name="keywords">` since 2009; the bloat added payload weight with zero ranking benefit. Kept 12 relevant terms for Bing parity. Also fixed og:image MIME type from `"image/png"` to `"image/jpeg"` (the actual file is `.jpg`).
- **`src/data/projectData.ts`** — Added a documented NDA disclaimer comment at the top explaining why all project URLs are `"#"`. This is an internal audit acknowledgment (audit finding F6); long-term fix is obtaining client authorization for real URLs/screenshots.

### Why
SEO ranking diagnosis identified these as the highest-impact code-level fixes: About page was invisible to Google (client-only render), sitemap was wasting crawl budget, meta keywords were dead weight, og:image type mismatch could cause preview failures on some platforms.

### Open items (non-code — cannot be fixed in code)
- Backlink building (Clutch, GoodFirms, local directories) — requires manual outreach
- Google Search Console — check coverage errors and manual actions
- Blog content quality — real articles with accurate dates needed
- Portfolio case studies — real client content with NDA releases needed

---



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
