const { Router } = require("express")
const { auth } = require('../middlewares/auth');

const Display = require('../models/display.model');

const router = Router()

router.post('/display',  async (req, res) => {
    try{
        const display = await Display.create(req.body)
        return res.status(200).send(display)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/display/:id', async(req, res) => {
    try{
        const display = await Display.findById(req.params.id).lean().exec()
        return res.status(200).send(display)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})

router.get('/displays', async(req, res) => {
    try{
        const page = req.query.page || 1
        const limit = req.query.limit || 8
        let totalPages = 0;
        let displays
        if(req.query.q) {
            if(req.query.q == 'sort')
            {
                displays = await Display.find().skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Display.find().countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
                displays = req.query.sort == 1 ? displays.sort((a,b) => (a.discount - b.discount)): displays.sort((a,b)=>(-a.discount + b.discount))

            } 
            else if(req.query.q == 'filter')
            {
                displays = await Display.find({name: req.query.base}).skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Display.find({name: req.query.base}).countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
            }
            else
                {
                    displays = await Display.find({block : req.query.block}).skip((page - 1) * limit).limit(limit).lean().exec()
                    const totalDocs = await Display.find({block : req.query.block}).countDocuments()
                    totolPages = (Math.ceil(totalDocs/limit))
                }
        }
        else{
            displays = await Display.find().skip((page - 1) * limit).limit(limit).lean().exec()
            const totalDocs = await Display.find().countDocuments()
            totalPages = (Math.ceil(totalDocs/limit))

        }
        let arr = []
        for(let i = 1; i<=totalPages; i++)
        {
            arr.push(i)

        }
        return res.status(200).send({displays, totalPages:arr})
    } catch (error) {
        return req.status(500).send({message : error.message})
    }
})
module.exports = router;

//sorting
//http://localhost:5000/photobooks?q=sort&sort=-1
//http://localhost:5000/photobooks?q=filter&base=handbooks
//http://localhost:5000/photobooks?q=search&block=8