import axios from 'axios'

const GET_USER_ORDER_ITEMS = 'GET_USER_ORDER_ITEMS'

export const _getUserOrderItems = orderItems => {
  return {
    type: GET_USER_ORDER_ITEMS,
    orderItems
  }
}

export const getUserOrderItems = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orderItems/${id}`)
      dispatch(_getUserOrderItems(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function userOrderItemsReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_ORDER_ITEMS:
      return action.orderItems
    default:
      return state
  }
}
