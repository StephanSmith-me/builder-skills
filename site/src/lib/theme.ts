export const THEME_STORAGE_KEY = "lccto-color-scheme";

export type ColorScheme = "light" | "dark";

const LIGHT_SURFACE = "#ffffff";
const DARK_SURFACE = "#0a0a0a";
const REVEAL_MS = 560;

export function applyTheme(theme: ColorScheme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export function setTheme(theme: ColorScheme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* private mode / quota */
  }
  applyTheme(theme);
}

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function toggleTheme(): ColorScheme {
  const current: ColorScheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  const next: ColorScheme = current === "dark" ? "light" : "dark";

  if (prefersReducedMotion() || typeof document === "undefined") {
    setTheme(next);
    return next;
  }

  const overlay = document.createElement("div");
  overlay.setAttribute("aria-hidden", "true");
  overlay.className = "theme-reveal-overlay";
  overlay.style.backgroundColor = current === "dark" ? DARK_SURFACE : LIGHT_SURFACE;
  document.body.appendChild(overlay);
  overlay.getBoundingClientRect();

  setTheme(next);

  requestAnimationFrame(() => {
    overlay.classList.add("theme-reveal-overlay--hide");
  });

  const cleanup = () => overlay.remove();
  overlay.addEventListener("transitionend", cleanup, { once: true });
  window.setTimeout(cleanup, REVEAL_MS + 120);

  return next;
}

export function syncThemeToggleLabels(root: ParentNode = document): void {
  const dark = document.documentElement.classList.contains("dark");
  const label = dark ? "Switch to light mode" : "Switch to dark mode";
  root.querySelectorAll<HTMLElement>("[data-theme-toggle]").forEach((btn) => {
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  });
}
