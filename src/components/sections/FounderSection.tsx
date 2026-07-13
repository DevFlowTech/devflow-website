"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const founders = [
  {
    name: "Prince Gajjar",
    role: "CEO & Co-Founder",
    code: "[ CEO // GROWTH ]",
    description:
      "Prince handles client acquisition and strategic outreach, ensuring every partnership starts with a clear understanding of the business goals. He aligns project outcomes with commercial objectives, so you get software that drives real revenue impact — not just technical features.",
    image: "/prince.jpg",
    initial: "P",
    accent: "from-devflow-green to-emerald-400",
  },
  {
    name: "Bhavin Rajput",
    role: "CTO & Co-Founder",
    code: "[ CTO // ENGINEERING ]",
    description:
      "Bhavin leads all development and technical architecture at DevFlow. He oversees the full engineering lifecycle — from system design and tech stack selection to deployment and infrastructure. With deep expertise in modern frameworks, cloud systems, and AI integration, he ensures every product is built with clean, scalable, and maintainable code.",
    image: "/bhavin.jpg",
    initial: "B",
    accent: "from-blue-500 to-cyan-400",
  },
];

export default function FounderSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-devflow-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-devflow-green/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-4"
            >
              [ THE FOUNDERS ]
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-display text-3xl md:text-5xl font-medium text-white leading-tight"
            >
              Built by engineers,{" "}
              <span className="italic font-normal text-devflow-green font-display">
                for builders.
              </span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mt-4 text-devflow-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed"
            >
              DevFlow was founded by two operators who were tired of overpriced agencies and
              underdelivered software. We built this company on the belief that great technology
              comes from small, focused teams who genuinely care about the work.
            </motion.p>
          </motion.div>

          {/* Founders Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                variants={staggerItem}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-devflow-charcoal overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-devflow-green/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Background number */}
                  <span className="absolute -right-4 -top-8 text-[120px] font-display font-bold text-white/[0.02] select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Role badge */}
                  <div className="relative z-10 mb-6">
                    <span className="inline-block px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase bg-devflow-green/10 border border-devflow-green/20 text-devflow-green rounded-lg">
                      {founder.code}
                    </span>
                  </div>

                  {/* Photo/Avatar */}
                  <div className="relative z-10 mb-6">
                    {founder.image ? (
                      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white/[0.08] group-hover:border-devflow-green/30 transition-all duration-500 shadow-lg">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          sizes="(max-width: 768px) 112px, 128px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    ) : (
                      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-devflow-green/20 group-hover:border-devflow-green/40 transition-all duration-500 shadow-lg bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 flex items-center justify-center">
                        <span className="text-5xl md:text-6xl font-display font-bold text-devflow-green">
                          {founder.initial}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    )}
                  </div>

                  {/* Name & Role */}
                  <div className="relative z-10 mb-5">
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-1 group-hover:text-devflow-green transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-mono text-devflow-gray-400">
                      {founder.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-devflow-gray-300 text-sm leading-relaxed font-light">
                    {founder.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-devflow-green/30 to-transparent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-devflow-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-devflow-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-xs font-mono text-devflow-gray-500">
              [ WANT TO WORK WITH THE FOUNDERS DIRECTLY? ]&nbsp;
              <a
                href="/contact"
                className="text-devflow-green hover:underline transition-all"
              >
                START A CONVERSATION &rarr;
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
