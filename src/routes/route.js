const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController")
const authentication = require("../middlewares/auth")
const authorisation = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.post("/userLogin", userController.userLogin)

router.get("/getUser/:userId",authentication.authentication,authorisation.authorisation, userController.getUser)

router.put("/updatePosts/:userId/:posts",authentication.authentication,authorisation.authorisation, userController.updateposts)

router.delete("/deleteUser/:userId",authentication.authentication,authorisation.authorisation, userController.deleteUser)

module.exports = router;
 