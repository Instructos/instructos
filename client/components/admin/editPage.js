import React, {useState} from 'react'
import {
  Box,
  Button,
  Modal,
  TextField,
  createTheme,
  MuiThemeProvider,
  IconButton,
  makeStyles
} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {editProduct} from '../../store'

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
  width: 400,
  backgroundColor: 'white',
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

const EditPage = ({product}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const id = product.id

  const [productName, setProductName] = useState(product.productName)
  const [instructor, setInstructor] = useState(product.instructor)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [imageUrl, setImageUrl] = useState(product.imageUrl)
  const dispatch = useDispatch()
  const updatedProduct = {
    id,
    productName,
    instructor,
    description,
    price,
    imageUrl
  }
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(editProduct(updatedProduct))
  }
  return (
    <div>
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
          <MuiThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                label=" Product Name"
                name="productName"
                variant="outlined"
                onChange={event => {
                  setProductName(event.target.value)
                }}
                value={productName}
                required
              />
              <TextField
                type="text"
                label=" Instructor"
                name="instructor"
                variant="outlined"
                onChange={event => {
                  setInstructor(event.target.value)
                }}
                value={instructor}
                required
              />
              <TextField
                type="text"
                label=" Description"
                name="description"
                variant="outlined"
                onChange={event => {
                  setDescription(event.target.value)
                }}
                value={description}
                required
              />
              <TextField
                type="integer"
                label=" Price"
                name="price"
                variant="outlined"
                onChange={event => {
                  setPrice(event.target.value)
                }}
                value={price}
                required
              />
              <TextField
                type="url"
                label=" Image URL"
                name="imageUrl"
                variant="outlined"
                onChange={event => {
                  setImageUrl(event.target.value)
                }}
                value={imageUrl}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </MuiThemeProvider>
        </Box>
      </Modal>
    </div>
  )
}
export default EditPage
