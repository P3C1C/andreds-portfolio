import { describe, expect, it } from 'vitest';
import { resolveMuted, serializeMuted } from './sound';

describe('resolveMuted', () => {
  it('is muted only when the stored value is "true"', () => {
    expect(resolveMuted('true')).toBe(true);
    expect(resolveMuted('false')).toBe(false);
    expect(resolveMuted(null)).toBe(false);
    expect(resolveMuted('yes')).toBe(false);
  });
});

describe('serializeMuted', () => {
  it('round-trips through resolveMuted', () => {
    expect(resolveMuted(serializeMuted(true))).toBe(true);
    expect(resolveMuted(serializeMuted(false))).toBe(false);
  });
});
