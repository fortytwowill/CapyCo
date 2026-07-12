import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { siteContent } from "@/content/site-content";

// Map the social `icon` strings stored in siteContent.footer to the actual
// Lucide components. Keeping this indirection at the call-site means the
// content store stays free of JSX (and free of "use client" requirements).
const SOCIAL_ICONS = {
  Github,
  Twitter,
  Linkedin,
  Instagram,
} as const;

export function Footer() {
  const { description, tagline, copyright, columns } = siteContent.footer;
  // Resolve the four columns by title so the order can be rearranged in
  // siteContent without breaking the JSX layout.
  const productsColumn = columns.find((c) => c.title === "Products");
  const servicesColumn = columns.find((c) => c.title === "Services");
  const companyColumn = columns.find((c) => c.title === "Company");
  const connectColumn = columns.find((c) => c.title === "Connect");

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/capyco-logo-icon.png"
                alt={`${siteContent.brand.shortName} Capybara`}
                width={32}
                height={32}
                className="object-contain rounded-full"
              />
              <span className="font-syne font-bold text-xl text-foreground">
                {siteContent.brand.shortName}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex gap-4 text-muted-foreground">
              {connectColumn?.socials?.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                if (!Icon) return null;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>

          {productsColumn && (
            <div>
              <h4 className="font-syne font-semibold text-foreground mb-4">
                {productsColumn.title}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {productsColumn.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {servicesColumn && (
            <div>
              <h4 className="font-syne font-semibold text-foreground mb-4">
                {servicesColumn.title}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {servicesColumn.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {companyColumn && (
            <div>
              <h4 className="font-syne font-semibold text-foreground mb-4">
                {companyColumn.title}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {companyColumn.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{copyright}</p>
          <div className="flex items-center gap-1">{tagline}</div>
        </div>
      </div>
    </footer>
  );
}
