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
  const classes = props.classes
  return (
    <div className={classes.testimonialContainer}>
      <div className={classes.testimonialBox} align="center">
        <h2 align="center" className={classes.testimonialTitle}>
          INSTRUCTOS TESTIMONIALS
        </h2>
        <Box className={classes.reviewBox}>
          <Card
            sx={{minWidth: 275, display: 'flex', justifyContent: 'center'}}
            className={classes.reviewCard}
          >
            <CardContent>
              <Typography sx={{fontSize: 14}} color="secondary" gutterBottom />
              <Typography variant="h5" component="div">
                Review 1
              </Typography>
              <Typography sx={{mb: 1.5}}>
                "The most fun I've had since eating an entire box of cookies!"
              </Typography>
            </CardContent>
            <CardActions />
          </Card>

          <Card sx={{minWidth: 275}} className={classes.reviewCard}>
            <CardContent>
              <Typography sx={{fontSize: 14}} color="secondary" gutterBottom />
              <Typography variant="h5" component="div">
                Review 2
              </Typography>
              <Typography sx={{mb: 1.5}}>
                "An excessively sweaty good time!"
              </Typography>
            </CardContent>
            <CardActions />
          </Card>

          <Card sx={{minWidth: 275}} className={classes.reviewCard}>
            <CardContent>
              <Typography sx={{fontSize: 14}} color="secondary" gutterBottom />
              <Typography variant="h5" component="div">
                Review 3
              </Typography>
              <Typography sx={{mb: 1.5}}>
                "Tandem biking has never been so cool!"
              </Typography>
            </CardContent>
            <CardActions />
          </Card>
        </Box>
      </div>
    </div>
  )
}

export default testimonials
