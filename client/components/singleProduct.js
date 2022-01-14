import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {singleProduct} from '../store/singleProduct'
import {addOrderItem} from '../store/orderItems'
import {addOrder} from '../store/orders'
import user, {me} from '../store/user'

import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container
} from '@material-ui/core'
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles'

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

const SingleProduct = () => {
  let product = useSelector(state => state.product)

  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(singleProduct(id))
  }, [])

  //NEW CODE
  //have access to currentUser, product, and quantity
  let currentUser = useSelector(state => state.user)

  //can replace lifecycle
  useEffect(() => {
    dispatch(me())
  }, [])

  //set quantity in local state
  const [quantity, setQuantity] = useState(1)

  function handleClick(event) {
    event.preventDefault()
    console.log('Clicked!')
    //setQuantity(quantity+1)

    //add the order
    //NOTE SEED DATA IS NOT INTEGER TYPE
    dispatch(addOrder({userId: currentUser.id}))
    dispatch(
      addOrderItem({
        productId: product.id,
        userId: currentUser.id,
        quantity: quantity,
        price: 50000
      })
    )
  }

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
        <Typography variant="h5" component="div" color="primary">
          {product.productName}
        </Typography>
        <Typography sx={{mb: 1.5}} color="secondary">
          {product.insturctor}
        </Typography>

        <Typography variant="h6" color="secondary">
          {product.description}
        </Typography>
      </div>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        className="single-view-button"
      >
        Add to Cart
      </Button>
      <Typography variant="h4" color="textPrimary">
        reviews
      </Typography>
    </MuiThemeProvider>
  )
}

export default SingleProduct
