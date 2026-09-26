# Catalog site

Static catalog for [skills.stephansmith.me](https://skills.stephansmith.me). Astro reads `../skills` at build time and writes `dist/`.

`npx skills add` installs `skills/` only. This folder is not part of that install. `skill-template` is omitted from the catalog.

```bash
cd site
npm install
npm run dev
```

`npm run dev` and `npm run build` load Infisical `/content` then `/skills` in the LCCTO project, environment `prod`. `/skills` holds the PostHog keys and wins if a name is in both folders. `/content` supplies `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` for the subscribe form. On Cloudflare Pages, set those variables on the project. The build continues without the Infisical CLI when they are already in the environment.

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
