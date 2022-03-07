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
    let savedUsers = await userModel1.create(users)
    res.send({user:savedUsers})
}



module.exports.createUser=createUser;
module.exports.createProduct=createProduct;