import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'
import {singleProduct} from '../store/singleProduct'
import {addOrder} from '../store/orders'
import {me} from '../store/user'

import {
  Box,
  Grid,
  Button,
  Popover,
  Modal,
  Typography,
  Container
} from '@material-ui/core'

import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

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
    fontSize: '4vw'
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
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  goToCart: {
    backgroundColor: '#fba63b',
    color: 'black'
  },
  continueShopping: {
    color: 'grey'
  }
})

const SingleProduct = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  let product = useSelector(state => state.product)

  useEffect(() => {
    dispatch(singleProduct(id))
  }, [])

  let currentUser = useSelector(state => state.user)

  useEffect(() => {
    dispatch(me())
  }, [])

  const [quantity, setQuantity] = useState(1)

  const [cart, setCart] = useState([])
  let localCart = localStorage.getItem('cart')
  useEffect(() => {
    localCart = JSON.parse(localCart)
    if (localCart) setCart(localCart)
  }, [])

  //MODAL
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  function handleClick(event) {
    event.preventDefault()

    if (currentUser.id) {
      dispatch(
        addOrder({
          productId: product.id,
          userId: currentUser.id,
          quantity: quantity,
          price: product.price * 100
        })
      )
      setOpen(true)
    } else {
      let cartCopy = [...cart]
      let productId = product.id
      let existingItem = cartCopy.find(item => item.productId === productId)

      if (existingItem) {
        if (existingItem.quantity < 5) {
          existingItem.quantity += 1
          existingItem.price = product.price * 100 * existingItem.quantity
          setOpen(true)
        } else {
          alert('5 is the maximum!')
        }
      } else {
        cartCopy.push({
          productId: product.id,
          quantity: quantity,
          price: product.price * 100,
          imageUrl: product.imageUrl,
          productName: product.productName,
          unitPrice: product.price,
          instructor: product.instructor
        })
        setOpen(true)
      }

      setCart(cartCopy)
      let stringCart = JSON.stringify(cartCopy)
      localStorage.setItem('cart', stringCart)
    }
  }

  let classes = useStyles()

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Added To Cart!</h2>
      <Link to="/cart">
        <Button className={classes.goToCart}>Go to Cart</Button>
      </Link>
      <Button className={classes.continueShopping} onClick={handleClose}>
        Continue Shopping
      </Button>
    </div>
  )

  return (
    <MuiThemeProvider theme={theme}>
      <Typography>
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
          gutter-bottom="true"
          className={classes.productName}
        >
          {product.productName}
        </Typography>
        <Typography
          variant="h4"
          color="secondary"
          gutter-bottom="true"
          className={classes.instructor}
        >
          <span className="single-view-span">with</span> {product.instructor}
        </Typography>
      </div>
      <Typography
        className={classes.description}
        color="secondary"
        gutter-bottom="true"
      >
        {product.description}
      </Typography>
      <Typography className={classes.price} color="secondary">
        ${product.price}{' '}
        <Button
          variant="contained"
          color="primary"
          gutter-bottom="true"
          className="single-view-button"
          style={{marginLeft: '30px'}}
          onClick={handleClick}
        >
          Add to Cart
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {modalBody}
        </Modal>
      </Typography>
    </MuiThemeProvider>
  )
}

export default SingleProduct
