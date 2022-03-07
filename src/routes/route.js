const express = require('express');
const router = express.Router();
// const userModel1= require("../models/userModel1")
// const productModel = require("../models/productModel")
// const orderModel = require("../models/orderModel")
const allControllers = require("../controllers/allControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//new routers are this
router.post("/createUser", allControllers.createUser)
router.post("/createProduct", allControllers.createProduct)









module.exports = router;