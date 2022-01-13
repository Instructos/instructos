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

import {fetchAllProducts} from '../../store/allProduct'
import FeaturedExperiences from './featuredExperiences'
import FeaturedInstructors from './featuredInstructors'
import Testimonials from './testimonials'
import {grey} from '@material-ui/core/colors'

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans serif'].join(',')
  },
  palette: {
    text: {
      primary: '#000000',
      secondary: '#2eb3b4'
    }
  }
})

const Home = () => {
  let products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <FeaturedExperiences products={products} />
      <FeaturedInstructors products={products} />
      <Testimonials />
    </MuiThemeProvider>
  )
}

export default connect(null)(Home)
