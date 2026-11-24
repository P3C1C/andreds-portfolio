import { describe, expect, it } from 'vitest';
import { fittedScaleX } from './fit-text';

describe('fittedScaleX', () => {
  it('condenses text that is wider than the screen', () => {
    expect(fittedScaleX(1600, 1280)).toBeCloseTo(0.8);
  });

  it('leaves text that already matches the screen unchanged', () => {
    expect(fittedScaleX(1280, 1280)).toBe(1);
  });

  it('keeps the natural size when a measurement is missing', () => {
    expect(fittedScaleX(0, 1280)).toBe(1);
    expect(fittedScaleX(1280, 0)).toBe(1);
  });
});
