"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";

export default function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-28 lg:py-36 bg-devflow-black">
      <div className="section-container">
        {/* Problem Section */}
        <motion.div
          className="max-w-3xl mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
          >
            The Problem
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-8"
          >
            Your Team Is Too Good to Be Stuck in Spreadsheets
          </motion.h2>

          <motion.div
            variants={staggerItem}
            className="space-y-5 text-lg text-devflow-gray-300 leading-relaxed"
          >
            <p>
              You've raised funding. You're hiring fast. But your operations
              still run on duct-taped Google Sheets, Notion hacks, and manual
              processes that break every week.
            </p>
            <p>
              You've tried no-code tools. They worked for a while. Now they
              don't scale.
            </p>
            <p>
              You could hire full-time engineers — but that's 3-6 months of
              recruiting, onboarding, and hoping they build what you actually
              need.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 p-6 bg-white/[0.02] border-l-2 border-devflow-green rounded-r-lg"
          >
            <p className="text-white font-medium mb-2">The result?</p>
            <p className="text-devflow-gray-400">
              Your best people waste hours on admin work. Decisions get made on
              bad data. And your ops team is burned out.
            </p>
          </motion.div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
          >
            The Solution
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-8"
          >
            One Team. One System. Built for How You Actually Work.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-devflow-gray-300 leading-relaxed mb-12"
          >
            We embed with your team for 4-8 weeks and build the exact internal
            tools you need:
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-5"
          >
            {[
              {
                title: "Admin Panels",
                description:
                  "Manage orders, users, content without touching code",
              },
              {
                title: "Operational Dashboards",
                description: "Real-time visibility into what matters",
              },
              {
                title: "Workflow Automation",
                description: "Replace manual processes with reliable systems",
              },
              {
                title: "Data Infrastructure",
                description: "Clean data that you can actually trust",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="p-6 bg-devflow-charcoal border border-white/[0.06] rounded-xl transition-all duration-150 hover:border-white/10"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-devflow-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-lg text-white font-medium mt-12"
          >
            You get a working system. Your team gets their time back.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
