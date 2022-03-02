const mongoose = require("mongoose")

const authorsSchema=new mongoose.Schema({
    author_id:{
        type:Number,
        unique:true,
        required:true
    },
    author_name:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,
        unique:true,
        required:true
    },
    address:String,
},{timestamp:true})

module.exports= mongoose.model("Authors",authorsSchema);