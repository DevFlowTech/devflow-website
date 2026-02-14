"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "start", label: "Start" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function StickyDotNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 500);

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Connection Line */}
      <div className="absolute top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {sections.map((section) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="relative group flex items-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Tooltip */}
          <motion.span
            className="absolute right-8 px-3 py-1.5 bg-devflow-charcoal/90 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            initial={{ x: 10 }}
            whileHover={{ x: 0 }}
          >
            {section.label}
          </motion.span>

          {/* Dot */}
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? "bg-devflow-green border-devflow-green scale-125"
                : "bg-transparent border-white/30 hover:border-devflow-green/50"
            }`}
          />

          {/* Active glow */}
          {activeSection === section.id && (
            <motion.div
              className="absolute inset-0 rounded-full bg-devflow-green/30 blur-md"
              layoutId="activeGlow"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </motion.nav>
  );
}
