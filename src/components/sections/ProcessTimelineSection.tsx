"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "Aligning on goals, scope, and target outcomes to ensure custom software builds solve real business problems.",
  },
  {
    num: "02",
    title: "Technical Architecture",
    description:
      "Structuring scalable databases, microservices layouts, and Next.js frontends before coding starts.",
  },
  {
    num: "03",
    title: "Weekly Sprints",
    description:
      "Delivering working modules in agile weekly iterations with transparent reporting and review cycles.",
  },
  {
    num: "04",
    title: "Automated Deployment",
    description:
      "Launching with optimized CI/CD pipelines, SSL nodes, cloud configurations, and strict caching policies.",
  },
];

export default function ProcessTimelineSection() {
  return (
    <section className="py-24 lg:py-32 bg-devflow-black border-t border-white/[0.04] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-devflow-blue tracking-wider block mb-3">
            [ Roadmap &amp; Methodology ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight">
            How We Build{" "}
            <span className="italic font-normal text-devflow-blue font-display">
              Software Systems
            </span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Timeline Track (Desktop) */}
          <div
            className="hidden md:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-devflow-blue via-devflow-blue/40 to-devflow-blue/10 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative h-full hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 z-10 cursor-default"
              >
                {/* Unified Step Number & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-devflow-blue/10 border border-devflow-blue/20 text-xs font-mono font-semibold text-devflow-blue shadow-xs">
                    <span>Step {step.num}</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-devflow-blue/40 group-hover:bg-devflow-blue transition-colors" aria-hidden="true" />
                </div>

                {/* Title & description */}
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-display font-medium text-white mb-3 group-hover:text-devflow-blue transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-devflow-gray-300 text-xs leading-relaxed font-light mt-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
