"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

interface MinimalSciFiButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MinimalSciFiButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  href,
  fullWidth = false,
  type = "button",
  disabled = false,
}: MinimalSciFiButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for subtle light effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // For magnetic/tilt
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);

    // For glow
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const colors = useMemo(() => {
    return variant === "primary"
      ? {
          accent: "rgba(186, 230, 84, 1)",
          border: "border-devflow-green/20",
          bg: "bg-devflow-green/[0.03]",
          hoverBg: "hover:bg-devflow-green/[0.08]",
          glow: "rgba(186, 230, 84, 0.15)",
        }
      : {
          accent: "rgba(255, 255, 255, 1)",
          border: "border-white/10",
          bg: "bg-white/[0.02]",
          hoverBg: "hover:bg-white/[0.06]",
          glow: "rgba(255, 255, 255, 0.08)",
        };
  }, [variant]);

  const Component = href ? motion.a : motion.button;

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
        whileTap={{ scale: 0.98 }}
        className={`
          group relative flex items-center justify-center
          px-8 py-3.5 md:px-10 md:py-4 rounded-sm
          ${colors.bg} ${colors.hoverBg} backdrop-blur-xl
          border ${colors.border} transition-colors duration-500
          text-white cursor-pointer select-none
          ${fullWidth ? "w-full" : "min-w-[180px] md:min-w-[220px]"}
          disabled:opacity-40 disabled:cursor-not-allowed
        `}
      >
        {/* Subtle Tracking Light Flare */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([xV, yV]) =>
                `radial-gradient(120px circle at ${xV}px ${yV}px, ${colors.glow}, transparent 70%)`,
            ),
          }}
        />

        {/* Sharp Glowing Corners - Only visible on hover or active */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l"
            style={{ borderColor: colors.accent }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r"
            style={{ borderColor: colors.accent }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l"
            style={{ borderColor: colors.accent }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r"
            style={{ borderColor: colors.accent }}
          />
        </div>

        {/* Label with subtle text lift */}
        <span
          className="relative z-10 font-mono text-[13px] md:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 group-hover:tracking-[0.25em]"
          style={{ transform: "translateZ(20px)" }}
        >
          {children}
        </span>

        {/* Minimal Bottom Line - subtle progress/loading feel */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-40"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
          }}
          animate={isHovered ? { scaleX: [0, 1] } : { scaleX: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
        />
      </Component>
    </motion.div>
  );
}
