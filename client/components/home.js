import React, {useState, useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container
} from '@material-ui/core'
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans serif'].join(',')
  },
  palette: {
    text: {
      primary: {
        main: '#2eb3b4'
      },
      secondary: {
        main: '#fba63b'
      }
    },
    primary: {
      main: '#2eb3b4'
    },
    secondary: {
      main: '#fba63b'
    }
  }
})

const dummyData = [
  {
    id: 1,
    productName: 'Ice Cream Social',
    instructor: 'Amber',
    price: 50,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4m_zTr2DFqPOYClmCxyRdjOMxwS-WdTP-2A&usqp=CAU'
  },

  {
    id: 2,
    productName: 'Tandem Bike Ride',
    instructor: 'Mac',
    price: 50,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb-vGhmWFZRWz2fiwQy9pyDt6PpbDHA758w&usqp=CAU'
  },

  {
    id: 3,
    productName: 'American Museum of Natural History Visit',
    instructor: 'Zach',
    price: 50,
    imageUrl:
      'https://media.cntraveler.com/photos/5a7746e0aeb19b5730310bf7/16:9/w_2560,c_limit/Museum-of-Natural-History_AMNHD.-Finnin_2018_4.-Afr.jpg'
  },

  {
    id: 4,
    productName: 'EDM Dance Party',
    instructor: 'Eric',
    price: 50,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydLdpvDQzNOElh5QETfTqefE_OGHV8XE70A5S_7RMLMfW2B8kWvqhihrZzIYcuRtwlnA&usqp=CAU'
  },

  {
    id: 5,
    productName: 'Goat Yoga',
    instructor: 'Andrea',
    price: 50,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXHFm8ndhJVhBYfpdQSge6VL8byCDHfsyz8XLpV8jmx_zFBjU5HjffMQnMsYWiPxrUQM&usqp=CAU'
  }
]

import {fetchAllProducts} from '../store/allProduct'

const Home = () => {
  let products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <h2 color="primary">Featured Experiences</h2>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          wrap: 'wrap',
          margin: '10px'
        }}
      >
        {products.map(product => {
          return (
            <Card sx={{maxWidth: 275}} key={product.id} className="card">
              <CardContent>
                <Typography sx={{fontSize: 14}} gutterBottom>
                  <img src={product.imageUrl} className="all-view-image" />
                </Typography>
                <Typography variant="h6" component="div">
                  {product.productName}
                </Typography>

                <Typography sx={{mb: 1.5}} color="secondary">
                  with {product.instructor}
                </Typography>

                <Typography sx={{mb: 1.5}} color="secondary">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions />
            </Card>
          )
        })}
      </Box>

      <h2>Featured Instructors</h2>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        {dummyData.map(product => {
          return (
            <Card sx={{maxWidth: 275}} key={product.id} className="card">
              <CardContent>
                <Typography sx={{fontSize: 14}} color="secondary" gutterBottom>
                  <img src={product.imageUrl} className="all-view-image" />
                </Typography>
                <Typography variant="h6" component="div">
                  {product.productName}
                </Typography>
                <Typography sx={{mb: 1.5}} color="secondary">
                  {product.instructor}
                </Typography>
              </CardContent>
              <CardActions />
            </Card>
          )
        })}
      </Box>

      <h2>Instructos Testimonials</h2>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignContent: 'center'
        }}
      >
        <Card
          sx={{minWidth: 275, display: 'flex', justifyContent: 'center'}}
          style={{backgroundColor: '#fba63b'}}
          className="card"
        >
          <CardContent>
            <Typography sx={{fontSize: 14}} color="secondary" gutterBottom />
            <Typography variant="h5" component="div">
              Review 1
            </Typography>
            <Typography sx={{mb: 1.5}} color="secondary">
              "Really exciting narrative about the experience!"
            </Typography>
          </CardContent>
          <CardActions />
        </Card>

        <Card
          sx={{minWidth: 275}}
          style={{backgroundColor: '#fba63b'}}
          className="card"
        >
          <CardContent>
            <Typography sx={{fontSize: 14}} color="secondary" gutterBottom />
            <Typography variant="h5" component="div">
              Review 2
            </Typography>
            <Typography sx={{mb: 1.5}} color="secondary">
              "Really exciting narrative about the experience!"
            </Typography>
          </CardContent>
          <CardActions />
        </Card>

        <Card
          sx={{minWidth: 275}}
          style={{backgroundColor: '#fba63b'}}
          className="card"
        >
          <CardContent>
            <Typography sx={{fontSize: 14}} color="secondary" gutterBottom />
            <Typography variant="h5" component="div">
              Review 3
            </Typography>
            <Typography sx={{mb: 1.5}} color="secondary">
              "Really exciting narrative about the experience!"
            </Typography>
          </CardContent>
          <CardActions />
        </Card>
      </Box>
    </MuiThemeProvider>
  )
}

export default connect(null)(Home)
