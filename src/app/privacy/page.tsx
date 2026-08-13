import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DevFlow Technology",
  description: "Privacy Policy detailing how DevFlow Technology collects, uses, protects, and handles personal data and client information.",
  alternates: {
    canonical: "https://www.devflow.co.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">PRIVACY POLICY</span>
        </nav>

        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ DATA PROTECTION ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white">Privacy Policy</h1>
          <p className="text-sm text-devflow-gray-400 font-mono">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-devflow-gray-300 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">1. Overview</h2>
            <p>
              DevFlow Technology (&ldquo;DevFlow&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit https://devflow.co.in or communicate with our engineering teams.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when filling out contact forms, booking consultations, or interacting with our site:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-devflow-gray-400">
              <li>Contact details (Name, work email address, company name, phone number).</li>
              <li>Project specifications, budget ranges, and timeline requirements.</li>
              <li>Technical inquiry details provided in messages or chat intake forms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">3. How We Use Your Information</h2>
            <p>
              We use the collected information solely for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-devflow-gray-400">
              <li>Responding to project inquiries and scheduling technical consultations.</li>
              <li>Preparing software project proposals, architecture blueprints, and estimates.</li>
              <li>Improving website navigation, content relevance, and user experience.</li>
              <li>Complying with legal obligations and security verification.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">4. Data Sharing & Third-Party Services</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers strictly necessary for operating our business (e.g. Formspree for contact forms, Vercel for hosting, Google Analytics with consent), subject to confidentiality agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">5. Cookies & Analytics</h2>
            <p>
              We use analytics cookies to understand site performance and visitor journeys. Cookie loading is consent-gated through our Cookie Banner. You may opt out of tracking at any time by declining consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">6. Security Measures</h2>
            <p>
              We implement industry-standard technical and organizational security measures, including HTTPS encryption (TLS 1.3), access controls, and regular environment security audits to protect your data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">7. Your Rights & Contact</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data held by DevFlow. To exercise these rights or ask questions regarding this policy, please contact <a href="mailto:info@devflow.co.in" className="text-devflow-green hover:underline">info@devflow.co.in</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
