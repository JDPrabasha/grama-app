const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import routes
const idRoute = require('./routes/national_identity');

app.use('/nic', idRoute);

//routes
app.get('/', (req,res) => {
    res.send('Identity API');
})

//db connection
mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Mongo db connected...");
});

//start listening
const PORT = process.env.APP_PORT || 8080;
app.listen(PORT);