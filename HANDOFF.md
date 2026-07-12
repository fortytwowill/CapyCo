# Agent Handoff Log

## Current State
- **Last agent**: Hermes (claude-code subagent, MiniMax-M3)
- **Date**: Sunday, July 12, 2026
- **Branch**: `master` (PR #5 merged)
- **Status**: Two PRs shipped today (PR #4 + PR #5), all 5 high-priority landing-page redesign changes + iCTRL hero addition + grapplr.co swap + Q3 2026 banner removal. Build green, CodeRabbit skipped on PR #5 (rate-limited, disclosed in PR body).

## What Was Done
Implemented all 5 high-priority changes from the capyco.ca vs neoomni.com landing analysis (brief: `~/.hermes/artifacts/2026-07-12/capyco-redesign-brief.md`).

1. **Hero is now outcome-led, not methodology-led.** H1 changed from `Think. Create. Grow.` (with vibe-coding subtitle) to **`We build, launch, and grow your product.`** Subhead is also rewritten. The "vibe coding" jargon — which nobody searches — is gone from the H1.
2. **Grapplr in the hero.** New social-proof strip directly under the CTAs. Originally single product (PR #4), extended to two-product array (PR #5). Each card links to the live product. `https://grapplr.co` is the production domain (swapped from the Vercel preview URL in PR #5).
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

## What's In Progress
- (nothing — both PRs merged, both verified live on Vercel production)

## Known Issues
- **Pre-existing lint regressions (not from this work).** `npm run lint` reports 10 errors:
  - 8 × `react/no-unescaped-entities` in `src/app/privacy/page.tsx` (unrelated to this work)
  - 1 × `@typescript-eslint/no-unused-vars` in `src/components/shared/MascotFloat.tsx` (unused `parallax` prop)
  - 1 × `react-hooks/set-state-in-effect` in `src/hooks/useMediaQuery.ts` (calling `setMatches(media.matches)` directly in an effect body)
  - Verified all 10 errors exist on `master` before either branch was created (re-ran lint against a stashed working copy).
  - **Likely cause:** React 19 / Next 16 tightened the rules; the code was authored before the upgrade. Out of scope for this redesign but worth a follow-up PR.
- **4 hardcoded "vibe coding" references leaked outside the content store** (PR #4 strict-content discipline was correct, but the rule wasn't applied to all files). Locations:
  - `src/components/layout/Footer.tsx:24` — "We're a vibe coding & marketing agency that turns wild ideas into digital magic."
  - `src/app/layout.tsx:38` — meta description: "Build. Ship. Grow. A vibe-first coding & marketing agency..."
  - `src/app/layout.tsx:43` — keywords array: "vibe coding"
  - `src/app/manifest.ts:5` — PWA name: "CapyCo - Vibe Coding & Marketing Agency"
  - **Follow-up PR:** move these to `site-content.ts` and reference them. Tracked as a separate clean-up PR.
- **`CAPYCO_LANDING_PAGE_PLAN.md` is still stale** on the "Warm Cream" theme (carried over from before 2026-03-15 Dark Theme Redesign decision). The plan file should be deleted or updated to reflect the dark theme + current layout.
- **HQ location still ambiguous** — `FooterCTA`/Contact section references "Canada 🇨🇦" but the analysis flagged Calgary vs Vancouver. The actual city should be confirmed and the line updated.
- **PT/EN toggle missing** — the Brazil/Canada flags in the footer still imply a language toggle that doesn't exist. Either add a toggle or drop the flags.
- **iCTRL tagline is a draft** — "Real-time inventory across every warehouse, every location, every shift." is my best shot based on the nav description "warehouse management." Will revise once `ictrl.app` has real product copy.
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

## Next Steps
- [ ] **Tackle the 4 hardcoded "vibe coding" references** in Footer/layout/manifest. Move to `site-content.ts` and reference. **PR #5 deliberately didn't touch these** to keep the diff focused.
- [ ] **Tackle the pre-existing lint regressions** in a separate PR (small, mechanical fixes).
- [ ] **Delete or rewrite `CAPYCO_LANDING_PAGE_PLAN.md`** — the plan file is stale on the dark theme and the old layout.
- [ ] **Decide on PT/EN toggle vs flag removal** — pick one path.
- [ ] **Update HQ city** in `FooterCTA` / Contact section once actual city is confirmed.
- [ ] **Add a real testimonial or case-study section** once content is available — still flagged in the analysis.
- [ ] **Reintroduce a real client logo wall** once 3+ real client logos are available — `trustedBy` block in `site-content.ts` is already stubbed for this.
- [ ] **Revise the iCTRL tagline** once `ictrl.app` has real product copy.

## PRs
- **PR #4**: https://github.com/fortytwowill/CapyCo/pull/4 — MERGED — `fix/capyco-landing-redesign` — `5de1f4fd`
- **PR #5**: https://github.com/fortytwowill/CapyCo/pull/5 — MERGED — `fix/hero-q3-remove-and-ictrl-add` — `376eb448` (squash of `0182e83`)
- **Author verified**: `Will Gomes <willianporto@gmail.com>` (Vercel-accepted) for both.