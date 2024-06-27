import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import CartDrawer from '@/components/CartDrawer';
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';
import ProductList from '@/components/ProductList';
import SearchBar from '@/components/SearchBar';
import { Box } from '@mui/material';

import ResponsiveFilterBar from '@/components/ResponsiveFilterBar';
import { useProducts } from '@/hooks/useProducts';
import { fetchProducts } from '@/services/getProducts';
import { Product } from '@/types/product';
import { applyFilters, extractCategories } from '@/utils/filterUtils';

const HomePage: React.FC = ({
  initialProducts,
  initialQuery,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialQuery ?? '');
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const {
    data: products = initialProducts,
    isLoading,
    error,
  } = useProducts(searchQuery) as {
    data: any[];
    isLoading: boolean;
    error: Error | null;
  };

  useEffect(() => {
    if (router.query.title) setSearchQuery(router.query.title);
  }, [router]);

  useEffect(() => {
    setCategories(extractCategories(products));
    setFilteredProducts(applyFilters(products, selectedCategories, sortOrder));
  }, [products, selectedCategories, sortOrder]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    router.push({ query: { title: query } });
    if (query === '') router.push('/');
  };

  const handleFilter = (selectedCategories: string[], sortOrder: string) => {
    setSelectedCategories(selectedCategories);
    setSortOrder(sortOrder);
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
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <ResponsiveFilterBar
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onFilter={handleFilter}
          />
          {isLoading && <LoadingComponent />}
          {error && <ErrorComponent message={error.message} />}
          {!isLoading && !error && <ProductList products={filteredProducts} />}
        </Box>

        <CartDrawer />
      </Box>
    </>
  );
};

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const searchQuery = (query.title as string) ?? '';
  let initialProducts: any[] = [];

  await fetchProducts(searchQuery)
    .then((data) => (initialProducts = data))
    .catch((error) => {
      throw error;
    });

  return { props: { initialProducts } };
}) satisfies GetServerSideProps<{ initialProducts: any[] }>;

export default HomePage;
