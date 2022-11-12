"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Confirmed"] = "CONFIRMED";
    Status["Rejected"] = "REJECTED";
    Status["Processing"] = "PROCESSING";
    Status["MissingInfo"] = "MISSING_INFO";
})(Status || (Status = {}));
const requestSchema = new Schema({
    proof: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    status: {
        enum: Status,
        default: Status.Pending,
    },
    date: {
        type: Date,
    },
});
module.exports = mongoose.model("Request", requestSchema);
