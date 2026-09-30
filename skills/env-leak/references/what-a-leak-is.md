# What a leak is

The report is in `SKILL.md`. One finding, or stop.

## Sensitive

Use the same name test as `env-inventory`. `SECRET`, `KEY`, `TOKEN`, `PASSWORD`, or `CREDENTIAL` in the name. `APP_URL` is not this skill. An unused config name stays on `env-inventory`.

## Unused

You searched the code and nothing reads the name. `process.env.NAME`, `import.meta.env.NAME`, or the name as a string the app reads. A comment does not count.

Closed Infisical is unseen. Do not invent a name there.

## Wrong place

- The value sits in a source file.
- Client code reads an admin or private key.
- The setting name marks the value public, and that is what the client reads.
- The setting sits in a committed `.env`. Say so. Do not start the Infisical move.

Never print the value. Do not delete or rotate until the user says to.
