"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiUsers, FiClock, FiFileText, FiTarget, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const pricingModels = [
  {
    icon: FiFileText,
    title: "Fixed-Price Discovery & Scope Workshop",
    description: "Ideal for mapping out ambiguous requirements. We deliver a complete interactive system wireframe layout, target database schemas, visual component design system, and timeline/cost breakdown documents.",
    timeline: "2 to 3 Weeks",
    bestFor: "Startups & SMEs seeking clear specifications before engineering.",
    details: [
      "Figma UX/UI Layout Blueprints",
      "System Architecture Scoping Documents",
      "Database Schema Diagrams",
      "Exact Fixed-Price Milestone Contract Options",
    ],
  },
  {
    icon: FiTarget,
    title: "Fixed-Price Project-Based Delivery",
    description: "Milestone-driven software development based on strict scope parameters. Payments are tied to clear functional deliverables verified on staging environments.",
    timeline: "8 to 16 Weeks",
    bestFor: "Clearly defined core MVP launches, custom ERP replacements, or CRM systems.",
    details: [
      "Detailed project specifications document",
      "Bilateral NDA protection and IP transfer",
      "Weekly staging builds and developer updates",
      "180-day code warranty & bug-fix guarantee",
    ],
  },
  {
    icon: FiUsers,
    title: "Dedicated Engineering Retainer",
    description: "August sprint velocity by hiring a dedicated squad of developers, designers, and testers managed via agile sprints. Monthly billing based on resource headcount.",
    timeline: "Monthly Contract (3-Month Minimum)",
    bestFor: "Scaling SaaS products, ongoing API updates, and legacy digital transformations.",
    details: [
      "Dedicated Full-Time Senior Developers",
      "Integrated directly into your Slack, Jira, and GitHub workflows",
      "Weekly sprint demos and direct roadmap acceleration",
      "Flexible scaling to adjust resources monthly",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ ENGAGEMENT MODELS ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Flexible Engagement. <br />
              <span className="italic font-normal text-devflow-green font-display">No Hidden Overhead.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You achieve clear predictability. We do not hide behind vague retainers or obscure pricing schedules. We offer transparent engagement models mapped directly to your project specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="space-y-8">
          {pricingModels.map((model, idx) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-white/[0.05]"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                    <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{model.description}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-devflow-gray-400 block mb-1">TYPICAL TIMELINE</span>
                    <span className="text-devflow-green font-mono font-semibold text-sm">{model.timeline}</span>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.05] p-6 rounded-xl space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-devflow-gold uppercase tracking-widest block font-bold">Best For</span>
                    <p className="text-xs text-white leading-relaxed font-medium">{model.bestFor}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-devflow-green uppercase tracking-widest block font-bold">Deliverables & Scope</span>
                    <ul className="grid md:grid-cols-2 gap-2.5 text-xs text-devflow-gray-300">
                      {model.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <FiCheckCircle className="text-devflow-green shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SLA Tiers / Payments */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
            International Payment Compatibility
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            We support secure domestic bank transfers in India (INR / NEFT / IMPS) and international payments (USD / EUR / GBP wire transfers) via standard corporate banking pipelines. All billing processes are transparent, with detailed invoice parameters.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Get Technical Blueprint Scopes
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss your system details, budget parameters, and roadmap options with our senior software architects.
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
