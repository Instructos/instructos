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
import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
// import {textAlign} from '@material-ui/system'

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
  let product = useSelector(state => state.product)
  let classes = useStyles()
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(singleProduct(id))
  }, [])

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
        <Typography
          component="div"
          color="primary"
          gutterBottom
          className={classes.productName}
        >
          {product.productName}
        </Typography>
        <Typography
          variant="h4"
          color="secondary"
          gutterBottom
          className={classes.instructor}
        >
          <span className="single-view-span">with</span> {product.instructor}
        </Typography>
      </div>
      <Typography
        className={classes.description}
        color="secondary"
        gutterBottom
      >
        {product.description}
      </Typography>
      <Typography className={classes.price} color="secondary">
        ${product.price}{' '}
        <Button
          variant="contained"
          color="primary"
          gutterBottom
          className="single-view-button"
          style={{marginLeft: '30px'}}
        >
          Add to Cart
        </Button>
      </Typography>
    </MuiThemeProvider>
  )
}

export default SingleProduct
