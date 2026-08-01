import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";
import { projects } from "@/data/projectData";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { locationsData } from "@/data/locationsData";
import { knowledgeHubData } from "@/data/knowledgeHubData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devflow.co.in";
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-audit`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/software-development-company-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-development-company-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-development-company-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobile-app-development-company-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-company-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/it-company-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/it-services-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dedicated-development-teams`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offshore-development`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/white-label-development`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/technology-stack`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/saas-development`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/custom-software-erp`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-automation`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/enterprise-seo`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Blog post pages
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Work/case study pages
  const workEntries = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Services pages
  const serviceEntries = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Industries pages
  const industryEntries = Object.keys(industriesData).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Locations pages
  const locationEntries = Object.keys(locationsData).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic Knowledge Hub pages
  const knowledgeEntries = Object.keys(knowledgeHubData).map((slug) => ({
    url: `${baseUrl}/knowledge-base/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...blogEntries,
    ...workEntries,
    ...serviceEntries,
    ...industryEntries,
    ...locationEntries,
    ...knowledgeEntries,
  ];
}
