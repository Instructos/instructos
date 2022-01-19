import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Login,
  Signup,
  UserHome,
  Home,
  AllProducts,
  singleProduct,
  Cart,
  Checkout,
  CreateExperience,
  adminPage,
  ProductsAdmin,
  editPage
} from './components'
import {me} from './store'
import AllUsers from './components/admin/AllUsers'
import {useDispatch, useSelector} from 'react-redux'

const Routes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(me())
  }, [])

  const isLoggedIn = useSelector(state => {
    return !!state.user.id
  })

  const isAdmin = useSelector(state => state.user.isAdmin)
  const adminPortal = isAdmin && (
    <Switch>
      <Route exact path="/admin/users" component={AllUsers} />
      <Route exact path="/admin" component={adminPage} />
      <Route exact path="/admin/products" component={ProductsAdmin} />
      <Route path="/admin/createExperience" component={CreateExperience} />
      <Route exact path="/admin/products/:id" component={editPage} />
      <Route exact path="/admin/editProduct" component={editPage} />
    </Switch>
  )
  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/experiences" component={AllProducts} />
      <Route path="/signup" component={Signup} />
      <Route path="/products/:id" component={singleProduct} />
      <Route path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      {isLoggedIn && (
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route path="/home" component={UserHome} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          {adminPortal}
        </Switch>
      )}
      {/* <Route component={Login} /> */}
    </Switch>
  )
}

export default Routes
