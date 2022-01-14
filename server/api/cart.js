const router = require('express').Router()
const {User, Order, OrderItem} = require('../db/models')

//   /api/cart
router.get('/', async (req, res, next) => {
  try {
    const cart = await find
  } catch (error) {
    next(error)
  }
})

module.exports = router
