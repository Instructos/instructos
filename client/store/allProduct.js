import axios from 'axios'
// import history from '../history'

// action types
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

// action creator
export const allProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
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
const initialState = []

// reducer
export default function allProductsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    default:
      return state
  }
}
