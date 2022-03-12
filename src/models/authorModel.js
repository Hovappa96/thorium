const mongoose = require("mongoose")


const authorSchema = new mongoose.Schema({
        authorName:String,
		age:Number,
		address:String,
        rating: Number

},{timeseries:true})

module.exports= mongoose.model("author12",authorSchema)