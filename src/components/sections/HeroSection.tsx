"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { LineReveal } from "@/components/ui/TextReveal";
import TypewriterText from "@/components/ui/TypewriterText";
import FloatingParticles from "@/components/ui/FloatingParticles";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Smooth spring for parallax
  const smoothY = useSpring(y, { damping: 20, stiffness: 100 });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-devflow-black"
    >
      {/* Floating Particles */}
      <FloatingParticles count={40} />

      {/* Animated grid background */}
      <div className="absolute inset-0 grid-lines" />

      {/* Gradient orbs with animation */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-devflow-green/3 rounded-full blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flow lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(186, 230, 84, 0)" />
            <stop offset="50%" stopColor="rgba(186, 230, 84, 0.5)" />
            <stop offset="100%" stopColor="rgba(186, 230, 84, 0)" />
          </linearGradient>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <animate
              attributeName="x1"
              values="0%;100%;0%"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="100%;200%;100%"
              dur="3s"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="rgba(186, 230, 84, 0)" />
            <stop offset="50%" stopColor="rgba(186, 230, 84, 0.8)" />
            <stop offset="100%" stopColor="rgba(186, 230, 84, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,400 Q300,300 600,400 T1200,400"
          stroke="url(#greenGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M0,500 Q400,350 800,500 T1200,450"
          stroke="url(#greenGradient)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.path
          d="M0,300 Q200,450 500,350 T1200,380"
          stroke="url(#greenGradient)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 1.1 }}
        />
        {/* Animated flow line */}
        <motion.path
          d="M-100,420 Q300,320 600,420 T1300,420"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
        />
      </svg>

      <motion.div
        style={{ y: smoothY, opacity, scale }}
        className="relative z-10 section-container"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left pt-24 lg:pt-0">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-devflow-dark/80 border border-devflow-green/20 mb-8 backdrop-blur-sm"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-devflow-green"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-devflow-gray-200">
                Engineering Excellence
              </span>
              <motion.span
                className="text-xs text-devflow-green font-semibold px-2 py-0.5 bg-devflow-green/10 rounded-full"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                2025
              </motion.span>
            </motion.div>

            {/* Headline with enhanced animation */}
            <div className="mb-6">
              <LineReveal delay={0.3}>
                <h1 className="font-display text-display-lg lg:text-display-xl text-white text-balance">
                  We build{" "}
                  <span className="relative inline-block">
                    <motion.span
                      className="relative z-10 text-devflow-green"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      world-class
                    </motion.span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute bottom-2 left-0 right-0 h-3 bg-devflow-green/10 -z-0 origin-left"
                    />
                  </span>
                </h1>
              </LineReveal>
              <LineReveal delay={0.4}>
                <h1 className="font-display text-display-lg lg:text-display-xl text-white text-balance">
                  <TypewriterText
                    words={[
                      "digital solutions",
                      "AI solutions",
                      "web experiences",
                      "mobile apps",
                      "ERP systems",
                      "cloud services",
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseDuration={2500}
                  />
                </h1>
              </LineReveal>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-body-xl text-devflow-gray-200 max-w-lg mx-auto lg:mx-0 mb-10"
            >
              From AI solutions to enterprise ERP systems, we deliver complete
              IT services that transform businesses and drive measurable growth.
            </motion.p>

            {/* CTAs - Clean row layout with proper spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link href="#contact" className="btn-primary">
                Start Your Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="#work" className="btn-secondary">
                View Our Work
              </Link>
            </motion.div>

            {/* KPI Stats with Animated Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-6 lg:gap-10 justify-center lg:justify-start"
            >
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <span className="text-xl font-bold text-devflow-green">
                  <AnimatedCounter end={99} suffix="+" />
                </span>
                <span className="text-sm text-devflow-gray-300">
                  Performance
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-xl font-bold text-devflow-green">
                  &lt;
                  <AnimatedCounter end={1} />s
                </span>
                <span className="text-sm text-devflow-gray-300">Load Time</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <span className="text-xl font-bold text-devflow-green">
                  <AnimatedCounter end={100} suffix="%" />
                </span>
                <span className="text-sm text-devflow-gray-300">SEO Score</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative perspective-2000">
              {/* Main mockup frame */}
              <motion.div
                initial={{ rotateY: -15, rotateX: 10 }}
                animate={{ rotateY: -5, rotateX: 5 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative transform-style-3d"
                whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              >
                {/* Browser frame */}
                <div className="relative rounded-xl bg-devflow-charcoal border border-white/[0.08] overflow-hidden shadow-2xl">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-devflow-dark border-b border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <motion.span
                        className="w-3 h-3 rounded-full bg-red-500/80"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.span
                        className="w-3 h-3 rounded-full bg-yellow-500/80"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.span
                        className="w-3 h-3 rounded-full bg-green-500/80"
                        whileHover={{ scale: 1.2 }}
                      />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 rounded-md bg-devflow-black/50 flex items-center px-3">
                        <span className="text-xs text-devflow-gray-400 font-mono">
                          devflow.co.in
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mockup content */}
                  <div className="p-6 aspect-[4/3] relative">
                    {/* Grid overlay */}
                    <div className="absolute inset-0 grid-lines opacity-30" />

                    {/* Dashboard mockup elements */}
                    <div className="relative z-10 space-y-4">
                      <div className="flex gap-4">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className={`h-20 flex-1 rounded-lg ${
                              i === 1
                                ? "bg-devflow-green/10 border-devflow-green/20"
                                : "bg-devflow-dark border-white/[0.06]"
                            } border p-3`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            whileHover={{
                              scale: 1.02,
                              borderColor: "rgba(186, 230, 84, 0.3)",
                            }}
                          >
                            <div
                              className={`w-8 h-2 rounded ${
                                i === 1
                                  ? "bg-devflow-green/30"
                                  : "bg-devflow-gray-500"
                              } mb-2`}
                            />
                            <div
                              className={`w-16 h-4 rounded ${
                                i === 1
                                  ? "bg-devflow-green/20"
                                  : "bg-devflow-gray-600"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Chart mockup */}
                      <motion.div
                        className="h-40 rounded-lg bg-devflow-dark border border-white/[0.06] p-4 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-devflow-gray-400">
                            Performance
                          </span>
                        </div>
                        <div className="flex items-end gap-1 h-[calc(100%-24px)]">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map(
                            (h, i) => (
                              <motion.div
                                key={i}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 1.4 + i * 0.05,
                                }}
                                className="flex-1 rounded-t origin-bottom bg-devflow-green/40"
                                style={{
                                  height: `${h}%`,
                                }}
                              />
                            )
                          )}
                        </div>
                      </motion.div>

                      {/* List items */}
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="h-10 rounded-lg bg-devflow-dark/50 border border-white/[0.04] flex items-center gap-3 px-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8 + i * 0.1 }}
                            whileHover={{
                              x: 4,
                              borderColor: "rgba(186, 230, 84, 0.2)",
                            }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-devflow-green"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                            <div className="flex-1 h-2 rounded bg-devflow-gray-600" />
                            <div className="w-12 h-2 rounded bg-devflow-gray-500" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute -right-8 top-1/4 w-48 p-4 rounded-xl bg-devflow-charcoal/90 backdrop-blur-xl border border-white/[0.08] shadow-xl cursor-default"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-devflow-green/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-devflow-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white">
                      Performance
                    </span>
                  </div>
                  <motion.div
                    className="text-2xl font-bold text-devflow-green"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8, type: "spring" }}
                  >
                    99.9%
                  </motion.div>
                  <div className="text-xs text-devflow-gray-400">
                    Uptime Score
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute -left-6 bottom-1/4 w-44 p-4 rounded-xl bg-devflow-charcoal/90 backdrop-blur-xl border border-devflow-green/20 shadow-xl cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-devflow-green"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-xs text-devflow-gray-300">Live</span>
                  </div>
                  <motion.div
                    className="text-lg font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    12ms
                  </motion.div>
                  <div className="text-xs text-devflow-gray-400">
                    Response Time
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          data-cursor="Scroll"
        >
          <span className="text-xs text-devflow-gray-400 uppercase tracking-wider group-hover:text-devflow-green transition-colors">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-devflow-gray-500 flex items-start justify-center p-1 group-hover:border-devflow-green/50 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-devflow-green"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
