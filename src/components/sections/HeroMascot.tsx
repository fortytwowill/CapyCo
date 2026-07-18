"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function HeroMascot() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
      className="relative w-full max-w-[500px] mt-16 md:mt-20 mx-auto z-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,166,35,0.2),transparent_70%)] scale-150 pointer-events-none" />
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative aspect-[3/2] md:aspect-[4/3] w-full"
      >
        <Image
          src="/images/new-mascot.png"
          alt="CapyCo mascot"
          fill
          priority
          className="object-contain drop-shadow-[0_0_60px_rgba(245,166,35,0.3)]"
        />
      </motion.div>
    </motion.div>
  );
}
