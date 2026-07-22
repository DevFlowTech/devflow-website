"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiLayers, FiCpu, FiDatabase, FiCloud, FiActivity, FiArrowRight } from "react-icons/fi";

const categories = [
  {
    title: "Frontend & Interface",
    items: [
      { name: "Next.js", desc: "For server-side rendering, Edge hosting, and Core Web Vitals optimization." },
      { name: "React 19", desc: "For interactive component rendering and optimized compiler execution." },
      { name: "TypeScript", desc: "For type safety, self-documenting code, and zero runtime syntax errors." },
      { name: "Tailwind CSS v4", desc: "For high-fidelity, fluid layouts and rapid CSS token compile times." },
    ],
  },
  {
    title: "Backend & Logic",
    items: [
      { name: "Node.js", desc: "For high-concurrency real-time WebSocket systems and API routing." },
      { name: "FastAPI", desc: "For fast Python microservices, data validation, and AI agent execution." },
      { name: "Prisma ORM", desc: "For strict schema-migration database mapping and type safety." },
      { name: "tRPC / GraphQL", desc: "For complete type-safe API communication between frontend & backend." },
    ],
  },
  {
    title: "Database & Caching",
    items: [
      { name: "PostgreSQL", desc: "For mission-critical relational operations, ACID safety, and data integrity." },
      { name: "Redis", desc: "For high-performance session caching and real-time pub/sub pipelines." },
      { name: "pgvector / Qdrant", desc: "For vector store embeddings supporting semantic search & AI agents." },
      { name: "Cloudflare D1 / KV", desc: "For sub-10ms global edge data storage and localized caching." },
    ],
  },
  {
    title: "Cloud & Devops",
    items: [
      { name: "Docker", desc: "For containerized isolation and identical local/staging/production setups." },
      { name: "AWS ECS / RDS", desc: "For enterprise cloud auto-scaling, load balancing, and secure storage." },
      { name: "GitHub Actions CI/CD", desc: "For automatic testing, linting audits, and zero-downtime rollouts." },
      { name: "Vercel / Cloudflare Workers", desc: "For edge deployment models ensuring instant international load times." },
    ],
  },
];

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SYSTEMS ARCHITECTURE ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Industrial-Grade <br />
              <span className="italic font-normal text-devflow-green font-display">Technology.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              We write scalable software built on industry-standard platforms. We avoid proprietary traps and construct codebases you completely own, run, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories breakdown */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <div key={cat.title} className="space-y-6">
              <h2 className="text-xs font-mono text-devflow-green uppercase tracking-wider pl-2 border-l border-devflow-green">
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 + catIdx * 0.1 }}
                    className="glass-panel p-5 rounded-xl border border-white/[0.05] hover:border-devflow-green/20 transition-all duration-300"
                  >
                    <h3 className="text-sm font-semibold text-white mb-1.5">{item.name}</h3>
                    <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture QA */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium">
            Zero Legacy Lock-in Guarantee
          </h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            All code is built using native configurations and standard dockerized runners. This guarantees you can deploy onto any cloud service (AWS, GCP, Vercel, Netlify) or migrate databases smoothly without hidden licencing fees or code modifications.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Blueprint Your Technical Stack
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Discuss architectural decisions, migration strategies, and stack dependencies with our core engineers today.
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
