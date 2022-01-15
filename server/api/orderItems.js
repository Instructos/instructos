const router = require('express').Router()
const {User, Order, OrderItem} =
  require('../db/models') /
  //   /api/orderItems GET ALL ORDERITEMS WITH ASSOC ORDER REGARDLESS OF PARAMETERS
  router.get('/', async (req, res, next) => {
    try {
      const orderItems = await OrderItem.findAll({
        include: [Order]
      })

      res.send(orderItems)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
