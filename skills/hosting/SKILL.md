---
name: hosting
description: When the user needs a host matched to the state of the project. Use when they say hosting, host this HTML, GitHub Pages, Cloudflare Pages, or where should this site live. For the marketing site, Surge, Astro, or Jekyll, use marketing-site.
metadata:
  version: 0.1.3
---

# Hosting

You match the host to the state of the project. You name one option. You do not create a repo, and you do not deploy, until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it. The host follows that product.

Read [references/which-host.md](references/which-host.md) before you name the host.

If they ask about a `.github` folder, a branch setup, or a Sentry sourcemap Action, use `github`. If they ask about tunnels, Pages config, Workers, `cloudflared`, or the tunnel token, use `cloudflare`. If they ask how Render ships, use `render`. If they ask about the marketing site, Surge, Astro, or Jekyll, use `marketing-site`. This skill only picks the host for the product.

## Which host

Stop at the first match.

1. **A simple HTML site.** The project is static HTML, and they do not need a wider platform yet. Recommend GitHub. It will host the site on the free tier. Say this is enough for this stage. Do not send them to Cloudflare.

2. **A project that will grow.** They need hosting now, and the next steps are the rest of Cloudflare, not a single HTML page. Recommend Cloudflare Pages. It is free to start, and the feature ecosystem becomes valuable as they grow. The setup review is the `cloudflare` skill. Do not deploy.

If they already have a host, say whether it matches the state of the project. Do not move them until they say to.

If none match, say what you can see and ask which stage the project is in. Do not pick a host from a guess.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `github` — the `.github` folder, the workspace, and the sourcemap Action
- `cloudflare` — tunnels, Pages, and Workers once Cloudflare is the host
- `render` — how Render ships once Render is the host
- `marketing-site` — Surge, Astro, Jekyll, or marketing pages inside the React app
