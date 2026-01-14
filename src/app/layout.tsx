import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/SEO/StructuredData";
import CustomCursor from "@/components/ui/CustomCursor";

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
    default: "DevFlow Technology | World-Class Web Engineering",
    template: "%s | DevFlow Technology",
  },
  description:
    "Premium web engineering for businesses that demand excellence. We build high-performance websites and applications with Next.js, React, and TypeScript. Fast, scalable, conversion-focused digital experiences.",
  keywords: [
    // Primary keywords
    "web development company",
    "web engineering services",
    "Next.js development",
    "React development agency",
    "TypeScript development",
    // Service keywords
    "high-performance websites",
    "enterprise web development",
    "custom web applications",
    "premium web design",
    "conversion optimization",
    "website performance optimization",
    // Tech stack keywords
    "Next.js agency",
    "React development company",
    "Tailwind CSS development",
    "Vercel deployment",
    "PostgreSQL development",
    // Location/market keywords
    "professional web development",
    "startup web development",
    "SaaS development",
    "e-commerce development",
    // Long-tail keywords
    "fast loading websites",
    "SEO optimized websites",
    "mobile responsive web design",
    "scalable web architecture",
  ],
  
  // Authorship
  authors: [
    { name: "DevFlow Technology", url: siteUrl },
  ],
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
    title: "DevFlow Technology | World-Class Web Engineering",
    description:
      "Premium web engineering for businesses that demand excellence. High-performance websites and applications built with Next.js, React, and TypeScript.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DevFlow Technology - World-Class Web Engineering",
        type: "image/png",
      },
      {
        url: `${siteUrl}/og-image-square.png`,
        width: 600,
        height: 600,
        alt: "DevFlow Technology Logo",
        type: "image/png",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@devflowtechnology",
    creator: "@devflowtechnology",
    title: "DevFlow Technology | World-Class Web Engineering",
    description:
      "Premium web engineering for businesses that demand excellence. High-performance websites and applications built with Next.js, React, and TypeScript.",
    images: {
      url: `${siteUrl}/og-image.png`,
      alt: "DevFlow Technology - World-Class Web Engineering",
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
  
  // Icons - only include files that exist
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  
  // Manifest - commented out until icons are created
  // manifest: "/manifest.json",
  
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          as="style"
        />
      </head>
      <body className="antialiased">
        {/* Custom Cursor for premium interactions */}
        <CustomCursor />
        
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-devflow-green focus:text-devflow-dark focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        
        {/* Noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main id="main-content" role="main">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
