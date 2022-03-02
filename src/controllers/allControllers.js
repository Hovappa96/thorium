const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createAuthor= async function(req,res){
    let data = req.body
    let saveddata = await authorModel.create(data)
    res.send({msg:saveddata})
}

const createPublisher = async function(req,res){
    let data1 = req.body
    let saveddata1 = await publisherModel.create(data1)
    res.send({msg:saveddata1})
}

const createBook = async function(req,res){
    let books = req.body
    let data3 = books.author
    let data4 = books.publisher

    // 1.condition
    if(!data3) return res.send("author deatils required")
    // let author1 =await bookModel.findById(books.author)
    // console.log(author1)
    // if(!author1)
    // return res.send("author details should required")

    // 2.condition
    let authorIds = await authorModel.findById(books.author)
    // console.log(authorIds)
    if(!authorIds)
    return res.send("no author is present with this id provide valid id")

    // 3.condition
    // console.log(!data4)
    if(!data4) return res.send("publisher details is required")


    // 4.condition
    let publisherIds = await publisherModel.findById(data4)
    // console.log(publisherIds)
    if(!publisherIds)
    return res.send("no publisher is present with this id provide valid id")

    let createdbooks = await bookModel.create(books)
    res.send({msg:createdbooks})

}

const getBooks = async function(req,res){
    let allbooks = await bookModel.find().populate("author publisher")
    res.send({msg:allbooks})
}



module.exports.createAuthor=createAuthor;
module.exports.createPublisher=createPublisher;
module.exports.createBook=createBook;
module.exports.getBooks=getBooks;