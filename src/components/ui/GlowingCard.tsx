"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowingCard({
  children,
  className = "",
  glowColor = "186, 230, 84",
}: GlowingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(${glowColor}, 0.1),
      transparent 80%
    )
  `;

  const border = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(${glowColor}, 0.4),
      rgba(${glowColor}, 0.1) 40%,
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Border glow layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl p-px"
        style={{
          background: border,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Background glow layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* Content layer */}
      <div className="relative z-10 h-full bg-devflow-charcoal/90 rounded-2xl backdrop-blur-sm border border-white/[0.06] group-hover:border-white/[0.1] transition-colors duration-300">
        {children}
      </div>

      {/* Corner glints */}
      <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-devflow-green/0 via-devflow-green/50 to-devflow-green/0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32" />
      <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-devflow-green/0 via-devflow-green/50 to-devflow-green/0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:h-32" />
      <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-r from-devflow-green/0 via-devflow-green/50 to-devflow-green/0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32" />
      <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-b from-devflow-green/0 via-devflow-green/50 to-devflow-green/0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:h-32" />
    </motion.div>
  );
}
