"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiRefreshCw, FiShield, FiSliders, FiActivity, FiArrowRight } from "react-icons/fi";

const tasks = [
  {
    icon: FiRefreshCw,
    title: "Dependency & Package Upgrades",
    desc: "Proactive monthly updates of React, Next.js, FastAPI, Node libraries and database drivers to eliminate memory leaks and security vulnerabilities.",
  },
  {
    icon: FiShield,
    title: "Automated Security Patches",
    desc: "Continuous static container audits (SAST) and automated server security patching (Dependabot/Snyk validations).",
  },
  {
    icon: FiSliders,
    title: "Database Optimization & Tuning",
    desc: "Periodic query inspections, database table vacuuming, indexing corrections, and disk allocation scaling to prevent query sluggishness.",
  },
  {
    icon: FiActivity,
    title: "24/7 Monitoring & Backups",
    desc: "Automatic status monitoring (99.9% uptime SLA verification) combined with encrypted multi-region S3 database backups.",
  },
];

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SECURE POST-RELEASE SUPPORT ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Proactive Maintenance. <br />
              <span className="italic font-normal text-devflow-green font-display">Zero System Drift.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You prevent technical debt. We monitor servers, optimize database indices, upgrade packages, and maintain high security standards post-launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tasks.map((task, idx) => {
            const Icon = task.icon;
            return (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-2xl flex gap-6 border border-white/[0.05]"
              >
                <div className="w-12 h-12 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">{task.title}</h3>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{task.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Retainer Model Info */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
            Proactive Technical Audits & Security
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            Our support contracts feature monthly performance checks. We audit database usage logs, compute quotas, and page delivery latency parameters to optimize cloud costs and ensure maximum system efficiency.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Get Technical Maintenance blueprint
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Partner with us to maintain software stability. Schedule a consultation call with our team.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px] inline-flex items-center justify-center gap-2">
              Talk to an Architect <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
