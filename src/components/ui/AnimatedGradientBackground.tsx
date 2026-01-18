"use client";

// Simplified gradient background using Tailwind animate classes
export default function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient blobs using CSS animation classes */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-devflow-green/10 via-transparent to-transparent rounded-full blur-2xl animate-float-slow" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent rounded-full blur-2xl animate-float-reverse" />
    </div>
  );
}
