const express = require('express')
const router = express.Router()
const eventController = require('../controllers/auth')

router.post('/login', eventController.login)

router.post('/register', eventController.register)

router.post('/resetPassword', eventController.resetPassword)

module.exports = router 