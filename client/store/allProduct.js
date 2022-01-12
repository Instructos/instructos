import axios from 'axios'
// import history from '../history'

// action types
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

// action creator
export const allProducts = product => {
  return {
    type: GET_ALL_PRODUCTS,
    product
  }
}

// thunk creator
export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(allProducts(data))
    } catch (err) {
      console.log('error in the fetchAllProducts thunk: ', err)
    }
  }
}

// reducer
export const allProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    default:
      return state
  }
}
