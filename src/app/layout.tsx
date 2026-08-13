import { JetBrains_Mono, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import StructuredData from "@/components/SEO/StructuredData";
import ServerStructuredData from "@/components/SEO/ServerStructuredData";
import ScrollProgress from "@/components/ui/ScrollProgress";

// Dynamically import heavy components that are not in the initial viewport
// These are code-split into separate chunks to optimize the critical rendering path
const CookieBanner = dynamic(() => import("@/components/ui/CookieBanner"));
// Third-party trackers only mount after the visitor accepts cookies; kept out
// of the initial bundle since it renders nothing pre-consent.
const AnalyticsProvider = dynamic(
  () => import("@/components/analytics/AnalyticsProvider"),
);
const AIChatbot = dynamic(() => import("@/components/ui/AIChatbot"));
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"));
const FloatingContact = dynamic(
  () => import("@/components/ui/FloatingContact"),
);

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Base URL for the site
const siteUrl = "https://www.devflow.co.in";

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
    default: "DevFlow Technology | Custom Software Company India",
    template: "%s | DevFlow Technology",
  },
  description:
    "DevFlow Technology is a premier custom software development company in India, building AI systems, ERP solutions, and SaaS products.",
  // ponytail: Google ignores meta keywords since 2009. Only a handful kept
  // for Bing (minor) and schema-readers. Ceiling: remove entirely if Bing
  // traffic is negligible per Search Console.
  keywords: [
    "software development company Ahmedabad",
    "custom software development company India",
    "AI development company Ahmedabad",
    "ERP software development India",
    "SaaS development company Gujarat",
    "web development company Ahmedabad",
    "mobile app development Ahmedabad",
    "IT company Ahmedabad",
    "DevFlow Technology",
    "Prince Gajjar DevFlow",
    "offshore software development India",
    "hire developers India",
  ],


  // Authorship
  authors: [{ name: "DevFlow Technology", url: siteUrl }],
  creator: "DevFlow Technology",
  publisher: "DevFlow Technology",

  // Canonical URL
  metadataBase: new URL(siteUrl),

  // Hreflang alternates for international SEO
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
      "en": siteUrl,
      "x-default": siteUrl,
    },
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
    locale: "en_IN",
    url: siteUrl,
    siteName: "DevFlow Technology",
    title:
      "DevFlow Technology | AI Agency & Web Development Company Ahmedabad, Gujarat",
    description:
      "Leading AI agency & IT company in Ahmedabad, Gujarat. We build AI solutions, enterprise ERP systems, custom web apps, mobile applications & cloud services. Also offering SEO, PPC & digital marketing. Your trusted tech partner for digital transformation across Gujarat (Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot).",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "DevFlow Technology - AI Agency & Web Development Company Ahmedabad, Gujarat",
        type: "image/jpeg", // fixed: was image/png but file is .jpg
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@devflowtechnology",
    creator: "@devflowtechnology",
    title:
      "DevFlow Technology | AI Agency & Web Development Company Ahmedabad, Gujarat",
    description:
      "Leading AI agency & IT company in Ahmedabad, Gujarat. We build AI solutions, ERP systems, web apps, mobile apps & cloud services. Transform your business with DevFlow.",
    images: {
      url: `${siteUrl}/og-image.jpg`,
      alt: "DevFlow Technology - AI Agency & Web Development Company Ahmedabad, Gujarat",
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
    google: "IJZYTQnYmXmv2GZFC7FysA5C3Ub5cNHu6Qy_AjDEniY",
    yandex: "242eb7ac95e2b57c",
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
      lang="en-IN"
      className={`scroll-smooth ${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Ahrefs Site Verification */}
        <meta name="ahrefs-site-verification" content="d6c511f2a7c1ba94494fe6db3616dbd8fe4fae349b1ca7a505ce5496e24e7a28" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* LLMs.txt - AI search engine manifest */}
        <link
          rel="alternate"
          type="text/plain"
          href="https://www.devflow.co.in/llms.txt"
          title="LLM Manifest"
        />

        {/* Server-rendered structured data — visible to AI crawlers in raw HTML */}
        <ServerStructuredData />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {/* Consent-gated analytics (GA, Clarity, GTM, Ahrefs) — only mount
            after the visitor accepts cookies, see AnalyticsProvider */}
        <AnalyticsProvider />

        {/* Scroll Progress Bar */}
        <ScrollProgress />

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
        <PageWrapper>{children}</PageWrapper>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Floating Contact Button */}
        <FloatingContact />

        {/* AI Chatbot Assistant */}
        <AIChatbot />

        {/* Cookie Consent Banner (dynamically loaded) */}
        <CookieBanner />
      </body>
    </html>
  );
}
