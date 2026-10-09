# Backup and recovery

> **Purpose:** where copies of everything live, and how to get the site back if something goes wrong.
> **Filled by:** WEB-34 (step 12)
> **Applies to:** every site

**Status:** Draft. Written on 3 October 2026. The GitHub repository does not exist yet and no recovery step has been tried, so all of it is NOT TESTED.

## Where copies live

- The project folder on the owner's computer, which also holds the planning files (00 to 09) and the photos in `03-DESIGN/photos`.
- The private GitHub repository: [NEEDS: name], once it is created (DEPLOYMENT.md). This is the copy Netlify builds from. Until the first push it does not exist, so the project folder is the only copy.
- Netlify's list of past deploys (Deploys tab). Each one is a complete copy of the built site.
- The enquiries live in Netlify Forms and the `info@mimmycare.com` inbox, nowhere else (see Form messages below).
- The owner's original photos: [NEEDS: where the owner keeps the camera originals]. Photos in the project are the owner's own, resized, with no location data.

The site holds no database, no uploads and no log-ins, so there is nothing else to back up.

## If your computer is lost

1. Install the tools again: Node.js (the Node version in `netlify.toml`, or newer), Git, and the GitHub command line `gh`.
2. Sign in to GitHub with two-factor authentication, using the recovery codes if the phone is lost too.
3. Run `gh repo clone [NEEDS: repository name]`.
4. Open the `app` folder and run `npm install`. Then `npm run build` to check it builds.
5. Anything not yet pushed is lost, so push after each change (DEPLOYMENT.md). The live site is not affected: it keeps running from Netlify.

## If the live site breaks

Roll back on Netlify as written in 07-OPERATIONS/DEPLOYMENT.md, How to roll back.

## If you lose access to an account

- Recovery codes for GitHub, Netlify, the `info@mimmycare.com` mailbox and any future domain registrar are stored safely outside this project, never in it. [NEEDS: where the owner keeps them.]
- Support routes: GitHub Support for GitHub, Netlify Support for Netlify, and the registrar's support once there is one. For the mailbox, the host of `mimmycare.com` ([NEEDS: who that is], 05-SECURITY/PERMISSIONS.md).
- If an account may have been taken over, change the password, turn on two-factor authentication, and check the Netlify project for any change to the build settings or the notification address.

## Form messages

- Kept in two places: the Netlify Forms dashboard and the `info@mimmycare.com` inbox. Neither is in the project or in GitHub, so a lost computer loses none of them, and a rollback does not remove them.
- Kept for 6 months after the owner's last message with that person (05-SECURITY/DATA-PRIVACY.md). At each monthly check, older messages are deleted from both places (MONITORING.md).
- There is no automatic copy. If a message matters, keep the email.
