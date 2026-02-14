"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 0.1 to 1, lower = slower parallax
  direction?: "up" | "down";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yValue =
    direction === "up"
      ? [100 * speed, -100 * speed]
      : [-100 * speed, 100 * speed];
  const y = useTransform(scrollYProgress, [0, 1], yValue);
  const smoothY = useSpring(y, { damping: 30, stiffness: 100 });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
