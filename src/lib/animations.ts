// Animation configuration for CapyCo landing page
// Use these constants instead of magic numbers for consistent motion

export const ANIMATION_CONFIG = {
  // Easing functions
  ease: {
    smooth: [0.25, 0.1, 0.25, 1] as const,      // General transitions
    bounce: [0.68, -0.55, 0.265, 1.55] as const, // Playful elements
    snappy: [0.4, 0, 0.2, 1] as const,          // Micro-interactions
  },

  // Durations (seconds)
  duration: {
    fast: 0.15,      // Hovers, toggles
    normal: 0.3,     // Standard transitions
    slow: 0.5,       // Scroll reveals
    mascot: 3,       // Floating loop
  },

  // Stagger delay between children
  stagger: 0.1,
} as const;

// Framer Motion variants for scroll reveal
export const scrollRevealVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.ease.smooth
    }
  }
};

// Container variant for staggering children
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.stagger,
      delayChildren: 0.1,
    }
  }
};

// Child items for stagger animations
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.ease.smooth
    }
  }
};

// Mascot floating animation
export const mascotFloatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: ANIMATION_CONFIG.duration.mascot,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Fade in from bottom (for sections)
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.ease.smooth
    }
  }
};

// Scale up on hover (for cards, buttons)
export const scaleOnHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
      ease: ANIMATION_CONFIG.ease.snappy
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
      ease: ANIMATION_CONFIG.ease.snappy
    }
  }
};

// Mobile menu slide in
export const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.ease.smooth
    }
  },
  open: {
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.ease.smooth
    }
  }
};

// Navbar background on scroll
export const navbarVariants = {
  top: {
    backgroundColor: "rgba(253, 246, 236, 0)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  scrolled: {
    backgroundColor: "rgba(253, 246, 236, 0.9)",
    boxShadow: "0 4px 24px rgba(27, 42, 74, 0.08)",
  }
};
