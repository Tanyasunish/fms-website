import { createContext, useContext, useEffect, useMemo, useState, type FC, type ReactNode } from 'react';
import { DEFAULT_THEME_ID, THEMES, THEME_STORAGE_KEY, type ThemeId } from './Themes';

interface ThemeContextValue {
  themeId: ThemeId;
  setTheme: (id: ThemeId) => void;
  themes: typeof THEMES;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): ThemeId {
  if (typeof window === 'undefined') return DEFAULT_THEME_ID;

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && THEMES.some((theme) => theme.id === stored)) {
    return stored as ThemeId;
  }
  return DEFAULT_THEME_ID;
}

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<ThemeId>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeId);
    window.localStorage.setItem(THEME_STORAGE_KEY, themeId);
  }, [themeId]);

  const value = useMemo<ThemeContextValue>(() => ({ themeId, setTheme: setThemeId, themes: THEMES }), [themeId]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
