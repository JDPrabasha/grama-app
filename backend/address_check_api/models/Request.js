const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: String,
    default: "Pending",
  },

  policeVerification: {
    type: Boolean,
    default: false,
  },

  lastApprovalDate: {
    type: Date,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Request", requestSchema);
