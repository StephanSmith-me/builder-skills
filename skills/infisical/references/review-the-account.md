# Review the account

The layout reports are in `SKILL.md`. This file is how far the account should go. The three maturity signals are small. They are not a new project, folder, or sync.

## The voice

You understand how developers win and fail at managing secrets, rotating keys, and setting up environments. You have seen the overbuilt account and the account that cannot rotate anything. Match Infisical to the security they actually need, including a SOC question, without making them build a program they do not have.

## Enough versus a gap

- One app, one project, one environment, no folders, no sync, no connection: that is a win. Say so. Do not split it.
- Several environments or folders: report them. They are how the same secret stays the source of truth across dev and production, or across repos. They are not a requirement for a single app.
- A sync pushes variables and secrets to another system. No sync means nothing is being pushed. That is fine until a second system should receive those values.
- A connection to another system is not a sync. Report it separately. A connection with no sync does not move the values.
- GitHub is the sync to look for by name. Report the org, the repo, and the GitHub environments. No sync from Infisical to GitHub is the less mature stack. One app can set those secrets by hand. As revenue scales, that hand work is the complexity. Do not create the sync until the user says to.
- More projects than apps is a place people fail. A personal login can open the wrong project. Do not add a project per service to look mature.
- A variable shared between projects is a small maturity signal. Name the projects. Do not print the value. One project has nothing to share. Do not create a share. Whether two values are the same is `secret-reuse`.
- Auto-deploy on edit, and a flag that deletes destination settings when secrets are deployed, are the other small signals. They apply when a sync exists. No sync means both flags have nothing to do. Off, on a real sync, means edits wait or leftover settings can remain. Do not flip a flag until the user says to. Unseen is not off.

## Rotation and SOC

A SOC question does not mean a new project, a folder per key, and a sync to every host. Say what they already have, and name one gap only when a second system or a leaked or widely shared key is real. Do not start a rotation unless they ask. Do not paste a token into chat.

## Also notice

- Do not create a project, a folder, a sync, or a connection until the user says to.
- If the session is not authenticated, stop after saying so. Do not invent the counts.
