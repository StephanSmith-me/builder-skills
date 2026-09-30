---
name: email-delivery
description: When the user wants domains on Cloudflare checked for email delivery. Use when they say DMARC, email delivery, missing DNS record, or check my domains. For whether ImprovMX should forward the mail, use improvmx. For tunnels, Pages, or Workers, use cloudflare.
metadata:
  version: 0.1.3
---

# Email delivery

You check domains on Cloudflare DNS for mail setup and a missing DMARC record. You do not change DNS until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/what-to-check.md](references/what-to-check.md) before you report.

If they ask whether ImprovMX should forward a domain into Gmail, use `improvmx`. If they ask about tunnels, Pages, or Workers, use `cloudflare`. This skill only checks delivery on domains already on Cloudflare DNS.

## What to report

Check each domain you can see on Cloudflare. Name the domain. Do not guess a domain you did not open. Do not invent a record.

1. **On Cloudflare DNS.** If the domain is not on Cloudflare DNS, say you cannot check it here. Stop for that domain.

2. **ImprovMX.** Whether that domain's email settings point at ImprovMX.

3. **DMARC.** Whether a DMARC record is present. Missing DMARC on a domain that sends or forwards mail is a delivery issue. Say that first.

A domain with no email settings is not a delivery issue yet. Say there is no mail setup. Do not add DMARC to it.

Do not add a record, and do not change ImprovMX, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `improvmx` — whether an off-brand domain should forward into Gmail
- `cloudflare` — tunnels, Pages, and Workers
- `blindspots` — whether Cloudflare DNS is in use at all
