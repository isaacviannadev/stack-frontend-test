import React, { useState } from 'react';

import CartDrawer from '@/components/CartDrawer';
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';
import ProductList from '@/components/ProductList';
import SearchBar from '@/components/SearchBar';
import { useProducts } from '@/hooks/useProducts';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: products = [], isLoading, error } = useProducts(searchQuery);

  return (
    <Box sx={{ p: 2 }}>
      <SearchBar onSearch={setSearchQuery} />
      {isLoading && <LoadingComponent />}
      {error && <ErrorComponent message={error.message} />}
      {!isLoading && !error && <ProductList products={products} />}
      <CartDrawer />
    </Box>
  );
};

export default HomePage;
