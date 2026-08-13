import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface TermDetail {
  term: string;
  metaDescription: string;
  definition: string;
  explanation: string;
  examples: string[];
  relatedConcepts: string[];
  relevantServiceLink: { title: string; href: string };
}

const glossaryData: Record<string, TermDetail> = {
  "ai-agent": {
    term: "AI Agent",
    metaDescription: "What is an AI Agent? Technical definition, enterprise applications, tool execution capabilities, and architectural breakdown.",
    definition: "An AI Agent is an autonomous software entity powered by a Large Language Model (LLM) that reasons over complex goal prompts, breaks goals down into multi-step execution plans, and invokes external tools or APIs to complete tasks without continuous human intervention.",
    explanation: "Unlike standard chatbots that only return static text responses, AI agents possess dynamic tool-calling capabilities. They can run database queries, invoke Python scripts, send emails via APIs, schedule calendar entries, and verify results against safety boundaries.",
    examples: ["Customer support agents that look up order history in PostgreSQL and issue refund API calls", "Lead qualification agents that verify prospect company data and populate CRM portals"],
    relatedConcepts: ["RAG (Retrieval-Augmented Generation)", "Function Calling", "Multi-Agent Systems", "LangChain"],
    relevantServiceLink: { title: "AI Agents & Workflow Automation Services", href: "/services/ai-agents" }
  },
  "rag": {
    term: "RAG (Retrieval-Augmented Generation)",
    metaDescription: "What is RAG? Technical definition of Retrieval-Augmented Generation, vector embedding lookups, and enterprise AI search.",
    definition: "Retrieval-Augmented Generation (RAG) is an AI architecture that enhances LLM responses by querying external vector databases for relevant document chunks before generating a response.",
    explanation: "RAG solves LLM data freshness and hallucination limitations. Instead of relying on static training weights, the RAG engine converts internal documents into vector embeddings. When a user asks a query, the system retrieves exact document passages and feeds them to the LLM prompt context as ground truth.",
    examples: ["Enterprise internal policy search over thousands of PDF manuals", "Clinical EHR data retrieval for medical treatment guidance"],
    relatedConcepts: ["Vector Database", "Embeddings", "Pinecone", "Qdrant", "Hallucination Mitigation"],
    relevantServiceLink: { title: "AI Development & RAG Services", href: "/services/ai-development" }
  },
  "erp": {
    term: "ERP (Enterprise Resource Planning)",
    metaDescription: "What is an ERP? Definition of Enterprise Resource Planning systems, inventory automation, and custom Next.js ERP software.",
    definition: "Enterprise Resource Planning (ERP) is a centralized database software platform designed to manage and automate an organization's core business processes, including inventory, billing, logistics, HR, and accounting.",
    explanation: "Legacy ERPs (like SAP or Oracle) carry heavy per-user licensing fees and complex user interfaces. DevFlow builds custom web-based ERP systems using Next.js and Node.js that adapt 100% to proprietary company workflows with zero seat licensing fees.",
    examples: ["Warehouse inventory scanning and dynamic reordering portals", "Multi-location dispatch management platforms"],
    relatedConcepts: ["Inventory Telemetry", "Double-Entry Ledger", "Bill of Materials (BOM)", "Custom Software"],
    relevantServiceLink: { title: "Custom ERP Development Services", href: "/services/erp-development" }
  },
  "saas": {
    term: "SaaS (Software-as-a-Service)",
    metaDescription: "What is SaaS? Definition of Software-as-a-Service, multi-tenant cloud architecture, and subscription platform development.",
    definition: "Software-as-a-Service (SaaS) is a software distribution model where applications are hosted in the cloud and accessed by subscribers over web browsers.",
    explanation: "SaaS platforms eliminate client-side installation friction. Modern SaaS engineering requires robust multi-tenant database isolation (Row-Level Security), subscription billing integrations (Stripe/Paddle), and global CDN distribution.",
    examples: ["Multi-tenant project management tools", "Subscription-based property management software"],
    relatedConcepts: ["Multi-Tenancy", "Row-Level Security (RLS)", "Stripe Integration", "Cloud Native"],
    relevantServiceLink: { title: "SaaS Development Services", href: "/services/saas-development" }
  },
  "api": {
    term: "API (Application Programming Interface)",
    metaDescription: "What is an API? Technical definition of Application Programming Interfaces, RESTful endpoints, and GraphQL integrations.",
    definition: "An Application Programming Interface (API) is a formal set of HTTP endpoints, data protocols, and definitions that enable distinct software systems to exchange data securely.",
    explanation: "APIs serve as the glue connecting modern web applications, databases, payment gateways, and AI services. DevFlow designs high-throughput RESTful and GraphQL APIs in Node.js and Python FastAPI.",
    examples: ["Stripe payment processing API hooks", "Twilio WhatsApp notification Webhooks"],
    relatedConcepts: ["REST", "GraphQL", "WebSockets", "FastAPI", "OpenAPI"],
    relevantServiceLink: { title: "Custom Software & API Development", href: "/services/custom-software-development" }
  },
  "nextjs": {
    term: "Next.js",
    metaDescription: "What is Next.js? Definition of Next.js production React framework, Server-Side Rendering (SSR), and edge performance.",
    definition: "Next.js is an open-source production React framework that provides Server-Side Rendering (SSR), Static Site Generation (SSG), and edge routing capabilities for web applications.",
    explanation: "Next.js solves traditional single-page React SEO and performance challenges by generating HTML on the server during requests or build time, giving users instant page loads and search engine crawlers 100% complete content.",
    examples: ["DevFlow enterprise web portals", "High-traffic SaaS dashboards and marketing hubs"],
    relatedConcepts: ["React 19", "Server Components", "Core Web Vitals", "SSR", "Vercel"],
    relevantServiceLink: { title: "Web Application Development Services", href: "/services/web-application-development" }
  },
  "geo": {
    term: "GEO (Generative Engine Optimization)",
    metaDescription: "What is GEO? Definition of Generative Engine Optimization, LLM brand entity recognition, and AI citation strategies.",
    definition: "Generative Engine Optimization (GEO) is the practice of structuring brand data, schemas, original research, and external citations so generative AI models (ChatGPT, Gemini, Perplexity) accurately recognize and recommend your business.",
    explanation: "As search evolves from blue links to AI generative answers, GEO ensures your company's core services and technical credentials are referenced in LLM outputs.",
    examples: ["Optimizing organization schema and llms.txt for AI bot discovery", "Publishing verifiable technical blueprints cited by Perplexity"],
    relatedConcepts: ["AEO", "Entity SEO", "JSON-LD Schema", "LLM Citations"],
    relevantServiceLink: { title: "Generative Engine Optimization (GEO) Strategy", href: "/services/geo" }
  },
  "aeo": {
    term: "AEO (Answer Engine Optimization)",
    metaDescription: "What is AEO? Definition of Answer Engine Optimization, direct answer formatting, and Google AI Overview optimization.",
    definition: "Answer Engine Optimization (AEO) is the strategy of formatting webpage content into concise, factual direct-answer blocks that search engines and AI assistants extract for voice and AI Overviews.",
    explanation: "AEO targets direct extraction by placing clear definition paragraphs (< 50 words) immediately under question headings, supported by structured FAQPage JSON-LD markup.",
    examples: ["Direct answer summary blocks under H2 question headings", "FAQPage schema markup"],
    relatedConcepts: ["GEO", "Technical SEO", "FAQPage Schema", "AI Overviews"],
    relevantServiceLink: { title: "Answer Engine Optimization (AEO) Services", href: "/services/aeo" }
  }
};

interface GlossaryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(glossaryData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GlossaryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = glossaryData[slug];
  if (!item) return { title: "Term Not Found | DevFlow" };
  return {
    title: `What is ${item.term}? Technical Definition & Overview | DevFlow`,
    description: item.metaDescription,
    alternates: { canonical: `https://www.devflow.co.in/glossary/${slug}` },
  };
}

export default async function GlossaryDetailPage({ params }: GlossaryPageProps) {
  const { slug } = await params;
  const item = glossaryData[slug];

  if (!item) notFound();

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/glossary" className="hover:text-white">GLOSSARY</Link>
          <span>/</span>
          <span className="text-devflow-green uppercase">{item.term}</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ TECHNICAL DEFINITION ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white leading-tight">What is {item.term}?</h1>
          <p className="text-lg text-devflow-gray-200 font-light leading-relaxed p-6 rounded-xl bg-white/[0.02] border border-devflow-green/20">
            {item.definition}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-display font-medium text-white">Detailed Explanation</h2>
          <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">{item.explanation}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-display font-medium text-white">Enterprise Examples</h2>
          <ul className="space-y-2">
            {item.examples.map((ex, i) => (
              <li key={i} className="text-xs text-devflow-gray-300 flex items-start gap-2">
                <span className="text-devflow-green">•</span> <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 pt-4">
          <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-widest">Related Concepts</h3>
          <div className="flex flex-wrap gap-2">
            {item.relatedConcepts.map((rc) => (
              <span key={rc} className="px-3 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-devflow-gray-300">
                {rc}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-devflow-green/10 to-transparent border border-devflow-green/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block mb-1">RELEVANT CAPABILITY</span>
            <h4 className="text-lg font-bold text-white">{item.relevantServiceLink.title}</h4>
          </div>
          <Link href={item.relevantServiceLink.href} className="btn-primary whitespace-nowrap">
            Explore Capability &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
