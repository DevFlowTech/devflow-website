"use client";

import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";
import GlowingCard from "@/components/ui/GlowingCard";

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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-devflow-green to-emerald-400",
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
    gradient: "from-purple-500 to-pink-500",
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
    gradient: "from-orange-500 to-red-500",
  },
];

function CapabilityCard({ 
  capability, 
  index, 
  isInView 
}: { 
  capability: typeof capabilities[0]; 
  index: number; 
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      rgba(186, 230, 84, 0.06),
      transparent 80%
    )
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative glass-card p-7 h-full cursor-default overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />

        {/* Background number */}
        <motion.span 
          className="absolute -right-4 -top-8 text-[120px] font-display font-bold text-white/[0.02] select-none pointer-events-none"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        
        {/* Icon with animated gradient background */}
        <div className="relative mb-6">
          <motion.div 
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 border border-devflow-green/20 flex items-center justify-center text-devflow-green"
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 0 30px rgba(186, 230, 84, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            {capability.icon}
          </motion.div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-devflow-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Content */}
        <motion.h3 
          className="relative z-10 font-display text-xl font-semibold text-white mb-3 group-hover:text-devflow-green transition-colors duration-300"
        >
          {capability.title}
        </motion.h3>
        <p className="relative z-10 text-devflow-gray-400 text-[15px] mb-5 leading-relaxed">
          {capability.description}
        </p>

        {/* Metrics/Tags with staggered animation */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {capability.metrics.map((metric, i) => (
            <motion.span
              key={metric}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 text-xs font-medium text-devflow-gray-300 bg-white/[0.03] border border-white/[0.06] rounded-lg group-hover:border-devflow-green/20 group-hover:bg-devflow-green/[0.05] group-hover:text-devflow-green transition-all duration-300 cursor-default"
            >
              {metric}
            </motion.span>
          ))}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-devflow-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-devflow-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Bottom gradient line on hover */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-devflow-green/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ x: 20, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1, scale: 1.1 }}
        >
          <svg className="w-4 h-4 text-devflow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

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
      
      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-devflow-green/5 rounded-full blur-[200px]"
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative section-container">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-devflow-green mb-4"
          >
            <motion.span 
              className="w-8 h-px bg-devflow-green"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            CAPABILITIES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-display-md lg:text-display-lg text-white mb-6"
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Engineering strengths
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-devflow-gray-300"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                built for scale
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-body-lg text-devflow-gray-300"
          >
            We don&apos;t just build websites. We engineer digital systems that
            perform under pressure and grow with your business.
          </motion.p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
