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
import { FiCpu, FiArrowRight } from "react-icons/fi";

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
  return (
    <div className="w-full p-6 sm:p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {techOverview.map((group) => (
          <div
            key={group.category}
            className="p-4 rounded-xl bg-devflow-black/60 border border-white/[0.06] space-y-3"
          >
            <h3 className="text-xs font-mono text-devflow-green uppercase tracking-wider font-semibold">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <li
                    key={tech.name}
                    className="flex items-center gap-2 text-xs font-medium text-devflow-gray-200"
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
        <span className="text-xs font-mono text-devflow-gray-400">
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

