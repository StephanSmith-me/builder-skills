# When to use Infisical

Playbook: https://stephansmith.me/tools-i-use/entry/infisical/
Vendor: https://infisical.com

The decision is in `SKILL.md`. This file is the detail for the CLI path and the machine-identity path. Do not add a third path.

## CLI path

Use this on the first local export, for one project.

- Prefer the CLI declared in `package.json` so the next person can see what to install. A global install alone hides that.
- `infisical login` writes `.infisical.json` at the repo root. That file means this repo is bound to one Infisical project.
- Startup runs the Infisical command and loads variables into the process. The developer does not keep a copy of the values.
- One personal login is for one project. It is the wrong tool once a second client can be selected by mistake.

## Machine-identity path

Use this when a second organization or client is in play.

- The identity can read one project in one organization.
- The only secret in the local repo is that token.
- Variables live in Infisical folders tied to an environment. The same variable can be shared across repos from that project, which is the source of truth when a mono repo has several `.env` files with the same key.
- Grant a person the folders they need. Do not grant the whole project by default.
- Startup uses the token, loads the variables, and the developer does not need to know the values.

## Also notice

- Doppler already installed is an existing secrets layer. Do not add Infisical beside it until the user says to replace it.
- Several `.env` files in a mono repo with the same key means there is no source of truth at push time.
- A long `.env` full of unused names is cruft. Do not copy it forward as the list of what the app needs.
- Counting which names the code actually reads is a later rule. Do not invent that count here.
