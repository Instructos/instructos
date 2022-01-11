import React, {useState} from 'react'
import {connect} from 'react-redux'

const singleProd = () => {
  const [product, setProduct] = useState(singleProduct)

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
