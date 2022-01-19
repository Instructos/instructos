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
  Box,
  Button,
  Typography,
  Modal
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {fetchAllProducts} from '../../store/allProduct'
import {deleteProduct, editProduct} from '../../store/editProduct'
import editPage from './editPage'

const useStyles = makeStyles({
  icon: {
    display: 'flex',
    width: '50px',
    height: '20px',
    fontSize: '15px'
  }
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 10,
  p: 20
}

const ProductsAdmin = () => {
  const classes = useStyles()
  let products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
                  <IconButton className={classes.icon} onClick={handleOpen}>
                    Edit
                  </IconButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography> */}

                      <editPage />
                    </Box>
                  </Modal>
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
