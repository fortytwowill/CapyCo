"use client";

import { Check } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { GsapReveal } from "@/components/shared/GsapReveal";

/**
 * WhatYouGet — concrete deliverables list.
 * Motion: GSAP scroll reveal (same system as Services / Why).
 */
export function WhatYouGet() {
  const { title, subtitle, items } = siteContent.whatYouGet;

  return (
    <section
      id="what-you-get"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 50% at 50% 100%, rgba(0,212,170,0.06) 0%, transparent 70%), #0a0a0f",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <GsapReveal className="text-center mb-16 max-w-2xl mx-auto" stagger={0.1}>
          <h2
            data-reveal
            className="text-4xl md:text-5xl font-bold font-syne text-foreground mb-6"
          >
            {title}
          </h2>
          <p data-reveal className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </GsapReveal>

        <GsapReveal
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          stagger={0.08}
          y={24}
          scaleFrom={0.98}
          start="top 80%"
        >
          {items.map((item) => (
            <div
              key={item.title}
              data-reveal
              role="listitem"
              className="relative flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-colors"
            >
              <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary/10 text-secondary mt-0.5">
                <Check className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold font-syne text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </GsapReveal>
      </div>
    </section>
  );
}
