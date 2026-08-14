import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.devflow.co.in";

  // Standard non-content, internal engine, and spam query disallow rules
  const commonDisallows = [
    "/api/",
    "/_next/",
    "/_next/image",
    "/admin/",
    "/*?*marketxy*",
    "/*?url=*",
    "/*?q=*",
    "/*?ref=*",
    "/*?utm_*",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/*.jpg", "/*.png", "/*.webp", "/*.svg", "/*.avif"],
        disallow: ["/_next/image"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: commonDisallows,
      },
      // Spam / Scraper Bots - Block entirely
      {
        userAgent: [
          "MarketXYBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "DataForSeoBot",
          "PetalBot",
          "SerpstatBot",
        ],
        disallow: ["/"],
      },
      // AI Crawlers & LLM Agents
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Claude-User",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Anthropic-AI",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Diffbot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "MistralAI-User",
        allow: "/",
        disallow: commonDisallows,
      },
      {
        userAgent: "DuckAssistBot",
        allow: "/",
        disallow: commonDisallows,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
