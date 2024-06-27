import { fetchProducts } from '@/services/getProducts';
import { useQuery } from 'react-query';

export const useProducts = (query: string) => {
  return useQuery(['products', query], () => fetchProducts(query));
};
