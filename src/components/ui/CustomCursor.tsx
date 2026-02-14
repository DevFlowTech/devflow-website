"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover (not touch)
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for magnetic elements
      const magneticEl = target.closest("[data-magnetic]");
      if (magneticEl) {
        setIsMagnetic(true);
      }

      // Check for hoverable elements
      const hoverEl = target.closest("[data-cursor]");
      if (hoverEl) {
        setIsHovering(true);
        setHoverText(hoverEl.getAttribute("data-cursor") || "");
        return;
      }

      // Check for pointer elements
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setHoverText("");
      setIsPointer(false);
      setIsMagnetic(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 0 : isPointer ? 1.5 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Inner dot */}
          <div className="w-3 h-3 bg-devflow-green rounded-full" />
          
          {/* Pulse ring on pointer */}
          <AnimatePresence>
            {isPointer && (
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="absolute inset-0 bg-devflow-green rounded-full"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-devflow-green/50"
          animate={{
            width: isHovering ? 80 : isPointer ? 50 : 40,
            height: isHovering ? 80 : isPointer ? 50 : 40,
            borderColor: isHovering
              ? "rgba(186, 230, 84, 0.8)"
              : isPointer
              ? "rgba(186, 230, 84, 0.6)"
              : "rgba(186, 230, 84, 0.3)",
            backgroundColor: isHovering
              ? "rgba(186, 230, 84, 0.1)"
              : "transparent",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Hover text label */}
      <AnimatePresence>
        {isHovering && hoverText && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <span className="text-xs font-bold text-devflow-green uppercase tracking-wider whitespace-nowrap">
                {hoverText}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
