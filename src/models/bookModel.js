const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({

    bookName : String,
    authorName : String,
    year : {type:Number, default : 2021 },
    tags : [],
    totalPages : Number,
    stockAvailable : Boolean,
    price :{
        indianPrice : Number,
        europeanPrice : Number
    }
},{timestamps:true});

module.exports=mongoose.model("Book1",bookSchema)