import {
  Typography,
  Container,
  FormControl,
  InputLabel,
  IconButton,
  Box,
  Button,
  MenuItem,
  Paper,
  ButtonBase,
  NativeSelect,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  Row,
  makeStyles
} from '@material-ui/core'

import React, {useEffect, useState} from 'react'
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
    maxWidth: 700
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

  const [newQuantity, setNewQuantity] = React.useState(1)

  const handleChange = event => {
    setNewQuantity(event.target.value)
  }

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
    <Paper className={classes.paper}>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 700}} aria-label="spanning table">
          <TableHead>
            {/* <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow> */}
            <TableRow>
              <TableCell>Your Experiences</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userCart.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <div>
                    {
                      allProducts.filter(product => {
                        return product.id === item.productId
                      })[0].productName
                    }

                    <img
                      className={classes.img}
                      alt="complex"
                      src={
                        allProducts.filter(product => {
                          return product.id === item.productId
                        })[0].imageUrl
                      }
                    />
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div>
                    <FormControl sx={{m: 1, minWidth: 80}}>
                      <InputLabel id="demo-simple-select-label" />
                      <NativeSelect
                        id="demo-customized-select-native"
                        defaultValue={item.quantity}
                        onChange={handleChange}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                      </NativeSelect>
                    </FormControl>
                  </div>
                </TableCell>
                <TableCell align="right">
                  ${
                    allProducts.filter(product => {
                      return product.id === item.productId
                    })[0].price
                  }
                </TableCell>
                <TableCell align="right">{item.price}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {userCart
                  .map(item => item.price)
                  .reduce((previous, current) => previous + current, 0)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

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
      {/* </Container> */}
    </Paper>
  )

  // return (
  //   <Container align="center" justify-content="space-between">
  //     <Typography variant="h2" color="primary">
  //       My Cart
  //     </Typography>

  //     <Paper className={classes.paper}>
  //       <Box container spacing={2}>
  //         <Box item>
  //           {userCart.map(item => {
  //             return (
  //               <div key={item.id}>
  //                 <Box item>
  //                   <ButtonBase className={classes.image}>
  //                     <img
  //                       className={classes.img}
  //                       alt="complex"
  //                       src={
  //                         allProducts.filter(product => {
  //                           return product.id === item.productId
  //                         })[0].imageUrl
  //                       }
  //                     />
  //                   </ButtonBase>
  //                 </Box>
  //                 <Box item sm container>
  //                   <Box
  //                     item
  //                     sm
  //                     container
  //                     align="left"
  //                     direction="column"
  //                     spacing={2}
  //                   >
  //                     <Box item sm>
  //                       <Typography gutterBottom variant="h5">
  //                         {
  //                           allProducts.filter(product => {
  //                             return product.id === item.productId
  //                           })[0].productName
  //                         }
  //                       </Typography>
  //                       <Typography>Quantity</Typography>
  //                       <Typography>{item.quantity}</Typography>
  //                       <Box sx={{ minWidth: 120 }}>
  //                       <FormControl sx={{ m: 1, minWidth: 80 }}>
  //                           <InputLabel id="demo-simple-select-label">Update:</InputLabel>
  //                           <NativeSelect
  //                               id="demo-customized-select-native"
  //                               value={newQuantity}
  //                               onChange={handleChange}
  //                             >
  //                               <option aria-label="None" value="" />
  //                               <option value={1}>1</option>
  //                               <option value={2}>2</option>
  //                               <option value={3}>3</option>
  //                               <option value={4}>4</option>
  //                               <option value={5}>5</option>
  //                             </NativeSelect>
  //                         </FormControl>
  //                         </Box>
  //                     </Box>
  //                   </Box>
  //                   <Box item>
  //                     <Typography variant="h5">
  //                       ${`${item.price / 100}`}
  //                     </Typography>
  //                     <Box item>

  //                       <Typography
  //                         variant="subtitle2"
  //                         style={{cursor: 'pointer'}}
  //                       >
  //                         Remove
  //                       </Typography>
  //                     </Box>
  //                   </Box>
  //                 </Box>
  //               </div>
  //             )
  //           })}
  //         </Box>
  //       </Box>
  //     </Paper>

  //     <Container maxWidth="sm">
  //       <Button
  //         type="submit"
  //         fullWidth
  //         variant="contained"
  //         color="primary"
  //         sx={{mt: 3, mb: 2}}
  //         flexgrow={1}
  //         onClick={() => history.push('/checkout')}
  //       >
  //         CHECKOUT NOW
  //       </Button>
  //       <Button
  //         type="submit"
  //         fullWidth
  //         variant="outlined"
  //         color="secondary"
  //         sx={{mt: 3, mb: 2}}
  //         onClick={() => history.push('/experiences')}
  //       >
  //         CONTINUE SHOPPING
  //       </Button>
  //     </Container>
  //   </Container>
  // )
}
export default Cart
