const jwt = require("jsonwebtoken")


const authentication = function(req,res,next){
    let token = req.headers["x-auth-token"]
  if(!token)
  {
    res.send({status:false,data:"token is not provided in headers"})
  }

  let decodedToken = jwt.verify(token,"trainee at functionUp")
  if(!decodedToken)
  {
    res.send({status:false,msg:"invalid token"})
  }
  next()
}



const authorisation = function(req,res,next){
    let token = req.headers["x-auth-token"]

    let decodedToken = jwt.verify(token,"trainee at functionUp")

    let data1=decodedToken.userId;
    console.log(data1)
    let getData =req.params.userId;
    console.log(getData)
    if(data1 != getData)
    {
        res.send('logged in userId and requested UserId does not Matched')
    }

next()
}


module.exports = {authentication,authorisation}