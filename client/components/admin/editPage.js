import React, {useState} from 'react'
import {
  Button,
  TextField,
  createTheme,
  MuiThemeProvider
} from '@material-ui/core'

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
const editPage = ({product}) => {
  const id = product.id
  const [productName, setProductName] = useState(product.productName)
  const [instructor, setInstructor] = useState(product.instructor)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [imageUrl, setImageUrl] = useState(product.imageUrl)

  const {updateProduct} = useContext(context)
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
    updateProduct(id, updatedProduct)
  }

  return (
    <MuiThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label=" Product Name"
          name="productName"
          variant="outlined"
          onChange={event => setProductName(event.target.value)}
          required
        />
        <TextField
          type="text"
          label=" Instructor"
          name="instructor"
          variant="outlined"
          onChange={event => setInstructor(event.target.value)}
          required
        />
        <TextField
          type="text"
          label=" Description"
          name="description"
          variant="outlined"
          onChange={event => setDescription(event.target.value)}
          required
        />
        <TextField
          type="integer"
          label=" Price"
          name="price"
          variant="outlined"
          onChange={event => setPrice(event.target.value)}
          required
        />
        <TextField
          type="url"
          label=" Image URL"
          name="imageUrl"
          variant="outlined"
          onChange={event => setImageUrl(event.target.value)}
          required
        />
        <Button variant="success" type="submit" block>
          Submit
        </Button>
      </form>
    </MuiThemeProvider>
  )
}

export default editPage
