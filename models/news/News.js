const {Schema, model} = require('mongoose')

const newsSchema = new Schema({
    title: String,
    text: String
})

module.exports = model('News', newsSchema)