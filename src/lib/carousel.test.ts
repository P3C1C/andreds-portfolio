import { describe, expect, it } from 'vitest';
import { wrapIndex } from './carousel';

describe('wrapIndex', () => {
  it('keeps indexes inside the range', () => {
    expect(wrapIndex(0, 4)).toBe(0);
    expect(wrapIndex(3, 4)).toBe(3);
  });

  it('wraps past both ends', () => {
    expect(wrapIndex(4, 4)).toBe(0);
    expect(wrapIndex(-1, 4)).toBe(3);
    expect(wrapIndex(-5, 4)).toBe(3);
  });

  it('returns 0 for an empty list', () => {
    expect(wrapIndex(2, 0)).toBe(0);
  });
});
