const router = require('express').Router()
const {User} = require('../db/models')
const adminAuth = require('../auth/adminMiddleware')
module.exports = router
// api/users
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

// api/users -------- delete users

router.delete('/', async (req, res, next) => {
  try {
    let result = await User.destroy({
      where: {
        id: Number(req.query.id)
      }
    })
    res.json(result)
  } catch (err) {
    next(err)
  }
})
