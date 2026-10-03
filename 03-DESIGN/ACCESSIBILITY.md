# Accessibility

> **Purpose:** how the site works for everyone, including keyboard and screen reader users, plus the alt text for every photo.
> **Filled by:** WEB-18 (step 7)
> **Applies to:** every site

**Status:** Written on 2 October 2026 from the design files (DESIGN-SYSTEM.md, UX-SPEC.md, CONTENT.md). It is a plan, not a result: no site code exists, so every item below is NOT TESTED until the app is built and checked. Alt text was written from looking at each photo.

## Target

WCAG 2.2 level AA, on every page, on a phone first.

WCAG 2.2 adds a few rules that matter here:

- **Focus not obscured (2.4.11):** the header is not sticky, and nothing floats over the page, so a focused item is never hidden.
- **Target size (2.5.8):** every tap target is at least 48 by 48 pixels, above the 24 pixel minimum.
- **Dragging (2.5.7):** nothing needs dragging.
- **Consistent help (3.2.6):** email, phone and WhatsApp sit together in the same place in the footer of every page.
- **Redundant entry (3.3.7):** each form asks for each thing once.
- **Accessible authentication (3.3.8):** there are no log-ins and no puzzle or CAPTCHA.

**Checks to run once built** (all NOT TESTED now):

- A keyboard-only walk through every page at 390 and 1280 pixels.
- A VoiceOver pass on iPhone Safari: menu, both forms, page changes.
- Zoom to 200 per cent and a 320 pixel wide window.
- Reduced motion switched on.
- A Lighthouse accessibility run on the built site.
- The contrast table below, run again once cake red is sampled from the cake photos.

## Keyboard and focus

- Every link, button and field is reachable with Tab, in reading order: skip link, logo, navigation (or the Menu button on a phone), the main content, then the footer. No positive `tabindex`.
- **Skip link:** the first thing Tab reaches. It reads "Skip to content", appears only on focus, and moves focus to `<main id="main" tabindex="-1">`.
- **Visible focus:** a 3 px solid cake red ring with a 3 px offset on light surfaces, and a paper ring on sponge, crumb, ink and cake red surfaces. Contrast of the ring is in the table below. `outline: none` is never used without this ring in its place.
- **Recipe rows:** the "Watch on YouTube" link stretches over the whole row, so focus shows as a ring around the row.
- **Photo links** in "From my kitchen" show the ring with a 3 px offset.
- **Common questions** use the shadcn/ui Accordion on Radix UI: each question is a real `button` inside an `h3`, with `aria-expanded`, and a closed answer is hidden from the Tab order and from screen readers. Enter or Space opens and closes each one, and the arrow keys, Home and End move between questions. Several can be open at once. (Changed on 2 October 2026 from native `details` and `summary`, see D-12.)
- **Links that open a new tab** (YouTube, Instagram, TikTok, Threads) carry "(opens in a new tab)" in their accessible name. The four footer social links are named "Dhemmyn Food on Instagram (opens in a new tab)" and so on (changed on 2 October 2026), and the visible platform name is inside that name, so a voice-control user can say "Instagram". Their icons are decorative (`aria-hidden`).
- Escape closes the phone menu. There are no keyboard traps, no time limits, no tooltips, and no hover-only content.
- No pop-ups on arrival and no autoplay.

## Menu on phones

Below 744 px the header shows the logo and a button labelled "Menu" (a word, not an icon alone). From 744 px the full navigation shows and there is no menu button.

- **The button:** at least 48 by 48 px, `aria-expanded` true or false, `aria-controls` pointing at the list. Its label changes to "Close" while the list is open.
- **The list:** Home, Recipes, Custom cakes, Catering, About me, Contact, in that order, inside `<nav aria-label="Main">`. Each item is at least 48 px tall. The current page has `aria-current="page"` and an underline, so colour is not the only signal.
- **Opening:** focus moves to the first link.
- **Closing:** the list closes when the visitor presses "Close", presses Escape, or taps a link. Focus returns to the Menu button. If focus leaves the open list with Tab, the list closes, so a hidden panel never covers a focused item.
- **Closed:** the list is `hidden`, so it is not in the Tab order and screen readers skip it.
- **Reduced motion:** the list appears and disappears at once. Otherwise it grows from the button over 200 ms.
- Nothing needs a gesture, a long press or hovering.

## Colour and contrast

Ratios from DESIGN-SYSTEM.md (WCAG formula, computed 2 October 2026).

| Text | On | Ratio | Where | Needs | Result |
|---|---|---|---|---|---|
| Ink | Paper | 14.63 | Body text, headings, input text | 4.5 | PASS |
| Sponge | Paper | 11.30 | Hints, secondary text, input border | 4.5 (border 3) | PASS |
| Paper | Sponge | 11.30 | Text in the recipe band | 4.5 | PASS |
| Paper | Crumb | 16.43 | Footer, Catering half | 4.5 | PASS |
| Paper | Ink | 14.63 | Phone menu panel | 4.5 | PASS |
| Paper | Cake red | 5.84 | Button label, Custom cakes band, Cakes half on Home | 4.5 | PASS |
| Paper | Cake red deep | 7.86 | Button hover and press | 4.5 | PASS |
| Cake red | Paper | 5.84 | Error text, error border, focus ring | 4.5 (ring 3) | PASS |

Focus ring in paper on sponge (11.30), crumb (16.43), ink (14.63) and cake red (5.84): PASS (needs 3). These pairs fail and are never used: cake red on sponge 1.93, cake red on crumb 2.81, ink on cake red 2.50, sponge on cake red 1.93. No text sits on a photo, so no photo contrast check is needed.

**Colour is never the only signal:**

- Links are underlined.
- The current page has an underline and `aria-current`.
- An error has a thicker border, the message in words, and `aria-invalid`.
- A required field says "(required)" in its label.
- Hover and focus change shape (a lift, a bar, a ring), not just colour.

Windows high contrast and forced colours: NOT TESTED.

## Text and zoom

- Sizes are set in `rem`, so the visitor's own text size setting works. The smallest text is 13 px (the copyright line).
- Body text is 17 px on a phone and 18 px from 744 px, with a line height of 1.5 and lines of at most 68 characters.
- The headline sizes use `clamp` with a `rem` floor, so text zoom still enlarges them. NOT TESTED.
- Text can be zoomed to 200 per cent and the page still works at 320 pixels wide with no sideways scrolling: everything stacks to one column, photos use percentage widths, and no text box has a fixed height. NOT TESTED.
- Pinch zoom is never blocked. No `user-scalable=no`.
- The page works in portrait and landscape.

## Forms

Both enquiry forms (Custom cakes and Catering). Words are in 01-PRODUCT/CONTENT.md, "Form labels and messages".

- **Labels:** every field has a visible label above it. No placeholders are used as labels. A hint sits under the label and is linked to the field with `aria-describedby`.
- **Required:** the label says "(required)" in words. Name, date, and email or phone are required. Email and phone are two fields and at least one must be filled in. The message "Add an email or a phone number so I can reply." is linked to both fields.
- **Field types:** `type="email"`, `type="tel"`, `type="date"`, and `inputmode="numeric"` for servings and guests. Name, email and phone carry `autocomplete="name"`, `"email"` and `"tel"`.
- **Mistakes:** the form does not use the browser's pop-up bubbles. Each message is written in text next to its field, in cake red at 14 px, with a 2 px cake red border and `aria-invalid="true"`. The field's `aria-describedby` points to its message.
- **Summary:** a box above the form says "Something needs fixing before I can send this." Focus moves to it, and it lists the same field messages as links to each field, so no new words are needed.
- **Sending:** the button reads "Sending", stays focusable, and has `aria-disabled="true"`. The line "Sending your enquiry." is announced (`role="status"`).
- **Sent:** the form is replaced by "Thank you. Your enquiry is sent." Focus moves to that message and it is announced.
- **Failed:** a box above the form is announced (`role="alert"`). Nothing typed is lost. The button reads "Try again".
- **Spam protection:** no puzzle or CAPTCHA. Any hidden spam field is hidden from the keyboard and from screen readers.
- Each thing is asked once. There is a plain "Read the privacy notice" link under the button.

## Page changes

React Router changes the page without a full reload, so the site does the work the browser would do:

- After moving to another page, the page starts at the top.
- Focus moves to the new page's main heading (`h1`, `tabindex="-1"`), so a screen reader announces where the visitor is. This does not happen on the first load.
- Each page sets its own `<title>` and meta description (the words are in CONTENT.md).
- The browser's Back button returns to the earlier page without losing the place.

## Motion

- The whole app is wrapped in `<MotionConfig reducedMotion="user">`. With the reduce motion setting on, transform and layout animation stop. The homepage entrance (the lift) renders already in place, hover lifts and press scales do not run, and the phone menu appears at once. Details are in DESIGN-SYSTEM.md, Motion system.
- Nothing flashes. Nothing loops, auto-plays, scrolls on its own or moves for more than a second. The one entrance ends at 720 ms.
- Videos are links to YouTube, never players on the site.

## Structure

- One `h1` per page, and headings in order: `h1`, then `h2` for sections, then `h3` for recipe titles. On Home the `h1` is the hero headline. On Recipes there is no section heading above the recipes, so the recipe titles are `h2`, and "More videos" is `h2` too (changed on 2 October 2026, so no level is skipped). On Custom cakes and Catering the Common questions are `h3` under their `h2`, as the accordion makes each question a heading.
- Landmarks: `<header>`, `<nav aria-label="Main">`, `<main id="main">` and `<footer>`. The footer's page links and social links are each in a `<nav>` with its own label. Sections use `aria-labelledby` with their heading.
- `<html lang="en-GB">`.
- Lists are real lists (the recipes, the navigation, the "How ordering works" steps).
- Link text makes sense on its own: "Watch on YouTube" carries the recipe title in its accessible name, for example "Watch on YouTube: Scones (opens in a new tab)".
- Every page title is different.
- Tap targets are at least 48 by 48 px.

## Photos and alt text

I looked at every file in 03-DESIGN/photos. Alt text is 8 to 15 words, says what matters to a visitor, and never starts with "image of". All 17 photos are meaningful: none is only decoration, so none gets empty alt text. One use is the exception: the sponge slice shown as a small stamp on the Not found page (3 October 2026) is decorative, because it adds nothing the heading does not say, so that one `<img>` has empty alt text. The same picture keeps its alt text on Home and About me.

- **Recipe thumbnails** sit beside the recipe title and are not inside the link. They keep their own alt text.
- **"From my kitchen" photos** are links. Their link name is "Watch the video on YouTube: " followed by the alt text, so each alt text has to read well after those words.
- **The hero pictures** on Home are not links.

| File | What it shows | Alt text | Used on |
|---|---|---|---|
| photos/chocolate-chip-rolls.jpg | A hand holding up a shiny glazed bread roll with chocolate chips, with more rolls on a tray behind. | A hand holds a glazed chocolate chip roll above a tray of more rolls. | Home first screen |
| photos/berry-sponge-slice.jpg | A hand holding a cut slice of pale sponge showing dark berry filling, on a grey surface. | A hand holds a slice of pale sponge with pockets of dark berry filling. | Home first screen |
| photos/profile-chocolate-sponge.jpg | A slice of chocolate sponge with white cream and Oreo crumbs on a white plate. The owner's profile picture. | A slice of chocolate sponge with white cream and Oreo crumbs on a white plate. | Home first screen, About me |
| photos/autumn-cake-series.jpg | A close-up of apple crumble on a fork, with golden crumb on top and soft apple pieces. | Apple crumble from the autumn cake series, golden crumb on soft apple pieces. | Home (Start with a recipe), Recipes lead |
| photos/scones.jpg | Triangles of unbaked scone dough on baking paper, two of them piled with grated cheese. | Triangles of unbaked scone dough on baking paper, two topped with grated cheese. | Home (Start with a recipe), Recipes |
| photos/bread-roll-5-minute.jpg | Unbaked bread rolls in a metal tray, glazed, the middle one covered in sesame seeds. | Unbaked bread rolls in a metal tray, glazed and covered in sesame seeds. | Home (Start with a recipe), Recipes |
| photos/cookies.jpg | A baked cookie with a square of chocolate and sea salt flakes on top, on baking paper. | A baked cookie topped with a square of chocolate and flaky sea salt. | Home (Start with a recipe), Recipes |
| photos/banana-bread.jpg | Slices of dark chocolate banana bread with Oreo pieces inside, lying on white paper. The owner confirmed it is a chocolate banana bread. | Slices of dark chocolate banana bread with pieces of Oreo biscuit inside, on white paper. | Recipes |
| photos/doughnuts.jpg | Round golden dough frying in hot oil in a black pan. | Round golden dough frying in hot oil in a black pan. | Recipes, Contact |
| photos/dodo.jpg | Dark deep-fried pieces with flecks of red chilli, on a white plate. | Pieces of dark, deep-fried food with flecks of red chilli, on a white plate. | Recipes |
| photos/oats.jpg | A clear tub of berry compote swirled with creamy yoghurt. | A clear tub of berry compote swirled with creamy yoghurt. | Recipes |
| photos/instagram/birthday-cake-candles.jpg | A rectangular dark pink cake with dark piped borders, cream piped writing and tall wavy candles, on a silver board. | A dark pink birthday cake with piped borders, cream writing and tall wavy candles. | Home (From my kitchen) |
| photos/instagram/blue-cake-cutting.jpg | A round blue iced cake seen from above, cut in half to show dark sponge layers, with piped drawings and sweets on top. | A blue iced round cake cut in half, showing dark sponge layers and piped decorations. | Home (From my kitchen) |
| photos/instagram/mini-cupcakes.jpg | A pile of golden sponge cupcakes in white paper cases. | A pile of golden sponge cupcakes in white paper cases. | Home (From my kitchen) |
| photos/instagram/braided-chocolate-bread.jpg | Glazed braided bread with dark chocolate through it, in a tray lined with baking paper, one piece pulled up to show the soft inside. | Glazed braided chocolate bread in a tray, one piece pulled away showing soft inside. | Home (From my kitchen) |
| photos/instagram/summer-wine-cake.jpg | A pink iced cake with dark piped edges and cream piped writing, cut into slices on a silver board. | A pink iced cake with dark piped edges, cut into slices on a silver board. | Home (From my kitchen) |
| photos/instagram/chocolate-chunk-loaf.jpg | A loaf with large pieces of dark chocolate on top, and one slice cut beside it on brown baking paper. | A loaf topped with large dark chocolate pieces, with one slice cut beside it. | Home (From my kitchen) |

**Differences from CONTENT.md.** Nine of these alt texts are shorter than the ones already approved in CONTENT.md, because those were over 15 words: chocolate-chip-rolls, berry-sponge-slice, autumn-cake-series, scones, cookies, birthday-cake-candles, blue-cake-cutting, braided-chocolate-bread and chocolate-chunk-loaf. The other eight match CONTENT.md or the owner's own words. The owner approved the nine shorter texts on 2 October 2026 and they are now copied into CONTENT.md, so the two files agree.

**Drawings made in code.** The only drawing is the piped icing on the Custom cakes page (see DESIGN-SYSTEM.md, Illustration style). It is decorative: empty alt text (`alt=""` on an image, or `aria-hidden="true"` on inline SVG), and it is never the only way something is said. There are no icons and nothing else is drawn, except the four social icons in the footer (Instagram, TikTok, YouTube and Threads, added on 2 October 2026 on the owner's instruction), which are decorative and always sit beside the platform name.
