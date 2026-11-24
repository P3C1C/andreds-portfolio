export type Theme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME: Theme = 'dark';

export function resolveTheme(stored: string | null | undefined): Theme {
  return stored === 'light' || stored === 'dark' ? stored : DEFAULT_THEME;
}

export function nextTheme(theme: Theme): Theme {
  return theme === 'dark' ? 'light' : 'dark';
}
