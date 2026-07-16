/**
 * SiteSearch — Agentic browsing engine for the DevFlow AI chatbot.
 *
 * This module provides:
 * 1. Full-text search across all indexed site content
 * 2. Intelligent query interpretation (semantic intent matching)
 * 3. Navigation suggestions (suggesting relevant pages)
 * 4. Contextual response generation based on actual site content
 */

import {
  siteContent,
  searchContentIndex,
  getContentByType,
  ContentEntry,
} from "@/data/contentIndex";

export interface SearchResult {
  entry: ContentEntry;
  matchType: "exact" | "keyword" | "fuzzy";
  relevance: number;
}

export interface AgentResponse {
  /** The main text response */
  text: string;
  /** Suggested pages the user might want to visit */
  suggestions: { title: string; path: string; icon?: string }[];
  /** Whether to show the lead capture form */
  showLeadForm: boolean;
  /** Lead form context message */
  leadContext?: string;
}

/**
 * Query categories for intelligent routing
 */
type QueryIntent =
  | "pricing"
  | "services"
  | "projects"
  | "contact"
  | "about"
  | "expertise"
  | "ai_automation"
  | "erp"
  | "seo"
  | "saas"
  | "blog"
  | "faq"
  | "technologies"
  | "general"
  | "greeting";

/**
 * Classify the user's query intent based on keywords
 */
function classifyIntent(query: string): QueryIntent {
  const q = query.toLowerCase().trim();

  const intentPatterns: [RegExp, QueryIntent][] = [
    [/^(hi|hello|hey|good morning|good evening|greetings)/, "greeting"],
    [/(price|pricing|cost|budget|how much|affordable|estimate|₹|rupees)/, "pricing"],
    [/(service|what you do|offer|provide|capabilities)/, "services"],
    [/(project|portfolio|work|case study|client|customers?|showcase)/, "projects"],
    [/(contact|hire|consultation|talk|reach|email|phone|call|meeting)/, "contact"],
    [/(about|who|team|founder|story|philosophy|values|mission|started)/, "about"],
    [/(expertise|skill|tech|technology|stack|framework|tool|language)/, "expertise"],
    [/(ai|artificial intelligence|machine learning|llm|gpt|chatbot|rag|automation|agent|intelligent|model)/, "ai_automation"],
    [/(erp|enterprise|crm|inventory|logistics|supply chain|business system)/, "erp"],
    [/(seo|geo|aeo|search engine|ranking|google|optimization|schema|json-ld|local search)/, "seo"],
    [/(saas|subscription|multi.?tenant|billing|stripe)/, "saas"],
    [/(blog|article|guide|read|resource|insight)/, "blog"],
    [/(faq|question|common|answer)/, "faq"],
    [/(react|next\.?js|typescript|node|python|docker|aws|cloud|database|postgresql)/, "technologies"],
  ];

  for (const [pattern, intent] of intentPatterns) {
    if (pattern.test(q)) return intent;
  }

  return "general";
}

/**
 * Generate a contextual agentic response using the content index.
 * This turns the chatbot into an "agent" that can browse the site's content.
 */
export function generateAgentResponse(userQuery: string): AgentResponse {
  const intent = classifyIntent(userQuery);
  const searchResults = searchContentIndex(userQuery, 4);

  let text = "";
  let suggestions: { title: string; path: string; icon?: string }[] = [];
  let showLeadForm = false;

  // Build response based on intent + search results
  switch (intent) {
    case "greeting": {
      text =
        "Hello! 👋 I'm DevFlow's AI agent — I can browse our entire website to answer your questions. Ask me about our services, pricing, projects, technologies, or anything else you'd like to know!";
      suggestions = [
        { title: "Our Services", path: "/services", icon: "⚙️" },
        { title: "Portfolio", path: "/work", icon: "💼" },
        { title: "About Us", path: "/about", icon: "📖" },
      ];
      break;
    }

    case "pricing": {
      const pricingData = searchContentIndex("pricing cost budget", 3);
      text =
        "Our pricing is project-based and tailored to your specific requirements. Here's a general range:\n\n" +
        "• **Standard Websites**: Starting at ₹50,000\n" +
        "• **Custom Web Applications**: ₹2L – ₹8L+\n" +
        "• **AI Automation & RAG Systems**: ₹3L – ₹15L\n" +
        "• **Enterprise ERP/CRM**: ₹15L – ₹50L+\n\n" +
        "For a quick estimate, use our interactive Cost Estimator on the Contact page. Or leave your email and Prince & Bhavin will reach out with a custom quote!";
      suggestions = [
        { title: "Contact & Cost Estimator", path: "/contact", icon: "📞" },
        { title: "Services Overview", path: "/services", icon: "⚙️" },
      ];
      showLeadForm = true;
      break;
    }

    case "services": {
      const services = getContentByType("service");
      text =
        "We offer 4 core service areas:\n\n" +
        services
          .map(
            (s) =>
              `🔹 **${s.title}** — ${s.summary.substring(0, 120)}...`
          )
          .join("\n\n") +
        "\n\nEach service is custom-tailored to your business needs. Which area interests you most?";
      suggestions = services.map((s) => ({
        title: s.title,
        path: s.path,
        icon: s.icon,
      }));
      break;
    }

    case "projects": {
      const projects = getContentByType("project").slice(0, 5);
      text =
        "Here are some of our featured projects:\n\n" +
        projects
          .map(
            (p, i) =>
              `${i + 1}. **${p.title}** — ${p.summary.substring(0, 100)}...`
          )
          .join("\n") +
        "\n\nWe've delivered **21+ projects** across AI & Automation, SaaS, Enterprise Systems, Mobile Apps, and SEO. Check out our full portfolio!";
      suggestions = [
        { title: "View All Projects", path: "/work", icon: "💼" },
        ...projects.slice(0, 3).map((p) => ({
          title: p.title,
          path: p.path,
          icon: p.icon,
        })),
      ];
      break;
    }

    case "contact": {
      text =
        "I can connect you directly with **Prince Gajjar (CEO)** and **Bhavin Rajput (CTO)**. They typically respond within 24 hours.\n\n" +
        "📧 Email: contact@devflow.co.in\n\n" +
        "Please share your name and email below, and I'll make sure the team gets in touch!";
      suggestions = [
        { title: "Contact Page", path: "/contact", icon: "📞" },
        { title: "About the Founders", path: "/about", icon: "📖" },
      ];
      showLeadForm = true;
      break;
    }

    case "about": {
      text =
        "**DevFlow Technology** was founded by **Prince Gajjar (CEO)** and **Bhavin Rajput (CTO)** to fill a gap in standard development shops — a lack of absolute technical ownership.\n\n" +
        "**Our Core Values:**\n" +
        "1️⃣ **Engineering First** — We are builders, not pitchmen\n" +
        "2️⃣ **Chaos to Clarity** — We turn ambiguity into structured systems\n" +
        "3️⃣ **Radical Transparency** — No sales jargon, just honest technical assessments\n\n" +
        "We're based in **Ahmedabad, Gujarat** and serve clients across India, the USA, Germany, and Europe.";
      suggestions = [
        { title: "Full About Page", path: "/about", icon: "📖" },
        { title: "Our Expertise", path: "/expertise", icon: "💡" },
        { title: "Contact Founders", path: "/contact", icon: "📞" },
      ];
      break;
    }

    case "expertise":
    case "technologies": {
      const techEntries = searchContentIndex(
        "technology stack framework",
        3
      );
      text =
        "Our technical expertise spans **40+ industrial-grade frameworks and tools**:\n\n" +
        "**Frontend:** Next.js 15/16, React 19, TypeScript, Tailwind CSS, Framer Motion\n" +
        "**Backend:** Node.js, Go (Golang), Python, Django, Express\n" +
        "**Databases:** PostgreSQL, MySQL, MongoDB, Redis, InfluxDB\n" +
        "**Cloud & DevOps:** AWS, Docker, Kubernetes, CI/CD, Serverless\n" +
        "**AI/ML:** OpenAI API, Gemini API, LangChain, Pinecone, RAG systems\n" +
        "**Mobile:** React Native, Kotlin, Flutter\n" +
        "**Design:** Figma, Spline 3D\n\n" +
        "See our full expertise breakdown on the Expertise page!";
      suggestions = [
        { title: "Our Expertise", path: "/expertise", icon: "💡" },
        { title: "Services", path: "/services", icon: "⚙️" },
        { title: "Case Studies", path: "/work", icon: "💼" },
      ];
      break;
    }

    case "ai_automation": {
      const aiService = siteContent.find(
        (e) => e.id === "service/ai-automation"
      );
      text =
        aiService
          ? `**${aiService.title}**\n\n${aiService.summary}\n\n` +
            (aiService.details
              ? `**Tech Stack:** ${aiService.details.split("Tech stack:")[1]?.trim() || aiService.details}`
              : "")
          : "We build custom AI solutions including LLM integration, RAG systems, AI chatbots, and automated workflow pipelines.";
      suggestions = [
        { title: "AI Automation Service", path: "/services/ai-automation", icon: "🤖" },
        { title: "AI Development (Ahmedabad)", path: "/ai-development-company-ahmedabad", icon: "🧠" },
        { title: "AI Blog Posts", path: "/blog", icon: "📝" },
      ];
      break;
    }

    case "erp": {
      const erpService = siteContent.find(
        (e) => e.id === "service/custom-erp"
      );
      text =
        erpService
          ? `**${erpService.title}**\n\n${erpService.summary}\n\n` +
            (erpService.details
              ? `**Tech Stack:** ${erpService.details.split("Tech stack:")[1]?.trim() || erpService.details}`
              : "")
          : "We build custom ERP/CRM systems with real-time syncing, role-based access control, and automated reporting.";
      suggestions = [
        { title: "Custom ERP Service", path: "/services/custom-software-erp", icon: "🏗️" },
        { title: "ERP vs Off-Shelf Blog", path: "/blog/custom-erp-vs-off-shelf-software-2026", icon: "📝" },
        { title: "Enterprise Projects", path: "/work", icon: "💼" },
      ];
      break;
    }

    case "seo": {
      const seoService = siteContent.find(
        (e) => e.id === "service/enterprise-seo"
      );
      text =
        seoService
          ? `**${seoService.title}**\n\n${seoService.summary}\n\n` +
            (seoService.details
              ? `**Tech Stack:** ${seoService.details.split("Tech stack:")[1]?.trim() || seoService.details}`
              : "")
          : "We optimize for both traditional search engines AND AI answer engines (GEO/AEO). JSON-LD schemas, Google Business Profile optimization, and semantic content structuring.";
      suggestions = [
        { title: "Enterprise SEO Service", path: "/services/enterprise-seo", icon: "📈" },
        { title: "Free SEO Audit Tool", path: "/seo-audit", icon: "🔍" },
        { title: "SEO Company Ahmedabad", path: "/seo-company-ahmedabad", icon: "📊" },
      ];
      break;
    }

    case "saas": {
      const saasService = siteContent.find(
        (e) => e.id === "service/saas-development"
      );
      text =
        saasService
          ? `**${saasService.title}**\n\n${saasService.summary}\n\n` +
            (saasService.details
              ? `**Tech Stack:** ${saasService.details.split("Tech stack:")[1]?.trim() || saasService.details}`
              : "")
          : "We engineer high-performance multi-tenant SaaS platforms with Stripe billing, elastic databases, and sub-second page loads using Next.js.";
      suggestions = [
        { title: "SaaS Development Service", path: "/services/saas-development", icon: "🚀" },
        { title: "SaaS Blog Posts", path: "/blog", icon: "📝" },
        { title: "SaaS Projects", path: "/work", icon: "💼" },
      ];
      break;
    }

    case "blog": {
      const blogs = getContentByType("blog").slice(0, 5);
      text =
        "Here are some of our latest articles:\n\n" +
        blogs
          .map((b, i) => `${i + 1}. **${b.title}** — ${b.summary.substring(0, 100)}...`)
          .join("\n") +
        "\n\nWe regularly publish insights on AI, web development, SaaS, ERP, cybersecurity, and more!";
      suggestions = [
        { title: "All Blog Posts", path: "/blog", icon: "📝" },
        ...blogs.slice(0, 3).map((b) => ({
          title: b.title,
          path: b.path,
          icon: b.icon,
        })),
      ];
      break;
    }

    case "faq": {
      const faqs = getContentByType("faq");
      text =
        "Here are answers to common questions:\n\n" +
        faqs
          .map((f, i) => `${i + 1}. **${f.title}**\n   ${f.summary.substring(0, 120)}...`)
          .join("\n\n") +
        "\n\nVisit our FAQ page for the complete list!";
      suggestions = [
        { title: "Full FAQ Page", path: "/faq", icon: "❓" },
        { title: "Contact Us", path: "/contact", icon: "📞" },
      ];
      break;
    }

    default: {
      // For general queries, use search results to build a relevant response
      if (searchResults.length > 0) {
        const top = searchResults[0];
        text =
          `I found information about **${top.entry.title}**:\n\n` +
          `${top.entry.summary}\n\n`;

        if (searchResults.length > 1) {
          text += "**Related topics you might be interested in:**\n";
          searchResults.slice(1, 4).forEach((r, i) => {
            text += `${i + 1}. ${r.entry.title}\n`;
          });
        }

        suggestions = searchResults.slice(0, 5).map((r) => ({
          title: r.entry.title,
          path: r.entry.path,
          icon: r.entry.icon,
        }));
      } else {
        text =
          "Thanks for your question! DevFlow Technology specializes in:\n\n" +
          "🤖 **AI & Automation** — Custom LLMs, RAG systems, AI chatbots\n" +
          "🌐 **Web & Mobile Apps** — Next.js, React, React Native\n" +
          "🏗️ **ERP & Enterprise Systems** — Custom business software\n" +
          "📈 **SEO & GEO/AEO** — AI search optimization\n" +
          "🚀 **SaaS Development** — Multi-tenant platforms\n\n" +
          "I can provide more specific details — just ask! Or would you like to connect with Prince & Bhavin for a free consultation?";
        suggestions = [
          { title: "Our Services", path: "/services", icon: "⚙️" },
          { title: "Portfolio", path: "/work", icon: "💼" },
          { title: "Contact Us", path: "/contact", icon: "📞" },
          { title: "About DevFlow", path: "/about", icon: "📖" },
        ];
      }
    }
  }

  return { text, suggestions, showLeadForm, leadContext: userQuery };
}
