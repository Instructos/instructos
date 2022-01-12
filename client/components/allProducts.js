import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllProducts} from '../store/allProduct'

const AllProducts = () => {
  let products = useSelector(state => state.products)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div>
      {products.map(product => {
        return <div key={product.id}>{product.productName}</div>
      })}
    </div>
  )
}

export default AllProducts
