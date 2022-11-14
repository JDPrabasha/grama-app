const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://grama2:kbUcgP6RhmLPiCrD@cluster.zrrt2to.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connected to mongodb");
});

module.exports = db;
