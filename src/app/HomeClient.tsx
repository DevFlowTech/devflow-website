"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { FiCpu, FiGrid, FiArrowUpRight, FiLayers } from "react-icons/fi";
import { HiStar } from "react-icons/hi";

// Dynamically import sections to reduce initial bundle size (keep SSR for SEO content)
const TechStackSection = dynamic(
  () => import("@/components/sections/TechStackSection"),
);
const ProcessTimelineSection = dynamic(
  () => import("@/components/sections/ProcessTimelineSection"),
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
);
const FounderSection = dynamic(
  () => import("@/components/sections/FounderSection"),
);
const FeaturedProjectsSection = dynamic(
  () => import("@/components/sections/FeaturedProjectsSection"),
);
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));

export default function HomeClient() {
  return (
    <div className="relative min-h-screen bg-devflow-black text-white overflow-hidden">
      {/* Aurora Gradient Backdrops */}
      <div className="absolute top-[20%] left-[5%] aurora-bg-blue opacity-50" />
      <div className="absolute top-[50%] right-[10%] aurora-bg-gold opacity-30" />
      <div className="absolute top-[80%] left-[15%] aurora-bg-blue opacity-40" />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Strip - Factual Capabilities & Engineering Core */}
      <section className="py-12 bg-devflow-black border-y border-white/[0.06] relative z-10">
        <div className="section-container max-w-6xl mx-auto">
          <p className="text-xs font-mono text-devflow-gray-400 tracking-wider text-center mb-6">
            [ Core Engineering Capabilities ]
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 font-mono text-xs md:text-sm text-devflow-gray-200 tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue" aria-hidden="true" />
              AI Engineering
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue" aria-hidden="true" />
              Custom Software
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue" aria-hidden="true" />
              SaaS Development
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue" aria-hidden="true" />
              ERP Systems
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue" aria-hidden="true" />
              Business Automation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue" aria-hidden="true" />
              Dedicated Engineering
            </span>
          </div>
        </div>
      </section>

      {/* Main Bento Grid Layout Section */}
      <section className="py-20 relative z-10 section-container max-w-7xl mx-auto">
        <motion.div
          className="text-center md:text-left mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <span className="text-xs font-mono text-devflow-blue tracking-wider block mb-3">
            [ Capabilities &amp; Outcomes ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white">
            Enterprise Custom Software &amp; AI Solutions
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {/* Block 1: Architecture Pillars (col-span-2) -> Links to Work */}
          <Link href="/case-studies" className="md:col-span-2 block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group overflow-hidden relative h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-devflow-blue/5 to-transparent pointer-events-none" />
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-devflow-gray-400">
                  [ Engineering Principles ]
                </span>
                <FiLayers
                  className="w-5 h-5 text-devflow-blue group-hover:rotate-12 transition-transform duration-300"
                  aria-label="Layers"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 py-4">
                <div>
                  <span className="block text-xl md:text-2xl font-bold font-mono text-devflow-blue group-hover:scale-105 transition-transform duration-300 origin-left">
                    100%
                  </span>
                  <span className="text-xs font-mono text-devflow-gray-400 block mt-1">
                    Source Code Ownership
                  </span>
                </div>
                <div>
                  <span className="block text-xl md:text-2xl font-bold font-mono text-devflow-blue group-hover:scale-105 transition-transform duration-300 origin-left">
                    Direct
                  </span>
                  <span className="text-xs font-mono text-devflow-gray-400 block mt-1">
                    Founder Access
                  </span>
                </div>
                <div>
                  <span className="block text-xl md:text-2xl font-bold font-mono text-white group-hover:scale-105 transition-transform duration-300 origin-left">
                    Modular
                  </span>
                  <span className="text-xs font-mono text-devflow-gray-400 block mt-1">
                    Scalable Architecture
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono">
                <p className="text-xs text-devflow-gray-300 font-light leading-relaxed max-w-xl">
                  Architecting software systems engineered for business
                  reliability and long-term maintainability.
                </p>
                <span className="text-devflow-blue group-hover:translate-x-1 transition-transform duration-300">
                  Explore Case Studies &rarr;
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Block 2: Capabilities Checklist (col-span-1) -> Links to Services */}
          <Link href="/services" className="block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between group h-full cursor-pointer overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <span className="text-xs font-mono text-devflow-gray-400">
                    [ What We Build ]
                  </span>
                  <FiGrid
                    className="w-5 h-5 text-devflow-blue group-hover:scale-110 transition-transform duration-300"
                    aria-label="Grid"
                  />
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-4">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-mono text-white">
                      Custom ERP & CRM Software
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-mono text-white">
                      AI Agents & Workflow Automation
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-mono text-white">
                      SaaS Product Development
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-blue shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-mono text-white">
                      Cloud Infrastructure & APIs
                    </span>
                  </li>
                </ul>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-devflow-blue group-hover:underline pt-2">
                See What We Build
                <FiArrowUpRight
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </Link>

          {/* Block 3: Tech Stack Matrix (col-span-3) */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 lg:col-span-3 glass-panel rounded-2xl overflow-hidden relative group"
          >
            <TechStackSection />
          </motion.div>

          {/* Block 4: Philosophy Panel (col-span-1) -> Links to About */}
          <Link href="/about" className="block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group h-full cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-devflow-gray-400">
                    [ Philosophy ]
                  </span>
                  <FiCpu
                    className="w-5 h-5 text-devflow-blue group-hover:rotate-12 transition-transform duration-300"
                    aria-label="CPU"
                  />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-4">
                  Outcome-First Architecture.
                </h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                  You gain absolute ownership of a premium, high-performance
                  codebase. No vendor lock-in, no hidden overheads, and complete
                  scalability.
                </p>
              </div>
              <span className="text-xs font-mono text-devflow-blue group-hover:underline block">
                Our Values &rarr;
              </span>
            </motion.div>
          </Link>

          {/* Block 5: Featured Testimonial (col-span-2) -> Links to Work */}
          <Link href="/work" className="md:col-span-2 block h-full">
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group relative h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-devflow-blue/[0.02] to-transparent pointer-events-none" />
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-devflow-gray-400">
                  [ Client Reviews ]
                </span>
                <div className="flex gap-1 text-devflow-blue">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className="w-4 h-4"
                      aria-label="Star rating"
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm md:text-base text-white font-light italic leading-relaxed my-2">
                &ldquo;DevFlow automated our logistics routing and delivered our
                secure portal in under 5 weeks. Our operational efficiency
                increased by 2.4x instantly.&rdquo;
              </p>

              <div className="flex justify-between items-center text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-devflow-blue animate-pulse" />
                  <span className="text-xs text-devflow-gray-300">
                    CTO, Vassu Infotech
                  </span>
                </div>
                <span className="text-devflow-blue group-hover:translate-x-1 transition-transform duration-300">
                  Read Case Studies &rarr;
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Block 6: Contact Estimator CTA (col-span-3) -> Links to Contact */}
          <Link
            href="/contact"
            className="md:col-span-2 lg:col-span-3 block h-full"
          >
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-br from-devflow-blue/[0.04] to-devflow-blue/[0.02] border-devflow-blue/20 hover:border-devflow-blue/30 cursor-pointer h-full group gap-6"
            >
              <div className="space-y-2 text-left">
                <span className="text-xs font-mono text-devflow-blue tracking-wider block">
                  [ ROI &amp; Blueprint Calculator ]
                </span>
                <h4 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-devflow-blue transition-colors duration-300">
                  Calculate Your Project Blueprint
                </h4>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light max-w-xl">
                  Map your requirements to get an instant scope estimate, system
                  timeline, and technical blueprint in under 3 minutes.
                </p>
              </div>

              <div className="text-xs font-mono text-devflow-blue tracking-wider flex-shrink-0 group-hover:underline">
                Get Software Blueprint &rarr;
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

      {/* Content Clusters & Architectural Topic Hubs */}
      <section className="py-16 bg-devflow-black border-t border-white/[0.06] relative z-10">
        <div className="section-container max-w-7xl mx-auto space-y-10">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-mono text-devflow-blue tracking-wider block">
              [ Content Architecture &amp; Topic Hubs ]
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-medium text-white">
              Explore Enterprise Technology Pillars &amp; Cluster Guides
            </h2>
            <p className="text-xs md:text-sm text-devflow-gray-300 max-w-2xl font-light">
              Deep-dive architectural frameworks, trade-off comparisons, and
              cluster guides designed for tech leaders and founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Pillar 1 Hub */}
            <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] flex flex-col justify-between h-full">
              <div className="flex-1 space-y-3">
                <span className="text-xs font-mono text-devflow-blue tracking-wider block mb-1">
                  [ Pillar 1 ]
                </span>
                <h3 className="text-lg font-display font-medium text-white">
                  AI &amp; Agentic Systems Hub
                </h3>
                <p className="text-xs text-devflow-gray-300 font-light leading-relaxed mb-4">
                  Sovereign enterprise AI models, RAG vector retrieval, and
                  autonomous multi-step reasoning agents.
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-devflow-gray-300">
                  <li>
                    <Link
                      href="/services/ai-development"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>AI Development Services</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compare/rag-vs-fine-tuning"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>RAG vs Fine-Tuning Guide</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compare/ai-agent-vs-chatbot"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>AI Agent vs Chatbot Spec</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ai-solutions"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>AI Automation Solutions</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                href="/services/ai-development"
                className="btn-ghost mt-4 pt-3 border-t border-white/[0.06] block"
              >
                View AI Pillar Hub &rarr;
              </Link>
            </div>

            {/* Pillar 2 Hub */}
            <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] flex flex-col justify-between h-full">
              <div className="flex-1 space-y-3">
                <span className="text-xs font-mono text-devflow-blue tracking-wider block mb-1">
                  [ Pillar 2 ]
                </span>
                <h3 className="text-lg font-display font-medium text-white">
                  Custom Software &amp; ERP Hub
                </h3>
                <p className="text-xs text-devflow-gray-300 font-light leading-relaxed mb-4">
                  Bespoke digital platforms, custom ERP/CRM software, and
                  multi-tenant SaaS engineering.
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-devflow-gray-300">
                  <li>
                    <Link
                      href="/services/software-development"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Enterprise Software Hub</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/erp-development"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Custom ERP Software</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compare/custom-software-vs-off-the-shelf"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Custom vs Off-the-Shelf</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/crm-development"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Custom CRM Systems</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                href="/services/software-development"
                className="btn-ghost mt-4 pt-3 border-t border-white/[0.06] block"
              >
                View Software Pillar Hub &rarr;
              </Link>
            </div>

            {/* Pillar 3 Hub */}
            <div className="p-6 rounded-2xl glass-panel border border-white/[0.06] flex flex-col justify-between h-full">
              <div className="flex-1 space-y-3">
                <span className="text-xs font-mono text-devflow-blue tracking-wider block mb-1">
                  [ Pillar 3 ]
                </span>
                <h3 className="text-lg font-display font-medium text-white">
                  Web &amp; Dedicated Teams Hub
                </h3>
                <p className="text-xs text-devflow-gray-300 font-light leading-relaxed mb-4">
                  High-speed Next.js web applications, cross-platform mobile
                  apps, and dedicated engineering pods.
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-devflow-gray-300">
                  <li>
                    <Link
                      href="/services/web-application-development"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Web App Engineering</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dedicated-development-teams"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Dedicated Developer Pods</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/node-js-development"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Node.js Backend API Hub</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/offshore-development"
                      className="group hover:text-devflow-blue transition-colors flex items-center justify-between py-0.5"
                    >
                      <span>Offshore Engineering</span>
                      <span className="text-devflow-blue group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                href="/services/web-application-development"
                className="btn-ghost mt-4 pt-3 border-t border-white/[0.06] block"
              >
                View Web Pillar Hub &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Team Founders Section */}
      <FounderSection />
    </div>
  );
}
