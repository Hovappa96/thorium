const express = require('express');
const router = express.Router();
const jsonwebtoken = require("jsonwebtoken")
const userController= require("../controllers/userController")
const tokenverifty = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.post("/userLogin", userController.userLogin)

router.get("/getUserDetails/:userId",tokenverifty.auth,userController.getUserDetails)

router.put("/updatedata/:userId",tokenverifty.auth, userController.updatedata)

router.delete("/deleteUser/:userId",tokenverifty.auth,userController.deleteUser)

module.exports = router;