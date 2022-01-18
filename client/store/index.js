import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import singleProductReducer from './singleProduct'
import allProductsReducer from './allProduct'
import allOrdersReducer from './orders'
import allOrderItemsReducer from './orderItems'
import userCartReducer from './userCart'

const reducer = combineReducers({
  user,
  product: singleProductReducer,
  products: allProductsReducer,
  orders: allOrdersReducer,
  orderItems: allOrderItemsReducer,
  userCart: userCartReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './singleProduct'
export * from './allProduct'
export * from './orders'
export * from './orderItems'
export * from './userCart'
