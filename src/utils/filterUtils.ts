import { Product } from '@/types/product';

export const extractCategories = (products: Product[]): string[] => {
  const allCategories = products.map((product) => product.category.name);
  const uniqueCategories = Array.from(new Set(allCategories));
  const sortedCategories = uniqueCategories.toSorted((a, b) =>
    a.localeCompare(b)
  );
  return sortedCategories;
};

export const applyFilters = (
  products: Product[],
  selectedCategories: string[],
  sortOrder: string
): Product[] => {
  let filtered = products;

  if (selectedCategories.length > 0 && !selectedCategories.includes('Todas')) {
    filtered = filtered.filter((product) =>
      selectedCategories.includes(product.category.name)
    );
  }

  if (sortOrder) {
    filtered = filtered.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  return filtered;
};
