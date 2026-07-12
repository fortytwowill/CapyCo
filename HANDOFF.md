# Agent Handoff Log

## Current State
- **Last agent**: Hermes (claude-code subagent, MiniMax-M3)
- **Date**: Sunday, July 12, 2026
- **Branch**: `fix/capyco-landing-redesign` (PR #4 open against `master`)
- **Status**: 5 high-priority landing-page redesign changes implemented, build green, lint regressions are pre-existing (not from this work).

## What Was Done
Implemented all 5 high-priority changes from the capyco.ca vs neoomni.com landing analysis (brief: `~/.hermes/artifacts/2026-07-12/capyco-redesign-brief.md`).

1. **Hero is now outcome-led, not methodology-led.** H1 changed from `Think. Create. Grow.` (with vibe-coding subtitle) to **`We build, launch, and grow your product.`** Subhead is also rewritten. The "vibe coding" jargon — which nobody searches — is gone from the H1.
2. **Grapplr in the hero.** New social-proof strip directly under the CTAs: "We built **Grapplr** — find a BJJ training partner in your city in under 60 seconds. [Try it live]". Links to `https://grapplr-seven.vercel.app`. The single most credible thing the agency can say; now lives in the eye-line of the H1.
3. **Placeholder client logo wall removed.** Deleted `src/components/sections/Marquee.tsx` entirely. It was rendering 6 fake brand names (BrewTech, HexaData, ZapScale, SecureNet, GlobalReach, StarLaunch). The footer-trusted-by strip is also gone from the page composition.
4. **"More soon..." placeholders removed.** Both `Navbar.tsx` products dropdown and `Footer.tsx` products column now show only the two real products: **Grapplr** + **iCTRL**. SEO `title` and `description` updated to match.
5. **New `WhatYouGet` section** between Services and WhyCapyCo. 6 concrete deliverables in a 2-col grid — borrowed pattern from neoomni.com's "What You'll Get" list. Tells the buyer what their life looks like after hiring us. Items: shipped MVP in 8–12 weeks, owned codebase, marketing baked in, weekly demos, product-not-project framing, one team design-through-launch.

Plus a small bonus rename: WhyCapyCo's "Vibe Coding" feature card is now **"AI-Assisted Development"** — keeps the principle (we use AI tooling), drops the jargon.

### Content discipline
- All copy lives in `src/content/site-content.ts` per the repo's content-centralization convention.
- No hardcoded strings in JSX.
- `Hero.tsx` now destructures from `siteContent.hero` and uses the existing `wordReveal` / `wordItem` animations on the new longer H1.

## What's In Progress
- **CodeRabbit review** is running in the background. Will post results to PR #4 thread if/when it returns. (Initial foreground run timed out at 180s; re-running with a longer timeout.)
- **Live deploy preview** depends on Vercel picking up the branch — not yet confirmed.

## Known Issues
- **Pre-existing lint regressions (not from this PR).** `npm run lint` reports 10 errors:
  - 8 × `react/no-unescaped-entities` in `src/app/privacy/page.tsx` (unrelated to this work)
  - 1 × `@typescript-eslint/no-unused-vars` in `src/components/shared/MascotFloat.tsx` (unused `parallax` prop)
  - 1 × `react-hooks/set-state-in-effect` in `src/hooks/useMediaQuery.ts` (calling `setMatches(media.matches)` directly in an effect body)
  - Verified all 10 errors exist on `master` before this branch was created (re-ran lint against a stashed working copy).
  - **Likely cause:** React 19 / Next 16 tightened the rules; the code was authored before the upgrade. Out of scope for this redesign but worth a follow-up PR.
- **`CAPYCO_LANDING_PAGE_PLAN.md` is still stale** on the "Warm Cream" theme (carried over from before 2026-03-15 Dark Theme Redesign decision). The plan file should be deleted or updated to reflect the dark theme + current layout.
- **HQ location still ambiguous** — `FooterCTA`/Contact section references "Canada 🇨🇦" but the analysis flagged Calgary vs Vancouver. The actual city should be confirmed and the line updated.
- **PT/EN toggle missing** — the Brazil/Canada flags in the footer still imply a language toggle that doesn't exist. Either add a toggle or drop the flags.
- **i18n / HQ follow-up** still tracked in CONTEXT.md next steps.

## Files Changed
- `src/content/site-content.ts` — content store: new `hero.socialProof` (Grapplr), new `whatYouGet` block (6 items), `hero.headline` rewrite, `hero.subtext` rewrite, footer products array updated, SEO title/description/keywords updated, `whyUs.features[0].title` renamed.
- `src/components/sections/Hero.tsx` — outcome-led H1 with per-word gradient accent, new Grapplr social-proof strip with `ArrowUpRight` icon and live link, reads from `siteContent.hero` via destructure.
- `src/components/sections/Marquee.tsx` — **deleted**.
- `src/components/sections/WhatYouGet.tsx` — **new** (85 lines). 2-col grid, Framer Motion stagger reveal, Lucide `Check` icons, dark-theme compliant.
- `src/components/layout/Navbar.tsx` — `productItems` array updated (Grapplr + iCTRL, no `More soon...`).
- `src/components/layout/Footer.tsx` — Products column updated (Grapplr + iCTRL, no `More soon...`).
- `src/app/page.tsx` — dropped `Marquee` import, added `WhatYouGet` import, wired between `Services` and `WhyCapyCo`.

## Next Steps
- [ ] **Confirm CodeRabbit results** — review any issues it raises and patch if they're about this PR's surface.
- [ ] **Verify Vercel preview deploy** — open the preview URL and eyeball the new hero, the social-proof strip, and the WhatYouGet section.
- [ ] **Tackle the pre-existing lint regressions** in a separate PR (small, mechanical fixes).
- [ ] **Delete or rewrite `CAPYCO_LANDING_PAGE_PLAN.md`** — the plan file is stale on the dark theme and the old layout.
- [ ] **Decide on PT/EN toggle vs flag removal** — pick one path.
- [ ] **Update HQ city** in `FooterCTA` / Contact section once actual city is confirmed.
- [ ] **Add a real testimonial or case-study section** once content is available — still flagged in the analysis.
- [ ] **Replace the `Grapplr` URL** with the production URL once `grapplr-seven.vercel.app` graduates.
- [ ] **Reintroduce a real client logo wall** once 3+ real client logos are available — `trustedBy` block in `site-content.ts` is already stubbed for this.

## PR
- **PR #4**: https://github.com/fortytwowill/CapyCo/pull/4
- **Branch**: `fix/capyco-landing-redesign`
- **SHA**: `5de1f4fd7212ddfd0500df8e6ee8c9621213867e`
- **Author verified**: `Will Gomes <willianporto@gmail.com>` (Vercel-accepted)
