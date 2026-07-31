"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

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
    question: "Can DevFlow help optimize our local Google Business Profile (GMB)pack ranking?",
    answer:
      "Yes. We configure map api listings, align address footprints, and deploy review aggregation schemas. This helps capture the Google Maps 3-Pack rankings, driving inbound organic calls without paid ad campaigns.",
  },
  {
    question: "Do you provide automated web crawling and data extraction services?",
    answer:
      "Absolutely. We write multi-threaded Puppeteer scraping automation engines backed by Redis cache queues to crawl pages, parse complex structures, and update catalogs with zero blocks.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-devflow-black">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block"
          >
            FAQ
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-5xl font-semibold text-white text-shadow-soft"
          >
            Frequently Asked{" "}
            <span className="text-devflow-green">Questions</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-devflow-charcoal border-devflow-green/20 shadow-lg shadow-blue-500/5"
                    : "bg-devflow-charcoal/50 border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-medium text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-devflow-green/10 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-devflow-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-devflow-gray-300 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
