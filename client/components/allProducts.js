import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllProducts} from '../store/allProduct'
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@material-ui/core'
import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'

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

const AllProducts = () => {
  const classes = useStyles()

  let products = useSelector(state => state.products)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <h2 color="primary">Featured Experiences</h2>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justifyContent="center"
      >
        {products.map(product => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card className={classes.root}>
                <Link to={`/products/${product.id}`} key={product.id}>
                  <CardMedia
                    className={classes.media}
                    image={product.imageUrl}
                    title={product.productName}
                  />
                  <CardContent>
                    <div className={classes.cardContent}>
                      <Typography variant="h6" gutterBottom>
                        {product.productName}
                      </Typography>
                      <Typography gutterBottom className={classes.price}>
                        ${product.price}
                      </Typography>
                    </div>
                    <Typography variant="h6" gutterBottom color="secondary">
                      With {product.instructor}
                    </Typography>
                  </CardContent>
                </Link>
                <CardActions disableSpacing className={classes.CardActions}>
                  <IconButton variant="contained" color="primary" gutterBottom>
                    <img
                      src="https://media.istockphoto.com/vectors/red-heart-in-shopping-cart-vector-icon-vector-id920398794?k=20&m=920398794&s=170667a&w=0&h=e8F6W3Yjye5FCo_JUPblBgTyNqzcUqWpZiFn26i5aYw="
                      className="all-view-cart"
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </MuiThemeProvider>
  )
}

export default AllProducts
