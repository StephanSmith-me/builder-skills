import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Skill = {
  slug: string;
  name: string;
  description: string;
  version: string;
  /** First heading, used when a subskill has no vendor card. */
  title: string;
  /** Parent slugs from `metadata.tags`. `infisical` shows the skill on `/skills/infisical`. */
  tags: string[];
  /** `active` or `inactive`. Missing means active. */
  status: string;
  /** `new`, `tested`, `ready`, or `production-ready`. */
  maturity: string;
  stub: boolean;
  referenceCount: number;
  evalCount: number;
  assetCount: number;
  html: string;
};

const SKIP = new Set(["skill-template", "product-context", "implementation-review", "more-context", "report"]);
const MATURITIES = new Set(["new", "tested", "ready", "production-ready"]);

function skillsRoot(): string {
  return path.resolve(process.cwd(), "..", "skills");
}

export function loadSkills(): Skill[] {
  const root = skillsRoot();
  if (!fs.existsSync(root)) {
    throw new Error(`Skills directory not found at ${root}. Run this build from site/.`);
  }

  const slugs = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !SKIP.has(entry.name))
    .map((entry) => entry.name);

  const skills = slugs.map((slug) => {
    const dir = path.join(root, slug);
    const raw = fs.readFileSync(path.join(dir, "SKILL.md"), "utf8");
    const parsed = matter(raw);
    const description = String(parsed.data.description ?? "").trim();
    const metadata = parsed.data.metadata as {
      version?: string;
      tags?: string;
      status?: string;
      maturity?: string;
    } | undefined;
    const version = String(metadata?.version ?? "").trim();
    const tags =
      typeof metadata?.tags === "string"
        ? metadata.tags.split(/\s+/).map((tag) => tag.trim()).filter(Boolean)
        : [];
    const status = metadata?.status === "inactive" ? "inactive" : "active";
    const maturity = typeof metadata?.maturity === "string" && MATURITIES.has(metadata.maturity) ? metadata.maturity : "";
    const name = String(parsed.data.name ?? slug);
    const heading = parsed.content.match(/^#\s+(.+)\s*$/m);
    const title = heading?.[1]?.trim() || name;

    if (name !== slug) {
      throw new Error(`Skill name "${name}" does not match folder "${slug}".`);
    }

    const references = path.join(dir, "references");
    const referenceCount = fs.existsSync(references)
      ? fs.readdirSync(references).filter((file) => file.endsWith(".md")).length
      : 0;
    const assets = path.join(dir, "assets");
    const assetCount = fs.existsSync(assets)
      ? fs.readdirSync(assets).filter((file) => fs.statSync(path.join(assets, file)).isFile()).length
      : 0;
    const evalFile = path.join(dir, "evals", "evals.json");
    let evalCount = 0;
    if (fs.existsSync(evalFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(evalFile, "utf8")) as { evals?: unknown[] };
        evalCount = Array.isArray(data.evals) ? data.evals.length : 0;
      } catch {
        evalCount = 0;
      }
    }

    const body = parsed.content.replace(/^#\s+.+\n+/, "");

    return {
      slug,
      name,
      description,
      version,
      title,
      tags,
      status,
      maturity,
      stub: /\bStub\b/.test(description),
      referenceCount,
      evalCount,
      assetCount,
      html: marked.parse(body, { async: false }) as string,
    };
  });

  skills.sort((a, b) => {
    if (a.slug === "product-context") return -1;
    if (b.slug === "product-context") return 1;
    return a.slug.localeCompare(b.slug);
  });

  return skills;
}

export function loadSkill(slug: string): Skill | undefined {
  return loadSkills().find((skill) => skill.slug === slug);
}

/** First prompt in `evals/evals.json`. Missing or empty evals return nothing. */
export function loadEvalPrompt(slug: string): string | undefined {
  const file = path.join(skillsRoot(), slug, "evals", "evals.json");
  if (!fs.existsSync(file)) return undefined;
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8")) as { evals?: { prompt?: string }[] };
    const prompt = data.evals?.find((item) => typeof item.prompt === "string" && item.prompt.trim())?.prompt?.trim();
    return prompt || undefined;
  } catch {
    return undefined;
  }
}

/** Active skills tagged with this parent. The parent does not list itself. */
export function subskillsFor(parent: string): Skill[] {
  return loadSkills().filter(
    (skill) => skill.slug !== parent && skill.status === "active" && skill.tags.includes(parent),
  );
}
