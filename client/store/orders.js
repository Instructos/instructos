import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'
const ADD_ORDER = 'ADD_ORDER'

export const _getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

export const _addOrder = order => {
  return {
    type: ADD_ORDER,
    order
  }
}

export const getOrders = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(_getOrders(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addOrder = order => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/orders`, order)
      dispatch(_addOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function allOrdersReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case ADD_ORDER:
      return [...state, action.order]
    default:
      return state
  }
}
