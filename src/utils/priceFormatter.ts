/**
 * Formats a price value into a currency string.
 *
 * @param price - The price value to be formatted.
 * @returns The formatted price as a currency string.
 */
export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
