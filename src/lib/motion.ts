// Motion configuration for consistent, professional animations
// Following B2B premium motion principles

export const easeOut = [0.2, 0, 0, 1] as const;

// Fade + slight slide up (most common entrance)
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

// Fade only (for elements that shouldn't move)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: easeOut,
    },
  },
};

// Subtle scale (for cards and interactive elements)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: easeOut,
    },
  },
};

// Stagger children container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger item (for lists and grids)
export const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

// Hover effects
export const hoverLift = {
  rest: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    y: -4,
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.15,
      ease: easeOut,
    },
  },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.15,
      ease: easeOut,
    },
  },
};

// Arrow slide (for CTAs with arrows)
export const arrowSlide = {
  rest: { x: 0 },
  hover: {
    x: 2,
    transition: {
      duration: 0.15,
      ease: easeOut,
    },
  },
};

// Viewport settings
export const viewportOnce = { once: true, margin: "-50px" };
