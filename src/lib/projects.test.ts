import { describe, expect, it } from 'vitest';
import { getAdjacent, getFeatured, sortProjects } from './projects';

const entry = (id: string, order: number, featured = false) => ({ id, data: { order, featured } });

const projects = [entry('c', 3, true), entry('a', 1), entry('b', 2, true)];

describe('sortProjects', () => {
  it('sorts by order without mutating the input', () => {
    const sorted = sortProjects(projects);
    expect(sorted.map((p) => p.id)).toEqual(['a', 'b', 'c']);
    expect(projects.map((p) => p.id)).toEqual(['c', 'a', 'b']);
  });
});

describe('getFeatured', () => {
  it('returns only featured projects in order', () => {
    expect(getFeatured(projects).map((p) => p.id)).toEqual(['b', 'c']);
  });

  it('returns an empty list when nothing is featured', () => {
    expect(getFeatured([entry('a', 1)])).toEqual([]);
  });
});

describe('getAdjacent', () => {
  it('returns the neighbours of a project in the middle', () => {
    const { previous, next } = getAdjacent(projects, 'b');
    expect(previous?.id).toBe('a');
    expect(next?.id).toBe('c');
  });

  it('wraps around at both ends', () => {
    expect(getAdjacent(projects, 'c').next?.id).toBe('a');
    expect(getAdjacent(projects, 'a').previous?.id).toBe('c');
  });

  it('returns nothing for an unknown id or a single project', () => {
    expect(getAdjacent(projects, 'z')).toEqual({ previous: undefined, next: undefined });
    expect(getAdjacent([entry('a', 1)], 'a')).toEqual({ previous: undefined, next: undefined });
  });
});
