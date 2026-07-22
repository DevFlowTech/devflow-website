"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiClock, FiShield, FiAlertTriangle, FiPhoneCall, FiCheckCircle } from "react-icons/fi";

const supportTiers = [
  {
    level: "L1 Support // Critical Incident",
    response: "Under 15 Minutes",
    fixTime: "Under 4 Hours",
    description: "System-wide outages, core payment failures, data pipeline blockages, or security breaches rendering operations unusable.",
  },
  {
    level: "L2 Support // Operational Hindrance",
    response: "Under 2 Hours",
    fixTime: "Under 24 Hours",
    description: "Key features degraded (e.g. email delivery lag, reporting tool timeout) but fallback procedures are available.",
  },
  {
    level: "L3 Support // General Requests",
    response: "Under 8 Hours",
    fixTime: "Staged Release (Next Sprint)",
    description: "Minor bugs, interface updates, config adjustments, or non-blocking functional improvements.",
  },
];

const escalationMatrix = [
  { stage: "Tier 1", role: "Site Reliability Engineer (SRE)", action: "Initial ticket triage, error reproduction, logging inspection, and status reporting." },
  { stage: "Tier 2", role: "Lead Systems Architect", action: "Code remediation, patch deployment, staging verification, and production push." },
  { stage: "Tier 3", role: "Chief Technology Officer / Founders", action: "Root-cause post-mortem writeup, architectural scaling review, and operational sign-off." },
];

export default function SLAPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SERVICE LEVEL AGREEMENT ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Enterprise Availability. <br />
              <span className="italic font-normal text-devflow-green font-display">99.9% Uptime SLA.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You receive robust, guaranteed response structures. We support and protect production-critical operations with strict turnaround commitments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Response Tiers */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
          Incident Response Commitments
        </h2>
        <div className="space-y-6">
          {supportTiers.map((tier, idx) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-white/[0.05]"
            >
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block">[ SEVERITY LEVEL ]</span>
                <h3 className="text-base font-semibold text-white">{tier.level}</h3>
              </div>
              <div className="md:col-span-3 space-y-1">
                <span className="text-[10px] font-mono text-devflow-gold uppercase tracking-widest block">Response Target</span>
                <p className="text-sm font-mono font-semibold text-white flex items-center gap-1.5"><FiClock className="text-devflow-green" /> {tier.response}</p>
              </div>
              <div className="md:col-span-3 space-y-1">
                <span className="text-[10px] font-mono text-devflow-gold uppercase tracking-widest block">Resolution Target</span>
                <p className="text-sm font-mono font-semibold text-white flex items-center gap-1.5"><FiCheckCircle className="text-devflow-green" /> {tier.fixTime}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-[11px] text-devflow-gray-300 leading-relaxed font-light">{tier.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Escalation Matrix */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center">
            Operational Escalation Protocol
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {escalationMatrix.map((matrix) => (
              <div key={matrix.stage} className="p-6 bg-devflow-black border border-white/[0.05] rounded-xl relative hover:border-devflow-green/20 transition-colors">
                <span className="font-mono text-xs text-devflow-green uppercase tracking-widest block mb-2">{matrix.stage}</span>
                <h3 className="text-sm font-semibold text-white mb-2">{matrix.role}</h3>
                <p className="text-xs text-devflow-gray-400 font-light leading-relaxed">{matrix.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Warranty */}
      <section className="py-20 section-container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Preventative System Audits</h3>
            <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">
              All active support contracts include monthly dependencies auditing, static code analysis (SAST), system performance optimization checks, and database indexing audits to prevent memory exhaustion and server drift.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">IP & Code Warranty</h3>
            <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">
              We offer a strict 180-day technical warranty post-delivery on all custom software implementations. Any bugs or regressions arising from normal usage patterns within this timeline are resolved at zero cost.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Establish Secure Operations
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss your system availability and compliance SLA guidelines with our engineering team today.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px]">
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
