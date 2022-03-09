const jwt= require("jsonwebtoken")
const auth = function(req,res,next){
    let header= req.headers["x-auth-token"]
    console.log(header)
    if(!header)
    {
        return res.send({status:false,msg:"token must present"})
    }
    
 //decoding token and verifying
 let decodedToken= jwt.verify(header,"Trainee at FunctionUp") 
 if(!decodedToken)
 {
     return res.send({status:false,data:'no such user is available'})
 }  
 next()
}

module.exports.auth=auth;