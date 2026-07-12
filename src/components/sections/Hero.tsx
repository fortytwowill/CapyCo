"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { wordReveal, wordItem } from "@/lib/animations";
import { siteContent } from "@/content/site-content";

const HeroBlob = dynamic(() => import("@/components/three/HeroBlob"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const HeroMascot = dynamic(
  () => import("@/components/sections/HeroMascot").then((mod) => mod.HeroMascot),
  { ssr: false, loading: () => <div className="relative w-full max-w-[500px] mt-16 md:mt-20 mx-auto" /> }
);

// Split the hero headline into words for the word-by-word reveal animation.
// We keep the same animation surface (wordReveal / wordItem) so the design
// rhythm is unchanged; we just feed it the new outcome-led headline from
// site-content.
function headlineWords(text: string) {
  return text.split(/\s+/).filter(Boolean);
}

export function Hero() {
  const { headline, subtext, primaryCta, secondaryCta, socialProof, trustPills, mascotAlt } =
    siteContent.hero;
  const words = headlineWords(headline);

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

        {/* Headline — outcome-led, not methodology-led.
            Renders the H1 word-by-word using the existing wordReveal animation
            so the visual rhythm matches the rest of the dark theme. */}
        <motion.h1
          className="font-syne text-4xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tighter mb-8 max-w-5xl"
          variants={wordReveal}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => {
            // Highlight outcome-bearing words in the gradient treatment so
            // the scan-from-the-eyebrow still works on a longer headline.
            const isAccent =
              /^(launch|grow|build|ship|product|grapplr)$/i.test(word) || i === words.length - 1;
            return (
              <motion.span
                key={`${word}-${i}`}
                variants={wordItem}
                className={
                  "inline-block mr-[0.25em] " +
                  (isAccent
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF6B6B]"
                    : "text-foreground")
                }
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href={primaryCta.href}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all duration-300 flex items-center justify-center group cursor-pointer"
          >
            {primaryCta.label}
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={secondaryCta.href}
            className="px-8 py-4 rounded-full border border-white/10 text-foreground font-medium text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            {secondaryCta.label}
          </Link>
        </motion.div>

        {/* Social proof strip — "We built Grapplr"
            This is the single most credible thing the agency can say. Render
            it inline so it lands in the same eye-line as the H1 above. */}
        {socialProof && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
            className="mb-12 w-full max-w-3xl"
            aria-label={`We built ${socialProof.product.name}`}
          >
            <div className="group relative mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 text-left hover:border-primary/40 transition-colors">
              <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-syne font-black text-lg">
                {socialProof.product.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {socialProof.label}
                </p>
                <p className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                  <span className="text-primary">{socialProof.product.name}</span>
                  <span className="text-muted-foreground"> — {socialProof.product.tagline}</span>
                </p>
              </div>
              <a
                href={socialProof.product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-primary/40 text-primary font-medium text-sm hover:bg-primary/10 hover:border-primary transition-all flex-shrink-0"
              >
                {socialProof.product.ctaLabel}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {trustPills.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm font-medium text-secondary"
            >
              {pill.label}
            </span>
          ))}
        </motion.div>

        <HeroMascot />
        {/* Alt text source for screen readers, kept in DOM for SEO */}
        <span className="sr-only">{mascotAlt}</span>
      </div>
    </section>
  );
}
