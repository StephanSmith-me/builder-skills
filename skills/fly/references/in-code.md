# In code

Playbook: https://stephansmith.me/tools-i-use/entry/fly/
Vendor: https://fly.io

The decision is in `SKILL.md`. Do not add AWS as a second recommendation.

Use only this section of the public page when you need the vendor's own wording: When to reach for it. Do not invent a setup from the rest of the page.

## Why Fly

Fly is an alternative to AWS. The reason to choose it is that the app's configuration can live in code, in Docker, in the repo. An agent can read that. A dashboard setting cannot be read the same way.

## The two piles

- In code: a Dockerfile, and Fly config such as `fly.toml`. Quote the path.
- Not in code: anything you were told lives only on the Fly dashboard, or that you cannot find in the repo. Unseen is not the same as empty.

A Dockerfile that only says `FROM` and never matches the app they described is still a file. Say what it contains. Do not call an empty file a finished setup.

## Tiers

Free, then hobby. Do not invent what each tier includes, and do not invent a price. Free is enough until they say it is not.

## Also notice

- Do not deploy, and do not write the Dockerfile, until the user says to.
- A deploy value belongs in `.env` or in Infisical, named, never printed. A token written into the Dockerfile is not the "in code" win.
- Postgres on Fly, or another hosted database, counts only when a file you opened shows it. Do not attach one because AWS would have had RDS.
- `cloudflared` inside that Dockerfile is the `cloudflare` skill.
