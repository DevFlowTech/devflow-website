"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

interface GeometricSciFiButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function GeometricSciFiButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  href,
  fullWidth = false,
  type = "button",
  disabled = false,
}: GeometricSciFiButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Smooth tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const colors = useMemo(() => {
    return variant === "primary"
      ? {
          accent: "rgba(186, 230, 84, 1)",
          glow: "rgba(186, 230, 84, 0.1)",
          border: "rgba(186, 230, 84, 0.2)",
          bg: "rgba(186, 230, 84, 0.04)",
        }
      : {
          accent: "rgba(255, 255, 255, 1)",
          glow: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
          bg: "rgba(255, 255, 255, 0.02)",
        };
  }, [variant]);

  const Component = href ? motion.a : motion.button;

  // Geometric Clip Path (Elongated Octagon)
  const clipPath =
    "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)";

  return (
    <motion.div
      className={`relative inline-block ${fullWidth ? "w-full" : ""} ${className}`}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
    >
      <Component
        ref={ref as any}
        type={href ? undefined : type}
        disabled={disabled}
        onClick={(e) => {
          if (disabled) return;
          if (href) {
            e.preventDefault();
            if (href.startsWith("#")) {
              document
                .querySelector(href)
                ?.scrollIntoView({ behavior: "smooth" });
            } else {
              router.push(href);
            }
          }
          if (onClick) onClick();
        }}
        onMouseMove={handleMouseMove}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center justify-center cursor-pointer select-none"
      >
        {/* The Outer Shape (Border Container) */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            clipPath,
            background: colors.border,
            opacity: isHovered ? 1 : 0.6,
          }}
        />

        {/* The Inner Shape (Background & Content) */}
        <div
          className="relative flex items-center justify-center px-10 py-4 backdrop-blur-xl transition-all duration-500"
          style={{
            clipPath,
            background: isHovered
              ? colors.bg.replace("0.04", "0.08").replace("0.02", "0.06")
              : colors.bg,
            margin: "1px", // Creates the "border" effect
            width: "calc(100% - 2px)",
            height: "calc(100% - 2px)",
          }}
        >
          {/* Subtle Ambient Glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at center, ${colors.glow}, transparent 70%)`,
            }}
          />

          {/* Side Notches (Visual Flavor) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-white/20" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-white/20" />

          {/* Button Text */}
          <span
            className="relative z-20 font-mono text-[13px] md:text-sm font-bold tracking-[0.25em] uppercase text-white transition-all duration-300"
            style={{
              transform: "translateZ(30px)",
              textShadow: isHovered ? `0 0 8px ${colors.accent}` : "none",
            }}
          >
            {children}
          </span>
        </div>
      </Component>
    </motion.div>
  );
}
