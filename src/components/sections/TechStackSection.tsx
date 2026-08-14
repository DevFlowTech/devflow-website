"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAutoRotate = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      children[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  // Auto-rotate carousel only on mobile / tablet screens (< 1024px)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) return;

      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % techOverview.length;
        scrollTo(nextIndex);
        return nextIndex;
      });
    }, 3200);

    return () => {
      clearInterval(timer);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isPaused]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild?.clientWidth || 240;
    const gap = 16;
    const index = Math.round(scrollLeft / (itemWidth + gap));
    if (index >= 0 && index < techOverview.length) {
      setActiveIndex(index);
    }
  };

  const scrollNav = (direction: "left" | "right") => {
    pauseAutoRotate();
    const next = direction === "left" 
      ? Math.max(0, activeIndex - 1)
      : Math.min(techOverview.length - 1, activeIndex + 1);
    setActiveIndex(next);
    scrollTo(next);
  };

  const handleDotClick = (index: number) => {
    pauseAutoRotate();
    setActiveIndex(index);
    scrollTo(index);
  };

  return (
    <div className="w-full p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Carousel Container */}
      <div 
        className="relative group/carousel"
        onTouchStart={pauseAutoRotate}
        onMouseEnter={pauseAutoRotate}
      >
        {/* Navigation arrows for mobile & tablet screens */}
        <button
          onClick={() => scrollNav("left")}
          disabled={activeIndex === 0}
          aria-label="Previous Tech Category"
          className="lg:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-devflow-charcoal/90 border border-white/20 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-devflow-green hover:text-devflow-black transition-all shadow-lg backdrop-blur-md"
        >
          <FiChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => scrollNav("right")}
          disabled={activeIndex === techOverview.length - 1}
          aria-label="Next Tech Category"
          className="lg:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-devflow-charcoal/90 border border-white/20 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-devflow-green hover:text-devflow-black transition-all shadow-lg backdrop-blur-md"
        >
          <FiChevronRight className="w-4 h-4" />
        </button>

        {/* Scrollable track on mobile / tablet; 5-column grid on lg */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none py-2 px-1"
        >
          {techOverview.map((group, i) => (
            <div
              key={group.category}
              className="p-5 rounded-xl bg-devflow-charcoal/80 border border-white/[0.08] hover:border-devflow-green/30 transition-all duration-300 space-y-3 shrink-0 w-[78vw] max-w-[270px] sm:w-[230px] lg:w-auto snap-center lg:snap-align-none shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono text-devflow-green uppercase tracking-wider font-semibold">
                  {group.category}
                </h3>
                <span className="text-[10px] font-mono text-devflow-gray-500 lg:hidden">
                  0{i + 1}/0{techOverview.length}
                </span>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <li
                      key={tech.name}
                      className="flex items-center gap-2.5 text-xs font-medium text-devflow-gray-200"
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

        {/* Carousel pagination indicators for mobile/tablet */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {techOverview.map((group, idx) => (
            <button
              key={group.category}
              onClick={() => handleDotClick(idx)}
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
