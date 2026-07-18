"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { wordReveal, wordItem } from "@/lib/animations";
import { siteContent } from "@/content/site-content";
import { useLandingGsap } from "@/hooks/useLandingGsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const HeroBlob = dynamic(() => import("@/components/three/HeroBlob"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const HeroMascot = dynamic(
  () => import("@/components/sections/HeroMascot").then((mod) => mod.HeroMascot),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full max-w-[500px] mt-16 md:mt-20 mx-auto" />
    ),
  },
);

function headlineWords(text: string) {
  return text.split(/\s+/).filter(Boolean);
}

export function Hero() {
  const {
    headline,
    subtext,
    primaryCta,
    secondaryCta,
    socialProof,
    trustPills,
    mascotAlt,
  } = siteContent.hero;
  const words = headlineWords(headline);
  const reducedMotion = usePrefersReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blobWrapRef = useRef<HTMLDivElement>(null);

  useLandingGsap(
    ({ gsap, ScrollTrigger, reduced }) => {
      const section = sectionRef.current;
      const content = contentRef.current;
      const blob = blobWrapRef.current;
      if (!section || !content || reduced) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        tl.to(content, { y: -48, opacity: 0.35, ease: "none" }, 0);
        if (blob) {
          tl.to(blob, { scale: 1.12, opacity: 0.25, ease: "none" }, 0);
        }
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === section) trigger.kill();
        });
      };
    },
    sectionRef,
    [reducedMotion],
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center"
      suppressHydrationWarning
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(245,166,35,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(0,212,170,0.08) 0%, transparent 60%), #0a0a0f",
        }}
      />

      <div
        ref={blobWrapRef}
        className="absolute inset-0 opacity-60 will-change-transform"
      >
        <HeroBlob />
      </div>

      <div
        ref={contentRef}
        className="container px-4 md:px-6 z-10 mx-auto max-w-6xl text-center flex flex-col items-center relative will-change-transform"
      >
        <motion.h1
          className="font-syne text-4xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tighter mb-8 max-w-5xl"
          variants={reducedMotion ? undefined : wordReveal}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
        >
          {words.map((word, i) => {
            const isAccent =
              /^(launch|grow|build|ship|product|grapplr)$/i.test(word) ||
              i === words.length - 1;
            return (
              <motion.span
                key={`${word}-${i}`}
                variants={reducedMotion ? undefined : wordItem}
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

        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.8, duration: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {subtext}
        </motion.p>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 1.0, duration: 0.5 }}
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

        {socialProof?.products && socialProof.products.length > 0 && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reducedMotion ? 0 : 1.15, duration: 0.5 }}
            className="mb-12 w-full max-w-5xl"
            aria-label={socialProof.label}
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 text-center">
              {socialProof.label}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialProof.products.map((product) => (
                <div
                  key={product.name}
                  className="group relative flex flex-col sm:flex-row items-center gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 text-left hover:border-primary/40 transition-colors"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-syne font-black text-lg">
                    {product.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                      <span className="text-primary">{product.name}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        — {product.tagline}
                      </span>
                    </p>
                  </div>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/40 text-primary font-medium text-sm hover:bg-primary/10 hover:border-primary transition-all flex-shrink-0"
                  >
                    {product.ctaLabel}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 1.3, duration: 0.5 }}
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
        <span className="sr-only">{mascotAlt}</span>
      </div>
    </section>
  );
}
