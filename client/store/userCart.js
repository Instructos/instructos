import axios from 'axios'

const GET_USER_CART = 'GET_USER_ORDERS'
const DELETE_ORDER = 'DELETE_ORDER'
const UPDATE_ORDER = 'UPDATE_ORDER'

//GET ONLY OPEN ORDERS FOR USER
export const _getUserCart = orderItems => {
  return {
    type: GET_USER_CART,
    orderItems
  }
}

const _deleteOrder = order => {
  return {
    type: DELETE_ORDER,
    order
  }
}

const _updateOrder = order => {
  return {
    type: UPDATE_ORDER,
    order
  }
}

export const getUserCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/`)
      dispatch(_getUserCart(data[0].orderItems))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteOrder = orderId => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/orders/${orderId}`)
      dispatch(_deleteOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateOrder = (orderItemId, orderItem) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/orders/${orderItemId}`, orderItem)
      dispatch(_updateOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function userCartReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_CART:
      return action.orderItems
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.order.id)
    case UPDATE_ORDER:
      return state.map(order => {
        console.log('order', order)
        console.log('action order', action.order)
        return order.id === action.order.id ? action.order : order
      })
    default:
      return state
  }
}
