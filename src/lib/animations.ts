// Animation configuration for CapyCo landing page — Dark Theme
// "Tropical Brutalism meets Soft Futurism"

export const ANIMATION_CONFIG = {
  ease: {
    smooth: [0.22, 1, 0.36, 1] as const,
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
    snappy: [0.4, 0, 0.2, 1] as const,
  },
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.6,
    mascot: 3,
  },
  stagger: 0.12,
} as const;

// Reusable Framer Motion variants

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ANIMATION_CONFIG.ease.smooth },
  },
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: ANIMATION_CONFIG.stagger },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ANIMATION_CONFIG.ease.smooth },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hero word-by-word reveal
export const wordReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export const wordItem = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: ANIMATION_CONFIG.ease.smooth },
  },
};

// Mascot floating animation
export const mascotFloat = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: ANIMATION_CONFIG.duration.mascot,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Card hover glow
export const cardHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: ANIMATION_CONFIG.duration.fast, ease: ANIMATION_CONFIG.ease.snappy },
  },
  tap: {
    scale: 0.98,
    transition: { duration: ANIMATION_CONFIG.duration.fast },
  },
};

// Navbar variants
export const navbarVariants = {
  top: {
    backgroundColor: "rgba(10, 10, 15, 0)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  scrolled: {
    backgroundColor: "rgba(10, 10, 15, 0.8)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
  },
};

// Mobile menu slide in
export const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: { duration: ANIMATION_CONFIG.duration.normal, ease: ANIMATION_CONFIG.ease.smooth },
  },
  open: {
    x: 0,
    transition: { duration: ANIMATION_CONFIG.duration.normal, ease: ANIMATION_CONFIG.ease.smooth },
  },
};
