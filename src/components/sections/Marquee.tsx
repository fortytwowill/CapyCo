"use client";

import { useRef, useEffect, useSyncExternalStore } from "react";
import { Coffee, Hexagon, Zap, Shield, Globe, Star } from "lucide-react";
import { gsap } from "@/lib/gsap-utils";

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

const logos = [
  { icon: Coffee, name: "BrewTech" },
  { icon: Hexagon, name: "HexaData" },
  { icon: Zap, name: "ZapScale" },
  { icon: Shield, name: "SecureNet" },
  { icon: Globe, name: "GlobalReach" },
  { icon: Star, name: "StarLaunch" },
];

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getMotion, getMotionServer);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion) return;

    // Wait a frame so the DOM is measured
    requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;
      tweenRef.current = gsap.to(track, {
        x: -halfWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [reducedMotion]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-12 border-y border-white/5 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by innovative teams
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative flex w-full flex-nowrap overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={trackRef} className="flex items-center space-x-16 shrink-0">
          {allLogos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 group cursor-pointer shrink-0"
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-xl font-bold font-syne text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
