# Deployment

> **Purpose:** how the site is published, how a change goes live, and how to roll back.
> **Filled by:** WEB-34 (step 12)
> **Applies to:** every site

**Status:** Empty

*Never write passwords or tokens here.*

## Where it is published

- Host: [Netlify]
- GitHub repository: [name] (private)
- Base directory: app
- Build command: npm run build
- Publish directory: dist (shown by Netlify as app/dist)
- Node.js version: [set in netlify.toml]
- Settings file: netlify.toml in the project's top folder (base, build command, publish directory, Node version)
- Redirect rule: app/public/_redirects (/* /index.html 200)
- Security headers: app/public/_headers
- Both are copied into app/dist by the build: check they are there after npm run build
- Test address: [yoursite.netlify.app]
- Live address: [your domain]

## How a change goes live

1. Make and test the change (npm run build, npm run lint, the preview).
2. Commit, then push to GitHub.
3. Netlify builds and publishes it, usually within a few minutes.
4. Check the live page you changed, and the form if it was affected.

## How to roll back

*On Netlify, open Deploys, choose the last deploy that worked, and click Publish deploy. The old version is live again at once. While auto publishing is on, the next push to GitHub publishes over it. To keep the old version live while you fix the problem, click Lock to stop auto publishing in the Deploys list. Fix and test the problem in the project, push, then turn auto publishing back on from the same Deploys list and check the new deploy goes live.*

## Domain and DNS

*Registrar, the DNS records added for the host, and a reminder: never change records marked MX (they carry email).*

## Who has access

*See 05-SECURITY/PERMISSIONS.md.*
