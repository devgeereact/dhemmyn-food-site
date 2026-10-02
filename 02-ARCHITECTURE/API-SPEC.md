# API spec

> **Purpose:** any service the site calls with its own code, and how failures are handled.
> **Filled by:** WEB-19 (step 8)
> **Applies to:** only sites whose code calls an outside service or their own server functions

**Status:** Empty

*Sending the form to Netlify Forms is listed in INTEGRATIONS.md, not here. If the site calls nothing else, replace everything below this line with:*

*Not applicable: the site calls no service of its own. The form is handled by [HOST].*

## Each call

- **Name:**
- **What it does:**
- **Data sent:**
- **Data returned:**
- **Needs a secret?** *If yes, it must run on a server or serverless function, never in the browser.*
- **If it fails or is slow:** *What the visitor sees.*
