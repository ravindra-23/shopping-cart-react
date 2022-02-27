import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import ShopIcon from '@material-ui/icons/Shop';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles'

const Navbar = () => {
  const classes = useStyles()
  return (
    <>
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <IconButton
                    size='large'
                    color='inherit'
                    className={classes.logo}
                >
                    <ShopIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    Shopcart
                </Typography>

                <div className={classes.grow}/>

                <div className={classes.buttons}>
                    <IconButton aria-label='show cart items' color='inherit' size='large'>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar