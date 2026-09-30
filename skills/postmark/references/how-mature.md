# How mature

Playbook: https://stephansmith.me/tools-i-use/entry/postmark/
Vendor: https://postmarkapp.com

The summary is in `SKILL.md`. Do not add a second delivery vendor.

Use only these sections of the public page when you need the vendor's own wording: When to reach for it, Watchouts. Do not invent a setup from the rest of the page.

## Hardcoded

A template is hardcoded when the process contains the template body or a template id. The process owns the copy.

A process that names a template kept in Postmark, or in config outside the process, is not hardcoded. Say where that name lives.

## The mix

Supabase sending mail and Postmark sending mail are two delivery methods. Auth mail from Supabase and product mail from Postmark is still a mix. Say the two jobs when you can see them.

One of them absent is not a mix. Do not invent a Supabase sender you did not open.

## The send key

The send key, and any other credential that send needs. Three places:

- Written into the code. Say this first.
- A `.env` setting. Name it.
- An Infisical project you can open. If you cannot open the project, that place is unseen.

A key can sit in more than one place. Name each one you opened. Never print the value. Do not decide that two copies are the same value. That is `secret-reuse`.

Where the key should live, if they ask, is `infisical`.

## The stack around this

This skill's maturity line is only the product sender. Domain forwarding into Gmail is `improvmx`. A missing DMARC record on Cloudflare is `email-delivery`. Name those when they ask about the whole email stack. Do not run those checks here.

## Also notice

- Do not send mail, and do not edit a template, until the user says to.
- Never print a server token.
