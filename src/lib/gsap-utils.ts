import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once (guarded for SSR)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Refresh ScrollTrigger after fonts load to fix trigger positions
export function refreshOnFontsReady() {
  if (typeof document !== "undefined") {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }
}

export { gsap, ScrollTrigger };
