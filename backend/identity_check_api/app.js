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
mongoose.connect("mongodb+srv://mongo:LTFp83gDy0nwW8Tl@cluster0.r6ftc5m.mongodb.net/identity_check?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Mongo db connected...");
});

//start listening
const PORT = process.env.APP_PORT || 8080;
app.listen(PORT);