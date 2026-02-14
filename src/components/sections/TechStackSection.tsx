"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiAmazonwebservices,
  SiPython,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

export default function TechStackSection() {
  return (
    <section className="py-12 bg-devflow-black border-b border-white/[0.04] overflow-hidden">
      <div className="flex items-center gap-4 mb-8 justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-devflow-gray-500" />
        <span className="text-sm font-medium text-devflow-gray-500 uppercase tracking-widest">
          Powered By Modern Tech
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-devflow-gray-500" />
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-devflow-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-devflow-black to-transparent" />

        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {/* First Loop */}
          {technologies.map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`tech-1-${i}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
              >
                <IconComponent
                  className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-lg font-semibold text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
          {/* Second Loop (Duplicate for seamless scrolling) */}
          {technologies.map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`tech-2-${i}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
              >
                <IconComponent
                  className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-lg font-semibold text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
          {/* Third Loop (Duplicate for safety on wide screens) */}
          {technologies.map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`tech-3-${i}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
              >
                <IconComponent
                  className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-lg font-semibold text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
