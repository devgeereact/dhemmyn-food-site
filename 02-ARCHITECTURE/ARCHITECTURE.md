# Architecture

> **Purpose:** how the site is built and why, so every change follows the same plan.
> **Filled by:** WEB-19 (step 8), then updated by WEB-22 with the installed versions
> **Applies to:** every site

**Status:** Empty

## Stack

*Vite, React, TypeScript (strict), React Router, Tailwind CSS, Motion and Fontsource, as in section 4 of PROJECT-OS.md. After step 9, add the version of each from app/package.json.*

## Why this stack

*One or two lines: fast, reliable, no server or database to look after, easy to grow.*

## Routes

*One row per page. The address is lower case with hyphens.*

| Address | Page component | Page title |
|---|---|---|
| / | Home.tsx | |
| * | NotFound.tsx | Page not found |

## Folder layout in app/

*Use the layout in section 4 of PROJECT-OS.md. Note any difference here, with the reason.*

## Shared components

*Header, Footer, Layout, OrderForm and any others, with one line on what each does.*

## How the form is sent

*For Netlify Forms: the React form posts to "/" as URL-encoded data with a hidden form-name field, and app/index.html holds a hidden plain copy of the form with the same field names so Netlify can find it. List every state: errors, sending, sent, failed.*

## Page titles, descriptions and share tags

*Each page component renders its own title and description. Share tags (Open Graph) live in app/index.html, because most social apps do not run the code that changes them.*

## Fonts and photos

*Where the font files and photos live inside app/, and their sizes.*

## Page changes

*After each page change: scroll to the top and move focus or announce the new page, so keyboard and screen reader users know where they are.*

## Build and publish

*npm run build writes app/dist. Netlify builds from the app folder and publishes dist. app/public/_redirects holds the rule /* /index.html 200, so every address loads the app, and app/public/_headers holds the security headers. Vite copies both into app/dist. See 07-OPERATIONS/DEPLOYMENT.md.*

## What this site does not have

*For example: no server code, database, log-ins, analytics or cookies. If any of these is added later, record why in 08-CHANGE-MANAGEMENT/DECISIONS.md first.*
