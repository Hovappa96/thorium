const userModel1= require("../models/userModel1")
const productModel = require("../models/productModel")
const orderModel= require("../models/orderModel")


//1.api
const createProduct = async function(req,res){
    let products = req.body
    let savedProducts = await productModel.create(products)
    res.send({product:savedProducts})
}

//2.api
const createUser = async function(req,res){
    let users= req.body
    let data1 = req.headers["isfreeappuser"]
    if(!data1){
        res.send("header is missing")
    }
    let savedUsers =await userModel1.create(users)
    res.send({user:savedUsers})
}

// 3.api

const createOrder = async function(req,res){
    let orders = req.body
    let uid=req.body.userId
    let pid = req.body.productId

    let data1 = req.headers["isfreeappuser"]
    if(!data1){
        res.send("header is missing")
    }
    let find1= await userModel1.find({uid:_id}).select({_id:1})
    console.log(find1)
    if(!find1){
        return res.send("userId is incorrect")
    }
    let find2= await productModel.find({pid:_id}).select({_id:1})
    if(!find2){
        return res.send("productId is incorrect")
    }
    let savedorders = await orderModel.create(orders)
    res.send({order:savedorders})
}

module.exports.createUser=createUser;
module.exports.createProduct=createProduct;
module.exports.createOrder=createOrder;