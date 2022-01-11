import axios from 'axios'

const SINGLE_PRODUCT = 'SINGLE_PRODUCT'

export const _singleProduct = product => {
  return {
    type: SINGLE_PRODUCT,
    product
  }
}

export const singleProduct = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(_singleProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
