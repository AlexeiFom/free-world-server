
const express = require('express')
const router = express.Router()
const newsController = require('../controllers/news')

router.get('/news', newsController.news)


module.exports = router