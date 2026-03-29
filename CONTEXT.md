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
