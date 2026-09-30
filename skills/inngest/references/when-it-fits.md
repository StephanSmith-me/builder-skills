# When Inngest fits

Playbook: https://stephansmith.me/tools-i-use/entry/inngest/
Vendor: https://www.inngest.com

The decision is in `SKILL.md`. Do not add a second job system.

Use only these sections of the public page when you need the vendor's own wording: When to reach for it, Watchouts. Do not invent a setup from the rest of the page.

## The two signs

- An API is a route or handler the app exposes.
- A local cron is a schedule already on their platform. Name the platform. Do not require one vendor's cron syntax.
- Both signs together are the technical case. One sign is not.
- Signup that does the heavy work inside the request is the scaling issue. A signup that only creates the user is not.
- Say the impact in business terms: revenue the signup cannot finish, and support that has to catch the failures.
- No customer base yet: the signs can be real and Inngest can still wait.

## The same lane

Trigger.dev is the other product in this lane. Look for it in the project before you recommend Inngest.

- Trigger.dev already in the project: that is the event process. Do not add Inngest. Review the jobs that exist.
- Neither in the project: say so. Name Trigger.dev only as the other product you looked for. Do not install it.
- Do not name a third product.

## Jobs that exist

A timeout, dedup, and an id are the three controls. Each is present only when the job you opened sets it. A comment that says "should timeout" does not count.

Missing any one of them means the current system will not scale. Say which one. Do not add it until the user says to.

A Sentry log or event inside the job means that corner can be seen. The job file has to send it. A Sentry setup elsewhere in the app does not count for this job.

## Tokens

- The event setting and the signing-token setting are the two names to look for.
- Either a `.env` file or Infisical counts. Say which one you opened.
- Unique per environment means each environment has its own setting. One shared setting means it does not.
- Never print the value. Do not decide that the values match. That comparison is `secret-reuse`.

## Also notice

- Do not install Inngest, and do not add a cron, until the user says to.
- Where the token should live is the `infisical` skill.
