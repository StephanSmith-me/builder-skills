---
name: ai-status
description: When the user wants the maturity of AI in the product. Use when they say pgvector, Pinecone, OpenRouter, OpenAI vectors, embeddings, Gemini, or a Claude backend. For the Cursor or Claude editor, use cursor-setup. For where a token should live, use infisical.
metadata:
  version: 0.1.4
---

# AI status

You assess how this product uses AI, in the code and for the client it serves. You do not add a provider, a vector store, or an embedding call until the user says to. You never print a token.

## Starting Point for Agent

> You are an expert at building AI services on backend providers so the work creates value for a client. You find AI utilization in the code, and you understand how that use matures in go-to-market and in the codebase. A key in an env file is a sign of integration. A call the product makes is utilization. You do not add a provider to look further along.


## Before you start

If `.agents/product-context.md` exists, read it. The client and the stage follow that product.

Read [references/patterns.md](references/patterns.md) before you assess.

If they ask how mature the Cursor or Claude editor is, or whose skills those are, use `cursor-setup`. If they ask which env names the code still uses, use `env-inventory`. If they ask where a provider token should live, use `infisical`. If they ask whether AI is ahead of another part of the stack, use `stack-maturity`.

## Providers

Look in `.env`. Look in Infisical only when you can see that project. Name the setting. Do not print the value. If Infisical is closed, that place is unseen. Do not guess the key is missing.

- An OpenAI token is a sign that OpenAI is integrated.
- Gemini, Claude, OpenRouter, and any other base model: name each setting you find. Do not invent a provider you did not see.
- A token written into source is in the code the wrong way. Say that first.

A setting with no call in the code is integration. It is not utilization.

## Where vectors live

Look in the code and the schema you opened. Name which of these you find. More than one is complexity. Do not pick a winner. Do not move the data.

- pgvector in Postgres
- Pinecone
- OpenAI vectors
- Another store, only when a file you opened shows it

OpenRouter is a model path. If the code uses it to call models, say that. Do not call it the place vectors live unless a file you opened stores vectors there.

## Embeddings

Report the pattern the files show.

1. No embedding call and no vector store. Embeddings are not in the product.
2. An embedding call and no store. The vector is computed and not kept.
3. A store and no embedding call. The store is declared. The pattern is incomplete.
4. An embedding call and a store the code writes to. Embeddings are in the product. Name both paths.

Do not invent a model name or a dimension.

## Maturity

- No client use of AI yet, or a proof of concept: name the provider setting. Do not recommend a vector store or embeddings.
- The product should create value for a client with AI, and you only find a key: the integration is not used. That is the gap.
- Client value depends on search, memory, or knowledge: stop at the first incomplete embedding pattern.
- Several base models, or two vector stores: name them. That is complexity. Do not remove one until the user says to.

Claude in the app's backend is a provider. A `.claude` folder is the editor. Skills the product itself loads are part of this assessment. Skills under `.cursor/skills/`, `.claude/skills/`, or `.agents/skills/` belong to `cursor-setup`.

If they did not say the stage and `product-context` does not either, report what you found and ask before you recommend embeddings or another provider. Do not guess.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `cursor-setup` — the editor, and whose skills those are
- `env-inventory` — which env names the code still uses
- `infisical` — where a provider token should live
- `stack-maturity` — when AI is ahead of another part of the stack
