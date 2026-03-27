"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-10 md:p-16 overflow-hidden text-center border border-white/10"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(245,166,35,0.15), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(0,212,170,0.1), transparent 60%), #111118",
          }}
        >
          {/* Glass blur blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-syne text-foreground leading-tight">
              Ready to build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">
                amazing?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground">
              Let&apos;s turn your idea into a vibe. Drop us a message and
              we&apos;ll get back to you faster than a capybara jumps into a hot
              spring.
            </p>

            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground bg-primary rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] transition-all duration-300"
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
