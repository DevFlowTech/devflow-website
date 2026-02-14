"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import Perspective3DCard from "@/components/ui/Perspective3DCard";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";

export default function CaseStudySection() {
  return (
    <section
      id="work"
      className="py-24 lg:py-32 bg-devflow-charcoal overflow-hidden"
    >
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
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block"
          >
            Case Study
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight text-shadow-soft"
          >
            Scaling Operations for a Fast-Growing{" "}
            <span className="text-devflow-green">D2C Brand</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-10"
          >
            {/* The Challenge */}
            <motion.div variants={staggerItem}>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                The Challenge
              </h3>
              <p className="text-devflow-gray-300 leading-relaxed text-lg">
                A D2C brand processing 500+ daily orders was drowning in manual
                workflows. Data lived in Google Sheets, Shopify, and WhatsApp.
                The ops team lost
                <span className="text-white font-medium">
                  {" "}
                  4 hours every morning
                </span>{" "}
                just reconciling numbers.
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div variants={staggerItem}>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                The Solution
              </h3>
              <p className="text-devflow-gray-300 leading-relaxed text-lg mb-6">
                We built a unified{" "}
                <strong>Operations Operating System (OOS)</strong> that serves
                as the single source of truth.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time 2-way sync with Shopify & Warehouse",
                  "Automated low-stock alerts via Slack",
                  "One-click shipping label generation",
                  "Reconciliation in seconds, not hours",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-devflow-gray-400"
                  >
                    <svg
                      className="w-5 h-5 text-devflow-green flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Testimonial Compact */}
            <motion.blockquote
              variants={staggerItem}
              className="p-6 border-l-4 border-devflow-green bg-devflow-dark/50"
            >
              <p className="text-devflow-gray-300 italic mb-4">
                "They actually understand how startups work. We didn't have to
                explain why speed mattered. They just delivered."
              </p>
              <footer className="text-sm text-white font-medium">
                – Operations Lead, Series A Startup
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Right Column: Visual Impact (Tilt Card) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeOut }}
            className="lg:mt-8"
          >
            <TiltCard
              tiltAmount={15}
              glareOpacity={0.15}
              className="rounded-2xl bg-gradient-to-br from-devflow-dark to-black border border-white/[0.08] shadow-2xl"
            >
              <div className="p-8 md:p-10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-devflow-green/5 rounded-full blur-3xl" />

                <h3 className="text-sm font-medium text-devflow-gray-500 uppercase tracking-widest mb-8 relative z-10">
                  Business Impact
                </h3>

                <div className="space-y-8 relative z-10">
                  <div>
                    <p className="text-6xl md:text-7xl font-display font-bold text-white mb-2 tracking-tight">
                      70%
                    </p>
                    <p className="text-lg text-devflow-green font-medium">
                      Reduction in Processing Time
                    </p>
                    <p className="text-sm text-devflow-gray-500 mt-1">
                      From 4 hours to ~1.2 hours daily
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/[0.06]">
                    <div>
                      <p className="text-3xl font-bold text-white mb-1">Zero</p>
                      <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">
                        Missed Orders
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white mb-1">2x</p>
                      <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">
                        Faster Shipments
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative UI Element representing 'Automation' */}
                <div className="absolute bottom-6 right-6 p-3 rounded-lg bg-devflow-green/10 border border-devflow-green/20 backdrop-blur-md">
                  <svg
                    className="w-6 h-6 text-devflow-green animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
