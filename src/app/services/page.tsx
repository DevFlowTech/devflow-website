"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import Link from "next/link";
import { FiCpu, FiDatabase, FiGrid, FiArrowRight, FiShield, FiTrendingUp, FiActivity, FiLayers } from "react-icons/fi";
import FAQSection from "@/components/sections/FAQSection";

const servicesDetails = [
  {
    id: "custom-erp",
    icon: FiDatabase,
    title: "Bespoke Enterprise ERP & Core Software",
    description: "Replace legacy spreadsheets and disjointed SaaS subscriptions with a single, high-performance operational portal tailored to your exact business logic.",
    problem: "Operational data siloed across legacy platforms, causing billing errors, synchronization lag, and 20+ hours of manual data re-entry weekly.",
    impact: "Reduce administrative cost by 40%, achieve instant cross-department visibility, and establish single-source-of-truth automated reporting.",
    solution: "We build custom database structures, role-based admin portals, and sync scripts that automate workflow handoffs.",
    architecture: "Next.js App Router frontend, Node.js/FastAPI business layer, Prisma ORM, PostgreSQL database, hosted on AWS ECS with automated RDS backups.",
    stack: "React, Next.js, Node.js, Prisma, PostgreSQL, Docker, AWS, Cloudflare",
    timeline: "12 to 18 Weeks",
    deliverables: [
      "Interactive Multi-Role Dashboards",
      "Bespoke Database Schema Design",
      "SAML/OIDC SSO Integration",
      "Full API Documentation (Swagger/OpenAPI)",
      "Automated PDF & Email Invoice Generation Engine",
    ],
  },
  {
    id: "ai-automation",
    icon: FiCpu,
    title: "Agentic AI & Workflow Automation",
    description: "Introduce custom Large Language Model (LLM) agents, automated vector databases, and semantic search interfaces to streamline support and client onboarding.",
    problem: "Customer support agents spending 60% of their shift answering repetitive queries, leading to slow response times and customer churn.",
    impact: "Automate up to 75% of level-1 customer inquiries, maintaining sub-minute response times 24/7 with zero human oversight required.",
    solution: "Engineered Retrieval-Augmented Generation (RAG) pipelines and multi-agent systems connected directly to your customer support tools.",
    architecture: "Python FastAPI backend, LangChain/LlamaIndex frameworks, Qdrant/pgvector vector stores, OpenAI/Gemini API integration.",
    stack: "Python, FastAPI, OpenAI API, Gemini API, Qdrant, LangChain, Node.js",
    timeline: "8 to 12 Weeks",
    deliverables: [
      "Custom RAG Pipeline & Embedding Ingestion",
      "Semantic Search Interface for Internal Documentation",
      "Conversational Lead-Capture Web Widgets",
      "Automated Support-Ticket Categorization Script",
      "LLM Guardrails & Hallucination Prevention Policies",
    ],
  },
  {
    id: "saas-development",
    icon: FiGrid,
    title: "High-Performance SaaS & Web Applications",
    description: "Launch premium, fast web platforms with sub-second page loads, conversion-optimized checkout funnels, and enterprise-grade security.",
    problem: "Slow-loading custom applications causing high bounce rates (50%+), drop-offs in checkout flows, and bad Google Core Web Vitals scores.",
    impact: "Sub-second LCP (Largest Contentful Paint < 1.0s), 30%+ increase in checkout conversions, and 100% Core Web Vitals rating.",
    solution: "Engineered with modern Next.js edge layouts, database caching, and server-side rendering combined with Framer Motion visual designs.",
    architecture: "Next.js Server Components, Tailwind CSS styling, Stripe/Razorpay payments, Redis caching layer, deployed on Vercel Edge Network.",
    stack: "React, Next.js, TypeScript, Tailwind CSS, Redis, Stripe API, Vercel Edge",
    timeline: "10 to 14 Weeks",
    deliverables: [
      "Responsive React App with Next.js App Router",
      "Stripe Subscription & Usage-Based Billing Engine",
      "Comprehensive E2E Test Suite (Playwright)",
      "Conversion-Optimized Landing Page System",
      "Google Search Console & Meta Tag Optimization",
    ],
  },
  {
    id: "dedicated-engineering",
    icon: FiLayers,
    title: "Dedicated Product Engineering Teams",
    description: "Hire a dedicated team of staff-level software developers, UI designers, and systems architects to accelerate your product roadmap under direct management.",
    problem: "Finding and onboarding reliable engineering talent takes months, causing roadmap slippage and delayed feature releases.",
    impact: "Onboard dedicated developers in under 10 days, increasing development velocity by 3x and guaranteeing roadmap targets are hit on schedule.",
    solution: "Fully managed, dedicated engineering resources working in your Slack, GitHub, and Jira, using agile Scrum sprints.",
    architecture: "Continuous Integration & Continuous Deployment (CI/CD) pipelines, staging & production environment isolation, daily standups.",
    stack: "Fullstack Engineers, UI/UX Designers, QA Testers, DevOps Specialists",
    timeline: "Ongoing Retainer (Monthly Contract)",
    deliverables: [
      "Dedicated Full-Time Developers (40 Hours/Week)",
      "Daily Slack Updates & Weekly Sprint Demos",
      "Automated Code Quality & Security Scanning (GitHub Actions)",
      "Weekly Technical Reporting & Direct Architect Consulting",
      "Zero-overhead onboarding and resource management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Aurora Gradient Backdrops */}
      <div className="absolute top-[15%] right-[5%] aurora-bg-blue opacity-40" />
      <div className="absolute top-[45%] left-[5%] aurora-bg-gold opacity-20" />

      {/* Intro Section */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="section-container max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SERVICES & INTEGRATIONS ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Enterprise Engineering. <br />
              <span className="italic font-normal text-devflow-green font-display">Measured Outcomes.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              You receive robust, scalable, and audit-compliant digital infrastructure built by senior systems engineers. We eliminate manual operational drag, accelerate roadmap velocity, and ensure complete source code ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Structured Services Breakdown */}
      <section className="py-20 relative z-10 section-container max-w-5xl mx-auto">
        <div className="space-y-24">
          {servicesDetails.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-white/[0.04] last:border-0 last:pb-0"
              >
                {/* Left Side: Summary & Icon */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center text-devflow-green">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-devflow-gray-300 text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-devflow-gray-400 block mb-1">PROJECT TIMELINE</span>
                    <span className="text-devflow-green font-mono font-semibold text-sm">{service.timeline}</span>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {service.stack.split(", ").map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono text-[9px] text-devflow-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Technical Specs & Case Detail */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6 bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block font-bold">
                        [ The Problem ]
                      </span>
                      <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">
                        {service.problem}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block font-bold">
                        [ Business Impact ]
                      </span>
                      <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">
                        {service.impact}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
                      [ System Solution ]
                    </span>
                    <p className="text-sm text-white font-light leading-relaxed">
                      {service.solution}
                    </p>
                  </div>

                  <div className="space-y-2 bg-devflow-charcoal p-4 rounded-xl border border-white/[0.04] font-mono text-[11px] text-devflow-gray-300">
                    <span className="text-[9px] font-mono text-devflow-gold uppercase tracking-widest block mb-1">
                      [ Reference Architecture ]
                    </span>
                    <p className="leading-normal">{service.architecture}</p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-mono text-white uppercase tracking-widest block">
                      [ Core Deliverables ]
                    </span>
                    <ul className="grid md:grid-cols-2 gap-2 text-xs text-devflow-gray-300">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-devflow-green" />
                          {item}
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

      {/* FAQs Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-24 bg-devflow-black text-center relative border-t border-white/[0.04]">
        <div className="section-container max-w-4xl relative z-10">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-4">
            [ OUTLINE YOUR SCOPE ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Ready to design your operational blueprint?
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Map your project requirements to calculate your ROI scope, system timeline, and receive a comprehensive technical blueprint.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px] inline-flex items-center justify-center gap-2">
              Get Software Blueprint <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
