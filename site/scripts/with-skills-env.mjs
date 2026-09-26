#!/usr/bin/env node
/**
 * Inject Infisical /content then /skills (prod) from the LCCTO project.
 * /skills wins on duplicate keys. /content supplies the public subscribe keys.
 * Auth: INFISICAL_TOKEN, then the machine identity in the workbench .env, then an
 * existing `infisical login` session. If the CLI is missing, pass through the
 * current environment (Cloudflare Pages / CI).
 */
import { spawn, spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectId = "d374eab2-d90c-4a3d-a53a-5f8ece62b9a3";
const args = process.argv.slice(2);
const workbenchEnv = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../.env");

function envFileValue(file, key) {
  if (!existsSync(file)) return "";
  const match = readFileSync(file, "utf8")
    .split("\n")
    .reverse()
    .find((line) => new RegExp(`^\\s*(export\\s+)?${key}=`).test(line));
  if (!match) return "";
  let value = match.slice(match.indexOf("=") + 1).trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }
  return value;
}

function machineToken() {
  if (process.env.INFISICAL_TOKEN) return process.env.INFISICAL_TOKEN;
  const clientId = process.env.INFISICAL_CLIENT_ID || envFileValue(workbenchEnv, "INFISICAL_CLIENT_ID");
  const clientSecret =
    process.env.INFISICAL_CLIENT_SECRET || envFileValue(workbenchEnv, "INFISICAL_CLIENT_SECRET");
  if (!clientId || !clientSecret) return "";
  const login = spawnSync(
    "infisical",
    [
      "login",
      "--method=universal-auth",
      `--client-id=${clientId}`,
      `--client-secret=${clientSecret}`,
      "--plain",
      "--silent",
    ],
    { encoding: "utf8" },
  );
  if (login.status !== 0) return "";
  return login.stdout.trim();
}

if (args.length === 0) {
  console.error("Usage: node scripts/with-skills-env.mjs <command> [args…]");
  process.exit(1);
}

function runTarget() {
  const child = spawn(args[0], args.slice(1), {
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  });
  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 1);
  });
}

if (process.env.LCCTO_SKILLS_ENV_LOADED) {
  runTarget();
} else {
  process.env.LCCTO_SKILLS_ENV_LOADED = "1";
  const token = machineToken();
  if (token) process.env.INFISICAL_TOKEN = token;
  const child = spawn(
    "infisical",
    [
      "run",
      "--env=prod",
      "--path=/content",
      "--path=/skills",
      `--projectId=${projectId}`,
      "--silent",
      "--",
      process.execPath,
      ...process.argv.slice(1),
    ],
    { stdio: "inherit", env: process.env },
  );
  child.on("error", () => runTarget());
  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 1);
  });
}
