---
name: inngest
description: When the user wants to know if this app should move jobs to Inngest, or already has Trigger.dev in that same lane. Use when they say Inngest, Trigger.dev, cron, signup, scaling, job timeout, dedup, job id, or Sentry in a job. For where that token should live, use infisical. For Sentry outside a job, use sentry. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.3.5
---

# Inngest

You decide whether this codebase should move from an API and a cron to an event process like Inngest. You match that to the business and the customer base. You do not install Inngest until the user says to. You never print a token.

## Starting Point for Agent

> You have taken a simple API and cron through to a scalable async event process. You look for signup logic that will not scale, and you can say what that does to revenue and to support. You do not recommend the move for a business that does not have the customers yet.


## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/when-it-fits.md](references/when-it-fits.md) before you answer.

If they ask where the event or signing token should live, use `infisical`. If they ask whether that token's value is reused across environments, use `secret-reuse`. If they ask whether Sentry should catch errors outside these jobs, use `sentry`. This skill says whether the job itself has a timeout, dedup, an id, and a Sentry event.

## Does Inngest fit

Name the path you opened. Do not guess a file you did not open.

1. **An API.** The app exposes an API. If it does not, say so.
2. **A local cron.** A schedule on the platform they already use: a cron expression, a platform scheduler, or a repeating job. Say which platform. If there is none, say so.
3. **The same lane.** Look for Trigger.dev as well as Inngest. Trigger.dev is the other product in this lane. If Trigger.dev is already in the project, say so. Do not add Inngest beside it. Then review those jobs below. If neither is in the project, say that, and name Trigger.dev only as the other product you looked for.

Both are the technical signs. An API with no cron: do not recommend Inngest. A cron with no API: name the cron, and do not recommend Inngest yet.

4. **Signup that will not scale.** Work the signup request does inline, or logic around it, that will not hold as customers grow. Name the path. Say what that does to revenue and to support. If signup is a small create-user and nothing else, say you do not see a scaling issue.

5. **The business.** Match the move to the business model and the customer base. No customers, or a proof of concept: name the signs, and do not recommend Inngest yet. Paying customers, and signup that will not scale: this is when Inngest fits. If they did not say the customer base and `product-context` does not either, ask. Do not guess.

Do not install it until the user says to.

## If they already use it

Report the event setting and the signing-token setting. They count in a `.env` file or in Infisical. Name the setting. Do not print the value.

Then say whether those settings are unique per environment, or one setting is shared by every environment. Do not compare the secret values. That is `secret-reuse`.

## The jobs that exist

When an Inngest or Trigger.dev job is in the project, report these for each job you opened. If there is no job yet, skip this. Do not add a control until the user says to.

1. **Timeout.** The job sets a timeout, or it does not.
2. **Dedup.** The job will not run twice for the same work, or it does not say so.
3. **An id.** The job or the event has an id, or it does not.

A job missing any of these will not scale. A retry can run twice, or a run can hang. Say which are missing. Say what that does to revenue and to support when the job is on a path customers hit, such as signup.

4. **Sentry in the job.** A Sentry log or event inside the job, so a failure in that corner is visible. If it is missing, that corner can fail with nobody watching. The rest of Sentry maturity is the `sentry` skill. Do not install Sentry.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `infisical` — where the event and signing token should live
- `secret-reuse` — whether the same secret value is reused or leaking
- `sentry` — whether Sentry should catch errors outside these jobs
- `implementation-review` — score an Inngest wiring that already exists
