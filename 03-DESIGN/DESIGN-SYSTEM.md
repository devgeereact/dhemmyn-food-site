# Design system

> **Purpose:** the exact colours, fonts, spacing, motion and component states every page uses, taken from the chosen direction.
> **Filled by:** WEB-17 (step 7)
> **Applies to:** every site

**Status:** Empty

*Built from the direction chosen in WEB-15 and from DESIGN-DNA.md. Follows the house rules in section 6 of PROJECT-OS.md.*

## Chosen direction

*Which direction, or mix, and the archetype it came from.*

## Colours

*Four to six named colours: one accent and one family of neutrals. Body text at least 4.5 to 1, large text, focus rings and icons at least 3 to 1.*

| Name and theme variable | Hex | Role | Contrast |
|---|---|---|---|
| | | Page background | |
| | | Body text | |
| | | Accent (the only one) | |

## Typefaces

*One or two, each with a role (display, reading). Installed from Fontsource (`@fontsource-variable/<font>`), or from Fontshare with the licence file kept inside the app. Never Inter, Roboto or Arial by default.*

## Type scale

*Sizes for display, headings, body (at least 16 pixels, often 18), small print and buttons. Lines of 65 to 75 characters. A cap on display size so headlines fit two lines on a phone.*

## Spacing, corners and borders

*A small set of spacing steps, such as 4, 8, 12, 16, 24, 32, 48, 64 and 96 pixels. Corners and borders kept few and consistent.*

## Hero composition

*The homepage's first screen as a composed scene: the layers (from back to front), the contrast of scale, where the signature moment sits. The headline is the largest text on the page at every width, under eight words where possible, two lines at most at 390 pixels, with the support line and main button in view. No dead empty space.*

## Section rhythm

*The section types each page uses, such as a full-bleed band, an asymmetric split, a dense list or table, and a generous quiet section. No two sections on a page share a layout. Every section has one considered detail (a photo crop, a small drawing, a rule, a number style), and at least one uses a full-bleed photo or band.*

## Illustration style

*Only if drawings are made in code: layers, line weights, texture or hatching, details from the trade, and size. One consistent style.*

## Components and states

*For each: button (main and second), link, form field, menu, card. Every state: normal, hover, focus, active, disabled, loading, error and empty. Labels above fields.*

## Motion system

- Purpose: *feedback, change of state, continuity or explanation only*
- Motion floor for the dial in DESIGN-DNA.md: *1 to 3: staggered entrance on the first screen under about 900 ms, hover and press feedback everywhere, designed focus rings. 4 to 6: add one scroll-linked or in-view moment per page and subtle page transitions. 7 to 10: add a richer signature interaction.*
- Durations: *button press 100 to 160 ms; most interface motion under about 300 ms; the signature moment may be longer*
- Easing: *ease out for things entering; never ease in for interface movement; springs for drags and gestures*
- What moves: *[list]*
- What never moves: *anything visitors repeat many times, body text, prices*
- Reduced motion: *MotionConfig reducedMotion="user"; describe what each movement becomes*

## Signature moment

*Described exactly: what happens, when, how long, and what it becomes with reduced motion.*

## Browser surfaces

*Text selection colour, focus ring (colour, width, offset), scrollbar, link underline offset, tabular figures for prices.*

## Photography treatment

*How photos are cropped and shaped (ratios for phone and laptop), colour and warmth, where a full-bleed photo or band appears, and credits for any stock photos. Photos are used as supplied: any colour treatment is done in CSS. Every photo's source, photographer and licence is in 03-DESIGN/CREDITS.md. If there are no photos yet, say which route: drawings in code, or labelled stock as a stopgap.*

## Tailwind theme variables

*The names used in app/src/index.css, for example:*

```
@theme {
  --color-flour: #F6F1E7;
  --font-display: "Your Display Font Variable", serif;
}
```
