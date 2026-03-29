"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, TrendingUp, Zap, type LucideIcon } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { stagger, staggerItem } from "@/lib/animations";

const featureIcons: Record<string, LucideIcon> = {
  Zap,
  Rocket,
  TrendingUp,
  Globe,
};

export function WhyCapyCo() {
  const { title, subtitle, features } = siteContent.whyUs;
  const highlightText = "CapyCo?";
  const titlePrefix = title.endsWith(highlightText)
    ? title.slice(0, -highlightText.length)
    : title;

  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      {/* Capybara watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[url('/images/capyco-icon.png')] bg-contain bg-center bg-no-repeat" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-foreground mb-6"
          >
            {titlePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              {highlightText}
            </span>
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="relative p-8 rounded-2xl bg-card border border-border group hover:border-primary/20 transition-colors duration-300"
              >
                {/* Large faded number */}
                <span className="absolute top-4 right-6 text-7xl md:text-8xl font-black font-syne text-primary/[0.06] group-hover:text-primary/[0.1] transition-colors duration-500 select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-syne text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
