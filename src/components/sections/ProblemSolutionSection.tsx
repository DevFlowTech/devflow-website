"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { TextReveal } from "@/components/ui/TextReveal";
import MorphingText from "@/components/ui/MorphingText";
import ProblemIllustration from "@/components/ui/ProblemIllustration";

export default function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-16 lg:py-24 bg-devflow-black">
      <div className="section-container">
        {/* Problem Section with Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
              The Challenge
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-8 text-shadow-soft"
            >
              <TextReveal>
                You Need Software That Works — Not Compromises
              </TextReveal>
            </motion.h2>

            <motion.div
              variants={staggerItem}
              className="space-y-5 text-lg text-devflow-gray-300 leading-relaxed"
            >
              <p>
                Growing businesses face a common dilemma: off-the-shelf tools
                don't fit your workflow, and building custom software seems
                expensive and risky.
              </p>
              <p>
                You've tried patching together spreadsheets, no-code tools, and
                multiple SaaS subscriptions. It works — until it doesn't. Data
                lives in silos. Manual processes create bottlenecks. And your
                team spends more time managing tools than doing their actual
                work.
              </p>
              <p>
                Hiring an in-house development team is a commitment you may not
                be ready for. Offshore teams often deliver code without
                understanding your business context.
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-10 p-6 bg-white/[0.02] border-l-2 border-devflow-green rounded-r-lg"
            >
              <p className="text-white font-medium mb-2">The result?</p>
              <p className="text-devflow-gray-400">
                You're stuck between knowing what you need and finding someone
                who can actually build it right.
              </p>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeOut }}
            className="hidden lg:flex items-center justify-center"
          >
            <ProblemIllustration />
          </motion.div>
        </div>

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
            Our Approach
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-8 text-shadow-soft"
          >
            <TextReveal>
              A Reliable Technical Partner. Not Just Another Vendor.
            </TextReveal>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-devflow-gray-300 leading-relaxed mb-12"
          >
            We work closely with you to understand your business, then build
            software that fits your exact needs:
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
                title: "Modern Web Applications",
                description:
                  "Fast, responsive applications built with proven technology",
              },
              {
                title: "Business Dashboards",
                description:
                  "Real-time insights from your data, visualized clearly",
              },
              {
                title: "Process Automation",
                description:
                  "Eliminate repetitive tasks and reduce human error",
              },
              {
                title: "API & Integrations",
                description:
                  "Connect your existing tools into a unified workflow",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <SpotlightCard
                  className="h-full p-6 bg-devflow-charcoal border border-white/[0.06] rounded-xl transition-colors duration-200 hover:border-devflow-green/30"
                  spotlightColor="rgba(186, 230, 84, 0.1)"
                >
                  <h3 className="text-lg font-medium text-white mb-2 relative z-20">
                    {item.title}
                  </h3>
                  <p className="text-devflow-gray-400 relative z-20">
                    {item.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-lg text-white font-medium mt-12"
          >
            You get software that works. Your team gets their time back.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
