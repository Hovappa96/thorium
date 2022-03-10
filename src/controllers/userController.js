const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const authentication = require("../middlewares/auth")
const authorisation = require("../middlewares/auth")

// 1.api
const createUser= async function (req, res) {
    try{

    let data= req.body
    if(Object.keys(data).length != 0){
    let savedData= await userModel.create(data)
    res.status(201).send({msg: savedData})
    }
    else{
        res.status(400).send({status:true,msg:"Bad Request"})

    }
} 


catch (err)
{
    res.status(500).send({msg:"error",error:err.message})
}

}

// 2.api
const userLogin= async function (req, res) {
    try{
    let userData1 = req.body.emailId;
    let userData2 = req.body.password;
    let checkData = await userModel.findOne({emailId:userData1,password:userData2})
    if(!checkData)
    {
        res.status(404).send({status:false,msg:"Not found"})
    }

    //create token 
    let geneToken = jwt.sign({userId:checkData._id.toString()},"Welcome")
    res.status(202).send({status:true,Token:geneToken})
    }
    catch (err){
        res.status(500).send({msg:"error",error:err.message})
    }
}



//3.api
const getUser = async function(req,res){
    try {
    let getData =req.params.userId;
    let getData2 = await userModel.findById(getData)
    if(!getData2)
    {
        res.status(400).send({status:false,msg:"Not Found"})
    }
    res.send({status:true,getDetails:getData2})
  }
  catch (err){
      res.status(500).send({msg:"error",error:err.message})
  }
}
  // 4.api
const updateposts = async function(req,res){
    try{
    let getData =req.params.userId;
    let data3 = req.body.message; 
    let updated = await userModel.findById(getData)
    isupdated = updated.posts;
    isupdated.push(data3)
    let updateddData = await userModel.findOneAndUpdate({_id:getData},{posts:isupdated},{upsert:true,new:true}) 
    res.status(205).send({status:true,msg:updateddData})
  }
  catch(err){
      res.status(500).send({msg:"error",error:err.message})
  }
   
}
  //5.api
  const deleteUser = async function(req,res){
      try{
    let data =req.params.userId;
    let deleteData = await userModel.findOneAndUpdate({_id:data},{isDeleted:true},{new:true})
    res.status(205).send({status:true,deleted:deleteData})
  }
  catch(err)
  {
      res.status(500).send({msg:"error",error:err.message})
  }


  }
  

module.exports.createUser=createUser;
module.exports.userLogin=userLogin;
module.exports.getUser=getUser
module.exports.updateposts=updateposts;
module.exports.deleteUser=deleteUser;