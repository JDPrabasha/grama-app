const router = require('express').Router()
const policeCheckController = require('../controller/policeCheckController')

router.route('/check').get(policeCheckController.policeCheck)
router.route('/add').post(policeCheckController.addPoliceCheck)


module.exports = router