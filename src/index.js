const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const moment = require("moment");
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Hovappa96:Ew1mml9DEx33EJGg@cluster0.8bhyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



const middleWare = function(req,res){
    // let date = new Date()
    let date = moment().format("YYYY-MM-DD hh:mm:ss")
    let iPaddress = req.ip
    let url = req.originalUrl;

    console.log(date+' '+iPaddress+' '+url)
}


app.use(middleWare)

app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
