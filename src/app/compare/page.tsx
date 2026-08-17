import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiX, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Technical & Software Comparisons | DevFlow Technology",
  description: "Balanced technical analysis comparing AI agents vs chatbots, RAG vs fine-tuning, custom software vs off-the-shelf SaaS, and custom ERPs.",
  alternates: {
    canonical: "https://www.devflow.co.in/compare",
  },
};

export default function ComparePage() {
  const comparisons = [
    {
      slug: "ai-agent-vs-chatbot",
      title: "AI Agent vs. AI Chatbot",
      description: "Compare autonomous action-executing AI agents against rule-based and conversational chatbots for business automation.",
      verdict: "AI Agents are recommended for multi-step workflow execution and API database writes.",
    },
    {
      slug: "rag-vs-fine-tuning",
      title: "RAG vs. Fine-Tuning",
      description: "Compare Retrieval-Augmented Generation (RAG) against Model Fine-Tuning for enterprise data retrieval and security.",
      verdict: "RAG is recommended for dynamic document search; Fine-tuning is recommended for tone and specialized output styling.",
    },
    {
      slug: "custom-software-vs-off-the-shelf",
      title: "Custom Software vs. Off-The-Shelf Software",
      description: "Analyze the long-term ROI, IP ownership, and operational flexibility of custom software vs ready-made subscriptions.",
      verdict: "Custom software is recommended when business logic is a proprietary competitive differentiator.",
    },
    {
      slug: "custom-erp-vs-ready-made-erp",
      title: "Custom ERP vs. Ready-Made ERP (SAP / Oracle)",
      description: "Compare zero-licensing custom Next.js ERP platforms against high-cost SAP/Oracle enterprise modules.",
      verdict: "Custom ERPs eliminate seat licensing fees and adapt 100% to your warehouse & billing rules.",
    },
    {
      slug: "react-vs-nextjs",
      title: "React SPA vs. Next.js App Router",
      description: "Compare single-page client rendering against Server-Side Rendering (SSR) for search visibility and speed.",
      verdict: "Next.js is recommended for search visibility, sub-second LCP, and hybrid server-client architecture.",
    },
    {
      slug: "datadog-vs-new-relic",
      title: "Datadog vs. New Relic vs. Dynatrace",
      description: "Compare enterprise APM, log management, and cloud observability pricing, overhead, and features for cloud-native stacks.",
      verdict: "Datadog is ideal for cloud-native microservices; New Relic offers predictable full-stack pricing; Dynatrace excels in automated root-cause AI.",
    },
    {
      slug: "dedicated-team-vs-in-house-hiring",
      title: "Dedicated Development Team vs. In-House Hiring",
      description: "Compare total cost of ownership, hiring velocity, and IP control of dedicated offshore engineering teams vs in-house employees.",
      verdict: "Dedicated engineering teams cut overhead by 60%+ and scale in days, while in-house hiring is best for local executive leadership.",
    },
  ];

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-5xl mx-auto space-y-16 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-white transition-colors">RESOURCES</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">COMPARE</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ BALANCED TECHNICAL COMPARISONS ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            Architectural Trade-Off Analysis.
          </h1>
          <p className="text-lg text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            We evaluate technology trade-offs objectively. Read our technical breakdowns to choose the right architecture for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((c) => (
            <div
              key={c.slug}
              className="p-8 rounded-2xl glass-panel border border-white/[0.06] flex flex-col justify-between space-y-6 hover:border-devflow-green/20 transition-all"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest">[ COMPARISON SPEC ]</span>
                <h2 className="text-2xl font-display font-medium text-white">{c.title}</h2>
                <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{c.description}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                <span className="text-[9px] font-mono text-devflow-green uppercase tracking-widest block">Engineering Recommendation:</span>
                <p className="text-xs text-devflow-gray-200 font-light">{c.verdict}</p>
              </div>

              <Link
                href={`/compare/${c.slug}`}
                className="text-xs font-mono text-devflow-green inline-flex items-center gap-2 hover:underline"
              >
                READ FULL COMPARISON &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
