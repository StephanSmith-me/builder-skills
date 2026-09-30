# Signals

Playbook: https://stephansmith.me/tools-i-use/entry/supabase/
Vendor: https://supabase.com

The six reports are in `SKILL.md`. Do not add a seventh.

The public page is still a coming-soon note. Do not invent a setup from it.

## Auth, functions, secrets

- Auth is a Supabase Auth call or config in the code.
- Functions are Supabase functions in the repo, or a call that invokes one.
- A secret handled in the code is a value written into source. A name read from the environment is not that value.
- A sync to Infisical is the push of that secret out of the code. Unseen means you could not open Infisical. It does not mean the sync is absent.

## Schema

- Migrations are dated SQL files kept as the change history, such as a migrations directory.
- Manual is a schema change with no migration file: a dashboard edit, or SQL applied by hand.
- Both can be true. Say so.
- How often they change is the dates on the migration files you can see. List those dates. Do not call a pace fast or slow unless the user asked you to compare those dates to a period they named.

## Providers

Google, Outlook, GitHub, and Auth0 are the ones to name. Outlook includes a Microsoft login for that provider.

Count only providers you opened. One of Google, Outlook, or GitHub is simple. Two or more is complexity and maturity. Auth0 is that same signal even when it is the only one.

## Also notice

- Do not change the schema, and do not create a sync, until the user says to.
- Never print a secret.
- A password column in their own table is the `security` skill, even when the database is Supabase.
