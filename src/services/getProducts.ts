export const fetchProducts = async (query: string) => {
  const response = await fetch(
    // `https://api.escuelajs.co/api/v1/products/?title=${query}`
    `https://fakestoreapi.com/products/?title=${query}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
