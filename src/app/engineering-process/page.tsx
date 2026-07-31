"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiSearch, FiLayout, FiGitPullRequest, FiActivity, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    step: "01",
    title: "Technical Discovery & Blueprints",
    desc: "We analyze legacy databases, document user flows, and construct technical specifications. You receive system wireframes, relational schema diagrams, and concrete milestone plans.",
  },
  {
    icon: FiLayout,
    step: "02",
    title: "UI/UX & Interactive Prototyping",
    desc: "We build detailed, responsive design layouts in Figma conforming to clear UI/UX tokens. You verify interactive mockups and click-through flows before any code is constructed.",
  },
  {
    icon: FiGitPullRequest,
    step: "03",
    title: "Agile Sprunts & Secure Branching",
    desc: "We build features in 1-week cycles. Code revisions pass strict pull request (PR) approval protocols, automated unit testing, and static analysis checks before staging deployment.",
  },
  {
    icon: FiActivity,
    step: "04",
    title: "CI/CD & Zero-Downtime Releases",
    desc: "Deployments are automated through Git pipelines onto isolated staging and production cloud systems. You test updates in real-time, followed by zero-downtime rollouts.",
  },
];

export default function EngineeringProcessPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SYSTEMS DELIVERY LIFECYCLE ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Agile Engineering. <br />
              <span className="italic font-normal text-devflow-green font-display">Iterative Verification.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You maintain complete insight. We construct custom software in secure sprints with continuous integration, unit validation, and full staging previews.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
          From Blueprint to Production
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-2xl flex gap-6 border border-white/[0.05]"
              >
                <div className="space-y-4 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xl font-bold text-devflow-green/30 block text-center">{step.step}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Code Quality Section */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
            Strict QA & Code Review Commitments
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            We write clean TypeScript and Python code compliant with industry standards. Every merge request requires review by our senior lead architects. We implement rigorous end-to-end integration tests (Playwright) to eliminate critical regressions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Get Technical Process Blueprint
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Partner with us with complete technical execution confidence. Schedule your discovery blueprint call today.
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
