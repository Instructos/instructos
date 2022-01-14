import React, {useEffect, Link} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllProducts} from '../store/allProduct'
import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@material-ui/core'
import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
//shooimport {AddShoppingCart} from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    align: 'right'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

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

const Cart = () => {
  return <div>placeholder</div>
}

export default Cart
