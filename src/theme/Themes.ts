export const THEME_TOGGLE_ENABLED = true;

export interface ThemeOption {
  id: string;
  label: string;
}

export const THEMES: ThemeOption[] = [
  { id: 'fms', label: 'FMS Classic' },
  { id: 'vatican', label: 'Vatican' },
  { id: 'dark', label: 'Dark' },
];

export const DEFAULT_THEME_ID = 'fms';
export const THEME_STORAGE_KEY = 'fms-theme';

export type ThemeId = (typeof THEMES)[number]['id'];
