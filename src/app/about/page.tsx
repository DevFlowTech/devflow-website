"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import FounderSection from "@/components/sections/FounderSection";
import StatsBar from "@/components/sections/StatsBar";

const values = [
  {
    code: "[01]",
    title: "Engineering First",
    description: "We are builders, not pitchmen. We believe in raw technical execution, clean architecture, and systems that scale silently.",
  },
  {
    code: "[02]",
    title: "Chaos to Clarity",
    description: "We enter ambiguous, complex environments and deliver highly structured, intuitive digital infrastructure.",
  },
  {
    code: "[03]",
    title: "Radical Transparency",
    description: "No sales jargon. We explain what is possible, what is not, and exactly what resources are required to achieve the goal.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-devflow-black pt-28 pb-16 overflow-hidden">
      {/* Hero Narrative */}
      <section className="py-20 border-b border-white/[0.04] relative">
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
              From <span className="italic font-normal font-display text-devflow-green">Chaos</span> to Clarity.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light"
            >
              We started DevFlow because we noticed a gap in standard development shops: a lack of absolute technical ownership. We don't just build features; we architect robust digital systems that automate operational drag and enable compounding growth.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-10 md:gap-16 pt-8"
            >
              <div className="group">
                <span className="font-display text-5xl md:text-7xl font-bold text-white group-hover:text-devflow-green transition-colors duration-300">
                  438+
                </span>
                <p className="text-xs font-mono text-devflow-gray-400 uppercase tracking-widest mt-1">
                  Projects Delivered
                </p>
              </div>
              <div className="group">
                <span className="font-display text-5xl md:text-7xl font-bold text-white group-hover:text-devflow-green transition-colors duration-300">
                  300+
                </span>
                <p className="text-xs font-mono text-devflow-gray-400 uppercase tracking-widest mt-1">
                  Happy Clients
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics breakdown */}
      <StatsBar />

      {/* Philosophy/Values Grid */}
      <section className="py-24 border-t border-b border-white/[0.04] bg-devflow-charcoal">
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
            Skip the project managers and marketing layers. Talk directly to our technical founders to outline your roadmap today.
          </p>
          <a href="/contact" className="btn-primary min-w-[200px]">
            Start Your Discovery
          </a>
        </div>
      </section>
    </main>
  );
}
