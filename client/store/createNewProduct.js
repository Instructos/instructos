import axios from 'axios'

const CREATE_PRODUCT = 'CREATE_PRODUCT'

export const _createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}

export const createProduct = product => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/products`, product)
      dispatch(_createProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function createProductReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return action.product
    default:
      return state
  }
}
