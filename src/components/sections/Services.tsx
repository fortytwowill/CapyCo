"use client";

import { motion, type Variants } from "framer-motion";
import { Layers, TrendingUp, Code2 } from "lucide-react";

export function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const services = [
    {
      title: "SaaS Products",
      description:
        "Ready-to-use applications to turbocharge your workflow. Subscribe and scale instantly.",
      icon: Layers,
      features: ["Analytics Suite", "VibeBuilder CRM", "Social Booster"],
    },
    {
      title: "Marketing Packages",
      description:
        "Growth-driven campaigns designed to make noise. From SEO to viral social content.",
      icon: TrendingUp,
      features: ["Performance Ads", "SEO Strategy", "Content Creation"],
    },
    {
      title: "Custom Development",
      description:
        "Bespoke web and mobile applications coded with precision and a lot of personality.",
      icon: Code2,
      features: ["Next.js & React", "Mobile Apps", "API Integration"],
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
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-foreground mb-6"
          >
            Digital magic,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              delivered.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Whether you need a ready-made SaaS tool or a custom-built solution,
            our team of tech-savvy capybaras has you covered.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-card border border-border border-t-2 border-t-primary/60 hover:border-t-primary hover:shadow-[0_0_30px_rgba(245,166,35,0.08)] transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
              >
                {/* Faded background icon */}
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

                <ul className="mb-8 space-y-2">
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
