const mongoose = require("mongoose");
const Schema = mongoose.Schema;

enum Status {
  Pending = "PENDING",
  Confirmed = "CONFIRMED",
  Rejected = "REJECTED",
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
  },
});
