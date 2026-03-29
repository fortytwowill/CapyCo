# CLAUDE.md

Always read CONTEXT.md and HANDOFF.md before starting any task.
When you finish a task or session, update HANDOFF.md with what you did, what's in progress, any issues found, files changed, and suggested next steps.
When a significant architectural or design decision is made, log it in the Key Decisions table in CONTEXT.md.

---

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
CapyCo is a Next.js landing page for "Capybara Corporation" — a vibe coding & marketing agency. The project uses a dark-themed, immersive design with Three.js visuals, GSAP animations, and a golden-amber accent palette.

## Tech Stack
- **Framework:** Next.js 16.1.6 with App Router
- **React:** 19.2.3
- **TypeScript:** 5.x (strict mode enabled)
- **Styling:** Tailwind CSS v4 with CSS-first configuration
- **UI Components:** shadcn/ui with "base-nova" style
- **Animation:** GSAP (Marquee), Framer Motion (Sections/Hero), Three.js (Background Blobs)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod + Next.js Server Actions

## Common Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Production server (after build)
npm run start

# Lint with ESLint
npm run lint

# Type check (no emit)
npx tsc --noEmit
```

## Project Architecture
### File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Google Fonts (Syne, DM Sans, JetBrains Mono)
│   ├── page.tsx            # Home page (Hero, Marquee, Services, WhyCapyCo, etc.)
│   ├── globals.css         # Tailwind v4 imports + custom Dark Theme CSS variables
│   └── actions/            # Server Actions for form handling
├── components/
│   ├── ui/                 # shadcn/ui components (base-nova)
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Marquee, Services, WhyCapyCo, Stats, Contact, FooterCTA
│   ├── three/              # Three.js components (HeroBlob)
│   └── shared/             # MascotFloat, Container, SectionWrapper
├── lib/
│   ├── animations.ts       # Centralized Framer Motion variants
│   ├── gsap-utils.ts       # GSAP helper
│   └── validations.ts      # Zod schemas for forms
└── content/
    └── site-content.ts     # Centralized copy and metadata (Source of Truth)
```

### Design System
**Color Palette (in `globals.css`):**
- Background: `#0a0a0f` (Deep Navy/Black)
- Primary: `#F5A623` (Golden Amber)
- Secondary: `#00D4AA` (Teal)
- Accent: `#FF6B6B` (Coral)
- Foreground: `#F0EFE9` (Off-white)
- Card: `#111118` (Dark Surface)

**Typography:**
- Headlines: Syne (Google Font)
- Body: DM Sans (Google Font)
- Code: Geist Mono (Google Font)

**Headline Branding:**
- "Think. Create. Grow."

## Path Aliases
- `@/*` maps to `./src/*`

## Important Notes
- **Tailwind v4**: Uses `@import "tailwindcss"` in CSS, not a JS config file.
- **Content First**: Always check `src/content/site-content.ts` when updating text or SEO.
- **Dark mode**: Project is dark-themed by default.
- **Animations**: Uses a mix of Framer Motion, GSAP, and Three.js.
