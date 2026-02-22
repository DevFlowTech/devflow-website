"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface KineticGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function KineticGlassButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  href,
  fullWidth = false,
  type = "button",
  disabled = false,
}: KineticGlassButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  // Mouse position for inner glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rotation values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // For tilt
    const xVal = clientX / width - 0.5;
    const yVal = clientY / height - 0.5;

    x.set(xVal);
    y.set(yVal);

    // For inner glow position
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const appearanceProps = useMemo(() => {
    if (variant === "primary") {
      return {
        bg: "bg-white/[0.03]",
        border: "border-white/10",
        glow: "rgba(186, 230, 84, 0.4)",
        text: "text-white",
        accent: "bg-devflow-green",
      };
    }
    return {
      bg: "bg-white/[0.01]",
      border: "border-white/5",
      glow: "rgba(255, 255, 255, 0.15)",
      text: "text-devflow-gray-200",
      accent: "bg-white/20",
    };
  }, [variant]);

  const Component = href ? motion.a : motion.button;

  return (
    <motion.div
      style={{
        perspective: "1000px",
        width: fullWidth ? "100%" : "auto",
      }}
      className={`inline-block ${className}`}
    >
      <Component
        ref={ref as any}
        href={href}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative group flex items-center justify-center gap-3
          px-8 py-4 rounded-xl overflow-hidden
          ${appearanceProps.bg} backdrop-blur-xl
          border ${appearanceProps.border}
          ${appearanceProps.text}
          transition-colors duration-500
          hover:border-white/30
          ${fullWidth ? "w-full" : "min-w-[200px]"}
          cursor-pointer select-none
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        {/* Inner Tracking Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([xVal, yVal]) =>
                `radial-gradient(400px circle at ${xVal}px ${yVal}px, ${appearanceProps.glow}, transparent 80%)`,
            ),
          }}
        />

        {/* Sharp Glowing Edges */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div
            className={`absolute top-0 left-0 right-0 h-[1px] ${appearanceProps.accent} blur-[1px] opacity-40`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 h-[1px] ${appearanceProps.accent} blur-[1px] opacity-20`}
          />
          <div
            className={`absolute top-0 bottom-0 left-0 w-[1px] ${appearanceProps.accent} blur-[1px] opacity-30`}
          />
          <div
            className={`absolute top-0 bottom-0 right-0 w-[1px] ${appearanceProps.accent} blur-[1px] opacity-30`}
          />
        </div>

        {/* Content */}
        <span
          className="relative z-10 flex items-center gap-2 font-display font-semibold tracking-tight uppercase"
          style={{ transform: "translateZ(30px)" }}
        >
          {children}
        </span>

        {/* Gloss Surface */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
      </Component>
    </motion.div>
  );
}
