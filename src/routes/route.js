const express = require('express');
const router = express.Router();
const jsonwebtoken = require("jsonwebtoken")
const userController= require("../controllers/userController")
const authentication = require("../middleware/auth")
const authorisation = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.post("/createLogin", userController.createLogin)

router.get("/getUser/:userId",authentication.authentication,authorisation.authorisation, userController.getUser)

router.put("/updatePosts/:userId/:posts",authentication.authentication,authorisation.authorisation, userController.updatePosts)

router.delete("/deleteUser/:userId",authentication.authentication,authorisation.authorisation, userController.deleteUser)

module.exports = router;
