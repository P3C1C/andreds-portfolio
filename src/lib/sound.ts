export const MUTE_STORAGE_KEY = 'muted';

export function resolveMuted(stored: string | null | undefined): boolean {
  return stored === 'true';
}

export function serializeMuted(muted: boolean): string {
  return muted ? 'true' : 'false';
}
