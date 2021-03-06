import {
  Container,
  FormControl,
  Box,
  Button,
  Paper,
  NativeSelect,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Select,
  makeStyles
} from '@material-ui/core'

import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {getUserCart} from '../../store/userCart'

import {fetchAllProducts} from '../../store/allProduct'
import {deleteOrder, updateOrder, completeOrder} from '../../store'
import {me} from '../../store/user'
import GuestCart from './guestCart'

import history from '../../history'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700
  },
  imageRow: {
    width: '200px',
    fontSize: '15px',
    color: '#4b5bbf'
  },
  img: {
    height: '150px',
    width: '100%',
    objectFit: 'cover'
  },
  tableTitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '30px',
    // letterSpacing: '2px',
    color: '#4b5bbf',
    marginTop: '20px',
    marginbottom: '5px'
  },
  tableHeader: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '20px',
    // letterSpacing: '2px',
    color: '#4b5bbf',
    marginTop: '20px',
    marginbottom: '5px'
  },
  emptyCartImage: {
    width: '200px',
    margin: 'auto',
    marginTop: '20px'
  },

  emptyCartButton: {
    backgroundColor: '#4b5bbf',
    color: 'white',
    marginTop: '50px'
  },
  deleteButton: {
    border: '1px solid #f0558a'
  },
  instructor: {
    color: 'black'
  }
}))

const Cart = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  let userCart = useSelector(state => state.userCart)

  let allProducts = useSelector(state => state.products)
  let currentUser = useSelector(state => state.user)

  const quantity = userCart
    .map(item => item.quantity)
    .reduce((previous, current) => previous + current, 0)

  // const [totalQuantity, setTotalQuantity] = useState(quantity)

  // const getTotalQuantity = (totalQuantity) => setTotalQuantity(totalQuantity);

  // useEffect(()=>{
  //   getTotalQuantity(quantity);
  // },[quantity])

  useEffect(() => {
    dispatch(me())
  }, [])

  const id = currentUser.id

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  useEffect(() => {
    // if (id) {
    dispatch(getUserCart())
    // }
  }, [])

  const handleRemoveFromCart = orderId => {
    dispatch(deleteOrder(orderId))
  }

  const handleUpdateQuantity = (orderItemId, quantity, price) => {
    dispatch(updateOrder(orderItemId, {quantity: quantity, price: price}))
  }

  const handleCheckout = () => {
    dispatch(completeOrder({orderId: userCart[0].orderId}))
    history.push('/checkout')
  }

  return !id ? (
    <GuestCart classes={classes} />
  ) : !userCart.length ? (
    <div>
      <Paper className={classes.paper}>
        <div align="center">
          <div className={classes.tableTitle}>
            {' '}
            There are no items in your cart.{' '}
          </div>
          <img
            className={classes.emptyCartImage}
            src="https://www.jing.fm/clipimg/full/305-3055218_akf0049-shopping-trolley-icon-cute-shopping-cart-icon.png"
          />
          <br />
          <Button
            className={classes.emptyCartButton}
            onClick={() => history.push('/experiences')}
          >
            Back to Experiences
          </Button>
        </div>
      </Paper>
    </div>
  ) : (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table sx={{minWidth: 700}} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableTitle}>YOUR CART</TableCell>
              <TableCell className={classes.tableHeader} align="center">
                QUANTITY
              </TableCell>
              <TableCell className={classes.tableHeader} align="right">
                UNIT PRICE
              </TableCell>
              <TableCell className={classes.tableHeader} align="right">
                SUBTOTAL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts.length === 0 ? (
              <div>Loading...</div>
            ) : (
              userCart.map(item => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className={classes.imageRow}>
                      {
                        allProducts.filter(product => {
                          return product.id === item.productId
                        })[0].productName
                      }{' '}
                      <span className={classes.instructor}>
                        {' '}
                        with{' '}
                        {
                          allProducts.filter(product => {
                            return product.id === item.productId
                          })[0].instructor
                        }
                      </span>
                      <br />
                      <img
                        className={classes.img}
                        alt="complex"
                        onClick={() =>
                          history.push(
                            `/products/${
                              allProducts.filter(product => {
                                return product.id === item.productId
                              })[0].id
                            }`
                          )
                        }
                        src={
                          allProducts.filter(product => {
                            return product.id === item.productId
                          })[0].imageUrl
                        }
                      />
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Box>
                        {item.quantity}
                        <br />
                        <Button
                          onClick={() => {
                            if (item.quantity < 5) {
                              handleUpdateQuantity(
                                item.id,
                                item.quantity + 1,
                                item.price / item.quantity * (item.quantity + 1)
                              )
                            } else {
                              alert('5 is the maximum!')
                            }
                          }}
                        >
                          +
                        </Button>
                        <Button
                          onClick={() => {
                            if (item.quantity > 1) {
                              handleUpdateQuantity(
                                item.id,
                                item.quantity - 1,
                                item.price / item.quantity * (item.quantity - 1)
                              )
                            }
                          }}
                        >
                          -
                        </Button>
                      </Box>
                      {/* <FormControl sx={{m: 1, minWidth: 50}}>
                      <InputLabel id="demo-simple-select-label" />
                      <NativeSelect
                        id="demo-customized-select-native"
                        value={item.quantity}
                        onChange={e => setNewQuantity(e.target.value)}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                      </NativeSelect>
                      <Button onClick={()=> {
                          handleUpdateQuantity(item.orderId, item.productId, newQuantity)
                        }}>Update Quantity</Button>
                    </FormControl><br></br> */}
                      <Button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className={classes.deleteButton}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    ${
                      allProducts.filter(product => {
                        return product.id === item.productId
                      })[0].price
                    }
                  </TableCell>
                  <TableCell align="center">{`$${item.price / 100}`}</TableCell>
                </TableRow>
              ))
            )}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2} align="center">
                Total
              </TableCell>
              <TableCell align="right">
                {`$${userCart
                  .map(item => item.price)
                  .reduce((previous, current) => previous + current, 0) / 100}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Container maxWidth="sm" marginbottom="5px">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{mt: 3, mb: 2}}
          flexgrow={1}
          onClick={handleCheckout}
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
    </Paper>
  )
}

export default Cart
