import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { Context } from '../../../Context/Context';

const Product = ({ product }) => {
  const classes = useStyles();
  const { addToCart } = useContext(Context);

  

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹{Number(product.price).toLocaleString()}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button variant='contained' color='primary' onClick={() => addToCart(product)}>Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default Product