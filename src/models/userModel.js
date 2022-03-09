const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName :String,
    lastName : String,
    mobile : {
        type:Number,
        required:true
    },
    emailId : String,
    password : String,
    gender : {
        type:String,
        enum:["male","female","others"]
    },
	isDeleted: Boolean,default:false, //default value is false 
    age : Number,
    posts:{type:[],default:[]}
},{timestamps:true})


module.exports=mongoose.model("User4",userSchema)