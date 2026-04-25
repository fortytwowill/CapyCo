"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-[500px] mt-16 md:mt-20 mx-auto"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,166,35,0.2),transparent_70%)] scale-150 pointer-events-none" />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
