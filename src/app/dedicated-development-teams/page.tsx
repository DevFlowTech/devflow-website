"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiUsers, FiClock, FiCode, FiLayers, FiArrowRight, FiCheck } from "react-icons/fi";

const teamRoles = [
  {
    role: "Fullstack Engineers",
    skills: "React, Next.js, Node.js, Python, TypeScript, Tailwind, REST/GraphQL APIs",
    description: "Senior systems developers building robust web features, front-to-back logic, and database schemas in isolated sprints.",
  },
  {
    role: "Cloud & DevOps Architects",
    skills: "AWS ECS/RDS, Docker, Kubernetes, GitHub Actions CI/CD pipelines, Cloudflare Workers",
    description: "SREs specializing in high-availability deployments, security auditing, and automated container scaling configs.",
  },
  {
    role: "AI & Vector Database Leads",
    skills: "FastAPI, LangChain, LlamaIndex, Qdrant, OpenAI/Gemini APIs, pgvector",
    description: "Specialist engineers embedding semantic search, RAG pipelines, and conversational LLM interfaces.",
  },
];

const operations = [
  { metric: "10 Days", label: "Average Onboarding Time", desc: "Our developers sync in your Slack and GitHub, aligned with your task boards in under 10 days." },
  { metric: "100%", label: "Source Code Control", desc: "All code revisions are committed to your corporate repositories. You retain total IP ownership." },
  { metric: "Weekly", label: "Sprint Demonstrations", desc: "We review operational staging updates and functional features weekly, preventing project drift." },
  { metric: "40 Hrs", label: "Weekly Commitment", desc: "Dedicated resources focus exclusively on your roadmap sprints, managed by lead architects." },
];

export default function DedicatedTeamsPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ STAFF AUGMENTATION & SQUAD SETUP ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Dedicated Squads. <br />
              <span className="italic font-normal text-devflow-green font-display">Roadmap Velocity.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You accelerate engineering output. Hire dedicated squads of staff-level software developers, UI designers, and DevOps specialists working directly within your workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Operational Metrics */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {operations.map((op, idx) => (
            <motion.div
              key={op.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-6 rounded-xl border border-white/[0.05] text-center"
            >
              <span className="block text-3xl font-mono font-bold text-devflow-green mb-2">{op.metric}</span>
              <h3 className="text-sm font-semibold text-white mb-2">{op.label}</h3>
              <p className="text-xs text-devflow-gray-400 font-light leading-relaxed">{op.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roles Breakdown */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
            Engineering Roles Available
          </h2>
          <div className="space-y-6">
            {teamRoles.map((role, idx) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 bg-devflow-black border border-white/[0.05] rounded-xl flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
              >
                <div className="space-y-2 max-w-xl">
                  <h3 className="text-lg font-bold text-white group-hover:text-devflow-green transition-colors">{role.role}</h3>
                  <p className="text-xs text-devflow-gray-400 font-light leading-relaxed">{role.description}</p>
                  <p className="text-[10px] font-mono text-devflow-gold leading-relaxed">SKILLS: {role.skills}</p>
                </div>
                <Link href="/contact" className="px-5 py-2.5 bg-white/[0.04] border border-white/[0.08] hover:border-devflow-green/40 hover:bg-devflow-green/10 text-xs font-semibold rounded-lg text-white transition-colors uppercase shrink-0">
                  Request Developer Profile
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Onboard Your Engineering Team
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss roadmap milestones, resource allocations, and developer qualifications with our engineering leads today.
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
