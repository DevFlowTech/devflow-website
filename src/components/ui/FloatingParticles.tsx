"use client";

import { useState, useEffect } from "react";

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
      delay: Math.random() * -10,
      offsetX: Math.random() * 50 - 25,
    }))
  );

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-devflow-green/25"
          style={{
            left: `${particle.x}%`,
            top: mode === "snow" ? "-5vh" : `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            "--ox": `${particle.offsetX}px`,
            animation: mode === "snow" 
              ? `particle-snow ${particle.duration}s linear ${particle.delay}s infinite`
              : `particle-float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            willChange: "transform, opacity",
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes particle-float {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateX(var(--ox, 25px)) translateY(-30px) scale(1.2);
            opacity: 0.6;
          }
        }
        @keyframes particle-snow {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) translateX(var(--ox, 25px));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
