import { describe, expect, it } from 'vitest';
import { loaderProgress, shouldShowLoader } from './loader';

describe('loaderProgress', () => {
  it('starts at 0 and ends at 100', () => {
    expect(loaderProgress(0, 1000)).toBe(0);
    expect(loaderProgress(1000, 1000)).toBe(100);
  });

  it('clamps values outside the timeline', () => {
    expect(loaderProgress(-50, 1000)).toBe(0);
    expect(loaderProgress(5000, 1000)).toBe(100);
  });

  it('eases out, so the first half covers most of the count', () => {
    const half = loaderProgress(500, 1000);
    expect(half).toBeGreaterThan(50);
    expect(half).toBeLessThan(100);
  });

  it('never decreases', () => {
    const values = [0, 100, 250, 400, 600, 800, 1000].map((ms) => loaderProgress(ms, 1000));
    expect(values).toEqual([...values].sort((a, b) => a - b));
  });

  it('completes immediately without a duration', () => {
    expect(loaderProgress(0, 0)).toBe(100);
  });
});

describe('shouldShowLoader', () => {
  it('plays the first time motion is allowed', () => {
    expect(shouldShowLoader(null, false)).toBe(true);
  });

  it('stays hidden once the session has seen it', () => {
    expect(shouldShowLoader('true', false)).toBe(false);
  });

  it('stays hidden when the visitor prefers reduced motion', () => {
    expect(shouldShowLoader(null, true)).toBe(false);
  });
});
