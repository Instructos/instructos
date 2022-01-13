function adminAuth(req, res, next) {
  if (req.user.isAdmin) {
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = adminAuth
