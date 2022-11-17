const mongoose = require('mongoose');

const NicSchema = mongoose.Schema({ 
    fullName:String, 
    nic:String, 
    passport:String, 
    dob:Date, 
    gender:String, 
    occupation:String, 
    address:String,
    street:String,
    city:String,  
    issuedDate:Date
});

module.exports = mongoose.model('Citizen', NicSchema);