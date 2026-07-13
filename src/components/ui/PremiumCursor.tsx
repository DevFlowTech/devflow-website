"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function PremiumCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        // Use event delegation for better performance (one listener for all hovers)
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('button, a, .cursor-pointer, input, textarea');
            setIsHovered(!!isInteractive);
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Background soft glow - Hardware Accelerated */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 hidden lg:block will-change-transform transform-gpu"
                style={{
                    background: `radial-gradient(400px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(204, 255, 0, 0.04), transparent 70%)`,
                }}
            />

            {/* Main Cursor Ring - Hardware Accelerated */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-devflow-green/30 z-[9999] hidden lg:block transform-gpu"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2.2 : 1,
                    backgroundColor: isHovered ? "rgba(204, 255, 0, 0.05)" : "rgba(204, 255, 0, 0)",
                    borderColor: isHovered ? "rgba(204, 255, 0, 0.5)" : "rgba(204, 255, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
            />
        </>
    );
}
