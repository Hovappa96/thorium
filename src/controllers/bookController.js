const bookModel = require("../models/bookModal")

const createbook = async function(req,res){
    let data = req.body;
    let saveddata = await bookModel.create(data);
    res.send({msg:saveddata})
}


const getbookdata = async function(req, res){
    let allbook = await bookModel.find()
    res.send({msg:allbook})
}

module.exports.createbook = createbook;
module.exports.getbookdata = getbookdata;