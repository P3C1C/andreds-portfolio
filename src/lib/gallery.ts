import type { ImageMetadata } from 'astro';

export type GallerySize = 'full' | 'large' | 'small';

export interface GalleryEntry {
  src: ImageMetadata;
  alt: string;
  size: GallerySize | 'cover';
}

export function groupGallery<T extends { size: GallerySize }>(items: readonly T[]): T[][] {
  return items.reduce<T[][]>((rows, item) => {
    const last = rows.at(-1);
    const canPair =
      item.size !== 'full' && last?.length === 1 && last[0].size !== 'full';
    return canPair ? [...rows.slice(0, -1), [...last, item]] : [...rows, [item]];
  }, []);
}
