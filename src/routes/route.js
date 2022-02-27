const express = require('express');
const router = express.Router();
const bookModel = require("../models/bookModal")
const bookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbook", bookController.createbook)

router.get("/getbookdata", bookController.getbookdata)

module.exports = router;