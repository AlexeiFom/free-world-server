const express = require('express')
const passport = require('passport')

const router = express.Router()
const eventController = require('../controllers/scheduler')

router.get('/events', passport.authenticate('jwt', { session: false }), eventController.getEvents)

router.post('/addEvent', eventController.addEvent)
router.post('/delete', eventController.delete)

module.exports = router 