import React, { useContext } from 'react'
import { Typography, Grid, TextField, FormControlLabel, Checkbox } from '@material-ui/core'
import { Context } from '../../Context/Context'

const PaymentForm = () => {
  const { setPayment } = useContext(Context)
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cardName" 
            label="Name on card" 
            fullWidth 
            autoComplete="cc-name" 
            onChange={e => setPayment(prevInput => ({...prevInput, name: e.target.value}))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            onChange={e => setPayment(prevInput => ({...prevInput, cardNumber: e.target.value}))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="expDate" 
            label="Expiry date" 
            fullWidth 
            autoComplete="cc-exp" 
            onChange={e => setPayment(prevInput => ({...prevInput, expiry: e.target.value}))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange={e => setPayment(prevInput => ({...prevInput, cvv: e.target.value}))}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PaymentForm