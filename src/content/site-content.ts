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
    // B2B outcome-led one-liner. Used as PWA name, OG/twitter title suffix,
    // and anywhere the company name appears standalone. No jargon.
    pwaName: "CapyCo — Custom SaaS & Automation",
    description:
      "We build customized SaaS and business automations. Fully self-hosted on your infrastructure — you own the database, we build the engine.",
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
    headline: "Custom SaaS & Automation Built for Your Business.",
    subtext: "Tailored software solutions deployed on your private cloud or on-prem servers. You own the data, the database, and the keys — we design, build, and maintain the system that runs your operations.",
    primaryCta: {
      label: "Discuss Your Workflow",
      href: "#contact"
    },
    secondaryCta: {
      label: "See How It Works",
      href: "#services"
    },
    // Proof of capability: real self-hosted systems we've shipped.
    socialProof: {
      label: "Systems we've built",
      products: [
        {
          name: "iCTRL",
          tagline: "Self-hosted inventory management across every warehouse, location, and shift — client-owned PostgreSQL.",
          href: "https://ictrl.app",
          ctaLabel: "View case study"
        },
        {
          name: "Grapplr",
          tagline: "Custom matchmaking platform with dedicated tenancy and isolated data per organisation.",
          href: "https://grapplr.co",
          ctaLabel: "View architecture"
        },
        {
          name: "Fasteppp",
          tagline: "Adaptive diagnostic engine deployed on client-managed infrastructure with full data sovereignty.",
          href: "https://fasteppp.com",
          ctaLabel: "View deployment model"
        }
      ]
    },
    trustPills: [
      { icon: "Check", label: "Self-Hosted SaaS" },
      { icon: "Check", label: "Business Automation" },
      { icon: "Check", label: "Client-Owned Data" }
    ],
    mascotAlt: "CapyCo mascot - a nerdy capybara coding on a laptop"
  },

  // Services Section
  services: {
    title: "What We Build",
    subtitle: "Software tailored to your operations, not forced into a generic multi-tenant box",
    items: [
      {
        icon: "Database",
        title: "Custom SaaS Platforms",
        description: "Purpose-built applications designed around your exact workflows. Your schema, your rules, your upgrade cadence.",
        cta: "Explore Approach",
        href: "#services"
      },
      {
        icon: "Server",
        title: "Self-Hosted Deployment",
        description: "Deployed on your private cloud, VPC, or on-prem hardware. No shared environments, no third-party data access.",
        cta: "Infrastructure Options",
        href: "#contact"
      },
      {
        icon: "Workflow",
        title: "Business Process Automation",
        description: "Replace manual handoffs and spreadsheet chains with reliable, auditable automation that lives inside your stack.",
        cta: "Map Your Workflow",
        href: "#contact"
      }
    ]
  },

  // What You'll Get Section (neoomni-style concrete outcomes list)
  whatYouGet: {
    title: "What you'll get",
    subtitle: "Concrete deliverables. Full ownership. No vendor lock-in.",
    items: [
      {
        title: "A system designed around your operations",
        description: "We map your actual workflows before writing a line of code. The software fits your business, not the other way around."
      },
      {
        title: "100% data ownership",
        description: "Your database, your encryption keys, your backups. We never touch production data unless you explicitly grant access for support."
      },
      {
        title: "Self-hosted from day one",
        description: "Deployed on your AWS/GCP/Azure tenant, your private cloud, or on-prem. No shared SaaS tenancy, no data commingling."
      },
      {
        title: "A codebase your team can maintain",
        description: "Modern, documented, type-safe. Full source handover with runbooks — your internal team can operate it independently."
      },
      {
        title: "Automation that replaces manual work",
        description: "Ingest, transform, route, and report without human intervention. Auditable logs, retry logic, and alerting baked in."
      },
      {
        title: "Ongoing support, not abandonment",
        description: "Maintenance retainers, security patches, and feature extensions available. Or walk away with everything — your call."
      }
    ]
  },

  // Why CapyCo Section
  whyUs: {
    title: "Why CapyCo?",
    subtitle: "Enterprise-grade engineering without the enterprise overhead",
    features: [
      {
        icon: "Shield",
        title: "Data Sovereignty First",
        description: "Your data never leaves your infrastructure. We architect for compliance, isolation, and auditability from the first commit.",
        highlight: "Zero shared tenancy"
      },
      {
        icon: "Settings",
        title: "Built for Your Workflow",
        description: "No forcing your operations into a generic product. We design around your processes, your terminology, your edge cases.",
        highlight: "Domain-driven design"
      },
      {
        icon: "Zap",
        title: "Automation That Actually Ships",
        description: "We don't demo prototypes and disappear. Every automation is production-hardened with error handling, logging, and recovery.",
        highlight: "Production-grade defaults"
      },
      {
        icon: "Lock",
        title: "No Vendor Lock-In",
        description: "Open standards, portable schemas, standard Postgres/Redis/queues. Migrate away anytime — we build for your independence.",
        highlight: "Exit-ready architecture"
      }
    ]
  },

  // Stats Section — honest numbers only (no vanity inflation).
  // Live products = Grapplr + iCTRL + Fasteppp. Weeks = typical MVP range from WhatYouGet.
  // Countries = team members across Brazil, Canada and Italy. One studio / one team.
  stats: {
    items: [
      { value: 3, suffix: "", label: "Self-Hosted Systems Shipped" },
      { value: 100, suffix: "%", label: "Client Data Ownership" },
      { value: 0, suffix: "", label: "Shared Tenancy Deployments" },
      { value: 3, suffix: "", label: "Countries Served" },
    ]
  },

  // CTA Banner
  ctaBanner: {
    title: "Ready to Own Your Software?",
    subtitle: "Tell us about your workflow. We'll show you what self-hosted looks like for your business.",
    button: "Start the Conversation",
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
      "We build customized SaaS and business automations. Fully self-hosted on your infrastructure — you own the database, we build the engine.",
    // Tagline shown in the bottom bar. No country flags (per
    // 2026-07-12 user decision — flags implied a PT/EN toggle that
    // doesn't exist; the flags were removed rather than building a toggle).
    tagline: "Made by tech-savvy capybaras in Canada.",
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
          { label: "Fasteppp", href: "https://fasteppp.com" },
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

  // Testimonials — section removed from page until we have real quotes.
  // Do not re-add placeholder names (Sarah Jenkins / Miguel / Elena were fake).
  testimonials: {
    show: false,
    title: "What our clients say",
    items: [] as readonly {
      readonly content: string;
      readonly author: string;
      readonly role: string;
      readonly avatar: string;
    }[],
  },

  // SEO
  seo: {
    title: "CapyCo | Custom SaaS & Business Automation — Self-Hosted, Client-Owned",
    // B2B meta description. Targets buyers searching for self-hosted alternatives,
    // custom SaaS, and data-sovereign automation. No jargon, no fluff.
    description:
      "CapyCo builds customized SaaS platforms and business process automations deployed on your infrastructure. You own the database, the keys, and the code. Calgary-based, serving businesses globally.",
    keywords: [
      "custom SaaS development",
      "self-hosted software",
      "business automation",
      "data sovereignty",
      "client-owned database",
      "on-premise SaaS",
      "private cloud deployment",
      "workflow automation",
      "bespoke enterprise software",
      "Calgary software development",
      "no vendor lock-in"
    ],
    ogImage: "/images/og-image.png",
    twitterHandle: "@capyco"
  }
} as const;

// Type export for TypeScript support
export type SiteContent = typeof siteContent;
