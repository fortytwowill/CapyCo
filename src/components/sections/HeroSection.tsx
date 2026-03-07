"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-background">
            {/* Ambient background glow centered behind mascot */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full sm:w-[800px] sm:h-[800px] pointer-events-none" />
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 z-10 mx-auto max-w-6xl text-center flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Now taking new clients for Q3 2026
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tight text-foreground leading-[1.1]">
                        Build. Ship. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Grow.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We're a vibe-first coding & marketing agency that turns wild ideas into digital magic.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg w-full sm:w-auto hover:scale-105 hover:shadow-[0_0_30px_rgba(212,149,43,0.4)] transition-all duration-300 flex items-center justify-center group"
                        >
                            Start Your Project
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 rounded-full border-2 border-foreground/10 text-foreground font-medium text-lg w-full sm:w-auto hover:bg-foreground/5 transition-colors duration-300"
                        >
                            Explore Services
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-sm font-medium text-muted-foreground">
                        <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> SaaS Products</span>
                        <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Marketing</span>
                        <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Dev Services</span>
                    </div>
                </motion.div>

                {/* Mascot Image Block - Centered below text */}
                <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative w-full max-w-[600px] mt-16 md:mt-24 mx-auto"
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative aspect-square md:aspect-[4/3] w-full"
                    >
                        {/* The mascot is visually placed here. For best results, use an image with transparency. */}
                        <Image
                            src="/images/capyco-mascot.png"
                            alt="CapyCo Mascot Developer"
                            fill
                            priority
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
