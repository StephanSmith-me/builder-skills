---
name: postmark
description: When the user wants the maturity of product email in this app, including where the Postmark send key lives. Use when they say Postmark, email template, transactional email, send key, or Supabase and Postmark both send. For Resend, use resend. For domain forwarding, use improvmx. For DMARC on Cloudflare, use email-delivery. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.2.6
---

# Postmark

You summarize how mature product email is in this app. Postmark is the delivery method. You do not send mail, and you do not change a template, until the user says to. You never print a token.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/how-mature.md](references/how-mature.md) before you summarize.

If they ask about Resend, use `resend`. If they ask whether a domain should forward into Gmail, use `improvmx`. If they ask whether Cloudflare domains are missing DMARC, use `email-delivery`. If they ask whether the same send-key value is reused, use `secret-reuse`. If they ask what Postmark features they are not using — link tracking, templates, or layouts — use `blindspots`. This skill is the product sender, and where its credentials sit.

## What to report

Name the path you opened. Do not guess a file you did not open.

1. **Hardcoded templates.** A Postmark template written into a process: the body, or a template id, sitting in that code. A process that only names a template kept outside the process is not hardcoded.

2. **Supabase and Postmark.** Both sending mail is a mix. Name each place. Say which job you can see each one doing. If you cannot tell the jobs apart, say so.

3. **Send key and credentials.** The Postmark send key, and any other credential that send needs. Say which places hold it:
   - in the code
   - in a `.env` file
   - in Infisical, only when you can see that project
   Name the setting. Do not print the value. If you cannot see Infisical, say that place is unseen. Do not guess the key is there.

4. **Maturity.** One line.
   - No Postmark: product mail has no delivery method yet.
   - The send key is in the code: say that first. Delivery is not mature while the credential sits in the code.
   - Postmark, with a template hardcoded in a process: delivery exists, and the template is stuck in the process. Early.
   - Postmark and Supabase both sending: mixed. Two systems deliver mail.
   - Postmark sending, templates not hardcoded, Supabase not also sending, and the send key is not in the code: one delivery method. Mature.

Do not install Postmark, and do not move a template, until the user says to.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `improvmx` — domain mail forwarded into Gmail
- `resend` — the other product sender, common in a vibe-coded app
- `email-delivery` — DMARC on domains whose DNS is on Cloudflare
- `infisical` — where the send key should live
- `secret-reuse` — whether that same value is reused or leaking
- `implementation-review` — score a Postmark wiring that already exists
- `blindspots` — link tracking, templates, and layouts once Postmark is already the sender
