import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software & AI Engineering Glossary | DevFlow Technology",
  description: "Clear, technical definitions for core AI and custom software concepts including AI agents, RAG, ERP, SaaS, AEO, GEO, and Next.js.",
  alternates: {
    canonical: "https://www.devflow.co.in/glossary",
  },
};

const glossaryTerms = [
  { slug: "ai-agent", term: "AI Agent", definition: "An autonomous software entity powered by an LLM that reasons over goals and executes API tool calls without human intervention." },
  { slug: "rag", term: "RAG (Retrieval-Augmented Generation)", definition: "An AI architecture that searches external vector databases for document context to inject into LLM prompts before answer generation." },
  { slug: "erp", term: "ERP (Enterprise Resource Planning)", definition: "Centralized software infrastructure managing core business operations including inventory, finance, logistics, and HR." },
  { slug: "saas", term: "SaaS (Software-as-a-Service)", definition: "Cloud software applications hosted centrally and delivered to multi-tenant users over the web via subscription models." },
  { slug: "api", term: "API (Application Programming Interface)", definition: "A standardized set of protocols and definitions that allow different software applications to communicate and exchange data." },
  { slug: "nextjs", term: "Next.js", definition: "A production React framework supporting Server-Side Rendering (SSR), Static Site Generation (SSG), and edge network execution." },
  { slug: "geo", term: "GEO (Generative Engine Optimization)", definition: "The optimization of brand entity signals, structured data, and citations so generative AI engines recommend your company." },
  { slug: "aeo", term: "AEO (Answer Engine Optimization)", definition: "Structuring content into concise direct-answer blocks that search and AI engines extract as definitive answers." },
];

export default function GlossaryIndexPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-5xl mx-auto space-y-16 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-white">RESOURCES</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">GLOSSARY</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ ENGINEERING DEFINITIONS ]</span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">Software & AI Glossary</h1>
          <p className="text-lg text-devflow-gray-300 max-w-3xl font-light leading-relaxed">
            Concise, authoritative technical definitions for modern enterprise technology, AI architectures, and software engineering terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((t) => (
            <Link
              key={t.slug}
              href={`/glossary/${t.slug}`}
              className="p-6 rounded-2xl glass-panel border border-white/[0.06] hover:border-devflow-green/20 transition-all space-y-3 block group"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-display font-medium text-white group-hover:text-devflow-green transition-colors">{t.term}</h2>
                <span className="text-xs font-mono text-devflow-green">&rarr;</span>
              </div>
              <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">{t.definition}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
