"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";
import { TracingBeam } from "@/components/ui/TracingBeam";
import BackgroundText from "@/components/ui/BackgroundText";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    duration: "Week 0",
    description:
      "We dig deep into your operations. No generic questionnaires. We interview your team, map your workflows, and identify exactly where custom software will generate ROI.",
    outcome: "Detailed Scope of Work & Fixed-Price Proposal",
  },
  {
    number: "02",
    title: "Architecture & Design",
    duration: "Week 1",
    description:
      "Before a single line of code is written, we blueprint the entire system. You'll see clickable prototypes and database schemas, ensuring we're building exactly what you need.",
    outcome: "Interactive Prototypes & Technical Spec",
  },
  {
    number: "03",
    title: "Agile Development",
    duration: "Weeks 2-6",
    description:
      "We build in rapid 2-week sprints. You get access to a staging environment to test features as they're built. No black boxes. Real progress you can click.",
    outcome: "Production-Ready Software delivered in sprints",
  },
  {
    number: "04",
    title: "Deployment & Handoff",
    duration: "Week 7+",
    description:
      "We handle the launch, configure your servers, and train your team. Post-launch, we provide 30 days of bug-fixing support and hand over clean, documented code.",
    outcome: "Full IP Ownership & zero vendor lock-in",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-devflow-black relative overflow-hidden"
    >
      {/* Large Background Text */}
      <BackgroundText text="PROCESS" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block">
            The Roadmap
          </motion.span>
          <motion.h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-6">
            From Chaos to <span className="text-devflow-green">Clarity</span>
          </motion.h2>
          <motion.p className="text-lg text-devflow-gray-300 max-w-2xl mx-auto">
            A transparent, engineering-led process designed to deliver
            high-quality software without the surprises.
          </motion.p>
        </motion.div>

        {/* Tracing Beam Wrapper */}
        <TracingBeam className="px-6">
          <div className="relative max-w-2xl mx-auto pt-4 antialiased">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0.3 },
                  visible: { opacity: 1 },
                }}
                className="mb-12 relative group"
              >
                {/* Step Content */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number Badge */}
                  <motion.div
                    variants={{
                      hidden: {
                        backgroundColor: "rgba(10,10,10,1)",
                        borderColor: "rgba(186,230,84,0.1)",
                        color: "rgba(186,230,84,0.5)",
                        scale: 0.8,
                      },
                      visible: {
                        backgroundColor: "rgba(186,230,84,1)",
                        borderColor: "rgba(186,230,84,1)",
                        color: "rgba(10,10,10,1)",
                        scale: 1,
                        transition: { duration: 0.4, type: "spring" },
                      },
                    }}
                    className="flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center font-bold text-sm relative z-10 shadow-lg"
                  >
                    {step.number}
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    variants={{
                      hidden: {
                        borderColor: "rgba(255,255,255,0.03)",
                        backgroundColor: "rgba(18,18,18,0.4)",
                        x: -10,
                      },
                      visible: {
                        borderColor: "rgba(186,230,84,0.15)", // Subtle green border
                        backgroundColor: "rgba(18,18,18,1)",
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="flex-1 border p-6 rounded-xl shadow-lg relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(186,230,84,0.1)] transition-shadow duration-500"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-devflow-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                        <motion.span
                          variants={{
                            hidden: { opacity: 0.5 },
                            visible: { opacity: 1 },
                          }}
                          className="text-xs font-mono text-devflow-green bg-devflow-green/5 border border-devflow-green/10 px-2 py-1 rounded"
                        >
                          {step.duration}
                        </motion.span>
                      </div>

                      <p className="text-base text-devflow-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06] text-sm text-devflow-gray-300">
                        <svg
                          className="w-4 h-4 text-devflow-green flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {step.outcome}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
