import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | DevFlow Technology",
  description:
    "Professional Terms of Service governing custom software development, AI engineering, consulting, and software infrastructure services by DevFlow Technology.",
  alternates: {
    canonical: "https://www.devflow.co.in/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">
            HOME
          </Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">
            TERMS OF SERVICE
          </span>
        </nav>

        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ LEGAL AGREEMENT ]
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white">
            Terms of Service
          </h1>
          <p className="text-sm text-devflow-gray-400 font-mono">
            Last Updated: August 2026
          </p>
        </div>

        <div className="space-y-8 text-sm text-devflow-gray-300 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              1. Introduction
            </h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
              DevFlow Technology website (https://devflow.co.in) and any custom
              software engineering, AI development, consulting, SaaS
              development, ERP development, or technical services provided by
              DevFlow Technology (&ldquo;Company&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing our website
              or executing a Statement of Work (SOW) or Master Services
              Agreement (MSA) with us, you (&ldquo;Client&rdquo; or
              &ldquo;User&rdquo;) agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              2. Definitions
            </h2>
            <p>
              In these Terms, the following definitions apply:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>&ldquo;Deliverables&rdquo;</strong> refers to custom
                source code, applications, software systems, configurations, or
                documentation created specifically for the Client under an SOW.
              </li>
              <li>
                <strong>&ldquo;Statement of Work (SOW)&rdquo;</strong> refers
                to a formal agreement or project specification executed by both
                parties outlining project milestones, pricing, deliverables, and
                schedules.
              </li>
              <li>
                <strong>&ldquo;Pre-existing Materials&rdquo;</strong> means
                software tools, reusable code snippets, libraries, frameworks,
                or software utilities owned by DevFlow Technology prior to or
                developed independently of the project engagement.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              3. Services
            </h2>
            <p>
              DevFlow Technology provides custom software development, artificial
              intelligence integration, web and mobile application engineering,
              ERP/CRM systems development, and technology consulting services.
              The specific scope, milestones, technical deliverables, and
              schedules for any engagement shall be documented in an agreed-upon SOW.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              4. Client Responsibilities
            </h2>
            <p>
              Client agrees to provide timely cooperation, necessary access
              credentials, data samples, technical inputs, and milestone approvals
              required for project execution. Delays in Client feedback or provision
              of required inputs may extend agreed milestone completion dates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              5. Project Scope & Change Management
            </h2>
            <p>
              Any requests for modifications, additions, or enhancements outside
              the scope detailed in the applicable SOW shall be evaluated via a
              written Change Request process. Adjustments to project timeline or
              fees resulting from scope modifications will be agreed upon by both
              parties in writing prior to implementation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              6. Payment Terms
            </h2>
            <p>
              Services are billed according to the milestone schedule or retainer
              terms set forth in the applicable SOW. Unless specified otherwise in
              the SOW, invoices are due within fourteen (14) days of issuance. Late
              payments may be subject to interest at a rate of 1.5% per month or the
              maximum legal rate allowable, whichever is lower.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              7. Intellectual Property
            </h2>
            <p>
              Upon full payment of all fees associated with a completed project or
              milestone under an SOW, DevFlow Technology assigns to the Client 100%
              ownership of the custom source code and unique deliverables created
              specifically for the Client. DevFlow Technology retains ownership of its
              Pre-existing Materials and open-source packages, for which Client is
              granted a perpetual, non-exclusive, royalty-free license to use as part
              of the Deliverable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              8. Confidentiality
            </h2>
            <p>
              Both parties agree to treat all non-public technical, financial, and
              business information received during the engagement as strictly confidential.
              Neither party shall disclose confidential information to any third party
              without prior written consent, except as required by applicable law or
              under a mutual Non-Disclosure Agreement (NDA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              9. Third-Party Services
            </h2>
            <p>
              Deliverables may integrate third-party APIs, libraries, cloud hosts,
              or services (such as AWS, Vercel, OpenAI, Stripe, or Google Cloud).
              Client acknowledges that third-party services are governed by their
              respective terms, and DevFlow Technology is not responsible for third-party
              service outages, policy updates, or pricing adjustments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              10. Software and Deliverables Acceptance
            </h2>
            <p>
              Upon delivery of a project milestone or completed software release,
              Client shall have a specified review period (default seven (7) business
              days, unless defined otherwise in the SOW) to test the Deliverable against
              agreed technical specifications and submit written feedback.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              11. Warranty / Bug Fixing
            </h2>
            <p>
              DevFlow Technology warrants that Deliverables will perform substantially
              in accordance with agreed technical specifications for a period of thirty
              (30) days following final handover. During this warranty period, we will
              remediate reproducible software bugs attributable to our implementation
              at no additional charge.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              12. Support and Maintenance
            </h2>
            <p>
              Following the conclusion of the initial warranty period, ongoing software
              maintenance, feature updates, server monitoring, and SLA support are
              provided under a separate Support and Maintenance Agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              13. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, neither party shall be
              liable for indirect, incidental, consequential, special, or punitive damages,
              including lost profits or revenue. Total cumulative liability arising out
              of or related to any engagement shall not exceed the total fees paid by the
              Client under the specific SOW giving rise to the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              14. Termination
            </h2>
            <p>
              Either party may terminate an engagement or SOW for material breach upon
              thirty (30) days written notice, provided the breaching party fails to cure
              such breach within the notice period. Upon termination, Client shall pay for
              all work completed and expenses incurred up to the effective termination date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              15. Refund & Cancellation Policy
            </h2>
            <p>
              Milestone payments represent work performed and technical resources allocated.
              Refunds or cancellations for completed milestones are not applicable once the
              milestone deliverables have been tested and accepted by the Client in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              16. Dispute Resolution
            </h2>
            <p>
              In the event of any dispute or claim arising out of these Terms or an SOW, the
              parties agree to attempt to resolve the matter in good faith through executive
              negotiations prior to initiating formal legal proceedings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              17. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any related agreements are governed by the laws of India.
              Any legal action or proceeding shall be brought exclusively in the competent
              courts located in Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              18. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms from time to time to reflect changes
              in technology, legal requirements, or our service offerings. The updated version
              will be posted on this page with a revised &ldquo;Last Updated&rdquo; date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">
              19. Contact Information
            </h2>
            <p>
              If you have any questions or legal inquiries regarding these Terms, please contact
              our team at:
            </p>
            <p className="font-mono text-devflow-green">
              Email: info@devflow.co.in
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

