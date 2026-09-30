# GitHub playbook

Playbook: https://stephansmith.me/tools-i-use/entry/github/
Vendor: https://github.com

The signals are in `SKILL.md`. Do not turn them into a GitHub maturity score.

The public page's "What it is not for" and "When to reach for it" are about hosting and storage. Do not turn this skill into a Pages decision.

## Where you read

- `.github` at the repo root is the Actions folder. A workflow lives in `.github/workflows/`.
- A workspace file ends in `.code-workspace`. Report it. It is not an observability or scalability signal.
- One can exist without the other.

## The signals

- Observability: a step whose job is sending a sourcemap to Sentry. Name the workflow. A Sentry mention that does not send a sourcemap is not the signal. Whether it matters is `sentry`.
- Scalability: a workflow on a schedule. Name the file. That is the cron. Whether it should move is `inngest`. Do not recommend the move here.
- Branch names come from the workflow you opened. Quote them. `main` alone is not maturity. A Cloudflare deploy or a preview branch is `cloudflare`. A Render deploy or a preview is `render`.

Do not invent branch protection, required checks, or a workflow the repo does not have. Do not write a workflow until the user says to.
