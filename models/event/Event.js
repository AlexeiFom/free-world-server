const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
    }
})

module.exports = model('Event', eventSchema)