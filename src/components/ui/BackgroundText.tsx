"use client";

import { motion } from "framer-motion";

interface BackgroundTextProps {
  text: string;
  className?: string;
}

export default function BackgroundText({
  text,
  className = "",
}: BackgroundTextProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-display font-bold uppercase select-none"
          style={{
            WebkitTextStroke: "1px rgba(186, 230, 84, 0.08)",
            color: "transparent",
            letterSpacing: "-0.05em",
          }}
        >
          {text}
        </span>
      </motion.div>
    </div>
  );
}

// Scrolling background text variant
export function ScrollingBackgroundText({
  text,
  direction = "left",
  className = "",
}: BackgroundTextProps & { direction?: "left" | "right" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap flex gap-16"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[10rem] md:text-[16rem] font-display font-bold uppercase select-none"
            style={{
              WebkitTextStroke: "1px rgba(186, 230, 84, 0.06)",
              color: "transparent",
              letterSpacing: "-0.05em",
            }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
