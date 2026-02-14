"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MorphingTextProps {
  children: string;
  className?: string;
}

export default function MorphingText({
  children,
  className = "",
}: MorphingTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const words = children.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={wordIndex} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [20, 0]);
  const blur = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
