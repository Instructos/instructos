import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  Button,
  TextField,
  createTheme,
  MuiThemeProvider
} from '@material-ui/core'
import {createProduct} from '../store/createNewProduct'

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

const CreateExperience = () => {
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
    dispatch(createProduct(product))
  }
  return (
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
  )
}

export default CreateExperience
