const router = require('express').Router()
const {User, Order, OrderItem} = require('../db/models')

//   /api/orders
router.get('/', async (req, res, next) => {
  try {
    // const orders = await Order.findAll(fk matched user)
    // if(purchased) {
    //   res.json(orders)
    // }
  } catch (error) {
    next(error)
  }
})
module.exports = router
