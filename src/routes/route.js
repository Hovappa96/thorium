const express = require('express');
const router = express.Router();
const app = express();
// const userModel1= require("../models/userModel1")
// const productModel = require("../models/productModel")
// const orderModel = require("../models/orderModel")
const allControllers = require("../controllers/allControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// const middleWare = function(req,res,next){
//     let data = req.headers["isfreeappuser"]
//     if(data != undefined){
//         console.log(data)
//     }
//     else{
//         res.send("header is missing")
//     }
//     next()
// }

// app.get(middleWare)




//new routers are this
router.post("/createUser", allControllers.createUser)
router.post("/createProduct", allControllers.createProduct)
router.post("/createOrder", allControllers.createOrder)









module.exports = router;