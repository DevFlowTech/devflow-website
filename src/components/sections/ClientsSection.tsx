"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Placeholder client logos - replace with actual client logos
const clients = [
  { name: "Pixsignerz", id: 1 },
  { name: "Future Realty Space", id: 2 },
  { name: "Aureon", id: 3 },
  { name: "Vassu Infotech", id: 4 },
  { name: "Narmada Sales", id: 5 },
];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-devflow-gray-400 group-hover:text-devflow-green transition-colors duration-500">
      {/* Abstract logo icon */}
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-devflow-gray-500/20 to-devflow-gray-600/10 border border-white/[0.06] flex items-center justify-center group-hover:border-devflow-green/30 group-hover:from-devflow-green/20 group-hover:to-devflow-green/5 transition-all duration-500">
        <span className="text-sm font-bold">{name.charAt(0)}</span>
      </div>
      <span className="text-lg font-semibold tracking-tight">{name}</span>
    </div>
  );
}

export default function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-devflow-black overflow-hidden border-y border-white/[0.04]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-flex items-center gap-3 text-sm font-medium text-devflow-gray-400 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-devflow-green/50 to-transparent" />
            TRUSTED BY INNOVATORS
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-devflow-green/50 to-transparent" />
          </motion.span>
          <h3 className="font-display text-2xl lg:text-3xl text-white">
            Powering <span className="text-devflow-green">ambitious</span>{" "}
            companies
          </h3>
        </motion.div>

        {/* Infinite scroll logos */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-devflow-black to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-devflow-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-16 py-8"
              animate={{
                x: isHovered ? 0 : [0, -1920],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{
                width: "fit-content",
              }}
            >
              {/* Duplicate for infinite scroll */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="group flex-shrink-0 px-8 py-4 rounded-xl border border-transparent hover:border-white/[0.06] hover:bg-white/[0.02] transition-all duration-500 cursor-default"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <LogoPlaceholder name={client.name} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: 50, suffix: "+", label: "Projects Delivered" },
            { value: 99, suffix: "%", label: "Client Satisfaction" },
            { value: 1, prefix: "<", suffix: "s", label: "Avg. Load Time" },
            { value: 24, suffix: "/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:border-devflow-green/20 hover:from-devflow-green/[0.03] transition-all duration-500"
            >
              <motion.p
                className="font-display text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-devflow-green transition-colors duration-500"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.prefix || ""}
                {stat.value}
                {stat.suffix}
              </motion.p>
              <p className="text-sm text-devflow-gray-400 group-hover:text-devflow-gray-300 transition-colors duration-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
