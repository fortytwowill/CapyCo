# CapyCo Landing Motion Polish — Implementation Plan

> **For Hermes:** Use `subagent-driven-development` (or ACP opencode FULL loop) to implement task-by-task. Load skills listed per phase before coding.

**Goal:** Make [capyco.ca](https://capyco.ca) feel like it had a motion team — scroll filmstrip storytelling, premium hero depth, micro-interactions — without new animation libraries or brand drift.

**Architecture:** Keep the existing stack (Next 16 App Router, Framer Motion for UI micro-state, GSAP + ScrollTrigger for scroll choreography, R3F for hero ambient 3D). Elevate quality via installed agent skills (GSAP official, threejs-*, genjutsu, motion-design, design-dna). No Convex/Railway migration. Stay on Vercel.

**Tech Stack (already in package.json):** `gsap`, `@gsap/react`, `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `next@16`, `react@19`, Tailwind 4. Optional add: `lottie-react` **only** in Phase 4 if Lottie assets ship.

**Skills to load (by phase):**

| Phase | Skills |
|-------|--------|
| 0 Direction | `genjutsu`, `genjutsu-cast`, `genjutsu-paint`, `genjutsu-design-audit`, optional `design-dna` |
| 1 Scroll filmstrip | `gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-react`, `gsap-performance` |
| 2 Hero 3D | `threejs-fundamentals`, `threejs-lighting`, `threejs-materials`, `threejs-animation`, `genjutsu-threejs-r3f` |
| 3 Section polish | `genjutsu-framer-motion`, `gsap-utils`, `gsap-plugins` |
| 4 Micro UI | `motion-design` |
| 5 Audit + ship | `genjutsu-design-audit`, `genjutsu-motion-principles` |

**Non-goals / YAGNI:**
- Do **not** add Remotion, CSS-only rewrites of all motion, or a second 3D engine.
- Do **not** replace Framer Motion wholesale — keep it for hover/menu/presence; use GSAP for scroll.
- Do **not** load heavy GLTFs on mobile without a static fallback.
- Do **not** animate for decoration alone (brand principle: Motion with Purpose).

**Hard constraints:**
- Honor `prefers-reduced-motion: reduce` everywhere (static final state, no autoplay loops).
- Mobile (≤768): lighter 3D or CSS fallback; ScrollTrigger with fewer pins.
- Perf budget: Lighthouse mobile Perf ≥ 85; hero WebGL ≤ ~1.5 DPR; kill ScrollTriggers on unmount.
- Brand: warm amber `#F5A623` / coral / teal accents on dark `#0a0a0f` (current live theme). If cream theme returns later, retokenize — don’t hardcode a second palette mid-PR.
- Git author: Will Gomes `<willianporto@gmail.com>`. Feature branch → PR → CI → merge when green.

**Current baseline (audit 2026-07-18):**

| Area | State | Gap |
|------|--------|-----|
| `page.tsx` sections | Hero → Marquee → Services → WhyCapyCo → Stats → Testimonial → Contact → FooterCTA | No cross-section scroll narrative |
| Reveals | Mostly Framer `whileInView` fade-up | Same motion everywhere; no scrub/pin |
| GSAP usage | Stats count-up + Marquee loop only | ScrollTrigger underused |
| Hero 3D | Single `MeshDistortMaterial` sphere, flat lights | Generic “AI blob” look |
| Contact success | Text state only | No delight / Lottie |
| `gsap-utils.ts` | Register + font refresh | No shared reduced-motion helper, no `useGSAP` patterns |
| Navbar | Framer scroll variants | OK; can sync to scroll progress later |

---

## Success criteria

1. Scrolling the home page feels **choreographed** (hero exit → services stagger → stats scrub → CTA punch), not a stack of independent fades.
2. Hero 3D reads **warm CapyCo**, not stock R3F demo; reduced-motion and mobile degrade cleanly.
3. Contact success feels finished (Lottie or high-quality SVG motion).
4. `prefers-reduced-motion` users get an instant, fully usable page with no stuck opacity:0.
5. No new runtime deps except optional `lottie-react` + checked-in assets.
6. PR ships with screenshots (desktop 1440 + mobile 390) and green local CI.

---

## Phase 0 — Creative direction (½ day, no product code required)

**Objective:** One-page motion brief so implementers don’t freestyle.

**Skills:** `genjutsu-cast`, `genjutsu-paint`, optional `design-dna` against 1 reference (e.g. Contra pill nav feel **or** Linear clarity — pick **one**, don’t blend randomly).

### Task 0.1: Motion brief artifact

**Files:**
- Create: `docs/plans/capyco-motion-brief.md`
- Optional: `docs/plans/design-dna-tokens.json` if design-dna is run

**Content checklist:**
- [ ] Emotion per section (Hero: confident warmth; Services: clarity; Stats: proof; Contact: easy trust)
- [ ] What **moves** vs stays still (rule: max 1 “hero motion” + 1 “scroll system” competing at a time)
- [ ] Easing tokens (map to existing `ANIMATION_CONFIG` + GSAP `"power3.out"` / `"none"` for scrub)
- [ ] Reduced-motion policy (jump to final layout; counters show final numbers immediately)
- [ ] Mobile cuts (no pin sections; no particle field)

**Step:** Write brief → commit `docs: add capyco landing motion brief`.

### Task 0.2: (Optional) Design DNA pass

Only if brand feels off vs a loved reference:
```bash
# In Claude/OpenCode with design-dna skill loaded:
# "Extract tokens from <reference URL>; map to CapyCo amber/teal/dark — do not copy layout."
```
Output tokens into brief; **do not** restyle whole site in this project unless brief says so.

---

## Phase 1 — Scroll filmstrip foundation (highest ROI)

**Objective:** Shared GSAP scroll system; upgrade section reveals from “generic fade” to intentional choreography.

**Skills:** `gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-react`, `gsap-performance`

### Task 1.1: Harden `gsap-utils`

**Files:**
- Modify: `src/lib/gsap-utils.ts`
- Create: `src/hooks/usePrefersReducedMotion.ts` (if not already exported cleanly from `useMediaQuery`)
- Modify: `src/hooks/index.ts`

**Implement:**
```ts
// src/lib/gsap-utils.ts — extend, don't rewrite
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function registerGsap() {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** MatchMedia bridge for ScrollTrigger — disable all triggers when reduced motion */
export function scrollTriggerDefaults() {
  return {
    start: "top 80%",
    once: true,
    // callers override for scrub/pin
  } as const;
}

export function killScrollTriggers(scope?: HTMLElement | string) {
  ScrollTrigger.getAll().forEach((t) => {
    if (!scope) return t.kill();
    const trigger = t.trigger;
    if (typeof scope === "string") {
      if (trigger instanceof Element && trigger.closest(scope)) t.kill();
    } else if (trigger instanceof Element && scope.contains(trigger)) {
      t.kill();
    }
  });
}

export { gsap, ScrollTrigger };
export { refreshOnFontsReady } from "./gsap-utils-refresh"; // or keep inline
```

Also export a single `useGsapContext(safeCallback)` pattern using `@gsap/react` `useGSAP` in a thin hook:

**Create:** `src/hooks/useLandingGsap.ts`
```ts
"use client";
import { useGSAP } from "@gsap/react";
import { registerGsap, prefersReducedMotion, gsap, ScrollTrigger } from "@/lib/gsap-utils";
import type { RefObject } from "react";

registerGsap();

export function useLandingGsap(
  effect: (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger; reduced: boolean }) => void | (() => void),
  scope: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
) {
  useGSAP(() => {
    const reduced = prefersReducedMotion();
    return effect({ gsap, ScrollTrigger, reduced });
  }, { scope, dependencies: deps });
}
```

**Verify:** `pnpm exec tsc --noEmit` (or project typecheck script).

**Commit:** `feat(motion): shared gsap helpers + useLandingGsap`

### Task 1.2: Section reveal system (GSAP primary)

**Files:**
- Create: `src/components/shared/GsapReveal.tsx`
- Modify: `src/components/shared/SectionWrapper.tsx` — either wrap GSAP path or deprecate Framer path behind prop `engine="gsap" | "framer"` defaulting to `"gsap"`
- Modify sections that only need enter: `Services.tsx`, `WhyCapyCo.tsx`, `Testimonial.tsx`, `FooterCTA.tsx`

**Behavior:**
- Default: children fade/slide with stagger on enter (`start: "top 85%"`, `once: true`)
- `reduced`: set final styles immediately, no tween
- Prefer animating `transform` + `opacity` only (perf skill)

**Pattern (implementer fills real classNames):**
```tsx
// GsapReveal.tsx
"use client";
import { useRef } from "react";
import { useLandingGsap } from "@/hooks/useLandingGsap";

export function GsapReveal({
  children,
  stagger = 0.08,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useLandingGsap(({ gsap, reduced }) => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduced) {
      gsap.set(items.length ? items : root, { opacity: 1, y: 0 });
      return;
    }
    gsap.set(items.length ? items : root, { opacity: 0, y });
    gsap.to(items.length ? items : root, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: items.length ? stagger : 0,
      scrollTrigger: { trigger: root, start: "top 85%", once: true },
    });
  }, ref);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

**Commit:** `feat(motion): GsapReveal for section enter choreography`

### Task 1.3: Stats scrub / stronger count-up

**Files:**
- Modify: `src/components/sections/Stats.tsx`

**Upgrade:**
- Tie count-up to ScrollTrigger `scrub: true` **or** play-once timeline when 50% visible (prefer play-once for readability; scrub only if brief wants film feel).
- Use `gsap.utils.toArray` + single timeline.
- Reduced motion: final numbers, no tween.

**Commit:** `feat(motion): stats count-up via scroll timeline`

### Task 1.4: Hero → next section handoff

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Optional create: `src/components/sections/HeroScrollExit.tsx`

**Behavior (desktop only):**
- As user scrolls first ~40–60vh: hero headline/CTAs ease up + fade slightly; blob scales/opacifies.
- No hard pin on mobile.
- Must not block links/CTAs (`pointer-events` stay correct).

**Commit:** `feat(motion): hero scroll exit handoff`

### Task 1.5: Marquee polish

**Files:**
- Modify: `src/components/sections/Marquee.tsx`

**Upgrade per gsap-performance:**
- Use `gsap.to` with `repeat: -1`, `ease: "none"`, seamless wrap (duplicate track already?).
- Pause on `prefers-reduced-motion` and optionally `document.hidden`.
- Pause on hover (accessibility + readability) if content is readable text.

**Commit:** `feat(motion): seamless marquee with reduced-motion pause`

---

## Phase 2 — Hero 3D depth (R3F)

**Objective:** Replace “default blob” with warm, branded ambient scene.

**Skills:** `threejs-lighting`, `threejs-materials`, `threejs-animation`, `threejs-fundamentals`, `genjutsu-threejs-r3f`

### Task 2.1: Lighting + material pass

**Files:**
- Modify: `src/components/three/HeroBlob.tsx` (or rename → `HeroScene.tsx` + re-export)

**Changes:**
- Warm key (amber), cool fill (teal `#00D4AA`), soft rim.
- Lower metalness noise; organic roughness; opacity tuned so text stays readable (contrast check).
- Gentle idle motion; slower rotation; optional pointer parallax on desktop only (`threejs-interaction` lite — no full orbit controls fighting scroll).

**Perf:**
- Keep `dpr={[1, 1.5]}`.
- `frameloop="demand"` + invalidate on move **or** low tick rate if idle.
- Unmount canvas if `window.innerWidth < 768` **or** reduced motion → CSS gradient only (already have mesh gradient).

**Commit:** `feat(hero): branded r3f lighting and materials`

### Task 2.2: Optional soft particles (desktop only)

**Files:**
- Create: `src/components/three/HeroParticles.tsx`
- Modify: hero scene composer

**Rules:**
- ≤ 80–120 points; no trails; amber/teal; disable &lt; md and reduced-motion.
- YAGNI if Phase 2.1 already sells the hero — skip if Lighthouse drops.

**Commit:** `feat(hero): optional ambient particles` (or skip)

### Task 2.3: Mascot coordination

**Files:**
- Modify: `src/components/sections/HeroMascot.tsx`, `src/components/shared/MascotFloat.tsx`

**Behavior:**
- Float stays Framer or moves to GSAP; reduce amplitude when reduced-motion.
- Ensure z-index/stacking: text > mascot > blob.
- No simultaneous huge blob distortion + huge mascot bounce (brief: pick primary).

**Commit:** `fix(hero): mascot motion hierarchy with blob`

---

## Phase 3 — Section-level premium details

**Skills:** `genjutsu-framer-motion`, `gsap-timeline`, `genjutsu-css-native`

### Task 3.1: Services bento stagger

**Files:** `src/components/sections/Services.tsx`

- Stagger cards with `data-reveal` + slight scale from 0.98→1.
- Hover: existing scale OK; add border/glow using CSS vars (no layout thrash).
- Keyboard focus styles unchanged (amber ring).

### Task 3.2: WhyCapyCo + Testimonial

**Files:** `WhyCapyCo.tsx`, `Testimonial.tsx`

- Testimonial: AnimatePresence already — tighten exit/enter timings to `ANIMATION_CONFIG`.
- Avoid scroll + carousel animations fighting; pause autoplay when offscreen.

### Task 3.3: Navbar scroll progress (optional)

**Files:** `src/components/layout/Navbar.tsx`

- Thin progress bar using ScrollTrigger `onUpdate` **or** CSS `scroll-timeline` if simpler.
- Don’t rewrite working mobile menu.

**Commits:** one per section group.

---

## Phase 4 — Micro-interactions (Lottie / SVG)

**Skills:** `motion-design`

### Task 4.1: Contact success motion

**Files:**
- Modify: `src/components/sections/Contact.tsx`
- Create: `public/lottie/contact-success.json` (export from skill / LottieFiles, **warm checkmark**, not neon cyber)
- Optional dep: `lottie-react`

**Behavior:**
- On `submitStatus === "success"`, play once; static check icon if reduced-motion or load fail.
- Keep copy + reset path.

**Commit:** `feat(contact): success lottie micro-interaction`

### Task 4.2: Small icon hovers (optional)

Service icons: 1s Lottie on hover is often overkill — prefer CSS/SVG. Only add if brief demands.

---

## Phase 5 — Audit, a11y, perf, ship

**Skills:** `genjutsu-design-audit`, `genjutsu-motion-principles`

### Task 5.1: Reduced-motion full pass

**Manual checklist:**
- [ ] OS reduced-motion on: no infinite loops (marquee/mascot/blob)
- [ ] No elements stuck at opacity 0
- [ ] Stats show final values
- [ ] Contact success shows static success UI

### Task 5.2: Visual QA screenshots

Viewports: **390×844** and **1440×900**.
Capture: hero, services, stats, contact success.

Tools: `agent-browser screenshot` against `pnpm dev` or Vercel preview.

### Task 5.3: Perf gate

```bash
cd ~/CapyCo
pnpm lint
pnpm build
# optional: lighthouse CI or manual on preview
```

Fix: layout shift from fonts (already have `refreshOnFontsReady` — call once in root client provider if missing).

### Task 5.4: Design audit

Load `genjutsu-design-audit`: spacing, type scale, CTA contrast on amber, “AI slop” tells (generic gradients, over-blur, too many competing glows). Apply **surgical** CSS tweaks only.

### Task 5.5: PR loop

```bash
git checkout -b feat/landing-motion-polish
# commits from phases above
pnpm lint && pnpm build
coderabbit review --plain --base main   # disclose if rate-limited
git push -u origin HEAD
gh pr create --base main --title "feat(landing): motion polish (GSAP filmstrip + hero R3F + micro)" --body "..."
# merge when green only
```

**Live test:** production or preview URL; click CTAs, submit contact (disposable), toggle reduced-motion.

**Done report must include:** PR URL, screenshots, `git status` clean, files touched, any skill gaps.

---

## Suggested PR slicing

| PR | Scope | Why |
|----|--------|-----|
| **PR1** | Phase 1 only (GSAP foundation + reveals + stats + marquee + hero exit) | Highest ROI, low asset risk |
| **PR2** | Phase 2 hero 3D | Visual/perf risk isolated |
| **PR3** | Phase 3–4 polish + Lottie | Delight after structure |

Prefer **one PR** if a single agent runs end-to-end in one session and CI stays green; split if hero 3D blows perf.

---

## File touch map (expected)

| Path | Action |
|------|--------|
| `src/lib/gsap-utils.ts` | Expand |
| `src/hooks/useLandingGsap.ts` | Create |
| `src/hooks/index.ts` | Export |
| `src/components/shared/GsapReveal.tsx` | Create |
| `src/components/shared/SectionWrapper.tsx` | Integrate GSAP path |
| `src/components/sections/Hero.tsx` | Scroll exit |
| `src/components/sections/Services.tsx` | Stagger reveals |
| `src/components/sections/WhyCapyCo.tsx` | Reveal polish |
| `src/components/sections/Stats.tsx` | Timeline count-up |
| `src/components/sections/Marquee.tsx` | Perf loop |
| `src/components/sections/Testimonial.tsx` | Timing |
| `src/components/sections/Contact.tsx` | Success motion |
| `src/components/sections/FooterCTA.tsx` | Reveal |
| `src/components/three/HeroBlob.tsx` | Lighting/materials (± particles) |
| `src/components/layout/Navbar.tsx` | Optional progress |
| `src/lib/animations.ts` | Align tokens with brief (Framer leftovers) |
| `public/lottie/contact-success.json` | Optional asset |
| `docs/plans/capyco-motion-brief.md` | Phase 0 |
| `package.json` | Only if `lottie-react` added |

---

## Implementation order (agent checklist)

```
[ ] 0.1 Motion brief
[ ] 1.1 gsap-utils + useLandingGsap
[ ] 1.2 GsapReveal + wire Services/Why/Testimonial/FooterCTA
[ ] 1.3 Stats timeline
[ ] 1.4 Hero scroll exit
[ ] 1.5 Marquee
[ ] 2.1 Hero lighting/materials + mobile fallback
[ ] 2.2 Particles only if budget allows
[ ] 2.3 Mascot hierarchy
[ ] 3.x Section polish
[ ] 4.1 Contact Lottie
[ ] 5.x a11y + screenshots + lint/build + PR
```

---

## Risk register

| Risk | Mitigation |
|------|------------|
| ScrollTrigger + Framer double-driving opacity | One owner per property; GSAP for scroll enter, Framer for hover/menu only |
| Stuck hidden content | Always `gsap.set` final state when `reduced`; `once: true` defaults |
| WebGL battery drain | Mobile disable canvas; cap DPR; pause when offscreen (`useFrame` gate) |
| CLS from late fonts | `refreshOnFontsReady()` once in layout client effect |
| Lottie brand mismatch | Custom warm JSON; no download-random-neon |
| Scope creep (full redesign) | Phase 0 brief is law; design-dna tokens only |

---

## Out of scope (later backlog)

- Full cream-theme restoration vs dark tropical (product/design decision)
- 3D mascot GLTF
- i18n
- Blog/case study pages motion system
- Railway workers (irrelevant to landing)

---

## Handoff

**Plan path (repo):** `docs/plans/2026-07-18-landing-motion-polish.md`  
**Plan path (Hermes):** `~/.hermes/artifacts/2026-07-18/capyco-landing-motion-plan.md`

**Execute with:** ACP opencode FULL loop or `subagent-driven-development`, loading phase skills before each coding task.

**First command when implementing:**
```bash
cd ~/CapyCo && git status && git checkout main && git pull && git checkout -b feat/landing-motion-polish
```
