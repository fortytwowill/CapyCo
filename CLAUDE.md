# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CapyCo is a Next.js landing page for "Capybara Corporation" — a vibe coding & marketing agency. The project uses a warm, approachable design with a custom color palette inspired by the capybara mascot.

## Tech Stack

- **Framework:** Next.js 16.1.6 with App Router
- **React:** 19.2.3
- **TypeScript:** 5.x (strict mode enabled)
- **Styling:** Tailwind CSS v4 with CSS-first configuration
- **UI Components:** shadcn/ui with "base-nova" style
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod

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
│   ├── layout.tsx          # Root layout with Google Fonts (Outfit, Inter, JetBrains Mono)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind v4 imports + custom CSS variables
│   └── api/                # API routes (empty)
├── components/
│   ├── ui/                 # shadcn/ui components (button installed)
│   ├── layout/             # Navbar, Footer (empty - planned)
│   ├── sections/           # Page sections (empty - planned)
│   └── shared/             # Shared components (empty - planned)
├── lib/
│   └── utils.ts            # cn() helper for tailwind-merge + clsx
└── hooks/                  # Custom React hooks (empty - planned)
```

### Key Configuration Files

- **`components.json`**: shadcn/ui configuration with style "base-nova", using `@base-ui/react` primitives
- **`next.config.ts`**: Next.js configuration (minimal)
- **`tsconfig.json`**: TypeScript with path alias `@/*` → `./src/*`
- **`eslint.config.mjs`**: ESLint using `eslint-config-next` (core-web-vitals + typescript)
- **`postcss.config.mjs`**: PostCSS with `@tailwindcss/postcss`

### Design System

**Color Palette (in `globals.css`):**
- Background: `#FDF6EC` (Warm Cream)
- Primary: `#D4952B` (Golden Amber)
- Secondary: `#4A6FA5` (Slate Blue)
- Accent: `#E8835D` (Warm Coral)
- Foreground: `#1B2A4A` (Deep Navy)
- Muted: `#6B6B6B` (Warm Gray)

**Typography:**
- Headlines: Outfit (Google Font)
- Body: Inter (Google Font)
- Code: JetBrains Mono (Google Font)

**Component Conventions:**
- shadcn/ui components use `@base-ui/react` primitives (not Radix)
- Buttons use `class-variance-authority` for variants
- Style variants: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`
- Size variants: `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

## Path Aliases

- `@/*` maps to `./src/*`
- Used for imports like: `import { Button } from "@/components/ui/button"`

## Important Notes

- **Tailwind v4**: Uses `@import "tailwindcss"` in CSS, not a JS config file
- **shadcn/ui**: Uses "base-nova" style with `@base-ui/react` primitives
- **Dark mode**: Supported via CSS variables in `globals.css` (use `.dark` class)
- **Strict TypeScript**: All strict checks are enabled
- **No tests configured**: Project doesn't have test commands set up yet

## Implementation Plan Reference

See `CAPYCO_LANDING_PAGE_PLAN.md` for detailed section specifications, design references, and implementation phases. Key planned sections:
- Hero with floating mascot animation
- Services Bento grid
- Stats with animated counters
- Testimonials carousel
- Contact form with honeypot anti-bot protection
- Sticky floating navbar
