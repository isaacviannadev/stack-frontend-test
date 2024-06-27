import React from 'react';

import { Product } from '@/types/product';
import { normalizeImages } from '@/utils/normalizeImages';
import { Grid } from '@mui/material';
import ErrorComponent from '../ErrorComponent';
import ProductCard from '../ProductCard';
import { ProductGrid } from './styled';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products.length) {
    return <ErrorComponent message='No products found' />;
  }

  return (
    <ProductGrid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            images={normalizeImages(product.images)}
          />
        </Grid>
      ))}
    </ProductGrid>
  );
};

export default ProductList;
