import type { Metadata } from "next";
import Link from "next/link";
import { FiLock, FiCheck, FiShield, FiUsers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "White Label Software Development Partnerships | DevFlow",
  description: "Silent white-label software engineering for agencies, consultancies, and IT firms with full NDA protection and anonymous delivery.",
  alternates: {
    canonical: "https://www.devflow.co.in/partnerships/white-label-development",
  },
};

export default function WhiteLabelPartnershipPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/partnerships" className="hover:text-white">PARTNERSHIPS</Link>
          <span>/</span>
          <span className="text-devflow-green uppercase">WHITE LABEL ENGINEERING</span>
        </nav>

        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ SILENT ENGINEERING PARTNER ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white">White-Label Software Development</h1>
          <p className="text-base text-devflow-gray-300 font-light leading-relaxed">
            Expand your agency&apos;s technical capabilities overnight. DevFlow acts as your silent engineering department, delivering enterprise Next.js, Node.js, and AI software under complete NDA with whitelabeled repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] space-y-3">
            <FiLock className="w-6 h-6 text-devflow-green" />
            <h2 className="text-xl font-bold text-white">100% Anonymous Delivery</h2>
            <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">
              We sign strict mutual NDAs. Code commits, staging servers, and technical documentation are issued under your agency domain and branding.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] space-y-3">
            <FiShield className="w-6 h-6 text-devflow-green" />
            <h2 className="text-xl font-bold text-white">Presales Architecture Support</h2>
            <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">
              Our founders join client scoping calls as your internal technical architects to help scope requirements and close high-value deals.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-devflow-green/20 space-y-6">
          <h2 className="text-2xl font-display font-medium text-white">White Label Partnership Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-devflow-gray-300">
            <li className="flex gap-2"><FiCheck className="text-devflow-green shrink-0" /> Zero in-house engineering recruitment risk</li>
            <li className="flex gap-2"><FiCheck className="text-devflow-green shrink-0" /> Wholesale agency pricing models for high margins</li>
            <li className="flex gap-2"><FiCheck className="text-devflow-green shrink-0" /> Senior Next.js, Node.js, Python & AI engineers</li>
            <li className="flex gap-2"><FiCheck className="text-devflow-green shrink-0" /> Dedicated Slack channels & white-label Git repos</li>
          </ul>
        </div>

        <div className="pt-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Ready to Scale Your Agency Capacity?</h3>
          <Link href="/contact" className="btn-primary min-w-[200px] inline-block">
            Discuss Partnership
          </Link>
        </div>
      </div>
    </main>
  );
}
