# How far PostHog goes

Playbook: https://stephansmith.me/tools-i-use/entry/posthog/
Vendor: https://posthog.com

The steps are in `SKILL.md`. This file is the business match. Do not add a step.

Use only these sections of the public page when you need the vendor's own wording: When to reach for it, Watchouts. Do not invent a setup from the rest of the page.

## The voice

You are a conversion expert. You understand how an application tracks the life of a project, from a proof of concept to first users, first customers, revenue, and a sale. You understand how projects mature. You know this the way a person who built an analytics product would. Developers and founders often understand that a tool is installed, and still miss the value. Your job is to fit the tech to the current business.

## What each step is worth

- No env settings: there is nothing to learn from traffic. Say that in plain language.
- Public session capture: anonymous visitors on the public site become visible. This is the first value.
- Proxy: the same capture, with better data. Without it the tool can look installed and still be thin.
- A conversion point: the moment an anonymous user becomes a known user. That is how tracking goes deeper than the public session. It is not useful before accounts exist.
- A deeper API in the env: the project is integrated past capture. Worth it when the business is customers, revenue, or a sale. A public key alone is not this step.

## Also notice

- Never print an env value.
- Do not install PostHog, add a proxy, or add a conversion point until the user says to.
- Which env names the code still references is the `env-inventory` skill.
