"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_CONFIG } from "@/lib/animations";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    /**
     * Whether to animate on scroll reveal
     * @default true
     */
    animated?: boolean;
    /**
     * Animation delay in seconds
     * @default 0
     */
    delay?: number;
    /**
     * Additional animation variants
     */
    variants?: Variants;
}

/**
 * SectionWrapper - Scroll reveal wrapper for page sections
 *
 * Wraps sections with consistent padding and optional scroll-triggered
 * animations. Uses Framer Motion's whileInView for reveal effects.
 */
export function SectionWrapper({
    children,
    className,
    id,
    animated = true,
    delay = 0,
    variants,
}: SectionWrapperProps) {
    const defaultVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: ANIMATION_CONFIG.duration.slow,
                ease: ANIMATION_CONFIG.ease.smooth,
                delay,
            },
        },
    };

    const animationProps = animated
        ? {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-100px" },
            variants: variants || defaultVariants,
        }
        : {};

    return (
        <motion.section
            id={id}
            className={cn("py-24", className)}
            {...animationProps}
        >
            {children}
        </motion.section>
    );
}
