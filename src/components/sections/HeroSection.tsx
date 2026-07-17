"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  staggerContainer,
  staggerItem,
  arrowSlide,
  easeOut,
} from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroMockup from "@/components/ui/HeroMockup";

// Dynamically import heavy background effect components
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
  
  // Track global viewport scroll progress on the hero component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

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

  // GPU-optimized parallax scroll transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.75], [0, -50]);
  const mockupY = useTransform(scrollYProgress, [0, 0.75], [0, -75]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.75], [1, 1.03]);

  // Bind values conditionally to respect reduced motion options
  const finalBackgroundY = prefersReduced ? "0%" : backgroundY;
  const finalTextOpacity = prefersReduced ? 1 : textOpacity;
  const finalTextY = prefersReduced ? 0 : textY;
  const finalMockupY = prefersReduced ? 0 : mockupY;
  const finalMockupScale = prefersReduced ? 1 : mockupScale;

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
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />

      {/* Uploaded Blue Mountain Background Visual Layer - motion enabled for parallax scroll */}
      <motion.div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{
          y: finalBackgroundY,
        }}
      >
        <Image
          src="/hero-bg-blue.jpg"
          alt="DevFlow Mountain Background"
          fill
          priority
          quality={85}
          className="object-cover"
        />
      </motion.div>
      {/* Edge blending overlays - fades harsh left vertical and bottom horizontal borders */}
      <div className="absolute inset-0 bg-gradient-to-r from-devflow-black/70 via-devflow-black/50 to-transparent w-full pointer-events-none z-[1] md:from-devflow-black md:via-devflow-black/90 md:w-3/4" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-devflow-black via-devflow-black/80 to-transparent h-[450px] pointer-events-none z-[1]" />

      {/* Falling green snow particles sprinkling overlay (lazy loaded) */}
      <FloatingParticles count={50} mode="snow" />

      <div className="section-container relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Asymmetrical typography layout */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            style={{
              opacity: finalTextOpacity,
              y: finalTextY,
            }}
          >
            {/* Monospaced indicator */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-devflow-charcoal text-xs font-mono tracking-widest uppercase text-devflow-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-breathing-glow" />
              [ 01 // SOFTWARE ENGINEERING ]
            </motion.div>

            {/* Serif Editorial Headline */}
            <motion.h1
              variants={staggerItem}
              className="font-display text-4xl md:text-6xl lg:text-[4.75rem] font-medium text-white leading-[1.1] tracking-tight"
            >
              Building clean, <br />
              <span className="italic font-normal text-devflow-green font-display">operational software</span> <br />
              for scaling startups.
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg text-devflow-gray-300 leading-relaxed font-light max-w-2xl"
            >
              We are a focused technical partner. We design and build high-performance Web Applications, bespoke ERP systems, and automated operational pipelines. No generic templates, no AI buzzwords. Just robust code.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <MagneticButton>
                <Link href="/contact" className="btn-primary min-w-[200px]">
                  Start Your Discovery
                  <motion.svg
                    variants={arrowSlide}
                    className="w-5 h-5"
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
                  </motion.svg>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link href="/work" className="btn-secondary min-w-[200px]">
                  View Our Portfolio
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Code/Deployment Mockup visual */}
          <motion.div 
            className="lg:col-span-5 w-full relative"
            style={{
              y: finalMockupY,
              scale: finalMockupScale,
            }}
          >
            <motion.div variants={staggerItem} className="w-full">
              <HeroMockup />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
