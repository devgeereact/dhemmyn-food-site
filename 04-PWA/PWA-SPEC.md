# PWA spec

> **Purpose:** whether the site must install like an app, and how.
> **Filled by:** WEB-19 (step 8)
> **Applies to:** only sites that must install on phones or work offline

**Status:** Empty

*Most small business sites do not need this. If yours does not, replace everything below this line with:*

*Not applicable: the site does not need to install like an app or work offline.*

## Why it must install

*The real reason, from your answers. "It would be nice" is not a reason.*

## App identity

- Name:
- Short name (12 characters or fewer):
- Description:

## Manifest

*id, start_url, scope, display, theme_color, background_color, and icons: 192 and 512 pixels, plus a maskable icon.*

## Tools

*vite-plugin-pwa, set up from its current documentation. Record the choice in DECISIONS.md.*

## Platforms to test

*Android with Chrome, iPhone with Safari (Share, then Add to Home Screen), and desktop Chrome or Edge. Install works differently on each, so test each one.*
