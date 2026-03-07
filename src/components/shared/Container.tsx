import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: "default" | "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * Container - Max-width wrapper for consistent layout
 *
 * Sizes:
 * - sm: max-w-3xl (768px) - narrow content
 * - md: max-w-4xl (896px) - blog posts, articles
 * - default/lg: max-w-6xl (1152px) - standard sections
 * - xl: max-w-7xl (1280px) - wide sections
 * - full: no max-width - full bleed
 */
export function Container({
    children,
    className,
    size = "default"
}: ContainerProps) {
    const sizeClasses = {
        sm: "max-w-3xl",
        md: "max-w-4xl",
        default: "max-w-6xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "",
    };

    return (
        <div className={cn(
            "mx-auto px-4 md:px-6",
            sizeClasses[size],
            className
        )}>
            {children}
        </div>
    );
}
