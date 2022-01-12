import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
// import {flexbox} from '@mui/system'

const dummyData = [
  {
    id: 1,
    productName: 'Ice Cream Social',
    instructor: 'Amber',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4m_zTr2DFqPOYClmCxyRdjOMxwS-WdTP-2A&usqp=CAU'
  },

  {
    id: 2,
    productName: 'Tandem Bike Ride',
    instructor: 'Mac',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb-vGhmWFZRWz2fiwQy9pyDt6PpbDHA758w&usqp=CAU'
  },

  {
    id: 3,
    productName: 'American Museum of Natural History Visit',
    instructor: 'Zach',
    imageUrl:
      'https://media.cntraveler.com/photos/5a7746e0aeb19b5730310bf7/16:9/w_2560,c_limit/Museum-of-Natural-History_AMNHD.-Finnin_2018_4.-Afr.jpg'
  },

  {
    id: 4,
    productName: 'EDM Dance Party',
    instructor: 'Eric',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydLdpvDQzNOElh5QETfTqefE_OGHV8XE70A5S_7RMLMfW2B8kWvqhihrZzIYcuRtwlnA&usqp=CAU'
  },

  {
    id: 5,
    productName: 'Goat Yoga',
    instructor: 'Andrea',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXHFm8ndhJVhBYfpdQSge6VL8byCDHfsyz8XLpV8jmx_zFBjU5HjffMQnMsYWiPxrUQM&usqp=CAU'
  }
]

const Home = () => {
  const {products} = useSelector(state => {
    return {
      products: state.products
    }
  })

  return (
    <div>
      <h2>Featured Experiences</h2>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        {dummyData.map(product => {
          return (
            <Card sx={{width: 275}} key={product.id}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                >
                  <img height="125px" src={product.imageUrl} />
                </Typography>
                <Typography variant="h5" component="div">
                  {product.productName}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                  {product.instructor}
                </Typography>
              </CardContent>
              <CardActions />
            </Card>
          )
        })}
      </Box>

      <h2>Featured Instructors</h2>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        {dummyData.map(product => {
          return (
            <Card sx={{minWidth: 275}} key={product.id}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                >
                  <img height="125px" src={product.imageUrl} />
                </Typography>
                <Typography variant="h6" component="div">
                  {product.productName}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                  {product.instructor}
                </Typography>
              </CardContent>
              <CardActions />
            </Card>
          )
        })}
      </Box>

      <h2>Reviews</h2>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Card sx={{minWidth: 275}}>
          <CardContent>
            <Typography
              sx={{fontSize: 14}}
              color="text.secondary"
              gutterBottom
            />
            <Typography variant="h5" component="div">
              Review 1
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
              "Really exciting narrative about the experience!"
            </Typography>
          </CardContent>
          <CardActions />
        </Card>

        <Card sx={{minWidth: 275}}>
          <CardContent>
            <Typography
              sx={{fontSize: 14}}
              color="text.secondary"
              gutterBottom
            />
            <Typography variant="h5" component="div">
              Review 2
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
              "Really exciting narrative about the experience!"
            </Typography>
          </CardContent>
          <CardActions />
        </Card>

        <Card sx={{minWidth: 275}}>
          <CardContent>
            <Typography
              sx={{fontSize: 14}}
              color="text.secondary"
              gutterBottom
            />
            <Typography variant="h5" component="div">
              Review 3
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
              "Really exciting narrative about the experience!"
            </Typography>
          </CardContent>
          <CardActions />
        </Card>
      </Box>
    </div>
  )
}

export default Home
