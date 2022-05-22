const { Router } = require("express")
const { auth } = require('../middlewares/auth');

const Cardstock = require('../models/cardstock.model');

const router = Router()

router.post('/cardstock', async (req, res) => {
    try{
        const cardstock = await Cardstock.create(req.body)
        return res.status(200).send(cardstock)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/cardstock/:id',  async(req, res) => {
    try{
        const cardstock = await Cardstock.findById(req.params.id).lean().exec()
        return res.status(200).send(cardstock)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})

router.get('/cardstocks',  async(req, res) => {
    try{
        const page = req.query.page || 1
        const limit = req.query.limit || 8
        let totalPages = 0;
        let cardstocks
        if(req.query.q) {
            if(req.query.q == 'sort')
            {
                cardstocks = await Cardstock.find().skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Cardstock.find().countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
                cardstocks = req.query.sort == 1 ? cardstocks.sort((a,b) => (a.discount - b.discount)): cardstocks.sort((a,b)=>(-a.discount + b.discount))

            } 
            else if(req.query.q == 'filter')
            {
                cardstocks = await Cardstock.find({name: req.query.base}).skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Cardstock.find({name: req.query.base}).countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
            }
           else
                {
                    cardstocks = await Cardstock.find({block : req.query.block}).skip((page - 1) * limit).limit(limit).lean().exec()
                    const totalDocs = await Cardstock.find({block : req.query.block}).countDocuments()
                    totolPages = (Math.ceil(totalDocs/limit))
                }
        }
        else{
            cardstocks = await Cardstock.find().skip((page - 1) * limit).limit(limit).lean().exec()
            const totalDocs = await Cardstock.find().countDocuments()
            totalPages = (Math.ceil(totalDocs/limit))

        }
        let arr = []
        for(let i = 1; i<=totalPages; i++)
        {
            arr.push(i)

        }
        return res.status(200).send({cardstocks, totalPages:arr})
    } catch (error) {
        return req.status(500).send({message : error.message})
    }
})
module.exports = router;

//sorting
//http://localhost:5000/photobooks?q=sort&sort=-1
//http://localhost:5000/photobooks?q=filter&base=handbooks
//http://localhost:5000/photobooks?q=search&block=8