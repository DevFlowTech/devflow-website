import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";
import { blogCategories } from "@/data/blogCategories";
import { projects } from "@/data/projectData";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { locationsData } from "@/data/locationsData";
import { knowledgeHubData } from "@/data/knowledgeHubData";

// ponytail: static dates per page — prevents sitemap churn on every build
// which was causing Googlebot to re-crawl all pages unnecessarily.
// Ceiling: when a CMS/git-hook is wired, replace with real per-file mtime.
const SITE_LAUNCH = "2026-01-15T00:00:00.000Z";
const LAST_SEO_REWRITE = "2026-08-09T10:35:00.000Z";
const LAST_CONTENT_UPDATE = "2026-08-10T10:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.devflow.co.in";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/tools/seo-audit`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // ponytail: REMOVED 7 URLs that 301-redirect via next.config.ts:
    // /software-development-company-ahmedabad, /ai-development-company-ahmedabad,
    // /web-development-company-ahmedabad, /mobile-app-development-company-ahmedabad,
    // /seo-company-ahmedabad, /it-company-ahmedabad, /it-services-ahmedabad
    // Sitemaps should never contain URLs that redirect — wastes crawl budget.
    {
      url: `${baseUrl}/ai-solutions`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dedicated-development-teams`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offshore-development`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/white-label-development`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // ponytail: Added navigable pages that were linked in footer but missing
    // from the sitemap. Missing sitemap entries = reduced crawl priority.
    {
      url: `${baseUrl}/engineering-process`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sla`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/maintenance`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/technology-stack`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/saas-development`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/custom-software-erp`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/enterprise-seo`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/calculators`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-devflow`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/founders`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partnerships/white-label-development`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partnerships/agency-partners`,
      lastModified: LAST_SEO_REWRITE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Blog post pages — use real post.date from data (already ISO-parseable)
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog topic-cluster hub pages
  const blogCategoryEntries = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: LAST_SEO_REWRITE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Work/case study pages
  const workEntries = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: LAST_SEO_REWRITE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Services pages
  const serviceEntries = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: LAST_SEO_REWRITE,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Industries pages
  const industryEntries = Object.keys(industriesData).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: LAST_SEO_REWRITE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Locations pages
  const locationEntries = Object.keys(locationsData).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: LAST_SEO_REWRITE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic Knowledge Hub pages
  const knowledgeEntries = Object.keys(knowledgeHubData).map((slug) => ({
    url: `${baseUrl}/knowledge-base/${slug}`,
    lastModified: LAST_SEO_REWRITE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic Technical Comparison pages
  const compareSlugs = [
    "ai-agent-vs-chatbot",
    "rag-vs-fine-tuning",
    "custom-software-vs-off-the-shelf",
    "custom-erp-vs-ready-made-erp",
    "react-vs-nextjs",
    "datadog-vs-new-relic",
    "dedicated-team-vs-in-house-hiring",
  ];
  const compareEntries = compareSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: LAST_SEO_REWRITE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...blogEntries,
    ...blogCategoryEntries,
    ...workEntries,
    ...serviceEntries,
    ...industryEntries,
    ...locationEntries,
    ...knowledgeEntries,
    ...compareEntries,
  ];
}
