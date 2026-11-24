export function fittedScaleX(textWidth: number, availableWidth: number): number {
  if (textWidth <= 0 || availableWidth <= 0) return 1;
  return availableWidth / textWidth;
}
