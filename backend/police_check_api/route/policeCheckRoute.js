const router = require('express').Router()
const policeCheckController = require('../controller/policeCheckController')

router.route('/check').post(policeCheckController.policeCheck)
router.route('/add').post(policeCheckController.addPoliceCheck)


module.exports = router