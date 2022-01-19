const router = require('express').Router()
const adminAuth = require('../auth/adminMiddleware')
const {Product, Order, OrderItem} = require('../db/models')
const adminAuth = require('../auth/adminMiddleware')
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

router.post('/', adminAuth, async (req, res, next) => {
  try {
    let product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', adminAuth, async (req, res, next) => {
  console.log('req.user', req.user)
  try {
    const productToDelete = await Product.findByPk(req.params.id)
    res.send(productToDelete.destroy(req.body))
  } catch (error) {
    next(error)
  }
})
module.exports = router
