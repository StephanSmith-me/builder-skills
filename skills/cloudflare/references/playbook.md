# Cloudflare playbook

Playbook: https://stephansmith.me/tools-i-use/entry/cloudflare/
Vendor: https://www.cloudflare.com

The three surfaces are in `SKILL.md`. Preview branches and the deploy Action are part of Pages or Workers. They are not a fourth product.

The public page's "What it is not for" and "When to reach for it" are about choosing Cloudflare. Do not turn this skill into that choice.

## Tunnel

- `cloudflared` counts when it appears in a Dockerfile that Fly builds. A mention in a README does not count.
- The tunnel token counts when an env file or env config sets it. Report the setting name only. Never print the value.
- One half without the other is an incomplete tunnel. Say which file is missing. Do not write the Dockerfile or the env line until the user says to.

## Pages and Workers

- Pages is a Cloudflare Pages project config. Workers is a Cloudflare Workers config. Name the file you opened.
- Do not treat one as the other. Do not treat the Fly tunnel as either one.
- If the file is not in the repo, that surface is absent.

## Preview and deploy

- Staging for a Cloudflare preview counts when a file names that branch as preview or staging. Only `main`, or only the primary branch the file names, means there is no preview branch in the repo.
- A deploy Action is a workflow that deploys to Cloudflare. Name the file. Tests without a deploy do not count.
- Branch handling is either in a Cloudflare config in the repo, or in the workflow's branch list. Dashboard build settings you did not open are unseen.
- Do not create either file until the user says to.

## Also notice

- Do not deploy, and do not change DNS, until the user says to.
- Where the token should live is the `infisical` skill. Do not start that move from here.
