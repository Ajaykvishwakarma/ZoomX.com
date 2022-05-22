const { Router } = require("express")
const { auth } = require('../middlewares/auth');

const router = Router()

const Address = require('../models/address.model');


router.post('/address', async (req, res) => {
    try{
        const address = await Address.create(req.body)
        return res.status(200).send(address)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/address/:id', async(req, res) => {
    try{
        const address = await Address.findById(req.params.id).lean().exec()
        return res.status(200).send(address)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})

router.get("/addresses", async (req, res) => {
  
    try{
        const address = await Address.find().lean().exec();

        return res.status(200).send({address});
    } catch (error){
        return res.status(500).send({message :error.message})
    }
});

router.delete("/address/:id", async (req, res) => {
    try {
      const address = await Address.findByIdAndDelete(req.params.id).lean().exec();
  
      res.status(200).send(address);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

module.exports = router;