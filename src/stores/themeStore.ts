import { create } from "zustand";

export type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  initializeTheme: (theme: Theme) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const applyTheme = (theme: Theme) => {
  if (typeof document === "undefined") return;

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
};

const saveThemeCookie = (theme: Theme) => {
  if (typeof document === "undefined") return;

  document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
};

export const useThemeStore = create<ThemeStore>()((set, get) => ({
  theme: "light",
  initializeTheme: (theme) => {
    applyTheme(theme);
    set({ theme });
  },
  setTheme: (theme) => {
    applyTheme(theme);
    saveThemeCookie(theme);
    set({ theme });
  },
  toggleTheme: () => {
    const nextTheme = get().theme === "dark" ? "light" : "dark";
    get().setTheme(nextTheme);
  },
}));
