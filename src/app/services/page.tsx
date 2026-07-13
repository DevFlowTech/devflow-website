"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce, easeOut } from "@/lib/motion";
import { useState } from "react";
import FAQSection from "@/components/sections/FAQSection";
import dynamic from "next/dynamic";

const servicesList = [
  {
    id: "ai-automation",
    title: "AI Automation & Integrations",
    subtitle: "Automate repetitive operational workflows and introduce LLM intelligence.",
    bullets: [
      "Custom GPT & LLM fine-tuning and deployment",
      "Retrieval Augmented Generation (RAG) for internal data retrieval",
      "Automated pipeline scripting (Zapier, Make, and bespoke Node/Python runners)",
      "Interactive conversational bots for client engagement and support",
    ],
    tech: ["OpenAI API", "Langchain", "Python", "Node.js", "Vector DBs"],
  },
  {
    id: "web-app-dev",
    title: "Web & Mobile App Development",
    subtitle: "High-performance software engineered for extreme reliability and clean scaling.",
    bullets: [
      "Next.js, React, and TypeScript web applications",
      "Bespoke Enterprise ERP & inventory management systems",
      "Native and cross-platform mobile apps (iOS & Android via React Native)",
      "Custom database structures and scalable API integrations",
    ],
    tech: ["Next.js 15/16", "React 19", "TypeScript", "React Native", "PostgreSQL", "AWS"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & High-End Brand Design",
    subtitle: "Stunning, motion-focused interfaces designed to wow users at first sight.",
    bullets: [
      "Figma design systems and interactive prototypes",
      "Advanced motion design and transition planning",
      "Clean, minimalist layout designs that maximize conversions",
      "Futuristic dark-mode brand systems with neon aesthetics",
    ],
    tech: ["Figma", "Framer Motion", "Spline 3D", "Tailwind CSS", "Vanilla CSS"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Aurora Gradient Backdrops */}
      <div className="absolute top-[15%] right-[5%] aurora-bg-blue opacity-40" />
      <div className="absolute top-[45%] left-[5%] aurora-bg-gold opacity-20" />

      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="section-container max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SERVICES & INTEGRATIONS ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Bespoke Solutions. <br />
              <span className="italic font-normal text-devflow-green font-display">Zero Fluff.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              We specialize in custom engineering. We build fast database setups, automate repetitive operational flows, and design clean interfaces that make it easy for your users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="py-20 relative z-10 section-container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px]">
          {/* Card 1: AI Automation (col-span-2) */}
          <div className="md:col-span-2 glass-panel p-8 md:p-10 rounded-2xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-devflow-green/[0.03] to-transparent pointer-events-none" />
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-devflow-gray-400">[ CATEGORY 01 // AUTOMATIONS ]</span>
              <span className="text-xs font-mono text-devflow-green tracking-widest px-2.5 py-1 rounded bg-devflow-green/10">ACTIVE</span>
            </div>

            <div className="my-6">
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">
                AI Automation & Connecting Apps
              </h2>
              <p className="text-sm text-devflow-gray-300 font-light max-w-2xl leading-relaxed mb-6">
                Connect your software tools together. We automate manual business work, synchronize your databases, and build custom AI assistants to save your team hours of manual typing.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3 text-xs text-devflow-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Custom AI assistant setup
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Automated tasks & notifications
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Connecting applications to share data
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Automated support bots
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {["OpenAI API", "LangChain", "Python", "FastAPI", "PostgreSQL"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-devflow-black border border-white/5 font-mono text-[10px] text-devflow-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: UI/UX (col-span-1) */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-devflow-gray-400">[ CATEGORY 02 // DESIGN ]</span>
              <span className="text-xs font-mono text-devflow-green tracking-widest px-2.5 py-1 rounded bg-devflow-green/10">VISION</span>
            </div>

            <div className="my-4">
              <h2 className="text-xl font-display font-medium text-white mb-3">
                UI/UX & Brand Systems
              </h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                Beautiful, modern designs that look premium. We create custom dashboard visual themes, mobile-friendly layouts, and smooth hover effects.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
              {["Figma", "Framer Motion", "Vanilla CSS", "Tailwind"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-devflow-black border border-white/5 font-mono text-[10px] text-devflow-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Web App Dev (col-span-1) */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-devflow-gray-400">[ CATEGORY 03 // ENGINEERING ]</span>
              <span className="text-xs font-mono text-devflow-green tracking-widest px-2.5 py-1 rounded bg-devflow-green/10">BUILD</span>
            </div>

            <div className="my-4">
              <h2 className="text-xl font-display font-medium text-white mb-3">
                Web & Mobile Apps
              </h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                Fast, reliable code built for long-term growth. We build online portals, customer dashboards, business management tools, and simple mobile apps.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
              {["Next.js", "React 19", "TypeScript", "React Native"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-devflow-black border border-white/5 font-mono text-[10px] text-devflow-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Infrastructure (col-span-2) */}
          <div className="md:col-span-2 glass-panel p-8 md:p-10 rounded-2xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-devflow-green/[0.03] to-transparent pointer-events-none" />
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-devflow-gray-400">[ CATEGORY 04 // CLOUD ]</span>
              <span className="text-xs font-mono text-devflow-green tracking-widest px-2.5 py-1 rounded bg-devflow-green/10">SCALE</span>
            </div>

            <div className="my-6">
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">
                Hosting & Cloud Setup
              </h2>
              <p className="text-sm text-devflow-gray-300 font-light max-w-2xl leading-relaxed mb-6">
                Secure hosting and cloud setups. We configure fast database synchronization, set up secure staging environments, and manage cloud updates.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3 text-xs text-devflow-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Modern hosting and auto-scaling
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Secure AWS & Google Cloud hosting
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Automated code updates and tests
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                  Automatic database backups and sync
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {["Docker", "AWS ECS", "Kubernetes", "CI/CD", "PostgreSQL", "Redis"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-devflow-black border border-white/5 font-mono text-[10px] text-devflow-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <section className="py-24 bg-devflow-black text-center relative border-t border-white/[0.04]">
        <div className="section-container max-w-4xl relative z-10">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-4">
            [ OUTLINE YOUR SCOPE ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Ready to design your setup?
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Estimate your project timeline and criteria in our cost estimator. We will get back to you with budget details.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="btn-primary min-w-[200px]">
              Start Your Discovery
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
