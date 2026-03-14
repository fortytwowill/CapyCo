"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, TrendingUp, Heart } from "lucide-react";

export function WhyCapyCo() {
    const features = [
        {
            id: "vibe",
            title: "Vibe Coding",
            description: "We believe code should flow safely and smoothly. Our AI-assisted development processes match your energy, ensuring the product we build feels right from the inside out.",
            icon: Sparkles,
            color: "text-primary",
            bgScale: "bg-primary/5",
        },
        {
            id: "ship",
            title: "Ship Fast, Stay Chill",
            description: "Agile workflows don't have to mean burnout. We deploy with precision and speed, maintaining a steady, stress-free rhythm that guarantees quality without the chaos.",
            icon: Code2,
            color: "text-accent",
            bgScale: "bg-accent/5",
        },
        {
            id: "growth",
            title: "Growth-Driven Design",
            description: "Every pixel we push is backed by strategy. From SEO to conversion rate optimization, our marketing DNA is baked right into the codebase.",
            icon: TrendingUp,
            color: "text-secondary",
            bgScale: "bg-secondary/5",
        },
        {
            id: "warmth",
            title: "Brazilian Warmth, Canadian Quality",
            description: "Founded by Brazilians in Canada, we mix tropical creativity and warmth with north-american reliability and quality standards. The best of both worlds.",
            icon: Heart,
            color: "text-destructive",
            bgScale: "bg-destructive/5",
        },
    ];

    return (
        <section id="about" className="py-24 bg-background overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent blur-3xl rounded-full" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-outfit text-foreground mb-6"
                    >
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">CapyCo?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        We're not your typical corporate agency. We're a crew of passionate builders who actually enjoy what we do, and it shows in our work.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Illustration/Icon Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                                    className="w-full md:w-1/2 flex justify-center"
                                >
                                    <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full ${feature.bgScale} flex items-center justify-center`}>
                                        <div className="absolute inset-0 rounded-full border border-border animate-[spin_10s_linear_infinite]" />
                                        <Icon className={`w-24 h-24 md:w-32 md:h-32 ${feature.color}`} />
                                    </div>
                                </motion.div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                                    className="w-full md:w-1/2 space-y-6 text-center md:text-left"
                                >
                                    <h3 className="text-3xl md:text-4xl font-bold font-outfit text-foreground">{feature.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
