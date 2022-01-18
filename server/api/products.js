const router = require('express').Router()
const {Product, Order, OrderItem} = require('../db/models')
const {adminAuth} = require('../auth/adminMiddleware')
// Getting all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// find a product by id

router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id)
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const order = await Product.findByPk(req.params.id, {
      // include: [Order, OrderItem]
    })
    res.send(await order.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    await Product.destroy({
      where: {
        id: id
      }
    })
    res.send(`Product id of "${id}" has been deleted`)
  } catch (error) {
    next(error)
  }
})

module.exports = router
