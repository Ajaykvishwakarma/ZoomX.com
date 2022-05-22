const { Router } = require("express")
const { auth } = require('../middlewares/auth');

const Calender = require('../models/calenders.model');

const router = Router()

router.post('/calender', async (req, res) => {
    try{
        const calender = await Calender.create(req.body)
        return res.status(200).send(calender)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/calender/:id',  async(req, res) => {
    try{
        const calender = await Calender.findById(req.params.id).lean().exec()
        return res.status(200).send(calender)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})

router.get('/calenders',  async(req, res) => {
    try{
        const page = req.query.page || 1
        const limit = req.query.limit || 8
        let totalPages = 0;
        let calenders
        if(req.query.q) {
            if(req.query.q == 'sort')
            {
                calenders = await Calender.find().skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Calender.find().countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
                calenders = req.query.sort == 1 ? calenders.sort((a,b) => (a.discount- b.discount)): calenders.sort((a,b)=>(-a.discount + b.discount))

            } 
            else if(req.query.q == 'filter')
            {
                calenders = await Calender.find({name: req.query.base}).skip((page - 1) * limit).limit(limit).lean().exec()
                const totalDocs = await Calender.find({name: req.query.base}).countDocuments()
                totalPages = (Math.ceil(totalDocs/limit))
            }
            else
                {
                    calenders = await Calender.find({block : req.query.block}).skip((page - 1) * limit).limit(limit).lean().exec()
                    const totalDocs = await Calender.find({block : req.query.block}).countDocuments()
                    totolPages = (Math.ceil(totalDocs/limit))
                }
            
          
        }
        else{
            calenders = await Calender.find().skip((page - 1) * limit).limit(limit).lean().exec()
            const totalDocs = await Calender.find().countDocuments()
            totalPages = (Math.ceil(totalDocs/limit))

        }
        let arr = []
        for(let i = 1; i<=totalPages; i++)
        {
            arr.push(i)

        }
        return res.status(200).send({calenders, totalPages:arr})
    } catch (error) {
        return req.status(500).send({message : error.message})
    }
})
module.exports = router;

//sorting
//http://localhost:5000/photobooks?q=sort&sort=-1
//http://localhost:5000/photobooks?q=filter&base=handbooks
//http://localhost:5000/photobooks?q=search&block=8