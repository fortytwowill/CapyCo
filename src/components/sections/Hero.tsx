"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import { wordReveal, wordItem } from "@/lib/animations";

const HeroBlob = dynamic(() => import("@/components/three/HeroBlob"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const HeroMascot = dynamic(
  () => import("@/components/sections/HeroMascot").then((mod) => mod.HeroMascot),
  { ssr: false, loading: () => <div className="relative w-full max-w-[500px] mt-16 md:mt-20 mx-auto" /> }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center"
      suppressHydrationWarning
    >
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(245,166,35,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(0,212,170,0.08) 0%, transparent 60%), #0a0a0f",
        }}
      />

      {/* Three.js blob */}
      <div className="absolute inset-0 opacity-60">
        <HeroBlob />
      </div>

      <div className="container px-4 md:px-6 z-10 mx-auto max-w-6xl text-center flex flex-col items-center relative">
        {/* Availability banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse-gold" />
          Now taking new clients for Q3 2026
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-syne text-6xl md:text-8xl xl:text-9xl font-black leading-none tracking-tighter mb-8"
          variants={wordReveal}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={wordItem}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF6B6B]"
          >
            Think.
          </motion.span>
          <motion.span variants={wordItem} className="block text-foreground">
            Create.
          </motion.span>
          <motion.span
            variants={wordItem}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#F5A623]"
          >
            Grow.
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We&apos;re a vibe coding & marketing agency that turns wild ideas into digital magic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all duration-300 flex items-center justify-center group cursor-pointer"
          >
            Start Your Project
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 rounded-full border border-white/10 text-foreground font-medium text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {["SaaS Products", "Marketing", "Dev Services"].map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm font-medium text-secondary"
            >
              {label}
            </span>
          ))}
        </motion.div>

        <HeroMascot />
      </div>
    </section>
  );
}
