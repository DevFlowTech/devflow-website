"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
  arrowSlide,
  easeOut,
} from "@/lib/motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-devflow-black pt-24 lg:pt-32"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-devflow-green/[0.03] via-transparent to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-devflow-green/20 bg-devflow-green/[0.03] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
            <span className="text-sm text-devflow-gray-300 tracking-wide">
              For Scaling Startups
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] tracking-tight mb-6"
          >
            We Build the Internal Tools{" "}
            <span className="text-devflow-green">Your Team Actually Needs</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-devflow-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Custom admin panels, dashboards, and operational software — built to
            work the way your business works. Not another SaaS you'll outgrow in
            6 months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-devflow-green text-devflow-black font-semibold rounded-lg transition-all duration-150 hover:bg-devflow-green/90"
              >
                Book a Discovery Call
                <motion.svg
                  variants={arrowSlide}
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
            <Link
              href="#process"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/15 text-white font-medium rounded-lg transition-all duration-150 hover:bg-white/[0.03] hover:border-white/25"
            >
              See How We Work
            </Link>
          </motion.div>

          {/* Availability indicator */}
          <motion.p
            variants={staggerItem}
            className="text-sm text-devflow-gray-500"
          >
            Currently working with 3 clients. Limited capacity for Q1 2026.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
