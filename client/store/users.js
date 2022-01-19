import axios from 'axios'

//ACTION TYPES

const GET_USERS = 'GET_USERS'

/**
 * INITIAL STATE
 */
const initialState = []

//ACTION CREATORS
const getAllUsers = users => ({
  type: GET_USERS,
  users
})

//THUNK CREATORS
export const getAllUsersThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getAllUsers(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
