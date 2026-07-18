"use client";

import { cn } from "@/lib/utils";
import { GsapReveal } from "./GsapReveal";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Whether to animate on scroll reveal
   * @default true
   */
  animated?: boolean;
  /** Stagger for nested [data-reveal] nodes */
  stagger?: number;
}

/**
 * SectionWrapper — consistent section padding + GSAP scroll reveal.
 * Prefer marking inner blocks with `data-reveal` for stagger.
 */
export function SectionWrapper({
  children,
  className,
  id,
  animated = true,
  stagger = 0.1,
}: SectionWrapperProps) {
  const sectionClass = cn("py-24", className);

  if (!animated) {
    return (
      <section id={id} className={sectionClass}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={sectionClass}>
      <GsapReveal stagger={stagger}>{children}</GsapReveal>
    </section>
  );
}
