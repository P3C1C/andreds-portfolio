/**
 * Prefix a root-relative path with the configured `base`
 * (e.g. `/andreds-portfolio` on GitHub Pages).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
