const express = require('express')
const passport = require('passport')

const newsRouter = require('./routes/news')
const schedulerRouter = require('./routes/scheduler')
const authRouter = require('./routes/auth')

const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())

require('./middleware/passport')(passport)
app.use(passport.initialize())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/auth', authRouter)
app.use('/api/news', newsRouter)
app.use('/api/scheduler', schedulerRouter)

app.use(morgan('dev'))

// настройка CORS
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
//     next();  // передаем обработку запроса методу app.post("/postuser"...
//   });


module.exports = app
