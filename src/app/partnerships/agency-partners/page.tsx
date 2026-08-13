import type { Metadata } from "next";
import Link from "next/link";
import { FiUsers, FiCheck, FiAward, FiTrendingUp } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Agency Partner Network | DevFlow Technology",
  description: "Strategic partnerships for digital marketing agencies, UI/UX design studios, and IT consultancies to deliver joint custom software systems.",
  alternates: {
    canonical: "https://www.devflow.co.in/partnerships/agency-partners",
  },
};

export default function AgencyPartnersPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/partnerships" className="hover:text-white">PARTNERSHIPS</Link>
          <span>/</span>
          <span className="text-devflow-green uppercase">AGENCY PARTNERS</span>
        </nav>

        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ STRATEGIC ALLIANCES ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white">Agency Partner Network</h1>
          <p className="text-base text-devflow-gray-300 font-light leading-relaxed">
            Partner with DevFlow to deliver high-complexity software engineering, AI automation, and custom ERP systems to your agency clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] space-y-3">
            <span className="text-xs font-mono text-devflow-green">[ DESIGN AGENCIES ]</span>
            <h2 className="text-lg font-bold text-white">UI/UX Studios</h2>
            <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">Transform your client Figma designs into production Next.js and React Native codebases.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] space-y-3">
            <span className="text-xs font-mono text-devflow-green">[ SEO AGENCIES ]</span>
            <h2 className="text-lg font-bold text-white">SEO & Marketing</h2>
            <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">Fix deep Core Web Vitals, SSR rendering, and JSON-LD schema debt for client portals.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] space-y-3">
            <span className="text-xs font-mono text-devflow-green">[ CONSULTANTS ]</span>
            <h2 className="text-lg font-bold text-white">IT Consultancies</h2>
            <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">Build custom ERPs, CRMs, and AI search engines mapped to your client audit recommendations.</p>
          </div>
        </div>

        <div className="pt-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Explore an Agency Partnership</h3>
          <Link href="/contact" className="btn-primary min-w-[200px] inline-block">
            Talk to Partnership Lead
          </Link>
        </div>
      </div>
    </main>
  );
}
