"use client";

import { motion } from "framer-motion";
import { Coffee, Hexagon, Zap, Shield, Globe, Star } from "lucide-react";

export function TrustedBy() {
    const logos = [
        { icon: Coffee, name: "BrewTech" },
        { icon: Hexagon, name: "HexaData" },
        { icon: Zap, name: "ZapScale" },
        { icon: Shield, name: "SecureNet" },
        { icon: Globe, name: "GlobalReach" },
        { icon: Star, name: "StarLaunch" },
        // Duplicate for seamless loop
        { icon: Coffee, name: "BrewTech" },
        { icon: Hexagon, name: "HexaData" },
        { icon: Zap, name: "ZapScale" },
        { icon: Shield, name: "SecureNet" },
        { icon: Globe, name: "GlobalReach" },
        { icon: Star, name: "StarLaunch" },
    ];

    return (
        <section className="py-12 border-y border-border/50 bg-background/50 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Trusted by innovative teams
                </p>
            </div>

            <div className="relative flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <motion.div
                    className="flex items-center space-x-16"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {logos.map((logo, index) => {
                        const Icon = logo.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2 group cursor-pointer"
                            >
                                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                <span className="text-xl font-bold font-outfit text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {logo.name}
                                </span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
