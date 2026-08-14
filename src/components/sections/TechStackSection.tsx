"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazonwebservices,
  SiDocker,
  SiVercel,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";
import { FiCpu, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const techOverview = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "Cloudflare / Vercel", icon: SiVercel },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "Gemini", icon: SiGoogle },
      { name: "RAG & AI Agents", icon: FiCpu },
    ],
  },
];

export default function TechStackSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAutoRotate = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % techOverview.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? techOverview.length - 1 : prev - 1));
  }, []);

  // Auto-rotate interval for mobile view (< 1024px)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) return;
      goToNext();
    }, 3400);

    return () => {
      clearInterval(timer);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isPaused, goToNext]);

  return (
    <div className="w-full p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Mobile & Tablet View (< lg): Centered Smooth Animated Carousel */}
      <div 
        className="block lg:hidden relative group/carousel overflow-hidden"
        onTouchStart={pauseAutoRotate}
        onMouseEnter={pauseAutoRotate}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => {
            pauseAutoRotate();
            goToPrev();
          }}
          aria-label="Previous Tech Category"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-devflow-charcoal/95 border border-white/20 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-devflow-green hover:text-devflow-black transition-all shadow-lg backdrop-blur-md"
        >
          <FiChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            pauseAutoRotate();
            goToNext();
          }}
          aria-label="Next Tech Category"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-devflow-charcoal/95 border border-white/20 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-devflow-green hover:text-devflow-black transition-all shadow-lg backdrop-blur-md"
        >
          <FiChevronRight className="w-4 h-4" />
        </button>

        {/* Smooth Animated Track */}
        <div className="overflow-hidden px-1 py-2">
          <motion.div
            className="flex gap-4"
            animate={{ x: `calc(-${activeIndex * 100}% - ${activeIndex * 16}px)` }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 26,
              mass: 0.8,
            }}
          >
            {techOverview.map((group, i) => (
              <div
                key={group.category}
                className="px-10 py-6 rounded-xl bg-devflow-charcoal/80 border border-white/[0.08] hover:border-devflow-green/30 transition-all duration-300 space-y-4 shrink-0 w-full shadow-sm flex flex-col items-center justify-center text-center"
              >
                <div className="flex flex-col items-center justify-center space-y-1 text-center w-full pb-2 border-b border-white/[0.06]">
                  <h3 className="text-xs font-mono text-devflow-green uppercase tracking-wider font-bold">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-devflow-gray-500">
                    0{i + 1} / 0{techOverview.length}
                  </span>
                </div>
                <ul className="space-y-3 flex flex-col items-center justify-center w-full">
                  {group.items.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <li
                        key={tech.name}
                        className="flex items-center justify-center gap-2.5 text-xs font-medium text-devflow-gray-200 text-center"
                      >
                        <Icon className="w-4 h-4 text-devflow-green flex-shrink-0" />
                        <span>{tech.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel pagination indicators */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {techOverview.map((group, idx) => (
            <button
              key={group.category}
              onClick={() => {
                pauseAutoRotate();
                setActiveIndex(idx);
              }}
              aria-label={`Go to ${group.category}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-6 bg-devflow-green"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid View (>= lg) */}
      <div className="hidden lg:grid grid-cols-5 gap-4">
        {techOverview.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-xl bg-devflow-charcoal/80 border border-white/[0.08] hover:border-devflow-green/30 transition-all duration-300 space-y-4 shadow-sm flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xs font-mono text-devflow-green uppercase tracking-wider font-bold text-center pb-2 border-b border-white/[0.06] w-full">
              {group.category}
            </h3>
            <ul className="space-y-2.5 flex flex-col items-center justify-center w-full">
              {group.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <li
                    key={tech.name}
                    className="flex items-center justify-center gap-2.5 text-xs font-medium text-devflow-gray-200 text-center"
                  >
                    <Icon className="w-4 h-4 text-devflow-green flex-shrink-0" />
                    <span>{tech.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/[0.06]">
        <span className="text-xs font-mono text-devflow-gray-400 text-center sm:text-left">
          INDUSTRIAL-GRADE ARCHITECTURE & SECURE IP OWNERSHIP
        </span>
        <Link
          href="/technology-stack"
          className="inline-flex items-center gap-2 text-xs font-mono text-devflow-green hover:underline font-semibold"
        >
          View Full Technology Stack <FiArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
