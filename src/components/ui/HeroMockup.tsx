"use client";

import { motion } from "framer-motion";
import { FiZap, FiShield, FiGlobe, FiCode } from "react-icons/fi";

const cards = [
  {
    icon: FiZap,
    label: "Delivery Speed",
    value: "10×",
    sub: "faster than average",
    delay: 0,
    x: "0%",
    y: "0%",
  },
  {
    icon: FiShield,
    label: "Uptime SLA",
    value: "99.9%",
    sub: "guaranteed availability",
    delay: 0.12,
    x: "55%",
    y: "10%",
  },
  {
    icon: FiGlobe,
    label: "Projects Shipped",
    value: "120+",
    sub: "across 8 countries",
    delay: 0.22,
    x: "18%",
    y: "52%",
  },
  {
    icon: FiCode,
    label: "Source Code",
    value: "100%",
    sub: "owned by you",
    delay: 0.34,
    x: "62%",
    y: "56%",
  },
];

const floatVariants = [
  { y: [0, -10, 0], duration: 5.5 },
  { y: [0, -8, 0], duration: 6.2 },
  { y: [0, -12, 0], duration: 4.8 },
  { y: [0, -9, 0], duration: 5.1 },
];

export default function HeroMockup() {
  return (
    <div className="relative w-full h-[340px] md:h-[400px] select-none">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const float = floatVariants[i];

        return (
          <motion.div
            key={card.label}
            className="absolute"
            style={{ left: card.x, top: card.y }}
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: card.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              animate={{ y: float.y }}
              transition={{
                duration: float.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="rounded-2xl px-5 py-4 min-w-[148px]"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 0, 0, 0.07)",
                  boxShadow:
                    "0 2px 12px rgba(0,0,0,0.06), 0 12px 40px rgba(2,37,220,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(2,37,220,0.08)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#0225dc" }} />
                </div>

                {/* Value */}
                <p
                  className="text-2xl font-bold leading-none mb-1"
                  style={{ color: "#0f172a", fontFamily: "var(--font-outfit)" }}
                >
                  {card.value}
                </p>

                {/* Label */}
                <p className="text-xs font-semibold text-zinc-700 leading-none mb-0.5">
                  {card.label}
                </p>

                {/* Sub */}
                <p className="text-[10px] text-zinc-400 leading-none">{card.sub}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Subtle connector lines between cards — pure decorative */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 140 60 Q 220 100 250 90"
          fill="none"
          stroke="rgba(2,37,220,0.08)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />
        <motion.path
          d="M 120 180 Q 180 210 230 215"
          fill="none"
          stroke="rgba(2,37,220,0.08)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        />
        <motion.path
          d="M 250 105 Q 270 175 240 215"
          fill="none"
          stroke="rgba(2,37,220,0.08)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
