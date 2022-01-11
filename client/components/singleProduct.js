import React, {useState} from 'react'
import {connect} from 'react-redux'
import {singleProduct} from '../store/singleProduct'

const singleProd = props => {
  const [product, setProduct] = useState({})

  const oneproduct = setProduct(singleProduct(props))

  return (
    <div>
      <img src={singleProduct.imageUrl} className="productImage" />
      <div className="productName">{singleProduct.productName}</div>
      <div className="instructor">{singleProduct.instructor}</div>
      <div className="description">{singleProduct.description}</div>
      <div className="reviews">hardcode this in later</div>
    </div>
  )
}
