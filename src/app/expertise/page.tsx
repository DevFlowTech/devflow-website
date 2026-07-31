"use client";

import SkillsSection from "@/components/sections/SkillsSection";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-16 overflow-hidden">
      <StructuredData />
      
      {/* Re-use the clean SkillsSection component */}
      <SkillsSection />

      {/* Final page-specific CTA */}
      <section className="py-20 border-t border-white/[0.04] bg-devflow-black text-center relative z-10">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <p className="text-xs font-mono text-devflow-gray-500 uppercase tracking-widest">[ READY TO WORK WITH OUR EXPERTISE? ]</p>
          <h2 className="font-display text-2xl md:text-4xl font-medium">Build Secure, Custom Software Systems</h2>
          <p className="text-sm text-devflow-gray-400 font-light max-w-md mx-auto">
            Our engineers are ready to build SaaS products, database backends, automated crawlers, and custom business portals.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            START PROJECT DISCOVERY &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
