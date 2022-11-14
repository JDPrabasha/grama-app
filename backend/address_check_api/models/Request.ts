const mongoose = require("mongoose");
const Schema = mongoose.Schema;

enum Status {
  PENDING = "Pending",
  CONFIRMED = "Confirmed",
  REJECTED = "Rejected",
  PROCESSING = "Processing",
  MISSING_INFO = "Missing Info",
}

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
    enum: Object.values(Status),
    default: Status.PENDING,
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
