import React from 'react'
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

const testimonials = props => {
  return (
    <div>
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
            <Typography sx={{mb: 1.5}}>
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
            <Typography sx={{mb: 1.5}}>
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
            <Typography sx={{mb: 1.5}}>
              "Really exciting narrative about the experience!"
            </Typography>
          </CardContent>
          <CardActions />
        </Card>
      </Box>
    </div>
  )
}

export default testimonials
