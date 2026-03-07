"use client";

import { useEffect, useState } from "react";

/**
 * useActiveSection - Hook to track which section is currently in view
 *
 * Used for highlighting navigation items based on scroll position.
 *
 * @param sectionIds - Array of section IDs to track
 * @param offset - Offset from top of viewport (default: 100px)
 * @returns Currently active section ID or null
 *
 * @example
 * const activeSection = useActiveSection(['hero', 'services', 'about', 'contact']);
 *
 * // In navigation
 * <a className={activeSection === 'services' ? 'text-primary' : ''}>Services</a>
 */
export function useActiveSection(
    sectionIds: string[],
    offset: number = 100
): string | null {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the current section
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(sectionIds[i]);
                        return;
                    }
                }
            }

            // If we're above all sections, set to first
            if (scrollPosition < offset) {
                setActiveSection(sectionIds[0]);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
}
