import React, { useState } from 'react';

import CartDrawer from '@/components/CartDrawer';
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';
import ProductList from '@/components/ProductList';
import SearchBar from '@/components/SearchBar';
import { useProducts } from '@/hooks/useProducts';
import { Box } from '@mui/material';
import Head from 'next/head';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: products = [], isLoading, error } = useProducts(searchQuery);

  return (
    <>
      <Head>
        <title>Isaac Vianna | Stack Frontend Test</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <Box sx={{ p: 2 }}>
        <SearchBar onSearch={setSearchQuery} />
        {isLoading && <LoadingComponent />}
        {error && <ErrorComponent message={error.message} />}
        {!isLoading && !error && <ProductList products={products} />}
        <CartDrawer />
      </Box>
    </>
  );
};

export default HomePage;
