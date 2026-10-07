# Permissions

> **Purpose:** who can change the site, and who may do what if anyone logs in.
> **Filled by:** WEB-20 (step 8)
> **Applies to:** every site for account access; user permissions only with log-ins

**Status:** Draft. Written on 2 October 2026. The owner has not yet decided who holds each account, so most rows are [NEEDS]. Fill them in when the accounts are created.

## Who can change the site

*Each person with access to GitHub, Netlify, the domain registrar and the form inbox. Remove access as soon as someone no longer needs it. Passwords and recovery codes are never written here.*

The site has one owner, Demi Yusuf (01-PRODUCT/USER-ROLES.md). Nobody else answers enquiries or updates the site.

| Person | Access to | Since |
|---|---|---|
| Demi Yusuf (owner) | GitHub (private repository): [NEEDS: confirm the account and its owner] | [NEEDS: date the account is created] |
| Demi Yusuf (owner) | Netlify: site settings, deploys and the form submissions in the Forms dashboard. [NEEDS: confirm the account and its owner] | [NEEDS] |
| Demi Yusuf (owner) | Domain registrar: none yet, because the site uses the free `.netlify.app` address (D-04). When a domain is bought, the owner alone holds the account | Not applicable yet |
| Demi Yusuf (owner) | The form inbox, in two places: the Netlify Forms dashboard and the info@mimmycare.com mailbox | [NEEDS] |
| [NEEDS: anyone else] | [NEEDS: does anyone else hold a log-in to any of the above?] | [NEEDS] |

**Open question on the mailbox.** The enquiry address is on the domain mimmycare.com, which is not the business's own name and is not listed as owned by the business (see 00-FOUNDATION/QUESTIONNAIRE.md, question 16). Whoever administers that mailbox may be able to read every enquiry. [NEEDS: who owns mimmycare.com and who can read info@mimmycare.com.]

## The AI assistants

Claude Code and Codex work on the owner's computer, in this project folder. They have no account of their own on GitHub, Netlify or the registrar.

- They never hold a password, key or token in a file (05-SECURITY/SECURITY.md).
- They push to GitHub or publish to Netlify only when the owner asks, and only with the owner's own sign-in on the owner's computer. [NEEDS: how the owner signs in to GitHub on this computer.]
- They ask before deleting files or installing anything (project rule 10).

## How access is kept safe

- Two-factor authentication on every account in the table above. NOT TESTED until the accounts exist.
- The GitHub project is private.
- Give each person the lowest level of access that lets them do their job. Add a person only when the owner asks, and remove them when they no longer need access.
- Recovery codes are stored outside this project.
- Review this table at each monthly update, and before launch (06-QA/SECURITY-AUDIT.md).

## User permissions

Not applicable: the site has no log-ins. (If it gains them, list each role and what it may view, add, change and delete.)
