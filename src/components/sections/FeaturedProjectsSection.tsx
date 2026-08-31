"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiCpu } from "react-icons/fi";
import { projects } from "@/data/projectData";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function FeaturedProjectsSection() {
  // Take top 3 projects for the landing page
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-devflow-black border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-devflow-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-mono text-devflow-blue tracking-wider block mb-4">
              [ Portfolio Preview // Proven Builds ]
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight">
              Featured Case Studies &amp; <br />
              <span className="italic font-normal text-devflow-blue font-display">Client Projects</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-secondary group"
          >
            <span>View All Projects</span>
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {featured.map((p, index) => (
            <motion.div
              key={p.slug}
              variants={staggerItem}
            >
              <Link
                href={`/work/${p.slug}`}
                className="block h-full"
                aria-label={`Read case study: ${p.title}`}
              >
                <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-[360px] relative overflow-hidden group hover:border-devflow-blue/20 transition-all duration-300 cursor-pointer">
                  {/* Radial glow in card background */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${p.accent}, transparent 65%)`
                    }}
                  />

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-mono text-devflow-blue bg-devflow-blue/10 border border-devflow-blue/20 px-2.5 py-1 rounded-md">
                        {p.category}
                      </span>
                      <span className="text-xs font-mono text-devflow-gray-400">[ 0{index + 1} ]</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-devflow-blue transition-colors duration-200 mb-3">
                      {p.title}
                    </h3>
                    <p className="text-devflow-gray-300 text-xs leading-relaxed font-light line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="font-mono text-xs text-devflow-gray-300">
                      {p.tech.slice(0, 2).join(" • ")}
                    </span>
                    <span className="text-xs font-mono text-devflow-blue flex items-center gap-1 group-hover:underline">
                      Case Study &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
