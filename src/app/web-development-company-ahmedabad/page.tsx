
"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck, HiStar, HiArrowRight, HiCodeBracket, HiServer, HiCube, HiGlobeAlt, HiLockClosed, HiChartBar, HiCog6Tooth } from "react-icons/hi2";


const webServices = [
  {
    icon: HiCodeBracket,
    title: "Custom Web Application Development",
    description: "Full-cycle development of scalable web apps tailored to your business logic. Architecture design, API development, database modeling, and deployment automation.",
    features: ["System Architecture", "REST/GraphQL APIs", "Database Design", "CI/CD Pipelines", "DevOps Setup"],
    href: "/services/saas-development",
  },
  {
    icon: HiCube,
    title: "Next.js & React Development",
    description: "Modern, performant frontends with Next.js 14+, React 18, TypeScript, and Tailwind. SSR, SSG, ISR, App Router, Server Components, and edge runtime optimization.",
    features: ["App Router & Server Components", "TypeScript & Strict Mode", "Edge Functions", "Image Optimization", "Middleware & Auth"],
    href: "/services/saas-development",
  },
  {
    icon: HiServer,
    title: "Enterprise Portal & Dashboard Development",
    description: "Complex B2B portals, admin dashboards, partner/vendor portals, and internal tools with role-based access, real-time data, and audit trails.",
    features: ["RBAC & Multi-tenancy", "Real-time WebSockets", "Audit Logging", "Data Visualization", "SSO/SAML/OIDC"],
    href: "/services/custom-software-erp",
  },
  {
    icon: HiGlobeAlt,
    title: "E-commerce & Marketplace Development",
    description: "Headless commerce with Medusa, Saleor, Shopify Plus, or custom cart. Multi-vendor marketplaces, subscription billing, and complex pricing engines.",
    features: ["Headless Commerce", "Multi-vendor Support", "Stripe/Razorpay", "Subscription Engine", "Inventory Sync"],
    href: "/services/saas-development",
  },
  {
    icon: HiLockClosed,
    title: "Progressive Web Apps (PWA)",
    description: "Installable, offline-capable web apps with push notifications, background sync, and native-like experience across devices.",
    features: ["Service Workers", "Offline Support", "Push Notifications", "App Manifest", "Background Sync"],
    href: "/services/saas-development",
  },
  {
    icon: HiChartBar,
    title: "Website Redesign & Migration",
    description: "SEO-safe migrations from legacy stacks (PHP, WordPress, .NET) to modern React/Next.js. Preserve rankings, improve CWV, enhance UX.",
    features: ["SEO Migration Strategy", "301 Redirect Mapping", "Content Migration", "CWV Optimization", "Zero-Downtime Deploy"],
    href: "/services/saas-development",
  },
];

const techStack = [
  "Next.js 14+",
  "React 18",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma ORM",
  "tRPC",
  "NextAuth.js",
  "Docker",
  "Kubernetes",
  "AWS/GCP",
  "Vercel",
  "Cloudflare",
  "Playwright",
  "Vitest",
];

const localFaqs = [
  {
    question: "Why choose DevFlow as your web development company in Ahmedabad?",
    answer: "We're engineers first. No middlemen, no account managers—you work directly with the architects writing your code. We specialize in modern stacks (Next.js, React, TypeScript, Node.js) and have delivered 50+ production applications for Gujarat enterprises in manufacturing, real estate, textiles, and SaaS.",
  },
  {
    question: "What's the typical cost and timeline for a custom web application in Ahmedabad?",
    answer: "MVP web app: ₹5-15L (8-12 weeks). Enterprise portal: ₹20-60L (16-28 weeks). E-commerce platform: ₹15-40L (12-20 weeks). We offer fixed-price discovery phases, then milestone-based billing. Free technical consultation for Gujarat-registered companies.",
  },
  {
    question: "Do you build with Next.js 14 App Router and React Server Components?",
    answer: "Yes. All new projects use Next.js 14+ with App Router, React Server Components, Server Actions, and Edge Runtime where applicable. We leverage streaming, Suspense, and partial prerendering for optimal performance. Our team contributes to the Next.js ecosystem.",
  },
  {
    question: "Can you migrate our existing WordPress/PHP/.NET site to Next.js without losing SEO?",
    answer: "Absolutely. We've executed 15+ SEO-safe migrations preserving 95%+ organic traffic. Our process: content audit → URL mapping → 301 strategy → staged rollout → CWV validation → search console monitoring. We handle WordPress, Drupal, Magento, custom PHP, and .NET migrations.",
  },
  {
    question: "Do you provide ongoing maintenance and support after launch?",
    answer: "Yes. Retainer packages include: security patches, dependency updates, uptime monitoring (99.9% SLA), performance optimization, feature additions, and 24/7 incident response for critical systems. We also offer staff augmentation for your internal team.",
  },
];

export default function WebDevelopmentAhmedabadPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-28 pb-16 overflow-hidden">
      <StructuredData />
      
      <section className="pt-20 pb-16 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.span variants={staggerItem} className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ WEB ENGINEERING // AHMEDABAD, GUJARAT ]
            </motion.span>
            
            <motion.h1 variants={staggerItem} className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl">
              Premier <span className="italic font-normal font-display text-devflow-green">Web Development Company</span> in Ahmedabad.
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              DevFlow Technology builds production-grade web applications, enterprise portals, and e-commerce platforms for Gujarat's ambitious companies. Next.js, React, TypeScript, Node.js—engineered for scale, optimized for search, designed for conversion.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
                START WEB PROJECT DISCOVERY <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/saas-development" className="px-8 py-4 border border-white/[0.1] text-white font-semibold text-xs rounded-xl hover:border-devflow-green/50 transition-colors inline-flex items-center gap-2">
                VIEW WEB SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">50+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Production Web Apps</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">99.9%</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Uptime SLA</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">40%</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Avg CWV Improvement</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">12+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Gujarat Cities Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ WEB EXPERTISE DIRECTORY ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Full-Stack Capabilities for Gujarat's Digital Leaders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
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
            <h2 className="text-3xl md:text-4xl font-display font-medium">Modern, Maintainable Technology Choices</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">We choose boring, stable tech that scales. No hype-driven development.</p>
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

      <section className="py-24 bg-devflow-charcoal border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ HEADQUARTERS ]</span>
              <h2 className="text-3xl font-display font-medium text-white">Our Ahmedabad Development Center</h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                Located on SG Highway near Gujarat High Court. Our full-stack engineers, DevOps specialists, and QA engineers collaborate in-person for complex architecture sessions while supporting clients across Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot, and beyond.
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
                <h4 className="text-lg font-bold text-white">DevFlow Technology — Web Division</h4>
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
            <h2 className="text-3xl font-display font-medium text-white">Ahmedabad Web Development — Common Questions</h2>
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
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ GUJARAT PROJECTS ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Web Applications Delivered for Gujarat Enterprises</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Real projects. Real scale. Local references available on request.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Manufacturing ERP Portal — Vadodara", desc: "Multi-plant ERP with real-time production tracking, inventory optimization, and GST-compliant invoicing.", tech: "Next.js, Node.js, PostgreSQL, WebSockets", result: "₹2.4Cr annual savings" },
              { title: "Real Estate Platform — Ahmedabad", desc: "Property listing portal with virtual tours, lead management CRM, and Gujarat RERA compliance module.", tech: "Next.js, Prisma, PostgreSQL, Mapbox", result: "12K+ monthly visits" },
              { title: "Textile B2B Marketplace — Surat", desc: "Multi-vendor marketplace for yarn/fabric traders with inventory sync, credit management, and logistics integration.", tech: "React, Node.js, Redis, Elasticsearch", result: "500+ active vendors" },
              { title: "Healthcare SaaS — Gandhinagar", desc: "Multi-tenant clinic management with appointments, EMR, billing, and ABHA/NDHM integration.", tech: "Next.js, tRPC, PostgreSQL, Docker", result: "50+ clinics onboarded" },
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
          <h2 className="font-display text-3xl md:text-5xl font-medium">Ready to Build Your Web Platform in Gujarat?</h2>
          <p className="text-sm text-devflow-gray-400 font-light max-w-md mx-auto">
            Talk directly to our technical founders. Free architecture consultation for Gujarat-registered companies.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            START WEB PROJECT DISCOVERY &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
