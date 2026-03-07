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
7. [File Structure](#file-structure)
8. [Implementation Steps](#implementation-steps)
9. [Verification Plan](#verification-plan)
10. [Design References](#design-references)

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

| Role | Font | Weight | Size | Source |
|------|------|--------|------|--------|
| **Headlines (H1)** | Outfit | Bold (700) | 48–64px | Google Fonts |
| **Subheads (H2-H3)** | Outfit | SemiBold (600) | 28–36px | Google Fonts |
| **Body** | Inter | Regular (400) | 16–18px | Google Fonts |
| **Buttons/Labels** | Inter | Medium (500) | 14–16px | Google Fonts |
| **Code snippets** | JetBrains Mono | Regular (400) | 14px | Google Fonts |

> **Why Outfit + Inter?** Outfit gives a rounded, friendly-yet-modern feel for headlines (similar to the mascot's personality). Inter is the industry standard for UI body text — highly readable, clean, and pairs beautifully with Outfit.

### UI Components Style

- **Buttons:** Rounded pill shape (border-radius: 9999px), bold amber primary, navy outline secondary
- **Cards:** Rounded corners (16px), subtle shadow (`0 4px 24px rgba(27,42,74,0.06)`), cream surface
- **Borders:** 1px soft borders using `#E8E0D4`
- **Spacing:** 8px grid system (8, 16, 24, 32, 48, 64, 96px)
- **Animations:** Smooth 300ms ease-in-out transitions; framer-motion for scroll reveals
- **Icons:** Lucide React (line-style, consistent stroke width)

### Design Principles

1. **Warm Minimalism** — Clean layouts with warm tones (inspired by Linear's clean UI + Notion's warmth)
2. **Personality-Driven** — The mascot appears in key moments (hero, CTA, 404 pages) — never overwhelming
3. **Motion with Purpose** — Subtle scroll-triggered animations, hover micro-interactions — nothing gratuitous
4. **Readable & Accessible** — High contrast ratios (WCAG AA+), generous line-heights, proper focus states

---

## Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15 (App Router) | SSR, file-based routing, image optimization, SEO |
| **React** | 19 | Component-based UI |
| **TypeScript** | 5.x | Type safety |

### Styling & UI
| Technology | Purpose |
|-----------|---------|
| **Tailwind CSS** | v4 — Utility-first styling |
| **shadcn/ui** | Pre-built accessible components (buttons, cards, dialogs, forms) |
| **Framer Motion** | Scroll-triggered animations, page transitions, micro-interactions |
| **Lucide React** | Modern line icons |
| **Google Fonts** | Outfit + Inter + JetBrains Mono |

### Backend / Infrastructure
| Technology | Purpose |
|-----------|---------|
| **Next.js API Routes** | Contact form handler, API endpoints |
| **React Hook Form + Zod** | Form validation (client + server) |
| **Resend / Nodemailer** | Email delivery for contact form (TBD) |
| **Vercel** | Recommended hosting (free tier, perfect for Next.js) |

> **Why Next.js over Vite?** For a marketing/agency site, SSR and built-in SEO optimization (meta tags, OG images, sitemaps) are critical. Next.js App Router also provides image optimization, server actions for the contact form, and excellent Vercel deployment integration.

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

- **Style:** Floating "pill-style" menu (a modern floating island design inspired by Contra) that is transparent but gains a soft shadow and `backdrop-blur` on scroll
- **Logo:** Mascot icon + "CapyCo" wordmark
- **Mobile:** Hamburger menu → slide-in drawer with Framer Motion
- **CTA button** in nav: "Get Started" (amber pill button)

### Menu Items
| Item | Description | Status |
|------|-------------|--------|
| **Home** | Hero landing page (this implementation) | MVP |
| **Products** | SaaS products catalog (subscription-based) | Placeholder → future |
| **Services** | Marketing packages & dev services | Placeholder → future |
| **About Us** | Team story, Brazilian founders in Canada | Placeholder → future |
| **Contact** | Contact form with anti-bot protection | MVP |

---

## Section Breakdown

### 1. 🏠 Hero Section
**Layout:** Centered layout (inspired by Vercel) — massive text centered, with the mascot illustration directly below or integrated into a glowing center piece  
**Background:** Warm cream background with a subtle ambient glow effect radiating outwards

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

- **H1:** "Build. Ship. Grow." (Outfit Bold, Deep Navy, 64px)
- **Subtext:** "We're a vibe-first coding & marketing agency that turns wild ideas into digital magic."
- **CTAs:** Primary "Get Started" (amber) + Ghost "Learn More" (navy outline)
- **Trust pills:** Small badges showing capabilities
- **Mascot:** Capybara PNG with subtle floating animation and glowing backdrop (3s ease-in-out infinite)

### 2. 🏢 Trusted By / Social Proof Bar
- Scrolling logo ticker of clients/partners (even if placeholder)  
- Muted grayscale logos that colorize on hover
- "Trusted by innovative teams" label

### 3. 💡 Services Overview
**Layout:** 3-column Bento grid cards

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

### 4. 🌟 Why CapyCo? (Features/Benefits)
**Layout:** Alternating image-text rows

- **"Vibe Coding"** — AI-assisted development that matches your energy
- **"Ship Fast, Stay Chill"** — Agile workflows without the stress
- **"Growth-Driven"** — Marketing strategy baked into every pixel
- **"Brazilian Warmth, Canadian Quality"** — Best of both worlds

Each row has a subtle illustration/icon and descriptive text.

### 5. 📊 Stats / Impact Bar
- Animated counter section: `50+ Projects` | `20+ Happy Clients` | `99% Uptime` | `2 Countries`
- Numbers animate (count up) when scrolled into view

### 6. 💬 Testimonials
- Card carousel using shadcn Carousel component
- Placeholder testimonials with avatar, name, company, quote
- Auto-rotate with manual navigation dots

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
- Large pill CTA button

### 8. 📬 Contact Section
- Two-column: info/map left, form right
- Form fields: Name, Email, Company, Message
- **Honeypot field** (hidden) + **time-based validation** for bot protection
- Submit via Next.js Server Action
- Success toast notification

### 9. 🦶 Footer
- 4-column grid: Company links, Products, Services, Connect
- Social icons: GitHub, LinkedIn, Instagram, X
- "Made with ☕ in Canada" tagline
- Copyright + legal links

---

## Anti-Bot Contact Form

The contact form implements a **multi-layer bot protection** strategy without CAPTCHA (maintaining the friendly UX):

### Layer 1: Honeypot Field
```tsx
// Hidden field - bots fill it, humans don't
<div className="hidden" aria-hidden="true">
  <input
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="one-time-code"
  />
</div>
```

### Layer 2: Time-Based Validation
```tsx
// Track form load time - reject submissions under 3 seconds
const formLoadTime = Date.now();
// On submit: if (Date.now() - formLoadTime < 3000) → reject
```

### Layer 3: Server-Side Rate Limiting
- Max 5 submissions per IP per hour
- Implemented in Next.js middleware or API route

### Layer 4: Input Validation
- Zod schema validation on both client and server
- Email format validation
- Message length limits (10-2000 chars)

---

## File Structure

```
CapyCo/
├── public/
│   ├── images/
│   │   ├── capyco-mascot.png          # Main mascot image
│   │   ├── capyco-logo.svg            # Logo wordmark
│   │   └── hero-gradient.svg          # Decorative gradient mesh
│   └── fonts/                          # (if self-hosting)
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (fonts, metadata)
│   │   ├── page.tsx                    # Home page (all sections)
│   │   ├── globals.css                 # Tailwind + custom CSS vars
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts            # Contact form API endpoint
│   ├── components/
│   │   ├── ui/                         # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Sticky navigation
│   │   │   └── Footer.tsx              # Site footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Hero with mascot
│   │   │   ├── TrustedBy.tsx           # Logo ticker
│   │   │   ├── ServicesOverview.tsx     # 3-column services
│   │   │   ├── WhyCapyCo.tsx           # Features/benefits
│   │   │   ├── StatsBar.tsx            # Animated counters
│   │   │   ├── Testimonials.tsx        # Testimonial carousel
│   │   │   ├── CTABanner.tsx           # Call-to-action section
│   │   │   └── ContactSection.tsx      # Contact form
│   │   └── shared/
│   │       ├── AnimatedCounter.tsx      # Count-up animation
│   │       ├── SectionWrapper.tsx       # Scroll reveal wrapper
│   │       └── MascotFloat.tsx          # Floating mascot animation
│   ├── lib/
│   │   ├── utils.ts                    # Utility functions (cn, etc.)
│   │   ├── validations.ts             # Zod schemas
│   │   └── rate-limiter.ts            # Rate limiting logic
│   └── hooks/
│       ├── useScrollReveal.ts          # Intersection observer hook
│       └── useCountUp.ts              # Counter animation hook
├── .env.local                          # Environment variables
├── tailwind.config.ts                  # Tailwind configuration
├── components.json                     # shadcn/ui config
├── next.config.ts                      # Next.js config
├── tsconfig.json                       # TypeScript config
├── package.json
└── CAPYCO_LANDING_PAGE_PLAN.md         # ← This file
```

---

## Implementation Steps

### Phase 1: Project Scaffolding
1. Initialize Next.js 15 project with TypeScript + Tailwind CSS v4
2. Install and configure shadcn/ui
3. Install dependencies: `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`
4. Configure custom Tailwind theme (colors, fonts, spacing from style guide)
5. Set up Google Fonts (Outfit, Inter, JetBrains Mono) in `layout.tsx`
6. Copy mascot image to `public/images/`

### Phase 2: Layout & Navigation
7. Build `Navbar` component (transparent → blurred sticky on scroll)
8. Build mobile hamburger menu with Framer Motion slide-in
9. Build `Footer` component (4-column grid)
10. Implement root `layout.tsx` with proper SEO metadata

### Phase 3: Hero & Core Sections
11. Build `HeroSection` — split layout with headline + mascot float animation
12. Build `TrustedBy` — scrolling logo ticker
13. Build `ServicesOverview` — Bento grid cards with scroll reveal
14. Build `WhyCapyCo` — alternating feature rows

### Phase 4: Social Proof & CTA
15. Build `StatsBar` — animated counters with Intersection Observer
16. Build `Testimonials` — card carousel
17. Build `CTABanner` — amber gradient full-width CTA

### Phase 5: Contact & Bot Protection
18. Build `ContactSection` — form with honeypot + time validation
19. Create API route `/api/contact` with Zod validation + rate limiting
20. Add success/error toast notifications

### Phase 6: Polish & Optimization
21. Add scroll-triggered reveal animations to all sections
22. Optimize images (Next.js Image component, mascot WebP)
23. Add responsive breakpoints for mobile/tablet
24. SEO: meta tags, OG image, sitemap
25. Performance audit (Lighthouse target: 90+)

---

## Verification Plan

### Automated Tests
Since this is a new project from scratch, there are no existing tests. We will verify through:

1. **Build test** — Ensure `npm run build` completes without errors
   ```bash
   cd /Users/willgomes/Documents/CapyCo && npm run build
   ```

2. **TypeScript type checking** — Ensure no type errors
   ```bash
   cd /Users/willgomes/Documents/CapyCo && npx tsc --noEmit
   ```

3. **Lint check** — Ensure no linting errors
   ```bash
   cd /Users/willgomes/Documents/CapyCo && npm run lint
   ```

### Manual / Visual Verification
4. **Dev server visual check** — Start dev server and verify all sections render correctly
   ```bash
   cd /Users/willgomes/Documents/CapyCo && npm run dev
   ```
   Then open `http://localhost:3000` in browser and verify:
   - [ ] Navbar renders with all menu items and is sticky on scroll
   - [ ] Hero section displays mascot + headline + CTAs
   - [ ] All sections are visible and properly spaced
   - [ ] Scroll animations trigger as sections enter viewport
   - [ ] Contact form validates and rejects bot submissions (honeypot)
   - [ ] Mobile responsive breakpoints work (resize browser window)
   - [ ] Color scheme matches style guide
   - [ ] Fonts load correctly (Outfit, Inter)

5. **Contact form bot protection test** — 
   - Submit the form normally → should succeed
   - Fill in the honeypot hidden field manually (via browser dev tools) → should be silently rejected
   - Submit the form within 2 seconds of page load → should be rejected (time-based validation)

---

## Design References

These sites were researched for inspiration:

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

---

## Notes for Other Agents/Models

> **This document is the single source of truth** for building the CapyCo landing page. Any AI agent or developer working on this project should reference this plan for:
> - Color tokens → Use the hex values in the [Style Guide](#style-guide) section
> - Component names → Follow the [File Structure](#file-structure) exactly
> - Tech decisions → See [Tech Stack](#tech-stack) for versions and rationale
> - Section order → Follow [Section Breakdown](#section-breakdown) sequentially
> - Bot protection → Implement all 4 layers from [Anti-Bot Contact Form](#anti-bot-contact-form)

**Key Design Files:**
- Mascot image: `CapyCo.png` (in project root, will be moved to `public/images/`)
- Style guide: See generated image above

**Environment Requirements:**
- Node.js 20+ 
- npm or pnpm
- Git

---

*Last updated: March 7, 2026*  
*Plan created by: Antigravity AI Agent*
