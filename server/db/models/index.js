const User = require('./user')
const Product = require('./products')
const Order = require('./order')
const OrderItem = require('./orderItem')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
//User and Order
Order.belongsTo(User)
User.hasMany(Order)

//Order and OrderItem
Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

//OrderItem and Product
OrderItem.belongsTo(Product)
Product.hasMany(OrderItem)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  OrderItem
}
