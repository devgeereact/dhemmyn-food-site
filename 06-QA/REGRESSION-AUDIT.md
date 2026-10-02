# Regression audit

> **Purpose:** retests what used to work, after every round of fixes and every large change.
> **Filled by:** WEB-31 (step 10), and WEB-36 every month
> **Applies to:** every site

**Status:** Empty

**Last run:** [date]
**After which change:** [CHANGELOG entry]

Results: PASS, FAIL, FIXED, PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE, with evidence. If something that used to work now fails, stop and find the change that caused it before fixing anything.

## Core checks

| Check | Result | Evidence |
|---|---|---|
| npm run build and npm run lint pass | NOT TESTED | |
| Every page opens, at 375 pixels and on a laptop | NOT TESTED | |
| The menu works on a phone and a laptop, with mouse and keyboard | NOT TESTED | |
| Every form state works: errors, sending, sent, failed | NOT TESTED | |
| Refreshing a deep page loads it | NOT TESTED | |
| A wrong address shows the Not found page | NOT TESTED | |
| Every page still has its own title and description | NOT TESTED | |
| Footer links and contact links work | NOT TESTED | |
| Focus is visible and Tab order is right on the changed pages | NOT TESTED | |
| No console errors on any page | NOT TESTED | |
| The signature moment and motion still work, and reduce motion still stops them | NOT TESTED | |
| No sideways scrolling at 320 pixels | NOT TESTED | |
| Lighthouse scores have not dropped by more than 5 points | NOT TESTED | |
| The privacy page shows the current notice | NOT TESTED | |
| The pages and parts named in the change still match CONTENT.md | NOT TESTED | |

## History

| Date | Change tested | Result | Notes |
|---|---|---|---|
| | | | |
