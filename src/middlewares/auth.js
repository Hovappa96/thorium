const jwt = require("jsonwebtoken")

const authentication = function(req,res,next){
    try{
    let token = req.headers["x-auth-token"]
    // console.log(token)
    if(!token)
    {
        res.status(404).send({status:false,msg:"token must required"})
    }
    let decodedToken = jwt.verify(token,"Welcome")
    if(!decodedToken)
    {
        res.send({stack:false,msg:"Token which you have provided is invalid"})
    }
}
catch(err)
{
    res.status(500).send({msg:"error",error:err.message})
}
next()
}


const authorisation = function(req,res,next){
    try{
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token,"Welcome")
    let data1 = decodedToken.userId;
    console.log(data1);
    let getData =req.params.userId;
    console.log(getData)
    if(data1 != getData)
    {
        res.status(203).send({status:false,msg:"Non-Authoritative Information"})
    }
}
catch(err)
{
    res.status(500).send({msg:"error",error:err.message})
}

next()
}


module.exports.authentication=authentication;
module.exports.authorisation=authorisation;