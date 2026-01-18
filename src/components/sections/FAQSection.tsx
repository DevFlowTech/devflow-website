"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price and time-and-materials pricing. For well-defined projects, we prefer fixed pricing for transparency. Complex, evolving projects work better with flexible pricing. We always discuss this upfront.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! We offer maintenance packages that include bug fixes, security updates, and minor feature additions. We believe in long-term partnerships, not just one-time projects.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in Next.js, React, TypeScript, Node.js, Python, PostgreSQL, and AWS. We choose proven, reliable tech stacks that ensure your application is maintainable and scalable.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We often collaborate with in-house teams, providing additional expertise or handling specific modules. We adapt to your workflow and communication preferences.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer:
      "We have milestone-based delivery with regular check-ins. You'll see progress throughout and can request changes. We don't consider a project done until you're happy with the results.",
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
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-devflow-charcoal border-devflow-green/20"
                    : "bg-devflow-charcoal/50 border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white pr-8">
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
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-devflow-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
