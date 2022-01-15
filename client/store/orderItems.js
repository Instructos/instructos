import axios from 'axios'

const GET_ALL_ORDER_ITEMS = 'GET_ALL_ORDER_ITEMS'
const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM'

export const _getAllOrderItems = orders => {
  return {
    type: GET_ALL_ORDER_ITEMS,
    orders
  }
}

export const _addOrderItem = orderItem => {
  return {
    type: ADD_ORDER_ITEM,
    orderItem
  }
}

export const getAllOrderItems = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orderItems')
      dispatch(_getAllOrderItems(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addOrderItem = orderItem => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/orderitems`, orderItem)
      dispatch(_addOrderItem(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function allOrderItemsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_ORDER_ITEMS:
      return action.orders
    case ADD_ORDER_ITEM:
      return [...state, action.orderItem]
    default:
      return state
  }
}
