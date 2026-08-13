import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | DevFlow Technology",
  description: "Terms of Service for DevFlow Technology custom software engineering, consulting, and digital development services.",
  alternates: {
    canonical: "https://www.devflow.co.in/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">TERMS OF SERVICE</span>
        </nav>

        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ LEGAL AGREEMENT ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white">Terms of Service</h1>
          <p className="text-sm text-devflow-gray-400 font-mono">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-devflow-gray-300 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">1. Engagement & Services</h2>
            <p>
              These Terms of Service govern your use of the DevFlow Technology website (https://devflow.co.in) and any custom software development, AI engineering, consulting, or technical support services provided under a Master Services Agreement (MSA) or Statement of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise specified in a signed SOW, upon full payment of project milestones, DevFlow Technology assigns 100% source code ownership and intellectual property rights for custom software applications delivered to the client. DevFlow retains rights to pre-existing developer utilities and open-source packages integrated into the solution under their respective licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">3. Client Responsibilities</h2>
            <p>
              Clients agree to provide timely feedback, data access credentials, and technical specifications required to execute agreed milestone deliverables. Delay in client feedback may adjust project delivery schedules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">4. Confidentiality & Non-Disclosure</h2>
            <p>
              Both parties agree to protect non-public technical and commercial information shared during the engagement. Mutual non-disclosure agreements (NDAs) are executed prior to sharing sensitive codebases or business data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">5. Warranties & Limitation of Liability</h2>
            <p>
              Services are provided in a professional, workmanlike manner adhering to agreed technical specifications. Except as explicitly outlined in a formal SLA, DevFlow Technology provides website materials and demonstration tools &ldquo;as is&rdquo; without implied warranties. Liability for service interruptions or errors under paid SOWs is limited to fees paid under the specific engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any legal proceedings arising from these terms shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">7. Contact Information</h2>
            <p>
              For legal inquiries or contractual clarifications, please contact us at <a href="mailto:info@devflow.co.in" className="text-devflow-green hover:underline">info@devflow.co.in</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
