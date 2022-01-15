import axios from 'axios'

const GET_USER_CART = 'GET_USER_ORDERS'

//GET ONLY OPEN ORDERS FOR USER
export const _getUserCart = orderItems => {
  return {
    type: GET_USER_CART,
    orderItems
  }
}

export const getUserCart = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/${id}`)
      dispatch(_getUserCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function userCartReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_CART:
      return action.orderItems
    default:
      return state
  }
}
