const router = require('express').Router()
const {User, Order, OrderItem} = require('../db/models')

//   /api/orderItems
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

router.get('/:userId', async (req, res, next) => {
  try {
    const orderItems = await OrderItem.findAll({
      include: [
        {
          model: Order,
          where: {
            userId: req.params.userId
          }
        }
      ]
    })

    res.json(orderItems)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await OrderItem.create(req.body))
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
