const router = require('express').Router()
const {User, Order, OrderItem} = require('../db/models')
const {Op} = require('sequelize')
const {reset} = require('nodemon')

//   /api/orders GET ALL ORDERS & ASSOCIATED USER/ORDER ITEMS

router.get('/:id', async (req, res, next) => {
  try {
    const orderItems = await Order.findAll({
      where: {
        userId: req.params.id,
        isPurchased: false
      },
      include: [
        {
          model: OrderItem
        }
      ]
    })
    res.json(orderItems)
  } catch (error) {
    next(error)
  }
})

//BIG ROUTE
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
        const updatedPrice = Number(req.body.price) * updatedQuantity
        await productExists.update({
          quantity: updatedQuantity,
          price: updatedPrice
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

router.delete('/:orderId', async (req, res, next) => {
  try {
    await OrderItem.destroy({
      where: {
        id: req.params.orderId
      }
    })
    // const orderToDelete = await OrderItem.findByPk(req.params.orderId);
    // await orderToDelete.destroy();
    // res.send(orderToDelete)
    res.send(204)
  } catch (error) {
    next(error)
  }
})

//update cart
router.put('/:orderItemId', async (req, res, next) => {
  try {
    const orderToUpdate = await OrderItem.findByPk(req.params.orderItemId)
    const updatedQuantity = req.body.quantity
    const updatedPrice = req.body.price
    await orderToUpdate.update({
      quantity: updatedQuantity,
      price: updatedPrice
    })

    res.send(orderToUpdate)
  } catch (error) {
    next(error)
  }
})

//checkout cart
router.put('/', async (req, res, next) => {
  try {
    await Order.update(
      {
        isPurchased: true
      },
      {
        where: {
          id: req.body.orderId
        }
      }
    )
    res.send('Order completed')

    res.send(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
