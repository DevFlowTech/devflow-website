/**
 * Content Index — powers the agentic browsing capability of the AI chatbot.
 * This index contains structured summaries of every page, service, project,
 * blog post, and FAQ on the DevFlow website.
 *
 * The AI chatbot uses this index to search, browse, and reference real site
 * content when answering user questions.
 */

export interface ContentEntry {
  /** Unique identifier (e.g. "page/home", "service/ai-automation") */
  id: string;
  /** Display title */
  title: string;
  /** Content category for filtering */
  type: "page" | "service" | "project" | "blog" | "faq" | "local-seo";
  /** Full-text searchable content summary */
  summary: string;
  /** Key search keywords */
  keywords: string[];
  /** URL path on the site */
  path: string;
  /** For providing more detailed context to the bot */
  details?: string;
  /** Icon emoji for display */
  icon?: string;
}

export const siteContent: ContentEntry[] = [
  // ─── PAGES ──────────────────────────────────────────────────────────────
  {
    id: "page/home",
    title: "Home — DevFlow Technology",
    type: "page",
    summary:
      "DevFlow Technology is an AI agency and web development company in Ahmedabad, Gujarat. We build custom software, AI solutions, web & mobile apps, enterprise ERP, and cloud systems. Also offering digital marketing, SEO, PPC & branding. Trusted by Vassu Infotech, Aureon Group, and Tech Labs.",
    keywords: [
      "home",
      "DevFlow",
      "AI agency",
      "web development",
      "Ahmedabad",
      "software company",
    ],
    path: "/",
    details:
      "Key metrics: 99.9% server uptime, 50k+ hours saved, 2.4x work speedup. Services include custom business portals, task automation, app integration, and fast cloud servers. Clients include Vassu Infotech, Aureon Group.",
    icon: "🏠",
  },
  {
    id: "page/about",
    title: "About — DevFlow Philosophy",
    type: "page",
    summary:
      "DevFlow was founded to fill the gap in standard development shops: a lack of absolute technical ownership. Core values: Engineering First, Chaos to Clarity, Radical Transparency. Founders Prince Gajjar (CEO) and Bhavin Rajput (CTO).",
    keywords: [
      "about",
      "philosophy",
      "values",
      "Prince Gajjar",
      "Bhavin Rajput",
      "founders",
      "engineering",
      "transparency",
    ],
    path: "/about",
    details:
      "Founded by Prince Gajjar (CEO) and Bhavin Rajput (CTO). Prince coordinates product design, scope alignment, milestones. Bhavin leads system engineering, microservice database setups, cloud orchestration. Core values: Engineering First, Chaos to Clarity, Radical Transparency.",
    icon: "📖",
  },
  {
    id: "page/contact",
    title: "Contact — Get in Touch",
    type: "page",
    summary:
      "Contact DevFlow Technology for free consultation. Get in touch with Prince Gajjar and Bhavin Rajput for custom software, AI automation, web development, ERP systems, and digital marketing needs. Based in Ahmedabad, Gujarat.",
    keywords: [
      "contact",
      "consultation",
      "hire",
      "get in touch",
      "Prince",
      "Bhavin",
      "Ahmedabad",
    ],
    path: "/contact",
    details:
      "Contact form available. Cost estimator tool for project pricing. Free consultation for Gujarat-based companies. Response within 24 hours.",
    icon: "📞",
  },
  {
    id: "page/services",
    title: "Services — Bespoke Solutions",
    type: "page",
    summary:
      "DevFlow offers AI Automation & Integrations, Web & Mobile App Development, UI/UX & High-End Brand Design, and Hosting & Cloud Setup. Custom engineering for fast database setups, automated operational flows, and clean interfaces.",
    keywords: [
      "services",
      "AI automation",
      "web development",
      "mobile apps",
      "UI UX design",
      "cloud hosting",
      "bespoke solutions",
    ],
    path: "/services",
    icon: "⚙️",
  },
  {
    id: "page/expertise",
    title: "Expertise — Skills & Technologies",
    type: "page",
    summary:
      "DevFlow's expertise covers Next.js, React 19, TypeScript, Node.js, Python, Go, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, Framer Motion, Tailwind CSS, Figma, and 40+ industrial-grade frameworks and tools.",
    keywords: [
      "expertise",
      "skills",
      "technologies",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    path: "/expertise",
    icon: "💡",
  },
  {
    id: "page/faq",
    title: "FAQ — Frequently Asked Questions",
    type: "page",
    summary:
      "FAQs about GEO/AEO optimization, custom ERP development, SaaS technologies (Next.js, Go, AWS), Google Business Profile optimization, web crawling services, and how Prince and Bhavin coordinate projects.",
    keywords: [
      "FAQ",
      "questions",
      "GEO",
      "AEO",
      "ERP",
      "SaaS",
      "Google Business Profile",
      "web crawling",
      "Prince",
      "Bhavin",
    ],
    path: "/faq",
    icon: "❓",
  },
  {
    id: "page/work",
    title: "Work — Portfolio & Case Studies",
    type: "page",
    summary:
      "21 custom-built projects spanning AI & Automation, SaaS & Web Apps, Enterprise Systems, Mobile Apps, and SEO & GEO Marketing. View detailed case studies for each project.",
    keywords: [
      "portfolio",
      "case studies",
      "projects",
      "work",
      "AI",
      "SaaS",
      "enterprise",
      "mobile",
      "SEO",
    ],
    path: "/work",
    details:
      "Categories: AI & Automation, SaaS & Web Apps, Enterprise Systems, Mobile Apps, SEO & GEO Marketing. Filterable gallery with 21 projects.",
    icon: "💼",
  },
  {
    id: "page/blog",
    title: "Blog — Industry Insights",
    type: "page",
    summary:
      "DevFlow blog covers AI integration, Next.js 15 performance, custom ERP vs off-the-shelf, React 19 Server Components, cybersecurity, mobile app trends, custom AI agents, SaaS development, enterprise software, and more.",
    keywords: [
      "blog",
      "articles",
      "insights",
      "AI",
      "Next.js",
      "React",
      "ERP",
      "cybersecurity",
      "mobile",
      "SaaS",
    ],
    path: "/blog",
    icon: "📝",
  },
  {
    id: "page/seo-audit",
    title: "SEO Audit Tool",
    type: "page",
    summary:
      "Free technical SEO audit tool. Analyze meta tags, headers, structured data, Core Web Vitals, robots.txt, sitemaps, and schema markup for your website.",
    keywords: [
      "SEO audit",
      "free tool",
      "technical SEO",
      "meta tags",
      "schema",
      "Core Web Vitals",
      "page speed",
    ],
    path: "/seo-audit",
    icon: "🔍",
  },
  {
    id: "page/privacy",
    title: "Privacy Policy",
    type: "page",
    summary: "DevFlow Technology privacy policy detailing data collection, usage, cookies, and GDPR/DPDPA compliance.",
    keywords: ["privacy", "policy", "GDPR", "DPDPA", "data protection"],
    path: "/privacy",
    icon: "🔒",
  },
  {
    id: "page/terms",
    title: "Terms of Service",
    type: "page",
    summary: "DevFlow Technology terms and conditions for software development services, project delivery, and client agreements.",
    keywords: ["terms", "conditions", "service agreement", "legal"],
    path: "/terms",
    icon: "📄",
  },

  // ─── SERVICES ────────────────────────────────────────────────────────────
  {
    id: "service/ai-automation",
    title: "AI Automation & Web Crawlers",
    type: "service",
    summary:
      "Deploy cognitive AI agents, automated Puppeteer crawling pipelines, and high-frequency sync engines. Custom LLM models & RAG implementations, multi-threaded scrapers with Redis queues, API integrations connecting supplier catalogs to storefronts.",
    keywords: [
      "AI automation",
      "web crawlers",
      "Puppeteer",
      "RAG",
      "LLM",
      "scraping",
      "Redis",
      "automation",
    ],
    path: "/services/ai-automation",
    details:
      "Tech stack: Puppeteer, Gemini API, OpenAI API, Python, Redis, Node.js, MongoDB. Custom LLM fine-tuning, RAG for document search, automated pipeline scripting, conversational bots.",
    icon: "🤖",
  },
  {
    id: "service/custom-erp",
    title: "Custom Software & ERP Systems",
    type: "service",
    summary:
      "Centralize business inventory, fleet logistics, CRM data pipelines, and operations tracking. Real-time sync via WebSockets, automated document reporting, role-based access controls (RBAC).",
    keywords: [
      "ERP",
      "custom software",
      "inventory",
      "CRM",
      "WebSockets",
      "RBAC",
      "business software",
    ],
    path: "/services/custom-software-erp",
    details:
      "Tech stack: React, Node.js, WebSockets, MySQL, PHP, Docker, SQL Server. Real-time synchronization, automated invoice generators, secure RBAC.",
    icon: "🏗️",
  },
  {
    id: "service/enterprise-seo",
    title: "Enterprise SEO & GEO/AEO",
    type: "service",
    summary:
      "Optimize digital presence for AI answer engines (Gemini, ChatGPT, Perplexity). Conversational query mapping, JSON-LD schemas, Google Business Profile optimization for local pack ranking.",
    keywords: [
      "SEO",
      "GEO",
      "AEO",
      "enterprise SEO",
      "ChatGPT optimization",
      "JSON-LD",
      "Google Business Profile",
      "local SEO",
    ],
    path: "/services/enterprise-seo",
    details:
      "Tech stack: JSON-LD Schema, SEO Audit tools, GMB Analytics, Google Search API, Next.js Pre-rendering. Conversational query mapping, semantic header optimization, review schemas.",
    icon: "📈",
  },
  {
    id: "service/saas-development",
    title: "SaaS Product Development",
    type: "service",
    summary:
      "High-performance multi-tenant SaaS platforms with Stripe subscription billing, elastic database clustering, and sub-second page loads. Multi-tenant isolation, Stripe billing integration, custom admin dashboards.",
    keywords: [
      "SaaS",
      "product development",
      "Stripe",
      "multi-tenant",
      "subscription",
      "Next.js",
      "billing",
    ],
    path: "/services/saas-development",
    details:
      "Tech stack: Next.js 16, React 19, TypeScript, Node.js, Stripe API, PostgreSQL, AWS. Multi-tenant database isolation, row-level security, recurring payments, metered billing.",
    icon: "🚀",
  },

  // ─── PROJECTS (from projectData.ts) ──────────────────────────────────────
  {
    id: "project/medicare-ai-system",
    title: "Medicare AI System",
    type: "project",
    summary:
      "AI-driven automated booking and hospital operations dashboard. React.js, Node.js, AI, SaaS. Reduced API response times to 240ms, saving staff 15+ hours/week.",
    keywords: [
      "Medicare",
      "AI",
      "hospital",
      "booking",
      "dashboard",
      "React",
      "Node.js",
    ],
    path: "/work/medicare-ai-system",
    details:
      "Challenge: Manual hospital queues and patient scheduling bottlenecks. Solution: AI-driven automated booking dashboard. Results: 240ms API response, 15+ hours/week saved.",
    icon: "🏥",
  },
  {
    id: "project/real-estate-platform",
    title: "Real Estate Platform",
    type: "project",
    summary:
      "Database system powered by Cloudflare D1 and static assets. HTML5, JavaScript, Cloudflare D1. Sub-second page load times (LCP < 0.95s).",
    keywords: [
      "real estate",
      "Cloudflare",
      "database",
      "property",
      "listing",
      "HTML5",
    ],
    path: "/work/real-estate-platform",
    details:
      "Challenge: High latency on real estate listing pages. Solution: Cloudflare D1 database system. Results: Sub-second loads, LCP < 0.95s.",
    icon: "🏘️",
  },
  {
    id: "project/places-data-scraper",
    title: "Places Data Scraper",
    type: "project",
    summary:
      "Custom Puppeteer scraping automation with multi-threaded Node scripts. Processed 10M+ local business records, 300% search map visibility increase.",
    keywords: [
      "scraper",
      "Puppeteer",
      "data extraction",
      "leads",
      "business data",
      "Node.js",
    ],
    path: "/work/places-data-scraper",
    details:
      "Challenge: Inaccurate lead extraction from map directories. Solution: Multi-threaded Puppeteer scraper. Results: 10M+ records processed, 300% visibility increase.",
    icon: "🗺️",
  },
  {
    id: "project/german-logistics-portal",
    title: "German Logistics Portal",
    type: "project",
    summary:
      "Dynamic tracking portal with real-time custom declarations. React.js, Django, PostgreSQL, Docker. Reduced logistics dispatch delay by 35% across Europe.",
    keywords: [
      "logistics",
      "tracking",
      "Django",
      "PostgreSQL",
      "Docker",
      "Germany",
      "Europe",
    ],
    path: "/work/german-logistics-portal",
    details:
      "Challenge: Route planning errors and delayed customs. Solution: Dynamic tracking portal with real-time declarations. Results: 35% delay reduction across Europe.",
    icon: "🚚",
  },
  {
    id: "project/ai-resume-parser-saas",
    title: "AI Resume Parser (SaaS)",
    type: "project",
    summary:
      "Resume parser powered by Gemini 1.5 Pro for candidate matching. Next.js, Gemini API, Pinecone, SaaS. Increased recruitment processing speed by 80%.",
    keywords: [
      "AI",
      "resume",
      "parser",
      "SaaS",
      "Gemini",
      "recruitment",
      "HR",
      "Pinecone",
    ],
    path: "/work/ai-resume-parser-saas",
    details:
      "Challenge: Manual filtering of thousands of resumes. Solution: Gemini 1.5 Pro powered parsing. Results: 80% faster recruitment processing.",
    icon: "📄",
  },
  {
    id: "project/nippon-e-commerce",
    title: "Nippon E-Commerce",
    type: "project",
    summary:
      "Next.js headless frontend with GraphQL and localized translations. Shopify API integration. Increased mobile conversion rate by 22%.",
    keywords: [
      "e-commerce",
      "Next.js",
      "Shopify",
      "GraphQL",
      "headless",
      "conversion",
    ],
    path: "/work/nippon-e-commerce",
    details:
      "Challenge: High bounce rate on international Shopify checkouts. Solution: Next.js headless frontend. Results: 22% mobile conversion increase.",
    icon: "🛒",
  },
  {
    id: "project/apex-crm-system",
    title: "Apex CRM System",
    type: "project",
    summary:
      "Enterprise-grade CRM built with Go and Next.js for fleet route telemetry and tracking. Zero dispatch downtime, 99.96% uptime for 120+ employees.",
    keywords: [
      "CRM",
      "enterprise",
      "Go",
      "fleet",
      "tracking",
      "telemetry",
      "Next.js",
    ],
    path: "/work/apex-crm-system",
    details:
      "Challenge: Scattered fleet route telemetry. Solution: Go + Next.js CRM. Results: Zero dispatch downtime, 99.96% uptime, 120+ employees.",
    icon: "📊",
  },
  {
    id: "project/autosync-db-crawler",
    title: "AutoSync DB Crawler",
    type: "project",
    summary:
      "High-frequency web automation crawler with Puppeteer and Redis. Processed 500,000+ daily catalog items with zero API blocks.",
    keywords: [
      "crawler",
      "automation",
      "Puppeteer",
      "Redis",
      "database",
      "sync",
      "catalog",
    ],
    path: "/work/autosync-db-crawler",
    details:
      "Challenge: Catalog desync between supplier and retail frontends. Solution: High-frequency Puppeteer + Redis crawler. Results: 500k+ daily items processed.",
    icon: "🔄",
  },
  {
    id: "project/saas-billing-engine",
    title: "SaaS Billing Engine",
    type: "project",
    summary:
      "Billing engine with robust Stripe webhook handlers. React.js, Express, Stripe API, Serverless. Reduced payment churn by 18% globally.",
    keywords: [
      "billing",
      "Stripe",
      "SaaS",
      "payments",
      "subscription",
      "React",
      "Express",
    ],
    path: "/work/saas-billing-engine",
    details:
      "Challenge: Complex tax logic and failed recurring payments. Solution: Stripe webhook billing engine. Results: 18% payment churn reduction globally.",
    icon: "💳",
  },
  {
    id: "project/vassu-talks-landing",
    title: "Vassu Talks Landing System",
    type: "project",
    summary:
      "Static Next.js page architecture with edge caching. HTML5, CSS3, JavaScript, SEO optimized. Maintained 100% availability during 100k+ visitor spikes.",
    keywords: [
      "landing page",
      "Next.js",
      "edge caching",
      "SEO",
      "high traffic",
      "Vassu",
    ],
    path: "/work/vassu-talks-landing-system",
    details:
      "Challenge: Traffic spike crashes during ad campaigns. Solution: Static Next.js + edge caching. Results: 100% availability at 100k+ visitor spikes.",
    icon: "📱",
  },
  {
    id: "project/crypto-dashboard",
    title: "Real-Time Crypto Dashboard",
    type: "project",
    summary:
      "Optimized rendering with WebSocket compression for multi-exchange price quotes. React, WebSockets, TailwindCSS, Node.js. Latency under 50ms.",
    keywords: [
      "crypto",
      "dashboard",
      "WebSocket",
      "real-time",
      "React",
      "trading",
    ],
    path: "/work/real-time-crypto-dashboard",
    details:
      "Challenge: Lag in multi-exchange websocket quotes. Solution: Optimized rendering with compression. Results: Under 50ms latency.",
    icon: "📈",
  },
  {
    id: "project/smart-parking-iot",
    title: "Smart Parking IoT System",
    type: "project",
    summary:
      "IoT hardware nodes connected to MQTT broker and React dashboard. Node.js, MQTT, React.js, InfluxDB. Achieved 98% spot vacancy visibility.",
    keywords: [
      "IoT",
      "parking",
      "smart city",
      "MQTT",
      "React",
      "sensors",
      "InfluxDB",
    ],
    path: "/work/smart-parking-iot-system",
    details:
      "Challenge: Under-utilized parking spots. Solution: IoT + MQTT + React dashboard. Results: 98% vacancy visibility.",
    icon: "🚗",
  },
  {
    id: "project/security-gate-app",
    title: "Security Gate App",
    type: "project",
    summary:
      "Visitor verification using Kotlin and Supabase database logs. Kotlin, Supabase, Firebase. Visitor verification time under 8 seconds.",
    keywords: [
      "security",
      "visitor",
      "Kotlin",
      "Supabase",
      "Firebase",
      "gate",
      "access control",
    ],
    path: "/work/security-gate-app",
    details:
      "Challenge: Vulnerable entry logs and slow verification. Solution: Kotlin + Supabase verification system. Results: Under 8 seconds verification.",
    icon: "🔐",
  },
  {
    id: "project/employee-system",
    title: "Employee System",
    type: "project",
    summary:
      "MERN Stack with JWT Auth and optimized database indexing. MERN Stack, JWT, REST API. Database query lookup speeds improved by 70%.",
    keywords: [
      "employee",
      "MERN",
      "JWT",
      "authentication",
      "REST API",
      "database",
      "HR",
    ],
    path: "/work/employee-system",
    details:
      "Challenge: Unsecured endpoints and slow lookups. Solution: MERN Stack with JWT + optimized indexing. Results: 70% faster queries.",
    icon: "👥",
  },
  {
    id: "project/visa-consultancy",
    title: "Visa Consultancy Portal",
    type: "project",
    summary:
      "Secure document parsing portal with React and Node upload pipelines. React.js, Node.js. Client onboarding time reduced by 40%.",
    keywords: [
      "visa",
      "document",
      "portal",
      "React",
      "Node.js",
      "onboarding",
    ],
    path: "/work/visa-consultancy",
    details:
      "Challenge: Delayed visa application processing. Solution: Secure document parsing portal. Results: 40% faster client onboarding.",
    icon: "🛂",
  },
  {
    id: "project/erp-business-system",
    title: "ERP Business System",
    type: "project",
    summary:
      "Custom ERP with MySQL and real-time backend API sync. React.js, Node.js, MySQL. Inventory stock accuracy improved to 99.8%.",
    keywords: ["ERP", "inventory", "MySQL", "React", "Node.js", "business system"],
    path: "/work/erp-business-system",
    details:
      "Challenge: Inefficient inventory reconciliation. Solution: Custom ERP with MySQL + real-time API sync. Results: 99.8% inventory accuracy.",
    icon: "📦",
  },
  {
    id: "project/construction-tracker-erp",
    title: "Construction Tracker ERP",
    type: "project",
    summary:
      "Expense tracking tool with real-time budget forecasting. PHP, XML, MySQL. Cost overruns reduced by 15% across projects.",
    keywords: [
      "construction",
      "ERP",
      "expense",
      "budget",
      "PHP",
      "MySQL",
      "tracking",
    ],
    path: "/work/construction-tracker-erp",
    details:
      "Challenge: Lack of expense transparency. Solution: Real-time budget forecasting tool. Results: 15% cost overrun reduction.",
    icon: "🏗️",
  },
  {
    id: "project/rankautocheck-gmb",
    title: "RankAutoCheck (GMB Tool)",
    type: "project",
    summary:
      "GMB automation tool with Python scraping and Google Search API. React.js, Python, MySQL, Google API. Automated daily ranking updates for 50+ locations.",
    keywords: [
      "GMB",
      "Google Business",
      "rank tracking",
      "automation",
      "Python",
      "SEO",
    ],
    path: "/work/rankautocheck-gmb-tool",
    details:
      "Challenge: Manual GMB rankings tracking. Solution: Python + Google API automation. Results: Daily updates for 50+ locations.",
    icon: "📍",
  },
  {
    id: "project/vassu-infotech",
    title: "Vassu Infotech",
    type: "project",
    summary:
      "Complete layout optimization achieving LCP of ~0.90s. HTML5, CSS3, JavaScript. PageSpeed index score increased to 99/100.",
    keywords: [
      "optimization",
      "performance",
      "LCP",
      "PageSpeed",
      "HTML5",
      "CSS3",
      "Vassu",
    ],
    path: "/work/vassu-infotech",
    details:
      "Challenge: Poor mobile usability and low PageSpeed. Solution: Complete layout optimization. Results: LCP 0.90s, PageSpeed 99/100.",
    icon: "⚡",
  },
  {
    id: "project/future-realty-space",
    title: "Future Realty Space",
    type: "project",
    summary:
      "Interactive lead capturing flow with PHP and JavaScript for real estate. PHP, JavaScript, CSS3. Monthly leads increased by 28%.",
    keywords: [
      "real estate",
      "leads",
      "capture",
      "PHP",
      "JavaScript",
      "conversion",
    ],
    path: "/work/future-realty-space",
    details:
      "Challenge: Low visitor-to-lead conversion. Solution: Interactive lead capturing flow. Results: 28% monthly lead increase.",
    icon: "🏠",
  },
  {
    id: "project/core-audit-engine",
    title: "Core Audit Engine",
    type: "project",
    summary:
      "Automated Puppeteer crawler parsing schemas and page metrics. Next.js, Puppeteer, JSON-LD. Audited 10,000+ pages instantly.",
    keywords: [
      "audit",
      "SEO",
      "crawler",
      "Puppeteer",
      "JSON-LD",
      "Next.js",
      "automation",
    ],
    path: "/work/core-audit-engine",
    details:
      "Challenge: Manual client SEO audits. Solution: Automated Puppeteer crawler. Results: 10,000+ pages audited instantly.",
    icon: "🔎",
  },

  // ─── FAQ ─────────────────────────────────────────────────────────────────
  {
    id: "faq/geo-implementation",
    title: "What is GEO and does DevFlow implement it?",
    type: "faq",
    summary:
      "Generative Engine Optimization (GEO) involves structuring content, entities, metadata, and structured data to improve discoverability across search engines and AI-powered search experiences.",
    keywords: [
      "GEO",
      "Generative Engine Optimization",
      "ChatGPT",
      "Claude",
      "Gemini",
      "JSON-LD",
      "LLM",
    ],
    path: "/faq",
    icon: "❓",
  },
  {
    id: "faq/custom-erp-logistics",
    title: "How does DevFlow build custom ERP and logistics databases?",
    type: "faq",
    summary:
      "DevFlow designs custom ERP using Next.js, Node.js, and SQL databases with real-time WebSockets. Eliminates legacy silos and unifies supply chain telemetry.",
    keywords: ["ERP", "logistics", "database", "Next.js", "Node.js", "SQL", "WebSockets"],
    path: "/faq",
    icon: "❓",
  },
  {
    id: "faq/saas-technologies",
    title: "What technologies does DevFlow use for SaaS?",
    type: "faq",
    summary:
      "DevFlow specializes in headless React, Next.js, TypeScript, Go (Golang), and AWS microservices. Secure multi-tenant isolation and Stripe billing integration.",
    keywords: [
      "SaaS",
      "Next.js",
      "React",
      "Go",
      "AWS",
      "Stripe",
      "multi-tenant",
    ],
    path: "/faq",
    icon: "❓",
  },
  {
    id: "faq/gmb-optimization",
    title: "Can DevFlow optimize Google Business Profile ranking?",
    type: "faq",
    summary:
      "Yes. DevFlow configures map listings, aligns address footprints, and deploys review schemas to capture the Google Maps 3-Pack rankings, driving organic calls.",
    keywords: [
      "Google Business Profile",
      "GMB",
      "maps",
      "local SEO",
      "3-pack",
      "ranking",
    ],
    path: "/faq",
    icon: "❓",
  },
  {
    id: "faq/web-crawling",
    title: "Does DevFlow provide web crawling and data extraction?",
    type: "faq",
    summary:
      "Absolutely. DevFlow writes multi-threaded Puppeteer scraping engines with Redis cache queues to crawl pages, parse structures, and update catalogs with zero blocks.",
    keywords: [
      "web crawling",
      "scraping",
      "Puppeteer",
      "data extraction",
      "Redis",
      "automation",
    ],
    path: "/faq",
    icon: "❓",
  },
  {
    id: "faq/prince-bhavin-coordination",
    title: "How do Prince and Bhavin coordinate projects?",
    type: "faq",
    summary:
      "Prince Gajjar (CEO) handles product design, scope alignment, and milestones. Bhavin Rajput (CTO) leads system engineering, microservice database setups, and cloud orchestration.",
    keywords: [
      "Prince Gajjar",
      "Bhavin Rajput",
      "coordination",
      "CEO",
      "CTO",
      "project management",
    ],
    path: "/faq",
    icon: "❓",
  },

  // ─── LOCAL SEO PAGES ─────────────────────────────────────────────────────
  {
    id: "local-seo/it-company-ahmedabad",
    title: "IT Company Ahmedabad",
    type: "local-seo",
    summary:
      "DevFlow Technology is a leading IT company in Ahmedabad offering software development, AI solutions, web & mobile apps, ERP systems, and digital marketing.",
    keywords: [
      "IT company",
      "Ahmedabad",
      "software",
      "IT services",
      "Ahmedabad IT",
    ],
    path: "/it-company-ahmedabad",
    icon: "🌐",
  },
  {
    id: "local-seo/software-development-company-ahmedabad",
    title: "Software Development Company Ahmedabad",
    type: "local-seo",
    summary:
      "DevFlow Technology is a top custom software development company in Ahmedabad, Gujarat. Specializing in enterprise software, web apps, and AI integration.",
    keywords: [
      "software development",
      "Ahmedabad",
      "custom software",
      "Gujarat",
    ],
    path: "/software-development-company-ahmedabad",
    icon: "💻",
  },
  {
    id: "local-seo/web-development-company-ahmedabad",
    title: "Web Development Company Ahmedabad",
    type: "local-seo",
    summary:
      "DevFlow Technology is a premier web development company in Ahmedabad, Gujarat. Expert in Next.js, React, and modern web applications.",
    keywords: [
      "web development",
      "Ahmedabad",
      "Next.js",
      "React",
      "website",
    ],
    path: "/web-development-company-ahmedabad",
    icon: "🌍",
  },
  {
    id: "local-seo/mobile-app-development-company-ahmedabad",
    title: "Mobile App Development Company Ahmedabad",
    type: "local-seo",
    summary:
      "DevFlow Technology builds cross-platform mobile apps using React Native and Flutter. iOS and Android development company in Ahmedabad, Gujarat.",
    keywords: [
      "mobile app",
      "Ahmedabad",
      "React Native",
      "Flutter",
      "iOS",
      "Android",
    ],
    path: "/mobile-app-development-company-ahmedabad",
    icon: "📱",
  },
  {
    id: "local-seo/ai-development-company-ahmedabad",
    title: "AI Development Company Ahmedabad",
    type: "local-seo",
    summary:
      "DevFlow Technology is a leading AI development company in Ahmedabad. Custom LLM integration, RAG systems, AI chatbots, generative AI, and ML models for Gujarat businesses.",
    keywords: [
      "AI development",
      "Ahmedabad",
      "LLM",
      "RAG",
      "chatbot",
      "machine learning",
    ],
    path: "/ai-development-company-ahmedabad",
    icon: "🧠",
  },
  {
    id: "local-seo/it-services-ahmedabad",
    title: "IT Services Ahmedabad",
    type: "local-seo",
    summary:
      "DevFlow Technology provides comprehensive IT services in Ahmedabad including software development, AI automation, cloud infrastructure, and digital marketing.",
    keywords: [
      "IT services",
      "Ahmedabad",
      "technology solutions",
      "digital",
    ],
    path: "/it-services-ahmedabad",
    icon: "🛠️",
  },
  {
    id: "local-seo/seo-company-ahmedabad",
    title: "SEO Company Ahmedabad",
    type: "local-seo",
    summary:
      "DevFlow Technology is a top SEO company in Ahmedabad offering technical SEO, GEO/AEO optimization, local SEO, and Google Business Profile management for Gujarat businesses.",
    keywords: [
      "SEO company",
      "Ahmedabad",
      "GEO",
      "AEO",
      "local SEO",
      "Gujarat",
    ],
    path: "/seo-company-ahmedabad",
    icon: "📊",
  },

  // ─── BLOG POSTS (key highlights from blogData.ts) ─────────────────────────
  {
    id: "blog/ai-integration-business-transformation-2026",
    title: "How AI Integration is Transforming Business Operations in 2026",
    type: "blog",
    summary:
      "78% of enterprises have adopted AI. 3.5x average ROI. Covers AI benefits, cost reduction (35-45%), customer experience, predictive analytics, and implementation strategies.",
    keywords: [
      "AI integration",
      "business transformation",
      "2026",
      "ROI",
      "automation",
      "implementation",
    ],
    path: "/blog/ai-integration-business-transformation-2026",
    icon: "📝",
  },
  {
    id: "blog/nextjs-15-performance-optimization",
    title: "Next.js 15 Performance Optimization Guide 2026",
    type: "blog",
    summary:
      "Next.js 15 Server Components, streaming, caching strategies, image optimization, font optimization, code splitting. Achieve perfect Lighthouse scores.",
    keywords: [
      "Next.js 15",
      "performance",
      "optimization",
      "Lighthouse",
      "Core Web Vitals",
      "React",
    ],
    path: "/blog/nextjs-15-performance-optimization-guide",
    icon: "📝",
  },
  {
    id: "blog/custom-erp-vs-off-shelf",
    title: "Custom ERP vs Off-the-Shelf Software 2026",
    type: "blog",
    summary:
      "Cost comparison: Off-the-shelf ₹10-38L first year vs custom ₹17-55L. Long-term custom is cheaper. Decision framework and manufacturing case study.",
    keywords: [
      "ERP",
      "custom software",
      "off-the-shelf",
      "cost comparison",
      "SAP",
      "Oracle",
      "TCO",
    ],
    path: "/blog/custom-erp-vs-off-shelf-software-2026",
    icon: "📝",
  },
  {
    id: "blog/react-19-server-components",
    title: "React 19 Server Components Deep Dive",
    type: "blog",
    summary:
      "React 19 Server Components render on server, zero JS bundle. Bundle size reduced 73% (450KB → 120KB). Time to Interactive 66% faster. Best practices and pitfalls.",
    keywords: [
      "React 19",
      "Server Components",
      "RSC",
      "performance",
      "bundle size",
      "SSR",
    ],
    path: "/blog/react-19-server-components-deep-dive",
    icon: "📝",
  },
  {
    id: "blog/cybersecurity-best-practices-2026",
    title: "Cybersecurity Best Practices 2026",
    type: "blog",
    summary:
      "38% increase in cyber attacks. MFA, JWT, encryption, input validation, rate limiting, OWASP Top 10, GDPR/DPDPA compliance. Average breach cost ₹17 crores.",
    keywords: [
      "cybersecurity",
      "security",
      "MFA",
      "OWASP",
      "GDPR",
      "DPDPA",
      "encryption",
    ],
    path: "/blog/cybersecurity-best-practices-2026",
    icon: "📝",
  },
  {
    id: "blog/mobile-app-development-trends-2026",
    title: "Mobile App Development Trends 2026",
    type: "blog",
    summary:
      "AI-powered apps, cross-platform (React Native, Flutter), 5G, super apps, app clips, blockchain, wearables, voice-first. Cost breakdown for Indian market.",
    keywords: [
      "mobile",
      "trends",
      "2026",
      "React Native",
      "Flutter",
      "AI",
      "5G",
      "ASO",
    ],
    path: "/blog/mobile-app-development-trends-2026",
    icon: "📝",
  },
  {
    id: "blog/custom-ai-integration-services",
    title: "Custom AI Integration: Deploying Autonomous AI Agents",
    type: "blog",
    summary:
      "Build agentic systems that run 24/7. Data extraction, automated DB sync, RAG with LangChain/Pinecone. Web automation, LLM agents, enterprise AI integration.",
    keywords: [
      "AI agents",
      "autonomous",
      "RAG",
      "LangChain",
      "automation",
      "web scraping",
    ],
    path: "/blog/custom-ai-integration-services",
    icon: "📝",
  },
  {
    id: "blog/saas-product-development-services",
    title: "SaaS Product Development with Next.js",
    type: "blog",
    summary:
      "Build scalable multi-tenant SaaS platforms with Next.js, Stripe billing, PostgreSQL optimization, serverless architecture. Serving USA, Germany, and global clients.",
    keywords: [
      "SaaS",
      "Next.js",
      "Stripe",
      "multi-tenant",
      "billing",
      "PostgreSQL",
    ],
    path: "/blog/saas-product-development-services",
    icon: "📝",
  },
  {
    id: "blog/custom-enterprise-software-development",
    title: "Custom Enterprise Software & Microservices",
    type: "blog",
    summary:
      "Custom enterprise software, ERP/CRM engineering, microservices architecture. RBAC, automated workflows, resilient microservices. Go, Next.js, PostgreSQL.",
    keywords: [
      "enterprise",
      "microservices",
      "ERP",
      "CRM",
      "RBAC",
      "Go",
      "Next.js",
    ],
    path: "/blog/custom-enterprise-software-development",
    icon: "📝",
  },
  {
    id: "blog/prompt-engineering-ai-specialist",
    title: "Beyond the Chatbot: Prompt Engineering for SaaS",
    type: "blog",
    summary:
      "Chain-of-Thought prompting, few-shot learning, system role definition. Building prompt libraries for AI operations. Advanced prompt engineering techniques.",
    keywords: [
      "prompt engineering",
      "AI",
      "ChatGPT",
      "chain-of-thought",
      "system prompts",
    ],
    path: "/blog/beyond-the-chatbot-prompt-engineering-for-saas-founders",
    icon: "📝",
  },
  {
    id: "blog/ai-pilot-engineer-workflow",
    title: "How I Use GPT-4o, Claude 3.5, and Agentic Systems",
    type: "blog",
    summary:
      "Professional AI stack: Claude 3.5 for architecture, GPT-4o for NLP prototyping, Midjourney/DALL-E for design. Building agentic workflows with LangChain.",
    keywords: [
      "GPT-4o",
      "Claude 3.5",
      "agentic",
      "workflow",
      "LangChain",
      "AI stack",
    ],
    path: "/blog/the-workflow-of-an-ai-pilot-engineer",
    icon: "📝",
  },
  {
    id: "blog/groq-lpu-ai-speed",
    title: "Groq LPU: Ultra-Fast AI Inference for Real-Time Apps",
    type: "blog",
    summary:
      "Groq LPU achieves 500+ tokens/second. Sub-second response times for chatbots. Cost-effective for high-volume agentic workflows. OpenAI-compatible APIs.",
    keywords: ["Groq", "LPU", "fast inference", "AI speed", "real-time", "chatbot"],
    path: "/blog/groq-lpu-the-future-of-ai-inference-speed",
    icon: "📝",
  },
  {
    id: "blog/best-it-company-gota-ahmedabad",
    title: "Best IT Company in Gota, Ahmedabad",
    type: "blog",
    summary:
      "DevFlow Technology is the leading IT company in Gota, Ahmedabad. Next.js, React, Node.js, Postgres custom development. 100/100 Lighthouse scores. GEO/AEO optimization.",
    keywords: [
      "IT company",
      "Gota",
      "Ahmedabad",
      "Next.js",
      "development",
      "SEO",
    ],
    path: "/blog/best-it-company-gota-ahmedabad-devflow-technology",
    icon: "📝",
  },
  {
    id: "blog/what-is-a-prompt-architect",
    title: "What is a Prompt Architect?",
    type: "blog",
    summary:
      "Prompt Architect defines system instructions for 100% accuracy. Chain-of-Thought, few-shot prompting, system role definition. Building prompt libraries for AI operations.",
    keywords: [
      "prompt architect",
      "AI",
      "prompt engineering",
      "chain-of-thought",
      "system design",
    ],
    path: "/blog/what-is-a-prompt-architect-ahmedabad",
    icon: "📝",
  },
  // ─── HIGH-INTENT COMPARISONS ──────────────────────────────────────────
  {
    id: "compare/datadog-vs-new-relic",
    title: "Datadog vs. New Relic vs. Dynatrace APM Comparison",
    type: "page",
    summary:
      "Detailed technical and pricing comparison between Datadog, New Relic, and Dynatrace for enterprise application monitoring, log management, and cloud observability.",
    keywords: [
      "Datadog vs New Relic",
      "New Relic vs Dynatrace",
      "APM comparison",
      "observability pricing",
      "cloud monitoring",
    ],
    path: "/compare/datadog-vs-new-relic",
    icon: "⚖️",
  },
  {
    id: "compare/dedicated-team-vs-in-house-hiring",
    title: "Dedicated Development Team vs. In-House Hiring",
    type: "page",
    summary:
      "Compare total cost of ownership, hiring timeline, and operational flexibility of dedicated software engineering teams vs internal hiring.",
    keywords: [
      "Managed IT Services vs In-House",
      "dedicated development team",
      "in-house software hiring",
      "offshore software engineering",
    ],
    path: "/compare/dedicated-team-vs-in-house-hiring",
    icon: "⚖️",
  },
  // ─── HIGH-CPC SEO CLUSTER ARTICLES ────────────────────────────────────
  {
    id: "blog/generative-ai-implementation-services",
    title: "Generative AI Implementation Services: Enterprise Roadmap",
    type: "blog",
    summary:
      "Complete guide to Generative AI Implementation Services. RAG pipelines, autonomous AI agents, LLM latency optimization, and custom enterprise AI integrations.",
    keywords: [
      "Generative AI Implementation Services",
      "AI and Data Analytics Services",
      "enterprise AI",
      "RAG architecture",
      "AI agents",
    ],
    path: "/blog/generative-ai-implementation-services",
    icon: "🤖",
  },
  {
    id: "blog/monolith-to-microservices-modernization",
    title: "Application Modernization Services: Monolith to Microservices",
    type: "blog",
    summary:
      "Application Modernization Services guide on migrating legacy enterprise monoliths to modular Next.js and Node.js microservices using the Strangler Fig pattern.",
    keywords: [
      "Application Modernization Services",
      "Microservices Consulting",
      "Serverless Architecture Consulting",
      "legacy migration",
    ],
    path: "/blog/monolith-to-microservices-modernization",
    icon: "🏗️",
  },
  {
    id: "blog/hipaa-compliant-cloud-migration",
    title: "HIPAA-Compliant Healthcare Cloud Migration",
    type: "blog",
    summary:
      "Technical framework for HIPAA-compliant healthcare cloud migration. Architecting secure EHR software, hospital portals, and encrypted medical databases.",
    keywords: [
      "Cloud Migration Services Healthcare",
      "HIPAA Compliance Consulting",
      "Digital Transformation Healthcare",
      "EHR cloud migration",
    ],
    path: "/blog/hipaa-compliant-cloud-migration",
    icon: "🏥",
  },
  {
    id: "blog/cloud-cost-optimization-finops",
    title: "7 Cloud Cost Optimization Strategies (FinOps)",
    type: "blog",
    summary:
      "Actionable Cloud Cost Optimization strategies to cut AWS, Azure, and database spend by 45%. Database indexing, Redis caching, and serverless cost optimization.",
    keywords: [
      "Cloud Cost Optimization Strategies",
      "We're Charged Too Much For Cloud",
      "Cloud FinOps Consulting",
      "AWS cost reduction",
    ],
    path: "/blog/cloud-cost-optimization-finops",
    icon: "📉",
  },
  {
    id: "blog/best-it-companies-ahmedabad-selection-guide",
    title: "Top Software & IT Consulting Companies in Ahmedabad Selection Guide",
    type: "blog",
    summary:
      "How to evaluate and hire the best software development and IT consulting companies in Ahmedabad. Comprehensive vetting checklist for technical founders.",
    keywords: [
      "IT Consulting Firm Ahmedabad",
      "Hire IT Consultant Near Me",
      "Managed Services Provider Local",
      "software development Ahmedabad",
    ],
    path: "/blog/best-it-companies-ahmedabad-selection-guide",
    icon: "🏢",
  },
  {
    id: "blog/generative-ai-enterprise-implementation",
    title: "Generative Ai Enterprise Implementation: Enterprise Architecture & Implementation Guide",
    type: "blog",
    summary: "A technical engineering blueprint for generative ai enterprise implementation: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Generative Ai Enterprise Implementation",
      "Generative Ai Enterprise Implementation guide",
      "enterprise Generative Ai Enterprise Implementation",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/generative-ai-enterprise-implementation",
    icon: "📝",
  },
  {
    id: "blog/mit-study-generative-ai-enterprise-implementation",
    title: "Mit Study Generative Ai Enterprise Implementation: Enterprise Architecture & Implementation Guide",
    type: "blog",
    summary: "A technical engineering blueprint for mit study generative ai enterprise implementation: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Mit Study Generative Ai Enterprise Implementation",
      "Mit Study Generative Ai Enterprise Implementation guide",
      "enterprise Mit Study Generative Ai Enterprise Implementation",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/mit-study-generative-ai-enterprise-implementation",
    icon: "📝",
  },
  {
    id: "blog/postgresql-multi-tenant-database-architecture",
    title: "Postgresql Multi-Tenant Database Architecture: Enterprise Architecture & Implementation Guide",
    type: "blog",
    summary: "A technical engineering blueprint for postgresql multi-tenant database architecture: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Postgresql Multi-Tenant Database Architecture",
      "Postgresql Multi-Tenant Database Architecture guide",
      "enterprise Postgresql Multi-Tenant Database Architecture",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/postgresql-multi-tenant-database-architecture",
    icon: "📝",
  },
  {
    id: "blog/ai-implementation-process",
    title: "Ai Implementation Process: Enterprise Architecture & Implementation Guide",
    type: "blog",
    summary: "A technical engineering blueprint for ai implementation process: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai Implementation Process",
      "Ai Implementation Process guide",
      "enterprise Ai Implementation Process",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/ai-implementation-process",
    icon: "📝",
  },
  {
    id: "blog/ai-implementation-ideas",
    title: "Ai Implementation Ideas: Enterprise Architecture & Implementation Guide",
    type: "blog",
    summary: "A technical engineering blueprint for ai implementation ideas: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai Implementation Ideas",
      "Ai Implementation Ideas guide",
      "enterprise Ai Implementation Ideas",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/ai-implementation-ideas",
    icon: "📝",
  },
  {
    id: "blog/rag-vs-fine-tuning-enterprise",
    title: "Rag Vs Fine Tuning Enterprise: In-Depth Technical & Cost Comparison (2026)",
    type: "blog",
    summary: "A technical engineering blueprint for rag vs fine tuning enterprise: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Rag Vs Fine Tuning Enterprise",
      "Rag Vs Fine Tuning Enterprise guide",
      "enterprise Rag Vs Fine Tuning Enterprise",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/rag-vs-fine-tuning-enterprise",
    icon: "📝",
  },

  {
    id: "blog/best-software-development-companies",
    title: "Best Software Development Companies: 2026 Enterprise Buyer's & Evaluation Guide",
    type: "blog",
    summary: "An objective 8-point evaluation rubric for selecting top software development partners. Includes IP security, engineering benchmarks, pricing models, and tech stack criteria.",
    keywords: [
      "best software development companies",
      "software development company evaluation",
      "enterprise software agency",
      "top engineering partners",
      "custom software development",
      "DevFlow technology",
      "software development companies list"
    ],
    path: "/blog/best-software-development-companies",
    icon: "📝",
  },
  {
    id: "blog/ai-software-development-companies",
    title: "Top AI Software Development Companies: Architectural Capabilities & Selection Framework",
    type: "blog",
    summary: "How to evaluate AI software development companies in 2026. Covers RAG vs fine-tuning, vector database architecture, enterprise LLM security, and sub-second inference SLAs.",
    keywords: [
      "ai software development companies",
      "enterprise AI development",
      "LLM architecture",
      "RAG vs Fine-tuning",
      "AI engineering agency",
      "DevFlow technology",
      "ai software development"
    ],
    path: "/blog/ai-software-development-companies",
    icon: "📝",
  },
  {
    id: "blog/custom-software-development-companies",
    title: "Custom Software Development Companies: How to Evaluate IP Ownership, Tech Stacks & ROI",
    type: "blog",
    summary: "Why off-the-shelf SaaS creates per-seat vendor tax. A technical breakdown of custom software development: 100% IP ownership, microservices architecture, and long-term cost ROI.",
    keywords: [
      "custom software development companies",
      "custom software ROI",
      "100% IP ownership",
      "decoupled software architecture",
      "DevFlow technology",
      "custom software engineering"
    ],
    path: "/blog/custom-software-development-companies",
    icon: "📝",
  },
  {
    id: "blog/software-development-companies-list",
    title: "Software Development Companies List: 2026 Comprehensive Comparison & Selection Checklist",
    type: "blog",
    summary: "A curated taxonomy and evaluation checklist for software development companies. Analyze boutique agencies, enterprise integrators, nearshore partners, and offshore teams.",
    keywords: [
      "software development companies list",
      "software agency directory",
      "vendor vetting checklist",
      "engineering agency comparison",
      "DevFlow technology"
    ],
    path: "/blog/software-development-companies-list",
    icon: "📝",
  },
  {
    id: "blog/software-development-companies-australia",
    title: "Software Development Companies in Australia: Nearshore & Offshore Engagement Models",
    type: "blog",
    summary: "How Australian businesses leverage hybrid nearshore/offshore engineering models. Timezone alignment (AEST/AWST), IP protection under Australian law, and cost structures.",
    keywords: [
      "software development companies australia",
      "software engineering sydney melbourne",
      "offshore development australia",
      "DevFlow technology",
      "software development australia"
    ],
    path: "/blog/software-development-companies-australia",
    icon: "📝",
  },
  {
    id: "blog/software-development-companies-uk",
    title: "Software Development Companies in the UK: Tech Talent, Compliance & Cost Structures",
    type: "blog",
    summary: "Navigating software development for UK enterprises. Balancing London tech hub rates with high-velocity UK-India hybrid engineering teams, GDPR compliance, and FCA standards.",
    keywords: [
      "software development companies uk",
      "software development london",
      "UK software agency",
      "GDPR compliant software development",
      "DevFlow technology",
      "software development companies in uk"
    ],
    path: "/blog/software-development-companies-uk",
    icon: "📝",
  },
  {
    id: "blog/software-development-companies-in-india",
    title: "Software Development Companies in India: Engineering Quality, Timezone & Vendor Selection Guide",
    type: "blog",
    summary: "A transparent engineering guide to hiring software development companies in India. Tier-1 engineering talent, async communication protocols, code quality audits, and pricing.",
    keywords: [
      "software development companies in india",
      "offshore development india",
      "hire developers india",
      "DevFlow technology",
      "software development ahmedabad",
      "best software development companies in india"
    ],
    path: "/blog/software-development-companies-in-india",
    icon: "📝",
  },
  {
    id: "blog/healthcare-software-development-companies",
    title: "Healthcare Software Development Companies: HIPAA, FHIR Interoperability & Security Architecture",
    type: "blog",
    summary: "Technical architectural requirements for healthcare software development. HIPAA compliance, FHIR/HL7 API integrations, zero-trust PHI encryption, and EHR interoperability.",
    keywords: [
      "healthcare software development companies",
      "HIPAA compliant software",
      "FHIR API integration",
      "EHR software development",
      "DevFlow technology",
      "healthcare software engineering"
    ],
    path: "/blog/healthcare-software-development-companies",
    icon: "📝",
  },
  {
    id: "blog/financial-software-development-companies",
    title: "Financial & Banking Software Development Companies: Sub-Millisecond Trading & PCI-DSS Compliance",
    type: "blog",
    summary: "Engineering high-throughput, fault-tolerant financial software. PCI-DSS Level 1 compliance, sub-millisecond API response, fraud detection engine architecture, and multi-region failover.",
    keywords: [
      "financial software development companies",
      "banking software development",
      "PCI-DSS compliance",
      "fintech engineering",
      "DevFlow technology",
      "fintech software development"
    ],
    path: "/blog/financial-software-development-companies",
    icon: "📝",
  },
  {
    id: "blog/software-development-companies-in-usa",
    title: "Software Development Companies in the USA: Domestic vs Offshore Hybrid Engineering",
    type: "blog",
    summary: "Strategic blueprint for US enterprises choosing software development companies. Balancing domestic US onshore project leadership with high-velocity offshore engineering execution.",
    keywords: [
      "software development companies in usa",
      "US software development agency",
      "onshore offshore hybrid development",
      "DevFlow technology",
      "software development companies in us",
      "best software development companies in usa"
    ],
    path: "/blog/software-development-companies-in-usa",
    icon: "📝",
  },
  {
    id: "blog/ai-implementation-examples",
    title: "Ai Implementation Examples: Enterprise Architecture & Implementation Guide",
    type: "blog",
    summary: "A technical engineering blueprint for ai implementation examples: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai Implementation Examples",
      "Ai Implementation Examples guide",
      "enterprise Ai Implementation Examples",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/ai-implementation-examples",
    icon: "📝",
  },

  {
    id: "blog/best-companies-for-seo",
    title: "Best Companies for SEO: 2026 Enterprise Evaluation & Vendor Selection Guide",
    type: "blog",
    summary: "An objective 8-point evaluation rubric for selecting top SEO and AEO agencies. Includes Core Web Vitals, JSON-LD schemas, AI bot indexing, and reporting transparency.",
    keywords: [
      "best companies for seo",
      "seo vendor evaluation",
      "top seo agencies",
      "enterprise seo partner",
      "DevFlow technology",
      "reputable seo companies",
      "recommended seo companies"
    ],
    path: "/blog/best-companies-for-seo",
    icon: "📝",
  },
  {
    id: "blog/seo-news-today-2026-algorithm-updates",
    title: "SEO News Today: 2026 AI Search Engine & Google Core Algorithm Updates",
    type: "blog",
    summary: "Explosive shift in search: how Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are reshaping Google Core updates and AI bot crawlers.",
    keywords: [
      "seo news today",
      "seo news",
      "google algorithm updates 2026",
      "AEO",
      "GEO",
      "AI bot indexing",
      "DevFlow technology",
      "search engine news"
    ],
    path: "/blog/seo-news-today-2026-algorithm-updates",
    icon: "📝",
  },
  {
    id: "blog/seo-services-companies",
    title: "SEO Services Companies: Technical SEO, AEO & Programmatic Infrastructure Guide",
    type: "blog",
    summary: "What to expect from modern SEO services companies. Technical SSR rendering, structured JSON-LD schemas, sitemap sanitization, and crawl budget optimization.",
    keywords: [
      "seo services companies",
      "seo service companies",
      "technical seo services",
      "programmatic seo",
      "DevFlow technology",
      "website seo companies"
    ],
    path: "/blog/seo-services-companies",
    icon: "📝",
  },
  {
    id: "blog/google-seo-companies",
    title: "Google SEO Companies: Technical Core Web Vitals, Crawl Budget & Indexing Framework",
    type: "blog",
    summary: "How Google SEO companies optimize complex web apps. Deep dive into Interaction to Next Paint (INP), LCP, CLS, Googlebot SSR hydration, and server caching.",
    keywords: [
      "google seo companies",
      "core web vitals optimization",
      "googlebot rendering",
      "technical google seo",
      "DevFlow technology",
      "google seo agency"
    ],
    path: "/blog/google-seo-companies",
    icon: "📝",
  },
  {
    id: "blog/website-seo-companies",
    title: "Website SEO Companies: Next.js SSR, JSON-LD Schema & Performance Audit",
    type: "blog",
    summary: "Architecting high-ranking websites. How specialized website SEO companies optimize Next.js App Router, canonical headers, CSP tracker allowlisting, and meta tags.",
    keywords: [
      "website seo companies",
      "nextjs seo",
      "website seo audit",
      "json ld schema",
      "DevFlow technology",
      "organic seo companies"
    ],
    path: "/blog/website-seo-companies",
    icon: "📝",
  },
  {
    id: "blog/seo-companies-india",
    title: "SEO Companies in India: Technical SEO Engineering & Global Search Strategy",
    type: "blog",
    summary: "Why global brands partner with technical SEO companies in India. Programmatic landing page architectures, international hreflang tags, and high-ROI execution.",
    keywords: [
      "seo companies india",
      "seo companies in india",
      "offshore seo india",
      "technical seo india",
      "DevFlow technology",
      "seo company ahmedabad"
    ],
    path: "/blog/seo-companies-india",
    icon: "📝",
  },
  {
    id: "blog/enterprise-seo-companies",
    title: "Enterprise SEO Companies: Programmatic Rendering & Multi-Region Hreflang Architecture",
    type: "blog",
    summary: "Scaling search for enterprise platforms. How enterprise SEO companies manage million-page architectures, edge rendering, dynamic sitemaps, and multi-lingual SEO.",
    keywords: [
      "enterprise seo companies",
      "top enterprise seo companies",
      "programmatic seo architecture",
      "hreflang enterprise",
      "DevFlow technology",
      "seo for enterprise companies"
    ],
    path: "/blog/enterprise-seo-companies",
    icon: "📝",
  },
  {
    id: "blog/medical-seo-companies",
    title: "Medical & Healthcare SEO Companies: YMYL, E-E-A-T & Patient Privacy Compliance",
    type: "blog",
    summary: "Navigating search for healthcare and medical providers. YMYL quality guidelines, author credentials, MedicalWebPage schemas, and HIPAA privacy compliance.",
    keywords: [
      "medical seo companies",
      "healthcare seo",
      "YMYL seo",
      "HIPAA compliant seo",
      "E-E-A-T medical",
      "DevFlow technology"
    ],
    path: "/blog/medical-seo-companies",
    icon: "📝",
  },
  {
    id: "blog/seo-for-insurance-companies",
    title: "SEO for Insurance Companies: High-Intent Lead Acquisition & Technical Architecture",
    type: "blog",
    summary: "Capturing high-converting insurance search traffic. Localized state quote engines, trust signal schemas, financial YMYL compliance, and site performance.",
    keywords: [
      "seo for insurance companies",
      "insurance seo strategy",
      "financial YMYL seo",
      "insurance landing page seo",
      "DevFlow technology"
    ],
    path: "/blog/seo-for-insurance-companies",
    icon: "📝",
  },
  {
    id: "blog/seo-companies-london",
    title: "SEO Companies in London: UK Market Search Strategy & Technical Audit Framework",
    type: "blog",
    summary: "Navigating search optimization for UK enterprises. London market rate benchmarks, UK GDPR data privacy, local NAP consistency, and hybrid UK-India engineering.",
    keywords: [
      "seo companies london",
      "london seo companies",
      "best seo companies london",
      "uk seo agency",
      "DevFlow technology",
      "top seo companies london"
    ],
    path: "/blog/seo-companies-london",
    icon: "📝",
  },
  {
    id: "blog/artificial-intelligence-implementation-examples",
    title: "Artificial Intelligence Implementation Examples: Enterprise Architecture & Implementation Guide",
    type: "blog",
    summary: "A technical engineering blueprint for artificial intelligence implementation examples: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Artificial Intelligence Implementation Examples",
      "Artificial Intelligence Implementation Examples guide",
      "enterprise Artificial Intelligence Implementation Examples",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/artificial-intelligence-implementation-examples",
    icon: "📝",
  },
  {
    id: "blog/ai-agents-vs-chatbots",
    title: "Ai Agents Vs Chatbots: In-Depth Technical & Cost Comparison (2026)",
    type: "blog",
    summary: "A technical engineering blueprint for ai agents vs chatbots: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai Agents Vs Chatbots",
      "Ai Agents Vs Chatbots guide",
      "enterprise Ai Agents Vs Chatbots",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/ai-agents-vs-chatbots",
    icon: "📝",
  },
  {
    id: "blog/ai-agent-vs-chat-bot",
    title: "Ai Agent Vs Chat Bot: In-Depth Technical & Cost Comparison (2026)",
    type: "blog",
    summary: "A technical engineering blueprint for ai agent vs chat bot: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai Agent Vs Chat Bot",
      "Ai Agent Vs Chat Bot guide",
      "enterprise Ai Agent Vs Chat Bot",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/ai-agent-vs-chat-bot",
    icon: "📝",
  },
  {
    id: "blog/ai-agent-vs-chatbot-difference",
    title: "Ai Agent Vs Chatbot Difference: In-Depth Technical & Cost Comparison (2026)",
    type: "blog",
    summary: "A technical engineering blueprint for ai agent vs chatbot difference: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai Agent Vs Chatbot Difference",
      "Ai Agent Vs Chatbot Difference guide",
      "enterprise Ai Agent Vs Chatbot Difference",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/ai-agent-vs-chatbot-difference",
    icon: "📝",
  },
  {
    id: "blog/aiagents-vs-traditionalchatbots",
    title: "Ai.Agents Vs Traditional.Chatbots: In-Depth Technical & Cost Comparison (2026)",
    type: "blog",
    summary: "A technical engineering blueprint for ai.agents vs traditional.chatbots: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai.Agents Vs Traditional.Chatbots",
      "Ai.Agents Vs Traditional.Chatbots guide",
      "enterprise Ai.Agents Vs Traditional.Chatbots",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/aiagents-vs-traditionalchatbots",
    icon: "📝",
  },
  {
    id: "blog/ai-agent-vs-llm-chatbot",
    title: "Ai Agent Vs Llm Chatbot: In-Depth Technical & Cost Comparison (2026)",
    type: "blog",
    summary: "A technical engineering blueprint for ai agent vs llm chatbot: architecture patterns, performance benchmarks, cost ROI, and production best practices.",
    keywords: [
      "Ai Agent Vs Llm Chatbot",
      "Ai Agent Vs Llm Chatbot guide",
      "enterprise Ai Agent Vs Llm Chatbot",
      "custom software development",
      "DevFlow technology",
      "enterprise architecture"
],
    path: "/blog/ai-agent-vs-llm-chatbot",
    icon: "📝",
  },
];

/**
 * Search the content index for entries matching a query.
 * Uses simple keyword/title/summary matching.
 */
export function searchContentIndex(
  query: string,
  limit: number = 5
): ContentEntry[] {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) return [];

  // Score each entry by relevance
  const scored = siteContent.map((entry) => {
    let score = 0;
    const title = entry.title.toLowerCase();
    const summary = entry.summary.toLowerCase();
    const keywords = entry.keywords.map((k) => k.toLowerCase());
    const details = (entry.details || "").toLowerCase();
    const searchable = `${title} ${summary} ${details} ${keywords.join(" ")}`;

    // Exact match in title is highest priority
    if (title.includes(lowerQuery)) score += 10;
    // Match in keywords
    if (keywords.some((k) => k.includes(lowerQuery))) score += 5;
    // Match in summary
    if (summary.includes(lowerQuery)) score += 3;
    // Match in details
    if (details.includes(lowerQuery)) score += 2;

    // Bonus for matching individual words
    const queryWords = lowerQuery.split(/\s+/);
    for (const word of queryWords) {
      if (word.length < 2) continue;
      if (searchable.includes(word)) score += 1;
    }

    // Boost for specific content types
    if (entry.type === "service" && summary.includes(lowerQuery)) score += 2;
    if (entry.type === "project" && summary.includes(lowerQuery)) score += 1;

    return { entry, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry);
}



/**
 * Get content entries by type.
 */
export function getContentByType(
  type: ContentEntry["type"]
): ContentEntry[] {
  return siteContent.filter((entry) => entry.type === type);
}


