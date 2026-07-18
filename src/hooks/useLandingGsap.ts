"use client";

import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  ScrollTrigger,
} from "@/lib/gsap-utils";

registerGsap();

type LandingGsapCtx = {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  reduced: boolean;
};

/**
 * Scoped GSAP effect with automatic cleanup (via @gsap/react).
 * Pass a ref to limit selectors / cleanup to a component root.
 */
export function useLandingGsap(
  effect: (ctx: LandingGsapCtx) => void | (() => void),
  scope: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
) {
  useGSAP(
    () => {
      registerGsap();
      const reduced = prefersReducedMotion();
      return effect({ gsap, ScrollTrigger, reduced });
    },
    { scope, dependencies: deps },
  );
}
