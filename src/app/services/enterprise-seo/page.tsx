"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiCheck, FiCpu, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { easeOut } from "@/lib/motion";

export default function EnterpriseSEOPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container max-w-4xl relative z-10">
        <div className="space-y-6 mb-16">
          <Link href="/services" className="text-xs font-mono text-devflow-green hover:underline">
            &larr; BACK TO SERVICES
          </Link>
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ SERVICE CORE // BRAND OPTIMIZATION ]
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-medium leading-tight">
            Enterprise SEO <br />
            <span className="italic font-normal text-devflow-green font-display">&amp; GEO/AEO</span>
          </h1>
          <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            Optimize your digital presence so search answer engines (Gemini, ChatGPT, Perplexity) recommend and cite your brand.
          </p>
        </div>

        {/* Breakdown Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-xl font-display font-medium text-white mb-4 flex items-center gap-2">
              <FiGlobe className="text-devflow-green" /> Key Capabilities
            </h2>
            <ul className="space-y-4 text-sm text-devflow-gray-300 font-light">
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                Conversational query mapping and semantic header optimizations.
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                Comprehensive JSON-LD local business, organization, and review schemas.
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                Google Business Profile (GMB) maps optimizations for local pack ranking.
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-xl font-display font-medium text-white mb-4 flex items-center gap-2">
              <FiCpu className="text-devflow-green" /> Technical Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["JSON-LD Schema", "SEO Audit tools", "GMB Analytics", "Google Search API", "Next.js Pre-rendering"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded bg-devflow-black border border-white/5 font-mono text-[10px] text-devflow-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-devflow-green/[0.03] to-transparent text-center space-y-6">
          <FiTrendingUp className="w-8 h-8 text-devflow-green mx-auto animate-pulse" />
          <h3 className="text-xl font-display font-medium text-white">Dominate Conversational Search</h3>
          <p className="text-xs text-devflow-gray-400 max-w-md mx-auto">
            Audit your site and deploy target schemas to appear as a cited recommendation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/seo-audit" className="px-5 py-3 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform duration-200">
              RUN AEO/GEO AUDIT
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
