import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import StructuredData from "@/components/SEO/StructuredData";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingContact from "@/components/ui/FloatingContact";

// Dynamically import heavy components that are not in the initial viewport
// Note: layout is a Server Component, so ssr: false is not available
// These are still code-split into separate chunks for better caching
const PremiumCursor = dynamic(() => import("@/components/ui/PremiumCursor"));
const CookieBanner = dynamic(() => import("@/components/ui/CookieBanner"));

// Optimize fonts using next/font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Base URL for the site
const siteUrl = "https://devflow.co.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "DevFlow Technology | AI Agency & Web Development Company India",
    template: "%s | DevFlow Technology - IT Solutions",
  },
  description:
    "Top software development & AI agency in India. We build custom software, AI solutions, web & mobile apps, enterprise ERP, and cloud systems. Also offering digital marketing, SEO, PPC & branding. Your trusted technology partner.",
  keywords: [
    // ── Software Development ──────────────────────────────────
    "software development company",
    "software development services",
    "custom software development",
    "custom software development company",
    "enterprise software development",
    "enterprise software development company",
    "bespoke software development",
    "business software development",
    "software engineering company",
    "software engineering services",
    "custom business software development",
    "digital product development company",
    "software product development",
    "software product development company",
    "end to end software development",
    "custom application development",
    "business application development",
    "enterprise application development",
    "custom enterprise software",
    "agile software development company",
    "full cycle software development",

    // ── AI & Machine Learning ────────────────────────────────
    "AI development company",
    "AI software development company",
    "AI software development services",
    "artificial intelligence development company",
    "artificial intelligence solutions",
    "AI solutions for business",
    "business AI solutions",
    "enterprise AI development",
    "enterprise AI solutions",
    "generative AI development",
    "generative AI services",
    "LLM development company",
    "AI agent development",
    "AI automation services",
    "AI consulting company",
    "AI implementation services",
    "AI integration services",
    "machine learning development company",
    "machine learning services",
    "deep learning development",
    "computer vision development",
    "NLP development company",
    "predictive analytics solutions",
    "AI chatbot development",
    "enterprise chatbot development",
    "custom AI chatbot development",
    "voice AI development",
    "AI workflow automation",
    "AI business automation",
    "AI agency",
    "AI agency India",
    "AI solutions company",
    "AI development services",
    "machine learning agency",
    "AI consulting firm",
    "ChatGPT integration services",
    "AI automation company",
    "custom AI solutions",

    // ── Web Development ─────────────────────────────────────
    "web development agency",
    "web development company India",
    "website development company",
    "web development services",
    "custom web development",
    "enterprise web development",
    "enterprise web application development",
    "web application development",
    "web application development company",
    "custom web application development",
    "website development company",
    "website design and development",
    "business website development",
    "Next.js development company",
    "React development company",
    "Node.js development company",
    "MERN stack development",
    "full stack development company",
    "full stack web development agency",
    "progressive web app development",
    "responsive web development",
    "professional web development",
    "best web development company",
    "affordable web development",

    // ── Mobile App Development ──────────────────────────────
    "mobile app development company",
    "mobile app development services",
    "custom mobile app development",
    "iOS app development",
    "Android app development",
    "cross platform app development",
    "Flutter app development",
    "React Native development",
    "enterprise mobile app development",
    "business mobile applications",
    "app development agency",
    "custom iOS app development",
    "custom Android app development",
    "mobile application developers",
    "hire mobile app developers",

    // ── SaaS Development ────────────────────────────────────
    "SaaS development company",
    "SaaS application development",
    "SaaS software development",
    "SaaS product development",
    "custom SaaS development",
    "cloud SaaS development",
    "multi tenant SaaS development",
    "B2B SaaS development",
    "startup SaaS development",
    "enterprise SaaS solutions",

    // ── Enterprise & ERP ────────────────────────────────────
    "enterprise software solutions",
    "enterprise application development",
    "enterprise digital transformation",
    "enterprise technology solutions",
    "enterprise software consulting",
    "business process automation",
    "ERP development",
    "CRM development",
    "custom ERP software",
    "enterprise CRM solutions",
    "workflow automation software",
    "internal business software",
    "ERP development company",
    "enterprise software development",
    "custom ERP solutions",
    "ERP software India",
    "business management software",

    // ── Automation ──────────────────────────────────────────
    "digital transformation company",
    "business process automation",
    "workflow automation",
    "AI workflow automation",
    "robotic process automation",
    "RPA development",
    "automation software development",
    "intelligent process automation",
    "business automation company",
    "enterprise automation solutions",

    // ── Cloud & DevOps ──────────────────────────────────────
    "cloud application development",
    "cloud software development",
    "AWS development company",
    "Azure development company",
    "Google Cloud development",
    "DevOps consulting",
    "cloud migration services",
    "cloud infrastructure services",
    "microservices architecture",
    "containerized application development",
    "Kubernetes consulting",
    "Docker consulting",
    "cloud services company",
    "DevOps services India",
    "AWS consulting",

    // ── Startup Services ────────────────────────────────────
    "startup software development",
    "startup app development",
    "MVP development company",
    "MVP software development",
    "startup technology partner",
    "startup product development",
    "startup web development",
    "startup mobile app development",
    "build MVP",
    "rapid MVP development",
    "startup tech partner",

    // ── Staff Augmentation ──────────────────────────────────
    "hire software developers",
    "hire web developers",
    "hire mobile app developers",
    "hire AI developers",
    "dedicated software developers",
    "dedicated development team",
    "offshore software development",
    "offshore development company",
    "software outsourcing company",
    "outsource software development",
    "remote software developers",
    "IT staff augmentation",
    "development team extension",
    "hire dedicated developers",

    // ── IT Consulting ───────────────────────────────────────
    "technology consulting company",
    "IT consulting company",
    "digital transformation company",
    "technology partner",
    "strategic technology partner",
    "business technology solutions",
    "enterprise IT services",
    "managed software development",
    "business software solutions",
    "digital engineering company",
    "IT solutions provider",
    "technology company India",
    "IT consulting company",

    // ── SEO & Technical SEO ─────────────────────────────────
    "technical SEO audit",
    "website SEO audit",
    "Core Web Vitals optimization",
    "page speed optimization",
    "website performance optimization",
    "SEO performance checker",
    "free SEO audit",
    "website optimization tool",
    "header checker",
    "meta tag analyzer",
    "robots.txt checker",
    "schema validator",
    "SEO crawler",
    "SEO diagnostics",

    // ── Location-Based ─────────────────────────────────────
    "software development company in India",
    "custom software development company India",
    "software development company Ahmedabad",
    "web development company Ahmedabad",
    "AI development company India",
    "AI development company Ahmedabad",
    "mobile app development company Ahmedabad",
    "mobile app development India",
    "software developers India",
    "hire developers India",
    "offshore software development India",
    "custom software developers India",
    "enterprise software company India",
    "web development company Gujarat",
    "app development company Gujarat",
    "software company India",
    "IT company near me",
    "web development agency near me",
    "tech startup India",

    // ── Industry-Specific ───────────────────────────────────
    "healthcare software development",
    "hospital management software",
    "fintech software development",
    "education software development",
    "real estate software development",
    "manufacturing software solutions",
    "logistics software development",
    "eCommerce software development",
    "legal software development",
    "insurance software development",
    "travel software development",
    "restaurant software development",

    // ── Best / Top Keywords ─────────────────────────────────
    "best software development company",
    "top software development company",
    "best AI development company",
    "best web development company",
    "best mobile app development company",
    "custom software development for startups",
    "enterprise AI development company",
    "software development company for startups",
    "AI automation company",
    "digital transformation partner",
    "business automation company",
    "build SaaS product",
    "enterprise application development company",

    // ── Digital Marketing ───────────────────────────────────
    "digital marketing agency",
    "digital marketing company",
    "digital marketing services",
    "best digital marketing agency",
    "digital marketing consultant",
    "internet marketing agency",
    "online marketing company",
    "performance marketing agency",
    "digital growth agency",
    "full service digital marketing agency",
    "B2B digital marketing agency",
    "enterprise digital marketing agency",

    // ── SEO Services ────────────────────────────────────────
    "SEO agency",
    "SEO company",
    "SEO services",
    "technical SEO services",
    "local SEO services",
    "enterprise SEO services",
    "eCommerce SEO services",
    "SEO consultant",
    "SEO expert",
    "SEO optimization company",
    "website SEO services",
    "organic SEO services",
    "SEO agency India",
    "SEO company Ahmedabad",
    "SEO company Gujarat",
    "SEO services India",
    "SEO services Ahmedabad",
    "best SEO company",
    "best SEO agency",
    "SEO for businesses",
    "local SEO company",
    "Google Business Profile optimization",
    "Google Maps SEO",
    "local business SEO",
    "Google My Business SEO",
    "local search optimization",
    "local SEO services India",
    "local SEO agency",
    "technical SEO audit",
    "website SEO audit",
    "Core Web Vitals optimization",
    "page speed optimization",
    "website optimization services",
    "SEO diagnostics",
    "SEO audit company",
    "technical SEO consultant",
    "website performance optimization",
    "schema markup services",
    "crawl optimization",
    "indexing optimization",

    // ── AI SEO / AEO / GEO ──────────────────────────────────
    "AI SEO services",
    "AI SEO agency",
    "AI powered SEO",
    "AI search optimization",
    "AI content optimization",
    "AI SEO consultant",
    "AI search engine optimization",
    "AEO services",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "LLM SEO",
    "ChatGPT SEO optimization",

    // ── PPC & Advertising ───────────────────────────────────
    "Google Ads agency",
    "Google Ads management",
    "PPC agency",
    "PPC management services",
    "pay per click services",
    "Google Ads company",
    "Google Ads consultant",
    "search engine marketing",
    "SEM agency",
    "paid advertising agency",

    // ── Social Media Marketing ──────────────────────────────
    "social media marketing agency",
    "social media management",
    "social media advertising",
    "Instagram marketing agency",
    "Facebook advertising agency",
    "LinkedIn marketing agency",
    "social media growth services",
    "social media marketing company",

    // ── Content Marketing ───────────────────────────────────
    "content marketing agency",
    "content writing services",
    "SEO content writing",
    "website content writing",
    "blog writing services",
    "B2B content marketing",
    "copywriting agency",
    "content strategy services",

    // ── Branding ────────────────────────────────────────────
    "branding agency",
    "brand strategy agency",
    "business branding services",
    "logo design company",
    "corporate branding",
    "brand identity design",
    "rebranding services",

    // ── CRO & Website Optimization ──────────────────────────
    "website design and SEO",
    "SEO web development",
    "conversion optimized websites",
    "website optimization services",
    "landing page optimization",
    "CRO services",
    "website redesign agency",
    "conversion rate optimization",
    "performance marketing agency",
    "ROI marketing agency",
    "lead generation agency",
    "B2B lead generation",
    "sales funnel optimization",
    "conversion optimization",
    "customer acquisition services",
    "growth marketing agency",

    // ── Email Marketing & Automation ────────────────────────
    "email marketing services",
    "email automation",
    "email campaign management",
    "newsletter marketing",
    "B2B email marketing",
    "email marketing agency",
    "marketing automation services",
    "CRM automation",
    "AI marketing automation",
    "sales automation",
    "marketing workflow automation",

    // ── Founders & Brand ────────────────────────────────────
    "Prince Gajjar",
    "Prince Gajjar DevFlow",
    "DevFlow Prince Gajjar",
    "Bhavin Rajput DevFlow",
    "DevFlow Technology",
  ],

  // Authorship
  authors: [{ name: "DevFlow Technology", url: siteUrl }],
  creator: "DevFlow Technology",
  publisher: "DevFlow Technology",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Category
  category: "technology",

  // App info
  applicationName: "DevFlow Technology",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // Format detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "DevFlow Technology",
    title: "DevFlow Technology | AI Agency & Web Development Company India",
    description:
      "Leading AI agency & IT company in India. We build AI solutions, enterprise ERP systems, custom web apps, mobile applications & cloud services. Your trusted tech partner for digital transformation.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DevFlow Technology - AI Agency & Web Development Company India",
        type: "image/png",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@devflowtechnology",
    creator: "@devflowtechnology",
    title: "DevFlow Technology | AI Agency & Web Development Company India",
    description:
      "Leading AI agency & IT company. We build AI solutions, ERP systems, web apps, mobile apps & cloud services. Transform your business with DevFlow.",
    images: {
      url: `${siteUrl}/og-image.png`,
      alt: "DevFlow Technology - AI Agency & Web Development Company India",
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons - for PWA and browsers
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // Manifest for PWA support
  manifest: "/manifest.json",

  // Verification - Add your verification codes here when available
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace with actual code
    // bing: "your-bing-verification-code",
  },

  // Other metadata
  other: {
    "msapplication-TileColor": "#0a0a0a",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "DevFlow",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased custom-cursor-active`}>
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Premium Custom Cursor (dynamically loaded) */}
        <PremiumCursor />

        {/* Structured Data for SEO */}
        <StructuredData />

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-devflow-green focus:text-devflow-dark focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <PageWrapper>
          {children}
        </PageWrapper>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Floating Contact Button */}
        <FloatingContact />

        {/* Cookie Consent Banner (dynamically loaded) */}
        <CookieBanner />
      </body>
    </html>
  );
}
