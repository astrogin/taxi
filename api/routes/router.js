const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const userController = require('../controllers/userController')
const taxiMasterController = require('../controllers/taxiMasterController')

router.post('/login', userController.login)
router.get('/users', auth, userController.getProfile)
router.post('/users', userController.register)
router.post('/logout', auth, userController.logout)
router.post('/logout/everywhere', auth, userController.logoutEverywhere)

router.get('/drivers', taxiMasterController.getDrivers)
router.get('/orders', taxiMasterController.getOrders) //params for finished "finished=true"
router.get('/crews', taxiMasterController.getCrewList)
router.get('/crews/:id', taxiMasterController.getCrew)

module.exports = router
