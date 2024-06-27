import '@testing-library/jest-dom';
import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { useStore } from '@/store/cartStore';
import { CartDrawer } from './index';

jest.mock('@/store/cartStore', () => ({
  useStore: jest.fn(),
}));

const mockCart = [
  {
    id: 1,
    title: 'Product 1',
    price: 100,
    images: ['image1.jpg'],
    quantity: 2,
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
    images: ['image2.jpg'],
    quantity: 1,
  },
];

describe('CartDrawer', () => {
  const mockToggleDrawer = jest.fn();
  const mockIncrementItem = jest.fn();
  const mockDecrementItem = jest.fn();

  beforeEach(() => {
    (useStore as unknown as jest.Mock).mockImplementation(() => ({
      cart: mockCart,
      isOpen: true,
      toggleDrawer: mockToggleDrawer,
      incrementItem: mockIncrementItem,
      decrementItem: mockDecrementItem,
    }));
  });

  it('should render the cart items', () => {
    render(<CartDrawer />);

    mockCart.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(
        screen.getByText(`R$ ${item.price},00 x ${item.quantity}`)
      ).toBeInTheDocument();
    });
  });

  it('should call toggleDrawer when close button is clicked', () => {
    const { toggleDrawer } = useStore();
    render(<CartDrawer />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(toggleDrawer).toHaveBeenCalled();
  });

  it('should call incrementItem and decrementItem when respective buttons are clicked', () => {
    const { incrementItem, decrementItem } = useStore();
    render(<CartDrawer />);

    const incrementButtons = screen.getAllByRole('button', { name: /plus/i });
    const decrementButtons = screen.getAllByRole('button', { name: /minus/i });

    fireEvent.click(incrementButtons[0]);
    fireEvent.click(decrementButtons[0]);

    expect(incrementItem).toHaveBeenCalledWith(mockCart[0].id);
    expect(decrementItem).toHaveBeenCalledWith(mockCart[0].id);
  });
});
