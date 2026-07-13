"use client";

import { motion } from "framer-motion";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { staggerContainer, staggerItem, easeOut } from "@/lib/motion";
import { projects } from "@/data/projectData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-devflow-black pt-28 pb-16 overflow-hidden">
      {/* Back button */}
      <div className="section-container max-w-5xl pt-8">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-xs font-mono text-devflow-gray-400 hover:text-devflow-green transition-colors"
        >
          ← BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Case Study Hero */}
      <section className="py-12 border-b border-white/[0.04] relative">
        <div 
          className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${project.accent}, transparent)`
          }}
        />

        <div className="section-container max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ {project.category} ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Visit Live Site ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Specifications */}
      <section className="py-12 bg-devflow-charcoal/20 border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="text-[10px] font-mono text-devflow-gray-500 uppercase tracking-widest block mb-2">
                CLIENT PROJECT
              </span>
              <span className="text-sm text-white font-medium">
                {project.title}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-devflow-gray-500 uppercase tracking-widest block mb-2">
                SERVICE VERTICAL
              </span>
              <span className="text-sm text-white font-medium">
                {project.category}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-devflow-gray-500 uppercase tracking-widest block mb-2">
                DEPLOYED INFRA
              </span>
              <span className="text-sm text-white font-mono text-xs">
                {project.tech[0]} / {project.tech[1]}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-devflow-gray-500 uppercase tracking-widest block mb-2">
                OUTCOME RATING
              </span>
              <span className="text-sm text-devflow-green font-medium">
                ★★★★★ 5.0
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Breakdown */}
      <section className="py-20 border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
                [ THE CHALLENGE ]
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-white leading-tight">
                Pain points and systemic bottlenecks.
              </h2>
              <p className="text-devflow-gray-300 font-light leading-relaxed text-sm">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
                [ THE SOLUTION ]
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-white leading-tight">
                How we engineered a resolution.
              </h2>
              <p className="text-devflow-gray-300 font-light leading-relaxed text-sm">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes / Results */}
      <section className="py-20 bg-devflow-charcoal/30 border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-3">
              [ MEASURED SUCCESS ]
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white">
              Project Performance Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {project.results.map((res, index) => {
              // Extract first word/percentage if formatted with number
              const parts = res.split(" ");
              const highlight = parts[0];
              const label = parts.slice(1).join(" ");
              
              return (
                <div 
                  key={index} 
                  className="p-8 rounded-xl border border-white/[0.05] bg-devflow-black hover:border-devflow-green/20 transition-all duration-300 text-center"
                >
                  <span className="block font-display text-4xl md:text-5xl font-semibold text-devflow-green mb-4">
                    {highlight}
                  </span>
                  <span className="text-xs text-devflow-gray-400 font-light leading-relaxed">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech stack mapping */}
      <section className="py-16">
        <div className="section-container max-w-5xl text-center">
          <span className="text-xs font-mono text-devflow-gray-500 uppercase tracking-widest block mb-6">
            [ INFRASTRUCTURE CORE ]
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {project.tech.map((t, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-devflow-charcoal border border-white/5 rounded font-mono text-xs text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next case study navigator */}
      <section className="py-16 border-t border-white/[0.04] text-center bg-devflow-charcoal/20">
        <div className="section-container max-w-4xl">
          <p className="text-xs font-mono text-devflow-gray-500 uppercase tracking-widest mb-4">
            [ NEXT ADVENTURE ]
          </p>
          <h2 className="font-display text-3xl font-medium text-white mb-6">
            Have a technical milestone to reach?
          </h2>
          <a href="/contact" className="btn-primary min-w-[200px]">
            Start Discovery
          </a>
        </div>
      </section>
    </main>
  );
}
