import { nextTheme, resolveTheme, THEME_STORAGE_KEY, type Theme } from '../lib/theme';
import { MUTE_STORAGE_KEY, resolveMuted, serializeMuted } from '../lib/sound';

const root = document.documentElement;

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the choice then lasts for the page only.
  }
}

function syncThemeControls(theme: Theme): void {
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((control) => {
    control.setAttribute('aria-pressed', String(theme === 'dark'));
    control.dataset.mode = theme;
  });
}

function syncMuteControls(muted: boolean): void {
  document.querySelectorAll<HTMLElement>('[data-mute-toggle]').forEach((control) => {
    control.setAttribute('aria-pressed', String(muted));
    control.dataset.mode = muted ? 'muted' : 'playing';
  });
}

function applyTheme(theme: Theme): void {
  root.dataset.theme = theme;
  syncThemeControls(theme);
}

function applyMuted(muted: boolean): void {
  if (muted) {
    root.dataset.muted = 'true';
  } else {
    delete root.dataset.muted;
  }
  syncMuteControls(muted);
  document.dispatchEvent(new CustomEvent('mutechange', { detail: { muted } }));
}

applyTheme(resolveTheme(readStorage(THEME_STORAGE_KEY)));
applyMuted(resolveMuted(readStorage(MUTE_STORAGE_KEY)));

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  if (target.closest('[data-theme-toggle]')) {
    const theme = nextTheme(resolveTheme(root.dataset.theme));
    applyTheme(theme);
    writeStorage(THEME_STORAGE_KEY, theme);
    return;
  }

  if (target.closest('[data-mute-toggle]')) {
    const muted = !resolveMuted(root.dataset.muted);
    applyMuted(muted);
    writeStorage(MUTE_STORAGE_KEY, serializeMuted(muted));
  }
});
