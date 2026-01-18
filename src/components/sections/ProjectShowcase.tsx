"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const projects = [
  {
    title: "Gateway App",
    category: "Web Application",
    description:
      "Secure payment gateway integration with real-time transaction processing and analytics dashboard",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "from-devflow-green/20 to-devflow-green/5",
    accent: "devflow-green",
  },
  {
    title: "Data Scraper",
    category: "Automation Tool",
    description:
      "Automated web scraping solution for business intelligence and lead generation",
    tech: ["Python", "Tauri", "React"],
    color: "from-blue-500/20 to-blue-500/5",
    accent: "blue-500",
  },
  {
    title: "Bulk Email Sender",
    category: "Internal Tool",
    description:
      "High-volume email campaign tool with template management and delivery tracking",
    tech: ["Node.js", "React", "AWS SES"],
    color: "from-purple-500/20 to-purple-500/5",
    accent: "purple-500",
  },
];

const categories = [
  "All",
  "Web Application",
  "Automation Tool",
  "Internal Tool",
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-devflow-black relative overflow-hidden">
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

              <div className="relative p-6 bg-devflow-charcoal border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300 h-full">
                {/* Project Preview Placeholder */}
                <div
                  className={`h-40 rounded-xl bg-gradient-to-br ${project.color} border border-white/5 mb-5 flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-4xl opacity-30">{"</>"}</div>
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-devflow-gray-400 mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-devflow-green transition-colors">
                  {project.title}
                </h3>

                <p className="text-devflow-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
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
