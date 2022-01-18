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

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.send(product)
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
    const product = await Product.create(req.body)
    res.send(product)
  } catch (error) {
    next(error)
  }
})
module.exports = router
