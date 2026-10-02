# Changelog

> **Purpose:** every meaningful change to the site, newest first.
> **Filled by:** every change: WEB-28 (step 9), WEB-30 (step 10), WEB-36 (step 12)
> **Applies to:** every site

**Status:** In use

*Add each entry at the top, in this format:*

```
## [YYYY-MM-DD] [Short title]

- Change: what is different now
- Reason: why it was changed
- Files: the files changed
- Tested: the commands and checks run, and the result
```

## [2026-10-02] Home strip link names and plans updated

- Change: each "From my kitchen" picture link now has the link name "Watch the video on YouTube: " plus its alt text (CONTENT.md). UX-SPEC.md: Home plan sections 2 and 5 renamed and rewritten for the six images, and three Home checklist items ticked. SOCIAL.md: the Instagram table now lists the six files with their Short links, the method lines say the pictures link to YouTube Shorts, and the "send Instagram images" owner action is removed.
- Reason: the owner asked for link names that say the link opens the video on YouTube, and for the plans to match
- Files: 01-PRODUCT/CONTENT.md, 03-DESIGN/UX-SPEC.md, 01-PRODUCT/SOCIAL.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: the six Short links in SOCIAL.md compared with the CREDITS.md rows. No site code changed, so build and lint are not applicable.

## [2026-10-02] Home page words written and approved

- Change: CONTENT.md now has the Home words: page title and description, headline "Easy baking and cooking recipes, online", intro, button "See the recipes", the recipe cards block, the cakes and catering band, Meet Demi, and the "From my kitchen" strip with six images, alt text and the profile picture alt text. The strip links to the owner's YouTube Shorts, not Instagram posts, and keeps a "Follow on Instagram" link.
- Reason: WEB-11, the owner chose headline B and approved the rest
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: headline length, button and next step checked against UX-SPEC.md and USER-JOURNEYS.md. Cake, catering and Meet Demi words match the approved text. The six image files exist, and their Short links match the CREDITS.md rows. The six alt texts were written after viewing each image. No site code changed, so build and lint are not applicable.

## [2026-10-02] Form words, Not found words and card title approved

- Change: the owner approved the form labels, hints and messages and the Not found words in CONTENT.md, and the card title "Autumn cake series". Notes and status lines in CONTENT.md and UX-SPEC.md now say approved. Four checklist items ticked in UX-SPEC.md. The open card-title lines in SOCIAL.md and BUSINESS-RULES.md are closed. The owner will gather the thumbnails and the profile picture.
- Reason: the owner answered the approval list from the previous step
- Files: 01-PRODUCT/CONTENT.md, 03-DESIGN/UX-SPEC.md, 01-PRODUCT/SOCIAL.md, 01-PRODUCT/BUSINESS-RULES.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Page plans, form states and content checklist written

- Change: UX-SPEC.md now has Page plans for all seven pages (sections top to bottom, one line each, with what the owner supplies), the four form states, the Not found page and the Content checklist grouped by page. CONTENT.md now has the form labels, hints and messages for the Custom cakes and Catering forms, and the Not found page words. Status lines updated.
- Reason: WEB-10, plan every page, form state and the content the owner must gather
- Files: 03-DESIGN/UX-SPEC.md, 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: facts and approved words checked against CONTENT.md, BUSINESS-RULES.md, SOCIAL.md and USER-JOURNEYS.md. Reading times estimated from word counts. The new form and Not found words are not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] Pages, navigation and user journeys written

- Change: UX-SPEC.md now has the Pages table (seven pages: Home, Recipes, Custom cakes, Catering, About me, Contact, Privacy notice), the pages left out on purpose, and the Navigation section (header menu, footer, phone menu). Status set to In progress. USER-JOURNEYS.md now has three journeys: watch a recipe video, send a cake or catering enquiry, message the owner directly. Status set to Done. Required form fields set to name, email or phone, and the date.
- Reason: WEB-09, the smallest set of pages that does the job, from 00-FOUNDATION and 01-PRODUCT
- Files: 03-DESIGN/UX-SPEC.md, 01-PRODUCT/USER-JOURNEYS.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: drafts shown to the owner before saving. The owner kept Privacy notice and Contact, confirmed the required fields and the video-down fallback. Facts checked against QUESTIONNAIRE.md, BUSINESS-RULES.md, CONTENT.md and PRODUCT-SPEC.md. No site code changed, so build and lint are not applicable.

## [2026-10-02] P4 approved and moved under its pages

- Change: P4 (How ordering works) approved by the owner in its changed form and moved under Custom cakes, Catering and Contact in CONTENT.md, label removed. No proposed draft is left.
- Reason: the owner approved P4
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's messages of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Approved words moved under their pages

- Change: P1 (About me), P2 (Custom cakes), P3 (Catering), P5 (Common questions), P6 (Recipes) and P7 (Contact) approved by the owner and moved under their page headings in CONTENT.md, label removed. Owner edits applied: the "how I started" line dropped from About me, the three [NEEDS] lines dropped from P2 and P3, the written-recipes question and the payment [NEEDS] removed from P5. P4 changed (step 2 now "I get back to you with the details and a price.", step 3 removed) and stays proposed. The [Page 2] and [Page 3] placeholders became Recipes, About me, Custom cakes, Catering and Contact, in the order of questionnaire Q8. The held-back list gained the "how you started" and "written recipes" items.
- Reason: the owner answered the WEB-08 approval list
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Proposed material drafted

- Change: seven proposed drafts added under "Proposed material" in CONTENT.md (About me, Custom cakes, Catering, How ordering works, Common questions, Recipes introduction, Contact introduction), plus a list of held-back items. Every draft is labelled "Proposed: owner to confirm". CONTENT.md Status set to Draft.
- Reason: WEB-08, draft the words visitors will expect, using only facts the owner gave or that have a source
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: facts checked against QUESTIONNAIRE.md and BUSINESS-RULES.md. Nothing is published, and nothing with the Proposed label goes on the site. No site code changed, so build and lint are not applicable.

## [2026-10-02] Product files written

- Change: filled PROJECT-CONTEXT.md, PRODUCT-SPEC.md, USER-ROLES.md and the template sections of BUSINESS-RULES.md. Status set to Done on all four. Missing facts stay as [NEEDS].
- Reason: WEB-07, from QUESTIONNAIRE.md and the sourced facts in BUSINESS-RULES.md only
- Files: 00-FOUNDATION/PROJECT-CONTEXT.md, 01-PRODUCT/PRODUCT-SPEC.md, 01-PRODUCT/USER-ROLES.md, 01-PRODUCT/BUSINESS-RULES.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: drafts shown to the owner before saving. Owner confirmed forms go to info@mimmycare.com, the browser default, updates through the AI assistant, and nobody else answers enquiries. No site code changed, so build and lint are not applicable.

## [2026-10-02] Launch recipes changed to eight with videos

- Change: the eight launch recipes are now scones, 5 minute bread roll, cookies, banana bread, doughnuts, dodo, oats and the autumn cake series, each with a video link. The four Linktree recipes move to after launch.
- Reason: the Linktree recipes have no Canva view-only links or videos yet, and the owner chose to launch with recipes that have a video
- Files: 01-PRODUCT/SOCIAL.md, 01-PRODUCT/BUSINESS-RULES.md, 00-FOUNDATION/QUESTIONNAIRE.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: video links copied from the Shorts list the owner pasted on 2 October 2026. Links not opened. No site code changed, so build and lint are not applicable.

## [2026-10-02] Owner decisions on public facts recorded

- Change: replaced the [CHECK] list in BUSINESS-RULES.md with the owner's decisions, and updated SOCIAL.md (Linktree out, WhatsApp confirmed, Instagram method, four confirmed video links, owner actions)
- Reason: the owner answered every [CHECK] item raised by WEB-06
- Files: 01-PRODUCT/BUSINESS-RULES.md, 01-PRODUCT/SOCIAL.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: decisions copied from the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Public facts and social accounts recorded

- Change: added a "Sourced public facts" section to BUSINESS-RULES.md and filled SOCIAL.md (accounts, WhatsApp link, candidate recipe video links, owner actions)
- Reason: WEB-06, record what is already public about the business, with source and date
- Files: 01-PRODUCT/BUSINESS-RULES.md, 01-PRODUCT/SOCIAL.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: Linktree and Threads opened without logging in. Instagram and TikTok returned only a page title. YouTube redirected to a cookie consent page that was not followed. Those facts come from the owner's paste. No site code changed, so build and lint are not applicable.

## [date] Workspace created

- Change: project workspace created from PROJECT-OS.md
- Reason: start of the project
- Files: all planning files
- Tested: compared with section 1 of PROJECT-OS.md (WEB-04)
