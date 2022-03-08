const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
// const auth = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.post("/userLogin", userController.userLogin)

router.get("/getUserDetails/:userId", userController.getUserDetails)

router.put("/updatedata/:userId", userController.updatedata)

router.delete("/deleteUser/:userId",userController.deleteUser)

module.exports = router;