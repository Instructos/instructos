const router = require('express').Router()
const {User, Order, OrderItem} = require('../db/models')

//   /api/orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [OrderItem, User]
    })

    res.json(orders)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body))
  } catch (error) {
    next(error)
  }
})

// router.put('/', async (req, res, next) => {
//   try {
//     const order = await Order.findByPk(req.params.id, {
//       include: [Order, OrderItem]
//     });
//     res.send(await order.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router
