"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-r from-primary via-accent to-primary/80 rounded-3xl p-10 md:p-16 overflow-hidden text-center shadow-xl border border-primary/20"
                >
                    {/* Abstract background blobs for texture */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white leading-tight">
                            Ready to build something <span className="text-white/80 italic">amazing?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/90">
                            Let's turn your idea into a vibe. Drop us a message and we'll get back to you faster than a capybara jumps into a hot spring.
                        </p>

                        <Link
                            href="#contact"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
