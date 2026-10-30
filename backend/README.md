# Backend: the order request endpoint

The site's only server code. It answers the Custom cakes and Catering forms at `POST /api/enquiry.php`.
Plain PHP 8.2+ functions (the server runs 8.4), no Composer, no database. Modelled on harni.uk's mail endpoint.

## Layout

```
backend/
  config.sample.php          key names of the private settings (no values); never deployed
  public/api/enquiry.php     the only public PHP file: finds the private code and calls it
  public/api/.htaccess       allows enquiry.php, denies every other file in the folder
  src/bootstrap.php          loads the files below
  src/settings.php           reads the private settings; sending is off unless they are complete
  src/enquiry.php            the two forms, field rules, honeypot, the owner email text
  src/delivery.php           builds the email, one message to the owner; mail() or SMTP
  src/smtp.php               a minimal SMTP client (465 implicit TLS or 587 STARTTLS, AUTH LOGIN)
  src/rate-limit.php         hashed, file-locked limits per hour (50 in all, 5 per IP, 3 per contact)
  src/endpoint.php           HTTP checks (method, origin, type, size) and the JSON answers
  tests/enquiry.test.php     72 checks with fake transports; no server, no network, no mail
```

`npm run build` copies `backend/public/` into `dist/`. `backend/src/` never goes into `dist/`: the release
uploads it to `~/apps/dhemmyn/current/src` (release.json). The loader is `settings.php`, not `config.php`,
because the release script never uploads a file called `config.php`.

## Server layout (cPanel)

```
~/dhemmynfood.mimmycare.com/api/enquiry.php   from dist/
~/dhemmynfood.mimmycare.com/api/.htaccess     from dist/
~/apps/dhemmyn/releases/<utc>/src/            backend/src
~/apps/dhemmyn/current                        symlink to the release
~/apps/dhemmyn/shared/state/                  rate-limit file, 0700
~/private-config/dhemmyn/config.php           private settings, 0600 (folder 0700)
```

`enquiry.php` finds both from its own place: two levels above `~/dhemmynfood.mimmycare.com/api/` is the home
folder. If the code is missing it answers 503 `unavailable` and logs `backend not installed`. Only PHP's
development server (`php -S 127.0.0.1:8080 -t backend/public`) uses the repository layout, with no settings
file, so sending is always off there.

## Answers

| Status | `error.code` | When |
|---|---|---|
| 200 | (none, `"ok":true,"reference":"DF-..."`) | accepted by the mail service |
| 405 | `method_not_allowed` | anything but POST (the release smoke check uses a GET) |
| 403 | `forbidden_origin` | Origin is not `https://dhemmynfood.mimmycare.com` |
| 415 / 413 | `unsupported_type` / `too_large` | not JSON, or over 32 KB |
| 422 | `invalid` | a field fails a rule, an unknown field, or the honeypot is filled |
| 503 | `sending_off` | valid, but sending is off or the settings are incomplete. Nothing sent |
| 429 | `rate_limited` | over a limit (`Retry-After: 3600`) |
| 502 | `not_sent` | the mail service refused it |
| 503 | `unavailable` | anything unexpected (no details in the answer or the log) |

## Private settings

`~/private-config/dhemmyn/config.php` returns an array with the keys in `config.sample.php`. A missing file,
a wrong type or a missing value means sending off. `~/Backups/scripts/dhemmyn-server-setup.zsh --apply`
creates it with sending off, a random `rate_key` and `state_dir`. Switching on: docs/07-operations/DEPLOYMENT.md.

## Checks

```sh
npm run test:php                                   # php backend/tests/enquiry.test.php
for f in $(find backend -name '*.php'); do php -l "$f"; done
```
