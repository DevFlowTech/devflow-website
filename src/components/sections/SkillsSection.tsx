"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const skillCategories = [
  {
    title: "Frameworks & Dev (Full Stack)",
    code: "[ FRAMEWORKS ]",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "Node.js / Express", level: 90 },
      { name: "Angular / Laravel", level: 85 },
      { name: "PHP / Bootstrap", level: 88 },
      { name: "Tailwind CSS", level: 97 },
      { name: ".NET Framework", level: 82 },
    ],
  },
  {
    title: "Programming (Languages)",
    code: "[ PROGRAMMING ]",
    skills: [
      { name: "JavaScript / TS", level: 95 },
      { name: "C# / Java", level: 82 },
      { name: "Python", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Dart", level: 78 },
      { name: "C / C++", level: 75 },
    ],
  },
  {
    title: "Storage & Analytics (Databases)",
    code: "[ STORAGE ]",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL / PostgreSQL", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "Supabase", level: 78 },
      { name: "Cloudflare D1", level: 80 },
    ],
  },
  {
    title: "DevOps & Concepts (Tools & Core)",
    code: "[ DEVOPS & CORE ]",
    skills: [
      { name: "REST APIs / JWT", level: 95 },
      { name: "Git / GitHub", level: 92 },
      { name: "Postman", level: 94 },
      { name: "Docker / CI/CD", level: 75 },
      { name: "SEO (On/Off Page)", level: 85 },
      { name: "Software Testing", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-devflow-black border-t border-white/[0.04] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[40%] left-[20%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-4">
            [ TECHNICAL EXPERTISE // CAPABILITIES ]
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight">
            Engineered to Scale.{" "}
            <span className="italic font-normal text-devflow-green font-display">
              Skill Overview
            </span>
          </h2>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-devflow-green/10 transition-all duration-300"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-devflow-green/20 group-hover:w-16 transition-all duration-300" />
              <div className="absolute top-0 left-0 w-px h-8 bg-devflow-green/20 group-hover:h-16 transition-all duration-300" />

              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-lg font-display font-medium text-white group-hover:text-devflow-green transition-colors">
                  {category.title}
                </h3>
                <span className="text-[9px] font-mono text-devflow-green/70 bg-devflow-green/5 border border-devflow-green/10 px-2 py-0.5 rounded">
                  {category.code}
                </span>
              </div>

              {/* Progress items */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-devflow-gray-300 font-light">{skill.name}</span>
                      <span className="text-devflow-green">{skill.level}%</span>
                    </div>
                    {/* Bar background */}
                    <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-devflow-green rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
