import { describe, expect, it } from 'vitest';
import { DEFAULT_THEME, nextTheme, resolveTheme } from './theme';

describe('resolveTheme', () => {
  it('returns a stored valid theme', () => {
    expect(resolveTheme('light')).toBe('light');
    expect(resolveTheme('dark')).toBe('dark');
  });

  it('falls back to the default theme for missing or invalid values', () => {
    expect(DEFAULT_THEME).toBe('dark');
    expect(resolveTheme(null)).toBe('dark');
    expect(resolveTheme(undefined)).toBe('dark');
    expect(resolveTheme('')).toBe('dark');
    expect(resolveTheme('sepia')).toBe('dark');
  });
});

describe('nextTheme', () => {
  it('toggles between dark and light', () => {
    expect(nextTheme('dark')).toBe('light');
    expect(nextTheme('light')).toBe('dark');
  });
});
