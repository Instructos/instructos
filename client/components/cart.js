import React, {useState, useEffect, Link} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllProducts} from '../store/allProduct'
import {
  Avatar,
  Box,
  Button,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  IconButton
} from '@material-ui/core'
import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
//shooimport {AddShoppingCart} from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    align: 'right'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cartContainer: {
    justifyContent: 'center'
  }
})

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans serif'].join(',')
  },
  palette: {
    text: {
      primary: {
        main: '#2eb3b4'
      },
      secondary: {
        main: '#fba63b'
      }
    },
    primary: {
      main: '#2eb3b4'
    },
    secondary: {
      main: '#fba63b'
    }
  }
})

//Maybe code
// const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(fetchAllProducts())
//   }, [])

//   const handleClick = (e) =>  {
//     setCart([...cart, e])
//   }

// const removeFromCart = (el) => {
//   let cartCopy = [...cart]
//   cartCopy = cartCopy.filter(cartItem => cartItem.id !== el.id)
//   setCart(cartCopy)
// }

//Cart display
const Cart = () => {
  const classes = useStyles()

  return (
    <div>
      <div>My Cart</div>
      {cart.map(item => {
        return (
          <Box key={item.id} className={classes.cartContainer}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={item.imageUrl} />
              </ListItemAvatar>
              <div>
                <ListItemText
                  primary={item.productName}
                  secondary={`Quantity: ${item.quantity}`}
                />
                <ListItemText secondary={`$${item.price / 100}.00`} />
                <Box sx={{'& > :not(style)': {m: 1}}}>
                  <Fab size="small" color="primary" aria-label="add">
                    +
                  </Fab>
                  <Fab size="small" aria-label="add">
                    -
                  </Fab>
                </Box>
              </div>
              <Divider variant="inset" />
            </ListItem>
            <Button onClick={() => removeFromCart(el)}>Remove from cart</Button>
          </Box>
        )
      })}
    </div>
  )
}

export default Cart
