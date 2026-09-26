export const publicRules: Record<string, { version: string; updated: string }> = {
  observability: { version: "0.4", updated: "2026-09-19" },
  security: { version: "0.2", updated: "2026-09-22" },
  scalability: { version: "0.3", updated: "2026-09-17" },
  "day-to-day": { version: "0.5", updated: "2026-09-24" },
  blindspots: { version: "0.2", updated: "2026-09-15" },
};

export function publicRule(slug: string) {
  return publicRules[slug] ?? { version: "0.1", updated: "2026-09-26" };
}

export function formatRuleUpdated(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDaysAgo(iso: string, now = new Date()): string {
  const then = new Date(`${iso}T12:00:00Z`);
  const startThen = Date.UTC(then.getUTCFullYear(), then.getUTCMonth(), then.getUTCDate());
  const startNow = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const days = Math.round((startNow - startThen) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}
