/**
 * SiteSearch — Comprehensive Knowledge & Intent Engine for DevFlow AI Chatbot.
 *
 * Provides:
 * 1. Deep company knowledge (capabilities, founders, tech stack, differentiators, case studies)
 * 2. Intent recognition for connection requests, pricing, services, and technical questions
 * 3. Connection trigger (showLeadForm = true) when user wants to talk to a person/founder
 */

import {
  siteContent,
  searchContentIndex,
  getContentByType,
} from "@/data/contentIndex";

export interface AgentResponse {
  text: string;
  suggestions: { title: string; path: string; icon?: string }[];
  showLeadForm: boolean;
  leadContext?: string;
}

type QueryIntent =
  | "connect_person"
  | "about_company"
  | "founders"
  | "pricing"
  | "services"
  | "projects"
  | "why_devflow"
  | "expertise"
  | "technologies"
  | "ai_automation"
  | "erp"
  | "seo"
  | "saas"
  | "compare"
  | "glossary"
  | "location"
  | "greeting"
  | "general";

function classifyIntent(query: string): QueryIntent {
  const q = query.toLowerCase().trim();

  // Check connection / talk to person request first!
  if (
    /(connect|talk to (a )?person|talk to human|speak to|talk with|contact founder|schedule a call|book a call|call me|reach team|hire|discuss project|get in touch|send request|connect to customer|connect me)/i.test(
      q
    )
  ) {
    return "connect_person";
  }

  const intentPatterns: [RegExp, QueryIntent][] = [
    [/^(hi|hello|hey|good morning|good evening|greetings|namaste)/, "greeting"],
    [/(founder|prince|bhavin|leadership|ceo|cto|who built|who runs|who owns)/, "founders"],
    [/(tell me about (the )?company|what is devflow|about devflow|who is devflow|company profile|company background)/, "about_company"],
    [/(why devflow|why choose|differentiator|why partner|advantage|unique)/, "why_devflow"],
    [/(where are you located|location|office|ahmedabad|address|india|headquarters)/, "location"],
    [/(compare|vs|difference|versus|rag vs|agent vs|custom vs)/, "compare"],
    [/(glossary|define|definition|what is rag|what is erp|what is an ai agent)/, "glossary"],
    [/(price|pricing|cost|budget|how much|estimate|quote|rate|fee|payment)/, "pricing"],
    [/(service|what you do|offer|provide|capabilities|solutions)/, "services"],
    [/(project|portfolio|work|case study|client|customers?|showcase)/, "projects"],
    [/(expertise|skill|tech|technology|stack|framework|tool|language|database)/, "expertise"],
    [/(ai|artificial intelligence|machine learning|llm|gpt|chatbot|rag|automation|agent|intelligent|model)/, "ai_automation"],
    [/(erp|enterprise|crm|inventory|logistics|supply chain|business system)/, "erp"],
    [/(seo|geo|aeo|search engine|ranking|google|optimization|schema|json-ld|local search)/, "seo"],
    [/(saas|subscription|multi.?tenant|billing|stripe)/, "saas"],
  ];

  for (const [pattern, intent] of intentPatterns) {
    if (pattern.test(q)) return intent;
  }

  return "general";
}

export function generateAgentResponse(userQuery: string): AgentResponse {
  const intent = classifyIntent(userQuery);
  const searchResults = searchContentIndex(userQuery, 4);

  let text = "";
  let suggestions: { title: string; path: string; icon?: string }[] = [];
  let showLeadForm = false;

  switch (intent) {
    case "connect_person": {
      text =
        "🤝 **Direct Founder & Technical Connection**\n\n" +
        "You can connect directly with our founders & senior architects:\n" +
        "• **Prince Gajjar (Founder & CEO)** — Technical Architecture & Strategy\n" +
        "• **Bhavin Rajput (Co-Founder & CTO)** — Backend Systems & Cloud Infrastructure\n\n" +
        "Please fill out your details below. Once submitted, our team will receive your connection request instantly and contact you within 24 hours!";
      suggestions = [
        { title: "Founders Bio", path: "/about/founders", icon: "👥" },
        { title: "Why DevFlow", path: "/why-devflow", icon: "⚡" },
        { title: "Case Studies", path: "/case-studies", icon: "💼" },
      ];
      showLeadForm = true;
      break;
    }

    case "about_company": {
      text =
        "🏢 **About DevFlow Technology**\n\n" +
        "DevFlow Technology is an international **AI Systems, Custom Software Infrastructure & Enterprise Software Company**.\n\n" +
        "**What We Do:**\n" +
        "• **AI Development & Autonomous Agents**: Custom LLM workflows, RAG search pipelines, function-calling agents.\n" +
        "• **Custom Enterprise Software & ERPs**: High-speed Next.js platforms for inventory, logistics, and billing with zero user license fees.\n" +
        "• **SaaS & Web Applications**: Production React 19, Next.js 16, TypeScript, Node.js, and PostgreSQL apps.\n" +
        "• **Generative Engine Optimization (GEO/AEO)**: Optimizing entity data for AI answer engines (ChatGPT, Perplexity, Gemini).\n\n" +
        "**Headquarters & Reach:** Based in Ahmedabad, Gujarat, India — serving clients globally across India, USA, Europe, UAE, and Australia.\n\n" +
        "Would you like to connect with our founders Prince & Bhavin to discuss your project?";
      suggestions = [
        { title: "Why DevFlow", path: "/why-devflow", icon: "⚡" },
        { title: "Our Founders", path: "/about/founders", icon: "👥" },
        { title: "Services Overview", path: "/services", icon: "⚙️" },
        { title: "Connect to Team", path: "/contact", icon: "📞" },
      ];
      break;
    }

    case "founders": {
      text =
        "👥 **DevFlow Leadership & Founders**\n\n" +
        "DevFlow is led directly by technical founders:\n\n" +
        "👨‍💻 **Prince Gajjar (Founder & CEO)** — Software architect leading enterprise strategy, AI systems design, and product engineering.\n" +
        "🛠️ **Bhavin Rajput (Co-Founder & CTO)** — Systems architect specializing in distributed backends, database scaling, and cloud security.\n\n" +
        "Our founders personally oversee every project's database architecture, security boundaries, and milestone release verification.";
      suggestions = [
        { title: "Founders Page", path: "/about/founders", icon: "👥" },
        { title: "Why DevFlow", path: "/why-devflow", icon: "⚡" },
        { title: "Connect with Founders", path: "/contact", icon: "📞" },
      ];
      showLeadForm = true;
      break;
    }

    case "why_devflow": {
      text =
        "⚡ **Why High-Growth Companies Choose DevFlow**\n\n" +
        "1️⃣ **Architecture-First** — Database schemas and security rules designed before UI code.\n" +
        "2️⃣ **Direct Founder Involvement** — Senior founders Prince & Bhavin lead execution.\n" +
        "3️⃣ **100% IP Ownership** — Complete source code transfer upon completion, zero monthly seat licensing.\n" +
        "4️⃣ **Security-Conscious** — Encryption in transit (TLS 1.3) & rest (AES-256), OWASP Top 10 compliance.\n" +
        "5️⃣ **Transparent Telemetry** — Weekly active sprint demos and clear progress reporting.\n" +
        "6️⃣ **180-Day Warranty** — Dedicated SLA post-launch support and code warranty.";
      suggestions = [
        { title: "Why DevFlow Page", path: "/why-devflow", icon: "⚡" },
        { title: "Technology Stack", path: "/technology", icon: "💻" },
        { title: "Connect with Founders", path: "/contact", icon: "📞" },
      ];
      break;
    }

    case "location": {
      text =
        "📍 **Company Location & Operations**\n\n" +
        "**Headquarters:** DevFlow Technology, Ahmedabad, Gujarat, India (382210).\n" +
        "**Global Operations:** We partner with growing enterprises and mid-market companies in India, USA, Germany, Europe, UAE, and Australia.\n\n" +
        "Would you like to schedule a virtual discovery call with our founders?";
      suggestions = [
        { title: "Contact Us", path: "/contact", icon: "📞" },
        { title: "About DevFlow", path: "/about", icon: "📖" },
      ];
      showLeadForm = true;
      break;
    }

    case "pricing": {
      text =
        "💰 **Transparent Commercial Models**\n\n" +
        "We operate on **Fixed-Price Milestone Contracts** or **Dedicated Engineering Team Retainers**.\n\n" +
        "• **100% Source Code Ownership** upon milestone sign-off.\n" +
        "• Zero per-user monthly seat licenses or vendor lock-in.\n" +
        "• Milestones tied directly to staging build approvals.\n\n" +
        "Submit your project details below to receive a custom architectural scope and timeline estimate from our founders!";
      suggestions = [
        { title: "Contact & Cost Estimator", path: "/contact", icon: "📞" },
        { title: "Explore Services", path: "/services", icon: "⚙️" },
      ];
      showLeadForm = true;
      break;
    }

    case "greeting": {
      text =
        "Hello! 👋 I'm DevFlow's AI assistant. I can tell you everything about our company, AI capabilities, software services, founders, and case studies — or connect you directly with our team!";
      suggestions = [
        { title: "Company Profile", path: "/about", icon: "🏢" },
        { title: "Our Services", path: "/services", icon: "⚙️" },
        { title: "Case Studies", path: "/case-studies", icon: "💼" },
        { title: "Connect to Founder", path: "/contact", icon: "📞" },
      ];
      break;
    }

    case "compare": {
      text =
        "⚖️ **Architectural Trade-Off Analysis**\n\n" +
        "We evaluate technology trade-offs objectively:\n\n" +
        "• **AI Agent vs Chatbot**: Autonomous multi-step execution vs simple conversational Q&A.\n" +
        "• **RAG vs Fine-Tuning**: Real-time vector document retrieval vs neural weight training.\n" +
        "• **Custom Software vs Off-the-Shelf**: 100% IP ownership vs compounding per-seat SaaS fees.\n" +
        "• **Custom ERP vs SAP/Oracle**: High-speed Next.js platforms vs expensive legacy modules.";
      suggestions = [
        { title: "Compare Index", path: "/compare", icon: "⚖️" },
        { title: "AI Agent vs Chatbot", path: "/compare/ai-agent-vs-chatbot", icon: "🤖" },
        { title: "RAG vs Fine-Tuning", path: "/compare/rag-vs-fine-tuning", icon: "🔍" },
      ];
      break;
    }

    case "glossary": {
      text =
        "📚 **Software & AI Engineering Glossary**\n\n" +
        "Concise, authoritative definitions for core software concepts:\n\n" +
        "• **AI Agent**: Goal-driven autonomous entity executing API tool calls.\n" +
        "• **RAG**: Vector database document chunk retrieval for LLM context.\n" +
        "• **ERP**: Centralized business software for inventory, billing & logistics.\n" +
        "• **GEO / AEO**: Optimizing entity data for AI answer engines and LLM citations.";
      suggestions = [
        { title: "Full Glossary", path: "/glossary", icon: "📚" },
        { title: "What is an AI Agent?", path: "/glossary/ai-agent", icon: "🤖" },
        { title: "What is RAG?", path: "/glossary/rag", icon: "🔍" },
      ];
      break;
    }

    case "services": {
      text =
        "⚙️ **DevFlow Core Engineering Services**\n\n" +
        "🧠 **AI Development & Autonomous Agents** — Custom LLMs, RAG engines, automated tools.\n" +
        "🛠️ **Custom Enterprise Software & ERPs** — High-performance business management platforms.\n" +
        "🚀 **SaaS & Web Applications** — Next.js 16, React 19, TypeScript, PostgreSQL apps.\n" +
        "📈 **Generative Engine Optimization (GEO/AEO)** — AI search engine citation structuring.\n\n" +
        "Which service area matches your current software requirements?";
      suggestions = [
        { title: "All Services", path: "/services", icon: "⚙️" },
        { title: "AI Development", path: "/services/ai-development", icon: "🧠" },
        { title: "Custom Software", path: "/services/custom-software-development", icon: "🛠️" },
        { title: "SaaS Systems", path: "/services/saas-development", icon: "🚀" },
      ];
      break;
    }

    case "projects": {
      text =
        "💼 **Featured Engineering Case Studies**\n\n" +
        "1️⃣ **Medicare AI System** — Hospital booking automation and API response optimization.\n" +
        "2️⃣ **Real Estate Platform** — Sub-second listing search powered by Cloudflare D1.\n" +
        "3️⃣ **German Logistics Portal** — Real-time European route tracking & custom declarations.\n" +
        "4️⃣ **Places Data Scraper** — Puppeteer multi-threaded lead extraction pipeline.";
      suggestions = [
        { title: "View All Case Studies", path: "/case-studies", icon: "💼" },
        { title: "Medicare AI Case Study", path: "/case-studies/medicare-ai-system", icon: "🏥" },
        { title: "Real Estate Case Study", path: "/case-studies/real-estate-platform", icon: "🏢" },
      ];
      break;
    }

    case "expertise":
    case "technologies": {
      text =
        "💻 **DevFlow Production Stack**\n\n" +
        "⚡ **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion\n" +
        "⚙️ **Backend:** Node.js, Express, Python, FastAPI, Go\n" +
        "🗄️ **Databases:** PostgreSQL, Redis, MongoDB, Cloudflare D1\n" +
        "☁️ **Cloud & DevOps:** AWS, Docker, Vercel, Cloudflare\n" +
        "🧠 **AI Stack:** OpenAI API, Gemini API, LangChain, Pinecone, Qdrant, PgVector";
      suggestions = [
        { title: "Full Technology Page", path: "/technology", icon: "💻" },
        { title: "Services Overview", path: "/services", icon: "⚙️" },
      ];
      break;
    }

    default: {
      if (searchResults.length > 0) {
        const top = searchResults[0];
        text = `I found details regarding **${top.title}**:\n\n${top.summary}\n\n`;

        if (searchResults.length > 1) {
          text += "**Related Topics:**\n";
          searchResults.slice(1, 3).forEach((r, i) => {
            text += `${i + 1}. ${r.title}\n`;
          });
        }

        suggestions = searchResults.slice(0, 4).map((r) => ({
          title: r.title,
          path: r.path,
          icon: r.icon || "→",
        }));
      } else {
        text =
          "DevFlow Technology specializes in custom AI software, enterprise ERPs, Next.js web applications, and GEO/AEO optimization.\n\n" +
          "Would you like me to connect you directly with founders **Prince Gajjar** & **Bhavin Rajput** for a technical consultation?";
        suggestions = [
          { title: "Connect with Founders", path: "/contact", icon: "📞" },
          { title: "Company Profile", path: "/about", icon: "🏢" },
          { title: "Services", path: "/services", icon: "⚙️" },
          { title: "Case Studies", path: "/case-studies", icon: "💼" },
        ];
        showLeadForm = true;
      }
    }
  }

  return { text, suggestions, showLeadForm, leadContext: userQuery };
}
