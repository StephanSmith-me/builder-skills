import { MAIN_SITE } from "./brand";

/** Skill slug → Tools I Use entry. Only skills that have a published tool page. */
const TOOLS: Record<string, { entry: string; name: string; stack: string; prompt: string }> = {
  algolia: {
    entry: "algolia",
    name: "Algolia",
    stack: "High-end search. Supabase full text is the usual search. Algolia is the step when faceted search is what the customer uses.",
    prompt:
      "Review search in this app. Is it Supabase full text, or Algolia? If Algolia is here, name the admin key and the read token. Do not print the values. Do not add Algolia unless I ask.",
  },
  astro: {
    entry: "astro",
    name: "Astro",
    stack: "The content side of an Astro site. Pages come first, then front matter, then content types.",
    prompt:
      "Review this Astro site. Are we on pages, front matter, or content types? Stop at the first missing step. Do not add a content type unless I ask.",
  },
  cloudflare: {
    entry: "cloudflare",
    name: "Cloudflare",
    stack: "The edge of the stack: tunnels, Pages, and Workers, and how a preview branch and a deploy Action ship the app.",
    prompt:
      "Review Cloudflare in this repo. Report tunnels, Pages, and Workers. Then say whether preview is a staging branch or only the primary branch, and whether a GitHub Action deploys to Cloudflare. Do not deploy.",
  },
  "cursor-setup": {
    entry: "cursor",
    name: "Cursor",
    stack: "A vibe or code solution next to the repo. A Cursor or Claude folder, mcp.json, and whether the skills are theirs or imported.",
    prompt:
      "Review the Cursor or Claude setup in this repo. Is there a .cursor or .claude folder, is mcp.json connected, and are the skills ours or imported? Do not print tokens.",
  },
  fly: {
    entry: "fly",
    name: "Fly.io",
    stack: "The app host when you do not want AWS. The setup that matters lives in a Dockerfile and fly.toml in the repo.",
    prompt:
      "Review Fly in this repo. Is the setup in a Dockerfile and fly.toml, or only on the dashboard? Name deploy settings without printing values. Say if Postgres on Fly is in the files. Do not deploy.",
  },
  github: {
    entry: "github",
    name: "GitHub",
    stack: "The repo's Actions. They are signals for observability and scalability. A workflow that names main is not a maturity mark.",
    prompt:
      "Read the GitHub setup. Name a sourcemap step, a scheduled workflow, and which branches run. Do not call the setup mature because a workflow names main.",
  },
  improvmx: {
    entry: "improvmx",
    name: "ImprovMX",
    stack: "Off-brand domain mail. Aliases forward into the Gmail you already use.",
    prompt:
      "Review ImprovMX for this domain. Are we forwarding aliases into the Gmail we already use? Do not buy another mailbox, and do not change DNS unless I ask.",
  },
  infisical: {
    entry: "infisical",
    name: "Infisical",
    stack: "Where secrets live once they leave a .env file or a hosted builder.",
    prompt:
      "Review Infisical. If we are authenticated, report projects, environments, syncs, shared variables, and the deploy flags. Do not print values. Do not create a sync unless I ask.",
  },
  inngest: {
    entry: "inngest",
    name: "Inngest",
    stack: "Background jobs, once an API and a cron are not enough for signup.",
    prompt:
      "Review jobs in this app. Is there an API and a local cron? If Inngest or Trigger.dev is here, say whether jobs have a timeout, dedup, an id, and a Sentry event. Do not add Inngest unless I ask.",
  },
  posthog: {
    entry: "posthog",
    name: "PostHog",
    stack: "Product analytics, from a public session through to a known user.",
    prompt:
      "Review PostHog in this project. How far does tracking go, from a public session to a known user? Match the next step to the business. Do not print env values.",
  },
  postmark: {
    entry: "postmark",
    name: "Postmark",
    stack: "Product email. The send path, the template, and where the send key lives.",
    prompt:
      "Review Postmark in this app. Is the template hardcoded, is Supabase also sending, and where does the send key live? Do not print the key. Do not send mail.",
  },
  resend: {
    entry: "resend",
    name: "Resend",
    stack: "Product email in the same job as Postmark. Common when an app was vibe-coded.",
    prompt:
      "Review Resend in this app. Where is the API key, and is the template in the code or in env? Do not print the key. Treat a vibe-coder reading as a signal, not a fact.",
  },
  sentry: {
    entry: "sentry",
    name: "Sentry",
    stack: "Observability. Catch the errors, then know the running app is doing what you expected.",
    prompt:
      "Review Sentry in this project. Stop at the first missing stage: error checking, logging, sourcemaps, milestones, dashboards. Do not install Sentry unless I ask.",
  },
  supabase: {
    entry: "supabase",
    name: "Supabase",
    stack: "The data layer: auth, functions, secrets, migrations, and sign-in providers.",
    prompt:
      "Review how this app uses Supabase. Report auth, functions, secrets, whether the schema is migrations or manual, and which providers are connected. Do not print secrets.",
  },
};

export type SkillTool = {
  name: string;
  href: string;
  logo: string;
  stack: string;
  prompt: string;
};

export function toolForSkill(slug: string): SkillTool | undefined {
  const tool = TOOLS[slug];
  if (!tool) return undefined;
  return {
    name: tool.name,
    href: `${MAIN_SITE}/tools-i-use/entry/${tool.entry}/`,
    logo: `${MAIN_SITE}/images/playbook/${tool.entry}.png`,
    stack: tool.stack,
    prompt: tool.prompt,
  };
}

/** Vendor skills that have a Tools I Use logo, in catalog order. */
export function listSkillTools(): { slug: string; tool: SkillTool }[] {
  return Object.keys(TOOLS).flatMap((slug) => {
    const tool = toolForSkill(slug);
    return tool ? [{ slug, tool }] : [];
  });
}
