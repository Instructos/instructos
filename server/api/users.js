const router = require('express').Router()
const {User} = require('../db/models')
const adminAuth = require('../auth/adminMiddleware')
module.exports = router

router.get('/', adminAuth, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//ADD CREATE/POST ROUTE
