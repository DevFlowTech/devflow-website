"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { FiCpu, FiGrid, FiArrowUpRight, FiLayers } from "react-icons/fi";
import { HiStar } from "react-icons/hi";

// Dynamically import sections to reduce initial bundle size (keep SSR for SEO content)
const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection"));
const ProcessTimelineSection = dynamic(() => import("@/components/sections/ProcessTimelineSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FounderSection = dynamic(() => import("@/components/sections/FounderSection"));
const FeaturedProjectsSection = dynamic(() => import("@/components/sections/FeaturedProjectsSection"));

export default function Home() {
  return (
    <div className="relative min-h-screen bg-devflow-black text-white overflow-hidden">
      {/* Aurora Gradient Backdrops */}
      <div className="absolute top-[20%] left-[5%] aurora-bg-blue opacity-50" />
      <div className="absolute top-[50%] right-[10%] aurora-bg-gold opacity-30" />
      <div className="absolute top-[80%] left-[15%] aurora-bg-blue opacity-40" />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Bento Grid Layout Section */}
      <section className="py-20 relative z-10 section-container max-w-7xl mx-auto">
        <motion.div 
          className="text-center md:text-left mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <span className="text-xs font-mono text-devflow-gold uppercase tracking-widest block mb-3">
            [ CAPABILITIES & OUTCOMES ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white">
            Accelerate Your Operations at Scale
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]"
        >
          {/* Block 1: Key Metrics (col-span-2) -> Links to Work */}
          <Link href="/work" className="md:col-span-2 block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group overflow-hidden relative h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-devflow-green/5 to-transparent pointer-events-none" />
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-devflow-gray-400">[ PERFORMANCE & ROI METRICS ]</span>
                <FiLayers className="w-5 h-5 text-devflow-green group-hover:rotate-12 transition-transform duration-300" aria-label="Layers" />
              </div>
              
              <div className="grid grid-cols-3 gap-4 py-4">
                <div>
                  <span className="block text-3xl md:text-5xl font-bold font-mono text-devflow-green group-hover:scale-105 transition-transform duration-300 origin-left">99.9%</span>
                  <span className="text-[10px] font-mono text-devflow-gray-400">SERVER UPTIME</span>
                </div>
                <div>
                  <span className="block text-3xl md:text-5xl font-bold font-mono text-devflow-green group-hover:scale-105 transition-transform duration-300 origin-left">50k+</span>
                  <span className="text-[10px] font-mono text-devflow-gray-400">HOURS SAVED</span>
                </div>
                <div>
                  <span className="block text-3xl md:text-5xl font-bold font-mono text-white group-hover:scale-105 transition-transform duration-300 origin-left">2.4x</span>
                  <span className="text-[10px] font-mono text-devflow-gray-400">WORK SPEEDUP</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono">
                <p className="text-xs text-devflow-gray-300 font-light truncate max-w-[80%]">
                  You launch high-performance platforms, dashboards, and automation systems built for business ROI.
                </p>
                <span className="text-devflow-green group-hover:translate-x-1 transition-transform duration-300">
                  VIEW CASE STUDIES &rarr;
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Block 2: Capabilities Checklist (col-span-1) -> Links to Services */}
          <Link href="/services" className="block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group h-full cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-devflow-gray-400">[ WHAT WE BUILD ]</span>
                  <FiGrid className="w-5 h-5 text-devflow-green group-hover:scale-110 transition-transform duration-300" aria-label="Grid" />
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                    <span className="text-sm font-mono text-white">Custom Business Portals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                    <span className="text-sm font-mono text-white">Task Automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                    <span className="text-sm font-mono text-white">Connecting Your Apps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                    <span className="text-sm font-mono text-white">Fast Servers & Cloud</span>
                  </li>
                </ul>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-devflow-green group-hover:underline">
                SEE WHAT WE BUILD
                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" aria-label="Arrow up right" />
              </div>
            </motion.div>
          </Link>

          {/* Block 3: Tech Marquee (full-width) -> Continuous Carousel */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 lg:col-span-3 glass-panel rounded-2xl flex flex-col justify-between overflow-hidden relative group py-6"
          >
            <div className="px-8 flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-devflow-gray-400">[ TECH ALIGNMENT ]</span>
              <span className="text-[10px] font-mono text-devflow-gray-500">JS • MOBILE • SEO • AEO • GEO</span>
            </div>
            
            <div className="flex-grow flex items-center w-full">
              <TechStackSection />
            </div>

            <div className="px-8 text-xs font-mono text-devflow-gray-400">
              BUILT ON 40+ INDUSTRIAL-GRADE FRAMEWORKS & TOOLS.
            </div>
          </motion.div>

          {/* Block 4: Philosophy Panel (col-span-1) -> Links to About */}
          <Link href="/about" className="block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group h-full cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-devflow-gray-400">[ PHILOSOPHY ]</span>
                  <FiCpu className="w-5 h-5 text-devflow-green group-hover:rotate-12 transition-transform duration-300" aria-label="CPU" />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-4">
                  Outcome-First Architecture.
                </h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                  You gain absolute ownership of a premium, high-performance codebase. No vendor lock-in, no hidden overheads, and complete scalability.
                </p>
              </div>
              <span className="text-[10px] font-mono text-devflow-green group-hover:underline uppercase block">
                OUR VALUES &rarr;
              </span>
            </motion.div>
          </Link>

          {/* Block 5: Featured Testimonial (col-span-2) -> Links to Work */}
          <Link href="/work" className="md:col-span-2 block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group relative h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-devflow-green/[0.02] to-transparent pointer-events-none" />
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-devflow-gray-400">[ CLIENT REVIEWS ]</span>
                <div className="flex gap-1 text-devflow-green">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-4 h-4" aria-label="Star rating" />
                  ))}
                </div>
              </div>

              <p className="text-sm md:text-base text-white font-light italic leading-relaxed my-2">
                "DevFlow automated our logistics routing and delivered our secure portal in under 5 weeks. Our operational efficiency increased by 2.4x instantly."
              </p>

              <div className="flex justify-between items-center text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-devflow-green animate-pulse" />
                  <span className="text-[10px] text-devflow-gray-300">CTO, VASSU INFOTECH</span>
                </div>
                <span className="text-devflow-green group-hover:translate-x-1 transition-transform duration-300">
                  READ CASE STUDIES &rarr;
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Block 6: Contact Estimator CTA (col-span-3) -> Links to Contact */}
          <Link href="/contact" className="md:col-span-2 lg:col-span-3 block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-br from-devflow-green/[0.04] to-devflow-green/[0.02] border-devflow-green/20 hover:border-devflow-green/30 cursor-pointer h-full group gap-6"
            >
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block">[ ROI & BLUEPRINT CALCULATOR ]</span>
                <h4 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-devflow-green transition-colors duration-300">
                  Calculate Your Project Blueprint
                </h4>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light max-w-xl">
                  Map your requirements to get an instant scope estimate, system timeline, and technical blueprint in under 3 minutes.
                </p>
              </div>

              <div className="text-[10px] font-mono text-devflow-green tracking-widest uppercase flex-shrink-0 group-hover:underline">
                GET SOFTWARE BLUEPRINT &rarr;
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Process Roadmap Section */}
      <ProcessTimelineSection />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />


      {/* Client Testimonials Section */}
      <TestimonialsSection />

      {/* Team Founders Section */}
      <FounderSection />

      {/* Trust Strip */}
      <section className="py-16 border-t border-white/[0.04] bg-devflow-black relative z-10 text-center">
        <motion.div 
          className="section-container max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <p className="text-xs font-mono text-devflow-gray-400 uppercase tracking-widest mb-6">
            [ TRUSTED BY TECHNOLOGY TEAMS ]
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <span className="text-xl font-bold font-display tracking-widest text-white">VASSU INFOTECH</span>
            <span className="text-xl font-mono tracking-widest text-white">AUREON GROUP</span>
            <span className="text-xl font-bold tracking-widest text-white font-serif italic">TECH LABS</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
