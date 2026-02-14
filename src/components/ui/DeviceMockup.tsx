"use client";

import { motion } from "framer-motion";

interface DeviceMockupProps {
  type: "laptop" | "phone" | "tablet";
  children: React.ReactNode;
  className?: string;
}

export default function DeviceMockup({
  type,
  children,
  className = "",
}: DeviceMockupProps) {
  if (type === "laptop") {
    return (
      <div className={`relative ${className}`}>
        {/* Laptop Screen */}
        <div className="relative bg-devflow-dark rounded-t-xl border-t-4 border-x-4 border-gray-800 p-2">
          <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video">
            {children}
          </div>
          {/* Camera */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />
        </div>
        {/* Laptop Base */}
        <div className="relative">
          <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
        </div>
        {/* Stand */}
        <div className="h-1 bg-gray-800 mx-8 rounded-b-lg" />
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div className={`relative ${className}`}>
        <div className="relative bg-gray-900 rounded-[2.5rem] p-2 border-4 border-gray-800">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
          {/* Screen */}
          <div className="bg-devflow-dark rounded-[2rem] overflow-hidden aspect-[9/19]">
            {children}
          </div>
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className={`relative ${className}`}>
        <div className="bg-gray-900 rounded-2xl p-3 border-4 border-gray-800">
          {/* Camera */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />
          {/* Screen */}
          <div className="bg-devflow-dark rounded-xl overflow-hidden aspect-[4/3] mt-3">
            {children}
          </div>
          {/* Home button */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-700 rounded-full" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
