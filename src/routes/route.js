const express = require('express');
const router = express.Router();

const allControllers = require("../controllers/allControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", allControllers.createAuthor);

router.post("/createPublisher", allControllers.createPublisher)

router.post("/createBook", allControllers.createBook)

router.get("/fetchbook", allControllers.fetchbook)

module.exports = router;