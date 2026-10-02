# User journeys

> **Purpose:** the paths visitors take to do the things that matter most, step by step.
> **Filled by:** WEB-09 (step 5)
> **Applies to:** every site

**Status:** Done. Approved by the owner on 2 October 2026.

*Three paths. Each one goes from arriving on the site to finishing, and says what the visitor sees if something fails. Audits in 06-QA test these first. Contact details are never typed here: they come from 01-PRODUCT/BUSINESS-RULES.md. Message words live in 01-PRODUCT/CONTENT.md.*

## 1. Watch a recipe video

- **Who:** a recipe follower on a phone.
- **Arrives from:** a link the owner shares on Instagram, TikTok, YouTube or Threads, or a friend's link. No domain is owned yet.
- **Steps:**
  1. Lands on Home and sees the recipes first, with a button to the Recipes page. (Words: [NEEDS: Home section of CONTENT.md])
  2. Taps the button, or Menu then Recipes.
  3. Sees eight recipe cards, each with a title, a thumbnail and a video link.
  4. Taps a video link. The video opens on YouTube in a new tab.
  5. Watches, then returns to the Recipes tab to pick another.
- **Success looks like:** the video plays on YouTube. The site has set no cookies. The owner receives nothing.
- **If something fails:**
  - Video removed or private: the visitor sees YouTube's own message and returns to the Recipes tab. The Recipes page ends with a link to the owner's YouTube channel and a line pointing to Contact. (Words: [NEEDS: Recipes section of CONTENT.md])
  - Wrong address: the visitor sees the Not found page with a link to Home.
  - Prevention: the owner checks all eight links before launch and at each monthly update.
- **Pages used:** Home, Recipes, Not found.

## 2. Send a cake or catering enquiry

- **Who:** a cake customer or an event customer on a phone.
- **Arrives from:** a social post or profile, or a friend's link. Sometimes straight to the Custom cakes or Catering page.
- **Steps:**
  1. Lands on Home, or goes straight to the page.
  2. Taps Menu then Custom cakes (or Catering).
  3. Reads the short introduction. It says "Prices on request" and that the site takes no payments.
  4. Fills in the form.
     - Cake: name, email or phone, date needed, occasion, number of servings, flavour and design ideas, allergies.
     - Catering: name, email or phone, event date, number of guests, town, food wanted, allergies.
     - Required on both forms: name, email or phone, and the date. Every other field is optional. (Confirmed by the owner, 2 October 2026.)
  5. Taps send. The button shows a sending state and cannot be tapped twice.
  6. The page shows the success message.
- **Success looks like:** the visitor sees the success message and knows the owner will get back with the details and a price. The owner receives an email at the business inbox with every field. No reply time is promised, because [NEEDS: how soon the owner replies].
- **If something fails:**
  - Mistake in a field: a plain message appears next to the field, and focus moves to the first problem. Nothing the visitor typed is lost. A missing required field or a date in the past counts as a mistake. No "too little notice" rule exists, because notice periods are not decided.
  - Send fails (no signal or form service down): the form keeps everything typed. A message says the enquiry did not send and shows email, phone and WhatsApp together, with a try again button.
  - Visitor leaves before sending: nothing is saved or sent.
  - Message words for every state: [NEEDS: Form labels and messages in CONTENT.md].
- **Pages used:** Home, Custom cakes or Catering, Privacy notice (linked from the form).

## 3. Message the owner directly

- **Who:** any visitor on a phone, such as a customer who wants a quick answer or a follower with a question.
- **Arrives from:** the Contact page through the menu, or the footer on any page.
- **Steps:**
  1. Taps Menu then Contact, or scrolls to the footer.
  2. Sees email, phone and WhatsApp together, as in BUSINESS-RULES.md.
  3. Taps one. WhatsApp opens a chat, the phone number opens the dialler, or the email address opens the mail app.
- **Success looks like:** the chosen app opens with the owner's number or address ready. The owner receives a WhatsApp message, a call or an email.
- **If something fails:**
  - WhatsApp not installed: the link opens WhatsApp's web page in the browser.
  - Laptop with no dialler or no mail app: the number and the address always show as plain text too, so the visitor can copy them.
  - The Contact page also points to the enquiry forms on Custom cakes and Catering.
- **Pages used:** Contact, and the footer on every page.
