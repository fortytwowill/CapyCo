import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Register GSAP plugins once (SSR-safe). */
export function registerGsap() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

if (typeof window !== "undefined") {
  registerGsap();
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Refresh ScrollTrigger after fonts load to fix trigger positions. */
export function refreshOnFontsReady() {
  if (typeof document === "undefined") return;
  document.fonts.ready.then(() => {
    registerGsap();
    ScrollTrigger.refresh();
  });
}

/** Kill ScrollTriggers, optionally scoped to a root element. */
export function killScrollTriggers(scope?: HTMLElement | string) {
  if (typeof window === "undefined") return;
  ScrollTrigger.getAll().forEach((t) => {
    if (!scope) {
      t.kill();
      return;
    }
    const trigger = t.trigger;
    if (!(trigger instanceof Element)) {
      t.kill();
      return;
    }
    if (typeof scope === "string") {
      if (trigger.closest(scope)) t.kill();
    } else if (scope.contains(trigger) || scope === trigger) {
      t.kill();
    }
  });
}

export { gsap, ScrollTrigger };
