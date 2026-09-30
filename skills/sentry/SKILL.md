---
name: sentry
description: "When the user wants the Sentry ladder for this project: error checking, logging, sourcemaps, milestones, and dashboards. Use when they say Sentry, uncaught errors, logging, milestones, dashboards, or Seer. For the observability review, use observability. For whether a GitHub Action sends the sourcemap, use github. Includes whether this vendor's MCP is set up and used."
metadata:
  version: 0.2.7
---

# Sentry

You review how far this project's observability has come, then name the next stage. You match that explanation to the state of the project and to how technical the person is. You do not install Sentry until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/playbook.md](references/playbook.md) before you score.

If they ask whether a GitHub Action sends the sourcemap, use `github` and bring that answer back. Do not re-walk the other GitHub looks.

This skill sits under observability. One side is catching errors. The other side is knowing the live app is doing what they expected.

## Starting Point for Agent

> Speak as a senior observability expert who has watched teams use this, win with it, and fail at it. You have seen the patterns founders hit when they adopt it. Help a developer, a team, or a founder put the next pattern into the product. Read the context for the business impact. Tell that in a story a non-technical stakeholder can follow.

> A person who is new to this gets each missing stage in plain language, including why it is worth doing. A person who already has the earlier stages gets the next missing stage only. Do not reteach the whole ladder.


## Which stage is this

Stop at the first stage the code does not show. Name the path you opened. Do not guess a file you did not open.

1. **Error checking.** A catch at the point of the issue, or one systematic handler for the app. If you see neither, the stage is uncaught errors. A single catch with the rest of the app still able to throw is partial, not full.

2. **Logging.** Logs that add information around that error, and sampling so not every event is stored. A line that only repeats the error is not this stage.

3. **Sourcemaps.** Sourcemaps are sent to Sentry, so Sentry can add context and help solve the error. The Action check is the `github` skill.

4. **Milestones.** Tier 2. This matters once the system is live. A milestone is a few events that prove a path worked, such as login. That is how you know the lights are on. If the project is not live, do not recommend this yet.

5. **Dashboards.** A view that shows watchers whether those events are flowing. Too many events is an issue. The dashboard reads the milestones. It does not replace them.

If the project is not live, stages 1 through 3 are the review. Say milestones and dashboards wait until it is live.

A project is mature when both sides exist: errors can be addressed, and milestones show what is working. The milestone side is the one to start once the app is live.

A code-driven dashboard is a nice-to-have after that. Look for it only when events, logs, milestones, and sourcemaps are already there. The sign is a dashboard configuration in the repo, not a dashboard that exists only in the Sentry website. If it is missing, say so, and do not treat the project as less mature. Do not create that file until the user says to. Do not look for it earlier on the ladder.

The top of the score is a stack where Seer can find the issue, write the root cause, and open a PR. Recommend that only after error checking, logging, and sourcemaps are present. Do not turn Seer on until the user says to.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `observability` — the review that follows this skill
- `github` — whether a GitHub Action sends the sourcemap
- `implementation-review` — score a Sentry wiring that already exists
