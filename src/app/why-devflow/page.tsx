import type { Metadata } from "next";
import Link from "next/link";
import { FiCheckCircle, FiShield, FiCode, FiLayers, FiLock, FiCpu, FiUsers, FiTerminal, FiCheck, FiX } from "react-icons/fi";
import InternalLinkHub from "@/components/SEO/InternalLinkHub";

export const metadata: Metadata = {
  title: "Why DevFlow | Engineering Standards & Architecture Differentiators",
  description: "Discover why high-growth enterprises and technology founders partner with DevFlow for custom software systems, enterprise ERPs, and sovereign AI engineering.",
  alternates: {
    canonical: "https://www.devflow.co.in/why-devflow",
  },
  openGraph: {
    title: "Why DevFlow | Engineering Standards & Architecture Differentiators",
    description: "Enterprise software engineering built on 100% IP ownership, sub-second API performance, and zero recurring vendor seat fees.",
    url: "https://www.devflow.co.in/why-devflow",
  },
};

export default function WhyDevFlowPage() {
  const differentiators = [
    {
      title: "Architecture-First Software Engineering",
      description: "We design relational database schemas, row-level security roles, and TypeScript API contracts before writing frontend code, eliminating technical debt from day one.",
      icon: FiLayers,
    },
    {
      title: "Direct Founder & Systems Engineer Access",
      description: "You work directly with Bhavin Rajput (CTO) and Prince Gajjar (CEO)—senior architects who take full personal responsibility for code quality, security, and milestones.",
      icon: FiUsers,
    },
    {
      title: "100% Source-Code & IP Ownership",
      description: "Complete asset transfer upon project delivery. Zero recurring per-user software licensing, zero vendor lock-in, and full control over your code base.",
      icon: FiLock,
    },
    {
      title: "Security-Conscious OWASP Engineering",
      description: "Every digital system incorporates OWASP Top 10 guidelines, TLS 1.3 data encryption in transit, AES-256 for credentials, and isolated environment pipelines.",
      icon: FiShield,
    },
    {
      title: "Radical Sprint Telemetry & Transparency",
      description: "Weekly live staging demos, dedicated Slack/GitHub channels, and transparent code reviews without traditional agency fluff or sales proxy buffers.",
      icon: FiCode,
    },
    {
      title: "Production SLA & Continuous Performance",
      description: "Post-launch maintenance contracts, automated error telemetry, server health monitoring, and guaranteed sub-second API response SLA targets.",
      icon: FiTerminal,
    },
  ];

  const comparisonData = [
    { metric: "IP & Source Code Ownership", devflow: "100% Client Owned (Zero License Fees)", agency: "Proprietary Lock-in / Rent Model" },
    { metric: "Technical Access", devflow: "Direct Access to Founders & Senior Engineers", agency: "Buffered Account Manager Layer" },
    { metric: "Backend Architecture", devflow: "Clean Next.js, Node.js & Relational Postgres", agency: "Generic Template / Monolith Bloat" },
    { metric: "AI & Security Boundaries", devflow: "Sovereign Private Vector DB & RAG Security", agency: "Third-Party Wrapper API Widgets" },
    { metric: "Performance Guarantee", devflow: "Lighthouse 95+ & Sub-Second LCP Performance", agency: "Unoptimized Heavy Script Bundles" },
  ];

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Navigation Breadcrumb */}
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">WHY DEVFLOW</span>
        </nav>

        {/* Hero Section */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ ENGINEERING DIFFERENTIATORS &amp; STANDARDS ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            Why High-Growth Companies Choose DevFlow Technology.
          </h1>
          <p className="text-lg text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            DevFlow is an engineering-first software company. We build production-grade digital infrastructure, bespoke enterprise software systems, custom ERPs, and sovereign AI agents for companies that have outgrown rigid off-the-shelf software and manual spreadsheet pipelines.
          </p>
        </div>

        {/* Quick Answer Summary Callout (AEO / Snippet Ready) */}
        <div className="p-8 rounded-2xl glass-panel bg-gradient-to-br from-devflow-green/[0.03] to-transparent border border-devflow-green/20 space-y-4">
          <h2 className="text-xs font-mono text-devflow-green uppercase tracking-widest flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4" />
            [ DIRECT VALUE SUMMARY ]
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light">
            <strong>What makes DevFlow different?</strong> Unlike traditional digital agencies that sell generic templates or rent user seat licenses, DevFlow designs custom software applications and AI systems engineered for 100% client code ownership, maximum performance, and zero recurring vendor fees.
          </p>
        </div>

        {/* Grid of Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="p-8 rounded-2xl glass-panel border border-white/[0.06] hover:border-devflow-green/20 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-devflow-green/10 border border-devflow-green/30 flex items-center justify-center text-devflow-green">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-display font-medium text-white">{d.title}</h2>
                <p className="text-sm text-devflow-gray-300 leading-relaxed font-light">
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Comparison Table */}
        <div className="space-y-6 pt-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ ARCHITECTURAL COMPARISON ]</span>
            <h2 className="text-2xl font-display font-medium text-white">DevFlow vs Traditional Agencies &amp; Template Vendors</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/[0.06] text-devflow-green">
                  <th className="p-4 font-mono font-medium">ENGINEERING METRIC</th>
                  <th className="p-4 font-mono font-medium">DEVFLOW TECHNOLOGY</th>
                  <th className="p-4 font-mono font-medium">GENERIC AGENCY / VENDOR</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 text-white font-medium">{row.metric}</td>
                    <td className="p-4 text-devflow-green font-mono flex items-center gap-1.5">
                      <FiCheck className="w-4 h-4 shrink-0 text-devflow-green" />
                      <span>{row.devflow}</span>
                    </td>
                    <td className="p-4 text-devflow-gray-400 font-mono flex items-center gap-1.5">
                      <FiX className="w-4 h-4 shrink-0 text-devflow-gold" />
                      <span>{row.agency}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Internal Link Hub */}
        <InternalLinkHub currentCategory="service" currentSlug="why-devflow" />

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-devflow-green/10 to-transparent border border-devflow-green/20 text-center space-y-4">
          <h3 className="text-2xl font-display font-medium text-white">Ready for a Serious Engineering Partner?</h3>
          <p className="text-xs text-devflow-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a technical consultation directly with our engineering founders to review your project scope and architecture options.
          </p>
          <Link href="/contact" className="btn-primary inline-block min-w-[200px]">
            Discuss Your Project &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
