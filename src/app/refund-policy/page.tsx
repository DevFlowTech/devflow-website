import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Billing Policy | DevFlow Technology",
  description: "DevFlow Technology commercial billing, milestone payment, and refund policy terms.",
  alternates: {
    canonical: "https://www.devflow.co.in/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">REFUND POLICY</span>
        </nav>

        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ COMMERCIAL BILLING ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white">Refund & Billing Policy</h1>
          <p className="text-sm text-devflow-gray-400 font-mono">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-devflow-gray-300 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">1. Milestone-Based Commercial Terms</h2>
            <p>
              DevFlow Technology operates primarily on fixed-price, milestone-driven contracts or monthly dedicated team retainers, as specified in individual Statements of Work (SOW). Payment schedules align directly with verifiable technical deliverables.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">2. Discovery & Initial Deposit</h2>
            <p>
              Initial discovery deposits cover architectural scoping, system wireframing, and database design sprints. Once technical discovery work commences, initial scoping fees are non-refundable as engineering labor has been expended.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">3. Milestone Approvals & Refunds</h2>
            <p>
              Payments tied to project milestones are invoiceable upon client review and sign-off of staging builds. If a delivered milestone fails to meet agreed SOW specifications, DevFlow will remediate code discrepancies during dedicated QA sprints. Refunds for unperformed future milestones are evaluated on a case-by-case basis as governed by the underlying Master Services Agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">4. Retainer Cancellations</h2>
            <p>
              Monthly dedicated development team retainers may be cancelled with 30 days written notice prior to the start of the next billing cycle.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">5. Billing Contact</h2>
            <p>
              For billing inquiries or milestone reviews, please contact your account manager or email <a href="mailto:info@devflow.co.in" className="text-devflow-green hover:underline">info@devflow.co.in</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
