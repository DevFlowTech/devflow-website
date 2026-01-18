"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowBorderCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowBorderCard({
  children,
  className = "",
  glowColor = "devflow-green",
}: GlowBorderCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `linear-gradient(90deg, var(--${glowColor}), #8b5cf6, var(--${glowColor}))`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "200% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Card Content */}
      <div className="relative bg-devflow-charcoal rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}

// Simple glowing border variant
export function SimpleGlowBorder({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative group ${className}`}>
      {/* Static Glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-devflow-green/50 via-purple-500/50 to-devflow-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      {/* Card Content */}
      <div className="relative bg-devflow-charcoal rounded-2xl border border-white/5 group-hover:border-transparent transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}

// Pulse glow variant
export function PulseGlowBorder({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Pulsing Glow */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-devflow-green/30 to-purple-500/30 blur-lg"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card Content */}
      <div className="relative bg-devflow-charcoal rounded-2xl border border-white/10">
        {children}
      </div>
    </div>
  );
}
