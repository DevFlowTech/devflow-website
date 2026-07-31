"use client";

import { useRef, useState, MouseEvent } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 30,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (clientX - centerX) / strength;
    const y = (clientY - centerY) / strength;

    setPosition({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovering
          ? "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
          : "transform 0.4s cubic-bezier(0.2, 0, 0, 1)",
      }}
    >
      {children}
    </div>
  );
}
