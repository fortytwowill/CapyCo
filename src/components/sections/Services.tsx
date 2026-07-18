"use client";

import { Layers, TrendingUp, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GsapReveal } from "@/components/shared/GsapReveal";

export function Services() {
  const services = [
    {
      title: "SaaS Products",
      description:
        "Ready-to-use applications to turbocharge your workflow. Subscribe and scale instantly.",
      icon: Layers,
      features: ["Analytics Suite", "VibeBuilder CRM", "Social Booster"],
      href: "#products",
    },
    {
      title: "Marketing Packages",
      description:
        "Growth-driven campaigns designed to make noise. From SEO to viral social content.",
      icon: TrendingUp,
      features: ["Performance Ads", "SEO Strategy", "Content Creation"],
      href: "#services",
    },
    {
      title: "Custom Development",
      description:
        "Bespoke web and mobile applications coded with precision and a lot of personality.",
      icon: Code2,
      features: ["Next.js & React", "Mobile Apps", "API Integration"],
      href: "#contact",
    },
  ];

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
          <h2
            data-reveal
            className="text-4xl md:text-5xl font-bold font-syne text-foreground mb-6"
          >
            Digital magic,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              delivered.
            </span>
          </h2>
          <p data-reveal className="text-lg text-muted-foreground">
            Whether you need a ready-made SaaS tool or a custom-built solution,
            our team of tech-savvy capybaras has you covered.
          </p>
        </GsapReveal>

        <GsapReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          stagger={0.12}
          y={32}
          scaleFrom={0.98}
          start="top 80%"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-reveal
                className="group relative p-8 rounded-2xl bg-card border border-border border-t-2 border-t-primary/60 hover:border-t-primary hover:shadow-[0_0_30px_rgba(245,166,35,0.08)] hover:scale-[1.02] transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                  <Icon className="w-32 h-32 text-primary" />
                </div>

                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold font-syne text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground flex-grow mb-8">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm font-medium text-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </GsapReveal>
      </div>
    </section>
  );
}
