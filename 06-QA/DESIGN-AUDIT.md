# Design audit

> **Purpose:** checks the site looks considered, original and polished, and could only belong to this business.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Run once on the built site (3 October 2026). Not yet run on the live site (step 12). The first run found three FAIL rows, all P3 (KI-01, KI-02). The same day KI-01 was fixed (two rows now FIXED) and the Not found part of KI-02 was fixed (Not found 7 to 8); Catering distinctiveness is still 7 and waits for the owner's event photo (that row is PARTIAL). The other wow check scores are from 2 October and were not redone; they were looked at again on the build (see the note under the first table).

**Last run:** 3 October 2026 for every table except the two wow check tables, which are from 2 October 2026.  
**Tested on:** the owner's `npm run preview` at http://localhost:4175, serving `app/dist` (built 2 October 2026 at 23:41, newer than every source file), with Playwright in Chromium at 320 to 1920 pixels wide. No server was started or stopped, and no app file was changed. The wow check scores were made on the owner's dev preview at http://localhost:5175 at 390 and 1280 pixels wide, with screenshots in 06-QA/screenshots. Layout shift was measured separately on the preview build at http://localhost:4175: 0.036 at 390 px with throttling, from the browser's layout shift API and not from Lighthouse. Lighthouse layout shift stays NOT TESTED. Details are in 08-CHANGE-MANAGEMENT/CHANGELOG.md.

Use screenshots at 390 and 1280 pixels wide (Playwright MCP), the live preview, and DESIGN-DNA.md and DESIGN-SYSTEM.md. If installed, also run /impeccable audit and the web-design-guidelines skill and record what they find here.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Wow check: score 1 to 10, with a one-line reason; fix anything under 8 (three rounds at most) and record the scores in CHANGELOG.md

| Check | Result | Evidence |
|---|---|---|
| First impression: score and reason | PASS: 8 | Home, 390 and 1280. The hands, the sponge tray and the heavy condensed headline read at once, and the button is in view at 390 (bottom at 344 of 844 px). Screenshots home-390-top.png, home-1280-top.png. The assistant's own score, not the owner's. |
| Distinctiveness (swap test): score and reason | PASS: 8 | The first screen, the type, the palette from her bakes and her own photos could not be swapped. The sections below the first screen use common layouts (a band, two halves, a photo strip), so the identity comes from the hero, type, colour and photos. Risk to watch, not a fault. |
| Craft and detail: score and reason | FIXED: 8 | Round 1 scored 7: two large links were 42 px tall (target 48 px), one line ended on a single word, and the footer contact rows mixed sizes on one line. All three fixed and rechecked. Still plain by design: Meet Demi has a wide empty right side at 1280. |
| Typography: score and reason | FIXED: 8 | Round 1 scored 7 for the single word on the last line of "Need food for an event? Ask me about catering." Balanced now, and body paragraphs use `text-wrap: pretty`. Headline 39.78 px on two lines at 390 and 88 px at 1280, the largest text at every width. |
| Motion: score and reason | PASS: 8 | One entrance, sampled in a fresh frame: headline at full opacity by about 290 ms, last photo settled by about 910 ms. Button hover measured: lifts 2 px, deep red, 120 ms, only translate and scale transition. Reduced motion: everything in place on the first frame. NOT TESTED by hand: press scale and focus rings. |
| Phone experience at 390 pixels: score and reason | PASS: 8 | No sideways scroll at 320 or 390 px, every link and button now 48 px or taller (checked by script), menu works by keyboard. The 4:5 lead photo is tall (about 490 px) and pushes the recipe list down. |
| Every page scores 8 or more on all six, after at most three rounds (per-page table below) | PARTIAL | Failed on 3 October 2026 with two pages at 7 for distinctiveness. Not found is now FIXED: the sponge slice stamp took it from 7 to 8 in round 3 (see the Not found line below). Catering is still 7 after round 2 and has one round left; it waits on a photo of event food from the owner (CONTENT.md [NEEDS]). KNOWN-ISSUES.md KI-02 stays open for Catering only. |
| Privacy notice reaches 8 on first impression and distinctiveness | BLOCKED (later step) | Both are 6. The page is one line on purpose until the real notice is written (WEB-32, step 11). |

**Recheck on the build, 3 October 2026.** The scores above were not redone. I looked at screenshots on the build at http://localhost:4175 (Home at 390, 768 and 1280; Custom cakes at 390 and 1440; Catering, About me and Not found at 1280; Contact at 390; Recipes at 320 and 1024) and found nothing that contradicts them. The Home entrance now measures about 770 ms from a fresh load (headline at full opacity by about 300 ms), against about 910 ms on the dev preview, so it is under 900 ms. The build is the one measured for layout shift. The assistant's scores, not the owner's.

## Wow check, every page (2 October 2026)

*Scores are the assistant's own, from screenshots at 390 and 1280 px and from measurements, not the owner's. Each cell is round 1 / round 2 (after the fixes below). Contact distinctiveness has a third value, scored after the owner's doughnuts photo was added. Not found distinctiveness also has a third value, scored on 3 October 2026 after the sponge slice stamp was added. Home had three rounds available and needed none after the earlier rounds. Every other page had one round. Screenshots: 06-QA/screenshots/{home,recipes,custom-cakes,catering,about-me,contact,privacy,not-found}-{390,1280}-{top,scrolled}.png.*

| Page | First impression | Distinctiveness | Craft and detail | Typography | Motion | Phone at 390 px |
|---|---|---|---|---|---|---|
| Home | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 |
| Recipes | 7 / 8 | 7 / 8 | 8 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Custom cakes | 7 / 8 | 8 / 8 | 7 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Catering | 7 / 8 | 7 / **7** | 7 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| About me | 8 / 8 | 8 / 8 | 8 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Contact | 7 / 8 | 7 / 7 / **8** | 8 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Privacy notice | **6 / 6** | **6 / 6** | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 |
| Not found | 7 / 8 | **6 / 7 / 8** | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 |

**Why, in one line each**

- Home: unchanged this round and rechecked after the enquiry buttons, the wide-screen fix and the animation fixes. The hero, the type, the palette and her photos carry it. The sections below use common layouts.
- Interior pages, round 1: each page title was set at section-heading size (28 px at 390, 51 px at 1280), so the type had little contrast with the body and the pages opened timidly next to Home. The page title is now set like the Home headline (40 px at 390, 88 px at 1280, one line at every width from 320 to 1920 px). That is what lifted first impression and typography.
- Recipes: the 4:3 lead photo, the ruled list and the sponge band are clear and fast to scan. Distinctiveness 8 rests on the type scale and her own photos in a list, not cards. The lead photo is a dark close-up.
- Custom cakes: the cake red band with the piped icing is the most distinctive thing outside Home. Round 1 craft was 7 because the long form left its left column empty at 1280 px. The form heading now stays in view beside the form (`position: sticky`, checked: it sits 32 px from the top at a scroll of 1500 px).
- Catering: the crumb band with a large title is strong, but it has no picture and no drawing, so it looks like a plain form page. Distinctiveness stays 7. No photo of food made for events exists yet ([NEEDS] in CONTENT.md).
- About me: the profile picture hung from the left edge, the sponge band and the ruled social rows are varied and quiet. Page title fix as above.
- Contact: three ruled rows, two outlined buttons, the numbered list and a closing band are clear and tappable. Round 2 distinctiveness was 7 because nothing on it was hers except the type and colour. The owner's doughnuts photo (above the rows on a phone, to their right from 1128 px) now makes it hers, so distinctiveness is 8, rescored from new screenshots at 390 and 1280 px. It is one tightly cropped frame, a little soft at 416 px wide, and the photo column is taller than the three rows at 1280 px, so it does not score higher than 8. All six Contact scores are now 8 or more.
- Privacy notice: one line of text on purpose (owner decision, CONTENT.md says so), so first impression and distinctiveness cannot reach 8 until the real notice is written (WEB-32). The title is left at section size on purpose, because a legal page should stay quiet.
- Not found: the page title now has the Home headline weight, which lifts first impression. Distinctiveness was 7 (one line, one button, no picture). Round 3, 3 October 2026: the sponge slice from the owner's profile picture was added as a small stamp (112 px above the heading on a phone, 160 px beside the text from 744 px), the "wedge" motif of DESIGN-DNA.md. It makes the page hers, so distinctiveness is 8, rescored from new screenshots at 390 and 1280 px (the assistant's own score). That was the third and last round for this page. KI-02.
- Motion on every page: hover lift and press feedback on buttons, rows and links, designed focus rings (every Tab stop on Home had one; the new pages use the same classes), one entrance on Home and one on Recipes' lead photo. Nothing else moves.

**Measured, not scored** (Playwright on the owner's preview http://localhost:5175): 0 console errors on all 16 page and width pairs; no sideways scroll; no link, button or summary under 48 px; no broken pictures; one `<title>` on every page; the largest text on Home is the headline at 390 and 1280 px.

**Layout shift** (Chromium's layout shift API, not Lighthouse; on the `npm run preview` build at http://localhost:4175, 390 px wide, cache off, 4 times CPU slowdown, 1.6 Mbps and 150 ms latency): Home 0.0356 (one shift at about 2.6 s in the hero scene), Contact 0.0008 (measured again with the photo in place: same value), every other page 0. All are under 0.1. Lighthouse layout shift is still NOT TESTED by the assistant: the DevTools Lighthouse tool is not permitted, and the Lighthouse command line is not installed. The owner said they will run Lighthouse themselves on the preview build and send the result.

## Quality floor

| Check | Result | Evidence |
|---|---|---|
| The signature moment is on the homepage's first screen | PASS | Home at 320, 390, 744, 1128, 1280, 1440 and 1920 px: the lift photos (hand with roll, hand with berry slice, the sponge slice) are in the first screen at every width. At 390 by 844, all three are in view. |
| The first screen is a composed scene: layers, scale contrast, no dead empty space | PASS | Three pictures overlap at every width, measured (390 px: berry and roll photos overlap by 12,276 px squared, slice and berry photo by 4,592), on a sponge tray block. 39.8 px headline against 17 px text at 390; 88 px against 20 px from 1280. Looked at 390, 768 and 1280. |
| The hero headline is the largest text on the page at every width, phone included | PASS | Largest text on Home measured at 320 (32.6 px), 390 (39.8), 744 (52), 1128 (77.8), 1280 to 1920 (88). The next largest is the 28 to 52 px section heading. Six words. Two lines at 320 to 744 px, three lines from 1128 px. |
| The motion floor for the dial in DESIGN-DNA.md is met: entrance, hover and press feedback, focus rings, and more for higher dials | PARTIAL | Dial is 3. Entrance ends at about 770 ms (under 900). Hover feedback changes on all 16 element types tried (nav, both button styles, recipe rows, lead link, text links, photo link, footer links, contact and social rows, accordion, form field, send button). Press measured on the primary button only (scale 0.98, 100 ms). Focus ring present on all 39 Tab stops on Home, not stepped through on the other pages. See "Check by hand". |
| Drawings made in code are rich: layers, varied line weights, texture, details from the trade, generous size | PASS | Custom cakes only: inline SVG with 61 groups, 50 ellipses, 64 paths and 20 circles; stroke widths 6, 3, 2, 1.5 and 1 px; 358 by 56 px at 390 and 1184 by 96 px at 1280, as DESIGN-SYSTEM.md says. No letters, no animation, `aria-hidden`. No other page has a drawing. |
| Each page mixes section types, and no two sections share a layout | FIXED | Failed on 3 October 2026: on Custom cakes and Catering, "Ask for a custom cake" and "Message me instead" were both a heading-left, content-right split, and "How ordering works" and "Common questions" were both a heading with a 768 px ruled list. Fixed the same day (owner approved): from 744 px the three details of "Message me instead" sit in one row, and the two steps of "How ordering works" sit side by side. Retest at 1280 px, measured and looked at: the form is a split (heading at 48, form at 672 to 1232); "Message me instead" is a heading, a line and three details at 48, 264 and 432; "How ordering works" is two ruled columns at 48 to 616 and 664 to 1232 with large numbers; "Common questions" is a heading over a 768 px ruled list. Checked at 320, 744, 1024, 1280 and 1920 px: no sideways scroll, every link intact, no console message. My judgement, not a stranger's: "Message me instead" and "How ordering works" are both a heading over a row of columns, but with three plain inline items against two ruled, numbered columns. KI-01. |
| Below the first screen, every section has one considered detail, and at least one uses a full-bleed photo or band | PASS | Every page has a full-bleed band (sponge, cake red, crumb) or photo. Details found: the flush lead photo, ruled lists, the piped drawing, the numbered steps in Display 800, the 2 px ink rules, the photo strip with 4 px gutters, the doughnuts photo on Contact. |
| The hero uses the chosen hero pattern from DESIGN-DNA.md | PASS | Layered collage with the tray block, as chosen (D-02): three overlapping photos on a sponge tray, with the hand cut by the bottom edge. |
| Photos are real, or are drawings in code, or labelled and credited stock that does not pretend to show the business; none are AI-generated images presented as real | PARTIAL | 03-DESIGN/CREDITS.md lists every photo as a cover of the owner's own YouTube Short, "Own work". No stock. They look like video frames. I cannot prove who made them. The owner should confirm. |

## Distinctiveness

| Check | Result | Evidence |
|---|---|---|
| The swap test: with the name and photos hidden, the site could not be swapped with another business's | PARTIAL | My own test, with the name and photos set aside: the cool paper, chocolate brown and cake red, the heavy condensed headline and the lift entrance are not a template, and no default fonts or colours show. But the sections under the first screen are common layouts (a band, two halves, a ruled list, a form), and the first screen minus the photos is mostly type and colour. Same view as the 2 October scores. A stranger has not done this test. See "Check by hand". |
| The Design Read in DESIGN-DNA.md is visible on the first screen | PASS | The Design Read is "phone-first, for UK followers of her videos, warm, homely, generous". The first screen shows hands holding bakes, "Here to show you good food", warm brown against cool paper, and upright pictures, with a button to the recipes. Looked at 390 and 1280. |
| Motifs from the trade appear in the design, not only in the words | PASS | Colours from the bake (sponge, crumb, cake red, cool paper), her hands in the first screen, the upright 9:16 frame (hero and photo strip pictures are `aspect-[9/16]`), the piped icing drawing on Custom cakes, and the sponge slice stamp in the hero. |
| There is one signature moment, and only one | PASS | The lift on Home, with one echo of the same rise on the Recipes lead photo (allowed by DESIGN-DNA.md). Nothing animates on scroll, and no element below the first screen is faded or moved before it is reached. |
| One accessory was removed before shipping | NOT TESTED | No record found in DECISIONS.md, CHANGELOG.md or 03-DESIGN. DESIGN-DNA.md lists what was left out on purpose, but not one thing cut at the end. Only the owner or the designer can say. See "Check by hand". |

## AI-slop signs (each must be absent)

| Check | Result | Evidence |
|---|---|---|
| Purple-to-blue glow gradients | PASS | No gradient, no shadow and no blur anywhere: computed `background-image` is only pictures, `box-shadow` is none, on all 8 addresses at 390 and 1280 px. Every background is paper, sponge, crumb or cake red. |
| Cream, terracotta and a serif heading used as a reflex | PASS | The paper is cool (#F0F3F3), not cream. The accent is a cool cake red (#B0283F), not terracotta. Headings are Bricolage Grotesque, a sans. |
| Near-black with one acid-green accent | PASS | The one accent is cake red. No green anywhere. The near-black (crumb) is only the footer and the Catering half and band. |
| Three identical rounded cards in a row | PASS | No cards. The recipes are a ruled list, and the only radius is 4 px on buttons, links and fields. The photo strip is six tall photos with no radius, border or text, which is a picture strip, not cards. |
| Inter on slate grey, or another default font | PASS | Only two families on all 8 addresses: Figtree Variable (reading) and Bricolage Grotesque Variable (display), self-hosted. Text colours are only ink, paper and sponge. |
| Gradient text or decorative glass effects | PASS | No `background-clip: text`, no `backdrop-filter`, no blend mode on any element. The only `filter` is the shared `sepia(0.06) saturate(1.04)` on every photo. |
| Small labels above every heading, or fake numbered markers | PASS | No uppercase or letter-spaced text and no italics on any page. The only numbers are 1 and 2 in How ordering works, a real sequence. |
| Big number, small label statistic rows | PASS | None. The two video counts sit inside a sentence on About me. The footer has a small label above each phone number or address, which is contact details, not statistics. |
| Every section fading up on scroll | PASS | Before scrolling, nothing below the first screen has opacity under 1 or a transform. Only the Home entrance and the Recipes lead photo animate. |

## Type, colour and layout

| Check | Result | Evidence |
|---|---|---|
| One or two typefaces, each with a clear role, from DESIGN-SYSTEM.md | PASS | Figtree Variable on 784 text elements (body, buttons, forms, nav) and Bricolage Grotesque Variable on 126 (headline, headings, logo, large links), across 8 addresses at 390 and 1280 px. Sizes match the type scale: headline 39.8 and 88 px, section heading 28 and 50.6 px, body 17 px (phone). |
| Lines of 65 to 75 characters; italics and descenders never clipped | PASS | The multi-line paragraphs on the six content pages were measured at 390, 744 and 1280 px (22, 16 and 15 paragraphs). Longest line is 73 characters at 744 px and 76 at 1280 px, one over the cap. Typical lines are 37 (phone) and 49 characters, because paragraphs are short and some are held narrow on purpose. No italics anywhere. The headline's descenders (g, y, p) are not clipped at 390 or 1280 px in the screenshots; the only clipping ancestor of a heading is the Home first-screen stage, which does not touch the headline. |
| One accent colour and one family of neutrals | PASS | Text colours measured: ink, paper, sponge. Background colours: paper, sponge, crumb, cake red. Cake red is the only accent, with its deep shade only on hover and press. |
| First screen: headline in two lines at most, short support line, main button visible at 390 pixels | PASS | 390 by 844: headline two lines, 39.8 px; support line three short sentences (20 words); "See the recipes" button bottom at 344 px. Also visible at 320 by 640 (bottom 355). From 1128 px the headline is three lines, which the rule does not cover. |
| Section layouts vary; no repeated layout or long zigzag | FIXED | Failed on 3 October 2026 with the same finding as the Quality floor row (Custom cakes and Catering repeated a layout twice each). Fixed and retested the same day, see that row. No zigzag on any page. KI-01. |

## Motion

| Check | Result | Evidence |
|---|---|---|
| Every movement has a purpose: feedback, change of state, continuity or explanation | PASS | The only moving things are the Home entrance (continuity with her videos, once), the Recipes lead photo (the same rise, once), hover and press on interactive elements (feedback) and the phone menu panel (change of state). No looping animation on any page. |
| Button presses respond in 100 to 160 ms; most motion under about 300 ms | PASS | Press 100 ms and hover 120 ms on buttons, rows, photo links and contact rows (computed transition durations). Menu opens in about 200 ms and closes in about 120 ms. Only the 600 ms entrance, once per page load, is longer. |
| Things entering ease out; nothing scales from zero; menus grow from their button | PASS | Every transition uses `cubic-bezier(0.23, 1, 0.32, 1)`; the entrance eases out and starts from scale 0.97, not 0. Menu panel: scale 0.96 to 1 and opacity 0 to 1, with its origin at the top right (390 px, 0), under the button. |
| Only transform and opacity are animated; nothing repeated daily is animated | PASS | Every CSS transition found on elements on all 8 addresses is `translate` or `scale`. Colour and underline changes are instant, as DESIGN-SYSTEM.md says. The menu panel is opacity and scale. The wide nav's hover bar is a pseudo-element, which I changed but did not time. Nothing a visitor repeats (form typing, accordion) animates. |
| With reduce motion switched on, movement stops or becomes a simple fade | PASS | Emulated `prefers-reduced-motion: reduce` at 390 px: Home everything in place from the first frame, hover keeps the colour change but no lift (translate none, transition 0 s), press has no scale, the menu appears at once (opacity 1, no transform from the first sample). |

## Details

| Check | Result | Evidence |
|---|---|---|
| Every state is designed: hover, focus, disabled, loading, error and empty | PASS | Custom cakes form at 390 px, with a mocked response so nothing was sent. Hover: field border turns ink. Focus: 2 px ink border and 3 px cake red ring. Error: 2 px cake red border and a 14 px, weight 500 message in cake red, with a summary box (1 px cake red border, 8 px radius). Loading: button "Sending", 60% opacity, `cursor: progress`, `aria-disabled`, all eight fields read-only at 60%. Failed: box with a cake red border, "Try again", typing kept. Sent: box with a 1 px sponge border and 8 px radius. Empty: not applicable (DESIGN-SYSTEM.md). |
| Selection colour, focus ring, link underlines and tabular price figures are styled | PASS | `::selection` paper on cake red; `:focus-visible` 3 px outline, 3 px offset, in cake red on paper and paper on dark surfaces; link underlines 2 px with 0.22em offset (3.74 px at 17 px); `tabular-nums` on the phone numbers and the video counts; `scrollbar-color` and `color-scheme: light` set. There are no prices to format. |
| Buttons say exactly what they do, from the visitor's side | PASS | See the recipes, Watch on YouTube, Ask for a custom cake, Ask about catering, Send enquiry, Try again, Menu and Close, Watch more on YouTube, Follow on Instagram, Go to the homepage. "Message me" on Contact and "Ask for a custom cake" on the cake page both move to places higher up the same page. |
| Phone and laptop screenshots match DESIGN-SYSTEM.md | PARTIAL | Matches: colours (only the six), fonts, type sizes, 16, 32 and 48 px gutters, 96 px Meet Demi padding, 52 px primary buttons with 28 px padding and 4 px radius, 56 px fields, 72 and 96 px thumbnails, the piped drawing sizes, one shared photo filter, no shadows. Differences: form labels are 17 px (DESIGN-SYSTEM.md says 16 px); accordion questions are 50 px high (48 px plus a 2 px hairline); on Contact at 390 px the WhatsApp row is 91 px high and stacks its number under the label while the Call and Email rows are 72 px and sit on one line. No 744 to 1127 px page was compared beyond Home at 768 and Recipes at 1024. |

## Check by hand

1. **The swap test.** Take the 390 px screenshots of Home and Custom cakes (06-QA/screenshots), cover the name and the photos, and show them to someone who does not know the site. Ask which business it is for. If they say "any baker", the identity rests on the photos alone.
2. **Press and focus on every page.** With a keyboard, press Tab through Recipes, Custom cakes, Catering, About me, Contact and the Not found page and check each stop has a visible ring (on the recipe rows the ring goes round the whole row). With a mouse, press and hold on a recipe row, a photo in "From my kitchen", a contact row and a social row: each should dip slightly.
3. **One accessory removed.** Name the one thing cut before shipping (for example a decoration you tried and took out) and write it in DECISIONS.md. If nothing was cut, remove one now.
4. **Pictures.** Confirm every picture is yours and not made by AI (03-DESIGN/CREDITS.md).
5. **Layout shift.** Run Lighthouse (mobile) on the `npm run preview` build and send the result. This stays NOT TESTED by the assistant.
6. **Other browsers.** Look at the headline and the first screen on an iPhone and in Firefox. The headline uses a width axis (`font-stretch`), which older browsers can ignore.

## Summary

PASS: 34  FIXED: 4  FAIL: 0  PARTIAL: 5  NOT TESTED: 1  BLOCKED: 1  NOT APPLICABLE: 0

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.* The three FAIL rows of the first run are dealt with: KI-01 (the repeated layouts on Custom cakes and Catering, two rows) is FIXED, and KI-02 (the wow scores of 7) is half done: Not found reached 8, and Catering waits for the owner's event photo, so that row is PARTIAL and KI-02 stays open for Catering.
