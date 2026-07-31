"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiGlobe, FiClock, FiFileText, FiAward, FiArrowRight, FiCheck } from "react-icons/fi";

const offshoreBenefits = [
  {
    icon: FiGlobe,
    title: "Top 1% Engineering Talent",
    description: "Our offices are located in Ahmedabad, Gujarat, India—a major tech hub. We employ only senior developers with deep expertise in Next.js, Node.js, FastAPI, and AWS deployments.",
  },
  {
    icon: FiClock,
    title: "Overlapping Sync Hours",
    description: "We align daily communication hours with US, UK, and EU timezones to support real-time standups, Slack chats, and deployment review syncs.",
  },
  {
    icon: FiAward,
    title: "Premium Value-to-Cost Ratio",
    description: "Reduce system delivery overhead by up to 60% compared to Western developers, without compromising codebase quality, design premium, or security standards.",
  },
];

export default function OffshorePage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ GLOBAL COLLABORATION // OFFSHORE ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Offshore Engineering. <br />
              <span className="italic font-normal text-devflow-green font-display">Premium Global Delivery.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You scale engineering throughput. Access senior developers in India acting as integrated components of your tech team, delivering daily builds with strict compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offshore Benefits */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
          Our Offshore Value Proposition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offshoreBenefits.map((benefit, idx) => {
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

      {/* Strict Standards */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
            NDA-Backed Global Operations
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            All code transitions and data configurations adhere to international security models. We establish strict firewalls and database access restrictions, keeping customer datasets safe and codebases fully protected under contract.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Blueprint Your Offshore Strategy
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss overlapping timezone slots, sprint configurations, and resource pricing with our architects.
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
