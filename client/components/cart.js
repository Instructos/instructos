import {
  Typography,
  Container,
  IconButton,
  Box,
  Button,
  Grid,
  Paper,
  ButtonBase,
  Row,
  makeStyles
} from '@material-ui/core'

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {getUserCart} from '../store/userCart'
import {fetchAllProducts} from '../store/allProduct'
import history from '../history'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}))

const Cart = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.userCart)

  let allProducts = useSelector(state => state.products)
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const {userId} = useParams()

  console.log(userCart)
  console.log(allProducts)

  useEffect(() => {
    dispatch(getUserCart(userId))
  }, [])

  return (
    <Container align="center" justify-content="space-between">
      <Typography variant="h2" color="primary">
        My Cart
      </Typography>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            {userCart.map(item => {
              return (
                <div key={item.id}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src={
                          allProducts.filter(product => {
                            return product.id === item.productId
                          })[0].imageUrl
                        }
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item sm container>
                    <Grid
                      item
                      sm
                      container
                      align="left"
                      direction="column"
                      spacing={2}
                    >
                      <Grid item sm>
                        <Typography gutterBottom variant="h5">
                          {
                            allProducts.filter(product => {
                              return product.id === item.productId
                            })[0].productName
                          }
                        </Typography>
                        <Typography>Quantity</Typography>
                        <Typography>{item.quantity}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">
                        ${`${item.price / 100}`}
                      </Typography>
                      <Grid item>
                        <IconButton variant="outlined">-</IconButton>
                        <IconButton variant="outlined">+</IconButton>
                        <Typography
                          variant="subtitle2"
                          style={{cursor: 'pointer'}}
                        >
                          Remove
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
        </Grid>
      </Paper>

      <Container maxWidth="sm">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{mt: 3, mb: 2}}
          flexgrow={1}
          onClick={() => history.push('/checkout')}
        >
          CHECKOUT NOW
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          color="secondary"
          sx={{mt: 3, mb: 2}}
          onClick={() => history.push('/experiences')}
        >
          CONTINUE SHOPPING
        </Button>
      </Container>
    </Container>
  )
}
export default Cart
