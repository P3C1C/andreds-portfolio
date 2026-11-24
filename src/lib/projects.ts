export interface OrderedEntry {
  id: string;
  data: { order: number; featured?: boolean };
}

export function sortProjects<T extends OrderedEntry>(projects: readonly T[]): T[] {
  return [...projects].sort((a, b) => a.data.order - b.data.order);
}

export function getFeatured<T extends OrderedEntry>(projects: readonly T[]): T[] {
  return sortProjects(projects.filter((project) => project.data.featured));
}

export function getAdjacent<T extends OrderedEntry>(
  projects: readonly T[],
  id: string,
): { previous: T | undefined; next: T | undefined } {
  const sorted = sortProjects(projects);
  const index = sorted.findIndex((project) => project.id === id);
  if (index === -1 || sorted.length < 2) {
    return { previous: undefined, next: undefined };
  }
  return {
    previous: sorted[(index - 1 + sorted.length) % sorted.length],
    next: sorted[(index + 1) % sorted.length],
  };
}
