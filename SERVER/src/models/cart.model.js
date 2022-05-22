const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema(
    {
        _id : {type: String, required : true},
        image : {type: String, required: true},
        name : {type: String, required: true},
        size : {type:String,  required: false},
        price: {type: Number, required: true},
        discount : {type: Number, required: true},
        details: {type: String, required: true},
    },
    {
        versionKey : false
    }
)

module.exports = mongoose.model('cart', cartSchema)