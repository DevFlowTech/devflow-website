"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orb - top left */}
      <motion.div
        className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(186, 230, 84, 0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated gradient orb - bottom right */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(186, 230, 84, 0.12) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Static center glow for hero area */}
      <div
        className="absolute top-[10%] left-[30%] w-[40%] h-[30%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(186, 230, 84, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.4) 100%)",
        }}
      />
    </div>
  );
}
