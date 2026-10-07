# PWA audit

> **Purpose:** the release gates for a site that installs like an app or works offline.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** PWA only. If the site is not a PWA, replace this file with: Not applicable: the site is not a PWA.

**Status:** Empty

**Last run:** [date]  
**Tested on:** [npm run preview at http://localhost:4173, or the live address]

Use Chrome's Inspect panel, Application tab, to see the manifest, service worker and caches. Test on real phones too.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Install

| Check | Result | Evidence |
|---|---|---|
| The manifest is valid: name, short name, start address, scope, display, colours | NOT TESTED | |
| Icons load at 192 and 512 pixels, with a maskable icon | NOT TESTED | |
| Installs on Android with Chrome, with the right name and icon | NOT TESTED | |
| Adds to the home screen on iPhone with Safari | NOT TESTED | |
| Installs on desktop Chrome or Edge | NOT TESTED | |
| The installed app opens at the start address | NOT TESTED | |

## Online and offline

| Check | Result | Evidence |
|---|---|---|
| Works normally online | NOT TESTED | |
| Offline behaviour matches OFFLINE-SPEC.md and is honest about what is not available | NOT TESTED | |
| Losing the connection mid-use shows a clear message, never an endless spinner | NOT TESTED | |
| Refreshing a deep page works online and in the installed app | NOT TESTED | |
| Private information is never stored in the offline cache | NOT TESTED | |
| Typed form answers are not lost when the connection drops | NOT TESTED | |
| A form cannot be sent twice by retrying | NOT TESTED | |

## Updates

| Check | Result | Evidence |
|---|---|---|
| The service worker registers only in the built site, not in development | NOT TESTED | |
| A new deploy reaches visitors, as described in UPDATE-STRATEGY.md | NOT TESTED | |
| Old caches are removed after an update | NOT TESTED | |
| An update never throws away unsaved input | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
