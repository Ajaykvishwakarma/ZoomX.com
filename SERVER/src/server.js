const express = require("express");
const cors = require("cors");

const mongoConnector = require('./configs/db');


const { register, login } = require('./controllers/user.controller');
const photobookController = require('./controllers/photobook.controller')
const cartController = require('./controllers/cart.controller');
const calenderController = require('./controllers/calenders.contoller')
const cardstockController = require('./controllers/cardstock.controller');
const displayController = require('./controllers/display.controller');
const stationaryController = require('./controllers/stationary.controller');
const bestsellerController = require('./controllers/bestseller.controller');
const paymentController = require('./controllers/payment.controller');
const addressController = require('./controllers/address.controller') 

const app = express();
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;

app.use('/signup', register);
app.use('/signin', login);
app.use('/', photobookController)
app.use('/', cartController)
app.use('/', calenderController)
app.use('/', cardstockController)
app.use('/', displayController)
app.use('/', stationaryController)
app.use('/', bestsellerController)
app.use('/', paymentController)
app.use('/', addressController)

module.exports = () => {

    app.listen(port, async () => {
        try{
            await mongoConnector()
            console.log(`Listening on port ${port}...`)
        } catch (error) {
            console.log({
                message : error.message,
                status : "something goes wrong"
            })
        }
    })
}