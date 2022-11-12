const express = require('express');
const Nic = require('../models/Nic');
const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const nics = await Nic.find();
        res.json(nics);
    }catch{
        res.json({message:err});
    }
})

//submit a nic
router.post('/',async (req,res) => {
    const nic = new Nic({
        fullName:req.body.fullName, 
        nic:req.body.nic, 
        passport:req.body.passport, 
        dob:req.body.dob, 
        gender:req.body.gender, 
        occupation:req.body.occupation, 
        permanentAddress:{
            address:req.body.address,
            street:req.body.street,
            city:req.body.city
        },  
        issuedDate:req.body.issuedDate
    });

    try{
        const savedNic = await nic.save()
        res.json(savedNic);
    }catch(err){
        res.json({message: err});
    }
    
});

//find a specific nic
router.get('/:nicNumber', async (req,res) => {
    try{
        const nic = await Nic.find({nic : req.params.nicNumber});
        res.json(nic);
    }catch(err){
        res.json({message:err});
    }
});

//find a specific nic by passposrt
router.get('/passport/:passport', async (req,res) => {
    try{
        const nic = await Nic.find({passport : req.params.passport});
        res.json(nic);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;