"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { projects } from "@/data/projectData";
import { FiTrendingUp, FiArrowUpRight, FiCode, FiLayers } from "react-icons/fi";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ REAL WORLD OUTCOMES ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Measured Business <br />
              <span className="italic font-normal text-devflow-green font-display">Performance.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You achieve verified ROI. Browse through our software architecture blueprints, development processes, and measured KPIs we delivered for our global startup and SME clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-white/[0.05] group hover:border-devflow-green/20 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-devflow-green/10">
                    {project.category}
                  </span>
                  <Link href={`/work/${project.slug}`} className="text-devflow-gray-400 group-hover:text-devflow-green transition-colors">
                    <FiArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

                <h2 className="text-2xl font-display font-medium text-white mb-3 group-hover:text-devflow-green transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-devflow-gray-300 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                <div className="bg-devflow-black border border-white/[0.05] p-4 rounded-xl space-y-2 mb-6">
                  <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest font-bold">Challenge:</span>
                  <p className="text-xs text-devflow-gray-400 font-light leading-relaxed">{project.challenge}</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                {project.results.map((r) => (
                  <div key={r} className="flex gap-3 items-center text-xs text-white">
                    <FiTrendingUp className="text-devflow-green shrink-0" />
                    <span className="font-medium">{r}</span>
                  </div>
                ))}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono text-[9px] text-devflow-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/[0.04]">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Design Your Blueprint Setup
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Calculate your custom system parameters and timelines with our systems engineers.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px]">
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
