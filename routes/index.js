const router = require('express').Router()


router.use(require('./api.js'))
router.use(require('./views.js'))

module.exports = router
