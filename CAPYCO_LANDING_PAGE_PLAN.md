# 🦫 CapyCo — Landing Page Implementation Plan

> **Capybara Corporation** | Vibe Coding & Marketing Agency
> Founded by two Brazilians living in Canada 🇧🇷🇨🇦

---

## Table of Contents
1. [Brand Overview](#brand-overview)
2. [Style Guide](#style-guide)
3. [Tech Stack](#tech-stack)
4. [Page Architecture](#page-architecture)
5. [Section Breakdown](#section-breakdown)
6. [Anti-Bot Contact Form](#anti-bot-contact-form)
7. [Animation System](#animation-system)
8. [Responsive Design](#responsive-design)
9. [File Structure](#file-structure)
10. [Content Strategy](#content-strategy)
11. [Implementation Phases](#implementation-phases)
12. [Verification Plan](#verification-plan)
13. [Design References](#design-references)

---

## Brand Overview

**Company:** Capybara Corporation ("CapyCo")
**Tagline:** *"Build. Ship. Grow."*
**Personality:** Warm, approachable, nerdy-fun, professional
**Mascot:** A nerdy capybara wearing glasses, scarf & beanie — coding on a laptop
**Tone:** Playful yet trustworthy, techy but accessible

The visual identity should feel like a warm coffee shop where brilliant devs and marketers craft digital magic — not a cold corporate office.

---

## Style Guide

![CapyCo Style Guide](/Users/willgomes/.gemini/antigravity/brain/58c68bab-a8c1-466e-ac6f-604298a0b5e9/capyco_style_guide_1772914914052.png)

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background** | Warm Cream | `#FDF6EC` | Page backgrounds, cards |
| **Primary Accent** | Golden Amber | `#D4952B` | CTAs, highlights, links |
| **Primary Dark** | Deep Navy | `#1B2A4A` | Headings, nav, text |
| **Secondary Accent** | Soft Sage | `#A8C5A0` | Success states, badges, soft accents |
| **Highlight** | Warm Coral | `#E8835D` | Hover states, alerts, secondary CTAs |
| **Secondary Blue** | Slate Blue | `#4A6FA5` | Secondary buttons, icons |
| **Surface** | Off-White | `#FAF3E8` | Card surfaces, section alternates |
| **Muted Text** | Warm Gray | `#6B6B6B` | Body text, captions |

> **Rationale:** The palette draws from the mascot itself — golden-brown capybara fur, navy beanie/scarf, warm cream background. It feels distinctly "CapyCo" while remaining modern and on-brand for a tech agency.

### Typography

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| **Headlines (H1)** | Outfit | Bold (700) | 48–64px / 3-4rem | 1.1 |
| **Subheads (H2-H3)** | Outfit | SemiBold (600) | 28–36px / 1.75-2.25rem | 1.2 |
| **Body** | Inter | Regular (400) | 16–18px / 1-1.125rem | 1.6 |
| **Buttons/Labels** | Inter | Medium (500) | 14–16px / 0.875-1rem | 1.5 |
| **Code snippets** | JetBrains Mono | Regular (400) | 14px / 0.875rem | 1.5 |

> **Accessibility Note:** All text must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).

### UI Components Style

- **Buttons:** Rounded pill shape (border-radius: 9999px), bold amber primary, navy outline secondary
- **Cards:** Rounded corners (16px), subtle shadow (`0 4px 24px rgba(27,42,74,0.06)`), cream surface
- **Borders:** 1px soft borders using `#E8E0D4`
- **Spacing:** 8px grid system (8, 16, 24, 32, 48, 64, 96px)
- **Animations:** See [Animation System](#animation-system) for detailed specifications
- **Icons:** Lucide React (line-style, consistent stroke width)
- **Focus States:** 2px solid `#D4952B` outline with 2px offset for keyboard navigation

### Design Principles

1. **Warm Minimalism** — Clean layouts with warm tones (inspired by Linear's clean UI + Notion's warmth)
2. **Personality-Driven** — The mascot appears in key moments (hero, CTA, 404 pages) — never overwhelming
3. **Motion with Purpose** — Subtle scroll-triggered animations, hover micro-interactions — nothing gratuitous
4. **Readable & Accessible** — High contrast ratios (WCAG AA+), generous line-heights, proper focus states
5. **Mobile-First** — Design for mobile, enhance for desktop

---

## Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.1.6 (App Router) | SSR, file-based routing, image optimization, SEO |
| **React** | 19.2.3 | Component-based UI |
| **TypeScript** | 5.x | Type safety (strict mode) |

### Styling & UI
| Technology | Purpose |
|-----------|---------|
| **Tailwind CSS** | v4 — CSS-first configuration (no JS config file) |
| **shadcn/ui** | "base-nova" style with `@base-ui/react` primitives |
| **class-variance-authority** | Component variant management |
| **tailwind-merge + clsx** | Conditional class merging |
| **Framer Motion** | Scroll animations, micro-interactions |
| **Lucide React** | Modern line icons |
| **Google Fonts** | Outfit + Inter + JetBrains Mono (loaded via next/font) |

### Backend / Infrastructure
| Technology | Purpose |
|-----------|---------|
| **Next.js Server Actions** | Contact form handling (chosen over API routes) |
| **React Hook Form + Zod** | Form validation (client + server) |
| **Resend** | Email delivery (recommended: sign up at resend.com) |
| **@upstash/ratelimit** | Rate limiting for contact form |
| **Vercel** | Hosting platform |

### Environment Variables
Create `.env.local` with:
```bash
# Required
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=hello@capyco.co

# Optional - Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxx
```

### Why These Choices?
- **Server Actions over API Routes:** Simpler code, automatic type safety, no route handlers needed
- **Resend over Nodemailer:** Better deliverability, modern API, free tier (100 emails/day)
- **@upstash/ratelimit:** Edge-compatible, no Redis server to manage

---

## Page Architecture

### Navigation (Sticky Header)
```
┌──────────────────────────────────────────────────────┐
│ 🦫 CapyCo    Home  Products  Services  About  Contact│
│              ─────  ─────────  ────────  ─────  ─────│
│                               [Get Started →]        │
└──────────────────────────────────────────────────────┘
```

- **Style:** Floating "pill-style" menu (inspired by Contra) — transparent initially, gains soft shadow and `backdrop-blur` on scroll
- **Logo:** Mascot icon + "CapyCo" wordmark
- **Mobile:** Hamburger menu → slide-in drawer with Framer Motion
- **CTA button** in nav: "Get Started" (amber pill button)
- **Accessibility:**
  - Skip-to-content link (first focusable element)
  - aria-current="page" for active route
  - aria-expanded for mobile menu state

### Menu Items
| Item | Description | Status | Anchor ID |
|------|-------------|--------|-----------|
| **Home** | Hero landing page | MVP | `#hero` |
| **Products** | SaaS products catalog | Placeholder → future | `#products` |
| **Services** | Marketing packages & dev services | Placeholder → future | `#services` |
| **About Us** | Team story | Placeholder → future | `#about` |
| **Contact** | Contact form with anti-bot protection | MVP | `#contact` |

### Smooth Scroll Behavior
- Enable CSS smooth scroll: `html { scroll-behavior: smooth; }`
- Scroll offset for fixed header: `scroll-padding-top: 80px`
- Click nav items to scroll to section anchors

---

## Section Breakdown

### 1. 🏠 Hero Section
**Layout:** Centered layout with mascot illustration
**Background:** Warm cream with subtle ambient glow effect radiating from mascot

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│               Build. Ship. Grow.                     │
│                                                      │
│          We're a vibe-first coding &                 │
│          marketing agency that turns                 │
│          wild ideas into digital magic.              │
│                                                      │
│           [🚀 Get Started]  [Learn More →]           │
│                                                      │
│                 [Mascot Image]                       │
│                (Glowing + Float)                     │
│                                                      │
│   ✓ SaaS Products  ✓ Marketing  ✓ Dev Services       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **H1:** "Build. Ship. Grow." (Outfit Bold, Deep Navy, clamp(2.5rem, 5vw, 4rem))
- **Subtext:** "We're a vibe-first coding & marketing agency that turns wild ideas into digital magic."
- **CTAs:**
  - Primary: "Get Started" (amber, scrolls to #contact)
  - Secondary: "Learn More" (navy outline, scrolls to #services)
- **Trust pills:** Three badges with checkmarks showing capabilities
- **Mascot:** Capybara PNG with floating animation (see Animation System)
- **Responsive:** Stack vertically on mobile, reduce font sizes

### 2. 🏢 Trusted By / Social Proof Bar
- **Note:** Placeholder section — hide until real client logos available
- Scrolling logo ticker (CSS animation, pause on hover)
- Muted grayscale logos that colorize on hover
- "Trusted by innovative teams" label
- **Responsive:** Single row scroll on mobile, or hide entirely

### 3. 💡 Services Overview
**Layout:** 3-column Bento grid cards (stack to single column on mobile)

```
┌──────────┬──────────┬──────────┐
│  🖥️      │  📢      │  🔧      │
│ SaaS     │ Marketing│ Custom   │
│ Products │ Packages │ Dev      │
│          │          │          │
│ Ready-to-│ SEO, Ads │ Bespoke  │
│ use apps │ Social,  │ web &    │
│ w/ sub   │ Content  │ mobile   │
│ plans    │          │ apps     │
│          │          │          │
│ [View →] │ [View →] │ [View →] │
└──────────┴──────────┴──────────┘
```

- **Animation:** Cards fade-in + slide-up on scroll (staggered 100ms)
- **Hover:** Subtle lift + shadow increase + accent color border
- **Icons:** Lucide icons (Monitor, Megaphone, Wrench)
- **Responsive:** 3-col → 2-col → 1-col (lg, md, sm breakpoints)

### 4. 🌟 Why CapyCo? (Features/Benefits)
**Layout:** Alternating image-text rows (image left, text right, then reverse)

| Feature | Icon | Description |
|---------|------|-------------|
| **Vibe Coding** | Zap | AI-assisted development that matches your energy |
| **Ship Fast, Stay Chill** | Rocket | Agile workflows without the stress |
| **Growth-Driven** | TrendingUp | Marketing strategy baked into every pixel |
| **Brazilian Warmth, Canadian Quality** | Globe | Best of both worlds 🇧🇷🇨🇦 |

- **Illustrations:** Simple Lucide icons or custom SVG
- **Responsive:** Stack vertically on mobile (image always above text)

### 5. 📊 Stats / Impact Bar
- Animated counter section: `50+ Projects` | `20+ Happy Clients` | `99% Uptime` | `2 Countries`
- Numbers animate (count up) when scrolled into view
- **Accessibility:** Ensure screen readers announce the final numbers, not the animation

### 6. 💬 Testimonials
- Card carousel using shadcn Carousel component
- **Content:** (Placeholder — hide section until real testimonials)
- Auto-rotate with manual navigation dots
- **Responsive:** Single card on mobile, 2-3 on desktop

### 7. 🔔 CTA Banner
```
┌──────────────────────────────────────────────────────┐
│        Ready to Build Something Amazing?              │
│   Let's turn your idea into a vibe.                  │
│                                                      │
│        [🦫 Start Your Project]                        │
└──────────────────────────────────────────────────────┘
```
- Full-width amber gradient background
- White text, centered layout
- Large pill CTA button (scrolls to #contact)

### 8. 📬 Contact Section
- Two-column: info left, form right (stack on mobile)
- Form fields: Name, Email, Company (optional), Message
- **Anti-bot:** See [Anti-Bot Contact Form](#anti-bot-contact-form)
- **Submit:** Next.js Server Action
- **States:**
  - Loading: Button shows spinner, disabled
  - Success: Toast notification + form reset
  - Error: Field-level errors + toast notification
- **Responsive:** Full-width form on mobile

### 9. 🦶 Footer
- 4-column grid: Company links, Products, Services, Connect (stack 2x2 on mobile, 1-col on xs)
- Social icons: GitHub, LinkedIn, Instagram, X
- "Made with ☕ in Canada" tagline
- Copyright + privacy/terms links

---

## Anti-Bot Contact Form

Multi-layer protection without CAPTCHA friction:

### Layer 1: Honeypot Field
```tsx
{/* Hidden field - bots fill it, humans don't */}
<div className="hidden" aria-hidden="true">
  <input
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="off"
  />
</div>
```

### Layer 2: Time-Based Validation
```typescript
// Server-side: Reject submissions under 3 seconds
const MIN_FORM_TIME = 3000;
if (Date.now() - formLoadTime < MIN_FORM_TIME) {
  return { error: "Please take your time filling out the form." };
}
```

### Layer 3: Rate Limiting (Upstash)
```typescript
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 per hour per IP
});
```

### Layer 4: Zod Validation
```typescript
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  company: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  website: z.string().max(0, "Bot detected").optional(), // Honeypot
});
```

### Security Response Strategy
| Detection | Response |
|-----------|----------|
| Honeypot filled | Return generic "message sent" success (don't reveal detection) |
| Too fast | Return same generic success |
| Rate limited | Return "too many attempts, try again later" |
| Validation failed | Return specific field errors |

---

## Animation System

### Core Animation Values
```typescript
// lib/animations.ts
export const ANIMATION_CONFIG = {
  // Easing functions
  ease: {
    smooth: [0.25, 0.1, 0.25, 1],      // General transitions
    bounce: [0.68, -0.55, 0.265, 1.55], // Playful elements
    snappy: [0.4, 0, 0.2, 1],          // Micro-interactions
  },

  // Durations (seconds)
  duration: {
    fast: 0.15,      // Hovers, toggles
    normal: 0.3,     // Standard transitions
    slow: 0.5,       // Scroll reveals
    mascot: 3,       // Floating loop
  },

  // Scroll reveal variants
  scrollReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Stagger children
  stagger: {
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }
};

// Mascot floating animation
export const mascotFloat = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
```

### Scroll Reveal Hook
```typescript
// hooks/useScrollReveal.ts
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: threshold
  });
  return { ref, isInView };
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animation Guidelines
1. **Purposeful motion** — Every animation should guide the user or provide feedback
2. **Consistent timing** — Use the config values, not magic numbers
3. **Respect preferences** — Always honor `prefers-reduced-motion`
4. **Performance** — Use `transform` and `opacity` only (GPU-accelerated)

---

## Responsive Design

### Breakpoint Strategy
| Breakpoint | Width | Usage |
|------------|-------|-------|
| **sm** | 640px | Large phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Small laptops |
| **xl** | 1280px | Desktops |
| **2xl** | 1536px | Large screens |

### Section Responsive Patterns

| Section | Mobile (<768) | Tablet (768-1024) | Desktop (>1024) |
|---------|---------------|-------------------|-----------------|
| **Hero** | Stacked, smaller text | Centered, medium | Full layout |
| **Services** | 1 column | 2 columns | 3 columns |
| **Features** | Image above text | Image left | Alternating |
| **Stats** | 2x2 grid | 4 columns | 4 columns |
| **Testimonials** | 1 card | 2 cards | 3 cards |
| **Contact** | Stacked | 2 columns | 2 columns |
| **Footer** | 2x2 grid | 4 columns | 4 columns |

### Typography Scale (clamp-based)
```css
/* Responsive font sizes */
--text-hero: clamp(2.5rem, 5vw, 4rem);      /* 40-64px */
--text-h2: clamp(1.75rem, 3vw, 2.25rem);    /* 28-36px */
--text-h3: clamp(1.25rem, 2vw, 1.5rem);     /* 20-24px */
--text-body: clamp(1rem, 1.5vw, 1.125rem); /* 16-18px */
```

---

## File Structure

```
CapyCo/
├── public/
│   ├── images/
│   │   ├── capyco-mascot.png          # Main mascot (multiple sizes: 400w, 800w, 1200w)
│   │   ├── capyco-mascot.webp         # WebP versions for optimization
│   │   ├── capyco-logo.svg            # Logo wordmark
│   │   └── og-image.png               # Open Graph image (1200x630)
│   └── fonts/                         # (if self-hosting)
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (fonts, metadata)
│   │   ├── page.tsx                   # Home page (all sections)
│   │   ├── globals.css                # Tailwind v4 + custom CSS vars
│   │   ├── actions.ts                 # Server Actions (contact form)
│   │   ├── error.tsx                  # Error boundary
│   │   ├── loading.tsx                # Loading skeleton
│   │   └── not-found.tsx              # 404 page
│   ├── components/
│   │   ├── ui/                        # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx               # (install via shadcn)
│   │   │   ├── carousel.tsx           # (install via shadcn)
│   │   │   └── toast.tsx              # (install via shadcn)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── SkipToContent.tsx      # Accessibility
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustedBy.tsx          # (hide until content ready)
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── WhyCapyCo.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── Testimonials.tsx       # (hide until content ready)
│   │   │   ├── CTABanner.tsx
│   │   │   └── ContactSection.tsx
│   │   └── shared/
│   │       ├── AnimatedCounter.tsx
│   │       ├── SectionWrapper.tsx     # Scroll reveal wrapper
│   │       ├── MascotFloat.tsx
│   │       ├── Container.tsx          # Max-width wrapper
│   │       └── LogoTicker.tsx
│   ├── lib/
│   │   ├── utils.ts                   # cn() helper
│   │   ├── animations.ts              # Animation configs
│   │   ├── validations.ts             # Zod schemas
│   │   └── rate-limiter.ts            # Rate limiting setup
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   ├── useCountUp.ts
│   │   └── useMediaQuery.ts           # Responsive hooks
│   └── content/                       # Separated content
│       └── site-content.ts            # All copy in one place
├── .env.local
├── .env.example                       # Template for env vars
├── next.config.ts
├── components.json
├── package.json
└── CAPYCO_LANDING_PAGE_PLAN.md
```

---

## Content Strategy

### Content File Structure
Keep all copy in `src/content/site-content.ts` for easy editing:

```typescript
export const siteContent = {
  hero: {
    headline: "Build. Ship. Grow.",
    subtext: "We're a vibe-first coding & marketing agency that turns wild ideas into digital magic.",
    primaryCta: "Get Started",
    secondaryCta: "Learn More",
    trustPills: ["SaaS Products", "Marketing", "Dev Services"]
  },
  services: [
    {
      icon: "Monitor",
      title: "SaaS Products",
      description: "Ready-to-use apps with subscription plans",
      cta: "View Products"
    },
    // ... more services
  ],
  stats: [
    { value: 50, suffix: "+", label: "Projects" },
    { value: 20, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Uptime" },
    { value: 2, suffix: "", label: "Countries" }
  ],
  // ... rest of content
};
```

### Placeholder Content Policy
Sections with placeholder content should:
1. Be marked with `// TODO: Replace with real content`
2. Have a `show: false` flag until ready
3. Include realistic placeholder text (no "Lorem Ipsum")

---

## Implementation Phases

### Phase 1: Foundation
1. ✅ Initialize Next.js 16 project with TypeScript
2. ✅ Install Tailwind CSS v4 + shadcn/ui (base-nova)
3. ✅ Install dependencies: `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`, `@upstash/ratelimit`, `resend`
4. ✅ Configure custom CSS theme (colors, fonts, spacing)
5. ✅ Set up Google Fonts in `layout.tsx`
6. ✅ Copy mascot images to `public/images/`
7. ✅ Create animation config file (`lib/animations.ts`)
8. ✅ Create content file (`content/site-content.ts`)

### Phase 2: Design System
9. Build `Container` component (max-width wrapper)
10. Build `SectionWrapper` with scroll reveal
11. Customize shadcn Button component (pill shape, amber colors)
12. Install and customize Card component
13. Create Toast/notification component
14. Test all components in isolation

### Phase 3: Layout & Navigation
15. Build `SkipToContent` component (accessibility)
16. Build `Navbar` (transparent → blurred sticky on scroll)
17. Build `MobileMenu` with Framer Motion slide-in
18. Implement smooth scroll behavior
19. Build `Footer` component (4-column grid)
20. Add active section highlighting on scroll

### Phase 4: Core Sections
21. Build `HeroSection` — headline, CTAs, mascot float animation
22. Build `ServicesOverview` — Bento grid cards with scroll reveal
23. Build `WhyCapyCo` — alternating feature rows
24. Build `StatsBar` — animated counters with Intersection Observer
25. Add responsive breakpoints to all sections

### Phase 5: Interactive Components
26. Build `ContactSection` form UI
27. Create Zod validation schema
28. Implement honeypot field
29. Create Server Action for form submission
30. Add Resend email integration
31. Implement rate limiting
32. Add loading, success, and error states
33. Add toast notifications

### Phase 6: Polish & Optimization
34. Install and configure Testimonials carousel (hide until content)
35. Add Trusted By logo ticker (hide until logos)
36. Add scroll-triggered reveal to all sections
37. Optimize images (Next.js Image, WebP, sizes)
38. Add loading skeletons for async content
39. Implement error boundaries
40. Add reduced-motion support
41. SEO: Meta tags, OG image, sitemap.xml, robots.txt
42. Performance audit (Lighthouse target: 90+)

### Phase 7: Pre-Launch
43. Test contact form bot protection manually
44. Verify all links work
45. Check all responsive breakpoints
46. Run accessibility audit (axe, Lighthouse)
47. Deploy to Vercel

---

## Verification Plan

### Automated Tests
```bash
# Build test
npm run build

# TypeScript check
npx tsc --noEmit

# Lint check
npm run lint
```

### Manual Verification Checklist
- [ ] **Navigation**
  - [ ] Skip-to-content link works
  - [ ] Navbar is sticky on scroll
  - [ ] Mobile menu opens/closes smoothly
  - [ ] Active section highlighted while scrolling
  - [ ] All nav links scroll to correct sections

- [ ] **Hero**
  - [ ] Mascot displays and floats
  - [ ] CTAs scroll to correct sections
  - [ ] Responsive text scaling works

- [ ] **Services**
  - [ ] Cards reveal on scroll with stagger
  - [ ] Hover effects work
  - [ ] Responsive grid works

- [ ] **Contact Form**
  - [ ] Client-side validation works
  - [ ] Submitting with honeypot filled → generic success (no error)
  - [ ] Submitting within 2 seconds → generic success (no error)
  - [ ] Submitting 6th time in hour → rate limit error
  - [ ] Valid submission → success toast + email sent
  - [ ] Loading state shows during submission

- [ ] **Accessibility**
  - [ ] Tab navigation works through all interactive elements
  - [ ] Focus visible states show
  - [ ] Screen reader announces sections (headings hierarchy)
  - [ ] Color contrast passes WCAG AA
  - [ ] Reduced motion respected

- [ ] **Performance**
  - [ ] Lighthouse Performance ≥ 90
  - [ ] Lighthouse Accessibility ≥ 95
  - [ ] Lighthouse SEO ≥ 90
  - [ ] Images lazy load below fold
  - [ ] No layout shift on load

- [ ] **Responsive**
  - [ ] Mobile (iPhone SE): All sections usable
  - [ ] Tablet (iPad): All sections usable
  - [ ] Desktop (1440px): Full experience

---

## Design References

| Reference | What We're Taking |
|-----------|------------------|
| **Linear** (linear.app) | Clean, minimal UI; subtle animations; strong typography hierarchy |
| **Vercel** (vercel.com) | Dark-to-light gradients; sticky nav with blur; professional CTA placement |
| **Notion** | Warm, approachable color palette; playful illustrations mixed with clean UI |
| **Cal.com** | Open-source agency vibe; modern hero section layout |
| **Stripe** | Gradient mesh backgrounds; smooth scroll animations |

### Trending Design Patterns Used
- ✅ Gradient mesh backgrounds (subtle, warm tones)
- ✅ Bento grid layout for services
- ✅ Scroll-triggered reveal animations (Framer Motion)
- ✅ Sticky blurred navbar
- ✅ Animated stat counters
- ✅ Honeypot anti-bot (no CAPTCHA friction)
- ✅ Pill-shaped CTA buttons
- ✅ Split hero with illustration
- ✅ Dark + warm color fusion
- ✅ Accessibility-first (keyboard nav, screen readers, reduced motion)

---

## Notes for Developers

> **This document is the single source of truth** for building the CapyCo landing page.

### Key Implementation Files
| Purpose | File |
|---------|------|
| Colors | `src/app/globals.css` CSS variables |
| Animations | `src/lib/animations.ts` |
| Content | `src/content/site-content.ts` |
| Validation | `src/lib/validations.ts` |
| Rate Limit | `src/lib/rate-limiter.ts` |

### Tech Decisions to Remember
1. **Tailwind v4** uses CSS-first config — no `tailwind.config.ts`
2. **shadcn/ui base-nova** uses `@base-ui/react`, not Radix
3. **Server Actions** for form handling (simpler than API routes)
4. **Placeholders hidden** by default — set `show: true` when content ready

### Environment Requirements
- Node.js 20+
- npm or pnpm
- Git
- Resend account (for email)
- Upstash account (optional, for rate limiting)

### Getting Started
```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your keys

# Run dev server
npm run dev
```

---

*Last updated: March 7, 2026*
*Plan created by: Antigravity AI Agent*
*Updated by: Claude Code*
