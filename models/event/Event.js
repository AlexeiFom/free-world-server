const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
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