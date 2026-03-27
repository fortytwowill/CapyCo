import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-primary/20">
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
              <span className="font-syne font-bold text-xl text-foreground">
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
            <h4 className="font-syne font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://ictrl.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">iCTRL</a></li>
              <li><span className="text-muted-foreground/50 cursor-default">More soon...</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/#services" className="hover:text-primary transition-colors">SaaS Products</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Marketing</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Custom Dev</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CapyCo. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with a lot of Brazilian <span className="text-primary px-1">&#9749;</span> in Canada &#127463;&#127479;&#127464;&#127462;
          </div>
        </div>
      </div>
    </footer>
  );
}
