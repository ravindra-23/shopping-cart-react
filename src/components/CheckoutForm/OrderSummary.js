import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { Context } from '../../Context/Context'

const useStyles = makeStyles((theme) => ({

    listItem: {
        padding: theme.spacing(1, 0),
    },

    total: {
        fontWeight: 700,
    },

    title: {
        marginTop: theme.spacing(2),
    },

}));

const OrderSummary = () => {
    const classes = useStyles();
    const { cart, address, payment, totalPrice } = useContext(Context)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">₹{product.price.toLocaleString()}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ₹{totalPrice.toLocaleString()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.firstName} {address.lastName}</Typography>
          <Typography gutterBottom>{address.address1} {address.address1}, {address.city}, {address.state}, {address.country}-{address.zip}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Name:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card: </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.cardNumber}</Typography>
                </Grid>
              </>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default OrderSummary