import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {singleProduct} from '../store/singleProduct'
import {me} from '../store/user'

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
  let currentUser = useSelector(state => state.user)

  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(singleProduct(id))
  }, [])

  useEffect(() => {
    dispatch(me())
  }, [])

  // const handleClick = (e) =>  {
  //   if
  // }

  return (
    <MuiThemeProvider theme={theme}>
      <Typography>
        <img
          src={product.imageUrl}
          className="single-view-image"
          align="left"
        />
      </Typography>
      <Typography variant="h1" component="div" color="primary">
        {product.productName}
      </Typography>
      <Typography sx={{mb: 1.5}} color="secondary">
        {product.insturctor}
      </Typography>

      <Typography variant="h3" color="secondary">
        {product.description}
      </Typography>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        gutterBottom
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
