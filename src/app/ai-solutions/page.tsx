"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiCpu, FiMessageSquare, FiTrendingUp, FiEye, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const aiCapabilities = [
  {
    icon: FiMessageSquare,
    title: "Conversational RAG Chatbots",
    description: "Connect Large Language Models (LLMs) securely to your internal databases, PDFs, and API documentation using vector database retrieval. Support queries instantly and accurately without hallucination.",
  },
  {
    icon: FiCpu,
    title: "Agentic Workflow Automation",
    description: "Engineered autonomous AI agents that analyze logs, write reports, classify support tickets, and update CRM records automatically without human oversight.",
  },
  {
    icon: FiEye,
    title: "LLM Fine-Tuning & Prompt Tuning",
    description: "Fine-tune open-source models (like Llama, Mistral) on your private corporate datasets to build highly specialized semantic classification or generation engines.",
  },
];

const standards = [
  "Strict LLM Guardrails against jailbreaks",
  "No data training leak clauses in API contracts",
  "pgvector & Qdrant vector database caching",
  "Sub-second semantic search retrieval speeds",
  "Hybrid Keyword + Vector Search models",
  "OpenAPI schema integration validation",
];

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ AGENTIC INTELLIGENCE ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Agentic AI. <br />
              <span className="italic font-normal text-devflow-green font-display">Automated Operations.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You achieve cognitive task automation. We build custom RAG pipelines, deploy specialized LLM agent nodes, and integrate semantic intelligence into your enterprise databases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
          Core AI Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
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
                  <h3 className="text-base font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">{cap.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
              Enterprise-Grade AI Guardrails & Privacy
            </h2>
            <p className="text-sm text-devflow-gray-300 leading-relaxed font-light">
              We construct custom AI pipelines with data privacy as a primary specification. All external API endpoints are configured with strict PII masking policies, preventing customer data or proprietary repository logs from being ingested by third-party public foundation models.
            </p>
          </div>
          <div className="bg-devflow-black border border-white/[0.05] p-8 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-devflow-gold uppercase tracking-widest block font-bold">[ SYSTEM STANDARDS ]</span>
            <ul className="grid grid-cols-1 gap-3 text-xs text-devflow-gray-300">
              {standards.map((std) => (
                <li key={std} className="flex items-center gap-2">
                  <FiCheckCircle className="text-devflow-green shrink-0" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Blueprint Your AI Strategy
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss LLM agent options, training data preparation, and security guardrail configurations with our core engineering architects.
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
