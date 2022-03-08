// const express= require("express")
// const app = express();

// const auth = function(req,res,next){
//     let header= req.headers["x-Auth-token"]
//     if(!header){
//         return res.send("no token is present")
//     }
//     console.log(header)

//  //decoding token and verifying
//  let decodedToken= jwt.verify(header,"trainee at functionUp") 
//  if(!decodedToken){
//      return res.send({status:false,data:'no such user is available'})
//  }  
// }

// app.get(auth);