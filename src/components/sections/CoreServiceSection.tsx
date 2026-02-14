"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";
import BackgroundText from "@/components/ui/BackgroundText";

// Clear service categories for BDE pitch
const services = [
  {
    title: "Business Websites",
    subtitle: "Performance-Focused",
    description:
      "High-performance websites that load fast, rank well, and convert visitors into customers. Built with modern architecture for speed and reliability.",
    features: [
      "SEO-optimized",
      "Fast load times",
      "Mobile-first design",
      "Analytics integration",
    ],
  },
  {
    title: "Web Applications & Dashboards",
    subtitle: "Data-Driven Interfaces",
    description:
      "Custom web applications with real-time data visualization, user management, and business logic tailored to your workflows.",
    features: [
      "Real-time updates",
      "Role-based access",
      "Data visualization",
      "API integrations",
    ],
  },
  {
    title: "Internal Tools & Automation",
    subtitle: "Operational Efficiency",
    description:
      "Admin panels, CRM systems, and workflow automation tools that eliminate manual work and reduce operational overhead.",
    features: [
      "Process automation",
      "Custom workflows",
      "Team collaboration",
      "Reporting systems",
    ],
  },
  {
    title: "Custom Software Solutions",
    subtitle: "Enterprise-Grade",
    description:
      "End-to-end software development for complex business requirements. From architecture to deployment, we handle the full stack.",
    features: [
      "Scalable architecture",
      "Security-first",
      "Cloud deployment",
      "Ongoing support",
    ],
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
    <section
      id="services"
      className="py-16 lg:py-24 bg-devflow-charcoal relative overflow-hidden"
    >
      {/* Large Background Text */}
      <BackgroundText text="SERVICES" />

      <div className="section-container relative z-10">
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
            Our Services
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-6 text-shadow-soft"
          >
            Engineering-First Software Development
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-devflow-gray-300 leading-relaxed"
          >
            We specialize in building software that solves real business
            problems — from high-performance websites to complex enterprise
            applications. Every project is built with code quality, performance,
            and long-term maintainability in mind.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="p-8 bg-devflow-dark border border-white/[0.06] rounded-2xl hover:border-devflow-green/20 transition-all duration-500 hover-lift group"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-devflow-green uppercase tracking-wider">
                  {service.subtitle}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-devflow-green transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-devflow-gray-400 mb-5 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-devflow-gray-400 group-hover:border-devflow-green/20 group-hover:text-devflow-gray-300 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
            Our Technology Stack:
          </motion.h3>
          <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-devflow-dark border border-white/[0.06] rounded-lg text-devflow-gray-300 font-mono text-sm hover:border-devflow-green/30 hover:text-devflow-green transition-all duration-300 hover-scale"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="text-devflow-gray-500 mt-5 text-sm"
          >
            We choose proven, reliable technology. No experimental frameworks.
            No tech debt surprises.
          </motion.p>
        </motion.div>

        {/* Working Style - Softer approach */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* What We Excel At */}
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
              <h3 className="text-lg font-medium text-white">We Excel At</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Projects with clear business requirements and goals",
                "Clients who value quality and long-term reliability",
                "Collaborative relationships with regular communication",
                "Work that challenges us technically and creatively",
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

          {/* Honest About Limitations */}
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Worth Knowing</h3>
            </div>
            <ul className="space-y-3">
              {[
                "We're a small team — we work selectively to deliver quality",
                "We focus on software, not digital marketing or SEO services",
                "We prefer projects where we can add meaningful value",
                "Rushed timelines without scope flexibility aren't our strength",
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
