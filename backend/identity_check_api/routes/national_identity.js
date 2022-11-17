const express = require('express');
const Citizen = require('../models/Citizen');
const Joi = require('@hapi/joi');
const router = express.Router();

//validation schema
const idSchema = Joi.object().keys({
    nicNumber: Joi.string().regex(/^([0-9]{9}[x|X|v|V]|[0-9]{12}|([N|D]|[OL]{2})[0-9]{7})$/).required(),
    address: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
});

router.get('/', async (req,res) => {
    try{
        const nics = await Citizen.find();
        res.json(nics);
    }catch{
        res.json({message:err});
    }
})

//submit a nic
router.post('/addPerson',async (req,res) => {
    const nic = new Citizen({
        fullName:req.body.fullName, 
        nic:req.body.nic, 
        passport:req.body.passport, 
        dob:req.body.dob, 
        gender:req.body.gender, 
        occupation:req.body.occupation, 
        address:req.body.address,
        street:req.body.street,
        city:req.body.city,
        issuedDate:req.body.issuedDate
    });

    try{
        const savedNic = await nic.save()
        res.json(savedNic);
    }catch(err){
        res.json({message: err});
    }
    
});

//find a specific nic by nic or passport number and the address
router.post('/', async (req,res) => {
    //validate the nic or passport
    const result = Joi.validate(req.body, idSchema);
    console.log('result',result);
    if(result.error){
        return res.status(400).json({message:'Invalid Format'});
    }else{
        try{
            const nic = await Citizen.find( { $or: [ { nic: req.body.nicNumber }, { passport : req.body.nicNumber } ],address: req.body.address, street: req.body.street, city: req.body.city } );
            if(nic.length>0){
                res.json({message:'Success',nic:nic[0].nic});
            }
            else{
                res.json({message:'fail'});
            }
        }catch(err){
            res.json({message:err});
        }
    }
});

//find a specific nic by nic or passport number and the address
// router.get('/:nicNumber/:address/:street/:city', async (req,res) => {
//     //validate the nic or passport
//     const result = Joi.validate(req.params, idSchema);
//     console.log('result',result);
//     if(result.error){
//         return res.status(400).json({message:'Invalid Format'});
//     }else{
//         try{
//             const nic = await Citizen.find( { $or: [ { nic: req.params.nicNumber }, { passport : req.params.nicNumber } ],address: req.params.address, street: req.params.street, city: req.params.city } );
//             if(nic.length>0){
//                 res.json({message:'Success',nic:nic[0].nic});
//             }
//             else{
//                 res.json({message:'fail'});
//             }
//         }catch(err){
//             res.json({message:err});
//         }
//     }
// });

module.exports = router;