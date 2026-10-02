# Security

> **Purpose:** the security rules for this project and how they are checked.
> **Filled by:** WEB-20 (step 8)
> **Applies to:** every site

**Status:** Empty

## Secrets

*No password, key or token in any file. Secrets for build tools, if ever needed, live in a .env file that .gitignore keeps out of Git, or in the host's environment settings. Never paste a secret into the AI chat.*

## What is public

*Everything in app/dist is public, including any variable whose name starts VITE_: Vite builds it into the site. So nothing secret may ever be in a VITE_ variable. Planning folders are never published.*

## Security headers

*Set for every page in app/public/_headers, which Vite copies into app/dist so Netlify finds it whatever the base directory setting. Test the site after adding them, because a strict Content-Security-Policy can block things.*

- Content-Security-Policy: [allow only this site's own files]
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: [switch off camera, microphone, location and anything else the site does not use]
- X-Frame-Options: DENY

## Form and spam

*Fields checked in the browser, a hidden spam trap field, and the host's spam filter. Nothing a visitor types is ever inserted into the page as raw HTML.*

## Packages

*New packages only with a reason in DECISIONS.md. Run npm audit monthly and before each release.*

## Accounts

*Two-factor authentication on GitHub, Netlify, the domain registrar and the email account that receives form messages. The GitHub project is private. Recovery codes stored safely, never in this project.*

## What this site does not have

*For example: no log-ins, database, file uploads or server code. If any of these is added, fill AUTH-MODEL.md, PERMISSIONS.md and DATA-MODEL.md and extend SECURITY-AUDIT.md first.*
