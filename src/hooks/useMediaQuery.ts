"use client";

import { useState, useEffect } from "react";

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

interface UseMediaQueryOptions {
    /**
     * Whether to initialize with the query match on first render
     * Prevents hydration mismatch by default
     * @default false
     */
    initializeWithValue?: boolean;
}

/**
 * useMediaQuery - Hook for responsive design
 *
 * Subscribe to CSS media queries in React components.
 * Returns true if the media query matches, false otherwise.
 *
 * @example
 * // Check if mobile
 * const isMobile = useMediaQuery('(max-width: 768px)');
 *
 * // Check if dark mode
 * const isDark = useMediaQuery('(prefers-color-scheme: dark)');
 *
 * // Check if reduced motion
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 */
export function useMediaQuery(
    query: string,
    options: UseMediaQueryOptions = {}
): boolean {
    const { initializeWithValue = false } = options;
    const [matches, setMatches] = useState(initializeWithValue);

    useEffect(() => {
        const media = window.matchMedia(query);

        // Set initial value
        setMatches(media.matches);

        // Create listener
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Modern browsers
        media.addEventListener("change", listener);

        // Cleanup
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}

/**
 * useBreakpoint - Hook for Tailwind breakpoint checks
 *
 * Returns true if the viewport is at least the specified breakpoint.
 *
 * @example
 * const isMd = useBreakpoint('md'); // true if >= 768px
 * const isLg = useBreakpoint('lg'); // true if >= 1024px
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
    const query = `(min-width: ${breakpoints[breakpoint]}px)`;
    return useMediaQuery(query);
}

/**
 * useIsMobile - Hook for mobile detection
 *
 * Returns true if viewport is less than 768px (md breakpoint)
 */
export function useIsMobile(): boolean {
    return useMediaQuery(`(max-width: ${breakpoints.md - 1}px)`);
}

/**
 * useIsTablet - Hook for tablet detection
 *
 * Returns true if viewport is between 768px and 1023px
 */
export function useIsTablet(): boolean {
    return useMediaQuery(
        `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`
    );
}

/**
 * useIsDesktop - Hook for desktop detection
 *
 * Returns true if viewport is at least 1024px (lg breakpoint)
 */
export function useIsDesktop(): boolean {
    return useBreakpoint("lg");
}

/**
 * usePrefersReducedMotion - Hook for accessibility
 *
 * Returns true if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
    return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * usePrefersDarkMode - Hook for dark mode preference
 *
 * Returns true if user prefers dark color scheme
 */
export function usePrefersDarkMode(): boolean {
    return useMediaQuery("(prefers-color-scheme: dark)");
}
