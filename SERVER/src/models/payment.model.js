const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema(
    {
        
        name : {type: String, required: true},
        cardNo : {type:Number , required: true},
        exDate: {type: String, required: true},
        cvv : {type: Number, required: true},
        
    },
    {
        versionKey : false
    }
)

module.exports = mongoose.model('payment', paymentSchema)