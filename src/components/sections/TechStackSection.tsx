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
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiKotlin,
  SiFlutter,
  SiSwift,
  SiAndroid,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiWordpress,
  SiShopify,
  SiGraphql,
  SiRedis,
  SiVercel,
  SiNuxtdotjs,
  SiVite,
  SiPrisma,
  SiSupabase,
  SiStripe,
  SiElectron,
  SiReactquery,
  SiJavascript,
} from "react-icons/si";
import { FiSearch, FiMapPin, FiMic, FiGlobe, FiTrendingUp } from "react-icons/fi";

// Row 1: JS / Web Frameworks & Libraries
const jsFrameworks = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
  { name: "Nuxt", icon: SiNuxtdotjs, color: "#00DC82" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Electron", icon: SiElectron, color: "#47848F" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "React Query", icon: SiReactquery, color: "#FF4154" },
];

// Row 2: Mobile / Android / Backend & Cloud
const mobileBackend = [
  { name: "Android", icon: SiAndroid, color: "#3DDC84" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Swift", icon: SiSwift, color: "#F05138" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
];

// Row 3: SEO / AEO / GEO & Marketing
const seoTools = [
  { name: "SEO", icon: FiSearch, color: "#0225dc" },
  { name: "AEO", icon: FiMic, color: "#0225dc" },
  { name: "GEO", icon: FiMapPin, color: "#0225dc" },
  { name: "Analytics", icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Search Console", icon: SiGooglesearchconsole, color: "#458CF5" },
  { name: "Semrush", icon: SiSemrush, color: "#FF642D" },
  { name: "Ahrefs", icon: FiTrendingUp, color: "#FF8C00" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "International SEO", icon: FiGlobe, color: "#0225dc" },
];

type TechEntry = { name: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string };

function TechItem({ tech }: { tech: TechEntry }) {
  const IconComponent = tech.icon;
  return (
    <div className="flex items-center gap-2.5 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 group px-4">
      <IconComponent
        className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
        style={{ color: tech.color }}
        aria-label={tech.name}
      />
      <span className="text-sm font-semibold text-white whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", duration = 25 }: { items: TechEntry[]; direction?: "left" | "right"; duration?: number }) {
  // Duplicate items 4 times for seamless loop
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden relative">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {allItems.map((tech, i) => (
          <TechItem key={`${direction}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <div className="w-full overflow-hidden relative flex flex-col gap-4">
      {/* Edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Row 1: JS / Web Frameworks → scrolls left */}
      <MarqueeRow items={jsFrameworks} direction="left" duration={30} />

      {/* Row 2: Mobile / Backend / Cloud → scrolls right */}
      <MarqueeRow items={mobileBackend} direction="right" duration={35} />

      {/* Row 3: SEO / AEO / GEO → scrolls left faster */}
      <MarqueeRow items={seoTools} direction="left" duration={20} />
    </div>
  );
}
