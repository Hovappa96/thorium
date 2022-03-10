const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: 
    {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    mobile: {
        type: Number,
        unique: true,
        required: true
    },
    emailId: String,
    password:String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    age: Number,
    isDeleted: Boolean,default:false,
    posts:{type:[],default:[]}
}, { timestamps: true });

module.exports = mongoose.model('User5', userSchema) 