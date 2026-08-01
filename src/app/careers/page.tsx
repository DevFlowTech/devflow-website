"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiBriefcase, FiHeart, FiCpu, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const benefits = [
  {
    icon: FiBriefcase,
    title: "Remote First Flexibility",
    description: "Work from anywhere in India with standard core hour overlaps. We focus on async collaboration and outcomes, not seat time.",
  },
  {
    icon: FiHeart,
    title: "Health & Wellness Coverage",
    description: "Premium healthcare plans for you and your family members, plus subscription credits for physical/mental wellness apps.",
  },
  {
    icon: FiCpu,
    title: "Technology Allowance",
    description: "Receive high-performance devices, dynamic noise-canceling accessories, and home-office setup reimbursements.",
  },
  {
    icon: FiTrendingUp,
    title: "Learning & Growth Budgets",
    description: "Annual budgets for certifications, technical courses, books, and engineering conferences.",
  },
];

const openPositions = [
  {
    title: "Lead Fullstack Next.js Developer",
    department: "Engineering",
    location: "Remote (Ahmedabad Office Available)",
    type: "Full-Time",
    experience: "4+ Years",
    cta: "Apply Now",
  },
  {
    title: "AI Integration Architect",
    department: "AI & Automation Solutions",
    location: "Remote (Ahmedabad Office Available)",
    type: "Full-Time",
    experience: "3+ Years",
    cta: "Apply Now",
  },
  {
    title: "Junior QA Automation Engineer",
    department: "Quality Assurance",
    location: "Remote (Ahmedabad Office Available)",
    type: "Full-Time",
    experience: "1+ Years",
    cta: "Apply Now",
  },
];

const hiringSteps = [
  {
    step: "01",
    name: "Application Review",
    description: "We review your public GitHub profiles, engineering portfolios, and previous codebase deliveries.",
  },
  {
    step: "02",
    name: "Technical Assessment",
    description: "An authentic, real-world coding exercise focused on APIs, database relations, and clean architecture.",
  },
  {
    step: "03",
    name: "System Design Panel",
    description: "A conversation with Bhavin Rajput (CTO) detailing component design, caching algorithms, and hosting tradeoffs.",
  },
  {
    step: "04",
    name: "Founder Conversation",
    description: "Aligning on goals, compensation, SLA expectations, and cultural values with Prince Gajjar (CEO).",
  },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Aurora backdrops */}
      <div className="absolute top-[10%] right-[10%] aurora-bg-blue opacity-30 pointer-events-none" />
      <div className="absolute top-[50%] left-[5%] aurora-bg-gold opacity-15 pointer-events-none" />

      {/* Hero Section */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ WORK WITH OPERATORS ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Build Systems. <br />
              <span className="italic font-normal text-devflow-green font-display">Own Your Impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light font-sans">
              Founded in January 2026, DevFlow Technology is an engineering-first custom software company. We skip the management layers and empower developers to coordinate directly with enterprise clients. If you love clean code and direct impact, let's build together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-24 section-container max-w-5xl mx-auto relative z-10">
        <div className="space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ COMPENSATION & LIFE ]</span>
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-white">Benefits Engineered for Developers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/[0.05] hover:border-devflow-green/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-devflow-charcoal relative z-10 border-t border-b border-white/[0.04]">
        <div className="section-container max-w-5xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ TRANSPARENT PHASES ]</span>
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-white">Our 4-Step Hiring Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/[0.06] bg-devflow-black space-y-4">
                <span className="text-2xl font-mono font-bold text-devflow-green">{step.step}</span>
                <h3 className="text-sm font-semibold text-white">{step.name}</h3>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 section-container max-w-5xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ ACTIVE CHALLENGES ]</span>
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-white">Open Engineering Positions</h2>
          </div>

          <div className="space-y-4">
            {openPositions.map((job, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal hover:border-devflow-green/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="px-2 py-0.5 bg-devflow-green/10 text-devflow-green text-[10px] font-mono rounded border border-devflow-green/20">
                      {job.department.toUpperCase()}
                    </span>
                    <span className="text-devflow-gray-500 text-[10px] font-mono">• {job.type}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-xs text-devflow-gray-400 font-light">
                    {job.location} | Required: {job.experience} Experience
                  </p>
                </div>

                <Link href="/contact" className="px-5 py-3 rounded-lg bg-devflow-green text-devflow-black font-mono font-medium text-xs hover:bg-devflow-green/90 transition-colors inline-flex items-center gap-2 self-start md:self-auto shrink-0">
                  {job.cta} <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center border-t border-white/[0.04] relative z-10">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Don't see your role?
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            We are always looking for smart React developers, AI prompt architects, and Python specialists. Shoot us your profile directly.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px] inline-flex items-center justify-center gap-2">
              Submit Open Application <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
