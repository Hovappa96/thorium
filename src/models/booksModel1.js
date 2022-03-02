const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    author_id:{
        type:Number,
        unique:true,
        required:true
    },
    price:Number,
    ratings:Number
},{timestamp:true})

module.exports=mongoose.model("booksAre", booksSchema);