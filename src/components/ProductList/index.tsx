import React from 'react';

import { Grid } from '@mui/material';
import ProductCard from '../ProductCard';
import { ProductGrid } from './styled';

interface ProductListProps {
  products: any[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ProductGrid container spacing={2}>
    {products.map((product) => (
      <Grid item xs={12} sm={6} md={4} key={product.id}>
        <ProductCard
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
        />
      </Grid>
    ))}
  </ProductGrid>
);

export default ProductList;
