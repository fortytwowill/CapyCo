"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

type EasingType = "linear" | "easeOut" | "easeOutExpo" | "easeInOut";

interface UseCountUpOptions {
    /**
     * Target number to count to
     */
    end: number;
    /**
     * Duration of the animation in seconds
     * @default 2
     */
    duration?: number;
    /**
     * Delay before starting animation in seconds
     * @default 0
     */
    delay?: number;
    /**
     * Easing function for the animation
     * @default "easeOutExpo"
     */
    easing?: EasingType;
    /**
     * Start animation when element comes into view
     * @default true
     */
    startOnView?: boolean;
    /**
     * Whether the counter should only animate once
     * @default true
     */
    once?: boolean;
}

/**
 * Easing functions for smooth animations
 */
const easingFunctions: Record<EasingType, (t: number) => number> = {
    linear: (t) => t,
    easeOut: (t) => 1 - Math.pow(1 - t, 3),
    easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    easeInOut: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

/**
 * useCountUp - Hook for animating a number count-up
 *
 * Returns the current count value and a ref to attach to the element.
 * Animation starts when the element comes into view (configurable).
 *
 * @example
 * const { count, ref } = useCountUp({ end: 100, duration: 2 });
 *
 * <span ref={ref}>{count}</span>
 */
export function useCountUp(options: UseCountUpOptions) {
    const {
        end,
        duration = 2,
        delay = 0,
        easing = "easeOutExpo",
        startOnView = true,
        once = true,
    } = options;

    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    const startCounting = useCallback(() => {
        if (hasStarted && once) return;

        setHasStarted(true);

        const timeoutId = setTimeout(() => {
            let startTimestamp: number | null = null;
            const easeFn = easingFunctions[easing];

            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const elapsed = timestamp - startTimestamp;
                const progress = Math.min(elapsed / (duration * 1000), 1);
                const easedProgress = easeFn(progress);

                setCount(Math.floor(easedProgress * end));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [end, duration, delay, easing, hasStarted, once]);

    useEffect(() => {
        if (startOnView) {
            if (isInView) {
                startCounting();
            }
        } else {
            startCounting();
        }
    }, [isInView, startOnView, startCounting]);

    return { count, ref, isInView };
}
