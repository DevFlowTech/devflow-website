export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

// Blog topic taxonomy. These hubs form the topic-cluster backbone of the
// blog: every post belongs to exactly one category, and each category has a
// dedicated /blog/category/[slug] landing page that aggregates its posts.
export const blogCategories: BlogCategory[] = [
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    description:
      "In-depth guides on AI integration, machine learning, generative AI, prompt engineering, and autonomous AI agents — how businesses deploy AI to automate workflows, cut costs, and scale.",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description:
      "Web development insights covering Next.js, React, performance optimization, SaaS architecture, and full-stack engineering best practices for building fast, modern applications.",
  },
  {
    slug: "enterprise-software",
    name: "Enterprise Software",
    description:
      "Enterprise software engineering guides — custom ERP, CRM, microservices architecture, and scalable backend systems built for growing businesses.",
  },
  {
    slug: "security",
    name: "Security",
    description:
      "Cybersecurity best practices for web applications — authentication, encryption, OWASP Top 10, data protection, and compliance guidance for software teams.",
  },
  {
    slug: "mobile-development",
    name: "Mobile Development",
    description:
      "Mobile app development trends and guides covering React Native, Flutter, AI-powered apps, cross-platform strategies, and app store optimization.",
  },
  {
    slug: "business-strategy",
    name: "Business Strategy",
    description:
      "Strategic insights for founders and decision-makers — choosing a software partner, digital transformation, technology investment, and India's local tech ecosystems.",
  },
];

// Look up a category by its URL slug.
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

// Derive the canonical category slug from a post's category label.
export function categorySlugByName(name: string): string {
  const match = blogCategories.find((c) => c.name === name);
  if (match) return match.slug;
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
