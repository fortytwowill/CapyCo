"use client";

import { useSyncExternalStore } from "react";

/**
 * Breakpoint values matching Tailwind CSS defaults
 */
export const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

/**
 * useMediaQuery - Subscribe to a CSS media query.
 * Uses useSyncExternalStore so the initial client value is read outside
 * effects (no setState-in-effect lint / cascading render).
 */
export function useMediaQuery(query: string): boolean {
    return useSyncExternalStore(
        (onStoreChange) => {
            const media = window.matchMedia(query);
            media.addEventListener("change", onStoreChange);
            return () => media.removeEventListener("change", onStoreChange);
        },
        () => window.matchMedia(query).matches,
        () => false, // SSR / hydration: assume no match
    );
}

/**
 * useBreakpoint - true if viewport is at least the Tailwind breakpoint.
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
    const query = `(min-width: ${breakpoints[breakpoint]}px)`;
    return useMediaQuery(query);
}

/** true if viewport &lt; 768px */
export function useIsMobile(): boolean {
    return useMediaQuery(`(max-width: ${breakpoints.md - 1}px)`);
}

/** true if viewport ≥ 768px and &lt; 1024px */
export function useIsTablet(): boolean {
    return useMediaQuery(
        `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
    );
}

/** true if viewport ≥ 1024px */
export function useIsDesktop(): boolean {
    return useMediaQuery(`(min-width: ${breakpoints.lg}px)`);
}

/** true if user prefers reduced motion */
export function usePrefersReducedMotion(): boolean {
    return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** true if prefers-color-scheme: dark */
export function usePrefersDarkMode(): boolean {
    return useMediaQuery("(prefers-color-scheme: dark)");
}
