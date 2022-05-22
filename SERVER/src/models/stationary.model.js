const mongoose = require('mongoose')
const stationarySchema = new mongoose.Schema(
    {
        image : {type: String, required: true},
        name : {type: String, required: true},
        size : {type:[String], required: true},
        price: {type: Number, required: true},
        discount : {type: Number, required: true},
        details: {type: String, required: true},
    },
    {
        versionKey : false
    }
)

module.exports = mongoose.model('stationary', stationarySchema)