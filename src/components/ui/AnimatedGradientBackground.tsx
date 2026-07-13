"use client";

export default function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Premium SVG Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Glowing Aurora 1 (Green) */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-devflow-green/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Floating Glowing Aurora 2 (White/Muted) */}
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Floating Glowing Aurora 3 (Green) */}
      <div className="absolute top-[60%] left-[-10%] w-[400px] h-[400px] rounded-full bg-devflow-green/[0.03] blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
    </div>
  );
}
