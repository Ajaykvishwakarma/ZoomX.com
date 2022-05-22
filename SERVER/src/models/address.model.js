const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema(
    {
        
        firstName : {type: String, required: true},
        lastName : {type: String, required: true},
        address1 : {type: String , required: true},
        address2 : {type: String , required: true},
        city : {type: String, required: true},
        state : {type: String, required: true},
        postalCode : {type: String, required: true},
        country : {type: String, required: true},

        
    },
    {
        versionKey : false
    }
)

module.exports = mongoose.model('address', addressSchema)