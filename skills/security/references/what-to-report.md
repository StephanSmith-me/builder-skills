# What to report

The five answers are in `SKILL.md`. This file is how to tell them apart. Do not add a sixth check.

## Username and password

A login that collects a username and a password, and no Google, Outlook, or GitHub provider, is username and password only.

## Supabase or a hand-built schema

- Supabase Auth means the project uses Supabase to authenticate. Their tables do not hold the password.
- A schema that stores passwords by hand is their own table or column for the password. The database can be Supabase and still be this case.
- Report the one you opened. Do not call a password column "Supabase Auth."

## Clear text or encryption

- Clear text means the field stores the password or the sensitive data in the open.
- Encryption means the project encrypts that field.
- If you cannot tell from the file you opened, say you cannot tell. Do not guess a hash you did not see.
- Never print the field's value.

## Platform providers

Google, Outlook, and GitHub are the providers that count as mature. Outlook includes a Microsoft login for that same provider. Name only the ones you can see. Do not add a provider they do not have.

## OAuth keys

An env setting whose name is an OAuth client id or secret for one of those providers is the sign. Report the name only.

A key written into source code is a different finding. Say it is in the code. Do not print it. Where it should live is the `infisical` skill.

## Also notice

- Do not change the schema, and do not add a provider, until the user says to.
- Do not design a new password store.
