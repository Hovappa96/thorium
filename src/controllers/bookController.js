const bookModel = require("../models/bookModel");

const createBook = async function(req, res){
    let data = req.body;
    let saveddata = await bookModel.create(data)
    res.send({msg:saveddata})
}

const getBookList = async function(req, res){
    let allBooks = await bookModel.find().select({bookName:1,authorName:1,_id:0}) 
    res.send({msg:allBooks})
}

const getBooksInYear = async function(req, res){
    let listOfBooks= await bookModel.find({year:2021})
    res.send({yearlist:listOfBooks})

}

const getXINRBooks = async function(req,res){
    let inrprice = await bookModel.find({"price.indianPrice":{$in:[100,200,500]}})
    res.send({inrbooks:inrprice})
}

const getRandomBooks = async function(req,res){
    let randonBook = await bookModel.find({$or:[{stackAvailable:true},{totalPages:{$gt:500}}]})
    res.send({randombooklist:randonBook})
}




module.exports.createBook=createBook;
module.exports.getBookList=getBookList;
module.exports.getBooksInYear=getBooksInYear;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;