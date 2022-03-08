const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema({

    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    productId: 
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"productModel"
    },
    amount: Number,
    isFreeAppUser: Boolean, 
    date: String
},
{timestamp:true})


module.exports= mongoose.model("Order",orderSchema)