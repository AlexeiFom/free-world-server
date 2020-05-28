const port = process.env.PORT || '5000'
const mongoose = require('mongoose')
const config = require('./config/keys')
const app = require('./app')

async function start() {
    try {
        mongoose.connect(config.mongoURI,
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )
        app.listen(port, () => {
            console.log(`Server is started in ${port} port... !`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

start()