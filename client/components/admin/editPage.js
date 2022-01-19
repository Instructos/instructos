import React, {useState} from 'react'
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  createTheme,
  MuiThemeProvider
} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {editProduct} from '../../store'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
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

const editPage = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [product, setValues] = useState({
    productName: '',
    instructor: '',
    description: '',
    price: '',
    imageUrl: ''
  })
  const dispatch = useDispatch()
  const handleInputChange = event => {
    setValues({...product, [event.target.name]: event.target.value})
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(product)
    dispatch(editProduct(product))
  }
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Page
          </Typography>
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            <MuiThemeProvider theme={theme}>
              <form onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  label=" Product Name"
                  name="productName"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={product.productName}
                  required
                />
                <TextField
                  type="text"
                  label=" Instructor"
                  name="instructor"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={product.instructor}
                  required
                />
                <TextField
                  type="text"
                  label=" Description"
                  name="description"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={product.description}
                  required
                />
                <TextField
                  type="integer"
                  label=" Price"
                  name="price"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={product.price}
                  required
                />
                <TextField
                  type="url"
                  label=" Image URL"
                  name="imageUrl"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={product.imageUrl}
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </MuiThemeProvider>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default editPage
