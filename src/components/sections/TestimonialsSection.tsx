"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const testimonials = [
  {
    quote: "DevFlow re-architected our legacy databases and built a custom signature workflow in record time. Our contract cycle times fell by over 75% immediately.",
    author: "CTO, Vassu Infotech",
    rating: 5,
  },
  {
    quote: "Their focus on Next.js performance and clean code gave us a perfect 100/100 Lighthouse SEO score and doubled our digital client inquiries.",
    author: "Infrastructure Lead, Aureon India",
    rating: 5,
  },
  {
    quote: "Prince and Bhavin operated like true technical co-founders. They automated our supply chain pipeline and saved our team 20+ manual hours every week.",
    author: "Operations Director, Manufacturing Corp",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-devflow-black border-t border-white/[0.04] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-4">
            [ SOCIAL PROOF / TRUST VALUE ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight">
            Trusted by Builders and{" "}
            <span className="italic font-normal text-devflow-green font-display">
              Technology Teams
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Star rating */}
              <div className="flex gap-1 text-devflow-green mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-devflow-gray-300 text-sm italic leading-relaxed font-light mb-6 flex-grow">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-4 text-xs font-mono">
                <span className="w-5 h-px bg-devflow-green animate-pulse" />
                <span className="text-white uppercase tracking-wider">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
