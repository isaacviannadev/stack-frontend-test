import React from 'react';

import { useStore } from '@/store/cartStore';

import { Box, Drawer, List } from '@mui/material';
import CartHeader from './CartHeader';
import CartItem from './CartItem';

export const CartDrawer: React.FC = () => {
  const { cart, isOpen, toggleDrawer } = useStore();

  return (
    <Drawer anchor='right' open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 350, p: 2 }}>
        <CartHeader onClose={toggleDrawer} />
        <List dense>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
