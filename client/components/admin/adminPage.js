import Sidebar from './sidebar'
import React from 'react'
import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
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

const useStyles = makeStyles({
  Sidebar: {
    display: 'flex',
    position: 'sticky',
    top: '50px',
    height: '100%'
  }
})

const adminPage = () => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.Sidebar}>
        <Sidebar />
        <div className="adminWelcome"> Welcome to the Admin Page</div>
      </div>

      <div>
        <img
          alt="fullstack"
          className="fullstackPic"
          src="/img/fullstack.jpg"
        />
      </div>
    </MuiThemeProvider>
  )
}

export default adminPage
