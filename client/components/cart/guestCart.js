import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

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

import history from '../../history'

const GuestCart = props => {
  const classes = props.classes

  const [cart, setCart] = useState([])
  let localCart = localStorage.getItem('cart')
  useEffect(() => {
    localCart = JSON.parse(localCart)
    if (localCart) setCart(localCart)
  }, [])

  const handleUpdateQuantity = (productId, quantity, price) => {
    let cartCopy = [...cart]

    let existingItem = cartCopy.find(item => item.productId === productId)

    existingItem.quantity = quantity
    existingItem.price = existingItem.unitPrice * 100 * existingItem.quantity

    setCart(cartCopy)
    let stringCart = JSON.stringify(cartCopy)
    localStorage.setItem('cart', stringCart)
  }

  const handleRemoveFromCart = productId => {
    let cartCopy = [...cart]

    let newCart = cartCopy.filter(item => item.productId !== productId)
    setCart(newCart)
    let stringCart = JSON.stringify(cartCopy)
    localStorage.setItem('cart', stringCart)
  }

  const handleCheckout = () => {
    setCart([])
    let stringCart = JSON.stringify([])
    localStorage.setItem('cart', stringCart)
    history.push('/checkout')
  }
  return !cart.length ? (
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
            {cart.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className={classes.imageRow}>
                    {item.productName}
                    <br />

                    <img
                      className={classes.img}
                      alt="complex"
                      src={item.imageUrl}
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
                              item.productId,
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
                              item.productId,
                              item.quantity - 1,
                              item.price / item.quantity * (item.quantity - 1)
                            )
                          }
                        }}
                      >
                        -
                      </Button>
                    </Box>

                    <Button
                      onClick={() => handleRemoveFromCart(item.productId)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
                <TableCell align="center">${item.unitPrice}</TableCell>
                <TableCell align="center">{`$${item.price / 100}`}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2} align="center">
                Total
              </TableCell>
              <TableCell align="right">
                {`$${cart
                  .map(item => item.price)
                  .reduce((previous, current) => previous + current, 0) / 100}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Container maxWidth="sm" marginBottom="5px">
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

export default GuestCart
