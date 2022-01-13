import React, {useEffect, Link} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllProducts} from '../store/allProduct'
import {
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
                    <Typography gutterBottom>$ {product.price}</Typography>
                  </div>
                  <Typography variant="h6" gutterBottom color="secondary">
                    {' '}
                    with {product.instructor}
                  </Typography>
                </CardContent>

                <CardActions disableSpacing className={classes.CardActions}>
                  <IconButton aria-label="Add to Cart">
                    {/* <AddShoppingCart /> */}
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
