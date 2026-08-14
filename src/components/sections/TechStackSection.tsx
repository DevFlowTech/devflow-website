"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    }, 6000);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % techOverview.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? techOverview.length - 1 : prev - 1));
  }, []);

  // Auto-rotate category tabs only on mobile view (< 1024px)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) return;
      goToNext();
    }, 3200);

    return () => {
      clearInterval(timer);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isPaused, goToNext]);

  const activeGroup = techOverview[activeIndex];

  return (
    <div className="w-full space-y-6">
      {/* Mobile & Tablet View (< lg): Sleek Auto-Rotating Tab Matrix */}
      <div 
        className="block lg:hidden space-y-5 px-2 py-1"
        onTouchStart={pauseAutoRotate}
        onMouseEnter={pauseAutoRotate}
      >
        {/* Category Selector Tabs Header */}
        <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-3">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
            {techOverview.map((group, idx) => (
              <button
                key={group.category}
                onClick={() => {
                  pauseAutoRotate();
                  setActiveIndex(idx);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeIndex === idx
                    ? "bg-devflow-blue text-white shadow-sm scale-105"
                    : "bg-black/[0.04] text-devflow-gray-400 hover:text-devflow-gray-100 hover:bg-black/[0.08]"
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Quick Nav Prev/Next Buttons */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => {
                pauseAutoRotate();
                goToPrev();
              }}
              aria-label="Previous Category"
              className="p-1.5 rounded-lg bg-black/[0.04] hover:bg-devflow-blue hover:text-white text-devflow-gray-400 transition-colors"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                pauseAutoRotate();
                goToNext();
              }}
              aria-label="Next Category"
              className="p-1.5 rounded-lg bg-black/[0.04] hover:bg-devflow-blue hover:text-white text-devflow-gray-400 transition-colors"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Tech Items Display Box */}
        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.category}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {activeGroup.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-black/[0.03] border border-black/[0.08] text-devflow-gray-100 shadow-2xs hover:border-devflow-blue/40 transition-all"
                  >
                    <Icon className="w-5 h-5 text-devflow-blue flex-shrink-0" />
                    <span className="text-xs font-mono font-medium text-devflow-gray-100">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicator bar */}
        <div className="flex justify-center items-center gap-1.5 pt-1">
          {techOverview.map((group, idx) => (
            <button
              key={group.category}
              onClick={() => {
                pauseAutoRotate();
                setActiveIndex(idx);
              }}
              aria-label={`Select ${group.category}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-7 bg-devflow-blue"
                  : "w-2 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid View (>= lg): All 5 Categories Side by Side */}
      <div className="hidden lg:grid grid-cols-5 gap-4">
        {techOverview.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-xl bg-black/[0.02] border border-black/[0.08] hover:border-devflow-blue/30 transition-all duration-300 space-y-4 flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xs font-mono text-devflow-blue uppercase tracking-wider font-bold text-center pb-2 border-b border-black/[0.08] w-full">
              {group.category}
            </h3>
            <ul className="space-y-3 flex flex-col items-center justify-center w-full">
              {group.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <li
                    key={tech.name}
                    className="flex items-center justify-center gap-2.5 text-xs font-medium text-devflow-gray-100 text-center w-full py-1 rounded-lg bg-black/[0.02] border border-black/[0.04]"
                  >
                    <Icon className="w-4 h-4 text-devflow-blue flex-shrink-0" />
                    <span className="font-mono">{tech.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-black/[0.08]">
        <span className="text-xs font-mono text-devflow-gray-400 text-center sm:text-left">
          INDUSTRIAL-GRADE ARCHITECTURE & SECURE IP OWNERSHIP
        </span>
        <Link
          href="/technology-stack"
          className="inline-flex items-center gap-2 text-xs font-mono text-devflow-blue hover:underline font-semibold"
        >
          View Full Technology Stack <FiArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
