import Link from "next/link";
import { FiLayers, FiHelpCircle, FiColumns, FiCpu, FiBookOpen } from "react-icons/fi";

interface InternalLinkHubProps {
  currentCategory?: "service" | "industry" | "compare" | "glossary" | "technology" | "work";
  currentSlug?: string;
}

export default function InternalLinkHub({ currentCategory, currentSlug }: InternalLinkHubProps) {
  const comparisons = [
    { title: "AI Agent vs Chatbot", href: "/compare/ai-agent-vs-chatbot" },
    { title: "RAG vs Fine-Tuning", href: "/compare/rag-vs-fine-tuning" },
    { title: "Custom Software vs Off-The-Shelf", href: "/compare/custom-software-vs-off-the-shelf" },
    { title: "Custom ERP vs SAP / Oracle", href: "/compare/custom-erp-vs-ready-made-erp" },
    { title: "React SPA vs Next.js SSR", href: "/compare/react-vs-nextjs" },
  ];

  const glossaryTerms = [
    { title: "AI Agent", href: "/glossary/ai-agent" },
    { title: "RAG", href: "/glossary/rag" },
    { title: "ERP", href: "/glossary/erp" },
    { title: "SaaS", href: "/glossary/saas" },
    { title: "API", href: "/glossary/api" },
    { title: "Next.js", href: "/glossary/nextjs" },
    { title: "GEO Strategy", href: "/glossary/geo" },
    { title: "AEO Direct Answers", href: "/glossary/aeo" },
  ];

  const corePillars = [
    { title: "Engineering Philosophy", href: "/why-devflow" },
    { title: "Technology Stack", href: "/technology" },
    { title: "Founders & Leadership", href: "/about/founders" },
    { title: "Case Studies & Outcomes", href: "/case-studies" },
    { title: "White Label Partnerships", href: "/partnerships/white-label-development" },
    { title: "Agency Alliance Network", href: "/partnerships/agency-partners" },
  ];

  return (
    <section className="py-12 border-t border-white/[0.08] mt-16 space-y-10">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div>
          <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block">
            [ TOPIC CLUSTER &amp; ARCHITECTURAL KNOWLEDGE HUB ]
          </span>
          <h3 className="text-xl font-display font-medium text-white mt-1">
            Explore Connected Architectural Guides
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Trade-Off Comparisons */}
        <div className="space-y-4 p-6 rounded-xl bg-white/[0.01] border border-white/[0.04]">
          <div className="flex items-center gap-2 text-devflow-green text-xs font-mono font-semibold uppercase tracking-wider">
            <FiColumns className="w-4 h-4" /> Technical Comparisons
          </div>
          <ul className="space-y-2 text-xs">
            {comparisons.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="text-devflow-gray-300 hover:text-devflow-green transition-colors font-light flex items-center justify-between group"
                >
                  <span>{c.title}</span>
                  <span className="text-[10px] font-mono text-devflow-gray-500 group-hover:text-devflow-green transition-colors">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Glossary */}
        <div className="space-y-4 p-6 rounded-xl bg-white/[0.01] border border-white/[0.04]">
          <div className="flex items-center gap-2 text-devflow-green text-xs font-mono font-semibold uppercase tracking-wider">
            <FiBookOpen className="w-4 h-4" /> Engineering Definitions
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {glossaryTerms.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-devflow-gray-300 hover:text-devflow-green hover:border-devflow-green/30 transition-all"
              >
                {g.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Company & Infrastructure Pillars */}
        <div className="space-y-4 p-6 rounded-xl bg-white/[0.01] border border-white/[0.04]">
          <div className="flex items-center gap-2 text-devflow-green text-xs font-mono font-semibold uppercase tracking-wider">
            <FiCpu className="w-4 h-4" /> Core Infrastructure &amp; Entity
          </div>
          <ul className="space-y-2 text-xs">
            {corePillars.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-devflow-gray-300 hover:text-devflow-green transition-colors font-light flex items-center justify-between group"
                >
                  <span>{p.title}</span>
                  <span className="text-[10px] font-mono text-devflow-gray-500 group-hover:text-devflow-green transition-colors">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
