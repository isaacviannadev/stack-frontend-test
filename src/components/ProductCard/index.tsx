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
  images: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  images,
}) => {
  const addToCart = useStore((state) => state.addToCart);

  const formattedPrice = formatPrice(price);

  return (
    <Card
      sx={{
        maxWidth: 300,
      }}
    >
      <CardMedia
        component='img'
        sx={{
          height: 240,
          objectFit: 'cover',
        }}
        image={images[0]}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h5'>
          {title}
        </Typography>
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
          onClick={() => addToCart({ id, title, price, images })}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
