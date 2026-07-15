export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  color: string;
  accent: string;
  url: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const projects: Project[] = [
  {
    "slug": "medicare-ai-system",
    "title": "Medicare AI System",
    "category": "AI & Automation",
    "description": "Engineered an AI-driven automated booking and hospital operations dashboard.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Manual hospital queues and patient scheduling administrative bottlenecks. Solution: Engineered an AI-driven automated booking and hospital operations dashboard.",
    "tech": [
      "React.js",
      "Node.js",
      "AI",
      "SaaS"
    ],
    "color": "from-devflow-green/20 to-devflow-green/5",
    "accent": "#CCFF00",
    "url": "https://devflow.co.in",
    "challenge": "Manual hospital queues and patient scheduling administrative bottlenecks.",
    "solution": "Engineered an AI-driven automated booking and hospital operations dashboard.",
    "results": [
      "API response times reduced to 240ms, saving staff 15+ hours/week."
    ]
  },
  {
    "slug": "real-estate-platform",
    "title": "Real Estate Platform",
    "category": "SaaS & Web Apps",
    "description": "Designed a database system powered by Cloudflare D1 and static assets.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: High latency and slow rendering times on real estate listing pages. Solution: Designed a database system powered by Cloudflare D1 and static assets.",
    "tech": [
      "HTML5",
      "JavaScript",
      "Cloudflare D1"
    ],
    "color": "from-blue-500/20 to-blue-500/5",
    "accent": "#3b82f6",
    "url": "https://devflow.co.in",
    "challenge": "High latency and slow rendering times on real estate listing pages.",
    "solution": "Designed a database system powered by Cloudflare D1 and static assets.",
    "results": [
      "Sub-second page load times (LCP < 0.95s), driving client acquisition."
    ]
  },
  {
    "slug": "places-data-scraper",
    "title": "Places Data Scraper",
    "category": "AI & Automation",
    "description": "Custom Puppeteer scraping automation with multi-threaded node scripts.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Inaccurate, time-consuming lead extraction from map directories. Solution: Custom Puppeteer scraping automation with multi-threaded node scripts.",
    "tech": [
      "Node.js",
      "Automation",
      "Puppeteer",
      "Logic"
    ],
    "color": "from-devflow-green/20 to-devflow-green/5",
    "accent": "#CCFF00",
    "url": "https://devflow.co.in",
    "challenge": "Inaccurate, time-consuming lead extraction from map directories.",
    "solution": "Custom Puppeteer scraping automation with multi-threaded node scripts.",
    "results": [
      "10M+ local business records processed; 300% search map visibility increase."
    ]
  },
  {
    "slug": "german-logistics-portal",
    "title": "German Logistics Portal",
    "category": "SaaS & Web Apps",
    "description": "Dynamic tracking portal featuring real-time custom declarations.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Route planning errors and delayed custom declaration flows. Solution: Dynamic tracking portal featuring real-time custom declarations.",
    "tech": [
      "React.js",
      "Django",
      "PostgreSQL",
      "Docker"
    ],
    "color": "from-blue-500/20 to-blue-500/5",
    "accent": "#3b82f6",
    "url": "https://devflow.co.in",
    "challenge": "Route planning errors and delayed custom declaration flows.",
    "solution": "Dynamic tracking portal featuring real-time custom declarations.",
    "results": [
      "Average logistics dispatch delay reduced by 35% across Europe."
    ]
  },
  {
    "slug": "ai-resume-parser-saas",
    "title": "AI Resume Parser (SaaS)",
    "category": "AI & Automation",
    "description": "Parser powered by Gemini 1.5 Pro to parse and match candidate profiles.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Manual filtering of thousands of resumes against complex job roles. Solution: Parser powered by Gemini 1.5 Pro to parse and match candidate profiles.",
    "tech": [
      "Next.js",
      "Gemini API",
      "Pinecone",
      "SaaS"
    ],
    "color": "from-devflow-green/20 to-devflow-green/5",
    "accent": "#CCFF00",
    "url": "https://devflow.co.in",
    "challenge": "Manual filtering of thousands of resumes against complex job roles.",
    "solution": "Parser powered by Gemini 1.5 Pro to parse and match candidate profiles.",
    "results": [
      "Increased recruitment processing speed by 80%."
    ]
  },
  {
    "slug": "nippon-e-commerce",
    "title": "Nippon E-Commerce",
    "category": "SaaS & Web Apps",
    "description": "Next.js headless frontend integration using GraphQL and localized translations.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: High bounce rate on slow-loading international Shopify checkouts. Solution: Next.js headless frontend integration using GraphQL and localized translations.",
    "tech": [
      "Next.js",
      "Shopify API",
      "Framer Motion",
      "GraphQL"
    ],
    "color": "from-blue-500/20 to-blue-500/5",
    "accent": "#3b82f6",
    "url": "https://devflow.co.in",
    "challenge": "High bounce rate on slow-loading international Shopify checkouts.",
    "solution": "Next.js headless frontend integration using GraphQL and localized translations.",
    "results": [
      "Mobile conversion rate increased by 22%."
    ]
  },
  {
    "slug": "apex-crm-system",
    "title": "Apex CRM System",
    "category": "Enterprise Systems",
    "description": "Developed an enterprise-grade Go and Next.js CRM system.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Scattered fleet route telemetry and tracking for driver dispatch. Solution: Developed an enterprise-grade Go and Next.js CRM system.",
    "tech": [
      "Next.js",
      "Go",
      "PostgreSQL",
      "Docker"
    ],
    "color": "from-orange-500/20 to-orange-500/5",
    "accent": "#f97316",
    "url": "https://devflow.co.in",
    "challenge": "Scattered fleet route telemetry and tracking for driver dispatch.",
    "solution": "Developed an enterprise-grade Go and Next.js CRM system.",
    "results": [
      "Zero dispatch downtime and 99.96% uptime for 120+ active employees."
    ]
  },
  {
    "slug": "autosync-db-crawler",
    "title": "AutoSync DB Crawler",
    "category": "AI & Automation",
    "description": "High-frequency web automation crawler powered by Puppeteer and Redis.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Catalog desynchronization between supplier and retail frontends. Solution: High-frequency web automation crawler powered by Puppeteer and Redis.",
    "tech": [
      "Node.js",
      "Redis",
      "MongoDB",
      "Puppeteer"
    ],
    "color": "from-devflow-green/20 to-devflow-green/5",
    "accent": "#CCFF00",
    "url": "https://devflow.co.in",
    "challenge": "Catalog desynchronization between supplier and retail frontends.",
    "solution": "High-frequency web automation crawler powered by Puppeteer and Redis.",
    "results": [
      "Processed 500,000+ daily catalog items with zero API blocks."
    ]
  },
  {
    "slug": "saas-billing-engine",
    "title": "SaaS Billing Engine",
    "category": "SaaS & Web Apps",
    "description": "Developed a billing engine with robust Stripe webhook handlers.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Complex tax logic and failed recurring payments for multi-tenant users. Solution: Developed a billing engine with robust Stripe webhook handlers.",
    "tech": [
      "React.js",
      "Express",
      "Stripe API",
      "Serverless"
    ],
    "color": "from-blue-500/20 to-blue-500/5",
    "accent": "#3b82f6",
    "url": "https://devflow.co.in",
    "challenge": "Complex tax logic and failed recurring payments for multi-tenant users.",
    "solution": "Developed a billing engine with robust Stripe webhook handlers.",
    "results": [
      "Reduced payment churn by 18% globally."
    ]
  },
  {
    "slug": "vassu-talks-landing-system",
    "title": "Vassu Talks Landing System",
    "category": "SEO & GEO Marketing",
    "description": "Static Next.js page architecture with edge caching.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: High traffic spike crashes during active ad campaigns. Solution: Static Next.js page architecture with edge caching.",
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SEO Ready"
    ],
    "color": "from-purple-500/20 to-purple-500/5",
    "accent": "#a855f7",
    "url": "https://devflow.co.in",
    "challenge": "High traffic spike crashes during active ad campaigns.",
    "solution": "Static Next.js page architecture with edge caching.",
    "results": [
      "Maintained 100% availability during 100k+ visitor spikes."
    ]
  },
  {
    "slug": "real-time-crypto-dashboard",
    "title": "Real-Time Crypto Dashboard",
    "category": "SaaS & Web Apps",
    "description": "Optimized rendering cycle with WebSocket compression.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Lag in rendering multi-exchange websocket price quotes. Solution: Optimized rendering cycle with WebSocket compression.",
    "tech": [
      "React",
      "Websockets",
      "TailwindCSS",
      "Node.js"
    ],
    "color": "from-blue-500/20 to-blue-500/5",
    "accent": "#3b82f6",
    "url": "https://devflow.co.in",
    "challenge": "Lag in rendering multi-exchange websocket price quotes.",
    "solution": "Optimized rendering cycle with WebSocket compression.",
    "results": [
      "Latency reduced to under 50ms for live ticker charts."
    ]
  },
  {
    "slug": "smart-parking-iot-system",
    "title": "Smart Parking IoT System",
    "category": "AI & Automation",
    "description": "Connected IoT hardware nodes to an MQTT broker and React dashboard.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Under-utilized parking spots due to lack of real-time status. Solution: Connected IoT hardware nodes to an MQTT broker and React dashboard.",
    "tech": [
      "Node.js",
      "MQTT",
      "React.js",
      "InfluxDB"
    ],
    "color": "from-devflow-green/20 to-devflow-green/5",
    "accent": "#CCFF00",
    "url": "https://devflow.co.in",
    "challenge": "Under-utilized parking spots due to lack of real-time status.",
    "solution": "Connected IoT hardware nodes to an MQTT broker and React dashboard.",
    "results": [
      "Spot vacancy visibility increased to 98% efficiency."
    ]
  },
  {
    "slug": "security-gate-app",
    "title": "Security Gate App",
    "category": "Mobile Apps",
    "description": "Developed visitor verification using Kotlin and Supabase db logs.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Vulnerable entry logs and slow verification for visitor access. Solution: Developed visitor verification using Kotlin and Supabase db logs.",
    "tech": [
      "Kotlin",
      "Supabase",
      "Firebase",
      "Security"
    ],
    "color": "from-indigo-500/20 to-indigo-500/5",
    "accent": "#6366f1",
    "url": "https://devflow.co.in",
    "challenge": "Vulnerable entry logs and slow verification for visitor access.",
    "solution": "Developed visitor verification using Kotlin and Supabase db logs.",
    "results": [
      "Visitor verification time reduced to under 8 seconds."
    ]
  },
  {
    "slug": "employee-system",
    "title": "Employee System",
    "category": "Enterprise Systems",
    "description": "MERN Stack with JWT Auth and optimized database indexing.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Unsecured REST endpoints and slow lookup operations for large teams. Solution: MERN Stack with JWT Auth and optimized database indexing.",
    "tech": [
      "MERN Stack",
      "JWT",
      "REST API",
      "Auth"
    ],
    "color": "from-orange-500/20 to-orange-500/5",
    "accent": "#f97316",
    "url": "https://devflow.co.in",
    "challenge": "Unsecured REST endpoints and slow lookup operations for large teams.",
    "solution": "MERN Stack with JWT Auth and optimized database indexing.",
    "results": [
      "Database query lookup speeds improved by 70%."
    ]
  },
  {
    "slug": "visa-consultancy",
    "title": "Visa Consultancy",
    "category": "SaaS & Web Apps",
    "description": "Secure document parsing portal with React and Node upload pipelines.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Delayed visa application processing and complex client document uploads. Solution: Secure document parsing portal with React and Node upload pipelines.",
    "tech": [
      "React.js",
      "Node.js",
      "Responsive UX"
    ],
    "color": "from-blue-500/20 to-blue-500/5",
    "accent": "#3b82f6",
    "url": "https://devflow.co.in",
    "challenge": "Delayed visa application processing and complex client document uploads.",
    "solution": "Secure document parsing portal with React and Node upload pipelines.",
    "results": [
      "Client onboarding time reduced by 40%."
    ]
  },
  {
    "slug": "erp-business-system",
    "title": "ERP Business System",
    "category": "Enterprise Systems",
    "description": "Custom ERP with MySQL and real-time backend API sync.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Inefficient internal inventory reconciliation. Solution: Custom ERP with MySQL and real-time backend API sync.",
    "tech": [
      "React.js",
      "Node.js",
      "MySQL",
      "ERP"
    ],
    "color": "from-orange-500/20 to-orange-500/5",
    "accent": "#f97316",
    "url": "https://devflow.co.in",
    "challenge": "Inefficient internal inventory reconciliation.",
    "solution": "Custom ERP with MySQL and real-time backend API sync.",
    "results": [
      "Inventory stock accuracy improved to 99.8%."
    ]
  },
  {
    "slug": "construction-tracker-erp",
    "title": "Construction Tracker ERP",
    "category": "Enterprise Systems",
    "description": "Developed expense tracking tool with real-time budget forecasting.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Lack of transparency in construction expense tracking. Solution: Developed expense tracking tool with real-time budget forecasting.",
    "tech": [
      "PHP",
      "XML",
      "MySQL",
      "Analytics"
    ],
    "color": "from-orange-500/20 to-orange-500/5",
    "accent": "#f97316",
    "url": "https://devflow.co.in",
    "challenge": "Lack of transparency in construction expense tracking.",
    "solution": "Developed expense tracking tool with real-time budget forecasting.",
    "results": [
      "Cost overruns reduced by 15% across projects."
    ]
  },
  {
    "slug": "rankautocheck-gmb-tool",
    "title": "RankAutoCheck (GMB Tool)",
    "category": "SEO & GEO Marketing",
    "description": "GMB automation tool with Python scraping and Google Search API nodes.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Tedious manual GMB rankings tracking for client campaigns. Solution: GMB automation tool with Python scraping and Google Search API nodes.",
    "tech": [
      "React.js",
      "Python",
      "MySQL",
      "Google API"
    ],
    "color": "from-purple-500/20 to-purple-500/5",
    "accent": "#a855f7",
    "url": "https://devflow.co.in",
    "challenge": "Tedious manual GMB rankings tracking for client campaigns.",
    "solution": "GMB automation tool with Python scraping and Google Search API nodes.",
    "results": [
      "Daily keyword ranking updates automated for 50+ locations."
    ]
  },
  {
    "slug": "vassu-infotech",
    "title": "Vassu Infotech",
    "category": "SEO & GEO Marketing",
    "description": "Complete layout optimization achieving an LCP of ~0.90s.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Poor mobile usability and low pagespeed scores. Solution: Complete layout optimization achieving an LCP of ~0.90s.",
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Performance"
    ],
    "color": "from-purple-500/20 to-purple-500/5",
    "accent": "#a855f7",
    "url": "https://devflow.co.in",
    "challenge": "Poor mobile usability and low pagespeed scores.",
    "solution": "Complete layout optimization achieving an LCP of ~0.90s.",
    "results": [
      "PageSpeed index score increased to 99/100."
    ]
  },
  {
    "slug": "future-realty-space",
    "title": "Future Realty Space",
    "category": "SEO & GEO Marketing",
    "description": "Developed an interactive lead capturing flow with PHP and JS.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Low visitor-to-lead conversion on real estate portal. Solution: Developed an interactive lead capturing flow with PHP and JS.",
    "tech": [
      "PHP",
      "JavaScript",
      "CSS3",
      "Real Estate"
    ],
    "color": "from-purple-500/20 to-purple-500/5",
    "accent": "#a855f7",
    "url": "https://devflow.co.in",
    "challenge": "Low visitor-to-lead conversion on real estate portal.",
    "solution": "Developed an interactive lead capturing flow with PHP and JS.",
    "results": [
      "Monthly leads increased by 28%."
    ]
  },
  {
    "slug": "core-audit-engine",
    "title": "Core Audit Engine",
    "category": "SEO & GEO Marketing",
    "description": "Automated Puppeteer crawler parsing schemas and page metrics.",
    "longDescription": "Developed to address key operational challenges, this project represents a custom solution. Problem: Tedious manual checks for client technical SEO audits. Solution: Automated Puppeteer crawler parsing schemas and page metrics.",
    "tech": [
      "Next.js",
      "Puppeteer",
      "JSON-LD",
      "Audit"
    ],
    "color": "from-purple-500/20 to-purple-500/5",
    "accent": "#a855f7",
    "url": "https://devflow.co.in",
    "challenge": "Tedious manual checks for client technical SEO audits.",
    "solution": "Automated Puppeteer crawler parsing schemas and page metrics.",
    "results": [
      "Audited 10,000+ pages instantly, boosting SEO workflow."
    ]
  }
];
