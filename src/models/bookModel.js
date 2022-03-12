const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:String,
	author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author12"
    },
	price:Number,
	ratings:Number,
    publisher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publisher12"
    },
    isHardCover:Boolean,default:false

}, { timestamps: true });


module.exports = mongoose.model('book12', bookSchema)
