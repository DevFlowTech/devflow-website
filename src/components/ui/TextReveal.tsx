"use client";

import { motion } from "framer-motion";

export function TextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  return (
    <span className={`inline-block whitespace-pre-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "120%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.03, // Stagger effect
              ease: [0.33, 1, 0.68, 1], // Cubic bezier for "premium" feel
            }}
            className="inline-block"
          >
            {word}
            {/* Add space after word unless it's the last one */}
            {i !== words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
