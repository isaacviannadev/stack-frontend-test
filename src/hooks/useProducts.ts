import { UseQueryResult, useQuery } from 'react-query';

const fetchProducts = async (query: string) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/?title=${query}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useProducts = (query: string): UseQueryResult<any[], Error> => {
  return useQuery(['products', query], () => fetchProducts(query));
};
