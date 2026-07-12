# Project Context

## Project Overview
CapyCo (Capybara Corporation) is a boutique "vibe coding" and marketing agency. This project is a high-performance, modern landing page built to showcase the agency's unique fusion of Brazilian creativity and Canadian quality. It features an immersive dark-themed UI with interactive Three.js visuals, smooth GSAP and Framer Motion animations, and a centralized content management system.

## Tech Stack
- **Language**: TypeScript
- **Frontend Framework**: Next.js 16.1.6 (App Router)
- **UI/Styling**: Tailwind CSS v4, shadcn/ui (base-nova style)
- **Animation**: Framer Motion, GSAP, Three.js (@react-three/fiber, @react-three/drei)
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod
- **Email/Backend**: Next.js Server Actions, Resend
- **Hosting**: Vercel (planned)

## Architecture
The project follows a component-based architecture within the Next.js App Router:
- **`src/app/`**: Core page routing and layout.
- **`src/components/sections/`**: Independent, reusable sections for the landing page (Hero, Services, Contact, etc.).
- **`src/components/ui/`**: Low-level UI primitives from shadcn/ui.
- **`src/content/site-content.ts`**: **Centralized Content Store**. All text, metadata, and site copy are managed here to separate content from logic.
- **`src/lib/`**: Shared utilities, animation configurations, and validation schemas.
- **`src/hooks/`**: Custom React hooks for scroll tracking and media queries.

## Key Decisions
| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-03-15 | Dark Theme Redesign | Shift from original "Warm Cream" to "Cosmic Dark" (#0a0a0f) to emphasize "Digital Magic" and "Vibe Coding" branding. |
| 2026-03-15 | Three.js Integration | Add interactive Hero background for higher engagement and a more premium agency feel. |
| 2026-03-29 | "Think. Create. Grow." Branding | Refine headline from "Build. Ship. Grow." to better reflect the agency's focus on deep thought and creative execution. |
| 2026-03-29 | Content Centralization | Enforce use of `site-content.ts` to allow easy content updates without touching JSX. |
| 2026-07-12 | Outcome-Led Hero | Replace "Think. Create. Grow." / "vibe coding & marketing agency" with "We build, launch, and grow your product." Buyers search for outcomes, not methodology. The "vibe coding" jargon was founder-Instagram-speak, not buyer-Google-search-speak. |
| 2026-07-12 | Grapplr as Hero Social Proof | Add a "We built Grapplr" social-proof strip in the hero, linking to grapplr-seven.vercel.app. The agency's single most credible asset — a real, working product — now sits in the eye-line of the H1. |
| 2026-07-12 | Remove Placeholder Client Logos | Delete `Marquee.tsx` (rendered 6 fake brand names). Trust is destroyed by obvious placeholder text; reintroduce only with real client logos. |
| 2026-07-12 | New `WhatYouGet` Section | Add a scannable "life-after-hiring-us" bullet list (6 concrete deliverables) between Services and WhyCapyCo. Pattern borrowed from neoomni.com; the site previously had no equivalent. |
| 2026-07-12 | Multi-Product Social Proof | Extended `hero.socialProof` from single `product` to `products` array. Renders both shipped products (Grapplr + iCTRL) side-by-side on md+, stacked on mobile. Single-product social proof undersold the agency's portfolio. |
| 2026-07-12 | Production Domain Swap | Replaced all `grapplr-seven.vercel.app` (Vercel preview URL) with `grapplr.co` (production domain) in 4 places. Vercel preview URLs are temporary deploy targets, never the canonical link. |
| 2026-07-12 | Remove Q3 2026 Availability Banner | The "Now taking new clients for Q3 2026" line becomes a lie on Oct 1 2026. Better to remove than to maintain a stale scarcity signal. Motion config preserved in comments for when the next signal needs to come back. |
| 2026-07-12 | iCTRL Positioned as WMS | iCTRL tagline drafted: "Real-time inventory across every warehouse, every location, every shift." (Real WMS territory — competes with Manhattan Active, Blue Yonder, SAP EWM, NetSuite WMS, not spreadsheets.) Will revise once `ictrl.app` has real product copy. |

## Conventions
- **Naming**: Use PascalCase for components (e.g., `Hero.tsx`) and camelCase for utilities/hooks.
- **Content**: Never hardcode strings in components; always add them to `src/content/site-content.ts`.
- **Animations**: Prefer `lib/animations.ts` for reusable Framer Motion variants.
- **Icons**: Use Lucide React icons for consistency.
- **Accessibility**: All sections must use semantic HTML and support keyboard navigation (SkipToContent).

## Environment
- **Node.js**: v20+ recommended.
- **Env Vars**:
  - `RESEND_API_KEY`: Required for contact form email delivery.
  - `CONTACT_EMAIL_TO`: Recipient email for contact submissions.
  - `NEXT_PUBLIC_SITE_URL`: Base URL for SEO and OG images.
- **Dev**: `npm run dev` starts the local server at `localhost:3000`.

---
