import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {singleProduct} from '../store/singleProduct'
import {addOrder} from '../store/orders'
import {me} from '../store/user'

import {
  Box,
  Grid,
  Button,
  Popover,
  Typography,
  Container
} from '@material-ui/core'

import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans serif'].join(',')
  },
  palette: {
    text: {
      primary: '#fba63b',
      secondary: '#2eb3b4'
    }
  }
})

const useStyles = makeStyles({
  productName: {
    paddingTop: 25,
    whiteSpace: 'nowrap',
    fontSize: '2vw'
  },
  instructor: {
    textAlign: 'right',
    paddingRight: '10vw',
    paddingBottom: '50px'
  },
  description: {
    fontSize: '24px',
    paddingBottom: '75px'
  },
  price: {
    fontSize: '30px',
    textAlign: 'center',
    paddingRight: '10vw',
    justifyContent: 'space-between'
  },
  reviews: {
    bottom: 0,
    width: '100vw',
    height: '110px',
    textAlign: 'left'
  }
})

const SingleProduct = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  let product = useSelector(state => state.product)

  useEffect(() => {
    dispatch(singleProduct(id))
  }, [])

  let currentUser = useSelector(state => state.user)

  useEffect(() => {
    dispatch(me())
  }, [])

  const [quantity, setQuantity] = useState(1)

  const [cart, setCart] = useState([])
  let localCart = localStorage.getItem('cart')
  useEffect(() => {
    localCart = JSON.parse(localCart)
    if (localCart) setCart(localCart)
  }, [])

  function handleClick(event) {
    event.preventDefault()

    if (currentUser.id) {
      dispatch(
        addOrder({
          productId: product.id,
          userId: currentUser.id,
          quantity: quantity,
          price: product.price * 100
        })
      )
    } else {
      let cartCopy = [...cart]
      let productId = product.id
      let existingItem = cartCopy.find(item => item.productId === productId)

      if (existingItem) {
        if (existingItem.quantity < 5) {
          existingItem.quantity += 1
          existingItem.price = product.price * 100 * existingItem.quantity
        } else {
          alert('5 is the maximum!')
        }
      } else {
        cartCopy.push({
          productId: product.id,
          quantity: quantity,
          price: product.price * 100,
          imageUrl: product.imageUrl,
          productName: product.productName,
          unitPrice: product.price
        })
      }

      setCart(cartCopy)
      let stringCart = JSON.stringify(cartCopy)
      localStorage.setItem('cart', stringCart)
    }
  }

  let classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <Typography>
        <img
          src={product.imageUrl}
          className="single-view-image"
          align="left"
        />
      </Typography>
      <div>
        <Typography
          component="div"
          color="primary"
          gutter-bottom="true"
          className={classes.productName}
        >
          {product.productName}
        </Typography>
        <Typography
          variant="h4"
          color="secondary"
          gutter-bottom="true"
          className={classes.instructor}
        >
          <span className="single-view-span">with</span> {product.instructor}
        </Typography>
      </div>
      <Typography
        className={classes.description}
        color="secondary"
        gutter-bottom="true"
      >
        {product.description}
      </Typography>
      <Typography className={classes.price} color="secondary">
        ${product.price}{' '}
        <Button
          variant="contained"
          color="primary"
          gutter-bottom="true"
          className="single-view-button"
          style={{marginLeft: '30px'}}
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </Typography>
    </MuiThemeProvider>
  )
}

export default SingleProduct
