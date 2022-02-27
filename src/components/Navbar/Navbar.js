import React, { useContext } from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography, InputBase } from '@material-ui/core'
import ShopIcon from '@material-ui/icons/Shop';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles'
import { Context } from '../../Context/Context';

const Navbar = () => {
  const classes = useStyles()
  const { cart } = useContext(Context)
  return (
    <>
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    className={classes.logo}
                >
                    <ShopIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    Shopcart
                </Typography>

                <div className={classes.grow}/>
                
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>


                <div className={classes.buttons}>
                    <IconButton aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={cart.length} color='secondary'>
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