# Patterns

The assessment is in `SKILL.md`. Do not add a provider, and do not invent a model name.

## Integration and use

- A provider setting in `.env`, or in an Infisical project you can see, is integration. Name the setting. Never print the value.
- Closed Infisical is unseen, not missing.
- A call in the product code is utilization. A key alone is not.
- A token in source is the wrong place. Say that before you talk about maturity.

## Vectors

pgvector, Pinecone, and OpenAI vectors are stores. Name the one a file shows. Two stores is complexity, not a recommendation to merge.

OpenRouter routes model calls. It is a store only when the file stores vectors there.

## Embeddings

The four patterns are complete only in order. Computed and not kept is not "in the product." A store with no embedding call is incomplete. Do not invent a dimension.

Recommend the embedding step only when client value depends on search, memory, or knowledge. A proof of concept does not get a vector store so the stack looks further along.

## Editor versus backend

Claude as a backend is an API call in the app. The `.claude` folder, and skills beside the editor, are `cursor-setup`. Do not score those files here.
