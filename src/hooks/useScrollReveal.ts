"use client";

import { useRef } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

interface UseScrollRevealOptions {
    /**
     * Trigger animation only once
     * @default true
     */
    once?: boolean;
    /**
     * Margin around the element before triggering
     * @default "-100px"
     */
    margin?: UseInViewOptions["margin"];
    /**
     * Amount of element that needs to be visible (0-1)
     * @default 0.2
     */
    amount?: UseInViewOptions["amount"];
}

/**
 * useScrollReveal - Hook for scroll-triggered animations
 *
 * Returns a ref and boolean indicating if the element is in view.
 * Use with Framer Motion's motion components for reveal animations.
 *
 * @example
 * const { ref, isInView } = useScrollReveal();
 *
 * <motion.div
 *   ref={ref}
 *   initial={{ opacity: 0, y: 20 }}
 *   animate={isInView ? { opacity: 1, y: 0 } : {}}
 * >
 *   Content
 * </motion.div>
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
    const { once = true, margin, amount = 0.2 } = options;
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once,
        margin: margin as `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`,
        amount,
    });

    return { ref, isInView };
}
