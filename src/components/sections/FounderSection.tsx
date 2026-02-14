"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function FounderSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-devflow-charcoal">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={staggerItem}
              className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
            >
              About DevFlow
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight text-shadow-soft"
            >
              Engineering-Driven. Quality-Focused. Reliable.
            </motion.h2>
          </motion.div>

          {/* Founder Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <div className="p-10 md:p-12 bg-devflow-dark border border-white/[0.06] rounded-2xl shadow-layered relative overflow-hidden">
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-devflow-green/20 mb-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="space-y-6 text-lg text-devflow-gray-300 leading-relaxed">
                <p>
                  DevFlow Technology was founded by engineers who have spent
                  years building software across different industries — from
                  enterprise applications to web platforms serving clients in
                  India and internationally.
                </p>
                <p>
                  We've seen what works and what doesn't. Many businesses
                  struggle with vendors who over-promise and under-deliver, or
                  with code that becomes impossible to maintain. We started
                  DevFlow to be the alternative.
                </p>
                <p>
                  Our approach is simple: understand your business, design the
                  right solution, build it properly, and stand behind our work.
                  We work selectively because quality matters more than volume.
                </p>
                <p className="text-white font-medium">
                  We're not the biggest team. We're the team that delivers
                  software you can trust.
                </p>
              </div>

              {/* Signature Area */}
              <div className="mt-10 pt-8 border-t border-white/[0.06] flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center flex-shrink-0 animate-breathing-glow">
                  <span className="text-devflow-green font-semibold text-lg">
                    D
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">DevFlow Team</p>
                  <p className="text-devflow-gray-500 text-sm">
                    DevFlow Technology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mt-10 grid sm:grid-cols-3 gap-5"
          >
            {[
              {
                title: "Quality First",
                description:
                  "Clean code. Thorough testing. Software that works reliably.",
              },
              {
                title: "Clear Communication",
                description: "Regular updates. Honest timelines. No surprises.",
              },
              {
                title: "Long-Term Partnership",
                description: "We build for maintainability, not just delivery.",
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="p-6 bg-devflow-dark border border-white/[0.06] rounded-xl"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-devflow-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
