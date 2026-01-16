"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function FounderSection() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-devflow-charcoal">
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
              Why We Exist
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight"
            >
              Built by Engineers. For Teams That Ship.
            </motion.h2>
          </motion.div>

          {/* Founder Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <div className="p-10 md:p-12 bg-devflow-dark border border-white/[0.06] rounded-2xl">
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
                  DevFlow was started in 2024 by engineers who spent years
                  building internal tools at startups — and watching the same
                  problems repeat everywhere.
                </p>
                <p>
                  Founders would hire agencies to build "custom software" and
                  get bloated, unmaintainable codebases. Or they'd try to build
                  in-house and burn 6 months on something that should take 6
                  weeks.
                </p>
                <p>
                  We started DevFlow to solve that. Small team. Focused scope.
                  Fast execution. Clean code.
                </p>
                <p className="text-white font-medium">
                  We're not trying to be a 200-person agency. We're trying to be
                  the team you call when you need something built right.
                </p>
              </div>

              {/* Signature Area */}
              <div className="mt-10 pt-8 border-t border-white/[0.06] flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-devflow-green font-semibold text-lg">
                    D
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">DevFlow Team</p>
                  <p className="text-devflow-gray-500 text-sm">
                    Founders & Engineers
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
                title: "Ship Fast",
                description:
                  "Working software every two weeks. Not endless planning.",
              },
              {
                title: "Communicate Clearly",
                description:
                  "No jargon. No disappearing. Just straight answers.",
              },
              {
                title: "Own the Outcome",
                description: "We're not done until it works. Period.",
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
