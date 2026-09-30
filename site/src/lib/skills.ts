import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Skill = {
  slug: string;
  name: string;
  description: string;
  version: string;
  stub: boolean;
  referenceCount: number;
  html: string;
};

const SKIP = new Set(["skill-template", "product-context", "implementation-review", "more-context", "report"]);

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
    const metadata = parsed.data.metadata as { version?: string } | undefined;
    const version = String(metadata?.version ?? "").trim();
    const name = String(parsed.data.name ?? slug);

    if (name !== slug) {
      throw new Error(`Skill name "${name}" does not match folder "${slug}".`);
    }

    const references = path.join(dir, "references");
    const referenceCount = fs.existsSync(references)
      ? fs.readdirSync(references).filter((file) => file.endsWith(".md")).length
      : 0;

    const body = parsed.content.replace(/^#\s+.+\n+/, "");

    return {
      slug,
      name,
      description,
      version,
      stub: /\bStub\b/.test(description),
      referenceCount,
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
