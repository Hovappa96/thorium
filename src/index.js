const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const router = require('./routes/route.js');
const moment = require("moment")
const request = require("request-ip")
const app = express();
app.use(request.mw({attributeName:'myIp'}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// const middleWare = function(req,res,next){
// console.log("Middleware is Running Perfectly")
// next()
// }

const middleWare = function (req,res,next){
    let ip = req.myIp
    console.log(moment().format("YYYY-MM-DD hh:mm:ss") +" "+ip+" "+req.originalUrl)
    next()
    }

app.use(middleWare);


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
