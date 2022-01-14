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

const Introduction = props => {
  const classes = props.classes

  return (
    <div className={classes.introContainer}>
      <Box className={classes.introBox}>
        <h1 align="center" className={classes.introTitle}>
          INSTRUCTOS
        </h1>
        <h4 align="center" className={classes.introText}>
          Unique experiences with your Fullstack Academy<br /> instructors and
          fellows!
        </h4>
      </Box>
    </div>
  )
}

export default Introduction
