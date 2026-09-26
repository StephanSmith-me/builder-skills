# Catalog site

Static catalog for [skills.stephansmith.me](https://skills.stephansmith.me). Astro reads `../skills` at build time and writes `dist/`.

`npx skills add` installs `skills/` only. This folder is not part of that install. `skill-template` is omitted from the catalog.

```bash
cd site
npm install
npm run dev
```

## Cloudflare Pages

Create the project in the Cloudflare dashboard. Connect DNS after the first build is green.

| Setting | Value |
|---|---|
| GitHub repo | `StephanSmith-me/builder-skills` |
| Production branch | `main` |
| Root directory | `site` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `22` (also in `.node-version` and `package.json` `engines`) |

Custom domain: `skills.stephansmith.me` on the `stephansmith.me` zone.
