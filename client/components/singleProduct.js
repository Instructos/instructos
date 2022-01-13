import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {singleProduct} from '../store/singleProduct'
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

  console.log(product)
  return (
    <MuiThemeProvider theme={theme}>
      <Typography gutterBottom>
        <img
          src={product.imageUrl}
          className="single-view-image"
          align="left"
        />
      </Typography>
      <Typography variant="h1" component="div" color="primary" gutterBottom>
        {product.productName}
      </Typography>
      <Typography sx={{mb: 1.5}} color="secondary" gutterBottom>
        {product.insturctor}
      </Typography>

      <Typography variant="h3" color="secondary" gutterBottom>
        {product.description}
      </Typography>
      <Button
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
