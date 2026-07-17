
"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck, HiStar, HiArrowRight, HiCpuChip, HiServer, HiCloud, HiLockClosed, HiArrowPath, HiUsers, HiChartBar, HiGlobeAlt } from "react-icons/hi2";


const itServices = [
  {
    icon: HiCpuChip,
    title: "Custom Software Development",
    description: "End-to-end development of enterprise-grade software: architecture, development, testing, deployment, and maintenance. Domain-driven design, clean architecture, scalable systems.",
    features: ["Domain-Driven Design", "Clean Architecture", "Microservices/Modular Monolith", "Automated Testing", "CI/CD & GitOps"],
    href: "/services/custom-software-erp",
  },
  {
    icon: HiServer,
    title: "AI & Machine Learning Solutions",
    description: "Custom AI/ML models, LLM integration, RAG systems, computer vision, NLP, and predictive analytics tailored for Gujarat's manufacturing, textile, pharma, and trading sectors.",
    features: ["LLM Fine-tuning & RAG", "Predictive Analytics", "Computer Vision", "NLP & Document AI", "MLOps & Model Serving"],
    href: "/services/ai-automation",
  },
  {
    icon: HiCloud,
    title: "Cloud & DevOps Engineering",
    description: "Cloud-native architecture, infrastructure as code, CI/CD pipelines, container orchestration, observability, and cost optimization on AWS, GCP, and Azure.",
    features: ["AWS/GCP/Azure Architecture", "Terraform & IaC", "Kubernetes & EKS/GKE", "Observability (Grafana, Datadog)", "FinOps & Cost Optimization"],
    href: "/services",
  },
  {
    icon: HiLockClosed,
    title: "Cybersecurity & Compliance",
    description: "Application security, penetration testing, SOC 2/ISO 27001 readiness, data protection (DPDP Act India), and secure SDLC implementation.",
    features: ["Pen Testing & VAPT", "Secure Code Review", "DPDP/GDPR Compliance", "SOC 2/ISO 27001 Prep", "DevSecOps Integration"],
    href: "/services",
  },
  {
    icon: HiArrowPath,
    title: "Legacy Modernization",
    description: "Strangler fig migration, refactoring monoliths to microservices, database modernization, API facades, and zero-downtime cutover for mission-critical Gujarat enterprise systems.",
    features: ["Strangler Fig Pattern", "Database Migration", "API Gateway Facade", "Event-Driven Decoupling", "Canary Deployments"],
    href: "/services/custom-software-erp",
  },
  {
    icon: HiUsers,
    title: "Staff Augmentation & Dedicated Teams",
    description: "Pre-vetted engineers (React, Node, Python, Go, Flutter, DevOps, QA) integrated into your teams. 2-week trial, transparent pricing, knowledge transfer guarantee.",
    features: ["Pre-vetted Talent Pool", "2-Week Risk-Free Trial", "Direct Team Integration", "Knowledge Transfer Docs", "Flexible Scaling"],
    href: "/services",
  },
];

const techStack = [
  "TypeScript",
  "Go",
  "Python",
  "Rust",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Kubernetes",
  "Docker",
  "Terraform",
  "AWS",
  "GCP",
  "Linux",
  "GitLab CI",
  "GitHub Actions",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
];

const itProcess = [
  { step: "01", title: "Assessment & Strategy", desc: "Current state analysis, gap assessment, technology roadmap, build vs buy decisions, and ROI modeling for IT investments." },
  { step: "02", title: "Architecture & Design", desc: "System architecture, data modeling, API contracts, security threat modeling, infrastructure design, and technology selection." },
  { step: "03", title: "Team Assembly & Onboarding", desc: "Dedicated team formation, environment setup, knowledge transfer, development standards, and communication protocols." },
  { step: "04", title: "Iterative Delivery", desc: "2-week sprints, working software every sprint, automated testing, code reviews, stakeholder demos, and retrospective improvements." },
  { step: "05", title: "Production Hardening", desc: "Load testing, chaos engineering, disaster recovery drills, runbook creation, on-call rotation, and SLO/SLI definition." },
  { step: "06", title: "Operate & Evolve", desc: "24/7 monitoring, incident management, capacity planning, security patching, feature evolution, and quarterly architecture reviews." },
];

const localFaqs = [
  {
    question: "Why is DevFlow considered a top IT company in Ahmedabad?",
    answer: "We combine product-grade engineering with deep Gujarat domain knowledge. Our founders are hands-on architects who've built systems for manufacturing (Vadodara), textiles (Surat), real estate (Ahmedabad), pharma (Ankleshwar), and SaaS (Gandhinagar). No bench—every engineer bills to client value.",
  },
  {
    question: "What IT services do you provide for Gujarat enterprises?",
    answer: "Full spectrum: custom software development, AI/ML solutions, cloud & DevOps, cybersecurity & compliance (DPDP Act), legacy modernization, and staff augmentation. We specialize in complex B2B/enterprise systems—not simple websites.",
  },
  {
    question: "Do you work with family-owned and mid-market Gujarat businesses?",
    answer: "Yes, that's our core clientele. We understand the constraints: budget consciousness, need for quick ROI, succession planning, and preference for direct owner-access. We structure engagements with fixed-price discovery, milestone billing, and transparent reporting.",
  },
  {
    question: "Can you handle our data residency and compliance requirements (DPDP Act, RBI, SEBI)?",
    answer: "Absolutely. We architect for data sovereignty: on-prem/hybrid deployments, encryption at rest/transit, audit logging, data classification, retention policies, and DPDP Act compliance frameworks. We've done RBI/SEBI-regulated fintech and pharma validations.",
  },
  {
    question: "What's your engagement model and pricing?",
    answer: "Project-based (fixed scope): ₹25L-5Cr+. Dedicated team (monthly): ₹25L-1Cr/month for 5-20 engineers. Staff augmentation: ₹1.5-4L/engineer/month. Advisory retainer: ₹5-15L/month. Free 2-hour architecture consultation for Gujarat-registered companies.",
  },
  {
    question: "How do you ensure knowledge transfer and avoid vendor lock-in?",
    answer: "Contractual requirements: architecture decision records (ADRs), runbooks, deployment guides, source code ownership (client owns IP), standardized tech stacks (no proprietary frameworks), and 30-day knowledge transfer period at project end.",
  },
];

export default function ITCompanyAhmedabadPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-28 pb-16 overflow-hidden">
      <StructuredData />
      
      <section className="pt-20 pb-16 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.span variants={staggerItem} className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ TECHNOLOGY PARTNER // AHMEDABAD, GUJARAT ]
            </motion.span>
            
            <motion.h1 variants={staggerItem} className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl">
              Leading <span className="italic font-normal font-display text-devflow-green">IT Company</span> in Ahmedabad.
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              DevFlow Technology is the trusted technology partner for Gujarat's most ambitious enterprises. Custom software, AI, cloud, DevOps, security, and teams—delivered by engineers who understand your business, not account managers.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
                START TECHNOLOGY PARTNERSHIP <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="px-8 py-4 border border-white/[0.1] text-white font-semibold text-xs rounded-xl hover:border-devflow-green/50 transition-colors inline-flex items-center gap-2">
                VIEW ALL IT SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">100+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Enterprise Systems Delivered</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">95%</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Client Retention Rate</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">50+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Engineers on Bench</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">12</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Gujarat Cities Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ IT SERVICES PORTFOLIO ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Comprehensive Capabilities for Gujarat's Digital Transformation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" aria-label={service.title} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-devflow-gray-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-devflow-green text-xs font-mono hover:underline inline-flex items-center gap-1">
                  EXPLORE <HiArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ PRODUCTION STACK ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Enterprise-Grade Technology Choices</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Boring, stable, scalable. We optimize for maintainability and total cost of ownership.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-4 py-2 rounded-lg bg-devflow-charcoal border border-white/[0.05] text-xs font-mono text-devflow-gray-300 hover:border-devflow-green/30 hover:text-white transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ ENGAGEMENT MODEL ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">6-Phase Delivery for Enterprise Outcomes</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Predictable timelines. Transparent costs. Measurable business impact at every phase.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all relative"
              >
                <span className="text-xs font-mono text-devflow-green font-bold mb-3 block">{step.step}</span>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-devflow-charcoal border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ HEADQUARTERS ]</span>
              <h2 className="text-3xl font-display font-medium text-white">Our Ahmedabad Technology Center</h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                SG Highway, near Gujarat High Court. A team of senior architects, principal engineers, and domain experts who've built systems for Gujarat's largest manufacturers, traders, and emerging unicorns.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiMapPin className="w-5 h-5" aria-label="Address" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">OFFICE ADDRESS</h4>
                    <p className="text-sm text-white font-medium">SG Highway, S.G. Road, Near Gujarat High Court, Ahmedabad, Gujarat 380015</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiPhone className="w-5 h-5" aria-label="Phone" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">TELEPHONE</h4>
                    <p className="text-sm text-white font-medium">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiEnvelope className="w-5 h-5" aria-label="Email" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">EMAIL</h4>
                    <p className="text-sm text-white font-medium">info@devflow.co.in</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Ahmedabad</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Gandhinagar</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Surat</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Vadodara</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Rajkot</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Jamnagar</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Bhavnagar</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Anand</span>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.06] bg-devflow-black p-8 flex flex-col justify-between group hover:border-devflow-green/20 transition-all">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05),transparent_70%)]" />
              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono text-devflow-green">[ GOOGLE MAPS DATA ]</span>                  <HiShieldCheck className="w-6 h-6 text-devflow-green" aria-label="Verified" />

              </div>
              <div className="z-10 space-y-2">
                <div className="flex gap-1 text-devflow-green">
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-white">DevFlow Technology — IT Services HQ</h4>
                <p className="text-xs text-devflow-gray-400">Verified Google Business Profile • Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-devflow-black">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ LOCAL FAQS ]</span>
            <h2 className="text-3xl font-display font-medium text-white">Ahmedabad IT Services — Common Questions</h2>
          </div>
          
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-8 rounded-2xl border border-white/[0.04] bg-devflow-charcoal hover:border-devflow-green/10 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ GUJARAT ENTERPRISE CASES ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Systems Running Gujarat's Leading Enterprises</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Anonymized. Client references & architecture diagrams shared under NDA on discovery call.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Multi-Plant Manufacturing ERP — Vadodara", desc: "12-plant ERP with real-time MES integration, quality management, and consolidated financials.", tech: "Go, React, PostgreSQL, Kafka, Kubernetes", result: "₹18Cr annual efficiency gains" },
              { title: "Textile Supply Chain Platform — Surat", desc: "End-to-end yarn-to-garment visibility with blockchain traceability, inventory optimization, and buyer portals.", tech: "TypeScript, Node.js, Hyperledger, React Native", result: "40% lead time reduction" },
              { title: "Pharma Compliance System — Ankleshwar", desc: "21 CFR Part 11 compliant LIMS, QMS, and regulatory reporting for US FDA/EU GMP submissions.", tech: "Python, FastAPI, PostgreSQL, Audit Trails", result: "Zero 483 observations" },
              { title: "NBFC Lending Platform — Ahmedabad", desc: "Digital lending stack: origination, underwriting engine, collections, co-lending, and RBI regulatory reporting.", tech: "Java, Spring Boot, React, PostgreSQL", result: "₹500Cr+ AUM managed" },
            ].map((cs, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{cs.title}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tech.split(", ").map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded text-xs font-mono bg-devflow-green/10 text-devflow-green">{t}</span>
                  ))}
                </div>
                <p className="text-xs font-medium text-devflow-green flex items-center gap-1">
                  <HiShieldCheck className="w-3 h-3" /> {cs.result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-devflow-charcoal text-center relative z-10">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-medium">Ready for a Technology Partner Who Understands Gujarat?</h2>
          <p className="text-sm text-devflow-gray-400 font-light max-w-md mx-auto">
            Free 2-hour architecture consultation for Gujarat-registered companies. No pitch decks. Pure technical discussion.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            START TECHNOLOGY PARTNERSHIP &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
