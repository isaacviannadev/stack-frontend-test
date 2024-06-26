import React from 'react';

import { useStore } from '@/store/cartStore';
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

const CartDrawer: React.FC = () => {
  const {
    cart,
    incrementItem,
    decrementItem,
    removeItem,
    isOpen,
    toggleDrawer,
  } = useStore();

  return (
    <Drawer anchor='right' open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 350, p: 2 }}>
        <Typography variant='h6'>Cart</Typography>
        <List>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar src={item.images[0]} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={`$${item.price} x ${item.quantity}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' onClick={() => decrementItem(item.id)}>
                  -
                </IconButton>
                <IconButton edge='end' onClick={() => incrementItem(item.id)}>
                  +
                </IconButton>
                <IconButton edge='end' onClick={() => removeItem(item.id)}>
                  x
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
