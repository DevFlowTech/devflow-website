"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";

export default function CaseStudySection() {
  return (
    <section id="work" className="py-28 lg:py-36 bg-devflow-charcoal">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
          >
            Case Study
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight"
          >
            How We Helped a D2C Brand Cut Order Processing Time by 70%
          </motion.h2>
        </motion.div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-6"
          >
            {/* Context */}
            <motion.div
              variants={staggerItem}
              className="p-8 bg-devflow-dark border border-white/[0.06] rounded-xl"
            >
              <h3 className="text-lg font-medium text-white mb-4">
                The Context
              </h3>
              <p className="text-devflow-gray-300 leading-relaxed">
                A fast-growing direct-to-consumer brand was processing 500+
                orders daily using a combination of Shopify admin, Google
                Sheets, and WhatsApp messages. The ops team spent 4 hours every
                morning just reconciling data.
              </p>
            </motion.div>

            {/* What We Built */}
            <motion.div
              variants={staggerItem}
              className="p-8 bg-devflow-dark border border-white/[0.06] rounded-xl"
            >
              <h3 className="text-lg font-medium text-white mb-4">
                What We Built
              </h3>
              <ul className="space-y-3">
                {[
                  "Unified order management dashboard (pulling from Shopify, warehouse, and payment systems)",
                  "Automatic inventory sync with low-stock alerts",
                  "One-click shipping label generation",
                  "Daily automated reports to Slack",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-devflow-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-devflow-green mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              variants={staggerItem}
              className="p-8 bg-devflow-green/[0.03] border border-devflow-green/15 rounded-xl"
            >
              <h3 className="text-lg font-medium text-white mb-8">
                The Results
              </h3>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  {
                    metric: "70%",
                    label: "Reduction in processing time",
                    detail: "4 hours → 1.2 hours",
                  },
                  {
                    metric: "0",
                    label: "Missed orders in 3 months",
                    detail: "Previously 5-10 per week",
                  },
                  {
                    metric: "2",
                    label: "Team members freed up",
                    detail: "Moved to growth roles",
                  },
                ].map((result) => (
                  <div key={result.label}>
                    <p className="text-4xl font-semibold text-devflow-green mb-2">
                      {result.metric}
                    </p>
                    <p className="text-white font-medium mb-1">
                      {result.label}
                    </p>
                    <p className="text-sm text-devflow-gray-500">
                      {result.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Project Details */}
            <motion.div
              variants={staggerItem}
              className="p-6 bg-devflow-dark border border-white/[0.06] rounded-xl"
            >
              <h4 className="text-xs font-medium text-devflow-gray-500 uppercase tracking-wider mb-5">
                Project Details
              </h4>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-devflow-gray-500">Timeline</dt>
                  <dd className="text-white font-medium">6 weeks</dd>
                </div>
                <div>
                  <dt className="text-sm text-devflow-gray-500">Industry</dt>
                  <dd className="text-white font-medium">E-commerce / D2C</dd>
                </div>
                <div>
                  <dt className="text-sm text-devflow-gray-500">Team Size</dt>
                  <dd className="text-white font-medium">2 engineers</dd>
                </div>
              </dl>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={staggerItem}
              className="p-6 bg-devflow-dark border border-white/[0.06] rounded-xl"
            >
              <h4 className="text-xs font-medium text-devflow-gray-500 uppercase tracking-wider mb-5">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "PostgreSQL", "Shopify API", "ShipRocket"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded text-sm text-devflow-gray-400 font-mono"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              variants={staggerItem}
              className="p-6 bg-devflow-dark border border-white/[0.06] rounded-xl"
            >
              <svg
                className="w-8 h-8 text-devflow-green/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-devflow-gray-300 italic mb-5 leading-relaxed">
                "We've worked with DevFlow on two projects now. They're fast,
                they communicate well, and they actually understand how startups
                work."
              </p>
              <div>
                <p className="text-white font-medium">Operations Lead</p>
                <p className="text-sm text-devflow-gray-500">
                  Series A E-commerce Startup
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
