"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const mascotImages = [
  "mascot_1.png",
  "mascot_2.png",
  "mascot_3.png",
  "mascot_4.png",
  "mascot_5.png",
  "mascot_6.png",
  "mascot_7.png",
  "mascot_8.png",
  "mascot_9.png",
  "mascot_10.png",
] as const;

function getNextMascotImage(): string {
  const lastIndex = parseInt(localStorage.getItem("mascotIdx") || "-1", 10);
  const nextIndex = Number.isNaN(lastIndex)
    ? 0
    : (lastIndex + 1) % mascotImages.length;

  localStorage.setItem("mascotIdx", nextIndex.toString());
  return mascotImages[nextIndex];
}

export function HeroMascot() {
  const [mascotImage] = useState<string>(() => getNextMascotImage());

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
        className="relative aspect-square md:aspect-[4/3] w-full"
      >
        <Image
          key={mascotImage}
          src={`/images/mascots/${mascotImage}`}
          alt="CapyCo mascot"
          fill
          priority
          className="object-contain drop-shadow-[0_0_60px_rgba(245,166,35,0.3)]"
        />
      </motion.div>
    </motion.div>
  );
}
