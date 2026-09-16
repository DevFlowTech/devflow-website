"use client";

import React, { useEffect, useRef, useState } from "react";

type CursorType =
  | "default"
  | "pointer"
  | "text"
  | "not-allowed"
  | "wait"
  | "move"
  | "help"
  | "zoom-in"
  | "zoom-out";

interface CursorConfig {
  hotspot: [number, number];
  webp: string;
  png: string;
}

const CURSOR_CONFIG: Record<CursorType, CursorConfig> = {
  default: {
    hotspot: [4, 0],
    webp: "/cursors/default_48.webp",
    png: "/cursors/default_48.png",
  },
  pointer: {
    hotspot: [24, 20],
    webp: "/cursors/pointer_48.webp",
    png: "/cursors/pointer_48.png",
  },
  text: {
    hotspot: [22, 22],
    webp: "/cursors/text_48.webp",
    png: "/cursors/text_48.png",
  },
  "not-allowed": {
    hotspot: [4, 0],
    webp: "/cursors/not-allowed_48.webp",
    png: "/cursors/not-allowed_48.png",
  },
  wait: {
    hotspot: [20, 20],
    webp: "/cursors/wait_48.webp",
    png: "/cursors/wait_48.png",
  },
  move: {
    hotspot: [22, 22],
    webp: "/cursors/move_48.webp",
    png: "/cursors/move_48.png",
  },
  help: {
    hotspot: [4, 0],
    webp: "/cursors/help_48.webp",
    png: "/cursors/help_48.png",
  },
  "zoom-in": {
    hotspot: [22, 22],
    webp: "/cursors/zoom-in_48.webp",
    png: "/cursors/zoom-in_48.png",
  },
  "zoom-out": {
    hotspot: [22, 22],
    webp: "/cursors/zoom-out_48.webp",
    png: "/cursors/zoom-out_48.png",
  },
};

const CURSOR_TYPES = Object.keys(CURSOR_CONFIG) as CursorType[];

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Map<CursorType, HTMLImageElement>>(new Map());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const container = containerRef.current;
    if (!container) return;

    let activeType: CursorType = "default";
    let isPressed = false;
    let isVisible = false;
    let mouseX = -100;
    let mouseY = -100;
    let isTouchDevice = false;

    const setVisibleType = (nextType: CursorType) => {
      if (activeType === nextType && isVisible) return;
      activeType = nextType;

      imagesRef.current.forEach((img, type) => {
        if (type === nextType) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    };

    const updatePosition = () => {
      const config = CURSOR_CONFIG[activeType] || CURSOR_CONFIG.default;
      const [hsX, hsY] = config.hotspot;
      const scale = isPressed ? 0.88 : 1.0;
      container.style.transform = `translate3d(${mouseX - hsX}px, ${mouseY - hsY}px, 0) scale(${scale})`;
    };

    const detectHoverType = (target: HTMLElement | null): CursorType => {
      if (!target) return "default";

      // 1. Explicit data-cursor
      const explicit = target.closest<HTMLElement>("[data-cursor]");
      if (explicit) {
        const val = explicit.getAttribute("data-cursor") as CursorType;
        if (val && CURSOR_CONFIG[val]) return val;
      }

      // 2. Disabled / Not allowed
      if (
        target.closest(
          "button:disabled, [aria-disabled='true'], .cursor-not-allowed, input:disabled, textarea:disabled"
        )
      ) {
        return "not-allowed";
      }

      // 3. Text inputs & contenteditable
      if (
        target.closest(
          "input:not([type='button']):not([type='submit']):not([type='checkbox']):not([type='radio']):not([type='file']), textarea, [contenteditable='true']"
        )
      ) {
        return "text";
      }

      // 4. Zoom in / Zoom out
      if (target.closest(".cursor-zoom-in, [data-zoom-in]")) return "zoom-in";
      if (target.closest(".cursor-zoom-out, [data-zoom-out]")) return "zoom-out";

      // 5. Move / Grab
      if (target.closest(".cursor-move, .cursor-grab, [draggable='true']")) return "move";

      // 6. Help
      if (target.closest(".cursor-help, abbr[title], [data-tooltip]")) return "help";

      // 7. Wait / Progress
      if (target.closest(".cursor-wait, [aria-busy='true'], [data-loading='true']")) return "wait";

      // 8. Pointer (links, buttons, interactive elements)
      if (
        target.closest(
          "a, button, [role='button'], input[type='submit'], input[type='button'], label[for], select, summary, .cursor-pointer"
        )
      ) {
        return "pointer";
      }

      return "default";
    };

    const onPointerMove = (e: PointerEvent) => {
      // Ignore pure touch events on touchscreens
      if (e.pointerType === "touch") {
        isTouchDevice = true;
        container.style.opacity = "0";
        document.documentElement.classList.remove("has-custom-cursor");
        return;
      }

      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        container.style.opacity = "1";
        document.documentElement.classList.add("has-custom-cursor");
      }

      const target = e.target as HTMLElement | null;
      const detected = detectHoverType(target);
      setVisibleType(detected);
      updatePosition();
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isPressed = true;
      updatePosition();
    };

    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isPressed = false;
      updatePosition();
    };

    const onMouseLeave = () => {
      isVisible = false;
      container.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (isTouchDevice) return;
      isVisible = true;
      container.style.opacity = "1";
      document.documentElement.classList.add("has-custom-cursor");
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("blur", onMouseLeave);

    // Initial default image visible
    setVisibleType("default");

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("blur", onMouseLeave);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[99999999] select-none will-change-transform opacity-0 transition-opacity duration-150 ease-out"
      style={{
        width: 48,
        height: 48,
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      {CURSOR_TYPES.map((type) => {
        const config = CURSOR_CONFIG[type];
        return (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={type}
            ref={(el) => {
              if (el) imagesRef.current.set(type, el);
              else imagesRef.current.delete(type);
            }}
            src={config.webp}
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
            style={{
              display: type === "default" ? "block" : "none",
              imageRendering: "auto",
            }}
          />
        );
      })}
    </div>
  );
}
