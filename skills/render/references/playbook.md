# Render playbook

Vendor: https://render.com

What Render runs, and how it ships, are in `SKILL.md`. The preview and the deploy Action are the same check as Cloudflare Pages and Workers. They are not a second product.

## What it runs

- A blueprint is `render.yaml` or `render.yml`. Name the file.
- Report each service with the type the file uses. Do not translate a static site into Pages, or a running service into a Worker.
- No blueprint and no deploy workflow: Render is absent. Do not add a service until the user says to.

## Preview and deploy

- A preview counts when a file names a preview or a pull-request environment. Only `main`, or only the primary branch the file names, means there is no preview in the repo.
- A deploy Action is a workflow that deploys to Render. Name the file. Tests without a deploy do not count. A blueprint that names a branch is branch handling, not the Action.
- Branch handling is either in the blueprint or in the workflow's branch list. Dashboard settings you did not open are unseen.
- Do not create either file until the user says to.

## Also notice

- Do not deploy until the user says to.
- Where a secret should live is the `infisical` skill. Do not print the value.
