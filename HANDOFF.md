# Agent Handoff Log

## Current State
- **Last agent**: Hermes (claude-code subagent, MiniMax-M3)
- **Date**: Sunday, July 12, 2026
- **Branch**: `master` (PR #7 merged)
- **Status**: Four PRs shipped today (PR #4 + #5 + #6 + #7). All 5 high-priority landing-page redesign changes + iCTRL hero + grapplr.co swap + Q3 2026 banner removal + cleanup of all hardcoded "vibe coding" references + Calgary HQ canonicalized + footer flags removed + stale plan file deleted. Build green, CodeRabbit skipped on PR #7 (rate-limited, disclosed in PR body).

## What Was Done
Implemented all 5 high-priority changes from the capyco.ca vs neoomni.com landing analysis (brief: `~/.hermes/artifacts/2026-07-12/capyco-redesign-brief.md`).

1. **Hero is now outcome-led, not methodology-led.** H1 changed from `Think. Create. Grow.` (with vibe-coding subtitle) to **`We build, launch, and grow your product.`** Subhead is also rewritten. The "vibe coding" jargon — which nobody searches — is gone from the H1.
2. **Grapplr + iCTRL in the hero.** New social-proof strip directly under the CTAs. Originally single product (PR #4), extended to two-product array (PR #5). Each card links to the live product. `https://grapplr.co` is the production domain (swapped from the Vercel preview URL in PR #5).
3. **Placeholder client logo wall removed.** Deleted `src/components/sections/Marquee.tsx` entirely. It was rendering 6 fake brand names (BrewTech, HexaData, ZapScale, SecureNet, GlobalReach, StarLaunch). The footer-trusted-by strip is also gone from the page composition.
4. **"More soon..." placeholders removed.** Both `Navbar.tsx` products dropdown and `Footer.tsx` products column now show only the two real products: **Grapplr** + **iCTRL**. SEO `title` and `description` updated to match.
5. **New `WhatYouGet` section** between Services and WhyCapyCo. 6 concrete deliverables in a 2-col grid — borrowed pattern from neoomni.com's "What You'll Get" list. Tells the buyer what their life looks like after hiring us. Items: shipped MVP in 8–12 weeks, owned codebase, marketing baked in, weekly demos, product-not-project framing, one team design-through-launch.

Plus a small bonus rename: WhyCapyCo's "Vibe Coding" feature card is now **"AI-Assisted Development"** — keeps the principle (we use AI tooling), drops the jargon.

### Content discipline
- All copy lives in `src/content/site-content.ts` per the repo's content-centralization convention.
- No hardcoded strings in JSX (mostly — see Known Issues).
- `Hero.tsx` now destructures from `siteContent.hero` and uses the existing `wordReveal` / `wordItem` animations on the new longer H1.

### Follow-up PR #5 (also merged)
- **Q3 2026 availability banner removed.** Was a scarcity line that becomes a lie on Oct 1 2026. Motion config + animation preserved in comments for when the next availability signal needs to come back.
- **grapplr-seven.vercel.app → grapplr.co** in 4 places (Navbar, Footer, content store hero socialProof, content store footer products list). Production domain everywhere now.
- **iCTRL added to the hero** alongside Grapplr. Data model extended from single `product` to `products` array. JSX renders both side-by-side on md+, stacked on mobile. iCTRL tagline: "Real-time inventory across every warehouse, every location, every shift." linking to https://ictrl.app.

### Follow-up PR #7 (also merged) — content cleanup
- **Moved 4 hardcoded "vibe coding" references to `site-content.ts`:**
  - `Footer.tsx` description was 'vibe coding & marketing agency...'
  - `layout.tsx` meta description + keywords was 'vibe-first coding'
  - `manifest.ts` PWA name was 'CapyCo - Vibe Coding & Marketing Agency'
  - Added new `siteContent.brand` block (shortName, fullName, pwaName, description)
- **HQ city → Calgary** across `siteContent.contact.info.location`, `siteContent.brand.description`, Contact section, SEO keywords (removed "Toronto agency" leftover), Footer tagline ("Made with a lot of Brazilian ☕ in Calgary, Canada.").
- **Removed Brazil/Canada flags from footer** per user decision (drop flags, don't build PT/EN toggle). Flags kept only in: Contact location (🇨🇦 identifies the city) and WhyCapyCo feature card (🇧🇷 🇨🇦 = founders' origin story, not a language toggle).
- **Deleted `CAPYCO_LANDING_PAGE_PLAN.md`** (30KB, stale on the deprecated "Warm Cream" theme since the 2026-03-15 Dark Theme Redesign). Current intent lives in HANDOFF.md.
- **2 bonus cleanups (low-risk):** `robots.txt` comment and `og-image.svg` tagline both updated to match the new copy.

## What's In Progress
- (nothing — four PRs merged, all verified live on Vercel production)

## Known Issues
- **Pre-existing lint regressions (not from this work).** `npm run lint` reports 10 errors:
  - 8 × `react/no-unescaped-entities` in `src/app/privacy/page.tsx` (unrelated to this work)
  - 1 × `@typescript-eslint/no-unused-vars` in `src/components/shared/MascotFloat.tsx` (unused `parallax` prop)
  - 1 × `react-hooks/set-state-in-effect` in `src/hooks/useMediaQuery.ts` (calling `setMatches(media.matches)` directly in an effect body)
  - Verified all 10 errors exist on `master` before any of today's branches were created.
  - **Likely cause:** React 19 / Next 16 tightened the rules; the code was authored before the upgrade. Out of scope for this work but worth a follow-up PR.
- **3 surviving "vibe" mentions** on the live site — all **deliberately kept**, not in scope for PR #7:
  - `Testimonial` section, Sarah Jenkins quote: "The 'vibe' is real." (a real client using the word, not agency copy)
  - `Contact` section body: "vibe over ideas" + "turn your idea into a vibe" (CTA copy, not agency positioning)
  - These are intentional / contextual, not the methodology-jargon "vibe coding" framing that buyers don't search for.
- **3 "vibe" mentions in `WhyCapyCo` feature card highlight** (🇧🇷 🇨🇦) — kept per brief (founders' origin story, not a language toggle signal).
- **`public/images/og-image.svg`** is an unreferenced artifact (the live OG image is `og-image.png`); stale on the old Warm Cream theme. Copy updated, theme not. Separate PR.
- **iCTRL tagline is a draft** — "Real-time inventory across every warehouse, every location, every shift." is my best shot based on the nav description "warehouse management." Will revise once `ictrl.app` has real product copy.
- **TS detail to know:** `siteContent` is `as const` so `siteContent.seo.keywords` is `readonly[]` but `Metadata.keywords` expects `string[]`. Resolved with `as unknown as string[]` cast in `layout.tsx` (with explanatory comment). Don't loosen `as const` — it loses the type safety the convention was set up for.
- **PT/EN toggle** — explicitly decided to NOT build one. Footer flags dropped (PR #7). If/when an actual translation is added, re-introduce a toggle in the Navbar.
- **i18n / HQ follow-up** still tracked in CONTEXT.md next steps.

## Files Changed (PR #4)
- `src/content/site-content.ts` — content store: new `hero.socialProof` (Grapplr), new `whatYouGet` block (6 items), `hero.headline` rewrite, `hero.subtext` rewrite, footer products array updated, SEO title/description/keywords updated, `whyUs.features[0].title` renamed.
- `src/components/sections/Hero.tsx` — outcome-led H1 with per-word gradient accent, new Grapplr social-proof strip with `ArrowUpRight` icon and live link, reads from `siteContent.hero` via destructure.
- `src/components/sections/Marquee.tsx` — **deleted**.
- `src/components/sections/WhatYouGet.tsx` — **new** (85 lines). 2-col grid, Framer Motion stagger reveal, Lucide `Check` icons, dark-theme compliant.
- `src/components/layout/Navbar.tsx` — `productItems` array updated (Grapplr + iCTRL, no `More soon...`).
- `src/components/layout/Footer.tsx` — Products column updated (Grapplr + iCTRL, no `More soon...`).
- `src/app/page.tsx` — dropped `Marquee` import, added `WhatYouGet` import, wired between `Services` and `WhyCapyCo`.

## Files Changed (PR #5)
- `src/content/site-content.ts` — `hero.socialProof` data model extended from `product` (single) to `products` (array). Added iCTRL entry. Swapped `grapplr-seven.vercel.app` → `grapplr.co` in 2 places.
- `src/components/sections/Hero.tsx` — Removed Q3 2026 banner. Refactored social-proof rendering: from single card to `grid grid-cols-1 md:grid-cols-2` with `products.map(...)`. The "We've shipped" label moved to a centered header above the grid.
- `src/components/layout/Navbar.tsx` — `grapplr-seven.vercel.app` → `grapplr.co`.
- `src/components/layout/Footer.tsx` — `grapplr-seven.vercel.app` → `grapplr.co`.

## Files Changed (PR #7)
- `src/content/site-content.ts` — added new `brand` block (shortName, fullName, pwaName, description); `footer.tagline` rewritten; `contact.info.location` = "Calgary, Canada 🇨🇦"; `seo.keywords` cleaned.
- `src/components/layout/Footer.tsx` — rewritten to read from `siteContent.footer` (description, tagline, copyright, columns, socials). Removed hardcoded "vibe coding & marketing agency..." text. Removed 🇧🇷🇨🇦 flags from bottom bar.
- `src/components/sections/Contact.tsx` — now reads `email` + `location` from `siteContent.contact.info` (was hardcoded).
- `src/app/layout.tsx` — title/description/keywords/og/twitter now reference `siteContent.seo` + `siteContent.brand`. Removed "vibe-first", "vibe coding", "wild ideas into digital magic", "Toronto agency". Added `as unknown as string[]` cast for `keywords` to satisfy `Metadata` typing (with comment).
- `src/app/manifest.ts` — name/description now pull from `siteContent.brand.pwaName` + `siteContent.brand.description` (was hardcoded "CapyCo - Vibe Coding & Marketing Agency").
- `src/app/robots.txt` — comment updated to "Product Studio in Calgary, Canada".
- `public/images/og-image.svg` — tagline updated to "product studio in Calgary, Canada". **Theme still stale** (old Warm Cream palette); not in scope for this PR.
- `CAPYCO_LANDING_PAGE_PLAN.md` — **deleted** (30KB, stale since 2026-03-15 Dark Theme Redesign).

## Next Steps
- [ ] **Tackle the pre-existing lint regressions** in a separate PR (small, mechanical fixes).
- [ ] **Tackle the stale `og-image.svg` theme** (or just delete the unreferenced artifact) — separate PR.
- [ ] **Add a real testimonial or case-study section** once content is available — still flagged in the analysis.
- [ ] **Reintroduce a real client logo wall** once 3+ real client logos are available — `trustedBy` block in `site-content.ts` is already stubbed for this.
- [ ] **Revise the iCTRL tagline** once `ictrl.app` has real product copy.
- [ ] **Consider a `Next.js Metadata API` migration** if more SEO/OG work is needed — current `as unknown as string[]` cast is a code smell.

## PRs
- **PR #4**: https://github.com/fortytwowill/CapyCo/pull/4 — MERGED — `fix/capyco-landing-redesign` — `5de1f4fd`
- **PR #5**: https://github.com/fortytwowill/CapyCo/pull/5 — MERGED — `fix/hero-q3-remove-and-ictrl-add` — `376eb448` (squash of `0182e83`)
- **PR #6**: https://github.com/fortytwowill/CapyCo/pull/6 — MERGED — `docs/handoff-context-2026-07-12` — `64bdaac`
- **PR #7**: https://github.com/fortytwowill/CapyCo/pull/7 — MERGED — `fix/capyco-landing-cleanup` — `97cb6ad` (squash of `5e09b9a`)
- **Author verified**: `Will Gomes <willianporto@gmail.com>` (Vercel-accepted) for all four.
- [ ] **Complete Agent Files**: Create/update `AGENTS.md` and `GEMINI.md` with the requested instructions.
- [ ] **Plan Update**: Revise `CAPYCO_LANDING_PAGE_PLAN.md` to match the current Dark Theme implementation.
- [ ] **Asset Check**: Replace placeholder icons in `Marquee.tsx` with real brand logos when available.


## 2026-07-18 — Landing motion polish plan
- Plan: `docs/plans/2026-07-18-landing-motion-polish.md`
- Skills: GSAP pack, threejs-*, genjutsu, motion-design, design-dna (installed on Claude/OpenCode/Codex)
- Not implemented yet — plan only.
