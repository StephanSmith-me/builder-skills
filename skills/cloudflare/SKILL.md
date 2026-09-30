---
name: cloudflare
description: When the user wants the Cloudflare setup reviewed for tunnels, Pages, and Workers, including preview branches and the deploy Action. Use when they say Cloudflare, tunnel, cloudflared, Pages, Workers, tunnel token, staging preview, or a Cloudflare deploy. For a Sentry sourcemap Action, use github. For where a secret should live, use infisical. For DMARC or email delivery on a domain, use email-delivery. For Fly as the host, use fly. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.2.9
---

# Cloudflare

You review the Cloudflare setup already in the repo. You report tunnels, Pages, and Workers. You do not deploy, and you do not change DNS, until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

If they ask where the tunnel token should live, stop and use `infisical`. This skill only says whether the env sets that token. Never print the token.

If they ask whether a GitHub Action sends a Sentry sourcemap, use `github`. This skill looks for a deploy workflow, not that sourcemap step.

If they ask about Render, use `render`.

Read [references/playbook.md](references/playbook.md) before you report.

`implementation-review` scores a wiring that already exists. This skill reports the three surfaces. Do not invent a score.

## What to look for

Report each surface as present or absent. Name the path you opened. Do not guess a file you did not open.

1. **Tunnel.** Two halves, reported separately.
   - A Fly Dockerfile that contains `cloudflared`. If there is no Fly Dockerfile, say `cloudflared` is absent.
   - An env setting for the tunnel token. Name the setting. Do not print the value.
   - Both halves present: the tunnel is set up. Only one half: say which half is missing. Do not call that a finished tunnel.

2. **Pages.** A Cloudflare Pages setup. Name the file. A Worker config is not Pages. A Fly Dockerfile is not Pages.

3. **Workers.** A Cloudflare Workers setup. Name the file. A Pages config is not a Worker. A Fly Dockerfile is not a Worker.

If a surface is missing, say so. Do not add a tunnel, a Pages project, or a Worker until the user says to.

## Preview and deploy

When Pages or Workers are present, also report how they ship. Name the path you opened. If you did not open the Cloudflare dashboard, those build settings are unseen. Do not guess them.

1. **Primary or staging.** A staging or preview branch wired to a Cloudflare preview, or only the primary branch (`main`, or the primary branch the file names). Only the primary branch means there is no preview branch in the files you opened. That is enough until they need a preview before production. Do not add a staging branch from a guess.

2. **A deploy Action.** A GitHub Action whose job deploys to Cloudflare. Name the file. A workflow that does not deploy is not this. No such workflow: the deploy Action is absent.

3. **Branch handling.** Where the branches are named.
   - Cloudflare build settings in the repo: a config that says which branch is production and which is preview. Name the file.
   - GitHub: a workflow that names the branches it deploys. Name those branches.
   Say which place you found. Neither place, and only the primary branch in view: branching is not set beyond that branch.

Do not create the workflow, and do not add the preview branch, until the user says to.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `blindspots` — which Cloudflare features are in use, and which can wait
- `email-delivery` — DMARC and ImprovMX on domains whose DNS is on Cloudflare
- `fly` — Fly as the host, and how much of that app is in code
- `render` — Render services, and that host's preview and deploy Action
- `github` — the `.github` folder, a setup per branch, and the Sentry sourcemap Action
- `infisical` — where the tunnel token should live; this skill only reports that the env sets it
- `implementation-review` — score a Cloudflare wiring that already exists
