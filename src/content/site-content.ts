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
    headline: "Think. Create. Grow.",
    subtext: "We're a vibe coding & marketing agency that turns wild ideas into digital magic.",
    primaryCta: {
      label: "Get Started",
      href: "#contact"
    },
    secondaryCta: {
      label: "Learn More",
      href: "#services"
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

  // Why CapyCo Section
  whyUs: {
    title: "Why CapyCo?",
    subtitle: "The perfect blend of creativity and technical excellence",
    features: [
      {
        icon: "Zap",
        title: "Vibe Coding",
        description: "AI-assisted development that matches your energy. We use cutting-edge tools to ship faster without sacrificing quality.",
        highlight: "2x faster delivery"
      },
      {
        icon: "Rocket",
        title: "Ship Fast, Stay Chill",
        description: "Agile workflows without the stress. No crunch, no burnout—just consistent progress and transparent communication.",
        highlight: "Zero missed deadlines"
      },
      {
        icon: "TrendingUp",
        title: "Growth-Driven",
        description: "Marketing strategy baked into every pixel. We don't just build products; we build products that grow.",
        highlight: "Data-informed design"
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
          { label: "SaaS Tools", href: "#products" },
          { label: "Templates", href: "#" },
          { label: "Open Source", href: "#" }
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

  // Trusted By (placeholder - hidden until content ready)
  trustedBy: {
    show: false, // Set to true when client logos are ready
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
    title: "Capybara Corporation | Vibe Coding & Marketing Agency",
    description: "Think. Create. Grow. A vibe coding & marketing agency crafting digital magic. Brazilian creativity meets Canadian quality.",
    keywords: ["web development", "marketing agency", "SaaS", "app development", "digital marketing"],
    ogImage: "/images/og-image.png",
    twitterHandle: "@capyco"
  }
} as const;

// Type export for TypeScript support
export type SiteContent = typeof siteContent;
