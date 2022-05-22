const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://ajay12345:ajay12345@cluster0.mg9sx.mongodb.net/?retryWrites=true&w=majority"
        // "mongodb://localhost:27017/zoomx"
    )
}
module.exports = connect;
