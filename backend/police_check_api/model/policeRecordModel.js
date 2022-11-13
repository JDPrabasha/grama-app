const mongoose = require('mongoose')

const policeRecordSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    nic: {
        type: String,
        required: true,
        unique: true
    },
    crime: {
        type: Array,
        default: []
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('PoliceRecords', policeRecordSchema)