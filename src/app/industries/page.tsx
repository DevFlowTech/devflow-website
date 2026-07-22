"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiTrendingUp, FiSettings, FiGrid, FiTruck, FiArrowRight } from "react-icons/fi";

const industries = [
  {
    icon: FiGrid,
    title: "SaaS Startups & Product Teams",
    problem: "Delayed feature releases and scaling complexity causing subscription churn.",
    solution: "We act as your dedicated engineering core, building Next.js edge-rendered frontends, Stripe billing pipelines, and auto-scaling AWS backend systems.",
  },
  {
    icon: FiSettings,
    title: "Manufacturing & Industrial ERP",
    problem: "Spreadsheet siloing causing raw material inventory sync errors and slow order audits.",
    solution: "Custom multi-role ERP portals that automate purchase order triggers, warehouse status tracking, and database synchronization.",
  },
  {
    icon: FiTruck,
    title: "Logistics & Supply Chain",
    problem: "Route planning errors and delayed customs clearance tracking.",
    solution: "Dynamic, real-time dashboards mapping dispatch status, secure custom integration pipelines, and client portal notification setups.",
  },
  {
    icon: FiTrendingUp,
    title: "Real Estate & Property SaaS",
    problem: "High search latency on heavy image property listing portals.",
    solution: "Optimized Cloudflare caching, distributed database queries, and sub-second page layouts that drive conversions.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ TARGET SECTORS ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Vertical Solutions. <br />
              <span className="italic font-normal text-devflow-green font-display">Engineered Focus.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You receive domain-specific technical setups. We combine our custom database, AI, and edge web capabilities to construct custom solutions for key business sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-white/[0.05]"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{ind.title}</h3>
                  </div>
                  
                  <div className="bg-devflow-black border border-white/[0.05] p-4 rounded-xl space-y-2">
                    <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block font-bold">The Problem</span>
                    <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{ind.problem}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-6 mt-6 border-t border-white/5">
                  <span className="text-[9px] font-mono text-devflow-green uppercase tracking-widest block font-bold">The Solution</span>
                  <p className="text-xs text-white leading-relaxed font-light">{ind.solution}</p>
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
            Get Technical Industry Blueprints
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss your industry constraints and workflow bottlenecks with our core architecture leads.
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
