/**
 * EduCode Portfolio - Theme Controller Module
 * Handles Light/Dark mode toggling, OS preference synchronization,
 * and state persistence via localStorage.
 */

const THEME_STORAGE_KEY = "educode_portfolio_theme";

/**
 * Returns the OS system color-scheme preference ('light' | 'dark')
 */
export function getSystemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

/**
 * Returns the currently active theme ('light' | 'dark')
 */
export function getCurrentTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  return getSystemTheme();
}

/**
 * Applies the specified theme to <html> and synchronizes toggle buttons
 * @param {'light' | 'dark'} theme
 * @param {boolean} persist - whether to save to localStorage
 */
export function applyTheme(theme, persist = false) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);

  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (err) {
      console.warn("Unable to persist theme to localStorage:", err);
    }
  }

  // Update button accessible attributes
  const nextLabel = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
  const buttons = document.querySelectorAll("#themeToggleSidebar, #themeToggleMobile");

  buttons.forEach((btn) => {
    btn.setAttribute("aria-label", nextLabel);
    btn.setAttribute("title", nextLabel);
    btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  });
}

/**
 * Toggles between light and dark themes
 */
export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || getCurrentTheme();
  const nextTheme = current === "light" ? "dark" : "light";
  applyTheme(nextTheme, true);
}

/**
 * Initializes theme controller and binds toggle buttons
 */
export function initTheme() {
  // 1. Initial application (sync DOM state)
  const initialTheme = getCurrentTheme();
  applyTheme(initialTheme, false);

  // 2. Bind desktop sidebar toggle button
  const sidebarBtn = document.getElementById("themeToggleSidebar");
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", () => toggleTheme());
  }

  // 3. Bind mobile floating toggle button
  const mobileBtn = document.getElementById("themeToggleMobile");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", () => toggleTheme());
  }

  // 4. Listen to system preference changes if user hasn't set a manual override
  if (window.matchMedia) {
    const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: light)");
    colorSchemeMedia.addEventListener("change", (e) => {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (!saved) {
        applyTheme(e.matches ? "light" : "dark", false);
      }
    });
  }
}
