const express = require('express');
const router = express.Router();
const authorModel = require("../models/authorModel")
const booksModel1 = require("../models/booksModel1")
const schemaController = require("../controllers/schemaController")

router.post("/createAuthor", schemaController.createAuthor)

router.post("/createBooks", schemaController.createBooks)

router.post("/bookList", schemaController.bookList)

router.post("/authorDetails", schemaController.authorDetails)

router.post("/authorsName", schemaController.authorsName)

module.exports = router;