import React from 'react';

import { useStore } from '@/store/cartStore';
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

  return (
    <Card>
      <CardMedia component='img' height='140' image={images[0]} alt={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
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
