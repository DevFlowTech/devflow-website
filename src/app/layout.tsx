import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/SEO/StructuredData";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import StickyDotNav from "@/components/ui/StickyDotNav";
import FloatingContact from "@/components/ui/FloatingContact";

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
    "Leading AI agency & web development company in India. We build AI solutions, enterprise ERP systems, custom web apps, mobile applications & cloud services. Transform your business with DevFlow Technology - your trusted IT partner for digital success.",
  keywords: [
    // AI Agency Keywords
    "AI agency",
    "AI agency India",
    "artificial intelligence company",
    "AI solutions company",
    "AI development services",
    "machine learning agency",
    "AI consulting firm",
    "ChatGPT integration services",
    "AI automation company",
    "custom AI solutions",
    // Web Development Agency Keywords
    "web development agency",
    "web development company India",
    "website development company",
    "web development services",
    "custom web development",
    "professional web development",
    "best web development company",
    "affordable web development",
    "website design and development",
    // IT Company Keywords
    "IT company India",
    "IT services company",
    "software development company",
    "IT solutions provider",
    "technology company India",
    "digital transformation company",
    "IT consulting company",
    // ERP Keywords
    "ERP development company",
    "enterprise software development",
    "custom ERP solutions",
    "ERP software India",
    "business management software",
    // Mobile App Keywords
    "mobile app development company",
    "app development agency",
    "iOS app development",
    "Android app development",
    "React Native development",
    // Cloud & DevOps Keywords
    "cloud services company",
    "DevOps services India",
    "AWS consulting",
    "cloud migration services",
    // Tech Stack Keywords
    "Next.js development company",
    "React development agency",
    "TypeScript experts",
    "Node.js development",
    "full stack development",
    // Location Keywords
    "software company India",
    "IT company near me",
    "web development agency near me",
    "tech startup India",
    // Long-tail Keywords
    "hire AI developers",
    "outsource web development",
    "startup tech partner",
    "enterprise web solutions",
    "high-performance websites",
    "SEO optimized websites",
    "conversion focused web design",
    "scalable web applications",
    "Prince Gajjar",
    "Prince Gajjar DevFlow",
    "DevFlow Prince Gajjar",
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
      // {
      //   url: `${siteUrl}/og-image-square.png`,
      //   width: 600,
      //   height: 600,
      //   alt: "DevFlow Technology Logo",
      //   type: "image/png",
      // },
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          as="style"
        />
      </head>
      <body className="antialiased">
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Mouse Glow Effect */}
        <MouseGlow />

        {/* Sticky Section Navigation */}
        <StickyDotNav />

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
        <main id="main-content" role="main">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />
      </body>
    </html>
  );
}
