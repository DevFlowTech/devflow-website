"use client";

// Simplified static grid for better performance
// Removed interactive mouse tracking which was heavy
export default function InteractiveGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static CSS grid pattern - much lighter than SVG dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #bae654 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Single subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-devflow-green/5 rounded-full blur-3xl" />
    </div>
  );
}
