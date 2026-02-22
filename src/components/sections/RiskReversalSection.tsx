"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  arrowSlide,
} from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { HiArrowRight } from "react-icons/hi2";

const options = [
  {
    title: "Discovery Call",
    price: "Free",
    duration: "30 minutes",
    description:
      "No pitch. We'll tell you honestly if we can help — and if we can't, we'll point you in the right direction.",
    cta: "Book a Call",
    href: "#contact",
    highlighted: false,
  },
  {
    title: "Architecture Review",
    price: "₹25,000",
    duration: "1 week",
    description:
      "We'll review your current systems and give you a clear roadmap for what to build. Useful even if you don't work with us.",
    cta: "Get Started",
    href: "#contact",
    highlighted: false,
  },
  {
    title: "2-Week Pilot",
    price: "₹1.5L - ₹2.5L",
    duration: "2 weeks",
    description:
      "Build one small, high-impact tool. See how we work. If you're happy, we continue. If not, you keep the code.",
    cta: "Start a Pilot",
    href: "#contact",
    highlighted: true,
  },
];

export default function RiskReversalSection() {
  return (
    <section id="start" className="py-16 lg:py-24 bg-devflow-black">
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
            Start Small
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-6 text-shadow-soft"
          >
            Not Ready for a Full Project? Start with a Pilot.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-devflow-gray-300 leading-relaxed"
          >
            We understand trust is earned. That's why we offer low-risk ways to
            start:
          </motion.p>
        </motion.div>

        {/* Options Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {options.map((option) => (
            <motion.div
              key={option.title}
              variants={staggerItem}
              className={`p-8 rounded-2xl border transition-all duration-500 hover-lift ${
                option.highlighted
                  ? "bg-devflow-green/[0.03] border-devflow-green/20 shadow-lg shadow-devflow-green/5"
                  : "bg-devflow-charcoal border-white/[0.06] hover:border-white/10"
              }`}
            >
              {option.highlighted && (
                <span className="inline-block px-3 py-1 bg-devflow-green/15 text-devflow-green text-xs font-medium rounded-full mb-4 animate-subtle-pulse">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {option.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-2xl font-semibold text-devflow-green">
                  {option.price}
                </span>
                <span className="text-sm text-devflow-gray-500">
                  / {option.duration}
                </span>
              </div>
              <p className="text-devflow-gray-400 mb-8 leading-relaxed">
                {option.description}
              </p>
              <MagneticButton>
                <Link
                  href={option.href}
                  className={`
                    group flex items-center justify-center gap-2 w-full h-12 rounded-xl font-medium transition-all duration-300
                    ${option.highlighted ? "btn-primary" : "btn-secondary"}
                  `}
                >
                  {option.cta}
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
