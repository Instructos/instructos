import React, {useEffect} from 'react'
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
  Tooltip
} from '@material-ui/core'

import {fetchAllProducts} from '../../store/allProduct'

const ProductsAdmin = () => {
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
              <TableCell align="right">id</TableCell>
              <TableCell align="right">instructor</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">description</TableCell>
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
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.instructor}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductsAdmin
