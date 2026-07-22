"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiEyeOff, FiCode, FiLayers, FiDollarSign, FiArrowRight, FiCheck } from "react-icons/fi";

const whiteLabelBenefits = [
  {
    icon: FiEyeOff,
    title: "100% Silent NDA Execution",
    description: "Our developers act as extensions of your team. We work using your corporate email aliases, Slack instances, and staging servers, remaining invisible to your end-clients.",
  },
  {
    icon: FiCode,
    title: "Clean, Maintainable Codebase",
    description: "Every codebase is written in strict TypeScript and Python, utilizing automated test suites (Playwright/Jest) to protect your brand credibility from system regressions.",
  },
  {
    icon: FiLayers,
    title: "IP Transfer & Code Ownership",
    description: "Upon project completion, all intellectual property rights and repositories are transferred directly to your organization. Zero licensing constraints.",
  },
];

export default function WhiteLabelPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SILENT PARTNERSHIP // WHITE LABEL ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              White Label Dev. <br />
              <span className="italic font-normal text-devflow-green font-display">Your Brand, Our Code.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You scale client acquisition and relationship management. We manage backend, database, frontend, and API integrations silently under complete NDA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
          Why Agencies Partner with DevFlow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whiteLabelBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-white/[0.05] hover:border-devflow-green/20 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green mb-6 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process matrix */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
            Agile Code Review Commitments
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            We use strict branching strategies (Gitflow) and run automated linting and unit testing protocols. This ensures that any white-label software we deliver meets the high compliance and performance parameters required by your enterprise clients.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Review White Label Terms
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Partner with us to accelerate features delivery. Request our white-label framework specifications and standard NDA.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px] inline-flex items-center justify-center gap-2">
              Book Strategy Call <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
