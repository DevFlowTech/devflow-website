
"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck, HiStar, HiArrowRight, HiArrowPath, HiBolt, HiCpuChip, HiDevicePhoneMobile, HiDeviceTablet, HiComputerDesktop, HiCloud, HiWifi, HiLockClosed, HiPaintBrush } from "react-icons/hi2";


const appServices = [
  {
    icon: HiDevicePhoneMobile,
    title: "Native iOS Development",
    description: "Swift/SwiftUI apps optimized for iPhone, iPad, watchOS, and visionOS with App Store compliance and TestFlight distribution.",
    features: ["Swift & SwiftUI", "Core Data & CloudKit", "App Store Optimization", "TestFlight & CI/CD", "watchOS/visionOS"],
    href: "/services",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Native Android Development",
    description: "Kotlin/Jetpack Compose apps for phones, tablets, Wear OS, and Android Auto with Play Store optimization and staged rollouts.",
    features: ["Kotlin & Compose", "Room & DataStore", "Play Console Management", "App Bundles & Dynamic Delivery", "Wear OS & Auto"],
    href: "/services",
  },
  {
    icon: HiDeviceTablet,
    title: "Flutter Cross-Platform",
    description: "Single codebase for iOS, Android, Web, and Desktop. High-performance UI, native platform channels, and rapid iteration with hot reload.",
    features: ["iOS/Android/Web/Desktop", "Custom Platform Channels", "Flame/Game Engine", "Riverpod/Bloc State", "CI/CD with Codemagic"],
    href: "/services",
  },
  {
    icon: HiComputerDesktop,
    title: "React Native Development",
    description: "JavaScript/TypeScript apps sharing 80%+ logic with web. Expo managed workflow, Hermes optimization, and native module bridging.",
    features: ["Expo & Bare Workflow", "Hermes Engine", "Code Push Updates", "Web Code Sharing", "Native Module Bridge"],
    href: "/services",
  },
  {
    icon: HiPaintBrush,
    title: "App UI/UX Design",
    description: "User research, wireframing, prototyping, design systems, and accessibility-compliant interfaces (WCAG 2.1 AA) for higher conversion.",
    features: ["User Research & Personas", "Figma Design Systems", "Interactive Prototypes", "Usability Testing", "Handoff to Dev"],
    href: "/services",
  },
  {
    icon: HiCloud,
    title: "Backend & Cloud for Apps",
    description: "Scalable APIs, real-time sync, push notifications, auth, and infrastructure. Node.js, Go, Firebase, AWS Amplify, Supabase.",
    features: ["REST/GraphQL/tRPC APIs", "WebSockets & Realtime", "Push Notifications (FCM/APNs)", "Auth (OAuth, SSO, Biometric)", "CI/CD & Monitoring"],
    href: "/services",
  },
];

const techStack = [
  "Swift",
  "SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "Flutter",
  "Dart",
  "React Native",
  "TypeScript",
  "Expo",
  "Node.js",
  "tRPC",
  "GraphQL",
  "Firebase",
  "Supabase",
  "AWS Amplify",
  "PostgreSQL",
  "Redis",
  "WebSockets",
  "FCM/APNs",
  "TestFlight",
  "Play Console",
  "Fastlane",
  "Codemagic",
  "Figma",
];

const appProcess = [
  { step: "01", title: "Discovery & Strategy", desc: "Workshops, user journeys, tech stack selection, platform decision (native vs cross-platform), and MVP scope definition." },
  { step: "02", title: "UI/UX Design", desc: "Wireframes → high-fidelity prototypes → design system → usability testing → developer handoff with Figma specs." },
  { step: "03", title: "Architecture & Setup", desc: "Monorepo structure, CI/CD pipelines, backend API design, database schema, auth strategy, and environment configs." },
  { step: "04", title: "Agile Development", desc: "2-week sprints, feature branches, code reviews, automated testing, internal TestFlight/Play Console builds every sprint." },
  { step: "05", title: "QA & Beta Testing", desc: "Device lab testing (20+ devices), automated UI tests, TestFlight/Play Console beta, crash analytics (Sentry), performance profiling." },
  { step: "06", title: "Launch & Growth", desc: "App Store/Play Store submission, ASO, phased rollout, crash monitoring, analytics (Mixpanel/Amplitude), retention optimization." },
];

const localFaqs = [
  {
    question: "Why choose DevFlow for mobile app development in Ahmedabad?",
    answer: "We're one of the few Gujarat agencies with deep expertise in ALL four major approaches: native iOS (Swift/SwiftUI), native Android (Kotlin/Compose), Flutter, and React Native. We help you choose the right stack—not just the one we know. Local team, direct communication, no outsourcing.",
  },
  {
    question: "Native vs Cross-platform (Flutter/React Native)—how do you decide?",
    answer: "We evaluate: performance requirements (gaming/AR → native), team skillset (JS team → React Native), budget/timeline (MVP → Flutter), platform-specific features (watchOS/visionOS → native), and long-term maintenance. We present trade-offs with benchmarks, not opinions.",
  },
  {
    question: "What's the typical cost and timeline for a mobile app in Ahmedabad?",
    answer: "MVP (3-4 months): ₹15-35L. Full-featured app (5-8 months): ₹35-80L. Enterprise/complex (8-14 months): ₹80L-2Cr+. Includes design, backend, testing, and 3-month post-launch support. Fixed-price discovery phase (₹2-5L) before commitment. Gujarat startup discounts available.",
  },
  {
    question: "Do you handle App Store and Play Store submission?",
    answer: "Yes. End-to-end: developer account setup, certificates/provisioning, App Store Connect/Play Console configuration, screenshots/metadata, compliance review (privacy, guidelines), submission, and handling rejections. We manage TestFlight/Play Console beta programs for staged rollouts.",
  },
  {
    question: "Can you integrate with our existing ERP/CRM/backend in Gujarat?",
    answer: "Absolutely. We've integrated with SAP, Oracle, Tally, custom ERPs, and legacy on-prem systems via REST, GraphQL, SOAP, or direct DB connections (with secure tunnels). Our Ahmedabad team understands Gujarat manufacturing/trading ERP landscapes.",
  },
  {
    question: "Do you provide ongoing maintenance and feature updates?",
    answer: "Yes. Retainer-based (₹50K-2L/month) or per-sprint. Includes: OS version updates, security patches, dependency upgrades, crash monitoring, performance optimization, App Store/Play Store policy updates, and new feature development. SLA-backed response times.",
  },
];

export default function MobileAppDevelopmentAhmedabadPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-28 pb-16 overflow-hidden">
      <StructuredData />
      
      <section className="pt-20 pb-16 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.span variants={staggerItem} className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ MOBILE FIRST // AHMEDABAD, GUJARAT ]
            </motion.span>
            
            <motion.h1 variants={staggerItem} className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl">
              Top <span className="italic font-normal font-display text-devflow-green">Mobile App Development Company</span> in Ahmedabad.
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              DevFlow Technology builds native iOS, native Android, Flutter, and React Native applications for ambitious Gujarat businesses. From Ahmedabad fintech to Surat manufacturing to Gandhinagar SaaS—we ship apps that scale.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
                START APP PROJECT DISCOVERY <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="px-8 py-4 border border-white/[0.1] text-white font-semibold text-xs rounded-xl hover:border-devflow-green/50 transition-colors inline-flex items-center gap-2">
                VIEW MOBILE SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">40+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Apps Shipped to Stores</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">4</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Platform Expertises</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">12</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Gujarat Cities Served</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">4.8★</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Avg App Store Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ MOBILE EXPERTISE ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Every Platform. Every Approach. One Team.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appServices.map((service, index) => (
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
            <h2 className="text-3xl md:text-4xl font-display font-medium">Battle-Tested Mobile Technology Stack</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">We don't chase frameworks. We use what ships stable, performant apps for our Gujarat clients.</p>
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
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ OUR PROCESS ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">6-Phase App Delivery for Predictable Outcomes</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">No surprise delays. No scope creep. Transparent sprint reviews with working builds every 2 weeks.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appProcess.map((step, index) => (
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
              <h2 className="text-3xl font-display font-medium text-white">Our Ahmedabad Mobile Lab</h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                SG Highway, near Gujarat High Court. Device lab with 20+ physical devices (iOS/Android), automated CI/CD, and a team that ships to App Store & Play Store every sprint.
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
                <span className="text-xs font-mono text-devflow-green">[ APP STORE & PLAY CONSOLE ]</span>                  <HiShieldCheck className="w-6 h-6 text-devflow-green" aria-label="Verified" />

              </div>
              <div className="z-10 space-y-2">
                <div className="flex gap-1 text-devflow-green">
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-white">DevFlow Technology — Mobile Division</h4>
                <p className="text-xs text-devflow-gray-400">Verified Developer Accounts • Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-devflow-black">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ LOCAL FAQS ]</span>
            <h2 className="text-3xl font-display font-medium text-white">Ahmedabad Mobile App Development — Common Questions</h2>
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
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ GUJARAT APP PORTFOLIO ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Apps Live on Stores for Gujarat Businesses</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Anonymized. Specific apps & store links shared on discovery call under NDA.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Fintech Wallet — Ahmedabad", platform: "iOS + Android (Native)", desc: "UPI integration, biometric auth, transaction analytics, RBI compliance. 50K+ downloads.", tech: "Swift, Kotlin, Node.js, PostgreSQL", result: "4.9★ App Store" },
              { title: "Field Force Automation — Vadodara", platform: "Flutter (iOS/Android/Web)", desc: "Offline-first, GPS tracking, photo evidence, dynamic forms, ERP sync. 500+ field agents.", tech: "Flutter, Dart, Firebase, Go", result: "99.2% crash-free" },
              { title: "B2B Ordering App — Surat Textile", platform: "React Native + Expo", desc: "Catalog, inventory sync, credit limits, multi-language (Gujarati/Hindi/English), push notifications.", tech: "React Native, TypeScript, tRPC", result: "₹50Cr+ GMV/month" },
              { title: "Healthcare Patient App — Gandhinagar", platform: "iOS + Android (Native)", desc: "Appointments, teleconsultation, ABHA integration, prescription upload, lab reports, payments.", tech: "Swift, Kotlin, FHIR, HIPAA", result: "HIPAA compliant" },
            ].map((cs, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{cs.title}</h3>
                <p className="text-xs text-devflow-green mb-2">{cs.platform}</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-medium">Ready to Launch Your Gujarat App?</h2>
          <p className="text-sm text-devflow-gray-400 font-light max-w-md mx-auto">
            Free technical consultation for Gujarat-registered companies. Architecture review, stack recommendation, and rough estimate—no obligations.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            START APP PROJECT DISCOVERY &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
