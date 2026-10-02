# Decisions

> **Purpose:** the important choices made for this project and why, so nobody undoes them by accident.
> **Filled by:** WEB-19 (step 8), and any time an important choice is made
> **Applies to:** every site

**Status:** In use

*Add each decision in this format. Never delete an old decision: mark it replaced and add a new one.*

```
## D-[number] [Short title]

- Date:
- Decision:
- Why:
- Options considered:
- What it means for the project:
- Revisit if:
```

## D-01 Stack

- Date: [date]
- Decision: Vite, React, TypeScript, React Router and Tailwind CSS, published as ready-made files on Netlify
- Why: fast, reliable, cheap to host, no server or database to look after
- Options considered: a website builder; plain HTML and CSS
- What it means for the project: all code lives in app/; only app/dist is published
- Revisit if: the site needs log-ins, payments taken on the site, or a database

## D-02 Design direction

- Date: 2 October 2026
- Decision: Direction A, Warm Craft with the layered collage hero, with the ruled recipe list from direction B. The signature moment is "the lift" (see 03-DESIGN/DESIGN-DNA.md).
- Why: A's overlapping photos carry the owner's hands reaching up with the bake, and use colours from her own bakes. B's ruled list is quick to scan and replaces the three identical cards on Home.
- Options considered: B, Editorial Print with a split screen. C, Soft Organic with a full-bleed photograph, which needs wide photos to work on a laptop. Prototypes and screenshots are in 03-DESIGN/directions/.
- What it means for the project: DESIGN-SYSTEM.md is built from A. Home and Recipes use the ruled list. The B and C files stay as reference only and are never published.
- Revisit if: the owner sends wide photos, or the first screen does not score 8 or more on the wow check in PROJECT-OS.md section 6.

## D-03 Design base: airbnb (from getdesign)

- Date: 2 October 2026
- Decision: use the getdesign "airbnb" entry, saved as 03-DESIGN/BASE-DESIGN.md, as a structure-only reference.
- Why: it is photo-first and warm, it has a small component set, and its spacing ladder, form pattern and list rows fit direction A with the ruled list.
- Options considered: meta (alternating light and dark bands), wired (ruled lists, but too dense and built on uppercase kickers), notion (warm greys too close to the owner's cream and brown).
- What it means for the project:
  - Taken: the spacing scale (2, 4, 8, 12, 16, 24, 32, 48, 64 px on a 4 px base, 64 px section padding). The corner steps 0, 4 and 8 px only. The small type steps (16 px at 1.5, 14 px at 1.43, 13 px, and 16 px and 14 px labels). One shadow rule: flat by default. The component list: primary, secondary and text buttons with press and disabled states; top nav that collapses to logo and Menu below 744 px; text input 56 px high with the label above and a 2 px focus border; list row with a hairline above and below (the base for the ruled recipe row); footer with link columns and a bottom line; 48 px minimum touch target; breakpoints 744, 1128 and 1440 px; content width about 1280 px.
  - Not taken, and never to appear on the site: the colours, including Rausch #ff385c; the fonts Airbnb Cereal VF and Circular; the name, wordmark and wording; hand-drawn icons; hearts, carousel dots, "NEW" and "Guest favorite" badges and the uppercase tag; the search bar and orb; the date picker (the forms use a plain date field); the rating display; reservation, host and review cards; language and currency pickers; the 14 px, 20 px, 32 px and pill corners; rounded clipping of photos; the card hover shadow.
  - The base has no large display type: its biggest headline is 28 px. The headline scale comes from DESIGN-DNA.md, not from this file.
  - Check before launch: search app/dist for "ff385c", "Airbnb" and "Cereal". None may appear.
- Revisit if: the structure proves too small or too round once DESIGN-SYSTEM.md is built.
