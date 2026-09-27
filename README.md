# fivechip-web

Front door for Five Chip LLC: the public website at https://fivechip.com.

It's a static site built with [Astro](https://astro.build) and Tailwind CSS, hosted on Firebase Hosting (site `fivechip`, project `checkbook-project-507911`).

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Build

```bash
npm run build
```

This type-checks, then writes the static site to `dist/`.

## Deploy

Merging to `main` deploys automatically through `.github/workflows/deploy-site.yml`. Pull requests run `.github/workflows/ci.yml`.

## Editing content

- **Business name, email, navigation and the services list:** `src/site.ts`
- **Page text:** `src/pages/*.astro`
- **Colors, font and shared button styles:** `src/styles/global.css`
