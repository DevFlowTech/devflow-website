"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck, HiStar, HiArrowRight, HiCpuChip, HiServer, HiCloud, HiLockClosed, HiArrowPath, HiUsers, HiChartBar, HiGlobeAlt, HiDeviceMobile, HiCode, HiCog6Tooth, HiMagnifyingGlass, HiPaintBrush, HiBolt, HiPresentationChartBar } from "react-icons/hi2";

export const metadata = {
  title: "IT Services Ahmedabad | Complete IT Solutions, Software Development & Consulting Gujarat",
  description: "Comprehensive IT services in Ahmedabad, Gujarat: custom software development, AI/ML solutions, web & mobile apps, cloud & DevOps, cybersecurity, IT consulting, staff augmentation & managed services. Serving Ahmedabad, Gandhinagar, Surat, Vadodara & all Gujarat.",
  keywords: [
    "IT services Ahmedabad",
    "IT services Gujarat",
    "IT solutions Ahmedabad",
    "IT consulting Ahmedabad",
    "software development services Ahmedabad",
    "managed IT services Ahmedabad",
    "IT support Ahmedabad",
    "technology services Gujarat",
    "digital transformation Ahmedabad",
    "cloud services Ahmedabad",
    "DevOps services Gujarat",
    "cybersecurity services Ahmedabad",
    "IT outsourcing Ahmedabad",
    "staff augmentation Ahmedabad",
    "dedicated development team Gujarat",
    "custom software development Ahmedabad",
    "enterprise software services Gujarat",
    "AI development services Ahmedabad",
    "web development services Gujarat",
    "mobile app development services Ahmedabad",
  ],
  openGraph: {
    title: "IT Services Ahmedabad | DevFlow Technology - Complete IT Solutions Gujarat",
    description: "Full-spectrum IT services in Ahmedabad: software development, AI, cloud, DevOps, security, consulting & staffing. Gujarat's trusted technology partner.",
    type: "website",
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - IT Services Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services Ahmedabad | DevFlow Technology",
    description: "Comprehensive IT services in Ahmedabad, Gujarat. Software, AI, cloud, DevOps, security, consulting & staffing.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/it-services-ahmedabad" },
};

const serviceCategories = [
  {
    icon: HiCode,
    title: "Custom Software Development",
    description: "Enterprise applications, SaaS platforms, ERP/CRM systems, portals, and APIs. Domain-driven design, clean architecture, test-driven development.",
    services: ["Enterprise App Development", "SaaS Product Engineering", "ERP/CRM Customization", "API & Microservices", "Legacy Modernization"],
    href: "/services/custom-software-erp",
  },
  {
    icon: HiCpuChip,
    title: "AI & Machine Learning",
    description: "Custom models, LLM integration, RAG systems, computer vision, NLP, predictive analytics, and MLOps for production-grade AI.",
    services: ["LLM Fine-tuning & RAG", "Predictive Analytics", "Computer Vision", "NLP & Document AI", "MLOps & Model Serving"],
    href: "/services/ai-automation",
  },
  {
    icon: HiGlobeAlt,
    title: "Web & Mobile Development",
    description: "Modern frontends (Next.js, React, Flutter, React Native), progressive web apps, cross-platform mobile, and headless architectures.",
    services: ["Next.js/React Development", "Flutter/React Native Apps", "Progressive Web Apps", "Headless CMS/E-commerce", "UI/UX Design Systems"],
    href: "/services/saas-development",
  },
  {
    icon: HiCloud,
    title: "Cloud, DevOps & Infrastructure",
    description: "Cloud-native architecture, IaC, Kubernetes, CI/CD, observability, FinOps, and multi-cloud management on AWS/GCP/Azure.",
    services: ["Cloud Architecture & Migration", "Kubernetes & Containerization", "CI/CD & GitOps", "Observability & SRE", "FinOps & Cost Optimization"],
    href: "/services",
  },
  {
    icon: HiLockClosed,
    title: "Cybersecurity & Compliance",
    description: "Application security, penetration testing, secure SDLC, DPDP Act/GDPR compliance, SOC 2/ISO 27001 readiness, and DevSecOps.",
    services: ["VAPT & Penetration Testing", "Secure Code Review", "DPDP/GDPR Compliance", "SOC 2/ISO 27001 Prep", "DevSecOps Integration"],
    href: "/services",
  },
  {
    icon: HiUsers,
    title: "Staff Augmentation & Dedicated Teams",
    description: "Pre-vetted engineers (frontend, backend, mobile, DevOps, QA, AI/ML) integrated into your teams. 2-week trial, transparent rates.",
    services: ["Dedicated Development Teams", "Staff Augmentation", "Project-Based Delivery", "CTO/VP Engineering Advisory", "Technical Due Diligence"],
    href: "/services",
  },
];

const allServices = [
  "Custom Software Development",
  "Enterprise ERP/CRM Systems",
  "SaaS Product Engineering",
  "AI & Machine Learning Solutions",
  "Generative AI & LLM Integration",
  "RAG Systems & Vector Databases",
  "Computer Vision & NLP",
  "MLOps & Model Deployment",
  "Web Application Development",
  "Mobile App Development (iOS/Android)",
  "Flutter & React Native Apps",
  "Progressive Web Apps (PWA)",
  "E-commerce & Marketplace Platforms",
  "Headless CMS Implementation",
  "UI/UX Design & Design Systems",
  "Cloud Architecture & Migration",
  "Kubernetes & Container Orchestration",
  "CI/CD Pipeline Engineering",
  "Infrastructure as Code (Terraform)",
  "Observability & Site Reliability",
  "FinOps & Cloud Cost Optimization",
  "Penetration Testing & VAPT",
  "Secure Code Review",
  "DPDP Act / GDPR Compliance",
  "SOC 2 / ISO 27001 Readiness",
  "DevSecOps Implementation",
  "Legacy System Modernization",
  "Database Migration & Optimization",
  "API Gateway & Integration Layer",
  "Event-Driven Architecture",
  "Staff Augmentation",
  "Dedicated Development Teams",
  "Technical Advisory & CTO Services",
  "Code Audit & Technical Due Diligence",
];

const techStack = [
  "TypeScript",
  "Go",
  "Python",
  "Rust",
  "Java",
  "Kotlin",
  "Swift",
  "Dart",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "Kubernetes",
  "Docker",
  "Terraform",
  "AWS",
  "GCP",
  "Azure",
  "Linux",
  "GitLab CI",
  "GitHub Actions",
  "ArgoCD",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Sentry",
  "Datadog",
];

const engagementModels = [
  { title: "Project-Based (Fixed Scope)", desc: "Defined requirements, fixed timeline & budget. Ideal for: MVP builds, migrations, specific feature development. ₹25L–5Cr+.", icon: HiChartBar },
  { title: "Dedicated Team (Monthly)", desc: "Full-time team (5–20 engineers) embedded in your org. Ideal for: long-term product development, platform builds. ₹25L–1Cr/month.", icon: HiUsers },
  { title: "Staff Augmentation (Per Engineer)", desc: "Individual contractors integrated into your teams. Ideal for: capacity gaps, specialized skills. ₹1.5–4L/engineer/month.", icon: HiCog6Tooth },
  { title: "Advisory & Fractional Leadership", desc: "CTO/VP Engineering/Architect advisory. Ideal for: strategy, due diligence, board reporting. ₹5–15L/month.", icon: HiMagnifyingGlass },
];

const localFaqs = [
  {
    question: "What IT services does DevFlow provide in Ahmedabad?",
    answer: "Full spectrum: custom software development (enterprise apps, SaaS, ERP/CRM), AI/ML (LLMs, RAG, computer vision, predictive analytics), web & mobile (Next.js, React, Flutter, React Native), cloud & DevOps (AWS/GCP/Azure, Kubernetes, CI/CD, observability), cybersecurity (VAPT, secure code review, DPDP/GDPR, SOC 2), legacy modernization, and staff augmentation/dedicated teams.",
  },
  {
    question: "Which industries in Gujarat do you specialize in?",
    answer: "Manufacturing (Vadodara, Ankleshwar, Sanand), textiles & trading (Surat), real estate & construction (Ahmedabad, Gandhinagar), pharmaceuticals & chemicals (Ankleshwar, Vapi), financial services & NBFCs (Ahmedabad, GIFT City), SaaS/tech startups (Gandhinagar, Ahmedabad), and logistics/ports (Mundra, Pipavav, Kandla).",
  },
  {
    question: "How do you price IT services for Gujarat companies?",
    answer: "Transparent models: Project-based (fixed scope/budget), Dedicated Team (monthly retainer), Staff Augmentation (per engineer/month), Advisory (monthly retainer). Free 2-hour technical consultation for Gujarat-registered companies. No hidden costs—architecture decisions, trade-offs, and estimates documented upfront.",
  },
  {
    question: "Can you work with our existing team and tech stack?",
    answer: "Yes. We adapt to your stack: .NET, Java, Python, Node, PHP, legacy mainframes. Our engineers join your repos, ceremonies, and tools (Jira, GitHub, Slack, Teams). We follow your coding standards or help establish them. Knowledge transfer is contractual—docs, runbooks, ADRs, and 30-day transition at engagement end.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes. Support tiers: L1/L2 (business hours), L3 (24/7 on-call), SLA-backed (99.9% uptime). Includes: security patching, dependency updates, performance tuning, capacity planning, incident response, runbook maintenance, and feature evolution. Typical retainer: 15–25% of build cost/year.",
  },
  {
    question: "How do you handle data residency and Indian compliance (DPDP Act, RBI, SEBI)?",
    answer: "Architected in: on-prem/hybrid deployment options, encryption at rest/transit, data classification & tagging, audit logging, retention/disposal policies, consent management, cross-border transfer controls (SCC/adequacy), and regulatory reporting automation. We've delivered RBI/SEBI-regulated fintech and pharma GxP systems.",
  },
];

export default function ITServicesAhmedabadPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-28 pb-16 overflow-hidden">
      <StructuredData />
      
      <section className="pt-20 pb-16 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.span variants={staggerItem} className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ COMPLETE IT SOLUTIONS // AHMEDABAD, GUJARAT ]
            </motion.span>
            
            <motion.h1 variants={staggerItem} className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl">
              Comprehensive <span className="italic font-normal font-display text-devflow-green">IT Services</span> in Ahmedabad.
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              DevFlow Technology delivers the full spectrum of IT services for Gujarat enterprises—from strategy and architecture to development, operations, and talent. One partner. End-to-end accountability. No vendor juggling.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
                REQUEST IT SERVICES PROPOSAL <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="px-8 py-4 border border-white/[0.1] text-white font-semibold text-xs rounded-xl hover:border-devflow-green/50 transition-colors inline-flex items-center gap-2">
                EXPLORE ALL SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">35+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Service Offerings</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">6</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Core Practice Areas</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">12</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Gujarat Cities Covered</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">4</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Engagement Models</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ SERVICE CATALOG ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Six Practices. Infinite Combinations for Your Digital Roadmap.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green mb-6 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{cat.title}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">{cat.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {cat.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-devflow-gray-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href={cat.href} className="text-devflow-green text-xs font-mono hover:underline inline-flex items-center gap-1">
                  VIEW SERVICES <HiArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ ALL SERVICES INDEX ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">35+ Specialized Services Ready to Deploy</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Search or browse. Each service has dedicated delivery playbooks, reference architectures, and Gujarat-case references.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {allServices.map((svc, index) => (
              <motion.span
                key={svc}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="px-4 py-3 rounded-lg bg-devflow-charcoal border border-white/[0.05] text-sm font-mono text-devflow-gray-300 hover:border-devflow-green/30 hover:text-white hover:bg-devflow-green/5 transition-all cursor-default"
              >
                {svc}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ TECHNOLOGY FOOTPRINT ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Polyglot. Cloud-Agnostic. Production-Hardened.</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
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
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ ENGAGEMENT MODELS ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Flexible Commercial Structures for Every Stage</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Start small. Scale seamlessly. No lock-in contracts.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green mb-4">
                  <model.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{model.title}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">{model.desc}</p>
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
              <h2 className="text-3xl font-display font-medium text-white">Ahmedabad-Based. Gujarat-Focused. Globally Delivered.</h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                SG Highway, near Gujarat High Court. We're embedded in Gujarat's industrial corridors—Vadodara's manufacturing, Surat's textiles/diamonds, Ankleshwar's pharma, Mundra's logistics, GIFT City's fintech. Local context. Global standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">OFFICE ADDRESS</h4>
                    <p className="text-sm text-white font-medium">SG Highway, S.G. Road, Near Gujarat High Court, Ahmedabad, Gujarat 380015</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">TELEPHONE</h4>
                    <p className="text-sm text-white font-medium">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">EMAIL</h4>
                    <p className="text-sm text-white font-medium">devflowtechnology@gmail.com</p>
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
                <span className="text-xs font-mono text-devflow-green">[ GOOGLE MAPS DATA ]</span>
                <HiShieldCheck className="w-6 h-6 text-devflow-green" />
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