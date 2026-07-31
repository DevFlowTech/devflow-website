import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://devflow.co.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/*.jpg", "/*.png", "/*.webp", "/*.svg"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
