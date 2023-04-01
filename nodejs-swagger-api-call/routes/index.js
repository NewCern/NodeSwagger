const router = require('express').Router()
const controllers = require('../controller')


router.get('/', (req, res) => res.send("Home Page"))
router.get('/customersales', controllers.getCustomerSales)

module.exports = router
