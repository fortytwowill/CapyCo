// Site content for CapyCo landing page
// Edit this file to update copy without touching component code

export const siteContent = {
  // Brand block — agency-level identity strings used by metadata, manifest,
  // robots.txt, and any surface that needs a canonical "who we are" line.
  // Outcome-led; no "vibe coding" / "wild ideas" / "digital magic" jargon
  // (those are founder-Instagram-speak, not buyer-Google-search-speak).
  brand: {
    shortName: "CapyCo",
    fullName: "CapyCo — Capybara Corporation",
    // Outcome-led one-liner. Matches the H1 tone ("We build, launch, and grow
    // your product."). Used as the PWA name, OG/twitter title suffix, and
    // anywhere else the agency name appears standalone.
    pwaName: "CapyCo — Product Studio",
    description:
      "We build, launch, and grow software products. A product studio founded by Brazilians in Calgary, Canada.",
  },

  // Navigation
  nav: {
    logo: "CapyCo",
    items: [
      { label: "Home", href: "#hero" },
      { label: "Products", href: "#products" }, // hero social-proof strip
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Get Started"
  },

  // Hero Section
  hero: {
    headline: "We build, launch, and grow your product.",
    subtext: "A product studio for ambitious founders. We turn your idea into a working product in 8–12 weeks — design, engineering, and growth under one roof.",
    primaryCta: {
      label: "Start Your Project",
      href: "#contact"
    },
    secondaryCta: {
      label: "Explore Services",
      href: "#services"
    },
    // New: outcome-led social proof strip in the hero. "We've shipped" is
    // the agency's single best asset; surface real products where buyers
    // can see them. Add/remove entries as the product portfolio changes.
    socialProof: {
      label: "We've shipped",
      products: [
        {
          name: "Grapplr",
          tagline: "Find a BJJ training partner in your city in under 60 seconds.",
          href: "https://grapplr.co",
          ctaLabel: "Try it live"
        },
        {
          name: "iCTRL",
          tagline: "Real-time inventory across every warehouse, every location, every shift.",
          href: "https://ictrl.app",
          ctaLabel: "See it in action"
        }
      ]
    },
    trustPills: [
      { icon: "Check", label: "SaaS Products" },
      { icon: "Check", label: "Marketing" },
      { icon: "Check", label: "Dev Services" }
    ],
    mascotAlt: "CapyCo mascot - a nerdy capybara coding on a laptop"
  },

  // Services Section
  services: {
    title: "What We Do",
    subtitle: "From concept to launch, we've got you covered",
    items: [
      {
        icon: "Monitor",
        title: "SaaS Products",
        description: "Ready-to-use apps with subscription plans that solve real problems.",
        cta: "View Products",
        href: "#products"
      },
      {
        icon: "Megaphone",
        title: "Marketing Packages",
        description: "SEO, paid ads, social media, and content strategy that drives growth.",
        cta: "View Services",
        href: "#services"
      },
      {
        icon: "Wrench",
        title: "Custom Development",
        description: "Bespoke web & mobile apps built with modern tech and clean code.",
        cta: "Start a Project",
        href: "#contact"
      }
    ]
  },

  // What You'll Get Section (neoomni-style concrete outcomes list)
  whatYouGet: {
    title: "What you’ll get",
    subtitle: "Concrete deliverables. No vague promises.",
    items: [
      {
        title: "A shipped MVP in 8–12 weeks",
        description: "Design, build, and deploy a working product you can put in front of users — not a slide deck."
      },
      {
        title: "A codebase your team can own",
        description: "Modern, documented, type-safe. We hand it over with the keys — no vendor lock-in, no mystery services."
      },
      {
        title: "Marketing that ships with the product",
        description: "Landing page, SEO, analytics, and a launch plan — baked in from day one, not bolted on at the end."
      },
      {
        title: "Weekly demos, not monthly status reports",
        description: "Loom walkthroughs every Friday. You always know what shipped, what’s next, and what’s blocking."
      },
      {
        title: "A product, not a project",
        description: "We think like founders: retention, pricing, onboarding, growth loops. We build things people pay for."
      },
      {
        title: "One team, design through launch",
        description: "No handoffs between a designer, a dev shop, and a marketing agency. One team, one Slack channel, one bill."
      }
    ]
  },

  // Why CapyCo Section
  whyUs: {
    title: "Why CapyCo?",
    subtitle: "The perfect blend of creativity and technical excellence",
    features: [
      {
        icon: "Rocket",
        title: "Ship Fast, Stay Chill",
        description: "Agile workflows without the stress. No crunch, no burnout — just consistent progress and transparent communication.",
        highlight: "Zero missed deadlines"
      },
      {
        icon: "TrendingUp",
        title: "Growth-Driven",
        description: "Marketing strategy baked into every pixel. We don’t just build products; we build products that grow.",
        highlight: "Data-informed design"
      },
      {
        icon: "Zap",
        title: "AI-Assisted Development",
        description: "We use cutting-edge AI tools to ship faster without sacrificing quality. Your speed, our craft.",
        highlight: "2x faster delivery"
      },
      {
        icon: "Globe",
        title: "Brazilian Warmth, Canadian Quality",
        description: "Best of both worlds. The creativity and passion of Brazil combined with the reliability and precision of Canada.",
        highlight: "🇧🇷 🇨🇦"
      }
    ]
  },

  // Stats Section — honest numbers only (no vanity inflation).
  // Live products = Grapplr + iCTRL. Weeks = typical MVP range from WhatYouGet.
  // Countries = Brazil founders + Canada HQ. One studio / one team.
  stats: {
    items: [
      { value: 2, suffix: "", label: "Live Products" },
      { value: 8, suffix: "–12", label: "Weeks to MVP" },
      { value: 2, suffix: "", label: "Countries" },
      { value: 1, suffix: "", label: "Product Studio" },
    ]
  },

  // CTA Banner
  ctaBanner: {
    title: "Ready to Build Something Amazing?",
    subtitle: "Let's turn your idea into a vibe.",
    button: "Start Your Project",
    href: "#contact"
  },

  // Contact Section
  contact: {
    title: "Get in Touch",
    subtitle: "Have a project in mind? We'd love to hear about it.",
    info: {
      // Canonical HQ form. Used in the Contact section.
      email: "contact@capyco.ca",
      location: "Calgary, Canada 🇨🇦",
      availability: "Usually responds within 24 hours"
    },
    form: {
      name: {
        label: "Name",
        placeholder: "Your name",
        required: true
      },
      email: {
        label: "Email",
        placeholder: "you@example.com",
        required: true
      },
      company: {
        label: "Company (Optional)",
        placeholder: "Your company",
        required: false
      },
      message: {
        label: "Message",
        placeholder: "Tell us about your project...",
        required: true
      },
      submit: "Send Message",
      submitting: "Sending...",
      success: "Message sent! We'll get back to you soon.",
      error: "Something went wrong. Please try again."
    }
  },

  // Footer
  footer: {
    // Outcome-led description. Used in the footer masthead. Matches the H1
    // tone ("We build, launch, and grow your product."). No "vibe coding" /
    // "wild ideas" / "digital magic" framing — that was playful but unfocused.
    description:
      "We build, launch, and grow software products. A product studio founded by Brazilians in Calgary, Canada.",
    // Tagline shown in the bottom bar. No Brazil/Canada flags (per
    // 2026-07-12 user decision — flags implied a PT/EN toggle that
    // doesn't exist; the flags were removed rather than building a toggle).
    tagline: "Made with a lot of Brazilian ☕ in Calgary, Canada.",
    copyright: `© ${new Date().getFullYear()} Capybara Corporation. All rights reserved.`,
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/#about" },
          { label: "Contact", href: "/#contact" },
          { label: "Privacy Policy", href: "/privacy" },
        ]
      },
      {
        title: "Products",
        links: [
          { label: "Grapplr", href: "https://grapplr.co" },
          { label: "iCTRL", href: "https://ictrl.app" },
        ]
      },
      {
        title: "Services",
        links: [
          { label: "Development", href: "/#services" },
          { label: "Marketing", href: "/#services" },
          { label: "Consulting", href: "/#contact" },
        ]
      },
      {
        title: "Connect",
        // Only verified handles. Add LinkedIn/IG/X when real profiles exist.
        socials: [
          {
            label: "GitHub",
            href: "https://github.com/fortytwowill",
            icon: "Github",
          },
        ]
      }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      // No /terms page yet — omit rather than ship href="#"
    ]
  },

  // Trusted By — REMOVED. The previous client-logo wall used placeholder
  // names (BrewTech, HexaData, ZapScale, SecureNet, GlobalReach, StarLaunch).
  // The Marquee component is no longer rendered; when real client logos are
  // available, reintroduce this content and a Marquee consumer.
  trustedBy: {
    show: false,
    title: "Trusted by innovative teams",
    logos: [
      // Add logo paths here when available
    ]
  },

  // Testimonials (placeholder - hidden until content ready)
  testimonials: {
    show: false, // Set to true when testimonials are ready
    title: "What our clients say",
    items: [
      // Add testimonials here when available
    ]
  },

  // SEO
  seo: {
    title: "CapyCo | We build, launch, and grow your product",
    // Outcome-led meta description. Matches the H1 tone. Mentions Calgary
    // (the HQ city) and the Brazilian-founded-in-Canada angle without
    // reverting to "vibe coding" / "wild ideas into digital magic" framing.
    description:
      "CapyCo is a product studio in Calgary. We design, build, and market software people actually use — see Grapplr, our BJJ partner-finder app.",
    // Buyer-Google-search-speak. Removed: "vibe coding", "vibe-first coding"
    // (jargon nobody searches). Added: "Calgary" (HQ city, helps local SEO).
    keywords: [
      "product studio",
      "MVP development agency",
      "SaaS development",
      "startup development agency",
      "app development",
      "Calgary",
      "web development",
      "marketing agency",
      "digital marketing",
      "custom development",
      "BJJ training partner app"
    ],
    ogImage: "/images/og-image.png",
    twitterHandle: "@capyco"
  }
} as const;

// Type export for TypeScript support
export type SiteContent = typeof siteContent;
