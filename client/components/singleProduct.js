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
import {fontSize} from '@material-ui/system'

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

const SingleProduct = () => {
  let product = useSelector(state => state.product)

  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(() => {
    dispatch(singleProduct(id))
  }, {})
  console.log(product)
  return (
    <MuiThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <div id={product.id}>
          <Typography sx={{fontSize: 14}} gutterBottom>
            <img src={product.imageUrl} className="single-view-image" />
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
          <Typography variant="h4" color="textPrimary">
            reviews
          </Typography>
        </div>
      </Box>
    </MuiThemeProvider>
    <div id={product.id}>
      <img src={product.imageUrl} />
      <h1>{product.productName}</h1>
      <h2>{product.instructor}</h2>
      <h3>{product.description}</h3>
      <div>reviews</div>
    </div>
  )
}

export default SingleProduct
