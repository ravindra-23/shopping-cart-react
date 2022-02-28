import React, { useContext } from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles'
import { Context } from '../../../Context/Context';


const CartItem = ({ item }) => {
  const classes = useStyles();
  const { increaseProductQty, decreaseProductQty, removeProduct } = useContext(Context)
  return (
    <Card className="cart-item">
      <CardMedia image={item.image} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h5">₹{Number(item.price).toLocaleString()}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => item.quantity > 1 ? decreaseProductQty(item.id) : removeProduct(item.id)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => increaseProductQty(item.id)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => removeProduct(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem