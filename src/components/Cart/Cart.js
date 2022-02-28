import React, { useContext } from 'react'
import CartItem from './CartItem/CartItem'
import { Context } from '../../Context/Context'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, totalPrice, emptyCart } = useContext(Context)
  const classes = useStyles()

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.map(item => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: ₹{totalPrice}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => emptyCart()}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.length ? renderEmptyCart() : renderCart() }
    </Container>
  )
}

export default Cart