"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiBookOpen, FiFileText, FiCpu, FiSettings, FiArrowRight } from "react-icons/fi";

const resourcesTypes = [
  {
    icon: FiBookOpen,
    title: "Technical Blog",
    description: "Expert insights on Next.js edge-rendering configurations, Python FastAPI architectures, and AI model integrations.",
    href: "/blog",
    cta: "Read Articles",
  },
  {
    icon: FiFileText,
    title: "Knowledge Base",
    description: "In-depth blueprints, comparisons, and guides such as 'Software Cost Calculator Guide' and 'Enterprise ERP Architectures'.",
    href: "/knowledge-base",
    cta: "Browse Guides",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ TECHNICAL LIBRARIES ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Resources & <br />
              <span className="italic font-normal text-devflow-green font-display">Engineering Guides.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You receive expert architectural patterns. Browse through our software development insights, AI guides, and ERP system design templates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourcesTypes.map((res, idx) => {
            const Icon = res.icon;
            return (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-white/[0.05] hover:border-devflow-green/20 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
                    <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{res.description}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex">
                  <Link href={res.href} className="text-xs font-semibold text-devflow-green inline-flex items-center gap-2 group-hover:underline">
                    {res.cta} <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/[0.04]">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Get Technical Process Blueprint
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss your software architecture, scaling challenges, and roadmap timelines with our core systems team.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px] inline-flex items-center justify-center gap-2">
              Book Strategy Call <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
