"use client";

import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-8.486 8.486M2 10l2-2" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

function ProcessCard({ 
  step, 
  index, 
  isInView,
  isActive,
  onHover,
}: { 
  step: typeof processSteps[0]; 
  index: number; 
  isInView: boolean;
  isActive: boolean;
  onHover: (id: string | null) => void;
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
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(186, 230, 84, 0.08),
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
      onMouseEnter={() => onHover(step.id)}
      onMouseLeave={() => onHover(null)}
      className="group relative"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="glass-card p-6 h-full relative overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Mouse follow gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />

        {/* Step number - large background */}
        <motion.span
          className="absolute -right-4 -top-6 text-[100px] font-display font-bold text-white/[0.02] select-none pointer-events-none"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {step.number}
        </motion.span>

        {/* Header with icon */}
        <div className="relative z-10 flex items-center gap-3 mb-5">
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-devflow-green/15 to-devflow-green/5 border border-devflow-green/20 flex items-center justify-center text-devflow-green"
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 0 20px rgba(186, 230, 84, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            {step.icon}
          </motion.div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-devflow-green">{step.number}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-devflow-green/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.h3 
          className="relative z-10 font-display text-lg font-semibold text-white mb-1 group-hover:text-devflow-green transition-colors duration-300"
        >
          {step.title}
        </motion.h3>
        <p className="relative z-10 text-xs text-devflow-green/70 mb-3">{step.subtitle}</p>
        <p className="relative z-10 text-[13px] text-devflow-gray-400 mb-5 leading-relaxed">
          {step.description}
        </p>

        {/* Details list with staggered animation */}
        <ul className="relative z-10 space-y-2">
          {step.details.map((detail, i) => (
            <motion.li
              key={detail}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.1 + i * 0.05,
              }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-xs text-devflow-gray-500 group-hover:text-devflow-gray-400 transition-colors duration-300"
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-devflow-green/50"
                whileHover={{ scale: 1.5 }}
              />
              {detail}
            </motion.li>
          ))}
        </ul>

        {/* Progress indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${i <= index ? 'bg-devflow-green' : 'bg-devflow-gray-600'}`}
              animate={i === index ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Connecting line to next card */}
        {index < 3 && (
          <motion.div
            className="absolute -right-5 top-1/2 -translate-y-1/2 hidden lg:flex items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <div className="w-5 h-px bg-gradient-to-r from-devflow-green/30 to-transparent" />
            <motion.div
              className="w-2 h-2 rounded-full bg-devflow-green/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            />
          </motion.div>
        )}

        {/* Bottom gradient line */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-devflow-green/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-devflow-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-devflow-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </motion.div>
    </motion.div>
  );
}

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
      
      {/* Animated background orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-devflow-green/3 rounded-full blur-[200px]"
        animate={{
          scale: [1, 1.1, 1],
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
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            PROCESS
            <motion.span 
              className="w-8 h-px bg-devflow-green"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
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
                Systems thinking,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-devflow-gray-300"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                predictable results
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-body-lg text-devflow-gray-300"
          >
            A structured approach that eliminates uncertainty. Every project
            follows a proven methodology refined over years of delivery.
          </motion.p>
        </div>

        {/* Process timeline indicator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-devflow-green/20 to-transparent mb-12"
        />

        {/* Process steps - modern card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              index={index}
              isInView={isInView}
              isActive={activeStep === step.id}
              onHover={setActiveStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
