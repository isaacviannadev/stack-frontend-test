/**
 * Normalizes an array of image URLs by removing square brackets and double quotes.
 *
 * @param images - An array of image URLs.
 * @returns An array of normalized image URLs.
 */
export const normalizeImages = (images: any[]): string[] => {
  return images.map((url) => url.replace(/[[\]"]/g, ''));
};
