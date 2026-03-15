"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
];

const productItems = [
    { name: "iCTRL", href: "https://ictrl.app", description: "Warehouse management" },
    { name: "More soon...", href: null, description: "Stay tuned for updates" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setProductsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setProductsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setProductsOpen(false), 150);
    };

    return (
        <>
            <header
                className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-5xl md:top-6 ${isScrolled
                        ? "px-6 py-3 bg-white/70 backdrop-blur-md shadow-[0_4px_24px_rgba(27,42,74,0.06)] rounded-full border border-border/50"
                        : "px-6 py-4 bg-transparent"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <Image
                            src="/images/capyco-icon.png"
                            alt="CapyCo Capybara"
                            width={32}
                            height={32}
                            className="object-contain rounded-full"
                        />
                        <span className="font-outfit font-bold text-xl md:text-2xl text-foreground tracking-tight">
                            CapyCo
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) =>
                                link.hasDropdown ? (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        ref={dropdownRef}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <button
                                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                                            onClick={() => setProductsOpen(!productsOpen)}
                                        >
                                            {link.name}
                                            <ChevronDown
                                                size={14}
                                                className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {productsOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-lg overflow-hidden"
                                                >
                                                    <div className="py-2">
                                                        {productItems.map((item) =>
                                                            item.href ? (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="block px-5 py-3 hover:bg-primary/5 transition-colors group"
                                                                    onClick={() => setProductsOpen(false)}
                                                                >
                                                                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                                                        {item.name}
                                                                    </span>
                                                                    <p className="text-xs text-muted-foreground mt-0.5">
                                                                        {item.description}
                                                                    </p>
                                                                </a>
                                                            ) : (
                                                                <div
                                                                    key={item.name}
                                                                    className="block px-5 py-3 cursor-default"
                                                                >
                                                                    <span className="text-sm font-medium text-muted-foreground/60">
                                                                        {item.name}
                                                                    </span>
                                                                    <p className="text-xs text-muted-foreground/40 mt-0.5">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            )}
                        </div>

                        <Link
                            href="#contact"
                            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden flex flex-col pt-24 px-6"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) =>
                                link.hasDropdown ? (
                                    <div key={link.name} className="space-y-3">
                                        <button
                                            className="text-xl font-outfit font-semibold text-foreground flex items-center justify-center gap-2 mx-auto"
                                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                        >
                                            {link.name}
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {mobileProductsOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="bg-card/50 rounded-2xl border border-border/50 py-2 mx-4">
                                                        {productItems.map((item) =>
                                                            item.href ? (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="block py-3 px-5 text-base font-medium text-foreground hover:text-primary transition-colors"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            ) : (
                                                                <div
                                                                    key={item.name}
                                                                    className="block py-3 px-5 text-base font-medium text-muted-foreground/50 cursor-default"
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-xl font-outfit font-semibold text-foreground py-3"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            )}
                            <div className="mt-8">
                                <Link
                                    href="#contact"
                                    className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg w-full text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
