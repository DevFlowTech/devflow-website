"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-devflow-black"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-lines" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-devflow-green/3 rounded-full blur-[100px]" />
      
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
      </svg>

      <motion.div style={{ y, opacity }} className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-devflow-dark/80 border border-devflow-green/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-devflow-green animate-pulse" />
              <span className="text-sm font-medium text-devflow-gray-200">
                Engineering Excellence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display-lg lg:text-display-xl text-white mb-6 text-balance"
            >
              We build{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-devflow-green">world-class</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-devflow-green/10 -z-0 origin-left"
                />
              </span>
              <br />
              web experiences
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-body-xl text-devflow-gray-200 max-w-lg mx-auto lg:mx-0 mb-10"
            >
              High-performance digital products engineered for businesses that
              demand precision, speed, and measurable impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link href="#contact" className="btn-primary group">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link href="#work" className="btn-secondary">
                View Our Work
              </Link>
            </motion.div>

            {/* Stats indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-devflow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">99+</p>
                  <p className="text-xs text-devflow-gray-400">Performance Score</p>
                </div>
              </div>
              <div className="w-px h-10 bg-white/[0.08] hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-devflow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">&lt;1s</p>
                  <p className="text-xs text-devflow-gray-400">Load Time</p>
                </div>
              </div>
              <div className="w-px h-10 bg-white/[0.08] hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-devflow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">100%</p>
                  <p className="text-xs text-devflow-gray-400">SEO Optimized</p>
                </div>
              </div>
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
                transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative transform-style-3d"
              >
                {/* Browser frame */}
                <div className="relative rounded-xl bg-devflow-charcoal border border-white/[0.08] overflow-hidden shadow-2xl">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-devflow-dark border-b border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 rounded-md bg-devflow-black/50 flex items-center px-3">
                        <span className="text-xs text-devflow-gray-400 font-mono">
                          devflow.tech
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
                        <div className="h-20 flex-1 rounded-lg bg-devflow-green/10 border border-devflow-green/20 p-3">
                          <div className="w-8 h-2 rounded bg-devflow-green/30 mb-2" />
                          <div className="w-16 h-4 rounded bg-devflow-green/20" />
                        </div>
                        <div className="h-20 flex-1 rounded-lg bg-devflow-dark border border-white/[0.06] p-3">
                          <div className="w-8 h-2 rounded bg-devflow-gray-500 mb-2" />
                          <div className="w-12 h-4 rounded bg-devflow-gray-600" />
                        </div>
                        <div className="h-20 flex-1 rounded-lg bg-devflow-dark border border-white/[0.06] p-3">
                          <div className="w-8 h-2 rounded bg-devflow-gray-500 mb-2" />
                          <div className="w-14 h-4 rounded bg-devflow-gray-600" />
                        </div>
                      </div>
                      
                      {/* Chart mockup */}
                      <div className="h-40 rounded-lg bg-devflow-dark border border-white/[0.06] p-4">
                        <div className="flex items-end gap-2 h-full">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 0.5, delay: 1.2 + i * 0.05 }}
                              className="flex-1 rounded-t origin-bottom"
                              style={{
                                height: `${h}%`,
                                background: `linear-gradient(to top, rgba(186, 230, 84, 0.3), rgba(186, 230, 84, 0.1))`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* List items */}
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="h-10 rounded-lg bg-devflow-dark/50 border border-white/[0.04] flex items-center gap-3 px-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-devflow-green" />
                            <div className="flex-1 h-2 rounded bg-devflow-gray-600" />
                            <div className="w-12 h-2 rounded bg-devflow-gray-500" />
                          </div>
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
                  className="absolute -right-8 top-1/4 w-48 p-4 rounded-xl bg-devflow-charcoal/90 backdrop-blur-xl border border-white/[0.08] shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-devflow-green/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-devflow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white">Performance</span>
                  </div>
                  <div className="text-2xl font-bold text-devflow-green">99.9%</div>
                  <div className="text-xs text-devflow-gray-400">Uptime Score</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  className="absolute -left-6 bottom-1/4 w-44 p-4 rounded-xl bg-devflow-charcoal/90 backdrop-blur-xl border border-devflow-green/20 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-devflow-green animate-pulse" />
                    <span className="text-xs text-devflow-gray-300">Live</span>
                  </div>
                  <div className="text-lg font-bold text-white">12ms</div>
                  <div className="text-xs text-devflow-gray-400">Response Time</div>
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
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-devflow-gray-400 uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-devflow-gray-500 flex items-start justify-center p-1">
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
