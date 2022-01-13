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

  const {height, width} = useWindowDimensions()

  const numberOfSlides = (maxVisibleSlides, windowWidth) => {
    if (windowWidth > 1200) return maxVisibleSlides
    if (windowWidth > 992) return 5
    if (windowWidth > 700) return 4
    return 2
  }

  const visibleSlides = numberOfSlides(8, width)

  const totalPages = Math.ceil(products.length / visibleSlides) - 1

  return (
    <div>
      <h2>Featured Experiences</h2>
      <div className="content">
        <Box className="box">
          {products.map(product => {
            return (
              <Card sx={{maxWidth: 275}} key={product.id} className="card">
                <CardContent>
                  <Typography sx={{fontSize: 14}} gutterBottom>
                    <img src={product.imageUrl} className="all-view-image" />
                  </Typography>
                  <Typography variant="h6" component="div">
                    {product.productName}
                  </Typography>

                  <Typography sx={{mb: 1.5}} color="secondary">
                    with {product.instructor}
                  </Typography>

                  <Typography sx={{mb: 1.5}} color="secondary">
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
