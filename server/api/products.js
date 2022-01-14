const router = require('express').Router()
const {Product, Order, OrderItem} = require('../db/models')

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
      include: [Order, OrderItem]
    })
    res.send(await student.update(req.body))
  } catch (error) {
    next(error)
  }
})

module.exports = router
