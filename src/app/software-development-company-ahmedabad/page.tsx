"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck, HiStar } from "react-icons/hi2";

const localFaqs = [
  {
    question: "Why is DevFlow considered the top IT service provider in Ahmedabad?",
    answer: "DevFlow delivers direct technical execution without account manager layers. We specialize in enterprise SaaS, custom ERPs, advanced AI workflow automation, and cutting-edge AEO/GEO optimization for high-growth businesses in Ahmedabad and Gujarat."
  },
  {
    question: "Do you build custom mobile apps and web applications for local startups in Gujarat?",
    answer: "Yes. We develop cross-platform mobile apps (React Native/Flutter) and full-stack web applications (Next.js/React/Node.js) optimized for speed, reliability, and security, tailored specifically to fit regional operational requirements and scale globally."
  },
  {
    question: "What is AEO & GEO optimization, and how does it help businesses in Ahmedabad?",
    answer: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are the next generation of SEO. We structure your website data and online entity footprint so search systems like Google Gemini, ChatGPT Search, and Perplexity fetch and recommend your business to local search queries."
  }
];

export default function LocalSEOHubPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-28 pb-16 overflow-hidden">
      <StructuredData />
      
      {/* Hero Narrative */}
      <section className="pt-20 pb-16 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono text-devflow-green uppercase tracking-widest block"
            >
              [ LOCAL SERVICES // AHMEDABAD, GUJARAT ]
            </motion.span>
            
            <motion.h1
              variants={staggerItem}
              className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl"
            >
              Top-Tier <span className="italic font-normal font-display text-devflow-green">IT Company</span> & Software Development in Ahmedabad.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light"
            >
              DevFlow Technology is Ahmedabad’s premier technology partner, engineering high-performance SaaS products, bespoke ERP systems, custom mobile apps, AI automation, and advanced AEO/GEO solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ EXPERTISE DIRECTORY ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Engineered for Ahmedabad's Growth Leaders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all">
              <h3 className="text-lg font-semibold mb-3 text-white">AI & Automation</h3>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">
                Automate operations and data processes with custom LLMs, scrapers, and agents.
              </p>
              <Link href="/services/ai-automation" className="text-devflow-green text-xs font-mono hover:underline">LEARN MORE &rarr;</Link>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all">
              <h3 className="text-lg font-semibold mb-3 text-white">SaaS & Web Apps</h3>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">
                Build fast, scalable custom platforms in Next.js, Node.js, and TypeScript.
              </p>
              <Link href="/services/saas-development" className="text-devflow-green text-xs font-mono hover:underline">LEARN MORE &rarr;</Link>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all">
              <h3 className="text-lg font-semibold mb-3 text-white">Enterprise software</h3>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">
                Custom ERP and CRM platforms designed for direct database scale and logistics.
              </p>
              <Link href="/services/custom-software-erp" className="text-devflow-green text-xs font-mono hover:underline">LEARN MORE &rarr;</Link>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all">
              <h3 className="text-lg font-semibold mb-3 text-white">AEO & GEO SEO</h3>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">
                Rank on search engines and LLM answer boxes (ChatGPT, Claude, Gemini).
              </p>
              <Link href="/services/enterprise-seo" className="text-devflow-green text-xs font-mono hover:underline">LEARN MORE &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Relevance / Location Card */}
      <section className="py-24 bg-devflow-charcoal border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ HEADQUARTERS ]</span>
              <h2 className="text-3xl font-display font-medium text-white">Our Ahmedabad Presence</h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                Located in the heart of Gujarat's tech hub, we work directly with fast-scaling enterprises and manufacturing companies to automate complex business workflows.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiMapPin className="w-5 h-5" aria-label="Address" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">OFFICE ADDRESS</h4>
                    <p className="text-sm text-white font-medium">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiPhone className="w-5 h-5" aria-label="Phone" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">TELEPHONE</h4>
                    <p className="text-sm text-white font-medium">+91 99999 99999</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiEnvelope className="w-5 h-5" aria-label="Email" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">EMAIL</h4>
                    <p className="text-sm text-white font-medium">devflowtechnology@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual map placeholder with lime gradient */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.06] bg-devflow-black p-8 flex flex-col justify-between group hover:border-devflow-green/20 transition-all">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05),transparent_70%)]" />
              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono text-devflow-green">[ GOOGLE MAP DATA ]</span>                  <HiShieldCheck className="w-6 h-6 text-devflow-green" aria-label="Verified" />

              </div>
              
              <div className="z-10 space-y-2">
                <div className="flex gap-1 text-devflow-green">
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                </div>
                <h4 className="text-lg font-bold text-white">DevFlow Technology</h4>
                <p className="text-xs text-devflow-gray-400">Verified Local Business Listing &bull; Ahmedabad, IN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ section */}
      <section className="py-24 bg-devflow-black">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ LOCAL FAQS ]</span>
            <h2 className="text-3xl font-display font-medium text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-white/[0.04] bg-devflow-charcoal hover:border-devflow-green/10 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-devflow-charcoal text-center relative z-10">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-medium">Ready to scale your business?</h2>
          <p className="text-sm text-devflow-gray-400 font-light max-w-md mx-auto">
            Talk directly to our technical founders to outline your roadmap today.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            START PROJECT DISCOVERY &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
