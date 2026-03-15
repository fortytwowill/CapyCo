"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "Working with CapyCo has been a breeze. They delivered our MVP in record time and the code quality was exceptional. The 'vibe' is real.",
        author: "Sarah Jenkins",
        role: "Founder & CEO, TechFlow",
        avatar: "SJ",
    },
    {
        id: 2,
        content: "Our online presence completely transformed. They didn't just build a website; they crafted an experience that our users actually love.",
        author: "Miguel Torres",
        role: "Marketing Director, Bloom",
        avatar: "MT",
    },
    {
        id: 3,
        content: "Finally, an agency that understands both beautiful design and robust architecture. Highly recommend the CapyCo team for any serious project.",
        author: "Elena Rossi",
        role: "Product Manager, Innovate AI",
        avatar: "ER",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <section className="py-24 bg-card relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-outfit text-foreground mb-6"
                    >
                        Don't just take our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">word for it.</span>
                    </motion.h2>
                </div>

                <div className="relative h-[300px] md:h-[250px] w-full flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full px-4 md:px-12"
                        >
                            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 text-center relative max-w-3xl mx-auto">
                                <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 text-primary/10 -z-10" />

                                <p className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed mb-8">
                                    "{testimonials[currentIndex].content}"
                                </p>

                                <div className="flex flex-col items-center justify-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-outfit font-bold text-lg">
                                        {testimonials[currentIndex].avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground font-outfit">{testimonials[currentIndex].author}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm z-20"
                        onClick={() => paginate(-1)}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm z-20"
                        onClick={() => paginate(1)}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/30"
                                }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
