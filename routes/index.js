const router = require('express').Router()

router.use('/api', require('./api.js'))
router.use('/', require('./views.js'))

module.exports = router