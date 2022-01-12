import React, {Component} from 'react'
import {connect, useSelector} from 'react-redux'
import {fetchAllProducts} from '../store/allProduct'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/core/Icon'
import {makeStyles} from '@material-ui/core/styles'
//dummy data
let dummyData = [
  {
    id: 1,
    name: 'Getting Ice Cream with Zach',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2123/8425/products/52043744-LRG_530x.jpg?v=1578661800',
    description: 'One hour with the handsome Zach eating ice cream together!',
    price: 500.0,
    instructor: 'Zach'
  },
  {
    id: 2,
    name: 'Riding a skateboard with Mac',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/HW-LF6BxSbljrJrxVFYCAUK4_7o=/0x0:4000x2250/1400x1050/filters:focal(1680x805:2320x1445):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67369155/Skateboard_.0.jpg',
    description: 'Two Hours with the best skateboarder in FSA',
    price: 600.0,
    instructor: 'mac'
  }
]

const Product = () => {
  return (
    <Card>
      <CardMedia image={dummyData.imageUrl} title={dummyData.name} />
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {dummyData.name}
          </Typography>
          <Typography variant="h5">{dummyData.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {dummyData.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

class AllProducts extends Component {
  componentDidMount() {
    this.props.fetchAllProducts()
  }
  render() {
    return (
      <main>
        <Grid container justify="center" spacing={4}>
          {dummyData.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
