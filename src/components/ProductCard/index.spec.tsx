import React from 'react';
import '@testing-library/jest-dom';

import { useStore } from '@/store/cartStore';
import { formatPrice } from '@/utils/priceFormatter';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductCard } from './index';

jest.mock('@/store/cartStore');
jest.mock('@/utils/priceFormatter');

describe('ProductCard', () => {
  const mockAddToCart = jest.fn();

  const product = {
    id: 1,
    title: 'Product 1',
    price: 100,
    images: ['image1.jpg'],
  };

  beforeEach(() => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
    (formatPrice as jest.Mock).mockReturnValue('R$ 100,00');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render product details correctly', () => {
    render(<ProductCard {...product} />);

    expect(screen.getByAltText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
  });

  it.skip('should call addToCart with correct parameters when button is clicked', () => {
    render(<ProductCard {...product} />);

    const addButton = screen.getByText('Adicionar ao carrinho');

    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalled();
  });
});
