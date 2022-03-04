const express = require('express');
const router = express.Router();
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const allControllers =require("../controllers/allControllers")

router.post("/createAuthor", allControllers.createAuthor);

router.post("/createPublisher", allControllers.createPublisher);

router.post("/createBook", allControllers.createBook)

router.get("/getBooks", allControllers.getBooks)

router.put("/updateKeys", allControllers.updateKeys)

module.exports = router;