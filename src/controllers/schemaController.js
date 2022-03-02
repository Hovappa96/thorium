const booksModel1 =require("../models/booksModel1");
const authorModel =require("../models/authorModel")

const createAuthor = async function(req,res){
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({Authors:savedData})
}

const createBooks = async function(req,res){
    let info=req.body
    let saved = await booksModel1.create(info)
    res.send({Books:saved})
}

const bookList = async function(req,res){
    let findbook = await authorModel.find({author_name:"Chetan Bhagat"})
    let id = findbook[0].author_id
    let booksname = await booksModel1.find({author_id:id}).select({name:1,_id:0})
    res.send({bkname:booksname})
}

const authorDetails = async function(req,res ){
    let findauthor = await booksModel1.find({name:"Two states"})
    let id = findauthor[0].author_id
    let authors = await authorModel.find({author_id:id}).select({author_name:1,_id:0})
    let bname = findauthor[0].name
    let updatedPrice = await booksModel1.findOneAndUpdate({name:bname}, {price:100},{new:true}).select({price:1, _id:0})
    res.send({authors,updatedPrice})

}

const authorsName =async function( req, res){
    let bookId = await booksModel1.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let id = bookId.map(inp => inp.author_id)
    // let allauthorname = id.map(x => {
    //     return authorModel.find({author_id:x}).select({author_name:1,_id:0})
    // })
    // res.send({msg:allauthorname})
    let temp = [];
    for(let i=0;i<id.length;i++){
        let x=id[i]
        let authorX= authorModel.find({author_id:x}).select({author_name:1,_id:0})
        temp.push(authorX)
    }
    const authorN = temp.flat();
    res.send({msg:authorN})
}
module.exports.createAuthor=createAuthor;
module.exports.createBooks=createBooks;
module.exports.bookList=bookList;
module.exports.authorDetails = authorDetails;
module.exports.authorsName=authorsName;