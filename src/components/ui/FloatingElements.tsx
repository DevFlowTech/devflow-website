"use client";

// Smooth CSS-animated floating elements (GPU accelerated)
export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating gradient orb - CSS animation */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-devflow-green/8 rounded-full blur-2xl animate-float-slow will-change-transform" />

      {/* Second orb */}
      <div className="absolute bottom-32 left-[5%] w-80 h-80 bg-devflow-green/5 rounded-full blur-2xl animate-float-reverse will-change-transform" />

      {/* Floating code symbols with CSS animation */}
      <div className="absolute top-[15%] left-[8%] text-devflow-green/5 md:text-devflow-green/15 text-6xl font-mono select-none animate-float-gentle will-change-transform">
        {"</>"}
      </div>

      <div className="absolute bottom-[25%] right-[12%] text-devflow-green/5 md:text-devflow-green/10 text-5xl font-mono select-none animate-float-gentle-reverse will-change-transform">
        {"{ }"}
      </div>

      {/* Floating dots grid */}
      <div className="absolute top-[40%] right-[5%] grid grid-cols-4 gap-2 opacity-20 animate-pulse-slow">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-devflow-green rounded-full" />
        ))}
      </div>
    </div>
  );
}
