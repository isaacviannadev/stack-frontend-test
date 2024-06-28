import { Product } from '@/types/product';

/**
 * Extracts unique categories from an array of products and returns them in sorted order.
 *
 * @param products - An array of products.
 * @returns An array of unique categories sorted in ascending order.
 */
export const extractCategories = (products: Product[]): string[] => {
  const allCategories = products.map((product) => product.category);
  const uniqueCategories = Array.from(new Set(allCategories));
  const sortedCategories = uniqueCategories.toSorted((a, b) =>
    a.localeCompare(b)
  );
  return sortedCategories;
};

/**
 * Applies filters to an array of products based on selected categories and sort order.
 * @param products - The array of products to filter.
 * @param selectedCategories - The selected categories to filter by.
 * @param sortOrder - The sort order ('asc' for ascending, 'desc' for descending).
 * @returns The filtered array of products.
 */
export const applyFilters = (
  products: Product[],
  selectedCategories: string[],
  sortOrder: string
): Product[] => {
  let filtered = products;

  if (selectedCategories.length > 0 && !selectedCategories.includes('Todas')) {
    filtered = filtered.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  if (sortOrder) {
    filtered = filtered.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  return filtered;
};
