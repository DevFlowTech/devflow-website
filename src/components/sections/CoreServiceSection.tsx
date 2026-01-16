"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";

const tools = [
  {
    type: "Order Management System",
    useCase: "Track, modify, and fulfill orders without spreadsheets",
  },
  {
    type: "Customer Support Dashboard",
    useCase: "See full customer history in one place",
  },
  {
    type: "Inventory & Warehouse Tools",
    useCase: "Real-time stock visibility across locations",
  },
  {
    type: "Reporting & Analytics",
    useCase: "Automated reports that update themselves",
  },
  {
    type: "Approval Workflows",
    useCase: "Multi-step processes that don't fall through cracks",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Node.js",
  "Python",
  "AWS",
];

export default function CoreServiceSection() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-devflow-charcoal">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
          >
            What We Build
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-6"
          >
            Custom Internal Tools. Built Right. Built Fast.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-devflow-gray-300 leading-relaxed"
          >
            We don't build marketing sites or consumer apps. We build the
            operational backbone that scaling startups need but never have time
            to build themselves.
          </motion.p>
        </motion.div>

        {/* Tools Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3
            variants={staggerItem}
            className="text-lg font-medium text-white mb-6"
          >
            What This Looks Like:
          </motion.h3>
          <motion.div
            variants={staggerItem}
            className="bg-devflow-dark border border-white/[0.06] rounded-xl overflow-hidden"
          >
            <div className="grid grid-cols-2 bg-white/[0.02] px-6 py-4 border-b border-white/[0.06]">
              <span className="text-xs font-medium text-devflow-gray-400 uppercase tracking-wider">
                Tool Type
              </span>
              <span className="text-xs font-medium text-devflow-gray-400 uppercase tracking-wider">
                Example Use Case
              </span>
            </div>
            {tools.map((tool, index) => (
              <div
                key={tool.type}
                className={`grid grid-cols-2 px-6 py-4 ${
                  index !== tools.length - 1
                    ? "border-b border-white/[0.04]"
                    : ""
                } transition-colors duration-150 hover:bg-white/[0.02]`}
              >
                <span className="text-white font-medium">{tool.type}</span>
                <span className="text-devflow-gray-400">{tool.useCase}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3
            variants={staggerItem}
            className="text-lg font-medium text-white mb-6"
          >
            Our Stack:
          </motion.h3>
          <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-devflow-dark border border-white/[0.06] rounded-lg text-devflow-gray-300 font-mono text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="text-devflow-gray-500 mt-5 text-sm"
          >
            We pick boring, reliable technology. No experimental frameworks. No
            tech debt surprises.
          </motion.p>
        </motion.div>

        {/* Fit Check */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Good Fit */}
          <motion.div
            variants={staggerItem}
            className="p-8 bg-devflow-dark border border-devflow-green/15 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-devflow-green/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-devflow-green"
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
              </div>
              <h3 className="text-lg font-medium text-white">Good Fit</h3>
            </div>
            <ul className="space-y-3">
              {[
                "You have real operational pain (not just 'we want an app')",
                "You can articulate what's broken today",
                "You value speed and reliability over lowest price",
                "You're ready to start within 2-4 weeks",
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

          {/* Not a Fit */}
          <motion.div
            variants={staggerItem}
            className="p-8 bg-devflow-dark border border-white/[0.06] rounded-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-devflow-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Not a Fit</h3>
            </div>
            <ul className="space-y-3">
              {[
                "You need a landing page or marketing site",
                "You want to outsource and never talk to us",
                "You're looking for the cheapest option",
                "You don't have budget approval yet",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-devflow-gray-500"
                >
                  <svg
                    className="w-4 h-4 text-devflow-gray-600 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
