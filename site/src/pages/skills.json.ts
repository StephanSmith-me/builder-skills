import type { APIRoute } from "astro";
import { loadSkills } from "../lib/skills";

/** Public index for the Rules app. The skill files stay in this repo. */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? "https://skills.stephansmith.me";
  const skills = loadSkills().map((skill) => ({
    name: skill.slug,
    description: skill.description,
    version: skill.version,
    url: new URL(`/skills/${skill.slug}`, origin).href,
  }));

  return new Response(`${JSON.stringify({ skills }, null, 2)}\n`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
