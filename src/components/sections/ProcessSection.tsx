"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 0",
    description:
      "We spend 2-3 hours understanding your operations, your pain points, and what success looks like. No slides. Just conversation.",
    outcome:
      "Scope document with clear deliverables, timeline, and investment.",
  },
  {
    number: "02",
    title: "Architecture",
    duration: "Week 1",
    description:
      "We design the system before writing any code. You see the data model, user flows, and technical approach upfront.",
    outcome: "Signed-off technical spec. No ambiguity.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Weeks 2-6",
    description:
      "We build in 2-week sprints. You see working software every two weeks. Not mockups. Working software.",
    outcome:
      "Functional system in your hands, not a staging server you'll never see.",
  },
  {
    number: "04",
    title: "Launch & Support",
    duration: "Week 6+",
    description:
      "We deploy, train your team, and stick around for 30 days to fix anything that breaks. Then we hand off clean code and documentation.",
    outcome: "You own everything. No lock-in. No dependencies.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 lg:py-36 bg-devflow-black">
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
            How We Work
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-6"
          >
            Predictable Process. No Surprises.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-devflow-gray-300 leading-relaxed"
          >
            Most agencies disappear after the kickoff call. We don't. Here's
            exactly what happens when you work with us:
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.35,
                delay: index * 0.1,
                ease: easeOut,
              }}
              className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-10"
            >
              {/* Step Number & Duration */}
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center">
                  <span className="text-devflow-green font-semibold">
                    {step.number}
                  </span>
                </div>
                <span className="text-sm text-devflow-gray-500">
                  {step.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 bg-devflow-charcoal border border-white/[0.06] rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-devflow-gray-300 leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="flex items-start gap-3 p-4 bg-devflow-green/[0.03] border border-devflow-green/10 rounded-lg">
                  <svg
                    className="w-5 h-5 text-devflow-green mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <span className="text-sm font-medium text-devflow-green">
                      Outcome
                    </span>
                    <p className="text-devflow-gray-400 mt-1">{step.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
