const { Router } = require("express")
const { auth } = require('../middlewares/auth');

const Bestseller = require('../models/bestseller.model');

const router = Router()

router.post('/bestseller', async (req, res) => {
    try{
        const bestseller = await Bestseller.create(req.body)
        return res.status(200).send(bestseller)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/bestseller/:id',  async(req, res) => {
    try{
        const bestseller = await Bestseller.findById(req.params.id).lean().exec()
        return res.status(200).send(bestseller)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})

router.get('/bestsellers', async(req, res) => {
    try{
        const page = req.query.page || 1
        const limit = req.query.limit || 8
        let totalPages = 0;
        let bestsellers
        if(req.query.q) {
            if(req.query.q == 'sort')
            {
                bestsellers = await Bestseller.find().skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Bestseller.find().countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
                bestsellers = req.query.sort == 1 ? bestsellers.sort((a,b) => (a.discount - b.discount)): bestsellers.sort((a,b)=>(-a.discount + b.discount))

            } 
            else if(req.query.q == 'filter')
                {
                    bestsellers = await Bestseller.find({name : req.query.base}).skip((page - 1) * limit).limit(limit).lean().exec()
                    const totalDocs = await Bestseller.find({name : req.query.base}).countDocuments()
                    totolPages = (Math.ceil(totalDocs/limit))
                }
            else
                {
                    bestsellers = await Bestseller.find({block : req.query.block}).skip((page - 1) * limit).limit(limit).lean().exec()
                    const totalDocs = await Bestseller.find({block : req.query.block}).countDocuments()
                    totolPages = (Math.ceil(totalDocs/limit))
                }
            
        }
        else{
            bestsellers = await Bestseller.find().skip((page - 1) * limit).limit(limit).lean().exec()
            const totalDocs = await Bestseller.find().countDocuments()
            totalPages = (Math.ceil(totalDocs/limit))

        }
        let arr = []
        for(let i = 1; i<=totalPages; i++)
        {
            arr.push(i)

        }
        return res.status(200).send({bestsellers, totalPages:arr})
    } catch (error) {
        return req.status(500).send({message : error.message})
    }
})
module.exports = router;

//sorting
//http://localhost:5000/photobooks?q=sort&sort=-1
//http://localhost:5000/photobooks?q=filter&base=handbooks
//http://localhost:5000/photobooks?q=search&block=8