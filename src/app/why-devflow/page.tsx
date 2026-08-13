import type { Metadata } from "next";
import Link from "next/link";
import { FiCheckCircle, FiShield, FiCode, FiLayers, FiLock, FiCpu, FiUsers, FiCpu as FiTerminal } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Why DevFlow | Engineering Differentiators & Standards",
  description: "Discover why growing businesses and enterprise teams partner with DevFlow Technology for custom software, AI implementation, and digital infrastructure.",
  alternates: {
    canonical: "https://www.devflow.co.in/why-devflow",
  },
};

export default function WhyDevFlowPage() {
  const differentiators = [
    {
      title: "Architecture-First Development",
      description: "We design database schemas, security roles, and API contracts before writing frontend code, avoiding technical debt.",
      icon: FiLayers,
    },
    {
      title: "Direct Founder Involvement",
      description: "You work directly with senior architects and founders who take personal responsibility for code quality and milestones.",
      icon: FiUsers,
    },
    {
      title: "100% Source-Code Ownership",
      description: "Full IP transfer upon project delivery with zero per-seat licensing fees or hidden recurring vendor lock-in.",
      icon: FiLock,
    },
    {
      title: "Security-Conscious Engineering",
      description: "Every codebase incorporates OWASP Top 10 guidelines, encrypted data handling, and strict environment isolation.",
      icon: FiShield,
    },
    {
      title: "Radical Communication Transparency",
      description: "Weekly active sprint demos, dedicated communication channels, and clear progress telemetry without agency fluff.",
      icon: FiCode,
    },
    {
      title: "Long-Term SLA & Support",
      description: "Post-launch maintenance contracts, server monitoring, and guaranteed issue response timelines.",
      icon: FiTerminal,
    },
  ];

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-5xl mx-auto space-y-16 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">WHY DEVFLOW</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ REAL ENGINEERING DIFFERENTIATORS ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            Why High-Growth Companies Choose DevFlow.
          </h1>
          <p className="text-lg text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            We are not a generic web agency. We are a software engineering company built for businesses that require production-grade digital infrastructure, clean architecture, and reliable AI execution.
          </p>
        </div>

        {/* Grid of Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-devflow-green/10 to-transparent border border-devflow-green/20 text-center space-y-4">
          <h3 className="text-2xl font-display font-medium text-white">Ready for a Serious Engineering Partner?</h3>
          <p className="text-xs text-devflow-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a technical consultation directly with our engineering founders to review your project scope and architecture options.
          </p>
          <Link href="/contact" className="btn-primary inline-block min-w-[200px]">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
