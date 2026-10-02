# Design system

> **Purpose:** the exact colours, fonts, spacing, motion and component states every page uses, taken from the chosen direction.
> **Filled by:** WEB-17 (step 7)
> **Applies to:** every site

**Status:** Saved on 2 October 2026 after the owner approved the draft and its six open points. Sizes marked "tested" come from 03-DESIGN/directions/direction-a.html, checked at 390 and 1280 pixels wide. NOT TESTED: the layout from 744 to 1127 pixels, the photo warmth values, the phone headline at 40 px, the Tailwind names `--text-*` and `--radius-*` (confirm on the first build), and everything not yet built.

*Built from the direction chosen in WEB-15 and from DESIGN-DNA.md. Follows the house rules in section 6 of PROJECT-OS.md. 03-DESIGN/BASE-DESIGN.md (airbnb) supplies structure only: spacing steps, corner steps, the flat shadow rule, the component list and the breakpoints. Nothing of its look is used (D-03).*

## Chosen direction

Direction A, Warm Craft, with the layered collage hero and the ruled recipe list from direction B (D-02 in 08-CHANGE-MANAGEMENT/DECISIONS.md). Dials from DESIGN-DNA.md: layout boldness 5, motion 3, density 4. Light only: no dark mode in version 1.

## Colours

Six named colours: one family of neutrals (paper, ink, sponge, crumb), one accent (cake red) and its pressed shade.

| Name and theme variable | Hex | Role |
|---|---|---|
| Paper `--color-paper` | #F0F3F3 | Page background. Text on dark surfaces. Cool and slightly blue, like baking paper. |
| Ink `--color-ink` | #33190F | Body text and headings. Phone menu panel. |
| Sponge `--color-sponge` | #4B2B20 | Secondary text, hints, input borders. The tray block and the recipe band. |
| Crumb `--color-crumb` | #1D120E | Footer. The Catering half on Home. |
| Cake red `--color-cake-red` | #B0283F | The only accent: primary button, error text, focus ring, selection. Sampled by eye from the cake photos: check against the photo when built. |
| Cake red deep `--color-cake-red-deep` | #8E1F33 | Hover and pressed shade of the same accent. Not a second accent. |

Hairline rules are ink at 30% opacity (`border-ink/30`). They are decorative and need no contrast.

**Contrast of every text pair** (WCAG formula, computed 2 October 2026)

| Text | On | Ratio | Where | Needs | Result |
|---|---|---|---|---|---|
| Ink | Paper | 14.63 | Body text, headings, input text | 4.5 | PASS |
| Sponge | Paper | 11.30 | Hints, secondary text, input border | 4.5 (border 3) | PASS |
| Paper | Sponge | 11.30 | Text in the recipe band, tray | 4.5 | PASS |
| Paper | Crumb | 16.43 | Footer, Catering half | 4.5 | PASS |
| Paper | Ink | 14.63 | Phone menu panel | 4.5 | PASS |
| Paper | Cake red | 5.84 | Button label, Custom cakes band, Cakes half on Home | 4.5 | PASS |
| Paper | Cake red deep | 7.86 | Button hover and press | 4.5 | PASS |
| Cake red | Paper | 5.84 | Error text, error border, focus ring | 4.5 (ring 3) | PASS |

Focus ring in paper on sponge (11.30), crumb (16.43), ink (14.63) and cake red (5.84): PASS (needs 3). Selection is paper on cake red: 5.84.

**Never use these pairs** (they fail): cake red on sponge 1.93, cake red on crumb 2.81, ink on cake red 2.50, sponge on cake red 1.93. Never put text at reduced opacity on a coloured surface. Disabled controls are exempt from contrast, but stay readable.

## Typefaces

| Role | Package | Family name in CSS | Axes | Use |
|---|---|---|---|---|
| Display | `@fontsource-variable/bricolage-grotesque`, imported as `.../wdth.css` | `"Bricolage Grotesque Variable"` | weight 200 to 800, width 75% to 100% (`font-stretch`) | Hero headline, section headings, logo, large links. Weight 800 or 700, width 75% to 85%. |
| Reading | `@fontsource-variable/figtree` | `"Figtree Variable"` | weight 300 to 900 | Body, buttons, forms, nav. Weights 400, 500, 600, 700. |

Both are OFL-1.1 (npm metadata). Add a row to the Fonts table in CREDITS.md when they are installed. Fallbacks are `system-ui, sans-serif`. Never Inter, Roboto or Arial. Family names and axes were read from the packages' own CSS on 2 October 2026.

## Type scale

Phone sizes apply below 744 px, laptop sizes from 744 px. Fluid between with `clamp`. Hero and headings are weight 800 (hero) and 700 to 800, balanced wrapping.

| Token | Font | Phone | From 744 px | Line height | Notes |
|---|---|---|---|---|---|
| Hero `text-hero`, `text-hero-lg` | Display 800, width 75% | `clamp(1.9rem, 10.2vw, 2.5rem)` = 39.8 px at 390 | `clamp(3.25rem, 0.125rem + 6.72vw, 5.5rem)` = 88 px at 1280 | 1.0 phone, 0.96 laptop | Letter spacing -0.015em. Largest text at every width. Two lines at 390 (estimated from the tested 34 px version: line two is about 328 px of 358). Capped at 88 px. |
| Section heading `text-h2`, `text-h2-lg` | Display 800, width 80% | `clamp(1.35rem, 7.3vw, 1.75rem)` = 28.5 px at 390 | `clamp(2.25rem, 0.6rem + 3.2vw, 3.25rem)` = 50.6 px at 1280 | 1.05 | Hero is 1.40 times this on a phone (39.8 / 28.5). |
| Lead recipe title `text-h3-lead` | Display 700, width 85% | 1.5rem (24 px) | 2rem (32 px) | 1.1 | |
| Row and card title `text-h3` | Display 700, width 85% | 1.25rem (20 px) | 1.375rem (22 px) | 1.15 | |
| Lead `text-lead`, `text-lead-lg` | Reading 400 | 1.0625rem (17 px) | 1.25rem (20 px) | 1.5 | Hero support line. 34 ch phone, 30 ch laptop. |
| Body `text-body`, `text-body-lg` | Reading 400 | 1.0625rem (17 px) | 1.125rem (18 px) | 1.5 | Lines of 65 to 75 characters: `max-w-[68ch]`. |
| Small `text-small` | Reading 400 or 500 | 0.875rem (14 px) | same | 1.43 | Hints, error text (500), row meta. |
| Caption `text-caption` | Reading 400 | 0.8125rem (13 px) | same | 1.23 | Copyright line. |
| Button and nav | Reading 600 | 1rem (16 px) | same | 1.25 | |
| Logo | Display 800, width 85% | 1.5rem | 1.75rem | 1 | |

No uppercase text, no tracked-out labels, no small labels above headings. Numbers (video counts, phone number, dates) use tabular figures. Italics are never used for display type, so none is clipped.

## Spacing, corners and borders

- **Spacing (borrowed from the base, 4 px unit):** 2, 4, 8, 12, 16, 24, 32, 48, 64 px, plus 96 px for the one generous quiet section. Tailwind `--spacing: 0.25rem`.
- **Page gutter:** 16 px below 744, 32 px from 744, 48 px from 1128. Content width up to 1280 px, centred. Bands and photos run full width.
- **Section padding (vertical):** 48 px on a phone, 64 px from 744, 96 px for "Meet Demi".
- **Breakpoints (borrowed):** 744 px (`md`: menu becomes the full nav), 1128 px (`lg`: two-column hero and band), 1440 px (`xl`: content stops growing).
- **Corners:** 0 for photos, bands, rows, tray and panels. 4 px for buttons, form fields, the phone menu panel and the skip link. 8 px only for message boxes (sent, failed, error summary). No pills, no other radius.
- **Borders:** 1 px sponge on form fields (2 px ink on focus, 2 px cake red on error). 1 px ink at 30% between list rows. 2 px ink above a ruled list. 1 px ink around the secondary button. No shadows anywhere: depth comes from overlap, the tray block and rules.

## Hero composition

The homepage's first screen, back to front. Headline 6 words: "Easy baking and cooking recipes, online". Under 744 px the text sits above the stage. From 1128 px the text is the left 46% (padding 24 24 48 48), vertically centred, and the stage is the right 54%.

| Layer | What | Phone (tested at 390) | Laptop (tested at 1280) |
|---|---|---|---|
| 1 | Paper background | full | full |
| 2 | Tray: a solid sponge block, 0 radius | from 40% of the stage height to the bottom, full width | from 22% height to the bottom, from 18% of the stage width to the right edge |
| 3 | `berry-sponge-slice.jpg`, 9:16, width min(50%, 290 px) | left 4%, top 5% | left 6%, top 64 px |
| 4 | `chocolate-chip-rolls.jpg`, 9:16, width min(56%, 340 px) | right 5%, bottom -22% of the stage height | right 6%, bottom -60 px |
| 5 | `profile-chocolate-sponge.jpg`, square | 112 px, left 4%, bottom 16 px | 200 px (the largest it may be), left 3%, bottom 28 px |

The stage hides what overflows, so the hand holding the roll is cut by the bottom of the screen and reaches up from beyond it. Photos have no border, radius or shadow. The berry photo has a dark strip down its left edge: clip 1.5% from each side with a clipping wrapper.

- **Contrast of scale:** 40 px headline against 17 px text on a phone, 88 px against 20 px on a laptop. A 340 px photo against a 200 px square.
- **In view without scrolling at 390 x 844:** headline, support line and button. The button bottom measured 306 px in the 34 px version, so about 320 px at 40 px: re-measure when built.
- **No dead space:** the stage is at least 430 px tall on a phone and fills with layers 2 to 5.
- **From 744 to 1127 px (NOT TESTED):** the same stacked layout as a phone, with the stage up to 640 px wide, aligned right, and the tray full width behind it.

## Section rhythm

No two sections on a page share a layout. Every section has one considered detail.

**Home**

| Section | Type | Detail |
|---|---|---|
| Opening | Layered collage | The tray block, and the hand bleeding off the bottom edge. |
| Start with a recipe | Full-bleed sponge band, asymmetric split | The lead photo runs flush to the left edge and the full height of the band (laptop). Below, a ruled list: 2 px paper rule on top, 1 px rules between rows, thumbnails edge to edge. |
| Cakes and catering | Two halves, text only | Left half cake red, right half crumb. Each link is set at lead recipe title size with a 2 px underline. Stacked on a phone, no gap. |
| Meet Demi | Generous quiet section, 96 px padding | "Hi, I'm Demi Yusuf." set at section heading size, the rest at lead size, one column. |
| From my kitchen | Photo strip | Six tall photos edge to edge with 4 px paper gutters: 3 columns by 2 rows on a phone, one row of six from 1128 px. |
| Footer | Crumb band | Phone number in tabular figures at lead size. |

**Other pages**

| Page | Sections and detail |
|---|---|
| Recipes | Heading on paper. Lead recipe as a wide card (4:3 crop). Ruled list, two columns from 1128 px. Closing sponge band with the YouTube button. |
| Custom cakes | Cake red band with the piped drawing (see Illustration style). Enquiry form, one column up to 560 px, 2 px ink rule above. "Message me instead", quiet. How ordering works: the only numbered list, the numbers set in Display 800 because it is a real sequence. Common questions as a ruled disclosure list. Closing sponge band. |
| Catering | Same order as Custom cakes. The opening band is crumb with no drawing, so red stays with cakes. |
| About me | Introduction with the 200 px profile picture hung from the left edge. Four large social links ending the page. |
| Contact | Three large ruled rows (WhatsApp, call, email), form links, How ordering works, closing step. |
| Privacy notice, Not found | Plain reading pages, one column, 68 ch. |

## Illustration style

One drawing, made in code, on the Custom cakes page only: piped icing, as on her red birthday cake. Inline SVG, theme colours only, static (it is not animated).

- **Layers, back to front:** a crumb rope border (a row of tilted ellipses with fine 1.5 px hatching across them); a cream piped swirl in three line weights (6 px, 3 px and 2 px) with a paper highlight at 60% opacity offset beside the thickest line; a few small paper stars and dots, like the piped star on her cake.
- **No letters.** It never fakes writing. Words stay in real text.
- **Size:** at least 56 px tall on a phone (358 px wide), 96 px tall on a laptop, sitting on the bottom edge of the cake red band.
- **Not built yet.** Everything else is photography.

## Components and states

Labels sit above fields. Cards are not used: the recipe row and the lead recipe replace them. Instant changes (colour, underline thickness) have no transition. Only transform and opacity animate.

**Primary button** (cake red, paper label, 52 px high, 0 28 px padding, 4 px radius)
- Normal: as described.
- Hover: cake red deep, lifts 2 px (120 ms).
- Focus: 3 px cake red ring, 3 px offset (paper ring on dark surfaces).
- Active: no lift, scale 0.98 (100 ms).
- Disabled: 60% opacity, no hover or lift. Used only while a form is sending.
- Loading: the label reads "Sending" (or "Try again" after a failure), `aria-disabled="true"`, cursor "progress".
- Error, empty: NOT APPLICABLE. The form carries the error.

**Secondary button** (paper, ink label, 1 px ink border, same size). Hover: ink at 8% fill and lift 2 px. Press and focus as above. On dark: paper border and label, paper at 10% fill on hover. No screen uses two buttons yet.

**Link** (ink, or paper on dark): underline 2 px, offset 0.22em. Hover: underline 3 px. Focus: ring. Active: scale 0.98 on large links only. Visited: the same colour. External links also carry "(opens in a new tab)" for screen readers.

**Form field** (text, email, phone, date, number, textarea): label 16 px weight 600, then the hint in sponge at 14 px, then the field. 56 px high (textarea 144 px minimum), 4 px radius, 1 px sponge border, 16 px side padding, ink text at 17 px. No placeholders. The "(required)" mark is part of the label.
- Hover: border turns ink.
- Focus: border 2 px ink plus the cake red ring.
- Filled: as normal.
- Disabled (while sending): read-only, 60% opacity.
- Error: border 2 px cake red, the message under the field in cake red at 14 px weight 500, `aria-invalid="true"`.
- Empty: the normal state.

**Whole form:** a mistake shows an error summary above the form (1 px cake red border, 8 px radius, ink text) and the field messages. Sending: button "Sending", line below "Sending your enquiry." (`role="status"`). Sent: the form is replaced by a box (1 px sponge border, 8 px radius). Failed: a box above the form with a cake red border, everything typed kept, button "Try again".

**Menu (phone)** Header 64 px: logo left, a "Menu" button right (word, not an icon, 48 px target). Open: the label reads "Close", the panel (ink, 4 px bottom radius, paper links 48 px high) grows from the button, top-right origin, scale 0.96 to 1 and opacity 0 to 1 over 200 ms. Close: opacity only, 120 ms. Focus moves to the first link, then back to the button. Escape closes it. Press on the button: scale 0.98.

**Wide navigation (from 744 px)** Links 16 px weight 600. Hover: a 2 px bar fades in under the link (opacity, 120 ms). Current page: `aria-current="page"` with a permanent 2 px ink bar. Focus: ring.

**Ruled recipe row:** 72 px thumbnail (96 px from 1128), title, "Watch on YouTube" link, 16 px vertical padding, hairline above and below. The link stretches over the whole row, so the target is at least 48 px tall.
- Hover: thumbnail lifts 2 px, underline 3 px.
- Focus: ring around the row.
- Active: thumbnail scale 0.98.
- Disabled, loading, error, empty: NOT APPLICABLE. If a thumbnail fails to load, a sponge fill and the title stay.

**Lead recipe:** the same, with the title at lead recipe title size and a larger photo.

**Photo link (From my kitchen):** hover lifts 4 px (120 ms), press scale 0.98, focus ring with 3 px offset. The link name says it opens the video on YouTube.

**Contact row and social link:** 72 px minimum height, 20 px text, ruled. Hover: the label moves 4 px right (120 ms). Press: scale 0.99. Focus: ring.

**Common questions (disclosure):** the question is the summary, 48 px high, hairline between items. Hover: underline 3 px. Open and close are instant, with a "+" and "-" in text, no icon set.

**Skip link:** hidden above the page, appears on focus (instant), paper on ink, 4 px radius.

**Footer:** crumb band. Links paper, underlined; hover underline 3 px. The copyright line at 13 px. Contact details are tappable and also shown as text.

## Motion system

- **Purpose:** feedback on every interactive element, one change of state (the menu), and one first-screen entrance. Nothing else moves.
- **Motion floor for the dial in DESIGN-DNA.md (3, so the floor is 1 to 3):** an orchestrated entrance on the first screen under 900 ms (the lift); considered hover and press feedback on every interactive element (the Components section lists each one); designed focus rings. The dial stays at 3. The scroll-linked moment and page transitions belong to dials 4 to 6 and are not added.
- **Durations:** `--duration-press` 100 ms, `--duration-hover` 120 ms, `--duration-menu` 200 ms, `--duration-fade` 250 ms, `--duration-lift` 600 ms, stagger 120 ms.
- **Easing:** entrance `cubic-bezier(0.16, 0.84, 0.3, 1)` (`--ease-lift`). Interface `cubic-bezier(0, 0, 0.2, 1)` (Tailwind `ease-out`). Never ease in. No springs: nothing is dragged.
- **What moves:** the lift (Home, once per page load); lead recipe on Recipes (the same rise, once); button, row, photo and contact-row hover and press; the menu panel; the nav hover bar.
- **What never moves:** body text, the headline (it fades by opacity only), anything people repeat many times a day, the piped drawing, form fields, page changes.
- **Reduced motion:** the whole app sits inside `<MotionConfig reducedMotion="user">`. Motion then drops transform and layout animation and keeps opacity and colour (motion.dev, MotionConfig docs). On top of that: the lift renders in its final place with no fade (`initial={false}` when the visitor prefers reduced motion), hover lifts and press scales do not run, and the menu panel appears and disappears at once. Focus rings and colour changes stay.

## Signature moment

**The lift.** The page opens the way her videos do: her hand comes up from the bottom edge holding the bake towards you.

| Time | What | How |
|---|---|---|
| 0 ms | Headline fades in | opacity 0 to 1, 250 ms, ease out |
| 0 ms | `chocolate-chip-rolls.jpg` rises | translate up from 60 px, scale 0.97 to 1, opacity 0 to 1, 600 ms, `--ease-lift`. Ends at 600 ms |
| 100 ms | Support line and button fade in | opacity 0 to 1, 250 ms |
| 120 ms | `berry-sponge-slice.jpg` rises | same, 600 ms. Ends at 720 ms |
| 240 ms | Profile picture rises | same, 600 ms. Ends at 840 ms |

The whole entrance ends at 840 ms (under 900). Only transform and opacity. It plays once per page load, tracked by a module-level flag, so going back to Home during a visit does not replay it. Under reduced motion everything is simply there from the first frame. Echo: the lead recipe photo on Recipes rises the same way, once.

## Browser surfaces

- **Text selection:** paper on cake red (5.84).
- **Focus ring:** 3 px solid cake red, 3 px offset. Paper on sponge, crumb, ink and cake red surfaces.
- **Scrollbar:** `scrollbar-color: sponge paper`, default width.
- **Links:** underline offset 0.22em, thickness 2 px, 3 px on hover.
- **Figures:** `font-variant-numeric: tabular-nums` on numbers, including the video counts and the phone number. No prices are shown ("Prices on request").
- **Other:** `color-scheme: light`, `text-wrap: balance` on headings.

## Photography treatment

Photos are used as supplied. Sources, photographer and licence are in 03-DESIGN/CREDITS.md. All are her own pictures, so no credit line is needed on the site. No stock.

- **Shapes:** tall photos keep their natural 9:16 shape in the hero and the From my kitchen strip. The lead recipe is 4:5 on a phone and the full height of the band from 1128 px, with crop point 50% 58%. Recipes lead card 4:3 at 50% 55%. Row thumbnails are square, centred. Every photo fills its frame edge to edge: no border, radius, shadow or text laid over it.
- **Size caps:** tall photos never wider than 600 CSS pixels (the lead recipe photo at about 582 px is the widest). The profile picture never wider than 200 CSS pixels.
- **Colour and warmth, CSS only:** one class on every photo, `filter: sepia(0.06) saturate(1.04)`, to settle the cool baking paper, white fabric and grey stone. NOT TESTED: check it on the built page against the red cake and the berry photo, adjust once, keep one value for all photos. No per-photo grades, no photo held back.
- **Loading:** each photo has its width and height and a sponge background, so nothing jumps and nothing flashes white.
- **Full bleed:** the hero tray, the lead recipe in the band, the From my kitchen strip, and the closing bands.
- **Gaps:** no wide photos, no finished custom cakes, no event food (see DESIGN-DNA.md, Photography).

## Tailwind theme variables

```css
@import "tailwindcss";

@theme {
  --color-*: initial;
  --color-paper: #F0F3F3;
  --color-ink: #33190F;
  --color-sponge: #4B2B20;
  --color-crumb: #1D120E;
  --color-cake-red: #B0283F;
  --color-cake-red-deep: #8E1F33;

  --font-display: "Bricolage Grotesque Variable", system-ui, sans-serif;
  --font-body: "Figtree Variable", system-ui, sans-serif;

  --breakpoint-*: initial;
  --breakpoint-md: 46.5rem;   /* 744 px */
  --breakpoint-lg: 70.5rem;   /* 1128 px */
  --breakpoint-xl: 90rem;     /* 1440 px */

  --spacing: 0.25rem;         /* 4 px unit */

  --radius-xs: 0.25rem;       /* 4 px */
  --radius-sm: 0.5rem;        /* 8 px */

  --ease-lift: cubic-bezier(0.16, 0.84, 0.3, 1);

  --text-hero: clamp(1.9rem, 10.2vw, 2.5rem);
  --text-hero--line-height: 1;
  --text-hero-lg: clamp(3.25rem, 0.125rem + 6.72vw, 5.5rem);
  --text-hero-lg--line-height: 0.96;
  --text-h2: clamp(1.35rem, 7.3vw, 1.75rem);
  --text-h2--line-height: 1.05;
  --text-h2-lg: clamp(2.25rem, 0.6rem + 3.2vw, 3.25rem);
  --text-h2-lg--line-height: 1.05;
}
```

Imports in `src/main.tsx`: `@fontsource-variable/figtree` and `@fontsource-variable/bricolage-grotesque/wdth.css`. The remaining type tokens (h3, lead, body, small, caption) follow the Type scale table and are added to the same `@theme` block.
