"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRouter } from "next/navigation";

interface AdvancedHUDButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

export default function AdvancedHUDButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  href,
  fullWidth = false,
  type = "button",
  disabled = false,
}: AdvancedHUDButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const [displayText, setDisplayText] = useState(children);

  const isActive = isHovered || isTapped;

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Text Decoding Effect
  useEffect(() => {
    if (isActive) {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          children
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return children[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );
        iteration += 1 / 3;
        if (iteration >= children.length) {
          clearInterval(interval);
          setDisplayText(children);
        }
      }, 30);
      return () => clearInterval(interval);
    } else {
      setDisplayText(children);
    }
  }, [isActive, children]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xVal);
    y.set(yVal);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const colors = useMemo(() => {
    return variant === "primary"
      ? {
          accent: "#BAE654",
          glow: "rgba(186, 230, 84, 0.3)",
          border: "border-devflow-green/30",
          bg: "bg-devflow-green/5",
        }
      : {
          accent: "#FFFFFF",
          glow: "rgba(255, 255, 255, 0.1)",
          border: "border-white/10",
          bg: "bg-white/5",
        };
  }, [variant]);

  const Component = href ? motion.a : motion.button;

  return (
    <motion.div
      className={`relative inline-block ${fullWidth ? "w-full" : ""} ${className}`}
      style={{ perspective: "1000px" }}
    >
      <Component
        ref={ref as any}
        type={href ? undefined : type}
        disabled={disabled}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => setIsTapped(true)}
        onTouchEnd={() => setTimeout(() => setIsTapped(false), 1500)}
        whileTap={{ scale: 0.96 }}
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
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{
          x: isActive ? [0, -1, 1, -1, 0] : 0,
          y: isActive ? [0, 1, -1, 1, 0] : 0,
          boxShadow: isActive
            ? `0 0 20px ${colors.glow}`
            : "0 0 0px transparent",
        }}
        transition={{
          duration: 0.2,
          repeat: isActive ? Infinity : 0,
          repeatType: "mirror",
        }}
        className={`
          group relative flex items-center justify-center
          px-8 py-4 md:px-10 md:py-5 rounded-sm overflow-visible
          ${colors.bg} backdrop-blur-md
          border ${colors.border}
          text-white cursor-pointer select-none
          transition-all duration-300
          ${fullWidth ? "w-full" : "min-w-[200px] md:min-w-[240px]"}
          disabled:opacity-50 disabled:cursor-not-allowed
          active:brightness-125
        `}
      >
        {/* Corner HUD Brackets */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={
              isActive
                ? { scale: 1.1, opacity: 1 }
                : { scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }
            }
            transition={
              !isActive ? { duration: 3, repeat: Infinity, ease: "linear" } : {}
            }
            className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
            style={{ borderColor: colors.accent }}
          />
          <motion.div
            animate={
              isActive
                ? { scale: 1.1, opacity: 1 }
                : { scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }
            }
            transition={
              !isActive ? { duration: 3, repeat: Infinity, ease: "linear" } : {}
            }
            className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2"
            style={{ borderColor: colors.accent }}
          />
          <motion.div
            animate={
              isActive
                ? { scale: 1.1, opacity: 1 }
                : { scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }
            }
            transition={
              !isActive ? { duration: 3, repeat: Infinity, ease: "linear" } : {}
            }
            className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2"
            style={{ borderColor: colors.accent }}
          />
          <motion.div
            animate={
              isActive
                ? { scale: 1.1, opacity: 1 }
                : { scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }
            }
            transition={
              !isActive ? { duration: 3, repeat: Infinity, ease: "linear" } : {}
            }
            className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
            style={{ borderColor: colors.accent }}
          />
        </div>

        {/* Deploying Side Panels */}
        <motion.div
          animate={{
            width: isActive ? "6px" : "0px",
            right: isActive ? "-10px" : "0px",
            opacity: isActive ? 1 : 0,
          }}
          className="absolute top-2 bottom-2 bg-devflow-green z-0"
          style={{ backgroundColor: colors.accent }}
        />
        <motion.div
          animate={{
            width: isActive ? "6px" : "0px",
            left: isActive ? "-10px" : "0px",
            opacity: isActive ? 1 : 0,
          }}
          className="absolute top-2 bottom-2 bg-devflow-green z-0"
          style={{ backgroundColor: colors.accent }}
        />

        {/* Scanning Sweep Line */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[2px] z-10 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, transparent, ${colors.accent}, transparent)`,
                boxShadow: `0 0 10px ${colors.accent}`,
              }}
            />
          )}
        </AnimatePresence>

        {/* Telemetry Bits */}
        <div className="absolute top-1 left-4 flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
          <div className="w-4 h-[1px] bg-white mt-[2px]" />
          <span className="text-[6px] font-mono uppercase tracking-tighter">
            System.Ready
          </span>
        </div>
        <div className="absolute bottom-1 right-4 opacity-40 group-hover:opacity-100 transition-opacity">
          <span className="text-[6px] font-mono tracking-tighter">
            0x7F - STBL
          </span>
        </div>

        {/* Inner Tracking Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([xV, yV]) =>
                `radial-gradient(150px circle at ${xV}px ${yV}px, ${colors.glow}, transparent 80%)`,
            ),
          }}
        />

        {/* Button Content */}
        <span
          className="relative z-20 font-mono text-sm md:text-base font-bold tracking-widest uppercase flex items-center gap-2"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="opacity-50">[</span>
          {displayText}
          <span className="opacity-50">]</span>
        </span>

        {/* Ambient Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(${colors.accent} 1px, transparent 1px)`,
              backgroundSize: "12px 12px",
            }}
          />
        </div>
      </Component>
    </motion.div>
  );
}
