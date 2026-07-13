"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  offsetX: number;
}

export default function FloatingParticles({ 
  count = 45,
  mode = "float"
}: { 
  count?: number;
  mode?: "float" | "snow";
}) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: mode === "snow" ? Math.random() * -100 : Math.random() * 100,
      size: Math.random() * 3.5 + 1,
      duration: mode === "snow" ? Math.random() * 10 + 8 : Math.random() * 12 + 10,
      delay: Math.random() * -10, // start immediately using negative delay
      offsetX: Math.random() * 50 - 25,
    }))
  );

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-devflow-green/25 backdrop-blur-[0.5px]"
          style={{
            left: `${particle.x}%`,
            top: mode === "snow" ? "-5vh" : `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={mode === "snow" ? {
            y: ["0vh", "110vh"],
            x: [0, particle.offsetX, particle.offsetX * 2],
            opacity: [0, 0.6, 0.6, 0],
          } : {
            y: [0, -30, 0],
            x: [0, particle.offsetX, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
