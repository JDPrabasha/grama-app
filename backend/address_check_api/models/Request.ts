const mongoose = require("mongoose");
const Schema = mongoose.Schema;

enum Status {
  Pending = "PENDING",
  Confirmed = "CONFIRMED",
  Rejected = "REJECTED",
  Processing = "PROCESSING",
  MissingInfo = "MISSING_INFO",
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
    enum: Status,
    default: Status.Pending,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Request", requestSchema);
