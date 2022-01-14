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
import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
import {textAlign} from '@material-ui/system'

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

  return (
    <MuiThemeProvider theme={theme}>
      <Typography gutterBottom>
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
        >
          Add to Cart
        </Button>
      </Typography>
    </MuiThemeProvider>
  )
}

export default SingleProduct
