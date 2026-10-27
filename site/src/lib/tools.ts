import { MAIN_SITE } from "./brand";

/** A LinkedIn post or other outside piece. The title links to `href`. */
type OutsidePost = {
  kind: "post";
  source: string;
  href: string;
  title: string;
};

/** An article on stephansmith.me. The title links to the article. `site` links the site. */
type SiteArticle = {
  kind: "article";
  title: string;
  href: string;
  site: string;
};

export type Writing = OutsidePost | SiteArticle;

/**
 * One record, many skills. A skill lists ids in order, and every id shows.
 * An article uses `kind: "article"` so the page links the site and the article.
 */
const POSTS: Record<string, Writing> = {
  "infisical-swag": {
    kind: "post",
    source: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7519410670262460416/",
    title: "Damn, do I love swag.",
  },
  "infisical-playbook": {
    kind: "article",
    title: "Infisical",
    href: `${MAIN_SITE}/tools-i-use/entry/infisical/`,
    site: MAIN_SITE,
  },
  "sentry-playbook": {
    kind: "article",
    title: "Sentry",
    href: `${MAIN_SITE}/tools-i-use/entry/sentry/`,
    site: MAIN_SITE,
  },
  "sentry-wont-look": {
    kind: "post",
    source: "LinkedIn",
    href: "https://www.linkedin.com/pulse/tool-you-need-wont-look-stephan-smith-tevhc/",
    title: "The Tool You Need but Won’t Look For",
  },
  "friday-customs": {
    kind: "post",
    source: "LinkedIn",
    href: "https://www.linkedin.com/pulse/thank-you-us-customs-border-protection-stephan-smith-ielmc",
    title: "Thank you, US Customs & Border Protection!",
  },
  "friday-shared-secrets": {
    kind: "post",
    source: "LinkedIn",
    href: "https://www.linkedin.com/pulse/shared-secrets-stephan-smith-2ob7c",
    title: "Shared Secrets?",
  },
  "friday-secure-mcps": {
    kind: "post",
    source: "LinkedIn",
    href: "https://www.linkedin.com/pulse/how-do-i-secure-my-mcps-stephan-smith-8nbzc",
    title: "How do I secure my MCPs?",
  },
  "friday-one-mcp-prompt": {
    kind: "post",
    source: "LinkedIn",
    href: "https://www.linkedin.com/pulse/one-mcp-prompt-before-you-adopt-anything-new-stephan-smith-y3g0c",
    title: "One MCP prompt before you adopt anything new",
  },
};

export function writingsBy(ids: string[]): Writing[] {
  return ids.flatMap((id) => (POSTS[id] ? [POSTS[id]] : []));
}

/** Skill slug → Tools I Use entry. Only skills that have a published tool page. */
const TOOLS: Record<
  string,
  {
    entry: string;
    name: string;
    aka?: string;
    url?: string;
    readiness?: "ready" | "pending";
    stack: string;
    prompt: string;
    statement?: string;
    /** Shown kickoff. When set, this wins over the first eval prompt. */
    kickoff?: string;
    /** Ids in `POSTS`. */
    posts?: string[];
  }
> = {
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
    aka: "Infisical.com",
    url: "https://infisical.com",
    readiness: "ready",
    stack: "Where secrets live once they leave a .env file or a hosted builder.",
    prompt:
      "Review Infisical. If we are authenticated, report projects, environments, syncs, shared variables, and the deploy flags. Do not print values. Do not create a sync unless I ask.",
    statement:
      "When you're new to Infisical and you don't know what you're doing with it, this is the skill that is my front door. It's what I use to bridge the first gap. The Infisical-ator is its advanced older brother, but this is the entry. This is where I'm like, okay, I need to get this thing installed. I need to understand what my env files are. I basically need to get bootstrapped into Infisical.",
    posts: ["friday-customs", "friday-shared-secrets", "infisical-swag", "infisical-playbook"],
  },
  "infisical-lator": {
    entry: "infisical",
    name: "The Infisical-ator",
    aka: "Infisical.com",
    url: "https://infisical.com",
    readiness: "ready",
    stack: "Housekeeping for an Infisical account that already exists. Duplicates, shared variables, and rotation.",
    prompt:
      "Clean up this Infisical project. Name duplicate folders and a shared place for each. Do not print values. Do not push to Infisical.",
    kickoff: "Can you review and help me thin out and tune my Infisical variables.",
    statement:
      "This is my newest and favorite tool. I have found that, over time, my Infisical folders get crowded with duplicates. I'm not using variables properly, and instead of having to be anal retentive and constantly go back and clean things, this skill I developed in the last couple of weeks essentially goes and does the house cleaning behind me. I've been a fanboy of Infisical now for like three months, and this little tool is the one that makes it super easy for me to be super hygienic with my variable reuse and rotation.\n\nThis is an homage to Wallace and Gromit, the kings of productization.",
    posts: ["infisical-swag", "infisical-playbook"],
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
    readiness: "ready",
    stack: "Observability. Catch the errors, then know the running app is doing what you expected.",
    statement:
      "I'm a huge Sentry fanboy. I do not have any swag for them, so I would definitely welcome it. Sentry is my absolute go-to observability platform because it sets the framework for progressive-scale observability. It integrates so damn well with almost every MCP and agent I've worked with that this is what protects my behind, so that I don't get caught out by a bug that I didn't even know was happening.",
    prompt:
      "Review Sentry in this project. Stop at the first missing stage: error checking, logging, sourcemaps, milestones, dashboards. Do not install Sentry unless I ask.",
    posts: ["sentry-wont-look", "sentry-playbook"],
  },
  supabase: {
    entry: "supabase",
    name: "Supabase",
    stack: "The data layer: auth, functions, secrets, migrations, and sign-in providers.",
    prompt:
      "Review how this app uses Supabase. Report auth, functions, secrets, whether the schema is migrations or manual, and which providers are connected. Do not print secrets.",
  },
};

/** Infisical-ator shows as "Infisical-ator". Wallet-ator and Grommet-ator too. */
export function quoteAtor(name: string): string {
  return name.replace(/\b(?<!")([A-Za-z0-9]+-ator)\b(?!")/g, '"$1"');
}

export type SkillTool = {
  name: string;
  /** Product name when `name` is a nickname. */
  aka?: string;
  /** Product site. When set, the aka links here. */
  url?: string;
  /** Ready skills are high utility. Anything else is still on the workbench. */
  readiness: "ready" | "pending";
  href: string;
  logo: string;
  stack: string;
  prompt: string;
  /** Page sentence. When missing, the page uses `stack`. */
  statement?: string;
  /** Outside posts and site articles, in the order they should show. */
  posts: Writing[];
  /** Shown kickoff. When set, this wins over the first eval prompt. */
  kickoff?: string;
};

export function toolForSkill(slug: string): SkillTool | undefined {
  const tool = TOOLS[slug];
  if (!tool) return undefined;
  return {
    name: quoteAtor(tool.name),
    aka: tool.aka,
    url: tool.url,
    readiness: tool.readiness === "ready" ? "ready" : "pending",
    href: `${MAIN_SITE}/tools-i-use/entry/${tool.entry}/`,
    logo: `${MAIN_SITE}/images/playbook/${tool.entry}.png`,
    stack: tool.stack,
    prompt: tool.prompt,
    statement: tool.statement,
    kickoff: tool.kickoff,
    posts: (tool.posts ?? []).flatMap((id) => {
      const post = POSTS[id];
      return post ? [post] : [];
    }),
  };
}

/** One sentence for the skill page. Vendor cards use their statement, then their stack line. */
export function statementForSkill(slug: string): string | undefined {
  return TOOLS[slug]?.statement;
}

/** Vendor skills that have a Tools I Use logo, in catalog order. */
export function listSkillTools(): { slug: string; tool: SkillTool }[] {
  return Object.keys(TOOLS).flatMap((slug) => {
    const tool = toolForSkill(slug);
    return tool ? [{ slug, tool }] : [];
  });
}
