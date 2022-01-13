import React, {useState, useEffect, useRef} from 'react'
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

import useWindowDimensions from './useWindowDimensions'

const Home = props => {
  const products = props.products

  const shuffled = products.sort(() => 0.5 - Math.random())
  let selected = shuffled.slice(0, 5)

  return (
    <div>
      <h2>Featured Experiences</h2>
      <div className="content">
        <Box className="box">
          {selected.map(product => {
            return (
              <Card
                sx={{maxWidth: 275}}
                key={product.id}
                className="card"
                align="center"
              >
                <CardContent>
                  <Typography>
                    <img src={product.imageUrl} className="all-view-image" />
                  </Typography>
                  <Typography component="div">{product.productName}</Typography>

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
            )
          })}
        </Box>
      </div>
    </div>
  )
}

export default Home
