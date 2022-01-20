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
import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'

import {fetchAllProducts} from '../../store/allProduct'
import FeaturedExperiences from './featuredExperiences'
import FeaturedInstructors from './featuredInstructors'
import Testimonials from './testimonials'
import Introduction from './introduction'
import {blue, grey} from '@material-ui/core/colors'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: '100%'
  },
  card: {
    margin: '4px',
    // border: "#fba63b solid 2px",
    boxShadow: 'none',
    justifyContent: 'center',
    width: '225px',
    height: '250px',
    borderRadius: '5px'
    // backgroundColor: "#daf0f0"
  },
  box: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    minHeight: 'min-content'
  },
  allViewImage: {
    // width: "100%", /* width of container */
    // height: "150px", /* height of container */
    // objectFit: "cover"
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30'
  },
  content: {
    flex: '1',
    display: 'flex',
    overflow: 'auto',
    scrollBehavior: 'smooth'
  },
  reviewCard: {
    margin: '10px',
    // border: "#fba63b solid 2px",
    boxShadow: 'none',
    justifyContent: 'center',
    width: '225px',
    height: '150px',
    borderRadius: '10px'
    // backgroundColor: "#daf0f0"
  },

  reviewBox: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    minHeight: 'min-content',
    margin: '10px'
  },

  testimonialBox: {
    marginTop: '30px',
    padding: '1px',
    width: '800px',
    borderRadius: '10px',
    align: 'center',
    // backgroundColor: "#fba63b",
    backgroundColor: '#4b5bbf',
    border: 'black',
    margin: '0 auto'
  },

  testimonialTitle: {
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: '2px',
    color: 'white',
    marginTop: '20px',
    marginbottom: '5px'
  },

  testimonialContainer: {
    justifyContent: 'space-evenly',
    paddingTop: '40px'
  },

  introContainer: {
    alignItems: 'center'
  },

  introBox: {
    margin: '0 auto',
    padding: '30px',
    borderRadius: '10px',
    width: '500px',
    alignText: 'center',
    // backgroundColor: "#2eb3b4",
    color: 'white'
  },
  introTitle: {
    fontFamily: "'Raleway', sans-serif",
    margin: '1px',
    fontSize: '100px',
    letterSpacing: '7px',
    paddingTop: '20px',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  introText: {
    marginbottom: '5px',
    marginTop: '1px'
  },
  homeImage: {
    width: '50%',
    margin: 'auto'
  },
  imgContainer: {
    position: 'relative',
    margin: 'auto',
    textAlign: 'center'
  }
})

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
  const classes = useStyles()

  let products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <Introduction classes={classes} />
      <FeaturedExperiences products={products} classes={classes} />
      {/* <FeaturedInstructors products={products} classes={classes} /> */}
      <Testimonials classes={classes} />
    </MuiThemeProvider>
  )
}

export default connect(null)(Home)
