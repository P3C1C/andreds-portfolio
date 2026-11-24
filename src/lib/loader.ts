export const LOADER_STORAGE_KEY = 'loader-seen';
export const LOADER_DURATION_MS = 1600;
export const LOADER_FALLBACK_MS = LOADER_DURATION_MS + 800;

export function shouldShowLoader(seen: string | null, reducedMotion: boolean): boolean {
  return seen !== 'true' && !reducedMotion;
}

export function loaderProgress(elapsedMs: number, durationMs: number): number {
  if (durationMs <= 0) return 100;
  const t = Math.min(Math.max(elapsedMs / durationMs, 0), 1);
  return Math.round(100 * (1 - (1 - t) ** 3));
}
