export const normalizeImages = (images: any[]): string[] => {
  return images.map((url) => url.replace(/[[\]"]/g, ''));
};
