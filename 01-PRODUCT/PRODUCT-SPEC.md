# Product spec

> **Purpose:** what the site does, for whom, and what it will not do in this version.
> **Filled by:** WEB-07 (step 4)
> **Applies to:** every site

**Status:** Done

## Vision

Dhemmyn Food is Demi Yusuf sharing easy and authentic recipes for baking and cooking. The site puts the recipes and videos in one place. It also lets people ask for a custom cake or catering.

## Objective

From the home page, a visitor on a phone can reach a recipe video and send a cake or catering enquiry.

## Who it is for

- Recipe followers, cake customers and event customers. Details: 01-PRODUCT/USER-ROLES.md.
- The owner, who looks after the site.

## Visitor problems

- "A recipe that is easy and actually works, without a long story."
- "Someone who bakes and cooks properly at home and is easy to reach."

## What the site does

- **Feature:** Home page
  - Purpose: puts recipes first and leads to the other pages.
  - Used by: all visitors.
  - Visitor gives: nothing.
  - Visitor gets: a way to the recipes, and clear ways to Custom cakes and Catering.
  - Depends on: nothing outside.

- **Feature:** Recipes page
  - Purpose: shows the eight launch recipes with their videos.
  - Used by: recipe followers.
  - Visitor gives: nothing.
  - Visitor gets: a title, a thumbnail and a video link for each recipe.
  - Depends on: YouTube, by link only. The four Linktree recipes are added later (see 01-PRODUCT/SOCIAL.md).

- **Feature:** Custom cakes page with an enquiry form
  - Purpose: lets a visitor ask for a cake.
  - Used by: cake customers.
  - Visitor gives: name, email or phone, date needed, occasion, number of servings, flavour and design ideas, allergies.
  - Visitor gets: a sending message, then a success or error message. Words: [NEEDS: 01-PRODUCT/CONTENT.md].
  - Depends on: [NEEDS: form handling service, decided in WEB-19]. The enquiry goes to the owner's inbox (see 01-PRODUCT/BUSINESS-RULES.md).

- **Feature:** Catering page with an enquiry form
  - Purpose: lets a visitor ask for food for an event.
  - Used by: event customers.
  - Visitor gives: name, email or phone, event date, number of guests, town, food wanted, allergies.
  - Visitor gets: a sending message, then a success or error message. Words: [NEEDS: 01-PRODUCT/CONTENT.md].
  - Depends on: [NEEDS: form handling service, decided in WEB-19]. The enquiry goes to the owner's inbox (see 01-PRODUCT/BUSINESS-RULES.md).

- **Feature:** Contact page
  - Purpose: shows how to reach the owner.
  - Used by: all visitors.
  - Visitor gives: nothing.
  - Visitor gets: email, phone and WhatsApp, as in 01-PRODUCT/BUSINESS-RULES.md.
  - Depends on: WhatsApp, by link only.

- **Feature:** About me page
  - Purpose: introduces the owner.
  - Used by: all visitors.
  - Visitor gives: nothing.
  - Visitor gets: the owner's full name, Demi Yusuf, and the chocolate sponge profile picture. No photo of the owner. Words: [NEEDS: 01-PRODUCT/CONTENT.md].
  - Depends on: nothing outside.

- **Feature:** Social links and Instagram grid
  - Purpose: lets visitors follow on Instagram, TikTok, YouTube and Threads.
  - Used by: all visitors.
  - Visitor gives: nothing.
  - Visitor gets: links out, and a grid of the owner's own pictures that link to Instagram. Images: [NEEDS: from the owner].
  - Depends on: the accounts in 01-PRODUCT/SOCIAL.md, by link only.

## When things go wrong

- A form fails to send: [NEEDS: what the visitor sees, decided in 03-DESIGN/UX-SPEC.md and 01-PRODUCT/CONTENT.md].
- A page does not exist: [NEEDS: not found page words, 01-PRODUCT/CONTENT.md].
- A video link is down: [NEEDS: decided in 03-DESIGN/UX-SPEC.md].

## Success criteria

- [NEEDS: how the owner will know the site works, for example enquiries each month. Owner has not said.]

## Not in this version

- Payments and bookings on the site.
- Video players on the site. Links only.
- Prices. The site says "prices on request" (see 01-PRODUCT/BUSINESS-RULES.md).
- A Linktree link.
- The four Linktree recipes, until the owner sends view-only Canva links.
- Log-ins.

## Later ideas

- Add the four Linktree recipes with view-only Canva links.
- Add written ingredients and steps for the recipes that have only a video.
- Decide area, notice periods and prices for cakes and catering, then show them.
