function adminAuth(req, res, next) {
  if (req.user.isAdmin) {
    return next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = adminAuth
