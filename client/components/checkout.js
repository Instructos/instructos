import * as React from 'react'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'

import {
  createTheme,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'

import history from '../history'

const useStyles = makeStyles(theme => ({
  img: {
    height: '250px',
    padding: '10px'
    // objectFit: 'cover'
  },
  card: {
    maxWidth: '500px',
    margin: 'auto',
    marginTop: '50px'
  }
}))

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

const Checkout = () => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.img}
          image="https://i.pinimg.com/originals/9c/9c/95/9c9c9594083c7803650bca0f43f2b326.gif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            You're All Checked Out!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => history.push('/experiences')}>
            Return to Experiences
          </Button>
        </CardActions>
      </Card>
    </MuiThemeProvider>
  )
}

export default Checkout
