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

const featuredInstructors = props => {
  const products = props.products

  const shuffled = products.sort(() => 0.5 - Math.random())
  let selected = shuffled.slice(0, 5)

  return (
    <div>
      <h2>Featured Instructors</h2>
      <div className="content">
        <Box className="box">
          {selected.map(product => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <Card align="center" className="card">
                  <CardContent>
                    <Typography
                      sx={{fontSize: 14}}
                      color="secondary"
                      gutterBottom
                    >
                      <img src={product.imageUrl} className="all-view-image" />
                    </Typography>
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

export default featuredInstructors
