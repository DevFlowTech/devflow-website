"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface Perspective3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function Perspective3DCard({
  children,
  className = "",
  intensity = 10,
}: Perspective3DCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: useTransform(
            [x, y],
            ([xVal, yVal]) =>
              `radial-gradient(circle at ${Number(xVal) * 100}% ${Number(yVal) * 100}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          ),
        }}
      />
    </motion.div>
  );
}
