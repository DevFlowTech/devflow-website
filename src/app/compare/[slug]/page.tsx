import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface CompareItem {
  title: string;
  metaDescription: string;
  overview: string;
  optionA: { name: string; description: string; pros: string[]; cons: string[] };
  optionB: { name: string; description: string; pros: string[]; cons: string[] };
  verdict: string;
  faq: { question: string; answer: string }[];
}

const compareData: Record<string, CompareItem> = {
  "ai-agent-vs-chatbot": {
    title: "AI Agent vs. AI Chatbot: Enterprise Comparison",
    metaDescription: "Detailed technical comparison between autonomous AI agents and AI chatbots for business automation and customer support.",
    overview: "While AI chatbots excel at simple conversational Q&A, AI agents possess reasoning capabilities and tool hooks that allow them to execute multi-step database queries, API calls, and automated workflows without human oversight.",
    optionA: {
      name: "Autonomous AI Agent",
      description: "Goal-driven reasoning entity with tool calling, persistent state, and dynamic multi-step execution capability.",
      pros: ["Executes API calls, SQL queries, and file actions", "Handles complex multi-step reasoning", "Operates 24/7 autonomously"],
      cons: ["Requires explicit tool definitions and guardrails", "Higher token consumption"]
    },
    optionB: {
      name: "Conversational AI Chatbot",
      description: "Text-focused dialogue system providing responses based on hardcoded rules or basic vector retrieval.",
      pros: ["Fast setup for simple FAQ answering", "Lower token API overhead"],
      cons: ["Cannot perform database write operations", "Stuck when user questions diverge from canned paths"]
    },
    verdict: "Choose an AI Agent if your business needs automated task execution (booking appointments, updating CRMs, running scripts). Choose a basic Chatbot if you only require simple website FAQ answering.",
    faq: [
      { question: "Can an AI agent write to our SQL database?", answer: "Yes, when configured with secure REST or GraphQL tool endpoints and human approval guardrails." }
    ]
  },
  "rag-vs-fine-tuning": {
    title: "RAG vs. Fine-Tuning: LLM Architecture Comparison",
    metaDescription: "Compare Retrieval-Augmented Generation (RAG) against Model Fine-Tuning for enterprise data access and custom AI solutions.",
    overview: "RAG injects dynamic internal documentation into LLM prompts at query time via vector databases. Fine-tuning updates the internal neural weights of an open-source model.",
    optionA: {
      name: "Retrieval-Augmented Generation (RAG)",
      description: "Vector database lookup engine retrieving exact document chunks into prompt contexts.",
      pros: ["Real-time document updates without model retraining", "100% verifiable source citations", "Prevents model hallucinations"],
      cons: ["Requires vector database infrastructure (Pinecone/Qdrant)"]
    },
    optionB: {
      name: "Model Fine-Tuning",
      description: "Training model weights on specific dataset formatting to internalize tone or jargon.",
      pros: ["Teaches customized output syntax and style", "Reduces prompt token overhead"],
      cons: ["Static knowledge—requires retraining when documents change", "Cannot cite dynamic document sources"]
    },
    verdict: "Use RAG for enterprise document search, policy lookups, and dynamic databases. Use Fine-Tuning when you need custom model syntax or domain-specific tone formatting.",
    faq: [
      { question: "Can we combine RAG and Fine-Tuning?", answer: "Yes. Many enterprise systems use a fine-tuned model for domain syntax while feeding it dynamic context via RAG." }
    ]
  },
  "custom-software-vs-off-the-shelf": {
    title: "Custom Software vs. Off-The-Shelf Software: ROI & Architecture",
    metaDescription: "Analyze the total cost of ownership, IP control, and long-term scalability of custom software vs ready-made SaaS subscriptions.",
    overview: "Off-the-shelf software offers immediate setup but forces your business into generic workflows and monthly seat license escalations. Custom software requires initial engineering investment but grants 100% IP ownership and exact process fit.",
    optionA: {
      name: "Custom Software Systems",
      description: "Bespoke digital platform engineered around your exact operational rules and data models.",
      pros: ["100% IP ownership with zero monthly seat fees", "Exact fit for proprietary workflows", "Unlimited scalable database design"],
      cons: ["Higher upfront development investment", "Requires initial scoping phase"]
    },
    optionB: {
      name: "Off-The-Shelf SaaS Subscriptions",
      description: "Prebuilt multi-tenant software licensed per user on a monthly or annual basis.",
      pros: ["Immediate day-one login access", "Lower initial cost"],
      cons: ["Per-seat licensing costs compound over time", "Forces business to adapt to vendor limitations", "Zero IP asset value"]
    },
    verdict: "Choose custom software if your operational workflows represent a core competitive advantage. Choose off-the-shelf SaaS for standard commodity utilities (e.g. basic email hosting).",
    faq: [
      { question: "How fast does custom software pay for itself?", answer: "Most custom software systems achieve full ROI within 12 to 18 months by eliminating recurring vendor seat licenses and manual labor." }
    ]
  },
  "custom-erp-vs-ready-made-erp": {
    title: "Custom ERP vs. SAP & Oracle Enterprise Software",
    metaDescription: "Compare custom Next.js ERP software platforms against heavy legacy ERP packages like SAP and Oracle.",
    overview: "Legacy ERP platforms cost tens of thousands of dollars per user per year and require expensive specialized consultants for minor workflow changes. Custom ERPs built by DevFlow deliver clean, high-speed interfaces with zero licensing overhead.",
    optionA: {
      name: "DevFlow Custom ERP Platform",
      description: "High-performance Next.js & Node.js ERP built specifically for your warehouse, logistics, and billing lanes.",
      pros: ["Zero per-user monthly license fees", "Sub-second interface performance", "Native integrations with GST and local APIs"],
      cons: ["Built over 8 to 16 weeks"]
    },
    optionB: {
      name: "Legacy Enterprise ERP (SAP / Oracle)",
      description: "Heavy multi-module enterprise software suites designed for massive global conglomerates.",
      pros: ["Pre-certified compliance modules for global tax jurisdictions"],
      cons: ["Exorbitant per-user annual license costs", "Cluttered legacy interfaces", "Months of slow implementation"]
    },
    verdict: "Choose a custom DevFlow ERP if you want a fast, affordable, 100% customized platform without recurring user licensing fees.",
    faq: [
      { question: "Can custom ERPs connect to barcode scanners?", answer: "Yes, we integrate native camera scanning and hardware barcode API hooks directly into the ERP interface." }
    ]
  },
  "react-vs-nextjs": {
    title: "React Single Page App vs. Next.js App Router",
    metaDescription: "Technical comparison between client-rendered React SPAs and Server-Side Rendered Next.js web applications.",
    overview: "Client-side React SPAs render an empty HTML page that loads JavaScript before rendering content, delaying initial page load and hurting search engine indexing. Next.js pre-renders HTML on the server for instant page loads and complete SEO visibility.",
    optionA: {
      name: "Next.js App Router (SSR / SSG)",
      description: "Hybrid server-client React framework rendering complete HTML on the edge.",
      pros: ["Sub-second initial page load (LCP)", "100% indexable by search engine crawlers", "Built-in image and font optimization"],
      cons: ["Requires server environment configuration"]
    },
    optionB: {
      name: "Client-Side React SPA",
      description: "Browser-rendered single page application loading empty HTML shell first.",
      pros: ["Simple static file hosting"],
      cons: ["Poor search engine crawl performance", "Slower initial page render on low-power mobile devices"]
    },
    verdict: "Next.js is the clear choice for any public-facing web application where speed, user experience, and search engine visibility matter.",
    faq: [
      { question: "Is Next.js good for enterprise applications?", answer: "Yes, Next.js is used by leading global enterprises for its exceptional performance, security, and scalability." }
    ]
  }
};

interface ComparePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(compareData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = compareData[slug];
  if (!item) return { title: "Comparison Not Found | DevFlow" };
  return {
    title: item.title,
    description: item.metaDescription,
    alternates: { canonical: `https://www.devflow.co.in/compare/${slug}` },
  };
}

export default async function CompareDetailPage({ params }: ComparePageProps) {
  const { slug } = await params;
  const item = compareData[slug];

  if (!item) notFound();

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-white">COMPARE</Link>
          <span>/</span>
          <span className="text-devflow-green uppercase">{slug.replace(/-/g, " ")}</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ TECHNICAL COMPARISON SPEC ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white leading-tight">{item.title}</h1>
          <p className="text-base text-devflow-gray-300 font-light leading-relaxed">{item.overview}</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl glass-panel border border-white/[0.06] space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest">[ OPTION A ]</span>
            <h2 className="text-2xl font-display font-medium text-white">{item.optionA.name}</h2>
            <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">{item.optionA.description}</p>
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono text-devflow-green uppercase block">Advantages:</span>
              {item.optionA.pros.map((p, i) => (
                <div key={i} className="text-xs text-devflow-gray-300 flex items-center gap-2">
                  <span className="text-devflow-green">•</span> {p}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-white/[0.06] space-y-4">
            <span className="text-xs font-mono text-devflow-gold uppercase tracking-widest">[ OPTION B ]</span>
            <h2 className="text-2xl font-display font-medium text-white">{item.optionB.name}</h2>
            <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">{item.optionB.description}</p>
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono text-devflow-gold uppercase block">Advantages:</span>
              {item.optionB.pros.map((p, i) => (
                <div key={i} className="text-xs text-devflow-gray-300 flex items-center gap-2">
                  <span className="text-devflow-gold">•</span> {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-devflow-green/20 space-y-3">
          <h3 className="text-xs font-mono text-devflow-green uppercase tracking-widest">[ ARCHITECTURAL VERDICT ]</h3>
          <p className="text-sm text-white font-light leading-relaxed">{item.verdict}</p>
        </div>

        {/* FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-display font-medium text-white">Frequently Asked Questions</h2>
          {item.faq.map((f, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/[0.01] border border-white/[0.04] space-y-2">
              <h3 className="text-base font-semibold text-white">{f.question}</h3>
              <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-8 text-center">
          <Link href="/contact" className="btn-primary min-w-[200px] inline-block">
            Discuss Your Architecture
          </Link>
        </div>
      </div>
    </main>
  );
}
