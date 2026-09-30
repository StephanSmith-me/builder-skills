# What counts

The report is in `SKILL.md`. This file is the comparison. Do not add a check that is not reuse or a leak.

## Same value

- Compare the value, not the name. Two names with one value are reuse.
- One name in two environments or two folders, with the same value, is reuse.
- The same name with different values is not reuse. Say nothing about that key.
- A value that is unique inside Infisical, and absent outside it, is not a finding.

## A leak

The value from Infisical also appears in a file outside it, such as `.env`. That is a leak even when the Infisical copy is unique.

Never print the value, and never print part of it. Name the key and the places only.

## Also notice

- This skill does nothing useful until a value is reused or leaking. No finding means stop.
- An unauthenticated session has no values to compare. Do not invent a match.
- Do not rotate, move, or delete a key unless the user asks.
