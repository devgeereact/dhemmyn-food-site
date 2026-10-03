# Deployment

> **Purpose:** how the site is published, how a change goes live, and how to roll back.
> **Filled by:** WEB-34 (step 12)
> **Applies to:** every site

**Status:** Draft. Written on 3 October 2026 from Netlify's own documentation (checked the same day). Nothing is deployed yet, so every step here is NOT TESTED until the first publish. Open items: the repository name and the site name are [NEEDS].

*Never write passwords or tokens here.*

## Where it is published

- Host: Netlify
- GitHub repository: [NEEDS: name] (private). It has no remote yet: the project has never been pushed.
- Base directory: `app`
- Build command: `npm run build`
- Publish directory: `dist` (Netlify shows it as `app/dist`, because the publish directory is read from inside the base directory)
- Node.js version: 24, set in `netlify.toml` as `NODE_VERSION`. The owner's computer runs a newer Node (v26 on 2 October 2026), so a build that passes locally still needs its first check on Netlify.
- Settings file: `netlify.toml` in the project's top folder (base, build command, publish directory, Node version). Settings in this file win over the Netlify dashboard, so change them here, not there.
- Redirect rule: `app/public/_redirects` (`/*    /index.html    200`). It sends every address to the app. A real file, such as `robots.txt`, is still served as itself.
- Security headers: `app/public/_headers`, from 05-SECURITY/SECURITY.md. They apply to files Netlify serves from its own network, which is every file on this site.
- Both files are copied into `app/dist` by the build. After `npm run build`, check with `ls app/dist` that `_redirects`, `_headers`, `robots.txt`, `sitemap.xml`, `favicon.svg` and `share.jpg` are there.
- Test address: `https://SITE-NAME.netlify.app` [NEEDS: the site name the owner chooses]
- Live address: none yet. The site uses the free `.netlify.app` address (D-04).

**The address appears in three files.** `app/index.html` (share tags), `app/public/robots.txt` and `app/public/sitemap.xml` all hold the word `SITE-NAME` until the real site name is known. Replace it in all three at once, in the same commit, then run `grep -rn SITE-NAME app/index.html app/public`. It must find nothing. Do the same again if a domain is added later.

## How a change goes live

1. Make and test the change (`npm run build`, `npm run lint`, the preview in the owner's own terminal).
2. Commit, then push to GitHub.
3. Netlify builds and publishes it, usually within a few minutes.
4. Check the live page you changed, and the form if it was affected.

The site is always published through Git, never by dragging a folder onto Netlify (KI-04).

## First publish (owner steps)

The owner does these in their own browser. The assistant never holds the sign-ins. Netlify's menu names change now and then: if a name below is not on screen, look for the nearest one.

1. Create the private GitHub repository, then push the project to it. Two-factor authentication on, as in 05-SECURITY/SECURITY.md.
2. In Netlify, add a new project from an existing repository, choose GitHub, and pick that repository. Allow Netlify access to that one repository only.
3. Check the build settings Netlify shows match this file (base `app`, build command `npm run build`, publish directory `dist`). `netlify.toml` fills them in.
4. Deploy. When it finishes, open the test address.
5. Change the site name to the one you want (Project configuration, then the project details), then do the address replacement in the paragraph above and push.
6. In Netlify, open Forms and choose **Enable form detection**. Then deploy again (Deploys, Trigger deploy, Deploy project without cache), because Netlify only scans a deploy made after detection is on. Both `custom-cakes` and `catering` should appear under Forms.
7. Set up the email notification (EMAIL-SPEC.md).
8. Send one real test enquiry from each form on the test address. Check it arrives in the Forms dashboard and in the inbox. Delete the two test entries afterwards.
9. Switch on deploy failure emails (MONITORING.md).
10. Open the test address and check the response headers (browser developer tools, Network tab, the page's first request) include the Content-Security-Policy. Check for `Strict-Transport-Security` too. If it is missing, add it to `_headers` and record why in DECISIONS.md (05-SECURITY/SECURITY.md).

## How to roll back

1. In Netlify, open the project, then **Deploys**.
2. Pick the last deploy that worked, and open it.
3. Click **Publish deploy**. This does not build again: it makes that old deploy live at once.
4. Check the live site.
5. **Stop the next push undoing it.** While auto publishing is on, the next push to GitHub publishes over the rolled-back version. In the Deploys list, click **Lock to stop auto publishing**. The old version stays live.
6. Fix and test the problem in the project, then push. Netlify builds it but does not publish it while locked. Check the new deploy's preview, then in the Deploys list click **Unlock to start auto publishing** and confirm the new deploy goes live.
7. Record what went wrong in 08-CHANGE-MANAGEMENT/CHANGELOG.md.

A rollback changes the site's files only. It does not undo form messages or settings in the Netlify dashboard. Nothing else is lost, because the site stores nothing (BACKUP-RECOVERY.md).

## Domain and DNS

No domain yet, so there are no DNS records. When a domain is added:

- Add only the records Netlify asks for, and write them here with the registrar's name.
- Never change records marked MX. They carry email. This matters here because the enquiry address is `info@mimmycare.com` (EMAIL-SPEC.md).
- Turn on auto-renew and two-factor authentication at the registrar.
- Replace `SITE-NAME.netlify.app` with the domain in the three files above.

## Who has access

See 05-SECURITY/PERMISSIONS.md.
