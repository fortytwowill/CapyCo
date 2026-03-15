"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

interface StatItemProps {
    endValue: number;
    suffix: string;
    label: string;
    delay?: number;
}

function StatItem({ endValue, suffix, label, delay = 0 }: StatItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-default"
        >
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-foreground tracking-tighter">
                    <AnimatedCounter
                        end={endValue}
                        duration={2.5}
                        suffix={suffix}
                        delay={delay * 1000}
                        easing="easeOutExpo"
                    />
                </span>
            </div>
            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
                {label}
            </p>
        </motion.div>
    );
}

export function StatsBar() {
    const stats = [
        { value: 50, suffix: "+", label: "Projects Shipped" },
        { value: 20, suffix: "+", label: "Happy Clients" },
        { value: 99, suffix: "%", label: "Uptime Guaranteed" },
        { value: 2, suffix: "", label: "Countries Present" },
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <StatItem
                            key={i}
                            endValue={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={i * 0.1}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
