
"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck, HiStar, HiArrowRight, HiCpuChip, HiSparkles, HiArrowPath, HiMagnifyingGlass, HiChatBubbleLeftRight, HiBolt, HiChartBar, HiShieldExclamation, HiGlobeAlt, HiCog6Tooth, HiMagnifyingGlass as HiSearch } from "react-icons/hi2";


const seoServices = [
  {
    icon: HiCog6Tooth,
    title: "Technical SEO Audit",
    description: "Deep-dive crawl analysis, indexation issues, site architecture, Core Web Vitals, JavaScript rendering, and structured data validation.",
    features: ["Crawl Budget Optimization", "Indexation Fixes", "Site Speed & CWV", "JS SEO Rendering", "Log File Analysis"],
    href: "/services/enterprise-seo",
  },
  {
    icon: HiMapPin,
    title: "Local SEO & GBP Optimization",
    description: "Dominate Google Maps 3-Pack for Ahmedabad/Gujarat searches. GBP optimization, citation building, review management, and local link acquisition.",
    features: ["Google Business Profile", "NAP Consistency", "Local Citations", "Review Generation", "Location Pages"],
    href: "/services/enterprise-seo",
  },
  {
    icon: HiCpuChip,
    title: "GEO (Generative Engine Optimization)",
    description: "Optimize for AI search engines (ChatGPT, Claude, Gemini, Perplexity). Entity optimization, JSON-LD schemas, speakable content, and citation building for LLM retrieval.",
    features: ["Entity & Schema Optimization", "LLM Citation Building", "Speakable Content", "AI Search Monitoring", "Knowledge Graph"],
    href: "/services/enterprise-seo",
  },
  {
    icon: HiMagnifyingGlass,
    title: "AEO (Answer Engine Optimization)",
    description: "Win featured snippets, People Also Ask, and voice search results. FAQ schemas, how-to schemas, concise answer formatting, and topical authority clusters.",
    features: ["Featured Snippet Optimization", "PAA Targeting", "Voice Search Ready", "FAQ/HowTo Schemas", "Content Clusters"],
    href: "/services/enterprise-seo",
  },
  {
    icon: HiChartBar,
    title: "Content SEO & Strategy",
    description: "Keyword research, content gap analysis, topical maps, pillar-cluster architecture, and SEO content production at scale for Gujarat and national markets.",
    features: ["Keyword Research", "Topical Authority Maps", "Content Production", "Content Refresh", "E-E-A-T Signals"],
    href: "/services/enterprise-seo",
  },
  {
    icon: HiBolt,
    title: "Enterprise & eCommerce SEO",
    description: "Large-scale SEO for 10k+ page sites, faceted navigation, international SEO, migration management, and programmatic SEO for product catalogs.",
    features: ["Faceted Nav SEO", "Site Migrations", "International SEO", "Programmatic SEO", "PLP/PDP Optimization"],
    href: "/services/enterprise-seo",
  },
];

const seoProcess = [
  { step: "01", title: "Technical SEO Audit", desc: "Full crawl, indexation analysis, CWV baseline, schema audit, competitor gap analysis." },
  { step: "02", title: "Strategy & Roadmap", desc: "Prioritized action plan with ROI projections, keyword mapping, and resource allocation." },
  { step: "03", title: "On-Page & Technical Fixes", desc: "Schema implementation, speed optimization, content optimization, internal linking." },
  { step: "04", title: "Authority & Local Signals", desc: "Link building, citation cleanup, GBP optimization, review systems, digital PR." },
  { step: "05", title: "GEO/AEO Implementation", desc: "Entity optimization, speakable markup, LLM citation tracking, AI search monitoring." },
  { step: "06", title: "Monitoring & Iteration", desc: "Rank tracking, traffic analysis, conversion attribution, quarterly strategy reviews." },
];

const localFaqs = [
  {
    question: "Why is DevFlow the best SEO company in Ahmedabad?",
    answer: "DevFlow combines deep technical SEO expertise with AI-first optimization (GEO/AEO). We've ranked Gujarat businesses for competitive terms like 'ERP software Ahmedabad', 'manufacturing software Gujarat', and 'AI chatbot development Surat'. Our team works directly with your developers—no account managers.",
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No ethical SEO company guarantees #1 rankings. What we guarantee: technical excellence, transparent reporting, white-hat strategies, and measurable traffic/revenue growth. We've helped Ahmedabad businesses go from page 3 to top 3 for high-intent keywords within 6-12 months.",
  },
  {
    question: "How does Local SEO help my Ahmedabad business get more calls?",
    answer: "Local SEO optimizes your Google Business Profile for the Maps 3-Pack. We align NAP (Name, Address, Phone) across 50+ directories, build local citations on Justdial/IndiaMART/Sulekha, implement LocalBusiness schema, and generate review velocity. This drives direct calls and direction requests from nearby searchers.",
  },
  {
    question: "What is GEO (Generative Engine Optimization) and do I need it?",
    answer: "GEO optimizes your digital presence so AI engines (ChatGPT, Gemini, Perplexity, Claude) cite your business in answers. With AI search growing 40%+ YoY, GEO is the new SEO. We implement entity schemas, build authoritative citations, and structure content for LLM retrieval—critical for B2B companies in Gujarat wanting to appear in AI recommendations.",
  },
  {
    question: "What's your SEO pricing for Ahmedabad companies?",
    answer: "Technical SEO Audit: ₹50,000-1,50,000. Monthly Retainer (Technical + Content + Links): ₹75,000-3,00,000/month. Local SEO Package: ₹40,000-80,000/month. Enterprise SEO: ₹2,00,000+/month. We offer a free SEO health check for Gujarat-registered companies.",
  },
  {
    question: "Can you fix Core Web Vitals and technical issues on our existing site?",
    answer: "Yes. Our technical SEO team specializes in Next.js, React, WordPress, and custom stacks. We fix LCP, CLS, INP, reduce TBT, optimize JavaScript execution, implement proper caching, and resolve indexation issues. Most CWV fixes show results within 28-day CrUX cycle.",
  },
];

export default function SEOCompanyAhmedabadPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-28 pb-16 overflow-hidden">
      <StructuredData />
      
      {/* Hero Narrative */}
      <section className="pt-20 pb-16 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.span variants={staggerItem} className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ SEARCH DOMINANCE // AHMEDABAD, GUJARAT ]
            </motion.span>
            
            <motion.h1 variants={staggerItem} className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl">
              Top <span className="italic font-normal font-display text-devflow-green">SEO Company</span> in Ahmedabad.
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              DevFlow Technology drives organic growth for Gujarat businesses through technical SEO, Local SEO (Maps 3-Pack), and next-gen GEO/AEO optimization for AI search engines. Rank on Google. Get cited by ChatGPT. Win in both eras.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
                FREE SEO HEALTH CHECK <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/enterprise-seo" className="px-8 py-4 border border-white/[0.1] text-white font-semibold text-xs rounded-xl hover:border-devflow-green/50 transition-colors inline-flex items-center gap-2">
                VIEW SEO SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">200+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Keywords Ranked Top 10</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">50+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Gujarat Clients Served</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">3.2x</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Avg Organic Traffic Growth</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">94%</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Client Retention Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ SEO EXPERTISE DIRECTORY ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Complete Search Optimization for Gujarat Enterprises</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
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

      {/* SEO Process */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ OUR PROCESS ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">6-Step SEO Framework for Measurable Growth</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">No guesswork. Data-driven execution with monthly reporting tied to revenue, not just rankings.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoProcess.map((step, index) => (
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

      {/* Local Relevance */}
      <section className="py-24 bg-devflow-charcoal border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ LOCAL SEO FOCUS ]</span>
              <h2 className="text-3xl font-display font-medium text-white">Ahmedabad & Gujarat Local SEO Specialists</h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                We don't just "do SEO"—we understand Gujarat's search landscape. From "best ERP software Ahmedabad" to "AI development company Surat" to "manufacturing consultants Vadodara"—we build topical authority for the exact queries your prospects use.
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
                <span className="text-xs font-mono text-devflow-green">[ GOOGLE MAPS 3-PACK ]</span>                  <HiShieldCheck className="w-6 h-6 text-devflow-green" aria-label="Verified" />

              </div>
              <div className="z-10 space-y-2">
                <div className="flex gap-1 text-devflow-green">
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-white">DevFlow Technology — SEO Division</h4>
                <p className="text-xs text-devflow-gray-400">Verified Google Business Profile • Ahmedabad, Gujarat</p>
                <p className="text-xs text-devflow-gray-500 mt-2">Targeting: "SEO company Ahmedabad", "local SEO Gujarat", "GEO optimization India", "technical SEO audit Ahmedabad"</p>
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
            <h2 className="text-3xl font-display font-medium text-white">Ahmedabad SEO — Common Questions</h2>
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

      {/* Case Studies */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ GUJARAT SEO RESULTS ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Rankings That Drive Revenue for Gujarat Businesses</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Anonymized case studies. Specific client references available on discovery call.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "B2B Manufacturing ERP — Vadodara", keywords: ["ERP software Vadodara", "manufacturing ERP Gujarat", "custom ERP India"], traffic: "+340%", leads: "+280%", timeframe: "8 months" },
              { title: "Real Estate Portal — Ahmedabad", keywords: ["property Ahmedabad", "real estate Gujarat", "flats near SG Highway"], traffic: "+520%", leads: "+410%", timeframe: "10 months" },
              { title: "Textile Machinery — Surat", keywords: ["textile machinery Surat", "loom manufacturers Gujarat", "textile equipment India"], traffic: "+180%", leads: "+150%", timeframe: "6 months" },
              { title: "AI Chatbot SaaS — Gandhinagar", keywords: ["AI chatbot India", "WhatsApp chatbot API", "conversational AI platform"], traffic: "+670%", leads: "+450%", timeframe: "12 months" },
            ].map((cs, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{cs.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-devflow-gray-500 uppercase tracking-wide">ORGANIC TRAFFIC</p>
                    <p className="text-2xl font-display font-medium text-devflow-green">{cs.traffic}</p>
                  </div>
                  <div>
                    <p className="text-xs text-devflow-gray-500 uppercase tracking-wide">QUALIFIED LEADS</p>
                    <p className="text-2xl font-display font-medium text-devflow-green">{cs.leads}</p>
                  </div>
                </div>
                <p className="text-xs text-devflow-gray-400 mb-3"><strong>Timeframe:</strong> {cs.timeframe}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.keywords.map((k, i) => (
                    <span key={i} className="px-2 py-1 rounded text-xs font-mono bg-devflow-green/10 text-devflow-green">{k}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-devflow-charcoal text-center relative z-10">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-medium">Stop Guessing. Start Ranking in Gujarat.</h2>
          <p className="text-sm text-devflow-gray-400 font-light max-w-md mx-auto">
            Free technical SEO health check for Gujarat-registered companies. No obligations. Pure actionable insights.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            CLAIM FREE SEO AUDIT &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
