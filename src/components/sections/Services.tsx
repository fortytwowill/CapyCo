"use client";

import { Database, Server, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { siteContent } from "@/content/site-content";

const serviceIcons: Record<string, typeof Database> = {
  Database,
  Server,
  Workflow,
};

export function Services() {
  const { title, subtitle, items } = siteContent.services;

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(245,166,35,0.06) 0%, transparent 70%), #111118",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <GsapReveal className="text-center mb-16 max-w-2xl mx-auto" stagger={0.12}>
          <h2 data-reveal className="text-4xl md:text-5xl font-bold font-syne text-foreground mb-6">
            {title}
          </h2>
          <p data-reveal className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </GsapReveal>

        <GsapReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          stagger={0.12}
          y={28}
          scaleFrom={0.98}
          start="top 80%"
        >
          {items.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={service.title}
                data-reveal
                className="relative p-8 rounded-2xl bg-card border border-border group hover:border-primary/20 transition-colors duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-2xl font-bold font-syne text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mt-auto"
                >
                  {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </GsapReveal>
      </div>
    </section>
  );
}

