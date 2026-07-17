"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

// Dynamically import the mockup (heavy visual component) and background effects
const HeroMockup = dynamic(() => import("@/components/ui/HeroMockup"), { ssr: false });

const AnimatedGradientBackground = dynamic(
  () => import("@/components/ui/AnimatedGradientBackground"),
  { ssr: false }
);
const InteractiveGrid = dynamic(
  () => import("@/components/ui/InteractiveGrid"),
  { ssr: false }
);
const BackgroundBeams = dynamic(
  () => import("@/components/ui/BackgroundBeams").then((mod) => ({ default: mod.BackgroundBeams })),
  { ssr: false }
);
const FloatingParticles = dynamic(
  () => import("@/components/ui/FloatingParticles"),
  { ssr: false }
);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);
    
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // RAF-throttled scroll listener for parallax (replaces framer-motion useScroll)
  const rafRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const handleScroll = useCallback(() => {
    if (rafRef.current !== null || prefersReduced) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      setScrollProgress(progress);
    });
  }, [prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, prefersReduced]);

  // Calculate parallax values using CSS custom properties
  const bgY = prefersReduced ? 0 : scrollProgress * 25;
  const textOffset = prefersReduced ? 0 : scrollProgress * -50;
  const mockupOffset = prefersReduced ? 0 : scrollProgress * -40;
  const mockupScale = prefersReduced ? 1 : 1 + scrollProgress * 0.02;
  const textOpacity = prefersReduced ? 1 : Math.max(0, 1 - scrollProgress / 0.75);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-devflow-black pt-32 pb-20 overflow-hidden"
    >
      {/* Animated Background layers (lazy loaded) */}
      <AnimatedGradientBackground />
      <BackgroundBeams className="opacity-30" />
      <InteractiveGrid />

      {/* Radial glow and shadow gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(2,37,220,0.04),transparent_40%)]" />

      {/* City background with CSS parallax */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0 will-change-transform"
        style={{ transform: `translateY(${bgY}%)` }}
      >
        <Image
          src="/hero-bg-city.jpg"
          alt="DevFlow City Skyline Background"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Falling green snow particles sprinkling overlay */}
      <FloatingParticles count={50} mode="snow" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical typography layout */}
          <div 
            className="lg:col-span-7 hero-content-fade"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textOffset}px)`,
            }}
          >
            <div className="hero-stagger space-y-8">
              {/* Monospaced indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-devflow-green/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-devflow-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-breathing-glow" />
                [ 01 // SOFTWARE ENGINEERING ]
              </div>

              {/* Serif Editorial Headline */}
              <h1 className="font-display text-4xl md:text-6xl lg:text-[4.75rem] font-medium text-devflow-gray-100 leading-[1.1] tracking-tight">
                Building clean, <br />
                <span className="italic font-normal text-devflow-green font-display">operational software</span> <br />
                for scaling startups.
              </h1>

              {/* Subtext description */}
              <p className="text-base md:text-lg text-devflow-gray-100/80 leading-relaxed font-light max-w-2xl">
                We are a focused technical partner. We design and build high-performance Web Applications, bespoke ERP systems, and automated operational pipelines. No generic templates, no AI buzzwords. Just robust code.
              </p>

              {/* CTA Actions */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <MagneticButton>
                  <Link href="/contact" className="btn-primary min-w-[200px] group">
                    Start Your Discovery
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link href="/work" className="btn-secondary min-w-[200px]">
                    View Our Portfolio
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column: Code/Deployment Mockup visual */}
          <div 
            className="lg:col-span-5 w-full relative will-change-transform hero-mockup-entrance"
            style={{
              transform: `translateY(${mockupOffset}px) scale(${mockupScale})`,
            }}
          >
            <div className="w-full">
              <HeroMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
