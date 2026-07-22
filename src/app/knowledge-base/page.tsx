"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiBook, FiDollarSign, FiCpu, FiDatabase, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const guides = [
  {
    icon: FiDollarSign,
    category: "Cost & Scoping",
    title: "Software Cost Estimating Guide",
    excerpt: "Understand how system complexity, multi-role databases, third-party integrations, and support SLAs dictate software engineering budgets. Includes timeline checklists.",
    points: [
      "MVP Development budgets: ₹5L - ₹15L",
      "Enterprise ERP systems: ₹20L - ₹60L",
      "Scope creep prevention techniques",
      "Fixed-price contract blueprints",
    ],
  },
  {
    icon: FiDatabase,
    category: "ERP & Custom Software",
    title: "Enterprise ERP System Design Blueprint",
    excerpt: "A comprehensive deep dive into database indexing, ACID transactions, server load balancing, role-based controls (RBAC), and automated daily S3 backup schemas.",
    points: [
      "ACID relational safety parameters",
      "SAML/OIDC Single Sign-On (SSO) setups",
      "Point-in-Time database backups",
      "Load balancing for high-concurrency portals",
    ],
  },
  {
    icon: FiCpu,
    category: "AI & Automations",
    title: "Agentic AI Integration & RAG Guide",
    excerpt: "How to safely connect LLMs (OpenAI/Gemini) to proprietary company data using pgvector and Qdrant database clusters. Preventing data leakage is a key criteria.",
    points: [
      "Embedding indexing and ingestion pipelines",
      "PII data masking security procedures",
      "Conversational LLM guardrail configs",
      "Semantic Search retrieval latency under 200ms",
    ],
  },
];

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SYSTEMS DOCUMENTATION ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Knowledge Base & <br />
              <span className="italic font-normal text-devflow-green font-display">Blueprints.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You achieve clear technical understanding. Access our educational library detailing software estimation, custom ERP architectures, and LLM security guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-white/[0.05] hover:border-devflow-green/20 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-mono text-devflow-green uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-devflow-green/10">
                      {guide.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-devflow-green transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light mb-6">
                    {guide.excerpt}
                  </p>

                  <ul className="space-y-2 text-xs text-devflow-gray-400 border-t border-white/5 pt-4">
                    {guide.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <FiCheckCircle className="text-devflow-green shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex">
                  <Link href="/contact" className="text-xs font-semibold text-devflow-green inline-flex items-center gap-2 group-hover:underline">
                    Download Blueprint Guide <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/[0.04]">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Get Technical Process Blueprint
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss your technical design requirements and architecture specs with our senior systems engineering leads.
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
