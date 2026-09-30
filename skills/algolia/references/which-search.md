# Which search

The decision is in `SKILL.md`. Do not invent an Algolia plan or a price.

## Full text first

Supabase full text is the usual search. It counts only from a file you opened. Unseen is not "they do not have it."

Algolia is the high-end step: faceted search that a customer actually uses. A proof of concept, or search that full text already answers, does not get Algolia so the stack looks further along.

## The two key names

- Admin API key: server. Indexing and other private calls.
- Read token: search-only. This is the credential a client may hold.

Name each setting you found. Never print the value. An admin setting read from client code is the wrong place. Do not move it until the user says to.

A missing read token is a report, not an order to create one.
