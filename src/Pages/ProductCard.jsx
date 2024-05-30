import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid, Chip, makeStyles } from '@mui/material';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} component="img" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="h6" component="h3">
          ${product.price}
        </Typography>
        {product.tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </CardContent>
      <CardActions>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography>Quantity:</Typography>
          </Grid>
          <Grid item>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              style={{ width: '60px' }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;