"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const processSteps = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    subtitle: "Understanding your vision",
    description:
      "We begin with deep-dive sessions to understand your business objectives, target audience, and technical requirements. Every decision starts with data.",
    details: [
      "Stakeholder interviews",
      "Competitive analysis",
      "Technical requirements",
      "Success metrics definition",
    ],
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    subtitle: "Crafting the experience",
    description:
      "User-centered design process that balances aesthetics with functionality. Wireframes, prototypes, and validated design systems.",
    details: [
      "Information architecture",
      "UI/UX wireframes",
      "Interactive prototypes",
      "Design system creation",
    ],
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    subtitle: "Engineering excellence",
    description:
      "Modern frameworks, clean architecture, and test-driven development. We build with performance, accessibility, and maintainability in mind.",
    details: [
      "Component development",
      "API integration",
      "Performance optimization",
      "Quality assurance",
    ],
  },
  {
    id: "launch",
    number: "04",
    title: "Launch & Optimize",
    subtitle: "Continuous improvement",
    description:
      "Strategic launch with monitoring and analytics. Post-launch optimization based on real user data and continuous iteration.",
    details: [
      "Deployment strategy",
      "Performance monitoring",
      "Analytics integration",
      "Ongoing optimization",
    ],
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-32 bg-devflow-charcoal overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent hidden lg:block" />

      <div className="relative section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-devflow-green mb-4"
          >
            <span className="w-8 h-px bg-devflow-green" />
            PROCESS
            <span className="w-8 h-px bg-devflow-green" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-display-md lg:text-display-lg text-white mb-6"
          >
            Systems thinking,
            <br />
            <span className="text-devflow-gray-300">predictable results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-devflow-gray-300"
          >
            A structured approach that eliminates uncertainty. Every project
            follows a proven methodology refined over years of delivery.
          </motion.p>
        </div>

        {/* Process steps - modern card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
              className="group"
            >
              <div className="glass-card p-6 h-full relative overflow-hidden">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    animate={{
                      borderColor:
                        activeStep === step.id
                          ? "rgba(186, 230, 84, 0.4)"
                          : "rgba(255, 255, 255, 0.1)",
                    }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-devflow-green/15 to-devflow-green/5 border flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-lg font-bold text-devflow-green font-mono">
                      {step.number}
                    </span>
                  </motion.div>
                  <div className="h-px flex-1 bg-gradient-to-r from-devflow-green/20 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-devflow-green transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[13px] text-devflow-gray-400 mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.1 + i * 0.05,
                      }}
                      className="flex items-center gap-2 text-xs text-devflow-gray-500"
                    >
                      <span className="w-1 h-1 rounded-full bg-devflow-green/50" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom gradient line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-devflow-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
