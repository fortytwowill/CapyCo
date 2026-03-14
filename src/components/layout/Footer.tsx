import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card pt-16 pb-8 border-t border-border mt-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src="/images/capyco-icon.png"
                                alt="CapyCo Capybara"
                                width={32}
                                height={32}
                                className="object-contain rounded-full"
                            />
                            <span className="font-outfit font-bold text-xl text-foreground">
                                CapyCo
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            A vibe-first coding & marketing agency crafting digital experiences that turn wild ideas into reality.
                        </p>
                        <div className="flex gap-4 text-muted-foreground">
                            <Link href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-outfit font-semibold text-foreground mb-4">Products</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#products" className="hover:text-primary transition-colors">CapyAnalytics</Link></li>
                            <li><Link href="#products" className="hover:text-primary transition-colors">VibeBuilder SaaS</Link></li>
                            <li><Link href="#products" className="hover:text-primary transition-colors">Social Booster</Link></li>
                            <li><Link href="#products" className="hover:text-primary transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-semibold text-foreground mb-4">Services</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Custom Web Apps</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Performance Marketing</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">SEO & Content</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} CapyCo. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        Made with a lot of Brazilian <span className="text-accent px-1">☕</span> in Canada 🇧🇷🇨🇦
                    </div>
                </div>
            </div>
        </footer>
    );
}
