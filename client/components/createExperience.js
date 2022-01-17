import React from 'react'
import {
  Button,
  TextField,
  createTheme,
  MuiThemeProvider
} from '@material-ui/core'
import useCreateExperience from './customHooks'

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
  const {inputs, handleInputChange, handleSubmit} = useCreateExperience()
  return (
    <MuiThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Product Name"
          name="productName"
          variant="outlined"
          onChange={handleInputChange}
          value={inputs.productName}
          required
        />
        <TextField
          type="text"
          label="Instructor"
          name="instructor"
          variant="outlined"
          onChange={handleInputChange}
          value={inputs.instructor}
          required
        />
        <TextField
          type="text"
          label="Description"
          name="description"
          variant="outlined"
          onChange={handleInputChange}
          value={inputs.description}
          required
        />
        <TextField
          type="integer"
          label="Price"
          name="price"
          variant="outlined"
          onChange={handleInputChange}
          value={inputs.price}
          required
        />
        <TextField
          type="url"
          label="Image URL"
          name="imageUrl"
          variant="outlined"
          onChange={handleInputChange}
          value={inputs.imageUrl}
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
