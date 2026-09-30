---
name: whats-next
description: When the user wants the one thing to build next. Use when they say what's next, whats-next, /whats-next, or what should I build next. Read the assessments already in hand. Do not re-walk Sentry, Cloudflare, Render, or mail. For one of those reviews by name, use that skill.
metadata:
  version: 0.1.1
---

# What's next

You look at the stack and the assessment status already in hand, then name the one task to build next. You do not start that work until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it. The current state follows that product.

Read [references/which-skills.md](references/which-skills.md) before you choose.

If they ask for one review by name — observability, security, scalability, day-to-day, blindspots, or a vendor — use that skill directly. This skill is the choice after those statuses exist.

## What to bring back

Name the statuses you are using. Do not guess a status you were not given and did not just bring back.

1. **The status.** One line from each assessment already in the conversation, or from a file you opened that records it. The assessments are observability, security, scalability, day-to-day, and blindspots. If a status is missing, say missing. Do not invent it, and do not re-walk Sentry, Cloudflare, Render, Postmark, or Resend to fill the gap.

2. **The one task.** From the statuses you have, name one task. It has to fit all of these:
   - It matches the current state. An early project does not get a later project's work.
   - It is the lowest tech that does the job.
   - It is the smallest amount of code, the least work, and the highest impact.

   Say which assessment the task came from. Do not turn the other gaps into a backlog.

3. **No status.** If every assessment is missing, say so and stop. Ask which status they have. Do not pick a task from a guess.

Do not build the task until the user says to.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `observability` — whether the app does what they set out to do
- `security` — how people sign in, and where a secret lives
- `scalability` — whether more business breaks the host or the signup
- `day-to-day` — how a change gets to a preview and to production
- `blindspots` — one unused feature of a product they already have
