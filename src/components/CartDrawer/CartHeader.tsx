import { Box, IconButton, Typography } from '@mui/material';
import { X } from 'lucide-react';
import React from 'react';

interface CartHeaderProps {
  onClose: () => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant='h6'>Seu Carrinho</Typography>
      <IconButton color='primary' edge='end' onClick={onClose}>
        <X />
      </IconButton>
    </Box>
  );
};

export default CartHeader;
