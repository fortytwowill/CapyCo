"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, Server, Database, Lock } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { useLandingGsap } from "@/hooks/useLandingGsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

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
  } = siteContent.hero;
  const words = headlineWords(headline);
  const reducedMotion = usePrefersReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLandingGsap(
    ({ gsap, ScrollTrigger, reduced }) => {
      const section = sectionRef.current;
      const content = contentRef.current;
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
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-background"
      suppressHydrationWarning
    >
      {/* Technical Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div
        ref={contentRef}
        className="container px-4 md:px-6 z-10 mx-auto max-w-6xl text-center flex flex-col items-center relative will-change-transform"
      >
        {/* Trust Pills - Top */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {trustPills.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center rounded-sm border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono font-medium text-primary uppercase tracking-wider"
            >
              {pill.label}
            </span>
          ))}
        </div>

        <h1 className="font-syne text-4xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tighter mb-8 max-w-5xl text-foreground">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 font-mono">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href={primaryCta.href}
            className="px-8 py-4 rounded-sm bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors flex items-center justify-center group cursor-pointer border border-primary"
          >
            {primaryCta.label}
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={secondaryCta.href}
            className="px-8 py-4 rounded-sm border border-border text-foreground font-medium text-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            {secondaryCta.label}
          </Link>
        </div>

        {/* Social Proof / Systems Built */}
        {socialProof?.products && socialProof.products.length > 0 && (
          <div
            id="products"
            className="mb-12 w-full max-w-5xl scroll-mt-28"
            aria-label={socialProof.label}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center font-mono">
              {socialProof.label}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialProof.products.map((product) => (
                <div
                  key={product.name}
                  className="group relative flex flex-col items-start gap-4 rounded-sm border border-border bg-card p-6 text-left hover:border-primary/40 transition-colors"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary">
                    {product.name === "iCTRL" ? <Database className="w-5 h-5" /> : 
                     product.name === "Grapplr" ? <Server className="w-5 h-5" /> : 
                     <Lock className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-foreground leading-snug mb-2">
                      {product.name}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary font-mono text-xs uppercase tracking-wider hover:underline mt-2"
                  >
                    {product.ctaLabel}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
