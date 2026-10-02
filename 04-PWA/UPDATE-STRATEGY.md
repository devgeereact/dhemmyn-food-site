# Update strategy

> **Purpose:** how new versions of the site reach visitors safely.
> **Filled by:** WEB-19 (step 8)
> **Applies to:** every site (short for a normal site, longer for a PWA)

**Status:** Done

## Normal site

Each deploy publishes a complete new version. Vite gives changed files new names, so a visitor gets the new version on their next page load. There is no service worker and no cache to clear. A visitor with a tab open during a deploy may see a missing photo until they reload. Nothing else is needed.

## PWA only

Not applicable: the site is not a PWA.
