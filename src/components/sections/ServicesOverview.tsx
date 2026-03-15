"use client";

import { motion, type Variants } from "framer-motion";
import { Terminal, Megaphone, Wrench, ArrowRight } from "lucide-react";

export function ServicesOverview() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const services = [
        {
            title: "SaaS Products",
            description: "Ready-to-use applications to turbocharge your workflow. Subscribe and scale instantly.",
            icon: Terminal,
            color: "bg-primary/10 text-primary",
            borderColor: "group-hover:border-primary",
            features: ["Analytics Suite", "VibeBuilder CRM", "Social Booster"],
        },
        {
            title: "Marketing Packages",
            description: "Growth-driven campaigns designed to make noise. From SEO to viral social content.",
            icon: Megaphone,
            color: "bg-accent/10 text-accent",
            borderColor: "group-hover:border-accent",
            features: ["Performance Ads", "SEO Strategy", "Content Creation"],
        },
        {
            title: "Custom Development",
            description: "Bespoke web and mobile applications coded with precision and a lot of personality.",
            icon: Wrench,
            color: "bg-secondary/10 text-secondary",
            borderColor: "group-hover:border-secondary",
            features: ["Next.js & React", "Mobile Apps", "API Integration"],
        },
    ];

    return (
        <section id="services" className="py-24 bg-card">
            <div className="container mx-auto px-4 max-w-6xl">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-outfit text-foreground mb-6"
                    >
                        Digital magic, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">delivered.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Whether you need a ready-made SaaS tool or a custom-built solution, our team of tech-savvy capybaras has you covered.
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
                                className={`group relative p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer ${service.borderColor}`}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="w-32 h-32" />
                                </div>

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold font-outfit text-foreground mb-3">{service.title}</h3>
                                <p className="text-muted-foreground flex-grow mb-8">{service.description}</p>

                                <ul className="mb-8 space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-border mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#" className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-auto">
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
