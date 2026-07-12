"use client";

import { motion } from "framer-motion";
import { Check, type LucideIcon } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { stagger, staggerItem } from "@/lib/animations";

/**
 * WhatYouGet — the "concrete deliverables" bullet list stolen from
 * neoomni.com. CapyCo previously had no equivalent: a buyer could read the
 * site and still not know what their life would look like after hiring us.
 *
 * Renders 5–6 scannable items in a 2-column grid on desktop, 1 column on
 * mobile. Each item is a short title + 1–2 line description. No marketing
 * fluff, no vague "excellence" claims.
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
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-foreground mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
        >
          {items.map((item) => (
            <motion.li
              key={item.title}
              variants={staggerItem}
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
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

// Re-export LucideIcon so consumers that import this module don't get an
// unused-import lint error if they reference the type later.
export type { LucideIcon };
