import { describe, expect, it } from 'vitest';
import { groupGallery } from './gallery';

const item = (id: string, size: 'full' | 'large' | 'small') => ({ id, size });

describe('groupGallery', () => {
  it('pairs consecutive partial-width items and keeps full items alone', () => {
    const rows = groupGallery([
      item('a', 'large'),
      item('b', 'small'),
      item('c', 'full'),
      item('d', 'large'),
      item('e', 'small'),
    ]);
    expect(rows.map((row) => row.map((entry) => entry.id))).toEqual([['a', 'b'], ['c'], ['d', 'e']]);
  });

  it('starts a new row after two partial items', () => {
    const rows = groupGallery([item('a', 'small'), item('b', 'large'), item('c', 'small')]);
    expect(rows.map((row) => row.map((entry) => entry.id))).toEqual([['a', 'b'], ['c']]);
  });

  it('closes an open pair when a full item follows', () => {
    const rows = groupGallery([item('a', 'large'), item('b', 'full'), item('c', 'full')]);
    expect(rows.map((row) => row.map((entry) => entry.id))).toEqual([['a'], ['b'], ['c']]);
  });

  it('returns no rows for an empty gallery', () => {
    expect(groupGallery([])).toEqual([]);
  });
});
