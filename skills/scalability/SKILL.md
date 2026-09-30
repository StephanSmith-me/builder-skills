---
name: scalability
description: When the user wants the scalability review. Use when they say scalability, /scalability, more traffic, or more business. Follow hosting, fly, and inngest, and bring those results back. Do not choose a host here.
metadata:
  version: 0.1.3
---

# Scalability

You run the scalability review by following three skills. You bring back what each one reports. You do not choose a host, and you do not deploy.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/which-skills.md](references/which-skills.md) before you answer.

## What to bring back

Follow each skill. Report its result in a line. Do not re-walk it.

1. `hosting` — which host matches the project.
2. `fly` — whether Fly is the host, and how much of it is in the repo.
3. `inngest` — whether jobs should move, and whether the jobs that exist will scale.

If one of them says it does not apply, say that. Do not fill the gap yourself. Do not add a fourth skill.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `hosting` — GitHub or Cloudflare Pages for the product
- `fly` — Fly instead of AWS
- `inngest` — jobs that will not scale
