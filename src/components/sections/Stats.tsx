"use client";

import { useRef, useEffect, useSyncExternalStore } from "react";
import { siteContent } from "@/content/site-content";
import { gsap, refreshOnFontsReady } from "@/lib/gsap-utils";

function subscribeToMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getMotionServer() {
  return false;
}

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
}

function StatItem({ endValue, suffix, label }: StatItemProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getMotion, getMotionServer);

  useEffect(() => {
    const el = numberRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    if (reducedMotion) {
      el.textContent = `${endValue}${suffix}`;
      return;
    }

    const obj = { value: 0 };

    const tween = gsap.to(obj, {
      value: endValue,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.floor(obj.value)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [endValue, suffix, reducedMotion]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center p-6">
      <span
        ref={numberRef}
        className="text-5xl md:text-6xl lg:text-7xl font-black font-syne text-primary tracking-tighter tabular-nums mb-2"
      >
        {suffix}
      </span>
      <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  useEffect(() => {
    refreshOnFontsReady();
  }, []);

  const stats = siteContent.stats.items;

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Subtle grain band */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(245,166,35,0.03),transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
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
