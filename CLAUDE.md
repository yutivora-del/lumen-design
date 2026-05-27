# Lumen — a quiet design system

## Brand register
- Voice: drafting table, confident quiet
- Says little, means it. No marketing tone, no CTAs in prose, no emoji,
  no Title Case, no exclamation marks.
- Sentence case everywhere, including headings.

## Color tokens (8)
--color-bg: #FAFAF7           /* page background, warm off-white */
--color-surface: #FFFFFF      /* elevated surfaces only */
--color-text: #1A1814         /* primary text, warm near-black */
--color-text-muted: #5F5C55   /* secondary text */
--color-text-faint: #A8A49C   /* tertiary, meta, eyebrows */
--color-border: #1A1814       /* signature: 0.5px black hairlines */
--color-border-soft: #E5E1D6  /* secondary dividers only */
--color-error: #8B2E1F        /* the one exception, error states only */

## Type tokens (11)
--font-sans: 'Inter Variable', system-ui, sans-serif
--font-mono: 'JetBrains Mono Variable', ui-monospace, monospace
--font-display: 'Inter Variable', system-ui, sans-serif

--text-weight-regular: 420
--text-weight-bold: 540
/* Never use 400, 600, or 700. The variable font lets us use 420/540. */

--text-size-step: 1.2
--text-size-base: 16px
--text-line-base: 1.6

/* Headlines use letter-spacing: -0.025em */
/* Eyebrow caps use letter-spacing: 0.1em, text-transform: uppercase */

## Space tokens (5 + unit)
--space-unit: 4px
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 32px
--space-xl: 64px

## Radius tokens (3)
--radius-sm: 2px   /* inputs */
--radius-md: 6px   /* buttons */
--radius-lg: 12px  /* cards */
/* Note: most things use 2px. We are drafted, not friendly. */

## The convention (six rules)
Layer names are an API. These rules govern Figma↔code mapping.

1. A frame is a component. Frame name = React component name,
   singular, PascalCase.
2. A variant property is a prop. Property name = prop name,
   lowercase, no abbreviations.
3. State is never a prop. Hover, focus, disabled live in CSS
   pseudo-classes and ARIA, not props.
4. A style is a token. Figma styles and CSS custom properties share
   one name. Slashes become dashes; nothing else changes.
5. Slots are children. Compound components are separate Figma
   components composed in a parent example frame. The dot in code
   is composition, not nesting.
6. When in doubt, code wins. If a name is awkward, it's ugly in
   Figma, not in code.

## Scope (v0.2)
- 25 components across 8 categories (Actions, Forms, Containers,
  Navigation, Feedback, Data Display, Disclosure, Overlays)
- 22 tokens total (8 color + 11 type + 5 space + 3 radius)
- 5 routes: /, /tokens, /components, /notes, /colophon
- The homepage IS the manifesto essay. There is no separate
  /convention page.

## Visual signatures (the things that make Lumen recognizable)
- Black hairline borders at 0.5px on primary containers
- No accent color — interaction is signaled by background shift,
  underline, or inversion
- Underlined inputs (no full borders, no rounded boxes)
- 2px corner radius on most elements
- Inter Variable at weights 420 and 540 only
- Warm off-white page background (never pure white)
- Sentence case everywhere
- Single-italic serif moments only for editorial deks (one per page)

## What Lumen is NOT
- Not comprehensive. We skip Carousel, Date Picker, Table, Tree View,
  Video Player, Color Picker by design.
- Not marketing. No "Trusted by" logos, no testimonials, no CTAs
  sprinkled through essays.
- Not chatty. Confident quiet means saying little.
- Not generic. Reject Material defaults, shadcn defaults, Tailwind UI
  defaults. Every visual choice is deliberate.

## When you (Claude Code) are unsure
- If a design choice isn't specified above, match the register of
  the existing pages.
- If a Tailwind class would feel out of place in a magazine, don't
  use it.
- If you find yourself reaching for gray-200, border-radius-8,
  font-weight-700, or a colored accent — stop and ask.
- Prefer fewer, more deliberate elements over more, busier ones.
