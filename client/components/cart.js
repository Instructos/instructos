import {
  Typography,
  Container,
  IconButton,
  Box,
  Button,
  Grid,
  Paper,
  ButtonBase,
  makeStyles
} from '@material-ui/core'
import React from 'react'
import {useDispatch, useEffect, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {getUserCart} from '../store/userCart'

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
  const currentCart = useSelector(state => state.userCart)

  const {id} = useParams()

  useEffect(() => {
    dispatch(getUserCart(id))
  }, [])

  return (
    <Container align="center" justify-content="space-between">
      <Typography variant="h2" color="primary">
        My Cart
      </Typography>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="/img/default.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item sm container align="left" direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="h5">
                  Product Name
                </Typography>
                <Typography>Quantity</Typography>
                <Typography>3</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5">$19.00</Typography>
              <Grid item>
                <IconButton variant="outlined">-</IconButton>
                <IconButton variant="outlined">+</IconButton>
                <Typography variant="subtitle2" style={{cursor: 'pointer'}}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6">No products</Typography>

      <Container maxWidth="sm">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{mt: 3, mb: 2}}
          flexgrow={1}
        >
          CHECKOUT NOW
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          color="secondary"
          sx={{mt: 3, mb: 2}}
        >
          CONTINUE SHOPPING
        </Button>
      </Container>
    </Container>
  )
}

export default Cart
