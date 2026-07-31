"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import FounderSection from "@/components/sections/FounderSection";
import StatsBar from "@/components/sections/StatsBar";
import Link from "next/link";
import { FiCheckCircle, FiAward, FiArrowRight } from "react-icons/fi";

const values = [
  {
    code: "[01]",
    title: "Engineering First",
    description: "We are builders, not pitchmen. We believe in raw technical execution, clean architecture, and systems that scale silently. You receive direct access to architects.",
  },
  {
    code: "[02]",
    title: "Chaos to Clarity",
    description: "We enter ambiguous, legacy environments and deliver highly structured, intuitive digital infrastructure. You run automated operations that reduce manual errors to zero.",
  },
  {
    code: "[03]",
    title: "Radical Transparency",
    description: "No sales jargon. We explain what is possible, what is not, and exactly what resources are required to achieve the goal. You retain 100% IP ownership.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Engineering Studio Launched",
    description: "DevFlow was established with a focus on custom Next.js engineering and database optimization for scaling products.",
  },
  {
    year: "2025",
    title: "Enterprise ERP & Cloud Scale",
    description: "Expanded core capabilities to build secure internal portals, custom ERP modules, and multi-tenant SaaS dashboards for SMEs.",
  },
  {
    year: "2026",
    title: "AI Workflows & Global Roadmap",
    description: "Deployed custom AI chatbots and LLM agent pipelines. Scaled remote operations to deliver offshore development for global clients in US, UK, and EU.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-devflow-black pt-28 pb-16 overflow-hidden">
      {/* Hero Narrative */}
      <section className="pt-20 pb-12 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono text-devflow-green uppercase tracking-widest block"
            >
              [ THE PHILOSOPHY ]
            </motion.span>
            
            <motion.h1
              variants={staggerItem}
              className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl"
            >
              Transforming <span className="italic font-normal font-display text-devflow-green">Complexity</span> into Capital.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light"
            >
              You achieve high-performance digital infrastructure that drives commercial outcomes. We started DevFlow to eliminate the standard friction of agency handoffs. You work directly with the systems engineers building your software, guaranteeing quality control and secure IP.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Metrics breakdown */}
      <StatsBar />

      {/* Timeline Milestones Section */}
      <section className="py-24 border-b border-white/[0.04] bg-devflow-black">
        <div className="section-container max-w-5xl">
          <div className="text-center md:text-left mb-16">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-3">
              [ THE ROADMAP ]
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-white">
              Milestones & Expansion
            </h2>
          </div>

          <div className="relative border-l border-white/[0.08] ml-4 md:ml-6 space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline Node */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-devflow-black border-2 border-devflow-green group-hover:bg-devflow-green transition-colors duration-300" />
                
                <div className="space-y-2">
                  <span className="font-mono text-devflow-green text-sm font-semibold block">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-devflow-green transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-devflow-gray-300 text-sm leading-relaxed max-w-2xl font-light">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy/Values Grid */}
      <section className="py-24 border-b border-white/[0.04] bg-devflow-charcoal">
        <div className="section-container max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
                [ HOW WE RUN ]
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-white leading-tight">
                Our Core Values
              </h2>
              <p className="text-devflow-gray-400 font-light leading-relaxed">
                Rules we live by to ensure premium delivery, code integrity, and outstanding product alignment.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-1 gap-8">
              {values.map((val) => (
                <div 
                  key={val.title}
                  className="p-8 rounded-xl border border-white/[0.05] bg-devflow-black hover:border-devflow-green/20 transition-colors duration-300 flex flex-col md:flex-row gap-6 items-start"
                >
                  <span className="font-mono text-devflow-green font-semibold text-lg shrink-0">
                    {val.code}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {val.title}
                    </h3>
                    <p className="text-devflow-gray-300 leading-relaxed text-sm font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <FounderSection />

      {/* Final CTA */}
      <section className="py-24 bg-devflow-black text-center relative">
        <div className="section-container max-w-4xl relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Work with builders.
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Skip the project managers and sales layers. Talk directly to our systems engineers to outline your roadmap today.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px] inline-flex items-center justify-center gap-2">
              Schedule Technical Consultation <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
