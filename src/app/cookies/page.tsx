import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | DevFlow Technology",
  description: "DevFlow Technology Cookie Policy detailing cookie consent, analytics trackers, and visitor privacy controls.",
  alternates: {
    canonical: "https://www.devflow.co.in/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-4xl mx-auto space-y-12 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">COOKIE POLICY</span>
        </nav>

        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ PRIVACY PREFERENCES ]</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white">Cookie Policy</h1>
          <p className="text-sm text-devflow-gray-400 font-mono">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-devflow-gray-300 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your web browser or device when you visit a website. They help websites remember preferences, analyze traffic, and ensure security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">2. How We Use Cookies</h2>
            <p>
              DevFlow Technology uses cookies solely to maintain essential site functionality and analyze aggregated, non-personally identifiable site usage telemetry.
            </p>
            <div className="space-y-2 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <strong className="text-white block mb-1">Essential Cookies:</strong>
                <span className="text-xs text-devflow-gray-400">Required for website navigation and security (e.g. saving cookie consent preferences).</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <strong className="text-white block mb-1">Analytics Cookies (Consent-Gated):</strong>
                <span className="text-xs text-devflow-gray-400">Google Analytics and Microsoft Clarity trackers loaded only after explicit visitor acceptance via the Cookie Banner.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">3. Managing Your Cookie Preferences</h2>
            <p>
              You can control or clear cookies at any time through your browser settings or by accepting/declining consent on our site&apos;s Cookie Banner. Declining consent prevents non-essential analytics scripts from firing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-white">4. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, contact us at <a href="mailto:info@devflow.co.in" className="text-devflow-green hover:underline">info@devflow.co.in</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
