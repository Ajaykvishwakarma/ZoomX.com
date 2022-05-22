const { Router } = require("express")
const { auth } = require('../middlewares/auth');

const Photobook = require('../models/phototbook.model');

const router = Router()

router.post('/photobook', async (req, res) => {
    try{
        const photobook = await Photobook.create(req.body)
        return res.status(200).send(photobook)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/photobook/:id', async(req, res) => {
    try{
        const photobook = await Photobook.findById(req.params.id).lean().exec()
        return res.status(200).send(photobook)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})

router.get('/photobooks', async(req, res) => {
    try{
        const page = req.query.page || 1
        const limit = req.query.limit || 8
        let totalPages = 0;
        let photobooks
        if(req.query.q) {
            if(req.query.q == 'sort')
            {
                photobooks = await Photobook.find().skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Photobook.find().countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
                photobooks = req.query.sort == 1 ? photobooks.sort((a,b) => (a.discount - b.discount)): photobooks.sort((a,b)=>(-a.discount + b.discount))

            } 
            else if(req.query.q == 'filter')
            {
                photobooks = await Photobook.find({name: req.query.base}).skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Photobook.find({name: req.query.base}).countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
            }
            else
                {
                    photobooks = await Photobook.find({block : req.query.block}).skip((page - 1) * limit).limit(limit).lean().exec()
                    const totalDocs = await Photobook.find({block : req.query.block}).countDocuments()
                    totolPages = (Math.ceil(totalDocs/limit))
                }
        }
        else{
            photobooks = await Photobook.find().skip((page - 1) * limit).limit(limit).lean().exec()
            const totalDocs = await Photobook.find().countDocuments()
            totalPages = (Math.ceil(totalDocs/limit))

        }
        let arr = []
        for(let i = 1; i<=totalPages; i++)
        {
            arr.push(i)

        }
        return res.status(200).send({photobooks, totalPages:arr})
    } catch (error) {
        return req.status(500).send({message : error.message})
    }
})
module.exports = router;

//sorting
//http://localhost:5000/photobooks?q=sort&sort=-1
//http://localhost:5000/photobooks?q=filter&base=handbooks
//http://localhost:5000/photobooks?q=search&block=8