"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxTextProps {
  children: string;
  baseVelocity?: number;
  className?: string;
}

export default function ParallaxText({
  children,
  baseVelocity = 100,
  className = "",
}: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -baseVelocity]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap py-8">
      <motion.div style={{ x }} className={`flex gap-8 ${className}`}>
        {/* Repeat text multiple times for seamless effect */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[8rem] md:text-[12rem] font-display font-bold text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(186, 230, 84, 0.3)",
            }}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
