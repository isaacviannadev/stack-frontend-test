/**
 * Normalizes an array of image URLs by removing square brackets and double quotes.
 *
 * @param images - An array of image URLs.
 * @returns An array of normalized image URLs.
 */
export const normalizeImages = (images: string[] | string): string[] => {
  if (typeof images === 'string') {
    return [images.replace(/[[\]"]/g, '')];
  }
  return images.map((url) => url.replace(/[[\]"]/g, ''));
};
