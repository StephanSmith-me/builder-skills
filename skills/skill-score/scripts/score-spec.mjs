#!/usr/bin/env node
/**
 * Mechanical Agent Skills spec check. Quality checks stay in references/rubric.md.
 * Usage: node scripts/score-spec.mjs <skill-dir-or-parent>
 * JSON on stdout. Diagnostics on stderr. Exit 1 when any skill fails.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/score-spec.mjs <skill-dir-or-parent>");
  process.exit(2);
}

const root = path.resolve(target);
if (!existsSync(root)) {
  console.error(`Not found: ${root}`);
  process.exit(2);
}

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { error: "missing frontmatter" };
  const fields = {};
  let key = null;
  let mode = null;
  let buf = [];
  let nested = null;

  function flush() {
    if (!key) return;
    if (nested) fields[key] = nested;
    else if (mode === "fold") fields[key] = buf.join(" ").replace(/\s+/g, " ").trim();
    else if (mode === "literal") fields[key] = buf.join("\n").trim();
    key = null;
    mode = null;
    buf = [];
    nested = null;
  }

  for (const line of match[1].split(/\r?\n/)) {
    if (key && (mode === "fold" || mode === "literal") && /^\s+\S/.test(line)) {
      buf.push(line.trim());
      continue;
    }
    if (key && nested && /^\s+\S/.test(line)) {
      const nestedField = line.match(/^\s+([^:]+):\s*(.*)$/);
      if (nestedField) nested[nestedField[1].trim()] = unquote(nestedField[2]);
      continue;
    }
    flush();
    const field = line.match(/^([^:]+):\s*(.*)$/);
    if (!field || line.startsWith(" ") || line.startsWith("\t")) continue;
    key = field[1].trim();
    const value = field[2];
    if (value === ">" || value === ">-" || value === "|-" || value === "|") {
      mode = value.startsWith("|") ? "literal" : "fold";
    } else if (value === "") {
      nested = {};
    } else {
      fields[key] = unquote(value);
      key = null;
    }
  }
  flush();
  return { fields, body: raw.slice(match[0].length) };
}

function linkWarnings(body) {
  const warnings = [];
  const refs = body.match(/(?:\[[^\]]*\]\(|`)([^`)\s]+)(?:\)|`)/g) ?? [];
  for (const ref of refs) {
    const href = ref.replace(/^\[[^\]]*\]\(|^`|`$/g, "").replace(/\)$/, "");
    if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
      continue;
    }
    if (href.startsWith("/") || href.includes("..")) {
      warnings.push(`link leaves the skill directory: ${href}`);
      continue;
    }
    const parts = href.split("/").filter(Boolean);
    if (parts.length > 2) warnings.push(`reference is deeper than one level: ${href}`);
  }
  return warnings;
}

function scoreDir(dir) {
  const skillFile = path.join(dir, "SKILL.md");
  const directory = path.basename(dir);
  const result = {
    path: dir,
    directory,
    spec: "fail",
    issues: [],
    warnings: [],
    catalog_notes: [],
    name: "",
    description_chars: 0,
    lines: 0,
    has: {
      scripts: existsSync(path.join(dir, "scripts")),
      references: existsSync(path.join(dir, "references")),
      assets: existsSync(path.join(dir, "assets")),
      evals: existsSync(path.join(dir, "evals", "evals.json")),
    },
  };

  if (!existsSync(skillFile)) {
    result.issues.push("missing SKILL.md");
    return result;
  }

  const raw = readFileSync(skillFile, "utf8");
  const splitLines = raw.split(/\r?\n/);
  result.lines = raw.endsWith("\n") || raw.endsWith("\r\n") ? splitLines.length - 1 : splitLines.length;
  if (result.lines > 500) result.issues.push(`SKILL.md is ${result.lines} lines (max 500)`);

  const parsed = parseFrontmatter(raw);
  if (parsed.error) {
    result.issues.push(parsed.error);
    return result;
  }

  const name = typeof parsed.fields.name === "string" ? parsed.fields.name : "";
  const description = typeof parsed.fields.description === "string" ? parsed.fields.description.trim() : "";
  result.name = name;
  result.description_chars = [...description].length;

  if (!name) result.issues.push("missing name");
  else if (name !== directory) result.issues.push(`name '${name}' does not match directory '${directory}'`);
  else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) || name.length > 64) {
    result.issues.push("name must be lowercase, hyphenated, 1-64 chars, no leading, trailing, or doubled hyphen");
  }

  if (!description) result.issues.push("missing description");
  else if (result.description_chars > 1024) {
    result.issues.push(`description is ${result.description_chars} chars (max 1024)`);
  }

  const compatibility = parsed.fields.compatibility;
  if (typeof compatibility === "string") {
    const length = [...compatibility].length;
    if (length < 1 || length > 500) result.warnings.push(`compatibility is ${length} chars (1-500)`);
  } else if (compatibility && typeof compatibility === "object") {
    result.warnings.push("compatibility must be a string");
  }

  const metadata = parsed.fields.metadata;
  if (metadata && typeof metadata === "object") {
    for (const [key, value] of Object.entries(metadata)) {
      if (typeof value !== "string") result.warnings.push(`metadata.${key} is not a string`);
    }
    if (!metadata.version) result.catalog_notes.push("missing metadata.version");
  } else if (!metadata) {
    result.catalog_notes.push("missing metadata.version");
  }

  const allowed = parsed.fields["allowed-tools"];
  if (allowed && typeof allowed !== "string") result.warnings.push("allowed-tools must be a single space-separated string");

  result.warnings.push(...linkWarnings(parsed.body));
  result.spec = result.issues.length === 0 ? "pass" : "fail";
  return result;
}

function skillDirs(dir) {
  if (existsSync(path.join(dir, "SKILL.md"))) return [dir];
  return readdirSync(dir)
    .map((name) => path.join(dir, name))
    .filter((child) => {
      try {
        return statSync(child).isDirectory() && existsSync(path.join(child, "SKILL.md"));
      } catch {
        return false;
      }
    })
    .sort();
}

const dirs = skillDirs(root);
if (dirs.length === 0) {
  console.error(`No SKILL.md under ${root}`);
  process.exit(2);
}

const skills = dirs.map(scoreDir);
const failed = skills.filter((skill) => skill.spec === "fail").length;
console.log(JSON.stringify({ skills, failed, checked: skills.length }, null, 2));
process.exit(failed > 0 ? 1 : 0);
