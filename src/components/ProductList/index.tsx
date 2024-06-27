import React from 'react';

import { normalizeImages } from '@/utils/normalizeImages';
import { Grid } from '@mui/material';
import ErrorComponent from '../ErrorComponent';
import ProductCard from '../ProductCard';
import { ProductGrid } from './styled';

interface ProductListProps {
  products: any[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products.length) {
    return <ErrorComponent message='No products found' />;
  }

  return (
    <ProductGrid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={product.id}>
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
