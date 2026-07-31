"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import StructuredData from "@/components/SEO/StructuredData";

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO) and does DevFlow implement it?",
    answer:
      "Generative Engine Optimization (GEO) is the practice of optimizing content so AI engines like ChatGPT, Claude, and Gemini cite your business in conversational search responses. At DevFlow, we implement comprehensive GEO schemas (JSON-LD), establish standardized NAP references, and structure headings specifically for LLM crawler readability.",
  },
  {
    question: "How does DevFlow build custom ERP and logistics databases?",
    answer:
      "We design custom ERP and business tracking systems using Next.js, Node.js, and SQL databases, integrated with real-time WebSockets. This eliminates discrepancies between legacy silos and unifies supply chain telemetry, saving operational overhead.",
  },
  {
    question: "What technologies does DevFlow specialize in for SaaS launches?",
    answer:
      "We specialize in headless React frontends, Next.js, TypeScript, Go (Golang), and AWS microservices. We build secure multi-tenant isolation architectures and configure Stripe billing engines (recurring subscriptions and invoice workflows).",
  },
  {
    question: "Can DevFlow help optimize our local Google Business Profile (GMB) pack ranking?",
    answer:
      "Yes. We configure map api listings, align address footprints, and deploy review aggregation schemas. This helps capture the Google Maps 3-Pack rankings, driving inbound organic calls without paid ad campaigns.",
  },
  {
    question: "Do you provide automated web crawling and data extraction services?",
    answer:
      "Absolutely. We write multi-threaded Puppeteer scraping automation engines backed by Redis cache queues to crawl pages, parse complex structures, and update catalogs with zero blocks.",
  },
  {
    question: "How do Prince and Bhavin coordinate client projects?",
    answer:
      "Prince Gajjar (CEO) coordinates product design, scope alignment, and milestone milestones. Bhavin Rajput (CTO) leads system engineering, microservice database setups, and cloud orchestration. We operate as transparent tech partners.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-24 relative overflow-hidden">
      <StructuredData />
      
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container max-w-4xl relative z-10">
        <div className="space-y-6 mb-16 text-center md:text-left">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ KNOWLEDGE BASE // FAQ ]
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-medium leading-tight">
            Frequently Asked <br />
            <span className="italic font-normal text-devflow-green font-display">Questions</span>
          </h1>
          <p className="text-lg text-devflow-gray-300 max-w-2xl leading-relaxed font-light">
            Answering industry questions on custom systems, database engineering, AEO/GEO optimization, and API automation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/5 bg-devflow-charcoal/30 rounded-2xl overflow-hidden hover:border-devflow-green/10 transition-colors"
            >
              <button
                id={`faq-btn-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-body-${index}`}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 transition-colors hover:bg-white/[0.01]"
              >
                <span className="text-base md:text-lg font-medium font-display speakable-content text-white group-hover:text-devflow-green transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-full bg-devflow-green/10 flex items-center justify-center text-devflow-green flex-shrink-0"
                >
                  <FiChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-body-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-sm md:text-base text-devflow-gray-300 leading-relaxed font-light border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* SEO/AEO metadata card footer */}
        <div className="mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-xs text-devflow-gray-500 font-mono mb-4">[ STILL HAVE QUESTIONS? ]</p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            CONTACT PRINCE &amp; BHAVIN &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
