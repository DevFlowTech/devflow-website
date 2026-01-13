"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    id: "web-engineering",
    title: "Custom Web Engineering",
    description:
      "Bespoke web applications built with modern frameworks. Server-side rendering, edge functions, and optimized data fetching for sub-second experiences.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    metrics: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "performance",
    title: "High-Performance Websites",
    description:
      "Lightning-fast business and agency websites engineered for conversion. Core Web Vitals optimization, lazy loading, and edge caching.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    metrics: ["99+ Performance", "< 1s LCP", "SEO Ready"],
  },
  {
    id: "digital-experiences",
    title: "Conversion-Focused Experiences",
    description:
      "Strategic digital experiences designed around user behavior. A/B tested interfaces, analytics integration, and measurable growth.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    metrics: ["UX Research", "Analytics", "Growth"],
  },
  {
    id: "systems",
    title: "Scalable Systems Design",
    description:
      "Architecture that grows with your business. Microservices, API design, database optimization, and infrastructure as code.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    metrics: ["Cloud Native", "CI/CD", "Docker"],
  },
];

export default function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative py-32 bg-devflow-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-devflow-green/20 to-transparent" />

      <div className="relative section-container">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-devflow-green mb-4"
          >
            <span className="w-8 h-px bg-devflow-green" />
            CAPABILITIES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-display-md lg:text-display-lg text-white mb-6"
          >
            Engineering strengths
            <br />
            <span className="text-devflow-gray-300">built for scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-devflow-gray-300"
          >
            We don&apos;t just build websites. We engineer digital systems that
            perform under pressure and grow with your business.
          </motion.p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="group glass-card p-7 h-full cursor-default relative overflow-hidden">
                {/* Background number */}
                <span className="absolute -right-4 -top-8 text-[120px] font-display font-bold text-white/[0.02] select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 border border-devflow-green/20 flex items-center justify-center text-devflow-green group-hover:from-devflow-green/30 group-hover:to-devflow-green/10 transition-all duration-500">
                    {capability.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-devflow-green transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-devflow-gray-400 text-[15px] mb-5 leading-relaxed">
                  {capability.description}
                </p>

                {/* Metrics/Tags */}
                <div className="flex flex-wrap gap-2">
                  {capability.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1.5 text-xs font-medium text-devflow-gray-300 bg-white/[0.03] border border-white/[0.06] rounded-lg group-hover:border-devflow-green/10 group-hover:bg-devflow-green/[0.03] transition-all duration-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line on hover */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-devflow-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
