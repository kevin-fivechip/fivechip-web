# fivechip.com

The public website for Five Chip LLC, a software consultancy. It's a static Astro 7 + Tailwind v4 site with no backend and no login. It's served by Firebase Hosting site `fivechip` in GCP project `checkbook-project-507911`, which it shares with the Checkbook app (repo `kevin-fivechip/gcp-react-router`).

## Commands

- `npm run dev`: local server at http://localhost:4321 (`.claude/launch.json` config `site`).
- `npm run build`: `astro check` (types), then a static build to `dist/`. CI and the deploy run exactly this.
- `npm run preview`: serves the built `dist/`.

## Layout

- **Where things live:**
  - One page per URL in `src/pages/*.astro`. Each page owns one theme and the menu order is a progression, so don't restate one page's theme on another. Pages: Home (the short entry: hero, why problem first, what I do, one featured case study), My approach (`/approach`: the method, the questions he starts with, DMAIC; moved off the home page, which links to it), Engagements (`/engagements`: the four kinds of work, what a client can expect, ways to start; it was briefly called Services, no redirect kept), Case studies (`/case-studies` index plus one page per study under `src/pages/case-studies/<slug>.astro`), About (the person: origin of the discipline, timeline, credentials), Contact, Privacy.
  - Shared facts and copy (business name, email, LinkedIn, nav, services list) in `src/site.ts`. Case-study listing data (title, client, summary, tags, talk link), the step-by-step `comparison` of the two studies and the `otherWork` resume list all live in `src/case-studies.ts`; the index page, the home-page teaser and the detail pages' cross-links read it. Detail pages are hand-written. The index leads with the comparison on purpose: the two studies are twenty years apart to show the method, not the technology, is what carries a project.
  - Case-study diagrams are inline SVG components in `src/components/diagrams/`, drawn with the site's palette (Tailwind `fill-*`/`stroke-*` classes) and a vertical layout so they stay legible on phones. Never embed slide images or screenshots from client work.
  - `<head>`/SEO tags in `src/layouts/BaseLayout.astro`, pieces in `src/components/`.
- **Styling:** Tailwind utilities. The palette, fonts and the few shared classes (`btn-primary`, `btn-secondary`, `btn-inverse`, `eyebrow`, `.content`) are in `src/styles/global.css`. Tokens: `brand-*` is the navy scale (headings, buttons, the dark band), `accent-*` is copper (eyebrows, rules, marks; use `accent-700` for text on white), `paper` is the warm off-white for alternating sections. Body text is `stone-*`. Display headings (`h1`, `h2`) are set in Source Serif 4; everything else is Inter. Both fonts are self-hosted through Fontsource.
- **Portrait:** `src/assets/kevin-beatty.jpg` (1200×1500, 4:5), rendered by `src/components/Portrait.astro` through `astro:assets` (responsive WebP at build time): the full photo on the About page, a small round crop in the home-page byline, and the `og:image` in `BaseLayout.astro`. Replace the file to change the photo; keep the 4:5 ratio. Kevin doesn't want a large photo on the home page, nor decorative offset frames around it.
- **URLs have no `.html` and no trailing slash.** Astro's `build.format: "file"` + `trailingSlash: "never"` (`astro.config.mjs`) must stay in step with `cleanUrls: true` + `trailingSlash: false` (`firebase.json`).
- **No cookies, analytics, scripts or third-party requests.** The font is self-hosted through Fontsource, and pages ship no JavaScript (the phone menu is a `<details>` element). The Privacy page promises this; keep it true or update the page.
- **Copy is written in Kevin Beatty's voice and based on his resume** (kept outside the repo): Six Sigma / semiconductor process-control background, problem-first architecture done in person with the teams, attention to non-technical roadblocks, AI used with guardrails. Every figure and credential on the site (About timeline and credentials) must stay traceable to that resume. Kevin doesn't want a stats/numbers strip on the home page; it reads as bragging. Don't invent facts, name confidential clients (the county client stays "a county government" / "a county legal team"; Improving, Best Buy and Seagate may be named), or publish his address or phone number. Case-study facts come from Kevin's own talks and slides (kept outside the repo); quotes from client staff stay unattributed ("hallway conversation"). The Seagate case study comes from his 2005 Six Sigma project report, which is marked Seagate confidential: publish the approach, the anonymised results ("high-volume product", "low-volume product A/B") and Seagate's name, but never colleague names, product codes, site codes, vendor names or slide images.
- **Spelling:** always "resume", never "résumé" or "resumé", in copy, comments and docs.
- **Contact:** email (`site.email`) is the primary call to action everywhere. LinkedIn (`site.linkedin`) is secondary only: footer, Contact page and the call-to-action band. No contact form, no resume download.

## Deploy

- `.github/workflows/deploy-site.yml` runs on push to `main` (or manually):
  1. Build.
  2. Keyless auth through Workload Identity Federation as `fivechip-web-deployer`. That account holds only Firebase Hosting Admin + Service Usage Consumer, and only this repo can use it.
  3. `firebase deploy --only hosting`.
- `.github/workflows/ci.yml` runs the build on pull requests.
- **`firebase.json` must stay hosting-only.** Never add `firestore`, `functions`, `storage` or other sections: this project holds Checkbook's production data and locked-down Firestore rules.
- **Domain:** `fivechip.com` (+ `www` redirect) is connected to site `fivechip` in the Firebase console. DNS is at GoDaddy. Email for the domain runs through ImprovMX (MX, SPF TXT) plus a `_dmarc` TXT record: never change those DNS records.
- **Other apps** get their own subdomain and Hosting site, deployed from their own repo. For example, `finance.fivechip.com` is Checkbook on site `fivechip-finance`.

## Working agreements

- Do not commit or push unless asked. The agent environment has no SSH push access; the user pushes.
- **The user creates every branch.** The agent never creates, switches or deletes branches, and never changes a branch's upstream: no `git switch`/`checkout` (including `-c`/`-b`), `git branch <name>`, `git worktree add`, or `--set-upstream`/`--unset-upstream`. Work only on the branch that is already checked out. If that's `main`, or the task needs a different branch, stop and ask the user to create and check it out (suggest a `task/...` name).
- Verify before claiming done: run `npm run build`, then check the changed pages in the browser preview at phone and desktop widths.
- Never put secrets in the repo.
- The shell is zsh: `$VAR:word` triggers modifiers (write `${VAR}:word`), and `UID` is a reserved variable.

## Astro docs

Full docs: https://docs.astro.build. Before related work, read: [routing](https://docs.astro.build/en/guides/routing/), [components](https://docs.astro.build/en/basics/astro-components/), [content collections](https://docs.astro.build/en/guides/content-collections/) (for a future blog or case studies), [styling and Tailwind](https://docs.astro.build/en/guides/styling/).
