const mongoose = require('mongoose');

const ScaleDataSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    bmi: {
        type: String,
        required: true
    },
    basal_metabolism: {
        type: String,
        required: true
    },
    visceral_fat: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('ScaleEntry', ScaleDataSchema);