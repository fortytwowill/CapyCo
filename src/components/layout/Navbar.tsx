"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products", hasDropdown: true },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/#about" },
];

const productItems = [
  { name: "iCTRL", href: "https://ictrl.app", description: "Warehouse management" },
  { name: "More soon...", href: null, description: "Stay tuned for updates" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      } ${isScrolled ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-primary/30 after:to-transparent" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image
            src="/images/capyco-logo-icon.png"
            alt="CapyCo Capybara"
            width={32}
            height={32}
            className="object-contain rounded-full"
          />
          <span className="font-syne font-bold text-xl md:text-2xl text-foreground tracking-tight">
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
                    className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                    />
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#111118]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="py-2">
                          {productItems.map((item) =>
                            item.href ? (
                              <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-5 py-3 hover:bg-white/5 transition-colors group/item"
                                onClick={() => setProductsOpen(false)}
                              >
                                <span className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                                  {item.name}
                                </span>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {item.description}
                                </p>
                              </a>
                            ) : (
                              <div key={item.name} className="block px-5 py-3 cursor-default">
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
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              )
            )}
          </div>

          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Start Project
          </Link>
        </nav>

        {/* Mobile Menu - Sheet Drawer */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="md:hidden z-50 text-foreground p-2">
            <Menu size={24} />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0a0a0f] border-l border-white/5 w-full sm:w-80 p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-2 pt-16 px-6">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="space-y-2">
                    <button
                      className="w-full text-left text-lg font-syne font-semibold text-foreground py-3 flex items-center justify-between"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
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
                          <div className="bg-white/5 rounded-xl border border-white/5 py-2 ml-4">
                            {productItems.map((item) =>
                              item.href ? (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block py-3 px-5 text-base font-medium text-foreground hover:text-primary transition-colors"
                                  onClick={() => setMobileOpen(false)}
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
                    className="text-lg font-syne font-semibold text-foreground py-3 hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="block px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg text-center hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Start Project
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
