---
name: resend
description: When the user wants to know if this app sends with Resend. Use when they say Resend, resend.com, a Resend API key, or a Resend template. For Postmark, use postmark. For domain forwarding, use improvmx. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.1.6
---

# Resend

You report whether this app sends product mail with Resend, and what that choice signals. Resend does the same job as Postmark. You do not send mail, and you do not change a template, until the user says to. You never print a key.

## Starting Point for Agent

> Resend is a common go-to for vibe-coded apps. Finding it is a signal that a vibe coder may have started this app. The signal is not a fact about the person. Absence of Resend does not mean they are not one. Do not tell them to leave Resend because of that signal.


## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/what-to-look-for.md](references/what-to-look-for.md) before you report.

If they ask about Postmark, use `postmark`. If they ask whether a domain should forward into Gmail, use `improvmx`. If they ask whether Cloudflare domains are missing DMARC, use `email-delivery`. If they ask where the API key should live, use `infisical`. If they ask whether the same key value is reused, use `secret-reuse`. If they ask what Resend features they are not using — link tracking, templates, or layouts — use `blindspots`.

## What to report

Name the path you opened. Do not guess a file you did not open.

1. **API key.** The Resend API key. Say which places hold it:
   - in the code
   - in a `.env` file
   - in Infisical, only when you can see that project
   Name the setting. Do not print the value. If you cannot see Infisical, say that place is unseen. Do not guess the key is there. A key in the code is the wrong place. Say that first.

2. **Templates.** A Resend template in the code, or in env. In the code means the body or a template id written into a process. In env means a setting that names the template. Name the setting. Do not print the value. A process that only names a template kept outside the process is not a template in the code. If you see neither, say you did not see a template.

3. **The signal.** Resend in the project, as a key or as a send call, is the vibe-coder signal. Say it is a signal. Do not state it as who they are. No Resend means that signal is not here.

4. **Beside Postmark.** Both sending is a mix. Name each place. Do not pick a winner. The Postmark review stays on `postmark`.

No Resend key and no Resend send call: Resend is not the sender. Do not install it until the user says to.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `postmark` — the other product sender
- `improvmx` — domain mail forwarded into Gmail
- `email-delivery` — DMARC on domains whose DNS is on Cloudflare
- `infisical` — where the API key should live
- `secret-reuse` — whether that same value is reused or leaking
- `blindspots` — link tracking, templates, and layouts once Resend is already the sender
