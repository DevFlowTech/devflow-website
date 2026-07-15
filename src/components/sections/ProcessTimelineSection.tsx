"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description: "Aligning on goals, scope, and target outcomes to ensure custom software builds solve real business problems.",
  },
  {
    num: "02",
    title: "Technical Architecture",
    description: "Structuring scalable databases, microservices layouts, and Next.js frontends before coding starts.",
  },
  {
    num: "03",
    title: "Weekly Sprints",
    description: "Delivering working modules in agile weekly iterations with transparent reporting and review cycles.",
  },
  {
    num: "04",
    title: "Automated Deployment",
    description: "Launching with optimized CI/CD pipelines, SSL nodes, cloud configurations, and strict caching policies.",
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
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-4">
            [ ROADMAP / METHODOLOGY ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight">
            How We Build{" "}
            <span className="italic font-normal text-devflow-green font-display">
              Software Systems
            </span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group relative h-full"
            >
              {/* Number indicator */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-3xl font-mono font-bold text-devflow-green">{step.num}</span>
                <span className="text-[10px] font-mono text-devflow-gray-500">[ STEP ]</span>
              </div>

              {/* Title & description */}
              <div>
                <h3 className="text-lg font-display font-medium text-white mb-3 group-hover:text-devflow-green transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-devflow-gray-300 text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
