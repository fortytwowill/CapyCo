"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    /**
     * Easing function for the animation
     * @default "easeOutExpo"
     */
    easing?: "linear" | "easeOut" | "easeOutExpo" | "easeInOut";
    /**
     * Whether to start counting when in view
     * @default true
     */
    startOnView?: boolean;
    /**
     * Delay before starting animation (ms)
     * @default 0
     */
    delay?: number;
}

/**
 * AnimatedCounter - Number that counts up when scrolled into view
 *
 * Uses requestAnimationFrame for smooth 60fps animation.
 * Automatically starts when the element enters the viewport.
 * Respects prefers-reduced-motion preference.
 */
export function AnimatedCounter({
    end,
    duration = 2,
    suffix = "",
    prefix = "",
    className,
    easing = "easeOutExpo",
    startOnView = true,
    delay = 0,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            setCount(end);
            return;
        }

        if (startOnView && !isInView) return;
        if (hasAnimated) return;

        const timeoutId = setTimeout(() => {
            let startTimestamp: number | null = null;

            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

                // Apply easing
                let easedProgress: number;
                switch (easing) {
                    case "linear":
                        easedProgress = progress;
                        break;
                    case "easeOut":
                        easedProgress = 1 - Math.pow(1 - progress, 3);
                        break;
                    case "easeOutExpo":
                        easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                        break;
                    case "easeInOut":
                        easedProgress = progress < 0.5
                            ? 4 * progress * progress * progress
                            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                        break;
                    default:
                        easedProgress = progress;
                }

                setCount(Math.floor(easedProgress * end));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    setHasAnimated(true);
                }
            };

            window.requestAnimationFrame(step);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [end, duration, easing, isInView, hasAnimated, startOnView, delay, prefersReducedMotion]);

    return (
        <span ref={ref} className={cn("tabular-nums", className)}>
            {prefix}{count}{suffix}
        </span>
    );
}

/**
 * Hook to detect prefers-reduced-motion preference
 */
function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return prefersReducedMotion;
}
