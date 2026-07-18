# CapyCo Landing — Motion Brief

**Date:** 2026-07-18  
**Theme:** Dark tropical / soft futurism (live site: `#0a0a0f`, amber `#F5A623`, teal `#00D4AA`)

## Emotion by section

| Section | Emotion | Moves | Stays still |
|---------|---------|-------|-------------|
| Hero | Confident warmth | Headline word reveal, soft blob, gentle mascot float, scroll exit | CTAs clickable always |
| Marquee | Steady social proof | Infinite horizontal crawl | Copy header |
| Services | Clarity | Card stagger enter + hover scale | Icons as accents only |
| Why CapyCo | Trust | Card stagger | Watermark |
| Stats | Proof | Count-up once in view | Labels |
| Testimonial | Human | Crossfade only | Layout |
| Contact | Easy trust | Form focus rings; success scale-in + check pulse | Fields |
| Footer CTA | Punch | Single enter | Button hover CSS |

## Rules

1. **One hero motion + one scroll system** — blob idle OR mascot float is primary ambient; don’t amp both.
2. **GSAP owns scroll enter**; Framer owns hover / menu / presence.
3. **Easing:** enter `power3.out` / Framer `[0.22, 1, 0.36, 1]`; loops `none` or `easeInOut`.
4. **Reduced motion:** final layout immediately; no loops; stats show final numbers; no WebGL animation.
5. **Mobile (≤768):** no scroll-pin; disable or static-fallback WebGL; shorter staggers.

## Success feel

Scrolling should feel like a short film strip, not a stack of identical fades. Contact success should feel “done,” not empty.
