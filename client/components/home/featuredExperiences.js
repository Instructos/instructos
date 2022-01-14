import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container
} from '@material-ui/core'
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles'

import useWindowDimensions from './useWindowDimensions'
import {mergeClasses} from '@material-ui/styles'

const Home = props => {
  const classes = props.classes
  const products = props.products

  const shuffled = products.sort(() => 0.5 - Math.random())
  let selected = shuffled.slice(0, 5)

  return (
    <div>
      <h2>Featured Experiences</h2>
      <div className={classes.content}>
        <Box className={classes.box}>
          {selected.map(product => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <Card
                  sx={{maxWidth: 275}}
                  key={product.id}
                  className={classes.card}
                  align="center"
                >
                  <CardMedia
                    className={classes.allViewImage}
                    image={product.imageUrl}
                    title={product.productName}
                  />
                  <CardContent>
                    {/* <Typography>
                      <img src={product.imageUrl} className={classes.allViewImage} />
                    </Typography> */}
                    <Typography component="div">
                      {product.productName}
                    </Typography>

                    <Typography
                      sx={{mb: 1.5}}
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      with {product.instructor}
                    </Typography>

                    <Typography sx={{mb: 1.5}} color="textPrimary">
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions />
                </Card>
              </Link>
            )
          })}
        </Box>
      </div>
    </div>
  )
}

export default Home
