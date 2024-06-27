import { useStore } from '@/store/cartStore';
import { formatPrice } from '@/utils/priceFormatter';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Minus, Plus } from 'lucide-react';
import React from 'react';

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    images: string[];
    quantity: number;
  };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { incrementItem, decrementItem } = useStore();

  return (
    <ListItem>
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
  );
};

export default CartItem;
