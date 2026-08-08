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







// Viewport settings
export const viewportOnce = { once: true, margin: "-50px" };
