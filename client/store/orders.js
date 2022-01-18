import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'
const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'
const UPDATE_ORDER = 'UPDATE_ORDER'
const COMPLETE_ORDER = 'COMPLETE_ORDER'

//GET ALL ORDERS REGARDLESS OF PARAMETERS
const _getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

const _addOrder = order => {
  return {
    type: ADD_ORDER,
    order
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

const _completeOrder = order => {
  return {
    type: COMPLETE_ORDER,
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

//BIG ROUTE
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

export const completeOrder = orderId => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/orders', orderId)
      dispatch(_completeOrder(data))
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
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.order.id)
    case UPDATE_ORDER:
      return [...state, action.order]
    case COMPLETE_ORDER:
      return [...state, action.order]
    default:
      return state
  }
}
