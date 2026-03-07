"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ANIMATION_CONFIG } from "@/lib/animations";

interface MascotFloatProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
    /**
     * Whether to apply parallax scroll effect
     * @default false
     */
    parallax?: boolean;
    /**
     * Parallax scroll range (pixels)
     * @default [0, 100]
     */
    parallaxRange?: [number, number];
}

/**
 * MascotFloat - Animated floating mascot component
 *
 * Features:
 * - Continuous floating animation (up/down bobbing)
 * - Optional parallax scroll effect
 * - Respects prefers-reduced-motion
 * - Configurable sizes
 */
export function MascotFloat({
    className,
    size = "lg",
    parallax = false,
}: MascotFloatProps) {
    const sizeClasses = {
        sm: "w-32 h-32",
        md: "w-48 h-48",
        lg: "w-64 h-64 md:w-80 md:h-80",
        xl: "w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]",
    };

    return (
        <motion.div
            className={cn("relative", sizeClasses[size], className)}
            animate={{
                y: [-10, 10, -10],
            }}
            transition={{
                duration: ANIMATION_CONFIG.duration.mascot,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <Image
                src="/images/capyco-mascot.png"
                alt="CapyCo Mascot Developer"
                fill
                priority
                className="object-contain drop-shadow-2xl"
            />
        </motion.div>
    );
}

/**
 * MascotFloatWithParallax - Floating mascot with scroll-based parallax
 *
 * Use this variant when you want the mascot to respond to scroll position
 * (e.g., in the Hero section).
 */
export function MascotFloatWithParallax({
    className,
    size = "lg",
}: Omit<MascotFloatProps, "parallax">) {
    const sizeClasses = {
        sm: "w-32 h-32",
        md: "w-48 h-48",
        lg: "w-64 h-64 md:w-80 md:h-80",
        xl: "w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]",
    };

    return (
        <motion.div
            className={cn("relative", sizeClasses[size], className)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0],
            }}
            transition={{
                opacity: { duration: 1, ease: "easeOut" },
                scale: { duration: 1, ease: "easeOut" },
                y: {
                    duration: ANIMATION_CONFIG.duration.mascot,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
        >
            <Image
                src="/images/capyco-mascot.png"
                alt="CapyCo Mascot Developer"
                fill
                priority
                className="object-contain drop-shadow-2xl"
            />
        </motion.div>
    );
}
