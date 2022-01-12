import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {singleProduct} from '../store/singleProduct'

const SingleProduct = () => {
  let product = useSelector(state => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(singleProduct())
  }, {})

  return (
    <div id={product.id}>
      <img src={product.imageUrl} />
      <h1>{product.productName}</h1>
      <h2>{product.insturctor}</h2>
      <h3>{product.description}</h3>
      <div>reviews</div>
    </div>
  )
}

export default SingleProduct
