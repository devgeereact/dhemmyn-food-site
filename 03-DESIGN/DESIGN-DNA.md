# Design DNA

> **Purpose:** what makes this site's design belong to this business and no other.
> **Filled by:** WEB-14 (step 7), then the chosen direction from WEB-15 and WEB-17
> **Applies to:** every site

**Status:** Saved on 2 October 2026 after the owner confirmed the red accent, the ruled list on Home and the first screen pictures. Chosen direction still open until WEB-15.

*Every design decision in DESIGN-SYSTEM.md must trace back to this file. Keep it to one page.*

## Design Read

A phone-first homepage for UK followers of Demi Yusuf's short upright baking videos, and for people asking her for a cake or catering; warm, homely and generous, a kitchen you could stand in and a bake you could make today.

## Motifs from the trade

- **Colours from the bake, not from a palette tool.** Chocolate sponge brown (deep, a little red in it). White cream, cool and slightly blue like the cream and the baking paper in her photos, not yellow or beige. Oreo crumb, near-black brown. One accent: the red of her piped birthday cake, confirmed by the owner on 2 October 2026. Neutrals are the brown, cream and crumb family. The red is the only accent. The profile picture supplies the neutrals and her cake photos supply the red.
- **Her surfaces.** Crinkled baking paper, metal trays, silver cake boards, white plates and paper, a black frying pan, a grey stone worktop. These are what her photos show. No wooden tables, flour clouds or props she does not use.
- **Her hands.** Her hands hold the bake up to the camera. Hands are the scale and the pointer of the site.
- **The upright frame.** Her videos are short and upright (9:16). Her stills are that shape. The site is built around tall pictures, not around landscape banners.
- **Piped writing.** Cream script and chocolate rope borders on a red cake. Used once, drawn, on the Custom cakes page. Never as a font.
- **The wedge.** A slice of sponge on a plate, the shape of the profile picture. Used as a small stamp, not as a pattern.
- **Her words.** Easy. Authentic. Whip up. Pack cake with me. Here to show you good food. From my kitchen. Short, first person, no sales words (see Voice in CONTENT.md).
- **Scones sit beside dodo.** The range is wide, so the look must not become an English tea room: no gingham, doilies, chalkboards, rolling pins or chef hats.

## Audience and mood

- **Who:** followers from Instagram, TikTok and YouTube, mostly UK, arriving on a phone from a video. Also people asking for a birthday cake or event food. Ages not known.
- **How they feel:** like a friend showing them the bake in her own kitchen. The thought is "I could make that", never "that is fancy".
- **Not:** fancy, childish, shop-like or tidy to the point of cold.

## Dials

- **Layout boldness: 5.** Bold in one place, the homepage first screen: a big headline and overlapping tall photos. Below it the layout is plain and easy to scan. Not 7 or more, because homely means a regular, readable page, not a poster.
- **Motion: 3.** Her videos already move; the site stays calm. One entrance on the first screen, careful hover, press and focus feedback, nothing scroll-linked, nothing slow.
- **Density: 4.** Pages are short (Home about 100 words, Recipes about 60). Generous space on Home and About me. The Recipes list is tighter and ruled so eight recipes scan quickly on a phone.

## Signature moment

**The lift.** The page opens the way her videos do: her hand comes up from the bottom edge of the screen holding the bake towards you.

- On a phone, the first picture is photos/chocolate-chip-rolls.jpg, a hand holding a roll. It sits against the bottom edge of the screen, so the hand reaches up from off-screen and the bake sits in the upper half of its frame, under the headline and button. photos/berry-sponge-slice.jpg, a second hand holding a bake, overlaps it. The small profile picture of the chocolate sponge (about 200 CSS pixels wide at most) overlaps both.
- On load the headline fades in by opacity only. The tall photo then rises about 60 px into place with a slight settle in size, easing out. The second and third pictures follow 120 ms apart. Transform and opacity only. All of it under 900 ms. Under reduced motion everything is simply there.
- Echo: the lead recipe on Recipes rises the same way, once.
- The piped line under a headline is not used here. Any cake baker could have it. The upright frame and the reaching hand are hers.

## Never use on this site

From section 6 of PROJECT-OS.md: purple-to-blue glow gradients; cream with terracotta and a serif heading as a reflex; near-black with one acid-green accent; three identical rounded cards in a row; Inter on slate grey; gradient text; decorative glass effects; small labels above every heading; fake numbered markers; "big number, small label" statistic rows; stock illustrations of people.

Also, for this business:

- Terracotta, clay orange, yellowed or "parchment" beige, and paper-texture backgrounds. The cream is cool and white.
- Thin, high-contrast serif headings and script fonts for headings.
- Tea-room clichés: gingham, doilies, chalkboards, rolling pins, whisks, cupcake or chef-hat icons, sprinkles and confetti.
- Cartoon or childish shapes. Playful Pop is out.
- Stock food photos, AI pictures, or photos of other people's cakes.
- Photos in rounded boxes, with borders, frames or soft grey shadows. Photos fill their space edge to edge.
- Text or rules laid over a busy part of a photo, and dark gradient scrims.
- Play-button icons on thumbnails. Videos are links, never players.
- Follower counts, star ratings, "latest", "new" or "popular" tags, or any number the owner has not confirmed.
- Pop-ups on arrival, autoplay video, and slow or looping motion.

## Reference board

Techniques from the owner's notes, not re-checked on the live sites. Technique only. Never their layouts, words or pictures. A borrowed technique never runs across text or photos.

| Site | Technique to borrow |
|---|---|
| ottolenghi.co.uk | Food close-ups cropped edge to edge. Every photo fills its frame with no border, padding or rounding, cropped tight on the food. Each photo gets its own crop point. Nothing is laid over it. |
| bonappetit.com | A big, confident headline type scale. One large step between the headline and everything else. The headline is the largest text at every width, under eight words, two lines at most at 390 pixels. Scale only, not their typeface or layout. |
| cooking.nytimes.com | A clear, ruled list of recipes. A thin rule between rows, title first, one link per row, even row height, so a visitor can scan down. The rule runs between rows in the text column and never crosses a photo. No ratings, tags or save counts. Used on Recipes, and on Home for the three recipes under the lead recipe, so they are a list and not three identical cards. |

## Archetypes and hero patterns

1. **Warm Craft + Layered collage (my lead choice).** Warm Craft because the colours come from her bake, the pictures overlap and the hands are at work. Collage because two tall hand pictures and the small profile slice overlap on the first screen and carry the lift.
2. **Editorial Print + Split screen.** Editorial Print for the Bon Appétit headline scale and the ruled recipe list. Split screen puts the large headline on one side and one tall photo on the other, bleeding to the screen edge. The tall photo is her natural shape. The heading face stays heavy and friendly, not a thin serif.
3. **Warm Craft + Full-bleed photograph (phone first).** On a phone one upright still fills the first screen like one of her videos, with the headline in a solid brown block below it. Caveat: her stills are about 900 px wide, so on a laptop this cannot fill the width without going soft. There it falls back to a tall panel beside a brown block, close to direction 2. Direction 3 only differs on a laptop if she sends wide photos.

Playful Pop and Quiet Luxury are rejected: childish and fancy.

## Photography

**What exists.** Seventeen of her own pictures (CREDITS.md): eight recipe covers, six cake and bake stills in the instagram folder, two hand pictures for the first screen (chocolate-chip-rolls.jpg, berry-sponge-slice.jpg) and the profile picture. They are covers of her own videos, upright, resized to 1600 px tall. The profile picture is 400 px and must stay under about 200 CSS pixels wide to stay sharp. The file name on Linktree suggests a larger camera original exists: ask for it.

**Used as supplied.** No retouching, no crops saved. Cropping is done in CSS with a crop point per photo. One shared colour treatment in CSS, a light warm lift to settle the cool baking paper, white fabric and grey stone, tested so the red cake stays red. No photo waits for a grade. Set in DESIGN-SYSTEM.md.

**Gaps against the shot list (10 to 20 photos, wide and tall).**

- Wide versions of the best bakes. None exist now. Needed for any full-width band on a laptop.
- More hands at work: kneading, piping, pouring, lifting a tray. Two hand-holding-a-bake pictures exist.
- Process on baking paper and trays: batter, dough, glaze.
- One wide context shot of her kitchen counter, with nothing staged.
- Finished custom cakes with piped writing, for the Custom cakes page. None supplied (still a [NEEDS] in CONTENT.md).
- Food for events, for the Catering page. None supplied.
- Until they exist, use only what she has. No stock, no drawings. Record anything new in CREDITS.md.

## Chosen direction

Chosen by the owner on 2 October 2026: direction A, Warm Craft with the layered collage hero, with the ruled recipe list from direction B (Editorial Print). Direction C is not used. Recorded as D-02 in 08-CHANGE-MANAGEMENT/DECISIONS.md. Prototypes are in 03-DESIGN/directions/. The base for structure is the airbnb entry, recorded as D-03.

## Archetype menu

*Starting points, not templates. Each is bent towards the business's own trade.*

### Editorial Print

- Type and layout: a characterful serif for headings, wide margins, text in columns like a magazine
- Colour: ink and paper tones with one strong accent
- Motion: calm, slow transitions
- First-screen idea: a large headline set like a magazine cover beside one striking photo

### Warm Craft

- Type and layout: headings with a hand-made feel, a plain sans for reading, photos that overlap
- Colour: colours taken from the materials of the trade
- Motion: small, tactile hover movement
- First-screen idea: the maker's hands at work, with the headline over a material texture

### Swiss Modern

- Type and layout: a clean sans on a strict grid, big contrast between sizes, lots of space
- Colour: black and white with one bright signal colour
- Motion: precise, quick motion
- First-screen idea: one huge word on the grid beside a single image block

### Quiet Luxury

- Type and layout: a light, refined serif or a wide sans, few words, slow rhythm
- Colour: deep, muted tones
- Motion: slow fades and very gentle depth
- First-screen idea: a full-width photo, one short line and a single quiet button

### Bold Poster

- Type and layout: heavy condensed display type, cropped images, solid blocks of colour
- Colour: two or three loud flat colours
- Motion: confident, snappy motion
- First-screen idea: the headline fills the screen like a gig poster

### Soft Organic

- Type and layout: a friendly rounded sans, curved shapes, relaxed spacing
- Colour: natural, softened colours
- Motion: gentle, springy motion
- First-screen idea: a curved photo frame with soft shapes drawn from the trade

### Workshop Industrial

- Type and layout: a sturdy sans with monospaced details, visible grid lines, labels like a technical drawing
- Colour: workshop and metal tones with one safety colour
- Motion: mechanical, exact motion
- First-screen idea: a close product or tool photo with measurement-style notes

### Playful Pop

- Type and layout: chunky, cheerful display type, cut-out images, purposeful stickers
- Colour: a bright palette anchored by one dark colour
- Motion: bouncy springs in one place only
- First-screen idea: cut-out images that shift slightly as the visitor scrolls

## Hero pattern menu

*Each direction uses one. Suggested archetypes in brackets.*

- **Full-bleed photograph:** a photo fills the first screen, with oversized type over a calm area of it (Quiet Luxury, Editorial Print, Warm Craft)
- **Split screen:** oversized type on one side, a tall image on the other (Swiss Modern, Editorial Print, Workshop Industrial)
- **Layered collage:** three to five photos and shapes overlapping at different depths (Warm Craft, Playful Pop, Soft Organic)
- **Kinetic headline:** the headline's words arrive in sequence and settle (Bold Poster, Swiss Modern, Playful Pop)
- **Sticky story:** an image stays pinned while text moves beside it, changing as the visitor scrolls (Editorial Print, Quiet Luxury, Workshop Industrial)
- **Object close-up:** one product or tool, photographed close, with notes like a technical drawing (Workshop Industrial, Swiss Modern)
- **Illustrated scene:** a rich scene from the trade, drawn in code, for sites without photos (Soft Organic, Playful Pop, Warm Craft)
