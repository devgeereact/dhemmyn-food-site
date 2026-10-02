# Design audit

> **Purpose:** checks the site looks considered, original and polished, and could only belong to this business.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** In progress. Only the wow check is run, on the homepage. Every other table below is NOT TESTED.

**Last run:** 2 October 2026  
**Tested on:** the owner's dev preview at http://localhost:5175, with Playwright at 390 and 1280 pixels wide. Not the `npm run preview` build, so nothing here is a measurement of speed or layout shift. Screenshots are in 06-QA/screenshots. Layout shift was measured separately on the preview build at http://localhost:4175: 0.036 at 390 px with throttling, from the browser's layout shift API and not from Lighthouse. Lighthouse layout shift stays NOT TESTED. Details are in 08-CHANGE-MANAGEMENT/CHANGELOG.md.

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

## Wow check, every page (2 October 2026)

*Scores are the assistant's own, from screenshots at 390 and 1280 px and from measurements, not the owner's. Each cell is round 1 / round 2 (after the fixes below). Home had three rounds available and needed none after the earlier rounds. Every other page had one round. Screenshots: 06-QA/screenshots/{home,recipes,custom-cakes,catering,about-me,contact,privacy,not-found}-{390,1280}-{top,scrolled}.png.*

| Page | First impression | Distinctiveness | Craft and detail | Typography | Motion | Phone at 390 px |
|---|---|---|---|---|---|---|
| Home | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 |
| Recipes | 7 / 8 | 7 / 8 | 8 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Custom cakes | 7 / 8 | 8 / 8 | 7 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Catering | 7 / 8 | 7 / **7** | 7 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| About me | 8 / 8 | 8 / 8 | 8 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Contact | 7 / 8 | 7 / **7** | 8 / 8 | 7 / 8 | 8 / 8 | 8 / 8 |
| Privacy notice | **6 / 6** | **6 / 6** | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 |
| Not found | 7 / 8 | **6 / 7** | 8 / 8 | 8 / 8 | 8 / 8 | 8 / 8 |

**Why, in one line each**

- Home: unchanged this round and rechecked after the enquiry buttons, the wide-screen fix and the animation fixes. The hero, the type, the palette and her photos carry it. The sections below use common layouts.
- Interior pages, round 1: each page title was set at section-heading size (28 px at 390, 51 px at 1280), so the type had little contrast with the body and the pages opened timidly next to Home. The page title is now set like the Home headline (40 px at 390, 88 px at 1280, one line at every width from 320 to 1920 px). That is what lifted first impression and typography.
- Recipes: the 4:3 lead photo, the ruled list and the sponge band are clear and fast to scan. Distinctiveness 8 rests on the type scale and her own photos in a list, not cards. The lead photo is a dark close-up.
- Custom cakes: the cake red band with the piped icing is the most distinctive thing outside Home. Round 1 craft was 7 because the long form left its left column empty at 1280 px. The form heading now stays in view beside the form (`position: sticky`, checked: it sits 32 px from the top at a scroll of 1500 px).
- Catering: the crumb band with a large title is strong, but it has no picture and no drawing, so it looks like a plain form page. Distinctiveness stays 7. No photo of food made for events exists yet ([NEEDS] in CONTENT.md).
- About me: the profile picture hung from the left edge, the sponge band and the ruled social rows are varied and quiet. Page title fix as above.
- Contact: three ruled rows, two outlined buttons, the numbered list and a closing band are clear and tappable, but nothing on it is hers except the type and colour. Distinctiveness stays 7.
- Privacy notice: one line of text on purpose (owner decision, CONTENT.md says so), so first impression and distinctiveness cannot reach 8 until the real notice is written (WEB-32). The title is left at section size on purpose, because a legal page should stay quiet.
- Not found: the page title now has the Home headline weight, which lifts first impression. Distinctiveness 7: one line, one button, no picture.
- Motion on every page: hover lift and press feedback on buttons, rows and links, designed focus rings (every Tab stop on Home had one; the new pages use the same classes), one entrance on Home and one on Recipes' lead photo. Nothing else moves.

**Measured, not scored** (Playwright on the owner's preview http://localhost:5175): 0 console errors on all 16 page and width pairs; no sideways scroll; no link, button or summary under 48 px; no broken pictures; one `<title>` on every page; the largest text on Home is the headline at 390 and 1280 px.

**Layout shift** (Chromium's layout shift API, not Lighthouse; on the `npm run preview` build at http://localhost:4175, 390 px wide, cache off, 4 times CPU slowdown, 1.6 Mbps and 150 ms latency): Home 0.0356 (one shift at about 2.6 s in the hero scene), Contact 0.0008, every other page 0. All are under 0.1. Lighthouse layout shift is still NOT TESTED by the assistant: the DevTools Lighthouse tool is not permitted, and the Lighthouse command line is not installed. The owner said they will run Lighthouse themselves on the preview build and send the result.

## Quality floor

| Check | Result | Evidence |
|---|---|---|
| The signature moment is on the homepage's first screen | NOT TESTED | |
| The first screen is a composed scene: layers, scale contrast, no dead empty space | NOT TESTED | |
| The hero headline is the largest text on the page at every width, phone included | NOT TESTED | |
| The motion floor for the dial in DESIGN-DNA.md is met: entrance, hover and press feedback, focus rings, and more for higher dials | NOT TESTED | |
| Drawings made in code are rich: layers, varied line weights, texture, details from the trade, generous size | NOT TESTED | |
| Each page mixes section types, and no two sections share a layout | NOT TESTED | |
| Below the first screen, every section has one considered detail, and at least one uses a full-bleed photo or band | NOT TESTED | |
| The hero uses the chosen hero pattern from DESIGN-DNA.md | NOT TESTED | |
| Photos are real, or are drawings in code, or labelled and credited stock that does not pretend to show the business; none are AI-generated images presented as real | NOT TESTED | |

## Distinctiveness

| Check | Result | Evidence |
|---|---|---|
| The swap test: with the name and photos hidden, the site could not be swapped with another business's | NOT TESTED | |
| The Design Read in DESIGN-DNA.md is visible on the first screen | NOT TESTED | |
| Motifs from the trade appear in the design, not only in the words | NOT TESTED | |
| There is one signature moment, and only one | NOT TESTED | |
| One accessory was removed before shipping | NOT TESTED | |

## AI-slop signs (each must be absent)

| Check | Result | Evidence |
|---|---|---|
| Purple-to-blue glow gradients | NOT TESTED | |
| Cream, terracotta and a serif heading used as a reflex | NOT TESTED | |
| Near-black with one acid-green accent | NOT TESTED | |
| Three identical rounded cards in a row | NOT TESTED | |
| Inter on slate grey, or another default font | NOT TESTED | |
| Gradient text or decorative glass effects | NOT TESTED | |
| Small labels above every heading, or fake numbered markers | NOT TESTED | |
| Big number, small label statistic rows | NOT TESTED | |
| Every section fading up on scroll | NOT TESTED | |

## Type, colour and layout

| Check | Result | Evidence |
|---|---|---|
| One or two typefaces, each with a clear role, from DESIGN-SYSTEM.md | NOT TESTED | |
| Lines of 65 to 75 characters; italics and descenders never clipped | NOT TESTED | |
| One accent colour and one family of neutrals | NOT TESTED | |
| First screen: headline in two lines at most, short support line, main button visible at 390 pixels | NOT TESTED | |
| Section layouts vary; no repeated layout or long zigzag | NOT TESTED | |

## Motion

| Check | Result | Evidence |
|---|---|---|
| Every movement has a purpose: feedback, change of state, continuity or explanation | NOT TESTED | |
| Button presses respond in 100 to 160 ms; most motion under about 300 ms | NOT TESTED | |
| Things entering ease out; nothing scales from zero; menus grow from their button | NOT TESTED | |
| Only transform and opacity are animated; nothing repeated daily is animated | NOT TESTED | |
| With reduce motion switched on, movement stops or becomes a simple fade | NOT TESTED | |

## Details

| Check | Result | Evidence |
|---|---|---|
| Every state is designed: hover, focus, disabled, loading, error and empty | NOT TESTED | |
| Selection colour, focus ring, link underlines and tabular price figures are styled | NOT TESTED | |
| Buttons say exactly what they do, from the visitor's side | NOT TESTED | |
| Phone and laptop screenshots match DESIGN-SYSTEM.md | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
