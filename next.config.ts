import type { NextConfig } from "next";

// script-src allowlist. Production drops 'unsafe-eval' (defense-in-depth; Next
// and React do not use eval in production builds). Development keeps it because
// React fast refresh requires eval. 'unsafe-inline' is retained in both modes:
// the Next.js App Router hydration bootstrap and the inline JSON-LD SEO schema
// are inline by design, and removing it would require a nonce-based CSP that
// forces every route to dynamic rendering.
const scriptSrc = [
  "'self'",
  ...(process.env.NODE_ENV === "production" ? [] : ["'unsafe-eval'"]),
  "'unsafe-inline'",
  // Ahrefs Analytics loads only after explicit cookie consent (AnalyticsProvider).
  "https://analytics.ahrefs.com",
  "https://www.googletagmanager.com",
  "https://va.vercel-scripts.com",
  "https://static.cloudflareinsights.com",
  "https://www.clarity.ms",
].join(" ");

const nextConfig: NextConfig = {
  // SEO: Enforce no trailing slashes for canonical/redirect consistency
  trailingSlash: false,

  // Enable React strict mode for development
  reactStrictMode: true,

  // Performance: Enable compression
  compress: true,

  // Remove Next.js power-by header for security
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Optimize images for better performance
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },

  // Reduce bundle size by modularizing icon imports only
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },

  // Canonicalize the bare (non-www) domain to www.devflow.co.in with path
  // preservation. This is a defensive, version-controlled replacement for the
  // dashboard-level redirect rule that was emitting a literal `${1}` destination
  // (https://www.devflow.co.in/$%7B1%7D), which caused 404s and scanner errors.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "devflow.co.in",
          },
        ],
        destination: "https://www.devflow.co.in/:path*",
        permanent: true,
      },
      {
        source: "/software-development",
        destination: "/services/software-development",
        permanent: true,
      },
      {
        source: "/erp-development",
        destination: "/services/erp-development",
        permanent: true,
      },
      {
        source: "/crm-development",
        destination: "/services/crm-development",
        permanent: true,
      },
      {
        source: "/node-js-development",
        destination: "/services/node-js-development",
        permanent: true,
      },
      {
        source: "/ai-development-company-ahmedabad",
        destination: "/services/ai-development",
        permanent: true,
      },
      {
        source: "/it-company-ahmedabad",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/it-services-ahmedabad",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/software-development-company-ahmedabad",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/mobile-app-development-company-ahmedabad",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/web-development-company-ahmedabad",
        destination: "/services/web-application-development",
        permanent: true,
      },
      {
        source: "/seo-company-ahmedabad",
        destination: "/services/seo",
        permanent: true,
      },
    ];
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Enable strict referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src ${scriptSrc}`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com https://*.vercel-storage.com https://www.googletagmanager.com https://www.google-analytics.com",
              "font-src 'self' data:",
              "connect-src 'self' https://formspree.io https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.google-analytics.com https://*.clarity.ms https://cloudflareinsights.com",
              "frame-src 'self' https://www.googletagmanager.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
            ].join("; "),
          },
          // HSTS - force HTTPS for 1 year
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Prevent cross-site scripting
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Permissions policy
          {
            key: "Permissions-Policy",
            value: [
              "camera=()",
              "microphone=()",
              "geolocation=()",
              "interest-cohort=()",
            ].join(", "),
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache fonts
      {
        source: "/:path*.(woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
