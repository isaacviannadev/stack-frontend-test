import React from 'react';

import { useStore } from '@/store/cartStore';
import { formatPrice } from '@/utils/priceFormatter';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
}) => {
  const addToCart = useStore((state) => state.addToCart);

  const formattedPrice = formatPrice(price);

  return (
    <Card>
      <CardMedia
        component='img'
        sx={{
          height: 240,
          objectFit: 'cover',
        }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom>{title}</Typography>
        <Typography variant='body2' color='text.secondary'>
          {formattedPrice}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Button
          size='small'
          onClick={() => addToCart({ id, title, price, image })}
        >
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
