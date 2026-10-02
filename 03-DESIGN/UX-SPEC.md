# UX spec

> **Purpose:** the sitemap and the plan for every page: sections, states and next steps.
> **Filled by:** WEB-09 and WEB-10 (step 5)
> **Applies to:** every site

**Status:** Draft complete. Pages and Navigation approved by the owner on 2 October 2026. Page plans, form states, the Not found page and the content checklist written on 2 October 2026 (WEB-10). The form and Not found words and the card title "Autumn cake series" approved by the owner on 2 October 2026.

## Pages

*From WEB-09. Eight pages at most. Every page has one job and one next step.*

| Menu name | Address | Its one job | Next step for the visitor |
|---|---|---|---|
| Home | / | Shows what Dhemmyn Food is, puts the recipes first, and points to Custom cakes and Catering. | See the recipes (goes to /recipes). |
| Recipes | /recipes | Shows the eight launch recipes, each with a title, a thumbnail and a video link. | Watch a recipe video on YouTube. |
| Custom cakes | /custom-cakes | Lets a visitor ask for a custom cake with the enquiry form. | Send the cake enquiry. |
| Catering | /catering | Lets a visitor ask for food for an event with the enquiry form. | Send the catering enquiry. |
| About me | /about-me | Introduces Demi Yusuf and Dhemmyn Food. | Follow on Instagram, TikTok, YouTube or Threads. |
| Contact | /contact | Shows email, phone and WhatsApp together. | Message the owner by email, phone or WhatsApp. |
| Privacy notice | /privacy | Says what personal information the forms collect and why. | Go to Contact. |

Seven pages. The owner chose to keep Privacy notice and Contact (2 October 2026).

**Left out on purpose:**

- **Videos page:** the owner dropped it. Videos are links on Recipes.
- **One page per recipe:** the eight launch recipes have no written ingredients or steps, only a video. The four Linktree recipes join the Recipes page later, when the owner sends view-only Canva links.
- **Prices, shop or order online:** the site shows no prices and takes no payments or bookings. Each page says "Prices on request".
- **FAQ page:** the approved common questions sit on Custom cakes and Catering.
- **Instagram or gallery page:** the Instagram grid is a section that links out. The page plans decide where it sits.
- **Thank-you page:** the success message shows on the same page as the form.
- **Blog, reviews, terms and cancellations, allergens, delivery area:** no facts exist yet, and BUSINESS-RULES.md says to claim nothing until the owner decides. Add a page only when the facts exist.
- **Not found page:** it is not counted above. It shows at any wrong address.

## Navigation

**Header menu, left to right:**

- Logo and name "Dhemmyn Food", which links to Home (/).
- Recipes, Custom cakes, Catering, About me, Contact.
- Recipes comes first because people know the owner for recipes. Custom cakes and Catering come next so they are easy to find.
- No drop-downs. The header is the same on every page.
- The current page is marked with `aria-current="page"` and an underline, so colour is not the only signal.
- Privacy notice is footer only.

**Footer:**

- Business name Dhemmyn Food and the owner's full name, Demi Yusuf.
- Email, phone and WhatsApp together, taken from 01-PRODUCT/BUSINESS-RULES.md.
- Page links: Recipes, Custom cakes, Catering, About me, Contact, Privacy notice.
- Social links named by platform: Instagram, TikTok, YouTube, Threads. They open in a new tab.
- Copyright line.
- No Linktree, follower counts, trading status or postal address, because none is decided.

**Menu on phones (below about 768 pixels wide, exact breakpoint set in DESIGN-SYSTEM.md):**

- The header shows the logo and a button labelled "Menu". It is a word, not an icon alone.
- The button opens a list that grows from the button. The list is Home, Recipes, Custom cakes, Catering, About me, Contact. Home is listed on phones only, because on wide screens the logo does that job.
- The button has `aria-expanded` and `aria-controls`. Its label changes to "Close" when the list is open.
- The list closes when the visitor taps "Close", presses Escape, or taps a link.
- On open, focus moves to the first link. On close, focus returns to the button.
- Every item is at least 44 by 44 pixels.
- A skip to content link comes first on every page. Motion respects reduced motion.

## Page plans

*From WEB-10. One heading per page, sections from top to bottom, one line each, with the content you must supply.*

*Reading times are estimates from word counts at about 240 words a minute. Every page reads in under two minutes on a phone. No page has a pop-up, autoplay video or slow animation. "Approved" means the words are already in 01-PRODUCT/CONTENT.md. No page shows a price, area, notice period or allergen statement.*

### Home

*About 100 words. Under one minute.*

1. **Opening:** the headline, one line about Dhemmyn Food, a button to Recipes, and three of the owner's own pictures layered with the text: a hand holding a chocolate chip roll, a hand holding a slice of berry sponge, and the small chocolate sponge profile picture. (You supply: headline, intro line and button text for the Home section of CONTENT.md; the three picture files, all in 03-DESIGN/photos. Done. How they overlap and arrive is in DESIGN-DNA.md, "Signature moment".)
2. **Start with a recipe:** one large lead recipe, three more recipes beneath it as a ruled list (a thin line between rows, no boxes, so they are not three identical cards in a row), and a "See all recipes" link. Changed on 2 October 2026 from three smaller cards in a row, because PROJECT-OS.md section 6 bans three identical cards. (You supply: nothing new. It reuses the Recipes thumbnails, titles and links. Say which recipe leads. The default is the autumn cake series.)
3. **Cakes and catering:** a band in two halves, one with the first line of Custom cakes and a button, one with the first line of Catering and a button (changed from links on 2 October 2026, see DESIGN-SYSTEM.md). Text only, no icons. (You supply: nothing. The words are approved.)
4. **Meet Demi:** two sentences and a link to About me. (You supply: nothing. It uses the first two sentences of About me, approved.)
5. **From my kitchen:** one row of six of the owner's own pictures, each linking to the YouTube Short it is the cover of, and a "Follow on Instagram" link. Each picture's link name says it opens the video on YouTube. (You supply: nothing. The six images, their Short links in CREDITS.md and their alt text are done. The owner could not get Instagram post links.)

### Recipes

*About 60 words and eight titles. Under one minute.*

1. **Heading and introduction:** the page heading and the approved introduction. (You supply: nothing.)
2. **Lead recipe:** the autumn cake series as one wide card with a large thumbnail, the title and a "Watch on YouTube" link. (Card title: "Autumn cake series", approved. You supply: the thumbnail and its alt text.)
3. **Recipe list:** the other seven recipes as compact rows on a phone, with the thumbnail on the left and the title and a "Watch on YouTube" link on the right. Two columns on a laptop. (You supply: seven thumbnails and their alt text. Titles are Scones, The 5 minute bread roll, Cookies, Banana bread, Doughnuts, Dodo and Oats. Links are in SOCIAL.md.)
4. **More videos:** a closing band with a link to the YouTube channel and a line pointing to Contact. It also helps when one video is removed. (You supply: the closing line for the Recipes section of CONTENT.md. The channel link is in SOCIAL.md.)

*Added later: a card for each of the four Linktree recipes, when the owner sends view-only Canva links.*

### Custom cakes

*About 155 words plus the form. Under one minute to read.*

1. **Opening:** the page heading and the approved introduction, ending "Prices on request." (You supply: nothing.)
2. **Enquiry form:** the heading, eight fields, the send button and the privacy link. Required: name, email or phone, and the date. (You supply: nothing. Every label and message is in CONTENT.md, Form labels and messages.)
3. **Message me instead:** a band showing email, phone and WhatsApp together. (You supply: nothing. The details come from BUSINESS-RULES.md.)
4. **How ordering works:** the approved two numbered steps and "This website does not take payments." (You supply: nothing.)
5. **Common questions:** the five approved questions and answers as a ruled list that opens and closes (native `details`), as DESIGN-SYSTEM.md, ARCHITECTURE.md and ACCESSIBILITY.md say. Changed on 2 October 2026: this line used to say "plain text, with no fold-away panels", which disagreed with those three files. (You supply: nothing.)

*Added later, if the owner supplies them: a strip of finished cake photos after the opening.*

### Catering

*About 155 words plus the form. Under one minute to read.*

1. **Opening:** the page heading and the approved introduction, ending "Prices on request." (You supply: nothing.)
2. **Enquiry form:** the heading, eight fields, the send button and the privacy link. Required: name, email or phone, and the date. (You supply: nothing. Every label and message is in CONTENT.md, Form labels and messages.)
3. **Message me instead:** a band showing email, phone and WhatsApp together. (You supply: nothing. The details come from BUSINESS-RULES.md.)
4. **How ordering works:** the approved two numbered steps and "This website does not take payments." (You supply: nothing.)
5. **Common questions:** the same five approved questions and answers. (You supply: nothing.)

*Added later, if the owner supplies them: a strip of food photos after the opening.*

### About me

*About 85 words. Under one minute.*

1. **Introduction:** the page heading, the profile picture, and the approved first two paragraphs, which include the two video counts. (You supply: the picture file and its alt text. Recheck the video counts before launch.)
2. **What I make:** one paragraph naming the bakes and the autumn cake series. (You supply: nothing. Update the autumn line when the series ends.)
3. **Ask me:** one line with two links, to Custom cakes and to Catering. (You supply: nothing.)
4. **Follow me:** four large links, to Instagram, TikTok, YouTube and Threads, each with the handle @dhemmynfood. (You supply: nothing. Links are in SOCIAL.md.)

### Contact

*About 60 words. Under one minute.*

1. **Opening:** the page heading and the approved introduction. (You supply: nothing.)
2. **Contact details:** three large tappable rows for WhatsApp, phone and email. Each also shows as plain text. (You supply: nothing. The details come from BUSINESS-RULES.md.)
3. **Forms:** two links, "Ask for a custom cake" and "Ask about catering". (You supply: nothing.)
4. **How ordering works:** the approved two numbered steps and "This website does not take payments." (You supply: nothing.)

### Privacy notice

*Written by WEB-32 in step 11. Until then the page says "Privacy notice coming soon". Plan: under two minutes once written.*

1. **Heading and summary:** one line on what the forms collect: name, email, phone, and cake or event details. (You supply: nothing. PROJECT-CONTEXT.md lists them.)
2. **Short sections:** what is collected, why, where it goes, how long it is kept, your rights, and who to ask. (You supply: how long enquiries are kept, and the form service name from WEB-19. WEB-32 decides whether a postal address or trading status must show.)
3. **Back link:** a link to Contact. (You supply: nothing.)

## Form states

*The words for every state live only in 01-PRODUCT/CONTENT.md, under Form labels and messages. Here, list each state and what the visitor can do next.*

Both the Custom cakes and Catering forms use these four states. Words: CONTENT.md, Form labels and messages, "Messages, both forms". Fields are checked when the visitor taps "Send enquiry", not while they type.

| State | What the visitor sees and can do next |
|---|---|
| Mistake in a field | A line above the form and a message next to each wrong field. Focus moves to the first wrong field. Everything typed stays. The visitor corrects the field and taps "Send enquiry" again. |
| Sending | The button reads "Sending" and cannot be tapped twice. The fields stay visible. A line below the button says the enquiry is sending, and screen readers announce it. The visitor waits. |
| Sent | The success message replaces the form and takes focus. The visitor reads it, then uses the menu to go on. Nothing is stored on the visitor's device. |
| Failed to send | A message above the form, with the form still filled in. The button reads "Try again". The visitor taps "Try again", or uses the email, phone or WhatsApp shown in the message. |

## Not found page

*What a visitor sees at a wrong address, with a link home.*

- Shows at any address that has no page, such as an old or mistyped link.
- The normal header and footer stay, so the visitor can use the menu.
- Below the header: the heading, one short line and a button to the homepage. Words: CONTENT.md, Not found page.
- The page has its own `<title>` and is marked noindex, so search engines leave it out.
- It is not in the Pages table and not in the menu.

## Content checklist

*Saved by WEB-10: everything you must gather, grouped by page. Copy it to worksheet WEB-W4 if you use it.*

*"Draft" means the assistant writes the words in CONTENT.md and the owner approves them. "You send" means the owner supplies it. Nothing below is needed to read the plans: it is what the build needs.*

### All pages

- [x] You send: the chocolate sponge profile picture as an image file, and say how to describe it for alt text. (Used on Home and About me.) Done: photos/profile-chocolate-sponge.jpg, alt text given 2 October 2026.
- [x] Draft: the footer words and copyright line (CONTENT.md, Footer). Done: approved 2 October 2026. The copyright line names the business only.
- [ ] Draft: a page title and a short description for each of the seven pages, and for the Not found page title.

### Home

- [x] Draft: the headline, one intro line and the button text (CONTENT.md, Home). Done: approved 2 October 2026.
- [x] You say: which recipe leads the recipes block. Done: the autumn cake series, with Scones, The 5 minute bread roll and Cookies beneath it as a ruled list.
- [x] You send: images for the "From my kitchen" strip. Done: six images in 03-DESIGN/photos/instagram, each linking to its YouTube Short (links in CREDITS.md), alt text written, 2 October 2026. The chocolate chip rolls picture moved to the first screen the same day, and braided-chocolate-bread.jpg took its place in the strip.
- [x] You send: the two hand pictures for the first screen. Done: photos/chocolate-chip-rolls.jpg and photos/berry-sponge-slice.jpg, 2 October 2026.

### Recipes

- [x] You say: the card title for the autumn cake series. Done: "Autumn cake series", 2 October 2026.
- [x] You send: a thumbnail image for each of the eight recipes, saved as files. The site never loads them from YouTube. Done: eight files in 03-DESIGN/photos, 2 October 2026.
- [ ] You check: the eight video links in SOCIAL.md open the right videos. They have been copied but not opened.
- [x] Draft: the closing line for the Recipes page. Done: approved 2 October 2026.
- [ ] Later: view-only Canva links for the four Linktree recipes, and written ingredients and steps for the recipes that have only a video.

### Custom cakes

- [ ] Approved already: the introduction, how ordering works and the five common questions.
- [x] Approve: the form labels, hints and messages (CONTENT.md, Form labels and messages). Done, 2 October 2026.
- [ ] Optional: photos of finished cakes you are happy to show. The page works without them.
- [ ] Later, when decided: flavours, sizes and designs, notice, area and payment. Nothing on these goes on the page until you decide.

### Catering

- [ ] Approved already: the introduction, how ordering works and the five common questions.
- [x] Approve: the form labels, hints and messages (CONTENT.md, Form labels and messages). Done, 2 October 2026.
- [ ] Optional: photos of food you have made for events. The page works without them.
- [ ] Later, when decided: what food and event sizes you cater for, notice, area and payment.

### About me

- [ ] Approved already: the words.
- [ ] You check: the video counts (347 on YouTube, 841 on TikTok) just before launch.
- [ ] You say: when the autumn cake series ends, so the line can change.

### Contact

- [ ] Nothing to gather. Email, phone and WhatsApp come from BUSINESS-RULES.md.

### Privacy notice

- [ ] You decide: how long enquiries are kept.
- [ ] You decide: the form service. This is WEB-19, and its name goes in the notice.
- [ ] Later: WEB-32 checks whether a postal address or trading status must show.

### Not found page

- [x] Approve: the page title, the line and the button text (CONTENT.md, Not found page). Done, 2 October 2026.
