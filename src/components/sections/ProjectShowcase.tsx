"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const projects = [
  {
    title: "Pixsignerz Portal",
    category: "Enterprise Solutions",
    description:
      "Secure digital enterprise portal for Aureon, streamlining internal workflows and document management.",
    tech: ["WordPress", "PHP", "MySQL"],
    color: "from-devflow-green/20 to-devflow-green/5",
    accent: "devflow-green",
    url: "https://pixsignerz.aureon.co.in",
  },
  {
    title: "Future Realty Space",
    category: "Real Estate",
    description:
      "Modern property brokerage platform enabling seamless property discovery and client management.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    color: "from-blue-500/20 to-blue-500/5",
    accent: "blue-500",
    url: "https://futurerealtyspace.com",
  },
  {
    title: "Aureon India",
    category: "Corporate Tech",
    description:
      "Professional corporate presence for a leading IT and managed services provider.",
    tech: ["React", "TypeScript", "Framer Motion"],
    color: "from-purple-500/20 to-purple-500/5",
    accent: "purple-500",
    url: "https://aureon.co.in",
  },
  {
    title: "Vassu Infotech",
    category: "IT Services",
    description:
      "Comprehensive IT services and hardware solutions platform with e-commerce integration.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-indigo-500/20 to-indigo-500/5",
    accent: "indigo-500",
    url: "https://vassuinfotech.com",
  },
  {
    title: "Narmada Sales",
    category: "Web Application",
    description:
      "Full-stack real estate management system optimizing property tracking and sales operations.",
    tech: ["PHP", "MySQL", "JavaScript"],
    color: "from-orange-500/20 to-orange-500/5",
    accent: "orange-500",
    url: "https://narmadasales.pages.dev",
  },

  {
    title: "Path Visa Advisor",
    category: "Web Application",
    description:
      "Trusted global visa partner providing expert guidance and fast processing for all visa types.",
    tech: ["Next.js", "React", "TailwindCSS"],
    color: "from-cyan-500/20 to-cyan-500/5",
    accent: "cyan-500",
    url: "https://path-visa-advisor.vercel.app/",
  },
];

const categories = [
  "All",
  "Enterprise Solutions",
  "Real Estate",
  "Corporate Tech",
  "IT Services",
  "Web Application",
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="py-24 lg:py-32 bg-devflow-black relative overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-5xl font-semibold text-white text-shadow-soft mb-8"
          >
            Projects That{" "}
            <span className="text-devflow-green">Delivered Results</span>
          </motion.h2>

          {/* Category Filter */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-devflow-green text-devflow-black"
                    : "bg-white/5 text-devflow-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-6 bg-devflow-charcoal border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                {/* Project Browser Frame URL Preview */}
                <div className="relative h-48 w-full rounded-xl bg-gray-900 border border-white/10 overflow-hidden mb-5 group-hover:border-devflow-green/30 transition-colors">
                  {/* Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center px-3 gap-1.5 z-10 border-b border-white/5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    <div className="ml-2 w-full max-w-[120px] h-3 bg-gray-700/50 rounded-full text-[8px] text-gray-400 flex items-center px-2 truncate">
                      {project.url}
                    </div>
                  </div>

                  {/* Iframe Preview - Scaled to fit */}
                  <div className="w-full h-full pt-6 bg-white">
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none select-none"
                      loading="lazy"
                      scrolling="no"
                    />
                  </div>

                  {/* Hover Overlay with Button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-devflow-green text-devflow-black font-semibold rounded-full transform scale-90 hover:scale-100 transition-transform duration-200 flex items-center gap-2"
                    >
                      <span>View Live Site</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-devflow-gray-400 mb-3 w-fit">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-devflow-green transition-colors">
                  {project.title}
                </h3>

                <p className="text-devflow-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-devflow-dark border border-white/5 rounded text-xs text-devflow-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
