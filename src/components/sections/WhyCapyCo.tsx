"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, TrendingUp, Heart } from "lucide-react";
import { stagger, staggerItem } from "@/lib/animations";

const features = [
  {
    num: "01",
    title: "Vibe Coding",
    description:
      "We believe code should flow safely and smoothly. Our AI-assisted development processes match your energy, ensuring the product we build feels right from the inside out.",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "Ship Fast, Stay Chill",
    description:
      "Agile workflows don't have to mean burnout. We deploy with precision and speed, maintaining a steady, stress-free rhythm that guarantees quality without the chaos.",
    icon: Code2,
  },
  {
    num: "03",
    title: "Growth-Driven Design",
    description:
      "Every pixel we push is backed by strategy. From SEO to conversion rate optimization, our marketing DNA is baked right into the codebase.",
    icon: TrendingUp,
  },
  {
    num: "04",
    title: "Brazilian Warmth, Canadian Quality",
    description:
      "Founded by Brazilians in Canada, we mix tropical creativity and warmth with north-american reliability and quality standards. The best of both worlds.",
    icon: Heart,
  },
];

export function WhyCapyCo() {
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
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              CapyCo?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We&apos;re not your typical corporate agency. We&apos;re a crew of
            passionate builders who actually enjoy what we do, and it shows in
            our work.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.num}
                variants={staggerItem}
                className="relative p-8 rounded-2xl bg-card border border-border group hover:border-primary/20 transition-colors duration-300"
              >
                {/* Large faded number */}
                <span className="absolute top-4 right-6 text-7xl md:text-8xl font-black font-syne text-primary/[0.06] group-hover:text-primary/[0.1] transition-colors duration-500 select-none leading-none">
                  {feature.num}
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
