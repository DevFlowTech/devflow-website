"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { projects } from "@/data/projectData";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Aurora Gradient Backdrops */}
      <div className="absolute top-[10%] left-[5%] aurora-bg-blue opacity-30" />
      <div className="absolute top-[40%] right-[10%] aurora-bg-gold opacity-25" />

      {/* Header */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="section-container max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <span className="text-xs font-mono text-devflow-gold uppercase tracking-widest block">
              [ PORTFOLIO / CASE STUDIES ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Crafted Products. <br />
              <span className="italic font-normal text-devflow-blue font-display">Proven Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              Explore our gallery of custom-built web systems, database orchestrations, and enterprise portals. Click any card to read the case study.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-devflow-charcoal/30 border-b border-white/[0.04] sticky top-16 md:top-20 z-20 backdrop-blur-md">
        <div className="section-container">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-devflow-blue text-devflow-black border-devflow-blue"
                    : "bg-transparent text-devflow-gray-400 border-white/5 hover:text-white hover:border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Project Grid - Asymmetrical Bento Grid */}
      <section className="py-20 relative z-10">
        <div className="section-container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              // Create dynamic bento shape: make the first element span 2 columns
              const isLarge = index === 0 && activeCategory === "All";
              return (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col justify-between p-8 rounded-2xl glass-panel ${
                    isLarge ? "md:col-span-2 h-[380px]" : "h-[380px]"
                  }`}
                >
                  {/* Subtle color highlight in background */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accent || '#CCFF00'}, transparent 65%)`
                    }}
                  />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-devflow-green uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-devflow-gray-500">
                        [ {project.tech[0]} ]
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-white group-hover:text-devflow-green transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-devflow-gray-300 text-sm font-light leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tech.slice(0, 4).map((t, idx) => (
                        <span key={idx} className="font-mono text-[10px] text-devflow-gray-500">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/work/${project.slug}`}
                      className="flex items-center gap-1 text-xs font-mono text-devflow-green hover:text-white transition-colors"
                    >
                      CASE STUDY ↗
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
