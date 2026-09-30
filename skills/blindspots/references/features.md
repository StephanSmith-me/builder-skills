# Features

The report is in `SKILL.md`. Written assessments are Cloudflare, and Postmark or Resend when that product is already the sender. Do not add a feature they did not ask about, and do not invent a list for another product.

## In use or not

A feature is in use only when a file you opened shows it. A mention in a README is not enough.

- **R2** — object storage. A bucket or an R2 setting in the project.
- **DNS** — Cloudflare is the DNS for a domain in the project. The zone, not a rule on it.
- **Pages** — a Cloudflare Pages project.
- **Workers** — a Cloudflare Workers project. A Pages config is not a Worker.
- **Tunnels** — a Cloudflare tunnel, including `cloudflared`. The wiring check is the `cloudflare` skill.
- **DNS routing rules** — a rule that routes or redirects on that DNS. The zone can exist without a rule.

## What they could solve

Name one unused feature only when they have said the need:

- Files to store → R2
- The domain's DNS → DNS
- A site → Pages
- An app at the edge → Workers
- A private origin to reach → Tunnels
- A route or redirect on the DNS → DNS routing rules

## Low effort, high impact

Recommend that one feature when the stage they are in can take it without a new project. An early site that already has Pages does not get the other five as a backlog. Say they can wait.

A match above is the recommendation only when they already have Cloudflare and the need is one they stated. Do not enable it until the user says to. Do not deploy, and do not change DNS, from this skill.

## Mail

Use this when the inventory already names Postmark or Resend as a sender. Assess the product they named. If both send, assess each. Do not pick a winner. Whether the product is the sender, and where the key lives, stays on `postmark` or `resend`.

Report each of these as in use, not in use, or unseen:

- **Link tracking.** In use when a file you opened shows that links or clicks in that mail are tracked. If you opened the send and it does not show that, link tracking is not in use. If you did not open the send, it is unseen.
- **Templates.** In use when the send names a template kept with that product, by id or by name. A body written in the process means templates are not in use. If you did not open the send, it is unseen.
- **Layouts.** In use when a file shows a layout, or a template that names a layout. If you see a template and no layout, layouts are not in use. If you did not see the template, layouts are unseen.

## What mail could solve

Name one unused feature only when they have said the need:

- They want to know who clicked, and link tracking is not in use → link tracking
- More than one mail, and the body is written in the process → templates
- More than one template, and each repeats the same chrome → layouts

One early mail, with no need they stated, can wait. Do not turn the three into a backlog. Do not turn tracking on, do not create a template, and do not send mail, until the user says to.

## Another product

If the inventory names a product other than Cloudflare, Postmark, or Resend, say there is no feature assessment for it yet. Do not borrow either list. Do not name an unused feature for that product.
