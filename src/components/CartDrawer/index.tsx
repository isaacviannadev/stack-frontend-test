import React from 'react';

import { useStore } from '@/store/cartStore';
import { formatPrice } from '@/utils/priceFormatter';
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import { Minus, Plus, X } from 'lucide-react';

const CartDrawer: React.FC = () => {
  const { cart, incrementItem, decrementItem, isOpen, toggleDrawer } =
    useStore();

  return (
    <Drawer anchor='right' open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 350, p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h6'>Seu Carrinho</Typography>
          <IconButton color='primary' edge='end' onClick={toggleDrawer}>
            <X />
          </IconButton>
        </Box>

        <List dense>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar src={item.images[0]} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={`${formatPrice(item.price)} x ${item.quantity}`}
              />
              <ListItemSecondaryAction sx={{ display: 'flex', gap: '8px' }}>
                <IconButton
                  edge='end'
                  color='primary'
                  onClick={() => decrementItem(item.id)}
                >
                  <Minus size={14} />
                </IconButton>
                <IconButton
                  edge='end'
                  color='primary'
                  onClick={() => incrementItem(item.id)}
                >
                  <Plus size={14} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
