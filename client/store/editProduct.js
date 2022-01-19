import axios from 'axios'
import history from '../history'

//action types
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'

//action creator
export const _deleteProduct = product => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}

export const _editProduct = product => {
  return {
    type: EDIT_PRODUCT,
    product
  }
}
//thunks
export const deleteProduct = id => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/products/${id}`)
      dispatch(_deleteProduct(data))
      history.push('/admin')
    } catch (error) {
      console.log(error)
    }
  }
}

export const editProduct = (id, product) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/products/${id}`, product)
      dispatch(_editProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function editProductReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_PRODUCT:
      return [...state, action.product]
    case DELETE_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
