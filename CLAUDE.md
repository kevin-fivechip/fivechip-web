# fivechip.com

The public website for Five Chip LLC, a software consultancy. It's a static Astro 7 + Tailwind v4 site with no backend and no login. It's served by Firebase Hosting site `fivechip` in GCP project `checkbook-project-507911`, which it shares with the Checkbook app (repo `kevin-fivechip/gcp-react-router`).

## Commands

- `npm run dev`: local server at http://localhost:4321 (`.claude/launch.json` config `site`).
- `npm run build`: `astro check` (types), then a static build to `dist/`. CI and the deploy run exactly this.
- `npm run preview`: serves the built `dist/`.

## Layout

- **Where things live:**
  - One page per URL in `src/pages/*.astro`.
  - Shared facts and copy (business name, email, nav, services list) in `src/site.ts`.
  - `<head>`/SEO tags in `src/layouts/BaseLayout.astro`, pieces in `src/components/`.
- **Styling:** Tailwind utilities. The brand colors, font and the few shared classes (`btn-primary`, `btn-secondary`, `eyebrow`, `hero-grid`, `.content`) are in `src/styles/global.css`.
- **URLs have no `.html` and no trailing slash.** Astro's `build.format: "file"` + `trailingSlash: "never"` (`astro.config.mjs`) must stay in step with `cleanUrls: true` + `trailingSlash: false` (`firebase.json`).
- **No cookies, analytics, scripts or third-party requests.** The font is self-hosted through Fontsource, and pages ship no JavaScript (the phone menu is a `<details>` element). The Privacy page promises this; keep it true or update the page.
- **Copy is written in Kevin Beatty's voice and based on his résumé** (kept outside the repo): Six Sigma / semiconductor process-control background, problem-first architecture, AI used with guardrails. Every figure and credential on the site (About timeline and credentials) must stay traceable to that résumé. Don't invent facts, name confidential clients, or publish his address or phone number.

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
