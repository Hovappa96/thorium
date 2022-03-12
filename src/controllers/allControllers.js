const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");


const createAuthor = async function (req, res) {
    try {
        let data = req.body;
        let savedata = await authorModel.create(data);
        res.status(200).send({ status: true, msg: savedata })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const createPublisher = async function (req, res) {
    try {
        let data = req.body
        let savedata = await publisherModel.create(data)
        res.status(200).send({ status: true, msg: savedata })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


const createBook = async function (req, res) {
    try {
        let data = req.body
        let data1 = req.body.author
        let data2 = req.body.publisher

        if (!data1) {
            res.status(400).send({ status: false, msg: "authorId is required" })
        }

        let authorId = await authorModel.findById(data1)
        if (!authorId) {
            res.status(404).send({ status: false, msg: "invalid author id" })
        }

        if (!data2) {
            res.status(400).send({ status: false, msg: "publisherId is required" })
        }

        let publisherId = await publisherModel.findById(data2)
        if (!publisherId) {
            res.status(404).send({ status: false, msg: "invalid publisher id" })
        }

        let createp = await bookModel.create(data)
        res.status(200).send({ status: true, msg: createp })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


const fetchbook = async function (req, res) {
    try {
        let book = await bookModel.find().populate("author", "publisher")
        res.status(200).send({ status: true, msg: book })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


const updateData = async function (req, res) {
    try {
        let search = await publisherModel.find({ publisher: { $in: ['Penguin', 'HarperCollins'] } }).select({ _id: 1 })
        let dataUpdate = await bookModel.updateMany({ publisher: search }, { isHardCover: true }, { new: true })
        res.status(200).send({ status: true, msg: dataUpdate })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const incPrice = async function (req, res) {
    try {
        let pricedata = await bookModel.updateMany({ ratings: { $gt: 3 } }, { $inc: { price: '10' } }, { new: true })
        res.status(200).send({ status: false, msg: pricedata })
    }

    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}







module.exports.createAuthor = createAuthor;
module.exports.createPublisher = createPublisher;
module.exports.createBook = createBook;
module.exports.fetchbook = fetchbook;
module.exports.updateData = updateData;
module.exports.incPrice = incPrice;