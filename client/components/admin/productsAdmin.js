import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import editPage from './editPage'
import {fetchAllProducts} from '../../store/allProduct'
import {deleteProduct, editProduct} from '../../store/editProduct'

const useStyles = makeStyles({
  icon: {
    display: 'flex',
    width: '50px',
    height: '20px',
    fontSize: '15px'
  }
})

const ProductsAdmin = () => {
  const classes = useStyles()
  let products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650, maxWidth: '80%'}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Experiences</TableCell>
              <TableCell align="right">Instructor</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(row => (
              <TableRow
                key={row.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell align="right">{row.instructor}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell>
                  <Link to={`/admin/products/${row.id}`} key={row.id}>
                    <IconButton
                      className={classes.icon}
                      onClick={() => editProduct(row.id)}
                    >
                      Edit
                    </IconButton>
                  </Link>
                  <IconButton
                    className={classes.icon}
                    onClick={deleteProduct(row.id)}
                  >
                    Delete
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductsAdmin
