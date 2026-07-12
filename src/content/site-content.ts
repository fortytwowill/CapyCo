// Site content for CapyCo landing page
// Edit this file to update copy without touching component code

export const siteContent = {
  // Navigation
  nav: {
    logo: "CapyCo",
    items: [
      { label: "Home", href: "#hero" },
      { label: "Products", href: "#products" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Get Started"
  },

  // Hero Section
  hero: {
    headline: "We build, launch, and grow your product.",
    subtext: "CapyCo is a product studio for founders who'd rather ship than spec. We design, build, and market software people actually use — see Grapplr below.",
    primaryCta: {
      label: "Start Your Project",
      href: "#contact"
    },
    secondaryCta: {
      label: "Explore Services",
      href: "#services"
    },
    // New: outcome-led social proof strip in the hero. "We built Grapplr" is
    // the agency’s single best asset; surface it where buyers can see it.
    socialProof: {
      label: "We built",
      product: {
        name: "Grapplr",
        tagline: "Find a BJJ training partner in your city in under 60 seconds.",
        href: "https://grapplr-seven.vercel.app",
        ctaLabel: "Try it live"
      }
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

  // Stats Section
  stats: {
    items: [
      { value: 50, suffix: "+", label: "Projects Delivered" },
      { value: 20, suffix: "+", label: "Happy Clients" },
      { value: 99, suffix: "%", label: "Uptime Guaranteed" },
      { value: 2, suffix: "", label: "Countries" }
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
      email: "hello@capyco.co",
      location: "Canada 🇨🇦",
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
    tagline: "Made with ☕ in Canada",
    copyright: `© ${new Date().getFullYear()} Capybara Corporation. All rights reserved.`,
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Careers", href: "#" },
          { label: "Blog", href: "#" }
        ]
      },
      {
        title: "Products",
        links: [
          { label: "Grapplr", href: "https://grapplr-seven.vercel.app" },
          { label: "iCTRL", href: "https://ictrl.app" }
        ]
      },
      {
        title: "Services",
        links: [
          { label: "Development", href: "#services" },
          { label: "Marketing", href: "#services" },
          { label: "Consulting", href: "#contact" }
        ]
      },
      {
        title: "Connect",
        socials: [
          { label: "GitHub", href: "https://github.com/capyco", icon: "Github" },
          { label: "LinkedIn", href: "https://linkedin.com/company/capyco", icon: "Linkedin" },
          { label: "Instagram", href: "https://instagram.com/capyco", icon: "Instagram" },
          { label: "X", href: "https://x.com/capyco", icon: "Twitter" }
        ]
      }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
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
    description: "CapyCo is a product studio for founders. We design, build, and market software people actually use — see Grapplr, our BJJ partner-finder app.",
    keywords: [
      "MVP development agency",
      "product studio",
      "SaaS development",
      "startup development agency",
      "app development",
      "digital marketing",
      "BJJ training partner app"
    ],
    ogImage: "/images/og-image.png",
    twitterHandle: "@capyco"
  }
} as const;

// Type export for TypeScript support
export type SiteContent = typeof siteContent;
