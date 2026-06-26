# ICETCIS 2027 — Conference Website (Phase 1)

Static website for the **International Conference on Emerging Technologies in Cybersecurity and
Intelligent Systems (ICETCIS 2027)**, organized by SITAICS, Rashtriya Raksha University, Gandhinagar.

This is the Phase 1 build: a plain HTML/CSS/JS static site (no build step, no backend, no
third-party scripts) intended for design review and for hosting on GitHub Pages now, then GoDaddy
or any standard static host later.

## Structure

```
website/
  index.html              Home
  tracks.html             3 technical tracks + sub-topics
  call-for-papers.html    CFP, dates, submission & review process
  committee.html          Patron / Organizing / Steering / Advisory / TPC
  registration.html       Indicative fee structure
  venue.html              Venue & hybrid participation
  contact.html            Contact details
  css/style.css           Shared stylesheet (navy + gold theme)
  js/main.js              Mobile nav toggle only — no external dependencies
  assets/img/             RRU and SITAICS official logos
```

## Notes on content

- The **Local Organizing Committee** (hospitality, registration desk, venue logistics, kits) from
  the internal concept note is intentionally **not** published on the public site.
- **Springer / CCIS** is referenced as a *proposed, pending-approval* publication partner only.
  Per the concept note's own constraint, the Springer name/logo must not be used in publicity
  before the formal approval letter is received — the site already respects this.
- Fee figures (₹10,000/paper, 10% discount on additional papers, GST extra) come directly from the
  concept note. The student-author discount amount is not yet finalized upstream and is marked
  "to be notified" rather than invented.
- No payment gateway, author login, or database exists yet. Phase 2 will add: CSV-based admin
  import of accepted papers, an author paper-status portal, and venue/session assignment — once the
  conference moves past the Springer proposal stage.

## Local preview

Just open `index.html` in a browser, or serve the folder with any static file server, e.g.:

```
npx serve .
```

## Deployment

- **Now:** GitHub Pages (root of `main` branch, or a `gh-pages` branch / Pages from `/` setting).
- **Later:** point a GoDaddy (or similar) domain at the same static files — no code changes needed,
  since this is a plain static site with relative paths.

## Security posture

- No inline `<script>`/`<style>`, no third-party CDNs or trackers.
- Each page sets a restrictive `Content-Security-Policy` meta tag (`default-src 'self'`).
- All "forms" are `mailto:` links for now — there is no server-side form processing to attack.
- When Phase 2 introduces an admin panel/CSV import/DB, treat all author-supplied data as
  untrusted: parameterized queries only, server-side CSV validation, authenticated admin routes,
  and rate-limited/validated payment-status endpoints before going live.
