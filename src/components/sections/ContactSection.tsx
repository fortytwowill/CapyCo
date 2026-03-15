"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { submitContactForm } from "@/app/actions/contact";
import { MapPin, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [submitMessage, setSubmitMessage] = useState("");

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
            website: "", // Honeypot
            loadTime: 0,
        },
    });

    // Once the component mounts on the client, set the loadTime for bot protection
    useEffect(() => {
        setValue("loadTime", Date.now());
    }, [setValue]);

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setSubmitMessage("");

        try {
            // We pass undefined for IP here - in a real app, you might extract IP in Next.js middleware
            // or headers() within the Server Action (available in Next 15+ headers API)
            const response = await submitContactForm(data);

            if (response.success) {
                setSubmitStatus("success");
                setSubmitMessage(response.message);
                reset();
                // Reset load time for next submission
                setValue("loadTime", Date.now());
            } else {
                setSubmitStatus("error");
                setSubmitMessage(response.message);
            }
        } catch {
            setSubmitStatus("error");
            setSubmitMessage("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-card border-t border-border/50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit text-foreground mb-6">
                        Let&apos;s Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Magic</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Whether you have a specific project in mind or just want to vibe over ideas, our inbox is always open.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column: Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div className="bg-background rounded-3xl p-8 border border-border shadow-sm">
                            <h3 className="text-2xl font-bold font-outfit text-foreground mb-6">Contact Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 hover:text-primary transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Email</h4>
                                        <p className="text-muted-foreground">contact@capyco.ca</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 hover:text-primary transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">HQ</h4>
                                        <p className="text-muted-foreground">Calgary, AB, Canada</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 hover:text-primary transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Phone</h4>
                                        <p className="text-muted-foreground">Available upon request</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Soft decorative illustrative element */}
                        <div className="hidden lg:block h-48 rounded-3xl bg-gradient-to-br from-primary/20 via-background to-accent/20 border border-border/50 relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/30 font-outfit font-black text-6xl tracking-tighter opacity-50">
                                {"< >"}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-sm">

                            {submitStatus === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold font-outfit text-foreground">Message Sent!</h3>
                                    <p className="text-lg text-muted-foreground">{submitMessage}</p>
                                    <button
                                        onClick={() => setSubmitStatus("idle")}
                                        className="mt-4 text-primary hover:underline font-medium"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                    {/* Layer 1: Honeypot (Hidden from users) */}
                                    <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                        <label htmlFor="website">Website</label>
                                        <input
                                            type="text"
                                            id="website"
                                            {...register("website")}
                                            tabIndex={-1}
                                            autoComplete="one-time-code"
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                {...register("name")}
                                                suppressHydrationWarning
                                                className={`w-full px-4 py-3 rounded-xl bg-card border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${errors.name ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,149,43,0.15)]'}`}
                                            />
                                            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                {...register("email")}
                                                suppressHydrationWarning
                                                className={`w-full px-4 py-3 rounded-xl bg-card border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${errors.email ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,149,43,0.15)]'}`}
                                            />
                                            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-semibold text-foreground">Company Name <span className="text-muted-foreground font-normal">(Optional)</span></label>
                                        <input
                                            id="company"
                                            type="text"
                                            placeholder="Acme Corp"
                                            {...register("company")}
                                            suppressHydrationWarning
                                            className="w-full px-4 py-3 rounded-xl bg-card border-2 border-border focus:border-primary focus:outline-none focus:ring-0 focus:shadow-[0_0_0_3px_rgba(212,149,43,0.15)] transition-all duration-200"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-foreground">Project Details *</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell us about your wild idea..."
                                            {...register("message")}
                                            suppressHydrationWarning
                                            className={`w-full px-4 py-3 rounded-xl bg-card border-2 transition-all duration-200 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_3px_rgba(212,149,43,0.15)] resize-none ${errors.message ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'}`}
                                        />
                                        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                                    </div>

                                    {submitStatus === "error" && (
                                        <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex items-center gap-3 text-sm">
                                            <AlertCircle size={18} />
                                            <p>{submitMessage}</p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                    <p className="text-xs text-center text-muted-foreground font-medium">
                                        Protected by Honeypot Magic 🍯 (No CAPTCHA required)
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
