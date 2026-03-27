"use client";

import { useState } from "react";

/**
 * SkipToContent - Accessibility component for keyboard navigation
 *
 * Allows keyboard users to skip repetitive navigation and jump directly
 * to the main content. Hidden until focused, then appears at top-left.
 */
export function SkipToContent() {
    const [isFocused, setIsFocused] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const mainContent = document.getElementById("main-content");
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <a
            href="#main-content"
            onClick={handleClick}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
                fixed top-4 left-4 z-[100]
                px-6 py-3
                bg-primary text-primary-foreground
                font-medium text-sm
                rounded-full shadow-lg
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                ${isFocused
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0 pointer-events-none"
                }
            `}
        >
            Skip to main content
        </a>
    );
}
