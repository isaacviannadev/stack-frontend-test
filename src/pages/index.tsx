import Head from 'next/head';
import React, { useState } from 'react';

import CartDrawer from '@/components/CartDrawer';
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';
import ProductList from '@/components/ProductList';
import SearchBar from '@/components/SearchBar';
import { Box } from '@mui/material';

import { useProducts } from '@/hooks/useProducts';
import { fetchProducts } from '@/services/getProducts';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const HomePage: React.FC = ({
  initialProducts,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data: products = initialProducts,
    isLoading,
    error,
  } = useProducts(searchQuery) as {
    data: any[];
    isLoading: boolean;
    error: Error | null;
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

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
        <SearchBar onSearch={handleSearch} />
        {isLoading && <LoadingComponent />}
        {error && <ErrorComponent message={error.message} />}
        {!isLoading && !error && <ProductList products={products} />}
        <CartDrawer />
      </Box>
    </>
  );
};

export const getServerSideProps = (async () => {
  let initialProducts: any[] = [];
  await fetchProducts('')
    .then((data) => (initialProducts = data))
    .catch((error) => {
      throw error;
    });

  return { props: { initialProducts } };
}) satisfies GetServerSideProps<{ initialProducts: any[] }>;

export default HomePage;
