"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLandingGsap } from "@/hooks/useLandingGsap";

type GsapRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger between `[data-reveal]` children (seconds). */
  stagger?: number;
  /** Initial Y offset in px. */
  y?: number;
  /** Slight scale-from for cards. */
  scaleFrom?: number;
  /** ScrollTrigger start. */
  start?: string;
};

/**
 * Scroll-enter choreography via GSAP ScrollTrigger.
 * Mark children with `data-reveal` for stagger; otherwise the root animates.
 */
export function GsapReveal({
  children,
  className,
  stagger = 0.1,
  y = 28,
  scaleFrom = 1,
  start = "top 85%",
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLandingGsap(({ gsap, reduced }) => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const targets = items.length > 0 ? items : root;

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1, clearProps: "transform" });
      return;
    }

    gsap.set(targets, {
      opacity: 0,
      y,
      scale: scaleFrom,
    });

    gsap.to(targets, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: items.length > 0 ? stagger : 0,
      scrollTrigger: {
        trigger: root,
        start,
        once: true,
      },
    });
  }, ref);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
