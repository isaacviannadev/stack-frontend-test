import React from 'react';
import '@testing-library/jest-dom';

import { Product } from '@/types/product';
import { render } from '@testing-library/react';
import { ProductList } from './index';

describe('ProductList', () => {
  it('renders error message when no products are provided', () => {
    const products: Product[] = [];
    const { getByText } = render(<ProductList products={products} />);
    const errorMessage = getByText('No products found');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders product cards when products are provided', () => {
    const products: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10.99,
        images: ['image1.jpg', 'image2.jpg'],
        category: {
          id: 1,
          name: 'Category 1',
          image: 'category1.jpg',
          creationAt: '2021-09-01T00:00:00Z',
          updatedAt: '2021-09-01T00:00:00Z',
        },
        creationAt: '2021-09-01T00:00:00Z',
        updatedAt: '2021-09-01T00:00:00Z',
        description: 'Description',
      },
      {
        id: 2,
        title: 'Product 2',
        price: 19.99,
        images: ['image3.jpg', 'image4.jpg'],
        category: {
          id: 2,
          name: 'Category 2',
          image: 'category2.jpg',
          creationAt: '2021-09-01T00:00:00Z',
          updatedAt: '2021-09-01T00:00:00Z',
        },
        creationAt: '2021-09-01T00:00:00Z',
        updatedAt: '2021-09-01T00:00:00Z',
        description: 'Description',
      },
    ];
    const { getAllByText } = render(<ProductList products={products} />);
    const productCards = getAllByText(/Product \d/i);
    expect(productCards.length).toBe(products.length);
  });
});
