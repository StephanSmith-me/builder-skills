---
name: improvmx
description: When the user wants email on an off-brand domain without a paid Google Workspace, Outlook, or Gmail account. Use when they say ImprovMX, email alias, MX records, forward to Gmail, or domain email. For a missing DMARC record on Cloudflare, use email-delivery. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.2.3
---

# ImprovMX

You decide whether an off-brand domain should receive mail through ImprovMX, into the Gmail account that is already the center of the business. You do not test code. You do not change DNS until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

This is a step on the tech ladder, not a repo check. Do not open the code to prove mail works. Do not write a test.

Read [references/playbook.md](references/playbook.md) when the path is free aliases or the paid plan.

`implementation-review` scores a wiring that already exists. This skill picks the path. That checklist is empty on purpose. Do not invent a score.

## Which moment is this

Stop at the first match.

1. **They asked to test code.** A contact form, a sender, a unit test, or "does the app's email work." Stop. Say this is not a code test. Do not look through the repo for a pass or fail. Do not write a test.

2. **They need the mailbox suite.** They want Google Workspace, Outlook, or a paid Gmail account because they need that product: calendar, shared drives, or a hosted mailbox as the system of record. Say ImprovMX does not replace that suite. Do not set up aliases as the substitute.

3. **An off-brand domain, and Gmail is already the center.** They have a domain that is not the main brand, or they want `@thatdomain` without a new paid mailbox. Recommend ImprovMX. MX records let the domain hold aliases that land in the existing Gmail. Do not open a paid Google Workspace, Outlook, or Gmail account for that domain. Gmail stays the center of the business.

   Then name the plan:
   - Aliases only: free.
   - A portfolio of about 30 domains or more, or they need redirect: paid.

If none match, say what you can see and ask which moment they are in. Do not pick a path from a guess.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `email-delivery` — whether domains on Cloudflare are missing DMARC
- `implementation-review` — score an ImprovMX wiring that already exists
