"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiShield, FiLock, FiTerminal, FiDatabase, FiCpu, FiEye, FiArrowRight } from "react-icons/fi";

const securityFeatures = [
  {
    icon: FiLock,
    title: "Encryption at Rest & Transit",
    description: "All database instances utilize AES-256 block encryption. Network payloads are enforced with TLS 1.3 protocol configs to secure server communications.",
  },
  {
    icon: FiEye,
    title: "Access Control & MFA",
    description: "Role-Based Access Control (RBAC) enforced natively. All admin, server, database, and repository access require Multi-Factor Authentication (MFA).",
  },
  {
    icon: FiDatabase,
    title: "Automated Backup & Failover",
    description: "Point-in-Time Recovery (PITR) setup with database replication. Backups are encrypted, stored in isolated S3 buckets, and audited weekly.",
  },
  {
    icon: FiTerminal,
    title: "Secure CI/CD Deployment",
    description: "GitHub Actions runner scanning for secrets. Code branches utilize strict PR approval protocols, automated ESLint checks, and static security analysis.",
  },
  {
    icon: FiShield,
    title: "NDA & Compliance Protection",
    description: "We sign strict bilateral NDAs with our clients. Design architecture guidelines and data management procedures strictly adhere to GDPR standard rules.",
  },
  {
    icon: FiCpu,
    title: "Dependency Tracking & SAST",
    description: "Automated Dependabot vulnerability checking. Proactive static application security testing (SAST) run monthly on all active support retainer repos.",
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ ENTERPRISE SECURITY & IP PROTECT ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Enterprise Security. <br />
              <span className="italic font-normal text-devflow-green font-display">GDPR & NDA Compliant.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You receive robust, secure software built with security guidelines baked in. We protect your enterprise data, user data, and codebase integrity with high standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Architecture Grid */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
          Core Security Protocols
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-xl flex gap-5 border border-white/[0.05]"
              >
                <div className="w-10 h-10 rounded-lg bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-white">{feat.title}</h3>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{feat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Code Ownership Warranty */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
            100% Intellectual Property Guarantee
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            Upon final milestone payment, you receive complete intellectual property (IP) transfer and ownership of the system codebase. We do not use proprietary software lock-ins, licenses, or vendor traps. You are free to hosting-deploy or refactor independently.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Review Compliance Specs
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Partner with us with full technical security confidence. Request an NDA blueprint call with our architecture leads.
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
