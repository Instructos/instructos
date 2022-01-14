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

// router.post('/', async (req, res, next) => {
//   try {
//     res.status(201).send(await Order.create(req.body))
//   } catch (error) {
//     next(error)
//   }
// })

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.findOrCreate({
      where: {
        userId: req.body.userId,
        isPurchased: false
      }
    })

    //If the order was created (no open order by that user found)
    if (order[1]) {
      await OrderItem.create({
        orderId: order[0].id,
        productId: req.body.productId,
        userId: req.body.userId,
        quantity: req.body.quantity,
        price: req.body.price
      })
    }

    if (!order[1]) {
      //know the order exists, adding to open order
      // If the productID is already included,
      //update the quantity
      const productExists = await OrderItem.findOne({
        where: {
          productId: req.body.productId,
          orderId: order[0].id
        }
      })
      if (productExists) {
        const updatedQuantity = Number(productExists.quantity) + 1
        await productExists.update({
          quantity: updatedQuantity
        })
      } else {
        //open user order exists, but not the product
        await OrderItem.create({
          orderId: order[0].id,
          productId: req.body.productId,
          userId: req.body.userId,
          quantity: req.body.quantity,
          price: req.body.price
        })
      }
    }

    res.send(201)
  } catch (error) {
    next(error)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const deletedItem = await OrderItem.destroy({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId
      }
    })
    res.send('deleted')
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const updateItem = await OrderItem.findOne({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId
      }
    })

    if (updateItem) {
      await updateItem.update({
        quantity: req.body.quantity
      })
    } else {
      res.send('No order item with these parameters')
    }

    res.send(204)
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
