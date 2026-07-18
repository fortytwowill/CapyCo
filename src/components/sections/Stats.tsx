"use client";

import { useRef, useEffect, useSyncExternalStore } from "react";
import { siteContent } from "@/content/site-content";
import {
  gsap,
  prefersReducedMotion,
  refreshOnFontsReady,
  registerGsap,
} from "@/lib/gsap-utils";

function subscribeToMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
}

function formatStat(value: number, suffix: string) {
  return `${value}${suffix}`;
}

function StatItem({ endValue, suffix, label }: StatItemProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    prefersReducedMotion,
    () => false,
  );

  // Final value always in DOM (SSR + first paint) so crawlers / no-JS never
  // see a bare suffix like "%" mid-animation.
  const finalText = formatStat(endValue, suffix);

  useEffect(() => {
    registerGsap();
    const el = numberRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    if (reducedMotion) {
      el.textContent = finalText;
      return;
    }

    const obj = { value: 0 };
    el.textContent = formatStat(0, suffix);

    const tween = gsap.to(obj, {
      value: endValue,
      duration: 2.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = formatStat(Math.floor(obj.value), suffix);
      },
      onComplete: () => {
        el.textContent = finalText;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      // Restore final so React remount / fast nav doesn't leave a partial
      if (el) el.textContent = finalText;
    };
  }, [endValue, suffix, reducedMotion, finalText]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center text-center p-6"
    >
      <span
        ref={numberRef}
        className="text-5xl md:text-6xl lg:text-7xl font-black font-syne text-primary tracking-tighter tabular-nums mb-2"
      >
        {finalText}
      </span>
      <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    refreshOnFontsReady();
  }, []);

  const stats = siteContent.stats.items;

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-card relative overflow-hidden"
      aria-label="Studio at a glance"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(245,166,35,0.03),transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              endValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
