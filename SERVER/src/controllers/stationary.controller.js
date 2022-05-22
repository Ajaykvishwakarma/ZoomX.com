const { Router } = require("express")
const { auth } = require('../middlewares/auth');

const Stationary = require('../models/stationary.model');

const router = Router()

router.post('/stationary',  async (req, res) => {
    try{
        const stationary = await Stationary.create(req.body)
        return res.status(200).send(stationary)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/stationary/:id',  async(req, res) => {
    try{
        const stationary = await Stationary.findById(req.params.id).lean().exec()
        return res.status(200).send(stationary)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})

router.get('/stationarys',  async(req, res) => {
    try{
        const page = req.query.page || 1
        const limit = req.query.limit || 8
        let totalPages = 0;
        let stationarys
        if(req.query.q) {
            if(req.query.q == 'sort')
            {
                stationarys = await Stationary.find().skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Stationary.find().countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
                stationarys = req.query.sort == 1 ? stationarys.sort((a,b) => (a.discount - b.discount)): stationarys.sort((a,b)=>(-a.discount + b.discount))

            } 
            else if(req.query.q == 'filter')
            {
                stationarys = await Stationary.find({name: req.query.base}).skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Stationary.find({name: req.query.base}).countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
            }
            else
            {
                stationarys = await Stationary.find({block : req.query.block}).skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Stationary.find({block : req.query.block}).countDocuments()
                totolPages = (Math.ceil(totalDocs/limit))
            }
        }
        else{
            stationarys = await Stationary.find().skip((page - 1) * limit).limit(limit).lean().exec()
            const totalDocs = await Stationary.find().countDocuments()
            totalPages = (Math.ceil(totalDocs/limit))

        }
        let arr = []
        for(let i = 1; i<=totalPages; i++)
        {
            arr.push(i)

        }
        return res.status(200).send({stationarys, totalPages:arr})
    } catch (error) {
        return req.status(500).send({message : error.message})
    }
})
module.exports = router;

//sorting
//http://localhost:5000/photobooks?q=sort&sort=-1
//http://localhost:5000/photobooks?q=filter&base=handbooks
//http://localhost:5000/photobooks?q=search&block=8